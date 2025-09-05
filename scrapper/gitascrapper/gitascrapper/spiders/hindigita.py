import scrapy
from gitascrapper.items import GitascrapperItem
from collections import OrderedDict
class HindigitaSpider(scrapy.Spider):
    name = "hindigita"
    allowed_domains = ["www.holy-bhagavad-gita.org"]
    custom_settings = {
        'FEEDS': { 'data1.csv': { 'format': 'csv',}}
        }
    def start_requests(self):
        url = 'https://www.holy-bhagavad-gita.org/chapter/1/verse/1/hi'
        yield scrapy.Request(url, callback=self.parse)
    def parse(self, response):
        page=response.xpath("/html/body/div[2]/div/div")
        stanza = GitascrapperItem()
        stanza['chapter_verse']=page.xpath("article/h1/text()").get()
        stanza['hindi_shloka']=page.xpath("article/div/div[1]/div[1]/p").get()
        stanza['hindi_def']=response.xpath("//span[contains(@class, 'verseShort')]/following-sibling::text()[1]").get()
        yield stanza
        next_page = page.xpath('//a[@class="next"]/@href').get()
        print(next_page)
        if len(next_page)<=14 :
            yield response.follow(next_page, callback=self.parsechapter)
        elif next_page:
            yield response.follow(next_page, callback=self.parse)
        
    def parsechapter(self, response):
        page=response.xpath("/html/body/div[2]/div/div/article/div/div[2]/section[1]/h2/a/@href").get()
        yield response.follow(page, callback=self.parse)
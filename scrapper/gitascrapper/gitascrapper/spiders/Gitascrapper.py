import scrapy
from gitascrapper.items import GitascrapperItem
from collections import OrderedDict
class GitascrapperSpider(scrapy.Spider):
    name = "Gitascrapper"
    allowed_domains = ["www.holy-bhagavad-gita.org"]
    custom_settings = {
        'FEEDS': { 'data.csv': { 'format': 'csv',}}
        }
    def start_requests(self):
        url = 'https://www.holy-bhagavad-gita.org/chapter/1/verse/1'
        yield scrapy.Request(url, callback=self.parse)
    def parse(self, response):
        page=response.xpath("/html/body/div[2]/div/div")
        stanza = GitascrapperItem()
        stanza['chapter_verse']=page.xpath("article/h1/text()").get()
        stanza['sanskrit_shloka']=page.xpath("article/div/div[1]/div[1]/p").extract()
        stanza['eng_shloka']=page.xpath("article/div/div[1]/div[2]/p").get()
        stanza['eng_def']=page.xpath("article/div/div[2]/p").get()
        a=OrderedDict()
        x=page.xpath("article/div/div[1]/div[4]/a")
        for i in range(1,len(x)+1):
            y=page.xpath("article/div/div[1]/div[4]/a["+str(i)+"]/text()").get()
            z=page.xpath("article/div/div[1]/div[4]/span["+str(i)+"]/text()").get()
            a[y]=z
        stanza['eng_dict']=a
        yield stanza
        next_page = page.xpath('//a[@class="next"]/@href').get()
        print(next_page)
        if len(next_page)<=11 :
            yield response.follow(next_page, callback=self.parsechapter)
        elif next_page:
            yield response.follow(next_page, callback=self.parse)
        
    def parsechapter(self, response):
        page=response.xpath("/html/body/div[2]/div/div/article/div/div[2]/section[1]/h2/a/@href").get()
        yield response.follow(page, callback=self.parse)
# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class GitascrapperItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    chapter_verse = scrapy.Field()
    sanskrit_shloka = scrapy.Field()
    eng_shloka = scrapy.Field()
    eng_def=scrapy.Field()
    eng_dict=scrapy.Field()
    # hindi_shloka = scrapy.Field()
    # hindi_def = scrapy.Field()
    # telugu_shloka = scrapy.Field()
    # telugu_def = scrapy.Field()
    pass

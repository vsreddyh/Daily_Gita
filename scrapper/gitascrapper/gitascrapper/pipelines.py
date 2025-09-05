# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from collections import OrderedDict

class GitascrapperPipeline:
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)

        ## Strip all whitespaces from strings
        field_names = adapter.field_names()
        for field_name in field_names:
            value = adapter.get(field_name)
            if value is not None:
                if(field_name=="eng_def"):
                    g=0
                    value=value.replace("<p>","")
                    value=value.replace("</p>","")
                    for x in range(len(value)):
                        if value[x]=='<' and value[x:x+5]=="<span" :
                            g=x
                        if value[x]==":" and value[x:x+8]==':</span>':
                            value=value.replace(value[g:x+8],"")
                            break
                    value = value[4:-4]
                    value = value.replace("<i>","")
                    value = value.replace("</i>","")
                if(field_name=="chapter_verse"):
                    x=""
                    if(value[24]==','):
                        x+=value[23]
                    else:
                        x+=value[23:25]
                    x+="."
                    if(value[-5].isnumeric()):
                        x+=value[-5:]
                    elif(value[-4].isnumeric()):
                        x+=value[-4:]
                    elif(value[-3].isnumeric()):
                        x+=value[-3:]
                    elif(value[-2].isnumeric()):
                        x+=value[-2:]
                    elif(value[-1].isnumeric()):
                        x+=value[-1:]
                    value=x
                if(field_name=="eng_shloka" or field_name=="hindi_shloka" or field_name=="telugu_shloka"):
                    value = value[3:-4]
                    value = value.replace("<br>"," \n ")
                if(field_name=="sanskrit_shloka"):
                    if type(value)==list:
                        for x in range(len(value)):
                            value[x]=value[x][3:-4]
                            value[x] = value[x].replace("<br>","")
                            for y in range(len(value[x])):
                                if value[x][-2:]=='||':
                                    value[x]=value[x]+'\n'
                                elif value[x][y]=='|' and value[x][y-1]!='|' and y<len(value[x])-1 and value[x][y+1]!='|':
                                    value[x]=value[x][:y+1]+'\n'+value[x][y+1:]
                    else:
                        value=value[3:-4]
                        value[x] = value[x].replace("<br>","")
                        for y in range(len(value)):
                            if value[y]=='|' and value[y-1]!='|' and value[y+1] and value[y+1]!='|':
                                value=value[:y+1]+'\n'+value[y+1:]
                            elif value[-2:]=='||':
                                value=value+'\n'
                    k=""
                    value=k.join(value)
                if field_name!="eng_dict": 
                    adapter[field_name] = value.strip()
                if field_name=="chapter_verse":
                    adapter[field_name] = str(value)
        return item

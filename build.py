import json
src=open('page_src.html',encoding='utf-8').read()
src=src.replace('/*DATA*/',open('data.json',encoding='utf-8').read())
src=src.replace('/*CONTENT*/',open('content.js',encoding='utf-8').read())
src=src.replace('/*APP*/',open('app.js',encoding='utf-8').read())
open('page_raw.html','w',encoding='utf-8').write(src)
print('wrote page_raw.html', len(src)//1024, 'KB')

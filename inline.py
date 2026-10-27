import re, requests, base64, hashlib, os, sys
from urllib.parse import urljoin
UA={'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) Chrome/120'}
def fetch(url):
    fn='vendor/'+hashlib.md5(url.encode()).hexdigest()
    if not os.path.exists(fn):
        r=requests.get(url,headers=UA,timeout=60,allow_redirects=True); r.raise_for_status()
        open(fn,'wb').write(r.content); open(fn+'.url','w').write(r.url+'\n'+r.headers.get('content-type',''))
    final,ct=open(fn+'.url').read().split('\n')[:2]
    return open(fn,'rb').read(), final, ct
MIME={'png':'image/png','gif':'image/gif','svg':'image/svg+xml','woff2':'font/woff2','woff':'font/woff','ttf':'font/ttf','eot':'application/vnd.ms-fontobject','jpg':'image/jpeg','cur':'image/x-icon'}
report=[]
def inline_css(css, base):
    # drop truetype/eot/svg font fallbacks when woff2/woff exists
    css=re.sub(r',\s*url\([^)]*\.(ttf|eot|svg)[^)]*\)\s*format\([^)]*\)','',css)
    def rep(m):
        u=m.group(1).strip('\'" ')
        if u.startswith('data:') or u.startswith('#') or not u: return m.group(0)
        full=urljoin(base,u); path=full.split('?')[0].split('#')[0]; ext=path.rsplit('.',1)[-1].lower()
        try:
            data,_,ct=fetch(full)
        except Exception as e:
            report.append(f'  ! css asset failed {full}: {e}'); return 'url()'
        mime=MIME.get(ext,ct.split(';')[0] or 'application/octet-stream')
        return f'url("data:{mime};base64,{base64.b64encode(data).decode()}")'
    return re.sub(r'url\(([^)]+)\)',rep,css)
src=open(sys.argv[1],encoding='utf-8').read()
def rs(m):
    url=m.group(1); data,final,_=fetch(url); js=data.decode('utf-8')
    js=js.replace('</script','<\\/script')
    report.append(f'  js  {len(data)//1024:4d} KB {final}')
    return f'<script>/* inlined: {final} */\n{js}\n</script>'
src=re.sub(r'<script src="(https?://[^"]+)"\s*>\s*</script>',rs,src)
def rl(m):
    url=m.group(1); data,final,_=fetch(url); css=inline_css(data.decode('utf-8'),final)
    report.append(f'  css {len(css)//1024:4d} KB {final}')
    return f'<style>/* inlined: {final} */\n{css}\n</style>'
src=re.sub(r'<link rel="stylesheet" href="(https?://[^"]+)"\s*/?>',rl,src)
# Leaflet default marker icon (used by geocoder result marker) as data URIs
icons={}
for n in ['marker-icon.png','marker-icon-2x.png','marker-shadow.png']:
    d,_,_=fetch('https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/images/'+n); icons[n]='data:image/png;base64,'+base64.b64encode(d).decode()
fix=f"""<script>L.Icon.Default.imagePath='';L.Icon.Default.mergeOptions({{iconUrl:'{icons['marker-icon.png']}',iconRetinaUrl:'{icons['marker-icon-2x.png']}',shadowUrl:'{icons['marker-shadow.png']}'}});</script>"""
# insert right after leaflet.js inline block
i=src.index('/* inlined: https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js */'); j=src.index('</script>',i)+len('</script>')
src=src[:j]+'\n'+fix+src[j:]
open(sys.argv[2],'w',encoding='utf-8').write(src)
print('\n'.join(report))
left=re.findall(r'(?:src|href)="(https?://[^"]+)"',src)
print('remaining external src/href:',left)
print('size KB',len(src.encode())//1024)

(function(){
var D=window.ZHD, isMob=function(){return window.innerWidth<768;};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function outCN(lng,lat){return lng<72.004||lng>137.8347||lat<0.8293||lat>55.8271;}
function tLat(x,y){var r=-100+2*x+3*y+0.2*y*y+0.1*x*y+0.2*Math.sqrt(Math.abs(x));r+=(20*Math.sin(6*x*Math.PI)+20*Math.sin(2*x*Math.PI))*2/3;r+=(20*Math.sin(y*Math.PI)+40*Math.sin(y/3*Math.PI))*2/3;r+=(160*Math.sin(y/12*Math.PI)+320*Math.sin(y*Math.PI/30))*2/3;return r;}
function tLng(x,y){var r=300+x+2*y+0.1*x*x+0.1*x*y+0.1*Math.sqrt(Math.abs(x));r+=(20*Math.sin(6*x*Math.PI)+20*Math.sin(2*x*Math.PI))*2/3;r+=(20*Math.sin(x*Math.PI)+40*Math.sin(x/3*Math.PI))*2/3;r+=(150*Math.sin(x/12*Math.PI)+300*Math.sin(x/30*Math.PI))*2/3;return r;}
function w2g(lng,lat){if(outCN(lng,lat))return [lng,lat];var a=6378245.0,ee=0.00669342162296594323;var dLat=tLat(lng-105,lat-35),dLng=tLng(lng-105,lat-35);var rad=lat/180*Math.PI,m=Math.sin(rad);m=1-ee*m*m;var sm=Math.sqrt(m);dLat=(dLat*180)/((a*(1-ee))/(m*sm)*Math.PI);dLng=(dLng*180)/(a/sm*Math.cos(rad)*Math.PI);return [lng+dLng,lat+dLat];}
function nav(ll,name,mode){var n=encodeURIComponent(name),g=w2g(ll[1],ll[0]);
 return '<div class="navb"><a target="_blank" rel="noopener" href="https://uri.amap.com/navigation?to='+g[0].toFixed(6)+','+g[1].toFixed(6)+','+n+'&mode='+(mode||'car')+'&callnative=1&src=zhairshow">高德导航</a>'+
 '<a class="lt" target="_blank" rel="noopener" href="https://uri.amap.com/marker?position='+ll[1].toFixed(6)+','+ll[0].toFixed(6)+'&name='+n+'&coordinate=wgs84&callnative=1&src=zhairshow">高德查看</a>'+
 '<a class="bd" target="_blank" rel="noopener" href="https://api.map.baidu.com/marker?location='+ll[0].toFixed(6)+','+ll[1].toFixed(6)+'&title='+n+'&content='+n+'&output=html&coord_type=wgs84&src=webapp.frz.zhairshow">百度地图</a></div>';}
function llOf(k){var p=POI[k];return D.P[p.p||k]||D.P[k];}

var map=L.map('map',{zoomControl:true}).setView([23.5,114.2],7);
var OSM=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'});
var ESRI=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri'});
var SAT=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri'});
(location.protocol==='file:'?ESRI:OSM).addTo(map);
L.control.layers({'标准地图（OSM）':OSM,'街道图（Esri）':ESRI,'卫星影像（Esri）':SAT},null,{position:'topright'}).addTo(map);
L.control.scale({imperial:false}).addTo(map);

var G={all:L.layerGroup(),'12':L.layerGroup(),'13':L.layerGroup(),'14':L.layerGroup(),stay:L.layerGroup()};
var BND={all:L.latLngBounds([]),'12':L.latLngBounds([]),'13':L.latLngBounds([]),'14':L.latLngBounds([]),stay:L.latLngBounds([])};

function pinIcon(p,c){var big=p.kind==='venue'?' big':'';
 return L.divIcon({className:'',html:'<div class="pin'+big+(p.kind==='ref'?' ref':'')+(p.kind==='hotel'?' hotel':'')+'" style="background:'+c+'">'+esc(p.num)+'</div>',iconSize:[30,30],iconAnchor:[15,15],popupAnchor:[0,-12]});}
function popup(k){var p=POI[k],ll=llOf(k),approx=(D.approx||[]).indexOf(p.p||k)>=0;
 var h='<div class="pp"><h4>'+esc(p.n)+'</h4><div class="t">'+p.t+'</div>';
 if(approx)h+='<div class="r warn">📍 坐标为近似 / 示意</div>';
 if(p.a)h+='<div class="r"><b class="l">位置</b>'+esc(p.a)+'</div>';
 if(p.do)h+='<div class="r"><b class="l">做什么</b>'+p.do+'</div>';
 if(p.tips)h+='<div class="r"><b class="l">提示</b>'+p.tips+'</div>';
 if(p.w)h+='<div class="r warn">⚠ '+p.w+'</div>';
 h+=nav(ll,p.n.replace(/（.*?）/g,'').split('·')[0].trim());
 return h+'</div>';}

var PM={};
Object.keys(POI).forEach(function(k){var p=POI[k],ll=llOf(k);if(!ll)return;
 var c=DAYC[p.day]||DAYC.all;
 if(p.kind==='hotel'||p.day==='stay')c=DAYC.stay;
 if(p.kind==='ref')c='#8D6E63';
 if(p.kind==='venue')c=DAYC['13'];
 var m=L.marker(ll,{icon:pinIcon(p,c),zIndexOffset:p.kind==='venue'?1200:(p.kind==='ref'?400:900)});
 m.bindPopup(popup(k),{maxWidth:320,autoPanPaddingTopLeft:[10,60]});
 m.bindTooltip(p.n,{direction:'top',offset:[0,-14]});
 PM[k]=m;
 var days=[p.day];
 if(k==='gzs')days=['12','13','14'];
 if(k==='zhs')days=['12','13','stay'];
 if(k==='can')days=['12','14'];
 if(k==='hgh')days=['12','14'];
 days.forEach(function(d){
  if(!G[d])return;
  var mm=L.marker(ll,{icon:pinIcon(p,DAYC[d]||c),zIndexOffset:p.kind==='venue'?1200:900});
  mm.bindPopup(popup(k),{maxWidth:320});mm.bindTooltip(p.n,{direction:'top',offset:[0,-14]});
  mm.addTo(G[d]);BND[d].extend(ll);
  if(d==='stay'||p.kind==='hotel'){/* already */}
 });
 m.addTo(G.all);BND.all.extend(ll);
 if(p.day==='stay'||p.kind==='hotel'){m.addTo(G.stay);BND.stay.extend(ll);}
});
/* hotel-rank targets on stay filter (incl. 金湾=航展附近) */
['zhs','changlong','hengqin','airshow'].forEach(function(k){
 var ll=D.P[k],p=POI[k];if(!ll||!p)return;
 var mm=L.marker(ll,{icon:pinIcon((function(){var r=p.num;for(var i=0;i<HOTELS.length;i++)if(HOTELS[i].id===k){r=String(HOTELS[i].rank);break;}return Object.assign({},p,{num:r,kind:'hotel'});})(),DAYC.stay),zIndexOffset:1000});
 mm.bindPopup(popup(k),{maxWidth:320});mm.bindTooltip('住宿 · '+p.n,{direction:'top',offset:[0,-14]});
 mm.addTo(G.stay);BND.stay.extend(ll);
});

function addRoute(key,color,dash,weight,groups){
 var r=D.routes[key];if(!r)return;
 var pl=L.polyline(r.g,{color:color,weight:weight||5,opacity:.85,dashArray:dash||null}).bindTooltip(r.note,{sticky:true});
 groups.forEach(function(g){var copy=L.polyline(r.g,{color:color,weight:weight||5,opacity:.85,dashArray:dash||null}).bindTooltip(r.note,{sticky:true});copy.addTo(G[g]);BND[g].extend(copy.getBounds());});
 pl.addTo(G.all);BND.all.extend(pl.getBounds());
}
addRoute('d12_flight',DAYC.flight,'8,10',3,['12']);
addRoute('d12_train',DAYC['12'],null,5,['12']);
addRoute('d13_chain',DAYC['13'],null,5,['13']);
addRoute('d13_walk',DAYC['13'],'2,8',4,['13']);
addRoute('d13_back','#6A1B9A','10,8',4,['13']);
addRoute('d14_flight',DAYC['14'],'8,10',3,['14']);

/* ---------- sidebar HTML ---------- */
function poiRow(k,extra){var p=POI[k];if(!p)return '';
 return '<div class="tli poi" data-poi="'+k+'"><span class="num" style="background:'+(DAYC[p.day]||DAYC.all)+'">'+p.num+'</span><span class="nm">'+esc(p.n)+'</span>'+(extra?'<div class="mt">'+extra+'</div>':'')+(p.tips?'<div class="mt">'+p.tips+'</div>':'')+'</div>';}

function overviewHtml(){
 var h='<div class="card" style="background:#f7f9ff"><b>行程总览</b> · 2 成人 · 杭州出发（飞机）· 不住广州首晚<br>';
 h+='<span style="color:'+DAYC['12']+'">● 12/12</span> HGH → CAN（参考 MU5211）→ 广州南 → 广珠城际 → 珠海站附近住一晚<br>';
 h+='<span style="color:'+DAYC['13']+'">● 12/13</span> 珠机城际 → 珠海机场站 3 号口 → 步行约 300 m → 航展中心 · 约 16:00 离场 → 晚回广州<br>';
 h+='<span style="color:'+DAYC['14']+'">● 12/14</span> 广州 → 杭州航班 <span class="tbd">班次待选</span><br>';
 h+='展期 12/7–12/13 · 公众日 12/11–12/13 · 本次观展 <b>12/13</b></div>';
 h+='<div class="card bk" style="--c:'+DAYC['12']+';cursor:pointer" data-go="12"><b style="color:'+DAYC['12']+'">12日抵达</b><br><span class="mt" style="font-size:12.5px;color:#555">萧山 → 白云 → 广州南 → 珠海站</span></div>';
 h+='<div class="card bk" style="--c:'+DAYC['13']+';cursor:pointer" data-go="13"><b style="color:'+DAYC['13']+'">13日观展</b><br><span class="mt" style="font-size:12.5px;color:#555">珠机城际 → 航展中心 · 半天/全天路线 · 16:00 离场</span></div>';
 h+='<div class="card bk" style="--c:'+DAYC['14']+';cursor:pointer" data-go="14"><b style="color:'+DAYC['14']+'">14日返程</b><br><span class="mt" style="font-size:12.5px;color:#555">广州 → 杭州</span></div>';
 h+='<div class="card bk" style="--c:'+DAYC.stay+';cursor:pointer" data-go="stay"><b style="color:'+DAYC.stay+'">住宿区域</b><br><span class="mt" style="font-size:12.5px;color:#555">珠海站 &gt; 长隆 &gt; 横琴 &gt; 金湾</span></div>';
 h+='<div class="card"><h3>图上怎么走</h3>点左侧天数筛选；点时间轴条目可定位。折线：橙色广珠城际、红色珠机城际+步行、紫色晚间回广州、青色虚线航班示意。</div>';
 h+='<div class="note">'+esc(D.meta.note)+'</div>';
 return h;
}
function day12Html(){
 var h='<div class="sep" style="color:'+DAYC['12']+'">12/12 周六 · 出发抵达</div><div class="tl" style="--c:'+DAYC['12']+'">';
 h+='<div class="tli mv"><span class="tm">上午</span><span>杭州萧山起飞 → 广州白云</span><div class="mt">推荐 <b>MU5211</b> 约 ¥450/人 <span class="ref">参考价</span></div></div>';
 h+=poiRow('hgh');
 h+=poiRow('can','出机场转广州南站');
 h+='<div class="tli mv"><span class="tm">午后</span><span>机场 → <b>广州南站</b> → 广珠城际</span></div>';
 h+=poiRow('gzs');
 h+=poiRow('zhs','入住珠海（首选本站周边）');
 h+='<div class="tli mv"><span class="tm">晚上</span><span>早休息，备好身份证与大麦电子票</span></div>';
 h+='</div><div class="card"><h3>换乘要点</h3>飞机不自驾。白云到广州南可用地铁/城际/网约车，航展旺季预留延误缓冲。广珠城际票提前买。</div>';
 return h;
}
function day13Html(){
 var h='<div class="sep" style="color:'+DAYC['13']+'">12/13 周日 · 观展日</div><div class="tl" style="--c:'+DAYC['13']+'">';
 h+='<div class="tli mv"><span class="tm">早上</span><span>住处 → <b>珠机城际</b> → 珠海机场站</span></div>';
 h+=poiRow('zhrail','3 号口出站');
 h+=poiRow('airshow','步行约 300 m → 1 号门 · 尽早安检');
 h+='<div class="tli mv"><span class="tm">白天</span><span>静态展 + 飞行表演 + 室内馆（见「观展」页）</span></div>';
 h+='<div class="tli mv"><span class="tm">~16:00</span><span class="warn">离场</span><span> 避开散场高峰</span></div>';
 h+=poiRow('gzstay','晚上返回广州住宿');
 h+='</div>';
 h+='<div class="two-box"><div class="box"><h4>半天版（精华）</h4><ol style="margin:6px 0 0 18px;padding:0;font-size:13px;line-height:1.6"><li>早到拍静态展</li><li>占位看飞行表演主时段</li><li>挑一个室内馆</li><li>~16:00 离场</li></ol></div>';
 h+='<div class="box"><h4>全天版（尽兴）</h4><ol style="margin:6px 0 0 18px;padding:0;font-size:13px;line-height:1.6"><li>开门入场，人少拍静态</li><li>上/中午看表演</li><li>午后逐馆逛</li><li>仍建议 ~16:00 走</li></ol></div></div>';
 h+='<div class="note">飞行具体时段 <span class="tbd">2026 日程待官方公布</span> · 金凤台/莲洲为往届参考，本行程 <span class="tbd">待确认</span></div>';
 return h;
}
function day14Html(){
 var h='<div class="sep" style="color:'+DAYC['14']+'">12/14 周一 · 返程</div><div class="tl" style="--c:'+DAYC['14']+'">';
 h+='<div class="tli mv"><span class="tm">白天</span><span>广州市区 → 白云机场 → 杭州</span><div class="mt">航班 <span class="tbd">班次待选</span></div></div>';
 h+=poiRow('can14');
 h+=poiRow('hgh14');
 h+='</div><div class="card"><h3>时间预留</h3>广州市区到白云机场高峰可能较久；值机安检按航司要求提前到达。不要卡太紧。</div>';
 return h;
}
function stayHtml(){
 var h='<div class="sep" style="color:'+DAYC.stay+'">12/12 珠海住一晚 · 区域优先级</div><div class="tl" style="--c:'+DAYC.stay+'">';
 HOTELS.forEach(function(x){
  h+='<div class="tli poi" data-poi="'+x.id+'"><span class="num" style="background:'+x.c+'">'+x.rank+'</span><span class="nm">'+esc(x.n)+'</span><div class="mt">'+x.why+'</div></div>';
 });
 h+='</div><div class="card warn-box"><b>横琴注意</b>：横琴站正常开通；<b>横琴北站暂停</b>——买票别买错。12/13 晚不住珠海，回广州。</div>';
 h+='<div class="note">本页只标区域，不推荐具体酒店（未逐家核实）。</div>';
 return h;
}
function legendHtml(){
 return '<div class="legend"><b>图例</b><br>'+
  '<span style="color:'+DAYC['12']+'">■ 12日</span> <span style="color:'+DAYC['13']+'">■ 13日</span> <span style="color:'+DAYC['14']+'">■ 14日</span> <span style="color:'+DAYC.stay+'">■ 住宿</span> <span style="color:#8D6E63">■ 往届参考</span><br>'+
  '实线=城际示意 · 圆点虚线=步行 · 长虚线=航班示意 · 紫虚线=13日晚回广州</div>';
}

function tripHtml(d){
 if(d==='all')return overviewHtml()+legendHtml();
 if(d==='12')return day12Html()+legendHtml();
 if(d==='13')return day13Html()+legendHtml();
 if(d==='14')return day14Html()+legendHtml();
 if(d==='stay')return stayHtml()+legendHtml();
 return overviewHtml();
}
function ticketHtml(){
 var h='<div class="note">购票/预约整理，不代买。价格与库存以官方页面为准。</div>';
 h+='<div class="card bk hot" style="--c:#E53935"><span class="cd">最要紧</span><div class="when">大麦 · 航展公众日门票</div><div><b>12/13 × 2 张</b></div><div class="mt">普通档约 ¥600 · 高档约 ¥1000</div><div class="mt">唯一渠道：大麦 App / 官网；认准官方，勿信二手</div><div class="src">展期 12/7–13 · 公众日 11–13</div></div>';
 h+='<div class="card bk" style="--c:#EF6C00"><div class="when">去程机票</div><div><b>HGH → CAN</b></div><div class="mt">参考 MU5211 上午班 · 约 ¥450/人 <span class="ref">参考价</span></div></div>';
 h+='<div class="card bk" style="--c:#1565C0"><div class="when">城际票</div><div><b>广珠城际 + 珠机城际</b></div><div class="mt">提前购买；航展期间紧张</div></div>';
 h+='<div class="card bk" style="--c:#6A1B9A"><div class="when">返程机票</div><div><b>CAN → HGH</b></div><div class="mt"><span class="tbd">班次待选</span></div></div>';
 h+='<div class="sep">待办清单</div><ul class="todo">';
 TODOS.forEach(function(t,i){h+='<li><label><input type="checkbox" data-todo="'+i+'"> '+t+'</label></li>';});
 h+='</ul><div class="note">勾选状态保存在本机浏览器 localStorage。</div>';
 return h;
}
function guideHtml(){
 var h='<div class="sep">认飞机要点</div><div class="planes">';
 PLANES.forEach(function(p){
  h+='<div class="plane"><img src="assets/photos/'+p.img+'" alt="'+esc(p.n)+'"><div class="nm">'+esc(p.n)+'</div><div class="mt">'+p.feat+'</div><div class="mt">'+p.tip+'</div></div>';
 });
 h+='</div><div class="sep">飞行表演</div><div class="card"><b>郁金花开</b>：八一表演队经典动作，多机拉起后向四周散开。<br>另看编队通场、单机特技、大飞机通场。站开阔处、连拍、戴耳塞。<br><span class="tbd">2026 飞行日程待官方公布</span></div>';
 h+='<div class="sep">室内馆</div><div class="card">热门常有：月壤同框、长征十号乙相关、航发展区。表演时段馆内相对人少，可错峰。<span class="tbd">展品以现场为准</span></div>';
 h+='<div class="sep">携带清单</div><div class="card"><b>建议带</b>：'+PACK_OK.join(' · ')+'<br><b class="warn">注意</b>：'+PACK_NO.join(' · ')+'</div>';
 return h;
}
function galleryHtml(){
 var h='<div class="note">来自 Wikimedia Commons 的往届珠海航展相关实拍，用于个人离线攻略；非官方宣传图。</div><div class="gal">';
 PHOTOS.forEach(function(p){
  h+='<figure><img src="assets/photos/'+p.f+'" alt="'+esc(p.t)+'" loading="lazy"><figcaption>'+esc(p.t)+'<br><a href="'+p.u+'" target="_blank" rel="noopener">'+esc(p.a)+' · '+esc(p.l)+'</a></figcaption></figure>';
 });
 h+='</div><div class="note">官方 2026 场地平面图 PDF 本次未能从 airshow.com.cn 下载（网络不可达）；入场后以现场导览与官方最新平面图为准。</div>';
 return h;
}
function tipsHtml(){return TIPS.map(function(t){return '<div class="card"><h3>'+t[0]+'</h3>'+t[1]+'</div>';}).join('');}

/* ---------- view ---------- */
var curD='all',curM='trip';
function show(d,fit){curD=d;
 Object.keys(G).forEach(function(k){map.removeLayer(G[k]);});
 if(d==='all'){G.all.addTo(map);}
 else G[d].addTo(map);
 document.querySelectorAll('.dtab').forEach(function(e){e.classList.toggle('on',e.dataset.d===String(d));});
 document.getElementById('p-trip').innerHTML=tripHtml(d);
 if(fit!==false)fitTo(d);
}
function padOpt(){if(isMob()){var sh=document.getElementById('side').offsetHeight;return {paddingTopLeft:[20,20],paddingBottomRight:[20,sh+36]};}return {padding:[40,40]};}
function fitTo(d){var b=BND[d]||BND.all;if(!b||!b.isValid())return;map.fitBounds(b,Object.assign(padOpt(),{maxZoom:d==='13'?14:(d==='stay'?12:11)}));}
function setMain(m){curM=m;if(m!=='trip')map.closePopup();
 document.querySelectorAll('.mtab').forEach(function(e){e.classList.toggle('on',e.dataset.m===m);});
 document.querySelectorAll('.pane').forEach(function(e){e.classList.toggle('on',e.id==='p-'+m);});
 document.getElementById('dtabs').style.display=m==='trip'?'':'none';
 if(m==='ticket'){document.getElementById('p-ticket').innerHTML=ticketHtml();restoreTodos();}
 if(m==='guide')document.getElementById('p-guide').innerHTML=guideHtml();
 if(m==='gallery')document.getElementById('p-gallery').innerHTML=galleryHtml();
 if(m==='tips')document.getElementById('p-tips').innerHTML=tipsHtml();
 document.getElementById('body').scrollTop=0;
}
function restoreTodos(){try{var s=JSON.parse(localStorage.getItem('zhairshow_todo')||'{}');
 document.querySelectorAll('[data-todo]').forEach(function(el){el.checked=!!s[el.dataset.todo];el.onchange=function(){var o=JSON.parse(localStorage.getItem('zhairshow_todo')||'{}');o[el.dataset.todo]=el.checked;localStorage.setItem('zhairshow_todo',JSON.stringify(o));};});
}catch(e){}}

document.querySelectorAll('.dtab').forEach(function(e){e.onclick=function(){show(e.dataset.d);document.getElementById('body').scrollTop=0;};});
document.querySelectorAll('.mtab').forEach(function(e){e.onclick=function(){setMain(e.dataset.m);};});
document.getElementById('body').addEventListener('click',function(ev){if(ev.target.closest('a'))return;
 var t=ev.target.closest('[data-poi],[data-go]');if(!t)return;
 if(t.dataset.go){show(t.dataset.go);setMain('trip');return;}
 if(t.dataset.poi){var k=t.dataset.poi,ll=llOf(k);if(!ll)return;
  var want=POI[k].day;if(curD!=='all'&&curD!==want&&!(k==='gzs'||k==='zhs'||k==='can'||k==='hgh'))show(want==='stay'?'stay':want,false);
  if(isMob())setSheet('peek');map.setView(ll,Math.max(map.getZoom(),13),{animate:true});
  setTimeout(function(){var layers=[];map.eachLayer(function(Lyr){if(Lyr.getLatLng&&Lyr.getPopup){var g=Lyr.getLatLng();if(Math.abs(g.lat-ll[0])<1e-5&&Math.abs(g.lng-ll[1])<1e-5)layers.push(Lyr);}});if(layers[0])layers[0].openPopup();},350);}
});

var side=document.getElementById('side'),SH={peek:0.30,half:0.50,full:0.90},cur='half';
function setSheet(s){cur=s;document.documentElement.style.setProperty('--sh',Math.round(window.innerHeight*SH[s])+'px');setTimeout(function(){map.invalidateSize();},230);}
(function(){var y0=null,h0=0;function st(e){if(!isMob())return;y0=(e.touches?e.touches[0]:e).clientY;h0=side.offsetHeight;side.classList.add('drag');}
 function mv(e){if(y0===null)return;var y=(e.touches?e.touches[0]:e).clientY,h=Math.max(110,Math.min(window.innerHeight*0.94,h0+(y0-y)));document.documentElement.style.setProperty('--sh',h+'px');if(e.cancelable)e.preventDefault();}
 function en(){if(y0===null)return;y0=null;side.classList.remove('drag');var r=side.offsetHeight/window.innerHeight,best='half',bd=9;Object.keys(SH).forEach(function(k){var dd=Math.abs(SH[k]-r);if(dd<bd){bd=dd;best=k;}});setSheet(best);}
 ['handle','hdr'].forEach(function(id){var el=document.getElementById(id);el.addEventListener('touchstart',st,{passive:true});el.addEventListener('mousedown',st);});
 window.addEventListener('touchmove',mv,{passive:false});window.addEventListener('mousemove',mv);window.addEventListener('touchend',en);window.addEventListener('mouseup',en);
 document.getElementById('handle').addEventListener('click',function(){setSheet(cur==='full'?'peek':(cur==='peek'?'half':'full'));});})();
if(isMob())setSheet('half');
window.addEventListener('resize',function(){if(isMob())setSheet(cur);map.invalidateSize();});
var locM=null;document.getElementById('locbtn').onclick=function(){if(!navigator.geolocation){alert('浏览器不支持定位');return;}navigator.geolocation.getCurrentPosition(function(p){var ll=[p.coords.latitude,p.coords.longitude];if(locM)map.removeLayer(locM);locM=L.circleMarker(ll,{radius:8,color:'#fff',weight:3,fillColor:'#1677ff',fillOpacity:1}).addTo(map).bindTooltip('我的位置');map.setView(ll,15);},function(e){alert('定位失败：'+e.message);},{enableHighAccuracy:true,timeout:10000});};
show('all');
window.ZH={show:show,setMain:setMain,map:map};
})();

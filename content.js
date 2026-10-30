/* 珠海航展行程地图 · 文案与 POI 元数据 */
var DAYC={
  all:'#455a64',
  '12':'#EF6C00',
  '13':'#E53935',
  stay:'#2E7D32'
};
var DAYN={
  all:'总览',
  '12':'12日抵达',
  '13':'13日观展',
  stay:'住宿区域'
};
var PHOTOS=[
  {f:'banner-j20-formation.jpg',t:'歼-20 双机编队（珠海航展 2018）',a:'emperornie',l:'CC BY-SA 2.0',u:'https://commons.wikimedia.org/wiki/File:J-20_formation.jpg'},
  {f:'venue-2024.jpg',t:'珠海航展场馆外景（2024）',a:'Windmemories',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:20241207_Venue_for_China_International_Aviation_%26_Aerospace_Exhibition.jpg'},
  {f:'exhibition-static-2018.jpg',t:'静态展示区（2018）',a:'Stang',l:'CC BY 4.0',u:'https://commons.wikimedia.org/wiki/File:The_12th_China_International_Aviation_%26_Aerospace_Exhibition_(20181106140141).jpg'},
  {f:'j20-flypast-2016.jpg',t:'歼-20 通场（2016）',a:'Alert5',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:J-20_at_Airshow_China_2016.jpg'},
  {f:'j10-august1st-2018.jpg',t:'八一表演队歼-10（2018）',a:'乘号同学',l:'CC0',u:'https://commons.wikimedia.org/wiki/File:August_1st_Chengdu_J-10_at_Zhuhai_Airshow_20181107.jpg'},
  {f:'y20-zhuhai-2024.jpg',t:'运-20（2024）',a:'Z3144228',l:'CC0',u:'https://commons.wikimedia.org/wiki/File:Y-20_aerial_refueling_pod.jpg'},
  {f:'j15-zhuhai-2024.jpg',t:'歼-15 静态展（2024）',a:'Z3144228',l:'CC0',u:'https://commons.wikimedia.org/wiki/File:Shenyang_J-15_series_at_Airshow_China_2024.jpg'},
  {f:'jl10-zhuhai-2024.jpg',t:'教练-10（2024）',a:'Z3144228',l:'CC0',u:'https://commons.wikimedia.org/wiki/File:Hongdu_JL-10_at_Airshow_China_2024.jpg'},
  {f:'fh97a-zhuhai-2024.jpg',t:'FH-97A 无人机（2024）',a:'Húrin',l:'CC0',u:'https://commons.wikimedia.org/wiki/File:FH-97A_in_zhuhai_airshow_2024_3x.jpg'},
  {f:'wingloong3-zhuhai-2022.jpg',t:'翼龙-3（2022）',a:'Infinty 0',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:Wing_Loong_3_at_Airshow_China_Zhuhai_2022.jpg'},
  {f:'kj500-zhuhai-2016.jpg',t:'空警-500（金湾 2016）',a:'Alert5',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:KJ-500.jpg'},
  {f:'c919-can.jpg',t:'C919（机型参考）',a:'Lhzss8',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:China_Southern_Airline_C919_at_CAN.jpg'},
  {f:'ag600-2016.jpg',t:'AG600（2016）',a:'Alert5',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:AG600_at_Airshow_China_2016.jpg'},
  {f:'red-falcon-2018.jpg',t:'红鹰表演队（2018）',a:'乘号同学',l:'CC0',u:'https://commons.wikimedia.org/wiki/File:Red_Falcon_Aerobatic_Team_at_Zhuhai_Airshow_20181107.jpg'},
  {f:'museum-hall.jpg',t:'室内展厅氛围参考',a:'水餃喵',l:'CC BY 4.0',u:'https://commons.wikimedia.org/wiki/File:Zhuhai_Museum_interior.jpg'},
  {f:'su57-after-zhuhai-2024.jpg',t:'苏-57 参考（非苏-35 珠海实拍）',a:'N509FZ',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:Su-57_054@TYN_(20241121145842).jpg'}
];
var PLANES=[
  {n:'歼-20',feat:'隐身外形 · 鸭翼 + 外倾双垂尾',tip:'飞行表演常客；静态展出与否<span class="tbd">待官方公布</span>',img:'j20-flypast-2016.jpg'},
  {n:'歼-10 / 八一',feat:'单发 · 鸭翼 + 三角翼 · 机腹进气',tip:'八一表演队编队特技（含「郁金花开」）',img:'j10-august1st-2018.jpg'},
  {n:'运-20',feat:'四发 · 上单翼 · T 形尾 · 大胖身形',tip:'大型运输机低空通场很震撼',img:'y20-zhuhai-2024.jpg'},
  {n:'歼-15',feat:'舰载机外形 · 双发双垂尾',tip:'静态区常见',img:'j15-zhuhai-2024.jpg'},
  {n:'预警机',feat:'机背大型雷达天线罩',tip:'背上的“大盘子”最好认',img:'kj500-zhuhai-2016.jpg'},
  {n:'无人机',feat:'无座舱窗 · 外形多样',tip:'静态区数量多，适合集中拍',img:'fh97a-zhuhai-2024.jpg'},
  {n:'C919',feat:'双发窄体客机 · 民航涂装',tip:'国产大飞机（图为机型参考，非珠海现场）',img:'c919-can.jpg'},
  {n:'苏-35 / 勇士',feat:'双发双垂尾 · 无鸭翼 · 体型大',tip:'俄罗斯勇士队；<span class="tbd">2026 是否参展待官方公布</span>',img:'su57-after-zhuhai-2024.jpg'}
];
var PACK_OK=['身份证 ×2','大麦电子票','耳塞','充电宝','防晒 / 墨镜','帽子 / 外套','水杯（过安检后）','零钱 / 移动支付'];
var PACK_NO=['无人机（通常禁飞禁带）','专业长枪大炮是否限带以现场安检为准','易燃易爆 / 管制刀具'];
var TODOS=[
  '大麦购 12/13 公众日门票 ×2（¥600 / ¥1000）',
  '订广珠城际：广州南 → 珠海站',
  '订 12/12 珠海住宿（优先珠海站）',
  '订珠机城际：住处 → 珠海机场站（观展日早班）',
  '订 12/13 晚珠海→广州南城际 + 广州住宿',
  '出发前再核：飞行表演日程 / 参展机型 / 横琴北是否仍暂停'
];
/* id -> POI card */
var POI={
  gzs:{id:'gzs',n:'广州南站',num:'1',day:'12',kind:'rail',t:'12/12 行程起点 · 广珠城际',
    a:'广州市番禺区',do:'乘广珠城际前往珠海',tips:'航展期间车票紧张，提前买；12/13 晚也可回到此站转市区住',w:null},
  zhs:{id:'zhs',n:'珠海站',num:'2',day:'12',kind:'rail',t:'广珠城际终点 · 住宿首选区域',
    a:'珠海市香洲区拱北',do:'下车入住；次日由此或附近上珠机城际去金湾',tips:'住宿优先级第 1：到站即住、次日去航展方便',w:null},
  changlong:{id:'changlong',n:'珠海长隆站',num:'住2',day:'stay',kind:'hotel',t:'住宿备选区域',
    a:'珠海横琴 / 长隆一带',do:'若订长隆周边酒店可在此下',tips:'优先级：珠海站 > 长隆 > 横琴 > 金湾',w:null},
  hengqin:{id:'hengqin',n:'横琴站',num:'住3',day:'stay',kind:'hotel',t:'住宿备选 · 站已开通',
    a:'横琴粤澳深度合作区',do:'认准「横琴站」',tips:'横琴北站暂停——别买错站',w:'横琴北站暂停营运（出发前再核）'},
  zhrail:{id:'zhrail',n:'珠海机场站（珠机城际）',num:'3',day:'13',kind:'rail',t:'离航展最近的城际站',
    a:'珠海市金湾区',do:'从 3 号口出站，步行约 300 m 到航展中心 1 号门',tips:'官方交通指引：珠机城际 → 珠海机场站 → 3 号口',w:null},
  airshow:{id:'airshow',n:'珠海国际航展中心',num:'4',day:'13',kind:'venue',t:'观展主场 · 金湾',
    a:'珠海市金湾区三灶镇（坐标近似）',do:'安检入场 · 静态展 + 飞行表演 + 室内馆',tips:'约 16:00 离场，避开散场高峰；门票仅大麦 ¥600/¥1000',w:'飞行日程 / 部分机型待官方公布；坐标为行程近似点'},
  gzstay:{id:'gzstay',n:'广州市区住宿（示意）',num:'5',day:'13',kind:'hotel',t:'12/13 晚回广州 · 行程终点',
    a:'广州市（点位示意，非指定酒店）',do:'12/13 傍晚离开航展后返回广州过夜',tips:'从航展经珠机/广珠城际回广州南后进市区；具体酒店自选',w:'坐标为市区示意，非已订酒店'},
  jinfengtai:{id:'jinfengtai',n:'金凤台（往届参考）',num:'参',day:'13',kind:'ref',t:'往届观景/周边参考',
    a:'金湾附近（近似）',do:'往届有观众提及的周边点',tips:'本次行程未确认是否前往',w:'待确认 · 非本行程必去点'},
  lianzhou:{id:'lianzhou',n:'莲洲（往届参考）',num:'参',day:'13',kind:'ref',t:'往届周边参考',
    a:'金湾附近（近似）',do:'往届资料中偶见',tips:'本次行程未确认',w:'待确认 · 非本行程必去点'}
};
var HOTELS=[
  {id:'zhs',rank:1,n:'珠海站周边',why:'广珠到站即住，次日珠机城际出发方便',c:'#2E7D32'},
  {id:'changlong',rank:2,n:'长隆周边',why:'备选；可看长隆站下车',c:'#558B2F'},
  {id:'hengqin',rank:3,n:'横琴（横琴站）',why:'站已开通；勿买横琴北',c:'#7CB342'},
  {id:'airshow',rank:4,n:'金湾 / 展馆附近',why:'离馆近但排最后（兜底）',c:'#9CCC65'}
];
var TIPS=[
  ['🎫 门票','唯一渠道：大麦。公众日 12/11–12/13，本次买 <b>12/13</b> ×2。普通档约 ¥600、高档约 ¥1000，权益以大麦页为准。勿信黄牛。'],
  ['🚄 城际','去程：广州南 → 珠海（广珠城际）。观展：住处 → 珠海机场站（珠机城际），3 号口步行约 300 m 到 1 号门。横琴站开通，横琴北暂停。'],
  ['🏨 住宿','12/12 住珠海一晚：珠海站 > 长隆 > 横琴 > 金湾。12/13 晚回广州。'],
  ['⏱ 观展节奏','半天：静态展 → 占位看表演 → 挑一个室内馆 → ~16:00 离场。全天：开门入场，人少时拍静态，表演时段看飞行，午后逛馆，仍建议约 16:00 走。'],
  ['✈ 认飞机','歼-20 看鸭翼+外倾双垂尾；歼-10 看机腹进气；运-20 又大又胖；预警机看背上大盘子；无人机通常无座舱窗。'],
  ['🎆 飞行表演','「郁金花开」：多机拉起后散开。提前举机连拍，站开阔处，戴耳塞。具体时段 <span class="tbd">待官方公布</span>。'],
  ['📦 携带','身份证、电子票、耳塞、充电宝、防晒。无人机一般不行。安检规定以现场为准。'],
  ['⚠ 未确认项','2026 飞行日程、歼-20 是否静态展出、勇士队是否来、金凤台/莲洲是否值得去——出发前再核官方与大麦。']
];

/* 往届实战经验 · 来源：公众号「木子的田心」 */
var MZSRC='图源：公众号 木子的田心（版权归原作者）';
var MZART={"0": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247503745&idx=1&sn=19eb5c1ccd34af03721c77408ebd1041&chksm=e8dbcb35dfac422342448b3758d3060b123cd2eaa62c16b0787d9eef51e9225e838c737b30e4&scene=21", "1": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247503682&idx=1&sn=5c883b10337e7b22a30c7a277f4c0d99&chksm=e8dbcbf6dfac42e0ee4d6f05536a1a6e72d80ec8c2d63572cc9f1fcff20c24a3962a07c38086&scene=21", "2": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247503455&idx=1&sn=645d9303551669a11e5f5bd102121c11&chksm=e8dbcaebdfac43fdd836fe67e2f913bf7e280e521382df18b250b8f518943dcab3a5936a939d&scene=21", "3": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247503285&idx=1&sn=e903f7d283fe17c29ecb24842a205669&chksm=e8dbc901dfac4017c65b74b439b5717787588cc01d2c5df9f157c74f859de75d9d0679f48a1c&scene=21", "4": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247499998&idx=1&sn=9806b7a1d6150827cce27b7e1c49aea6&chksm=e8dbc46adfac4d7cc42341e96816108021609801e46156102db6308b3f23611e74e2b0dc8e8a&scene=21", "5": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247499457&idx=1&sn=634754da9a2feeab4e360dfdaf57d04f&chksm=e8dbfa75dfac7363c07a266ac50be180efacf51e60ff1f398a5a16a1b29b4ed888e920126cf1&scene=21", "6": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247499328&idx=1&sn=152f00a5a081f5e038b4f36d584355bf&chksm=e8dbfaf4dfac73e20c446cd9c0287702aa0ffcb0b96d92a9b1078017b25a6bc57f937d46de01&scene=21", "7": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247499278&idx=1&sn=ed50b86aca103cae45fa15afca9e7739&chksm=e8dbfabadfac73ac22582caa220186034a485323914450ed340b966a6881afa6b9dc1fa7a888&scene=21", "8": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247499045&idx=1&sn=6d2996f8b6a78673b21ee45cd2fcc08a&chksm=e8dbf991dfac7087dfbee937ee918e575c51bebef40852df54ab6c128a110cc3d69a5c7655f0&scene=21", "9": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247498855&idx=1&sn=70f147656aa808c502c75c49aeb6eb71&chksm=e8dbf8d3dfac71c57ce4b09f282f8dea8627886ff3902aa46c298647dbc81763b55dd5aebd00&scene=21", "10": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247499039&idx=1&sn=bbca241085ddf09902adbcf3bc86ad43&chksm=e8dbf9abdfac70bd2c5107a26fffd0dc92978474b5bcd0e134fce959e0388e3580b9c30280bb&scene=21", "11": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247498975&idx=1&sn=81fe2486a1f0cef8f66e8b258f56d5a5&chksm=e8dbf86bdfac717d528074e4065380b7c88923f9ec0c83839055b2dff2a052790e601d1798b8&scene=21", "12": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247498941&idx=1&sn=f5d5489cb9d91044141513a1d99c6cdb&chksm=e8dbf809dfac711f186fd0506479399f64a097e990d75f15a6cba45c8fa189b80f5630f935e3&scene=21", "13": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247498911&idx=1&sn=9a975b46eea287d1a1b88dd3bbb7b729&chksm=e8dbf82bdfac713d08ea447483776541cc4516fc5994a8a5c2ad315ddbd0cf1996466513872e&scene=21", "14": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247498801&idx=1&sn=34ceaf79b0027a863ae426b5ff34d8b1&chksm=e8dbf885dfac719351a7b2e64f01d5f2826a3679a24cc9eee75a9e6d1bf9d51a4f86bd753afd&scene=21", "15": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247516472&idx=1&sn=01fdd8bfce19c4240c44e3349f4ad1c6&chksm=e8db858cdfac0c9afe0b904de17f4baf4e0009bb2412b06ff69723804d9a6957b8eb6dca1fe3&scene=21", "16": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247516450&idx=1&sn=3814295af94c03761d92c51b02dc0978&chksm=e8db8596dfac0c80f2aaf9991b4d352f04fd71f6ce89d3456e24b82d4ddd646e2a0bce8db5fc&scene=21", "17": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247516250&idx=1&sn=7c090022da9d7adac7da4e725709dabb&chksm=e8db84eedfac0df86ad0baf050edb6915db202bef783e4c90e956408360123911dd2fd849759&scene=21", "18": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247516151&idx=1&sn=8aa55b1560d2772369d02f3b3cea0bd9&chksm=e8dbbb43dfac3255c44ec796bddbc4759649813617252c0873419cfe9f1c5d130cd5d571237b&scene=21", "19": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247485646&idx=1&sn=50fa27f823b5707a0b23c949c746aa7c&chksm=e8d80c7adfaf856c0276851c6d971a6541e724a5a5d35d50fd1a1700147be3c2200997cbeb08&scene=21", "20": "https://mp.weixin.qq.com/s?__biz=MzIzNjM0NDc5NQ==&mid=2247485667&idx=1&sn=6e9e3b8f01fe6a95719524bb5d0294e9&chksm=e8d80c57dfaf85414e809a1478c2af21cb8c3b7afa5dafa90819b18d0b361e1cec85646fa3e9&scene=21", "z": "https://mp.weixin.qq.com/s/TL--f27L_PC1axXnA0gqHA"};
var MZDAY=[
 ['约 6:00','广州南早班珠机城际 → 珠海机场站（约 8:00 到）；原作者约 6:00 出发、8:00 到，早到入场不挤（出站进门路线见行程页）','z'],
 ['8:00–10:30','先室内：1 号馆（中航工业，战斗机模型）→ 7 号馆（航天科技，火箭/嫦娥/载人）→ 对面 9、10 号兵器馆；7 号馆最挤只宜打卡，9/10 门口常限流','z'],
 ['表演前 30–60 分钟','提前到停机坪占位：发动机试车一响人群会涌向围栏；可拍飞行员列队登机','15'],
 ['中午前后','停机坪看飞行表演；离大屏喇叭远一点。表演时段跨中午、内场多为逆光，远离栏杆的空地也能看','14'],
 ['表演后','静态区先走到最远端再往回拍（机头/全身/尾喷各一张），人从坪上下来后相对空；防空导弹、直升机区傍晚可能盖布','z'],
 ['17:30 后','回室内补拍大件展品，人明显少','z'],
 ['18:00–18:30','离场 → 珠海机场站城际回广州（同行有人当天回广州的，原作者提到需 15:00 撤场赶车，按你们车次留足余量）','15']
];
var MZTIPS=[
 ['🎒 装备','硬底防水、不磨脚的鞋；折叠板凳（作者称“观展必备”，挤人时也能垫高）；自带水和干粮，别指望场内午饭；防晒（2021 烈日下相机半小时晒到罢工）；充电宝（场内有共享充电宝）',['15','14','z']],
 ['🌧 雨天预案','自备雨衣，馆内免费雨衣常发完；下雨先室内后停机坪；低云大雨时表演会缩水甚至取消，2022 届整届仅 2 天好天气；雨大收相机护镜头',['z','0']],
 ['📷 机位','主席台方向视角最好但最挤也最吵；场地西侧可拍飞机出击/返回与飞行员登机，但同为逆光，旁边客机发动机很吵；炮楼/金凤台是摄影党场外机位（需另付费、路远辛苦），作者不建议普通观众去',['14','15']],
 ['⚠ 坑点','飞行节目单常临时变动、官方公布晚，单机只飞几分钟很常见；兵器馆最热门排队最久，表演时间一到别死磕；保安赶人说法不必全信；交通管制复杂，提前看官方通告',['14','3','z','0']],
 ['🛫 想多看飞机？','航展结束次日（14 日）早上大量军机离场，可在机场周边看起降，时间随机、对非飞友可能枯燥——你们若 14 日还在珠海可以考虑',['1','9']]
];
var MZPH=[
 ['muzi0_5.jpg','室内展馆人潮（2024）','z'],['muzi0_30.jpg','停机坪围观人群（2024）','z'],['muzi0_15.jpg','飞行表演（2024）','z'],
 ['a14_1.jpg','场馆/门/停车场/机位示意（2021 观看指南）','14'],['a14_2.jpg','停机坪与围栏（2021）','14'],['a14_3.jpg','飞行员列队（2021）','14'],
 ['a0_10.jpg','歼-20（2022）','0'],['a0_25.jpg','C919 滑行（2022）','0'],
 ['a15_12.jpg','歼-20 编队（2018）','15'],['a15_20.jpg','停机坪静态展（2018）','15'],['a15_6.jpg','静态展细节拼图（2018）','15'],
 ['a5_30.jpg','空军静态展（2021）','5'],['a5_5.jpg','空军静态展（2021）','5'],
 ['a4_5.jpg','室内展馆·航天展品（2021）','4'],['a4_30.jpg','室内展馆（2021）','4'],
 ['a16_10.jpg','表演队编队（2016）','16'],['a16_40.jpg','静态展拼图（2016）','16']
];

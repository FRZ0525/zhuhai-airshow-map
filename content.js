/* 珠海航展行程地图 · 文案与 POI 元数据 */
var DAYC={
  all:'#455a64',
  '12':'#EF6C00',
  '13':'#E53935',
  '14':'#1565C0',
  stay:'#2E7D32',
  flight:'#00838F'
};
var DAYN={
  all:'总览',
  '12':'12日抵达',
  '13':'13日观展',
  '14':'14日返程',
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
  {f:'c919-can.jpg',t:'C919（广州白云·机型参考）',a:'Lhzss8',l:'CC BY-SA 4.0',u:'https://commons.wikimedia.org/wiki/File:China_Southern_Airline_C919_at_CAN.jpg'},
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
  {n:'C919',feat:'双发窄体客机 · 民航涂装',tip:'国产大飞机（图为白云机型参考）',img:'c919-can.jpg'},
  {n:'苏-35 / 勇士',feat:'双发双垂尾 · 无鸭翼 · 体型大',tip:'俄罗斯勇士队；<span class="tbd">2026 是否参展待官方公布</span>',img:'su57-after-zhuhai-2024.jpg'}
];
var PACK_OK=['身份证 ×2','大麦电子票','耳塞','充电宝','防晒 / 墨镜','帽子 / 外套','水杯（过安检后）','零钱 / 移动支付'];
var PACK_NO=['无人机（通常禁飞禁带）','专业长枪大炮是否限带以现场安检为准','易燃易爆 / 管制刀具'];
var TODOS=[
  '大麦购 12/13 公众日门票 ×2（¥600 / ¥1000）',
  '订 12/12 杭州→广州航班（参考 MU5211）',
  '订广珠城际：广州南 → 珠海站',
  '订 12/12 珠海住宿（优先珠海站）',
  '订珠机城际：住处 → 珠海机场站（观展日早班）',
  '订 12/13 晚回广州交通 + 广州住宿',
  '订 12/14 广州→杭州航班（班次待选）',
  '出发前再核：飞行表演日程 / 参展机型 / 横琴北是否仍暂停'
];
/* id -> POI card */
var POI={
  hgh:{id:'hgh',n:'杭州萧山国际机场 HGH',num:'1',day:'12',kind:'airport',t:'12/12 上午起飞',
    a:'浙江省杭州市萧山区',do:'值机安检，飞广州白云',tips:'推荐 MU5211（上午）约 ¥450/人 · 参考价，以航司页面为准',w:null},
  can:{id:'can',n:'广州白云国际机场 CAN',num:'2',day:'12',kind:'airport',t:'12/12 抵达 · 14 日也可从此返程',
    a:'广州市白云区',do:'出机场转地铁/城际/打车去广州南站',tips:'留足行李转场时间；回程 12/14 从这里飞杭州',w:null},
  gzs:{id:'gzs',n:'广州南站',num:'3',day:'12',kind:'rail',t:'广珠城际起点',
    a:'广州市番禺区',do:'乘广珠城际前往珠海',tips:'航展期间车票紧张，提前买；12/13 晚也可回到此站转市区住',w:null},
  zhs:{id:'zhs',n:'珠海站',num:'4',day:'12',kind:'rail',t:'广珠城际终点 · 住宿首选区域',
    a:'珠海市香洲区拱北',do:'下车入住；次日由此或附近上珠机城际去金湾',tips:'住宿优先级第 1：到站即住、次日去航展方便',w:null},
  changlong:{id:'changlong',n:'珠海长隆站',num:'住2',day:'stay',kind:'hotel',t:'住宿备选区域',
    a:'珠海横琴 / 长隆一带',do:'若订长隆周边酒店可在此下',tips:'优先级：珠海站 > 长隆 > 横琴 > 金湾',w:null},
  hengqin:{id:'hengqin',n:'横琴站',num:'住3',day:'stay',kind:'hotel',t:'住宿备选 · 站已开通',
    a:'横琴粤澳深度合作区',do:'认准「横琴站」',tips:'横琴北站暂停——别买错站',w:'横琴北站暂停营运（出发前再核）'},
  zhrail:{id:'zhrail',n:'珠海机场站（珠机城际）',num:'5',day:'13',kind:'rail',t:'离航展最近的城际站',
    a:'珠海市金湾区',do:'从 3 号口出站，步行约 300 m 到航展中心 1 号门',tips:'官方交通指引：珠机城际 → 珠海机场站 → 3 号口',w:null},
  airshow:{id:'airshow',n:'珠海国际航展中心',num:'6',day:'13',kind:'venue',t:'观展主场 · 金湾',
    a:'珠海市金湾区三灶镇（坐标近似）',do:'安检入场 · 静态展 + 飞行表演 + 室内馆',tips:'约 16:00 离场，避开散场高峰；门票仅大麦 ¥600/¥1000',w:'飞行日程 / 部分机型待官方公布；坐标为行程近似点'},
  gzstay:{id:'gzstay',n:'广州市区住宿（示意）',num:'7',day:'13',kind:'hotel',t:'12/13 晚回广州住',
    a:'广州市（点位示意，非指定酒店）',do:'12/13 傍晚离开航展后返回广州过夜',tips:'方便 12/14 去白云机场；具体酒店自选',w:'坐标为市区示意，非已订酒店'},
  jinfengtai:{id:'jinfengtai',n:'金凤台（往届参考）',num:'参',day:'13',kind:'ref',t:'往届观景/周边参考',
    a:'金湾附近（近似）',do:'往届有观众提及的周边点',tips:'本次行程未确认是否前往',w:'待确认 · 非本行程必去点'},
  lianzhou:{id:'lianzhou',n:'莲洲（往届参考）',num:'参',day:'13',kind:'ref',t:'往届周边参考',
    a:'金湾附近（近似）',do:'往届资料中偶见',tips:'本次行程未确认',w:'待确认 · 非本行程必去点'},
  can14:{id:'can14',n:'广州白云机场（返程）',num:'8',day:'14',kind:'airport',t:'12/14 飞回杭州',
    a:'同 CAN',do:'广州 → 杭州航班',tips:'班次待选；市区出发留足时间',w:'返程航班待订',p:'can'},
  hgh14:{id:'hgh14',n:'杭州萧山机场（抵达）',num:'9',day:'14',kind:'airport',t:'返程落地',
    a:'同 HGH',do:'行程结束',tips:'',w:null,p:'hgh'}
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
  ['🏨 住宿','12/12 住珠海一晚：珠海站 > 长隆 > 横琴 > 金湾。12/13 晚回广州，12/14 从广州飞杭州。'],
  ['⏱ 观展节奏','半天：静态展 → 占位看表演 → 挑一个室内馆 → ~16:00 离场。全天：开门入场，人少时拍静态，表演时段看飞行，午后逛馆，仍建议约 16:00 走。'],
  ['✈ 认飞机','歼-20 看鸭翼+外倾双垂尾；歼-10 看机腹进气；运-20 又大又胖；预警机看背上大盘子；无人机通常无座舱窗。'],
  ['🎆 飞行表演','「郁金花开」：多机拉起后散开。提前举机连拍，站开阔处，戴耳塞。具体时段 <span class="tbd">待官方公布</span>。'],
  ['📦 携带','身份证、电子票、耳塞、充电宝、防晒。无人机一般不行。安检规定以现场为准。'],
  ['⚠ 未确认项','返程航班、2026 飞行日程、歼-20 是否静态展出、勇士队是否来、金凤台/莲洲是否值得去——出发前再核官方与大麦。']
];

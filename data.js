const SPOTS = {
  jiefangbei:{name:'해방비',cn:'解放碑',area:'충칭 · 위중구',date:'8/25',kind:'CITY',duration:'30–60분',summary:'충칭 중심 상권의 기준점. 첫날 밤 산책과 식사 동선을 시작하기 좋습니다.',highlights:['해방비 보행가','八一好吃街와 바로 연결','홍야동 방향 야간 산책'],tips:['저녁 식사와 밀크티를 같이 해결하기 좋음','야경 위주라 낮 시간을 따로 쓸 필요는 적음'],search:'解放碑步行街'},
  bayi:{name:'바이이 하오츠제',cn:'八一好吃街',area:'충칭 · 위중구',date:'8/25',kind:'NIGHT MARKET',duration:'30–60분',summary:'해방비 바로 옆의 대표 먹거리 거리. 첫날 여러 간식을 조금씩 먹기 좋습니다.',highlights:['충칭식 간식','빙펀·꼬치류','밀크티와 함께 들르기 쉬움'],tips:['첫날은 한 메뉴를 많이 먹기보다 여러 개를 나눠 먹는 편이 좋음'],search:'八一好吃街'},
  kuixinglou:{name:'쿠이싱러우',cn:'魁星楼',area:'충칭 · 위중구',date:'8/25',kind:'VIEW',duration:'20–30분',summary:'충칭 특유의 고저차를 짧게 체감하기 좋은 스폿. 해방비와 홍야동 사이에 붙이기 좋습니다.',highlights:['층수 감각이 뒤집히는 산성 지형','홍야동 방향 동선'],tips:['야간에 가면 주변 도심 조명까지 함께 보기 좋음'],search:'魁星楼'},
  daijiaxiang:{name:'다이자샹',cn:'戴家巷',area:'충칭 · 위중구',date:'8/25',kind:'WALK',duration:'30분',summary:'절벽을 따라 이어지는 골목과 보행로가 매력적인 구도심 산책 구간입니다.',highlights:['산비탈 골목','홍야동 접근'],tips:['쿠이싱러우와 묶어서 짧게 걷기'],search:'戴家巷'},
  hongyadong:{name:'홍야동',cn:'洪崖洞',area:'충칭 · 위중구',date:'8/25',kind:'NIGHT VIEW',duration:'45–90분',summary:'충칭 첫날 야경의 핵심. 건물 자체보다 강변과 맞은편에서 보는 전경이 더 인상적입니다.',highlights:['야간 조명','자링강 야경','해방비에서 도보권'],tips:['사람이 많으면 내부보다 외부 전경 위주로 보는 편이 효율적'],search:'洪崖洞'},
  provisional:{name:'대한민국 임시정부 청사',cn:'重庆大韩民国临时政府旧址陈列馆',area:'충칭 · 위중구',date:'8/26',kind:'HISTORY',duration:'50–70분',summary:'충칭 시기 대한민국 임시정부의 흔적을 볼 수 있는 역사 공간입니다.',highlights:['한국 근현대사','충칭 체류기의 임시정부'],tips:['우롱 이동일 오전에 방문 후 바로 역으로 이동'],search:'重庆大韩民国临时政府旧址陈列馆'},
  tiansheng:{name:'천생삼교',cn:'天生三桥',area:'우롱',date:'8/26',kind:'WULONG',duration:'2–3시간',summary:'거대한 천연 석교와 카르스트 지형을 걷는 우롱의 핵심 관광지입니다.',highlights:['천연 석교 3개','거대한 천坑 지형','압도적인 절벽 스케일'],tips:['계단과 젖은 바닥 대비 운동화 추천','우롱 도착 첫날 오후 일정'],search:'武隆天生三桥'},
  fairy:{name:'선녀산',cn:'仙女山国家森林公园',area:'우롱',date:'8/27',kind:'WULONG',duration:'2–3시간',summary:'초원과 숲이 중심인 고지대 풍경. 천생삼교·용수협지봉과 분위기가 확실히 다릅니다.',highlights:['초원','삼림','아침 산책'],tips:['오전에 먼저 보고 용수협지봉으로 이동'],search:'仙女山国家森林公园'},
  longshui:{name:'용수협지봉',cn:'龙水峡地缝',area:'우롱',date:'8/27',kind:'WULONG',duration:'1.5–2시간',summary:'좁고 깊은 협곡을 따라 내려가는 트레킹 코스. 폭포와 절벽의 밀도가 높습니다.',highlights:['협곡','폭포','절벽'],tips:['천생삼교와 다른 날에 나눠 보면 체력 부담이 줄어듦'],search:'龙水峡地缝'},
  guanyinqiao:{name:'관음교',cn:'观音桥步行街',area:'충칭 · 장베이구',date:'8/27',kind:'SHOPPING',duration:'2–3시간',summary:'충칭의 현대적인 쇼핑·외식 중심지. 우롱에서 돌아온 날 저녁 코스로 좋습니다.',highlights:['쇼핑몰','식당','야간 상권'],tips:['북창·카오위·구가를 한 번에 묶기'],search:'观音桥步行街'},
  beicang:{name:'북창',cn:'北仓文创街区',area:'충칭 · 장베이구',date:'8/27',kind:'CULTURE',duration:'40–60분',summary:'옛 창고를 재생한 소규모 문화·카페 거리. 관음교 메인 상권과 분위기가 다릅니다.',highlights:['카페','작은 상점','문창공간'],tips:['관음교 저녁 전후에 걷기'],search:'北仓文创街区'},
  jiujie:{name:'구가',cn:'九街',area:'충칭 · 장베이구',date:'8/27',kind:'LATE NIGHT',duration:'1–2시간',summary:'늦은 밤까지 이어지는 식당·술집 중심의 심야 상권입니다.',highlights:['야식','맥주','심야 분위기'],tips:['카오위 식사 후 2차 코스로'],search:'九街'},
  luohansi:{name:'나한사',cn:'罗汉寺',area:'충칭 · 위중구',date:'8/28',kind:'TEMPLE',duration:'40–60분',summary:'도심 고층건물 사이에 자리한 사찰. 오전 일정으로 넣기 좋습니다.',highlights:['도심 속 사찰','석조 나한상'],tips:['오전에 빠르게 보고 딤섬 아침으로 연결'],search:'重庆罗汉寺'},
  ciqikou:{name:'자기구고진',cn:'磁器口古镇',area:'충칭 · 사핑바구',date:'8/28',kind:'OLD TOWN',duration:'1.5–2시간',summary:'충칭의 대표 고진. 골목 구경과 간식·기념품 쇼핑을 함께 하기 좋습니다.',highlights:['옛 거리','陈麻花','기념품'],tips:['오전 후반 방문 후 리즈바 쪽으로 이동'],search:'磁器口古镇'},
  liziba:{name:'리즈바역',cn:'李子坝',area:'충칭 · 위중구',date:'8/28',kind:'LANDMARK',duration:'30–40분',summary:'모노레일이 건물을 통과하는 충칭 대표 랜드마크입니다.',highlights:['건물 관통 모노레일','전망 플랫폼'],tips:['사진만 보면 30~40분이면 충분'],search:'李子坝单轨穿楼观景平台'},
  elingpark:{name:'어링공원',cn:'鹅岭公园',area:'충칭 · 위중구',date:'8/28',kind:'PARK',duration:'30–45분',summary:'어링얼창 근처에서 쉬어가기 좋은 공원. 체력이 남을 때만 넣는 선택 코스입니다.',highlights:['도심 녹지','전망'],tips:['더위가 심하면 바로 생략'],search:'鹅岭公园'},
  elingfactory:{name:'어링얼창',cn:'鹅岭二厂',area:'충칭 · 위중구',date:'8/28',kind:'DESIGN',duration:'60–90분',summary:'옛 인쇄공장을 재생한 문화창작 공간. 사진과 카페를 함께 즐기기 좋습니다.',highlights:['산업 재생 공간','사진','카페'],tips:['리즈바와 같은 묶음으로 보기'],search:'鹅岭二厂文创公园'},
  shibati:{name:'십팔제',cn:'十八梯传统风貌区',area:'충칭 · 위중구',date:'8/28',kind:'OLD CITY',duration:'45–60분',summary:'계단식 구도심 풍경을 정비한 거리. 늦은 오후나 저녁에 둘러보기 좋습니다.',highlights:['계단 골목','야간 조명'],tips:['산성항과 분위기가 겹쳐 둘 중 하나만 선택해도 됨'],search:'十八梯传统风貌区'},
  xiahao:{name:'샤하오리',cn:'下浩里',area:'충칭 · 난안구',date:'8/28',kind:'OLD STREET',duration:'60–90분',summary:'남안구 산비탈의 오래된 골목과 장강 풍경을 함께 볼 수 있는 거리입니다.',highlights:['산비탈 골목','장강 풍경','카페'],tips:['해질 무렵 방문 추천','룽먼하오까지 이어 걷기'],search:'下浩里老街'},
  longmenhao:{name:'룽먼하오 라오제',cn:'龙门浩老街',area:'충칭 · 난안구',date:'8/28',kind:'OLD STREET',duration:'40–60분',summary:'샤하오리와 자연스럽게 이어지는 역사 거리. 야경까지 보기 좋습니다.',highlights:['옛 건물','야경','남빈루 접근'],tips:['샤하오리에서 별도 이동 없이 이어서 걷기'],search:'龙门浩老街'}
};

const FOODS = {
  milk:{name:'밀크티',cn:'奶茶',date:'8/25 · 8/27',kind:'DRINK',summary:'더운 날 이동 중 쉬어가기 좋은 간식. 당도와 얼음을 조절해서 주문하세요.',order:['三分糖 = 당도 30%','少冰 = 얼음 적게','珍珠 = 펄 추가'],tips:['해방비 또는 관음교에서'],search:'奶茶'},
  lamb:{name:'우롱 양고기',cn:'碗碗羊肉 / 羊肉汤锅',date:'8/26',kind:'WULONG FOOD',summary:'우롱에서 먹을 지역색 있는 저녁 메뉴. 완완양러우 또는 양고기 탕궈를 고르면 됩니다.',order:['碗碗羊肉 = 한 그릇 양고기','羊肉汤锅 = 양고기 전골'],tips:['천생삼교 관람 후 저녁'],search:'碗碗羊肉'},
  grilledfish:{name:'카오위',cn:'烤鱼',date:'8/27',kind:'DINNER',summary:'구운 생선을 매운 양념과 채소에 끓여 먹는 메뉴. 둘이 먹기 좋은 저녁입니다.',order:['麻辣 = 마라맛','蒜香 = 마늘향','微辣 = 약간 매움'],tips:['관음교에서 메인 저녁으로'],search:'烤鱼'},
  dimsum:{name:'딤섬',cn:'港式点心',date:'8/28',kind:'BREAKFAST',summary:'충칭식 매운 음식 사이에 넣기 좋은 홍콩식 아침 메뉴입니다.',order:['虾饺皇 = 하가우','烧卖 = 샤오마이','肠粉 = 창펀','流沙包 = 류사바오'],tips:['나한사 전후 아침 식사'],search:'港式点心'},
  xiaomian:{name:'샤오몐',cn:'重庆小面',date:'8/29',kind:'BREAKFAST',summary:'충칭 대표 면요리. 귀국일 아침에 간단하게 먹기 좋습니다.',order:['小面 = 기본 면','少辣 = 덜 맵게'],tips:['공항 가기 전 마지막 아침'],search:'重庆小面'},
  crayfish:{name:'마라롱샤',cn:'麻辣小龙虾',date:'8/28',kind:'LATE DINNER',summary:'매운 양념의 민물가재 요리. 늦은 저녁이나 야시장 2차 메뉴로 잘 맞습니다.',order:['麻辣小龙虾 = 마라','蒜蓉小龙虾 = 마늘','十三香小龙虾 = 향신료'],tips:['마라 + 마늘 반반 주문 추천'],search:'小龙虾'},
  mahua:{name:'천마화',cn:'陈麻花',date:'8/28 · 자기구',kind:'SNACK',summary:'자기구에서 사기 좋은 바삭한 꽈배기형 과자. 기념품으로도 편합니다.',order:['椒盐 = 소금·향신료','麻辣椒盐 = 마라','冰糖糯米 = 달콤한 맛'],tips:['자기구에서 소포장으로 여러 맛'],search:'陈麻花'},
  pepperlatte:{name:'화자오 라테',cn:'花椒拿铁',date:'8/28 · 샤하오리',kind:'CAFE',summary:'화자오 향을 커피에 더한 충칭스러운 선택 메뉴입니다.',order:['花椒拿铁'],tips:['샤하오리 산책 중 카페가 당기면'],search:'花椒拿铁'}
};

const DAYS = [
 {date:'08.25',dow:'TUE',name:'FIRST NIGHT',place:'CHONGQING · Fandiao Meiju',events:[
  {time:'12:15',title:'인천 → 칭다오',sub:'칭다오 환승'},
  {time:'15:10',title:'칭다오 → 충칭',sub:'18:05 CKG 도착'},
  {time:'19:30',title:'Fandiao Meiju 체크인',sub:'해방비 근처'},
  {time:'20:00',title:'해방비',sub:'저녁 산책',type:'spot',id:'jiefangbei'},
  {time:'20:30',title:'바이이 하오츠제',sub:'간식 + 밀크티',type:'spot',id:'bayi'},
  {time:'21:20',title:'쿠이싱러우 · 다이자샹',sub:'홍야동으로 이동',type:'spot',id:'kuixinglou'},
  {time:'22:00',title:'홍야동',sub:'야경',type:'spot',id:'hongyadong'}]},
 {date:'08.26',dow:'WED',name:'WULONG DAY 1',place:'CHONGQING → WULONG',events:[
  {time:'08:00',title:'아침 식사',sub:'간단하게'},
  {time:'09:00',title:'대한민국 임시정부 청사',sub:'약 1시간',type:'spot',id:'provisional'},
  {time:'10:15',title:'짐 회수 → 충칭동역',sub:'重庆东 → 武隆南'},
  {time:'PM',title:'우롱 이동 · 체크인',sub:'숙소에 짐 보관'},
  {time:'14:00',title:'천생삼교',sub:'2–3시간',type:'spot',id:'tiansheng'},
  {time:'18:00',title:'우롱 양고기',sub:'완완양러우 또는 탕궈',type:'food',id:'lamb'}]},
 {date:'08.27',dow:'THU',name:'WULONG → CITY',place:'WULONG → Fandiao Apartment',events:[
  {time:'07:30',title:'선녀산',sub:'초원 · 삼림',type:'spot',id:'fairy'},
  {time:'10:30',title:'용수협지봉',sub:'협곡 트레킹',type:'spot',id:'longshui'},
  {time:'PM',title:'우롱남 → 충칭동',sub:'충칭 복귀 · 체크인'},
  {time:'19:00',title:'관음교',sub:'쇼핑 · 산책',type:'spot',id:'guanyinqiao'},
  {time:'19:40',title:'북창',sub:'문창거리',type:'spot',id:'beicang'},
  {time:'20:30',title:'카오위',sub:'메인 저녁',type:'food',id:'grilledfish'},
  {time:'22:00',title:'구가',sub:'야식 · 심야 상권',type:'spot',id:'jiujie'}]},
 {date:'08.28',dow:'FRI',name:'CITY WALK',place:'CHONGQING · FULL DAY',events:[
  {time:'08:00',title:'나한사',sub:'도심 사찰',type:'spot',id:'luohansi'},
  {time:'09:00',title:'딤섬',sub:'홍콩식 아침',type:'food',id:'dimsum'},
  {time:'10:30',title:'자기구고진',sub:'골목 · 기념품',type:'spot',id:'ciqikou'},
  {time:'12:40',title:'리즈바역',sub:'모노레일 전망',type:'spot',id:'liziba'},
  {time:'13:30',title:'어링얼창',sub:'카페 · 사진',type:'spot',id:'elingfactory'},
  {time:'15:30',title:'호텔 휴식',sub:'Fandiao Apartment'},
  {time:'17:30',title:'십팔제',sub:'구도심 산책',type:'spot',id:'shibati'},
  {time:'19:00',title:'샤하오리 → 룽먼하오',sub:'해질 무렵 · 야경',type:'spot',id:'xiahao'},
  {time:'21:30',title:'마라롱샤',sub:'늦은 저녁',type:'food',id:'crayfish'}]},
 {date:'08.29',dow:'SAT',name:'HOMEBOUND',place:'CHONGQING → JINAN → INCHEON',events:[
  {time:'08:30',title:'샤오몐',sub:'마지막 아침',type:'food',id:'xiaomian'},
  {time:'10:00',title:'공항 이동',sub:'13:30 CKG 출발'},
  {time:'15:45',title:'지난 도착',sub:'공항 환승'},
  {time:'16:20',title:'산둥 음식 · 카페',sub:'把子肉 있으면 도전'},
  {time:'18:00',title:'국제선 출국 절차',sub:'게이트 이동'},
  {time:'20:10',title:'지난 → 인천',sub:'22:40 도착'}]}
];

const PHRASES=[
 ['한국 여권으로 숙박 가능한가요?','韩国护照可以入住吗？'],
 ['외국인 숙박등록 가능한가요?','可以办理外国人住宿登记吗？'],
 ['이곳으로 가주세요.','请带我去这里。'],
 ['덜 맵게 해주세요.','请少辣一点。'],
 ['마라맛과 마늘맛 반반 가능한가요?','麻辣和蒜蓉可以各来一半吗？'],
 ['설탕 30%, 얼음 적게요.','三分糖，少冰。'],
 ['우롱남역 맞나요?','是武隆南站吗？'],
 ['고덕지도에서 이 이름을 검색해주세요.','请在高德地图搜索这个名字。']
];

const CHECKS=[
 '여권 유효기간 확인','Alipay 해외카드 등록·본인인증','WeChat 결제수단 준비','12306 로그인 및 실명인증',
 '重庆东 ↔ 武隆南 왕복 고속철 예약','우롱 숙소 위치 확정','Fandiao Apartment 외국인 숙박등록 확인',
 '천생삼교·용수협지봉·선녀산 입장권 확인','두 숙소 중국어 주소·전화번호 저장','고덕지도 주요 장소 즐겨찾기',
 '보조배터리·우산·우비·운동화 준비','현금 비상용 준비','칭다오·지난 환승 동선 확인'
];

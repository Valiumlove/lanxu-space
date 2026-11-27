/* Public brand favicons. Keep the domain allow-list local: resource metadata never
   becomes an arbitrary remote image URL. Unbranded tools retain their UI glyph. */
const RESOURCE_BRAND_REGISTRY = `
apple.com|Apple|Apple,苹果,AppleCDN,AppleDev,AppleDirect,AppleFirmware,AppleHardware,AppleIntelligence,AppleMedia,ApplePKI,AppleProxy,AppleUpdate,iCloud,iPhone,iPad,macOS,iRingo,WeatherKit,MapKit,Siri,TestFlight,AppStore,App Store,iTunes,TV,News,Maps,Weather,Fitness
music.apple.com|Apple Music|AppleMusic,Apple Music
tv.apple.com|Apple TV|AppleTV,Apple TV
podcasts.apple.com|Apple Podcasts|ApplePodcasts,Apple Podcasts
news.apple.com|Apple News|AppleNews,Apple News
openai.com|OpenAI|OpenAI,ChatGPT,GPT
anthropic.com|Anthropic|Anthropic,Claude
gemini.google.com|Gemini|Gemini
deepseek.com|DeepSeek|DeepSeek
x.ai|Grok|Grok
groq.com|Groq|Groq
perplexity.ai|Perplexity|Perplexity
poe.com|Poe|Poe
huggingface.co|Hugging Face|HuggingFace,Hugging Face
cursor.com|Cursor|Cursor
windsurf.com|Windsurf|Windsurf
trae.ai|Trae|Trae
youmind.com|YouMind|YouMind
aixcoder.com|AiXcoder|AiXcoder
github.com|GitHub|GitHub
gitlab.com|GitLab|GitLab
gitee.com|Gitee|Gitee,码云
codeberg.org|Codeberg|Codeberg
coding.net|Coding|Coding
gitbook.com|GitBook|GitBook
sourceforge.net|SourceForge|SourceForge
sr.ht|SourceHut|SourceHut
stackoverflow.com|Stack Overflow|Stackexchange,Stack Exchange,StackOverflow,Stack Overflow
developer.mozilla.org|MDN|MDN
csdn.net|CSDN|CSDN
cnblogs.com|博客园|CnBlogs,博客园
oschina.net|开源中国|OSChina,开源中国
juejin.cn|掘金|JueJin,掘金
segmentfault.com|思否|SegmentFault,思否
v2ex.com|V2EX|V2EX
linux.do|Linux Do|LinuxDo,Linux Do
nodeseek.com|NodeSeek|NodeSeek
youtube.com|YouTube|YouTube,YTNoProxy
music.youtube.com|YouTube Music|YouTubeMusic,YouTube Music,Youtube (Music)
netflix.com|Netflix|Netflix,奈飞
spotify.com|Spotify|Spotify
telegram.org|Telegram|Telegram,Nicegram,TG链接,TG/X,电报
twitter.com|Twitter / X|Twitter,推特,X节点
threads.net|Threads|Threads
instagram.com|Instagram|Instagram
facebook.com|Facebook|Facebook
whatsapp.com|WhatsApp|Whatsapp,WhatsApp
signal.org|Signal|Signal
discord.com|Discord|Discord
reddit.com|Reddit|Reddit
snapchat.com|Snapchat|Snap,Snapchat
tiktok.com|TikTok|TikTok
twitch.tv|Twitch|Twitch
tumblr.com|Tumblr|Tumblr
pinterest.com|Pinterest|Pinterest
linkedin.com|LinkedIn|LinkedIn,领英
line.me|LINE|Line,LINE
clubhouse.com|Clubhouse|Clubhouse,ClubhouseIP
naver.com|Naver|Naver,NaverTV
kakaocorp.com|KakaoTalk|KakaoTalk
quora.com|Quora|Quora
medium.com|Medium|Medium
substack.com|Substack|Substack
misskey.io|Misskey|Misskey
truthsocial.com|Truth Social|TruthSocial
weixin.qq.com|微信|WeChat,微信,微信公众号,微信小程序
weibo.com|微博|Weibo,微博,VVebo,Weico
xiaohongshu.com|小红书|XiaoHongShu,小红书
bilibili.com|哔哩哔哩|BiliBili,哔哩哔哩,B站,BiliBiliGame
zhihu.com|知乎|Zhihu,知乎
tieba.baidu.com|百度贴吧|贴吧,Tieba
douyin.com|抖音|DouYin,抖音
kuaishou.com|快手|KuaiShou,快手
iqiyi.com|爱奇艺|iQIYI,iQIYIIntl,爱奇艺
v.qq.com|腾讯视频|TencentVideo,腾讯视频
youku.com|优酷|Youku,优酷
mgtv.com|芒果 TV|HunanTV,芒果TV,芒果 TV,湖南TV,湖南卫视
migu.cn|咪咕|Migu,咪咕
ximalaya.com|喜马拉雅|XiMaLaYa,喜马拉雅
xiaoyuzhoufm.com|小宇宙|XiaoYuZhou,小宇宙
music.163.com|网易云音乐|NetEaseMusic,网易云音乐,网易云svip
y.qq.com|QQ 音乐|QQ音乐,qq音乐,QQ Music
qq.com|腾讯 QQ|Tencent,腾讯系,QQ,QQ空间,QQ钱包,qq空间,TencentDev,TencentTME
kugou.com|酷狗音乐|KugouKuwo,酷狗
kuwo.cn|酷我音乐|酷我
qianqian.com|千千音乐|TaiheMusic,千千音乐,太合音乐
music.migu.cn|咪咕音乐|咪咕音乐
qishui.douyin.com|汽水音乐|汽水音乐
qingting.fm|蜻蜓 FM|QingTingFM,蜻蜓
douban.com|豆瓣|DouBan,豆瓣
huya.com|虎牙直播|HuYa,虎牙
douyu.com|斗鱼直播|Douyu,斗鱼
yy.com|YY 直播|YY,YY直播
acfun.cn|AcFun|AcFun
cctv.com|央视|CCTV,央视,央视频,CBox
wasu.cn|华数 TV|HuaShuTV,Wasu,华数
pptv.com|PPTV|PPTV
le.com|乐视|LeTV,乐视
tv.sohu.com|搜狐视频|搜狐视频
fun.tv|风行|Funshion,FengXing,风行
baofeng.com|暴风影音|BaoFengYingYin,暴风影音
1905.com|1905 电影网|1905电影网
rr.tv|人人视频|YYeTs,人人视频,人人影视
taobao.com|淘宝|TaoBao,淘宝,TB搜索
tmall.com|天猫|天猫,Taobao/Tmall
jd.com|京东|JingDong,京东,JD,京喜
jdcloud.com|京东云|JingDongCloud,京东云
alipay.com|支付宝|AliPay,支付宝
alibaba.com|阿里巴巴|Alibaba,阿里巴巴
aliyun.com|阿里云|Aliyun,阿里云,阿里 DNS,Ali-DNS,Ali-DoH,Ali-DoQ
alipan.com|阿里云盘|AliyunDrive,阿里云盘,阿里网盘
pinduoduo.com|拼多多|Pinduoduo,拼多多,多多视频
meituan.com|美团|MeiTuan,美团
dianping.com|大众点评|大众点评
ele.me|饿了么|Eleme,饿了么
freshippo.com|盒马|HeMa,盒马
dingdong.com|叮咚买菜|DingDong,叮咚买菜
pupumall.com|朴朴超市|朴朴超市
samsclub.cn|山姆会员商店|samsclub,山姆
costco.com|Costco|Costco,好市多,开市客
vip.com|唯品会|VipShop,唯品会
suning.com|苏宁易购|SuNing,苏宁
dangdang.com|当当|DangDang,当当
dewu.com|得物|Dewu,得物
goofish.com|闲鱼|XianYu,闲鱼,咸鱼
zhuanzhuan.com|转转|ZhuanZhuan,转转
smzdm.com|什么值得买|SMZDM,什么值得买
kaola.com|网易考拉|网易考拉
yanxuan.163.com|网易严选|网易严选
mogujie.com|蘑菇街|Mogujie,蘑菇街
xiaomiyoupin.com|小米有品|小米有品
shopee.com|Shopee|Shopee,蝦皮,蝦蝦果園
shein.com|SHEIN|SHEIN
amazon.com|Amazon|Amazon,AmazonCloud,AWS,Kindle
primevideo.com|Prime Video|AmazonPrimeVideo,PrimeVideo,Prime Video
ebay.com|eBay|eBay
etsy.com|Etsy|Etsy
rakuten.com|Rakuten|Rakuten,乐天
coupang.com|Coupang|Coupang
ozon.ru|Ozon|Ozon
wildberries.ru|Wildberries|Wildberries
walmart.com|Walmart|Walmart
target.com|Target|Target
bestbuy.com|Best Buy|Bestbuy,Best Buy
newegg.com|Newegg|Newegg
shopify.com|Shopify|Shopify
ikea.com|IKEA|IKEA,宜家
muji.com|MUJI|MUJI,无印良品
nike.com|Nike|Nike,耐克
adidas.com|Adidas|Adidas,阿迪达斯
gucci.com|Gucci|Gucci,古驰
louisvuitton.com|Louis Vuitton|LouisVuitton,路易威登
starbucks.com|Starbucks|Starbucks,星巴克
luckincoffee.com|瑞幸咖啡|LuckinCoffee,瑞幸
mcdonalds.com.cn|麦当劳|McDonalds,麦当劳,麥當勞
kfc.com.cn|肯德基|肯德基
pizzahut.com.cn|必胜客|必胜客
dominos.com.cn|达美乐|达美乐
mixuebingcheng.com|蜜雪冰城|蜜雪冰城
naixue.com|奈雪|奈雪
familymart.com.cn|全家|FamilyMart,全家便利店
lawson.com.cn|罗森|罗森
google.com|Google|Google,Alphabet,AMP,GoogleDeepMind,GoogleFCM,GooglePlay,GoogleRegistry,GoogleVoice,gstatic
earth.google.com|Google Earth|GoogleEarth,Google Earth
maps.google.com|Google Maps|Google Maps
bing.com|Bing|Bing,必应,Copilot
baidu.com|百度|Baidu,百度,Hao123,爱企查,AiQiCha
pan.baidu.com|百度网盘|百度网盘,BaiduCloud,百度云,Dubox,TeraBox
map.baidu.com|百度地图|百度地图
fanyi.baidu.com|百度翻译|百度翻译
duckduckgo.com|DuckDuckGo|Duckduckgo,DuckDuckGo,DDG
yahoo.com|Yahoo|Yahoo
yandex.com|Yandex|Yandex
sogou.com|搜狗|Sogou,搜狗
360.cn|奇虎 360|360,360Cloud
quark.cn|夸克|夸克,quarkV2,Quark
uc.cn|UC 浏览器|UC,UC浏览器
opera.com|Opera|Opera,OuPeng,Oupeng,欧朋
brave.com|Brave|Brave
microsoft.com|Microsoft|Microsoft,MicrosoftDev,MicrosoftPKI,MicrosoftProxy,Windows,Office
microsoftedge.com|Microsoft Edge|MicrosoftEdge,Edge
outlook.com|Outlook|Outlook
onedrive.live.com|OneDrive|OneDrive
azure.microsoft.com|Azure|Azure
adobe.com|Adobe|Adobe,AdobeActivation,Typekit
autodesk.com|Autodesk|Autodesk
corel.com|Corel|Corel,会声会影
jetbrains.com|JetBrains|Jetbrains,JetBrainsAI
figma.com|Figma|Figma
canva.com|Canva|Canva
framer.com|Framer|Framer
sketch.com|Sketch|Sketch
notion.so|Notion|Notion
flowus.cn|FlowUs|FlowUs
wolai.com|我来|WoLai,我来
feishu.cn|飞书|Feishu,飞书
dingtalk.com|钉钉|DingTalk,钉钉
slack.com|Slack|Slack
zoom.us|Zoom|Zoom
webex.com|WebEx|WebEx
atlassian.com|Atlassian|Atlassian
trello.com|Trello|Trello
teambition.com|Teambition|Teambition
wps.cn|WPS|WPS
evernote.com|Evernote|Evernote,印象笔记
dropbox.com|Dropbox|Dropbox
mega.io|MEGA|MEGA
jianguoyun.com|坚果云|JianGuoYun,坚果云
lanzou.com|蓝奏云|LanZou,蓝奏
ctfile.com|城通网盘|ChengTongWangPan,城通网盘
115.com|115 网盘|115,115网盘
123pan.com|123 云盘|123云盘
mypikpak.com|PikPak|PikPak
cowtransfer.com|奶牛快传|CowTransfer,奶牛快传
wenshushu.cn|文叔叔|WenShuShu,文叔叔
cloud.189.cn|天翼云盘|天翼云盘,cloud.189.cn
189.cn|中国电信|ChinaTelecom,中国电信,电信
10010.com|中国联通|ChinaUnicom,中国联通,联通
10086.cn|中国移动|ChinaMobile,中国移动,青海移动
10099.com.cn|中国广电|ChinaBroadnet,中国广电
chinamobileltd.com|中国移动云盘|中国移动云盘
cloudflare.com|Cloudflare|Cloudflare,CloudflareIPFS,CF IP,CF 二合一
dnspod.cn|DNSPod|DNSPod
adguard.com|AdGuard|AdGuard,AdGuardSDNSFilter,AdGuardSDNSFilterDirect
nssurge.com|Surge|Surge,ASurge,SurgePro
loon.app|Loon|Loon
sub.store|Sub-Store|Sub-Store,SubStore
github.com|Script Hub|Script Hub,BoxJs,Box.js
speedtest.net|Speedtest|Speedtest
openspeedtest.com|OpenSpeedTest|OpenSpeedTest
ipinfo.io|IPinfo|ipInfo
cloudconvert.com|CloudConvert|CloudConvert
paypal.com|PayPal|PayPal
stripe.com|Stripe|Stripe
wise.com|Wise|Wise
visa.com|Visa|VISA
mastercard.com|Mastercard|Mastercard
unionpay.com|云闪付|UnionPay,云闪付,中国银联
binance.com|Binance|Binance,币安,幣安
okx.com|OKX|OKX
bybit.com|Bybit|Bybit
kraken.com|Kraken|Kraken
coinbase.com|Coinbase|Coinbase
gate.io|Gate.io|GateIO
kucoin.com|KuCoin|KuCoin
deribit.com|Deribit|Deribit
schwab.com|Charles Schwab|Schwab
interactivebrokers.com|Interactive Brokers|IBKR
futunn.com|富途牛牛|富途
longbridge.com|长桥|LongBridge,长桥
itigerup.com|老虎证券|TigerFintech
eastmoney.com|东方财富|EastMoney,东方财富,天天基金
10jqka.com.cn|同花顺|同花顺
xueqiu.com|雪球|XueQiu,雪球
cmbchina.com|招商银行|CMB,招商银行,掌上生活
icbc.com.cn|工商银行|ICBC,工商银行,工银
ccb.com|建设银行|CCB,建设银行,建行生活
boc.cn|中国银行|BOC,中国银行,中银
bankcomm.com|交通银行|BOCOM,交通银行,买单吧
abchina.com|农业银行|ABC,农业银行
cebbank.com|光大银行|CEB,光大银行
citicbank.com|中信银行|CITIC,中信银行
cgbchina.com.cn|广发银行|CGB,广发银行,发现精彩
psbc.com|邮储银行|PSBC,邮储银行
pingan.com|中国平安|PingAn,中国平安,平安
spdb.com.cn|浦发银行|浦发银行,浦大喜奔
cib.com.cn|兴业银行|兴业银行
cmbc.com.cn|民生银行|民生银行
hsbc.com|HSBC|HSBC,汇丰
sc.com|渣打银行|StandardChartered,渣打
hsbc.com|汇丰集团|HSBC
store.steampowered.com|Steam|Steam,SteamCN,Steam中国
steampy.com|Steampy|Steampy
epicgames.com|Epic Games|Epic
gog.com|GOG|Gog
blizzard.com|Blizzard|Blizzard,暴雪
battle.net|Battle.net|Battle.net
ea.com|Electronic Arts|EA,Origin
ubisoft.com|Ubisoft|Ubisoft,UBI,Assassin'sCreed
playstation.com|PlayStation|PlayStation
xbox.com|Xbox|Xbox
nintendo.com|Nintendo|Nintendo,switch游戏
supercell.com|Supercell|Supercell
riotgames.com|Riot Games|Riot
roblox.com|Roblox|Roblox
minecraft.net|Minecraft|Mojang,Minecraft
rockstargames.com|Rockstar|Rockstar
2k.com|2K Games|2KGames
take2games.com|Take-Two|TakeTwo
bethesda.net|Bethesda|Bethesda
garena.com|Garena|Garena
konami.com|Konami|Konami
snk-corp.co.jp|SNK|SNK
cygames.co.jp|Cygames|Cygames,Purikonejp
neteasegames.com|网易游戏|网易大神,网易游戏
wanmei.com|完美世界|WanMeiShiJie,完美世界
hoyoverse.com|HoYoverse|HoYoverse,米游社,崩坏
kurogames.com|库洛游戏|KuroGames
seasungames.com|西山居|Seasun
taptap.cn|TapTap|TapTap
4399.com|4399|4399
17173.com|17173|17173
178.com|178 游戏网|178,178游戏网
gamersky.com|游民星空|GamerSky,游民星空
vgtime.com|游戏时光|VGTime,游戏时光
nga.cn|NGA|NGA
xiaoheihe.cn|小黑盒|XiaoHeihe,小黑盒
bahamut.com.tw|巴哈姆特|Bahamut,巴哈姆特,动画疯
gamer.com.tw|巴哈姆特动画疯|动画疯
steamunlocked.net|SteamUnlocked|SteamUnlocked
humblebundle.com|Humble Bundle|HumbleBundle
itch.io|itch.io|ItchIo
curseforge.com|CurseForge|CurseForge
modrinth.com|Modrinth|Modrinth
faceit.com|FACEIT|FACEIT
pubg.com|PUBG|PUBG
wargaming.net|Wargaming|WarGaming
escapefromtarkov.com|Escape from Tarkov|EscapeFromTarkov
pcgamer.com|PC Gamer|PCGamer
youxun.com|游迅网|游迅网
9game.cn|九游|九游
7k7k.com|7k7k|7k7k
dota2.com|Dota 2|Dota2
disneyplus.com|Disney+|Disney,DisneyPlus,Disney+
max.com|HBO Max|HBO,HBOHK,HBOUSA
hulu.com|Hulu|Hulu,HuluUSA
hulu.jp|Hulu Japan|HuluJP
abema.tv|ABEMA|AbemaTV
dazn.com|DAZN|DAZN
deezer.com|Deezer|Deezer
tidal.com|TIDAL|TIDAL
qobuz.com|Qobuz|Qobuz
soundcloud.com|SoundCloud|SoundCloud
bandcamp.com|Bandcamp|Bandcamp
last.fm|Last.fm|LastFM
musixmatch.com|Musixmatch|Musixmatch
kkbox.com|KKBOX|KKBOX
joox.com|JOOX|JOOX
pandora.com|Pandora|Pandora
plex.tv|Plex|Plex
emby.media|Emby|Emby
pluto.tv|Pluto TV|PlutoTV
tubi.tv|Tubi|Tubi
crunchyroll.com|Crunchyroll|crunchyroll
dailymotion.com|Dailymotion|Dailymotion
vimeo.com|Vimeo|Vimeo
niconico.jp|Niconico|Niconico
tver.jp|TVer|TVer
nhk.or.jp|NHK|NHK
itv.com|ITV|ITV
channel4.com|Channel 4|All4
channel5.com|Channel 5|My5
paramountplus.com|Paramount+|ParamountPlus
discoveryplus.com|Discovery+|DiscoveryPlus
fubo.tv|Fubo|FuboTV
sling.com|Sling|Sling
nowtv.com|Now TV|NowTV
sky.com|Sky|Sky,SkyGO
bbc.com|BBC|BBC
cnn.com|CNN|CNN
cbs.com|CBS|CBS
nbc.com|NBC|NBC,NBCUniversal
fox.com|FOX|Fox,FOXNOW
pbs.org|PBS|PBS
espn.com|ESPN|Espn
tvb.com|TVB|TVB,EncoreTVB
viu.com|Viu|Viu
viu.tv|ViuTV|ViuTV
mytvsuper.com|myTV SUPER|myTVSUPER
litv.tv|LiTV|LiTV
kktv.me|KKTV|KKTV
linetv.tw|LINE TV|LineTV
hamivideo.hinet.net|Hami Video|HamiVideo
friday.tw|friDay|friDay
wetv.vip|WeTV|WeTV
me.watch|meWATCH|MeWatch
newrelic.com|New Relic|New Relic
qidian.com|起点读书|起点
fanqienovel.com|番茄小说|番茄小说
qimao.com|七猫小说|QiMao,七猫
weread.qq.com|微信读书|微信阅读,微信读书
jjwxc.net|晋江文学|JinJiangWenXue,晋江
ireader.com|掌阅|ZhangYue,掌阅
shuqi.com|书旗小说|书旗
manhuaren.com|漫画人|漫画人
manhua.bilibili.com|哔哩哔哩漫画|哔哩哔哩漫画
kuaikanmanhua.com|快看漫画|快看
sfacg.com|菠萝包轻小说|菠萝包
lofter.com|LOFTER|lofter
yuque.com|语雀|语雀
jianshu.com|简书|JianShu,简书
dedao.cn|得到|Dedao,得到
dushu365.com|樊登读书|樊登
duolingo.com|Duolingo|Duolingo,多邻国
coursera.org|Coursera|Coursera
edx.org|edX|edX
udemy.com|Udemy|Udemy
udacity.com|Udacity|Udacity
khanacademy.org|Khan Academy|KhanAcademy
freecodecamp.org|freeCodeCamp|FreeCodeCamp
codecademy.com|Codecademy|Codecademy
codeforces.com|Codeforces|Codeforces
nowcoder.com|牛客网|NowCoder,牛客
fkw.com|凡科|凡科
fenbi.com|粉笔|粉笔
baicizhan.com|百词斩|百词斩
shanbay.com|扇贝|Shanbay,扇贝
bubei.com|不背单词|BuBeiDanCi,不背单词
youdao.com|有道|有道
iciba.com|金山词霸|金山词霸
dict.eudic.net|欧路词典|欧路
ximalaya.com|懒人听书|懒人听书
hujiang.com|沪江|HuJiang,沪江
chaoxing.com|超星|ShiJiChaoXing,超星
17zuoye.com|一起作业|17zuoye,一起作业
zuoyebang.com|作业帮|ZuoYeBang,作业帮
yuanfudao.com|猿辅导|YuanFuDao,猿辅导
100tal.com|学而思|XueErSi,学而思
cnki.net|中国知网|CNKI,中国知网
wanfangdata.com.cn|万方|WanFang,万方
zotero.org|Zotero|Zotero
elsevier.com|Elsevier|Elsevier,ScienceDirect
springer.com|Springer|Springer
ieee.org|IEEE|IEEE
oreilly.com|O'Reilly|Oreilly
archive.org|Internet Archive|WebArchive
archiveofourown.org|Archive of Our Own|ArchiveOfOurOwn
wikipedia.org|Wikipedia|Wikipedia,维基
wikimedia.org|Wikimedia|Wikimedia
wikihow.com|wikiHow|WikiHow
wikidot.com|Wikidot|WikiDot
wikiwand.com|Wikiwand|Wikiwand
goodreads.com|Goodreads|Goodreads
book.com.tw|博客来|Books,博客来
imdb.com|IMDb|IMDB
themoviedb.org|TMDB|TMDB
thetvdb.com|TheTVDB|TVDB
metacritic.com|Metacritic|Metacritic
reuters.com|Reuters|Reuters,ThomsonReuters
bloomberg.com|Bloomberg|Bloomberg
nytimes.com|The New York Times|NYTimes
wsj.com|The Wall Street Journal|WSJ
ft.com|Financial Times|FT
economist.com|The Economist|Economist
theguardian.com|The Guardian|TheGuardian
apnews.com|AP|AP
afp.com|AFP|AFP
aljazeera.com|Al Jazeera|AlJazeera
scmp.com|South China Morning Post|SCMP
forbes.com|Forbes|Forbes
cnet.com|CNET|CNET
theverge.com|The Verge|Voxmedia
9to5mac.com|9to5Mac|9to5
neowin.net|Neowin|Neowin
nikkei.com|Nikkei|Nikkei
asahi.com|朝日新闻|Asahi
kyodonews.jp|共同社|KyodoNews
yomiuri.co.jp|读卖新闻|Yomiuri
mainichi.jp|每日新闻|Mainichi
sankei.com|产经新闻|Sankei
zaobao.com|联合早报|Zaobao
people.com.cn|人民网|人民网,人民日报
xinhuanet.com|新华网|新华网
chinanews.com.cn|中国新闻网|ChinaNews,中国新闻网
thepaper.cn|澎湃新闻|澎湃
caixin.com|财新|CaiXinChuanMei,财新
cls.cn|财联社|财联社
wallstreetcn.com|华尔街见闻|华尔街见闻
jiemian.com|界面新闻|JieMian,界面新闻
36kr.com|36 氪|36kr
huxiu.com|虎嗅|虎嗅
ithome.com|IT 之家|IT之家
ifanr.com|爱范儿|ifanr,AppSo
sspai.com|少数派|少数派
zol.com.cn|中关村在线|中关村在线
pconline.com.cn|太平洋电脑|太平洋电脑,太平洋知科技
guancha.cn|观察者网|观察者
toutiao.com|今日头条|今日头条
ifeng.com|凤凰网|Phoenix,凤凰
sina.com.cn|新浪|Sina,新浪
sohu.com|搜狐|Sohu,搜狐
163.com|网易|NetEase,NeteaseCloud,网易
netease.com|网易公司|网易公司
zaker.com|ZAKER|ZAKER
ctexcel.com|CTExcel|CTExcel
12306.cn|铁路 12306|12306
12123.gov.cn|交管 12123|12123
ctrip.com|携程|XieCheng,携程
qunar.com|去哪儿|去哪儿
ly.com|同程旅行|TongCheng,同程
fliggy.com|飞猪|FeiZhu,飞猪
mafengwo.cn|马蜂窝|MaFengWo,马蜂窝
qyer.com|穷游|穷游
booking.com|Booking.com|Booking
airbnb.com|Airbnb|Airbnb
trip.com|Trip.com|Trip.com
didi.com|滴滴出行|DiDi,滴滴
uber.com|Uber|Uber
amap.com|高德地图|GaoDe,高德地图,amap
meituan.com|美团买菜|美团买菜
airchina.com.cn|中国国航|AirChina,中国国际航空
csair.com|南方航空|南方航空
ceair.com|东方航空|东方航空
hnair.com|海南航空|HainanAirlines,海南航空
xiamenair.com|厦门航空|厦门航空
sichuanair.com|四川航空|四川航空
umetrip.com|航旅纵横|航旅纵横
variflight.com|飞常准|飞常准
hilton.com|Hilton|希尔顿
marriott.com|Marriott|Marriott
huazhu.com|华住会|华住会
homeinns.com|首旅如家|首旅如家
ziroom.com|自如|Ziroom,自如
lianjia.com|链家|Lianjia,链家
anjuke.com|安居客|Anjuke,安居客
fang.com|房天下|SouFang,房天下
58.com|58 同城|58TongCheng,58同城
51job.com|前程无忧|51Job,前程无忧
liepin.com|猎聘|LiePin,猎聘
zhipin.com|BOSS 直聘|BOSS直聘
maimai.cn|脉脉|脉脉
zhuanzhuan.com|转转|ZhuanZhuan
autohome.com.cn|汽车之家|汽车之家
dongchedi.com|懂车帝|DongCheDi,懂车帝
bitauto.com|易车|BitAuto,易车
tuhu.cn|途虎养车|途虎
bmw.com|BMW|BMW,宝马
tesla.com|Tesla|Tesla,特斯拉
byd.com|比亚迪|比亚迪
geely.com|吉利汽车|Geely,吉利
honda.com.cn|本田|广汽本田
chery.cn|奇瑞|奇瑞
volkswagen.com.cn|大众汽车|一汽大众,上汽大众
sf-express.com|顺丰速运|SFExpress,顺丰
cainiao.com|菜鸟|CaiNiao,菜鸟
zto.com|中通快递|ZTOExpress,中通
ytoglobal.com|圆通速递|YTOExpress,圆通
yundaex.com|韵达|YundaExpress,韵达
sto.cn|申通|STOExpress,申通
deppon.com|德邦|Deppon,德邦
jtexpress.com.cn|极兔速递|JTExpress,极兔
fcbox.com|丰巢|FCBox,丰巢
huawei.com|华为|Huawei,华为
huaweicloud.com|华为云|HuaweiCloud
mi.com|小米|XiaoMi,XiaomiAI,小米,米家,小爱音箱
oppo.com|OPPO|OPPO
vivo.com|vivo|Vivo
oneplus.com|OnePlus|OnePlus,一加
meizu.com|魅族|MeiZu,魅族
samsung.com|Samsung|Samsung,三星
sony.com|Sony|Sony,索尼
lenovo.com|Lenovo|Lenovo,联想
asus.com|ASUS|ASUS,华硕
acer.com|Acer|Acer,宏碁
dell.com|Dell|Dell,戴尔
hp.com|HP|HP,惠普
intel.com|Intel|Intel,英特尔
amd.com|AMD|AMD
nvidia.com|NVIDIA|Nvidia,英伟达
qualcomm.com|Qualcomm|Qualcomm,高通
ibm.com|IBM|IBM
cisco.com|Cisco|Cisco,思科
gigabyte.com|Gigabyte|Gigabyte,技嘉
razer.com|Razer|Razer,雷蛇
logitech.com|Logitech|Logitech,罗技
anker.com|Anker|Anker
dji.com|DJI|DJI,大疆
canon.com|Canon|Canon,佳能
haier.com|Haier|Haier,海尔
midea.com|Midea|Midea,美的
tcl.com|TCL|TCL
lg.com|LG|LG
motorola.com|Motorola|Motorola,摩托罗拉
zte.com.cn|ZTE|ZTE,中兴
synology.com|Synology|Synology,群晖,QuickConnect
qnap.com|QNAP|QNAP,威联通
westerndigital.com|Western Digital|Westerndigital,西部数据
mikrotik.com|MikroTik|MikroTik
truenas.com|TrueNAS|IXsystems,TrueNAS
openwrt.org|OpenWrt|OpenWrt
tailscale.com|Tailscale|Tailscale
zerotier.com|ZeroTier|ZeroTier
teamviewer.com|TeamViewer|TeamViewer
sunlogin.oray.com|向日葵|向日葵,Oray
rustdesk.com|RustDesk|RustDesk
ubuntu.com|Ubuntu|Ubuntu
ubuntukylin.com|优麒麟|UbuntuKylin,优麒麟
archlinux.org|Arch Linux|ArchLinux
debian.org|Debian|Debian
fedoraproject.org|Fedora|Fedora
deepin.org|Deepin|Deepin,深度科技
linux.org|Linux|Linux
mozilla.org|Mozilla|Mozilla,Firefox
android.com|Android|Android,AndroidDownload
docker.com|Docker|Docker
kubernetes.io|Kubernetes|Kubernetes
nodejs.org|Node.js|Node.js,NodeJS
npmjs.com|npm|NPM
python.org|Python|Python
anaconda.com|Anaconda|Anaconda
golang.org|Go|Golang
rust-lang.org|Rust|Rust
ruby-lang.org|Ruby|Ruby
ruby-china.org|Ruby China|RubyChina
dart.dev|Dart|Dart
flutter.dev|Flutter|Flutter
swift.org|Swift|Swift
scala-lang.org|Scala|Scala
perl.org|Perl|Perl
haskell.org|Haskell|Haskell
qt.io|Qt|Qt
electronjs.org|Electron|Electron
v8.dev|V8|V8
nginx.org|Nginx|Nginx
redis.io|Redis|Redis
mongodb.com|MongoDB|MongoDB
sentry.io|Sentry|Sentry
hashicorp.com|HashiCorp|HashiCorp
fastlane.tools|Fastlane|Fastlane
getbootstrap.com|Bootstrap|Bootcss
jquery.com|jQuery|Jquery
jsdelivr.com|jsDelivr|Jsdelivr
fontawesome.com|Font Awesome|FontAwesome
readthedocs.org|Read the Docs|ReadTheDocs
apifox.com|Apifox|ApiFox
apipost.cn|ApiPost|ApiPost
postman.com|Postman|Postman
blender.org|Blender|Blender
dribbble.com|Dribbble|Dribbble
artstation.com|ArtStation|ArtStation
deviantart.com|DeviantArt|DeviantArt
pixiv.net|Pixiv|Pixiv
flickr.com|Flickr|Flickr
imgur.com|Imgur|Imgur
wallhaven.cc|Wallhaven|Wallhaven
gettyimages.com|Getty Images|Gettyimages
inshot.com|InShot|InShot
meitu.com|美图|MeiTu,美图,美颜相机
gaoding.com|稿定设计|稿定设计
chuangkit.com|创客贴|ChuangKeTie,创客贴
camscanner.com|扫描全能王|CamScanner,扫描全能王
intsig.com|合合信息|IntSig
baimiaoapp.com|白描|白描
picsew.app|Picsew|Picsew
notability.com|Notability|Notability
flexibits.com|Fantastical|Fantastical
vsco.co|VSCO|VSCO
cubox.pro|Cubox|Cubox
gotokeep.com|Keep|Keep
hupu.com|虎扑|Hupu,虎扑
dongqiudi.com|懂球帝|懂球帝
zhibo8.com|直播吧|ZB,直播吧
flomoapp.com|flomo|flomo
1password.com|1Password|1Password
bitwarden.com|Bitwarden|Bitwarden
lastpass.com|LastPass|LastPass
proton.me|Proton|Protonmail,ProtonMail
tuta.com|Tuta|Tutanota
keybase.io|Keybase|Keybase
duckduckgo.com|DuckDuckGo|DuckDuckGo
letsencrypt.org|Let's Encrypt|LetsEncrypt
digicert.com|DigiCert|DigiCert
globalsign.com|GlobalSign|GlobalSign
sectigo.com|Sectigo|Sectigo
comodoca.com|Comodo|Comodo
trustasia.com|TrustAsia|TrustAsia
verisign.com|Verisign|Verisign
cloudinary.com|Cloudinary|Cloudinary
akamai.com|Akamai|Akamai,AkamaiCloud
fastly.com|Fastly|Fastly
digitalocean.com|DigitalOcean|DigitalOcean
vultr.com|Vultr|Vultr
hetzner.com|Hetzner|Hetzner
netlify.com|Netlify|Netlify
vercel.com|Vercel|Vercel
heroku.com|Heroku|Heroku
oracle.com|Oracle|Oracle
tencentcloud.com|腾讯云|TencentCloud,腾讯云
ctyun.cn|天翼云|CTYun,天翼云
kingsoft.com|金山|Kingsoft,金山系
ksyun.com|金山云|KingsoftCloud
volcengine.com|火山引擎|Volcengine,火山引擎
qiniu.com|七牛云|QiNiuYun,七牛云
upyun.com|又拍云|UPYun,又拍云
qingcloud.com|青云|QingCloud,青云
ucloud.cn|UCloud|UCloud,优刻得
godaddy.com|GoDaddy|GoDaddy
gandi.net|Gandi|Gandi
spaceship.com|Spaceship|Spaceship
zendesk.com|Zendesk|Zendesk
salesforce.com|Salesforce|Salesforce
intercom.com|Intercom|Intercom
zoho.com|Zoho|Zoho
wix.com|Wix|WIX
wordpress.com|WordPress|Wordpress
patreon.com|Patreon|Patreon
buymeacoffee.com|Buy Me a Coffee|BuyMeACoffee
opencollective.com|Open Collective|OpenCollective
liberapay.com|Liberapay|Liberapay
rsshub.app|RSSHub|RSSHub
feedly.com|Feedly|Feedly
inoreader.com|Inoreader|InoReader
pocketcasts.com|Pocket Casts|PocketCasts
accuweather.com|AccuWeather|AccuWeather
qweather.com|和风天气|QWeather,和风天气
caiyunapp.com|彩云天气|ColorfulClouds,彩云天气
moji.com|墨迹天气|Moji,墨迹天气
windy.com|Windy|Windy
openweathermap.org|OpenWeather|OpenWeather
ipfs.tech|IPFS|IPFS
openstreetmap.org|OpenStreetMap|OpenStreetMap
organicmaps.app|Organic Maps|OrganicMaps
mapbox.com|Mapbox|Mapbox
geocaching.com|Geocaching|Geocaching
wiktionary.org|Wiktionary|Wiktionary
damai.cn|大麦|大麦,大麦网
iflytek.com|讯飞|讯飞,讯飞输入法
bestv.com.cn|百视 TV|看东方,百视TV,百视 TV
weiphone.net|威锋|威锋
yixia.com|秒拍|秒拍
3839.com|好游快爆|好游快爆
jiakaobaodian.com|驾考宝典|驾考宝典
jxedt.com|驾校一点通|驾校一点通
soulapp.cn|Soul|Soul
hongguoapp.com|红果短剧|红果短剧
kg.qq.com|全民 K 歌|全民K歌,全民 K 歌
map.qq.com|腾讯地图|腾讯地图
news.qq.com|腾讯新闻|腾讯新闻
guanjia.qq.com|腾讯手机管家|腾讯手机管家
game.qq.com|腾讯游戏|腾讯游戏,掌上英雄联盟,掌上道具城,闪现一下
pvp.qq.com|王者荣耀|王者荣耀
95598.cn|网上国网|网上国网
coolapk.com|酷安|酷安
iqiyi.com|爱奇艺|奇艺

`;

// Canonical names and translated titles from the shipped upstream catalog.
// Long-tail domains were cross-checked against their public DOMAIN-SUFFIX rules.
const RESOURCE_BRAND_CATALOG = `
115.com|115网盘|115,115网盘
12306.cn|铁路12306|12306,铁路12306
17173.com|17173|17173
178.com|178游戏网|178,178游戏网
17zuoye.com|一起作业|17zuoye,一起作业
1password.com|1Password密码管理|1Password,1Password密码管理
2k.com|2K Games游戏|2KGames,2K Games游戏
360.cn|奇虎360|360,奇虎360
360.cn|360云计算|360Cloud,360云计算
36kr.com|36氪|36kr,36氪
4399.com|4399小游戏|4399,4399小游戏,4399小
51job.com|前程无忧|51Job,前程无忧
56.com|56网|56,56网
58.com|58同城|58TongCheng,58同城
6rooms.com|六间房|6JianFang,六间房
800best.com|800best电商|800Best,800best电商
8btc.com|8btc|8btc
9news.com.au|9News|9News
9to5mac.com|9to5Mac|9to5,9to5Mac
aamgame.com|AAMGame游戏平台|AAMGame,AAMGame游戏平台,AAMGame游戏
abchina.com|农业银行|ABC,农业银行
abema.tv|AbemaTV|AbemaTV
accuweather.com|AccuWeather天气|AccuWeather,AccuWeather天气
acer.com|宏碁|Acer,宏碁
acfun.cn|AcFun弹幕视频网|AcFun,AcFun弹幕视频网
actalis.com|Actalis证书|Actalis,Actalis证书
adguard.com|AdGuard 广告拦截与隐私保护|AdGuard,AdGuard 广告拦截与隐私保护
adguard.com|AdGuard DNS Filter|AdGuardSDNSFilter,AdGuard DNS Filter
adguard.com|AdGuardS DNS Filter Direct|AdGuardSDNSFilterDirect,AdGuardS DNS Filter Direct
adidas.com|阿迪达斯|Adidas,阿迪达斯
adobe.com|Adobe|Adobe
adobe.com|Adobe激活验证|AdobeActivation,Adobe激活验证
aerogard.com.au|Aerogard驱蚊|Aerogard,Aerogard驱蚊
afp.com|法新社|AFP,法新社
agora.io|声网|Agora,声网
baidu.com|爱企查|AiQiCha,爱企查
airbnb.com|Airbnb|Airbnb
airchina.com.cn|中国国际航空|AirChina,中国国际航空
airwick.com|Air Wick空气清新剂|AirWick,Air Wick空气清新剂
aixcoder.com|AiXcoder AI 编程助手|AiXcoder,AiXcoder AI 编程助手
akamai.com|Akamai|Akamai
akamai.com|Akamai云计算|AkamaiCloud,Akamai云计算
akikocorp.cn|Akiko服装|Akiko,Akiko服装
alibaba.com|阿里巴巴|Alibaba,阿里巴巴
aligames.com|阿里游戏|AliGames,阿里游戏
alipay.com|支付宝|AliPay,支付宝
aliyun.com|阿里云|Aliyun,阿里云
alipan.com|阿里云盘|AliyunDrive,阿里云盘
aljazeera.com|半岛电视台|AlJazeera,半岛电视台
channel4.com|All 4|All4,All 4
google.com|Alphabet 集团|Alphabet,Alphabet 集团
amazon.com|Amazon|Amazon
amazon.com|Amazon云计算|AmazonCloud,Amazon云计算
primevideo.com|Amazon Prime Video|AmazonPrimeVideo,Amazon Prime Video
amd.com|AMD|AMD
google.com|Google AMP|AMP,Google AMP
anaconda.com|Anaconda Python 数据科学平台|Anaconda,Anaconda Python 数据科学平台,Anaconda Python 数据科学
anandtech.com|AnandTech科技|AnandTech,AnandTech科技
android.com|Android|Android
android.com|Android 应用下载|AndroidDownload,Android 应用下载
anexia.com|Anexia云|Anexia,Anexia云
anjuke.com|安居客|Anjuke,安居客
anker.com|Anker|Anker
annas-archive.gd|Anna's Archive电子书检索|AnnasArchive,Anna's Archive电子书检索
anthropic.com|Anthropic|Anthropic
antiy.com|安天科技|AnTianKeJi,安天科技
aol.com|AOL|AOL
apnews.com|美联社|AP,美联社
apifox.com|Apifox|ApiFox,Apifox
apipost.cn|ApiPost|ApiPost
apkpure.com|APKPure|Apkpure,APKPure
apple.com|Apple|Apple
apple.com|Apple APNs|Apple APNs
apple.com|Apple CDN|AppleCDN,Apple CDN
apple.com|Apple开发者|AppleDev,Apple开发者
apple.com|Apple 直连|AppleDirect,Apple 直连
apple.com|Apple固件|AppleFirmware,Apple固件
apple.com|Apple硬件|AppleHardware,Apple硬件
apple.com|Apple 智能服务|AppleIntelligence,Apple 智能服务,Apple 智能
apple.com|Apple媒体服务|AppleMedia,Apple媒体服务,Apple媒体
music.apple.com|Apple Music|AppleMusic,Apple Music
news.apple.com|Apple News|AppleNews,Apple News
apple.com|Apple证书|ApplePKI,Apple证书
podcasts.apple.com|Apple 播客|ApplePodcasts,Apple 播客
apple.com|Apple代理|AppleProxy,Apple代理
tv.apple.com|Apple TV|AppleTV,Apple TV
apple.com|Apple 更新服务|AppleUpdate,Apple 更新服务,Apple 更新
apple.com|App Store|AppStore,App Store
archiveofourown.org|AO3同人作品存档|ArchiveOfOurOwn,AO3同人作品存档
archive.fo|Archive.today网页快照|ArchiveToday,Archive.today网页快照
archlinux.org|Arch Linux|ArchLinux,Arch Linux
arphic.com|文鼎科技|Arphic,文鼎科技
artstation.com|ArtStation|ArtStation
asahi.com|朝日新闻|Asahi,朝日新闻
asobostudio.com|Asobo游戏工作室|Asobo,Asobo游戏工作室
ubisoft.com|刺客教条 奥德赛|Assassin'sCreed-Odyssey,刺客教条 奥德赛
ubisoft.com|刺客教条 起源|Assassin'sCreed-Origins,刺客教条 起源
asus.com|华硕|ASUS,华硕
atlassian.com|Atlassian|Atlassian
att.com|AT&T|ATT,AT&T
attwatchtv.com|AT&T WatchTV|ATTWatchTV,AT&T WatchTV
autodesk.com|Autodesk 欧特克|Autodesk,Autodesk 欧特克
aviasales.com|Aviasales机票|Aviasales,Aviasales机票
amazon.com|Amazon Web Services|AWS,Amazon Web Services
azure.microsoft.com|Microsoft Azure|Azure,Microsoft Azure
bahamut.com.tw|巴哈姆特|Bahamut,巴哈姆特
baidu.com|百度|Baidu,百度
pan.baidu.com|百度云计算|BaiduCloud,百度云计算
baifendian.com|百分点|BaiFenDian,百分点
baishan.com|白山耘科技|BaiShanYunKeJi,白山耘科技,白山耘
bandcamp.com|Bandcamp音乐|Bandcamp,Bandcamp音乐
bangumi.tv|Bangumi番组|Bangumi,Bangumi番组
baofeng.com|暴风影音|BaoFengYingYin,暴风影音
barrons.com|巴伦周刊|Barrons,巴伦周刊
bbc.com|BBC|BBC
beatsbydre.com|Beats|Beats
beget.com|Beget托管|Beget,Beget托管
beisen.com|北森|Beisen,北森
bestbuy.com|百思买|Bestbuy,百思买
lppz.com|良品铺子|BeStore,良品铺子
bestv.com.cn|百视通|BestTV,百视通
bethesda.net|Bethesda游戏|Bethesda,Bethesda游戏
betterexplained.com|BetterExplained数学编程|BetterExplained,BetterExplained数学编程
bianfeng.com|边锋网络|BianFeng,边锋网络
bilibili.com|哔哩哔哩|BiliBili,哔哩哔哩
bilibili.com|B站游戏平台|BiliBiliGame,B站游戏平台,B站游戏
binance.com|币安交易所|Binance,币安交易所
bing.com|必应|Bing,必应
bitauto.com|易车|BitAuto,易车
bitsquare.io|Bisq交易所|BitSquare,Bisq交易所
bitwarden.com|Bitwarden 密码管理|Bitwarden,Bitwarden 密码管理
bjyouth.gov.cn|北京青年报|BJYouth,北京青年报
blender.org|Blender三维|Blender,Blender三维
blizzard.com|暴雪娱乐|Blizzard,暴雪娱乐
blogspot.com|Blogger / Blogspot|Blogspot,Blogger / Blogspot
bloomberg.com|彭博|Bloomberg,彭博
bluearchive.jp|蔚蓝档案|BlueArchive,蔚蓝档案
blued.com|Blued|Blued
sl916.com|深蓝互动游戏|BluepochGames,深蓝互动游戏,深蓝互动
blurams.com|Blurams 智能安防|Blurams,Blurams 智能安防
bmw.com|宝马|BMW,宝马
boc.cn|中国银行|BOC,中国银行
bankcomm.com|交通银行|BOCOM,交通银行
bohemia.net|Bohemia游戏|Bohemia,Bohemia游戏
booking.com|Booking预订|Booking,Booking预订
book.com.tw|博客来|Books,博客来
getbootstrap.com|BootCDN|Bootcss,BootCDN
boxun.com|博讯|BoXun,博讯
brave.com|Brave 浏览器|Brave,Brave 浏览器
bridgestone.com|普利司通轮胎|Bridgestone,普利司通轮胎
brightcove.com|BrightCove|BrightCove
brilliant.org|Brilliant 在线学习|Brilliant,Brilliant 在线学习
bubei.com|不背单词|BuBeiDanCi,不背单词
bushiroad.com|Bushiroad娱乐|Bushiroad,Bushiroad娱乐
buymeacoffee.com|Buy Me a Coffee|BuyMeACoffee,Buy Me a Coffee
buypass.com|Buypass|Buypass
bybit.com|Bybit交易所|Bybit,Bybit交易所
bytedance.com|字节跳动|ByteDance,字节跳动
cici.com|字节跳动国际 AI|ByteDanceAI,字节跳动国际 AI
cabletv.com.hk|Cable TV|CableTV,Cable TV
cainiao.com|菜鸟裹裹|CaiNiao,菜鸟裹裹
caixin.com|财新传媒|CaiXinChuanMei,财新传媒
calgoncarbon.com|Calgon Carbon|CalgonCarbon,Calgon Carbon
camera360.com|Camera360|Camera360
canon.com|佳能|Canon,佳能
canva.com|Canva 在线设计|Canva,Canva 在线设计
capitalonline.net|资本在线|CapitalOnline,资本在线
casimages.com|Casimages图片托管|CasImages,Casimages图片托管
cbs.com|CBS|CBS
ccb.com|建设银行|CCB,建设银行
cctv.com|央视|CCTV,央视
cdek.ru|CDEK快递|CDEK,CDEK快递
cdn77.com|CDN77|CDN77
cebbank.com|光大银行|CEB,光大银行
certinomis.com|Certinomis证书|Certinomis,Certinomis证书
certum.pl|Certum证书|Certum,Certum证书
cgbchina.com.cn|广发银行|CGB,广发银行
changyou.com|畅游|ChangYou,畅游
chegg.com|Chegg学习平台|Chegg,Chegg学习平台,Chegg学习
ctfile.com|城通网盘|ChengTongWangPan,城通网盘
10099.com.cn|中国广电|ChinaBroadnet,中国广电
10086.cn|中国移动|ChinaMobile,中国移动
chinanews.com.cn|中国新闻网|ChinaNews,中国新闻网
chinapost.cn|中国邮政|ChinaPost,中国邮政
chinaso.com|中国搜索|ChinaSo,中国搜索
189.cn|中国电信|ChinaTelecom,中国电信
10010.com|中国联通|ChinaUnicom,中国联通
chinaz.com|站长之家|Chinaz,站长之家
las.ac.cn|中国科学院文献情报中心|ChineseAcademyOfSciences,中国科学院文献情报中心
cht.com.tw|中华电信|CHT,中华电信
chuangkit.com|创客贴|ChuangKeTie,创客贴
cibn.cc|CIBN互联网电视|CIBN,CIBN互联网电视
cisco.com|思科|Cisco,思科
citicbank.com|中信银行|CITIC,中信银行
cityu.edu.hk|香港城市大学|CityUHK,香港城市大学
51ckjr.com|创客匠人|CKJR,创客匠人
clarivate.com|科睿唯安|Clarivate,科睿唯安
clearasil.cn|Clearasil护肤|Clearasil,Clearasil护肤
cloudcone.com|CloudCone VPS|CloudCone,CloudCone VPS
cloudconvert.com|格式转换|CloudConvert,格式转换
cloudflare.com|Cloudflare|Cloudflare
cloudflare.com|Cloudflare IPFS|CloudflareIPFS,Cloudflare IPFS
cloudinary.com|Cloudinary图片管理|Cloudinary,Cloudinary图片管理
cloudns.nz|ClouDNS|CloudNS,ClouDNS
clubhouse.com|Clubhouse|Clubhouse
clubhouse.com|Clubhouse IP|ClubhouseIP,Clubhouse IP
cmbchina.com|招商银行|CMB,招商银行
cnb.cool|CNB代码托管|CNB,CNB代码托管
cnblogs.com|博客园|CnBlogs,博客园
cnet.com|CNET科技|CNET,CNET科技
cnki.net|中国知网|CNKI,中国知网
cnn.com|CNN|CNN
cnnic.cn|中国互联网络信息中心|CNNIC,中国互联网络信息中心
code.org|Code.org编程教育|Code,Code.org编程教育
codeberg.org|Codeberg 代码托管|Codeberg,Codeberg 代码托管
codecademy.com|Codecademy编程学习|Codecademy,Codecademy编程学习
codeforces.com|Codeforces 编程竞赛|Codeforces,Codeforces 编程竞赛
coding.net|Coding.net代码托管|Coding,Coding.net代码托管
coinone.co.kr|Coinone交易所|Coinone,Coinone交易所
collabora.com|Collabora办公|Collabora,Collabora办公
caiyunapp.com|彩云天气|ColorfulClouds,彩云天气
comodoca.com|Comodo|Comodo
comss.club|Comss资讯|ComssOne,Comss资讯
contentful.com|Contentful CMS|Contentful,Contentful CMS
coolapk.com|酷安|CoolAPK,酷安
bing.com|Microsoft Copilot|Copilot,Microsoft Copilot
copy-manga.com|拷贝漫画|CopyManga,拷贝漫画
corel.com|Corel软件|Corel,Corel软件
costco.com|好市多/开市客|Costco,好市多/开市客
coupang.com|Coupang电商|Coupang,Coupang电商
coursera.org|Coursera 在线课程|Coursera,Coursera 在线课程
cowlevel.net|CowLevel游戏社区|CowLevel,CowLevel游戏社区
cowtransfer.com|奶牛快传|CowTransfer,奶牛快传
csdn.net|CSDN|CSDN
c-span.org|C-SPAN国会|CSPAN,C-SPAN国会
ctyun.cn|天翼云|CTYun,天翼云
cuhk.edu.hk|香港中文大学|CUHK,香港中文大学
curseforge.com|CurseForge游戏模组|CurseForge,CurseForge游戏模组
cursor.com|Cursor AI 编程工具|Cursor,Cursor AI 编程工具
cwseed.com|CW Seed|CWSeed,CW Seed
cybertrust.co.jp|CyberTrust证书认证|CyberTrust,CyberTrust证书认证
cygames.co.jp|Cygames游戏|Cygames,Cygames游戏
dailymail.com|每日邮报|Dailymail,每日邮报
dailymotion.com|Dailymotion|Dailymotion
damai.cn|红马传媒(大麦网)|DaMai,红马传媒(大麦网),红马传媒
dandanplay.com|弹弹Play|Dandanplay,弹弹Play
dandanzan.com|蛋蛋赞|DanDanZan,蛋蛋赞
dangdang.com|当当|DangDang,当当
dart.dev|Dart编程语言|Dart,Dart编程语言
dazn.com|DAZN|DAZN
debian.org|Debian|Debian
dedao.cn|得到|Dedao,得到
deepin.org|深度科技|Deepin,深度科技
deepseek.com|DeepSeek AI|DeepSeek,DeepSeek AI
deezer.com|Deezer|Deezer
dell.com|戴尔|Dell,戴尔
deppon.com|德邦快递|Deppon,德邦快递
deribit.com|Deribit期权|Deribit,Deribit期权
dettol.com|滴露|Dettol,滴露
deviantart.com|DeviantArt|DeviantArt
dewu.com|得物|Dewu,得物
pgyer.com|点测网科|DianCeWangKe,点测网科
didi.com|滴滴出行|DiDi,滴滴出行
digicert.com|DigiCert|DigiCert
digitalocean.com|DigitalOcean|DigitalOcean
dnion.com|帝联网络|DiLianWangLuo,帝联网络
dingdatech.com|丁丁地图|DingDaTech,丁丁地图
dingdong.com|叮咚买菜|DingDong,叮咚买菜
dingtalk.com|钉钉|DingTalk,钉钉
dxy.com|丁香园|DingXiangYuan,丁香园
discord.com|Discord|Discord
discourse.group|Discourse论坛平台|Discourse,Discourse论坛平台,Discourse论坛
discoveryplus.com|Discovery+|DiscoveryPlus,Discovery+
discuz.net|Discuz论坛|Discuz,Discuz论坛
4paradigm.com|第四范式|DiSiFanShi,第四范式
disneyplus.com|Disney|Disney
disqus.com|Disqus|Disqus
dji.com|大疆|DJI,大疆
dmit.io|DMIT云服务器|DMIT,DMIT云服务器
dmm.com|DMM|DMM
dnspod.cn|DNSPod|DNSPod
docker.com|Docker|Docker
domob.cn|多盟|Domob,多盟
dongchedi.com|懂车帝|DongCheDi,懂车帝
dood.so|Dood|Dood
douban.com|豆瓣|DouBan,豆瓣
douyin.com|抖音|DouYin,抖音
douyu.com|斗鱼|Douyu,斗鱼
dowjones.com|道琼斯|DowJones,道琼斯
dribbble.com|Dribbble设计|Dribbble,Dribbble设计
dropbox.com|Dropbox|Dropbox
dtdns.com|DtDNS|DtDNS
pan.baidu.com|百度网盘国际版|Dubox,百度网盘国际版
duckduckgo.com|DuckDuckGo|Duckduckgo,DuckDuckGo
duitang.com|堆糖图片|DuiTang,堆糖图片
duolingo.com|多邻国|Duolingo,多邻国
duowan.com|多玩|DuoWan,多玩
durex.com|杜蕾斯|Durex,杜蕾斯
duyaoss.com|虎牙斗鱼CDN|DuyaoSS,虎牙斗鱼CDN
dwion.com|Dwion CDN|Dwion,Dwion CDN
dyndns.org|DynDNS|DynDNS
dynu.com|Dynu|Dynu
ea.com|EA|EA
eastmoney.com|东方财富|EastMoney,东方财富
ebay.com|eBay|eBay
ebuyer.com|Ebuyer电子|Ebuyer,Ebuyer电子
economist.com|经济学人|Economist,经济学人
eduhk.edu.hk|香港教育大学|EduHK,香港教育大学
edx.org|edX 在线课程|edX,edX 在线课程
egghead.io|Egghead编程教程|Egghead,Egghead编程教程
electronjs.org|Electron跨平台框架|Electron,Electron跨平台框架
ele.me|饿了么|Eleme,饿了么
elsevier.com|Elsevier学术|Elsevier,Elsevier学术
embark.games|Embark游戏工作室|Embark,Embark游戏工作室
embl.de|EMBL|Embl,EMBL
emby.media|Emby|Emby
emojipedia.org|Emojipedia|Emojipedia
tvb.com|Encore TVB|EncoreTVB,Encore TVB
eneba.com|Eneba游戏交易|Eneba,Eneba游戏交易
enfaaplus.com|美赞臣|Enfa,美赞臣
entrust.cn|Entrust证书认证|Entrust,Entrust证书认证
envato.com|Envato创意|Envato,Envato创意
epicgames.com|Epic Games|Epic,Epic Games
epicgames.com|Epic隐私浏览器|EpicBrowser,Epic隐私浏览器,Epic隐私
escapefromtarkov.com|逃离塔科夫|EscapeFromTarkov,逃离塔科夫
eset.com|ESET杀毒|ESET,ESET杀毒
espn.com|ESPN|Espn,ESPN
everbright.com|光大集团|Everbright,光大集团
evernote.com|印象笔记|Evernote,印象笔记
facebook.com|Facebook|Facebook
faceit.com|FACEIT电竞平台|FACEIT,FACEIT电竞平台,FACEIT电竞
familymart.com.cn|全家便利店|FamilyMart,全家便利店
fandom.com|Fandom百科|Fandom,Fandom百科
fanfou.com|饭否科技|FanFou,饭否科技
fangzhengshufa.com|方正电子|FangZhengDianZi,方正电子
farfetch.com|Farfetch奢侈品|Farfetch,Farfetch奢侈品
faronics.com|Faronics|Faronics
fastlane.tools|Fastlane自动化发布|Fastlane,Fastlane自动化发布
fastly.com|Fastly CDN|Fastly,Fastly CDN
faststone.org|FastStone看图|FastStone,FastStone看图
fcbox.com|菜鸟丰巢|FCBox,菜鸟丰巢
fedoraproject.org|Fedora Linux|Fedora,Fedora Linux
feedly.com|Feedly阅读器|Feedly,Feedly阅读器
feishu.cn|飞书 字节跳动企业协作办公平台|Feishu,飞书 字节跳动企业协作办公平台,飞书 字节跳动企业协作办公
fliggy.com|飞猪|FeiZhu,飞猪
158c.com|凤侠网络|FengXiaWangLuo,凤侠网络
fun.tv|风行视频|FengXing,风行视频
fibank.bg|FIBank银行|FIBank,FIBank银行
figma.com|Figma 设计协作|Figma,Figma 设计协作
fiio.com|飞傲|Fiio,飞傲
finish.at|Finish亮碟|Finish,Finish亮碟
flickr.com|Flickr相册|Flickr,Flickr相册
flipboard.com|Flipboard|FlipBoard,Flipboard
flowus.cn|FlowUs协作|FlowUs,FlowUs协作
flowwow.com|Flowwow鲜花|Flowwow,Flowwow鲜花
flutter.dev|Flutter跨平台框架|Flutter,Flutter跨平台框架
fontawesome.com|FontAwesome图标|FontAwesome,FontAwesome图标
fontexplorerx.com|FontExplorer字体|FontExplorer,FontExplorer字体
fonts.com|Fonts.com字体|Fonts,Fonts.com字体
fontshop.com|FontShop字体|FontShop,FontShop字体
fontsinuse.com|FontsInUse|FontsInUse
forbes.com|福布斯|Forbes,福布斯
forza.net|Forza赛车游戏|Forza,Forza赛车游戏,Forza赛车
fox.com|Fox|Fox
fox.com|FOX NOW|FOXNOW,FOX NOW
framer.com|Framer设计|Framer,Framer设计
freecodecamp.org|FreeCodeCamp编程学习|FreeCodeCamp,FreeCodeCamp编程学习
freenode.net|Freenode IRC网络|Freenode,Freenode IRC网络
friday.tw|friDay影音|friDay,friDay影音
ft.com|金融时报|FT,金融时报
fubo.tv|FuboTV|FuboTV
funpay.com|FunPay游戏交易|FunPay,FunPay游戏交易
fun.tv|风行网|Funshion,风行网
fzdm.com|泛宅|FZDM,泛宅
gaijin.net|Gaijin游戏|Gaijin,Gaijin游戏
gamersky.com|游民星空|GamerSky,游民星空
gamesplanet.com|Gamesplanet游戏销售|Gamesplanet,Gamesplanet游戏销售
gandi.net|Gandi域名|Gandi,Gandi域名
gannett.com|Gannett传媒|Gannett,Gannett传媒
amap.com|高德|GaoDe,高德
garena.com|Garena|Garena
gate.io|Gate.io交易所|GateIO,Gate.io交易所
geely.com|吉利|Geely,吉利
geetest.com|极验验证|GeeTest,极验验证
gemini.google.com|Gemini|Gemini
gettyimages.com|Getty Images|Gettyimages,Getty Images
getui.com|个推|Getui,个推
ggsel.com|GGsel游戏账号|GGSel,GGsel游戏账号
gigabyte.com|技嘉|Gigabyte,技嘉
gismeteo.com|Gismeteo天气|Gismeteo,Gismeteo天气
gitbook.com|GitBook|GitBook
gitee.com|Gitee 码云|Gitee,Gitee 码云
github.com|GitHub|GitHub
gitlab.com|GitLab|GitLab
globalsign.com|Globalsign|GlobalSign,Globalsign
globo.com|Globo传媒|Globo,Globo传媒
glyphsapp.com|Glyphs字体|Glyphs,Glyphs字体
gmo.jp|GMO互联网|GMOInternet,GMO互联网
godaddy.com|GoDaddy域名|GoDaddy,GoDaddy域名
gog.com|GOG|Gog,GOG
golang.org|Go编程语言|Golang,Go编程语言
goodreads.com|Goodreads|Goodreads
google.com|Google|Google
google.com|Google DeepMind|GoogleDeepMind,Google DeepMind
earth.google.com|Google Earth|GoogleEarth,Google Earth
google.com|谷歌推送|GoogleFCM,谷歌推送
google.com|Google Play 商店|GooglePlay,Google Play 商店
google.com|Google 域名注册服务|GoogleRegistry,Google 域名注册服务,Google 域名注册
google.com|Google Voice|GoogleVoice,Google Voice
gracg.com|Gracg插画|Gracg,Gracg插画
grapheneos.com|GrapheneOS|GrapheneOS
x.ai|Grok AI|Grok,Grok AI
groq.com|Groq AI|Groq,Groq AI
gucci.com|古驰|Gucci,古驰
enet.com.cn|硅谷动力|GuiGuDongLi,硅谷动力
guokr.com|果壳|Guokr,果壳
haier.com|海尔|Haier,海尔
hnair.com|海南航空|HainanAirlines,海南航空
hamivideo.hinet.net|Hami Video|HamiVideo,Hami Video
hanyi.com|汉仪|HanYi,汉仪
hashicorp.com|HashiCorp|HashiCorp
haskell.org|Haskell编程语言|Haskell,Haskell编程语言
max.com|HBO|HBO
max.com|HBO(香港)|HBOHK,HBO(香港)
max.com|HBO(美国)|HBOUSA,HBO(美国)
hcaptcha.com|hCaptcha验证|HCaptcha,hCaptcha验证
freshippo.com|盒马|HeMa,盒马
herogame.com|英雄互娱|HeroGame,英雄互娱
heroku.com|Heroku|Heroku
hetzner.com|Hetzner云|Hetzner,Hetzner云
hibymusic.com|海贝音乐|HibyMusic,海贝音乐
hikvision.com|海康威视|Hikvision,海康威视
hinet.net|HiNet|HiNet
hkbn.com.hk|香港宽频|HKBN,香港宽频
hkbu.edu.hk|香港浸会大学|HKBU,香港浸会大学
hkedcity.net|香港教育城|HKedcity,香港教育城
hketgroup.com|香港经济日报|HKETGroup,香港经济日报
hkopentv.com|香港开电视|HKOpenTV,香港开电视
hku.edu.hk|香港大学|HKU,香港大学
hkust.edu.hk|香港科技大学|HKUST,香港科技大学
hm.com|H&M|HM,H&M
brew.sh|Homebrew包管理器|Homebrew,Homebrew包管理器
homedepot.com|Home Depot|HomeDepot,Home Depot
ecert.gov.hk|香港邮政证书|HongKongPost,香港邮政证书,香港邮政
hoyoverse.com|米哈游HoYoverse|HoYoverse,米哈游HoYoverse
hp.com|惠普|HP,惠普
hpplay.cn|乐播投屏|Hpplay,乐播投屏
hsbc.com|汇丰银行|HSBC,汇丰银行
wasu.cn|华数TV|HuaShuTV,华数TV
huawei.com|华为|Huawei,华为
huaweicloud.com|华为云计算|HuaweiCloud,华为云计算
huffpost.com|赫芬顿邮报|Huffpost,赫芬顿邮报
huggingface.co|Hugging Face|HuggingFace,Hugging Face
hujiang.com|沪江教育|HuJiang,沪江教育
hulu.com|Hulu|Hulu
hulu.jp|Hulu(日本)|HuluJP,Hulu(日本)
hulu.com|Hulu(美国)|HuluUSA,Hulu(美国)
humblebundle.com|Humble Bundle|HumbleBundle,Humble Bundle
mgtv.com|湖南TV|HunanTV,湖南TV
hupu.com|虎扑|Hupu,虎扑
hupun.com|湖畔直播|HuPun,湖畔直播
he.net|Hurricane Electric|HurricaneElectric,Hurricane Electric
huya.com|虎牙|HuYa,虎牙
ocnttv.com|HWTV|HWTV
interactivebrokers.com|盈透证券|IBKR,盈透证券
ibm.com|IBM|IBM
i-cable.com|香港有线电视|ICable,香港有线电视
icbc.com.cn|中国工商银行|ICBC,中国工商银行
apple.com|iCloud|iCloud
apple.com|iCloud Private Relay|iCloudPrivateRelay,iCloud Private Relay
identrust.com|Identrust|Identrust
idg.com|IDG集团|IDG,IDG集团
ieee.org|IEEE|IEEE
ifanr.com|爱范儿|ifanr,爱范儿
ifastcorp.com|iFAST金融|IFast,iFAST金融
iflytek.com|科大讯飞|iFlytek,科大讯飞
ihuman.com|洪恩教育|IHuman,洪恩教育
iina.io|IINA播放器|IINA,IINA播放器
ikea.com|宜家|IKEA,宜家
imagebam.com|ImageBam图片|ImageBam,ImageBam图片
imagecurl.com|ImageCurl图片|ImageCurl,ImageCurl图片
imageshack.com|ImageShack图片|ImageShack,ImageShack图片
imagetwist.com|ImageTwist图片|ImageTwist,ImageTwist图片
imdb.com|IMDb|IMDB,IMDb
imgbb.com|ImgBB图片|ImgBB,ImgBB图片
imgix.com|Imgix图片CDN|Imgix,Imgix图片CDN
imgur.com|Imgur|Imgur
imperial.ac.uk|帝国理工|ImperialCollege,帝国理工
inoreader.com|Inoreader阅读器|InoReader,Inoreader阅读器
inshot.com|InShot编辑|InShot,InShot编辑
insider.com|Insider商业|Insider,Insider商业
instagram.com|Instagram|Instagram
intel.com|英特尔|Intel,英特尔
intercom.com|Intercom|Intercom
intsig.com|合合信息|IntSig,合合信息
intuit.com|Intuit财务|Intuit,Intuit财务
ipfs.tech|IPFS 分布式存储|IPFS,IPFS 分布式存储
iqiyi.com|爱奇艺|iQIYI,爱奇艺
iqiyi.com|爱奇艺国际版|iQIYIIntl,爱奇艺国际版
ishumei.com|数美安全|IShuMei,数美安全
italkbb.com|iTalkBB|iTalkBB
itch.io|itch.io独立游戏|ItchIo,itch.io独立游戏,itch.io独立
apple.com|Apple iTunes|iTunes,Apple iTunes
itv.com|ITV|ITV
truenas.com|TrueNAS存储|IXsystems,TrueNAS存储
japonx.com|Japonx|Japonx
jetbrains.com|JetBrains|Jetbrains,JetBrains
jetbrains.com|JetBrains AI|JetBrainsAI,JetBrains AI
jfrog.com|JFrog|Jfrog,JFrog
jianguoyun.com|坚果云|JianGuoYun,坚果云
jianshu.com|简书|JianShu,简书
jibencaozuo.com|基本操作|JiBenCaoZuo,基本操作
jiemian.com|界面新闻|JieMian,界面新闻
jiguang.cn|极光推送|JiGuang,极光推送
jd.com|京东|JingDong,京东
jdcloud.com|京东云计算|JingDongCloud,京东云计算
jjwxc.net|晋江文学|JinJiangWenXue,晋江文学
jiyu-kobo.co.jp|积蓄工房|JiyuKobo,积蓄工房
jlc.com|嘉立创|JLC,嘉立创
johren.games|Johren游戏平台|Johren,Johren游戏平台,Johren游戏
joox.com|JOOX|JOOX
jquery.com|jQuery|Jquery,jQuery
jsdelivr.com|jsDelivr|Jsdelivr,jsDelivr
jtexpress.com.cn|极兔速递|JTExpress,极兔速递
juejin.cn|掘金|JueJin,掘金
jushuitan.com|聚水潭ERP|JuShuiTan,聚水潭ERP
jwplayer.com|JW Player|Jwplayer,JW Player
kaggle.com|Kaggle 数据科学|Kaggle,Kaggle 数据科学
kakaocorp.com|KakaoTalk|KakaoTalk
imkan.tv|Kan TV|Kantv,Kan TV
kechuang.org|科创|KeChuang,科创
gotokeep.com|Keep|Keep
keybase.io|Keybase加密|Keybase,Keybase加密
khanacademy.org|可汗学院|KhanAcademy,可汗学院
kick.com|Kick直播|Kick,Kick直播
amazon.com|Amazon Kindle|Kindle,Amazon Kindle
kingsmith.cn|金史密斯|KingSmith,金史密斯
kingsoft.com|金山软件|Kingsoft,金山软件
ksyun.com|金山云计算|KingsoftCloud,金山云计算
kkbox.com|KKBOX|KKBOX
kktv.me|KKTV|KKTV
konami.com|Konami科乐美|Konami,Konami科乐美
koolearn.com|新东方在线|KooLearn,新东方在线
koudai.com|口袋时尚|KouDaiShiShang,口袋时尚
kraken.com|Kraken交易所|Kraken,Kraken交易所
ku6.com|酷6|Ku6,酷6
kuaidi100.com|快递100|KuaiDi100,快递100
kuaishou.com|快手|KuaiShou,快手
kuangshitech.com|旷视|KuangShi,旷视
kubernetes.io|Kubernetes|Kubernetes
kucoin.com|KuCoin交易所|KuCoin,KuCoin交易所
kugou.com|酷狗/酷我|KugouKuwo,酷狗/酷我
kuke.com|库客音乐|KuKeMusic,库客音乐
kurogames.com|库洛游戏|KuroGames,库洛游戏
kyodonews.jp|共同通讯社|KyodoNews,共同通讯社
lanzou.com|蓝奏云|LanZou,蓝奏云
laracasts.com|Laracasts教程|Laracasts,Laracasts教程
last.fm|Last.fm|LastFM,Last.fm
lastpass.com|LastPass|LastPass
launchpad.net|Launchpad代码托管|Launchpad,Launchpad代码托管
leju.com|乐居|LeJu,乐居
lenovo.com|联想|Lenovo,联想
letsencrypt.org|Let's Encrypt SSL证书|LetsEncrypt,Let's Encrypt SSL证书
le.com|乐视|LeTV,乐视
lg.com|LG|LG
lianjia.com|链家|Lianjia,链家
liberapay.com|Liberapay赞助|Liberapay,Liberapay赞助
libgen.fun|Library Genesis|LibGen,Library Genesis
liepin.com|猎聘|LiePin,猎聘
lighter.exchange|Lighter DeFi|Lighter,Lighter DeFi
likee.com|Likee短视频|Likee,Likee短视频
limelight.com|Limelight|Limelight
linakesi.com|乐言科技|LinakeSi,乐言科技
line.me|Line|Line
linetv.tw|Line TV|LineTV,Line TV
linguee.com|Linguee翻译|Linguee,Linguee翻译
linkedin.com|领英|LinkedIn,领英
linotype.com|Linotype字体|Linotype,Linotype字体
linux.org|Linux操作系统|Linux,Linux操作系统
linux.do|Linux技术社区|LinuxDo,Linux技术社区
litv.tv|LiTV|LiTV
liveperson.com|LivePerson|LivePerson
lizhi.fm|荔枝FM|LiZhi,荔枝FM
localbitcoins.com|LocalBitcoins|LocalBitcoins
logitech.com|罗技|Logitech,罗技
londonreal.tv|London Real|LondonReal,London Real
longbridge.com|长桥证券|LongBridge,长桥证券
louisvuitton.com|路易威登|LouisVuitton,路易威登
lowiro.com|Lowiro Arcaea|Lowiro,Lowiro Arcaea
luckincoffee.com|瑞幸咖啡|LuckinCoffee,瑞幸咖啡
ludashi.com|鲁大师|LuDaShi,鲁大师
lumion.com|Lumion渲染|Lumion,Lumion渲染
aqara.com|绿米联创|LvMiLianChuang,绿米联创
lysol.com|来苏尔|Lysol,来苏尔
madshi.net|Madshi渲染|Madshi,Madshi渲染
mafengwo.cn|马蜂窝|MaFengWo,马蜂窝
magnit.com|Magnit零售|Magnit,Magnit零售
mail.com|mail.com邮件|MailCom,mail.com邮件
mail.ru|Mail.ru|Mailru,Mail.ru
mainichi.jp|每日新闻|Mainichi,每日新闻
manorama.com|Manorama|Manorama
maoyun.com|猫云|MaoCloud,猫云
mapbox.com|Mapbox地图|Mapbox,Mapbox地图
makeding.com|思杰马克丁软件|Marketing,思杰马克丁软件,思杰马克丁
marvel.com|漫威|Marvel,漫威
mastercard.com|万事达卡|Mastercard,万事达卡
masterclass.com|MasterClass|MasterClass
matrix.org|Matrix 即时通信|Matrix,Matrix 即时通信
mcdonalds.com.cn|麦当劳|McDonalds,麦当劳
developer.mozilla.org|MDN Web文档|MDN,MDN Web文档
meadjohnson.com|美赞臣营养|MeadJohnson,美赞臣营养
medium.com|Medium写作平台|Medium,Medium写作平台,Medium写作
mega.io|MEGA|MEGA
meitu.com|美图|MeiTu,美图
meituan.com|美团|MeiTuan,美团
meizu.com|魅族|MeiZu,魅族
metabrainz.org|MetaBrainz数据|MetaBrainz,MetaBrainz数据
metacritic.com|Metacritic|Metacritic
me.watch|MeWatch|MeWatch
microsoft.com|Microsoft|Microsoft
microsoft.com|Microsoft 开发服务|MicrosoftDev,Microsoft 开发服务,Microsoft 开发
microsoftedge.com|Microsoft Edge|MicrosoftEdge,Microsoft Edge
microsoft.com|微软证书|MicrosoftPKI,微软证书
microsoft.com|Microsoft 代理|MicrosoftProxy,Microsoft 代理
midea.com|美的|Midea,美的
migu.cn|咪咕|Migu,咪咕
mikrotik.com|MikroTik路由|MikroTik,MikroTik路由
miaozhen.com|明略昭辉|MingLueZhaoHui,明略昭辉
mini.com|MINI汽车|Mini,MINI汽车
miniso.com|名创优品|Miniso,名创优品
misskey.io|Misskey社交|Misskey,Misskey社交
mit.edu|麻省理工|MIT,麻省理工
miiiw.com|米物|MiWu,米物
mochajs.org|Mocha.js测试框架|Mocha,Mocha.js测试框架
modrinth.com|Modrinth模组|Modrinth,Modrinth模组
mogujie.com|蘑菇街|Mogujie,蘑菇街
minecraft.net|Mojang游戏|Mojang,Mojang游戏
moji.com|墨迹天气|Moji,墨迹天气
momoshop.com.tw|MOMO購物網|MOMOShop,MOMO購物網
mongodb.com|MongoDB|MongoDB
monotype.com|Monotype字体|Monotype,Monotype字体
moo.qq.com|MOO音乐|MOOMusic,MOO音乐
moonvy.com|Moonvy视频|Moonvy,Moonvy视频
moov.hk|MOOV|MOOV
morisawa.co.jp|森泽字体|Morisawa,森泽字体
mortein.com|Mortein杀虫|Mortein,Mortein杀虫
motorola.com|摩托罗拉|Motorola,摩托罗拉
move-free.net|MoveFree维骨力|MoveFree,MoveFree维骨力
mozilla.org|Mozilla|Mozilla
mucinex.com|Mucinex感冒药|Mucinex,Mucinex感冒药
muji.com|无印良品|MUJI,无印良品
musixmatch.com|Musixmatch歌词|Musixmatch,Musixmatch歌词
mvideo.ru|M.Video电子|MVideo,M.Video电子
mxroute.com|MXRoute邮件|MXRoute,MXRoute邮件
channel5.com|My5|My5
myfonts.com|MyFonts字体|MyFonts,MyFonts字体
myradio.com.hk|MyRadio电台|MyRadio,MyRadio电台
mytvsuper.com|myTV SUPER|myTVSUPER,myTV SUPER
mzed.com|MZed影视教育|MZed,MZed影视教育
n26.com|N26银行|N26,N26银行
narwal.com|云鲸扫地机|Narwal,云鲸扫地机
naver.com|Naver|Naver
naver.com|Naver TV|NaverTV,Naver TV
nbc.com|NBC|NBC
nbc.com|NBC环球|NBCUniversal,NBC环球
neowin.net|Neowin科技|Neowin,Neowin科技
netcup.com|NetCup托管|NetCup,NetCup托管
163.com|网易|NetEase,网易
163.com|网易云计算|NeteaseCloud,网易云计算
music.163.com|网易云音乐|NetEaseMusic,网易云音乐
netflix.com|Netflix|Netflix
netlify.com|Netlify网站托管|Netlify,Netlify网站托管
newegg.com|新蛋|Newegg,新蛋
newscorp.com|新闻集团|NewsCorp,新闻集团
nexo.com|Nexo借贷|Nexo,Nexo借贷
nexon.com|Nexon网游|Nexon,Nexon网游
nga.cn|NGA|NGA
ngaa.cn|新流云|NGAA,新流云
nginx.org|Nginx|Nginx
nhk.or.jp|日本放送协会|NHK,日本放送协会
niconico.jp|Niconico|Niconico
nic.ru|RU域名注册|NICru,RU域名注册
nike.com|耐克|Nike,耐克
nikkei.com|日经|Nikkei,日经
nintendo.com|任天堂|Nintendo,任天堂
nodeseek.com|NodeSeek VPS社区|NodeSeek,NodeSeek VPS社区
noip.com|No-IP 动态 DNS|NoIP,No-IP 动态 DNS
nordstrom.com|Nordstrom|Nordstrom
notion.so|Notion|Notion
nowcoder.com|牛客网|NowCoder,牛客网
nowtv.com|Now TV|NowTV,Now TV
npmjs.com|NPM 包管理|NPM,NPM 包管理
nurofen.com|Nurofen布洛芬|Nurofen,Nurofen布洛芬
nvidia.com|英伟达|Nvidia,英伟达
nypost.com|纽约邮报|NYPost,纽约邮报
nytimes.com|纽约时报|NYTimes,纽约时报
oculus.com|Oculus VR|Oculus,Oculus VR
okaapps.com|OKA Apps|OKAApps,OKA Apps
okjike.com|即刻|OkJike,即刻
okx.com|OKX交易所|OKX,OKX交易所
onedrive.live.com|OneDrive|OneDrive
onekey.so|OneKey钱包|OneKey,OneKey钱包
oneplus.com|一加|OnePlus,一加
op.gg|OnePiece|OP,OnePiece
openai.com|OpenAI|OpenAI
opencollective.com|Open Collective|OpenCollective,Open Collective
openjsf.org|OpenJS基金会|OpenJSFoundation,OpenJS基金会
opensourceinsights.dev|开源分析|OpenSourceInsights,开源分析
openspeedtest.com|OpenSpeedTest|OpenSpeedTest
openstreetmap.org|OpenStreetMap|OpenStreetMap
openweathermap.org|OpenWeather|OpenWeather
openwrt.org|OpenWrt|OpenWrt
opera.com|Opera浏览器|Opera,Opera浏览器
oppo.com|OPPO|OPPO
oreilly.com|O'Reilly|Oreilly,O'Reilly
organicmaps.app|Organic Maps|OrganicMaps,Organic Maps
ea.com|Origin|Origin
oschina.net|开源中国|OSChina,开源中国
osu.ppy.sh|osu!音游|Osu,osu!音游
otpbank.al|OTP银行|OTPBank,OTP银行
oup.com|牛津大学出版|OUP,牛津大学出版
opera.com|欧朋浏览器|OuPeng,欧朋浏览器
ozon.ru|Ozon电商|Ozon,Ozon电商
pagecdn.com|PageCDN|PageCDN
pandora.com|Pandora|Pandora
pandora.com|Pandora TV|PandoraTV,Pandora TV
pastebin.com|Pastebin文本分享|Pastebin,Pastebin文本分享
patreon.com|Patreon创作者赞助|Patreon,Patreon创作者赞助
pawchive.pw|Pawchive图片|Pawchive,Pawchive图片
paypal.com|PayPal|PayPal
pbs.org|PBS|PBS
pccw.com|电讯盈科|PCCW,电讯盈科
pchome.com.tw|PChome Online 網路家庭|PChomeTW,PChome Online 網路家庭
pearson.com|培生教育|Pearson,培生教育
osu.ppy.sh|peppy音游|Peppy,peppy音游
perl.org|Perl编程语言|Perl,Perl编程语言
perplexity.ai|Perplexity AI|Perplexity,Perplexity AI
pgyer.com|蒲公英内测|Pgyer,蒲公英内测
ifeng.com|凤凰网|Phoenix,凤凰网
picsee.co|PicSee|Picsee,PicSee
mypikpak.com|PikPak|PikPak
pinduoduo.com|拼多多|Pinduoduo,拼多多
pingan.com|平安|PingAn,平安
pinterest.com|Pinterest|Pinterest
pixhost.to|PixHost图片|PixHost,PixHost图片
pixiv.net|Pixiv|Pixiv
pixnet.cc|痞客邦|Pixnet,痞客邦
playcover.io|PlayCover游戏运行|PlayCover,PlayCover游戏运行
playstation.com|PlayStation|PlayStation
plex.tv|Plex媒体服务器|Plex,Plex媒体服务器
pluto.tv|Pluto TV|PlutoTV,Pluto TV
pocketcasts.com|Pocket Casts|PocketCasts,Pocket Casts
poe.com|Poe AI|Poe,Poe AI
polocloud.net|PoloCloud|PoloCloud
polymer-project.org|Google Polymer|Polymer,Google Polymer
polyu.edu.hk|香港理工|PolyU,香港理工
polyv.net|Polyv视频云|Polyv,Polyv视频云
postimages.org|PostImages图片|PostImages,PostImages图片
potato.im|Potato Chat|PotatoChat,Potato Chat
pptv.com|PPTV|PPTV
primevideo.com|Prime Video|PrimeVideo,Prime Video
progress.com|Progress软件|Progress,Progress软件
pjsekai.sega.jp|世界计划音游|ProjectSekai,世界计划音游
proquest.com|ProQuest学术|ProQuest,ProQuest学术
proton.me|ProtonMail|Protonmail,ProtonMail
psbc.com|中国邮政储蓄银行|PSBC,中国邮政储蓄银行
pstorage.space|PStorage云存储|PStorage,PStorage云存储
pubg.com|PUBG绝地求生|PUBG,PUBG绝地求生
pugpig.com|Pugpig出版|Pugpig,Pugpig出版
cygames.co.jp|公主连结|Purikonejp,公主连结
python.org|Python|Python
qcc.com|企查查|QCC,企查查
qianxin.com|奇安信|QiAnXin,奇安信
qimao.com|七猫小说|QiMao,七猫小说
qingcloud.com|青云QingCloud|QingCloud,青云QingCloud
qingting.fm|蜻蜓 FM|QingTingFM,蜻蜓 FM
qiniu.com|七牛云|QiNiuYun,七牛云
qixin.com|企查宝|QiXin,企查宝
qnap.com|威联通QNAP|QNAP,威联通QNAP
qobuz.com|Qobuz|Qobuz
qt.io|Qt跨平台框架|Qt,Qt跨平台框架
qualcomm.com|高通|Qualcomm,高通
quantil.com|Quantil CDN|Quantil,Quantil CDN
synology.com|QuickConnect|QuickConnect
quora.com|Quora|Quora
qwant.com|Qwant搜索|Qwant,Qwant搜索
qweather.com|和风天气|QWeather,和风天气
radiko.jp|Radiko日本电台|Radiko,Radiko日本电台
raiffeisenbank.ba|Raiffeisen银行|RaiffeisenBank,Raiffeisen银行
rakuten.com|乐天|Rakuten,乐天
rarbg.is|RARBG|Rarbg,RARBG
razer.com|雷蛇|Razer,雷蛇
rb.com|利洁时|RB,利洁时
readthedocs.org|Read the Docs 文档服务|ReadTheDocs,Read the Docs 文档服务,Read the Docs 文档
rea-group.com|REA房产|REAGroup,REA房产
realtype.co.jp|RealType字体|RealType,RealType字体
reddit.com|Reddit|Reddit
redis.io|Redis|Redis
redotpay.com|RedotPay支付|RedotPay,RedotPay支付
reg.com|REG.RU域名|REGru,REG.RU域名
renren.com|人人网|Renren,人人网
reuters.com|路透社|Reuters,路透社
riotgames.com|Riot Games|Riot,Riot Games
roblox.com|Roblox|Roblox
rockstargames.com|Rockstar Games|Rockstar,Rockstar Games
roku.com|Roku流媒体|Roku,Roku流媒体
rsshub.app|RSSHub聚合工具|RSSHub,RSSHub聚合工具
rthk.hk|香港电台|RTHK,香港电台
ruanmei.com|软媒|RuanMei,软媒
ruby-lang.org|Ruby编程语言|Ruby,Ruby编程语言
ruby-china.org|Ruby China社区|RubyChina,Ruby China社区
rumble.com|Rumble视频|Rumble,Rumble视频
rust-lang.org|Rust 语言生态|Rust,Rust 语言生态
ruten.com.tw|露天拍卖|Ruten,露天拍卖
safepal.com|SafePal钱包|SafePal,SafePal钱包
salesforce.com|Salesforce|Salesforce
samsung.com|三星|Samsung,三星
sankei.com|产经新闻|Sankei,产经新闻
sb.sb|SB DNS服务|SB,SB DNS服务
scala-lang.org|Scala编程语言|Scala,Scala编程语言
scaleflex.com|Scaleflex|Scaleflex
schoopia.com|同学派|Schoopia,同学派
schwab.com|嘉信理财|Schwab,嘉信理财
webofscience.com|Web of Science|SCI,Web of Science
elsevier.com|ScienceDirect 科学文献|ScienceDirect,ScienceDirect 科学文献
sci-hub.ee|Sci-Hub学术|SciHub,Sci-Hub学术
scmp.com|南华早报|SCMP,南华早报
seasungames.com|西山居|Seasun,西山居
sectigo.com|Sectigo|Sectigo
segmentfault.com|思否开发者社区|SegmentFault,思否开发者社区
selectel.com|Selectel云|Selectel,Selectel云
sentry.io|Sentry 错误监控|Sentry,Sentry 错误监控
servicepipe.ru|ServicePipe|ServicePipe
sf-express.com|顺丰速运|SFExpress,顺丰速运
shanbay.com|扇贝|Shanbay,扇贝
mdvdns.com|上海聚效|ShangHaiJuXiao,上海聚效
shanling.com|山灵音响|Shanling,山灵音响
sharethis.com|ShareThis分享|ShareThis,ShareThis分享
sm.cn|神马|ShenMa,神马
chaoxing.com|世纪超星|ShiJiChaoXing,世纪超星
senseagro.com|识农智能科技|ShiNongZhiKe,识农智能科技,识农智能
shopee.com|Shopee|Shopee
shopify.com|Shopify|Shopify
showtime.com|Showtime流媒体|Showtime,Showtime流媒体
signal.org|Signal|Signal
sina.com.cn|新浪|Sina,新浪
singtao.com|星岛日报|SingTaoNews,星岛日报
apple.com|Siri|Siri
sitepoint.com|SitePoint|SitePoint
skillshare.com|Skillshare|Skillshare
sky.com|Sky|Sky
sky.com|Sky GO|SkyGO,Sky GO
slack.com|Slack|Slack
sling.com|Sling TV|Sling,Sling TV
smartone.com|数码通|SmarTone,数码通
smzdm.com|什么值得买|SMZDM,什么值得买
snapchat.com|Snapchat|Snap,Snapchat
snk-corp.co.jp|SNK游戏|SNK,SNK游戏
snodehome.com|SNode智能家居|SNodeHome,SNode智能家居
softbank.jp|软银|SoftBank,软银
sogou.com|搜狗|Sogou,搜狗
sohu.com|搜狐|Sohu,搜狐
sony.com|索尼|Sony,索尼
fang.com|搜房|SouFang,搜房
soundcloud.com|SoundCloud|SoundCloud
sourceforge.net|SourceForge|SourceForge
sr.ht|SourceHut代码托管|SourceHut,SourceHut代码托管
spacemail.com|SpaceMail邮件|SpaceMail,SpaceMail邮件
spaceship.com|Spaceship域名|Spaceship,Spaceship域名
spacex.com|SpaceX|SpaceX
sparkmailapp.com|Spark|Spark
speedtest.net|Speedtest|Speedtest
spiceworks.com|Spiceworks社区|Spiceworks,Spiceworks社区
spotify.com|Spotify|Spotify
springer.com|Springer学术|Springer,Springer学术
squareup.com|Square支付|SquareUp,Square支付
sslcom.cn|SSL.com证书|SSLCom,SSL.com证书
stackoverflow.com|Stack Exchange|Stackexchange,Stack Exchange
stackpath.com|StackPath CDN|StackPath,StackPath CDN
stage1st.com|Stage1st论坛|Stage1st,Stage1st论坛
sc.com|渣打银行|StandardChartered,渣打银行
starbucks.com|星巴克|Starbucks,星巴克
starfieldtech.com|Starfield SSL|StarfieldTech,Starfield SSL
starplus.com|Star+流媒体|StarPlus,Star+流媒体
startpage.com|Startpage搜索|Startpage,Startpage搜索
starworldgames.com|StarWorld游戏平台|StarWorld,StarWorld游戏平台,StarWorld游戏
staticfile.net|Staticfile前端CDN|StaticFile,Staticfile前端CDN
store.steampowered.com|Steam|Steam
store.steampowered.com|Steam中国|SteamCN,Steam中国
steamunlocked.net|SteamUnlocked游戏资源|SteamUnlocked,SteamUnlocked游戏资源
steemit.com|Steemit|Steemit
sto.cn|申通快递|STOExpress,申通快递
straitsx.com|StraitsX支付|StraitsX,StraitsX支付
streamable.com|Streamable视频|Streamable,Streamable视频
strepsils.at|Strepsils润喉|Strepsils,Strepsils润喉
stripe.com|Stripe 支付服务|Stripe,Stripe 支付服务,Stripe 支付
sublimetext.com|Sublime Text|SublimeText,Sublime Text
sumkoo.com|数木科技|SumKoo,数木科技
suning.com|苏宁|SuNing,苏宁
supercell.com|Supercell|Supercell
suruga-ya.com|駿河屋|SurugaYa,駿河屋
svp-team.com|SVP视频增强|SVP,SVP视频增强
swift.org|Swift|Swift
swisssign.com|SwissSign证书|SwissSign,SwissSign证书
symantec.com|赛门铁克证书|SymantecPKI,赛门铁克证书,赛门铁克
synology.com|群晖|Synology,群晖
qianqian.com|太合音乐|TaiheMusic,太合音乐
taikang.com|泰康|TaiKang,泰康
tailscale.com|Tailscale 组网|Tailscale,Tailscale 组网
skyking.com.tw|台湾好|TaiWanGood,台湾好
take2games.com|Take-Two Interactive|TakeTwo,Take-Two Interactive
taomee.com|淘米|Taomee,淘米
taptap.cn|TapTap|TapTap
target.com|Target零售|Target,Target零售
taylorfrancis.com|Taylor&Francis|TaylorFrancis,Taylor&Francis
tcl.com|TCL|TCL
teambition.com|Teambition|Teambition
teamspeak.com|TeamSpeak语音通讯|TeamSpeak,TeamSpeak语音通讯
teamviewer.com|TeamViewer|TeamViewer
technogym.com|Technogym健身|Technogym,Technogym健身
techtimes.com|TechTimes|TechTimes
telegram.org|Telegram|Telegram
qq.com|腾讯|Tencent,腾讯
tencentcloud.com|腾讯云计算|TencentCloud,腾讯云计算
qq.com|腾讯开发服务|TencentDev,腾讯开发服务,腾讯开发
qq.com|腾讯英雄联盟手游|TencentLoLMobile,腾讯英雄联盟手游
qq.com|腾讯音乐娱乐|TencentTME,腾讯音乐娱乐
v.qq.com|腾讯视频|TencentVideo,腾讯视频
tendcloud.com|腾云数据|TendCloud,腾云数据
pan.baidu.com|TeraBox|TeraBox
termux.com|Termux终端|Termux,Termux终端
tesla.com|特斯拉|Tesla,特斯拉
apple.com|TestFlight|TestFlight
latex-project.org|TeX排版|TeX,TeX排版
tgbus.com|电玩巴士|TGBus,电玩巴士
theguardian.com|卫报|TheGuardian,卫报
linux.org|Linux基金会|TheLinuxFoundation,Linux基金会
thesun.co.uk|太阳报|TheSun,太阳报
thetimes.co.uk|泰晤士报|TheTimes,泰晤士报
thetype.com|TheType字体|TheType,TheType字体
reuters.com|汤森路透|ThomsonReuters,汤森路透
threads.net|Threads社交|Threads,Threads社交
tiancity.com|天畅网络|TianCity,天畅网络
kankan.com|天天看看|TianTianKanKan,天天看看
6rencn.com|天威诚信|TianWeiChengXin,天威诚信
tianya.cn|天涯社区|TianYaForum,天涯社区
tidal.com|TIDAL|TIDAL
tidelift.com|Tidelift赞助|Tidelift,Tidelift赞助
itigerup.com|老虎证券|TigerFintech,老虎证券
tiktok.com|TikTok|TikTok
timeweb.com|Timeweb托管|Timeweb,Timeweb托管
themoviedb.org|TMDB 影视数据库|TMDB,TMDB 影视数据库
tmtpost.com|钛媒体|TMTPost,钛媒体
tokyo-sports.co.jp|东京体育|TokyoSports,东京体育
tonec.com|IDM下载器|Tonec,IDM下载器
ly.com|同程|TongCheng,同程
thetrackernetwork.com|Tracker游戏统计|TrackerNetwork,Tracker游戏统计
trae.ai|Trae AI 编程|Trae,Trae AI 编程
translatewiki.net|Translatewiki|TranslateWiki,Translatewiki
trello.com|Trello 项目管理|Trello,Trello 项目管理
trustasia.com|天威诚信证书|TrustAsia,天威诚信证书,天威诚信
trustwave.com|Trustwave安全|Trustwave,Trustwave安全
tubi.tv|Tubi流媒体|Tubi,Tubi流媒体
tumblr.com|Tumblr|Tumblr
tuta.com|Tuta 加密邮件|Tutanota,Tuta 加密邮件
tvb.com|TVB|TVB
thetvdb.com|TVDB 影视数据库|TVDB,TVDB 影视数据库
tver.jp|TVer|TVer
twca.com.tw|TWCA证书|TWCA,TWCA证书
twilio.com|Twilio通信|Twilio,Twilio通信
twitch.tv|Twitch|Twitch
twitter.com|Twitter|Twitter
adobe.com|Adobe Fonts|Typekit,Adobe Fonts
typenetwork.com|TypeNetwork字体|TypeNetwork,TypeNetwork字体
typography.com|Typography字体|Typography,Typography字体
u17.com|有妖气|U17,有妖气
uber.com|Uber|Uber
ubisoft.com|育碧|UBI,育碧
ubisoft.com|育碧游戏|Ubisoft,育碧游戏
ubuntu.com|Ubuntu|Ubuntu
ubuntukylin.com|优麒麟|UbuntuKylin,优麒麟
uc.cn|UC浏览器|UC,UC浏览器
ucloud.cn|优刻得|UCloud,优刻得
udacity.com|Udacity教育|Udacity,Udacity教育
udemy.com|Udemy 在线课程|Udemy,Udemy 在线课程
umeng.com|友盟+|Umeng,友盟+
unionpay.com|中国银联|UnionPay,中国银联
unity.cn|Unity|Unity
liv.ac.uk|利物浦大学|UOLiv,利物浦大学
upyun.com|又拍云|UPYun,又拍云
usersdrive.com|UsersDrive文件托管|UsersDrive,UsersDrive文件托管
uug22.com|UU游戏语音|UUChat,UU游戏语音
v8.dev|V8 JavaScript引擎|V8,V8 JavaScript引擎
vancl.com|凡客|Vancl,凡客
vanish.at|Vanish衣物护理|Vanish,Vanish衣物护理
vaptcha.com|Vaptcha验证|Vaptcha,Vaptcha验证
veet.com|Veet脱毛|Veet,Veet脱毛
vercel.com|Vercel|Vercel
verisign.com|Verisign|Verisign
verizon.com|Verizon|Verizon
vgtime.com|VGTime游戏资讯|VGTime,VGTime游戏资讯
vidol.tv|Vidol TV|VidolTV,Vidol TV
vikacg.com|VikACG|VikACG
viki.com|Viki|Viki
vimeo.com|Vimeo|Vimeo
vip.com|唯品会|VipShop,唯品会
visa.com|VISA|VISA
visual-arts.jp|Visual Arts游戏|VisualArts,Visual Arts游戏
viu.com|Viu视频|Viu,Viu视频
viu.tv|ViuTV|ViuTV
vivo.com|vivo|Vivo,vivo
vk.com|VK|VK
vmware.com|VMware虚拟化|VMware,VMware虚拟化
volcengine.com|火山引擎|Volcengine,火山引擎
theverge.com|Vox Media|Voxmedia,Vox Media
vrcdn.cloud|VRCDN直播|VRCDN,VRCDN直播
vrchat.com|VRChat社交|VRChat,VRChat社交
vultr.com|Vultr云服务器|Vultr,Vultr云服务器
wallhaven.cc|Wallhaven壁纸|Wallhaven,Wallhaven壁纸
walmart.com|Walmart|Walmart
wanfangdata.com.cn|万方数据|WanFang,万方数据
wangsu.com|网宿科技|WangSuKeJi,网宿科技
onethingcloud.com|网心科技|WangXinKeJi,网心科技
daxianglingke.com|玩咖欢聚|WanKaHuanJu,玩咖欢聚
wanmei.com|完美世界|WanMeiShiJie,完美世界
wargaming.net|Wargaming游戏|WarGaming,Wargaming游戏
wasu.cn|华数传媒|Wasu,华数传媒
wbgames.com|WB Games|WBGames,WB Games
weathercn.com|华风天气|WeatherCN,华风天气
archive.org|网络存档|WebArchive,网络存档
webex.com|WebEx会议|WebEx,WebEx会议
webtype.com|WebType字体|WebType,WebType字体
weixin.qq.com|微信|WeChat,微信
weibo.com|微博|Weibo,微博
weiphone.net|威锋网|WeiPhone,威锋网
dicom365.com|微至云动|WeiZhiYunDong,微至云动
sojump.com|问卷星|WenJuanXing,问卷星
wenshushu.cn|文叔叔传输|WenShuShu,文叔叔传输
westerndigital.com|西部数据|Westerndigital,西部数据
wetv.vip|WeTV|WeTV
whatsapp.com|WhatsApp|Whatsapp,WhatsApp
wholefoods.com|Whole Foods|WholeFoods,Whole Foods
whoosh.bike|Whoosh出行|Whoosh,Whoosh出行
wifi.com|WiFi万能钥匙|WiFiMaster,WiFi万能钥匙
moegirl.org.cn|中文百科|WikiCN,中文百科
wikidot.com|Wikidot|WikiDot,Wikidot
wikihow.com|WikiHow百科|WikiHow,WikiHow百科
wikimedia.org|维基媒体|Wikimedia,维基媒体
wikipedia.org|维基|Wikipedia,维基
wildberries.ru|Wildberries|Wildberries
riotgames.com|英雄联盟手游|WildRift,英雄联盟手游
windsurf.com|Windsurf AI 编程|Windsurf,Windsurf AI 编程
windy.com|Windy 天气预报与可视化平台|Windy,Windy 天气预报与可视化平台,Windy 天气预报与可视化
wise.com|Wise汇款|Wise,Wise汇款
wisekey.com|WISeKey安全|WISeKey,WISeKey安全
wish.com|Wish电商|Wish,Wish电商
wistia.com|Wistia视频|Wistia,Wistia视频
wix.com|WIX|WIX
wolai.com|我来|WoLai,我来
woolite.com|Woolite洗涤|Woolite,Woolite洗涤
wordpress.com|WordPress|Wordpress,WordPress
wps.cn|WPS Office|WPS,WPS Office
wsj.com|华尔街日报|WSJ,华尔街日报
x5.ru|X5零售|X5,X5零售
xbox.com|Xbox|Xbox
xd.com|XD设计社区|XD,XD设计社区
xda-developers.com|XDA开发者社区|XDA,XDA开发者社区
xedge.cc|XEdge加速|XEdge,XEdge加速
xiami.com|虾米音乐|XiamiMusic,虾米音乐
goofish.com|闲鱼|XianYu,闲鱼
xiaoheihe.cn|小黑盒|XiaoHeihe,小黑盒
xiaohongshu.com|小红书|XiaoHongShu,小红书
mi.com|小米|XiaoMi,小米
mi.com|小米 AI|XiaomiAI,小米 AI
xiaoyuzhoufm.com|小宇宙播客|XiaoYuZhou,小宇宙播客
ctrip.com|携程|XieCheng,携程
ximalaya.com|喜马拉雅|XiMaLaYa,喜马拉雅
xtom.com|xTom服务器|XTom,xTom服务器
100tal.com|学而思|XueErSi,学而思
xueqiu.com|雪球|XueQiu,雪球
xunlei.com|迅雷|Xunlei,迅雷
yahoo.com|Yahoo|Yahoo
yandex.com|Yandex|Yandex
ycombinator.com|Y Combinator|YCombinator,Y Combinator
yixia.com|一下科技|YiXiaKeJi,一下科技
yizhibo.com|易直播|YiZhiBo,易直播
ynet.com|Ynet传媒|YNet,Ynet传媒
ynoproject.net|Yno同人游戏|YnoProject,Yno同人游戏,Yno同人
yokaverse.com|姚记乐元素|Yokaverse,姚记乐元素
yomiuri.co.jp|读卖新闻|Yomiuri,读卖新闻
yo-star.com|Yostar游戏|YoStar,Yostar游戏
youku.com|优酷|Youku,优酷
youmengchuangxiang.com|游梦创想|YouMengChuangXiang,游梦创想
youmind.com|YouMind|YouMind
youtube.com|YouTube|YouTube
music.youtube.com|YouTube Music|YouTubeMusic,YouTube Music
youzan.com|有赞|YouZan,有赞
ytoglobal.com|圆通速递|YTOExpress,圆通速递
yuanbei.biz|圆贝信息|YuanBei,圆贝信息
yuanfudao.com|猿辅导|YuanFuDao,猿辅导
yuketang.cn|雨课堂|YuKeTang,雨课堂
yundaex.com|韵达快递|YundaExpress,韵达快递
mogecloud.com|云帆加速|YunFanJiaSu,云帆加速
yy.com|YY 直播|YY,YY 直播
rr.tv|人人影视|YYeTs,人人影视
zaobao.com|联合早报|Zaobao,联合早报
zhibo8.com|直播吧|ZB,直播吧
zdns.cn|国家工程研究中心|ZDNS,国家工程研究中心
zee.com|Zee|Zee
zeetv.com|Zee TV|ZeeTV,Zee TV
zendesk.com|Zendesk|Zendesk
zeplin.dev|Zeplin设计交付|Zeplin,Zeplin设计交付
ireader.com|掌阅|ZhangYue,掌阅
zhihu.com|知乎|Zhihu,知乎
zhiyinmanke.com|知音漫客|ZhiYinManKe,知音漫客
sinopec.com|中国石化|ZhongGuoShiHua,中国石化
cloudsee.com|中维世纪|ZhongWeiShiJi,中维世纪
zhuanzhuan.com|转转|ZhuanZhuan,转转
zbj.com|猪八戒|ZhuBaJie,猪八戒
ziroom.com|自如|Ziroom,自如
zoho.com|Zoho|Zoho
zoom.us|Zoom 视频会议|Zoom,Zoom 视频会议
zotero.org|Zotero 文献管理|Zotero,Zotero 文献管理
zscaler.com|Zscaler安全|Zscaler,Zscaler安全
zte.com.cn|中兴通讯|ZTE,中兴通讯
zto.com|中通快递|ZTOExpress,中通快递
zuoyebang.com|作业帮|ZuoYeBang,作业帮
zynga.com|Zynga社交游戏|Zynga,Zynga社交游戏,Zynga社交
`;


// Apps and projects with their own identity, including modules whose titles use
// localized names. Sources are the module's MITM hostname or its published icon.
const RESOURCE_MODULE_BRANDS = `
pingmeapp.net|PingMe|PingMe
weread.qq.com|微信读书|微信阅读,微信读书,WeRead
smzdm.com|什么值得买|什么值得买
qimai.cn|企迈|企迈,QMAI
revenuecat.com|RevenueCat|Revenuecat
kagi.com|Kagi|Kagi
appraven.net|AppRaven|AppRaven
ilovepdf.com|iLovePDF|i Love PDF,iLovePDF
dualsubs.github.io|DualSubs|DualSubs
apple.com|Apple|,News+
mi.com|小米电视|AdvertisingMiTV
qishui.douyin.com|汽水音乐|汽水
ipinfo.io|IPinfo|IPinfo
ikuuu.org|iKuuu|iKuuu
lorealparis.com.cn|欧莱雅|欧莱雅
bobtranslate.com|Bob|Bob 系统翻译
okaapps.com|VidHub|VidHub
linearity.io|Linearity Curve|linearitcurve,Linearity
meetcarrot.com|CARROT Weather|Carrot
harness.io|Harness|Harness
getmoshi.app|Moshi|Moshi
lovekeyboard.com|Lovekey|Lovekey
`;

// Verified official app favicons, shipped locally to avoid placeholder icons.
const RESOURCE_LOCAL_BRAND_ICONS = Object.freeze({
  "10086.cn": "assets/icons/brand-10086-cn.png",
  "10101111.com": "assets/icons/brand-10101111-com.png",
  "120ask.com": "assets/icons/brand-120ask-com.png",
  "12306.cn": "assets/icons/brand-12306-cn.png",
  "133.cn": "assets/icons/brand-133-cn.jpg",
  "1391.com": "assets/icons/brand-1391-com.jpg",
  "163.com": "assets/icons/brand-163-com.png",
  "17kjs.com": "assets/icons/brand-17kjs-com.png",
  "18183.com": "assets/icons/brand-18183-com.png",
  "1905.com": "assets/icons/brand-1905-com.png",
  "21jingji.com": "assets/icons/brand-21jingji-com.png",
  "2345.com": "assets/icons/brand-2345-com.png",
  "2bulu.com": "assets/icons/brand-2bulu-com.png",
  "360.cn": "assets/icons/brand-360-cn.png",
  "365rili.com": "assets/icons/brand-365rili-com.png",
  "39.net": "assets/icons/brand-39-net.png",
  "3d4medical.com": "assets/icons/brand-3d4medical-com.png",
  "4gtv.tv": "assets/icons/brand-4gtv-tv.png",
  "51credit.com": "assets/icons/brand-51credit-com.png",
  "51wnl.com": "assets/icons/brand-51wnl-com.png",
  "52tt.com": "assets/icons/brand-52tt-com.png",
  "58.com": "assets/icons/brand-58-com.png",
  "5idream.net": "assets/icons/brand-5idream-net.png",
  "95598pay.com": "assets/icons/brand-95598pay-com.png",
  "acfun.cn": "assets/icons/brand-acfun-cn.png",
  "adguard.com": "assets/icons/brand-adguard-com.png",
  "adidas.com": "assets/icons/brand-adidas-com.png",
  "adobe.com": "assets/icons/brand-adobe-com.png",
  "aibank.com": "assets/icons/brand-aibank-com.png",
  "aihuishou.com": "assets/icons/brand-aihuishou-com.png",
  "aipai.com": "assets/icons/brand-aipai-com.png",
  "aiqiangua.com": "assets/icons/brand-aiqiangua-com.png",
  "airship.com": "assets/icons/brand-airship-com.png",
  "airstar.com": "assets/icons/brand-airstar-com.png",
  "aixcoder.com": "assets/icons/brand-aixcoder-com.png",
  "akamai.com": "assets/icons/brand-akamai-com.png",
  "alibaba.com": "assets/icons/brand-alibaba-com.png",
  "alipay.com": "assets/icons/alipay.png",
  "aliyun.com": "assets/icons/brand-aliyun-com.png",
  "amap.com": "assets/icons/brand-amap-com.png",
  "amazon.com": "assets/icons/brand-amazon-com.png",
  "anthropic.com": "assets/icons/brand-anthropic-com.png",
  "aomiapp.com": "assets/icons/brand-aomiapp-com.png",
  "apple.com": "assets/icons/apple.png",
  "appraven.net": "assets/icons/brand-appraven-net.jpg",
  "atlassian.com": "assets/icons/brand-atlassian-com.png",
  "autodesk.com": "assets/icons/brand-autodesk-com.png",
  "azure.microsoft.com": "assets/icons/brand-azure-microsoft-com.png",
  "babytree.com": "assets/icons/brand-babytree-com.png",
  "badmintoncn.com": "assets/icons/brand-badmintoncn-com.jpg",
  "baidu.com": "assets/icons/baidu.png",
  "baike.com": "assets/icons/brand-baike-com.png",
  "baixing.com": "assets/icons/brand-baixing-com.png",
  "bankofbeijing.com.cn": "assets/icons/brand-bankofbeijing-com-cn.png",
  "baomihua.com": "assets/icons/brand-baomihua-com.jpg",
  "bestbuy.com": "assets/icons/brand-bestbuy-com.png",
  "bevol.cn": "assets/icons/brand-bevol-cn.png",
  "bilibili.com": "assets/icons/bilibili.png",
  "binance.com": "assets/icons/brand-binance-com.png",
  "bing.com": "assets/icons/brand-bing-com.png",
  "bitqiu.com": "assets/icons/brand-bitqiu-com.png",
  "blued.com": "assets/icons/brand-blued-com.png",
  "bobtranslate.com": "assets/icons/brand-bobtranslate-com.png",
  "boohee.com": "assets/icons/brand-boohee-com.png",
  "brave.com": "assets/icons/brand-brave-com.png",
  "braze.com": "assets/icons/brand-braze-com.png",
  "bybutter.com": "assets/icons/brand-bybutter-com.png",
  "cad.everdrawing.com": "assets/icons/brand-cad-everdrawing-com.jpg",
  "cainiao.com": "assets/icons/brand-cainiao-com.png",
  "camera360.com": "assets/icons/brand-camera360-com.png",
  "camscanner.com": "assets/icons/brand-camscanner-com.png",
  "caocaokeji.cn": "assets/icons/brand-caocaokeji-cn.png",
  "carlsberg.asia": "assets/icons/brand-carlsberg-asia.png",
  "ccb.com": "assets/icons/brand-ccb-com.png",
  "cctv.com": "assets/icons/brand-cctv-com.png",
  "cdzghome.com": "assets/icons/brand-cdzghome-com.png",
  "cgws.com": "assets/icons/brand-cgws-com.png",
  "chelaile.net.cn": "assets/icons/brand-chelaile-net-cn.jpg",
  "chengdu.gov.cn": "assets/icons/brand-chengdu-gov-cn.png",
  "chinadaily.com.cn": "assets/icons/brand-chinadaily-com-cn.png",
  "chinahxzq.com.cn": "assets/icons/brand-chinahxzq-com-cn.png",
  "chinalife.com.cn": "assets/icons/brand-chinalife-com-cn.png",
  "chippercash.com": "assets/icons/brand-chippercash-com.png",
  "cloudflare.com": "assets/icons/cloudflare.png",
  "clubhouse.com": "assets/icons/brand-clubhouse-com.png",
  "cmbchina.com": "assets/icons/brand-cmbchina-com.png",
  "cnblogs.com": "assets/icons/brand-cnblogs-com.png",
  "cnmo.com": "assets/icons/brand-cnmo-com.png",
  "codeberg.org": "assets/icons/brand-codeberg-org.png",
  "coding.net": "assets/icons/brand-coding-net.png",
  "coolapk.com": "assets/icons/coolapk.png",
  "corel.com": "assets/icons/brand-corel-com.png",
  "costco.com": "assets/icons/brand-costco-com.png",
  "coupang.com": "assets/icons/brand-coupang-com.png",
  "cp.com.cn": "assets/icons/brand-cp-com-cn.jpg",
  "creditcard.ecitic.com": "assets/icons/brand-creditcard-ecitic-com.png",
  "csdn.net": "assets/icons/brand-csdn-net.png",
  "ctfile.com": "assets/icons/brand-ctfile-com.png",
  "ctrip.com": "assets/icons/brand-ctrip-com.png",
  "cursor.com": "assets/icons/brand-cursor-com.png",
  "dangdang.com": "assets/icons/brand-dangdang-com.png",
  "ddpai.com": "assets/icons/brand-ddpai-com.jpg",
  "deepseek.com": "assets/icons/brand-deepseek-com.png",
  "developer.mozilla.org": "assets/icons/brand-developer-mozilla-org.png",
  "dewu.com": "assets/icons/brand-dewu-com.png",
  "dian.so": "assets/icons/brand-dian-so.png",
  "dianping.com": "assets/icons/brand-dianping-com.png",
  "dianshihome.com": "assets/icons/brand-dianshihome-com.png",
  "didapinche.com": "assets/icons/brand-didapinche-com.jpg",
  "didi.com": "assets/icons/brand-didi-com.png",
  "dingdong.com": "assets/icons/brand-dingdong-com.png",
  "dingtalk.com": "assets/icons/brand-dingtalk-com.png",
  "discord.com": "assets/icons/brand-discord-com.png",
  "disneyplus.com": "assets/icons/brand-disneyplus-com.png",
  "dominos.com.cn": "assets/icons/brand-dominos-com-cn.png",
  "douban.com": "assets/icons/douban.png",
  "douyin.com": "assets/icons/douyin.png",
  "douyu.com": "assets/icons/brand-douyu-com.png",
  "dropbox.com": "assets/icons/brand-dropbox-com.png",
  "duckduckgo.com": "assets/icons/brand-duckduckgo-com.png",
  "dxy.com": "assets/icons/brand-dxy-com.png",
  "dzh.com.cn": "assets/icons/brand-dzh-com-cn.png",
  "earth.google.com": "assets/icons/brand-earth-google-com.png",
  "eastday.com": "assets/icons/brand-eastday-com.png",
  "ebay.com": "assets/icons/brand-ebay-com.png",
  "edaijia.cn": "assets/icons/brand-edaijia-cn.png",
  "ele.me": "assets/icons/brand-ele-me.png",
  "elong.com": "assets/icons/brand-elong-com.png",
  "enmonster.com": "assets/icons/brand-enmonster-com.png",
  "etao.com": "assets/icons/brand-etao-com.png",
  "etsy.com": "assets/icons/brand-etsy-com.png",
  "evernote.com": "assets/icons/brand-evernote-com.png",
  "ezviz.com": "assets/icons/brand-ezviz-com.png",
  "facebook.com": "assets/icons/brand-facebook-com.png",
  "fanli.com": "assets/icons/brand-fanli-com.png",
  "fanqienovel.com": "assets/icons/brand-fanqienovel-com.png",
  "fanyi.baidu.com": "assets/icons/brand-fanyi-baidu-com.png",
  "feishu.cn": "assets/icons/brand-feishu-cn.png",
  "fenqile.com": "assets/icons/brand-fenqile-com.png",
  "fetnet.net": "assets/icons/brand-fetnet-net.png",
  "figma.com": "assets/icons/brand-figma-com.png",
  "flowus.cn": "assets/icons/brand-flowus-cn.png",
  "flymodem.com.cn": "assets/icons/brand-flymodem-com-cn.png",
  "fosunhanig.com": "assets/icons/brand-fosunhanig-com.png",
  "gacmotor.com": "assets/icons/brand-gacmotor-com.png",
  "gcores.com": "assets/icons/brand-gcores-com.png",
  "gemini.google.com": "assets/icons/brand-gemini-google-com.png",
  "getmoshi.app": "assets/icons/brand-getmoshi-app.jpg",
  "gitbook.com": "assets/icons/brand-gitbook-com.png",
  "gitee.com": "assets/icons/brand-gitee-com.png",
  "github.com": "assets/icons/github.png",
  "gitlab.com": "assets/icons/brand-gitlab-com.png",
  "go.com": "assets/icons/brand-go-com.png",
  "gome.com.cn": "assets/icons/brand-gome-com-cn.png",
  "goofish.com": "assets/icons/brand-goofish-com.png",
  "google.com": "assets/icons/google.png",
  "gridsum.com": "assets/icons/brand-gridsum-com.png",
  "groq.com": "assets/icons/brand-groq-com.png",
  "gucci.com": "assets/icons/brand-gucci-com.png",
  "guiderank.org": "assets/icons/brand-guiderank-org.png",
  "gwdang.com": "assets/icons/brand-gwdang-com.png",
  "gz-data.com": "assets/icons/brand-gz-data-com.png",
  "hafoo.com": "assets/icons/brand-hafoo-com.png",
  "haixue.com": "assets/icons/brand-haixue-com.png",
  "harness.io": "assets/icons/brand-harness-io.png",
  "hexun.com": "assets/icons/brand-hexun-com.png",
  "hoyoverse.com": "assets/icons/brand-hoyoverse-com.png",
  "hstong.com": "assets/icons/brand-hstong-com.png",
  "huangguoai.com": "assets/icons/brand-huangguoai-com.png",
  "huanqiu.com": "assets/icons/brand-huanqiu-com.png",
  "huawei.com": "assets/icons/brand-huawei-com.png",
  "huggingface.co": "assets/icons/brand-huggingface-co.png",
  "huifu.com": "assets/icons/brand-huifu-com.png",
  "hupu.com": "assets/icons/brand-hupu-com.png",
  "huya.com": "assets/icons/brand-huya-com.png",
  "i3zh.com": "assets/icons/brand-i3zh-com.png",
  "i4.cn": "assets/icons/brand-i4-cn.png",
  "icbc.com.cn": "assets/icons/brand-icbc-com-cn.png",
  "icc.one": "assets/icons/brand-icc-one.png",
  "ifeng.com": "assets/icons/brand-ifeng-com.png",
  "ikea.com": "assets/icons/brand-ikea-com.png",
  "ikuuu.org": "assets/icons/brand-ikuuu-org.png",
  "ilovepdf.com": "assets/icons/brand-ilovepdf-com.png",
  "imdada.cn": "assets/icons/brand-imdada-cn.png",
  "imgur.com": "assets/icons/brand-imgur-com.png",
  "imlaidian.com": "assets/icons/brand-imlaidian-com.png",
  "inke.cn": "assets/icons/brand-inke-cn.png",
  "instagram.com": "assets/icons/brand-instagram-com.png",
  "iqilu.com": "assets/icons/brand-iqilu-com.png",
  "iqiyi.com": "assets/icons/iqiyi.png",
  "iwhalecloud.com": "assets/icons/brand-iwhalecloud-com.png",
  "iyingdi.com": "assets/icons/brand-iyingdi-com.png",
  "iyunmai.com": "assets/icons/brand-iyunmai-com.jpg",
  "izuiyou.com": "assets/icons/brand-izuiyou-com.png",
  "javhd.com": "assets/icons/brand-javhd-com.png",
  "jd.com": "assets/icons/jd.png",
  "jetbrains.com": "assets/icons/brand-jetbrains-com.png",
  "jiediankeji.com": "assets/icons/brand-jiediankeji-com.jpg",
  "jin10.com": "assets/icons/brand-jin10-com.png",
  "jiucaigongshe.com": "assets/icons/brand-jiucaigongshe-com.png",
  "jrj.com.cn": "assets/icons/brand-jrj-com-cn.jpg",
  "jsbchina.cn": "assets/icons/brand-jsbchina-cn.png",
  "juejin.cn": "assets/icons/brand-juejin-cn.png",
  "kagi.com": "assets/icons/brand-kagi-com.png",
  "kakaocorp.com": "assets/icons/brand-kakaocorp-com.png",
  "ke.com": "assets/icons/brand-ke-com.png",
  "kuaiduizuoye.com": "assets/icons/brand-kuaiduizuoye-com.png",
  "kuaishou.com": "assets/icons/brand-kuaishou-com.png",
  "kuaizip.com": "assets/icons/brand-kuaizip-com.png",
  "kugou.com": "assets/icons/brand-kugou-com.png",
  "kuwo.cn": "assets/icons/brand-kuwo-cn.png",
  "laifeng.com": "assets/icons/brand-laifeng-com.png",
  "lanzou.com": "assets/icons/brand-lanzou-com.png",
  "lbdj.com": "assets/icons/brand-lbdj-com.png",
  "le.com": "assets/icons/brand-le-com.png",
  "lechange.cn": "assets/icons/brand-lechange-cn.png",
  "lenovo.com": "assets/icons/brand-lenovo-com.png",
  "leoao.com": "assets/icons/brand-leoao-com.png",
  "line.me": "assets/icons/brand-line-me.png",
  "linearity.io": "assets/icons/brand-linearity-io.jpg",
  "linkedin.com": "assets/icons/brand-linkedin-com.png",
  "linux.do": "assets/icons/brand-linux-do.png",
  "lorealparis.com.cn": "assets/icons/brand-lorealparis-com-cn.png",
  "louisvuitton.com": "assets/icons/brand-louisvuitton-com.png",
  "luckincoffee.com": "assets/icons/brand-luckincoffee-com.png",
  "lucklyworld.com": "assets/icons/brand-lucklyworld-com.png",
  "mackeeper.com": "assets/icons/brand-mackeeper-com.png",
  "maijitv.com": "assets/icons/brand-maijitv-com.png",
  "maoyan.com": "assets/icons/brand-maoyan-com.png",
  "map.baidu.com": "assets/icons/baidu-map.png",
  "maps.google.com": "assets/icons/brand-maps-google-com.png",
  "max.com": "assets/icons/brand-max-com.png",
  "medium.com": "assets/icons/brand-medium-com.png",
  "meetcarrot.com": "assets/icons/brand-meetcarrot-com.png",
  "mega.io": "assets/icons/brand-mega-io.png",
  "meitu.com": "assets/icons/brand-meitu-com.png",
  "meituan.com": "assets/icons/meituan.png",
  "meruki.cn": "assets/icons/brand-meruki-cn.png",
  "mgtv.com": "assets/icons/brand-mgtv-com.png",
  "mi.com": "assets/icons/brand-mi-com.png",
  "microsoft.com": "assets/icons/brand-microsoft-com.png",
  "migu.cn": "assets/icons/brand-migu-cn.png",
  "missevan.com": "assets/icons/brand-missevan-com.jpg",
  "misskey.io": "assets/icons/brand-misskey-io.png",
  "mit.edu": "assets/icons/brand-mit-edu.png",
  "mogujie.com": "assets/icons/brand-mogujie-com.png",
  "momoshop.com.tw": "assets/icons/brand-momoshop-com-tw.png",
  "muji.com": "assets/icons/brand-muji-com.png",
  "music.163.com": "assets/icons/netease-music.png",
  "music.apple.com": "assets/icons/brand-music-apple-com.png",
  "music.migu.cn": "assets/icons/brand-music-migu-cn.png",
  "music.youtube.com": "assets/icons/brand-music-youtube-com.png",
  "myfriday.cn": "assets/icons/brand-myfriday-cn.png",
  "mygolbs.com": "assets/icons/brand-mygolbs-com.png",
  "naver.com": "assets/icons/brand-naver-com.png",
  "netflix.com": "assets/icons/netflix.png",
  "news.apple.com": "assets/icons/brand-news-apple-com.png",
  "nike.com": "assets/icons/brand-nike-com.png",
  "niu.com": "assets/icons/brand-niu-com.png",
  "nodeseek.com": "assets/icons/brand-nodeseek-com.png",
  "notion.so": "assets/icons/brand-notion-so.png",
  "oclean.com": "assets/icons/brand-oclean-com.png",
  "okaapps.com": "assets/icons/brand-okaapps-com.jpg",
  "onedrive.live.com": "assets/icons/brand-onedrive-live-com.png",
  "onewo.com": "assets/icons/brand-onewo-com.png",
  "openai.com": "assets/icons/openai.png",
  "opencat.app": "assets/icons/brand-opencat-app.png",
  "opera.com": "assets/icons/brand-opera-com.png",
  "oppo.com": "assets/icons/brand-oppo-com.png",
  "oschina.net": "assets/icons/brand-oschina-net.png",
  "outfit7.com": "assets/icons/brand-outfit7-com.png",
  "ozan.com": "assets/icons/brand-ozan-com.png",
  "ozon.ru": "assets/icons/brand-ozon-ru.png",
  "pan.baidu.com": "assets/icons/brand-pan-baidu-com.png",
  "panda.tv": "assets/icons/brand-panda-tv.png",
  "pantum.com": "assets/icons/brand-pantum-com.png",
  "pay.weixin.qq.com": "assets/icons/brand-pay-weixin-qq-com.png",
  "pchome.net": "assets/icons/brand-pchome-net.png",
  "perfectlingo.com": "assets/icons/brand-perfectlingo-com.png",
  "perplexity.ai": "assets/icons/brand-perplexity-ai.png",
  "photo.baidu.com": "assets/icons/brand-photo-baidu-com.png",
  "picwish.cn": "assets/icons/brand-picwish-cn.png",
  "pinduoduo.com": "assets/icons/brand-pinduoduo-com.png",
  "pingan.com": "assets/icons/brand-pingan-com.png",
  "pingmeapp.net": "assets/icons/brand-pingmeapp-net.png",
  "pinterest.com": "assets/icons/brand-pinterest-com.png",
  "pipix.com": "assets/icons/brand-pipix-com.png",
  "pocketuni.net": "assets/icons/brand-pocketuni-net.png",
  "podcasts.apple.com": "assets/icons/brand-podcasts-apple-com.png",
  "poe.com": "assets/icons/brand-poe-com.png",
  "primevideo.com": "assets/icons/brand-primevideo-com.png",
  "psy-1.com": "assets/icons/brand-psy-1-com.jpg",
  "ptt.cc": "assets/icons/brand-ptt-cc.jpg",
  "qbb6.com": "assets/icons/brand-qbb6-com.png",
  "qimao.com": "assets/icons/brand-qimao-com.png",
  "qingting.fm": "assets/icons/brand-qingting-fm.png",
  "qinlinkeji.com": "assets/icons/brand-qinlinkeji-com.png",
  "qishui.douyin.com": "assets/icons/brand-qishui-douyin-com.png",
  "qiumibao.com": "assets/icons/brand-qiumibao-com.png",
  "qmai.cn": "assets/icons/brand-qmai-cn.png",
  "qq.com": "assets/icons/qq.png",
  "quark.cn": "assets/icons/brand-quark-cn.png",
  "quora.com": "assets/icons/brand-quora-com.png",
  "rakuten.com": "assets/icons/brand-rakuten-com.png",
  "reddit.com": "assets/icons/brand-reddit-com.png",
  "revenuecat.com": "assets/icons/brand-revenuecat-com.png",
  "sdo.com": "assets/icons/brand-sdo-com.png",
  "seewo.com": "assets/icons/brand-seewo-com.png",
  "seeyouyima.com": "assets/icons/brand-seeyouyima-com.png",
  "shein.com": "assets/icons/brand-shein-com.png",
  "shihuo.cn": "assets/icons/brand-shihuo-cn.png",
  "shopify.com": "assets/icons/brand-shopify-com.png",
  "shouqianba.com": "assets/icons/brand-shouqianba-com.png",
  "shuzilm.cn": "assets/icons/brand-shuzilm-cn.png",
  "signal.org": "assets/icons/brand-signal-org.png",
  "sina.com.cn": "assets/icons/brand-sina-com-cn.png",
  "skyworth.com": "assets/icons/brand-skyworth-com.png",
  "slack.com": "assets/icons/brand-slack-com.png",
  "snapchat.com": "assets/icons/brand-snapchat-com.png",
  "sodalife.xyz": "assets/icons/brand-sodalife-xyz.png",
  "sogou.com": "assets/icons/brand-sogou-com.png",
  "sourceforge.net": "assets/icons/brand-sourceforge-net.png",
  "soutushenqi.com": "assets/icons/brand-soutushenqi-com.png",
  "sparke.cn": "assets/icons/brand-sparke-cn.png",
  "speedtest.net": "assets/icons/brand-speedtest-net.png",
  "spotify.com": "assets/icons/spotify.png",
  "sr.ht": "assets/icons/brand-sr-ht.png",
  "stackoverflow.com": "assets/icons/brand-stackoverflow-com.png",
  "starbucks.com": "assets/icons/brand-starbucks-com.png",
  "store.steampowered.com": "assets/icons/steam.png",
  "suanya.com": "assets/icons/brand-suanya-com.png",
  "suning.com": "assets/icons/brand-suning-com.png",
  "talkatone.com": "assets/icons/brand-talkatone-com.png",
  "tanwan.com": "assets/icons/brand-tanwan-com.png",
  "taobao.com": "assets/icons/taobao.png",
  "taolusm.com": "assets/icons/brand-taolusm-com.png",
  "target.com": "assets/icons/brand-target-com.png",
  "teambition.com": "assets/icons/brand-teambition-com.png",
  "telegram.org": "assets/icons/brand-telegram-org.png",
  "threads.net": "assets/icons/brand-threads-net.png",
  "tieba.baidu.com": "assets/icons/brand-tieba-baidu-com.png",
  "tiktok.com": "assets/icons/brand-tiktok-com.png",
  "tipsoon.com": "assets/icons/brand-tipsoon-com.png",
  "tongdun.cn": "assets/icons/brand-tongdun-cn.png",
  "touker.com": "assets/icons/brand-touker-com.png",
  "trae.ai": "assets/icons/brand-trae-ai.png",
  "trello.com": "assets/icons/brand-trello-com.png",
  "truthsocial.com": "assets/icons/brand-truthsocial-com.png",
  "tujia.com": "assets/icons/brand-tujia-com.png",
  "tumblr.com": "assets/icons/brand-tumblr-com.png",
  "tuniu.com": "assets/icons/brand-tuniu-com.png",
  "tv.apple.com": "assets/icons/brand-tv-apple-com.png",
  "tv.sohu.com": "assets/icons/brand-tv-sohu-com.png",
  "twitch.tv": "assets/icons/brand-twitch-tv.png",
  "twitter.com": "assets/icons/brand-twitter-com.png",
  "u51.com": "assets/icons/brand-u51-com.png",
  "ubisoft.com": "assets/icons/brand-ubisoft-com.png",
  "uc.cn": "assets/icons/brand-uc-cn.png",
  "udn.com": "assets/icons/brand-udn-com.png",
  "usmile.com": "assets/icons/brand-usmile-com.png",
  "v.qq.com": "assets/icons/tencent-video.png",
  "versa-ai.com": "assets/icons/brand-versa-ai-com.png",
  "vip.com": "assets/icons/brand-vip-com.png",
  "vistopia.com.cn": "assets/icons/brand-vistopia-com-cn.png",
  "vivo.com": "assets/icons/brand-vivo-com.png",
  "walmart.com": "assets/icons/brand-walmart-com.png",
  "weather.com.cn": "assets/icons/brand-weather-com-cn.png",
  "webex.com": "assets/icons/brand-webex-com.png",
  "weibo.com": "assets/icons/weibo.png",
  "weidian.com": "assets/icons/brand-weidian-com.png",
  "weixin.qq.com": "assets/icons/wechat.png",
  "weread.qq.com": "assets/icons/brand-weread-qq-com.ico",
  "weshineapp.com": "assets/icons/brand-weshineapp-com.png",
  "whatsapp.com": "assets/icons/brand-whatsapp-com.png",
  "wildberries.ru": "assets/icons/brand-wildberries-ru.png",
  "windsurf.com": "assets/icons/brand-windsurf-com.png",
  "wolai.com": "assets/icons/brand-wolai-com.png",
  "wps.cn": "assets/icons/wps.png",
  "wufazhuce.com": "assets/icons/brand-wufazhuce-com.png",
  "wuta-cam.com": "assets/icons/brand-wuta-cam-com.png",
  "x.ai": "assets/icons/brand-x-ai.png",
  "xcurrency.com": "assets/icons/brand-xcurrency-com.png",
  "xczim.com": "assets/icons/brand-xczim-com.png",
  "xhey.top": "assets/icons/brand-xhey-top.png",
  "xiaofubao.com": "assets/icons/brand-xiaofubao-com.jpg",
  "xiaohongshu.com": "assets/icons/xiaohongshu.png",
  "xiaomiyoupin.com": "assets/icons/brand-xiaomiyoupin-com.png",
  "xiaotucc.com": "assets/icons/brand-xiaotucc-com.png",
  "xiaoxiongmeishu.com": "assets/icons/brand-xiaoxiongmeishu-com.jpg",
  "xiaoyi.com": "assets/icons/brand-xiaoyi-com.png",
  "xiaoyuzhoufm.com": "assets/icons/xiaoyuzhou.png",
  "xiaozujian.com": "assets/icons/brand-xiaozujian-com.jpg",
  "ximalaya.com": "assets/icons/ximalaya.png",
  "xinmin.cn": "assets/icons/brand-xinmin-cn.png",
  "xinpianchang.com": "assets/icons/brand-xinpianchang-com.png",
  "xinyue.qq.com": "assets/icons/brand-xinyue-qq-com.png",
  "xoyo.com": "assets/icons/brand-xoyo-com.png",
  "xunlei.com": "assets/icons/brand-xunlei-com.png",
  "xunyou.com": "assets/icons/brand-xunyou-com.png",
  "xywy.com": "assets/icons/brand-xywy-com.png",
  "xyzq.com.cn": "assets/icons/brand-xyzq-com-cn.png",
  "y.qq.com": "assets/icons/brand-y-qq-com.png",
  "yahoo.com": "assets/icons/brand-yahoo-com.png",
  "yandex.com": "assets/icons/brand-yandex-com.png",
  "yinyuetai.com": "assets/icons/brand-yinyuetai-com.png",
  "ykccn.com": "assets/icons/brand-ykccn-com.png",
  "ylyk.com": "assets/icons/brand-ylyk-com.png",
  "ymm56.com": "assets/icons/brand-ymm56-com.png",
  "yonghuivip.com": "assets/icons/brand-yonghuivip-com.png",
  "youku.com": "assets/icons/youku.png",
  "youmi.net": "assets/icons/brand-youmi-net.png",
  "youmind.com": "assets/icons/brand-youmind-com.png",
  "youonbike.com": "assets/icons/brand-youonbike-com.png",
  "youshu.cc": "assets/icons/brand-youshu-cc.jpg",
  "youtube.com": "assets/icons/youtube.png",
  "ysepay.com": "assets/icons/brand-ysepay-com.png",
  "yunzhijia.com": "assets/icons/brand-yunzhijia-com.png",
  "yy.com": "assets/icons/brand-yy-com.png",
  "z-bank.com": "assets/icons/brand-z-bank-com.png",
  "zhihu.com": "assets/icons/zhihu.png",
  "zhinengxiyifang.cn": "assets/icons/brand-zhinengxiyifang-cn.png",
  "zhuanzhuan.com": "assets/icons/brand-zhuanzhuan-com.png",
  "zhumanggroup.com": "assets/icons/brand-zhumanggroup-com.png",
  "ziwipets.com": "assets/icons/brand-ziwipets-com.png",
  "zol.com.cn": "assets/icons/brand-zol-com-cn.png",
  "zoom.us": "assets/icons/brand-zoom-us.png",
  "dualsubs.github.io": "assets/icons/brand-dualsubs-github-io.png"
});

function normalizeResourceBrandText(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[\uFE0E\uFE0F]/g, "")
    .trim()
    .toLocaleLowerCase("en");
}

const resourceBrandAliases = (RESOURCE_MODULE_BRANDS + "\n" + RESOURCE_BRAND_REGISTRY + "\n" + RESOURCE_BRAND_CATALOG).trim()
  .split("\n")
  .flatMap((line) => {
    const [domain, label, aliases] = line.split("|");
    if (!/^[a-z0-9.-]+\.[a-z]{2,}$/.test(domain) || !label || !aliases)
      return [];
    return aliases.split(",").flatMap((alias) => {
      const normalized = normalizeResourceBrandText(alias);
      return [...new Set([normalized, normalized.replace(/\s+/g, "")])].map((text) => {
      const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const latin = /^[\x00-\x7f]+$/.test(text);
      return {
        domain,
        label,
        text,
        // ASCII names use word boundaries, so LINE never matches "online"
        // and QQ never matches an unrelated hostname or author identifier.
        pattern: latin
          ? new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z]|[0-9])`, "i")
          : null,
      };
      });
    });
  })
  .filter((entry) => entry.text)
  .sort((first, second) => second.text.length - first.text.length);

// An exact canonical name wins over a longer incidental substring in a title.
const resourceBrandExactAliases = new Map();
for (const entry of resourceBrandAliases) {
  if (!resourceBrandExactAliases.has(entry.text)) resourceBrandExactAliases.set(entry.text, entry);
}
// Complete module titles are matched exactly. A module that mentions several apps
// keeps its utility symbol rather than inheriting an arbitrary app's logo.
const RESOURCE_MODULE_EXACT_BRANDS = new Map([["PingMe 签到整合版","pingmeapp.net","PingMe"],["iKuuu 每日签到","ikuuu.org","iKuuu"],["C. Anatomy","3d4medical.com","Complete Anatomy"],["捷停车去广告","jslife.com.cn","捷停车"],["🍿️ DualSubs: 🔣 Universal","dualsubs.github.io","DualSubs"],["海角视频解锁VIP","haijiao.com","海角视频"],["套路SM VIP解锁","taolusm.com","套路SM"],["天府银行小程序","tf.cn","天府银行"],["黄果短剧去广告","huangguoai.com","黄果短剧"],["捷停车签到","jslife.com.cn","捷停车"],["看理想VIP解锁","vistopia.com.cn","看理想"],["HiFini签到","hifini.com","HiFini"],["微付金币","pay.weixin.qq.com","微信支付"],["万达智慧商业","wandawic.com","万达智慧商业"],["晓晓优选","xiaoxiaoyouxuan.com","晓晓优选"],[" Response Geo Services to 🇨🇳CN","apple.com","Apple"],[" Response Geo Services to 🇦🇺AU","apple.com","Apple"],[" Response Geo Services to 🇬🇧UK","apple.com","Apple"],[" Response Geo Services to 🇯🇵JP","apple.com","Apple"],[" Response Geo Services to 🇭🇰HK","apple.com","Apple"],[" Response Geo Services to 🇹🇼TW","apple.com","Apple"],[" Modify Location Services to 🇺🇳I18N","apple.com","Apple"],[" Modify Location Services to 🇺🇳I18N","apple.com","Apple"],[" Redirect Geo Services to 🇺🇸US","apple.com","Apple"],[" Response Geo Services to 🇺🇸US","apple.com","Apple"],["🍿️ DualSubs: 🎦 Streaming Media 🔓","dualsubs.github.io","DualSubs"],["🍿️ DualSubs: 🎦 Streaming Media","dualsubs.github.io","DualSubs"],["🍿️ DualSubs: 🎦 Universal 🔓","dualsubs.github.io","DualSubs"],["牛津高阶词典第十版","cp.com.cn","牛津高阶词典"],["宁聚","nbtv.cn","宁聚"],["Outfit7（会说话的汤姆猫）","outfit7.com","Outfit7"],["牛听听","benewtech.cn","牛听听"],["ONE","wufazhuce.com","ONE"],["皮皮虾","pipix.com","皮皮虾"],["ofo共享单车","ofo.com","ofo共享单车"],["马达出行","17u.cn","马达出行"],["全球购骑士卡","black-unique.com","全球购骑士卡"],["皮皮搞笑","pipigx.com","皮皮搞笑"],["票星球","piaoxingqiu.com","票星球"],["妈妈网","mama.cn","妈妈网"],["票根","txffp.com","票根"],["PeanutWiFi","wifi8.com","PeanutWiFi"],["美味不用等","mwee.cn","美味不用等"],["妈妈网孕育","mama.cn","妈妈网"],["埋堆堆","mddcloud.com.cn","埋堆堆"],["马卡龙玩图","versa-ai.com","马卡龙玩图"],["猫眼","maoyan.com","猫眼"],["猫耳FM","missevan.com","猫耳FM"],["每日优鲜","missfresh.cn","每日优鲜"],["MacKeeper","mackeeper.com","MacKeeper"],["美丽修行","bevol.cn","美丽修行"],["全民生活","cmbc.com.cn","全民生活"],["美柚","seeyouyima.com","美柚"],["蘑菇租房","mgzf.com","蘑菇租房"],["莱充","laichon.com","莱充"],["猫扑 (Mop)","mop.com","猫扑"],["来疯","laifeng.com","来疯"],["奈菲影视","nfmovies.com","奈菲影视"],["快懂百科","baike.com","快懂百科"],["LING Club-原菱菱邦","00bang.cn","LING Club"],["来电","imlaidian.com","来电"],["两步路","2bulu.com","两步路"],["拦截100","hyhuo.com","拦截100"],["快速问医生","120ask.com","快速问医生"],["蓝基因","lanjiyin.com.cn","蓝基因"],["拉卡拉","lakala.com","拉卡拉"],["乐橙","lechange.cn","乐橙"],["乐堡潮玩馆小程序","carlsberg.asia","乐堡潮玩馆"],["MIX","camera360.com","MIX"],["鲁班到家用户版","lbdj.com","鲁班到家"],["懒投资","lantouzi.com","懒投资"],["旅途随身听","1314zhilv.com","旅途随身听"],["LocSim","aa-ab.com","LocSim"],["i3","i3zh.com","i3"],["Lycos","lycos.com","Lycos"],["旅法师营地","iyingdi.com","旅法师营地"],["linxi","internetofcity.cn","linxi"],["江苏银行","jsbchina.cn","江苏银行"],["街电","jiediankeji.com","街电"],["简讯","tipsoon.com","简讯"],["金融界","jrj.com.cn","金融界"],["巨潮资讯","cninfo.com.cn","巨潮资讯"],["吉林银行","jlbank.com.cn","吉林银行"],["金立 (Gionee)","gionee.com","金立"],["机核网","gcores.com","机核网"],["加油广东","gdoil.cn","加油广东"],["极简汇率","xcurrency.com","极简汇率"],["金十数据","jin10.com","金十数据"],["看理想","vistopia.com.cn","看理想"],["韭菜公社","jiucaigongshe.com","韭菜公社"],["口袋校园","pocketuni.net","口袋校园"],["嗨学","haixue.com","嗨学"],["快压zip","kuaizip.com","快压"],["海马爸比","simshine.cn","海马爸比"],["今日水印相机","xhey.top","今日水印相机"],["看天下","vistastory.com","看天下"],["好奇心日报","qdaily.com","好奇心日报"],["韩剧TV","hanju.koudaibaobao.com","韩剧TV"],["海豚优惠","townmalls.cn","海豚优惠"],["杭州公交","ibuscloud.com","杭州公交"],["横店电影小程序","hengdianfilm.com","横店电影"],["杭州市民","96225.com","杭州市民"],["好好住","haohaozhu.cn","好好住"],["合利宝展业通","helipay.com","合利宝展业通"],["和讯网","hexun.com","和讯网"],["好型体重秤","fitdays.cn","好型体重秤"],["红版报","flipchina.cn","红版报"],["华盛通","hstong.com","华盛通"],["花小猪","hongyibo.com.cn","花小猪"],["黄油相机","bybutter.com","黄油相机"],["火猫","huomao.com","火猫"],["汇付天下","huifu.com","汇付天下"],["华宝智投","touker.com","华宝智投"],["华彩生活","hxb.com.cn","华彩生活"],["广汽传祺","gacmotor.com","广汽传祺"],["花生地铁","wifi8.com","花生地铁"],["购物党","gwdang.com","购物党"],["高铁管家","133.cn","高铁管家"],["工时记录","tuitiger.com","工时记录"],["福享太平","cntaiping.com","福享太平"],["盖得排行","guiderank.org","盖得排行"],["国双 (Gridsum)","gridsum.com","国双"],["Go.com","go.com","Go.com"],["公考雷达","gongkaoleida.com","公考雷达"],["国美电器","gome.com.cn","国美"],["赶集网","ganji.com","赶集网"],["挂号网（微医）","guahao.com","微医"],["怪兽充电","enmonster.com","怪兽充电"],["勾正数据（GozenData）","gz-data.com","勾正数据"],["冠寓","guanyu.longfor.com","冠寓"],["故宫博物馆小程序","dpm.org.cn","故宫博物馆"],["环球网","huanqiu.com","环球网"],["电E宝","95598pay.com","电E宝"],["广州农商银行","grcbank.com","广州农商银行"],["国家医保服务平台","nhsa.gov.cn","国家医保服务平台"],["盯盯拍","ddpai.com","盯盯拍"],["哈富证券","hafoo.com","哈富证券"],["低端影视","ddrk.me","低端影视"],["动卡空间","creditcard.ecitic.com","动卡空间"],["国泰君安","gtja.com","国泰君安"],["电视家","dianshihome.com","电视家"],["Dr.Peng","drpeng.com.cn","Dr.Peng"],["东方网","eastday.com","东方网"],["飞猫管家","flymodem.com.cn","飞猫管家"],["丁香医生","dxy.com","丁香医生"],["掌上京彩","bankofbeijing.com.cn","掌上京彩"],["e充电","echargenet.com","e充电"],["分期乐","fenqile.com","分期乐"],["电脑之家","pchome.net","电脑之家"],["奔图","pantum.com","奔图"],["e代驾","edaijia.cn","e代驾"],["返利网","fanli.com","返利网"],["财经杂志","caijing.com.cn","财经杂志"],["车来了","chelaile.net.cn","车来了"],["曹操专车","caocaokeji.cn","曹操出行"],["bshare","bshare.cn","bshare"],["超级课程表","myfriday.cn","超级课程表"],["潮玩宇宙","lucklyworld.com","潮玩宇宙"],["刺猬猫阅读","hbooker.com","刺猬猫"],["长城炼金术","cgws.com","长城炼金术"],["到梦空间","5idream.net","到梦空间"],["天府手机银行","tf.cn","天府银行"],["达达骑士版","imdada.cn","达达骑士"],["创维","skyworth.com","创维"],["天府市民云","chengdu.gov.cn","天府市民云"],["团油","tuanyou.com","团油"],["天山云TV","tsytv.com.cn","天山云TV"],["嘀嗒出行","didapinche.com","嘀嗒出行"],["天府通","cdtft.cn","天府通"],["大智慧","dzh.com.cn","大智慧"],["天星金融","airstar.com","天星金融"],["推栏","xoyo.com","推栏"],["Top Widgets","xiaozujian.com","Top Widgets"],["盛趣游戏","sdo.com","盛趣游戏"],["途家民宿","tujia.com","途家"],["途牛","tuniu.com","途牛"],["搜电充电","zhumanggroup.com","搜电充电"],["首汽约车","01zhuanche.com","首汽约车"],["苏打校园APP","sodalife.xyz","苏打校园"],["识货","shihuo.cn","识货"],["省省回头车","ymm56.com","省省回头车"],["深圳通","shenzhentong.com","深圳通"],["台铃智能","tailgdd.com","台铃智能"],["数盟 (Shuzilm)","shuzilm.cn","数盟"],["四季線上影視","4gtv.tv","四季線上"],["收钱吧","shouqianba.com","收钱吧"],["苏周到","suzhou.gov.cn","苏周到"],["TT语音","52tt.com","TT语音"],["Talkatone","talkatone.com","Talkatone"],["球迷报","qiumibao.com","球迷报"],["Tanwan (贪玩)","tanwan.com","贪玩"],["日淘任意门","meruki.cn","日淘任意门"],["企迈 - QMAI(包含: 挪瓦咖啡、林里柠檬茶、霸王茶姬、陈香贵)","qmai.cn","企迈"],["三联中读","lifeweek.com.cn","三联中读"],["淘票票","taopiaopiao.com","淘票票"],["齐鲁网","iqilu.com","齐鲁网"],["亲宝宝","qbb6.com","亲宝宝"],["闪萌","weshineapp.com","闪萌"],["日产智联","dongfeng-nissan.com.cn","日产智联"],["日日煮","daydaycook.com.cn","日日煮"],["世纪佳缘","jiayuan.com","世纪佳缘"],["手机中国","cnmo.com","手机中国"],["宝宝树","babytree.com","宝宝树"],["闪动校园","huachenjie.com","闪动校园"],["半月谈","banyuetan.org","半月谈"],["澳觅","aomiapp.com","澳觅"],["神舟汽车","10101111.com","神州专车"],["爱卡汽车网","xcar.com.cn","爱卡汽车"],["北京银行","bankofbeijing.com.cn","北京银行"],["爆米花","baomihua.com","爆米花"],["宝宝树孕育","babytree.com","宝宝树"],["百姓网","baixing.com","百姓网"],["贝太厨房","beitaichufang.com","贝太厨房"],["贝壳找房","ke.com","贝壳找房"],["北京首汽","shouqiev.com","北京首汽"],["百信银行","aibank.com","百信银行"],["波点音乐","kuwo.cn","波点音乐"],["比特球云盘","bitqiu.com","比特球云盘"],["币世界","bishijie.com","币世界"],["薄荷健康","boohee.com","薄荷健康"],["18183游戏网","18183.com","18183"],["Braze","braze.com","Braze"],["安吉星","onstar.com.cn","安吉星"],["乐刻","leoao.com","乐刻"],["39健康网","39.net","39健康网"],["21经济网","21jingji.com","21经济网"],["2345天气王","tianqi.2345.com","2345天气王"],["2345网址导航","2345.com","2345网址导航"],["500","500.com","500"],["51CTO学堂","51cto.com","51CTO学堂"],["爱拍","aipai.com","爱拍"],["365日历","365rili.com","365日历"],["51信用卡管家","u51.com","51信用卡"],["智行APP","suanya.com","智行"],["爱回收","aihuishou.com","爱回收"],["58汽车","58che.com","58汽车"],["爱牵挂care","aiqiangua.com","爱牵挂"],["爱桐乡","txcmapp.com","爱桐乡"],["爱思助手","i4.cn","爱思助手"],["中华万年历","51wnl.com","中华万年历"],["爱阅书香","icc.one","爱阅书香"],["众邦银行","z-bank.com","众邦银行"],["安徽掌上10000","ahzs10000.com","安徽掌上10000"],["追书神器","zhuishushenqi.com","追书神器"],["中油优途","95504.net","中油优途"],["中油好客e站小程序","95504.net","中油好客e站"],["中羽在线","badmintoncn.com","中羽在线"],["云麦","iyunmai.com","云麦"],["中关村","zol.com.cn","中关村在线"],["住这儿","onewo.com","住这儿"],["云快充","ykccn.com","云快充"],["最右","izuiyou.com","最右"],["云之家","yunzhijia.com","云之家"],["中国人保","picc.com","中国人保"],["招商证券","cmschina.com","招商证券"],["中华网","china.com","中华网"],["中国人寿","chinalife.com.cn","中国人寿"],["涨乐财富通","htsc.com.cn","涨乐财富通"],["中国日报","chinadaily.com.cn","中国日报"],["掌上公交","mygolbs.com","掌上公交"],["中国天气网小程序","weather.com.cn","中国天气网"],["正气助手","zhengqi100.com","正气助手"],["招财猫直聘","58.com","招财猫直聘"],["浙里办","zjzwfw.gov.cn","浙里办"],["郑好办","zhengzhou.gov.cn","郑好办"],["指点天下","zhidiantianxia.cn","指点天下"],["职工普惠","cdzghome.com","职工普惠"],["一号店","yhd.com","一号店"],["映客直播","inke.cn","映客"],["游久网","uuu9.com","游久网"],["一淘","etao.com","一淘"],["曜影医疗","suh.cn","曜影医疗"],["一起考教师","17kjs.com","一起考教师"],["易捷加油","sinopecsales.com","易捷加油"],["悠视网","uusee.com","悠视网"],["一刻相册","photo.baidu.com","一刻相册"],["医考帮","yikaobang.com.cn","医考帮"],["易校园","xiaofubao.com","易校园"],["翼支付","bestpay.com.cn","翼支付"],["盈宝证券","winbull8.com","盈宝证券"],["一点资讯","yidianzixun.com","一点资讯"],["音悦Tai","yinyuetai.com","音悦Tai"],["易查","yicha.cn","易查"],["银盛小Y管家","ysepay.com","银盛小Y管家"],["银盛通","ysepay.com","银盛通"],["永辉","yonghuivip.com","永辉"],["盈立智投","yxzq.com","盈立智投"],["悠洗APP","ulife.group","悠洗"],["友邻优课","ylyk.com","友邻优课"],["永安行","youonbike.com","永安行"],["有米","youmi.net","有米"],["优书","youshu.cc","优书"],["育学园","yuxueyuan.cn","育学园"],["云宝宝大数据","cloudbae.cn","云宝宝大数据"],["元聚网络（漫画岛，追书神器，甜瓜小说）","1391.com","元聚网络"],["晓晓优选","xiaoxiaoyouxuan.com","晓晓优选"],["小熊拦截","zeekstudio.com","小熊拦截"],["悠易互通","yoyi.com.cn","悠易互通"],["新片场","xinpianchang.com","新片场"],["小熊艺术","xiaoxiongmeishu.com","小熊艺术"],["小艺","xiaoyi.com","小艺"],["兴业证券","xyzq.com.cn","兴业证券"],["心悦俱乐部","xinyue.qq.com","心悦俱乐部"],["星火英语","sparke.cn","星火英语"],["星财富","fosunhanig.com","星财富"],["亚朵开屏","yaduo.com","亚朵"],["新民网","xinmin.cn","新民网"],["萤石","ezviz.com","萤石"],["亚信科技","asiainfo.com","亚信科技"],["熊猫直播","panda.tv","熊猫直播"],["友邦","aia.com.cn","友邦"],["寻医问药","xywy.com","寻医问药"],["艺龙旅行网","elong.com","艺龙"],["艺龙","elong.com","艺龙"],["米读","midukanshu.com","米读"],["悟空遥控器","wukongtv.com","悟空遥控器"],["无他相机","wuta-cam.com","无他相机"],["我爱卡社区管家","51credit.com","我爱卡"],["迅游加速器","xunyou.com","迅游加速器"],["小蚕霸王餐","xiaocantech.com","小蚕霸王餐"],["西窗烛","xczim.com","西窗烛"],["星途 starway","chinahxzq.com.cn","星途"],["下厨房","xiachufang.com","下厨房"],["小芒","mgtv.com","小芒"],["小白学习打印机","xbxxhz.com","小白学习打印机"],["小Biu智家","suning.com","小Biu智家"],["希沃白板5","seewo.com","希沃白板"],["小牛","niu.com","小牛"],["小电充电","dian.so","小电充电"],["小利生活","helipay.com","小利生活"],["小桔科技","xiaojukeji.com","小桔科技"],["小佩宠物","petkit.cn","小佩宠物"],["小睡眠","psy-1.com","小睡眠"],["小兔充充","xiaotucc.com","小兔充充"],["笑容加","usmile.com","笑容加"],["万词王","perfectlingo.com","万词王"],["U净","zhinengxiyifang.cn","U净"],["小象超市","meituan.com","小象超市"],["Urban Airship","airship.com","Urban Airship"],["Vista看天下","vistastory.com","Vista看天下"],["Whale Cloud (鲸云)","iwhalecloud.com","Whale Cloud"],["蜗牛睡眠","snailsleep.net","蜗牛睡眠"],["微店","weidian.com","微店"],["本来生活","benlailife.com","本来生活"],["udn news","udn.com","udn news"],["万达电影","wandafilm.com","万达电影"],["豌豆荚","wandoujia.com","豌豆荚"],["Waps（无线广告交易中心）","wapx.cn","Waps"],["JAVHD解锁VIP","javhd.com","JAVHD"],["同盾","tongdun.cn","同盾"],["Ozan 取得 UUID","ozan.com","Ozan"],["Chipper 取得入金地址","chippercash.com","Chipper"],["遠傳心生活取得 token","fetnet.net","遠傳心生活"],["PTT 跳過年齡驗證","ptt.cc","PTT"],["Ozan 偽造 UUID","ozan.com","Ozan"],["遠傳心生活自動簽到","fetnet.net","遠傳心生活"],["FutaDNS (futa.gg)","futa.gg","FutaDNS"],["Momo 每日簽到","momoshop.com.tw","Momo"],["预览 QX 资源","quantumult.app","Quantumult X"],["搜图神器","soutushenqi.com","搜图神器"],["波点音乐","kuwo.cn","波点音乐"],["i Love PDF","ilovepdf.com","iLovePDF"],["Block Qinlin AD","qinlinkeji.com","Block Qinlin AD"],["v2free机场签到cookie获取 @zqzess","v2free.top","v2free"],["Safari Kagi 搜尋","kagi.com","Kagi"],["OpenCat 自訂模型","opencat.app","OpenCat"],["FutaDNS 檢查面板","futa.gg","FutaDNS"],["波点音乐","kuwo.cn","波点音乐"],["极简汇率解锁","xcurrency.com","极简汇率"],["佐糖","picwish.cn","佐糖"],["oclean","oclean.com","Oclean"],["dlm","dominos.com.cn","达美乐"],["Carrot解锁订阅","meetcarrot.com","CARROT Weather"],["CAD快速看图","cad.everdrawing.com","CAD快速看图"],["Revenuecat","revenuecat.com","RevenueCat"],["麦咭TV","maijitv.com","麦咭TV"],["AppRaven 邀请助手","appraven.net","AppRaven"],["JAVHD解锁VIP","javhd.com","JAVHD"],["Harness Enhance","harness.io","Harness"],["linearitcurve","linearity.io","Linearity Curve"],["蓝基因医学","lanjiyin.com.cn","蓝基因"],["快对答案","kuaiduizuoye.com","快对"],["v2free机场签到 @zqzess","v2free.top","v2free"],["Moshi","getmoshi.app","Moshi"],["Lovekey键盘","lovekeyboard.com","Lovekey"],["卫岗天天订签到","4008618618.com","卫岗天天订"],["莱充充电签到","laichon.com","莱充"],["Bob 系统翻译","bobtranslate.com","Bob"],["欧莱雅会员俱乐部签到","lorealparis.com.cn","欧莱雅"],["ziwi签到","ziwipets.com","ZIWI"],["活力伊利签到","yili.com","伊利"],["VidHub替换user-agent","okaapps.com","VidHub"]]
  .map(([name, domain, label]) => [normalizeResourceBrandText(name), {domain, label}]));
const resourceBrandCache = new Map();

/** Resolve an app's brand; null means the existing semantic glyph is correct. */
function getResourceBrand(resource) {
  if (!resource || typeof resource !== "object") return null;
  const name = normalizeResourceBrandText(resource.name);
  const identity = normalizeResourceBrandText(resource.upstreamName);
  const cacheKey = `${resource.type || ""}\n${identity}\n${name}`;
  if (resourceBrandCache.has(cacheKey)) return resourceBrandCache.get(cacheKey);

  // A rule's canonical name is authoritative. Avoid authors and descriptions:
  // generic modules often mention several apps only as usage examples.
  const candidates = [...new Set([identity, name, identity.replace(/\s+/g, ""), name.replace(/\s+/g, "")])].filter(Boolean);
  const exact = candidates.map((candidate) => resourceBrandExactAliases.get(candidate)).find(Boolean);
  const moduleIdentity = resource.type === "module" ? RESOURCE_MODULE_EXACT_BRANDS.get(name) : null;
  const match = moduleIdentity || exact || resourceBrandAliases.find((entry) =>
    candidates.some((candidate) =>
      ["mini", "code", "fonts"].includes(entry.text)
        ? candidate === entry.text
        : entry.pattern ? entry.pattern.test(candidate) : candidate.includes(entry.text),
    ),
  );
  const result = match
    ? Object.freeze({
        domain: match.domain,
        src: RESOURCE_LOCAL_BRAND_ICONS[match.domain] || `https://www.google.com/s2/favicons?domain=${encodeURIComponent(match.domain)}&sz=128`,
        fallbackSrc: RESOURCE_LOCAL_BRAND_ICONS[match.domain]
          ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(match.domain)}&sz=128`
          : null,
        label: match.label,
      })
    : null;
  resourceBrandCache.set(cacheKey, result);
  return result;
}

/** Generic rules and utility modules use a symbol for what they actually do. */
function getResourceGlyph(resource) {
  const name = normalizeResourceBrandText(resource?.name);
  const identity = normalizeResourceBrandText(resource?.upstreamName);
  const text = name + " " + identity;
  const genericRules = {
    acg: "box", anime: "play-circle", asianmedia: "play-circle",
    cas: "shield", china: "globe", chinaasn: "globe", chinaips: "globe",
    chinagame: "box", chinaiptv: "play-circle", chinamedia: "play-circle",
    communication: "message", connectivitycheck: "globe", container: "terminal",
    cryptocurrency: "currency", ddns: "globe", developer: "terminal", direct: "network",
    dns: "globe", doh: "globe", download: "download", ecommerce: "box", game: "box",
    gamedownload: "download", global: "globe", globalai: "sparkles", globalcdn: "network",
    globalcloud: "network", globalgame: "box", globaliptv: "play-circle", globalmedia: "play-circle",
    globalnetdisk: "download", globalscholar: "book", govcn: "globe", lan: "wifi",
    ntpservice: "calendar", privatetracker: "download", remotecontrol: "network",
    socialmediaglobal: "message", stun: "network", tempmail: "mail", urlshortener: "link", voip: "message",
  };
  const canonical = (identity || name).replace(/\s+/g, "");
  if (resource?.type === "rule" && genericRules[canonical]) return genericRules[canonical];
  const groups = [
    ["fuel", /油价|汽油|gasoline|oil[ -]?price/],
    ["calendar", /节假日|黄历|倒计时|倒数日|签到|timecard|almanac|days[ -]?matter|check[ -]?in/],
    ["sun", /天气|weather/],
    ["currency", /汇率|加密货币|入账|余额|exchange[ -]?rate|crypto|salary|api[ -]?balance/],
    ["cpu", /内存|电池|memory|monitor|battery|mini[ -]?watts/],
    ["gauge", /测速|速度|速率|speed|performance|性能测试|rule[ -]?ma(?:tc|ct)hing/],
    ["chart", /流量|traffic|订阅信息|机场信息|面板合集|panels|group[ -]?panel|grouppanel|functionstatus|sub[ -]?info/],
    ["wifi", /wi[ -]?fi|无线|snat|local[ -]?device|局域网|^lan /],
    ["bell", /地震|提醒|通知|earthquake|notification|episode[ -]?watch|release[ -]?radar/],
    ["repeat", /定时|重连|reconnect|auto[ -]?outbound|flush|清理缓存|dns[ -]?refresh/],
    ["key", /cookie|token|uuid|password|密码/],
    ["link", /短链接|直跳|外链|重定向|redirect|url[ -]?rewrite|url[ -]?shortener/],
    ["mail", /邮箱|temp[ -]?mail/],
    ["book", /阅读|小说|词典|学术|教育|scholar|novel|dictionary|rss/],
    ["download", /下载|安装|应用安装|app[ -]?install|ipa[ -]?install|game[ -]?download/],
    ["shield", /去广告|广告屏蔽|广告拦截|防火墙|纯净度|隐私|反劫持|antivirus|hijacking|privacy|ad[ -]?block|advertising|block.*(?:ads|httpdns|quic)|firewall|ip[ -]?(?:quality|purity)|ip[ -]?pure/],
    ["lock", /解锁|unlock|streaming/],
    ["globe", /网络|ip[ -]?(?:info|check)|dns|doh|doq|ipv6|stun|connectivity|ntp|网络接口|network|proxy|tun[ -]?only|skip[ -]?check/],
    ["play-circle", /流媒体|影视|视频|media|anime|m3u8/],
    ["terminal", /开发|脚本|工具|developer|script|container|general[ -]?settings|troubleshoot/],
    ["message", /翻译|字幕|通信|社交|translation|social|communication|voip/],
    ["box", /游戏|game|acg/],
  ];
  return groups.find(([, pattern]) => pattern.test(text))?.[0] || resource?.icon || "layers";
}

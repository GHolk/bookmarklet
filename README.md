<title>gholk's bookmarklet and userscript</title>

# gholk's bookmarklet and userscript

<meta charset="UTF-8">

<link rel="alternate" type="application/atom+xml"
      href="https://github.com/GHolk/bookmarklet/commits/master.atom">

if you are in github.com,
please go to
[github page of this repository](//gholk.github.io/bookmarklet)
or [index.html](index.html)
to use drag drop to add bookmarklet,
because github disable bookmarklet in
README.md in github repository page.

## 小書籤安裝方法
長按標題的小書籤超連結，拖曳到書籤列即安裝完成；
點擊書籤列中的小書籤即可在當下頁面中執行。

![drag bookmarklet vedio](bookmarklet-add.gif)

<style>
img[alt="drag bookmarklet vedio"] {
  display: block;
  margin: auto; /* align center */
  border: solid 1px;
  height: 15em;
}
code {
  border: 1px solid;
  padding: 0 0.2em;
}
pre > code {
  display: block;
  padding: 0.8em;
}
</style>

## 訂閱
懶得做 rss，請直接訂閱 [github 自動依 git 歷史產生的 rss][github rss] ，
或直接 watch [github repository] 用 email 收 github 通知。

[github rss]: https://github.com/GHolk/bookmarklet/commits/master.atom
[github repository]: https://github.com/GHolk/bookmarklet

## 授權 license
若無指定，本頁面中所有腳本使用 [GPLv3] 授權。

all scripts in this page/repository are licensed under [GPLv3].

[GPLv3]: https://www.gnu.org/licenses/gpl-3.0.html

## [youtube clean player]
play youtube video in clean window,
without locationbar, menubar, toolbar, statusbar.

## [custom search]

## [jumper translator]
redirector anchor url translator

## [generate url qrcode]
this bookmarklet will generate QR code image of current url,
and open in the new tab.

## [facebook video rotate]
逆時針方向旋轉方向錯誤的 facebook 浮動影片視窗 90° 。

## [enable select contextmenu 小書籤版][enable-select-contextmenu.bookmarklet.js]
取消網頁中禁用右鍵與防止選取文字的功能。
有些網頁會禁止反白選取文字，或是禁止右鍵，
這個小書籤可以強制允許右鍵與選取文字，
但不處理禁用 f12 或 ctrl-c 的網頁。

## [enable select contextmenu 油猴腳本][enable-select-contextmenu.user.js]
同上，但是油猴腳本版本。
如果常用網站會鎖右鍵和選取文字，
直接把該網站加入到 user include 即可。

## [強制啟用貼上功能][force-enable-paste.user.js]
某些網站會封鎖貼上功能，也就不能用右鍵貼上或是中鍵貼上，
也不能用 ctrl-v 貼上。
目前碰到的是某些信用卡網站，逼你一定要用鍵盤輸入，比較安全。
這個腳本可以啟用貼上功能。
如果碰到更多網站，就自己加入吧。

### [強制啟用貼上功能小書籤版][force-enable-paste.bookmarklet.js]
同上，不想裝油猴的可以用小書籤版。

## [press b to google]
靈感來自 [gslin 的 press g to google][pg2g] 。
把搜尋引擎換成 duckduckgo 後，搜尋結果沒有 google 那麼好，
有時成果不是想要的，就會想直接換回用 google 搜尋。
gslin 就寫了一個在 duckduckgo 結果頁面上，
按鍵盤的 g 就會用同樣關鍵字以 google 搜尋的油猴腳本。
但因為 g 在 vimium 裡蠻常用到的，
主要就 `gg` 和 `G` 是捲動到頁首和頁尾，
所以我重寫了一個把 g 改成 b 的版本。

[pg2g]: https://blog.gslin.org/archives/2021/09/10/10312/%E6%94%B9%E5%AF%AB%E3%80%8Cpress-g-to-google-duckduckgo%E3%80%8D%E8%AE%93%E4%BB%96%E6%94%AF%E6%8F%B4-whoogle/

## [hackmd scroll flip]
make mouse scroll flip page in hackmd slide mode.
title is bookmarklet, below is grease monkey user.js:
[hackmd scroll flip user.js] .

## [moodle backup]
在 [成功大學的 moodle][moodle.ncku] 首頁登入後，
點擊該書籤，能自動下載所有課程中教授上傳的講義。
畢竟 moodle 上的資料不會永遠留著，
畢業後還是下載到自己電腦裡比較安心。

事前建議先把瀏覽器對 pdf 檔的動作設成儲存而非開啟，
firefox: *偏好設定 > 應用程式 > 搜尋 pdf > 動作 > 儲存檔案* ，
chromium: *Settings > Privacy and security >
Content settings > PDF documents > Download* 。
另外 chromium 及 firefox 都建議設定預設下載的資料夾，
基本上就能全部自動下載，不會彈對話框。
有時一些檔案格式會無法直接下載，變成在新分頁開啟，
只能再右鍵另存新檔。

點擊書籤後會先彈出對話框要你輸入幾秒下載一個檔案，
建議是 1-3 秒，不要對計中的伺服器造成太大負擔；
輸入後就會開始一一下載。
如果要暫停或中斷，直接關掉分頁時會詢問是否要離開，
同時也會暫停不再下載新檔案。
若選擇停留就會繼續下載新檔案，確定離開就不會再下載新檔案；
下次再執行時會自動從上次下載到一半的課程繼續下載。

firefox 有個 bug，如果下載的檔案是純文字檔 txt，
會無法下載只會直接打開；
所以 firefox 的使用者我改用在新分頁開啟的形式，
防止原本 moodle 的頁面被結束掉。
chrome 好像會跳出大量下載的警告，記得勾允許。

[moodle.ncku]: https://moodle.ncku.edu.tw

## [screen message]
用螢幕展示大字報。

原來是 debian 上的套件 screen message，有人重寫成網頁版本。
可以在瀏覽器中按 F11 進入全螢幕模式。

我是包成 data url 的形式，
但在 anchor 裡直接放 data url 好像不能直接點擊開啟。
但拖曳到書籤或右鍵加入書籤後，點擊還是可以運作。

## [map alpha to number pad]
將鍵盤的 `azxcsdfwer` 映射成數字鍵 `0-9` 的腳本。
在設定中的 `url-match-map` 裡指定在哪些網址中的哪些輸入框裡要啟動映射。
url-match-map 是一個陣列的陣列，
例如 `['gholk-enable-map-alpha-to-number-pad', 'input']`
就是在網址符合 regexp `gholk-enable-map-alpha-to-number-pad` 時，
如果輸入框符合 `input` css 選擇器，就會將 `azxcsdfwer` 映射為數字鍵。
此外，當然還要把該網址加到油猴腳本的 `@match` 裡，
或是用選單中的 user-include，在不修改原始標頭的情況下加入。

## [e3new grade]
一次將全班的成績全部輸入進交通大學 new e3 教學網站中的評分表格。

 1. 進入課程 > 成績管理 > 編輯成績，
    網址應該是類似 <https://e3new.nctu.edu.tw/theme/dcpc/grade/report/grader/editgrade.php?id=5566&edit=1> ，
    其中 `id=5566` 換成該課程的 id。

 2. 點擊 *e3 new grade* 小書籤，
    會彈出視窗提示使用者點擊要輸入的欄。
    按 ok 後，在要評分的欄的任一學生的成績輸入框中點一下。
 
 3. 會再彈出一個輸入框要求輸入全班的成績，
    請把全班的成績以一行一個分數，
    或用空白分隔也可以，複製後貼到輸入框中，再按確定。
 
 4. 輸入的成績即會依順序填入該欄中的每個輸入框中。

## [e3new entitle]
讓 e3 new 的網頁標題顯示課程名稱、分頁名稱等資訊，
這樣就可以用瀏覽器的網址列搜尋快速找到某堂課的頁面。

[e3 new entitle]: e3new-entitle.user.js

## [paste to form file 小書籤版][paste-to-form-file.bookmarklet.js]
讓使用者可以用 ctrl-v 貼上或是用拖放檔案的方式把檔案加到表單中的檔案欄位。
此為小書籤版本，在含有上傳檔案的表單欄位 `<input type="file">`
的網頁中執行此小書籤後，即可透過 ctrl-c 或其它貼上的方式，
將剪貼簿中的檔案，例如在網頁上右鍵複製的圖片，直接貼到表單中。
或者是用拖放的方式，將電腦中的檔案拖放到網頁中，
檔案即會被載入到表單中的檔案欄位。
如果網頁中含有多於一個的允許貼上檔案的表單，
則會貼上到網頁中第一個表單。

## [paste to form file 油猴腳本][paste-to-form-file.user.js]
同上功能，但是油猴腳本 user.js 的版本，
好處是可以直接在指定的網址下執行，不用特別打開書籤欄執行小書籤。
此外相比小書籤版本，油猴版除了拖放電腦中的檔案，
也可以直接拖放其它網頁中的圖片。（由於油猴允許跨網域發送請求。）
預設本腳本只會在 [google 以圖搜圖的頁面][google image] 啟用，
如果希望在其它常造訪的網站上啟用，
請在油猴腳本選單中將網站的網址加到腳本的使用者包含或使用者符合中：
油猴選單 (monkey menu) > paste to form file >
使用者指令稿選項 (user script options) >
使用者包含 (include) 或使用者符合 (match) 。

[google image]: http://www.google.com/imghp

## [儲存頁面 html][download-html.bookmarklet.js]
將目前網頁的 html 內容儲存為檔案，
主要是用在一些以 javascript 載入內容的網站。
因為直接用 wget curl 拿不到東西，只能在瀏覽器裡打開，
載入完內容後再用小書籤下載下來。

執行後可能會跳出下載視窗，
然後會彈出確認對話框，按確認就會清除暫存的 blob。
下載的檔名預設使用網頁的 title 而不是網址，
因為網址的重名問題有點嚴重。

## [prompt annotate description]
用來編輯網頁的 meta description 標籤，
可以用來幫網頁加註解，然後 download html，或是用 web scrapebook 下載。
標註的內容會存在 `meta[property="gholk:annotate"]` 的 content 屬性裡。
會用既有的 description 當作草稿供編輯。

在編輯框中， `Ctrl-Enter` 可以確認並關閉編輯框，相當於 ok 的按鈕；
`Ctrl-s` 可以確認並儲存 html，相當於 download 的按鈕，
儲存 html 的功能與上面的 *儲存頁面 html* 效果相同。

## [github fork compare]
Execute in `https://github.com/*/*/network/members` to show
each fork is ahead or behind the original repository.

## [paste to form file userscript version][paste-to-form-file.user.js]
this script allow user to paste or drag file into the file field of form.
you can:

  - right click on image > copy image > ctrl-v on web-page containing form allow upload file
  - drag image from other web-page and drop on web-page
  - drag file from desktop or file explorer
  - drag text which is a url

this script is design for general propose.
it should work in any page containing file upload field
( `<input type="file">` ).
if you are using any web-page with file upload field,
you can add its url to this script's userscript include/match list,
(monkey menu > `paste to form file field` > userscript option >
userscript include or userscript match)
so you can paste/drop file into the form.
(this script only run in [google image search][google image] default.
you need to manually add other url.)

## [msrt ccf dice tool]
This bookmarklet allow you to roll multiple dices
and sort them in [Web TRPG platform CCF][ccf] .

[ccf]: https://ccfolia.com

click the bookmarklet in CCF's room,
and there will show up a button named *msrt*
next to the *send* button.

In message box, input dice command in first line,
and character names in second line.
both command are splited by space or tab.
multiple space or tab are ignored.
the third and following line will be ignored.
you can input some comment about the dices here.
the last line must contain `#sort` to indicate
that this is a sort command message.

```
2D6+3 2D6+1 2D6-3 1D6+2
alice bob   chard denis
battle agile order
first round in basement
#sort
```

then click *msrt* button,
and this tool, MSRT will format and send the dice command.

the sent command is like:

```
(2D6+3)+(2D6+1)+(2D6-3)+(1D6+2)
2D6+3 2D6+1 2D6-3 1D6+2
alice bob   chard denis
battle agile order
first round in basement
#sort
 ((2D6+3)+(2D6+1)+(2D6-3)+(1D6+2)) ＞ (8[4,4]+3)+(5[2,3]+1)+(6[2,4]-3)+(1[1]+2) ＞ 23
```

the last line is the result of the dices,
which will only show up after sent.

if the last line is `#sort #hide`,
the message will not show up to the other players.
this help hiding enemy's abilities detail.

after the dice result show up, MSRT will parse the result and
fill the order in input box.
the comment will also append to the order.

```
alice(11) > bob(6) > chard(3) > denis(3)
battle agile order
first round in basement
```

### 中文說明
這是用在 [網頁 TRPG 平台 ccfolia][ccf] 的擲骰小工具，
目前可以讓使用者一次丟多個丟多個骰子並排序。
在 ccf 房間中點擊此小書籤後，
會在對話框的發送按鈕旁出現一個 `MSRT` 按鈕。

要進行排序的話，
在對話框中第一行輸入以空白分隔的數值的組合，
第二行則輸入各組合的名稱，
多個空白會被壓縮為一個。
第三行開始可以輸入任意行的任意文字作為說明，
最行一行則只能有 `#sort` 關鍵字。
範例：

```
2D6+3 2D6+1 2D6-3 1D6+2
哈利  榮恩  妙麗  露娜
霍格華茲五年級生決鬥實力
一對一決鬥條件下
#sort
```

接著按下 `MSRT` 按鈕，
此工具即會把文字調整為如下格式並發送：

```
(2D6+3)+(2D6+1)+(2D6-3)+(1D6+2)
2D6+3 2D6+1 2D6-3 1D6+2
哈利  榮恩  妙麗  露娜
霍格華茲五年級生決鬥實力
一對一決鬥條件下
#sort
 ((2D6+3)+(2D6+1)+(2D6-3)+(1D6+2)) ＞ (8[4,4]+3)+(5[2,3]+1)+(6[2,4]-3)+(1[1]+2) ＞ 23
```

其中最一行是擲骰結果，是發送後 ccf 系統自動產生的。

若希望隱藏擲骰結果，在最後一行則要改為輸入 `#sort #hide` ，
這樣就會變成丟只有自己看的到的祕密骰。
ccf 的祕密骰是整則訊息都會隱藏，不只有擲骰結果。

在送出訊息並系統顯示出擲骰結果後，本工具就會依顯示的結果，
在文字輸入框中填入排列好的結果，
使用者可以調整訊息內容或直接送出。
同時作為說明的文字內容也會自動帶入。
範例：

```
哈利(11) > 榮恩(6) > 妙麗(3) > 靈娜(3)
霍格華茲五年級生決鬥實力
一對一決鬥條件下
```

## [google search unredirect]
this user script will remove redirect link in google search result page,
so you can copy the link directly on google search result page,
and link to page without redirected by google.

in google search result page, the anchor of result
will be rewrited to a link to google,
then google redirect the link to the destination.
it is troublesome if you want to *coyp the link* in context menu.
this user script remove these redirect.

## [facebook notify]
this user script will send browser notification
when background facebook web page get notification.
the notification will be sent only if fb is not foreground tab.
if click the button in notification,
userscript will switch to fb tab and open the page.

## [happy html keyboard player]
an easy html player helper script.
add keyboard short cut for video playing,
including arrow key right/left to seek/backward 5 second,
and space to pause/play.
for mouse, wheel can forward/backward about 5 second every tics,
and click on video can pause/play the video.
you need to add the url to *user match* of this script
if you want to execute this script in that website.

簡單的播放器腳本，幫 html 的 vedio 標籤加上鍵盤快捷鍵，
包含左右鍵來倒退、前進 5 秒，還有空白鍵來暫停、播放。
滑鼠滾輪也可以倒退、前進大約 5 秒，點擊影片則可以暫停、播放。
本腳本預期可以在任何播放器中執行，
所以你可以將任意網站的網址加入此腳本的 *使用者符合* 列表中，
以在該網站的影片中加入鍵盤快捷鍵功能；
但某些已經定義過快捷鍵的網頁如 youtube bilibili 中可能會有衝突。
預設會在公視的 [ptsplus.tv] 中執行，
此外在公視的 [勇者動畫系列] 中會自動將畫質切為 480P，
因為勇者系列不知道為什麼，如果畫質設 auto 或太高，
都會有非常嚴重的卡頓。

[ptsplus.tv]: https://www.ptsplus.tv/
[勇者動畫系列]: https://www.ptsplus.tv/season/4b572dd5-bdc7-45a6-ba35-accfe9cda3df

<script>
document.querySelectorAll('a').forEach(a => {
    a.href = a.href.replace(/(%[a-fA-F0-9]{2})+/g, c => decodeURIComponent(c))
})
</script>

[youtube clean player]: javascript:void%20function%20()%20%7Bconst%20urlToPlayer%3D%7B%7D%3BurlToPlayer.youtube%3Dfunction(location)%7Bconst%20scan%3Dlocation.search.match(%2F%5B%26%5C%2F%5C%3F%5Dv%3D(%5B%5E%26%5D*)%2F)%3Bconst%20id%3Dscan%5B1%5D%3Breturn%22https%3A%2F%2Fyoutube.com%2Fembed%2F%22%2Bid%7D%3Bfunction%20openCleanWindow(url)%7Bwindow.open(url%2C%22clean%20youtube%20player%22%2C%22resizable%22)%7Dfunction%20createButton()%7Bconst%20menuId%3D%22menu-container%22%3Bconst%20button%3Ddocument.createElement(%22button%22)%3Bbutton.textContent%3D%22clean%20window%22%3Bbutton.onclick%3D(()%3D%3E%7Bconst%20url%3DurlToPlayer.youtube(location)%3BopenCleanWindow(url)%7D)%3Bdocument.getElementById(menuId).appendChild(button)%7DopenCleanWindow(urlToPlayer.youtube(location))%3B%7D()

[custom search]: javascript:void%20function%20()%20%7Bconst%20map%3D%7B%7D%3Bmap.set%3Dfunction(alias%2Curl%2Cname)%7Bthis%5Balias%5D%3D%7Burl%3Aurl%2Cname%3Aname%7D%7D%3Bmap.createForm%3Dfunction(key)%7Bconst%20form%3Ddocument.createElement(%22form%22)%3Bconst%20search%3Dthis%5Bkey%5D%3Bform.action%3Dsearch.url%3Bform.target%3D%22_blank%22%3Bconst%20input%3Ddocument.createElement(%22input%22)%3Binput.name%3Dsearch.name%3Bform.appendChild(input)%3Breturn%20form%7D%3Bmap.search%3Dfunction(key%2Cstring)%7Bconst%20form%3Dthis.createForm(key)%3Bform.querySelector(%22input%22).value%3Dstring%3Bdocument.documentElement.appendChild(form)%3Bform.submit()%7D%3Bmap.set(%22pttpedia%22%2C%22http%3A%2F%2Fzh.pttpedia.wikia.com%2Fwiki%2F%E7%89%B9%E6%AE%8A%3A%E6%90%9C%E7%B4%A2%22%2C%22query%22)%3Bfunction%20promptSearch(string)%7Bif(!string)string%3Dprompt(%22custom%20search%22)%3Bconst%20scan%3Dstring.match(%2F(%5B%5E%5Cs%5D%2B)%5Cs(.*)%24%2F)%3Bconst%20key%3Dscan%5B1%5D%3Bconst%20value%3Dscan%5B2%5D%3Bmap.search(key%2Cvalue)%7DpromptSearch()%3B%7D()

[jumper translator]: javascript:void%20function%20()%20%7Bvar%20jumperTranslator%3D%7BurlScheme%3Anull%2Cdecode%3AdecodeURIComponent%2Ctranslate%3Afunction(url)%7Bconst%20scan%3Bif(scan%3Durl.match(this.urlScheme))%7Breturn%20this.decode(scan%5B1%5D)%7Delse%20return%20null%7D%2CmodifyAnchor%3Afunction(anchor)%7Bconst%20newUrl%3Dthis.translate(anchor.href)%3Bif(typeof%20newUrl%3D%3D%22string%22)anchor.href%3DnewUrl%3Breturn%20anchor%7D%2CmodifyAllAnchor%3Afunction()%7Bfor(const%20anchor%20of%20document.querySelectorAll(%22a%22))%7Bthis.modifyAnchor(anchor)%7D%7D%2CpromptUrlScheme%3Afunction()%7Bconst%20urlRegexpString%3Dprompt(%22url%20scheme%20regexp%22)%3Bthis.urlScheme%3Dnew%20RegExp(urlRegexpString)%7D%7D%3BjumperTranslator.promptUrlScheme()%3B%7D()

[generate url qrcode]: javascript:void%20function%20()%20%7Bconst%20url%3Dwindow.location.href%2CqrcodeUrl%3D%60http%3A%2F%2Fchart.googleapis.com%2Fchart%3Fchs%3D150x150%26cht%3Dqr%26chl%3D%24%7Burl%7D%60%3Bwindow.open(qrcodeUrl)%3B%7D()

[facebook video rotate]: javascript:void%20function%20()%20%7Bfunction%20getRotateRatio(cssString)%7Bconst%20scan%3DcssString.match(%2Frotate%5C((-%3F%5Cd%2B(%5C.%5Cd%2B)%3F)turn%5C)%2F)%3Bif(scan)%7Breturn%20Number(scan%5B1%5D)%7Dreturn%200%7Ddocument.querySelectorAll(%22div%5Brole%3Dpresentation%5D%22).forEach(present%3D%3E%7Bconst%20container%3Dpresent.parentNode%3Bif(container.querySelector(%22video%22))%7Bconsole.log(%22get%20video%22%2Ccontainer)%3Bconst%20ratioNext%3DgetRotateRatio(container.style.transform)-.25%3Bcontainer.style.transform%3D%60rotate(%24%7BratioNext%7Dturn)%60%7D%7D)%3B%7D()

[enable-select-contextmenu.bookmarklet.js]: javascript:void%20function%20()%20%7Bfunction%20stopEvent(event)%7Bevent.stopImmediatePropagation()%7Dconst%20registFirst%3D%7Bcapture%3A!0%7D%3Bwindow.addEventListener(%22contextmenu%22%2CstopEvent%2CregistFirst)%2Cdocument.addEventListener(%22mousedown%22%2CstopEvent%2CregistFirst)%2Cdocument.body.style.userSelect%3D%22text%22%3B%7D()

[enable-select-contextmenu.user.js]: enable-select-contextmenu.user.js
[force-enable-paste.user.js]: force-enable-paste.user.js
[force-enable-paste.bookmarklet.js]: javascript:void%20function%20()%20%7BsetInterval(()%3D%3E%7Bdocument.querySelectorAll(%22%5Bonpaste%5D%22).forEach(node%3D%3E%7Bnode.onpaste%3Dnull%7D)%2Cdocument.body.onpaste%26%26(document.body.onpaste%3Dnull)%7D%2C1e3)%3B%7D()

[press b to google]: press-b-to-google.user.js
[hackmd scroll flip]: javascript:void%20function%20()%20%7Bif(document.querySelector(%22.reveal%20.slides%22))%7Bconst%20Reveal%3DunsafeWindow.Reveal%3Bdocument.querySelector(%22.reveal%22).addEventListener(%22wheel%22%2Cfunction(scroll)%7Bscroll.preventDefault()%2Cscroll.deltaY%3E0%3FReveal.next()%3AReveal.prev()%7D%2C%7Bpassive%3A!1%7D)%3Bconst%20style%3Ddocument.createElement(%22style%22)%3Bstyle.textContent%3D%22%5Cn.reveal%20.slides%20%3A%3Aselection%20%7B%5Cn%20%20%20%20background-color%3A%20yellow%3B%5Cn%20%20%20%20color%3A%20initial%3B%5Cn%7D%5Cn.reveal%20.slides%20%3A%3A-moz-selection%20%7B%5Cn%20%20%20%20background-color%3A%20yellow%3B%5Cn%20%20%20%20color%3A%20initial%3B%5Cn%7D%5Cn.reveal%20.slides%20%7B%5Cn%20%20%20%20cursor%3A%20url('data%3Aimage%2Fcur%3Bbase64%2CAAABAAEAGRkAAAEAIABQCgAAFgAAACgAAAAZAAAAMgAAAAEAIAAAAAAAxAkAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwEAAP8EAAD%2FCgAA%2FxMAAP8UAAD%2FEwAA%2FwoAAP8EAAD%2FAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwcAAP8WAAD%2FMAAA%2F0UAAP9WAAD%2FWQAA%2F1YAAP9FAAD%2FMAAA%2FxYAAP8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAQAA%2FwwAAP8tAAD%2FVgAA%2F3oAAP%2BYAAD%2FpQAA%2F6wAAP%2BlAAD%2FmAAA%2F3oAAP9WAAD%2FLQAA%2FwwAAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAQAA%2FwwAAP80AAD%2FbQAA%2F50AAP%2FBAAD%2F2AAA%2F%2BIAAP%2FmAAD%2F4gAA%2F9gAAP%2FBAAD%2FnQAA%2F20AAP80AAD%2FDAAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwkAAP8vAAD%2FcAAA%2F6kAAP%2FVAAD%2F7AAA%2F%2FUAAP%2F5AAD%2F%2BgAA%2F%2FkAAP%2F1AAD%2F7AAA%2F9UAAP%2BpAAD%2FcAAA%2Fy8AAP8JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwIAAP8bAAD%2FWwAA%2F6EAAP%2FWAAD%2F8QAA%2F%2FoAAP%2F9AAD%2F%2FgAA%2F%2F4AAP%2F%2BAAD%2F%2FQAA%2F%2FoAAP%2FxAAD%2F1gAA%2F6EAAP9bAAD%2FGwAA%2FwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8HAAD%2FNgAA%2F4EAAP%2FFAAD%2F7QAA%2F%2FoAAP%2F%2BAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2BgAA%2F%2B0AAP%2FFAAD%2FgQAA%2FzYAAP8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FDwAA%2F04AAP%2BhAAD%2F3AAA%2F%2FcAAP%2F9AAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F0AAP%2F3AAD%2F3AAA%2F6EAAP9OAAD%2FDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FxoAAP9hAAD%2FrwAA%2F%2BcAAP%2F6AAD%2F%2FgAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2BgAA%2F%2BcAAP%2BvAAD%2FYQAA%2FxoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8cAAD%2FZgAA%2F7cAAP%2FrAAD%2F%2BwAA%2F%2F4AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FgAA%2F%2FsAAP%2FrAAD%2FtwAA%2F2YAAP8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FHAAA%2F2QAAP%2ByAAD%2F6QAA%2F%2FoAAP%2F%2BAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F4AAP%2F6AAD%2F6QAA%2F7IAAP9kAAD%2FHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FxIAAP9UAAD%2FqAAA%2F%2BEAAP%2F4AAD%2F%2FgAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2BAAA%2F%2BEAAP%2BoAAD%2FVAAA%2FxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8KAAD%2FPwAA%2F4wAAP%2FOAAD%2F8QAA%2F%2FwAAP%2F%2BAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2FAAA%2F%2FEAAP%2FOAAD%2FjAAA%2Fz8AAP8KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAgAA%2FyMAAP9oAAD%2FrQAA%2F%2BAAAP%2F1AAD%2F%2FAAA%2F%2F4AAP%2F%2BAAD%2F%2FgAA%2F%2F4AAP%2F%2BAAD%2F%2FAAA%2F%2FUAAP%2FgAAD%2FrQAA%2F2gAAP8jAAD%2FAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8NAAD%2FOgAA%2F4AAAP%2B5AAD%2F4AAA%2F%2FIAAP%2F5AAD%2F%2BwAA%2F%2FwAAP%2F7AAD%2F%2BQAA%2F%2FIAAP%2FgAAD%2FuQAA%2F4AAAP86AAD%2FDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAQAA%2FxYAAP9GAAD%2FggAA%2F7AAAP%2FSAAD%2F5AAA%2F%2B0AAP%2FvAAD%2F7QAA%2F%2BQAAP%2FSAAD%2FsAAA%2F4IAAP9GAAD%2FFgAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAAD%2FFgAA%2Fz0AAP9sAAD%2FkgAA%2F7AAAP%2B8AAD%2FwgAA%2F7wAAP%2BwAAD%2FkgAA%2F2wAAP89AAD%2FFgAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwEAAP8PAAD%2FJwAA%2F0UAAP9eAAD%2FbgAA%2F3QAAP9uAAD%2FXgAA%2F0UAAP8nAAD%2FDwAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwQAAP8MAAD%2FFwAA%2FyMAAP8lAAD%2FIwAA%2FxcAAP8MAAD%2FBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAAD%2FAQAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2F%2F%2F%2FgP%2F%2F%2F4D%2F%2F%2F%2BA%2FwB%2FgP4AP4D4AA%2BA8AAHgPAAB4DgAAOA4AADgOAAA4DgAAOA4AADgOAAA4DgAAOA4AADgOAAA4DwAAeA8AAHgPgAD4D8AB%2BA%2FwB%2FgP%2Fj%2F4D%2F%2F%2F%2BA%2F%2F%2F%2FgA%3D%3D')%2012.5%2012.5%2C%20auto%3B%5Cn%7D%5Cn%22%2Cdocument.body.appendChild(style)%7D%7D()

[moodle backup]: javascript:void%20function%20()%20%7Bclass%20MoodleCrawler%7Bconstructor()%7Bthis.sleepInterval%3D3%2Cthis.domParser%3Dnew%20DOMParser%2Cthis.textDecoder%3Dnew%20TextDecoder(%22UTF-8%22)%7Dasync%20fetch(url)%7Breturn%20await%20fetch(url%2C%7Bcredentials%3A%22same-origin%22%7D)%7Dasync%20%24fetch(url)%7Bconst%20response%3Dawait%20this.fetch(url)%2Chtml%3Dawait%20response.text()%3Breturn%20this.domParser.parseFromString(html%2C%22text%2Fhtml%22)%7D*extractAllCourseId(document)%7Bconst%20anchorList%3Ddocument.querySelectorAll(%22.block_course_list%20a%22)%3Bfor(const%20anchor%20of%20anchorList)%7Byield%20new%20URL(anchor.href).searchParams.get(%22id%22)%7D%7DextractTitle(document)%7Breturn%20document.getElementById(%22logobox%22).textContent.trim()%7D*extractFolder(url)%7Bconst%20fileList%3Dthis.%24fetch(url).then(dom%3D%3Edom.querySelectorAll(%22.fp-filename-icon%20a%22))%3Blet%20finish%3D!1%2Cindex%3D0%3Bfor(%3B!finish%3B)yield%20fileList.then(anchorList%3D%3E%7Blet%20anchor%3Dnull%3Breturn%20index%3CanchorList.length%26%26(anchor%3DanchorList%5Bindex%5D%2Cindex%2B%2B)%2Cindex%3E%3DanchorList.length%26%26(finish%3D!0)%2C%7Burl%3Aanchor.href%7D%7D)%7D*extractByType(tr)%7Bconst%20url%3Dtr.querySelector(%22a%22).href%3Blet%20description%3Dtr.querySelector(%22td%3Alast-child%22).textContent%3Bdescription%3Ddescription.trim()%2Curl.includes(%22%2Fmod%2Fresource%2Fview.php%22)%3Fyield%7Burl%3Aurl%2Cdescription%3Adescription%7D%3Aurl.includes(%22%2Fmod%2Ffolder%2Fview.php%22)%3Fyield*this.extractFolder(url)%3Aurl.includes(%22%2Fmod%2Fpage%2Fview.php%22)%7C%7Curl.includes(%22%2Fmod%2Furl%2Fview.php%22)%3Fyield%7Burl%3Aurl%2Cdescription%3Adescription%7D%3Aconsole.error(%60unknown%20file%20type%3A%20%24%7Burl%7D%60)%7D*extractAllFile(document)%7Bfor(const%20tr%20of%20document.querySelectorAll(%22%23region-main-box%20tr%5Bclass%5D%22))yield*this.extractByType(tr)%7Dasync%20%24fetchCourseResource(id)%7Bconst%20url%3D%60https%3A%2F%2Fmoodle.ncku.edu.tw%2Fcourse%2Fresources.php%3Fid%3D%24%7Bid%7D%60%3Breturn%20await%20this.%24fetch(url)%7Dsleep(second%3Dthis.sleepInterval)%7Breturn%20new%20Promise(wake%3D%3EsetTimeout(wake%2C1e3*second))%7DgetLastCourseId()%7Breturn%20localStorage.getItem(%22moodle-backup-current-id%22)%7DsetLastCourseId(id)%7BlocalStorage.setItem(%22moodle-backup-current-id%22%2Cid)%7DremoveLastCourseId()%7BlocalStorage.removeItem(%22moodle-backup-current-id%22)%7Dasync%20run()%7Bthis.runInit()%3Blet%20alreadyDownload%2ClastCourseId%3Dthis.getLastCourseId()%3BalreadyDownload%3D!!lastCourseId%3Bfor(const%20id%20of%20this.extractAllCourseId(document))%7Bif(alreadyDownload)%7Bif(lastCourseId!%3Did)continue%3BalreadyDownload%3D!1%7Dthis.setLastCourseId(id)%3Bconst%20resource%3Dawait%20this.%24fetchCourseResource(id)%3Bthis.extractTitle(resource)%3Bawait%20this.sleep()%3Bfor(let%20file%20of%20this.extractAllFile(resource))file%26%26file.then%26%26(file%3Dawait%20file)%2Cfile%26%26(this.download(file.url)%2Cawait%20this.sleep())%7Dthis.removeLastCourseId()%2Cthis.runDestruct()%7DrunInit()%7Bthis.downloadInit()%2Cthis.preventExitInit()%7DrunDestruct()%7Bthis.downloadDestruct()%2Cthis.preventExitDestruct()%7DisFirefox()%7Breturn%20navigator.userAgent.match(%2Ffirefox%2Fi)%7DdownloadInit()%7Bconst%20anchor%3Ddocument.createElement(%22a%22)%3Bthis.isFirefox()%7C%7Canchor.setAttribute(%22download%22%2C%22%22)%2Canchor.setAttribute(%22target%22%2C%22_blank%22)%2Cdocument.body.appendChild(anchor)%2Cthis.downloadNode%3Danchor%7Ddownload(url)%7Bthis.downloadNode.href%3Durl%2Cthis.downloadNode.click()%7DdownloadDestruct()%7Bthis.downloadNode.remove()%2Cthis.downloadNode%3Dnull%7DpreventExitInit()%7Bwindow.onbeforeunload%3Dthis.preventExit%7DpreventExit(closeEvent)%7Breturn%22moodle%20backup%20is%20not%20finish%2C%20do%20you%20want%20to%20exit%3F%22%7DpreventExitDestruct()%7Bwindow.onbeforeunload%3Dnull%7Dasync%20bookmarkletPrompt()%7Blet%20second%3Dprompt(%22download%20file%20interval%20second%3A%22)%3Bthis.assert(%22string%22%3D%3Dtypeof%20second%2C%22user%20abrupt%22)%2Csecond%3DNumber(second)%2Cthis.assert(second%3E0%2C%22second%20should%20be%20positive%22)%2Cthis.sleepInterval%3DNumber(second)%2Cawait%20this.run()%2Calert(%22download%20finish%22)%7Dassert(test%2CerrorMessage%2CCustomError%3DError)%7Bif(!test)throw%20new%20CustomError(errorMessage)%7D%7Dclass%20MoodleCrawlerDebug%20extends%20MoodleCrawler%7Bconstructor()%7Bsuper()%2Cthis.sleepInterval%3D.5%7DextractTitle(document)%7Bconst%20title%3Dsuper.extractTitle(document)%3Bthis.currentCourseTitle%3Dtitle%7Ddownload(url)%7Bconsole.log(this.currentCourseTitle%2Curl)%7D%7Dconst%20moodleCrawler%3Dnew%20MoodleCrawler%3BmoodleCrawler.bookmarkletPrompt()%3B%7D()

[screen message]: data:text/html;base64,PGh0bWw+CjwhLS0KIyAgICAgc20uaHRtbAojICAgICBDb3B5cmlnaHQgKEMpIDIwMDYgLSAyMDEwIEpvYWNoaW0gQnJlaXRuZXIKIwojICAgICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeQojICAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieQojICAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvcgojICAgICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLgojCiMgICAgIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLAojICAgICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZgojICAgICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlCiMgICAgIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuCiMKIyAgICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UKIyAgICAgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW07IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUKIyAgICAgRm91bmRhdGlvbiwgSW5jLiwgNTEgRnJhbmtsaW4gU3QsIEZpZnRoIEZsb29yLCBCb3N0b24sIE1BICAwMjExMC0xMzAxIFVTQQotLT4KPGhlYWQ+Cjx0aXRsZT5TY3JlZW4gbWVzc2FnZTwvdGl0bGU+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiN0ZXh0YXJlYSB7Cglwb3NpdGlvbjphYnNvbHV0ZTsKCXRvcDowcHg7CglsZWZ0OjBweDsKCXdpZHRoOjEwMCU7CgloZWlnaHQ6MTAwJTsKCWZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlLCBzYW5zOwoJcGFkZGluZzowcHg7CgltYXJnaW46MHB4OwoJYm9yZGVyOjBweDsKCXRleHQtYWxpZ246Y2VudGVyOwoJb3ZlcmZsb3c6aGlkZGVuOwoJcmVzaXplOm5vbmU7CgkvKgoJVGhpcyB1c2VkIHRvIGJlIGhlcmUuIE5vdCBzdXJlIHdoeSwgYnV0IGV2ZW50dWFsbHksCglpdCBicm9rZSBGaXJlZm94IChuZXdsaW5lcyBub3Qgd3JhcHBpbmcgbGluZXMpCgl3aGl0ZS1zcGFjZTpub3dyYXA7CgkqLwp9CgovKiBkaXNhYmxlIGZvY3VzIGJvcmRlciBhdCBDaHJvbWUgKi8KI3RleHRhcmVhOmZvY3VzIHsKCW91dGxpbmU6IG5vbmU7Cn0KCiN0ZXN0IHsKCXBvc2l0aW9uOmFic29sdXRlOwoJdmlzaWJpbGl0eTpoaWRkZW47Cgl0b3A6MHB4OwoJbGVmdDowcHg7Cglmb250LXNpemU6MzBweDsKCXdoaXRlLXNwYWNlOnByZTsKCWZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnM7Cglib3JkZXI6MHB4OwoJcGFkZGluZzowLjFlbTsKCW1hcmdpbjowcHg7Cn0KI2Fib3V0IHsKCXBvc2l0aW9uOmFic29sdXRlOwoJd2lkdGg6MjBlbTsKCXRvcDozMHB4OwoJcmlnaHQ6MzBweDsKCWJhY2tncm91bmQtY29sb3I6Z3JheTsKCXBhZGRpbmc6MWVtOwp9Cgo8L3N0eWxlPgo8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+Cm9wYWNpdHkgPSAxMDA7CmZ1bmN0aW9uIGFkanVzdCgpIHsKCXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRleHRhcmVhIik7Cgl0ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRlc3QiKTsKCQoJdGVzdC50ZXh0Q29udGVudD10YS52YWx1ZTsKCS8vIE90aGVyd2lzZSwgdGhlIG5ld2xpbmUgd291bGQgbm90IGJlIGNvdW50ZWQuCglpZiAodGEudmFsdWVbdGEudmFsdWUubGVuZ3RoLTFdID09ICJcbiIpIHsKCQl0ZXN0LmlubmVySFRNTCArPSAnLic7Cgl9CgoJcmF0aW9YID0gKHdpbmRvdy5pbm5lcldpZHRoKSAvIHRlc3Qub2Zmc2V0V2lkdGg7CglyYXRpb1kgPSAod2luZG93LmlubmVySGVpZ2h0KSAvIHRlc3Qub2Zmc2V0SGVpZ2h0OwoJcmF0aW8gPSBNYXRoLm1pbihyYXRpb1gscmF0aW9ZKTsKCWZvbnRTaXplID0gTWF0aC5mbG9vcigzMCAqIHJhdGlvKSArICJweCIKCXRhLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7CgluZXdIZWlnaHQgPSBNYXRoLmNlaWwodGVzdC5vZmZzZXRIZWlnaHQgKiByYXRpbyk7CgkvL3RhLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICJweCI7CgkvL3RhLnN0eWxlLnRvcCA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIG5ld0hlaWdodCkvMikgKyAicHgiOwoJdGEuc3R5bGUucGFkZGluZ1RvcCA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIG5ld0hlaWdodCkvMikgKyAicHgiOwoJdGEuc3R5bGUucGFkZGluZ0JvdHRvbSA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIG5ld0hlaWdodCkvMikgKyAicHgiOwoJbmV3V2lkdGggPSBNYXRoLmNlaWwodGVzdC5vZmZzZXRXaWR0aCAqIHJhdGlvKTsKCS8vdGEuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICJweCI7Cgl0YS5zdHlsZS5wYWRkaW5nTGVmdCA9IE1hdGgubWF4KDAsTWF0aC5mbG9vcigod2luZG93LmlubmVyV2lkdGggLSBuZXdXaWR0aCkvMikpICsgInB4IjsKCXRhLnN0eWxlLnBhZGRpbmdSaWdodCA9IE1hdGgubWF4KDAsTWF0aC5mbG9vcigod2luZG93LmlubmVyV2lkdGggLSBuZXdXaWR0aCkvMikpICsgInB4IjsKCSAKCS8vdGVzdC5pbm5lckhUTUwgPSBuZXdIZWlnaHQgKyAiICIgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKyAiICIgKyBmb250U2l6ZTsKCQoJaHJlZiA9ICAiI3Q9IiArIGVuY29kZVVSSUNvbXBvbmVudCh0YS52YWx1ZSk7CglpZiAodGEuc3R5bGUuY29sb3IpIHsKCQlocmVmICs9ICAiO2Y9IiArIGVuY29kZVVSSUNvbXBvbmVudCh0YS5zdHlsZS5jb2xvcik7Cgl9CglpZiAodGEuc3R5bGUuYmFja2dyb3VuZENvbG9yKSB7CgkJaHJlZiArPSAgIjtiPSIgKyBlbmNvZGVVUklDb21wb25lbnQodGEuc3R5bGUuYmFja2dyb3VuZENvbG9yKTsKCX0KCXdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjsKfQoKZnVuY3Rpb24gc2hvd0JveCgpIHsKCW9wYWNpdHkgPSAxMDA7Cgl3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpOwoJc2V0T3BhY2l0eSgpOwp9CmZ1bmN0aW9uIGZhZGVPdXQoKSB7CglvcGFjaXR5ICo9IDAuOTg1OwoJaWYgKG9wYWNpdHkgPiAxKSB7CgkJdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCJmYWRlT3V0KCkiLDIwKTsKCX0gZWxzZSB7CgkJb3BhY2l0eSA9IDA7Cgl9CglzZXRPcGFjaXR5KCk7Cn0KZnVuY3Rpb24gc2V0T3BhY2l0eSgpIHsKCWFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImFib3V0Iik7CglhYm91dC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eS8xMDA7CglhYm91dC5zdHlsZS5maWx0ZXIgPSAiYWxwaGEob3BhY2l0eT0iK01hdGgucm91bmQob3BhY2l0eSkrIikiOwp9CgpmdW5jdGlvbiBwYXJzZUhhc2goKSB7Cgl0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJ0ZXh0YXJlYSIpOwoJdGEuZm9jdXMoKTsKCgl2YXIgcXVlcnlTdHJpbmcgPSB7fTsKCXdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoCgkJbmV3IFJlZ0V4cCgiKFtePz0mOyNdKykoPShbXiY7XSopKSIsICJnIiksCgkJZnVuY3Rpb24oJDAsICQxLCAkMiwgJDMpIHtxdWVyeVN0cmluZ1skMV0gPSBkZWNvZGVVUklDb21wb25lbnQoJDMpOyB9CgkpOwoJaWYgKHF1ZXJ5U3RyaW5nWyd0J10pIHsKCQl0YS52YWx1ZSA9IHF1ZXJ5U3RyaW5nWyd0J107Cgl9CglpZiAocXVlcnlTdHJpbmdbJ2YnXSkgewoJCXRhLnN0eWxlLmNvbG9yID0gcXVlcnlTdHJpbmdbJ2YnXTsKCX0KCWlmIChxdWVyeVN0cmluZ1snYiddKSB7CgkJdGEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcXVlcnlTdHJpbmdbJ2InXTsKCX0KCWFkanVzdCgpOwoJdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCJmYWRlT3V0KCk7IiwxMDAwKTsKCXNldE9wYWNpdHkoKTsKfQoJCmZ1bmN0aW9uIGluaXQoKSB7CglpZiAod2luZG93Lm5hdmlnYXRvci5tb3pBcHBzKSB7CgkJZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImZpcmVmb3giKS5zdHlsZS5kaXNwbGF5ID0gImJsb2NrIjsKCX0KCXBhcnNlSGFzaCgpOwp9Cjwvc2NyaXB0Pgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm8iPgo8bWV0YSBuYW1lPSJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlIiBjb250ZW50PSJ5ZXMiPgo8bWV0YSBuYW1lPSJmb3JtYXQtZGV0ZWN0aW9uIiBjb250ZW50PSJ0ZWxlcGhvbmU9bm8iPgo8L2hlYWQ+Cjxib2R5IG9ubG9hZD0iaW5pdCgpIiBvbmhhc2hjaGFuZ2U9InBhcnNlSGFzaCgpIiBvbnJlc2l6ZT0iYWRqdXN0KCkiPgo8dGV4dGFyZWEgaWQ9InRleHRhcmVhIiBvbktleVVwPSJhZGp1c3QoKSIgb25wYXN0ZT0iYWRqdXN0KCkiIG9uaW5wdXQ9ImFkanVzdCgpIj46LSk8L3RleHRhcmVhPgo8c3BhbiBpZD0idGVzdCI+PC9zcGFuPgo8ZGl2IGlkPSJhYm91dCIgb25Nb3VzZU92ZXI9InNob3dCb3goKSIgb25Nb3VzZU91dD0iZmFkZU91dCgpIj4KPHA+ClRoaXMgaXMgYW4gb25saW5lLXZlcnNpb24gb2YgdGhlIHByb2dyYW0gPHN0cm9uZz5zY3JlZW4tbWVzc2FnZTwvc3Ryb25nPiBmb3IgTGludXguCjwvcD4KPHAgaWQ9ImZpcmVmb3giIHN0eWxlPSJkaXNwbGF5Om5vbmUiPgpZb3UgY2FuIDxhIGhyZWY9IiMiIG9uY2xpY2s9IndpbmRvdy5uYXZpZ2F0b3IubW96QXBwcy5pbnN0YWxsKCdodHRwOi8vc20ubm9tZWF0YS5kZS9zbS53ZWJhcHAnKSI+aW5zdGFsbCBpdCBhcyBhIEZpcmVGb3ggYXBwPC9hPi4KPC9wPgo8cD4KRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9yaWdpbmFsIHByb2dyYW0sIHNlZSB3aGF0IDxhIGhyZWY9Imh0dHA6Ly9kZWJhZGF5LmRlYmlhbi5uZXQvMjAwNy8wNy8xOC9zY3JlZW4tbWVzc2FnZS11c2UteW91ci1zY3JlZW4tdG8tY29tbXVuaWNhdGUvIj5EZWItYS1EYXk8L2E+IHdyaXRlcyBhYm91dCBpdC4gWW91IGNhbiBkb3dubG9hZCBpdCBmcm9tIDxhIGhyZWY9Imh0dHA6Ly9wYWNrYWdlcy5kZWJpYW4ub3JnL3NpZC9zbSI+RGViaWFuPC9hPiBvciA8YSBocmVmPSJodHRwOi8vZGFyY3Mubm9tZWF0YS5kZS9zY3JlZW4tbWVzc2FnZS8iPmZldGNoIHRoZSBzb3VyY2Vjb2RlPC9hPi4KPC9wPgo8cD4KPHN0cm9uZz5zY3JlZW4tbWVzc2FnZTwvc3Ryb25nPiB3YXMgY3JlYXRlZCBieSA8YSBocmVmPSJodHRwOi8vd3d3LmpvYWNoaW0tYnJlaXRuZXIuZGUvIj5Kb2FjaGltIEJyZWl0bmVyPC9hPi4KSWYgeW91IGxpa2UgaXQsIHRoZW4gPGEgaHJlZj0iaHR0cDovL2ZsYXR0ci5jb20vdGhpbmcvMzMwMTg2L3NjcmVlbi1tZXNzYWdlIiB0YXJnZXQ9Il9ibGFuayI+ZmxhdHRyIHRoaXM8L2E+Lgo8L3A+CjwvZGl2Pgo8L2JvZHk+CjwvaHRtbD4K
[map alpha to number pad]: map-alpha-to-number-pad.user.js
[e3new grade]: javascript:void%20function%20()%20%7Bfunction%20userClick()%7Breturn%20alert(%22please%20click%20the%20column%20you%20want%20to%20grade%22)%2Cnew%20Promise(resolve%3D%3E%7Bwindow.addEventListener(%22click%22%2Cclick%3D%3Eresolve(click.target)%2C%7Bonce%3A!0%7D)%7D)%7Dfunction%20findAcient(node%2CtestSelector)%7Blet%20test%3Bfor(test%3D%22string%22%3D%3Dtypeof%20testSelector%3Fnode%3D%3Enode.matches(testSelector)%3AtestSelector%3Bnode%3B)%7Bif(test(node))return%20node%3Bnode%3Dnode.parentNode%7Dreturn%20null%7Dfunction%20getScoreList()%7Breturn%20prompt(%22please%20input%20score%20seperated%20by%20space%22).split(%2F%5Cs%2Fg)%7Dasync%20function%20main()%7Bconst%20cell%3DfindAcient(await%20userClick()%2C%22td%22)%2CinputSelector%3D%60td%3Anth-child(%24%7Bcell.cellIndex%2B1%7D)%20input%60%2CinputList%3DfindAcient(cell%2C%22table%22).querySelectorAll(inputSelector)%2CscoreList%3Dawait%20getScoreList()%3Bfor(let%20i%3D0%3Bi%3CinputList.length%3Bi%2B%2B)%7BinputList%5Bi%5D.value%3DscoreList%5Bi%5D%7D%7Dmain()%3B%7D()

[e3new entitle]: e3new-entitle.user.js
[paste-to-form-file.bookmarklet.js]: javascript:void%20function%20()%20%7Bfunction%20createFileList(...fileList)%7Bconst%20data%3Dnew%20DataTransfer%3Bfor(const%20file%20of%20fileList)data.items.add(file)%3Breturn%20data.files%7Dfunction%20parseHtml(html)%7Breturn(new%20DOMParser).parseFromString(html%2C%22text%2Fhtml%22)%7Dasync%20function%20fetchFile(url)%7Breturn%20await%20new%20Promise((resolve%2Creject)%3D%3E%7BGM.xmlHttpRequest(%7Bmethod%3A%22GET%22%2Curl%3Aurl%2CresponseType%3A%22blob%22%2Conload(xhr)%7Bconst%20blob%3Dxhr.response%2Ctype%3Dfunction(xhr)%7Bfor(const%20row%20of%20xhr.responseHeaders.split(%2F%5Cn%2F))%7Bconst%20scan%3Drow.match(%2F%5Econtent-type%3A%20(%5B-_%2B%5Cw%5D%2B)%5C%2F(%5B-_%2B%5Cw%5D%2B)%2Fi)%3Bif(scan)return%20console.debug(row)%2Cscan%5B2%5D%7D%7D(xhr)%3Blet%20file%3Bfile%3Dtype%3Fnew%20File(%5Bblob%5D%2C%60drop-image.%24%7Btype%7D%60%2C%7Btype%3A%60image%2F%24%7Btype%7D%60%7D)%3Anew%20File(%5Bblob%5D%2C%22drop-image%22)%2Cresolve(file)%7D%2Conerror(xhr)%7Breject(xhr.statusText)%7D%7D)%7D)%7Dfunction%20putFileIntoForm(fileList)%7Bconst%20input%3Ddocument.querySelector('input%5Btype%20%3D%20%22file%22%5D')%3Bif(!input)return%3Bconsole.debug(%22fileList%3A%22%2C...fileList)%2Cinput.files%3DfileList%3Bconst%20change%3Dnew%20Event(%22change%22%2C%7Bbubbles%3A!0%2Ccancelable%3A!1%7D)%3Binput.dispatchEvent(change)%7Ddocument.body.addEventListener(%22paste%22%2Cpaste%3D%3E%7B0!%3Dpaste.clipboardData.files.length%26%26putFileIntoForm(paste.clipboardData.files)%7D)%2Cdocument.body.addEventListener(%22dragover%22%2Cover%3D%3Eover.preventDefault())%2Cdocument.body.addEventListener(%22drop%22%2Casync%20drop%3D%3E%7Bdrop.preventDefault()%3Bconst%20data%3Ddrop.dataTransfer%3Bconsole.debug(%22type%22%2C...data.types)%3Blet%20fileList%3Bif(%22undefined%22!%3Dtypeof%20GM%26%260%3D%3Ddata.files.length)%7Blet%20urlList%3Bif(~data.types.indexOf(%22text%2Fhtml%22))%7Bconst%20dom%3DparseHtml(data.getData(%22text%2Fhtml%22))%3BurlList%3Ddom.querySelectorAll(%22img%22)%2Cconsole.debug(%22query%20img%20url%22)%2C0%3D%3DurlList.length%26%26(console.debug(%22no%20image%2C%20query%20anchor%22)%2CurlList%3Ddom.querySelectorAll(%22a%22))%2CurlList%3DArray.from(urlList).map(node%3D%3Enode.src%7C%7Cnode.href)%7D0%3D%3DurlList.length%26%26~data.types.indexOf(%22text%2Fplain%22)%26%26(console.debug(%22no%20url%20found%2C%20try%20plain%20text%22)%2CurlList%3Ddata.getData(%22text%2Fplain%22).split(%22%5Cn%22).filter(u%3D%3E%22%23%22!%3Du.charAt(0)))%3Btry%7BfileList%3Dawait%20Promise.all(urlList.map(fetchFile))%7Dcatch(e)%7Breturn%20void%20console.error(e)%7DfileList%3DcreateFileList(...fileList)%7Delse%20fileList%3Ddrop.dataTransfer.files%3Bconsole.debug(%22file%20list%3A%22%2CfileList)%2CputFileIntoForm(fileList)%7D)%3B%7D()

[paste-to-form-file.user.js]: paste-to-form-file.user.js
[download-html.bookmarklet.js]: javascript:void%20function()%7Bfunction%20main()%7Bfunction%20doctypeToString(node%3Ddocument.doctype)%7Bif(!node)return%22%22%3Breturn%22%3C!DOCTYPE%20%22%2Bnode.name%2B(node.publicId%3F%60%20PUBLIC%20%22%24%7Bnode.publicId%7D%22%60%3A%22%22)%2B(!node.publicId%26%26node.systemId%3F%22%20SYSTEM%22%3A%22%22)%2B(node.systemId%3F%60%20%22%24%7Bnode.systemId%7D%22%60%3A%22%22)%2B%22%3E%22%2B%22%5Cn%22%7Dfunction%20cleanCopy(root)%7Bconst%20deep%3Dtrue%3Bconst%20copy%3Droot.cloneNode(deep)%3Bcopy.querySelectorAll(%22iframe%5Bsrc%20%5E%3D%20moz-extension%22).forEach(e%3D%3Ee.remove())%3Breturn%20copy%7Dconst%20html%3DdoctypeToString()%2BcleanCopy(document.documentElement).outerHTML%3Bconst%20blob%3Dnew%20Blob(%5Bhtml%5D)%3Bconst%20download%3Ddocument.createElement(%22a%22)%3Bdownload.download%3Ddocument.title%2B%22.html%22%3Bdownload.href%3DURL.createObjectURL(blob)%3Bdocument.body.appendChild(download)%3Bdownload.click()%3Bdownload.remove()%3Balert(%22cleaning%20blob%3F%22)%3BURL.revokeObjectURL(blob)%7Dfunction%20isAppendScriptTag(root%3Ddocument)%7Bif(root.currentScript)%7Breturn%20root.currentScript.textContent.match(%22isAppendScriptTag%22)%7Delse%20return%20false%7Dif(isAppendScriptTag())%7Bconst%20script%3Ddocument.currentScript%3BsetTimeout(()%3D%3E%7Bscript.remove()%3Bmain()%7D%2C800)%7Delse%20main()%7D()%3B

[prompt annotate description]: javascript:void%20function()%7Bfunction%20main()%7Bvar%20d%3Ddocument%2Cb%3Dd.body%3Bfunction%20%24(selector%2Ccontext)%7Breturn(context%7C%7Cd).querySelector(selector)%7Dfunction%20%24%24(selector%2Ccontext)%7Breturn(context%7C%7Cd).querySelectorAll(selector)%7Dfunction%20create(tag%2Cparent)%7Bconst%20elm%3D(parent%7C%7Cb).appendChild(d.createElement(tag))%3Breturn%20elm%7Dasync%20function%20promptUi(title%2Ctext%3D%22%22)%7Bconst%20dialog%3Ddocument.createElement(%22div%22)%3Bdialog.className%3D%22gholk-prompt-dialog%22%3Bcreate(%22h2%22%2Cdialog).textContent%3Dtitle%3Bconst%20textarea%3Dcreate(%22textarea%22%2Cdialog)%3Btextarea.value%3Dtext%3Bconst%20ok%3Dcreate(%22button%22%2Cdialog)%3Bok.textContent%3D%22ok%22%3Blet%20confirm%3Blet%20reject%3Bconst%20promise%3Dnew%20Promise((ok%2Cno)%3D%3E%5Bconfirm%2Creject%5D%3D%5Bok%2Cno%5D)%3Bok.onclick%3D(()%3D%3Econfirm())%3Bconst%20cancel%3Dcreate(%22button%22%2Cdialog)%3Bcancel.textContent%3D%22cancel%22%3Bcancel.onclick%3D(()%3D%3Ereject())%3Bconst%20download%3Dcreate(%22button%22%2Cdialog)%3Bdownload.onclick%3D(()%3D%3E%7Bconfirm()%3BsetTimeout(downloadHtml%2C200)%7D)%3Bdownload.textContent%3D%22download%22%3Btextarea.addEventListener(%22keydown%22%2Ce%3D%3E%7Bif(e.key%3D%3D%22Enter%22%26%26e.ctrlKey)confirm()%3Belse%20if(e.key%3D%3D%22s%22%26%26e.ctrlKey)%7Be.preventDefault()%3Bdownload.click()%7D%7D)%3Bcreate(%22style%22%2Cdialog).textContent%3D%60%5Cn.gholk-prompt-dialog%20%7B%5Cn%20%20%20%20%20%20%20%20position%3A%20fixed%3B%5Cn%20%20%20%20%20%20%20%20top%3A%2030%25%3B%5Cn%20%20%20%20%20%20%20%20left%3A%2030%25%3B%5Cn%20%20%20%20%20%20%20%20width%3A%2040%25%3B%5Cn%20%20%20%20%20%20%20%20height%3A%20auto%3B%5Cn%20%20%20%20%20%20%20%20background%3A%20white%3B%5Cn%20%20%20%20%20%20%20%20padding%3A%201em%3B%5Cn%20%20%20%20%20%20%20%20z-index%3A%209999%3B%5Cn%7D%5Cn.gholk-prompt-dialog%20textarea%20%7B%5Cn%20%20%20%20%20%20%20%20display%3A%20block%3B%5Cn%20%20%20%20%20%20%20%20width%3A%20100%25%3B%5Cn%20%20%20%20%20%20%20%20height%3A%205em%3B%5Cn%7D%5Cn%60%3Bb.appendChild(dialog)%3Btextarea.focus()%3Btry%7Bawait%20promise%7Dcatch(cancel)%7Breturn%20null%7Dfinally%7Bdialog.remove()%7Dreturn%20textarea.value%7Dfunction%20appendAfter(newNode%2CrefNode)%7Bconst%20parent%3DrefNode.parentNode%3Bif(refNode.nextSibling)parent.insertBefore(newNode%2CrefNode.nextSibling)%3Belse%20parent.appendChild(newNode)%7Dfunction%20findDescription()%7Bconst%20icaseMatch%3D%60%5Cn%20%20%20%20%20%20%20%20property%3Dgholk%3Aannotate%20name%3Ddescription%5Cn%20%20%20%20%20%20%20%20property%3Dog%3Adescription%20name%3Dtwitter%3Adescription%5Cn%20%20%20%20%60.trim().split(%2F%5Cs%2B%2F).map(r%3D%3Er.split(%22%3D%22))%3Bconst%20metaList%3DArray.from(%24%24(%22meta%22))%3Bfor(const%5Battr%2Cvalue%5Dof%20icaseMatch)%7Bconst%20match%3DmetaList.find(e%3D%3Enew%20RegExp(value%2C%22i%22).test(e.getAttribute(attr)))%3Bif(match%26%26match.content)return%20match.content%7Dif(%24(%22p%22))return%20%24(%22p%22).textContent%3Belse%20return%22%22%7Dasync%20function%20editDescription()%7Bconst%20description%3DfindDescription()%3Bconst%20result%3Dawait%20promptUi(%22description%22%2Cdescription)%3Bif(result)%7Blet%20annotate%3D%24('meta%5Bproperty%3D%22gholk%3Aannotate%22%5D')%3Bif(!annotate)%7Bannotate%3Ddocument.createElement(%22meta%22)%3Bannotate.setAttribute(%22property%22%2C%22gholk%3Aannotate%22)%7Dannotate.content%3Dresult%3Bconst%20first%3D%24(%22meta%5Bcharset%5D%22)%7C%7C%24(%22meta%5Bhttp-equiv%20%3D%20content-type%5D%22)%7C%7C%24(%22meta%5Bhttp-equiv%20%3D%20Content-Type%5D%22)%7C%7Cd.head.firstChild%7C%7Cd.documentElement.firstChild%3BappendAfter(annotate%2Cfirst)%3Bconst%20urlTag%3DcreateUrlTag()%3Bif(urlTag)appendAfter(urlTag%2Cfirst)%7D%7Dfunction%20createUrlTag(url%3Dwindow.location.href)%7Bif(%24('meta%5Bproperty%3D%22gholk%3Acanonical%22%5D'))return%20null%3Bconst%20tag%3Ddocument.createElement(%22meta%22)%3Btag.setAttribute(%22property%22%2C%22gholk%3Acanonical%22)%3Btag.setAttribute(%22content%22%2Curl)%3Breturn%20tag%7Dfunction%20downloadHtml()%7Bfunction%20doctypeToString(node%3Ddocument.doctype)%7Bif(!node)return%22%22%3Breturn%22%3C!DOCTYPE%20%22%2Bnode.name%2B(node.publicId%3F%60%20PUBLIC%20%22%24%7Bnode.publicId%7D%22%60%3A%22%22)%2B(!node.publicId%26%26node.systemId%3F%22%20SYSTEM%22%3A%22%22)%2B(node.systemId%3F%60%20%22%24%7Bnode.systemId%7D%22%60%3A%22%22)%2B%22%3E%22%2B%22%5Cn%22%7Dfunction%20cleanCopy(root)%7Bconst%20deep%3Dtrue%3Bconst%20copy%3Droot.cloneNode(deep)%3Bcopy.querySelectorAll(%22iframe%5Bsrc%20%5E%3D%20moz-extension%22).forEach(e%3D%3Ee.remove())%3Breturn%20copy%7Dconst%20html%3DdoctypeToString()%2BcleanCopy(document.documentElement).outerHTML%3Bconst%20blob%3Dnew%20Blob(%5Bhtml%5D)%3Bconst%20download%3Ddocument.createElement(%22a%22)%3Bdownload.download%3Ddocument.title%2B%22.html%22%3Bdownload.href%3DURL.createObjectURL(blob)%3Bdocument.body.appendChild(download)%3Bdownload.click()%3Bdownload.remove()%3Balert(%22cleaning%20blob%3F%22)%3BURL.revokeObjectURL(blob)%7DeditDescription()%7Dfunction%20isAppendScriptTag(root%3Ddocument)%7Bif(root.currentScript)%7Breturn%20root.currentScript.textContent.match(%22isAppendScriptTag%22)%7Delse%20return%20false%7Dif(isAppendScriptTag())%7Bconst%20script%3Ddocument.currentScript%3BsetTimeout(()%3D%3E%7Bscript.remove()%3Bmain()%7D%2C800)%7Delse%20main()%7D()%3B

[github fork compare]: javascript:void%20function%20()%20%7B(async()%3D%3E%7Bconst%20aTags%3D%5B...document.querySelectorAll(%22div.repo%20a%3Alast-of-type%22)%5D.slice(1)%3Bfor(const%20aTag%20of%20aTags)await%20fetch(aTag.href).then(x%3D%3Ex.text()).then(html%3D%3EaTag.outerHTML%2B%3D%60%24%7Bhtml.match(%2FThis%20branch%20is.*%2F).pop().replace(%22This%20branch%20is%22%2C%22%22).replace(%2F(%5B0-9%5D%2B%20commits%3F%20ahead)%2F%2C'%3Cfont%20color%3D%22%230c0%22%3E%241%3C%2Ffont%3E').replace(%2F(%5B0-9%5D%2B%20commits%3F%20behind)%2F%2C'%3Cfont%20color%3D%22red%22%3E%241%3C%2Ffont%3E')%7D%60).catch(console.error)%7D)()%3B%7D()

[paste-to-form-file.user.js]: paste-to-form-file.user.js
[msrt ccf dice tool]: javascript:void%20function%20()%20%7Bconst%20dicer%3Dwindow%5B%22msrt-ccf-dicer%22%5D%3D%7Binit()%7Bthis.inputId%3D%22downshift-0-input%22%2Cthis.messageSelector%3D%22.MuiListItem-root.MuiListItem-gutters%20p%22%2Cthis.diceResultSelector%3D%22span.MuiTypography-colorTextSecondary%2C%20span%22%2Cthis.helpText%3D%22%5Cnexample%3A%5Cn2D6%2B3%202D6%2B1%202D6-3%201D6%2B2%5Cnalice%20bob%20%20%20chard%20denis%5Cnstaff%20before%20last%20line%20will%20be%20ignored%5Cn...%5Cn%23sort%5Cn%5Cnand%20click%20%60msrt%60%20button%5Cn%22%2Cthis.addButton()%7D%2CgetText()%7Breturn%20document.getElementById(this.inputId).value%7D%2CcheckFormat(s)%7Bconst%20line%3Ds.split(%2F%5Cn%2F)%3Breturn%20line.length%3E%3D3%26%26line.some(l%3D%3E%2F%5E%23sort%2F.test(l))%7D%2Cdispatch(node%2Cname)%7Bconst%20event%3Dnew%20Event(name%2C%7Bbubbles%3A!0%7D)%3Bevent.isTrust%3D!0%2Cnode.dispatchEvent(event)%7D%2CsetNativeValue(element%2Cvalue)%7Bconst%20valueSetter%3DObject.getOwnPropertyDescriptor(element%2C%22value%22).set%2Cprototype%3DObject.getPrototypeOf(element)%2CprototypeValueSetter%3DObject.getOwnPropertyDescriptor(prototype%2C%22value%22).set%3BvalueSetter%26%26valueSetter!%3D%3DprototypeValueSetter%3FprototypeValueSetter.call(element%2Cvalue)%3AvalueSetter.call(element%2Cvalue)%7D%2CputText(s)%7Bconst%20node%3Ddocument.getElementById(this.inputId)%3Bthis.setNativeValue(node%2Cs)%2Cthis.dispatch(node%2C%22change%22)%7D%2Csend()%7Bdocument.querySelector(%22button%5Btype%3Dsubmit%5D%22).click()%7D%2Csleep%3Asecond%3D%3Enew%20Promise(wake%3D%3EsetTimeout(wake%2C1e3*second))%2CgetLastMessage()%7Bconst%20list%3Ddocument.querySelectorAll(this.messageSelector)%3Breturn%20list%5Blist.length-1%5D%7D%2Casync%20waitRoll()%7Bconst%20lastOrigin%3Dthis.getLastMessage()%3Bfor(%3B%3B)%7Bawait%20this.sleep(1)%3Bconst%20last%3Dthis.getLastMessage()%3Bif(last!%3DlastOrigin%26%26this.checkFormat(last.textContent))return%20last%7D%7D%2CparseDiceBracket(node)%7Bconst%20text%3Dnode.querySelector(this.diceResultSelector).textContent%2Cscan%3Dtext.match(%2F%5C(%5B%5Cd%2C%2B%5C%5B%5C%5D%5C-%5D%2B%5C)%2Fg)%3Breturn%20scan%3Fscan.map(s%3D%3Es.replace(%2F%5C%5B.*%5C%5D%2F%2C%22%22)).map(s%3D%3Eeval(s))%3Anull%7D%2CnormalizeLine(text)%7Bconst%20line%3Dtext.split(%22%5Cn%22).map(s%3D%3Es.trim())%3Blet%20hide%3D%22%22%3Bif(line%5Bline.length-1%5D.match(%22%23hide%22)%26%26(hide%3D%22S%22)%2Cline%5B0%5D.match(%22%20%22))%7Bconst%20diceCode%3Dline%5B0%5D.split(%2F%5Cs%2B%2F).map(d%3D%3E%60(%24%7Bd%7D)%60).join(%22%2B%22)%3Bline.unshift(hide%2BdiceCode)%7Dreturn%20line%7D%2ChandleError()%7Balert(%22format%20wrong%5Cn%22%2Bthis.helpText)%7D%2Casync%20run()%7Bconst%20text%3Dthis.getText().trim()%3Bif(!text)throw%20new%20Error(%22empty%20input%22)%3Bif(!this.checkFormat(text))throw%20new%20Error(%22format%20wrong%22)%3Bconst%20line%3Dthis.normalizeLine(text)%2CunitList%3Dline%5B2%5D.split(%2F%5Cs%2B%2F).map(u%3D%3E%5Bu%5D)%3Bthis.putText(line.join(%22%5Cn%22)%2B%22%5Cn%22)%2Cthis.send()%3Bconst%20roll%3Dawait%20this.waitRoll()%2CdiceResult%3Dthis.parseDiceBracket(roll)%3BunitList.forEach((a%2Ci)%3D%3Ea.push(diceResult%5Bi%5D))%2CunitList.sort((x%2Cy)%3D%3Ey%5B1%5D-x%5B1%5D)%2Cthis.putText(unitList.map((%5Bn%2Cv%5D)%3D%3E%60%24%7Bn%7D(%24%7Bn.match(%22%23S%22)%3F%22%23%22%3Av%7D)%60).join(%22%20%3E%20%22)%2B%22%5Cn%22%2Bline.slice(3%2C-1).join(%22%5Cn%22))%7D%2CaddButton()%7Bconst%20b%3Ddocument.createElement(%22button%22)%3Bb.type%3D%22button%22%2Cb.textContent%3D%22msrt%22%2Cb.className%3D%22MuiButtonBase-root%20MuiButton-root%20MuiButton-text%20MuiButton-textSizeSmall%20MuiButton-sizeSmall%22%2Cb.onclick%3D(()%3D%3Ethis.run().catch(error%3D%3E%7Balert(String(error))%2Cthis.handleError()%7D))%2Cdocument.querySelector(%22button%5Btype%3Dsubmit%5D%22).parentNode.appendChild(b)%7D%7D%3Bdicer.init()%3B%7D()

[google search unredirect]: google-search-unredirect.user.js
[facebook notify]: facebook-notify.user.js
[happy html keyboard player]: happy-html-keyboard-player.user.js

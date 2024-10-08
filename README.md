# gholk's bookmarklet and userscript
GHolk 的小書籤、油猴腳本集合。
還包含一種完整網頁的 data-url，一種完整的小工具網頁可以收在書籤裡。

if you are in github.com,
please go to
[github page of this repository](//gholk.github.io/bookmarklet)
or [index.html](index.html)
to use drag drop to add bookmarklet,
because github disable bookmarklet in
README.md in github repository page.

```--toc
目錄
```

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
  white-space: pre-wrap;
}
</style>

<script class="template">
$('a[href ^= "javascript:"]').each((i, a) => {
    const $a = $(a)
    const url = $a.attr('href')
    $a.attr('href',
        url.replace(/(%[a-fA-F0-9]{2})+/g, c => decodeURIComponent(c))
    )
})
await dd.h.templateLoad('./template.html')
await dd.h.moduleAdd('toc')
</script>

## 訂閱
懶得做 rss，請直接訂閱 [github 自動依 git 歷史產生的 rss][github rss] ，
或直接 watch [github repository] 用 email 收 github 通知。

[github rss]: https://github.com/GHolk/bookmarklet/commits/master.atom
[github repository]: https://github.com/GHolk/bookmarklet

## 授權 license
若無指定，本頁面中所有腳本使用 [GPLv3] 或其後續版本授權。

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

## [facebook image downloader]
download images on facebook when viewing them.
when url change, this script will find the
image and download it with timestamp filename.

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
[hackmd-scroll-flip.user.js](hackmd-scroll-flip.user.js) .

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

## [PTT 精華區網址查詢器][ptt man url lookup]
此小書籤可以把 ptt 以精華區的路徑找出對應精華區網頁版的網址。
由於 cors 的限制，此小書籤需要在 ptt 網頁中使用。
（網址為 `https://www.ptt.cc` 開頭的網站。）
點擊小書籤後，會出現輸入路徑的對話框，
輸入路徑後開始尋找，找到後會在新分頁打開該網頁。
若無法打開新分頁，請嘗試允許彈出式視窗的顯示。

本定位器接受的路徑有以下型式：

```
8. 8. 2 (PttNewhand)
z-8-8-2 (PttNewhand)
z-8-8-2 PttNewhand
PttNewhand. 8. 8. 2
PttNewhand 8. 8. 2
PttNewhand z-8-8-2
```

精華區的路徑可以在瀏覽精華區目錄時按 Ctrl-w 顯示，
會取得類似於 z-8-8-2 的格式。
（可以直接把 z-8-8-2 到下一行的看板名稱一起複製，
換行在輸入框中會被替換為空白。）
此時開頭的 z 可省略，z 與數字間的減號也可省略，
減號也可替換為空白。
或是在精華區索引中，以 `8. 8. 2` 的格式亦可，
此時數字間也可只以空白或點連接。

若是省略看板名稱，定位器會嘗試以目前網址所在看板作為看板名稱嘗試定位：

```
z-8-8-2
8. 8. 2
```

## [homeloader 下載網頁與內容圖片的浮動工具箱][homeloader.user.js]
user.js，在網頁右下角會出現 `download` 與數個可自訂的浮動按鈕，
按了會下載目前網頁內容與圖片，下載下來的網頁中圖片會變成相對路徑。
主要是在手機上使用，因為手機上要呼叫附加元件不太方便，
要 *開選單 / 附加元件 / WebScrapbook* 三個步驟。

預設在巴哈小屋新版介面使用，
如果要在其他網站使用需要自己修改設定：

 1. 將該網站網址加入 user.js 的 `@match` 或 `@include`
 2. 填寫設定檔存的 json 資料 `GM_getValue` 的資料，
    在 match 資料中填寫該網站的網址。

### homeloader 設定說明
以下以預設的 json 設定檔說明，
使用交雜 code block 與文字的方式解說。

```--e
dd.anchor['literate-block-section'] = $e => {
  const lang = $e.attr('href').split(' ')[1]
  let $b = $e.parent().nextUntil('h1,h2,h3,h4,h5,h6,hr').filter((i,e) => {
    return $(e).is('pre')
  })
  $b.find('code').addClass(`lang-${lang}`)
  $b.addClass('literate-block-section')
  $b.first().addClass('first')
  $b.last().addClass('last')

  let $t = $('<button>').text('toggle text')
  $t.attr('onclick', 'literateBlockSectionToggleText(event)')
  $e.replaceWith($t)
}
```

<script>
  function literateBlockSectionToggleText(event) {
    const p = event.target.parentNode
    const bl = []
    let e = p.nextElementSibling
    while (e) {
      const name = e.nodeName
      if (name == 'PRE' && e.matches('.last')) break
      else if (name != 'PRE') bl.push(e)
      e = e.nextElementSibling
    }
    bl.forEach(e => e.hidden = !e.hidden)
  }
</script>

<style>
.literate-block-section code {
  border-top: 0;
  border-bottom: 0;
  background: #EEE;
}
.literate-block-section {
  margin-top: 0;
  margin-bottom: 0;
}
.literate-block-section.first code { border-top: 1px solid; }
.literate-block-section.last code { border-bottom: 1px solid; }
</style>

[..literate-block-section json](.)

    {
      "match": {

所有設定會存在 match 這個 key

        "home.gamer.com.tw/artwork.php": {

match 的 key 填網址的子字串。
執行時會使用第一個符合目前網址的子字串的設定檔。
（ `window.location.href.indexOf(key) != -1` ）

          "image-selector": ";gl.$$('img.gallery-image, .reply-box article img, .image-setting img', root).filter(e=>!/https:.*.bahamut.com.tw.(editor.emotion|icon_videoplayer)/.test(e.src))",

如果 image-selector 是分號開頭的字串，
則會 eval 字串並將回傳值作為圖片清單。
否則將其作為 css selector，選擇所有符合的圖片作為清單。

          "hook-download-pre": "gl.$('#reply_expand')?.click()",

在按下載按鈕後會先執行 hook-download-pre 程式碼
再開始執行 user.js 裡預定義的所有下載邏輯，如 image-selector 等。

          "hook-lazy-load": null,

如果有定義，在使用 image-selector 前會先執行本段 code。
主要用來處某些未定義 `img[src]` 的延遲載入圖片。
如果 falsy 則使用預設的邏輯，將所有 src falsy 的 img src 設為 data-src。
要跳過可以寫個 `"1"` 之類的 truely 的可以 eval 的值。

          "hook-info": "const a=gl.$('.article-content.title a.caption-text',root);if(a){const js=a.getAttribute('onclick');const parm=js.match(/^.*\\((.*)\\).*$/)[1];const l=JSON.parse(`[${parm.replace(/'/g,'\"')}]`);[info.author,info.folder]=l}",

如果有定義，會在選擇圖片後執行本段程式，
用來在下載的網頁中塞入任何想存的資料。
info 是 js dict，儲存時會轉成 querystring，
儲存為 `<meta property="gholk:info" content="...">` content 屬性中。

          "action": {
            "next": "gl.$$('[data-button=changePage]').slice(-1)[0].click()"
          },

可以自定義按鈕，action 的 key 會作為按鈕文字、css class，
value 會在執行時 eval。

          "wait-touch": true,

為真時會在每次下載前等待一次 window touchend 事件再繼續下載。
防止 android firefox 無間隔連續下載失敗的 bug。

          "style": "#gholk-homeloader-toolbox button { border: 1px outset; padding: 0.2em; background: white; height:3em; display:block; margin-bottom:0.5em; margin-left:auto;} #gholk-homeloader-toolbox { bottom:8em; top: unset; } #gholk-homeloader-toolbox button[disabled] { color: gray; font-weight; bold; }"

css，主要用來調整各網頁工具箱按鈕出現的位置。
各按鈕會包在 `aside#gholk-homeloader-toolbox` 內，
以 `display:fixed` 顯示在左下角。

        }
      }
    }

## [Bookmarklet Editor by gholk](vendor/bookmarklet-editor-gholk-embed.html)
A single-file full-feature bookmarklet editor, work locally.
features:

  - syntax-highlight editor
  - uglify-js
  - wrap code in IIFE
  - split code to multiple bookmark to
    bypass the browser's bookmark length limit.
  - add emoji to bookmarklet name make it look good!
  - share the bookmarklet link by save the whole html page and share the html.
    you can write usage as comment in the editor.

this editor content shall be too large to the browser's bookmark,
so it was not encoded as a dataurl.

to install it, right click and save the link as a local file,
or just add it to bookmark.

this editor is fork from
[amitind's bookmarklet editor][amitind editor] on codepen.

[amitind editor]: https://codepen.io/amitind/pen/pQVwQp

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

### [google search unredirect android firefox]
this works for google search on firefox android version.

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

## [mastodon narrow 2 columns basic]
Make mastodon web UI in 2 columns, so it works better in narrow window.

This style will split whole page into 2 columns.
The right column is the main stream,
and the left column is split into upper and lower part.
The upper-left is the textarea and the lower-left is the notification area.

You have to add you mastodon instance url to this user style manually.

## [tg note]
A basic html editor to compose rich text.
Designed to store article snippets with [annotate](#prompt-annotate-description) .
## [rename image](rename-image.html)
an easy ui to preview and rename image.
(generate the mv commands for bash)

## [wheel on input number]
Make mouse wheel increase or decrease the number in text field.
Field can be textarea, `<input type="text">` or other editable input type
(except the email, which does not support `input.selectionEnd`).

When wheel on fields,
if the field is focused, the selected number
or the number at cursor or near by the cursor will be increased or decrease.
if the field is not focused, only the selected number get in/decreased.

When wheel on the `<input type="number">`,
the browser should handle the wheel event itself.

Add the website which you want to run this script to user match list.
If you want only want the wheel get handled in some field in a url,
add selector match it to the `url-map` config.
[youtube clean player]: javascript:void%20function%20()%20%7Bconst%20urlToPlayer%3D%7B%7D%3BurlToPlayer.youtube%3Dfunction(location)%7Bconst%20scan%3Dlocation.search.match(%2F%5B%26%5C%2F%5C%3F%5Dv%3D(%5B%5E%26%5D*)%2F)%3Bconst%20id%3Dscan%5B1%5D%3Breturn%22https%3A%2F%2Fyoutube.com%2Fembed%2F%22%2Bid%7D%3Bfunction%20openCleanWindow(url)%7Bwindow.open(url%2C%22clean%20youtube%20player%22%2C%22resizable%22)%7Dfunction%20createButton()%7Bconst%20menuId%3D%22menu-container%22%3Bconst%20button%3Ddocument.createElement(%22button%22)%3Bbutton.textContent%3D%22clean%20window%22%3Bbutton.onclick%3D(()%3D%3E%7Bconst%20url%3DurlToPlayer.youtube(location)%3BopenCleanWindow(url)%7D)%3Bdocument.getElementById(menuId).appendChild(button)%7DopenCleanWindow(urlToPlayer.youtube(location))%3B%7D()

[custom search]: javascript:void%20function%20()%20%7Bconst%20map%3D%7B%7D%3Bmap.set%3Dfunction(alias%2Curl%2Cname)%7Bthis%5Balias%5D%3D%7Burl%3Aurl%2Cname%3Aname%7D%7D%3Bmap.createForm%3Dfunction(key)%7Bconst%20form%3Ddocument.createElement(%22form%22)%3Bconst%20search%3Dthis%5Bkey%5D%3Bform.action%3Dsearch.url%3Bform.target%3D%22_blank%22%3Bconst%20input%3Ddocument.createElement(%22input%22)%3Binput.name%3Dsearch.name%3Bform.appendChild(input)%3Breturn%20form%7D%3Bmap.search%3Dfunction(key%2Cstring)%7Bconst%20form%3Dthis.createForm(key)%3Bform.querySelector(%22input%22).value%3Dstring%3Bdocument.documentElement.appendChild(form)%3Bform.submit()%7D%3Bmap.set(%22pttpedia%22%2C%22http%3A%2F%2Fzh.pttpedia.wikia.com%2Fwiki%2F%E7%89%B9%E6%AE%8A%3A%E6%90%9C%E7%B4%A2%22%2C%22query%22)%3Bfunction%20promptSearch(string)%7Bif(!string)string%3Dprompt(%22custom%20search%22)%3Bconst%20scan%3Dstring.match(%2F(%5B%5E%5Cs%5D%2B)%5Cs(.*)%24%2F)%3Bconst%20key%3Dscan%5B1%5D%3Bconst%20value%3Dscan%5B2%5D%3Bmap.search(key%2Cvalue)%7DpromptSearch()%3B%7D()

[jumper translator]: javascript:void%20function%20()%20%7Bvar%20jumperTranslator%3D%7BurlScheme%3Anull%2Cdecode%3AdecodeURIComponent%2Ctranslate%3Afunction(url)%7Bconst%20scan%3Bif(scan%3Durl.match(this.urlScheme))%7Breturn%20this.decode(scan%5B1%5D)%7Delse%20return%20null%7D%2CmodifyAnchor%3Afunction(anchor)%7Bconst%20newUrl%3Dthis.translate(anchor.href)%3Bif(typeof%20newUrl%3D%3D%22string%22)anchor.href%3DnewUrl%3Breturn%20anchor%7D%2CmodifyAllAnchor%3Afunction()%7Bfor(const%20anchor%20of%20document.querySelectorAll(%22a%22))%7Bthis.modifyAnchor(anchor)%7D%7D%2CpromptUrlScheme%3Afunction()%7Bconst%20urlRegexpString%3Dprompt(%22url%20scheme%20regexp%22)%3Bthis.urlScheme%3Dnew%20RegExp(urlRegexpString)%7D%7D%3BjumperTranslator.promptUrlScheme()%3B%7D()

[generate url qrcode]: javascript:void%20function%20()%20%7Bconst%20url%3Dwindow.location.href%2CqrcodeUrl%3D%60http%3A%2F%2Fchart.googleapis.com%2Fchart%3Fchs%3D150x150%26cht%3Dqr%26chl%3D%24%7Burl%7D%60%3Bwindow.open(qrcodeUrl)%3B%7D()

[facebook video rotate]: javascript:void%20function%20()%20%7Bfunction%20getRotateRatio(cssString)%7Bconst%20scan%3DcssString.match(%2Frotate%5C((-%3F%5Cd%2B(%5C.%5Cd%2B)%3F)turn%5C)%2F)%3Bif(scan)%7Breturn%20Number(scan%5B1%5D)%7Dreturn%200%7Ddocument.querySelectorAll(%22div%5Brole%3Dpresentation%5D%22).forEach(present%3D%3E%7Bconst%20container%3Dpresent.parentNode%3Bif(container.querySelector(%22video%22))%7Bconsole.log(%22get%20video%22%2Ccontainer)%3Bconst%20ratioNext%3DgetRotateRatio(container.style.transform)-.25%3Bcontainer.style.transform%3D%60rotate(%24%7BratioNext%7Dturn)%60%7D%7D)%3B%7D()

[enable-select-contextmenu.bookmarklet.js]: javascript:void%20function%20()%20%7Bfunction%20stopEvent(event)%7Bevent.stopImmediatePropagation()%7Dconst%20registFirst%3D%7Bcapture%3A!0%7D%3Bwindow.addEventListener(%22contextmenu%22%2CstopEvent%2CregistFirst)%2Cdocument.addEventListener(%22mousedown%22%2CstopEvent%2CregistFirst)%2Cdocument.body.style.userSelect%3D%22text%22%3B%7D()

[enable-select-contextmenu.user.js]: enable-select-contextmenu.user.js
[force-enable-paste.user.js]: force-enable-paste.user.js
[force-enable-paste.bookmarklet.js]: javascript:void%20function%20()%20%7BsetInterval(()%3D%3E%7Bdocument.querySelectorAll(%22%5Bonpaste%5D%22).forEach(node%3D%3E%7Bnode.onpaste%3Dnull%7D)%2Cdocument.body.onpaste%26%26(document.body.onpaste%3Dnull)%7D%2C1e3)%3B%7D()

[facebook image downloader]: javascript:void%20function%20()%20%7Bclass%20GholkLib%7Bconstructor()%7Breturn%20this._constructor(...arguments)%7D_constructor()%7B%7Dsleep(second)%7Breturn%20new%20Promise(wake%3D%3EsetTimeout(wake%2C1e3*second))%7D%24(q%2Croot%3Ddocument)%7Breturn%20root.querySelector(q)%7D%24%24(q%2Croot%3Ddocument)%7Breturn%20Array.from(root.querySelectorAll(q))%7Dcreate(name%2Cparent)%7Bconst%20node%3Ddocument.createElement(name)%3Breturn%20parent%26%26parent.appendChild(node)%2Cnode%7Dpipe(value%2C...fn)%7Breturn%20fn.reduce((v%2Cf)%3D%3Ef(v)%2Cvalue)%7Dbindr(object%2Cthing%2C...args)%7Breturn%20this.bind.call(object%2Cthing%2C...args)%7Dbind(thing%2C...args)%7Blet%20f%3Breturn(f%3D%22function%22%3D%3Dtypeof%20thing%3Fthing%3Aobject%5Bthing%5D).bind(this%2C...args)%7Dasync%20keepTry(fn%2Cinterval)%7Blet%20result%3Dfn()%3Bfor(%3B!result%3B)await%20this.sleep(interval)%2Cresult%3Dfn()%3Breturn%20result%7Ddefer()%7Bconst%20defer%3D%7B%7D%3Breturn%20defer.promise%3Dnew%20Promise((ok%2Creject)%3D%3E%7Bdefer.ok%3Dok%2Cdefer.reject%3Dreject%7D)%2Cdefer%7Ddefm(klass%2Cname%2Cfn)%7BObject.defineProperty(klass.prototype%2Cname%2C%7Bvalue%3Afn%2Cwritable%3A!0%2Cconfigurable%3A!0%2Cenumerable%3A!1%7D)%7Dpatch()%7Bconst%7Bpipe%3Apipe%2Cbindr%3Abindr%7D%3Dthis%3Bthis.defm(Object%2C%22bind%22%2Cthis.bind)%2Cthis.defm(Object%2C%22pipe%22%2Cfunction%20pipe(...fn)%7Blet%20value%3Bswitch(this.constructor)%7Bcase%20String%3Acase%20Number%3Acase%20window.BigInt%3Acase%20Boolean%3Acase%20window.Symbol%3Avalue%3Dthis.valueOf()%3Bbreak%3Bdefault%3Avalue%3Dthis%7Dreturn%20pipe(value%2C...fn)%7D)%2Cthis.defm(Object%2C%22toArray%22%2Cfunction()%7Breturn%20Array.from(this)%7D)%7Ddepatch()%7Bfor(const%20name%20of%22bind%20pipe%20toArray%22.split(%22%20%22))delete%20Object.prototype%5Bname%5D%7DbuttonClick(%7Bstyle%3Astyle%2Cparent%3Aparent%3Ddocument.body%2Ctext%3Atext%2Cclick%3Aclick%7D)%7Bconst%20button%3Dthis.create(%22button%22%2Cparent)%3Bbutton.textContent%3Dtext%3Breturn%20Object.assign(button.style%2C%7Bposition%3A%22fixed%22%2Cbottom%3A0%2Cright%3A0%2Cmargin%3A%221em%22%7D%2Cstyle)%2Cbutton.onclick%3Dclick%2Cbutton%7Ddownload(url%2Cname%3DDate.now().toString())%7Bconst%20a%3Dthis.create(%22a%22%2Cdocument.body)%3Ba.href%3Durl%2Ca.download%3Dname%2Ca.click()%2Ca.remove()%7D%7Dclass%20FacebookImageDownloader%20extends%20GholkLib%7Bstatic%20run()%7B(new%20this).init()%7Dinit()%7Bthis.end%3D!1%2Cthis.url%3Dnull%2Cthis.showStopButton()%2Cthis.watch()%7Ddownload(...args)%7Breturn%20this.downloadFetch(...args)%7Dasync%20downloadFetch(url)%7Bconst%20res%3Dawait%20fetch(url)%2Cblob%3Dawait%20res.blob()%2CblobUrl%3DURL.createObjectURL(blob)%3Bthis.downloadBookmarklet(blobUrl)%2Cawait%20this.sleep(.2)%2CURL.revokeObjectURL(blobUrl)%7DdownloadTridactyl(url)%7Bthis.tri.messaging.message(%22download_background%22%2C%22downloadUrl%22%2Curl%2C!1)%7DdownloadBookmarklet(...args)%7Bsuper.download(...args)%7DshowStopButton()%7Bthis.buttonClick(%7Btext%3A%22end%20image%20downloader%22%2Cclick%3Aevent%3D%3E%7Bthis.end%3D!0%2Cevent.target.remove()%7D%7D)%7Dasync%20watch()%7Bawait%20this.keepTry(()%3D%3E%7Bif(this.end)return!0%3Bconst%20url%3Dwindow.location.href%3Bif(url!%3Dthis.url)%7Bthis.url%3Durl%3Bconst%20image%3Dthis.%24%24(%22%5Brole%20%3D%20main%5D%20img%22)%3B0%3D%3Dimage.length%3Falert(%22no%20image%20found%22)%3A1%3D%3Dimage.length%3Fthis.download(image%5B0%5D.src)%3Aconfirm(%22more%20than%201%20image%20found%2C%20download%20all%3F%22)%26%26image.forEach(image%3D%3Ethis.download(image.src))%7D%7D%2C.2)%7Dstatic%20runTridactyl()%7Btri.FacebookImageDownloader%7C%7C(tri.FacebookImageDownloader%3DFacebookImageDownloader)%2Ctri.FacebookImageDownloader.instance%3F(tri.FacebookImageDownloader.instance.end%3D!0%2Ctri.FacebookImageDownloader.instance%3Dnull)%3A(tri.FacebookImageDownloader.instance%3Dnew%20tri.FacebookImageDownloader%2Ctri.FacebookImageDownloader.instance.init())%7D%7DFacebookImageDownloader.run()%3B%7D()

[press b to google]: press-b-to-google.user.js
[hackmd scroll flip]: javascript:void%20function%20()%20%7Bif(document.querySelector(%22.reveal%20.slides%22))%7Bconst%20Reveal%3DunsafeWindow.Reveal%3Bdocument.querySelector(%22.reveal%22).addEventListener(%22wheel%22%2Cfunction(scroll)%7Bscroll.preventDefault()%2Cscroll.deltaY%3E0%3FReveal.next()%3AReveal.prev()%7D%2C%7Bpassive%3A!1%7D)%3Bconst%20style%3Ddocument.createElement(%22style%22)%3Bstyle.textContent%3D%22%5Cn.reveal%20.slides%20%3A%3Aselection%20%7B%5Cn%20%20%20%20background-color%3A%20yellow%3B%5Cn%20%20%20%20color%3A%20initial%3B%5Cn%7D%5Cn.reveal%20.slides%20%3A%3A-moz-selection%20%7B%5Cn%20%20%20%20background-color%3A%20yellow%3B%5Cn%20%20%20%20color%3A%20initial%3B%5Cn%7D%5Cn.reveal%20.slides%20%7B%5Cn%20%20%20%20cursor%3A%20url('data%3Aimage%2Fcur%3Bbase64%2CAAABAAEAGRkAAAEAIABQCgAAFgAAACgAAAAZAAAAMgAAAAEAIAAAAAAAxAkAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwEAAP8EAAD%2FCgAA%2FxMAAP8UAAD%2FEwAA%2FwoAAP8EAAD%2FAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwcAAP8WAAD%2FMAAA%2F0UAAP9WAAD%2FWQAA%2F1YAAP9FAAD%2FMAAA%2FxYAAP8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAQAA%2FwwAAP8tAAD%2FVgAA%2F3oAAP%2BYAAD%2FpQAA%2F6wAAP%2BlAAD%2FmAAA%2F3oAAP9WAAD%2FLQAA%2FwwAAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAQAA%2FwwAAP80AAD%2FbQAA%2F50AAP%2FBAAD%2F2AAA%2F%2BIAAP%2FmAAD%2F4gAA%2F9gAAP%2FBAAD%2FnQAA%2F20AAP80AAD%2FDAAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwkAAP8vAAD%2FcAAA%2F6kAAP%2FVAAD%2F7AAA%2F%2FUAAP%2F5AAD%2F%2BgAA%2F%2FkAAP%2F1AAD%2F7AAA%2F9UAAP%2BpAAD%2FcAAA%2Fy8AAP8JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwIAAP8bAAD%2FWwAA%2F6EAAP%2FWAAD%2F8QAA%2F%2FoAAP%2F9AAD%2F%2FgAA%2F%2F4AAP%2F%2BAAD%2F%2FQAA%2F%2FoAAP%2FxAAD%2F1gAA%2F6EAAP9bAAD%2FGwAA%2FwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8HAAD%2FNgAA%2F4EAAP%2FFAAD%2F7QAA%2F%2FoAAP%2F%2BAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2BgAA%2F%2B0AAP%2FFAAD%2FgQAA%2FzYAAP8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FDwAA%2F04AAP%2BhAAD%2F3AAA%2F%2FcAAP%2F9AAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F0AAP%2F3AAD%2F3AAA%2F6EAAP9OAAD%2FDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FxoAAP9hAAD%2FrwAA%2F%2BcAAP%2F6AAD%2F%2FgAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2BgAA%2F%2BcAAP%2BvAAD%2FYQAA%2FxoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8cAAD%2FZgAA%2F7cAAP%2FrAAD%2F%2BwAA%2F%2F4AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FgAA%2F%2FsAAP%2FrAAD%2FtwAA%2F2YAAP8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FHAAA%2F2QAAP%2ByAAD%2F6QAA%2F%2FoAAP%2F%2BAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F4AAP%2F6AAD%2F6QAA%2F7IAAP9kAAD%2FHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FxIAAP9UAAD%2FqAAA%2F%2BEAAP%2F4AAD%2F%2FgAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2BAAA%2F%2BEAAP%2BoAAD%2FVAAA%2FxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8KAAD%2FPwAA%2F4wAAP%2FOAAD%2F8QAA%2F%2FwAAP%2F%2BAAD%2F%2FwAA%2F%2F8AAP%2F%2FAAD%2F%2FwAA%2F%2F8AAP%2F%2BAAD%2F%2FAAA%2F%2FEAAP%2FOAAD%2FjAAA%2Fz8AAP8KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAgAA%2FyMAAP9oAAD%2FrQAA%2F%2BAAAP%2F1AAD%2F%2FAAA%2F%2F4AAP%2F%2BAAD%2F%2FgAA%2F%2F4AAP%2F%2BAAD%2F%2FAAA%2F%2FUAAP%2FgAAD%2FrQAA%2F2gAAP8jAAD%2FAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8NAAD%2FOgAA%2F4AAAP%2B5AAD%2F4AAA%2F%2FIAAP%2F5AAD%2F%2BwAA%2F%2FwAAP%2F7AAD%2F%2BQAA%2F%2FIAAP%2FgAAD%2FuQAA%2F4AAAP86AAD%2FDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD%2FAQAA%2FxYAAP9GAAD%2FggAA%2F7AAAP%2FSAAD%2F5AAA%2F%2B0AAP%2FvAAD%2F7QAA%2F%2BQAAP%2FSAAD%2FsAAA%2F4IAAP9GAAD%2FFgAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAAD%2FFgAA%2Fz0AAP9sAAD%2FkgAA%2F7AAAP%2B8AAD%2FwgAA%2F7wAAP%2BwAAD%2FkgAA%2F2wAAP89AAD%2FFgAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwEAAP8PAAD%2FJwAA%2F0UAAP9eAAD%2FbgAA%2F3QAAP9uAAD%2FXgAA%2F0UAAP8nAAD%2FDwAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FwQAAP8MAAD%2FFwAA%2FyMAAP8lAAD%2FIwAA%2FxcAAP8MAAD%2FBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAAD%2FAQAA%2FwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2F%2F%2F%2FgP%2F%2F%2F4D%2F%2F%2F%2BA%2FwB%2FgP4AP4D4AA%2BA8AAHgPAAB4DgAAOA4AADgOAAA4DgAAOA4AADgOAAA4DgAAOA4AADgOAAA4DwAAeA8AAHgPgAD4D8AB%2BA%2FwB%2FgP%2Fj%2F4D%2F%2F%2F%2BA%2F%2F%2F%2FgA%3D%3D')%2012.5%2012.5%2C%20auto%3B%5Cn%7D%5Cn%22%2Cdocument.body.appendChild(style)%7D%7D()

[moodle backup]: javascript:void%20function%20()%20%7Bclass%20MoodleCrawler%7Bconstructor()%7Bthis.sleepInterval%3D3%2Cthis.domParser%3Dnew%20DOMParser%2Cthis.textDecoder%3Dnew%20TextDecoder(%22UTF-8%22)%7Dasync%20fetch(url)%7Breturn%20await%20fetch(url%2C%7Bcredentials%3A%22same-origin%22%7D)%7Dasync%20%24fetch(url)%7Bconst%20response%3Dawait%20this.fetch(url)%2Chtml%3Dawait%20response.text()%3Breturn%20this.domParser.parseFromString(html%2C%22text%2Fhtml%22)%7D*extractAllCourseId(document)%7Bconst%20anchorList%3Ddocument.querySelectorAll(%22.block_course_list%20a%22)%3Bfor(const%20anchor%20of%20anchorList)%7Byield%20new%20URL(anchor.href).searchParams.get(%22id%22)%7D%7DextractTitle(document)%7Breturn%20document.getElementById(%22logobox%22).textContent.trim()%7D*extractFolder(url)%7Bconst%20fileList%3Dthis.%24fetch(url).then(dom%3D%3Edom.querySelectorAll(%22.fp-filename-icon%20a%22))%3Blet%20finish%3D!1%2Cindex%3D0%3Bfor(%3B!finish%3B)yield%20fileList.then(anchorList%3D%3E%7Blet%20anchor%3Dnull%3Breturn%20index%3CanchorList.length%26%26(anchor%3DanchorList%5Bindex%5D%2Cindex%2B%2B)%2Cindex%3E%3DanchorList.length%26%26(finish%3D!0)%2C%7Burl%3Aanchor.href%7D%7D)%7D*extractByType(tr)%7Bconst%20url%3Dtr.querySelector(%22a%22).href%3Blet%20description%3Dtr.querySelector(%22td%3Alast-child%22).textContent%3Bdescription%3Ddescription.trim()%2Curl.includes(%22%2Fmod%2Fresource%2Fview.php%22)%3Fyield%7Burl%3Aurl%2Cdescription%3Adescription%7D%3Aurl.includes(%22%2Fmod%2Ffolder%2Fview.php%22)%3Fyield*this.extractFolder(url)%3Aurl.includes(%22%2Fmod%2Fpage%2Fview.php%22)%7C%7Curl.includes(%22%2Fmod%2Furl%2Fview.php%22)%3Fyield%7Burl%3Aurl%2Cdescription%3Adescription%7D%3Aconsole.error(%60unknown%20file%20type%3A%20%24%7Burl%7D%60)%7D*extractAllFile(document)%7Bfor(const%20tr%20of%20document.querySelectorAll(%22%23region-main-box%20tr%5Bclass%5D%22))yield*this.extractByType(tr)%7Dasync%20%24fetchCourseResource(id)%7Bconst%20url%3D%60https%3A%2F%2Fmoodle.ncku.edu.tw%2Fcourse%2Fresources.php%3Fid%3D%24%7Bid%7D%60%3Breturn%20await%20this.%24fetch(url)%7Dsleep(second%3Dthis.sleepInterval)%7Breturn%20new%20Promise(wake%3D%3EsetTimeout(wake%2C1e3*second))%7DgetLastCourseId()%7Breturn%20localStorage.getItem(%22moodle-backup-current-id%22)%7DsetLastCourseId(id)%7BlocalStorage.setItem(%22moodle-backup-current-id%22%2Cid)%7DremoveLastCourseId()%7BlocalStorage.removeItem(%22moodle-backup-current-id%22)%7Dasync%20run()%7Bthis.runInit()%3Blet%20alreadyDownload%2ClastCourseId%3Dthis.getLastCourseId()%3BalreadyDownload%3D!!lastCourseId%3Bfor(const%20id%20of%20this.extractAllCourseId(document))%7Bif(alreadyDownload)%7Bif(lastCourseId!%3Did)continue%3BalreadyDownload%3D!1%7Dthis.setLastCourseId(id)%3Bconst%20resource%3Dawait%20this.%24fetchCourseResource(id)%3Bthis.extractTitle(resource)%3Bawait%20this.sleep()%3Bfor(let%20file%20of%20this.extractAllFile(resource))file%26%26file.then%26%26(file%3Dawait%20file)%2Cfile%26%26(this.download(file.url)%2Cawait%20this.sleep())%7Dthis.removeLastCourseId()%2Cthis.runDestruct()%7DrunInit()%7Bthis.downloadInit()%2Cthis.preventExitInit()%7DrunDestruct()%7Bthis.downloadDestruct()%2Cthis.preventExitDestruct()%7DisFirefox()%7Breturn%20navigator.userAgent.match(%2Ffirefox%2Fi)%7DdownloadInit()%7Bconst%20anchor%3Ddocument.createElement(%22a%22)%3Bthis.isFirefox()%7C%7Canchor.setAttribute(%22download%22%2C%22%22)%2Canchor.setAttribute(%22target%22%2C%22_blank%22)%2Cdocument.body.appendChild(anchor)%2Cthis.downloadNode%3Danchor%7Ddownload(url)%7Bthis.downloadNode.href%3Durl%2Cthis.downloadNode.click()%7DdownloadDestruct()%7Bthis.downloadNode.remove()%2Cthis.downloadNode%3Dnull%7DpreventExitInit()%7Bwindow.onbeforeunload%3Dthis.preventExit%7DpreventExit(closeEvent)%7Breturn%22moodle%20backup%20is%20not%20finish%2C%20do%20you%20want%20to%20exit%3F%22%7DpreventExitDestruct()%7Bwindow.onbeforeunload%3Dnull%7Dasync%20bookmarkletPrompt()%7Blet%20second%3Dprompt(%22download%20file%20interval%20second%3A%22)%3Bthis.assert(%22string%22%3D%3Dtypeof%20second%2C%22user%20abrupt%22)%2Csecond%3DNumber(second)%2Cthis.assert(second%3E0%2C%22second%20should%20be%20positive%22)%2Cthis.sleepInterval%3DNumber(second)%2Cawait%20this.run()%2Calert(%22download%20finish%22)%7Dassert(test%2CerrorMessage%2CCustomError%3DError)%7Bif(!test)throw%20new%20CustomError(errorMessage)%7D%7Dclass%20MoodleCrawlerDebug%20extends%20MoodleCrawler%7Bconstructor()%7Bsuper()%2Cthis.sleepInterval%3D.5%7DextractTitle(document)%7Bconst%20title%3Dsuper.extractTitle(document)%3Bthis.currentCourseTitle%3Dtitle%7Ddownload(url)%7Bconsole.log(this.currentCourseTitle%2Curl)%7D%7Dconst%20moodleCrawler%3Dnew%20MoodleCrawler%3BmoodleCrawler.bookmarkletPrompt()%3B%7D()

[screen message]: data:text/html;base64,PGh0bWw+CjwhLS0KIyAgICAgc20uaHRtbAojICAgICBDb3B5cmlnaHQgKEMpIDIwMDYgLSAyMDEwIEpvYWNoaW0gQnJlaXRuZXIKIwojICAgICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeQojICAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieQojICAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvcgojICAgICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLgojCiMgICAgIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLAojICAgICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZgojICAgICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlCiMgICAgIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuCiMKIyAgICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UKIyAgICAgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW07IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUKIyAgICAgRm91bmRhdGlvbiwgSW5jLiwgNTEgRnJhbmtsaW4gU3QsIEZpZnRoIEZsb29yLCBCb3N0b24sIE1BICAwMjExMC0xMzAxIFVTQQotLT4KPGhlYWQ+Cjx0aXRsZT5TY3JlZW4gbWVzc2FnZTwvdGl0bGU+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiN0ZXh0YXJlYSB7Cglwb3NpdGlvbjphYnNvbHV0ZTsKCXRvcDowcHg7CglsZWZ0OjBweDsKCXdpZHRoOjEwMCU7CgloZWlnaHQ6MTAwJTsKCWZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlLCBzYW5zOwoJcGFkZGluZzowcHg7CgltYXJnaW46MHB4OwoJYm9yZGVyOjBweDsKCXRleHQtYWxpZ246Y2VudGVyOwoJb3ZlcmZsb3c6aGlkZGVuOwoJcmVzaXplOm5vbmU7CgkvKgoJVGhpcyB1c2VkIHRvIGJlIGhlcmUuIE5vdCBzdXJlIHdoeSwgYnV0IGV2ZW50dWFsbHksCglpdCBicm9rZSBGaXJlZm94IChuZXdsaW5lcyBub3Qgd3JhcHBpbmcgbGluZXMpCgl3aGl0ZS1zcGFjZTpub3dyYXA7CgkqLwp9CgovKiBkaXNhYmxlIGZvY3VzIGJvcmRlciBhdCBDaHJvbWUgKi8KI3RleHRhcmVhOmZvY3VzIHsKCW91dGxpbmU6IG5vbmU7Cn0KCiN0ZXN0IHsKCXBvc2l0aW9uOmFic29sdXRlOwoJdmlzaWJpbGl0eTpoaWRkZW47Cgl0b3A6MHB4OwoJbGVmdDowcHg7Cglmb250LXNpemU6MzBweDsKCXdoaXRlLXNwYWNlOnByZTsKCWZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnM7Cglib3JkZXI6MHB4OwoJcGFkZGluZzowLjFlbTsKCW1hcmdpbjowcHg7Cn0KI2Fib3V0IHsKCXBvc2l0aW9uOmFic29sdXRlOwoJd2lkdGg6MjBlbTsKCXRvcDozMHB4OwoJcmlnaHQ6MzBweDsKCWJhY2tncm91bmQtY29sb3I6Z3JheTsKCXBhZGRpbmc6MWVtOwp9Cgo8L3N0eWxlPgo8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+Cm9wYWNpdHkgPSAxMDA7CmZ1bmN0aW9uIGFkanVzdCgpIHsKCXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRleHRhcmVhIik7Cgl0ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRlc3QiKTsKCQoJdGVzdC50ZXh0Q29udGVudD10YS52YWx1ZTsKCS8vIE90aGVyd2lzZSwgdGhlIG5ld2xpbmUgd291bGQgbm90IGJlIGNvdW50ZWQuCglpZiAodGEudmFsdWVbdGEudmFsdWUubGVuZ3RoLTFdID09ICJcbiIpIHsKCQl0ZXN0LmlubmVySFRNTCArPSAnLic7Cgl9CgoJcmF0aW9YID0gKHdpbmRvdy5pbm5lcldpZHRoKSAvIHRlc3Qub2Zmc2V0V2lkdGg7CglyYXRpb1kgPSAod2luZG93LmlubmVySGVpZ2h0KSAvIHRlc3Qub2Zmc2V0SGVpZ2h0OwoJcmF0aW8gPSBNYXRoLm1pbihyYXRpb1gscmF0aW9ZKTsKCWZvbnRTaXplID0gTWF0aC5mbG9vcigzMCAqIHJhdGlvKSArICJweCIKCXRhLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7CgluZXdIZWlnaHQgPSBNYXRoLmNlaWwodGVzdC5vZmZzZXRIZWlnaHQgKiByYXRpbyk7CgkvL3RhLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICJweCI7CgkvL3RhLnN0eWxlLnRvcCA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIG5ld0hlaWdodCkvMikgKyAicHgiOwoJdGEuc3R5bGUucGFkZGluZ1RvcCA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIG5ld0hlaWdodCkvMikgKyAicHgiOwoJdGEuc3R5bGUucGFkZGluZ0JvdHRvbSA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIG5ld0hlaWdodCkvMikgKyAicHgiOwoJbmV3V2lkdGggPSBNYXRoLmNlaWwodGVzdC5vZmZzZXRXaWR0aCAqIHJhdGlvKTsKCS8vdGEuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICJweCI7Cgl0YS5zdHlsZS5wYWRkaW5nTGVmdCA9IE1hdGgubWF4KDAsTWF0aC5mbG9vcigod2luZG93LmlubmVyV2lkdGggLSBuZXdXaWR0aCkvMikpICsgInB4IjsKCXRhLnN0eWxlLnBhZGRpbmdSaWdodCA9IE1hdGgubWF4KDAsTWF0aC5mbG9vcigod2luZG93LmlubmVyV2lkdGggLSBuZXdXaWR0aCkvMikpICsgInB4IjsKCSAKCS8vdGVzdC5pbm5lckhUTUwgPSBuZXdIZWlnaHQgKyAiICIgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKyAiICIgKyBmb250U2l6ZTsKCQoJaHJlZiA9ICAiI3Q9IiArIGVuY29kZVVSSUNvbXBvbmVudCh0YS52YWx1ZSk7CglpZiAodGEuc3R5bGUuY29sb3IpIHsKCQlocmVmICs9ICAiO2Y9IiArIGVuY29kZVVSSUNvbXBvbmVudCh0YS5zdHlsZS5jb2xvcik7Cgl9CglpZiAodGEuc3R5bGUuYmFja2dyb3VuZENvbG9yKSB7CgkJaHJlZiArPSAgIjtiPSIgKyBlbmNvZGVVUklDb21wb25lbnQodGEuc3R5bGUuYmFja2dyb3VuZENvbG9yKTsKCX0KCXdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjsKfQoKZnVuY3Rpb24gc2hvd0JveCgpIHsKCW9wYWNpdHkgPSAxMDA7Cgl3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpOwoJc2V0T3BhY2l0eSgpOwp9CmZ1bmN0aW9uIGZhZGVPdXQoKSB7CglvcGFjaXR5ICo9IDAuOTg1OwoJaWYgKG9wYWNpdHkgPiAxKSB7CgkJdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCJmYWRlT3V0KCkiLDIwKTsKCX0gZWxzZSB7CgkJb3BhY2l0eSA9IDA7Cgl9CglzZXRPcGFjaXR5KCk7Cn0KZnVuY3Rpb24gc2V0T3BhY2l0eSgpIHsKCWFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImFib3V0Iik7CglhYm91dC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eS8xMDA7CglhYm91dC5zdHlsZS5maWx0ZXIgPSAiYWxwaGEob3BhY2l0eT0iK01hdGgucm91bmQob3BhY2l0eSkrIikiOwp9CgpmdW5jdGlvbiBwYXJzZUhhc2goKSB7Cgl0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJ0ZXh0YXJlYSIpOwoJdGEuZm9jdXMoKTsKCgl2YXIgcXVlcnlTdHJpbmcgPSB7fTsKCXdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoCgkJbmV3IFJlZ0V4cCgiKFtePz0mOyNdKykoPShbXiY7XSopKSIsICJnIiksCgkJZnVuY3Rpb24oJDAsICQxLCAkMiwgJDMpIHtxdWVyeVN0cmluZ1skMV0gPSBkZWNvZGVVUklDb21wb25lbnQoJDMpOyB9CgkpOwoJaWYgKHF1ZXJ5U3RyaW5nWyd0J10pIHsKCQl0YS52YWx1ZSA9IHF1ZXJ5U3RyaW5nWyd0J107Cgl9CglpZiAocXVlcnlTdHJpbmdbJ2YnXSkgewoJCXRhLnN0eWxlLmNvbG9yID0gcXVlcnlTdHJpbmdbJ2YnXTsKCX0KCWlmIChxdWVyeVN0cmluZ1snYiddKSB7CgkJdGEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcXVlcnlTdHJpbmdbJ2InXTsKCX0KCWFkanVzdCgpOwoJdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCJmYWRlT3V0KCk7IiwxMDAwKTsKCXNldE9wYWNpdHkoKTsKfQoJCmZ1bmN0aW9uIGluaXQoKSB7CglpZiAod2luZG93Lm5hdmlnYXRvci5tb3pBcHBzKSB7CgkJZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImZpcmVmb3giKS5zdHlsZS5kaXNwbGF5ID0gImJsb2NrIjsKCX0KCXBhcnNlSGFzaCgpOwp9Cjwvc2NyaXB0Pgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm8iPgo8bWV0YSBuYW1lPSJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlIiBjb250ZW50PSJ5ZXMiPgo8bWV0YSBuYW1lPSJmb3JtYXQtZGV0ZWN0aW9uIiBjb250ZW50PSJ0ZWxlcGhvbmU9bm8iPgo8L2hlYWQ+Cjxib2R5IG9ubG9hZD0iaW5pdCgpIiBvbmhhc2hjaGFuZ2U9InBhcnNlSGFzaCgpIiBvbnJlc2l6ZT0iYWRqdXN0KCkiPgo8dGV4dGFyZWEgaWQ9InRleHRhcmVhIiBvbktleVVwPSJhZGp1c3QoKSIgb25wYXN0ZT0iYWRqdXN0KCkiIG9uaW5wdXQ9ImFkanVzdCgpIj46LSk8L3RleHRhcmVhPgo8c3BhbiBpZD0idGVzdCI+PC9zcGFuPgo8ZGl2IGlkPSJhYm91dCIgb25Nb3VzZU92ZXI9InNob3dCb3goKSIgb25Nb3VzZU91dD0iZmFkZU91dCgpIj4KPHA+ClRoaXMgaXMgYW4gb25saW5lLXZlcnNpb24gb2YgdGhlIHByb2dyYW0gPHN0cm9uZz5zY3JlZW4tbWVzc2FnZTwvc3Ryb25nPiBmb3IgTGludXguCjwvcD4KPHAgaWQ9ImZpcmVmb3giIHN0eWxlPSJkaXNwbGF5Om5vbmUiPgpZb3UgY2FuIDxhIGhyZWY9IiMiIG9uY2xpY2s9IndpbmRvdy5uYXZpZ2F0b3IubW96QXBwcy5pbnN0YWxsKCdodHRwOi8vc20ubm9tZWF0YS5kZS9zbS53ZWJhcHAnKSI+aW5zdGFsbCBpdCBhcyBhIEZpcmVGb3ggYXBwPC9hPi4KPC9wPgo8cD4KRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9yaWdpbmFsIHByb2dyYW0sIHNlZSB3aGF0IDxhIGhyZWY9Imh0dHA6Ly9kZWJhZGF5LmRlYmlhbi5uZXQvMjAwNy8wNy8xOC9zY3JlZW4tbWVzc2FnZS11c2UteW91ci1zY3JlZW4tdG8tY29tbXVuaWNhdGUvIj5EZWItYS1EYXk8L2E+IHdyaXRlcyBhYm91dCBpdC4gWW91IGNhbiBkb3dubG9hZCBpdCBmcm9tIDxhIGhyZWY9Imh0dHA6Ly9wYWNrYWdlcy5kZWJpYW4ub3JnL3NpZC9zbSI+RGViaWFuPC9hPiBvciA8YSBocmVmPSJodHRwOi8vZGFyY3Mubm9tZWF0YS5kZS9zY3JlZW4tbWVzc2FnZS8iPmZldGNoIHRoZSBzb3VyY2Vjb2RlPC9hPi4KPC9wPgo8cD4KPHN0cm9uZz5zY3JlZW4tbWVzc2FnZTwvc3Ryb25nPiB3YXMgY3JlYXRlZCBieSA8YSBocmVmPSJodHRwOi8vd3d3LmpvYWNoaW0tYnJlaXRuZXIuZGUvIj5Kb2FjaGltIEJyZWl0bmVyPC9hPi4KSWYgeW91IGxpa2UgaXQsIHRoZW4gPGEgaHJlZj0iaHR0cDovL2ZsYXR0ci5jb20vdGhpbmcvMzMwMTg2L3NjcmVlbi1tZXNzYWdlIiB0YXJnZXQ9Il9ibGFuayI+ZmxhdHRyIHRoaXM8L2E+Lgo8L3A+CjwvZGl2Pgo8L2JvZHk+CjwvaHRtbD4K
[map alpha to number pad]: map-alpha-to-number-pad.user.js
[e3new grade]: javascript:void%20function%20()%20%7Bfunction%20userClick()%7Breturn%20alert(%22please%20click%20the%20column%20you%20want%20to%20grade%22)%2Cnew%20Promise(resolve%3D%3E%7Bwindow.addEventListener(%22click%22%2Cclick%3D%3Eresolve(click.target)%2C%7Bonce%3A!0%7D)%7D)%7Dfunction%20findAcient(node%2CtestSelector)%7Blet%20test%3Bfor(test%3D%22string%22%3D%3Dtypeof%20testSelector%3Fnode%3D%3Enode.matches(testSelector)%3AtestSelector%3Bnode%3B)%7Bif(test(node))return%20node%3Bnode%3Dnode.parentNode%7Dreturn%20null%7Dfunction%20getScoreList()%7Breturn%20prompt(%22please%20input%20score%20seperated%20by%20space%22).split(%2F%5Cs%2Fg)%7Dasync%20function%20main()%7Bconst%20cell%3DfindAcient(await%20userClick()%2C%22td%22)%2CinputSelector%3D%60td%3Anth-child(%24%7Bcell.cellIndex%2B1%7D)%20input%60%2CinputList%3DfindAcient(cell%2C%22table%22).querySelectorAll(inputSelector)%2CscoreList%3Dawait%20getScoreList()%3Bfor(let%20i%3D0%3Bi%3CinputList.length%3Bi%2B%2B)%7BinputList%5Bi%5D.value%3DscoreList%5Bi%5D%7D%7Dmain()%3B%7D()

[e3new entitle]: e3new-entitle.user.js
[paste-to-form-file.bookmarklet.js]: javascript:void%20function%20()%20%7Bfunction%20createFileList(...fileList)%7Bconst%20data%3Dnew%20DataTransfer%3Bfor(const%20file%20of%20fileList)data.items.add(file)%3Breturn%20data.files%7Dfunction%20parseHtml(html)%7Breturn(new%20DOMParser).parseFromString(html%2C%22text%2Fhtml%22)%7Dasync%20function%20fetchFile(url)%7Breturn%20await%20new%20Promise((resolve%2Creject)%3D%3E%7BGM.xmlHttpRequest(%7Bmethod%3A%22GET%22%2Curl%3Aurl%2CresponseType%3A%22blob%22%2Conload(xhr)%7Bconst%20blob%3Dxhr.response%2Ctype%3Dfunction(xhr)%7Bfor(const%20row%20of%20xhr.responseHeaders.split(%2F%5Cn%2F))%7Bconst%20scan%3Drow.match(%2F%5Econtent-type%3A%20(%5B-_%2B%5Cw%5D%2B)%5C%2F(%5B-_%2B%5Cw%5D%2B)%2Fi)%3Bif(scan)return%20console.debug(row)%2Cscan%5B2%5D%7D%7D(xhr)%3Blet%20file%3Bfile%3Dtype%3Fnew%20File(%5Bblob%5D%2C%60drop-image.%24%7Btype%7D%60%2C%7Btype%3A%60image%2F%24%7Btype%7D%60%7D)%3Anew%20File(%5Bblob%5D%2C%22drop-image%22)%2Cresolve(file)%7D%2Conerror(xhr)%7Breject(xhr.statusText)%7D%7D)%7D)%7Dfunction%20putFileIntoForm(fileList)%7Bconst%20input%3Ddocument.querySelector('input%5Btype%20%3D%20%22file%22%5D')%3Bif(!input)return%3Bconsole.debug(%22fileList%3A%22%2C...fileList)%2Cinput.files%3DfileList%3Bconst%20change%3Dnew%20Event(%22change%22%2C%7Bbubbles%3A!0%2Ccancelable%3A!1%7D)%3Binput.dispatchEvent(change)%7Ddocument.body.addEventListener(%22paste%22%2Cpaste%3D%3E%7B0!%3Dpaste.clipboardData.files.length%26%26putFileIntoForm(paste.clipboardData.files)%7D)%2Cdocument.body.addEventListener(%22dragover%22%2Cover%3D%3Eover.preventDefault())%2Cdocument.body.addEventListener(%22drop%22%2Casync%20drop%3D%3E%7Bdrop.preventDefault()%3Bconst%20data%3Ddrop.dataTransfer%3Bconsole.debug(%22type%22%2C...data.types)%3Blet%20fileList%3Bif(%22undefined%22!%3Dtypeof%20GM%26%260%3D%3Ddata.files.length)%7Blet%20urlList%3Bif(~data.types.indexOf(%22text%2Fhtml%22))%7Bconst%20dom%3DparseHtml(data.getData(%22text%2Fhtml%22))%3BurlList%3Ddom.querySelectorAll(%22img%22)%2Cconsole.debug(%22query%20img%20url%22)%2C0%3D%3DurlList.length%26%26(console.debug(%22no%20image%2C%20query%20anchor%22)%2CurlList%3Ddom.querySelectorAll(%22a%22))%2CurlList%3DArray.from(urlList).map(node%3D%3Enode.src%7C%7Cnode.href)%7D0%3D%3DurlList.length%26%26~data.types.indexOf(%22text%2Fplain%22)%26%26(console.debug(%22no%20url%20found%2C%20try%20plain%20text%22)%2CurlList%3Ddata.getData(%22text%2Fplain%22).split(%22%5Cn%22).filter(u%3D%3E%22%23%22!%3Du.charAt(0)))%3Btry%7BfileList%3Dawait%20Promise.all(urlList.map(fetchFile))%7Dcatch(e)%7Breturn%20void%20console.error(e)%7DfileList%3DcreateFileList(...fileList)%7Delse%20fileList%3Ddrop.dataTransfer.files%3Bconsole.debug(%22file%20list%3A%22%2CfileList)%2CputFileIntoForm(fileList)%7D)%3B%7D()

[paste-to-form-file.user.js]: paste-to-form-file.user.js
[ptt man url lookup]: javascript:void%20function%20()%20%7Bclass%20PttManUrl%7Bconstructor()%7Breturn%20this._constructor(...arguments)%7D_constructor()%7Bthis.domParser%3Dnew%20DOMParser%7Dassert()%7Breturn%20console.assert(...arguments)%7DparseHtml(html)%7Breturn%20this.domParser.parseFromString(html%2C%22text%2Fhtml%22)%7DparseManPath(path)%7Bconst%20list%3Dpath.match(%2F%5Cd%2B%2Fg).map(x%3D%3ENumber(x))%3Breturn%20this.assert(list.length%3E0%26%26!list.some(x%3D%3ENumber.isNaN(x)))%2Clist%7Dasync%20fetchDoc(url)%7Bconst%20response%3Dawait%20fetch(url)%2Chtml%3Dawait%20response.text()%3Breturn%20this.parseHtml(html)%7Dasync%20nthInUrl(n%2Curl)%7Breturn(await%20this.fetchDoc(url)).querySelectorAll(%22.m-ent%20a%22)%5Bn-1%5D.getAttribute(%22href%22)%7DboardToUrl(board)%7Breturn%60https%3A%2F%2Fwww.ptt.cc%2Fman%2F%24%7Bboard%7D%2Findex.html%60%7Dstatic%20async%20lookup(board%2Cpath)%7Bconst%20o%3Dnew%20this%3Breturn%20await%20o.lookup(board%2Cpath)%7Dasync%20lookup(board%2CpathString)%7Bconst%20path%3Dthis.parseManPath(pathString)%3Blet%20url%3Dthis.boardToUrl(board)%3Bfor(const%20n%20of%20path)%7Bconst%20relative%3Dawait%20this.nthInUrl(n%2Curl)%3Burl%3Dnew%20URL(relative%2Curl).href%7Dreturn%20url%7DparseBoardManPath(string)%7Bconst%20regexpTail%3D%2F%5Cs*%5C(%3F(%5B%5Cw-%5D%2B)%5C)%3F%5Cs*%24%2F%2CscanTail%3Dstring.match(regexpTail)%3Bif(scanTail)%7Bconst%20board%3DscanTail%5B1%5D%2Cpath%3Dstring.replace(regexpTail%2C%22%22)%3Bif(!board.slice(1).match(%2F%5E%5B%5Cd-%5D*%24%2F))return%5Bboard%2Cpath%5D%7Dconst%20regexpLead%3D%2F%5E%5Cs*(%5B%5Cw-%5D%7B2%2C%7D)%5Cs*(%5C.%7C%5Cs)%5Cs*%2F%2CscanLead%3Dstring.match(regexpLead)%3Bif(scanLead%26%26%22z%22!%3DscanLead%5B1%5D%26%26!%2F%5E%5Cd%2B%24%2F.test(scanLead))%7Bconst%20board%3DscanLead%5B1%5D%2Cpath%3Dstring.replace(regexpLead%2C%22%22)%3Bif(!board.match(%2F%5E%5Cd%2B%24%2F))return%5Bboard%2Cpath%5D%7Dthrow%20new%20Error(%22unknown%20board%20format%22)%7Dasync%20browserUi()%7Bif(!this.checkCors())return%20void%20this.alert(%22you%20need%20to%20run%20this%20bookmarklet%20under%5Cnhttps%3A%2F%2Fwww.ptt.cc%2F%22)%3Bconst%20input%3Dawait%20this.prompt(%22please%20input%20board%20name%20and%20path%22)%3Blet%20board%2Cpath%3Btry%7B%5Bboard%2Cpath%5D%3Dthis.parseBoardManPath(input)%7Dcatch(formatError)%7Bboard%3Dnull%7Dif(!board)%7Blet%20scan%3B(scan%3Dwindow.location.href.match(%2F%5Ehttps%3A..www.ptt.cc.(%3F%3Aman%7Cbbs).(%5B%5Cw-%5D%2B)%2F))%26%26(board%3Dscan%5B1%5D%2Cpath%3Dinput)%7Dif(!board)return%20void%20await%20this.alert(%22format%20error%2C%20the%20path%20should%20be%20one%20of%20following%3A%5Cn8.%208.%202%20(PttNewhand)%5Cnz-8-8-2%20(PttNewhand)%5Cnz-8-8-2%20PttNewhand%5CnPttNewhand.%208.%208.%202%5CnPttNewhand%208.%208.%202%5CnPttNewhand%20z-8-8-2%5Cnz-8-8-2%5Cn8.%208.%202%5Cn%22)%3Blet%20url%3Bfor(const%20done%20of%20this.showLoadEffect())try%7Burl%3Dawait%20this.lookup(board%2Cpath)%7Dcatch(error)%7Burl%3Dnull%2Cthis.alert(error)%7Dreturn%20url%3Fthis.open(url)%3Avoid%200%7DcheckCors()%7Breturn%2F%5Ehttps%3A..www.ptt.cc(%5C%2F%7C%24)%2F.test(window.location.href)%7Dopen(url)%7Breturn%20window.open(url)%7D*showLoadEffect()%7Bconst%20body%3Ddocument.body%2C%7Bcursor%3Acursor%2Cfilter%3Afilter%7D%3Dbody.style%3BObject.assign(body.style%2C%7Bcursor%3A%22progress%22%2Cfilter%3A%22brightness(0.8)%22%7D)%2Cyield%2CObject.assign(body.style%2C%7Bcursor%3Acursor%2Cfilter%3Afilter%7D)%7Dasync%20prompt(question)%7Breturn%20prompt(question)%7Dasync%20alert(message)%7Balert(message)%7Dstatic%20run(withThis)%7Breturn%20withThis(new%20this)%7D%7D%22object%22%3D%3Dtypeof%20tri%3Ftri.PttManUrl%3Dclass%20extends%20PttManUrl%7Basync%20triUi(input)%7Breturn%20this.inputFullPath%3Dinput%2Cawait%20this.browserUi()%7Dasync%20prompt(question)%7Breturn%20this.inputFullPath%7Dasync%20alert(message)%7Bawait%20tri.controller.acceptExCmd(%22m%20%22%2Bmessage)%7Dopen(url)%7Breturn%20url%7DcheckCors(url)%7Breturn!0%7D%7D%3A%22object%22%3D%3Dtypeof%20window%26%26%22undefined%22%3D%3Dtypeof%20GM%26%26PttManUrl.run(o%3D%3Eo.browserUi())%3B%7D()

[homeloader.user.js]: homeloader.user.js
[download-html.bookmarklet.js]: javascript:void%20function%20()%20%7Bfunction%20doctypeToString(node%3Ddocument.doctype)%7Breturn%20node%3F%22%3C!DOCTYPE%20%22%2Bnode.name%2B(node.publicId%3F%60%20PUBLIC%20%22%24%7Bnode.publicId%7D%22%60%3A%22%22)%2B(!node.publicId%26%26node.systemId%3F%22%20SYSTEM%22%3A%22%22)%2B(node.systemId%3F%60%20%22%24%7Bnode.systemId%7D%22%60%3A%22%22)%2B%22%3E%5Cn%22%3A%22%22%7Dfunction%20cleanCopy(root)%7Bvar%20root%3Droot.cloneNode(!0)%2Co%3D(root.querySelectorAll(%22iframe%5Bsrc%20%5E%3D%20moz-extension%22).forEach(e%3D%3Ee.remove())%2C%7B%7D)%3Breturn(o%3Dnull!%3Dtypeof%20option%26%26option%26%26option!%3Dwindow.option%3Foption%3Ao)%5B%22base-url-no%22%5D%7C%7CfixRelativeUrl(root)%2Co%5B%22script-keep%22%5D%7C%7CdisableScript(root)%2CfixEncode(root)%2Croot%7Dfunction%20disableScript(root)%7Bvar%20url%2Ccomment%3Bfor(const%20s%20of%20root.querySelectorAll(%22script%22))s.src%26%26(url%3Ds.getAttribute(%22src%22)%2Cs.removeAttribute(%22src%22)%2Cs.dataset.gholkOriginalSrc%3Durl)%2Cs.innerHTML%26%26(url%3Ds.innerHTML%2Cs.innerHTML%3D%22%22%2Cs.dataset.gholkOriginalCode%3D%22code-in-next-comment%22%2C(comment%3Ddocument.createComment(%22%22)).data%3Durl.replace(%2F%26%2Fg%2C%22%26amp%3B%22).replace(%2F--%3E%2Fg%2C%22%26m2arr%3B%22)%2Cs.after(comment))%7Dfunction%20fixEncode(root)%7Bvar%20list%2CencodeNode%3B%22UTF-8%22!%3Ddocument.characterSet%26%26(0%3D%3D(list%3Droot.querySelectorAll(%22meta%5Bhttp-equiv%3Dcontent-type%5D%2Cmeta%5Bhttp-equiv%3DContent-Type%5D%2Cmeta%5Bcharset%5D%22)).length%3Fconfirm(%22not%20UTF-8%20and%20no%20charset%20tag%20found%2C%20add%20one%3F%22)%26%26((encodeNode%3Ddocument.createElement(%22meta%22)).setAttribute(%22charset%22%2C%22utf-8%22)%2CencodeNode.dataset.gholkOriginalCharset%3D%22%22%2C(root.querySelector(%22head%22)%7C%7Croot).prepend(encodeNode))%3Alist.forEach(encodeNode%3D%3E%7Bvar%20original%3BencodeNode.hasAttribute(%22charset%22)%3F(original%3DencodeNode.getAttribute(%22charset%22)%2CencodeNode.dataset.gholkOriginalCharset%3Doriginal%2CencodeNode.setAttribute(%22charset%22%2C%22utf-8%22))%3AencodeNode.hasAttribute(%22http-equiv%22)%3F(encodeNode.dataset.gholkOriginalContentType%3DencodeNode.content%2CencodeNode.content%3D%22text%2Fhtml%3B%20charset%3DUTF-8%22)%3Aalert(%22unknown%20error%20while%20fix%20encode%20node%3A%20%22%2BencodeNode.outerHTML)%7D))%7Dfunction%20fixRelativeUrl(root)%7Bvar%20option%3Droot.querySelector('meta%5Bproperty%3D%22gholk%3Abase%22%5D%5Bcontent%3Dnop%5D')%3Bif(option)option.remove()%3Belse%7Blet%20base%3Droot.querySelector(%22base%22)%3Bbase%3F(option%3Dbase.getAttribute(%22href%22)%2Cbase.dataset.gholkOriginalHref%3Doption%2Cbase.setAttribute(%22href%22%2Cbase.href))%3A%22data%3A%22!%3Dwindow.location.protocol%26%26((base%3Ddocument.createElement(%22base%22)).href%3Droot.baseURI%2Cbase.dataset.gholkOriginalHref%3D%22%22%2C(root.querySelector(%22head%22)%7C%7Croot).prepend(base))%7D%7Dconst%20html%3DdoctypeToString()%2BcleanCopy(document.documentElement).outerHTML%2Cblob%3Dnew%20Blob(%5Bhtml%5D%2C%7Btype%3A%22text%2Fhtml%22%7D)%2Cdownload%3Ddocument.createElement(%22a%22)%3Bdownload.download%3Ddocument.title%2B%22.html%22%2Cdownload.href%3DURL.createObjectURL(blob)%2Cdocument.body.appendChild(download)%2Cdownload.click()%2Cdownload.remove()%2Calert(%22cleaning%20blob%3F%22)%2CURL.revokeObjectURL(blob)%3B%7D()

[prompt annotate description]: javascript:void%20function%20()%20%7Bvar%20d%3Ddocument%2Cb%3Dd.body%3Bfunction%20%24(selector%2Ccontext)%7Breturn(context%7C%7Cd).querySelector(selector)%7Dfunction%20%24%24(selector%2Ccontext)%7Breturn(context%7C%7Cd).querySelectorAll(selector)%7Dfunction%20create(tag%2Cparent%2Cprop)%7Bparent%3D(parent%7C%7Cb).appendChild(d.createElement(tag))%3Breturn%22BUTTON%22%3D%3Dtag%26%26(parent.type%3D%22button%22)%2Cprop%26%26Object.assign(parent%2Cprop)%2Cparent%7Dfunction%20createWithLabel(text%2Cattr)%7Bvar%20l%3Dcreate(%22label%22)%2Cattr%3Dcreate(%22input%22%2Cl%2Cattr)%3Breturn%20attr.title%26%26(l.title%3Dattr.title%2Cattr.title%3D%22%22)%2Cl.appendChild(document.createTextNode(text))%2Cl%7Dasync%20function%20promptUi(title%2Ctext%3D%22%22)%7Bconst%20dialog%3Dcreate(%22form%22%2Cnull%2C%7Bmethod%3A%22dialog%22%2CclassName%3A%22gholk-prompt-dialog%22%2Conselectionchange(evt)%7Bvar%20ev2%3B!function()%7Blet%20e%3Ddocument.activeElement%3Bif(e)%7Bfor(%3Be.shadowRoot%3B)e%3De.shadowRoot.activeElement%3Bif((%22TEXTAREA%22%3D%3De.nodeName%7C%7C%22INPUT%22%3D%3De.nodeName)%26%26null!%3De.selectionStart)return%7BisCollapsed%3Ae.selectionStart%3D%3De.selectionEnd%2CfocusNode%3Ae%2Ctype%3A%22TextBox%22%7D%7D%7D()%7C%7C(ev2%3Dnew%20Event(%22selectionchange%22%2C%7Bbubbles%3A!0%2Ccomposed%3A!1%7D)%2Cthis.getRootNode().host.dispatchEvent(ev2))%7D%7D)%3Bvar%20titleNode%3Dcreate(%22h2%22%2Cdialog)%2Ctitle%3D(titleNode.textContent%3Dtitle%2Ccreate(%22textarea%22%2Cdialog%2C%7Bname%3A%22annotate%22%2Cvalue%3Atext%7D))%2Ctext%3D(create(%22input%22%2Cdialog%2C%7Bname%3A%22title%22%2Ctype%3A%22text%22%2Cvalue%3Adocument.title%7D)%2CcreateWithLabel(%22content%20editable%22%2C%7Btype%3A%22checkbox%22%2Cname%3A%22content-editable-toggle%22%2Conchange()%7Bd.body.contentEditable%3Dthis.checked%7D%7D))%2Ctext%3D(dialog.appendChild(text)%2Cdialog.appendChild(createWithLabel(%22do%20not%20comment%20out%20script%22%2C%7Btype%3A%22checkbox%22%2Cchecked%3A!1%2Cname%3A%22script-keep%22%2Ctitle%3A%22not%20to%20comment%20out%20script%20tag%22%7D))%2Cdialog.appendChild(createWithLabel(%22do%20not%20set%20base%20url%22%2C%7Btype%3A%22checkbox%22%2Cchecked%3A!1%2Cname%3A%22base-url-no%22%2Ctitle%3A%22not%20to%20add%20%3Cbase%3E%20in%20download%20html%22%7D))%2Ccreate(%22button%22%2Cdialog))%3Btext.textContent%3D%22ok%22%3Blet%20confirm%2Creject%3Bvar%20promise%3Dnew%20Promise((ok%2Cno)%3D%3E%5Bconfirm%2Creject%5D%3D%5Bok%2Cno%5D)%2Ccancel%3D(text.onclick%3D()%3D%3Econfirm()%2Ccreate(%22button%22%2Cdialog))%3Bcancel.textContent%3D%22cancel%22%2Ccancel.onclick%3D()%3D%3Ereject()%3Bconst%20download%3Dcreate(%22button%22%2Cdialog)%3Bdownload.onclick%3D()%3D%3E%7Bcreate(%22input%22%2Cdialog%2C%7Btype%3A%22hidden%22%2Cname%3A%22download%22%2Cvalue%3A%22on%22%7D)%2Cconfirm()%7D%2Cdownload.textContent%3D%22download%22%2Cdialog.addEventListener(%22keydown%22%2Ce%3D%3E%7B%22Enter%22%3D%3De.key%26%26e.ctrlKey%3Fconfirm()%3A%22s%22%3D%3De.key%26%26e.ctrlKey%3F(e.preventDefault()%2Cdownload.click())%3A%22z%22%3D%3De.key%26%26e.altKey%26%26reject()%7D)%2Ccreate(%22style%22%2Cdialog).textContent%3D%60%3Ahost%20%7Ball%3A%20initial%3B%7D.gholk-prompt-dialog%20%7B%20%20%20%20position%3A%20fixed%3B%20%20%20%20top%3A%2030%25%3B%20%20%20%20left%3A%2030%25%3B%20%20%20%20width%3A%2040%25%3B%20%20%20%20height%3A%20auto%3B%20%20%20%20background%3A%20white%3B%20%20%20%20padding%3A%201em%3B%20%20%20%20z-index%3A%2090%3B%20%20%20%20border%3A%20solid%201px%3B%20%20%20%20opacity%3A%200.7%3B%7Dh2%20%7Bcursor%3A%20grab%3B%7Dlabel%20%7Bdisplay%3A%20block%3B%7Dbutton%20%7Bmargin%3A%200%200.2em%3B%7Dtextarea%20%7B%20%20%20%20display%3A%20block%3B%20%20%20%20width%3A%20100%25%3B%20%20%20%20height%3A%205em%3B%7Dinput%3Anot(%5Btype%5D)%2C%20input%5Btype%3Dtext%5D%20%7B%20%20%20%20width%3A%20100%25%3B%7D.drag-preview%20%7B%20%20%20%20border-width%3A%200.3em%3B%20%20%20%20opacity%3A%201%3B%7D.drag-source%20%7Bopacity%3A%200.7%3B%7D%60%3Btext%3Dcreate(%22span%22%2Cb%2C%7BclassName%3Adialog.className%7D)%3Btext.setAttribute(%22role%22%2C%22textbox%22)%2Ctext.attachShadow(%7Bmode%3A%22open%22%7D)%2Ctext.shadowRoot.appendChild(dialog)%2CenableDragMove(dialog%2CtitleNode)%2Cdialog.ondrop%3De%3D%3Ee.dataTransfer.dropEffect%3D%22copy%22%2Ctitle.focus()%3Btry%7Bawait%20promise%7Dcatch(cancel)%7Breturn%20null%7Dfinally%7Btext.remove()%7DtitleNode%3Dnew%20FormData(dialog)%3Breturn%20Object.fromEntries(titleNode)%7Dfunction%20appendAfter(newNode%2CrefNode)%7Bvar%20parent%3DrefNode.parentNode%3BrefNode.nextSibling%3Fparent.insertBefore(newNode%2CrefNode.nextSibling)%3Aparent.appendChild(newNode)%7Dfunction%20findDescription()%7Bvar%20icaseMatch%3D%60%20%20%20%20%20%20%20%20property%3Dgholk%3Aannotate%20name%3Ddescription%20%20%20%20%20%20%20%20property%3Dog%3Adescription%20name%3Dtwitter%3Adescription%20%20%20%20%60.trim().split(%2F%5Cs%2B%2F).map(r%3D%3Er.split(%22%3D%22))%2CmetaList%3DArray.from(%24%24(%22meta%22))%3Bfor(const%5Battr%2Cvalue%5Dof%20icaseMatch)%7Bvar%20match%3DmetaList.find(e%3D%3Enew%20RegExp(value%2C%22i%22).test(e.getAttribute(attr)))%3Bif(match%26%26match.content)return%20match.content%7Dreturn%20%24(%22p%22)%3F%24(%22p%22).textContent%3A%22%22%7Dasync%20function%20editDescription()%7Bvar%20result%3Dawait%20promptUi(%22description%22%2CfindDescription())%3Bif(result)%7Blet%20annotate%3D%24('meta%5Bproperty%3D%22gholk%3Aannotate%22%5D')%3Bannotate%7C%7C(annotate%3Ddocument.createElement(%22meta%22)).setAttribute(%22property%22%2C%22gholk%3Aannotate%22)%2Cannotate.content%3Dresult.annotate%2Cdocument.title%3Dresult.title%3Bvar%20first%3D%24(%22meta%5Bcharset%5D%22)%7C%7C%24(%22meta%5Bhttp-equiv%20%3D%20content-type%5D%22)%7C%7C%24(%22meta%5Bhttp-equiv%20%3D%20Content-Type%5D%22)%7C%7Cd.head.firstChild%7C%7Cd.documentElement.firstChild%2CurlTag%3D(appendAfter(annotate%2Cfirst)%2CcreateUrlTag())%3BurlTag%26%26appendAfter(urlTag%2Cfirst)%2Cresult.download%26%26downloadHtml(result)%7D%7Dfunction%20createUrlTag(url%3Dwindow.location.href)%7B%22data%3A%22%3D%3Durl.slice(0%2C5)%26%26(url%3Durl.replace(%2F%5E(data.*%3F%2C.%7B10%7D).*(.%7B40%7D)%24%2F%2C%22%241...%242%22))%3Blet%20tag%3D%24('meta%5Bproperty%3D%22gholk%3Acanonical%22%5D')%3Breturn%20tag%3F(tag.content%3Durl%2Cnull)%3A((tag%3Ddocument.createElement(%22meta%22)).setAttribute(%22property%22%2C%22gholk%3Acanonical%22)%2Ctag.setAttribute(%22content%22%2Curl)%2Ctag)%7Dfunction%20enableDragMove(container%2Chandle)%7Bhandle.draggable%3D!0%3Bconst%20allowGlobalDrop%3Ddrag%3D%3E%7Bdrag.preventDefault()%2Cdrag.dataTransfer.dropEffect%3D%22move%22%7D%3Bfunction%20dropOnWindow(drop)%7Bvar%20node%3Dcontainer%2Cbox%3Dnode.getBoundingClientRect()%2CdragStartClientXY%3Dnode.dataset.dragStartClientXY.split(%22%20%22).map(x%3D%3ENumber(x))%3Bdelete%20node.dataset.dragStartClientXY%2Cnode.style.top%3Ddrop.clientY-dragStartClientXY%5B1%5D%2Bbox.y%2B%22px%22%2Cnode.style.left%3Ddrop.clientX-dragStartClientXY%5B0%5D%2Bbox.x%2B%22px%22%2Cnode.classList.remove(%22drag-preview%22)%2Cnode.classList.remove(%22drag-source%22)%7Dhandle.ondragstart%3Dstart%3D%3E%7Bconst%20node%3Dcontainer%3Bvar%20box%3Dnode.getBoundingClientRect()%3Bstart.dataTransfer.setDragImage(node%2Cstart.clientX-box.x%2Cstart.clientY-box.y)%2Cstart.dataTransfer.effectAllowed%3D%22move%22%2Cwindow.addEventListener(%22dragover%22%2CallowGlobalDrop)%2Cwindow.addEventListener(%22drop%22%2CdropOnWindow)%2Cnode.classList.add(%22drag-preview%22)%2Cnode.dataset.dragStartClientXY%3Dstart.clientX%2B%22%20%22%2Bstart.clientY%2CsetTimeout(()%3D%3E%7Bnode.classList.add(%22drag-source%22)%7D%2C100)%7D%2Chandle.ondragend%3D()%3D%3E%7Bwindow.removeEventListener(%22drop%22%2CdropOnWindow)%2Cwindow.removeEventListener(%22dragover%22%2CallowGlobalDrop)%7D%7Dfunction%20downloadHtml(option)%7Bvar%20option%3D((node%3Ddocument.doctype)%3F%22%3C!DOCTYPE%20%22%2Bnode.name%2B(node.publicId%3F%60%20PUBLIC%20%22%24%7Bnode.publicId%7D%22%60%3A%22%22)%2B(!node.publicId%26%26node.systemId%3F%22%20SYSTEM%22%3A%22%22)%2B(node.systemId%3F%60%20%22%24%7Bnode.systemId%7D%22%60%3A%22%22)%2B%22%3E%5Cn%22%3A%22%22)%2B((node%3D(node%3Ddocument.documentElement).cloneNode(!0)).querySelectorAll(%22iframe%5Bsrc%20%5E%3D%20moz-extension%22).forEach(e%3D%3Ee.remove())%2Co%3D%7B%7D%2C(o%3Dnull!%3Dtypeof%20option%26%26option%26%26option!%3Dwindow.option%3Foption%3Ao)%5B%22base-url-no%22%5D%7C%7Cfunction(root)%7Bvar%20option%3Droot.querySelector('meta%5Bproperty%3D%22gholk%3Abase%22%5D%5Bcontent%3Dnop%5D')%3Bif(option)option.remove()%3Belse%7Blet%20base%3Droot.querySelector(%22base%22)%3Bbase%3F(option%3Dbase.getAttribute(%22href%22)%2Cbase.dataset.gholkOriginalHref%3Doption%2Cbase.setAttribute(%22href%22%2Cbase.href))%3A%22data%3A%22!%3Dwindow.location.protocol%26%26((base%3Ddocument.createElement(%22base%22)).href%3Droot.baseURI%2Cbase.dataset.gholkOriginalHref%3D%22%22%2C(root.querySelector(%22head%22)%7C%7Croot).prepend(base))%7D%7D(node)%2Co%5B%22script-keep%22%5D%7C%7Cfunction(root)%7Broot%3Droot.querySelectorAll(%22script%22)%3Bfor(const%20s%20of%20root)%7Bvar%20url%2Ccomment%3Bs.src%26%26(url%3Ds.getAttribute(%22src%22)%2Cs.removeAttribute(%22src%22)%2Cs.dataset.gholkOriginalSrc%3Durl)%2Cs.innerHTML%26%26(url%3Ds.innerHTML%2Cs.innerHTML%3D%22%22%2Cs.dataset.gholkOriginalCode%3D%22code-in-next-comment%22%2C(comment%3Ddocument.createComment(%22%22)).data%3Durl.replace(%2F%26%2Fg%2C%22%26amp%3B%22).replace(%2F--%3E%2Fg%2C%22%26m2arr%3B%22)%2Cs.after(comment))%7D%7D(node)%2Cfunction(root)%7Bvar%20list%2CencodeNode%3B%22UTF-8%22!%3Ddocument.characterSet%26%26(0%3D%3D(list%3Droot.querySelectorAll(%22meta%5Bhttp-equiv%3Dcontent-type%5D%2Cmeta%5Bhttp-equiv%3DContent-Type%5D%2Cmeta%5Bcharset%5D%22)).length%3Fconfirm(%22not%20UTF-8%20and%20no%20charset%20tag%20found%2C%20add%20one%3F%22)%26%26((encodeNode%3Ddocument.createElement(%22meta%22)).setAttribute(%22charset%22%2C%22utf-8%22)%2CencodeNode.dataset.gholkOriginalCharset%3D%22%22%2C(root.querySelector(%22head%22)%7C%7Croot).prepend(encodeNode))%3Alist.forEach(encodeNode%3D%3E%7Bvar%20original%3BencodeNode.hasAttribute(%22charset%22)%3F(original%3DencodeNode.getAttribute(%22charset%22)%2CencodeNode.dataset.gholkOriginalCharset%3Doriginal%2CencodeNode.setAttribute(%22charset%22%2C%22utf-8%22))%3AencodeNode.hasAttribute(%22http-equiv%22)%3F(encodeNode.dataset.gholkOriginalContentType%3DencodeNode.content%2CencodeNode.content%3D%22text%2Fhtml%3B%20charset%3DUTF-8%22)%3Aalert(%22unknown%20error%20while%20fix%20encode%20node%3A%20%22%2BencodeNode.outerHTML)%7D))%7D(node)%2Cnode.outerHTML)%2Co%3Dnew%20Blob(%5Boption%5D%2C%7Btype%3A%22text%2Fhtml%22%7D)%2Cnode%3Ddocument.createElement(%22a%22)%3Bnode.download%3Ddocument.title%2B%22.html%22%2Cnode.href%3DURL.createObjectURL(o)%2Cdocument.body.appendChild(node)%2Cnode.click()%2Cnode.remove()%2Calert(%22cleaning%20blob%3F%22)%2CURL.revokeObjectURL(o)%7DeditDescription()%3B%7D()

[github fork compare]: javascript:void%20function%20()%20%7B(async()%3D%3E%7Bconst%20aTags%3D%5B...document.querySelectorAll(%22div.repo%20a%3Alast-of-type%22)%5D.slice(1)%3Bfor(const%20aTag%20of%20aTags)await%20fetch(aTag.href).then(x%3D%3Ex.text()).then(html%3D%3EaTag.outerHTML%2B%3D%60%24%7Bhtml.match(%2FThis%20branch%20is.*%2F).pop().replace(%22This%20branch%20is%22%2C%22%22).replace(%2F(%5B0-9%5D%2B%20commits%3F%20ahead)%2F%2C'%3Cfont%20color%3D%22%230c0%22%3E%241%3C%2Ffont%3E').replace(%2F(%5B0-9%5D%2B%20commits%3F%20behind)%2F%2C'%3Cfont%20color%3D%22red%22%3E%241%3C%2Ffont%3E')%7D%60).catch(console.error)%7D)()%3B%7D()

[paste-to-form-file.user.js]: paste-to-form-file.user.js
[msrt ccf dice tool]: javascript:void%20function%20()%20%7Bconst%20dicer%3Dwindow%5B%22msrt-ccf-dicer%22%5D%3D%7Binit()%7Bthis.inputId%3D%22downshift-0-input%22%2Cthis.messageSelector%3D%22.MuiListItem-root.MuiListItem-gutters%20p%22%2Cthis.diceResultSelector%3D%22span.MuiTypography-colorTextSecondary%2C%20span%22%2Cthis.helpText%3D%22%5Cnexample%3A%5Cn2D6%2B3%202D6%2B1%202D6-3%201D6%2B2%5Cnalice%20bob%20%20%20chard%20denis%5Cnstaff%20before%20last%20line%20will%20be%20ignored%5Cn...%5Cn%23sort%5Cn%5Cnand%20click%20%60msrt%60%20button%5Cn%22%2Cthis.addButton()%7D%2CgetText()%7Breturn%20document.getElementById(this.inputId).value%7D%2CcheckFormat(s)%7Bconst%20line%3Ds.split(%2F%5Cn%2F)%3Breturn%20line.length%3E%3D3%26%26line.some(l%3D%3E%2F%5E%23sort%2F.test(l))%7D%2Cdispatch(node%2Cname)%7Bconst%20event%3Dnew%20Event(name%2C%7Bbubbles%3A!0%7D)%3Bevent.isTrust%3D!0%2Cnode.dispatchEvent(event)%7D%2CsetNativeValue(element%2Cvalue)%7Bconst%20valueSetter%3DObject.getOwnPropertyDescriptor(element%2C%22value%22).set%2Cprototype%3DObject.getPrototypeOf(element)%2CprototypeValueSetter%3DObject.getOwnPropertyDescriptor(prototype%2C%22value%22).set%3BvalueSetter%26%26valueSetter!%3D%3DprototypeValueSetter%3FprototypeValueSetter.call(element%2Cvalue)%3AvalueSetter.call(element%2Cvalue)%7D%2CputText(s)%7Bconst%20node%3Ddocument.getElementById(this.inputId)%3Bthis.setNativeValue(node%2Cs)%2Cthis.dispatch(node%2C%22change%22)%7D%2Csend()%7Bdocument.querySelector(%22button%5Btype%3Dsubmit%5D%22).click()%7D%2Csleep%3Asecond%3D%3Enew%20Promise(wake%3D%3EsetTimeout(wake%2C1e3*second))%2CgetLastMessage()%7Bconst%20list%3Ddocument.querySelectorAll(this.messageSelector)%3Breturn%20list%5Blist.length-1%5D%7D%2Casync%20waitRoll()%7Bconst%20lastOrigin%3Dthis.getLastMessage()%3Bfor(%3B%3B)%7Bawait%20this.sleep(1)%3Bconst%20last%3Dthis.getLastMessage()%3Bif(last!%3DlastOrigin%26%26this.checkFormat(last.textContent))return%20last%7D%7D%2CparseDiceBracket(node)%7Bconst%20text%3Dnode.querySelector(this.diceResultSelector).textContent%2Cscan%3Dtext.match(%2F%5C(%5B%5Cd%2C%2B%5C%5B%5C%5D%5C-%5D%2B%5C)%2Fg)%3Breturn%20scan%3Fscan.map(s%3D%3Es.replace(%2F%5C%5B.*%5C%5D%2F%2C%22%22)).map(s%3D%3Eeval(s))%3Anull%7D%2CnormalizeLine(text)%7Bconst%20line%3Dtext.split(%22%5Cn%22).map(s%3D%3Es.trim())%3Blet%20hide%3D%22%22%3Bif(line%5Bline.length-1%5D.match(%22%23hide%22)%26%26(hide%3D%22S%22)%2Cline%5B0%5D.match(%22%20%22))%7Bconst%20diceCode%3Dline%5B0%5D.split(%2F%5Cs%2B%2F).map(d%3D%3E%60(%24%7Bd%7D)%60).join(%22%2B%22)%3Bline.unshift(hide%2BdiceCode)%7Dreturn%20line%7D%2ChandleError()%7Balert(%22format%20wrong%5Cn%22%2Bthis.helpText)%7D%2Casync%20run()%7Bconst%20text%3Dthis.getText().trim()%3Bif(!text)throw%20new%20Error(%22empty%20input%22)%3Bif(!this.checkFormat(text))throw%20new%20Error(%22format%20wrong%22)%3Bconst%20line%3Dthis.normalizeLine(text)%2CunitList%3Dline%5B2%5D.split(%2F%5Cs%2B%2F).map(u%3D%3E%5Bu%5D)%3Bthis.putText(line.join(%22%5Cn%22)%2B%22%5Cn%22)%2Cthis.send()%3Bconst%20roll%3Dawait%20this.waitRoll()%2CdiceResult%3Dthis.parseDiceBracket(roll)%3BunitList.forEach((a%2Ci)%3D%3Ea.push(diceResult%5Bi%5D))%2CunitList.sort((x%2Cy)%3D%3Ey%5B1%5D-x%5B1%5D)%2Cthis.putText(unitList.map((%5Bn%2Cv%5D)%3D%3E%60%24%7Bn%7D(%24%7Bn.match(%22%23S%22)%3F%22%23%22%3Av%7D)%60).join(%22%20%3E%20%22)%2B%22%5Cn%22%2Bline.slice(3%2C-1).join(%22%5Cn%22))%7D%2CaddButton()%7Bconst%20b%3Ddocument.createElement(%22button%22)%3Bb.type%3D%22button%22%2Cb.textContent%3D%22msrt%22%2Cb.className%3D%22MuiButtonBase-root%20MuiButton-root%20MuiButton-text%20MuiButton-textSizeSmall%20MuiButton-sizeSmall%22%2Cb.onclick%3D(()%3D%3Ethis.run().catch(error%3D%3E%7Balert(String(error))%2Cthis.handleError()%7D))%2Cdocument.querySelector(%22button%5Btype%3Dsubmit%5D%22).parentNode.appendChild(b)%7D%7D%3Bdicer.init()%3B%7D()

[google search unredirect]: google-search-unredirect.user.js
[google search unredirect android firefox]: google-search-unredirect-android-firefox.user.js
[facebook notify]: facebook-notify.user.js
[happy html keyboard player]: happy-html-keyboard-player.user.js
[mastodon narrow 2 columns basic]: mastodon-narrow-2-columns-basic.user.css
[tg note]: data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxoZWFkPgo8bWV0YSBjaGFyc2V0PSJVVEYtOCI+Cjx0aXRsZT5ub3RlIHRlbXBsYXRlIC0gZ2hvbGs8L3RpdGxlPgo8bWV0YSBwcm9wZXJ0eT0iZ2hvbGs6Y2l0ZSIgY29udGVudD0iaHR0cHM6Ly9naG9say5naXRodWIuaW8vYm9va21hcmtsZXQvdGctbm90ZS5odG1sIj4KPC9oZWFkPgo8Ym9keT4KPG1haW4gY29udGVudGVkaXRhYmxlPSJ0cnVlIgpvbnBhc3RlPSJoYW5kbGVQYXN0ZShldmVudCkiCj48cD5bcF08L3A+CjxwcmU+W3ByZV08L3ByZT4KPC9tYWluPgoKPGFzaWRlIGlkPSJjb250cm9sLXBhbmUiPgo8bGFiZWw+PGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkCm9uY2hhbmdlPSJjb250ZW50RWRpdGFibGVUb2dnbGUuY2FsbCh0aGlzKSI+CnRvZ2dsZSBjb250ZW50IGVkaXRhYmxlPC9sYWJlbD4KPGxhYmVsPjxpbnB1dCB0eXBlPSJjaGVja2JveCIgb25jaGFuZ2U9Imh0bWxUb2dnbGUuY2FsbCh0aGlzKSI+CnNob3cgaHRtbDwvbGFiZWw+CjxsYWJlbD48aW5wdXQgdHlwZT0iY2hlY2tib3giCm9uY2hhbmdlPSJrZWVwTGluZUJyZWFrVG9nZ2xlLmNhbGwodGhpcykiPgprZWVwIGxpbmUgYnJlYWs8L2xhYmVsPgoKPGxhYmVsPjxpbnB1dCB0eXBlPSJjaGVja2JveCIgY2hlY2tlZApuYW1lPSJwYXN0ZS1zbWFydCI+CnNtYXJ0IGVzY2FwZSBodG1sIHNwZWNpYWwgY2hhcmFjdGVycyBpbiBodG1sIHNvdXJjZSBjb2RlIG1vZGU8L2xhYmVsPgoKPGxhYmVsPjxpbnB1dCB0eXBlPSJjaGVja2JveCIgbmFtZT0icGFzdGUtaHRtbCI+CnBhc3RlIGh0bWwgaW4gaHRtbCBzb3VyY2UgY29kZSBtb2RlPC9sYWJlbD4KCjxsYWJlbD5jaXRlIHVybDoKPGlucHV0IHR5cGU9InVybCIgcGxhY2Vob2xkZXI9ImNpdGUgdXJsIgpvbmlucHV0PSJjaXRlVXJsVXBkYXRlLmNhbGwodGhpcykiPgo8L2xhYmVsPgoKPGJ1dHRvbiBvbmNsaWNrPSJpbWFnZUFkZCgpIj5hZGQgaW1hZ2U8L2J1dHRvbj4KPGJ1dHRvbiBvbmNsaWNrPSJkaWdlc3RDaGVja1N1bVNldCgpIj5zaGEyNTY8L2J1dHRvbj4KPC9hc2lkZT4KCjxzdHlsZSBjb250ZW50ZWRpdGFibGU9InRydWUiCj46cm9vdCB7CiAgLyogbGludXgsIG1hYywgKiwgbGludXgsIHdpbmRvd3MsIHdpbmRvd3MsICogKi8KICAtLW1vbm86ICJMaWJlcmF0aW9uIE1vbm8iLCBNb25hY28sICJEZWphVnUgU2FucyBNb25vIiwgIkFub255bW91cyBQcm8iLCBjb25zb2xhcywgY2FzY2FkaWEsIG1vbm9zcGFjZTsKfQpwcmUsIGNvZGUgewogIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTsKfQpib2R5ID4gc3R5bGUsIGJvZHkgPiBzY3JpcHQgewogIGRpc3BsYXk6IGJsb2NrOwogIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsKICBjb2xvcjogZ3JheTsKICBtYXJnaW46IDFleDsKICBwYWRkaW5nOiAxZXg7CiAgYm9yZGVyOiBzb2xpZCAxcHg7CiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pOwp9CnRleHRhcmVhLmh0bWwtY29kZSB7CiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pOwogIHdpZHRoOiAxMDAlOwogIGhlaWdodDogMTBlbTsKICBkaXNwbGF5OiBibG9jazsKICBvdmVyZmxvdzogYXV0bzsKICBvdXRsaW5lOiBub25lOwogIGJvcmRlcjogbm9uZTsKfQptYWluLmtlZXAtbGluZSA+IHAsIG1haW4gLmtlZXAtbGluZSB7CiAgd2hpdGUtc3BhY2U6IHByZS13cmFwOwp9Ci5oaWRlIHsKICBkaXNwbGF5OiBub25lOwp9CmltZyB7CiAgZGlzcGxheTogYmxvY2s7CiAgbWF4LXdpZHRoOiAxMDAlOwp9CmJsb2NrcXVvdGUgewogIGJvcmRlcjogc29saWQgI0NDQyAxcHg7CiAgYm9yZGVyLWxlZnQ6IHNvbGlkICNDQ0MgMWV4OwogIHBhZGRpbmc6IDAgMWVtOwogIG1hcmdpbi1sZWZ0OiAxZXg7Cn0KbGFiZWwgewogIGRpc3BsYXk6IGZsZXg7Cn0KbWFpbltjb250ZW50ZWRpdGFibGU9dHJ1ZV0gPiAqOm5vdChocix0YWJsZSx1bCxvbCxibG9ja3F1b3RlKTo6YmVmb3JlIHsKICBjb2xvcjogZ3JheTsKICBjb250ZW50OiAnPHg+JzsKICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7Cn0KbWFpbltjb250ZW50ZWRpdGFibGU9dHJ1ZV0gPiAqOm5vdChocix0YWJsZSx1bCxvbCxibG9ja3F1b3RlKTo6YWZ0ZXIgewogIGNvbG9yOiBncmF5OwogIGNvbnRlbnQ6ICc8Lz4nOwogIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNTByZW0pIHsKICAjY29udHJvbC1wYW5lIHsKICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgIGJvdHRvbTogMDsKICAgIHJpZ2h0OiAwOwogICAgYmFja2dyb3VuZDogd2hpdGU7CiAgICBib3JkZXI6IHNvbGlkIDFweDsKICAgIHBhZGRpbmc6IDFlbTsKICB9CiAgYm9keSB7CiAgICBwYWRkaW5nLWJvdHRvbTogMjBlbTsKICB9Cn0KI2NvbnRyb2wtcGFuZSA+IGxhYmVsID4gaW5wdXRbdHlwZT10ZXh0XSwKI2NvbnRyb2wtcGFuZSA+IGxhYmVsID4gaW5wdXRbdHlwZT11cmxdIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXg6IDE7CiAgbWFyZ2luLWxlZnQ6IDFleDsKICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7CiAgZm9udC12YXJpYW50LW51bWVyaWM6IHNsYXNoZWQtemVybzsKfQptYWluLCAjY29udHJvbC1wYW5lIHsKICBib3JkZXI6IHNvbGlkIDFweDsKICBtYXJnaW46IDFleDsKICBwYWRkaW5nOiAxZXg7Cn0KdGFibGUsIHRoLCB0ZCB7CiAgYm9yZGVyOiBzb2xpZCAxcHg7Cn0KPC9zdHlsZT4KPHNjcmlwdCBjb250ZW50ZWRpdGFibGU9InRydWUiCj52YXIgJGQgPSBkb2N1bWVudCwgJGIgPSAkZC5ib2R5CgpmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KSB7CiAgICByZXR1cm4gKGNvbnRleHQgfHwgJGQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpCn0KZnVuY3Rpb24gJCQoc2VsZWN0b3IsIGNvbnRleHQpIHsKICAgIHJldHVybiBBcnJheS5mcm9tKChjb250ZXh0IHx8ICRkKS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkKfQoKZnVuY3Rpb24gJGNyZWF0ZSh0YWcsIHBhcmVudCkgewogICAgY29uc3QgZWxtID0gJGQuY3JlYXRlRWxlbWVudCh0YWcpCiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxtKQogICAgcmV0dXJuIGVsbQp9CmZ1bmN0aW9uIGNvbnRlbnRFZGl0YWJsZVRvZ2dsZSgpIHsKICAkKCdtYWluJykuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmNoZWNrZWQpCiAgaWYgKHRoaXMuY2hlY2tlZCkgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJykKICBlbHNlIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJykKfQpmdW5jdGlvbiBrZWVwTGluZUJyZWFrVG9nZ2xlKCkgewogIGlmICh0aGlzLmNoZWNrZWQpIHsKICAgICQoJ21haW4nKS5jbGFzc0xpc3QuYWRkKCdrZWVwLWxpbmUnKQogICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJykKICB9CiAgZWxzZSB7CiAgICAkKCdtYWluJykuY2xhc3NMaXN0LnJlbW92ZSgna2VlcC1saW5lJykKICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJykKICB9Cn0KCmZ1bmN0aW9uIGh0bWxUb2dnbGUoKSB7CiAgdG9nZ2xlID0gdGhpcy5jaGVja2VkCiAgY29uc3QgdG9IdG1sID0gdG9nZ2xlCiAgY29uc3QgbWFpbiA9ICQoJ21haW4nKQogIGlmICh0b0h0bWwpIHsKICAgIC8vIFRPRE86IGluZGVudCBodG1sCiAgICBjb25zdCBodG1sID0gbWFpbi5pbm5lckhUTUwKICAgIG1haW4udGV4dENvbnRlbnQgPSAnJwogICAgY29uc3QgYmxvY2sgPSAkY3JlYXRlKCd0ZXh0YXJlYScsIG1haW4pCiAgICBibG9jay50ZXh0Q29udGVudCA9IGh0bWwKICAgIGJsb2NrLmNsYXNzTmFtZSA9ICdodG1sLWNvZGUnCiAgICBibG9jay5vbmlucHV0ID0gZSA9PiB7CiAgICAgIGNvbnN0IG5vZGUgPSBlLnRhcmdldAogICAgICBpZiAobm9kZS5zY3JvbGxIZWlnaHQgPiBub2RlLm9mZnNldEhlaWdodCkgewogICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQgKyAncHgnCiAgICAgIH0KICAgIH0KICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZSA9PiB7CiAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLnR5cGVzLmluZGV4T2YoJ0ZpbGVzJykgPT0gLTEpIHJldHVybgogICAgICAgIGUucHJldmVudERlZmF1bHQoKQogICAgfSkKICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IHsKICAgICAgICBjb25zdCBkID0gZS5kYXRhVHJhbnNmZXIKICAgICAgICBjb25zdCBmaWxlcyA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpCiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PSAwKSByZXR1cm4KICAgICAgICBlLnByZXZlbnREZWZhdWx0KCkKICAgICAgICBjb25zdCB0YSA9IGUudGFyZ2V0CiAgICAgICAgZm9yIChjb25zdCBmIG9mIGZpbGVzKSB7CiAgICAgICAgY29uc3QgYSA9ICRjcmVhdGUoJ2EnKQogICAgICAgIGEuaHJlZiA9IGEudGV4dENvbnRlbnQgPSBmLm5hbWUKICAgICAgICBpbnNlcnRPbkN1cnNvcihhLm91dGVySFRNTCArICdcbicsIHRhKQogICAgICAgIH0KICAgIH0pCiAgICBibG9jay5vbmlucHV0KHt0YXJnZXQ6IGJsb2NrfSkKICAgIG1haW4ucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKQogIH0KICBlbHNlIHsKICAgIGNvbnN0IGh0bWwgPSAkKCdtYWluPnRleHRhcmVhJykudmFsdWUKICAgIG1haW4uaW5uZXJIVE1MID0gaHRtbAogICAgY29udGVudEVkaXRhYmxlVG9nZ2xlLmNhbGwoCiAgICAgICQoJ2lucHV0W29uY2hhbmdlXj1jb250ZW50RWRpdGFibGVUb2dnbGVdJykKICAgICkKICB9Cn0KZnVuY3Rpb24gaW1hZ2VBZGQoKSB7CiAgY29uc3Qgc3cgPSAkKCdpbnB1dFtvbmNoYW5nZV49aHRtbFRvZ2dsZV0nKQogIGlmICghc3cuY2hlY2tlZCkgewogICAgc3cuY2hlY2tlZCA9IHRydWUKICAgIHN3LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSkKICB9CiAgY29uc3QgYmxvY2sgPSAkKCdtYWluPnRleHRhcmVhJykKICBibG9jay52YWx1ZSArPSAnXG48aW1nIHNyYz0iIj5cbicKICBibG9jay5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSkKICBibG9jay5mb2N1cygpCiAgYmxvY2suc2VsZWN0aW9uU3RhcnQgPSBibG9jay5zZWxlY3Rpb25FbmQgPSBibG9jay52YWx1ZS5sZW5ndGggLSAzCn0KCmZ1bmN0aW9uIGhhbmRsZVBhc3RlKGUpIHsKICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJ21haW4+dGV4dGFyZWEuaHRtbC1jb2RlOm9ubHktY2hpbGQnKSkgcmV0dXJuCiAgY29uc3QgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YQogIGNvbnN0IHBhc3RlSHRtbCA9ICQoJ2lucHV0W25hbWU9cGFzdGUtaHRtbF0nKS5jaGVja2VkCiAgaWYgKHBhc3RlSHRtbCAmJiB+ZGF0YS50eXBlcy5pbmRleE9mKCd0ZXh0L2h0bWwnKSkgewogICAgZS5wcmV2ZW50RGVmYXVsdCgpCiAgICBjb25zdCBodG1sID0gZGF0YS5nZXREYXRhKCd0ZXh0L2h0bWwnKQogICAgaW5zZXJ0T25DdXJzb3IoaHRtbCkKICB9CgogIGlmICghJCgnaW5wdXRbbmFtZT1wYXN0ZS1zbWFydF0nKS5jaGVja2VkKSByZXR1cm4KICBjb25zdCB0ZXh0ID0gZGF0YS5nZXREYXRhKCd0ZXh0JykKICBpZiAoL1s8Pl0vLnRlc3QodGV4dCkgfHwgIS9bJiInXS8udGVzdCh0ZXh0KSkgcmV0dXJuCgogIGUucHJldmVudERlZmF1bHQoKQogIGNvbnN0IG5vZGUgPSAkY3JlYXRlKCdzcGFuJykKICBub2RlLnRleHRDb250ZW50ID0gdGV4dAogIGNvbnN0IGVzY2FwZSA9IG5vZGUuaW5uZXJIVE1MCiAgICAucmVwbGFjZSgvIi9nLCAnXHgyNnF1b3Q7JykKICAgIC5yZXBsYWNlKC8nL2csICdceDI2YXBvczsnKQogIGluc2VydE9uQ3Vyc29yKGVzY2FwZSkKfQpmdW5jdGlvbiBpbnNlcnRPbkN1cnNvcih0ZXh0LCBub2RlKSB7CiAgaWYgKCFub2RlKSBub2RlID0gJGQuYWN0aXZlRWxlbWVudAogIG5vZGUuc2V0UmFuZ2VUZXh0KHRleHQsIG5vZGUuc2VsZWN0aW9uU3RhcnQsIG5vZGUuc2VsZWN0aW9uRW5kKQogIG5vZGUuc2VsZWN0aW9uU3RhcnQgPSBub2RlLnNlbGVjdGlvbkVuZCA9CiAgICBub2RlLnNlbGVjdGlvblN0YXJ0ICsgdGV4dC5sZW5ndGgKfQoKZnVuY3Rpb24gaGFuZGxlRW50ZXJOb0JyKGV2ZW50KSB7CiAgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleSAhPSAnRW50ZXInKSByZXR1cm4KICBldmVudC5wcmV2ZW50RGVmYXVsdCgpCiAgaW5zZXJ0T25DdXJzb3JDb250ZW50KCRkLmNyZWF0ZVRleHROb2RlKCdcbicpKQp9CiQkKCdzdHlsZSxzY3JpcHQnKS5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRW50ZXJOb0JyKSkKCmZ1bmN0aW9uIGluc2VydE9uQ3Vyc29yQ29udGVudChub2RlKSB7CiAgY29uc3Qgc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkKICBjb25zdCByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApCiAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKQogIHJhbmdlLmluc2VydE5vZGUobm9kZSkKICByYW5nZS5jb2xsYXBzZSgpCn0KCmZ1bmN0aW9uIGNpdGVVcmxVcGRhdGUoKSB7CiAgY29uc3QgbWV0YSA9ICQoJ21ldGFbcHJvcGVydHk9Imdob2xrOmNpdGUiXScpCiAgbWV0YS5jb250ZW50ID0gdGhpcy52YWx1ZQogIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMudmFsdWUpCn0KYXN5bmMgZnVuY3Rpb24gZGlnZXN0Q2hlY2tTdW1TZXQoKSB7CiAgY29uc3QgaHRtbCA9ICQoJ2h0bWwnKS5vdXRlckhUTUwKICBjb25zdCBzdW0gPSBhd2FpdCBkaWdlc3RDaGVja1N1bShodG1sKQogIGNvbnN0IGhleCA9IGJ1ZmZlclRvSGV4KHN1bSkKICBjb25zdCBmaWVsZCA9ICQoJ2lucHV0W29uaW5wdXRePSJjaXRlVXJsVXBkYXRlIl0nKQogIGZpZWxkLnZhbHVlICs9IGA/c2hhMjU2PSR7aGV4fWAKICBjaXRlVXJsVXBkYXRlLmNhbGwoZmllbGQpCn0KZnVuY3Rpb24gZGlnZXN0Q2hlY2tTdW0odGV4dCkgewogIGNvbnN0IGVuYyA9IG5ldyBUZXh0RW5jb2RlcigpCiAgY29uc3QgZGF0YSA9IGVuYy5lbmNvZGUodGV4dCkKICByZXR1cm4gY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBkYXRhKQp9CmZ1bmN0aW9uIGJ1ZmZlclRvSGV4KGJ1ZmZlcikgewogIGNvbnN0IHU4ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKQogIHJldHVybiBBcnJheS5mcm9tKHU4KQogICAgLm1hcCh1ID0+ICgnMCcgKyB1LnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpLnRvVXBwZXJDYXNlKCkpCiAgICAuam9pbignJykKfQokJCgnaW5wdXQnKS5mb3JFYWNoKGUgPT4gewogIHN3aXRjaCAoZS50eXBlKSB7CiAgICBjYXNlICdjaGVja2JveCc6CiAgICBlLmNoZWNrZWQgPSBlLmRlZmF1bHRDaGVja2VkCiAgICBicmVhawogICAgCiAgICBjYXNlICd1cmwnOgogICAgY2FzZSAndGV4dCc6CiAgICBlLnZhbHVlID0gZS5kZWZhdWx0VmFsdWUKICB9Cn0pCjwvc2NyaXB0Pgo8L2JvZHk+CjwvaHRtbD4K
[wheel on input number]: wheel-on-input-number.user.js

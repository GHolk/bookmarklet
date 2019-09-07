<meta charset="UTF-8">

<a href="//gholk.github.io/bookmarklet">
  get bookmarklet in this page
</a>

## 小書籤安裝方法
長按標題的小書籤超連結，拖曳到書籤列即安裝完成；
點擊書籤列中的小書籤即可在當下頁面中執行。

![drag bookmarklet vedio](bookmarklet-add.gif)

<h2>
<a title="play youtube video in clean browser window"
   href='javascript:void function () {const urlToPlayer={};urlToPlayer.youtube=function(location){const scan=location.search.match(/[&\/\?]v=([^&]*)/);const id=scan[1];return"https://youtube.com/embed/"+id};function openCleanWindow(url){window.open(url,"clean youtube player","resizable")}function createButton(){const menuId="menu-container";const button=document.createElement("button");button.textContent="clean window";button.onclick=(()=>{const url=urlToPlayer.youtube(location);openCleanWindow(url)});document.getElementById(menuId).appendChild(button)}openCleanWindow(urlToPlayer.youtube(location));}()'>
   youtube clean player
</a>
</h2>

play youtube video in clean window,
without locationbar, menubar, toolbar, statusbar.


<h2>
  <a href='javascript:void function () {const map={};map.set=function(alias,url,name){this[alias]={url:url,name:name}};map.createForm=function(key){const form=document.createElement("form");const search=this[key];form.action=search.url;form.target="_blank";const input=document.createElement("input");input.name=search.name;form.appendChild(input);return form};map.search=function(key,string){const form=this.createForm(key);form.querySelector("input").value=string;document.documentElement.appendChild(form);form.submit()};map.set("pttpedia","http://zh.pttpedia.wikia.com/wiki/特殊:搜索","query");function promptSearch(string){if(!string)string=prompt("custom search");const scan=string.match(/([^\s]+)\s(.*)$/);const key=scan[1];const value=scan[2];map.search(key,value)}promptSearch();}()'>
  custom search
  </a>
</h2>

<h2>
<a title="jupmer translator"
href='javascript:void function () {var jumperTranslator={urlScheme:null,decode:decodeURIComponent,translate:function(url){const scan;if(scan=url.match(this.urlScheme)){return this.decode(scan[1])}else return null},modifyAnchor:function(anchor){const newUrl=this.translate(anchor.href);if(typeof newUrl=="string")anchor.href=newUrl;return anchor},modifyAllAnchor:function(){for(const anchor of document.querySelectorAll("a")){this.modifyAnchor(anchor)}},promptUrlScheme:function(){const urlRegexpString=prompt("url scheme regexp");this.urlScheme=new RegExp(urlRegexpString)}};jumperTranslator.promptUrlScheme();}()'>
redirector anchor url translator</a>
</h2>

## [generate url QR code][url qrcode]
this bookmarklet will generate QR code image of current url,
and open in the new tab.

[url qrcode]: javascript:void%20function%20()%20%7Bconst%20url=window.location.href;const%20qrcodeUrl=%60http://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=$%7Burl%7D%60;window.open(qrcodeUrl);%7D() "generate QR code image of current url"

## [facebook video rotate]
逆時針方向旋轉方向錯誤的 facebook 浮動影片視窗 90° 。

## [enable select contextmenu]
取消網頁中禁用右鍵與防止選取文字的功能。
有些網頁會禁止反白選取文字，或是禁止右鍵，
這個小書籤可以強制允許右鍵與選取文字，
但不處理禁用 f12 或 ctrl-c 的網頁。

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

[moodle.ncku]: https://moodle.ncku.edu.tw/
[moodle backup]: javascript:void%20function%20()%20%7Bclass%20MoodleCrawler%7Bconstructor()%7Bthis.sleepInterval=3;this.domParser=new%20DOMParser;this.textDecoder=new%20TextDecoder(%22UTF-8%22)%7Dasync%20fetch(url)%7Breturn%20await%20fetch(url,%7Bcredentials:%22same-origin%22%7D)%7Dasync%20$fetch(url)%7Bconst%20response=await%20this.fetch(url);const%20html=await%20response.text();const%20dom=this.domParser.parseFromString(html,%22text/html%22);return%20dom%7D*extractAllCourseId(document)%7Bconst%20anchorList=document.querySelectorAll(%22.block_course_list%20a%22);for(const%20anchor%20of%20anchorList)%7Bconst%20url=new%20URL(anchor.href);yield%20url.searchParams.get(%22id%22)%7D%7DextractTitle(document)%7Breturn%20document.getElementById(%22logobox%22).textContent.trim()%7D*extractFolder(url)%7Bconst%20folder=this.$fetch(url);const%20fileList=folder.then(dom=%3E%7Breturn%20dom.querySelectorAll(%22.fp-filename-icon%20a%22)%7D);let%20finish=false;let%20index=0;while(!finish)%7Byield%20fileList.then(anchorList=%3E%7Blet%20anchor=null;if(index%3CanchorList.length)%7Banchor=anchorList%5Bindex%5D;index++%7Dif(index%3E=anchorList.length)finish=true;return%7Burl:anchor.href%7D%7D)%7D%7D*extractByType(tr)%7Bconst%20url=tr.querySelector(%22a%22).href;let%20description=tr.querySelector(%22td:last-child%22).textContent;description=description.trim();if(url.includes(%22/mod/resource/view.php%22))%7Byield%7Burl:url,description:description%7D%7Delse%20if(url.includes(%22/mod/folder/view.php%22))%7Byield*this.extractFolder(url)%7Delse%20if(url.includes(%22/mod/page/view.php%22)%7C%7Curl.includes(%22/mod/url/view.php%22))%7Byield%7Burl:url,description:description%7D%7Delse%20console.error(%60unknown%20file%20type:%20$%7Burl%7D%60)%7D*extractAllFile(document)%7Bconst%20tableRowNonEmptySelector=%22#region-main-box%20tr%5Bclass%5D%22;for(const%20tr%20of%20document.querySelectorAll(tableRowNonEmptySelector))%7Byield*this.extractByType(tr)%7D%7Dasync%20$fetchCourseResource(id)%7Bconst%20url=%60https://moodle.ncku.edu.tw/course/resources.php?id=$%7Bid%7D%60;return%20await%20this.$fetch(url)%7Dsleep(second=this.sleepInterval)%7Breturn%20new%20Promise(wake=%3EsetTimeout(wake,second*1e3))%7DgetLastCourseId()%7Breturn%20localStorage.getItem(%22moodle-backup-current-id%22)%7DsetLastCourseId(id)%7BlocalStorage.setItem(%22moodle-backup-current-id%22,id)%7DremoveLastCourseId()%7BlocalStorage.removeItem(%22moodle-backup-current-id%22)%7Dasync%20run()%7Bthis.runInit();let%20lastCourseId=this.getLastCourseId();let%20alreadyDownload;if(lastCourseId)alreadyDownload=true;else%20alreadyDownload=false;for(const%20id%20of%20this.extractAllCourseId(document))%7Bif(alreadyDownload)%7Bif(lastCourseId==id)alreadyDownload=false;else%20continue%7Dthis.setLastCourseId(id);const%20resource=await%20this.$fetchCourseResource(id);const%20title=this.extractTitle(resource);await%20this.sleep();for(let%20file%20of%20this.extractAllFile(resource))%7Bif(file&&file.then)file=await%20file;if(file)%7Bthis.download(file.url);await%20this.sleep()%7D%7D%7Dthis.removeLastCourseId();this.runDestruct()%7DrunInit()%7Bthis.downloadInit();this.preventExitInit()%7DrunDestruct()%7Bthis.downloadDestruct();this.preventExitDestruct()%7DisFirefox()%7Breturn%20navigator.userAgent.match(/firefox/i)%7DdownloadInit()%7Bconst%20anchor=document.createElement(%22a%22);if(!this.isFirefox())anchor.setAttribute(%22download%22,%22%22);anchor.setAttribute(%22target%22,%22_blank%22);document.body.appendChild(anchor);this.downloadNode=anchor%7Ddownload(url)%7Bthis.downloadNode.href=url;this.downloadNode.click()%7DdownloadDestruct()%7Bthis.downloadNode.remove();this.downloadNode=null%7DpreventExitInit()%7Bwindow.onbeforeunload=this.preventExit%7DpreventExit(closeEvent)%7Breturn%22moodle%20backup%20is%20not%20finish,%20do%20you%20want%20to%20exit?%22%7DpreventExitDestruct()%7Bwindow.onbeforeunload=null%7Dasync%20bookmarkletPrompt()%7Blet%20second=prompt(%22download%20file%20interval%20second:%22);this.assert(typeof%20second==%22string%22,%22user%20abrupt%22);second=Number(second);this.assert(second%3E0,%22second%20should%20be%20positive%22);this.sleepInterval=Number(second);await%20this.run();alert(%22download%20finish%22)%7Dassert(test,errorMessage,CustomError=Error)%7Bif(!test)throw%20new%20CustomError(errorMessage)%7D%7Dclass%20MoodleCrawlerDebug%20extends%20MoodleCrawler%7Bconstructor()%7Bsuper();this.sleepInterval=.5%7DextractTitle(document)%7Bconst%20title=super.extractTitle(document);this.currentCourseTitle=title%7Ddownload(url)%7Bconsole.log(this.currentCourseTitle,url)%7D%7Dconst%20moodleCrawler=new%20MoodleCrawler;moodleCrawler.bookmarkletPrompt();%7D() "download all course file from moodle.ncku"

[facebook video rotate]: javascript:void%20function%20()%20%7Bdocument.querySelectorAll(%22div%5Brole=presentation%5D%22).forEach(present=%3E%7Bconst%20container=present.parentNode;if(container.querySelector(%22video%22))%7Bconsole.log(%22get%20video%22,container);const%20ratioOrigin=getRotateRatio(container.style.transform);const%20ratioNext=ratioOrigin-.25;container.style.transform=%60rotate($%7BratioNext%7Dturn)%60%7D%7D);function%20getRotateRatio(cssString)%7Bconst%20scan=cssString.match(/rotate%5C((-?%5Cd+(%5C.%5Cd+)?)turn%5C)/);if(scan)%7Bconst%20ratio=Number(scan%5B1%5D);return%20ratio%7Delse%20return%200%7D%7D() "rotate facebook float video window 90°"

[enable select contextmenu]: javascript:void%20function%20()%20%7Bfunction%20stopEvent(event)%7Bevent.stopImmediatePropagation()%7Dconst%20registFirst=%7Bcapture:true%7D;window.addEventListener(%22contextmenu%22,stopEvent,registFirst);document.addEventListener(%22mousedown%22,stopEvent,registFirst);%7D() "force enable right click (context menu) and text selection"

[hackmd scroll flip]: javascript:void%20function%20()%20%7Bif(document.querySelector(%22.reveal%20.slides%22))%7Bconst%20option=%7B%7D;option.pageup=%7BcharCode:0,keyCode:33,altKey:!1,ctrlKey:!1,shiftKey:!1,metaKey:!1,repeat:!1,isComposing:!1,key:%22PageUp%22,code:%22PageUp%22,type:%22keydown%22,composed:!0%7D,option.pagedown=%7BcharCode:0,keyCode:34,altKey:!1,ctrlKey:!1,shiftKey:!1,metaKey:!1,repeat:!1,isComposing:!1,key:%22PageDown%22,code:%22PageDown%22,type:%22keydown%22,composed:!0%7D,window.addEventListener(%22wheel%22,function(scroll)%7Bscroll.preventDefault();let%20keyOption;keyOption=scroll.deltaY%3E0?option.pagedown:option.pageup;const%20key=new%20KeyboardEvent(%22keydown%22,keyOption);document.dispatchEvent(key)%7D,%7Bpassive:!1%7D)%7D%7D() "make mouse scroll flip page in hackmd slide mode"
[hackmd scroll flip user.js]: https://gist.github.com/GHolk/4a2edcf9cf3f956ec7eb7d7823348b6c/raw/1c71ecd469701cfadf149d9687a785c5294191ef/hackmd-scroll-flip.user.js

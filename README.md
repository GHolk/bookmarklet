<meta charset="UTF-8">

<a href="//gholk.github.io/bookmarklet">
  get bookmarklet in this page
</a>

## 小書籤安裝方法
長按標題的小書籤超連結，拖曳到書籤列即安裝完成；
點擊書籤列中的小書籤即可在當下頁面中執行。

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

## [moodle backup]
在 [成功大學的 moodle][moodle.ncku] 首頁登入後，
點擊該書籤，能自動下載所有課程中教授上傳的講義。
畢竟 moodle 上的資料不會永遠留著，
畢業後還是下載到自己電腦裡比較安心。

事前建議先把瀏覽器對 pdf 檔的動作設成儲存而非開啟，
firefox: *偏好設定 > 應用程式 > 搜尋 pdf > 動作 > 儲存檔案* ，
chromium: *Settings > Privacy and security >
Content settings > PDF documents > Download* 。
另外 chromium 及 firefox 都建議設定預設下載的資料夾。
有時一些檔案格式會無法直接下載，變成在新分頁開啟，
只能再右鍵另存新檔。

點擊書籤後會先彈出對話框要你輸入幾秒下載一個檔案，
建議是 1-3 秒，不要對計中的伺服器造成太大負擔；
輸入後就會開始一一下載。
如果要中斷，直接關掉分頁就好了；
下次再執行時會從上次下載到一半的課程繼續下載。

[moodle.ncku]: https://moodle.ncku.edu.tw/
[moodle backup]: javascript: void%20function%20()%20%7Bclass%20MoodleCrawler%7Bconstructor()%7Bthis.sleepInterval=3;this.domParser=new%20DOMParser;this.textDecoder=new%20TextDecoder(%22UTF-8%22)%7Dasync%20fetch(url)%7Breturn%20await%20fetch(url,%7Bcredentials:%22same-origin%22%7D)%7Dasync%20$fetch(url)%7Bconst%20response=await%20this.fetch(url);const%20html=await%20response.text();const%20dom=this.domParser.parseFromString(html,%22text/html%22);return%20dom%7D*extractAllCourseId(document)%7Bconst%20anchorList=document.querySelectorAll(%22.block_course_list%20a%22);for(const%20anchor%20of%20anchorList)%7Bconst%20url=new%20URL(anchor.href);yield%20url.searchParams.get(%22id%22)%7D%7DextractTitle(document)%7Breturn%20document.getElementById(%22logobox%22).textContent%7D*extractAllFile(document)%7Bconst%20tableRowNonEmptySelector=%22#region-main-box%20tr%5Bclass%5D%22;for(const%20tr%20of%20document.querySelectorAll(tableRowNonEmptySelector))%7Bconst%20url=tr.querySelector(%22a%22).href;let%20description=tr.querySelector(%22td:last-child%22).textContent;description=description.trim();yield%7Burl:url,description:description%7D%7D%7Dasync%20$fetchCourseResource(id)%7Bconst%20url=%60https://moodle.ncku.edu.tw/course/resources.php?id=$%7Bid%7D%60;return%20await%20this.$fetch(url)%7Dsleep(second=this.sleepInterval)%7Breturn%20new%20Promise(wake=%3EsetTimeout(wake,second*1e3))%7DgetLastCourseId()%7Breturn%20localStorage.getItem(%22moodle-backup-current-id%22)%7DsetLastCourseId(id)%7BlocalStorage.setItem(%22moodle-backup-current-id%22,id)%7DremoveLastCourseId()%7BlocalStorage.removeItem(%22moodle-backup-current-id%22)%7Dasync%20run()%7Bthis.runInit();let%20lastCourseId=this.getLastCourseId();let%20alreadyDownload;if(lastCourseId)alreadyDownload=true;else%20alreadyDownload=false;for(const%20id%20of%20this.extractAllCourseId(document))%7Bif(alreadyDownload)%7Bif(lastCourseId==id)alreadyDownload=false;else%20continue%7Dthis.setLastCourseId(id);const%20resource=await%20this.$fetchCourseResource(id);const%20title=this.extractTitle(resource);await%20this.sleep();for(const%20file%20of%20this.extractAllFile(resource))%7Bthis.download(file.url);await%20this.sleep()%7D%7Dthis.removeLastCourseId();this.runDestruct()%7DrunInit()%7Bthis.downloadInit();this.preventExitInit()%7DrunDestruct()%7Bthis.downloadDestruct();this.preventExitDestruct()%7DdownloadInit()%7Bconst%20anchor=document.createElement(%22a%22);anchor.setAttribute(%22download%22,%22%22);anchor.setAttribute(%22target%22,%22_blank%22);document.body.appendChild(anchor);this.downloadNode=anchor%7Ddownload(url)%7Bthis.downloadNode.href=url;this.downloadNode.click()%7DdownloadDestruct()%7Bthis.downloadNode.remove();this.downloadNode=null%7DpreventExitInit()%7Bwindow.onbeforeunload=this.preventExit%7DpreventExit(closeEvent)%7Breturn%22moodle%20backup%20is%20not%20finish,%20do%20you%20want%20to%20exit?%22%7DpreventExitDestruct()%7Bwindow.onbeforeunload=null%7Dasync%20bookmarkletPrompt()%7Blet%20second=prompt(%22download%20file%20interval%20second:%22);this.assert(typeof%20second==%22string%22,%22user%20abrupt%22);second=Number(second);this.assert(second%3E0,%22second%20should%20be%20positive%22);this.sleepInterval=Number(second);await%20this.run();alert(%22download%20finish%22)%7Dassert(test,errorMessage,CustomError=Error)%7Bif(!test)throw%20new%20CustomError(errorMessage)%7D%7Dconst%20moodleCrawler=new%20MoodleCrawler;moodleCrawler.bookmarkletPrompt();%7D() "download all course file from moodle.ncku"

<meta charset="UTF-8">

<a href="//gholk.github.io/bookmarklet">
  get bookmarklet in this page
</a>

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

# [moodle backup]
在 [成功大學的 moodle][moodle.ncku] 首頁登入後，
點擊該書籤，能自動下載所有課程中教授上傳的講義。
畢竟 moodle 上的資料不會永遠留著，
畢業後還是下載到自己電腦裡比較安心。

實測在 firefox 中會對每個檔案彈出下載視窗，
而 chrome 若是有設定預設的下載資料夾，
就會直接下載，不會彈出視窗。
點擊書籤後會先彈出對話框要你輸入幾秒下載一個檔案，
建議是 1-3 秒，輸入後就會開始下載。

[moodle.ncku]: https://moodle.ncku.edu.tw/
[moodle backup]: javascript:void%20function%20()%20%7Bclass%20MoodleCrawler%7Bconstructor()%7Bthis.sleepInterval=3;this.domParser=new%20DOMParser;this.textDecoder=new%20TextDecoder(%22UTF-8%22)%7Dasync%20fetch(url)%7Breturn%20await%20fetch(url,%7Bcredentials:%22same-origin%22%7D)%7Dasync%20$fetch(url)%7Bconst%20response=await%20this.fetch(url);const%20html=await%20response.text();const%20dom=this.domParser.parseFromString(html,%22text/html%22);return%20dom%7D*extractAllCourseId(document)%7Bconst%20anchorList=document.querySelectorAll(%22.block_course_list%20a%22);for(const%20anchor%20of%20anchorList)%7Bconst%20url=new%20URL(anchor.href);yield%20url.searchParams.get(%22id%22)%7D%7DextractTitle(document)%7Breturn%20document.getElementById(%22logobox%22).textContent%7D*extractAllFile(document)%7Bconst%20tableRowNonEmptySelector=%22#region-main-box%20tr%5Bclass%5D%22;for(const%20tr%20of%20document.querySelectorAll(tableRowNonEmptySelector))%7Bconst%20url=tr.querySelector(%22a%22).href;let%20description=tr.querySelector(%22td:last-child%22).textContent;description=description.trim();yield%7Burl:url,description:description%7D%7D%7Dasync%20$fetchCourseResource(id)%7Bconst%20url=%60https://moodle.ncku.edu.tw/course/resources.php?id=$%7Bid%7D%60;return%20await%20this.$fetch(url)%7Dsleep(second=this.sleepInterval)%7Breturn%20new%20Promise(wake=%3EsetTimeout(wake,second*1e3))%7Dasync%20run()%7Bthis.downloadInit();for(const%20id%20of%20this.extractAllCourseId(document))%7Bconst%20resource=await%20this.$fetchCourseResource(id);const%20title=this.extractTitle(resource);for(const%20file%20of%20this.extractAllFile(resource))%7Bthis.downloadBlob(file.url);await%20this.sleep()%7D%7Dthis.downloadDestruct()%7DdownloadInit()%7Bconst%20iframe=document.createElement(%22iframe%22);iframe.name=%22moodle-crawler-download-frame%22;iframe.style.display=%22none%22;document.body.appendChild(iframe);this.downloadFrame=iframe;const%20anchor=document.createElement(%22a%22);anchor.id=%22moodle-crawler-download%22;anchor.setAttribute(%22download%22,%22%22);anchor.target=%22moodle-crawler-download-frame%22;document.body.appendChild(anchor);this.downloadNode=anchor%7Dasync%20downloadBlob(url)%7Bconst%20response=await%20this.fetch(url);const%20disposition=response.headers.get(%22content-disposition%22);let%20filename=disposition.match(/filename=%22(.*)%22/)%5B1%5D;filename=this.binaryStringToUtf8(filename);const%20blob=await%20response.blob();const%20file=new%20File(%5Bblob%5D,filename);const%20blobUrl=URL.createObjectURL(file);this.download(blobUrl,filename);this.sleep().then(()=%3EURL.revokeObjectURL(file))%7DbinaryStringToUtf8(raw)%7Bconst%20u8=this.binaryStringToUint8Array(raw);return%20this.textDecoder.decode(u8)%7DbinaryStringToUint8Array(raw)%7Bconst%20rawLength=raw.length;const%20array=new%20Uint8Array(new%20ArrayBuffer(rawLength));for(let%20i=0;i%3CrawLength;i++)%7Barray%5Bi%5D=raw.charCodeAt(i)%7Dreturn%20array%7DdownloadPopup(url)%7Breturn%20window.open(url)%7Ddownload(url,name)%7Bthis.downloadNode.href=url;this.downloadNode.download=name;this.downloadNode.click()%7DdownloadDestruct()%7Bthis.downloadNode.remove();this.downloadNode=null;this.downloadFrame.remove();this.downloadFrame=null%7DbookmarkletPrompt()%7Bthis.sleepInterval=Number(prompt(%22download%20file%20interval%20second:%22));this.run()%7D%7Dconst%20moodleCrawler=new%20MoodleCrawler;moodleCrawler.bookmarkletPrompt();%7D()

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

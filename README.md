
<h2>
<a title="play youtube video in clean browser window"
   href='javascript:void function () {const urlToPlayer={};urlToPlayer.youtube=function(location){const scan=location.search.match(/[&\/\?]v=([^&]*)/);const id=scan[1];return"https://youtube.com/embed/"+id};function openCleanWindow(url){window.open(url,"clean youtube player","resizable")}function createButton(){const menuId="menu-container";const button=document.createElement("button");button.textContent="clean window";button.onclick=(()=>{const url=urlToPlayer.youtube(location);openCleanWindow(url)});document.getElementById(menuId).appendChild(button)}openCleanWindow(urlToPlayer.youtube(location));}()'>
   youtube clean player
</a>
</h2>

play youtube video in clean window,
without locationbar, menubar, toolbar, statusbar.


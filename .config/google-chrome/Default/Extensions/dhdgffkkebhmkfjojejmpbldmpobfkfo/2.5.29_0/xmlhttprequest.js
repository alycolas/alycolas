
(function(){Registry.require("helper");var c=Registry.get("helper");
var b=function(e){var d=c.isLocalImage(e);return(e&&e.length>4&&e.substr(0,4)=="http")||d
};var a=function(d,r,m,t,k,l){if(window.chrome!=undefined&&window.chrome.xmlHttpRequest!=undefined){window.chrome.xmlHttpRequest(d,r);
return}var h=new XMLHttpRequest();var s=function(){var e={readyState:h.readyState,responseHeaders:(h.readyState==4?h.getAllResponseHeaders():""),status:(h.readyState==4?h.status:0),statusText:(h.readyState==4?h.statusText:"")};
if(h.readyState==4){if(!h.responseType||h.responseType==""){e.responseXML=(h.responseXML?escape(h.responseXML):null);
e.responseText=h.responseText;e.response=h.response
}else{e.responseXML=null;e.responseText=null;e.response=h.response
}}else{e.responseXML=null;e.responseText="";e.response=null
}return e};var j=function(){var e=s();if(e.readyState==4&&e.status!=200&&e.status!=0&&d.retries>0){d.retries--;
a(d,r,m,t,k,l);return}if(r){r(e)}if(k){k()}};var o=function(){var e=s();
if(e.readyState==4&&e.status!=200&&e.status!=0&&d.retries>0){d.retries--;
a(d,r,m,t,k,l);return}if(t){t(e)}else{if(r){r(e)}}if(k){k()
}delete h};var q=function(w){var u=s();if(m){try{if(w.lengthComputable||w.totalSize>0){u.progress={total:w.total,totalSize:w.totalSize}
}else{var p=Number(getStringBetweenTags(u.responseHeaders,"Content-Length:","\n").trim());
if(p>0){u.progress={total:h.responseText.length,totalSize:p}
}}}catch(v){}m(u)}};h.onload=j;h.onerror=o;h.onreadystatechange=q;
try{if(!l&&!b(d.url)){throw new Error(chrome.i18n.getMessage("Invalid_scheme_of_url")+": "+d.url)
}h.open(d.method,d.url);if(d.headers){for(var f in d.headers){var g=f;
if(_webRequest.use&&(f.toLowerCase()=="user-agent"||f.toLowerCase()=="referer")){g=_webRequest.prefix+f
}h.setRequestHeader(g,d.headers[f])}}if(typeof(d.overrideMimeType)!=="undefined"){h.overrideMimeType(d.overrideMimeType)
}if(typeof(d.responseType)!=="undefined"){h.responseType=d.responseType
}if(typeof(d.data)!=="undefined"){h.send(d.data)}else{h.send()
}}catch(n){console.log("xhr: error: "+n.message);if(r){var i={responseXML:"",responseText:"",response:null,readyState:4,responseHeaders:"",status:403,statusText:"Forbidden"};
r(i)}if(k){k()}}};Registry.register("xmlhttprequest",{run:a})
})();

var V=false;var D=false;var UV=false;(function(){var g=false;
var n=null;var b={};var m="0.0.0";var a=false;var c=null;
var o="???";if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}if(!window.BlobBuilder){window.BlobBuilder=window.WebKitBlobBuilder
}Registry.require("convert");Registry.require("xmlhttprequest");
Registry.require("compat");Registry.require("parser");
Registry.require("crcrc");Registry.require("helper");
Registry.require("curtain");Registry.require("tabview");
var l=Registry.get("crcrc").cr;var k=Registry.get("crcrc").crc;
var j=Registry.get("curtain");var i=Registry.get("helper");
var q=Registry.get("tabview");var p=Registry.get("xmlhttprequest").run;
var f=function(){var y;var s=document.getElementById("ask");
var u=k("div","main_container p100100","ask","main");
if(s){var r=s.parentNode;r.removeChild(s);r.appendChild(u);
document.body.setAttribute("class","main")}if(V){console.log("ask: head")
}var B=k("div","head_container","ask","head_container");
var v=k("div","tv_container","ask","tv_container");
var z=l("a","head_link","ask","head_link");z.href="http://tampermonkey.net";
z.target="_blank";var C=k("div","float margin4","ask","head1");
var t=k("img","banner","ask");t.src=chrome.extension.getURL("images/icon128.png");
var A=k("div","float head margin4","ask","head2");var F=l("div","fire");
var w=k("div","version","version","version");w.textContent=" by Jan Biniok";
var E=l("div","search","box","");F.textContent="Tampermonkey";
C.appendChild(t);A.appendChild(F);A.appendChild(w);
z.appendChild(C);z.appendChild(A);B.appendChild(z);
B.appendChild(E);u.appendChild(B);u.appendChild(v);
var x=q.create("_main",v);y=d(x);g=true;j.hide();return y
};var d=function(s){var t={name:"main",id:"main"};var v=l("div",t.name,t.id,"tab_content_h");
v.textContent=o;var r=l("div",t.name,t.id,"tab_content");
var u=s.appendTab(i.createUniqueId(t.name,t.id),v,r);
return r};var h=function(){c=i.getUrlArgs();var t=function(x){window.location=x+"#bypass=true"
};if(c.script){o=chrome.i18n.getMessage("Install");
var s=c.script;var w;j.wait();var v=function(C){var E=k("div","heading","indzsll","heading");
var x=k("div","nameNname64","install","heading_name");
x.textContent=c.script;E.appendChild(x);w.appendChild(E);
var z=k("div","editor_outer","","");var A=k("div","editor","","");
var y=k("textarea","editorta","","");y.setAttribute("wrap","off");
y.value=C.responseText;w.appendChild(z);z.appendChild(A);
A.appendChild(y);if(!c.nocm){var B=y.parentNode;B.removeChild(y);
w.editor=new MirrorFrame(B,{value:C.responseText,noButtons:true,matchBrackets:true})
}};var r=function(y){if(y.readyState==4){j.hide();if(y.status==200||y.status==0){var x=Registry.get("parser").createScriptFromSrc(y.responseText);
if(!x.name||x.name==""||(x.version==undefined)){t(s);
return}w=f();v(y);var z=function(){if(confirm(chrome.i18n.getMessage("Do_you_want_to_install_this_userscript_in_Tampermonkey_or_Chrome"))){j.wait();
chrome.extension.sendRequest({method:"scriptClick",url:s,id:0},function(A){j.hide()
})}else{t(s)}};window.setTimeout(z,500)}else{i.alert(chrome.i18n.getMessage("Unable_to_load_script_from_url_0url0",s));
t()}}};var u={method:"GET",url:s,retries:3,overrideMimeType:"text/plain; charset=x-user-defined"};
p(u,r)}else{f()}};chrome.extension.onRequest.addListener(function(t,s,r){if(V){console.log("a: method "+t.method)
}if(t.method=="confirm"){var u=confirm(t.msg);r({confirm:u})
}else{if(t.method=="showMsg"){i.alert(t.msg);r({})}else{if(V){console.log("a: "+chrome.i18n.getMessage("Unknown_method_0name0",t.method))
}}}});if(V){console.log("Register request listener (ask)")
}var e=function(){window.removeEventListener("DOMContentLoaded",e,false);
window.removeEventListener("load",e,false);h()};window.addEventListener("DOMContentLoaded",e,false);
window.addEventListener("load",e,false)})();
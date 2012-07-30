
var V=false;(function(){Registry.require("crcrc");Registry.require("htmlutil");
var d=Registry.get("crcrc").cr;var c=Registry.get("crcrc").crc;
var e=Registry.get("htmlutil");var a=function(z){var F=document.getElementById("action");
var B=F.parentNode;B.removeChild(F);F=d("span");F.setAttribute("id","action");
B.appendChild(F);var J=c("table","actiontable","actiontable");
for(var E in z){var H=z[E];var l=c("tr","actiontr");
var G;var A;if(H.divider){var w=c("tr","filler");var K=c("td","filler ");
K.setAttribute("colspan","3");var x=c("div","actiondivider","divider",E.toString());
K.appendChild(x);w.appendChild(K);J.appendChild(w)}else{var o=c("td","imagetd actionimagetd");
if(H.image){if(H.id&&H.userscript){var m=function(){i(this.name,"enabled",!this.oldvalue)
};var C=(H.position>0)?((H.position<10)?" "+H.position:H.position):null;
var I=e.createImageText(H.image,H.name,"enabled","enabled",H.enabled?chrome.i18n.getMessage("Enabled"):chrome.i18n.getMessage("Disabled"),m,C);
I.oldvalue=H.enabled;o.appendChild(I)}else{A=e.createImage(H.image,H.name,H.id,null,"");
o.appendChild(A)}}var n=c("td","actiontd");var q=c("div","actionitem",H.name,H.id,"ai");
n.appendChild(q);if(H.checkbox){var v=document.createElement("input");
v.type="checkbox";v.name=H.name;v.id="enabled";v.checked=H.enabled;
var D=function(){i(this.name,this.id,this.checked)};
v.addEventListener("click",D);G=document.createElement("span");
G.textContent=H.name;q.appendChild(v);q.appendChild(G)
}else{if(H.url){G=document.createElement("a");G.href="javascript://nop/";
G.url=H.url;G.newtab=H.newtab;var u=function(){b(this.url,this.newtab)
};G.addEventListener("click",u);G.textContent=H.name;
n.setAttribute("colspan","2");q.appendChild(G)}else{if(H.menucmd){var L=document.createElement("a");
L.href="javascript://nop/";L.id=H.id;var D=function(){g(this.id)
};L.addEventListener("click",D);L.textContent=H.name;
n.setAttribute("colspan","2");q.appendChild(L)}else{if(H.runUpdate){var L=document.createElement("a");
L.href="javascript://nop/";L.id=H.id;var r=function(){f(this.id)
};L.addEventListener("click",r);L.textContent=H.name;
n.setAttribute("colspan","2");q.appendChild(L)}else{G=document.createElement("span");
G.textContent=H.name;n.setAttribute("colspan","2");
q.appendChild(G)}}}}if(H.tamperfire){var y=function(){var s=G;
var p=A;var t=H.doneImage;var k=function(M,N){if(s){if(N){s.textContent=N
}else{s.textContent=s.textContent.replace("?",Number(M))
}}if(p){p.setAttribute("src",t)}};if(H.tabid){j(H.tabid,k)
}else{o=null;n=null}};y()}if(o){l.appendChild(o)}if(n){l.appendChild(n)
}}J.appendChild(l)}F.appendChild(J)};var b=function(l,k){try{var n=function(o){chrome.tabs.sendRequest(o.id,{method:"loadUrl",url:l,newtab:k},function(p){})
};if(k){chrome.extension.sendRequest({method:"openInTab",url:l},function(o){})
}else{chrome.tabs.getSelected(null,n)}}catch(m){console.log(m)
}};var f=function(){try{chrome.extension.sendRequest({method:"runScriptUpdates"},function(l){})
}catch(k){console.log(k)}};var g=function(l){try{chrome.extension.sendRequest({method:"execMenuCmd",id:l},function(m){})
}catch(k){console.log(k)}};var j=function(l,k){try{var n=function(q){var s=null;
if(q.progress){var o=q.progress.action+"... ";if(!o||o==""){o=""
}var r="";if(q.progress.state&&q.progress.state.of){r=" "+Math.round(q.progress.state.n*100/q.progress.state.of)+"%"
}s=(o!=""||r!="")?o+r:null}k(q.cnt,s)};chrome.extension.sendRequest({method:"getFireItems",countonly:true,tabid:l},n)
}catch(m){console.log(m)}};var i=function(k,o,m){try{var l={method:"modifyScriptOptions",name:k};
if(o&&o!=""){l[o]=m}chrome.extension.sendRequest(l,function(p){if(p&&p.items){a(p.items)
}});document.getElementById("action").innerHTML=chrome.i18n.getMessage("Please_ wait___")
}catch(n){console.log("mSo: "+n.message)}};chrome.extension.onRequest.addListener(function(m,l,k){if(V){console.log("a: method "+m.method)
}if(false&&m.method=="updateActions"){a(m.items);k({})
}else{if(V){console.log("a: "+chrome.i18n.getMessage("Unknown_method_0name0",m.method))
}}});var h=function(){i(null,false)};window.setTimeout(h,1)
})();
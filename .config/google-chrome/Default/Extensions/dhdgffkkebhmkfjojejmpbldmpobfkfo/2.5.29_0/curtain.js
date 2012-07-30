
(function(){var d=null;Registry.require("crcrc");var c=Registry.get("crcrc");
var h=c.cr;var f=c.crc;var i=function(o,j,k,n,r){if(!n){n=""
}var s=f("table","curtable"+(r?" "+r:""),j,k,"table"+n);
var q=f("tr",(r?" "+r:""),j,k,"tr2"+n);var p=f("td","curtableoutertd",j,k,"td1"+n);
var m=f("td","curtableinner",j,k,"td2"+n);var l=f("td","curtableoutertd",j,k,"td3"+n);
q.appendChild(p);q.appendChild(m);q.appendChild(l);
s.appendChild(q);if(o){m.appendChild(o)}return s};var a=function(q,j,k,m,s){var l=h("div",j,k,"p"+m);
var o=f("div","curbg",j,k,"c"+m);var n=f("div","curmiddle",j,k,"d"+m);
if(!l.inserted){l.setAttribute("class","curouter hide");
l.setAttribute("style","z-index: "+(j?"10000":"20000"))
}var u=i(q,j,k,m,s);n.appendChild(u);l.appendChild(n);
l.appendChild(o);l.show=function(){l.setAttribute("class","curouter block")
};l.hide=function(){l.setAttribute("class","curouter hide")
};l.setText=function(p){l.text=p};l.print=function(p){if(l.text){l.text.textContent=p
}};var r=document.getElementsByTagName("body");if(!r.length){console.log("Err: Body not found!")
}else{r[0].appendChild(l)}return l};var b=function(){if(d){window.setTimeout(function(){d.hide()
},1)}};var g=function(k){if(k==undefined){k=chrome.i18n.getMessage("Please_wait___")
}if(d){d.print(k);d.show();return}var l=function(r){var p=document.createElement("div");
p.setAttribute("class","curcontainer");var o=document.createElement("div");
o.setAttribute("class","curwaithead");var q=document.createElement("div");
q.setAttribute("class","curwaitmsg");var s=document.createElement("div");
var n=document.createElement("div");n.textContent=r;
n.innerHTML+="<br><br>";n.setAttribute("class","curtext");
var m=document.createElement("img");m.src=chrome.extension.getURL("images/large-loading.gif");
s.appendChild(m);q.appendChild(s);q.appendChild(n);
p.appendChild(o);p.appendChild(q);return{all:p,text:n}
};var j=l(k);d=a(j.all);d.setText(j.text);d.show()};
var e={wait:g,hide:b};Registry.register("curtain",e)
})();
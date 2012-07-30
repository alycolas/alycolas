
(function(){Registry.require("crcrc");var g=Registry.get("crcrc").cr;
var f=Registry.get("crcrc").crc;var m=function(n,o,q,s,v,p,x){var r=g("div",o,q,s,"wrap",true);
var t=g("image",o,q,s,true);var u;t.setAttribute("width","16px");
t.setAttribute("height","16px");t.setAttribute("src",n);
r.setAttribute("style","cursor: pointer;");r.title=v;
r.key=q;r.name=o;r.alt=" ?";r.appendChild(t);u=f("span","scriptpos",o,q,"spos");
u.textContent=x;r.appendChild(u);if(p){var w=function(y){p.apply(r)
};r.addEventListener("click",w)}t.href="javascript://nop/";
return r};var b=function(t,p,u,n,s,o,r){var q=g("image",p,u,n);
q.setAttribute("width","16px");q.setAttribute("height","16px");
q.setAttribute("src",t);q.setAttribute("style","cursor: pointer;");
q.title=s;q.key=u;q.name=p;q.alt=" ?";if(o&&!q.inserted){q.addEventListener("click",o);
q.href="javascript://nop/"}return q};var k=function(p,q,n){var o=f("input","import","file");
if(!o.inserted){o.type="file";if(n){o.addEventListener("change",n)
}}return o};var j=function(t,q,n){var r=g("div",q.name,q.id,"textarea");
var o=f("textarea","settingsta",q.name,q.id,"textarea");
o.name=q.name;o.key=q.id;o.array=q.array;o.oldvalue=q.value;
o.value=(q.value!=undefined)?(q.array?q.value.join("\n"):q.value):"";
if(!o.inserted){if(n){o.addEventListener("change",n)
}}var p=g("span",q.name,q.id,"s1");p.textContent=t+":";
r.appendChild(p);r.appendChild(o);return{elem:r,textarea:o}
};var h=function(r,u,o){var v=g("div",u.name,u.id,"input");
var p=g("input",u.name,u.id,"input");var w=r.split("##");
p.name=u.name;p.key=u.id;p.oldvalue=u.value;p.value=(u.value!=undefined)?u.value:"";
if(!p.inserted){p.type="text";if(o){p.addEventListener("change",o)
}}var t=g("span",u.name,u.id,"s1");var q=g("span",u.name,u.id,"s2");
t.textContent=w[0];if(w.length>1){q.textContent=w[1]
}v.appendChild(t);v.appendChild(p);v.appendChild(q);
return{elem:v,input:p}};var i=function(p,q,n){var t=f("div","checkbox",q.name,q.id,"cb1");
var o=g("input",q.name,q.id,"cb");o.title=q.desc?q.desc:"";
o.name=q.name;o.key=q.id;o.reload=q.reload;o.warning=q.warning;
o.oldvalue=q.enabled;o.checked=q.enabled;o.type="checkbox";
if(!o.inserted){if(n){o.addEventListener("click",n)
}}var r=f("span","checkbox_desc",q.name,q.id,"cb2");
r.textContent=p;t.title=q.desc?q.desc:"";t.appendChild(o);
t.appendChild(r);return{elem:t,input:o}};var d=function(n,r,v,o){var w=g("div",r.name,r.id,"outer_dd");
var t=g("select",r.name,r.id,"dd");for(var q in v){var p=g("option",v[q].name,v[q].name,"dd"+n);
p.textContent=v[q].name;p.value=v[q].value;if(v[q].value==r.value){p.selected=true
}t.appendChild(p)}t.key=r.id;t.name=r.name;if(!t.inserted){t.addEventListener("change",o)
}var u=g("span",r.name,r.id,"inner_dd");u.textContent=n+": ";
w.appendChild(u);w.appendChild(t);return w};var a=function(n,w,o){var z=g("div",w.name,w.id,"outer_dd");
var x=g("select",w.name,w.id,"dd");var t=g("option",w.name,w.id,"dd1");
var v="document-start";t.textContent=v;if(v==w.value){t.selected=true
}var q=g("option",w.name,w.id,"dd2");var u="document-body";
q.textContent=u;if(u==w.value){q.selected=true}var p=g("option",w.name,w.id,"dd3");
var r="document-end";p.textContent=r;if(r==w.value||(!t.selected&&!q.selected)){p.selected=true
}x.appendChild(t);x.appendChild(q);x.appendChild(p);
x.key=w.id;x.name=w.name;if(!x.inserted){x.addEventListener("change",o)
}var y=g("span",w.name,w.id,"inner_dd");y.textContent=n;
z.appendChild(y);z.appendChild(x);return z};var l=function(n,p,u,v,o,r){var t=null;
var s=null;var q=null;if(r){t=f("input","button",n,p,"bu");
s=f("div","button_container",n,p,"bu_container");s.appendChild(t)
}else{t=g("input","button",n,p,"bu")}t.name=n;t.key=p;
t.type="button";t.oldvalue=u;if(!r){t.value=v}else{q=f("img","button_image",n,p,"bu_img");
q.src=r;s.appendChild(q);t.setAttribute("title",v);
q.setAttribute("title",v)}if(!t.inserted&&o){t.addEventListener("click",o);
if(r){q.addEventListener("click",o)}}return r?s:t};
var c=function(q,v,p){var u=g("div",v.name,v.id,"pos1");
var n=g("select",v.name,v.id,"pos",true);for(var r=1;
r<=v.posof;r++){var w=g("option",v.name,v.id,"opt"+r);
w.textContent=r;if(r==v.pos){w.selected=true}n.appendChild(w)
}n.key=v.id;n.name=v.name;n.addEventListener("change",p);
var t=g("span",v.name,v.id,"pos2");t.textContent=q;
u.appendChild(t);u.appendChild(n);return u};var e=function(t){var p=f("div","searchbox","search_inner");
var o=f("div","searchbox_mv tv_tab","search_inner_mv");
var s=f("input","searchbox_input","search_input");var n=f("input","searchbox_button","search_button");
s.type="text";s.value=t;n.type="button";n.value="Go";
var q=function(){var u=s.value;window.location=window.location.origin+window.location.pathname+"?url="+encodeURI(u)
};var r=function(u){if(u&&u.keyCode==13){q()}};n.addEventListener("click",q);
s.addEventListener("keyup",r);o.appendChild(s);o.appendChild(n);
p.appendChild(o);return p};Registry.register("htmlutil",{createImageText:m,createImage:b,createFileInput:k,createTextarea:j,createInput:h,createCheckbox:i,createDropDown:d,createScriptStartDropDown:a,createButton:l,createPosition:c,createSearchBox:e})
})();
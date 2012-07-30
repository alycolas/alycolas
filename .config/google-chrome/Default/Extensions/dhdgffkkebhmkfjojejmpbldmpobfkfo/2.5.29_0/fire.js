
(function(){var d=false;var j=false;var A=null;var E=null;
var H=null;var C=true;var e="rank";var s={};var g=0;
var f="http://...";var a=new Date();if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}if(!window.BlobBuilder){window.BlobBuilder=window.WebKitBlobBuilder
}Registry.require("crcrc");Registry.require("curtain");
Registry.require("helper");Registry.require("tabview");
Registry.require("convert");Registry.require("htmlutil");
var u=Registry.get("crcrc").cr;var k=Registry.get("crcrc").crc;
var p=Registry.get("curtain");var y=Registry.get("helper");
var r=Registry.get("tabview");var I=Registry.get("convert");
var x=Registry.get("htmlutil");var t=y.getUrlArgs();
var o=function(K,L){if(L){K.setAttribute("style",y.staticVars.visible);
K.vis=true}else{K.setAttribute("style",y.staticVars.invisible);
K.vis=false}};var b=function(K){return t.tab?t.tab:K
};var i=function(K){return t.url?t.url:K};var m=function(Q){var O=0;
var U=0;var W=0;var P=0;var L=(new Date()).getTime();
var S=24*60*60*1000;var V=7*S;var M=30*S;if(Q["uso:timestamp"]){var X=Q["uso:timestamp"];
if(L-V<X){O=1}else{if(L-M<X){O=0.96}else{if(L-6*M<X){O=0.9
}else{if(L-24*M<X){O=0.7}else{O=0}}}}}var Y=Q["uso:installs"];
if(Y>500000){U=1}else{if(Y>100000){U=0.95}else{if(Y>50000){U=0.9
}else{if(Y>10000){U=0.88}else{if(Y>1000){U=0.8}else{U=0.5*(Y/1000)
}}}}}var N=Q["uso:fans"];if(N>5&&Y>333){var R=Y/N;if(R<333){W=1
}else{if(R<1000){W=0.9}else{if(R<3000){W=0.85}else{if(R<10000){W=0.8
}else{W=0.5*(10000/R)}}}}}var T=Number(Q["uso:rating"]);
P=T>4?1:T/5;var K=0.25*O+0.35*U+0.15*W+0.25*P;return K
};var D=function(M,L){M=parseFloat(M);if(!isNaN(M)){if(!L){var L=0
}var K=Math.pow(10,L);return Math.floor(M*K+((M*K*10)%10>=5?1:0))/K
}else{return M}};var B=function(K){if(K==undefined){K=""
}var Z={id:"new",name:K};var X=[];var M=function(ag,ac,ap,am,ai){var aq=k("div","settingsth",ag.name,ag.id,ac);
var ak=function(av,ar,au){var at=document.getElementsByName("settingsth_a_up"+ag.name);
var ay=document.getElementsByName("settingsth_a_down"+ag.name);
var ax;var aw;for(var az=0;az<at.length;az++){at[az].style.display="none"
}for(var az=0;az<ay.length;az++){ay[az].style.display="none"
}if(C){ar.style.display=""}else{au.style.display=""
}};var ao=k("a","settingsth_a",ag.name,ag.id,ac+"_a");
ao.setAttribute("name","settingsth_a"+ag.name);var an=k("a","settingsth_a_up",ag.name,ag.id,ac+"_a_up");
an.setAttribute("name","settingsth_a_up"+ag.name);var ae=k("a","settingsth_a_down",ag.name,ag.id,ac+"_a_down");
ae.setAttribute("name","settingsth_a_down"+ag.name);
an.style.display="none";ae.style.display="none";var ah=function(){ak(ao,an,ae)
};var ad=function(){ah();p.hide()};var af=function(){var ar=function(){e=am;
c(E,e,C,ad)};p.wait();window.setTimeout(ar,1)};var al=function(){var ar=function(){C=false;
e=am;c(E,e,C,ad)};p.wait();window.setTimeout(ar,1)};
var aj=function(){var ar=function(){C=true;e=am;c(E,e,C,ad)
};p.wait();window.setTimeout(ar,1)};if(!aq.inserted){aq.appendChild(ao);
aq.appendChild(ae);aq.appendChild(an);ao.addEventListener("click",af);
an.addEventListener("click",al);ae.addEventListener("click",aj);
ao.textContent=ap+" ";ao.href="javascript://nop/";an.innerHTML="&#x25BE;";
an.href="javascript://nop/";ae.innerHTML="&#x25B4;";
ae.href="javascript://nop/"}if(ai&&!e||am==e){window.setTimeout(ah,1)
}return aq};var W=k("div","scripttable",Z.name,Z.id,"main");
var V=k("div","settingsth_fill",Z.name,Z.id,"thead_en");
var ab=k("div","settingsth_fill",Z.name,Z.id,"thead_fill1");
var U=M(Z,"thead_name",chrome.i18n.getMessage("Name"),"name");
var aa=k("div","settingsth_fill",Z.name,Z.id,"thead_fill");
var T=M(Z,"thead_score",chrome.i18n.getMessage("Rank"),"rank",true);
var S=k("div","settingsth",Z.name,Z.id,"thead_sites");
S.width="25%";S.textContent=chrome.i18n.getMessage("Sites");
var R=M(Z,"thead_installs",chrome.i18n.getMessage("Installs"),"installs");
var Q=M(Z,"thead_rating",chrome.i18n.getMessage("Rating"),"rating");
var P=M(Z,"thead_fans",chrome.i18n.getMessage("Fans"),"fans");
var O=M(Z,"thead_timestamp",chrome.i18n.getMessage("Last_Changed"),"timestamp");
var N=k("div","settingsth",Z.name,Z.id,"thead_homepage");
N.textContent=chrome.i18n.getMessage("Homepage");if(!W.inserted){X=X.concat([V,ab,aa,U,T,S,R,Q,P,O]);
var L=k("div","settingstr filler",Z.name,Z.id,"filler");
for(var Y=0;Y<X.length;Y++){L.appendChild(X[Y])}W.appendChild(L)
}return W};var v=function(Y,ag,Z){var aj=null;var an=null;
var M=[];var P=function(ap){var ao=null;if(ap.scriptTab){ao=B();
H=ao}else{ao=k("table","settingstable",ap.name,ap.id,"main");
var aq=k("tr","settingstr filler",ap.name,ap.id,"filler");
ao.appendChild(aq)}return ao};var Q=null;var V=null;
for(var ac in Y){var ae=Y[ac];if(ae.id===undefined){ae.id="item"+ac
}if(d){console.log("fire: process Item "+ae.name)}var K=k("tr","settingstr",ae.name,ae.id,"outer");
if(ae.divider){K=null}else{var am=u("td",ae.name,ae.id,"0");
K.appendChild(am);var N=u("td",ae.name,ae.id,"1");var aa=ae.icon||ae.icon64||ae.image;
if(aa){N.setAttribute("class","imagetd");if(ae.id&&ae.userscript){var ah=x.createImage(aa,ae.name,ae.id);
ah.oldvalue=ae.enabled;N.appendChild(ah)}else{N.appendChild(x.createImage(aa,ae.name,ae.id))
}}if(ae.option){s[ae.id]=ae.checkbox?ae.enabled:ae.value
}var L=k("td","settingstd",ae.name,ae.id,"2");K.appendChild(L);
if(ae.heading){var af=u("span",ae.name,ae.id,"heading");
if(!af.inserted){af.textContent=ae.name;var U=P(ae);
aj=k("tbody","settingstbody",ae.name,ae.id,"tbody");
U.appendChild(aj);an=u("div",ae.name,ae.id,"tab_content");
an.appendChild(U);ag.appendTab(y.createUniqueId(ae.name,ae.id),af,an)
}K=null}else{if(ae.section){if(ae.endsection){continue
}var X=k("div","section"+(ae.width?" section_width"+ae.width:""),ae.name,ae.id);
var af=k("b","section_head",ae.name,ae.id,"head");var ak=k("div","section_content",ae.name,ae.id,"content");
af.textContent=ae.name;X.appendChild(af);X.appendChild(ak);
if(V==null){V=k("div","section_table","","");L.appendChild(V);
L.setAttribute("class","section_td")}V.appendChild(X);
Q=ak;N=null}else{if(ae.userscript){M.push({item:ae,tabv:ag});
K=null}else{if(ae.fireInfo){var ai=k("span",ae.name,ae.id);
ai.innerHTML=ae.value;a=new Date(ae.versionDB);if(Q){Q.appendChild(ai);
K=null}else{L.appendChild(ai)}}else{if(ae.fireUpdate){var ab=function(){w(false)
};var al=function(){w(true)};var T=x.createButton(ae.name,ae.id,null,ae.name,ab);
var S=x.createButton(ae.fname,ae.id,null,ae.fname,al);
if(Q){Q.appendChild(T);Q.appendChild(S);K=null}else{L.appendChild(T);
L.appendChild(S)}}else{if(ae.search){f=ae.value;var R=u("div","search","box","");
R.appendChild(x.createSearchBox(f));K=null}else{if(ae.version){version=ae.value;
K=null;var O=k("div","version","version","version");
O.textContent="v"+version+" by Jan Biniok"}else{var ad=u("span",ae.name,ae.id);
ad.textContent=ae.name;L.setAttribute("colspan","2");
L.appendChild(ad)}}}}}}}if(K){if(N){K.insertBefore(N,am)
}if(L){K.appendChild(L,am)}K.removeChild(am)}}if(aj&&K){aj.appendChild(K)
}}E=M;var W=function(){c(E,null,null,Z)};window.setTimeout(W,1);
if(d){console.log("sort done!")}};var z=function(T,R){if(!T){console.log("fire: items is empty!");
return}A=T;var L=document.getElementById("fire");var O=k("div","","fire","main");
if(L){var K=L.parentNode;K.removeChild(L);K.appendChild(O);
document.body.setAttribute("class","main")}if(d){console.log("fire: head")
}var W=k("div","head_container","fire","head_container");
var P=k("div","tv_container","fire","tv_container");
var U=u("a","head_link","fire","head_link");U.href="http://tampermonkey.net";
U.target="_blank";var X=k("div","float margin4","fire","head1");
var N=k("img","banner","fire");N.src=chrome.extension.getURL("images/icon128.png");
var V=k("div","float head margin4","fire","head2");
var Z=u("div","fire");var Q=k("div","version","version","version");
Q.textContent=" by Jan Biniok";var Y=u("div","search","box","");
Z.textContent="TamperFire";X.appendChild(N);V.appendChild(Z);
V.appendChild(Q);U.appendChild(X);U.appendChild(V);
W.appendChild(U);W.appendChild(Y);O.appendChild(W);
O.appendChild(P);if(d){console.log("fire: tabView")
}var S=r.create("_main",P);if(d){console.log("fire: itemsToMenu")
}var M=function(){var aa=function(){if(R){console.log("fire: done! :)");
p.hide()}j=true};v(T,S,aa)};window.setTimeout(M,10)
};var n={name:function(L,K){return L},rank:function(L,K){return L.rank-K.rank
},installs:function(L,K){return L.installs-K.installs
},fans:function(L,K){return L.fans-K.fans},timestamp:function(K,L){return L.timestamp-K.timestamp
},rating:function(L,K){return L.rating-K.rating}};var c=function(M,V,T,W){if(d){console.log("sortScripts: start")
}if(V===undefined||V===null){V="rank"}if(T===undefined||T===null){T=true
}var X=s.fire_sort_cache_enabled?e+"_"+C.toString():"";
var ad=[];var O=0;var Z=s.fire_sort_cache_enabled?B(X):null;
var U=s.fire_sort_cache_enabled?Z.inserted:false;var K,ab,N,L,Y,ac;
var S,R,P;var aa=H;if(s.fire_sort_cache_enabled){if(U&&d){console.log("use cached table "+X)
}H.setAttribute("style",y.staticVars.invisible_move)
}if(s.fire_sort_cache_enabled){H.parentNode.insertBefore(Z,H);
H=Z;H.setAttribute("style",y.staticVars.visible_move)
}var Q=null;if(!U){Q=k("div","scripttbody","new",X,"tbody");
if(H){H.appendChild(Q)}}S=function(){if(d){console.log("sortScripts: delay 0")
}for(var ae=0;ae<M.length;ae++){ac=M[ae].tabv;ab=M[ae].item;
ab.id=ab.id+X;K=k("div","scripttr",ab.name,ab.id,"outer");
if(s.fire_sort_cache_enabled||!K.inserted){N=k("div","scripttd",ab.name,ab.id,"1");
L=k("div","scripttd",ab.name,ab.id,"2");Y=ab.icon||ab.icon64||ab.image;
if(Y){N.setAttribute("class","scripttd imagetd");N.appendChild(x.createImage(Y,ab.name,ab.id))
}K.appendChild(N);K.appendChild(L);h(ac,ab,K)}O++;ad.push({tr:K,installs:ab["uso:installs"],fans:ab["uso:fans"],timestamp:ab["uso:timestamp"],rating:ab["uso:rating"],rank:ab.rank})
}if(d){console.log("sortScripts: delay 0.1")}ad=ad.sort(n[V]);
if(d){console.log("sortScripts: delay 0.2")}if(T){ad=ad.reverse()
}window.setTimeout(R,100)};R=function(){if(d){console.log("sortScripts: delay 1")
}if(s.fire_sort_cache_enabled){for(var ae=0;ae<O;ae++){Q.__appendChild(ad[ae].tr)
}window.setTimeout(P,100)}else{var ah=k("div","","dummy","dummy");
Q.appendChild(ah);var af=0;var ag=function(){var aj;
var ai=(new Date()).getTime()+15000;while((new Date()).getTime()<ai){for(aj=af;
(aj<O)&&(af+100>aj);aj++){Q.__insertBefore(ad[aj].tr,ah)
}af=aj}if(aj<O){console.log("puhhhhh: sorting is hard work...");
window.setTimeout(ag,1)}else{Q.removeChild(ah);window.setTimeout(P,100)
}};ag()}};P=function(){if(d){console.log("sortScripts: end")
}ad=[];var ae=function(){if(W){W()}};window.setTimeout(ae,100)
};window.setTimeout(U||M.length==0?P:S,100)};var J=function(V,S,Q){var P=u("div",V.name,V.id,"script_editor_h");
P.textContent="USO";var U=u("td",V.name,V.id,"script_editor_c");
var K=k("tr","editor_container p100100",V.name,V.id,"container");
var X=k("tr","",V.name,V.id,"container_menu");var T=k("table","editor_container_o p100100",V.name,V.id,"container_o");
var W=k("td","editor_outer",V.name,V.id,"script_info");
var O=k("td","editor",V.name,V.id,"script_info");var N;
T.appendChild(X);T.appendChild(K);U.appendChild(T);
var M=k("td","editormenu",V.name,V.id,"editormenu");
W.appendChild(O);K.appendChild(W);X.appendChild(M);
var R=x.createButton(V.name,"close_script",null,chrome.i18n.getMessage("Close"),Q);
var L=function(){var Z=function(aa){if(aa.found){}else{alert(chrome.i18n.getMessage("Unable_to_get_UserScript__Sry_"))
}};chrome.extension.sendRequest({method:"scriptClick",url:"http://userscripts.org/scripts/source/"+V["uso:script"]+".user.js"},Z)
};var Y=x.createButton(V.name,"save",null,chrome.i18n.getMessage("Install"),L);
M.appendChild(Y);M.appendChild(R);N=S.appendTab("script_editor_tab"+y.createUniqueId(V.name,V.id),P,U);
return{onShow:function(){var Z=document.createElement("iframe");
Z.setAttribute("class","script_iframe");Z.setAttribute("src","http://greasefire.userscripts.org/scripts/show/"+V["uso:script"]);
O.innerHTML="";O.appendChild(Z)},onClose:function(){}}
};var F=function(M,Y,L,R,S){var U=k("div","",Y.name,Y.id,"script_tab_head");
var Q=k("div","heading",Y.name,"heading");var W=k("img","nameNicon64",Y.name,"heading_icon");
var K=Y.icon64?Y.icon64:Y.icon;W.src=K;var X=k("div","nameNname64",Y.name,"heading_name");
X.textContent=Y.name;if(K){Q.appendChild(W)}Q.appendChild(X);
var T=k("div","author",Y.name,"author");if(Y.author){T.textContent="by "+Y.author
}else{if(Y.copyright){T.innerHTML="&copy; ";T.textContent+=Y.copyright
}}var ab=k("table","noborder p100100",Y.name,"table");
var ad=k("tr","script_tab_head",Y.name,"tr1");var ac=k("tr","details",Y.name,"tr2");
var P=k("td","",Y.name,"td1");var aa=k("td","",Y.name,"td2");
Q.appendChild(T);U.appendChild(Q);P.appendChild(U);
ad.appendChild(P);ac.appendChild(aa);ab.appendChild(ad);
ab.appendChild(ac);R.appendChild(ab);var Z={tv:"tv tv_alt",tv_table:"tv_table tv_table_alt",tr_tabs:"tr_tabs tr_tabs_alt",tr_content:"tr_content tr_content_alt",td_content:"td_content td_content_alt",td_tabs:"td_tabs td_tabs_alt",tv_tabs_align:"tv_tabs_align tv_tabs_align_alt",tv_tabs_table:"tv_tabs_table tv_tabs_table_alt",tv_contents:"tv_contents tv_contents_alt",tv_tab_selected:"tv_tab tv_selected tv_tab_alt tv_selected_alt",tv_tab_close:"",tv_tab:"tv_tab tv_tab_alt",tv_content:"tv_content tv_content_alt"};
var O=r.create("_details"+y.createUniqueId(Y.name,Y.id),aa,Z);
var V=J(Y,O,S);var N=function(af){var ae=false;if(af.type!="keydown"){return
}if(af.keyCode==27){if(M.isSelected()){window.setTimeout(S,100)
}ae=true}if(ae){af.stopPropagation()}};return{onShow:function(){if(V.onShow){V.onShow()
}window.addEventListener("keydown",N,false)},onClose:function(){if(V.onClose){if(V.onClose()){return true
}}window.removeEventListener("keydown",N,false)}}};
var h=function(ac,Z,N){var O;var ag;var aj=k("span","clickable",Z.name,Z.id,"sname");
var Q=k("span","",Z.name,Z.id,"sname_name");var P;var L=Z.homepage?Z.homepage:(Z.namespace&&Z.namespace.search("http://")==0?Z.namespace:null);
var T="http://userscripts.org/scripts/show/"+Z["uso:script"]+"/";
P=u("a",Z.name,Z.id,"sname_name_a");if(!P.inserted){P.setAttribute("target","_blank");
Q.appendChild(P)}P.textContent=(Z.name.length>35)?Z.name.substr(0,35)+"...":Z.name;
aj.appendChild(Q);var ak=[];var ai=function(al,ap,ao,an){if(!an){an="scripttd"
}var am=k("div",an,al.name,al.id,ao);if(ap){am.appendChild(ap)
}return am};var V=function(){if(ag.onClose&&ag.onClose()){return
}if(O){O.hide()}};var af=function(){var al=k("div","",Z.name,Z.id,"details_h");
al.textContent=chrome.i18n.getMessage("Edit")+" - "+((Z.name.length>25)?Z.name.substr(0,25)+"...":Z.name);
var am=u("div",Z.name,Z.id,"details_c");O=ac.insertTab(null,"details_"+y.createUniqueId(Z.name,Z.id),al,am,null,V);
ag=F(O,Z,N,am,V)};var ab=function(al){if(!O){af()}if(ag.onShow){ag.onShow()
}O.show();if(al.button!=1){O.select()}};var aa=u("span",Z.name,Z.id,"srank");
var ae=u("span",Z.name,Z.id,"sinstalls");var K=u("span",Z.name,Z.id,"srating");
var ad=u("span",Z.name,Z.id,"sfans");var Y=u("span",Z.name,Z.id,"stimestamp");
var M=u("span",Z.name,Z.id,"shomepage");var S=u("a",Z.name,Z.id,"shomepage_a");
Z.rank=m(Z);aa.textContent=D(Z.rank*100,1);ae.textContent=Z["uso:installs"];
K.textContent=Z["uso:rating"];ad.textContent=Z["uso:fans"];
var W=function(al){var am="0"+al;return am.substr(am.length-2,2)
};var ah=function(au,ar){var an=1000*60*60;var am=1000*60*60*24;
var ao=au.getTime();var al=ar.getTime();var at=Math.abs(ao-al);
var ap=Math.round(at/an);var aq=Math.round(at/am);if(ap<=48){return ap+" h"
}else{return aq+" d"}};if(Z["uso:timestamp"]!=0){Y.textContent=ah(a,new Date(Z["uso:timestamp"]))
}M.appendChild(S);if(!S.inserted){S.setAttribute("href",L);
S.setAttribute("target","_blank");M.appendChild(P)}var R=ai(Z,aj,"script_td2","scripttd scripttd_name clickable");
R.addEventListener("click",ab);R.title=Z.description?Z.name+"\n\n"+Z.description:Z.name;
ak.push(R);ak.push(ai(Z,aa,"script_td3"));ak.push(ai(Z,q(Z),"script_td4"));
ak.push(ai(Z,ae,"script_td5"));ak.push(ai(Z,K,"script_td6"));
ak.push(ai(Z,ad,"script_td7"));ak.push(ai(Z,Y,"script_td8"));
ak.push(ai(Z,M,"script_td9"));for(var X=ak.length;X<10;
X++){ak.push(k("div","scripttd",Z.name,Z.id,"script_filler_"+X))
}N.appendChild(k("div","scripttd",Z.name,Z.id,"script_prefiller_2"));
for(var U=0;U<ak.length;U++){N.appendChild(ak[U])}return ak
};var q=function(S){var Y=u("span",S.name,S.id,"site_images",true);
var O=function(ae){if(ae.search("http")!=0){ae="http://"+ae
}var aa=ae.split("/");if(aa.length<3){return null}var ag=aa[2].split(".");
if(ag.length<2){return null}var ab=ag[ag.length-1];
var af=ag[ag.length-2];var ad=[];for(var ac=ag.length-3;
ac>=0;ac--){if(ag[ac].search("\\*")!=-1){break}ad.push(ag[ac])
}return{tld:ab,dom:af,predom:ad.reverse()}};if(S.includes){var W=0;
for(var N=0;N<S.includes.length;N++){var P=S.includes[N];
if(P.search(/htt(ps|p):\/\/(\*\/\*|\*)*$/)!=-1||P=="*"){var T=x.createImage(chrome.extension.getURL("images/web.png"),S.name,S.id,S.includes[N],S.includes[N]);
Y.appendChild(T);break;continue}var M=O(P);if(M==null){continue
}var R=false;for(var L=0;L<N;L++){var K=S.includes[L];
var Z=O(K);if(Z==null){continue}if(Z.dom==M.dom){R=true;
break}}if(!R){var Q="com";var U="";if(M.tld!="*"&&M.tld!="tld"){Q=M.tld
}if(M.predom.length){U=M.predom.join(".")+"."}var V=("http://"+U+M.dom+"."+Q+"/favicon.ico").replace(/\*/g,"");
if(V.search("http://userscripts.org/")==0||V.search("http://userscripts.com/")==0){V="http://userscripts.org/images/script_icon.png"
}var T=x.createImage(V,S.name,S.id,S.includes[N],S.includes[N]);
Y.appendChild(T);W++}if(W>7){var X=k("span",S.name,S.id,"tbc");
X.textContent="...";Y.appendChild(X);break}}}return Y
};var l=function(M,K){if(d){console.log("run getFireItems")
}try{var L={method:"getFireItems",tabid:M,url:K};if(d){console.log("getFireItems sendReq")
}var N=function(R){try{var V=true;if(R.progress){var Q=R.progress.action+"... ";
if(!Q||Q==""){Q=""}var U="";if(R.progress.state&&R.progress.state.of){U=" "+Math.round(R.progress.state.n*100/R.progress.state.of)+"%"
}var W=(Q!=""||U!="")?Q+U:null;p.wait(W);var P=function(){l(M,K)
};window.setTimeout(P,2000);V=false}if(R.scripts){z(R.scripts,V);
if(d){console.log("createFireMenu done!")}}if(R.image){var T=k("img","banner","fire");
T.src=R.image}R=null}catch(S){console.log(S);throw S
}};chrome.extension.sendRequest(L,N);p.wait()}catch(O){console.log("mSo: "+O.message)
}};var w=function(N,K){if(d){console.log("run startFireUpdate")
}try{var M={method:"startFireUpdate",force:N};var L=function(){l(g,f)
};chrome.extension.sendRequest(M,function(P){if(P.suc===false){p.hide();
alert(chrome.i18n.getMessage("TamperFire_is_up_to_date_"))
}else{window.setTimeout(L,1000)}});p.wait()}catch(O){console.log("mSo: "+O.message)
}};chrome.extension.onRequest.addListener(function(M,L,K){if(d){console.log("f: method "+M.method)
}if(M.method=="confirm"){var N=confirm(M.msg);K({confirm:N})
}else{if(M.method=="showMsg"){alert(M.msg);K({})}else{if(d){console.log("f: "+chrome.i18n.getMessage("Unknown_method_0name0",M.method))
}}}});var G=function(){window.removeEventListener("DOMContentLoaded",G,false);
window.removeEventListener("load",G,false);l(g,f)};
window.addEventListener("DOMContentLoaded",G,false);
window.addEventListener("load",G,false);g=b();f=decodeURI(i(encodeURI(f)))
})();
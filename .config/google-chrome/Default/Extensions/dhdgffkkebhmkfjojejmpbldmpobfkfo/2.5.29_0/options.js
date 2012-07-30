
(function(){var d=false;var h=false;var w=null;var i={};
var g="0.0.0";var m=false;var y={};if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}if(!window.BlobBuilder){window.BlobBuilder=window.WebKitBlobBuilder
}Registry.require("crcrc");Registry.require("curtain");
Registry.require("tabview");Registry.require("htmlutil");
Registry.require("helper");Registry.require("convert");
var j=Registry.get("crcrc").cr;var u=Registry.get("crcrc").crc;
var H=Registry.get("curtain");var c=Registry.get("tabview");
var B=Registry.get("htmlutil");var F=Registry.get("helper");
var I=Registry.get("convert");var z=function(X,ag){var ai=null;
var ao=null;var N=[];var Q=function(ay){var aE=null;
var ap=[];if(ay.scriptTab){aE=u("table","scripttable",ay.name,ay.id,"main");
var aB=u("th","",ay.name,ay.id,"thead_en");var aA=u("th","settingsth",ay.name,ay.id,"thead_name");
aA.textContent=chrome.i18n.getMessage("Name");var aC=u("th","settingsth",ay.name,ay.id,"thead_ver");
aC.textContent=chrome.i18n.getMessage("Version");var az=u("th","settingsth",ay.name,ay.id,"thead_sites");
az.width="25%";az.textContent=chrome.i18n.getMessage("Sites");
var ax=u("th","settingsth",ay.name,ay.id,"thead_features");
ax.textContent=chrome.i18n.getMessage("Features");var aw=u("th","settingsth",ay.name,ay.id,"thead_edit");
aw.textContent=chrome.i18n.getMessage("Homepage");var av=u("th","settingsth",ay.name,ay.id,"thead_updated");
av.textContent=chrome.i18n.getMessage("Last_Updated");
var at=u("th","settingsth",ay.name,ay.id,"thead_sort");
at.textContent=chrome.i18n.getMessage("Sort");var ar=u("th","settingsth",ay.name,ay.id,"thead_del");
ar.textContent=chrome.i18n.getMessage("Delete");ap=ap.concat([aB,aA,aC,az,ax,aw,av,at,ar])
}else{aE=u("table","settingstable",ay.name,ay.id,"main")
}var aD=u("tr","settingstr filler",ay.name,ay.id,"filler");
for(var aq=0;aq<ap.length;aq++){aD.appendChild(ap[aq])
}if(ay.scriptTab){var au=u("td","settingstd filler",ay.name,ay.id,"filler_td"+ay.id);
aD.appendChild(au)}aE.appendChild(aD);return aE};var R=null;
var V=null;var T=false;for(var aa in X){var ae=X[aa];
if(d){console.log("options: process Item "+ae.name)
}var J=u("tr","settingstr",ae.name,ae.id,"outer");if(ae.divider){J=null
}else{var an=j("td",ae.name,ae.id,"0");J.appendChild(an);
var O=j("td",ae.name,ae.id,"1");if(ae.image){O.setAttribute("class","imagetd");
if(ae.id&&(ae.userscript||ae.nativeScript)){var K=function(){A(this.name,this.key,!this.oldvalue)
};var am=function(){r(this.name,this.key,!this.oldvalue)
};var Y=(ae.position>0)?((ae.position<10)?" "+ae.position:ae.position):null;
var ah=B.createImageText(ae.image,ae.nativeScript?ae.id:ae.name,"enabled","enabled",ae.enabled?chrome.i18n.getMessage("Enabled"):chrome.i18n.getMessage("Disabled"),ae.nativeScript?am:K,ae.nativeScript?"":Y);
ah.oldvalue=ae.enabled;O.appendChild(ah)}else{O.appendChild(B.createImage(ae.image,ae.name,ae.id))
}}var M=u("td","settingstd",ae.name,ae.id,"2");if(ae.option){i[ae.id]=ae.checkbox?ae.enabled:ae.value
}if(ae.checkbox){var Z=function(){enableScript(this.key,this.checked)
};var ab=function(){var ap=true;if(this.warning){ap=confirm(this.warning);
if(!ap){this.checked=!this.checked}}if(ap){if(this.reload){window.location.href=window.location.href
}f(this.key,this.checked,this.reload)}};var S=B.createCheckbox(ae.name,ae,ae.option?ab:Z);
if(R){R.appendChild(S.elem);J=null}else{M.appendChild(S.elem)
}S.elem.setAttribute("style",(ae.level>i.configMode)?F.staticVars.invisible:F.staticVars.visible)
}else{if(ae.input){var S=B.createTextarea(ae.name,ae);
if(R){R.appendChild(S.elem);J=null;T=true}else{M.appendChild(S.elem)
}S.elem.setAttribute("style",(ae.level>i.configMode)?F.staticVars.invisible:F.staticVars.visible)
}else{if(ae.select){var Z=function(){f(this.key,this.value)
};var S=B.createDropDown(ae.name,ae,ae.select,Z);if(R){R.appendChild(S);
J=null}else{M.appendChild(S)}S.setAttribute("style",(ae.level>i.configMode)?F.staticVars.invisible:F.staticVars.visible)
}else{if(ae.url){var al=j("a",ae.name,ae.id);al.href="javascript://nop/";
al.url=ae.url;al.newtab=ae.newtab;if(!al.inserted){var Z=function(){n(this.url,this.newtab)
};al.addEventListener("click",Z)}al.textContent=ae.name;
M.setAttribute("colspan","2");M.appendChild(al)}else{if(ae.heading){var af=j("span",ae.name,ae.id);
af.textContent=ae.name;ai=Q(ae);ao=j("div",ae.name,ae.id,"tab_content");
ao.appendChild(ai);J=null;var L=ag.appendTab(F.createUniqueId(ae.name,ae.id),af,ao)
}else{if(ae.section){if(R&&T){var ak=j("input",R.name,R.id,"Save");
if(!ak.inserted){ak.type="button";ak.section=R;ak.value=chrome.i18n.getMessage("Save");
var W=function(){var at=this.section.getElementsByTagName("textarea");
for(var aw=0;aw<at.length;aw++){var av=null;if(at[aw].array){var aq=at[aw].value.split("\n");
var ap=[];for(var au=0;au<aq.length;au++){if(aq[au]&&aq[au].trim()!=""){ap.push(aq[au])
}}av=ap}else{av=at[aw].value}f(at[aw].key,av)}};ak.addEventListener("click",W,false)
}R.appendChild(ak);J=null}if(ae.endsection){continue
}var W=u("div","section",ae.name,ae.id);var af=u("div","section_head",ae.name,ae.id,"head");
var aj=u("div","section_content",ae.name,ae.id,"content");
af.textContent=ae.name;W.appendChild(af);W.appendChild(aj);
if(V==null){V=u("div","section_table","","");M.appendChild(V);
M.setAttribute("class","section_td")}else{J=null;M=null
}T=false;V.appendChild(W);W.setAttribute("style",(ae.level>i.configMode)?F.staticVars.invisible:F.staticVars.visible);
R=aj;O=null}else{if(ae.menucmd){var ad=j("span",ae.name,ae.id,false,true);
ad.textContent=ae.name;M.setAttribute("colspan","2");
M.appendChild(ad)}else{if(ae.userscript||ae.nativeScript){M.setAttribute("colspan","2");
var ac=C(ae,J,ag);J.setAttribute("class","scripttr");
if(ae.nnew){J.setAttribute("style","display: none;")
}for(var U=0;U<ac.length;U++){J.appendChild(ac[U])}if(ae.userscript){N.push({script:J,pos:ae.position,posof:ae.positionof})
}}else{if(ae.version){g=ae.value;J=null;var P=u("div","version","version","version");
P.textContent="v"+g+" by Jan Biniok"}else{var ad=j("span",ae.name,ae.id);
ad.textContent=ae.name;M.setAttribute("colspan","2");
M.appendChild(ad)}}}}}}}}}if(J){if(O){J.insertBefore(O,an)
}if(M){J.appendChild(M,an)}J.removeChild(an)}}if(ai&&J){ai.appendChild(J)
}}o(N);return ai};var v=function(ah){var ag={name:"utils",id:"utils"};
var ai=j("div",ag.name,ag.id,"tab_util_h");ai.textContent=chrome.i18n.getMessage("Utilities");
var L=j("div",ag.name,ag.id,"tab_util");var P=ah.appendTab(F.createUniqueId(ag.name,ag.id),ai,L);
if(50>i.configMode){P.hide()}else{P.show()}var Q=u("div","tv_util",ag.name,ag.id,"tab_util_cont");
var T=function(){var ao={created_by:"Tampermonkey",version:"1",scripts:[]};
for(var an in w){var ap=w[an];if(ap.userscript&&ap.id&&!ap.system){var am={name:ap.name,options:ap.options,enabled:ap.enabled,position:ap.position};
if(ap.update_url&&ap.update_url.trim()!=""){am.update_url=ap.update_url
}if(ap.code&&ap.code.trim()!=""){am.source=I.Base64.encode(I.UTF8.encode(ap.code));
ao.scripts.push(am)}else{console.log("options: Strange script: "+ap.name)
}}}W.value=JSON.stringify(ao)};var ad=function(am){var ar=false;
var ap=0;if(W.value.trim()!=""){var aq=null;try{var am=W.value;
aq=JSON.parse(am)}catch(aw){var av="<body>";var au="</body>";
if(am.search(av)!=-1){var ay=am.indexOf(av);var ax=am.lastIndexOf(au);
if(ay!=-1&&ax!=-1){W.value=am.substr(ay+av.length,ax-(ay+av.length));
ad()}}else{F.alert(chrome.i18n.getMessage("Unable_to_parse_this_"))
}return}var at=function(aA){try{var az=aA.name;var aC=I.UTF8.decode(I.Base64.decode(aA.source));
var aB=aA.update_url;if(aC&&aC.trim()!=""){var aE=function(aF){if(aF.installed){var aG=(aA.enable==undefined)?aA.enabled:aA.enable;
var aH=aA.options;aH.enabled=aG;aH.position=aA.position;
l(aA.name,aH,false)}if(--ap==0){A(null,false,null,true,true)
}};ap++;chrome.extension.sendRequest({method:"saveScript",name:az,code:aC,reload:false,update_url:aB},aE)
}}catch(aD){ar=true;console.log("options: Error while importing script "+ao.name)
}};var an=aq.scripts;for(var ao=an.length-1;ao>=0;ao--){at(an[ao])
}if(ar){F.alert(chrome.i18n.getMessage("An_error_occured_during_import_"))
}}};var V=function(am){var an="";switch(am.code){case FileError.QUOTA_EXCEEDED_ERR:an="QUOTA_EXCEEDED_ERR";
break;case FileError.NOT_FOUND_ERR:an="NOT_FOUND_ERR";
break;case FileError.SECURITY_ERR:an="SECURITY_ERR";
break;case FileError.INVALID_MODIFICATION_ERR:an="INVALID_MODIFICATION_ERR";
break;case FileError.INVALID_STATE_ERR:an="INVALID_STATE_ERR";
break;default:an="Unknown Error";break}F.alert("Error: "+an)
};var aa=function(){function am(an){an.root.getFile("scripts.tmx",{},function(ao){ao.file(function(aq){var ap=new FileReader();
ap.onloadend=function(ar){W.value=this.result;ad()};
ap.readAsText(aq)},V)},V)}window.requestFileSystem(window.PERSISTENT,1024*1024,am,V)
};var ae=function(){T();function am(an){an.root.getFile("scripts.tmx",{create:true},function(ao){ao.createWriter(function(ap){ap.onwriteend=function(ar){console.log("Write completed.")
};ap.onerror=function(ar){console.log("Write failed: "+ar.toString())
};var aq=new BlobBuilder();aq.append(W.value);ap.write(aq.getBlob("text/plain"))
},V)},V)}window.requestFileSystem(window.PERSISTENT,1024*1024,am,V)
};var Y=function(){T();var am=new BlobBuilder();am.append(W.value);
saveAs(am.getBlob("text/plain"),"tmScripts.txt")};var af=B.createButton(ag.name,ag.id+"_i_ta",null,chrome.i18n.getMessage("Import_from_Textarea"),ad);
var ab=B.createButton(ag.name,ag.id+"_i_ls",null,chrome.i18n.getMessage("Import_from_SandboxFS"),aa);
var R=j("input",ag.name,ag.id+"_i_file","file");var N=function(an){var ap=an.target.files;
for(var ao=0,aq;aq=ap[ao];ao++){var am=new FileReader();
am.onload=(function(ar){return function(at){W.value=at.target.result;
ad()}})(aq);am.readAsText(aq)}};if(!R.inserted){R.type="file";
R.addEventListener("change",N,false)}var M=B.createButton(ag.name,ag.id+"_e_ta",null,chrome.i18n.getMessage("Export_to_Textarea"),T);
var X=B.createButton(ag.name,ag.id+"_e_doc",null,chrome.i18n.getMessage("Export_to_file"),Y);
var ak=B.createButton(ag.name,ag.id+"_e_ls",null,chrome.i18n.getMessage("Export_to_SandboxFS"),ae);
var W=u("textarea","importta",ag.name,ag.id,"ta");var K=u("div","section",ag.name,ag.id,"ta");
var al=u("div","section_head",ag.name,ag.id,"head_ta");
var S=u("div","section_content",ag.name,ag.id,"content_ta");
al.textContent="TextArea";S.appendChild(M);S.appendChild(af);
S.appendChild(W);K.appendChild(al);K.appendChild(S);
var ac=u("div","section",ag.name,ag.id,"sb");var Z=u("div","section_head",ag.name,ag.id,"head_sb");
var aj=u("div","section_content",ag.name,ag.id,"content_sb");
Z.textContent="SandboxFS";ac.appendChild(Z);ac.appendChild(aj);
aj.appendChild(ak);aj.appendChild(ab);var O=u("div","section",ag.name,ag.id,"fi");
var J=u("div","section_head",ag.name,ag.id,"head_fi");
var U=u("div","section_content",ag.name,ag.id,"content_fi");
J.textContent="File";O.appendChild(J);O.appendChild(U);
U.appendChild(X);U.appendChild(R);Q.appendChild(O);
Q.appendChild(ac);Q.appendChild(K);L.appendChild(Q)
};var t=function(R,J){m=J;if(!R){console.log("options: items is empty!");
return}w=R;var L=document.getElementById("options");
var N=u("div","main_container p100100","options","main");
if(L){var K=L.parentNode;K.removeChild(L);K.appendChild(N);
document.body.setAttribute("class","main")}if(d){console.log("options: head")
}var U=u("div","head_container","opt","head_container");
var O=u("div","tv_container","opt","tv_container");
var S=j("a","head_link","fire","head_link");S.href="http://tampermonkey.net";
S.target="_blank";var V=u("div","float margin4","fire","head1");
var M=u("img","banner","fire");M.src=chrome.extension.getURL("images/icon128.png");
var T=u("div","float head margin4","fire","head2");
var X=j("div","fire");var P=u("div","version","version","version");
P.textContent=" by Jan Biniok";var W=j("div","search","box","");
X.textContent="Tampermonkey";V.appendChild(M);T.appendChild(X);
T.appendChild(P);S.appendChild(V);S.appendChild(T);
U.appendChild(S);U.appendChild(W);N.appendChild(U);
N.appendChild(O);if(d){console.log("options: tabView")
}var Q=c.create("_main",O);if(d){console.log("options: itemsToMenu")
}z(R,Q);if(d){console.log("options: utilTab")}v(Q);
m=null;h=true;H.hide()};var s=function(af,K,M){var Y=K.item;
var S=Y.id+K.id;var ae=(M?"orig_":"use_")+K.id;var P=function(ag){return"select_"+F.createUniqueId(ag,Y.id)+"_sel1"
};var Q=u("div","cludes",af,S,"cb1");if(document.getElementById(P(ae))){return{elem:Q}
}var X=j("span",Y.name,S,"cb2");X.textContent=af;Q.title=Y.desc?Y.desc:"";
var J=(Y.options&&Y.options.override&&Y.options.override[ae])?Y.options.override[ae]:[];
var V=u("select","cludes",ae,Y.id,"sel1");V.setAttribute("size","6");
for(var T=0;T<J.length;T++){var O=document.createElement("option");
O.value=O.text=J[T];V.appendChild(O)}Q.appendChild(X);
Q.appendChild(V);var aa=function(){var ag=P("use_"+(K.id=="excludes"?"includes":"excludes"));
var ah=document.getElementById(ag);var ai=V.options[V.selectedIndex];
if(ai&&!ah.querySelector('option[value="'+ai.value+'"]')){ah.appendChild(ai.cloneNode(true));
ab()}};var L=function(){var ag=prompt(chrome.i18n.getMessage("Enter_the_new_rule"));
if(ag){var ah=document.createElement("option");ah.value=ah.text=ag.trim();
V.appendChild(ah);ab()}};var ac=function(){var ah=V.options[V.selectedIndex];
if(!ah){return}var ag=prompt(chrome.i18n.getMessage("Enter_the_new_rule"),ah.value);
if(ag){ah.value=ah.text=ag.trim();ab()}};var R=function(){var ag=V.options[V.selectedIndex];
if(!ag){return}ag.parentNode.removeChild(ag);ab()};
var U=function(ah){var ag=[];for(var ai=0;ai<ah.options.length;
ai++){ag.push(ah.options[ai].value)}return ag};var ab=function(){var ag={includes:U(document.getElementById(P("use_includes"))),matches:U(document.getElementById(P("use_matches"))),excludes:U(document.getElementById(P("use_excludes")))};
l(Y.name,ag);return true};if(M){var N=j("button",Y.name,S,"btn1");
N.innerHTML=chrome.i18n.getMessage("Add_as_0clude0",M);
N.addEventListener("click",aa,false);Q.appendChild(N)
}else{var ad=j("button",Y.name,S,"btn2");ad.innerHTML=chrome.i18n.getMessage("Add")+"...";
ad.addEventListener("click",L,false);Q.appendChild(ad);
var W=j("button",Y.name,S,"btn3");W.innerHTML=chrome.i18n.getMessage("Edit")+"...";
W.addEventListener("click",ac,false);Q.appendChild(W);
var Z=j("button",Y.name,S,"btn4");Z.innerHTML=chrome.i18n.getMessage("Remove");
Z.addEventListener("click",R,false);Q.appendChild(Z)
}return{elem:Q}};var o=function(L){var O=function(U,T){if(U.tagName==T){return U
}else{return(U.parentNode?O(U.parentNode,T):null)}};
var K=function(T){var U=function(W,V){return W.position-V.position
};T.sort(U);return T};var S=null;var M=[];var P=0;for(var N=0;
N<L.length;N++){var Q=L[N].script;var R=O(Q,"TR");if(R){var J=O(R,"TABLE");
if(!S){S=J}else{if(S!=J){console.log("options: different parents?!?!")
}}P++;M.push({tr:R,position:Q.pos?Q.pos:(1000+P)});
R.inserted=false;R.parentNode.removeChild(R)}else{console.log("options: unable to sort script at pos "+Q.pos)
}}M=K(M);for(var N=0;N<P;N++){S.appendChild(M[N].tr)
}};var D={};var x=function(N,ac,M,U,V){var X=u("div","",ac.name,ac.id,"script_tab_head");
var L=X.inserted;var S=u("div","heading",ac.name,"heading");
var Z=u("img","nameNicon64",ac.name,"heading_icon");
var J=ac.icon64?ac.icon64:ac.icon;Z.src=J;var ab=u("div","nameNname64",ac.name,"heading_name");
ab.textContent=ac.name;if(J){S.appendChild(Z)}S.appendChild(ab);
var W=u("div","author",ac.name,"author");if(ac.author){W.textContent="by "+ac.author
}else{if(ac.copyright){W.innerHTML="&copy; ";W.textContent+=ac.copyright
}}var ag=u("table","noborder p100100",ac.name,"table");
var aj=u("tr","script_tab_head",ac.name,"tr1");var ai=u("tr","details",ac.name,"tr2");
var R=u("td","",ac.name,"td1");var ae=u("td","",ac.name,"td2");
S.appendChild(W);X.appendChild(S);R.appendChild(X);
aj.appendChild(R);ai.appendChild(ae);ag.appendChild(aj);
ag.appendChild(ai);U.appendChild(ag);var ad={tv:"tv tv_alt",tv_table:"tv_table tv_table_alt",tr_tabs:"tr_tabs tr_tabs_alt",tr_content:"tr_content tr_content_alt",td_content:"td_content td_content_alt",td_tabs:"td_tabs td_tabs_alt",tv_tabs_align:"tv_tabs_align tv_tabs_align_alt",tv_tabs_table:"tv_tabs_table tv_tabs_table_alt",tv_contents:"tv_contents tv_contents_alt",tv_tab_selected:"tv_tab tv_selected tv_tab_alt tv_selected_alt",tv_tab_close:"",tv_tab:"tv_tab tv_tab_alt",tv_content:"tv_content tv_content_alt"};
var Q=c.create("_details"+F.createUniqueId(ac.name,ac.id),ae,ad);
var Y=E(ac,Q,V);var T=!ac.id||ac.system?{}:q(ac,Q);
if(L){return y["tab"+ac.name]}var P=function(al){var ak=false;
if(al.type!="keydown"){return}if(al.keyCode==27){if(N.isSelected()){V()
}ak=true}if(ak){al.stopPropagation()}};var K=function(){var ak=false;
if(T.beforeClose){ak|=T.beforeClose()}if(Y.beforeClose){ak|=Y.beforeClose()
}return ak};var aa=function(){if(T.onShow){T.onShow()
}if(Y.onShow){Y.onShow()}window.addEventListener("keydown",P,false)
};var O=function(){if(T.onClose){if(T.onClose()){return true
}}if(Y.onClose){if(Y.onClose()){return true}}window.removeEventListener("keydown",P,false)
};var ah=function(){if(T.onSelect){if(T.onSelect()){return true
}}if(Y.onClose){if(Y.onSelect()){return true}}};var af={onShow:aa,onClose:O,onSelect:ah,beforeClose:K};
y["tab"+ac.name]=af;return af};var q=function(ag,S){var M=j("div",ag.name,ag.id,"script_setting_h");
var K=M.inserted;M.textContent=chrome.i18n.getMessage("Settings");
var T=j("td",ag.name,ag.id,"script_settings_c");var aa=function(){if(this.type=="checkbox"||this.type=="button"){A(this.name,this.key,!this.oldvalue)
}else{if(this.type=="text"||this.type=="select-one"){A(this.name,this.key,this.value)
}}};var W=B.createPosition(chrome.i18n.getMessage("Position_")+" ",{id:"position",name:ag.name,pos:ag.position,posof:ag.positionof},aa);
var ap=B.createScriptStartDropDown(chrome.i18n.getMessage("Run_at"),{id:"run_at",name:ag.name,value:ag.run_at},aa);
var Q=s(chrome.i18n.getMessage("Original_includes"),{id:"includes",item:ag},chrome.i18n.getMessage("User_excludes"));
var L=s(chrome.i18n.getMessage("Original_matches"),{id:"matches",item:ag},chrome.i18n.getMessage("User_excludes"));
var X=s(chrome.i18n.getMessage("Original_excludes"),{id:"excludes",item:ag},chrome.i18n.getMessage("User_includes"));
var aq=u("div","clear",ag.name,ag.id,"clear");var U=s(chrome.i18n.getMessage("User_includes"),{id:"includes",item:ag});
var O=s(chrome.i18n.getMessage("User_matches"),{id:"matches",item:ag});
var Y=s(chrome.i18n.getMessage("User_excludes"),{id:"excludes",item:ag});
var R=B.createCheckbox(chrome.i18n.getMessage("Convert_CDATA_sections_into_a_chrome_compatible_format"),{id:"compat_metadata",name:ag.name,enabled:ag.compat_metadata},aa);
var ah=B.createCheckbox(chrome.i18n.getMessage("Replace_for_each_statements"),{id:"compat_foreach",name:ag.name,enabled:ag.compat_foreach},aa);
var P=B.createCheckbox(chrome.i18n.getMessage("Fix_for_var_in_statements"),{id:"compat_forvarin",name:ag.name,enabled:ag.compat_forvarin},aa);
var ao=B.createCheckbox(chrome.i18n.getMessage("Convert_Array_Assignements"),{id:"compat_arrayleft",name:ag.name,enabled:ag.compat_arrayleft},aa);
var V=B.createCheckbox(chrome.i18n.getMessage("Add_toSource_function_to_Object_Prototype"),{id:"compat_prototypes",name:ag.name,enabled:ag.compat_prototypes},aa);
var aj=[R,ah,P,ao,V];var Z=u("div","section",ag.name,ag.id,"ta_opt");
var af=u("div","section_head",ag.name,ag.id,"head_ta_opt");
var am=u("div","section_content",ag.name,ag.id,"content_ta_opt");
af.textContent=chrome.i18n.getMessage("Settings");Z.appendChild(af);
Z.appendChild(am);var an=u("div","section",ag.name,ag.id,"ta_compat");
var ac=u("div","section_head",ag.name,ag.id,"head_ta_compat");
var al=u("div","section_content",ag.name,ag.id,"content_ta_compat");
ac.textContent=chrome.i18n.getMessage("GM_compat_options_");
an.appendChild(ac);an.appendChild(al);am.appendChild(W);
am.appendChild(ap);am.appendChild(Q.elem);am.appendChild(L.elem);
am.appendChild(X.elem);am.appendChild(aq);am.appendChild(U.elem);
am.appendChild(O.elem);am.appendChild(Y.elem);for(var ab=0;
ab<aj.length;ab++){al.appendChild(aj[ab].elem)}if(ag.awareOfChrome){for(var ae in aj){aj[ae].input.setAttribute("disabled","disabled");
aj[ae].elem.setAttribute("title",chrome.i18n.getMessage("This_script_runs_in_Chrome_mode"))
}}var ai=j("span",ag.name,ag.id);ai.textContent=chrome.i18n.getMessage("Settings");
var ad=j("div",ag.name,ag.id,"tab_content_settings");
ad.appendChild(Z);ad.appendChild(an);T.appendChild(ad);
var N=S.appendTab("script_settings_tab"+F.createUniqueId(ag.name,ag.id),M,T);
if(K){return y["settings"+ag.name]}var J=function(){var ar=false;
if(Q.beforeClose){ar|=Q.beforeClose()}if(L.beforeClose){ar|=L.beforeClose()
}if(X.beforeClose){ar|=X.beforeClose()}if(U.beforeClose){ar|=U.beforeClose()
}if(O.beforeClose){ar|=O.beforeClose()}if(Y.beforeClose){ar|=Y.beforeClose()
}return ar};var ak={beforeClose:J};y["settings"+ag.name]=ak;
return ak};var E=function(af,O,T){var ab=null;var M=j("div",af.name,af.id,"script_editor_h");
var K=M.inserted;M.textContent=chrome.i18n.getMessage("Editor");
var P=j("td",af.name,af.id,"script_editor_c");var Z=u("tr","editor_container p100100",af.name,af.id,"container");
var R=u("tr","editormenubar",af.name,af.id,"container_menu");
var ah=u("table","editor_container_o p100100 noborder",af.name,af.id,"container_o");
ah.appendChild(R);ah.appendChild(Z);P.appendChild(ah);
var S=function(){if(ab){if(ab()){D[af.id]=true;if(Z.editor&&i.editor_enabled){Z.editor.mirror.clearHistory()
}}}};var W=function(){var ak=null;ak=function(al){if(al.cleaned){T()
}};G(af.name,null,aa.input,true,ak)};var U=function(){var ak=confirm(chrome.i18n.getMessage("Really_reset_all_changes_"));
if(ak){if(Z.editor&&i.editor_enabled){Z.editor.mirror.setValue(af.code)
}else{Y.textContent=af.code}}};var J=B.createButton(af.name,"save",null,chrome.i18n.getMessage("Save"),S,chrome.extension.getURL("images/filesave.png"));
var V=B.createButton(af.name,"cancel",null,chrome.i18n.getMessage("Editor_reset"),U,chrome.extension.getURL("images/editor_cancel.png"));
var Q=B.createButton(af.name,"reset",null,chrome.i18n.getMessage("Full_reset"),W,chrome.extension.getURL("images/script_cancel.png"));
var ai=B.createButton(af.name,"close_script",null,chrome.i18n.getMessage("Close"),T,chrome.extension.getURL("images/exit.png"));
var aa=B.createInput(chrome.i18n.getMessage("Update_URL_"),{id:"update_url",name:af.name,value:af.update_url});
aa.input.setAttribute("class","updateurl_input");aa.elem.setAttribute("class","updateurl");
var Y=u("textarea","editorta",af.name,af.id);Y.setAttribute("wrap","off");
var X=u("td","editor_outer",af.name,af.id,"edit");var ae=u("div","editor",af.name,af.id,"edit");
X.appendChild(ae);if(!m&&Z.editor){if(D[af.id]){D[af.id]=false;
return[]}else{if(!af.nnew){F.alert(chrome.i18n.getMessage("Script_modified_in_background"));
return[]}}}var L=u("div","editormenu",af.name,af.id,"editormenu");
R.appendChild(L);R.appendChild(aa.elem);if(!Z.inserted){ae.appendChild(Y);
Z.appendChild(X)}if(!af.system){ab=function(am){var al=true;
var an=document.getElementById("input_Show_fixed_source_showFixedSrc_cb");
if(an&&an.checked){al=confirm(chrome.i18n.getMessage("Do_you_really_want_to_store_fixed_code_",chrome.i18n.getMessage("Show_fixed_source")))
}var am=Z.editor&&i.editor_enabled?Z.editor.mirror.getValue():Y.value;
if(al){var ak=null;if(af.nnew){ak=function(ao){if(ao.installed){T()
}}}G(af.name,am,aa.input,false,ak)}return al};L.appendChild(J);
L.appendChild(V)}if(!af.nnew){L.appendChild(Q)}L.appendChild(ai);
var N=O.appendTab("script_editor_tab"+F.createUniqueId(af.name,af.id),M,P);
if(K){return y["editor"+af.name]}var aj=function(){if(Z.editor){Z.editor.mirror.refresh()
}};var ad=function(ak,am){var al=false;if(am.type!="keydown"){return
}if(am.ctrlKey&&am.keyCode==83){S();al=true}else{if(am.ctrlKey&&am.keyCode==81){T();
al=true}else{if(am.ctrlKey&&am.keyCode==70){Z.editor.searchText=Z.editor.search();
al=true}else{if(am.keyCode==114&&am.keyIdentifier=="F3"){Z.editor.searchText=Z.editor.search(Z.editor.searchText);
al=true}else{if(am.ctrlKey&&am.keyCode==82){Z.editor.replace();
al=true}else{if(am.ctrlKey&&am.keyCode==71){Z.editor.jump();
al=true}else{if(am.keyCode==27){T();al=true}}}}}}}if(al){am.stop()
}};var ac=function(){var ak=P.getElementsByTagName("textarea");
if(ak.length){var al=ak[0];if(!Z.editor){if(i.editor_enabled){var am=al.parentNode;
am.removeChild(al);Z.editor=new MirrorFrame(am,{value:af.code,indentUnit:Number(i.editor_indentUnit),indentWithTabs:i.editor_indentWithTabs=="tabs",smartIndent:i.editor_tabMode!="classic",enterMode:i.editor_enterMode,electricChars:i.editor_electricChars.toString()=="true",lineNumbers:i.editor_lineNumbers.toString()=="true",onKeyEvent:ad,matchBrackets:true})
}else{al.value=af.code}}}};var ag={onSelect:aj,onShow:ac,onClose:function(){var ak=function(){Z.editor=null
};var al=false;if(i.editor_enabled){if(Z.editor){var am=Z.editor.mirror.historySize();
if(am.undo){al=true}}}else{al=(Y.value!=af.code)}if(al){var an=confirm(chrome.i18n.getMessage("There_are_unsaved_changed_"));
if(an){ak()}return !an}else{ak();return false}}};y["editor"+af.name]=ag;
return ag};var C=function(ae,L,af){var M;var aj;var V=ae.icon&&!ae.nativeScript;
var ao=u("span","script_name clickable",ae.name,ae.id,"sname");
var ag=u("img","nameNicon16",ae.name,ae.id,"sname_img");
var R=u("span",V?"nameNname16":"",ae.name,ae.id,"sname_name");
var J=ae.homepage?ae.homepage:(ae.namespace&&ae.namespace.search("http://")==0?ae.namespace:null);
R.textContent=(ae.name.length>35?ae.name.substr(0,35)+"...":ae.name);
var ab=j("span",ae.name,ae.id,"sversion");ab.textContent=ae.version?ae.version:"";
if(V){ag.src=ae.icon;ao.appendChild(ag)}var ap=[];var an=function(ar,aw,av,au){if(!au){au="scripttd"
}var at=u("td",au,ar.name,ar.id,av);if(aw){at.appendChild(aw)
}return at};var ac=function(){if(M){M.remove();M=null
}};var aq=function(){ao.parentNode.removeChild(ao)};
var X=function(){var ar=function(){for(var at in w){var au=w[at];
if(au.id==ae.id&&au.name==ae.name){C(au,L,af);break
}}};window.setTimeout(ar,1)};var Y=function(){var ar=true;
if(aj.beforeClose){ar=!aj.beforeClose()}if(aj.onClose&&aj.onClose()){return
}ac();aq();if(ar){X()}};var am=function(){if(aj.onSelect&&aj.onSelect()){return
}};var ai=function(){var ar=null;if(ae.nnew){ar=u("div","head_icon",ae.name,ae.id,"details_h");
ar.appendChild(B.createImage(ae.image,ae.name,ae.id,"new_script_head"))
}else{ar=u("div","",ae.name,ae.id,"details_h");ar.textContent=chrome.i18n.getMessage("Edit")+" - "+(ae.name.length>25?ae.name.substr(0,25)+"...":ae.name)
}var at=j("td",ae.name,ae.id,"details_c");M=af.insertTab(null,"details_"+F.createUniqueId(ae.name,ae.id),ar,at,am,ae.nnew?null:Y);
aj=x(M,ae,L,at,Y)};var ad=function(at,ar){if(!M){ai()
}if(aj.onShow){aj.onShow()}M.show();if((!at||at.button!=1)&&!ar){M.select()
}R.setAttribute("open","true")};if(R.getAttribute("open")=="true"){ad(null,true)
}var O=j("span",ae.name,ae.id,"hp");if(J){var Z=j("a",ae.name,ae.id,"hp");
Z.setAttribute("href",J);Z.setAttribute("target","_blank");
var T=B.createImage(chrome.extension.getURL("images/home.png"),ae.name,ae.id,"hp","");
Z.appendChild(T);O.appendChild(Z)}var ak=function(aC,aA){var ay=1000*60;
var av=1000*60*60;var at=1000*60*60*24;var aw=aC.getTime();
var ar=aA.getTime();var aB=Math.abs(aw-ar);var au=Math.round(aB/ay);
var ax=Math.round(aB/av);var az=Math.round(aB/at);if(au<=60){return au+" min"
}else{if(ax<=48){return ax+" h"}else{return az+" d"
}}};var Q=j("span",ae.name,ae.id,"last_updated");var P="";
if(ae.nativeScript||!ae.id||ae.system){P=""}else{var N=function(){var at=Q.textContent;
Q.textContent="";Q.appendChild(B.createImage("/images/download.gif",ae.name+"_down",ae.id));
var ar=function(au){Q.textContent=at;if(au){Q.style.color="green";
Q.title=chrome.i18n.getMessage("There_is_an_update_for_0name0_avaiable_",ae.name);
ac();aq();A(null,false)}else{Q.style.color="red";Q.title=chrome.i18n.getMessage("No_update_found__sry_")
}};k(ae.id,ar)};if(!R.inserted){Q.addEventListener("click",N);
Q.style.cursor="pointer";Q.title=chrome.i18n.getMessage("Check_for_Updates")
}if(ae.lastUpdated){try{P=ak(new Date(),new Date(ae.lastUpdated))
}catch(ah){console.log("o: error calculating time "+ah.message)
}}else{P="?"}}Q.textContent=P;if(ae.update_url&&ae.update_url.trim()!=""){var U=ae.update_url.match(new RegExp("http://userscripts.org/scripts/source/([0-9]{1,9}).user.js"));
if(U&&U.length==2){var Z=j("a",ae.name,ae.id,"hp");
Z.setAttribute("href","http://userscripts.org/scripts/show/"+U[1]);
Z.setAttribute("target","_blank");var S=B.createImage(F.staticVars.USOicon,ae.name,ae.id,"uso","");
Z.appendChild(S);O.appendChild(Z)}}var K=B.createImage(chrome.extension.getURL("images/delete.png"),ae.nativeScript?ae.id:ae.name,"delete","delete",chrome.i18n.getMessage("Delete"),function(){if(ae.nativeScript){var ar=confirm(chrome.i18n.getMessage("Really_delete_this_extension__"));
if(ar==true){r(this.name,"installed","false");L.parentNode.removeChild(L)
}}else{var ar=confirm(chrome.i18n.getMessage("Really_delete_this_script__"));
if(ar==true){G(ae.name,null,false,null);L.parentNode.removeChild(L)
}}});if(!ao.inserted&&!ae.nativeScript){ao.addEventListener("click",ad)
}ao.appendChild(R);var W=an(ae,ao,"script_td1","scripttd_name");
W.title=ae.description?ae.name+"\n\n"+ae.description:ae.name;
ap.push(W);ap.push(an(ae,ab,"script_td25","scripttd_version"));
ap.push(an(ae,p(ae),"script_td3"));ap.push(an(ae,a(ae),"script_td4"));
ap.push(an(ae,O,"script_td5"));ap.push(an(ae,Q,"script_td6"));
ap.push(an(ae,b(ae),"script_td7"));ap.push(an(ae,ae.id&&!ae.system?K:null,"script_td8"));
for(var aa=ap.length;aa<10;aa++){ap.push(j("td",ae.name,ae.id,"script_filler_"+aa))
}if(ae.nnew){var al=function(){ad(null,true)};window.setTimeout(al,100);
if(!h&&window.location.href.search("new=1")!=-1){window.setTimeout(ad,1000)
}}return ap};var a=function(L){var M=j("span",L.name,L.id,"pos_features",true);
if(!L.id){return M}if(L.awareOfChrome){var J=B.createImage("http://www.google.com/images/icons/product/chrome-16.png",L.name,L.id,"chrome_mode",chrome.i18n.getMessage("This_script_runs_in_Chrome_mode"));
M.appendChild(J)}if(L.nativeScript){var J=B.createImage(L.icon,L.name,L.id,"chrome_ext",chrome.i18n.getMessage("This_is_a_chrome_extension"));
M.appendChild(J)}if(L.nativeScript){return M}if(L.code.search("GM_xmlhttpRequest")!=-1){var J=B.createImage(chrome.extension.getURL("images/web.png"),L.name,L.id,"web",chrome.i18n.getMessage("This_script_has_full_web_access"));
M.appendChild(J)}if(L.code.search("GM_setValue")!=-1){var J=B.createImage(chrome.extension.getURL("images/db.png"),L.name,L.id,"db",chrome.i18n.getMessage("This_script_stores_data"));
M.appendChild(J)}if(L.code.search("unsafeWindow")!=-1){var J=B.createImage(chrome.extension.getURL("images/resources.png"),L.name,L.id,"resource",chrome.i18n.getMessage("This_script_has_access_to_webpage_scripts"));
M.appendChild(J)}for(var N=0;N<L.includes.length;N++){if(L.includes[N].search("https")!=-1){var J=B.createImage(chrome.extension.getURL("images/halfencrypted.png"),L.name,L.id,"encrypt",chrome.i18n.getMessage("This_script_has_access_to_https_pages"));
M.appendChild(J);break}}for(var K in L.options){if(K.search("compat")!=-1&&L.options[K]){var J=B.createImage(chrome.extension.getURL("images/critical.png"),L.name,L.id,"crit",chrome.i18n.getMessage("One_or_more_compatibility_options_are_set"));
M.appendChild(J);break}}if(L.system){var J=B.createImage(chrome.extension.getURL("images/lock.png"),L.name,L.id,"lock",chrome.i18n.getMessage("This_is_a_system_script"));
M.appendChild(J)}return M};var b=function(M){var O=j("span",M.name,M.id,"pos_images",true);
if(!M.id||M.nativeScript){return O}var J=B.createImage(chrome.extension.getURL("images/2uparrow.png"),M.name,"position","2up","2 Up",function(){A(this.name,this.key,1)
});var K=B.createImage(chrome.extension.getURL("images/1downarrow.png"),M.name,"position","1up","1 Up",function(){A(this.name,this.key,M.position-1)
});var N=B.createImage(chrome.extension.getURL("images/1downarrow1.png"),M.name,"position","1down","1 Down",function(){A(this.name,this.key,M.position+1)
});var L=B.createImage(chrome.extension.getURL("images/2downarrow.png"),M.name,"position","2down","2 Down",function(){A(this.name,this.key,M.positionof)
});if(M.position>1){if(false){O.appendChild(J)}O.appendChild(K)
}if(M.position<M.positionof){O.appendChild(N);if(false){O.appendChild(L)
}}return O};var p=function(R){var X=j("span",R.name,R.id,"site_images",true);
var N=function(ad){if(ad.search("http")!=0){ad="http://"+ad
}var Z=ad.split("/");if(Z.length<3){return null}var af=Z[2].split(".");
if(af.length<2){return null}var aa=af[af.length-1];
var ae=af[af.length-2];var ac=[];for(var ab=af.length-3;
ab>=0;ab--){if(af[ab].search("\\*")!=-1){break}ac.push(af[ab])
}return{tld:aa,dom:ae,predom:ac.reverse()}};if(R.includes){var V=0;
for(var M=0;M<R.includes.length;M++){var O=R.includes[M];
if(O.search(/htt(ps|p):\/\/(\*\/\*|\*)*$/)!=-1||O=="*"){var S=B.createImage(chrome.extension.getURL("images/web.png"),R.name,R.id,R.includes[M],R.includes[M]);
X.appendChild(S);break;continue}var L=N(O);if(L==null){continue
}var Q=false;for(var K=0;K<M;K++){var J=R.includes[K];
var Y=N(J);if(Y==null){continue}if(Y.dom==L.dom){Q=true;
break}}if(!Q){var P="com";var T="";if(L.tld!="*"&&L.tld!="tld"){P=L.tld
}if(L.predom.length){T=L.predom.join(".")+"."}var U=("http://"+T+L.dom+"."+P+"/favicon.ico").replace(/\*/g,"");
if(U.search("http://userscripts.org/")==0||U.search("http://userscripts.com/")==0){U=F.staticVars.USOicon
}var S=B.createImage(U,R.name,R.id,R.includes[M],R.includes[M]);
X.appendChild(S);V++}if(V>7){var W=u("span",R.name,R.id,"tbc");
W.textContent="...";X.appendChild(W);break}}}return X
};var n=function(K,J){try{var M=function(N){chrome.tabs.sendRequest(N.id,{method:"loadUrl",url:K,newtab:J},function(O){})
};if(J){chrome.extension.sendRequest({method:"openInTab",url:K},function(N){})
}else{chrome.tabs.getSelected(null,M)}}catch(L){console.log("lU: "+L.message)
}};var G=function(L,O,K,M,J){try{var N=K?K.value:"";
chrome.extension.sendRequest({method:"saveScript",name:L,code:O,clean:M,update_url:N},function(Q){if(Q.items){t(Q.items,L&&true)
}if(!O){H.hide()}if(J){J(Q)}});H.wait()}catch(P){console.log("sS: "+P.message)
}};var f=function(J,K,M){try{chrome.extension.sendRequest({method:"setOption",name:J,value:K},function(N){if(!M){t(N.items)
}});H.wait()}catch(L){console.log("sO: "+L.message)
}};var l=function(M,L,O,K){if(d){console.log("run modifyScriptOptions")
}if(O==undefined){O=true}try{var N={method:"modifyScriptOptions",name:M,reload:O,reorder:K};
for(var J in L){if(!L.hasOwnProperty(J)){continue}N[J]=L[J]
}if(d){console.log("modifyScriptOptions sendReq")}chrome.extension.sendRequest(N,function(Q){if(Q.items){t(Q.items,M&&true)
}});H.wait()}catch(P){console.log("mSo: "+P.message)
}};var A=function(K,P,N,M,J){if(d){console.log("run modifyScriptOption")
}if(M==undefined){M=true}try{var L={method:"modifyScriptOptions",name:K,reload:M,reorder:J};
if(P&&P!=""){L[P]=N}if(d){console.log("modifyScriptOption sendReq")
}chrome.extension.sendRequest(L,function(Q){if(Q&&Q.items){t(Q.items,K&&true)
}});H.wait()}catch(O){console.log("mSo: "+O.message)
}};var r=function(O,N,L,K){if(d){console.log("run modifyNativeScriptOption")
}if(K==undefined){K=true}try{var J={method:"modifyNativeScript",nid:O,actionid:N,value:L,reload:K};
if(d){console.log("modifyNativeScriptOption sendReq")
}chrome.extension.sendRequest(J,function(P){if(P.items){t(P.items,name&&true)
}});H.wait()}catch(M){console.log("mSo: "+M.message)
}};var k=function(M,J){try{var K=function(N){if(J){J(N.updatable)
}};chrome.extension.sendRequest({method:"runScriptUpdates",scriptid:M},K)
}catch(L){console.log("rSu: "+L.message)}};chrome.extension.onRequest.addListener(function(L,K,J){if(d){console.log("o: method "+L.method)
}if(L.method=="updateOptions"){t(L.items);J({})}else{if(L.method=="confirm"){var M=confirm(L.msg);
J({confirm:M})}else{if(L.method=="showMsg"){F.alert(L.msg);
J({})}else{if(d){console.log("o: "+chrome.i18n.getMessage("Unknown_method_0name0",L.method))
}}}}});if(d){console.log("Register request listener (options)")
}var e=function(){window.removeEventListener("DOMContentLoaded",e,false);
window.removeEventListener("load",e,false);A(null,false)
};window.addEventListener("DOMContentLoaded",e,false);
window.addEventListener("load",e,false)})();
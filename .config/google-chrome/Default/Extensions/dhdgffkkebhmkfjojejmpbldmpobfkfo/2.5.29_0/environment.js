
var D=false;var PV=false;var XV=false;var MV=false;
var CV=false;var SV=false;var adjustLogLevel=function(){D|=(logLevel>=60);
V|=(logLevel>=80);EV|=(logLevel>=100);MV|=(logLevel>=100);
CV|=(logLevel>=100);SV|=(logLevel>=100);EMV|=(logLevel>=100)
};(function(){var o="DOMContentLoaded";var v="load";
var M="DOMNodeInserted";var A=0;var C=1;var c="TM_internal";
var R=[];TMwin.domContentLoaded=false;TMwin.loadHappened=false;
TMwin.domNodeInserted=false;TMwin.props={};if(!chromeEmu){if(V||D){console.log("environment: replace chromeEmu var with chrome!")
}chromeEmu=chrome}var r=function(T){return({}).toString.apply(T).match(/\s([a-z|A-Z]+)/)[1]
};var e=function(T){var U=document.createElement("div");
U.appendChild(T.cloneNode(true));return U.innerHTML
};var I=function(U,T){if(T==undefined){T=100}return(T&&U&&(U==document||(I(U.parentNode,T-1))))
};var N=function(aa,T,ae,af){try{var ag=af.context;
var ac="";var ad="";if(!ag.__TMbackref){ag.__TMbackref={}
}for(var W in af.elements){if(!af.elements.hasOwnProperty(W)){continue
}var ab=af.elements[W];if(ab.name){if(ab.overwrite){ac+="var "+ab.name+" = "+ab.value+";\n"
}else{if(ab.scriptid){ag.__TMbackref[ab.name+"_"+ab.scriptid]=ab.value;
ac+="var "+ab.name+" = this.__TMbackref."+ab.name+"_"+ab.scriptid+";\n"
}else{ag[ab.name]=ab.value;ac+="var "+ab.name+" = this."+ab.name+";\n"
}}}else{if(D){console.log("env: WARN: unexpected item in props elem: "+JSON.stringify(ab))
}}}ag.__TMprotector={addListener:E};var U=function(aj){var ai="";
var ah="";var ah="var __protector = this.__TMprotector;\n";
ah+="try {\n";ah+=ai+ae+aj+"\n";ah+="} catch (e) {\n";
ah+="    console.log(\"ERROR: Execution of script '"+aa.name+"' failed! \" + e.message); \n";
ah+="    console.log(e.stack)\n";ah+="}\n";return ah
};ad='arguments.callee.setID({ id: "'+aa.id+'", run_at: "'+aa.options.run_at+'", ns: "'+aa.namespace+'" });\n';
var Z=new Function(ad+ac+U(T));Z.apply(ag,[])}catch(Y){if(D){console.log("env: ERROR: Syntax error @ '"+aa.name+"'!\n##########################\n"+ac+T+"##########################\nERROR: "+Y.message+"\n");
console.log(Y.stack)}else{console.log("env: ERROR: Syntax error @ '"+aa.name+"'!\n"+Y.message+"\n");
console.log(Y.stack)}var X=function(){throw Y};window.setTimeout(X,1);
return}};var G=[];var i={events:[],done:{}};var t=[];
var z=function(U,T){var W=function(){var X=document.createEvent("MutationEvent");
X.initMutationEvent(U,true,false,T.relatedNode,null,null,null,X.ADDITION);
T.target.dispatchEvent(X)};window.setTimeout(W,1)};
var k=function(U){if(V||EV){console.log("env: postLoadEvent!")
}var T=v+"_"+U;z(T,{target:document,relatedNode:document})
};var K=function(U){if(V||EV){console.log("env: postDomEventListener!")
}var T=o+"_"+U;z(T,{target:document,relatedNode:document})
};var S=function(Y,X){if(!i){return}if(V||EV){console.log("env: refireAllNodeInserts!")
}var W=M+"_"+Y;var T=i.events.length;for(var U=0;U<T;
U++){if(!X||i.events[U].domContentLoaded){z(W,i.events[U].node)
}}};var j=function(T){TMwin.loadHappened=true;TMwin.domContentLoaded=true;
if(V||EV||D){console.log("env: DOMContentLoaded Event!")
}s()};var P=function(T){if(!TMwin.domNodeInserted&&(V||EV||D)){console.log("env: first DOMNodeInserted Event!")
}TMwin.loadHappened=true;TMwin.domNodeInserted=true;
if(i){i.events.push({node:T,domContentLoaded:TMwin.domContentLoaded})
}};var J=function(T){TMwin.loadHappened=true;if(V||EV||D){console.log("env: load Event!")
}};var a=function(){document.removeEventListener(M,P,false);
document.removeEventListener(o,j,false);document.removeEventListener(v,J,false);
document.removeEventListener("unload",a,false)};var s=function(){if(!TMwin.domContentLoaded){if(V||EV||D){console.log("env: Content not loaded, schedule loadListeners run!")
}return -1}var T=G.length;while(G.length>0){var U=function(){var W=G.shift();
try{window.setTimeout(W.fn,1)}catch(X){console.log("ERROR: Execution (loadListener) of script env "+W.name+" failed!"+X.message)
}};U()}return T};var g=function(U,T){var W=function(){U()
};window.setTimeout(W,1)};var y=function(U,T){if(!document.body){var W=function(){document.removeEventListener("load",W,false);
document.removeEventListener("DOMNodeInserted",W,false);
document.removeEventListener("DOMContentLoaded",W,false);
y(U,T)};document.addEventListener("load",W,false);document.addEventListener("DOMNodeInserted",W,false);
document.addEventListener("DOMContentLoaded",W,false)
}else{var X=function(){U()};window.setTimeout(X,1)}};
var B=function(X,U,W){var T=function(){X()};G.push({fn:T,name:W});
if(!TMwin.domNodeInserted&&!TMwin.domContentLoaded){if(V||EV||D){console.log("env: schedule for node Insert Event!")
}}else{s()}};function f(){var T=[window.HTMLDocument.prototype,window.__proto__];
for(var W=0;W<T.length;W++){var U=T[W];if(!U.__addEventListener){U.__addEventListener=U.addEventListener;
U.__removeEventListener=U.removeEventListener;U.removeEventListener=function(Z,Y,X){this.__removeEventListener(Z,Y,X)
};U.addEventListener=function(X,af,ab){if(V||EV){console.log("env: addEventListener "+X)
}var ag=true;if(X==v||X==o||X==M){var Y=null;try{Y=arguments.callee.getID?arguments.callee.getID():0
}catch(ac){if(D){console.log("env: Error: event "+X);
console.log(ac)}}if(V||EV){console.log("env: sid done "+X)
}var ah=null;if(Y){for(var aa in TMwin.props){if(!TMwin.props.hasOwnProperty(aa)){continue
}if(TMwin.props[aa].scriptid==Y.id){ah=aa;break}}if(X==v){if(TMwin.loadHappened){var ad=((new Date()).getTime().toString())+Math.floor(Math.random()*9999+1);
var Z=Y.id+"_"+ad;this.__addEventListener(X+"_"+Z,af,ab);
k(Z);ag=false}}else{if(X==o){if(TMwin.domContentLoaded){var ad=((new Date()).getTime().toString())+Math.floor(Math.random()*9999+1);
var Z=Y.id+"_"+ad;this.__addEventListener(X+"_"+Z,af,ab);
K(Z);ag=false}}else{if(X==M){if(!i.done[Y]){i.done[Y]=true;
this.__addEventListener(X+"_"+Y.id,af,ab);var ae=Y.run_at!="document-start"&&Y.run_at!="document-body";
S(Y.id,ae)}}}}}}if(ag){this.__addEventListener(X,af,ab)
}}}}}var w={};function E(U,T){w[U]=T}function x(){var X=function(aa,Z,ab){for(var Y in w){if(Y==aa.id){w[Y](Z,ab)
}}};var W={};for(var U=0;U<R.length;U++){var T=function(){var Z=R[U];
var Y=function(){return W[Z]};var aa=function(ad){if(V){console.log("TM_protector(__defineSetter__): "+Z+"set called")
}var ab=null;try{ab=(arguments.callee.getID?arguments.callee.getID():0)
}catch(ac){if(D){console.log("env: Error: protector set "+Z);
console.log(ac)}}if(ab){X(ab,Z,ad)}else{W[Z]=ad}};if(V){console.log("TM_protector: define setter for '"+Z+"'")
}W[Z]=window[Z];window.__defineGetter__(Z,Y);window.__defineSetter__(Z,aa)
};T()}}function n(){if(!Function.prototype.getID){Function.prototype.getID=function(T){if(T==undefined){T=20
}if(T==0){return null}if(!this.__tmid&&this.caller&&this.caller.getID){var U=this.caller.getID(T-1);
return U}return this.__tmid};Function.prototype.setID=function(T){this.__tmid=T;
return this}}}function O(){var T="HTMLDocument";if(!window[T].prototype.__evaluate){window[T].prototype.__evaluate=window[T].prototype.evaluate;
window[T].prototype.evaluate=function(ad,W,aa,Z,Y){if(V||XV){console.log("env: document.evaluate "+ad)
}if(!W){W=this}var ac;if(typeof XPathResult!="undefined"){var U=null;
var ae=ad;try{ac=this.__evaluate(ae,W,aa,Z,Y)}catch(ab){if(V||XV){console.log("env: Error: document.evaluate "+JSON.stringify(ab))
}}var X=true;try{X&=!ac.snapshotLength}catch(ab){}try{X&=!ac.singleNodeValue
}catch(ab){}if(X&&ad.charAt(0)!="."&&!I(W)){if(V||XV){console.log("env: query added elem for "+ae)
}ae=(ad.charAt(0)=="/"?".":"./")+ad;ac=this.__evaluate(ae,W,aa,Z,Y)
}else{if(V||XV){console.log("env: queried document for "+ae)
}}if(V||XV){console.log("env: query returned ");console.log(ac)
}}else{if(V||XV){console.log("env: XPathResult == undefined, but selectNodes via "+xpathExpr)
}ac=W.selectNodes(xpathExpr)}return ac}}}function p(){if(TMwin.use.safeContext){window.open=function(U){var X="__o__"+TM_content_context;
var W="window."+X+' = window.open(decodeURI("'+encodeURI(U)+'"));';
L(W);var T=unsafeWindow[X];delete unsafeWindow[X];return T
}}}function d(){if(!TMwin.use.safeContext||window.__setTimeout){return
}window.__setTimeout=window.setTimeout;window.__setInterval=window.setInterval;
window.setTimeout=function(){var T=arguments;var U=T[0];
if(typeof U==="string"){T[0]=function(){L(U)}}return __setTimeout.apply(this,T)
};window.setInterval=function(){var T=arguments;var U=T[0];
if(typeof U==="string"){T[0]=function(){L(U)}}return __setInterval.apply(this,T)
}}var L=function(U){if(TMwin.use.safeContext){var T=document.createEvent("MutationEvent");
T.initMutationEvent("TM_do"+TM_content_context,false,false,null,null,null,encodeURI(U),T.ADDITION);
document.dispatchEvent(T);return T.returnValue}else{console.log("env: ERROR: assert(use.safeContext)")
}};var m=function(T,W){var Y=TM_context_id+"#"+T;var U=function(){if(V||MV){console.log("env: unRegisterMenuCMD due to unload "+W.toString())
}chromeEmu.extension.sendRequest({method:"unRegisterMenuCmd",name:T,id:Y},function(Z){})
};var X=function(Z){window.removeEventListener("unload",U,false);
if(Z.run){if(V||MV){console.log("env: execMenuCmd "+W.toString())
}window.setTimeout(function(){W()},1);m(T,W)}};window.addEventListener("unload",U,false);
if(V||MV){console.log("env: registerMenuCmd "+W.toString())
}chromeEmu.extension.sendRequest({method:"registerMenuCmd",name:T,id:TM_context_id,menuId:Y},X)
};var u=function(U){var T=null;var X=function(){if(T===null){window.setTimeout(X,500)
}else{if(T>0){chromeEmu.extension.sendRequest({method:"closeTab",tabId:T,id:TM_context_id},W);
T=undefined}else{if(D){console.log("env: attempt to close already closed tab!")
}}}};var W=function(Y){T=Y.tabId};if(U&&U.search(/^\/\//)==0){U=location.protocol+U
}chromeEmu.extension.sendRequest({method:"openInTab",url:U,id:TM_context_id},W);
return{close:X}};var b=function(T){var U=false;var Z=function(ae,ad){var af=function(){ae(ad)
};if(ae&&!U){window.setTimeout(af,1)}};if(TMwin.use.safeContext){var ac=function(ad){Z(T.onload,ad)
};var Y=function(ad){Z(T.onreadystatechange,ad)};var aa=function(ad){Z(T.onerror,ad)
};chromeEmu.xmlHttpRequest(T,ac,Y,aa)}else{var W=chromeEmu.extension.connect("xhr_"+TM_context_id);
W.postMessage({method:"xhr",details:T,id:TM_context_id});
var ab=function(ad){try{if(ad.success){if(T.onload){if(ad.data.responseXML){ad.data.responseXML=unescape(ad.data.responseXML)
}Z(T.onload,ad.data)}}else{if(ad.change){if(T.onreadystatechange){Z(T.onreadystatechange,ad.data)
}}else{if(T.onerror){Z(T.onerror,ad.data)}}}}catch(ae){console.log("env: Error: TM_xmlhttpRequest - "+ae.message+"\n"+JSON.stringify(T))
}};W.onMessage.addListener(ab);var X=function(ad){console.log("env: onDisconnect! :)")
};if(V||CV){W.onDisconnect.addListener(X)}}return{abort:function(){U=true
}}};var F=function(T){chromeEmu.extension.sendRequest({method:"getTab",id:TM_context_id},function(U){if(T){T(U.data)
}})};var H=function(T){chromeEmu.extension.sendRequest({method:"saveTab",id:TM_context_id,tab:T},function(U){})
};var q=function(T){chromeEmu.extension.sendRequest({method:"getTabs",id:TM_context_id},function(U){if(T){T(U.data)
}})};var Q=function(U,T){chromeEmu.extension.sendRequest({method:"scriptClick",url:U,id:TM_context_id},function(W){if(T){T(W)
}})};var h=function(){var T="";T+=((new Date()).getTime().toString());
T+=Math.floor(Math.random()*6121983+1);return T};var l=function(aa){var av=[];
var am=aa.storage;var W=aa.script.name;var X=aa.script;
var ab=function(aC){};var Y=null;var aB=function(){var aD=function(aF){if(aF.storage){for(var aE in aF.storage.data){if(!aF.storage.data.hasOwnProperty(aE)){continue
}var aG=function(){var aH=aE;var aI=am.data[aE];am.data[aE]=aF.storage.data[aE];
var aJ=am.data[aE];var aK=function(){ae(aH,aI,aJ,true)
};if(SV){console.log("env: storageListener - config key "+aH+": "+aI+" -> "+aJ)
}window.setTimeout(aK,1)};aG()}}if(aF.removed){am[aF.removed]=ac
}if(aF.error){console.log("env: Error: storage listener... :(")
}};Y=chromeEmu.extension.connect("storageListener_"+TM_context_id);
Y.onMessage.addListener(aD);var aC=function(aE){console.log("env: storageListener onDisconnect! :)")
};if(V||SV){Y.onDisconnect.addListener(aC)}Y.postMessage({method:"addStorageListener",name:W,id:TM_context_id})
};aB();var aq=function(){Y.postMessage({method:"removeStorageListener",name:W,storage:am,id:TM_context_id})
};var ap=function(aC){Y.postMessage({method:"saveStorageKey",name:W,key:aC,value:am.data[aC],id:TM_context_id,ts:am.ts});
if(SV){console.log("env: saveStorageKey - config key "+aC+": "+am.data[aC])
}};var ax=function(aC){ap(aC)};var ae=function(aE,aC,aD,aG){if(aC==aD){return
}for(var aF in av){if(!av.hasOwnProperty(aF)){continue
}var aI=av[aF];if(aI&&aI.key==aE){if(aI.cb){try{aI.cb(aE,aC,aD,aG)
}catch(aH){if(D){console.log("env: value change listener of '"+aE+"' failed with: "+aH.message)
}}}}}};var ag=function(aD,aC){var aH=0;for(var aG in av){if(!av.hasOwnProperty(aG)){continue
}var aE=av[aG];if(aG.id>aH){aH=aG.id}}aH++;var aF={id:aH,key:aD,cb:aC};
av.push(aF);return aH};var T=function(aE){for(var aD in av){if(!av.hasOwnProperty(aD)){continue
}var aC=av[aD];if(aD.id==aE){delete av[aD];return true
}}};var an=function(aE){var aC=am.data[aE];am.ts=(new Date()).getTime();
delete am.data[aE];ax(aE);var aD=function(){ae(aE,aC,am.data[aE],false)
};window.setTimeout(aD,1)};var ah=function(){var aC=new Array();
for(var aD in am.data){if(!am.data.hasOwnProperty(aD)){continue
}aC.push(aD)}return aC};var au=function(aD,aC){var aF=am.data[aD];
if(!aF){return aC}var aE=aF[0];aF=aF.substring(1);switch(aE){case"b":return aF=="true";
case"n":return Number(aF);case"o":try{return JSON.parse(aF)
}catch(aG){console.log("env: TM_getValue: "+aG);return aC
}default:return aF}};var at=function(aE,aG){var aC=am.data[aE];
var aF=(typeof aG)[0];switch(aF){case"o":try{aG=aF+JSON.stringify(aG)
}catch(aH){console.log(aH);return}break;default:aG=aF+aG
}am.ts=(new Date()).getTime();am.data[aE]=aG;var aD=function(){ax(aE);
ae(aE,aC,am.data[aE],false)};window.setTimeout(aD,1)
};var U=function(aD){for(var aC in X.resources){var aE=X.resources[aC];
if(aE.name==aD){return aE.resText}}return null};var al=function(aD){for(var aC in X.resources){var aE=X.resources[aC];
if(aE.name==aD){return aE.resURL}}return null};var Z=function(aC){if(window.console){window.console.log(aC)
}else{console.log(aC)}};var ad=function(aC){try{var aD=document.createElement("style");
aD.textContent=aC;(document.head||document.body||document.documentElement||document).appendChild(aD)
}catch(aE){console.log("Error: env: adding style "+aE)
}};var ak=function(aH,aG,aF,aC,aE){if(!aG){aG=W}if(aF==ac){aF=aa.script.icon?aa.script.icon:aa.script.icon64
}var aD=function(aI){if(aI.clicked&&aC){aC()}};chromeEmu.extension.sendRequest({method:"notification",delay:aE,msg:aH,image:aF,title:aG,id:TM_context_id},aD)
};var az=function(aD,aC){return ay(aD,aC)};var ay=function(aD,aC){var aF="__u__"+Math.floor(Math.random()*6121983+1);
unsafeWindow[aF]=aD;unsafeWindow[aF+"_"]=aC;var aE=L('window["'+aF+'"].apply(this, window["'+aF+'_"])');
delete unsafeWindow[aF];return aE};var ai=function(){var aE={observers:1,id:1,enabled:1,hash:1,fileURL:1};
var aD={script:{}};for(var aC in X){if(!X.hasOwnProperty(aC)||aE[aC]){continue
}aD.script[aC]=X[aC]}aD.script["run-at"]=X.options.override.run_at||X.options.run_at;
aD.script.excludes=X.options.override.orig_excludes;
aD.script.includes=X.options.override.orig_includes;
aD.script.matches=X.options.override.orig_includes;
aD.script.unwrap=false;aD.scriptMetaStr=aa.header;aD.scriptSource=aa.code;
aD.scriptWillUpdate=!!(X.options.fileURL&&X.options.fileURL!="");
aD.scriptUpdateURL=X.options.fileURL;aD.version=aa.version;
aD.scriptHandler="Tampermonkey";return aD};var af=function(){this.GM_addStyle=function(aC){return ad(aC)
};this.GM_deleteValue=function(aC){return an(aC)};this.GM_listValues=function(){return ah()
};this.GM_getValue=function(aD,aC){return au(aD,aC)
};this.GM_addValueChangeListener=function(aD,aC){return ag(aD,aC)
};this.GM_removeValueChangeListener=function(aC){return T(aC)
};this.GM_log=function(aC){return Z(aC)};this.GM_registerMenuCommand=function(aC,aD){return m(aC,aD)
};this.GM_openInTab=function(aC){return u(aC)};this.GM_setValue=function(aC,aD){return at(aC,aD)
};this.GM_xmlhttpRequest=function(aC){return b(aC)};
this.GM_getResourceText=function(aC){return U(aC)};
this.GM_getResourceURL=function(aC){return al(aC)};
this.GM_notification=function(aF,aE,aD,aG,aC){return ak(aF,aE,aD,aG,aC)
};this.GM_installScript=function(aC,aD){return Q(aC,aD)
};this.GM_getTab=function(aC){return F(aC)};this.GM_saveTab=function(aC){return H(aC)
};this.GM_getTabs=function(aC){return q(aC)};this.GM_info=function(){return ai()
}};var ac=TMwin.undefined;if(TMwin.props[X.namespace]==ac){TMwin.props[X.namespace]={scriptid:aa.script.id,context:function(){},elements:[],protect:[]}
}if(!TMwin.use.safeContext){var ar={window:window};
for(var aw in ar){if(!ar.hasOwnProperty(aw)){continue
}var ao=function(){var aC=aw.replace(/^(.)/g,function(aD){return aD.toUpperCase()
});TMwin.props[X.namespace].elements.push({name:"unsafe"+aC,value:ar[aw]})
};ao()}}TMwin.props[X.namespace].elements.push({name:"CDATA",value:function(aC){this.src=aC;
this.toString=function(){return this.src};this.toXMLString=this.toString
}});TMwin.props[X.namespace].elements.push({name:"uneval",value:function(aC){try{return"$1 = "+JSON.stringify(aC)+";"
}catch(aD){console.log(aD)}}});TMwin.props[X.namespace].elements.push({name:"console",value:console,type:C});
TMwin.props[X.namespace].elements.push({name:"JSON",value:JSON,type:C});
TMwin.props[X.namespace].elements.push({name:"document",value:window.document,type:C});
TMwin.props[X.namespace].elements.push({name:"location",value:window.location,type:C});
TMwin.props[X.namespace].elements.push({name:"undefined",value:ac,type:C});
TMwin.props[X.namespace].elements.push({name:"top",value:"window.unsafeTop",overwrite:true});
TMwin.props[X.namespace].elements.push({name:"TM_addStyle",value:ad});
TMwin.props[X.namespace].elements.push({name:"TM_deleteValue",value:an});
TMwin.props[X.namespace].elements.push({name:"TM_listValues",value:ah});
TMwin.props[X.namespace].elements.push({name:"TM_getValue",value:au});
TMwin.props[X.namespace].elements.push({name:"TM_log",value:Z});
TMwin.props[X.namespace].elements.push({name:"TM_registerMenuCommand",value:m});
TMwin.props[X.namespace].elements.push({name:"TM_openInTab",value:u});
TMwin.props[X.namespace].elements.push({name:"TM_setValue",value:at});
TMwin.props[X.namespace].elements.push({name:"TM_addValueChangeListener",value:ag});
TMwin.props[X.namespace].elements.push({name:"TM_removeValueChangeListener",value:T});
TMwin.props[X.namespace].elements.push({name:"TM_xmlhttpRequest",value:b});
TMwin.props[X.namespace].elements.push({name:"TM_getTab",value:F});
TMwin.props[X.namespace].elements.push({name:"TM_saveTab",value:H});
TMwin.props[X.namespace].elements.push({name:"TM_getTabs",value:q});
TMwin.props[X.namespace].elements.push({name:"TM_installScript",value:Q});
TMwin.props[X.namespace].elements.push({name:"TM_runNative",value:az});
TMwin.props[X.namespace].elements.push({name:"TM_execUnsafe",value:ay});
TMwin.props[X.namespace].elements.push({name:"TM_notification",value:ak});
TMwin.props[X.namespace].elements.push({name:"TM_getResourceText",value:U,scriptid:X.id});
TMwin.props[X.namespace].elements.push({name:"TM_getResourceURL",value:al,scriptid:X.id});
var aA=new af();for(var aw in aA){TMwin.props[X.namespace].elements.push({name:aw,value:aA[aw]})
}if(X.options.compat_prototypes){if(V||D){console.log("env: option: add toSource")
}if(!Object.prototype.toSource){Object.defineProperties(Object.prototype,{toSource:{value:function(){return"JSON.parse(unescape('"+escape(JSON.stringify(this))+"'));"
},enumerable:false,writable:true,configurable:true,},})
}if(V||D){console.log("env: option: add some array generics")
}var aj=["indexOf","lastIndexOf","filter","forEach","every","map","some","slice"];
aj.forEach(function(aD){if(typeof Array[aD]!=="function"){var aC={};
aC[aD]={value:function(aE){return Array.prototype[aD].apply(aE,Array.prototype.slice.call(arguments,1))
},enumerable:false,writable:true,configurable:true,};
Object.defineProperties(Array,aC)}})}if(V||D){console.log("env: eval script "+X.name+" now!")
}N(X,aa.code,aa.requires,TMwin.props[X.namespace]);
window.addEventListener("unload",aq,false);return X.options.used_events
};chromeEmu.extension.onRequest.addListener(function(aa,Y,U){if(V||EV){console.log("env: request.method "+aa.method+" id: "+aa.id)
}if(aa.id&&aa.id!=TM_context_id){console.log("env: Not for me! "+TM_context_id+"!="+aa.id);
return}if(aa.method=="executeScript"){var Z=function(){l(aa);
U({})};if(aa.script.options.run_at=="document-start"){g(Z,aa.script.id);
if(D){console.log("env: run '"+aa.script.name+"' ASAP -> document-start")
}}else{if(aa.script.options.run_at=="document-body"){y(Z,aa.script.id);
if(D){console.log("env: schedule '"+aa.script.name+"' for document-body")
}}else{if(D){console.log("env: schedule '"+aa.script.name+"' for document-end")
}B(Z,aa.script.id,aa.script.name)}}}else{if(aa.method=="onLoad"){TMwin.domContentLoaded=true;
s();U({});window.setTimeout(function(){if(V||EV){console.log("env: disable nodeInserts magic!")
}i=null},2000)}else{if(aa.method=="loadUrl"){window.location=aa.url;
U({})}else{if(aa.method=="reload"){window.location.reload();
U({})}else{if(aa.method=="confirm"){var ab=function(){var ac=confirm(aa.msg);
U({confirm:ac})};window.setTimeout(ab,100)}else{if(aa.method=="showMsg"){var ab=function(){var ac=function(){alert(aa.msg)
};window.setTimeout(ac,1);U({})};window.setTimeout(ab,100)
}else{if(aa.method=="getSrc"){var X="";var W=document.getElementsByTagName("body");
if(W.length>0){var T=W[0];X=T.innerText}else{X=document.innerHTML
}U({src:X})}else{console.log("env: unknown method "+aa.method)
}}}}}}}});O();n();f();p();x();d();document.addEventListener(M,P,false);
document.addEventListener(o,j,false);document.addEventListener(v,J,false);
document.addEventListener("unload",a,false);if(V||D){console.log("env: initialized (content, id:"+TM_context_id+", "+window.location.origin+window.location.pathname+") ")
}})();

if(window.self!=window.top&&window.location.href.search("file://")==0&&window.location.href.search("gimmeSource=1")!=-1){var getSource=function(a){if(a.childNodes.length>0){return getSource(a.childNodes[a.childNodes.length-1])
}else{return a.textContent}};var sendResp=function(c){var d=JSON.parse(c.data);
var e={content:getSource(document),id:d.id};var a=JSON.stringify(e);
var b={method:"localFileCB",data:a};chrome.extension.sendRequest(b,function(){});
window.removeEventListener("message",sendResp,false)
};window.addEventListener("message",sendResp,false)
}else{var _background=true;var _webRequest={};var Converter;
var D=false;var V=false;var EV=false;var EMV=false;
var ENV=false;var TS=false;(function(){var B="DOMAttrModified";
var J=window.XMLHttpRequest;var K={safeContext:true};
var G;var r=false;var g=false;var z=false;var u=false;
var y=function(){D|=(G>=60);V|=(G>=80);EV|=(G>=100);
ENV|=(G>=100);EMV|=(G>=100);TS|=(G>=100)};Registry.require("xmlhttprequest");
Registry.require("convert");Registry.require("helper");
var s=Registry.getRaw("emulation.js");var e=Registry.getRaw("environment.js");
var H=Registry.get("xmlhttprequest").run;var E=Registry.get("helper");
var i=null;Converter=Registry.get("convert");var n=function(){if(V||EV||D){console.log("content: detected DOMContentLoaded "+k)
}z=true;if(r){c.sendMessage("domContentLoaded = true; if (typeof runAllLoadListeners !== 'undefined') runAllLoadListeners();")
}};var M=function(Q){if(!u){if(V||EV||D){console.log("content: first DOMNodeInserted "+k)
}u=true}};var c={responses:{},initstate:0,sendMessage:function(S){var R="";
if(this.initstate==0){this.initstate=1}else{if(this.initstate==1){R+="var ENV = "+(ENV?"true":"false")+";\n";
R+="var TS = "+(TS?"true":"false")+";\n";R+="var Converter = "+i+";\n";
R+="var TMwin = { backup: {}, use: "+JSON.stringify(K)+" };\n";
R+="var TMJSON = JSON;\n";R+="var console = window['console'];\n";
R+="var JSON = window['JSON'];\n";R+="function JSONcheck() {\n";
R+="        if (!JSON.parse || JSON.parse != 'function parse() { [native code] }') {\n";
R+="              if (TMJSON && TMJSON.parse == 'function parse() { [native code] }') {\n";
R+="                  JSON = TMJSON;\n";R+="                  console.log('page: use JSON backup');\n";
R+="              } else {\n";R+="                  JSON = window.JSON;\n";
R+="                  console.log('page: use JSON fallback');\n";
R+="              }\n";R+="        } else if (ENV) { \n";
R+="            console.log('page: JSON is fine');\n";
R+="        }\n";R+="};\n";R+="JSONcheck();\n";R+="function eventHandler(evt) {\n";
R+="    try {\n";R+="        if (ENV) console.log('page: Event received "+k+"' + evt.attrName);\n";
R+="        var j = JSON.parse(Converter.decodeR(evt.attrName));\n";
R+="        try {\n";R+="            eval(j)\n";R+="            if (TS) console.log('page: it took ' + ((new Date()).getTime() - evt.timeStamp)  + ' ms to process this event -> ' + j.substr(0, 80));\n";
R+="        } catch (e) {\n";R+="            console.log('page: Error: processing event! ' + e.message + ' ' + j);\n";
R+="        }\n";R+="        j = ''\n";R+="    } catch (e) {\n";
R+="        console.log('page: Error: retrieving event! ' + e.message + ' ' + evt.attrName);\n";
R+="    }\n";R+="    evt.attrName = '';\n";R+="};\n";
R+="document.addEventListener('TM_exec"+k+"', eventHandler, false);\n";
R+="function cleanup(evt) {\n";R+="    document.removeEventListener('TM_exec"+k+"', eventHandler, false);\n";
R+="    if (ENV) console.log('page: cleanup of "+k+"! ');\n";
R+="    window.removeEventListener('unload', cleanup, false);\n";
R+="    delete TMJSON;\n";R+="    delete TMwin;\n";
R+="    delete Converter;\n";R+="    delete TS;\n";
R+="    delete ENV;\n";R+="};\n";R+="window.addEventListener('unload', cleanup, false);\n";
if(!K.safeContext){R+="function removeScriptTag() {\n";
R+="    var st = document.getElementById('TM_script_tag_"+k+"');\n";
R+="    if (st && st.parentNode) {\n";R+="        if (ENV) console.log('page: script tag cleanup ("+k+")');\n";
R+="        st.parentNode.removeChild(st);\n";R+="    }\n";
R+="};\n";R+="removeScriptTag();\n";var Q=document.createElement("script");
Q.textContent="(function TM_mother() { "+R+"\n"+S+"})();";
Q.setAttribute("name","TM_internal");Q.setAttribute("id","TM_script_tag_"+k);
(document.head||document.body||document.documentElement||document).appendChild(Q)
}else{window["eval"]("(function TM_mother() { "+R+"\n"+S+"})();")
}this.initstate=2}else{if(this.initstate==2){p(S,"TM_exec"+k)
}}}},getResponseId:function(R){var Q=0;if(R){while(Q==0||c.responses[Q]!=undefined){Q=(new Date()).getTime()+Math.floor(Math.random()*6121983+1)
}c.responses[Q]=R;if(V){console.log("content: registerResponseId "+Q)
}}return Q},runResponse:function(Q,S){if(V){console.log("content: runResponse "+Q+" -> "+Converter.decode(S))
}for(var R in c.responses){if(R==Q){var U="";try{U=JSON.parse(Converter.decode(S));
if(!c.responses[R]){console.log("Warn: content: responseId "+R+" is undefined!!!")
}else{c.responses[R](U)}}catch(T){console.log("content: Json parse error (runResponse):"+T+"\n"+S)
}c.responses[R]=null;return}}console.log("WARN: responseId "+Q+" not found!")
}};var N=function(Q){return{id:Q,ports:{},log:function(R){if(_background){console.log("content: "+R)
}else{p({fn:"log",args:"page: "+R})}},onContentResponse:function(W,T,S,U){if(_background){if(V){this.log("onContentResponse "+k+" "+S+" "+U)
}c.runResponse(S,Converter.encode(U))}else{var R=arguments;
p({fn:"onContentResponse",args:R})}},onResponse:function(Y,W,T,X){if(_background){try{if(V){this.log("onResponse "+k+" "+T+" "+X)
}var U=Converter.encode(X);var S="if (TMwin.chromeEmu) TMwin.chromeEmu.runResponse("+T+', "'+U+'")';
c.sendMessage(S);U="";S=""}catch(Z){console.log("Error: processing onResponse")
}}else{var R=arguments;p({fn:"onResponse",args:R})}},onConnectResponse:function(Y,W,T,X){if(_background){try{if(V){this.log("onConnectResponse "+k+" "+T+" "+X)
}var U=Converter.encode(X);var S="if (TMwin.chromeEmu) TMwin.chromeEmu.runConnectResponse("+T+', "'+U+'")';
c.sendMessage(S);U="";S=""}catch(Z){console.log("Error: processing onConnectResponse")
}}else{var R=arguments;p({fn:"onConnectResponse",args:R})
}},onContentRequest:function(W,U,S){if(_background){if(V){this.log("onContentRequest "+k+" "+S+" "+JSON.stringify(W))
}if(W.id&&this.id&&W.id!=this.id){if(V){this.log("filter: "+W.id+"!="+this.id)
}return}var T=Converter.encode(JSON.stringify({sender:U,request:W}));
var R="if (TMwin.chromeEmu) TMwin.chromeEmu.runContentRequest("+S+', "'+T+'", 0);';
c.sendMessage(R);T="";R=""}else{console.log("Warn: onContentRequest from non BG not supported")
}},onRequest:function(W,U,S){if(_background){if(V){this.log("onRequest "+k+" "+S+" "+JSON.stringify(W))
}if(W.id&&this.id&&W.id!=this.id){if(V){this.log("filter: "+W.id+"!="+this.id)
}return}var T=Converter.encode(JSON.stringify({sender:U,request:W}));
var R="if (TMwin.chromeEmu) TMwin.chromeEmu.runRequest("+S+', "'+T+'", 0)';
c.sendMessage(R);T="";R=""}else{console.log("Warn: onRequest from non BG not supported")
}},xmlHttpRequest:function(ab,R,T){if(_background){if(V){this.log("xmlHttpRequest "+k+" "+T+" "+JSON.stringify(R))
}var W=JSON.parse(R);if(W.q_id){var S=W.q_id;W=window[S];
delete window[S]}var aa=function(ac){var ad="__x__"+Math.floor(Math.random()*6121983+1);
window[ad]=ac.response;ac.response=null;o.onConnectResponse(ab,0,T,JSON.stringify({onLoad:true,response:ac,r_id:ad}))
};var X=function(ac){o.onConnectResponse(ab,0,T,JSON.stringify({onReadyStateChange:true,response:ac}))
};var Y=function(ac){o.onConnectResponse(ab,0,T,JSON.stringify({onError:true,response:ac}))
};var U=function(ac){o.onConnectResponse(ab,0,T,JSON.stringify({onDone:true,onDisconnect:true,response:ac}))
};H(W,aa,X,Y,U)}else{var Z=arguments;p({fn:"xmlHttpRequest",args:Z})
}},runUpdateListener:function(){console.log("WARN: not supported!")
},getUrl:function(){console.log("WARN: not supported!")
},sendExtensionRequest:function(W,U,S){if(_background){if(V){this.log("sendExtensionRequest "+k+" "+S+" "+U)
}var T=function(Y){o.onResponse(W,0,S,JSON.stringify(Y))
};var X=JSON.parse(U);X.responseId=S;chrome.extension.sendRequest(X,T);
X=null}else{var R=arguments;p({fn:"sendExtensionRequest",args:R})
}},sendExtensionConnect:function(X,W,S){if(_background){var Z=JSON.parse(W);
Z.responseId=S;if(V){this.log("sendExtensionConnect "+k+" "+S+" "+W)
}var Y=function(aa){o.onConnectResponse(X,0,S,JSON.stringify({onMessage:true,msg:aa}))
};var U=function(aa){o.onConnectResponse(X,0,S,JSON.stringify({onDisconnect:true,msg:aa}));
Z=null};var T=chrome.extension.connect({name:Z});T.onMessage.addListener(Y);
T.onDisconnect.addListener(U);o.ports[S]=T}else{var R=arguments;
p({fn:"sendExtensionConnect",args:R})}},sendExtensionMessage:function(W,U,S){if(_background){if(V){this.log("sendExtensionMessage "+k+" "+S+" "+U)
}var T=o.ports[S];if(!T){this.log("Error: sendExtensionMessage unable to find port "+S)
}else{var X=JSON.parse(U);X.responseId=S;T.postMessage(X);
X=null}}else{var R=arguments;p({fn:"sendExtensionMessage",args:R})
}},sendTabsRequest:function(){console.log("WARN: not supported!")
},createTab:function(){console.log("WARN: not supported!")
},getSelected:function(){console.log("WARN: not supported!")
},updateTab:function(){console.log("WARN: not supported!")
},onUpdated:function(){console.log("WARN: not supported!")
},getMessage:function(){console.log("WARN: not supported!")
},storageKey:function(){console.log("WARN: not supported!")
},storageRemoveItem:function(){console.log("WARN: not supported!")
},storageSetItem:function(){console.log("WARN: not supported!")
},storageGetItem:function(){console.log("WARN: not supported!")
},storageLength:function(){console.log("WARN: not supported!")
}}};var w=function(){if(K.safeContext){var Q="";var R={window:{forceUnsafe:true},top:{forceUnsafe:true},frames:{},parent:{},opener:{}};
var ab="";var aa=0;for(var U in R){if(!R.hasOwnProperty(U)){continue
}if(aa!=0){ab+=", "}ab+=U+":"+U;aa++}var ac=document.createElement("div");
ac.setAttribute("onclick","return {"+ab+"};");var Y=ac.onclick();
var S=Y.window;var ad="__o__"+Q;var X="window."+ad+" = {"+ab+"};";
var W="";W+="function eventHandler(evt) {\n";W+="    try {\n";
W+="        eval(decodeURI(evt.attrName))\n";W+="    } catch (e) {}\n";
W+="    evt.attrName = '';\n";W+="};\n";W+="document.addEventListener('TM_do"+k+"', eventHandler, false);\n";
X+=W;var ae=S.document.createElement("script");ae.setAttribute("name","TM_internal");
ae.innerHTML=X;var Z=S.document;(Z.documentElement||Z).appendChild(ae);
var Y=S[ad];delete S[ad];ae.parentNode.removeChild(ae);
if(D){console.log("env: init "+window.location.href)
}for(var U in R){if(!R.hasOwnProperty(U)){continue}var T=function(){var ag=Y[U];
var ai=Object.getOwnPropertyDescriptor(window,U);var af=false;
if(!R[U].forceUnsafe){try{if(ai){if(ai.writable){window[U]=ag;
af=true;if(D){console.log("env: write "+U)}}else{if(ai.configurable){var ak={};
ai.value=ag;ak[U]=ai;Object.defineProperties(window,ak);
af=true;if(D){console.log("env: redefine "+U)}}}}else{var ak={};
ak[U]={value:ag,enumerable:true,writable:false,configurable:false,};
Object.defineProperties(window,ak);af=true;if(D){console.log("env: define "+U+" to "+JSON.stringify(ai))
}}}catch(ah){console.log(ah.message)}}if(!af){var aj=U.replace(/^(.)/g,function(al){return al.toUpperCase()
});if(D){console.log("env: create unsafe"+aj)}var ak={};
ak["unsafe"+aj]={value:ag,enumerable:true,writable:false,configurable:false,};
Object.defineProperties(window,ak)}};T()}}};var I=function(R){if(K.safeContext){var Q=document.createEvent("MutationEvent");
Q.initMutationEvent("TM_do"+k,false,false,null,null,null,encodeURI(R),Q.ADDITION);
document.dispatchEvent(Q);return Q.returnValue}else{console.log("ERROR: assert(use.safeContext)")
}};function x(){return;if(K.safeContext){var S="__o__"+k;
var R="window."+S+" = { XMLHttpRequest: XMLHttpRequest };";
I(R);var Q=unsafeWindow[S];delete unsafeWindow[S];if(Q.XMLHttpRequest){window.XMLHttpRequest=Q.XMLHttpRequest;
if(D){console.log("content: XMLHttpRequest overwritten")
}}}}function h(){var Q=[window.HTMLElement.prototype,document.__proto__];
for(var T=0;T<Q.length;T++){var R=Q[T];var S=Object.getOwnPropertyDescriptor(R,"wrappedJSObject");
if(!S){R.__defineGetter__("wrappedJSObject",function(){return this
});Object.defineProperties(R,{wrappedJSObject:{get:function(){return this
},enumerable:false,configurable:false,},})}}}function b(){var S=false;
var W=true;var T=function(){var Y=document.createElement("p");
var X=false;Y.addEventListener("DOMAttrModified",function(){X=true
},false);Y.setAttribute("class","trigger");return X
};if(T()){return}var Q=[window.HTMLElement.prototype,document.__proto__];
for(var U=0;U<Q.length;U++){var R=Q[U];if(!R.___addEventListener){R.___addEventListener=R.addEventListener;
R.___removeEventListener=R.removeEventListener;R.removeEventListener=function(Z,Y,X){this.___removeEventListener(Z,Y,X)
};R.addEventListener=function(X,ah,ac){if(X==B){if(this.outerHTML){var Z=this.outerHTML.split(">")[0]+" />";
var ad=this;var aa;if(this.parentNode){aa=this.parentNode
}else{aa=this}var ai=function(am,al,an,ak){var aj=document.createEvent("MutationEvent");
aj.initMutationEvent("DOMAttrModified",true,false,am,an||"",ak||"",al,(an==null)?aj.ADDITION:(ak==null)?aj.REMOVAL:aj.MODIFICATION);
am.dispatchEvent(aj)};try{var Y=function(ak){for(var am in ak){if(!ak.hasOwnProperty(am)){continue
}var aj=ak[am];if(aj.attributeName!=""&&aj.target){var an=aj.oldValue;
var al=aj.target.getAttribute(aj.attributeName);if(an!=al){ai(ad,aj.attributeName,an,al)
}}}};var ag=new WebKitMutationObserver(Y);ag.observe(ad,{childList:false,subtree:false,attributeOldValue:true,attributes:true})
}catch(af){var ab=function(am,al){if(al==undefined){al={}
}var aj=am.replace(/\\\"/g,"").replace(/".*?"/g,"").replace(/^<[a-zA-b0-9]* |>$/g,"").split(" ");
for(var ak in aj){if(!aj.hasOwnProperty(ak)){continue
}var an=aj[ak];if(an.substr(an.length-1,1)=="="){al[an.substr(0,an.length-1)]=null
}}return al};var ae=function(aq){if(aq.target==ad){var ak=aq.target.outerHTML.split(">")[0]+" />";
if(Z!=ak){var aj=document.createElement("div");aj.innerHTML=Z;
var at=aj.childNodes[0];var ao=document.createElement("div");
ao.innerHTML=ak;var am=ao.childNodes[0];var ar=ab(Z,ab(ak));
for(var an in ar){if(!ar.hasOwnProperty(an)){continue
}var al=at.getAttribute(an);var ap=am.getAttribute(an);
if(al!=ap){ai(ad,an,al,ap)}}Z=ak}}};W=false;if(!S){console.log("content: WARN unable to use MutationObserver -> fallback to DOMSubtreeModified event")
}S=true;aa.addEventListener("DOMSubtreeModified",ae,true)
}}}this.___addEventListener(X,ah,ac)}}}}function j(){var Q="";
Q+=Math.floor(Math.random()*6121983+1);Q+=((new Date()).getTime().toString()).substr(10,7);
return Q}function p(S,Q){if(Q==undefined){Q="TM_event"+TM_content_context
}if(ENV){console.log((_background?"content":"page")+": fireEvent "+Q+" -> "+JSON.stringify(S))
}try{var R=document.createEvent("MutationEvent");R.initMutationEvent(Q,false,false,null,null,null,Converter.encodeR(JSON.stringify(S)),R.ADDITION);
document.dispatchEvent(R)}catch(T){console.log((_background?"content":"page")+":Error: fire event "+Q+" -> "+JSON.stringify(S)+" "+T)
}}var k=j();var O="var TM_context_id = '"+k+"';\n";
var t="var _background = false;\n";var P="var tmCE = ("+N.toString()+")();\nvar TM_content_context = '"+k+"';\n";
var v=p.toString()+"\n";var F="";function f(Q){if(!r){if(!document.head&&!document.body){if(Q==undefined){window.setTimeout(f,100)
}return}else{A();q()}}}function q(){if(!r){var Q="var V = "+(V?"true":"false")+";\n";
Q+="var EV = "+(EV?"true":"false")+";\n";Q+="var ENV = "+(ENV?"true":"false")+";\n";
Q+="var EMV = "+(EMV?"true":"false")+";\n";Q+="var logLevel = "+G+";\n";
c.sendMessage("console.log('Tampermonkey started');");
F="";if(z){F="TMwin.loadHappened = true;\n";F="TMwin.domContentLoaded = true;\n";
if(V||EV||D){console.log("content: Start ENV with DOMContentLoaded "+k)
}}else{if(u){F="TMwin.loadHappened = true;\n";if(V||EV||D){console.log("content: Start ENV with loadHappened "+k)
}}}if(F!=""&&(V||EV)){console.log("content: Start ENV normally "+k)
}F+="adjustLogLevel();\n";var R="(function () { "+Q+t+O+P+s+e+v+F+"})();";
c.sendMessage(R);e=null;s=null;P=null;v=null;r=true
}}var o=N(k);function m(Q){try{if(V){console.log("content: Event received "+ +k+" "+Q.attrName)
}var R=JSON.parse(Converter.decodeR(Q.attrName));try{o[R.fn](R.args[0],R.args[1],R.args[2],R.args[3],R.args[4],R.args[5],R.args[6],R.args[7]);
if(TS){console.log("content: it took "+((new Date()).getTime()-Q.timeStamp)+" ms to process this event ->"+R.fn)
}}catch(S){console.log("Error: processing event ("+R.fn+")! "+JSON.stringify(S))
}R=""}catch(S){console.log("Error: retrieving event! "+S.message);
console.log("Error: "+Q.attrName)}Q.attrName=""}function d(){if(V){console.log("content: cleanup!")
}document.removeEventListener("TM_event"+k,m,false);
window.removeEventListener("DOMContentLoaded",n,false);
window.removeEventListener("DOMNodeInserted",M,false);
window.removeEventListener("unload",d,false);A()}function A(){if(!r){window.removeEventListener("load",f,false);
window.removeEventListener("DOMNodeInserted",f,false);
window.removeEventListener("DOMContentLoaded",f,false)
}}w();b();h();x();window.addEventListener("unload",d,false);
window.addEventListener("DOMContentLoaded",n,false);
window.addEventListener("DOMNodeInserted",M,false);
document.addEventListener("TM_event"+k,m,false);window.addEventListener("load",f,false);
window.addEventListener("DOMNodeInserted",f,false);
window.addEventListener("DOMContentLoaded",f,false);
function a(S,R,Q){if(!r){window.setTimeout(function(){a(S,R,Q)
},10);return}if(g){var T=c.getResponseId(Q);o.onContentRequest(S,R,T)
}}chrome.extension.onRequest.addListener(a);c.sendMessage();
var C=2;var l=function(){if(D){console.log("content: create test XHR to check whether webRequest API is working")
}var S={method:"GET",url:"http://tampermonkey.net/empty.html",headers:{Referer:"http://doesnt.matter.com"},};
var R=function(T){if(T.webRequest){_webRequest=T.webRequest
}if(V){console.log("content: updated webRequest info")
}};var Q=function(){var T={method:"getWebRequestInfo",id:k};
chrome.extension.sendRequest(T,R)};H(S,null,null,null,Q)
};var L=function(){var Q=function(S){G=S.logLevel;y();
if(V||D){console.log("content: Started ("+k+", "+window.location.origin+window.location.pathname+")")
}if(S.enabledScriptsCount){if(V||D){console.log("content: start event processing for "+k+" ("+S.enabledScriptsCount+" to run)")
}g=true;if(S.webRequest){_webRequest=S.webRequest;if(_webRequest.use&&!_webRequest.verified&&C-->0){l()
}}f()}else{if(V||D){console.log("content: disable event processing for "+k)
}g=false;r=true;A();d()}};i=E.serialize(Converter);
var R={method:"prepare",id:k,raw:[],topframe:window.self==window.top,url:window.location.origin+window.location.pathname,params:window.location.search+window.location.hash};
chrome.extension.sendRequest(R,Q)};L()})()};
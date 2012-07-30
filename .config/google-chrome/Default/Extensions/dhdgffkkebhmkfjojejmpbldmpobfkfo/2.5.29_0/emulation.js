
if(!window.console&&!console){console={log:function(a){tmCE.log((_background?"BG: ":"")+a)
}}}if(!Converter){Converter={decode:function(a){return atob(a)
},encode:function(a){return btoa(data)}}}var java2js=function(a){if(a==undefined){return undefined
}else{if(a==null){return null}else{return String(a)
}}};var chromeEmu={key:"##REPLACE_KEY##",responses:{},xmlHttpRequest:function(a,j,h,k,g){var f=function(d){if(EMV){console.log("emu: req ("+b+" -"+a.url+" returned: "+d)
}if(d.onLoad&&j){if(d.r_id){d.response.response=window[d.r_id];
delete window[d.r_id]}j(d.response)}if(d.onReadyStateChange&&h){h(d.response)
}if(d.onError&&k){k(d.response)}if(d.onDone&&g){g(d.response)
}};var b=chromeEmu.getResponseId(f);var i;if(typeof a.data==="object"){var e="__y__"+Math.floor(Math.random()*6121983+1);
window[e]=a;i=JSON.stringify({q_id:e})}else{i=JSON.stringify(a)
}var c=function(){tmCE.xmlHttpRequest(chromeEmu.key,i,b)
};window.setTimeout(c,1)},runUpdateListeners:function(c,d,f){if(EMV){console.log("emu: runUpdateListeners "+c+" URL: "+f.url)
}for(var b=0;b<chromeEmu.tabs.updateListeners.length;
b++){var a=chromeEmu.tabs.updateListeners[b];try{a(c,d,f)
}catch(g){console.log("emu: Error (runUpdateListeners):"+g+"\n"+a.toString())
}}},runRequestHandlers:function(g,f,b,i){if(EMV){console.log("emu: runRequestHandlers "+b)
}for(var d=0;d<chromeEmu.extension.requestHandlers.length;
d++){var a=chromeEmu.extension.requestHandlers[d];try{var c=function(e){tmCE.onResponse(chromeEmu.key,i,b,JSON.stringify(e))
};a(g,f,c)}catch(h){console.log("emu: Error (runRequestHandlers):"+h+"\n"+a.toString())
}}},runContentRequestHandlers:function(g,f,b,i){if(EMV){console.log("emu: runRequestHandlers "+b)
}for(var d=0;d<chromeEmu.extension.requestHandlers.length;
d++){var a=chromeEmu.extension.requestHandlers[d];try{var c=function(e){tmCE.onContentResponse(chromeEmu.key,i,b,JSON.stringify(e))
};a(g,f,c)}catch(h){console.log("emu: Error (runContentRequestHandlers):"+h+"\n"+a.toString())
}}},runRequest:function(a,b,f){try{if(EMV){console.log("emu: runRequest "+a+" -> "+Converter.decode(request))
}var c=JSON.parse(Converter.decode(b));chromeEmu.runRequestHandlers(c.request,c.sender,a,f);
c=""}catch(d){console.log("emu: Json parse error (runRequest):"+d+"\n"+b)
}},runContentRequest:function(a,b,f){try{if(EMV){console.log("runContentRequest "+a+" -> "+Converter.decode(b))
}var c=JSON.parse(Converter.decode(b));chromeEmu.runContentRequestHandlers(c.request,c.sender,a,f);
c=""}catch(d){console.log("emu: Json parse error (runContentRequest):"+d+"\n"+b)
}},runResponse:function(a,c){try{for(var b in chromeEmu.responses){if(b==a){if(EMV){console.log("emu: runResponse "+a+" -> "+Converter.decode(c))
}var f="";try{f=JSON.parse(Converter.decode(c));chromeEmu.responses[b](f)
}catch(d){console.log("emu: Json parse error (runResponse):"+d+"\n"+c)
}f="";delete chromeEmu.responses[b];return}}}catch(d){console.log("emu: Json parse error (runResponse):"+d+"\n"+c)
}console.log("WARN: emu: responseId "+a+" not found!")
},runConnectResponse:function(a,d){try{for(var c in chromeEmu.responses){if(c==a){if(EMV){console.log("emu: runConnectResponse "+a+" -> "+Converter.decode(d))
}var g="";var b=false;try{g=JSON.parse(Converter.decode(d));
chromeEmu.responses[c](g);b=g.onDisconnect}catch(f){console.log("emu: Json parse error (runConnectResponse):"+f+"\n"+d)
}g="";if(b){chromeEmu.responses[c]=null}return}}}catch(f){console.log("emu: Json parse error (runConnectResponse):"+f+"\n"+d)
}console.log("WARN: emu: responseId "+a+" not found!")
},getResponseId:function(b){var a=0;if(b){while(a==0||chromeEmu.responses[a]!=undefined){a=((new Date()).getTime()+Math.floor(Math.random()*6121983+1)).toString()
}chromeEmu.responses[a]=b;if(EMV){console.log("emu: registerResponseId "+a)
}}return a},extension:{requestHandlers:[],getURL:function(a){return java2js(tmCE.getUrl(chromeEmu.key,a))
},connect:function(b){var a={oMlisteners:[],oDlisteners:[],notifyListeners:function(f,e){for(var g=0;
g<f.length;g++){f[g](e)}},postMessage:function(e){tmCE.sendExtensionMessage(chromeEmu.key,JSON.stringify(e),d)
},onMessage:{addListener:function(e){a.oMlisteners.push(e)
}},onDisconnect:{addListener:function(e){a.oDlisteners.push(e)
}}};var c=function(e){if(e.onMessage){a.notifyListeners(a.oMlisteners,e.msg)
}else{if(e.onDisconnect){a.notifyListeners(a.oDlisteners)
}}};var d=chromeEmu.getResponseId(c);tmCE.sendExtensionConnect(chromeEmu.key,JSON.stringify(b),d);
return a},sendRequest:function(b,a){var c=chromeEmu.getResponseId(a);
if(EMV){console.log("emu: extension.sendRequest "+c+" # "+JSON.stringify(b))
}tmCE.sendExtensionRequest(chromeEmu.key,JSON.stringify(b),c)
},onRequest:{addListener:function(a){chromeEmu.extension.requestHandlers.push(a)
}}},i18n:{getMessage:function(){var b=[];for(var c=0;
c<arguments.length;c++){b.push(arguments[c])}var a=tmCE.getMessage(chromeEmu.key,JSON.stringify(b));
return java2js(a)}},tabs:{updateListeners:[],sendRequest:function(b,c,a){var d=chromeEmu.getResponseId(a);
if(EMV){console.log("emu: tabs.sendRequest "+d)}tmCE.sendTabsRequest(chromeEmu.key,b,JSON.stringify(c),d)
},create:function(a){if(EMV){console.log("emu: tabs.create "+a)
}tmCE.createTab(chromeEmu.key,JSON.stringify(a))},getSelected:function(a,c){var b=chromeEmu.getResponseId(c);
tmCE.getSelected(chromeEmu.key,JSON.stringify(a),b)
},update:function(a,b){tmCE.updateTab(chromeEmu.key,a,b)
},onUpdated:{addListener:function(a){chromeEmu.tabs.updateListeners.push(a)
}}}};function checkInterface(a){if(!window.hasOwnProperty("tmCE")){window.setTimeout(function(){checkInterface(a)
},100)}a()}function checkBgFred(a){if(TM_tabs==undefined){window.setTimeout(function(){checkBgFred(a)
},100)}a()}if(EMV){console.log("emu: Started ("+window.location.origin+window.location.pathname+")")
}if(!TMwin.chromeEmu){Object.defineProperties(TMwin,{chromeEmu:{value:chromeEmu,enumerable:false,writable:false,configurable:false,},})
};
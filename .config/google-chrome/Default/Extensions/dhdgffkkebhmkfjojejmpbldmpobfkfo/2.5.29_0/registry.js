
var V;var RV=false;var RD=false;var Registry={objects:{},init:function(){},register:function(b,c,a){if(RD||RV||V){console.log("Registry.register "+b+" overwrite: "+a)
}if(!Registry.objects[b]||a){Registry.objects[b]=c}},require:function(a){if(RD||RV||V){console.log("Registry.require "+a)
}if(Registry.objects[a]===undefined){Registry.objects[a]=null;
Registry.loadFile(a+".js")}},getRaw:function(b){if(RD||RV||V){console.log("Registry.getRaw "+b)
}var a=chrome.extension.getURL(b);var c=null;try{var f=new XMLHttpRequest();
f.open("GET",a,false);f.send(null);c=f.responseText;
if(!c){console.log("WARN: content of "+b+" is null!")
}}catch(d){console.log("getRawContent "+d)}return c
},loadFile:function(a,d){if(!d){d=window["eval"]}if(RV||V){console.log("Registry.loadFile "+a)
}try{if(d){var c=Registry.getRaw(a);d(c)}else{var b=document.createElement("script");
b.setAttribute("src",a);(document.head||document.body||document.documentElement||document).appendChild(b)
}}catch(f){console.log("Error: Registry.load "+a+" failed! "+f.message)
}},get:function(a){if(RV||V){console.log("Registry.get "+a)
}var b=Registry.objects[a];if(b===undefined){console.log("Error: Registry.get "+a+" wasn't required or found!")
}return b}};window.setTimeout(Registry.init,1);
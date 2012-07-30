
(function(){Registry.require("helper");Registry.require("convert");
Registry.require("parser");Registry.require("compat");
var e=Registry.get("convert");var d=Registry.get("helper");
var a=Registry.get("compat");var c=function(g){var i=null;
var g=encodeURI(g);var h=g.match(/[a-zA-Z0-9]/g);if(h){i=h.join("")
}else{i=e.Base64.encode(g).match(/[a-zA-Z0-9]/g).join("")
}return i};var b=function(){this.observers=[];this.icon=null;
this.icon64=null;this.fileURL=null;this.name=null;this.namespace=null;
this.homepage=null;this.description=null;this.system=false;
this.enabled=true;this.position=0;this.requires=[];
this.includes=[];this.matches=[];this.excludes=[];this.resources=[];
this.lastUpdated=0;this.options={compat_metadata:false,compat_foreach:false,compat_arrayleft:false,compat_prototypes:false,compat_uW_gmonkey:false,compat_forvarin:false,noframes:false,awareOfChrome:false,run_at:"",override:{includes:false,use_includes:[],orig_includes:[],matches:false,use_matches:[],orig_matches:[],excludes:false,use_excludes:[],orig_excludes:[]}}
};var f={Script:b,getScriptId:c,processMetaHeader:function(j){var i={};
var g=["uso:hash","version","name"];j=j.replace(/\'/gi,"").replace(/\"/gi,"");
j=j.replace(/\t/gi,"    ");j=j.replace(/\r/gi,"");for(var h in g){i[g[h]]=d.getStringBetweenTags(j,"@"+g[h],"\n").trim()
}if(V||UV){console.log("parser: processMetaHeader -> "+JSON.stringify(i))
}return i},processHeader:function(n){var q=new b();
var w=["name","namespace","version","author","copyright","description"];
var k=["iconURL","defaulticon","icon"];var h=["icon64URL","icon64"];
var r=["homepageURL","homepage","website","source"];
n=n.replace(/\'/g,"").replace(/\"/g,"");n=n.replace(/\t/g,"    ");
n=n.replace(/\r/g,"\n");n=n.replace(/\n\n+/g,"\n");
n=n.replace(/[^|\n][ \t]+\/\//g,"//");for(var u in w){q[w[u]]=d.getStringBetweenTags(n,"@"+w[u],"\n").trim()
}var x=n.split("\n");for(var m in x){var j=x[m].replace(/^[\t\s]*\/\//gi,"").replace(/^[\t\s]*/gi,"").replace(/\s\s+/gi," ");
var p=false;for(var u in h){var v=d.getStringBetweenTags(j,"@"+h[u]).trim();
if(v!=""){q.icon64=v;p=true;break}}if(p){continue}for(var u in k){var v=d.getStringBetweenTags(j,"@"+k[u]).trim();
if(v!=""){q.icon=v;p=true;break}}if(p){continue}for(var u in r){var v=d.getStringBetweenTags(j,"@"+r[u]).trim();
if(v!=""){q.homepage=v;p=true;break}}if(p){continue
}if(j.search(/^@include/)!=-1){var p=j.replace(/^@include/gi,"").trim().replace(/ /gi,"%20").replace(/[\b\r\n]/gi,"");
if(V){console.log("c "+p)}if(p.trim()!=""){q.includes.push(p)
}}if(j.search(/^@match/)!=-1){var p=j.replace(/^@match/gi,"").trim().replace(/ /gi,"%20").replace(/[ \b\r\n]/gi,"");
if(V){console.log("c "+p)}if(p.trim()!=""){q.matches.push(p)
}q.options.awareOfChrome=true}if(j.search(/^@exclude/)!=-1){var p=j.replace(/^@exclude/gi,"").trim().replace(/ /gi,"%20").replace(/[ \b\r\n]/gi,"");
if(V){console.log("c "+p)}if(p.trim()!=""){q.excludes.push(p)
}}if(j.search(/^@require/)!=-1){var p=j.replace(/^@require/gi,"").trim().replace(/ /gi,"%20").replace(/[ \b\r\n]/gi,"");
if(V){console.log("c "+p)}var g={url:p,loaded:false,textContent:""};
if(p.trim()!=""){q.requires.push(g)}}if(j.search(/^@resource/)!=-1){var p=j.replace(/^@resource/gi,"").replace(/[\r\n]/gi,"");
var v=p.trim().split(" ");if(V){console.log("c "+p)
}if(V){console.log("s "+v)}if(v.length>=2){q.resources.push({name:v[0],url:v[1],loaded:false})
}}if(j.search(/^@run-at/)!=-1){var p=j.replace(/^@run-at/gi,"").replace(/[ \b\r\n]/gi,"");
if(V){console.log("c "+p)}if(p.trim()!=""){q.options.run_at=p.trim()
}}if(j.search(/^@noframes/)!=-1){q.options.noframes=true
}if(j.search(/^@nocompat/)!=-1){q.options.awareOfChrome=true
}}if(q.name){q.id=c(q.name);if(D){console.log("parser: script "+q.name+" got id "+q.id)
}}if(q.version==""){q.version="0.0"}return q},getHeader:function(g){var j="==UserScript==";
var i="==/UserScript==";var h=d.getStringBetweenTags(g,j,i);
if(!h||h==""){return null}var l="<html>";var k="<body>";
var o=g.search(j);var n=g.search(l);var m=g.search(k);
if((n>0&&n<o)||(m>0&&m<o)){return null}return h},createScriptFromSrc:function(h){h=h.replace(/\r/g,"");
var i=f.getHeader(h);if(!i){return{}}var g=f.processHeader(i);
g.textContent=h;g.header=i;if(!g.options.awareOfChrome){g.options.compat_metadata=(h!=a.unMetaDataify(h));
g.options.compat_foreach=(h!=a.unEachify(h));g.options.compat_arrayleft=(h!=a.unArrayOnLeftSideify(h));
g.options.compat_prototypes=a.findPrototypes(h)}if(h.search("unsafeWindow.gmonkey")!=-1){g.options.compat_uW_gmonkey=true
}return g}};Registry.register("parser",f)})();
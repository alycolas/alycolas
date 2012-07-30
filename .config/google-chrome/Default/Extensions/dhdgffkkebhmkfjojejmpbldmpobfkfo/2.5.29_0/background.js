
var trup=null;var rase=null;var rsse=null;var init=null;
var fire=null;var exte=null;var lfgs=null;var D=false;
var V=false;var T=false;var EV=false;var MV=false;var UV=false;
var SV=false;var CV=false;var NV=false;(function(){Registry.require("convert");
Registry.require("xmlhttprequest");Registry.require("compat");
Registry.require("parser");Registry.require("helper");
var Y=function(e){D|=(e>=60);V|=(e>=80);EV|=(e>=100);
MV|=(e>=100);UV|=(e>=100);SV|=(e>=100);CV|=(e>=100);
NV|=(e>=100)};if(D||V){console.log("Starting background fred")
}const m=-2;const q=-1;const J=0;const ap=1;const u="uso:hash";
const j="uso:timestamp";const aB="uso:script";var E=true;
var ax=5;var B=1;var a3={use:true,delay:false,verified:false,verifyCnt:20,id:0,prefix:"TM_",testprefix:"foobar"};
var aI={};var ah=[];var a4={};var aY=null;var I=false;
var aa="@re";var aC="@st";var aO="@source";var a1={};
var aP=[];var ar={};var aX=function(){var a7=new H.Script();
for(var e in a7.options){if(!a7.options.hasOwnProperty(e)){continue
}aP.push(e)}};var ad=function(bb,ba){if(V){console.log("versionCmp: "+bb+" : "+ba)
}var a8=bb.split(".");var a7=ba.split(".");var e=a8.length<a7.length?a8.length:a7.length;
for(var a9=0;a9<e;a9++){if(a8.length<e){a8[a9]=0}if(a7.length<e){a7[a9]=0
}if(Number(a8[a9])>Number(a7[a9])){return ap}else{if(Number(a8[a9])<Number(a7[a9])){return q
}}}return J};chrome.extension.getVersion=function(){if(!chrome.extension.version_){var a7=chrome.extension.getURL("manifest.json");
try{var a8;if(a7&&a7.search("{")!=-1){a8=JSON.parse(a7)
}else{var ba=new XMLHttpRequest();ba.open("GET",a7,false);
ba.send(null);a8=JSON.parse(ba.responseText)}chrome.extension.version_=a8.version;
chrome.extension.updateurl_=a8.update_url}catch(a9){console.log("getVersion"+a9);
chrome.extension.version_="0.0.0.0";chrome.extension.updateurl_=null
}}return chrome.extension.version_};chrome.extension.getID=function(){var a7=chrome.extension.getURL("/");
var e=a7.replace(/\//gi,"").split(":");return(e.length<2)?"":e[1]
};var aQ=function(e){var bf=function(){var bi="0.0.0.0";
var bh=bi;if(E){var bh=G.getValue("TM_version",bi);
if(bi==bh){E=false;bh=G.getValue("TM_version",bi);E=true
}}return bh};var bg=chrome.extension.getVersion();var bd=bf();
var be=function(bo){var bm=new H.Script();var bl=ae();
for(var bh in bl){var bn=bl[bh];var bk=K(bn);if(!bk.script||!bk.cond){console.log(chrome.i18n.getMessage("fatal_error")+" ("+bn+")!!!");
continue}for(var bj=0;bj<aP.length;bj++){if(bk.script.options[aP[bj]]==undefined){console.log("set option "+aP[bj]+" to "+JSON.stringify(bm.options[aP[bj]]));
bk.script.options[aP[bj]]=bm.options[aP[bj]]}}if(bo){var bi={url:bk.script.fileURL,src:bk.script.textContent,ask:false,cb:function(){},hash:bk.script.hash};
ag(bi)}else{bk.script.id=H.getScriptId(bk.script.name);
t(bk.script.name,bk.script)}}};var bb=function(){be(true)
};var a9=ad(bg,bd)==ap;var a8=[];var a7=0;var bc=false;
var ba=function(){if(a7<a8.length){var bh=function(){window.setTimeout(ba,B)
};if(a8[a7].cond){a8[a7].fn(bh)}else{bh()}a7++}};a8=[{cond:a9&&ad("1.0.0.4",bd)==ap,fn:function(bh){console.log("Update config from "+bd+" to 1.0.0.4");
au(null,null);window.setTimeout(bh,B)}},{cond:a9&&E&&ad("1.2",bd)==ap,fn:function(bh){console.log("Update config from "+bd+" to 1.2");
var bl=[];G.deleteAll();for(var bj=0;bj<localStorage.length;
bj++){var bi=localStorage.key(bj);E=false;var bk=G.getValue(bi,null);
E=true;if(bk){if(V){console.log("Copy from localStorage: "+bi+" -> "+bk)
}G.setValue(bi,bk)}bl.push(bi)}for(var bj=0;bj<bl.length;
bj++){localStorage.removeItem(bl[bj])}window.setTimeout(bh,B)
}},{cond:a9&&ad("2.0.2316",bd)==ap,fn:function(bh){console.log("Update config from "+bd+" to 2.0.2316");
be(false);window.setTimeout(bh,B)}},{cond:a9&&ad("2.3",bd)==ap,fn:function(bh){console.log("Update config from "+bd+" to 2.3");
bb();window.setTimeout(bh,B)}},{cond:a9&&ad("2.3.2597",bd)==ap,fn:function(bh){console.log("Update config from "+bd+" to 2.3.2597");
var bi=a5();bi.fire.last=0;bi.fire.db_version=0;bi.fire.entries=0;
l(bi);window.setTimeout(bh,B)}},{cond:a9&&ad("2.3.2660",bd)==ap,fn:function(bh){console.log("Update config from "+bd+" to 2.3.2660");
x("TamperScript");window.setTimeout(bh,B)}},{cond:a9,fn:function(bh){console.log("First run of version "+bg+"!");
aY=bg;G.setValue("TM_version",bg);window.setTimeout(bh,B)
}},{cond:true,fn:function(bh){if(e){e()}window.setTimeout(bh,B)
}}];ba();rase=be;rsse=bb};var R=30*60*1000;var C=3*60*1000;
var L=function(e,a7,a8){if(V||CV){console.log("cache: add '"+e+"'")
}ar[e]={ts:(new Date()).getTime(),content:a7,headers:a8}
};var az=function(a7){var e=ar[a7];if(e){ar[a7].ts=(new Date()).getTime()
}if(V||CV){console.log("cache: "+(e?"found":"missed")+" '"+a7+"'")
}return e};var S=function(){if(V||CV){console.log("cache: check")
}var a8=(new Date()).getTime()-R;var a9=[];for(var e in ar){if(!ar.hasOwnProperty(e)){continue
}var a7=ar[e];if(a7&&a7.ts){if(a7.ts<a8){a9.push(e)
}}}for(var e in a9){if(!a9.hasOwnProperty(e)){continue
}delete ar[a9[e]];if(V||CV){console.log("cache: remove '"+a9[e]+"'")
}}window.setTimeout(S,C)};S();var b={id:0,callbacks:{},listener:function(a7,bb){bb=a7?a7.data:bb;
try{var a8=JSON.parse(bb);var ba=b.callbacks[a8.id];
if(ba){if(ba.cb){ba.cb(a8.content)}if(ba.iframe){ba.iframe.parentNode.removeChild(ba.iframe)
}delete b.callbacks[a8.id]}else{console.log("Warn: localFile.getSource callback "+a8.id+" not found!")
}}catch(a9){console.log("ERR: localFile.getSource processing of "+bb+" failed!")
}},initialize:function(){},clean:function(){b.callbacks={}
},getSource:function(a7,e){if(b.id==0){b.initialize()
}var a9=document.createElement("iframe");a9.src=a7+"?gimmeSource=1";
document.getElementsByTagName("body")[0].appendChild(a9);
var a8=function(){var bc=JSON.stringify({id:b.id});
b.callbacks[b.id]={cb:e,ts:(new Date()).getTime(),iframe:a9};
var ba=function(){var be=b.id;var bd=function(){if(b.callbacks[be]){b.listener(null,JSON.stringify({id:be,content:null}))
}};window.setTimeout(bd,3000)};ba();b.id++;try{a9.contentWindow.postMessage(bc,a9.src)
}catch(bb){}};window.setTimeout(a8,10)}};lfgs=b;var a5=function(){var a8={db_version:0,last:0,entries:0};
var a7={scripts:0,fire:a8};var e=G.getValue("TM_update_check",a7);
if(!e){e=a7}if(e.fire==undefined){e.fire=a8}if(e.scripts==undefined){e.scripts=0
}return e};var l=function(e){if(e){G.setValue("TM_update_check",e)
}};var ak=function(e){return e};var aq={fireDB:null,status:{},resetStatus:function(e){if(e==undefined){e=true
}aq.status={initialized:e,update:false,download:false,action:"",error:"",progress:{n:0,of:0}}
},isReady:function(){return aq.status.initialized&&!aq.status.update&&!aq.status.download
},checkUpdate:function(a9,bd,bh,bb){var a7=a9||bd;if(!a7&&(aN.values.fire_updatePeriod==0||!aN.values.fire_enabled)){return
}var be=a5();var bc=function(){if(bb){bb(aq.status.error=="")
}};if(aq.status.update||aq.status.download){if(bh){bh(true)
}var bg=function(){if(aq.isReady()){bc()}else{window.setTimeout(bg,1000)
}};if(bb){bg()}return}if(a7||((new Date()).getTime()-be.fire.last)>aN.values.fire_updatePeriod){var bf=0;
var a8=function(){var bi=function(bj){if(aq.status.error==""){be.fire.last=(new Date()).getTime();
be.fire.db_version=bf;be.fire.entries=bj;l(be)}bc()
};aq.update(bi)};var ba=function(bi){if(bi.readyState==4){if(bi.status=200){try{var bl=JSON.parse(bi.responseText);
bf=bl.db_version}catch(bk){console.log("bg: fire: unable to parse DB version response! "+bi.responseText)
}console.log("bg: fire: local DB version: "+be.fire.db_version+" remote: "+bf);
var bj=bf>be.fire.db_version||bd;if(bh){bh(bj)}if(bj){a8();
return}}bc()}};var e={method:"GET",url:aq.updateURL()+"&db_version=get",retries:ax,overrideMimeType:"text/plain; charset=x-user-defined"};
aw(e,ba)}else{bc()}},updateURL:function(){return aN.values.fire_updateURL+"?ts=0"
},update:function(a9){var a8=null;var bf=1;var be=null;
var bc=function(){if(a8){window.clearTimeout(a8)}a8=null
};var bb=function(){bc();a8=window.setTimeout(be,2*60*1000)
};var a7={method:"GET",url:aq.updateURL(),retries:ax,overrideMimeType:"text/plain; charset=x-user-defined"};
var bd=function(bg){bc();aq.resetStatus();aq.status.error=bg;
if(a9){a9()}aW.show("TamperFire",chrome.i18n.getMessage("TamperFire_update_failed___"),chrome.extension.getURL("images/icon128_3d.png"))
};var e=function(bg){bb();if(bg.progress){aq.status.progress={n:bg.progress.total,of:bg.progress.totalSize*6}
}};var ba=function(bk){bb();if(bk.readyState==4){if(bk.status=200){bc();
aq.resetStatus();aq.status.update=true;aq.status.action=chrome.i18n.getMessage("Update_in_progress");
var bn={};var bo=bk.responseText;try{bn=JSON.parse(bo)
}catch(bj){var bi="<body>";var bh="</body>";if(bo.search(bi)!=-1){var bm=bo.indexOf(bi);
var bl=bo.lastIndexOf(bh);if(bm!=-1&&bl!=-1){bo=bo.substr(bm+bi.length,bl-(bm+bi.length))
}}try{bn=JSON.parse(bo)}catch(bj){bd("Parse Error! Update URL: "+aq.updateURL());
return}}bo=null;if(!bn.scripts){bd("Invalid Content! Update URL: "+aq.updateURL());
return}var bg=function(){aq.status.update=true;var bp=function(bq){aq.resetStatus();
if(a9){a9(bq)}};aq.insertValuesFromJSON(bn,bp)};aq.clean(bg)
}else{bd("Update URL: "+bk.status);return}}else{console.log(bk)
}};be=function(){if(bf>0){aq.status.action=chrome.i18n.getMessage("Downloading");
aq.status.download=true;bb();aw(a7,ba,e);bf--}else{bd("Download failed!")
}};aW.show("TamperFire",chrome.i18n.getMessage("TamperFire_update_started"),chrome.extension.getURL("images/icon128_3d.png"));
be()},init:function(e){var a7=function(a8){var a9=a8!==false;
if(e){e(a9)}if(a9){window.setTimeout(aq.checkUpdate,20000)
}};aq.resetStatus(false);aq.initTables(a7)},clean:function(a7){var a9=function(){aq.initTables(a7)
};var bc=function(){aq.fireDB.db.transaction(function(bd){bd.executeSql("DROP TABLE scripts",[],a9,a9)
})};var e=function(){aq.fireDB.db.transaction(function(bd){bd.executeSql("DROP TABLE excludes",[],bc,bc)
})};var a8=function(){aq.fireDB.db.transaction(function(bd){bd.executeSql("DROP TABLE includes",[],e,e)
})};var ba=function(){aq.fireDB.db.transaction(function(bd){bd.executeSql("DROP TABLE scriptexcludes",[],a8,a8)
})};var bb=function(){aq.fireDB.db.transaction(function(bd){bd.executeSql("DROP TABLE scriptincludes",[],ba,ba)
})};bb()},initTables:function(e){var a7=function(){aq.status.initialized=true;
if(e){e()}};aq.fireDB={db:openDatabase("tmFire","1.0","TamperFire",40*1024*1024),onSuccess:function(be,bd){if(V){console.log("fireDB Success ")
}},onError:function(bd,be){console.log("fireDB Error "+JSON.stringify(be))
},createScriptTable:function(be){var bd=function(bf,bg){aq.fireDB.onError(bf,bg);
if(e){e(false)}};aq.fireDB.db.transaction(function(bf){bf.executeSql("CREATE TABLE IF NOT EXISTS scripts(sid INTEGER PRIMARY KEY ASC, value TEXT)",[],be,bd)
})},createScriptIncludesTable:function(be){var bd=function(bf,bg){aq.fireDB.onError(bf,bg);
if(e){e(false)}};aq.fireDB.db.transaction(function(bf){bf.executeSql("CREATE TABLE IF NOT EXISTS scriptincludes(iid INTEGER, sid INTEGER, FOREIGN KEY(sid) REFERENCES scripts(sid),FOREIGN KEY(iid) REFERENCES includes(iid))",[],be,bd)
})},createIncludesTable:function(be){var bd=function(bf,bg){aq.fireDB.onError(bf,bg);
if(e){e(false)}};aq.fireDB.db.transaction(function(bf){bf.executeSql("CREATE TABLE IF NOT EXISTS includes(iid INTEGER PRIMARY KEY ASC, generic BOOLEAN, regex TEXT)",[],be,bd)
})},createScriptExcludesTable:function(be){var bd=function(bf,bg){aq.fireDB.onError(bf,bg);
if(e){e(false)}};aq.fireDB.db.transaction(function(bf){bf.executeSql("CREATE TABLE IF NOT EXISTS scriptexcludes(eid INTEGER, sid INTEGER, FOREIGN KEY(sid) REFERENCES scripts(sid),FOREIGN KEY(eid) REFERENCES excludes(eid))",[],be,bd)
})},createExcludesTable:function(be){var bd=function(bf,bg){aq.fireDB.onError(bf,bg);
if(e){e(false)}};aq.fireDB.db.transaction(function(bf){bf.executeSql("CREATE TABLE IF NOT EXISTS excludes(eid INTEGER PRIMARY KEY ASC, regex TEXT)",[],be,bd)
})}};var a8=function(){aq.fireDB.createScriptExcludesTable(a7)
};var a9=function(){aq.fireDB.createScriptIncludesTable(a8)
};var ba=function(){aq.fireDB.createExcludesTable(a9)
};var bb=function(){aq.fireDB.createIncludesTable(ba)
};var bc=function(){aq.fireDB.createScriptTable(bb)
};bc()},insertValuesFromJSON:function(bp,bg){var bb=[];
var bn=10000;var ba=[];var bh={};var a7={};var bk=[];
var bt=[];var bd=[];var bj=[];var a8=0;var bq=0;aW.show("TamperFire",chrome.i18n.getMessage("TamperFire_import_started"),chrome.extension.getURL("images/icon128_3d.png"));
for(var bi in bp.scripts){if(!bp.scripts.hasOwnProperty(bi)){continue
}bb.push(bi)}aq.status.action=chrome.i18n.getMessage("Processing_scripts");
aq.status.progress={n:0,of:bb.length};var bm=0;var bl;
var bs=0;var e=function(){for(var bu in bh){var bv=a8++;
bk.push([bu,bh[bu].generic,bv]);for(var bw in bh[bu].sids){bd.push([bv,bh[bu].sids[bw]])
}}};var br=function(){for(var bv in a7){var bu=bq++;
bt.push([bv,bu]);for(var bw in a7[bv].sids){bj.push([bu,a7[bv].sids[bw]])
}}};var bo=function(bx,bz,bA,bu){if(bA.length){aq.resetStatus();
aq.status.update=true;aq.status.action=chrome.i18n.getMessage("Writing_scripts");
aq.status.progress={n:bx,of:bk.length+bt.length+bd.length+bj.length}
}else{if(bu){bu()}return}var by=function(){bo(bx,bz,bA,bu)
};var bw=function(){if(bl>=bA.length-1){if(bu){bu()
}}else{window.setTimeout(by,0)}};var bv=bA.length-1;
if((bv-bl)>bn){bv=bl+bn}if(D){console.log("bg: write TF "+bv)
}bz(bA.slice(bl,bv),bw);bl=bv;aq.status.progress.n=bx+bl
};var bf=function(bu){if(ba.length){aq.scripts.setValues(ba,bu);
ba=[]}else{if(bu){bu()}}};var be=function(){var bw=function(){if(bg){bg(bb.length)
}aW.show("TamperFire",chrome.i18n.getMessage("TamperFire_is_up_to_date"),chrome.extension.getURL("images/icon128_3d.png"))
};var bx=function(){bl=0;bo(bs,aq.scriptExcludes.setValues,bj,bw);
bs+=bj.length};var by=function(){bl=0;bo(bs,aq.scriptIncludes.setValues,bd,bx);
bs+=bd.length};var bu=function(){bl=0;bo(bs,aq.excludes.setValues,bt,by);
bs+=bt.length};var bv=function(){bl=0;bo(bs,aq.includes.setValues,bk,bu);
bs+=bk.length};e();br();bf(bv)};var a9=function(){if(ba.length>bn){bf(a9);
return}bm++;if(bm%96==0){window.setTimeout(bc,0)}else{bc()
}};var bc=function(){if(D&&bm%2048==0){console.log("bg: import TF script "+bb[bm])
}aq.status.progress.n=bm;if(bm<bb.length){var by=bp.scripts[bb[bm]];
ba.push([bb[bm],JSON.stringify(by)]);for(var bv=0;bv<by.excludes.length;
bv++){var bu=an.getRegExpFromUrl(by.excludes[bv],aN,true);
if(!a7[bu]){a7[bu]={sids:[]}}a7[bu].sids.push(bb[bm])
}for(var bv=0;bv<by.includes.length;bv++){var bx=by.includes[bv].trim();
var bu=an.getRegExpFromUrl(bx,aN,true);if(!bh[bu]){var bw=0;
if(bx.search("^[https*]]{1,}[://]{0,}[w.]{0,4}[*|.]{1,}[$|/]")!=-1||bx.search("^[.*/]{1,}$")!=-1||bx.search("^[https*]{1,}[://]{0,}[w.]{0,4}[.|*|/]{1,}$")!=-1||bx.search("^"+an.escapeForRegExp("*://*[$|/]"))!=-1||bx.replace(new RegExp("(https|http|\\*).://\\*"),"")==""||bx=="*"){bw=1
}bh[bu]={sids:[],generic:bw.toString()}}bh[bu].sids.push(bb[bm])
}a9()}else{be()}};bc()},count:function(a9,ba,a8,e){var a7=function(bb){e(bb.length)
};aq.getValues(a9,ba,[a8],a7)},setValue:function(a9,bb,a8,a7,ba,e){aq.setValues(a9,[bb,a7],[a7,ba],e)
},setValues:function(be,bf,a8,ba){if(V){console.log("TM_fire.setValues")
}var bc=0;var bb=function(){if(ba){ba()}};var a7=[];
var bd=[];for(var e=0;e<bf.length;e++){a7.push(bf[e]);
bd.push("?")}var a9=function(bg){if(bc<a8.length){bg.executeSql("INSERT INTO "+be+"("+a7.join(", ")+") VALUES ("+bd.join(", ")+");",a8[bc],a9,aq.fireDB.onError);
bc++}else{bb()}};aq.fireDB.db.transaction(a9)},getValues:function(bf,ba,bd,a7){if(V){console.log("TM_fire.getValues")
}var a8=0;var a9=null;var bb=[];var bc=20;var be=function(bg,bi){if(bi.rows){for(var bh=0;
bh<bi.rows.length;bh++){bb.push(bi.rows.item(bh))}}if(a8<bd.length){e()
}else{a7(bb)}};var e=function(bh){if(!a9){a9=bh}var bg=[];
var bh=[];for(var bi=a8;bi<bd.length&&bi-a8<bc;bi++){bh.push(ba+"=?");
bg.push(bd[bi])}a9.executeSql("SELECT * FROM "+bf+" WHERE "+bh.join(" OR "),bg,be,aq.fireDB.onError);
a8+=bc};aq.fireDB.db.transaction(e)},getMax:function(a8,a7,e){var bb='MAX("'+a7+'")';
var ba=function(bc,be){var bd=0;if(be.rows&&be.rows.length){bd=be.rows.item(0)[bb]
}e(bd)};var a9=function(bc){bc.executeSql("SELECT "+bb+' FROM "'+a8+'"',[],ba,aq.fireDB.onError)
};aq.fireDB.db.transaction(a9)},tab:{getItems:function(a7,a9){var a8=0;
var e={};var bd=[];var bc=1;var ba=function(){for(var bf in e){if(!e.hasOwnProperty(bf)){continue
}bd.push(e[bf])}if(a9){a9(bd)}};var be=function(bg){for(var bf=0;
bf<bg.length;bf++){e[bg[bf][aB]]=bg[bf]}if(--bc==0){ba()
}};if(a1[a7]){for(var bb in a1[a7].urls){if(!a1[a7].urls.hasOwnProperty(bb)){continue
}bc++;aq.url.getItems(bb,be)}}else{a9(bd)}bc--},getCount:function(a8,e){var a7=function(a9){if(a1[a8]){a1[a8].fire_cnt=a9.length
}if(e){e(a9.length)}};if(a1[a8]&&a1[a8].fire_cnt!=undefined){e(a1[a8].fire_cnt)
}else{aq.tab.getItems(a8,a7)}}},url:{getCount:function(a7,e){if(D){console.log("bg: TF: get count for URL "+a7)
}var ba="count(*)";var a9=function(bb,bd){var bc=0;
if(bd.rows&&bd.rows.length){bc=bd.rows.item(0)[ba]}e(bc)
};var a8="";a8+="SELECT "+ba+" FROM scripts WHERE sid IN ";
a8+="    (SELECT sid FROM scriptincludes WHERE iid IN (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex)) ";
a8+="AND NOT sid IN ";a8+="    (SELECT sid FROM scriptexcludes WHERE eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex)) ";
aq.fireDB.db.transaction(function(bb){bb.executeSql(a8,[a7,a7],a9,aq.fireDB.onError)
})},getItems:function(a7,ba){if(D){console.log("bg: TF: get scripts for URL "+a7)
}var be=[];var a9="";var bg=1,bd=0,bc=0;if(bg==0){a9+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE T2.iid IN ";
a9+="    (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex) ";
a9+="AND NOT T1.sid IN ";a9+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}else{if(bg==1){a9+="SELECT * FROM scripts T1 WHERE T1.sid IN ";
a9+="    (SELECT sid FROM scriptincludes WHERE iid IN (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex)) ";
a9+="AND NOT T1.sid IN ";a9+="    (SELECT sid FROM scriptexcludes WHERE eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex)) "
}else{if(bg==2){a9+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE EXISTS";
a9+="    (SELECT iid FROM includes I1 WHERE T2.iid=I1.iid AND generic=0 AND ? REGEXP regex) ";
a9+="AND NOT T1.sid IN ";a9+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}else{if(bg==3){a9+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid JOIN includes I1 ON I1.iid=T2.iid WHERE I1.generic=0 AND ? REGEXP I1.regex ";
a9+="AND NOT T1.sid IN ";a9+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}}}}var e="SELECT DISTINCT t1.value, t1.sid FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE T2.iid IN (SELECT iid FROM includes WHERE generic=0)";
var bf=(a7=="*");var a8=(bf?e:a9);var bb=function(bh,bk){bc=(new Date()).getTime();
if(D){console.log("bg: TF db access: "+bg+" -> "+(bc-bd)+"ms")
}if(bk.rows&&bk.rows.length){for(var bi=0;bi<bk.rows.length;
bi++){try{var bl=bk.rows.item(bi).value;be.push(JSON.parse(bl))
}catch(bj){console.log("bg: error parsing TamperFire entry "+item[bi])
}}ba(be)}else{console.log("bg: warn: no scripts entry");
ba(be)}};aq.fireDB.db.transaction(function(bh){bd=(new Date()).getTime();
bh.executeSql(a8,bf?[]:[a7,a7],bb,aq.fireDB.onError)
})}},ids:{getItems:function(a9,e){var a8=[];var a7=function(bb){if(bb&&bb.length){for(var ba=0;
ba<bb.length;ba++){try{a8.push(JSON.parse(bb[ba]))}catch(bc){console.log("bg: error parsing TamperFire entry "+bb)
}}e(a8)}else{console.log("bg: warn: no scripts entry");
e(a8)}};if(a9.length){aq.scripts.getValues(a9,null,a7)
}else{e(a8)}}},includes:{setValues:function(a7,e){aq.setValues("includes",["regex","generic","iid"],a7,e)
}},scriptIncludes:{setValues:function(a7,e){aq.setValues("scriptincludes",["iid","sid"],a7,e)
}},excludes:{setValues:function(a7,e){aq.setValues("excludes",["regex","eid"],a7,e)
}},scriptExcludes:{setValues:function(a7,e){aq.setValues("scriptexcludes",["eid","sid"],a7,e)
}},scripts:{getValues:function(a9,a8,e){var a7=function(ba){var bb=[];
for(var bc=0;bc<ba.length;bc++){bb.push(ba[bc]["value"])
}e(bb)};aq.getValues("scripts","sid",a9,a7)},setValue:function(a7,a8,e){aq.setValue("scripts","sid",a7,"value",a8,e)
},setValues:function(a7,e){aq.setValues("scripts",["sid","value"],a7,e)
}}};fire=aq;var G={cacheDB:null,localDB:null,init:function(a7){if(V){console.log("TM_storage.init() "+E)
}if(E){var a8=function(a9,bb){G.cacheDB={};if(bb){for(var ba=0;
ba<bb.rows.length;ba++){G.cacheDB[bb.rows.item(ba).name]=bb.rows.item(ba).value
}}G.initialized=true;if(a7){a7()}};var e=function(){if(V){console.log("init cache")
}G.localDB.db.transaction(function(a9){a9.executeSql("SELECT * FROM config",[],a8,G.localDB.onError)
})};G.localDB={db:openDatabase("tmStorage","1.0","TM Storage",30*1024*1024),onSuccess:function(ba,a9){if(V){console.log("localDB Success ")
}},onError:function(a9,ba){console.log("localDB Error "+JSON.stringify(ba))
},createTable:function(a9){G.localDB.db.transaction(function(ba){ba.executeSql("CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)",[],a9,G.localDB.onError)
})}};G.localDB.createTable(e)}else{G.initialized=true;
if(a7){a7()}}},setValue:function(bc,ba,a7){if(V){console.log("TM_storage.setValue")
}var a9=(typeof ba)[0];var a8=ak(bc);switch(a9){case"o":try{ba=a9+JSON.stringify(ba)
}catch(bb){console.log("setValue: "+bb);return}break;
default:ba=a9+ba}if(E){if(G.getValue(a8,null)){G.localDB.db.transaction(function(e){e.executeSql("UPDATE config SET value=? WHERE name=?",[ba,a8],a7?a7:G.localDB.onSuccess,G.localDB.onError)
})}else{G.localDB.db.transaction(function(e){e.executeSql("INSERT INTO config(name, value) VALUES (?,?)",[a8,ba],a7?a7:G.localDB.onSuccess,G.localDB.onError)
})}G.cacheDB[a8]=ba}else{localStorage.setItem(a8,ba)
}},getValue:function(a9,e){if(V){console.log("TM_storage.getValue")
}var a8=ak(a9);var a7=function(bc,ba){if(!bc){return ba
}var bb=bc[0];bc=bc.substring(1);switch(bb){case"b":return bc=="true";
case"n":return Number(bc);case"o":try{return JSON.parse(bc)
}catch(bd){console.log(bd);return ba}default:return bc
}};if(E){return a7(G.cacheDB[a8],e)}else{return a7(localStorage.getItem(a8,e),e)
}},deleteAll:function(e){if(V){console.log("TM_storage.deleteAll")
}if(E){G.cacheDB[name]=null;G.localDB.db.transaction(function(a9){a9.executeSql("DELETE FROM config WHERE ID>0",[],e,G.localDB.onError)
})}else{var a8=G.listValues();for(var a7=0;a7<a8.length;
a7++){localStorage.removeItem(a8[a7])}}},deleteValue:function(a8,e){if(V){console.log("TM_storage.deleteValue")
}var a7=ak(a8);if(E){G.cacheDB[a7]=null;delete G.cacheDB[a7];
G.localDB.db.transaction(function(a9){a9.executeSql("DELETE FROM config WHERE name=?",[a7],e,G.localDB.onError)
})}else{localStorage.removeItem(a7)}},listValues:function(){if(V){console.log("TM_storage.listValues")
}if(E){var e=[];for(var a7 in G.cacheDB){if(!G.cacheDB.hasOwnProperty(a7)){continue
}e.push(a7)}return e}else{var e=[];for(var a7=0;a7<localStorage.length;
a7++){e.push(localStorage.key(a7))}return e}}};var ab=function(){var e=[];
var a8=[];for(var a9=0;a9<e.length;a9++){var a7="system/"+e[a9]+".tamper.js";
var ba=Registry.getRaw(a7);if(ba){a8.push(ba)}}return a8
};var aF=function(e,a8){if(a8==undefined){a8=aN}if(e!=null&&a1[e]&&a1[e].scripts_running){a8.images.icon=a8.values.appearance_3d_icons?"images/icon_3d.png":"images/icon.png";
chrome.browserAction.setIcon({tabId:e,path:chrome.extension.getURL(a8.images.icon)})
}else{a8.images.icon=a8.values.appearance_3d_icons?"images/icon_3d_grey.png":"images/icon_grey.png";
var a7={path:chrome.extension.getURL(a8.images.icon)};
if(e!=null){a7.tabId=e}chrome.browserAction.setIcon(a7)
}};var aH=function(e){aF(null,e);if(aN.values.fire_enabled&&!aq.status.initialized){aq.init()
}Y(aN.values.logLevel)};var O=function(bc,bb){var a8=this;
var a7="";a7+="// ==UserScript==\n";a7+="// @name       My Fancy New Userscript\n";
a7+="// @namespace  http://use.i.E.your.homepage/\n";
a7+="// @version    0.1\n";a7+="// @description  enter something useful\n";
a7+="// @match      http://*/*\n";a7+="// @copyright  2012+, You\n";
a7+="// ==/UserScript==\n\n";var ba={configMode:0,safeUrls:true,tryToFixUrl:true,debug:false,logLevel:0,showFixedSrc:false,firstRun:true,notification_showTMUpdate:false,notification_silentScriptUpdate:true,scriptTemplate:a7,scriptUpdateCheckPeriod:12*60*60*1000,scriptUpdateHideNotificationAfter:15*1000,scriptUpdateCheckDisabled:false,autoReload:false,appearance_3d_icons:false,appearance_badges:"running",fire_enabled:false,fire_sort_cache_enabled:true,fire_updateURL:"http://tampermonkey.net/fire/update.php",fire_updatePeriod:14*24*60*60*1000,editor_enabled:true,editor_indentUnit:4,editor_indentWithTabs:false,editor_tabMode:"smart",editor_enterMode:"indent",editor_electricChars:true,editor_lineNumbers:true,forbiddenPages:["*.paypal.tld/*","https://*deutsche-bank-24.tld/*","https://*bankamerica.tld/*","*://plusone.google.com/*/fastbutton*","*://www.facebook.com/plugins/*","*://platform.twitter.com/widgets/*"]};
this.load=function(bd){var bh=ab();for(var be in bh){var bf=bh[be];
window.setTimeout(function(){ag({tabid:null,url:null,src:bf,ask:false,defaultscript:true})
},1)}a8.defaults=ba;a8.values={};for(var bg in ba){if(!ba.hasOwnProperty(bg)){continue
}a8.values[bg]=ba[bg]}var bi=G.getValue("TM_config",a8.defaults);
for(var bg in bi){if(!bi.hasOwnProperty(bg)){continue
}a8.values[bg]=bi[bg]}bd()};this.save=function(bd){if(bd==undefined){bd=true
}var be=a8.values;be.firstRun=false;G.setValue("TM_config",be);
if(bd&&bb){bb()}};var e=function(){if(a8.values.firstRun){a8.save(false)
}a8.images={};a8.images.icon=aN.values.appearance_3d_icons?"images/icon_3d.png":"images/icon.png";
a8.initialized=true;if(bc){bc(a8)}if(a8.values.notification_showTMUpdate&&aY){aW.show(chrome.i18n.getMessage("Welcome_"),chrome.i18n.getMessage("Have_fun_with_Tampermonkey",aY),chrome.extension.getURL("images/icon128_3d.png"))
}};var a9=function(bd){if(!G.initialized){window.setTimeout(function(){a9(bd)
},10);return}var be=function(){a8.load(bd)};aQ(be)};
a9(e);return this};var aw=function(a8,ba,a9,a7,e){return v(a8,ba,a9,a7,e,true)
};var aA=function(){var e=this;this.getNextResource=function(a9,a7){var ba=function(bj,bh){bh.loaded=true;
bh.resURL="";bh.resText="";var bk=null;var bg=bj.responseHeaders?bj.responseHeaders.split("\n"):null;
for(var bf in bg){var bi=bg[bf].split(":");if(V){console.log("Header: "+JSON.stringify(bi))
}if(bi.length>=2&&bi[0].trim().toLowerCase()=="content-type"&&bi[1].search("image")!=-1){bk=bi[1].trim();
break}}if(bj.readyState==4){if(bj.status==200||bj.status==0){bh.resText=bj.responseText;
if(bj.status==0||an.isLocalImage(bh.url)){if(bh.url.search(".ico$")!=-1){bk="image/x-icon"
}else{if(bh.url.search(".gif$")!=-1){bk="image/gif"
}else{if(bh.url.search(".png$")!=-1){bk="image/png"
}else{bk="image/x-icon"}}}}else{L(bh.url,bj.responseText,bj.responseHeaders)
}if(!bk){bh.resURL=W.Base64.encode(bj.responseText)
}else{bh.resURL="data:"+bk+";base64,"+W.Base64.encode(bj.responseText)
}a7(a9)}else{if(D||V){console.log("Failed to load! "+bj.status+" "+bj.statusText)
}a7(a9)}}};for(var a8 in a9.resources){var bd=a9.resources[a8];
if(!bd.loaded){if(bd.url.length>8&&bd.url.substr(0,8)=="/images/"&&bd.url.search("\\.\\.")==-1){bd.url=chrome.extension.getURL(bd.url)
}var bc=az(bd.url);if(bc){ba({readyState:4,status:200,responseText:bc.content,responseHeaders:bc.headers},bd)
}else{if(bd.url.search("^file://")==0){var be=function(bf){ba({readyState:4,status:bf?0:404,responseText:bf},bd)
};b.getSource(bd.url,be)}else{var bb={method:"GET",url:bd.url,retries:ax,overrideMimeType:"text/plain; charset=x-user-defined"};
if(V){console.log("request "+bd.url)}v(bb,function(bf){ba(bf,bd)
})}}return true}}return false};this.getRequires=function(bd,ba){var be=function(bh,bg){a8.loaded=true;
if(bh.readyState==4&&bh.status==200||bh.status==0){a8.textContent=bh.responseText;
L(a8.url,bh.responseText)}};for(var bb in bd.requires){var a8=bd.requires[bb];
if(!a8.loaded&&a8.url){var bf=az(a8.url);if(bf){be({readyState:4,status:200,responseText:bf.content},a8);
e.getRequires(bd,ba)}else{if(V){console.log("requires "+a8.url)
}var a9=function(bg){be(bg,a8);e.getRequires(bd,ba)
};if(a8.url.search("^file://")==0){var bc=function(bg){a9({readyState:4,status:bg?0:404,responseText:bg})
};b.getSource(a8.url,bc)}else{var a7={method:"GET",retries:ax,url:a8.url,};
v(a7,a9,null,null,null,true)}}return true}}ba()};this.contentLoad=function(a9,a8,a7){if(e.getNextResource(a8,function(bb){e.contentLoad(a9,bb,a7)
})){return}e.currentTab=a9;if(typeof aI[a9.id]=="undefined"){aI[a9.id]={storage:{}}
}var ba=function(){var bb=[];bb.push(a8);console.log(chrome.i18n.getMessage("run_script_0url0___0name0",[a9.url,a8.name]));
e.injectScript(bb,a9,a7)};e.getRequires(a8,ba)};this.getUrlContents=function(a7){var a8="";
var a9=new XMLHttpRequest();a9.open("GET","/"+a7,false);
a9.send(null);a8=a9.responseText;return a8};this.createEnv=function(a8,a7){a8=a0.mkCompat(a8,a7);
if(aN.values.debug){console.log(chrome.i18n.getMessage("env_option__debug_scripts"));
a8="debugger;\n"+a8}return a8};this.injectScript=function(ba,a7,a8){var bd;
if(a8==undefined){a8=function(){}}for(var bb=0;bd=ba[bb];
bb++){var bg=[];bd.requires.forEach(function(bi){var bh=bi.textContent;
bg.push(bh)});var be="\n"+bg.join("\n")+"\n";var bc=aR(bd.name);
var bf={};for(var a9 in bd){if(a9=="includes"||a9=="matches"||a9=="requires"||a9=="excludes"||a9=="textContent"){continue
}bf[a9]=bd[a9]}chrome.tabs.sendRequest(e.currentTab.id,{method:"executeScript",header:bd.header,code:e.createEnv(bd.textContent,bd),requires:a0.mkCompat(be,bd),version:chrome.extension.getVersion(),storage:bc,script:bf,id:e.currentTab.scriptId},a8)
}}};var x=function(e){t(e,null);aD(e,null)};var ay=function(a9,ba){if(a9.fileURL&&a9.fileURL.search("^file://"==-1)){var a8=a9.fileURL.replace(".user.js",".meta.js");
if(a8==a9.fileURL){a8=a9.fileURL.replace(".tamper.js",".meta.js")
}if(a8!=a9.fileURL){a8+=(a8.search("\\?")==-1?"?":"&")+"ts="+(new Date()).getTime();
var a7={method:"GET",retries:0,url:a8,};var e=function(bb){a9.meta=null;
if(bb.readyState==4&&bb.status==200){var bc=H.processMetaHeader(bb.responseText);
a9.meta=bc;a9.metasrc=bb.responseText}else{console.log("bg: unable to find meta data @ "+a8+" req.status = "+bb.status)
}ba(a9)};v(a7,e);return}}a9.meta=null;ba(a9)};var c=function(a7){var a9,a8=a7.options.override;
a7.includes=a8.orig_includes.slice();a7.excludes=a8.orig_excludes.slice();
a7.matches=a8.orig_matches?a8.orig_matches.slice():[];
for(a9=0;a9<a8.use_includes.length;a9++){var e=a7.excludes.indexOf(a8.use_includes[a9]);
if(e>=0){a7.excludes.splice(e,1)}a7.includes.push(a8.use_includes[a9])
}if(typeof a8.use_matches!=="undefined"){for(a9=0;a9<a8.use_matches.length;
a9++){e=a7.excludes.indexOf(a8.use_matches[a9]);if(e>=0){a7.excludes.splice(e,1)
}a7.matches.push(a8.use_matches[a9])}}for(a9=0;a9<a8.use_excludes.length;
a9++){a7.excludes.push(a8.use_excludes[a9])}return a7
};var ag=function(a9){var bg=false;var a8=false;if(a9.name==undefined){a9.name=null
}if(a9.clean==undefined){a9.clean=false}if(a9.defaultscript==undefined){a9.defaultscript=false
}if(a9.ask==undefined){a9.ask=true}if(a9.url==undefined||a9.url==null){a9.url=""
}if(a9.save==undefined){a9.save=false}if(a9.hash==undefined){a9.hash=""
}var bk=H.createScriptFromSrc(a9.src);if(a9.name&&bk.name!=bk.name){console.log("bg: addNewUserScript() Names do not match!");
return false}if(!bk.name||bk.name==""||(bk.version==undefined)){chrome.tabs.sendRequest(a9.tabid,{method:"showMsg",msg:chrome.i18n.getMessage("Invalid_UserScript__Sry_")},function(bm){});
return false}var bj=G.getValue(bk.name,null);var ba="";
if(!a9.clean&&bj&&bj.system&&!a9.defaultscript){return false
}if(bk.options.compat_uW_gmonkey){chrome.tabs.sendRequest(a9.tabid,{method:"showMsg",msg:chrome.i18n.getMessage("This_script_uses_uW_gm_api_")},function(bm){});
return false}bk.hash=bj?bj.hash:a9.hash;bk.lastUpdated=(new Date()).getTime();
bk.system=a9.defaultscript;bk.fileURL=a9.url;bk.position=bj?bj.position:F()+1;
if(bk.name.search("@")!=-1){chrome.tabs.sendRequest(a9.tabid,{method:"showMsg",msg:chrome.i18n.getMessage("Invalid_UserScript_name__Sry_")},function(bm){});
return false}else{if(!a9.clean&&bj&&bk.version==bj.version){if(a9.defaultscript||a9.noreinstall){return null
}if(a9.save){ba+=chrome.i18n.getMessage("You_are_about_to_modify_a_UserScript_")+"     \n"
}else{ba+=chrome.i18n.getMessage("You_are_about_to_reinstall_a_UserScript_")+"     \n";
bg=true;ba+="\n"+chrome.i18n.getMessage("All_script_settings_will_be_reset_")+"!!\n"
}ba+="\n"+chrome.i18n.getMessage("Name_")+"\n";ba+="    "+bk.name+((bk.version!="")?" v"+bk.version:"")+"\n";
ba+="\n"+chrome.i18n.getMessage("Installed_Version_")+"\n";
ba+="    v"+bk.version+"\n"}else{if(!a9.clean&&bj&&ad(bk.version,bj.version)==q){ba+=chrome.i18n.getMessage("You_are_about_to_downgrade_a_UserScript")+"     \n";
ba+="\n"+chrome.i18n.getMessage("Name_")+"\n";ba+="    "+bk.name+((bk.version!="")?" v"+bk.version:"")+"\n";
ba+="\n"+chrome.i18n.getMessage("Installed_Version_")+"\n";
ba+="    v"+bj.version+"\n"}else{if(!a9.clean&&bj){ba+=chrome.i18n.getMessage("You_are_about_to_update_a_UserScript_")+"     \n";
ba+="\n"+chrome.i18n.getMessage("Name_")+"\n";ba+="    "+bk.name+((bk.version!="")?" v"+bk.version:"")+"\n";
ba+="\n"+chrome.i18n.getMessage("Installed_Version_")+"\n";
ba+="    v"+bj.version+"\n";a8=true}else{ba+=chrome.i18n.getMessage("You_are_about_to_install_a_UserScript_")+"     \n";
ba+="\n"+chrome.i18n.getMessage("Name_")+"\n";ba+="    "+bk.name+((bk.version!="")?" v"+bk.version:"")+"\n"
}}}}if(!a9.clean&&bj){bk.options.override=bj.options.override
}bk.options.override.orig_includes=bk.includes;bk.options.override.orig_excludes=bk.excludes;
bk.options.override.orig_matches=bk.matches;bk=c(bk);
if(!bg&&!a9.clean&&bj){bk.enabled=bj.enabled;if(!bk.options.awareOfChrome){bk.options.compat_forvarin=bj.options.compat_forvarin;
if(bk.options.run_at==""){bk.options.run_at=bj.options.run_at
}}if(bj.fileURL!=bk.fileURL){ba+="\n"+chrome.i18n.getMessage("The_update_url_has_changed_from_0oldurl0_to__0newurl0",[bj.fileURL,bk.fileURL]);
a8=false}}if(!bk.includes.length&&!bk.matches.length){ba+="\n"+chrome.i18n.getMessage("Note_")+"\n";
ba+="    "+chrome.i18n.getMessage("This_script_does_not_provide_any__include_information_")+"\n";
ba+="    "+chrome.i18n.getMessage("Tampermonkey_assumes_0urlAllHttp0_in_order_to_continue_",an.urlAllHttp)+"    \n";
bk.includes.push(an.urlAllHttp)}if(!bk.options.awareOfChrome){if(a9.src.search("DOMContentLoaded")!=-1){if(bk.options.run_at==""){bk.options.run_at="document-start"
}}}if(bk.options.run_at==""){bk.options.run_at="document-end"
}var bf=bk.excludes.length+bk.includes.length+bk.matches.lenght;
var bi=0;var bb=4;var a7="";a7+="\n"+chrome.i18n.getMessage("Include_s__");
if(bk.options.override.includes||bk.options.override.matches){a7+=" ("+chrome.i18n.getMessage("overwritten_by_user")+")"
}a7+="\n";var bc=0,e=0;for(bc=0;bc<bk.includes.length;
bc++,e++){a7+="    "+bk.includes[bc];a7+=(bf<15)?"\n":(bi<bb)?";":"\n";
if(bi++>=bb){bi=0}if(e>13){a7+="\n"+chrome.i18n.getMessage("Attention_Can_not_display_all_includes_")+"\n";
break}}for(bc=0;bc<bk.matches.length;bc++,e++){a7+="    "+bk.matches[bc];
a7+=(bf<15)?"\n":(bi<bb)?";":"\n";if(bi++>=bb){bi=0
}if(e>13){a7+="\n"+chrome.i18n.getMessage("Attention_Can_not_display_all_includes_")+"\n";
break}}var bl="";bi=0;if(bk.excludes.length){bl+="\n"+chrome.i18n.getMessage("Exclude_s__");
if(bk.options.override.excludes){bl+=" ("+chrome.i18n.getMessage("overwritten_by_user")+")"
}bl+="\n";for(var bc=0;bc<bk.excludes.length;bc++){bl+="    "+bk.excludes[bc];
bl+=(bf<15)?"\n":(bi<bb)?";":"\n";if(bi++>=bb){bi=0
}if(bc>13){bl+="\n"+chrome.i18n.getMessage("Attention_Can_not_display_all_excludes_")+"\n";
break}}}ba+=a7+bl;var bh=false;for(var be in bk.options){if(be.search("compat_")!=-1&&bk.options[be]===true){bh=true;
break}}if(bh){ba+="\n"+chrome.i18n.getMessage("Note__A_recheck_of_the_GreaseMonkey_FF_compatibility_options_may_be_required_in_order_to_run_this_script_")+"\n\n"
}if(a9.clean){ba+="\n"+chrome.i18n.getMessage("Do_you_really_want_to_factory_reset_this_script_")+"    "
}else{ba+="\n"+chrome.i18n.getMessage("Do_you_want_to_continue_")
}var bd=function(){t(bk.name,bk);if(!bj||a9.clean){aD(bk.name,{ts:(new Date()).getTime()})
}if(!a9.cb){au();var bm=function(bo){chrome.extension.sendRequest({method:"updateOptions",items:bo},function(bp){})
};h(bm)}if(false){var bn=function(bo){if(!bo){return
}console.log("bg: disable extension "+bo.name);f.setEnabled(bo,false)
};f.getUserscriptByName(bk.name,bn)}};if(!a9.ask||(a8&&aN.values.notification_silentScriptUpdate)){bd();
if(a9.cb){a9.cb(true)}}else{chrome.tabs.sendRequest(a9.tabid,{method:"confirm",msg:ba},function(bm){if(bm.confirm){bd()
}if(a9.cb){a9.cb(bm.confirm)}})}return true};var d=function(a8,a7,e){var a9={method:"GET",retries:ax,url:a8,};
var ba=function(bb){if(bb.readyState==4&&bb.status==200){var bc=function(bd){if(e){e(true,bd)
}};ag({tabid:a7,url:a8,src:bb.responseText,ask:true,cb:bc})
}else{if(V){console.log("scriptClick: "+a8+" req.status = "+bb.status)
}if(e){e(false,false)}}};v(a9,ba)};var o=function(a9,e){var a7=function(bb){if(!a9){return false
}for(var ba=0;ba<a9.length;ba++){if(a9[ba]==bb){return true
}}return false};var a8=function(bb){var bf=0;if(!bb||!bb.id||!a1[bb.id]){var ba=0;
var bd=0;for(var bc in a1){if(!a1.hasOwnProperty(bc)){continue
}if(bd==0||a1[bc].ts<bd){if(!a7(bc)){bd=a1[bc].ts;ba=bc
}}}bf=Number(ba)}else{if(!a7(bb.id)){bf=bb.id}}if(bf==0){var be=function(bg){bf=bg.id;
var bi=function(){chrome.tabs.remove(bf)};var bh=function(){e(bf,bi)
};window.setTimeout(bh,100)};chrome.tabs.create({url:chrome.extension.getURL("ask.html")},be)
}else{e(bf,null)}};chrome.tabs.getSelected(null,a8)
};var aW={responses:{},getNotifyId:function(a7){var e=0;
if(a7){while(e==0||aW.responses[e]!=undefined){e=((new Date()).getTime()+Math.floor(Math.random()*6121983+1)).toString()
}aW.responses[e]=a7;if(NV){console.log("bg: registerNotifyId "+e)
}}return e},show:function(bc,bg,a8,ba,bf){var bd=bf?aW.getNotifyId(bf):null;
var bb="notify=1&title="+encodeURIComponent(bc)+"&text="+encodeURIComponent(bg);
if(a8){bb+="&image="+encodeURIComponent(a8)}if(ba!=undefined){ba=Number(ba);
bb+="&delay="+encodeURIComponent(ba)}if(bd){bb+="&notifyId="+encodeURIComponent(bd);
var be=null;var a9=null;var a7=function(){if(NV){console.log("bg: received click -> notifyId: "+bd)
}a9();bf(true)};a9=function(){if(NV){console.log("bg: remove listener -> notifyId: "+bd)
}window.removeEventListener("notify_"+bd,a7,false);
if(be){window.clearTimeout(be)}};window.addEventListener("notify_"+bd,a7,false);
be=window.setTimeout(function(){be=null;a9();bf(false)
},ba?ba+5000:10*60*1000)}var e=webkitNotifications.createHTMLNotification("notification.html?"+bb);
e.show()}};var i=function(a9,ba,bd,bc){if(!a9&&aN.values.scriptUpdateCheckPeriod==0){return
}if(ba){var a7=chrome.i18n.getMessage("Script_Update");
var bb=chrome.i18n.getMessage("Check_for_userscripts_updates")+"...";
aW.show(a7,bb,chrome.extension.getURL("images/icon128_3d.png"),5000)
}var a8=a5();if(a9||((new Date()).getTime()-a8.scripts)>aN.values.scriptUpdateCheckPeriod){console.log("bg: check for script updates "+(bd?" for "+bd:""));
var e=function(bf,bi){if(bf){try{var bg=function(bk){if(bk){var bl=function(bo,bn){var bm={tabid:bo,url:bi.url,src:bi.code,ask:true,cb:bn,hash:bi.newhash!=undefined?bi.newhash:null};
ag(bm)};o(null,bl)}};var bj=chrome.i18n.getMessage("There_is_an_update_for_0name0_avaiable_",bi.name)+"\n"+chrome.i18n.getMessage("Click_here_to_install_it_");
var be=chrome.i18n.getMessage("Just_another_service_provided_by_your_friendly_script_updater_");
if(aN.values.notification_silentScriptUpdate){bg(true)
}else{aW.show(be,bj,chrome.extension.getURL("images/icon128_3d.png"),aN.values.scriptUpdateHideNotificationAfter,bg)
}}catch(bh){console.log("bg: notification error "+bh.message)
}}if(bc){bc(bf)}};M(0,ba,bd,e);a8.scripts=(new Date()).getTime();
l(a8)}else{if(bc){console.log("bg: WARN notifyOnScriptUpdates -> no force but callback");
window.setTimeout(bc,1)}}window.setTimeout(i,5*60*1000)
};trup=i;var at=function(a8){var e=H.createScriptFromSrc(a8);
if(!e.name||e.name==""||(e.version==undefined)){return m
}var a7=G.getValue(e.name,null);if(a7&&a7.system){return null
}if(e.options.compat_uW_gmonkey){return m}if(e.name.search("@")!=-1){return m
}else{if(a7&&e.version==a7.version){return J}else{if(a7&&ad(e.version,a7.version)==q){return q
}else{if(a7){return ap}else{return ap}}}}return ap};
var M=function(a7,a8,bk,bj){var bg=ae();var be=1;var bl=0;
var bc=function(){if(be==0&&bl==0){if(a8){if(D||V||UV){console.log("No update found")
}aW.show("Narf!",chrome.i18n.getMessage("No_update_found__sry_"),chrome.extension.getURL("images/icon128_3d.png"))
}if(bj){window.setTimeout(bj,1)}}};var bi=function(bn){var bm={method:"GET",retries:ax,url:bn.script.fileURL,};
be++;(function(){var bp={tabid:a7,r:bn};var bo=function(bs){be--;
if(bs.readyState==4&&bs.status==200){if(V){console.log(bp.r.script.fileURL)
}var br=function(){if(bp.r.meta){if(V||UV){console.log("bg: update hash of script "+bn.script.name+" to "+bp.r.meta[u])
}bp.r.script.hash=bp.r.meta[u];t(bp.r.script.name,bp.r.script)
}};var bq=at(bs.responseText);if(bq==ap){bl++;if(bj){bj(true,{name:bp.r.script.name,url:bp.r.script.fileURL,code:bs.responseText,newhash:bp.r.newhash})
}return}else{if(bq==J){if(V||UV){console.log("bg: found same version @ "+bp.r.script.fileURL)
}br()}}}else{console.log(chrome.i18n.getMessage("UpdateCheck_of_0name0_Url_0url0_failed_",[bp.r.script.name,bp.r.script.fileURL]))
}bc()};v(bm,bo)})()};var bf=function(bn){be++;var bm=function(bo){if(!bn.script.hash||!bo.meta||bo.meta[u]!=bn.script.hash){if(V||UV){console.log("bg: hash of script "+bn.script.name+" has changed or does not exist! running version check!")
}bn.meta=bo.meta;bn.metasrc=bo.metasrc;bi(bn)}else{if(V||UV){console.log("bg: hash of script "+bn.script.name+" has NOT changed ("+bo.meta[u]+").")
}}be--;bc()};ay(bn.script,bm)};var bd=false;for(var bb in bg){var ba=bg[bb];
var e=K(ba);if(!e.script||!e.cond){console.log(chrome.i18n.getMessage("fatal_error")+"("+ba+")!!!");
continue}var bh=bk&&e.script.id!=bk;var a9=!aN.values.scriptUpdateCheckDisabled&&!e.script.enabled&&!bk;
if(bh||a9||!e.script.fileURL||e.script.fileURL==""){continue
}bd=true;bf(e)}if(!bd&&bk&&bj){window.setTimeout(bj,1)
}be--};var F=function(){var a9=ae();var bb=0;for(var e in a9){var ba=a9[e];
var a8=K(ba);if(!a8.script||!a8.cond){console.log("fatal error ("+ba+")!!!");
continue}if(a8.script.position&&a8.script.position>bb){bb=a8.script.position
}}var a7=new H.Script();if(a7.position>bb){bb=a7.position
}return bb};var a2=function(e,ba,a7){var a8=function(bc){return bc.replace(/\/$/,"")
};var bb;if(!a7&&ba.length>1&&ba.substr(0,1)=="/"){bb=new RegExp(".*"+ba.replace(/^\//g,"").replace(/\/$/g,"")+".*","i")
}else{var a9=an.getRegExpFromUrl(ba,aN,false,a7);bb=new RegExp(a9)
}return e.replace(bb,"")==""};var aM=function(e,a8,ba){var a7,a9=false;
if(a8.inc||a8.match){for(a7 in a8.inc){if(a2(e,a8.inc[a7])){if(D){console.log("bg: @include '"+a8.inc[a7]+"' matched"+(ba?" ("+ba+")":""))
}a9=true;break}}if(a8.match){for(a7 in a8.match){if(a2(e,a8.match[a7],true)){if(D){console.log("bg: @match '"+a8.match[a7]+"' matched"+(ba?" ("+ba+")":""))
}a9=true;break}}}if(!a9){return a9}}else{a9=true}for(a7 in a8.exc){if(a2(e,a8.exc[a7])){if(D){console.log("bg: @exclude '"+a8.exc[a7]+"' matched"+(ba?" ("+ba+")":""))
}a9=false;break}}return a9};var ae=function(){var a8=G.listValues();
var a9=[];for(var a7 in a8){var e=a8[a7];if(e.search(/@re$/)==-1){continue
}var ba=e.replace(/@re$/,"");a9.push(ba)}return a9};
var au=function(a7,bc){var e=a6();for(var a8=0;a8<e.length;
a8++){var a9=e[a8];if(a9.name==a7){var ba=(a9.position<bc)?0.5:-0.5;
a9.position=(Number(bc)+ba)}}e=aE(e);var bb=1;for(var a8=0;
a8<e.length;a8++){var a9=e[a8];a9.position=bb++;t(a9.name,a9)
}};var aE=function(e){var a7=function(a9,a8){return a9.position-a8.position
};e.sort(a7);return e};var a6=function(a7){var bb=ae();
var a8=[];if(D||V){console.log("determineScriptsToRun @"+a7)
}for(var e in bb){var bc=bb[e];if(a7){var a9=G.getValue(bc+aa,null);
if(!a9){continue}if(!aM(a7,a9,bc)){continue}}var ba=K(bc);
if(!ba.script||!ba.cond){console.log("fatal error ("+bc+")!!!");
continue}if(V){console.log("schedule script "+bc)}a8.push(ba.script)
}if(V){console.log("determineScriptsToRun sort")}return aE(a8)
};var aR=function(e){var a7=G.getValue(e+aC,{ts:0,data:{}});
if(typeof a7.ts==="undefined"){a7.ts=0}if(typeof a7.data==="undefined"){a7.data={}
}return a7};var aD=function(e,a7){if(a7){G.setValue(e+aC,a7)
}else{G.deleteValue(e+aC)}};var K=function(e){var a7=G.getValue(e,null);
if(a7){a7.textContent=G.getValue(e+aO,a7.textContent);
if(!a7.textContent){a7=null}}return{script:a7,cond:G.getValue(e+aa,null)}
};var t=function(a7,e){if(e){G.setValue(a7+aa,{inc:e.includes,match:e.matches,exc:e.excludes});
G.setValue(a7+aO,e.textContent);var a8=e;a8.textContent=null;
G.setValue(a7,a8)}else{G.deleteValue(a7+aa);G.deleteValue(a7+aO);
G.deleteValue(a7)}};var r=function(a8,bf,a7,bb){if(bb===undefined){bb=true
}if(bf===undefined){bf=null}var ba=ah;ah=[];for(var bc in ba){var be=ba[bc];
try{if(a8&&be.name==a8){if(V||SV){console.log("storage notify "+a8)
}if(bb){if(bf){var bg={data:{},ts:0};var bh=aR(be.name);
bg.data[bf]=bh.data[bf];bg.ts=bh.ts;var a9={storage:bg};
if(bh.data[bf]===undefined){a9.removed=bf}be.response(a9)
}else{be.response({storage:aR(be.name)})}}ah.push(be)
}else{if(a7!=undefined&&be.tabid==a7){if(V||SV){console.log("storage refresh/remove listeners of tab "+a7)
}if(bb){be.response({refresh:true})}}else{ah.push(be)
}}}catch(bd){console.log("Storage listener notification for script "+a8+" failed! Page reload?!")
}}};var aL=function(a9,bc){var a7=ah;ah=[];for(var a8 in a7){var bb=a7[a8];
try{if(bb.name==a9&&bb.id==bc){if(V||SV){console.log("send empty response "+a9+" "+bc)
}bb.response({})}else{ah.push(bb)}}catch(ba){console.log("Storage listener clear for script "+a9+" failed! Page reload?!")
}}};var aZ=function(a7){if(!I){window.setTimeout(function(){aZ(a7)
},10);return}var e=function(be){var bb=a7.sender;var a8=function(bh){try{a7.postMessage(bh)
}catch(bg){console.log("bg: Error sending port message: "+JSON.stringify(bh))
}};if(be.method=="xhr"){var a9=function(){a7.disconnect()
};var bd=function(bg){a8({error:true,data:bg})};var ba=function(bg){a8({success:true,data:bg})
};var bf=function(bg){a8({change:true,data:bg})};v(be.details,ba,bf,bd,a9)
}else{if(be.method=="addStorageListener"){if(typeof bb.tab!="undefined"){if(V||SV){console.log("storage add listener "+be.name+" "+be.id)
}ah.push({tabid:bb.tab.id,id:be.id,name:be.name,time:(new Date()).getTime(),response:a8})
}else{console.log(chrome.i18n.getMessage("Unable_to_load_storage_due_to_empty_tabID_"));
a8({error:true})}}else{if(be.method=="removeStorageListener"){if(typeof bb.tab!="undefined"){if(V){console.log("storage remove listener "+be.name+" "+be.id)
}aL(be.name,be.id);a8({error:false})}else{console.log("Unable to remove storage listener due to empty tabID!");
a8({error:true})}}else{if(be.method=="saveStorageKey"){if(typeof bb.tab!="undefined"){if(be.name){var bc=aR(be.name);
if(V||SV){console.log("storage ("+be.name+"): set key "+be.key+" to '"+be.value+"'")
}bc.data[be.key]=be.value;bc.ts=be.ts;aD(be.name,bc);
r(be.name,be.key)}}else{console.log(chrome.i18n.getMessage("Unable_to_save_storage_due_to_empty_tabID_"))
}a8({})}}}}};a7.onMessage.addListener(e)};var k=function(a8,e,bm){if(!I){window.setTimeout(function(){k(a8,e,bm)
},10);return}if(V||EV||MV){console.log("back: request.method "+a8.method+" id "+a8.id)
}if(a8.method=="openInTab"){var bf=function(bo){a4[bo.id]=true;
bm({tabId:bo.id})};chrome.tabs.create({url:a8.url},bf)
}else{if(a8.method=="closeTab"){if(a8.tabId&&a4[a8.tabId]){chrome.tabs.remove(a8.tabId)
}bm({})}else{if(a8.method=="getTab"){if(typeof e.tab!="undefined"){if(typeof aI[e.tab.id]=="undefined"){aI[e.tab.id]={storage:{}}
}var a7=aI[e.tab.id];bm({data:a7})}else{console.log(chrome.i18n.getMessage("Unable_to_deliver_tab_due_to_empty_tabID_"));
bm({data:null})}}else{if(a8.method=="getTabs"){bm({data:aI})
}else{if(a8.method=="saveTab"){if(typeof e.tab!="undefined"){var a7={};
for(var bj in a8.tab){a7[bj]=a8.tab[bj]}aI[e.tab.id]=a7
}else{console.log(chrome.i18n.getMessage("Unable_to_save_tab_due_to_empty_tabID_"))
}bm({})}else{if(a8.method=="setOption"){var bh=(typeof e.tab!="undefined"&&e.tab)?(e.tab.id>=0?true:false):null;
aN.values[a8.name]=a8.value;aN.save();var bf=function(bo){if(bh){bm({items:bo})
}else{chrome.extension.sendRequest({method:"updateOptions",items:bo},function(bp){});
bm({})}};h(bf)}else{if(a8.method=="modifyScriptOptions"||a8.method=="modifyNativeScript"){var bh=(typeof e.tab!="undefined"&&e.tab)?(e.tab.id>=0?true:false):null;
var bi=(a8.reload==undefined||a8.reload==true);var bl=function(){if(a8.reorder){au()
}var bp=function(){var br=function(bs){chrome.extension.sendRequest({method:"updateOptions",items:bs},function(bt){})
};h(br)};if(V){console.log("modifyScriptOptions "+bh)
}if(bi){if(bh){var bo=function(br){bm({items:br})};
h(bo)}else{if(a8.name){window.setTimeout(bp,100)}var bq=function(bs){var br=g(bs);
bm({items:br});if(a8.name&&aN.values.autoReload){chrome.tabs.sendRequest(bs.id,{method:"reload"},function(bt){})
}};chrome.tabs.getSelected(null,bq)}}else{bm({})}};
if(a8.name&&a8.method=="modifyScriptOptions"){var bd=K(a8.name);
if(bd.script&&bd.cond){for(var bk=0;bk<aP.length;bk++){if(typeof a8[aP[bk]]!=="undefined"){bd.script.options[aP[bk]]=a8[aP[bk]]
}}if(typeof a8.enabled!=="undefined"){bd.script.enabled=a8.enabled
}if(typeof a8.includes!=="undefined"){bd.script.options.override.use_includes=a8.includes;
bd.script.options.override.use_excludes=a8.excludes;
bd.script.options.override.use_matches=a8.matches;bd.script=c(bd.script)
}t(bd.script.name,bd.script);if(typeof a8.position!=="undefined"&&bi){au(a8.name,a8.position)
}}}else{if(a8.nid&&a8.method=="modifyNativeScript"){var bf=function(bo){if(bo){if(a8.actionid=="installed"){if(a8.value=="false"){f.uninstall(bo,bl);
return}}else{if(a8.actionid=="enabled"){f.setEnabled(bo,a8.value,bl);
return}}bl()}};f.getUserscriptById(a8.nid,bf);return
}}bl()}else{if(a8.method=="saveScript"){var bg=function(bp){var bo=function(bq){bm({items:bq,installed:bp})
};h(bo)};if(a8.clean){var a9=function(bp){var bo=function(bq){bm({cleaned:bp,items:bq});
if(bp){r(a8.name,null)}};h(bo)};if(D){console.log("bg: clean userscript "+a8.name)
}var bd=K(a8.name);if(!bd.script||!bd.cond){console.log(chrome.i18n.getMessage("fatal_error")+" ("+n+")!!!");
a9(false)}else{if(!ag({name:a8.name,tabid:e.tab.id,url:a8.update_url,src:bd.script.textContent,clean:true,ask:true,save:true,cb:a9})){if(a9){a9(false)
}}}}else{if(a8.code){var a9=function(bo){bm({installed:bo})
};if(a8.reload==undefined||a8.reload==true){a9=function(bo){au();
bg(bo)}}if(!ag({tabid:e.tab.id,url:a8.update_url,src:a8.code,ask:true,save:true,cb:a9})){if(a9){a9(false)
}}}else{x(a8.name);au();bg()}}}else{if(a8.method=="scriptClick"){if(typeof e.tab!="undefined"){var bg=function(bq,bp){bm({data:null,found:bq,installed:bp});
if(bq){if(bp){au();var bo=function(br){chrome.extension.sendRequest({method:"updateOptions",items:br},function(bs){})
};h(bo)}}else{chrome.tabs.sendRequest(e.tab.id,{method:"showMsg",msg:chrome.i18n.getMessage("Unable_to_get_UserScript__Sry_"),id:a8.id},function(br){})
}};d(a8.url,e.tab.id,bg)}else{console.log(chrome.i18n.getMessage("Unable_to_install_script_due_to_empty_tabID_"))
}}else{if(a8.method=="registerMenuCmd"){if(typeof e.tab!="undefined"){if(V||MV){console.log("MC add "+a8.id)
}s.add({tabId:e.tab.id,url:e.tab.url,name:a8.name,id:a8.menuId,response:bm})
}else{console.log("Unable to register menu cmd due to empty tabID!");
bm({run:false})}}else{if(a8.method=="unRegisterMenuCmd"){if(V||MV){console.log("MC unreg "+a8.id)
}s.clearById(a8.id);bm({})}else{if(a8.method=="execMenuCmd"){var bn=s.getById(a8.id);
if(bn){if(V||MV){console.log("MC exec "+bn.id)}bn.response({run:true,menuId:bn.id})
}else{console.log("bg: Error: unable to find MC id "+bn.id)
}bm({})}else{if(a8.method=="runScriptUpdates"){if(a8.scriptid){var bf=function(bo){bm({scriptid:a8.scriptid,updatable:bo})
};i(true,false,a8.scriptid,bf)}else{i(true,true);bm({})
}}else{if(a8.method=="getWebRequestInfo"){if(typeof e.tab!="undefined"){var bd={webRequest:a3};
bm(bd)}else{console.log(chrome.i18n.getMessage("Unable_to_run_scripts_due_to_empty_tabID_"));
bm({})}}else{if(a8.method=="prepare"){if(typeof e.tab!="undefined"&&e.tab.index>=0){if(a8.topframe||!a1[e.tab.id]){ao(e.tab.id);
aF(e.tab.id)}var bg=function(bo,bs,bq){var br={enabledScriptsCount:bs,raw:{},webRequest:a3,logLevel:aN.values.logLevel};
if(bs){if(a8.raw){for(var bt=0;bt<a8.raw.length;bt++){br.raw[a8.raw[bt]]=Registry.getRaw(a8.raw[bt])
}}bm(br)}else{bm({logLevel:aN.values.logLevel})}for(var bp in bo){if(!bo.hasOwnProperty(bp)){continue
}a1[e.tab.id].scripts[bp]=true}a1[e.tab.id].scripts_running+=bs;
a1[e.tab.id].scripts_disabled+=bq;aF(e.tab.id);if(aN.values.appearance_badges!="tamperfire"){am(e.tab.id)
}};var ba=function(){a1[e.tab.id].allow_requests=true;
am(e.tab.id)};if(aN.values.forbiddenPages.length==0||aM(a8.url,{exc:aN.values.forbiddenPages})){ai(e.tab.id,{status:"complete"},e.tab,a8,bg,ba);
a1[e.tab.id].fire_cnt=undefined}else{console.log("Forbidden page: '"+a8.url+"' -> Do nothing!");
a1[e.tab.id].allow_requests=true;bm({})}}else{bm({})
}}else{if(a8.method=="startFireUpdate"){var bf=function(bo){bm({suc:bo})
};aq.checkUpdate(true,a8.force,bf)}else{if(a8.method=="getFireItems"){var bf=function(br,bp,bq){if(bq==undefined){bq=null
}if(bp==undefined){bp=null}var bo=function(bs){try{bm({image:bs,cnt:br,scripts:bp,progress:bq});
bp=[];res=[]}catch(bt){console.log("bg: warn: action menu closed? "+JSON.stringify(bt))
}};aj.createIconEx(br,bo)};if(!aq.isReady()){var bc=chrome.i18n.getMessage("Update_needed");
if(aq.status.downloading||aq.status.update){bc=chrome.i18n.getMessage("Update_in_progress")
}bf(0,[],{action:aq.status.action,state:aq.status.progress});
return}var bb=function(bo){var bp=aT(a8,bo);bf(bo.length,bp)
};if(a8.tabid){if(a8.countonly){aq.tab.getCount(a8.tabid,bf)
}else{aq.tab.getItems(a8.tabid,bb)}}else{if(a8.url){if(a8.url=="*"){var bg=function(bq){var bp=[];
for(var bo=0;bo<1000;bo++){bp.push(Math.floor(Math.random()*bq+1).toString())
}aq.ids.getItems(bp,bb)};aq.getMax("scripts","sid",bg)
}else{if(a8.countonly){aq.url.getCount(a8.url,bf)}else{aq.url.getItems(a8.url,bb)
}}}else{bf([],[])}}}else{if(a8.method=="notification"){var be=(a8.image&&a8.image!="")?a8.image:chrome.extension.getURL("images/icon128_3d.png");
var bg=function(bo){bm({clicked:bo})};aW.show(a8.title,a8.msg,be,a8.delay,bg)
}else{if(a8.method=="localFileCB"){b.listener(null,a8.data);
bm({})}else{console.log("b: "+chrome.i18n.getMessage("Unknown_method_0name0",a8.method))
}}}}}}}}}}}}}}}}}}}if(V){console.log("back: request.method "+a8.method+" end!")
}};var s={commands:[],add:function(e){s.commands.push(e)
},list:function(){var a7=[];for(var e in s.commands){if(!s.commands.hasOwnProperty(e)){continue
}var a8=s.commands[e];a7.push(a8)}return a7},listByTabId:function(a9){var a8=[];
for(var e in s.commands){if(!s.commands.hasOwnProperty(e)){continue
}var bb=s.commands[e];if(bb.tabId==a9){var a7=false;
for(var ba=0;ba<a8.length;ba++){if(a8[ba].name==bb.name){a7=true;
break}}if(!a7){a8.push(bb)}}}return a8},clearByTabId:function(e){s.getByTabId(e)
},getByTabId:function(a9){var a8=[];var e=s.commands;
s.commands=[];for(var a7 in e){if(!e.hasOwnProperty(a7)){continue
}var ba=e[a7];if(ba.tabId!=a9){s.commands.push(ba)}else{a8.push(ba);
if(V||MV){console.log("MC remove "+ba.id)}}}return a8
},clearById:function(e){s.getById(e)},getById:function(ba){var a8=null;
var e=s.commands;s.commands=[];for(var a7 in e){if(!e.hasOwnProperty(a7)){continue
}var a9=e[a7];if(a9.id!=ba){s.commands.push(a9)}else{a8=a9
}}if(V||MV){console.log("MC remove "+a8.id)}return a8
}};var aT=function(a9,bc){var ba=[];var bf="http://...";
if(a9.tabid&&a1[a9.tabid]&&!a1[a9.tabid].empty){for(var a8 in a1[a9.tabid].urls){if(!a1[a9.tabid].urls.hasOwnProperty(a8)){continue
}bf=a8;break}}else{if(a9.url){bf=a9.url}}ba.push({name:chrome.i18n.getMessage("Enable_Sort_Cache"),id:"fire_sort_cache_enabled",checkbox:true,option:true,enabled:aN.values.fire_sort_cache_enabled,desc:""});
var bd=bc.length?" ("+bc.length+")":"";ba.push({name:chrome.i18n.getMessage("Available_Userscripts")+bd,heading:true,scriptTab:true});
ba=ba.concat(af(bc,true));ba.push({name:chrome.i18n.getMessage("Settings"),heading:true});
ba.push({name:chrome.i18n.getMessage("General"),section:true});
var be="",bb="";var a7=a5();if(a7.fire.db_version==0){bb="?"
}else{var e=a7.fire.db_version*1000;bb=new Date(e).toString()
}be+=chrome.i18n.getMessage("Current_Index_")+"<br><br>";
be+=chrome.i18n.getMessage("Date_")+" "+bb+"<br>";be+=chrome.i18n.getMessage("Entries_")+" "+((a7.fire.entries)?a7.fire.entries:"?")+"<br><br><br>";
ba.push({name:"TamperFire DB",fire:true,fireInfo:true,value:be,versionDB:e});
ba.push({name:chrome.i18n.getMessage("Check_for_Updates"),fname:chrome.i18n.getMessage("Force_Update"),fire:true,fireUpdate:true});
ba.push({name:"Search by URL",id:"searchByURL",search:true,value:bf,desc:""});
return ba};var g=function(a9){var a7=a9?a9.url:null;
if(V){console.log("createActionMenuItems "+a7)}var e=[];
var a8=[];if(aN.values.fire_enabled){a8.push({name:chrome.i18n.getMessage("_0_scripts_found"),image:chrome.extension.getURL("images/download.gif"),doneImage:chrome.extension.getURL("images/fire.png"),tabid:a9.id,tamperfire:true,url:chrome.extension.getURL("fire.html?tab="+a9.id),newtab:true});
a8.push(av())}a8=a8.concat(y(a9));if(!a8.length){if(aN.values.forbiddenPages.length==0||aM(a7,{exc:aN.values.forbiddenPages})){a8.push({name:chrome.i18n.getMessage("No_script_is_running"),image:chrome.extension.getURL("images/info.png")})
}else{a8.push({name:chrome.i18n.getMessage("This_page_is_blacklisted_at_the_security_settings"),image:chrome.extension.getURL("images/critical.png")})
}}a8.push({name:chrome.i18n.getMessage("Get_new_scripts___"),image:chrome.extension.getURL("images/script_download.png"),url:"http://userscripts.org",newtab:true});
a8.push({name:chrome.i18n.getMessage("Add_new_script___"),image:chrome.extension.getURL("images/script_add.png"),url:chrome.extension.getURL("options.html")+"?new=1",newtab:true});
e=e.concat(a8);e.push(av());var ba=A(a9.id);if(ba.length){ba.push(av())
}ba.push({name:chrome.i18n.getMessage("Check_for_userscripts_updates"),image:chrome.extension.getURL("images/update.png"),runUpdate:true});
ba.push({name:chrome.i18n.getMessage("Report_a_bug"),image:chrome.extension.getURL("images/bug.png"),url:"http://forum.tampermonkey.net/posting.php?mode=post&f=17&subject=[BUG]",newtab:true});
ba.push({name:chrome.i18n.getMessage("Please_consider_a_donation"),image:chrome.extension.getURL("images/amor.png"),url:"http://tampermonkey.net/donate.html",newtab:true});
if(ba.length){ba.push(av())}ba.push({name:chrome.i18n.getMessage("Options"),image:chrome.extension.getURL("images/agt_utilities.png"),url:chrome.extension.getURL("options.html"),newtab:true});
ba.push(aK());e=e.concat(ba);return e};var h=function(a7){var a9=[];
var bb=[];var e=1;a9.push({name:chrome.i18n.getMessage("Installed_userscripts"),heading:true,scriptTab:true});
var ba=y(null,true);if(!ba.length){ba.push({name:chrome.i18n.getMessage("No_script_is_installed"),image:chrome.extension.getURL("images/info.png")});
ba.push({name:chrome.i18n.getMessage("Get_some_scripts___"),image:chrome.extension.getURL("images/edit_add.png"),url:"http://userscripts.org",newtab:true})
}else{e=ba.length}var a8=function(bh){for(var bj=0;
bj<bh.length;bj++){var bg=bh[bj];var bk=bg.enabled?chrome.extension.getURL("images/greenled.png"):chrome.extension.getURL("images/redled.png");
var bi={name:bg.name,id:bg.id,image:bk,icon:bg.icon,code:null,position:0,positionof:e,enabled:bg.enabled,version:bg.version,description:bg.description,nativeScript:true};
a9.push(bi)}a9.push({name:"Version",id:null,version:true,value:chrome.extension.getVersion()});
a9.push({name:chrome.i18n.getMessage("New_userscript"),id:null,image:chrome.extension.getURL("images/script_add.png"),icon:chrome.extension.getURL("images/txt.png"),code:aN.values.scriptTemplate,nnew:true,position:-1,positionof:e,enabled:true,userscript:true});
a9=a9.concat(ba);a9.push(av());a9.push({name:chrome.i18n.getMessage("Settings"),heading:true});
var bm=[];var bn=[];var be=[];var bd=[];var bf=[];var bl=[];
var bc=[];bm.push({name:chrome.i18n.getMessage("General"),section:true});
bm.push({name:chrome.i18n.getMessage("Config_Mode"),id:"configMode",level:0,option:true,select:[{name:chrome.i18n.getMessage("Novice"),value:0},{name:chrome.i18n.getMessage("Beginner"),value:50},{name:chrome.i18n.getMessage("Advanced"),value:100}],value:aN.values.configMode,desc:chrome.i18n.getMessage("Changes_the_number_of_visible_config_options")});
bm.push({name:chrome.i18n.getMessage("Make_includes_more_safe"),id:"safeUrls",level:60,option:true,checkbox:true,enabled:aN.values.safeUrls,desc:chrome.i18n.getMessage("Includes_more_safe_example")});
bm.push({name:chrome.i18n.getMessage("Fix_includes"),id:"tryToFixUrl",level:60,option:true,checkbox:true,enabled:aN.values.tryToFixUrl,desc:chrome.i18n.getMessage("Fix_includes_example")});
bm.push({name:chrome.i18n.getMessage("Auto_reload_on_script_enabled"),level:20,id:"autoReload",option:true,checkbox:true,enabled:aN.values.autoReload,desc:chrome.i18n.getMessage("Auto_reload_on_script_enabled_desc")});
bm.push({name:chrome.i18n.getMessage("Debug_scripts"),level:100,id:"debug",option:true,checkbox:true,enabled:aN.values.debug,desc:""});
bm.push({name:chrome.i18n.getMessage("Show_fixed_source"),level:100,id:"showFixedSrc",option:true,checkbox:true,enabled:aN.values.showFixedSrc,desc:""});
bm.push({name:"LogLevel",id:"logLevel",level:0,option:true,select:[{name:"Trace",value:100},{name:"Verbose",value:80},{name:"Debug",value:60},{name:"Error",value:0}],value:aN.values.logLevel,desc:""});
bd.push({name:chrome.i18n.getMessage("Appearance"),section:true,level:20});
bd.push({name:chrome.i18n.getMessage("3D_Icon_Set"),id:"appearance_3d_icons",level:200,option:true,checkbox:true,enabled:aN.values.appearance_3d_icons,desc:""});
bd.push({name:chrome.i18n.getMessage("Update_Notification"),id:"notification_showTMUpdate",level:20,option:true,checkbox:true,enabled:aN.values.notification_showTMUpdate,desc:""});
bd.push({name:chrome.i18n.getMessage("Icon_badge_info"),id:"appearance_badges",level:50,option:true,select:[{name:chrome.i18n.getMessage("Off"),value:"off"},{name:chrome.i18n.getMessage("Running_scripts"),value:"running"},{name:chrome.i18n.getMessage("Unique_running_scripts"),value:"running_unique"},{name:chrome.i18n.getMessage("Disabled_scripts"),value:"disabled"},{name:"TamperFire",value:"tamperfire"}],value:aN.values.appearance_badges,desc:""});
bl.push({name:chrome.i18n.getMessage("TamperFire"),section:true});
bl.push({name:chrome.i18n.getMessage("Enable_TamperFire"),id:"fire_enabled",level:0,option:true,checkbox:true,enabled:aN.values.fire_enabled,desc:""});
bl.push({name:chrome.i18n.getMessage("Enable_Sort_Cache"),id:"fire_sort_cache_enabled",level:100,checkbox:true,option:true,enabled:aN.values.fire_sort_cache_enabled,desc:""});
bl.push({name:chrome.i18n.getMessage("Update_interval"),id:"fire_updatePeriod",level:50,option:true,select:[{name:chrome.i18n.getMessage("Never"),value:0},{name:chrome.i18n.getMessage("Every_Day"),value:24*60*60*1000},{name:chrome.i18n.getMessage("Every_Week"),value:7*24*60*60*1000},{name:chrome.i18n.getMessage("Every_2_Weeks"),value:14*24*60*60*1000},{name:chrome.i18n.getMessage("Every_Month"),value:30*24*60*60*1000}],value:aN.values.fire_updatePeriod,desc:""});
bn.push({name:chrome.i18n.getMessage("Editor"),section:true,level:20});
bn.push({name:chrome.i18n.getMessage("Enable_Editor"),id:"editor_enabled",level:100,option:true,checkbox:true,enabled:aN.values.editor_enabled,reload:true,warning:chrome.i18n.getMessage("A_reload_is_required"),desc:""});
bn.push({name:chrome.i18n.getMessage("Indentation_Width"),id:"editor_indentUnit",level:50,option:true,select:[{name:chrome.i18n.getMessage("1"),value:1},{name:chrome.i18n.getMessage("2"),value:2},{name:chrome.i18n.getMessage("3"),value:3},{name:chrome.i18n.getMessage("4"),value:4},{name:chrome.i18n.getMessage("5"),value:5},{name:chrome.i18n.getMessage("6"),value:6},{name:chrome.i18n.getMessage("7"),value:7},{name:chrome.i18n.getMessage("8"),value:8},{name:chrome.i18n.getMessage("9"),value:9},{name:chrome.i18n.getMessage("10"),value:10},{name:chrome.i18n.getMessage("11"),value:11}],value:aN.values.editor_indentUnit,desc:""});
bn.push({name:chrome.i18n.getMessage("Indent_with"),id:"editor_indentWithTabs",level:50,option:true,select:[{name:chrome.i18n.getMessage("Tabs"),value:"tabs"},{name:chrome.i18n.getMessage("Spaces"),value:"spaces"}],value:aN.values.editor_indentWithTabs,desc:""});
bn.push({name:chrome.i18n.getMessage("TabMode"),id:"editor_tabMode",level:50,option:true,select:[{name:chrome.i18n.getMessage("Classic"),value:"classic"},{name:chrome.i18n.getMessage("Smart"),value:"smart"}],value:aN.values.editor_tabMode,desc:""});
bn.push({name:chrome.i18n.getMessage("Reindent_on_typing"),id:"editor_electricChars",level:50,option:true,checkbox:true,enabled:aN.values.editor_electricChars,desc:""});
bn.push({name:chrome.i18n.getMessage("Show_Line_Numbers"),id:"editor_lineNumbers",level:20,option:true,checkbox:true,enabled:aN.values.editor_lineNumbers,desc:""});
be.push({name:chrome.i18n.getMessage("Script_Update"),section:true,level:0});
be.push({name:chrome.i18n.getMessage("Check_disabled_scripts"),id:"scriptUpdateCheckDisabled",level:0,option:true,checkbox:true,enabled:aN.values.scriptUpdateCheckDisabled,desc:""});
be.push({name:chrome.i18n.getMessage("Check_interval"),id:"scriptUpdateCheckPeriod",level:0,option:true,select:[{name:chrome.i18n.getMessage("Never"),value:0},{name:chrome.i18n.getMessage("Every_Hour"),value:1*60*60*1000},{name:chrome.i18n.getMessage("Every_6_Hours"),value:6*60*60*1000},{name:chrome.i18n.getMessage("Every_12_Hour"),value:12*60*60*1000},{name:chrome.i18n.getMessage("Every_Day"),value:24*60*60*1000},{name:chrome.i18n.getMessage("Every_Week"),value:7*24*60*60*1000}],value:aN.values.scriptUpdateCheckPeriod,desc:""});
be.push({name:chrome.i18n.getMessage("Dont_ask_me_for_simple_script_updates"),id:"notification_silentScriptUpdate",level:80,option:true,checkbox:true,enabled:aN.values.notification_silentScriptUpdate,desc:""});
be.push({name:chrome.i18n.getMessage("Hide_notification_after"),id:"scriptUpdateHideNotificationAfter",level:50,option:true,select:[{name:chrome.i18n.getMessage("Never"),value:0},{name:chrome.i18n.getMessage("15_Seconds"),value:15*1000},{name:chrome.i18n.getMessage("30_Seconds"),value:30*1000},{name:chrome.i18n.getMessage("1_Minute"),value:60*1000},{name:chrome.i18n.getMessage("5_Minutes"),value:5*60*1000},{name:chrome.i18n.getMessage("1_Hour"),value:60*60*1000}],value:aN.values.scriptUpdateHideNotificationAfter,desc:""});
bf.push({name:chrome.i18n.getMessage("Security"),section:true,level:50});
bf.push({name:chrome.i18n.getMessage("Forbidden_Pages"),id:"forbiddenPages",level:50,option:true,input:true,array:true,value:aN.values.forbiddenPages,desc:""});
bc.push({name:chrome.i18n.getMessage("Userscripts"),section:true,level:80});
bc.push({name:chrome.i18n.getMessage("New_script_template_"),id:"scriptTemplate",level:80,option:true,input:true,value:aN.values.scriptTemplate});
a9=a9.concat(bm).concat(bd).concat(be).concat(bl).concat(bn).concat(bf).concat(bc);
a9.push({name:"EOS",section:true,endsection:true});
a9.push(av());if(false){a9.push({name:chrome.i18n.getMessage("Registered_menu_cmds"),heading:true});
bb=A();if(bb.length){bb.push(av())}}a9=a9.concat(bb);
if(a7){a7(a9)}};f.getAllUserscripts(a8)};var av=function(){return divider={name:"",divider:true}
};var aK=function(){return{name:" "+chrome.i18n.getMessage("About_Tampermonkey"),image:chrome.extension.getURL("images/info.png"),url:"http://tampermonkey.net/about.html?version="+chrome.extension.getVersion(),newtab:true}
};var A=function(a9){var a8=[];var e=(a9==null||a9==undefined)?s.list():s.listByTabId(a9);
for(var a7 in e){if(!e.hasOwnProperty(a7)){continue
}var bb=e[a7];var ba={name:bb.name,id:bb.id,image:chrome.extension.getURL("images/package_utilities.png"),menucmd:true};
a8.push(ba)}return a8};var af=function(e,bb){var ba=[];
for(var a9 in e){var a8=e[a9];var a7=a8.enabled?chrome.extension.getURL("images/greenled.png"):chrome.extension.getURL("images/redled.png");
if(!a8.icon64&&!a8.icon){a8.icon64=chrome.extension.getURL("images/txt.png")
}var bd;if(bb){bd=a8}else{bd={name:a8.name,id:a8.id,system:a8.system,enabled:a8.enabled,position:a8.position}
}bd.image=a7;bd.update_url=a8.fileURL,bd.positionof=e.length;
bd.userscript=true;if(a8.options){for(var bc=0;bc<aP.length;
bc++){bd[aP[bc]]=a8.options[aP[bc]]}}if(bb){bd.code=a8.textContent;
if(aN.values.showFixedSrc){bd.code=a0.mkCompat(a8.textContent,a8)
}}ba.push(bd)}return ba};var y=function(a7,be){if(be==undefined){be=false
}var e=a7?a7.url:null;var a9=[];if(a7){if(a1[a7.id]&&!a1[a7.id].empty){for(var bc in a1[a7.id].urls){if(!a1[a7.id].urls.hasOwnProperty(bc)){continue
}if(V||UV){console.log("Found at AllURL["+a7.id+"] -> "+a1[a7.id].urls[bc])
}var bd=a6(bc);for(var ba=0;ba<bd.length;ba++){var bb=false;
for(var a8=0;a8<a9.length;a8++){if(a9[a8].name==bd[ba].name){bb=true;
break}}if(!bb){a9.push(bd[ba])}}}}else{console.log("bg: WARN: allURLs["+a7.id+"] is empty!")
}}else{a9=a6(e)}return af(a9,be)};var f={getAll:function(a7){try{chrome.management.getAll(a7)
}catch(a8){a7([])}},getAllUserscripts:function(e){var a7=function(bb){var a9=[];
for(var a8 in bb){if(!bb.hasOwnProperty(a8)){continue
}var ba=bb[a8];if(ba.homepageUrl==""&&ba.hostPermissions.length==0&&ba.permissions.length==0&&!ba.icons&&!ba.updateUrl&&ba.isApp==false&&ba.optionsUrl==""&&ba.mayDisable==true){ba.icon="chrome://extension-icon/"+ba.id+"/48/1";
a9.push(ba)}}if(e){e(a9)}};chrome.management.getAll(a7)
},getUserscriptByName:function(a7,e){var a8=function(bb){for(var a9=0;
a9<bb.length;a9++){var ba=bb[a9];if(ba.name==a7){e(ba);
return}}e(null)};this.getAllUserscripts(a8)},getUserscriptById:function(a8,e){var a7=function(bb){for(var a9=0;
a9<bb.length;a9++){var ba=bb[a9];if(ba.id==a8){e(ba);
return}}e(null)};this.getAllUserscripts(a7)},setEnabled:function(a9,a8,a7){try{chrome.management.setEnabled(a9.id,a8,a7);
return}catch(ba){}if(a7){window.setTimeout(a7,1)}},uninstall:function(a8,a7){try{chrome.management.uninstall(a8.id,a7);
return}catch(a9){}if(a7){window.setTimeout(a7,1)}}};
exte=f;var aj={initCanvas:function(e){this.canvas=e;
this.context=this.canvas.getContext("2d")},init:function(e,a8){var a7=null;
if(this.canvas){a7=this.canvas}else{a7=document.createElement("canvas");
if(D){document.body.appendChild(a7)}}a7.height=a8;a7.width=e;
this.initCanvas(a7)},initFromImage:function(bb,bd,bc,ba,e,bf,a7){var a8=document.createElement("img");
if(D){document.body.appendChild(a8)}var be=this;var a9=function(){be.init(bd,bc);
if(bf){be.context.scale(bf,bf)}be.context.drawImage(a8,ba,e);
be.loaded=true;if(a7){a7()}a8=null};a8.onload=a9;a8.src=bb
},printNr:function(e,a9,a8,a7){this.context.font="22pt Arial bold";
this.context.fillStyle="rgba("+a7.join(",")+", 1)";
this.context.fillText(a8,e,a9)},circle:function(e,ba,a8,a7){var a9="rgba("+a7.join(",")+", 1)";
this.context.fillStyle=a9;this.context.beginPath();
this.context.arc(e,ba,a8,0,2*Math.PI,true);this.context.fill()
},rect:function(ba,a9,e,a8,bb,a7){if(bb==null){bb=true
}if(bb){this.context.fillStyle="rgba("+a7.join(",")+", 0.99)";
this.context.fillRect(ba,a9,e,a8)}else{this.context.fillStyle="rgb("+a7.join(",")+", 1)";
this.context.beginPath();this.context.moveTo(ba,a9);
this.context.lineTo(ba+e,a9);this.context.lineTo(ba+e,a9+a8);
this.context.lineTo(ba,a9+a8);this.context.lineTo(ba,a9);
this.context.stroke()}},rrect:function(a7,bb,e,a8,bc,ba){var a9=bc;
this.circle(a7+a9,bb+a9,bc,ba);this.circle(e-a9,bb+a9,bc,ba);
this.circle(a7+a9,a8-a9,bc,ba);this.circle(e-a9,a8-a9,bc,ba);
this.rect(a7+bc,bb,e-a7-2*bc,a8-bb,true,ba);this.rect(a7,bb+bc,e-a7,a8-bb-2*bc,true,ba)
},createIconEx:function(bb,e){var a8=140;var ba=140;
var bc=this;var a9=1;var a7=function(){var bf=14;var be=25;
var bd=116-(bb>10?bf:0)-(bb>100?bf:0)-(bb>1000?bf:0)-(bb>10000?bf:0);
aj.rrect(bd,0,a8,be,4,[200,0,0]);var bg=3;aj.rrect(bd+bg,0+bg,ba-bg,be-bg,4,[190,0,0]);
aj.printNr(bd+4,be-3,bb,[240,250,240]);if(e){e(bc.canvas.toDataURL())
}};aj.initFromImage(chrome.extension.getURL("images/icon128.png"),a8,ba,6,6,1,a7)
},toPNG:function(){return this.canvas.toDataURL()}};
var am=function(a8){var ba=0;var a9=function(){if(D){console.log("bg: setBadge: "+ba)
}if(ba==0){chrome.browserAction.setBadgeText({text:"",tabId:a8})
}else{chrome.browserAction.setBadgeText({text:ba.toString(),tabId:a8})
}};if(aN.values.appearance_badges=="off"){ba=0}else{if(aN.values.appearance_badges=="running"){if(a8&&a1[a8]){ba=a1[a8].scripts_running
}}else{if(aN.values.appearance_badges=="running_unique"){if(a8&&a1[a8]){for(var a7 in a1[a8].scripts){if(!a1[a8].scripts.hasOwnProperty(a7)){continue
}ba++}}}else{if(aN.values.appearance_badges=="disabled"){if(a8&&a1[a8]){ba=a1[a8].scripts_disabled
}}else{if(aN.values.appearance_badges=="tamperfire"){var e=function(bb){ba=bb;
a9()};aq.tab.getCount(a8,e);return}}}}}a9()};var aJ=function(a8){if(a3.verified==false){if(D||UV){console.log("bg: verify that webRequest is working at "+a8.type+" to "+a8.url)
}if(true){for(var a7=0;a7<a8.requestHeaders.length;
a7++){var ba=a8.requestHeaders[a7];if(UV){console.log(" #: "+ba.name+" -> "+ba.value)
}}}var bb=false;var a9=new RegExp("^"+a3.testprefix);
for(var a7=0;a7<a8.requestHeaders.length;a7++){var ba=a8.requestHeaders[a7];
if(ba.name.search(a9)==0){if(D){console.log("bg: found "+ba.name+" @webRequest :)")
}bb=true}}if(!bb&&a3.verifyCnt-->0){return}a3.use=bb;
a3.verified=true;if(D){console.log("bg: verified webRequest "+(a3.use?"":"not ")+"being working")
}try{if(!a3.use){chrome.webRequest.onBeforeSendHeaders.removeListener(Q)
}chrome.webRequest.onSendHeaders.removeListener(aJ)
}catch(e){a3.use=false;a3.verified=true}}};var Q=function(a9){if(V||UV){console.log(a9.type)
}var bc={};var a8=[];var bb=new RegExp("^"+a3.prefix);
if(V||UV){console.log("bg: process request to "+a9.url);
console.log(a9.requestHeaders)}for(var a7=0;a7<a9.requestHeaders.length;
a7++){var ba=a9.requestHeaders[a7];if(ba.name.search(bb)==0){a8.push(ba)
}else{bc[ba.name]=ba.value}}for(var a7=0;a7<a8.length;
a7++){var ba=a8[a7];bc[ba.name.replace(bb,"")]=ba.value
}if(!a3.verified){bc[a3.testprefix]="true"}var bd=[];
for(var e in bc){if(!bc.hasOwnProperty(e)){continue
}if(e!=""){bd.push({name:e,value:bc[e]})}}if(V||UV){console.log(bd)
}return{requestHeaders:bd}};var U=function(e){if(e.tabId>0){console.log("bg: "+e.requestId+" print "+e.type+" request of tabId "+e.tabId+" to "+e.url)
}};var P=function(e){if(e.tabId>0){if(V||UV){console.log("bg: "+e.requestId+" check "+e.type+" request of tabId "+e.tabId+" to "+e.url)
}if(e.type=="main_frame"){if(!a1[e.tabId]||a1[e.tabId].allow_requests){if(V||UV){console.log("bg: detected inital navigation")
}z(e.tabId)}}else{if(e.type=="sub_frame"){}else{if(a1[e.tabId]){if(a1[e.tabId].allow_requests){if(V||UV){console.log("bg: tab content script is running")
}return{}}else{if(V||UV){console.log("bg: tab content script is NOT running -> delay "+e.url)
}var a7=function(){var a8=function(bd,bb){if(V||UV){console.log("bg: ("+bb+")"+bd.requestId+" delay "+bd.type+" request of tabId "+bd.tabId+" to "+bd.url)
}var ba=null;var a9=function(be){ba();bb++;if(!a1[bd.tabId]||!a1[bd.tabId].allow_requests){a8(bd,bb);
return{redirectUrl:bd.url}}else{if(V||UV){console.log("bg: "+bd.requestId+" stop delaying of "+bd.url)
}}return{}};ba=function(){if(a9){chrome.webRequest.onBeforeRequest.removeListener(a9)
}a9=null};var bc={urls:["http://*/*","https://*/*","file://*/*"]};
chrome.webRequest.onBeforeRequest.addListener(a9,bc,["blocking"]);
window.setTimeout(ba,100)};a8(e,0)};a7();return{redirectUrl:e.url}
}}else{if(D){console.log("bg: delayRequest -> allURLs["+e.tabId+"] is not defined!")
}}}}}return{}};var w=function(a8){var e=a8.url.search(/\.user\.[js\#|js\?|js$]/);
var a7=a8.url.search(/\?/);if(a8.tabId>0&&a8.type=="main_frame"&&a8.method!="POST"&&e!=-1&&(a7==-1||e<a7)&&a8.url.search(/\#bypass=true/)==-1){var a9=function(){chrome.tabs.update(a8.tabId,{url:chrome.extension.getURL("ask.html")+"?script="+encodeURI(a8.url)})
};window.setTimeout(a9,1);return{cancel:true}}return{}
};var p=function(){if(a3.use){try{chrome.webRequest.onBeforeSendHeaders.removeListener(Q);
chrome.webRequest.onBeforeRequest.removeListener(w);
if(a3.verified==false){chrome.webRequest.onSendHeaders.removeListener(aJ)
}if(V||UV){chrome.webRequest.onCompleted.removeListener(U)
}}catch(e){}}a3.use=false;a3.verified=true};if(a3.use){try{var aS={urls:["http://*/*","https://*/*"],types:["xmlhttprequest"]};
var a={urls:["http://*/*","https://*/*","file://*/*"]};
chrome.webRequest.onBeforeSendHeaders.addListener(Q,aS,["requestHeaders","blocking"]);
if(a3.delay){chrome.webRequest.onBeforeRequest.addListener(P,a,["blocking"])
}chrome.webRequest.onSendHeaders.addListener(aJ,aS,["requestHeaders"]);
chrome.webRequest.onBeforeRequest.addListener(w,a,["blocking"]);
if(V||UV){chrome.webRequest.onCompleted.addListener(U,aS,[])
}chrome.webRequest.handlerBehaviorChanged();a3.use=true;
a3.verified=false;a3.id=((new Date()).getTime()+Math.floor(Math.random()*6121983+1)).toString();
a3.testprefix=a3.prefix+(Math.floor(Math.random()*6121983+1)).toString();
a3.prefix=a3.prefix+a3.id+"_"}catch(al){if(D){console.log("bg: error initializing webRequests "+al.message)
}p()}}function aG(){if(D){console.log("bg: cleanup!")
}p()}window.addEventListener("unload",aG,false);var aV=null;
var aU=function(e,a7,a9){if(!aN.initialized){window.setTimeout(function(){aU(e,a7,a9)
},100);return}if(V){console.log("loadListener "+a9.url+" "+a7.status)
}var a8=function(){aV=null;chrome.tabs.sendRequest(e,{method:"getSrc"},function(ba){if(V){console.log("add script from "+a9.url)
}ag({tabid:a9.id,url:a9.url,src:ba.src})})};if(a9.url.search(/\.tamper\.js$/)!=-1||a9.url.search(/\.user\.js$/)!=-1){if(V){console.log("found script @ "+a9.url)
}if(a7.status=="complete"){if(aV!=null){window.clearTimeout(aV);
aV=null}a8()}else{aV=window.setTimeout(a8,5000)}}else{if(a7.status=="complete"){chrome.tabs.sendRequest(e,{method:"onLoad"},function(ba){})
}}};var X=function(e){var a7=function(a8){if(e.tabId!=a8.id){return
}aF(a8.id);am(a8.id)};chrome.tabs.getSelected(null,a7)
};var ao=function(e){if(V||UV){console.log("bg: reset AllURL["+e+"]")
}z(e);s.clearByTabId(e);r(null,null,e,false)};var Z=function(e,a7){if(V||UV){console.log("Add to AllURL["+e+"] -> "+a7)
}a1[e].urls[a7]=true;a1[e].empty=false};var z=function(e){a1[e]={ts:(new Date()).getTime(),urls:{},fire:null,empty:true,allow_requests:false,scripts:{},scripts_running:0,scripts_disabled:0}
};var ai=function(bj,bg,a8,bf,bh,bb){if(!aN.initialized){window.setTimeout(function(){ai(bj,bg,a8,bf,ba)
},100);return}if(bg.status=="complete"){if(a8.title.search(an.escapeForRegExp(a8.url)+" is not available")!=-1){var e=function(){console.log("trigger reload (tabID "+bj+") of "+a8.url);
chrome.tabs.update(bj,{url:a8.url})};window.setTimeout(e,20000)
}else{if(bf){a8.url=bf.url+bf.params}var bd=a6(a8.url);
var bl=[];var be=0;var a7={};for(var bc=0;bc<bd.length;
bc++){var bk=bd[bc];if(V){console.log("check "+bk.name+" for enabled:"+bk.enabled)
}if(!bk.enabled){be++;continue}if(bk.options.noframes&&!bf.topframe){continue
}a7[bk.name]=true;bl.push(bk)}Z(bj,a8.url);if(bh){bh(a7,bl.length,be)
}var ba=function(){if(--bi==0){bb()}};var bi=1;for(var bc=0;
bc<bl.length;bc++){bi++;var bk=bl[bc];var a9=new aA();
if(bf){a8.scriptId=bf.id}a9.contentLoad(a8,bk,ba)}bi--
}}};var ac=function(e,a7){};var N=function(a7,e){if(a1[a7]){delete a1[a7]
}};var aN;var W;var v;var a0;var H;var an;init=function(){W=Registry.get("convert");
v=Registry.get("xmlhttprequest").run;a0=Registry.get("compat");
H=Registry.get("parser");an=Registry.get("helper");
G.init();aX();var a8=function(){aH();e()};aN=new O(a8,aH);
var a7=function(){if(!chrome.webNavigation||!chrome.webNavigation.onCommitted){if(D||V){console.log("gb: waitForWebNav()")
}window.setTimeout(a7,300);return}chrome.webNavigation.onCommitted.addListener(X)
};var e=function(){window.setTimeout(i,10000);chrome.tabs.onUpdated.addListener(aU);
chrome.tabs.onRemoved.addListener(N);chrome.tabs.onSelectionChanged.addListener(ac);
chrome.extension.onRequest.addListener(k);chrome.extension.onConnect.addListener(aZ);
chrome.extension.onConnectExternal.addListener(function(a9){a9.disconnect()
});a7();if(D||V){console.log("Listeners registered!")
}I=true}};window.setTimeout(init,1)})();
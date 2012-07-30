
(function(){var i=undefined;var a="display: none;";
var q=undefined;var e="position:absolute; left: -20000px; top: -200000px; width: 1px; height: 1px;";
var c="http://userscripts.org/images/script_icon.png";
var v="*";var j="://*/*";var l="http"+j;var k="https"+j;
var o=".*/";var u=".tld/";var w="museum|travel|aero|arpa|coop|info|jobs|name|nvus|biz|com|edu|gov|int|mil|net|org|pro|xxx|ac|ad|ae|af|ag|ai|ak|al|al|am|an|ao|aq|ar|ar|as|at|au|aw|ax|az|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|co|cr|cs|ct|cu|cv|cx|cy|cz|dc|de|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fl|fm|fo|fr|ga|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gu|gw|gy|hi|hk|hm|hn|hr|ht|hu|ia|id|id|ie|il|il|im|in|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|ks|kw|ky|ky|kz|la|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|ma|mc|md|md|me|mg|mh|mi|mk|ml|mm|mn|mn|mo|mo|mp|mq|mr|ms|ms|mt|mt|mu|mv|mw|mx|my|mz|na|nc|nc|nd|ne|ne|nf|ng|nh|ni|nj|nl|nm|no|np|nr|nu|ny|nz|oh|ok|om|or|pa|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pr|ps|pt|pw|py|qa|re|ri|ro|ru|rw|sa|sb|sc|sc|sd|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|tn|to|tp|tr|tt|tv|tw|tx|tz|ua|ug|uk|um|us|ut|uy|uz|va|va|vc|ve|vg|vi|vi|vn|vt|vu|wa|wf|wi|ws|wv|wy|ye|yt|yu|za|zm|zw";
var h="de.net|gb.net|uk.net|dk.org|eu.org|asn.au|com.au|conf.au|csiro.au|edu.au|gov.au|id.au|info.au|net.au|org.au|otc.au|oz.au|telememo.au|ac.cn|ah.cn|bj.cn|com.cn|cq.cn|edu.cn|gd.cn|gov.cn|gs.cn|gx.cn|gz.cn|hb.cn|he.cn|hi.cn|hk.cn|hl.cn|hn.cn|jl.cn|js.cn|ln.cn|mo.cn|net.cn|nm.cn|nx.cn|org.cn|qh.cn|sc.cn|sh.cn|sn.cn|sx.cn|tj.cn|tw.cn|xj.cn|xz.cn|yn.cn|zj.cn|ac.jp|ad.jp|aichi.jp|akita.jp|aomori.jp|chiba.jp|co.jp|ed.jp|ehime.jp|fukui.jp|fukuoka.jp|fukushima.jp|gifu.jp|go.jp|gov.jp|gr.jp|gunma.jp|hiroshima.jp|hokkaido.jp|hyogo.jp|ibaraki.jp|ishikawa.jp|iwate.jp|kagawa.jp|kagoshima.jp|kanagawa.jp|kanazawa.jp|kawasaki.jp|kitakyushu.jp|kobe.jp|kochi.jp|kumamoto.jp|kyoto.jp|lg.jp|matsuyama.jp|mie.jp|miyagi.jp|miyazaki.jp|nagano.jp|nagasaki.jp|nagoya.jp|nara.jp|ne.jp|net.jp|niigata.jp|oita.jp|okayama.jp|okinawa.jp|or.jp|org.jp|osaka.jp|saga.jp|saitama.jp|sapporo.jp|sendai.jp|shiga.jp|shimane.jp|shizuoka.jp|takamatsu.jp|tochigi.jp|tokushima.jp|tokyo.jp|tottori.jp|toyama.jp|utsunomiya.jp|wakayama.jp|yamagata.jp|yamaguchi.jp|yamanashi.jp|yokohama.jp|ac.uk|co.uk|edu.uk|gov.uk|ltd.uk|me.uk|mod.uk|net.uk|nhs.uk|nic.uk|org.uk|plc.uk|police.uk|sch.uk|co.tv";
var f=("("+[w,h].join("|")+")").replace(/\./gi,"\\.");
var p=function(y,A){var z=(y!=undefined)?y.replace(/ /g,"_"):"null";
return z+"_"+A};var m=function(B,A,z){var y=B.search(s(A));
if(y==-1){return""}if(!z){return B.substr(y+A.length)
}var C=B.substr(y+A.length).search(s(z));if(C==-1){return""
}return B.substr(y+A.length,C)};var n=function(A,y){if(y==undefined){y=[]
}var z=new RegExp("(\\"+["/",".","+","?","|","(",")","[","]","{","}","\\"].concat(y).join("|\\")+")","g");
return A.replace(z,"\\$1")};var s=function(z,y){return n(z,["*"])
};var x=function(B,y,C,A){var z;if((y.values.tryToFixUrl||C)&&B==v){z=l
}else{if((y.values.safeUrls||C)&&B!=l&&B!=k&&B.search(n(o))!=-1){z=B.replace(n(o),u)
}else{z=B}}if(A){z=z.replace(/\*\.([a-z0-9A-Z\.%].*\/)/gi,"<>$1")
}z="^"+n(z);z=z.replace(/\*/gi,".*");z=z.replace(n(u),"."+f+"/");
z=z.replace(/(\^|:\/\/)\.\*/,"$1([^?#])*");z=z.replace("<>","([^/#?]*\\.)?");
return"("+z+")"};var t=function(z){var A="background.js";
var y=chrome.extension.getURL(A);y=y.replace(A,"")+"images/";
return(z.length>=y.length&&y==z.substr(0,y.length))
};var d=function(){var E={};var B=window.location.search.replace(/^\?/,"");
var y=B.split("&");var D;for(var z=0;z<y.length;z++){D=y[z].split("=");
if(D.length!=2){var C=D[0];var A=D.slice(1).join("=");
D=[C,A]}E[D[0]]=decodeURI(D[1])}return E};var b=function(z){var y=function(){alert(z)
};window.setTimeout(y,1)};var g=function(y){return({}).toString.apply(y).match(/\s([a-z|A-Z]+)/)[1]
};var r=function(A){var z="";for(var y in A){if(!A.hasOwnProperty(y)){continue
}if(z!=""){z+=","}if(g(A[y])=="Object"){z+=y+":"+r(A[y])
}else{z+=y+":"+A[y].toString()}}return"{"+z+"}"};Registry.register("helper",{createUniqueId:p,getStringBetweenTags:m,escapeForRegExpURL:n,escapeForRegExp:s,getRegExpFromUrl:x,isLocalImage:t,getUrlArgs:d,alert:b,serialize:r,staticVars:{urlAllHttp:l,urlAllHttps:k,visible:i,invisible:a,visible_move:q,invisible_move:e,USOicon:c}})
})();
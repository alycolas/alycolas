
(function(){Registry.require("crcrc");Registry.require("helper");
var b=Registry.get("helper");var d=Registry.get("crcrc").cr;
var e=Registry.get("crcrc").crc;var a={};var c=function(k,n,w){var u=k.match(/[0-9a-zA-Z]/g).join("");
var p=false;if(w==undefined){w={tv:"tv",tv_table:"tv_table",tr_tabs:"tr_tabs",tr_content:"tr_content",td_content:"td_content",td_tabs:"td_tabs",tv_tabs_table:"tv_tabs_table",tv_tabs_align:"tv_tabs_align",tv_contents:"tv_contents",tv_tab_selected:"tv_tab tv_selected",tv_tab_close:"tv_tab_close",tv_tab:"tv_tab",tv_content:"tv_content"}
}var q=e("div",w.tv,"main"+u);var y=e("table",w.tv_table+" noborder","main_table"+u);
if(y.inserted){p=true}else{a[u]={};a[u].g_entries={};
a[u].g_selectedId=null}var f=e("tr",w.tr_tabs,"tabs"+n.id+u);
var m=e("td",w.td_tabs,"pages"+u);var g=e("div",w.tv_tabs_table,"tv_tabs_table"+u);
var z=e("div",w.tv_tabs_align,"tv_tabs_align"+u);var x=e("tr",w.tr_content,"content"+n.id+u);
var l=e("td",w.td_content,"content"+u);var t=e("table",w.tv_contents+" noborder","tv_content"+u);
g.appendChild(z);m.appendChild(g);f.appendChild(m);
y.appendChild(f);l.appendChild(t);x.appendChild(l);
y.appendChild(x);q.appendChild(y);n.appendChild(q);
var r=function(E,F,D){if(F){E.setAttribute("style",D?b.staticVars.visible_move:b.staticVars.visible)
}else{E.setAttribute("style",D?b.staticVars.invisible_move:b.staticVars.invisible)
}E.setAttribute("vis",F.toString())};var i=function(D,E){var F=D.getId();
if(a[u].g_entries[F]){if(E==a[u].g_entries[F].visible){return
}a[u].g_entries[F].visible=E;r(a[u].g_entries[F].tab,E)
}};var B=function(E,D){r(E.content,D,true)};var s=function(E){for(var D in a[u].g_entries){var F=a[u].g_entries[D];
if(F.tab.id==E.id){return F}}return null};var h=function(E){for(var D in a[u].g_entries){var F=a[u].g_entries[D];
if(F.tab.id==E.id){return D}}return null};var A=function(E){if(E.getId()==a[u].g_selectedId){return
}var G=E.getId();if(a[u].g_selectedId){B(a[u].g_entries[a[u].g_selectedId],false)
}for(var D in a[u].g_entries){var F=a[u].g_entries[D];
if(F.entry.getId()==G){if(!F.visible){console.log("tv: WARN: tab selected but not visible!")
}else{if(!F.selected){F.tab.setAttribute("class",w.tv_tab_selected);
B(F,true);F.selected=true}}}else{if(F.selected){F.tab.setAttribute("class",w.tv_tab);
B(F,false);F.selected=false}}}a[u].g_selectedId=G};
var v=function(F){var I=F.getId();var H=(I==a[u].g_selectedId);
if(a[u].g_entries[I]){i(F,false)}else{console.log("tv: WARN: tab not part of tabview!")
}if(H){var G=null;var E=null;for(var D in a[u].g_entries){if(a[u].g_entries[D].visible){G=a[u].g_entries[D];
if(!E&&!G.closable){E=G}}}if(!G.closable){G=E}if(G){G.entry.select()
}else{a[u].g_selectedId=null;console.log("tv: WARN: selected tab set, but entry collection empty!")
}}};var o=function(D){var E=D.getId();if(a[u].g_entries[E]){i(D,true)
}else{console.log("tv: WARN: tab not part of tabview!")
}};var j=function(D){D.hide();var G=D.getId();var E=a[u].g_entries[G];
if(E){E.tab.parentNode.removeChild(E.tab);E.content.parentNode.removeChild(E.content);
var F=h(E.tab);if(F){delete a[u].g_entries[F]}}else{console.log("tv: WARN: tab not part of tabview!")
}};var C=null;if(!p){C={removeTab:j,appendTab:function(H,E,D,G,F){return this.insertTab(undefined,H,E,D,G,F)
},insertTab:function(N,F,M,P,I,L){if(N===null){N=z.firstChild
}var G=e("div","",F,"content"+u);var H=(G.inserted!==undefined&&G.inserted==true);
if(L){var E=e("div",w.tv_tab_close,F,"tv_close"+u,"tab_close");
if(!E.inserted){E.addEventListener("click",L)}E.textContent="X";
M.appendChild(E)}if(H){var K=s(G);if(K){return K.entry
}console.log("tv: WARN: old tab, but not in tabs collection!")
}var O;var J=(new Date()).getTime()+Math.floor(Math.random()*61283+1);
var D=function(Q){if(Q.target.className!=""&&Q.target.className==w.tv_tab_close){return
}O.select()};G.setAttribute("tv_id"+u,F);G.addEventListener("click",D);
M.setAttribute("tv_id"+u,F);M.addEventListener("click",D);
G.setAttribute("name","tabview_tab"+u);G.setAttribute("class",w.tv_tab);
G.appendChild(M);if(N){z.insertBefore(G,N)}else{z.appendChild(G)
}P.setAttribute("name","tabview_content"+u);P.setAttribute("tv_id"+u,F);
P.setAttribute("class",w.tv_content);t.appendChild(P);
O={getId:function(){return J},isVisible:function(){return G.getAttribute("vis")=="true"
},isSelected:function(){return(a[u].g_selectedId==this.getId())
},remove:function(){j(this)},hide:function(){v(this)
},show:function(){o(this)},select:function(){if(I){I()
}A(this)}};a[u].g_entries[J]={entry:O,tab:G,content:P,closable:L!=null};
B(a[u].g_entries[J],false);O.show();if(!a[u].g_selectedId){O.select()
}return O}};a[u].tv=C}else{C=a[u].tv}return C};Registry.register("tabview",{create:c})
})();
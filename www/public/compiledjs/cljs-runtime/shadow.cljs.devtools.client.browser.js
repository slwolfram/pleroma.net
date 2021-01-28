goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37450 = arguments.length;
var i__4737__auto___37451 = (0);
while(true){
if((i__4737__auto___37451 < len__4736__auto___37450)){
args__4742__auto__.push((arguments[i__4737__auto___37451]));

var G__37452 = (i__4737__auto___37451 + (1));
i__4737__auto___37451 = G__37452;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37185){
var G__37186 = cljs.core.first(seq37185);
var seq37185__$1 = cljs.core.next(seq37185);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37186,seq37185__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37192 = cljs.core.seq(sources);
var chunk__37193 = null;
var count__37194 = (0);
var i__37195 = (0);
while(true){
if((i__37195 < count__37194)){
var map__37213 = chunk__37193.cljs$core$IIndexed$_nth$arity$2(null,i__37195);
var map__37213__$1 = (((((!((map__37213 == null))))?(((((map__37213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37213):map__37213);
var src = map__37213__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37215){var e_37453 = e37215;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37453);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37453.message)].join('')));
}

var G__37454 = seq__37192;
var G__37455 = chunk__37193;
var G__37456 = count__37194;
var G__37457 = (i__37195 + (1));
seq__37192 = G__37454;
chunk__37193 = G__37455;
count__37194 = G__37456;
i__37195 = G__37457;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37192);
if(temp__5735__auto__){
var seq__37192__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37192__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37192__$1);
var G__37458 = cljs.core.chunk_rest(seq__37192__$1);
var G__37459 = c__4556__auto__;
var G__37460 = cljs.core.count(c__4556__auto__);
var G__37461 = (0);
seq__37192 = G__37458;
chunk__37193 = G__37459;
count__37194 = G__37460;
i__37195 = G__37461;
continue;
} else {
var map__37216 = cljs.core.first(seq__37192__$1);
var map__37216__$1 = (((((!((map__37216 == null))))?(((((map__37216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37216):map__37216);
var src = map__37216__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37219){var e_37462 = e37219;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37462);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37462.message)].join('')));
}

var G__37463 = cljs.core.next(seq__37192__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__37192 = G__37463;
chunk__37193 = G__37464;
count__37194 = G__37465;
i__37195 = G__37466;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37220 = cljs.core.seq(js_requires);
var chunk__37221 = null;
var count__37222 = (0);
var i__37223 = (0);
while(true){
if((i__37223 < count__37222)){
var js_ns = chunk__37221.cljs$core$IIndexed$_nth$arity$2(null,i__37223);
var require_str_37467 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37467);


var G__37468 = seq__37220;
var G__37469 = chunk__37221;
var G__37470 = count__37222;
var G__37471 = (i__37223 + (1));
seq__37220 = G__37468;
chunk__37221 = G__37469;
count__37222 = G__37470;
i__37223 = G__37471;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37220);
if(temp__5735__auto__){
var seq__37220__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37220__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37220__$1);
var G__37472 = cljs.core.chunk_rest(seq__37220__$1);
var G__37473 = c__4556__auto__;
var G__37474 = cljs.core.count(c__4556__auto__);
var G__37475 = (0);
seq__37220 = G__37472;
chunk__37221 = G__37473;
count__37222 = G__37474;
i__37223 = G__37475;
continue;
} else {
var js_ns = cljs.core.first(seq__37220__$1);
var require_str_37476 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37476);


var G__37477 = cljs.core.next(seq__37220__$1);
var G__37478 = null;
var G__37479 = (0);
var G__37480 = (0);
seq__37220 = G__37477;
chunk__37221 = G__37478;
count__37222 = G__37479;
i__37223 = G__37480;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37226){
var map__37227 = p__37226;
var map__37227__$1 = (((((!((map__37227 == null))))?(((((map__37227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37227):map__37227);
var msg = map__37227__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37229(s__37230){
return (new cljs.core.LazySeq(null,(function (){
var s__37230__$1 = s__37230;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37230__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37241 = cljs.core.first(xs__6292__auto__);
var map__37241__$1 = (((((!((map__37241 == null))))?(((((map__37241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37241):map__37241);
var src = map__37241__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37230__$1,map__37241,map__37241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37227,map__37227__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37229_$_iter__37231(s__37232){
return (new cljs.core.LazySeq(null,((function (s__37230__$1,map__37241,map__37241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37227,map__37227__$1,msg,info,reload_info){
return (function (){
var s__37232__$1 = s__37232;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37232__$1);
if(temp__5735__auto____$1){
var s__37232__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37232__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37232__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37234 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37233 = (0);
while(true){
if((i__37233 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37233);
cljs.core.chunk_append(b__37234,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37482 = (i__37233 + (1));
i__37233 = G__37482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37234),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37229_$_iter__37231(cljs.core.chunk_rest(s__37232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37234),null);
}
} else {
var warning = cljs.core.first(s__37232__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37229_$_iter__37231(cljs.core.rest(s__37232__$2)));
}
} else {
return null;
}
break;
}
});})(s__37230__$1,map__37241,map__37241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37227,map__37227__$1,msg,info,reload_info))
,null,null));
});})(s__37230__$1,map__37241,map__37241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37227,map__37227__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37229(cljs.core.rest(s__37230__$1)));
} else {
var G__37483 = cljs.core.rest(s__37230__$1);
s__37230__$1 = G__37483;
continue;
}
} else {
var G__37484 = cljs.core.rest(s__37230__$1);
s__37230__$1 = G__37484;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37252_37485 = cljs.core.seq(warnings);
var chunk__37253_37486 = null;
var count__37254_37487 = (0);
var i__37255_37488 = (0);
while(true){
if((i__37255_37488 < count__37254_37487)){
var map__37265_37492 = chunk__37253_37486.cljs$core$IIndexed$_nth$arity$2(null,i__37255_37488);
var map__37265_37493__$1 = (((((!((map__37265_37492 == null))))?(((((map__37265_37492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37265_37492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37265_37492):map__37265_37492);
var w_37494 = map__37265_37493__$1;
var msg_37495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265_37493__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265_37493__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265_37493__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265_37493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37498)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37496),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37497),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37495__$1)].join(''));


var G__37500 = seq__37252_37485;
var G__37501 = chunk__37253_37486;
var G__37502 = count__37254_37487;
var G__37503 = (i__37255_37488 + (1));
seq__37252_37485 = G__37500;
chunk__37253_37486 = G__37501;
count__37254_37487 = G__37502;
i__37255_37488 = G__37503;
continue;
} else {
var temp__5735__auto___37504 = cljs.core.seq(seq__37252_37485);
if(temp__5735__auto___37504){
var seq__37252_37505__$1 = temp__5735__auto___37504;
if(cljs.core.chunked_seq_QMARK_(seq__37252_37505__$1)){
var c__4556__auto___37506 = cljs.core.chunk_first(seq__37252_37505__$1);
var G__37507 = cljs.core.chunk_rest(seq__37252_37505__$1);
var G__37508 = c__4556__auto___37506;
var G__37509 = cljs.core.count(c__4556__auto___37506);
var G__37510 = (0);
seq__37252_37485 = G__37507;
chunk__37253_37486 = G__37508;
count__37254_37487 = G__37509;
i__37255_37488 = G__37510;
continue;
} else {
var map__37268_37511 = cljs.core.first(seq__37252_37505__$1);
var map__37268_37512__$1 = (((((!((map__37268_37511 == null))))?(((((map__37268_37511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37268_37511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37268_37511):map__37268_37511);
var w_37513 = map__37268_37512__$1;
var msg_37514__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268_37512__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268_37512__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268_37512__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268_37512__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37517)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37515),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37516),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37514__$1)].join(''));


var G__37518 = cljs.core.next(seq__37252_37505__$1);
var G__37519 = null;
var G__37520 = (0);
var G__37521 = (0);
seq__37252_37485 = G__37518;
chunk__37253_37486 = G__37519;
count__37254_37487 = G__37520;
i__37255_37488 = G__37521;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37225_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37225_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37291){
var map__37293 = p__37291;
var map__37293__$1 = (((((!((map__37293 == null))))?(((((map__37293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37293):map__37293);
var msg = map__37293__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37293__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37296 = cljs.core.seq(updates);
var chunk__37298 = null;
var count__37299 = (0);
var i__37300 = (0);
while(true){
if((i__37300 < count__37299)){
var path = chunk__37298.cljs$core$IIndexed$_nth$arity$2(null,i__37300);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37371_37522 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37375_37523 = null;
var count__37376_37524 = (0);
var i__37377_37525 = (0);
while(true){
if((i__37377_37525 < count__37376_37524)){
var node_37526 = chunk__37375_37523.cljs$core$IIndexed$_nth$arity$2(null,i__37377_37525);
if(cljs.core.not(node_37526.shadow$old)){
var path_match_37527 = shadow.cljs.devtools.client.browser.match_paths(node_37526.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37527)){
var new_link_37528 = (function (){var G__37387 = node_37526.cloneNode(true);
G__37387.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37527),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37387;
})();
(node_37526.shadow$old = true);

(new_link_37528.onload = ((function (seq__37371_37522,chunk__37375_37523,count__37376_37524,i__37377_37525,seq__37296,chunk__37298,count__37299,i__37300,new_link_37528,path_match_37527,node_37526,path,map__37293,map__37293__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37526);
});})(seq__37371_37522,chunk__37375_37523,count__37376_37524,i__37377_37525,seq__37296,chunk__37298,count__37299,i__37300,new_link_37528,path_match_37527,node_37526,path,map__37293,map__37293__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37527], 0));

goog.dom.insertSiblingAfter(new_link_37528,node_37526);


var G__37529 = seq__37371_37522;
var G__37530 = chunk__37375_37523;
var G__37531 = count__37376_37524;
var G__37532 = (i__37377_37525 + (1));
seq__37371_37522 = G__37529;
chunk__37375_37523 = G__37530;
count__37376_37524 = G__37531;
i__37377_37525 = G__37532;
continue;
} else {
var G__37533 = seq__37371_37522;
var G__37534 = chunk__37375_37523;
var G__37535 = count__37376_37524;
var G__37536 = (i__37377_37525 + (1));
seq__37371_37522 = G__37533;
chunk__37375_37523 = G__37534;
count__37376_37524 = G__37535;
i__37377_37525 = G__37536;
continue;
}
} else {
var G__37537 = seq__37371_37522;
var G__37538 = chunk__37375_37523;
var G__37539 = count__37376_37524;
var G__37540 = (i__37377_37525 + (1));
seq__37371_37522 = G__37537;
chunk__37375_37523 = G__37538;
count__37376_37524 = G__37539;
i__37377_37525 = G__37540;
continue;
}
} else {
var temp__5735__auto___37541 = cljs.core.seq(seq__37371_37522);
if(temp__5735__auto___37541){
var seq__37371_37542__$1 = temp__5735__auto___37541;
if(cljs.core.chunked_seq_QMARK_(seq__37371_37542__$1)){
var c__4556__auto___37543 = cljs.core.chunk_first(seq__37371_37542__$1);
var G__37544 = cljs.core.chunk_rest(seq__37371_37542__$1);
var G__37545 = c__4556__auto___37543;
var G__37546 = cljs.core.count(c__4556__auto___37543);
var G__37547 = (0);
seq__37371_37522 = G__37544;
chunk__37375_37523 = G__37545;
count__37376_37524 = G__37546;
i__37377_37525 = G__37547;
continue;
} else {
var node_37548 = cljs.core.first(seq__37371_37542__$1);
if(cljs.core.not(node_37548.shadow$old)){
var path_match_37549 = shadow.cljs.devtools.client.browser.match_paths(node_37548.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37549)){
var new_link_37550 = (function (){var G__37390 = node_37548.cloneNode(true);
G__37390.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37549),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37390;
})();
(node_37548.shadow$old = true);

(new_link_37550.onload = ((function (seq__37371_37522,chunk__37375_37523,count__37376_37524,i__37377_37525,seq__37296,chunk__37298,count__37299,i__37300,new_link_37550,path_match_37549,node_37548,seq__37371_37542__$1,temp__5735__auto___37541,path,map__37293,map__37293__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37548);
});})(seq__37371_37522,chunk__37375_37523,count__37376_37524,i__37377_37525,seq__37296,chunk__37298,count__37299,i__37300,new_link_37550,path_match_37549,node_37548,seq__37371_37542__$1,temp__5735__auto___37541,path,map__37293,map__37293__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37549], 0));

goog.dom.insertSiblingAfter(new_link_37550,node_37548);


var G__37552 = cljs.core.next(seq__37371_37542__$1);
var G__37553 = null;
var G__37554 = (0);
var G__37555 = (0);
seq__37371_37522 = G__37552;
chunk__37375_37523 = G__37553;
count__37376_37524 = G__37554;
i__37377_37525 = G__37555;
continue;
} else {
var G__37559 = cljs.core.next(seq__37371_37542__$1);
var G__37560 = null;
var G__37561 = (0);
var G__37562 = (0);
seq__37371_37522 = G__37559;
chunk__37375_37523 = G__37560;
count__37376_37524 = G__37561;
i__37377_37525 = G__37562;
continue;
}
} else {
var G__37563 = cljs.core.next(seq__37371_37542__$1);
var G__37564 = null;
var G__37565 = (0);
var G__37566 = (0);
seq__37371_37522 = G__37563;
chunk__37375_37523 = G__37564;
count__37376_37524 = G__37565;
i__37377_37525 = G__37566;
continue;
}
}
} else {
}
}
break;
}


var G__37568 = seq__37296;
var G__37569 = chunk__37298;
var G__37570 = count__37299;
var G__37571 = (i__37300 + (1));
seq__37296 = G__37568;
chunk__37298 = G__37569;
count__37299 = G__37570;
i__37300 = G__37571;
continue;
} else {
var G__37572 = seq__37296;
var G__37573 = chunk__37298;
var G__37574 = count__37299;
var G__37575 = (i__37300 + (1));
seq__37296 = G__37572;
chunk__37298 = G__37573;
count__37299 = G__37574;
i__37300 = G__37575;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37296);
if(temp__5735__auto__){
var seq__37296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37296__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37296__$1);
var G__37576 = cljs.core.chunk_rest(seq__37296__$1);
var G__37577 = c__4556__auto__;
var G__37578 = cljs.core.count(c__4556__auto__);
var G__37579 = (0);
seq__37296 = G__37576;
chunk__37298 = G__37577;
count__37299 = G__37578;
i__37300 = G__37579;
continue;
} else {
var path = cljs.core.first(seq__37296__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37391_37580 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37395_37581 = null;
var count__37396_37582 = (0);
var i__37397_37583 = (0);
while(true){
if((i__37397_37583 < count__37396_37582)){
var node_37584 = chunk__37395_37581.cljs$core$IIndexed$_nth$arity$2(null,i__37397_37583);
if(cljs.core.not(node_37584.shadow$old)){
var path_match_37585 = shadow.cljs.devtools.client.browser.match_paths(node_37584.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37585)){
var new_link_37586 = (function (){var G__37409 = node_37584.cloneNode(true);
G__37409.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37585),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37409;
})();
(node_37584.shadow$old = true);

(new_link_37586.onload = ((function (seq__37391_37580,chunk__37395_37581,count__37396_37582,i__37397_37583,seq__37296,chunk__37298,count__37299,i__37300,new_link_37586,path_match_37585,node_37584,path,seq__37296__$1,temp__5735__auto__,map__37293,map__37293__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37584);
});})(seq__37391_37580,chunk__37395_37581,count__37396_37582,i__37397_37583,seq__37296,chunk__37298,count__37299,i__37300,new_link_37586,path_match_37585,node_37584,path,seq__37296__$1,temp__5735__auto__,map__37293,map__37293__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37585], 0));

goog.dom.insertSiblingAfter(new_link_37586,node_37584);


var G__37587 = seq__37391_37580;
var G__37588 = chunk__37395_37581;
var G__37589 = count__37396_37582;
var G__37590 = (i__37397_37583 + (1));
seq__37391_37580 = G__37587;
chunk__37395_37581 = G__37588;
count__37396_37582 = G__37589;
i__37397_37583 = G__37590;
continue;
} else {
var G__37591 = seq__37391_37580;
var G__37592 = chunk__37395_37581;
var G__37593 = count__37396_37582;
var G__37594 = (i__37397_37583 + (1));
seq__37391_37580 = G__37591;
chunk__37395_37581 = G__37592;
count__37396_37582 = G__37593;
i__37397_37583 = G__37594;
continue;
}
} else {
var G__37595 = seq__37391_37580;
var G__37596 = chunk__37395_37581;
var G__37597 = count__37396_37582;
var G__37598 = (i__37397_37583 + (1));
seq__37391_37580 = G__37595;
chunk__37395_37581 = G__37596;
count__37396_37582 = G__37597;
i__37397_37583 = G__37598;
continue;
}
} else {
var temp__5735__auto___37599__$1 = cljs.core.seq(seq__37391_37580);
if(temp__5735__auto___37599__$1){
var seq__37391_37600__$1 = temp__5735__auto___37599__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37391_37600__$1)){
var c__4556__auto___37601 = cljs.core.chunk_first(seq__37391_37600__$1);
var G__37602 = cljs.core.chunk_rest(seq__37391_37600__$1);
var G__37603 = c__4556__auto___37601;
var G__37604 = cljs.core.count(c__4556__auto___37601);
var G__37605 = (0);
seq__37391_37580 = G__37602;
chunk__37395_37581 = G__37603;
count__37396_37582 = G__37604;
i__37397_37583 = G__37605;
continue;
} else {
var node_37606 = cljs.core.first(seq__37391_37600__$1);
if(cljs.core.not(node_37606.shadow$old)){
var path_match_37607 = shadow.cljs.devtools.client.browser.match_paths(node_37606.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37607)){
var new_link_37608 = (function (){var G__37410 = node_37606.cloneNode(true);
G__37410.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37607),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37410;
})();
(node_37606.shadow$old = true);

(new_link_37608.onload = ((function (seq__37391_37580,chunk__37395_37581,count__37396_37582,i__37397_37583,seq__37296,chunk__37298,count__37299,i__37300,new_link_37608,path_match_37607,node_37606,seq__37391_37600__$1,temp__5735__auto___37599__$1,path,seq__37296__$1,temp__5735__auto__,map__37293,map__37293__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37606);
});})(seq__37391_37580,chunk__37395_37581,count__37396_37582,i__37397_37583,seq__37296,chunk__37298,count__37299,i__37300,new_link_37608,path_match_37607,node_37606,seq__37391_37600__$1,temp__5735__auto___37599__$1,path,seq__37296__$1,temp__5735__auto__,map__37293,map__37293__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37607], 0));

goog.dom.insertSiblingAfter(new_link_37608,node_37606);


var G__37609 = cljs.core.next(seq__37391_37600__$1);
var G__37610 = null;
var G__37611 = (0);
var G__37612 = (0);
seq__37391_37580 = G__37609;
chunk__37395_37581 = G__37610;
count__37396_37582 = G__37611;
i__37397_37583 = G__37612;
continue;
} else {
var G__37613 = cljs.core.next(seq__37391_37600__$1);
var G__37614 = null;
var G__37615 = (0);
var G__37616 = (0);
seq__37391_37580 = G__37613;
chunk__37395_37581 = G__37614;
count__37396_37582 = G__37615;
i__37397_37583 = G__37616;
continue;
}
} else {
var G__37617 = cljs.core.next(seq__37391_37600__$1);
var G__37618 = null;
var G__37619 = (0);
var G__37620 = (0);
seq__37391_37580 = G__37617;
chunk__37395_37581 = G__37618;
count__37396_37582 = G__37619;
i__37397_37583 = G__37620;
continue;
}
}
} else {
}
}
break;
}


var G__37621 = cljs.core.next(seq__37296__$1);
var G__37622 = null;
var G__37623 = (0);
var G__37624 = (0);
seq__37296 = G__37621;
chunk__37298 = G__37622;
count__37299 = G__37623;
i__37300 = G__37624;
continue;
} else {
var G__37625 = cljs.core.next(seq__37296__$1);
var G__37626 = null;
var G__37627 = (0);
var G__37628 = (0);
seq__37296 = G__37625;
chunk__37298 = G__37626;
count__37299 = G__37627;
i__37300 = G__37628;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37418){
var map__37419 = p__37418;
var map__37419__$1 = (((((!((map__37419 == null))))?(((((map__37419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37419):map__37419);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37419__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37421){
var map__37422 = p__37421;
var map__37422__$1 = (((((!((map__37422 == null))))?(((((map__37422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37422):map__37422);
var _ = map__37422__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37422__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37424,done,error){
var map__37425 = p__37424;
var map__37425__$1 = (((((!((map__37425 == null))))?(((((map__37425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37425):map__37425);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37425__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37427,done,error){
var map__37428 = p__37427;
var map__37428__$1 = (((((!((map__37428 == null))))?(((((map__37428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37428):map__37428);
var msg = map__37428__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37430){
var map__37431 = p__37430;
var map__37431__$1 = (((((!((map__37431 == null))))?(((((map__37431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37431):map__37431);
var src = map__37431__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37433 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37433) : done.call(null,G__37433));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37434){
var map__37435 = p__37434;
var map__37435__$1 = (((((!((map__37435 == null))))?(((((map__37435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37435):map__37435);
var msg__$1 = map__37435__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37435__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37437){var ex = e37437;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37438){
var map__37439 = p__37438;
var map__37439__$1 = (((((!((map__37439 == null))))?(((((map__37439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37439):map__37439);
var env = map__37439__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37439__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37441){
var map__37442 = p__37441;
var map__37442__$1 = (((((!((map__37442 == null))))?(((((map__37442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37442):map__37442);
var msg = map__37442__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37442__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37444){
var map__37445 = p__37444;
var map__37445__$1 = (((((!((map__37445 == null))))?(((((map__37445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37445):map__37445);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37445__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37445__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37447){
var map__37448 = p__37447;
var map__37448__$1 = (((((!((map__37448 == null))))?(((((map__37448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37448):map__37448);
var svc = map__37448__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37448__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

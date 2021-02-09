goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__27805){
var map__27806 = p__27805;
var map__27806__$1 = (((((!((map__27806 == null))))?(((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27806):map__27806);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__27808_27841 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__27809_27842 = null;
var count__27810_27843 = (0);
var i__27811_27844 = (0);
while(true){
if((i__27811_27844 < count__27810_27843)){
var vec__27824_27845 = chunk__27809_27842.cljs$core$IIndexed$_nth$arity$2(null,i__27811_27844);
var k_27846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824_27845,(0),null);
var cb_27847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824_27845,(1),null);
try{var G__27828_27852 = cljs.core.deref(re_frame.trace.traces);
(cb_27847.cljs$core$IFn$_invoke$arity$1 ? cb_27847.cljs$core$IFn$_invoke$arity$1(G__27828_27852) : cb_27847.call(null,G__27828_27852));
}catch (e27827){var e_27853 = e27827;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27846,"while storing",cljs.core.deref(re_frame.trace.traces),e_27853], 0));
}

var G__27854 = seq__27808_27841;
var G__27855 = chunk__27809_27842;
var G__27856 = count__27810_27843;
var G__27857 = (i__27811_27844 + (1));
seq__27808_27841 = G__27854;
chunk__27809_27842 = G__27855;
count__27810_27843 = G__27856;
i__27811_27844 = G__27857;
continue;
} else {
var temp__5735__auto___27858 = cljs.core.seq(seq__27808_27841);
if(temp__5735__auto___27858){
var seq__27808_27859__$1 = temp__5735__auto___27858;
if(cljs.core.chunked_seq_QMARK_(seq__27808_27859__$1)){
var c__4556__auto___27860 = cljs.core.chunk_first(seq__27808_27859__$1);
var G__27861 = cljs.core.chunk_rest(seq__27808_27859__$1);
var G__27862 = c__4556__auto___27860;
var G__27863 = cljs.core.count(c__4556__auto___27860);
var G__27864 = (0);
seq__27808_27841 = G__27861;
chunk__27809_27842 = G__27862;
count__27810_27843 = G__27863;
i__27811_27844 = G__27864;
continue;
} else {
var vec__27829_27865 = cljs.core.first(seq__27808_27859__$1);
var k_27866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829_27865,(0),null);
var cb_27867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829_27865,(1),null);
try{var G__27833_27868 = cljs.core.deref(re_frame.trace.traces);
(cb_27867.cljs$core$IFn$_invoke$arity$1 ? cb_27867.cljs$core$IFn$_invoke$arity$1(G__27833_27868) : cb_27867.call(null,G__27833_27868));
}catch (e27832){var e_27869 = e27832;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27866,"while storing",cljs.core.deref(re_frame.trace.traces),e_27869], 0));
}

var G__27870 = cljs.core.next(seq__27808_27859__$1);
var G__27871 = null;
var G__27872 = (0);
var G__27873 = (0);
seq__27808_27841 = G__27870;
chunk__27809_27842 = G__27871;
count__27810_27843 = G__27872;
i__27811_27844 = G__27873;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

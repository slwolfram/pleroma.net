goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__28077 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28078 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28078);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28199 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28199)){
var new_db_28200 = temp__5735__auto___28199;
var fexpr__28083_28201 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28083_28201.cljs$core$IFn$_invoke$arity$1 ? fexpr__28083_28201.cljs$core$IFn$_invoke$arity$1(new_db_28200) : fexpr__28083_28201.call(null,new_db_28200));
} else {
}

var seq__28084 = cljs.core.seq(effects_without_db);
var chunk__28085 = null;
var count__28086 = (0);
var i__28087 = (0);
while(true){
if((i__28087 < count__28086)){
var vec__28099 = chunk__28085.cljs$core$IIndexed$_nth$arity$2(null,i__28087);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28099,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28099,(1),null);
var temp__5733__auto___28202 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28202)){
var effect_fn_28203 = temp__5733__auto___28202;
(effect_fn_28203.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28203.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28203.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28206 = seq__28084;
var G__28207 = chunk__28085;
var G__28208 = count__28086;
var G__28209 = (i__28087 + (1));
seq__28084 = G__28206;
chunk__28085 = G__28207;
count__28086 = G__28208;
i__28087 = G__28209;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28084);
if(temp__5735__auto__){
var seq__28084__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28084__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28084__$1);
var G__28210 = cljs.core.chunk_rest(seq__28084__$1);
var G__28211 = c__4556__auto__;
var G__28212 = cljs.core.count(c__4556__auto__);
var G__28213 = (0);
seq__28084 = G__28210;
chunk__28085 = G__28211;
count__28086 = G__28212;
i__28087 = G__28213;
continue;
} else {
var vec__28104 = cljs.core.first(seq__28084__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(1),null);
var temp__5733__auto___28214 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28214)){
var effect_fn_28215 = temp__5733__auto___28214;
(effect_fn_28215.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28215.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28215.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28216 = cljs.core.next(seq__28084__$1);
var G__28217 = null;
var G__28218 = (0);
var G__28219 = (0);
seq__28084 = G__28216;
chunk__28085 = G__28217;
count__28086 = G__28218;
i__28087 = G__28219;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__27783__auto___28220 = re_frame.interop.now();
var duration__27784__auto___28221 = (end__27783__auto___28220 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27784__auto___28221,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__27783__auto___28220);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28077);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28222 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28222)){
var new_db_28223 = temp__5735__auto___28222;
var fexpr__28113_28224 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28113_28224.cljs$core$IFn$_invoke$arity$1 ? fexpr__28113_28224.cljs$core$IFn$_invoke$arity$1(new_db_28223) : fexpr__28113_28224.call(null,new_db_28223));
} else {
}

var seq__28114 = cljs.core.seq(effects_without_db);
var chunk__28115 = null;
var count__28116 = (0);
var i__28117 = (0);
while(true){
if((i__28117 < count__28116)){
var vec__28127 = chunk__28115.cljs$core$IIndexed$_nth$arity$2(null,i__28117);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28127,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28127,(1),null);
var temp__5733__auto___28225 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28225)){
var effect_fn_28226 = temp__5733__auto___28225;
(effect_fn_28226.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28226.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28226.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28227 = seq__28114;
var G__28228 = chunk__28115;
var G__28229 = count__28116;
var G__28230 = (i__28117 + (1));
seq__28114 = G__28227;
chunk__28115 = G__28228;
count__28116 = G__28229;
i__28117 = G__28230;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28114);
if(temp__5735__auto__){
var seq__28114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28114__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28114__$1);
var G__28233 = cljs.core.chunk_rest(seq__28114__$1);
var G__28234 = c__4556__auto__;
var G__28235 = cljs.core.count(c__4556__auto__);
var G__28236 = (0);
seq__28114 = G__28233;
chunk__28115 = G__28234;
count__28116 = G__28235;
i__28117 = G__28236;
continue;
} else {
var vec__28134 = cljs.core.first(seq__28114__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(1),null);
var temp__5733__auto___28237 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28237)){
var effect_fn_28238 = temp__5733__auto___28237;
(effect_fn_28238.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28238.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28238.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28239 = cljs.core.next(seq__28114__$1);
var G__28240 = null;
var G__28241 = (0);
var G__28242 = (0);
seq__28114 = G__28239;
chunk__28115 = G__28240;
count__28116 = G__28241;
i__28117 = G__28242;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__28137){
var map__28138 = p__28137;
var map__28138__$1 = (((((!((map__28138 == null))))?(((((map__28138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28138):map__28138);
var effect = map__28138__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28138__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__28140 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28141 = null;
var count__28142 = (0);
var i__28143 = (0);
while(true){
if((i__28143 < count__28142)){
var effect = chunk__28141.cljs$core$IIndexed$_nth$arity$2(null,i__28143);
re_frame.fx.dispatch_later(effect);


var G__28243 = seq__28140;
var G__28244 = chunk__28141;
var G__28245 = count__28142;
var G__28246 = (i__28143 + (1));
seq__28140 = G__28243;
chunk__28141 = G__28244;
count__28142 = G__28245;
i__28143 = G__28246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28140);
if(temp__5735__auto__){
var seq__28140__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28140__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28140__$1);
var G__28249 = cljs.core.chunk_rest(seq__28140__$1);
var G__28250 = c__4556__auto__;
var G__28251 = cljs.core.count(c__4556__auto__);
var G__28252 = (0);
seq__28140 = G__28249;
chunk__28141 = G__28250;
count__28142 = G__28251;
i__28143 = G__28252;
continue;
} else {
var effect = cljs.core.first(seq__28140__$1);
re_frame.fx.dispatch_later(effect);


var G__28253 = cljs.core.next(seq__28140__$1);
var G__28254 = null;
var G__28255 = (0);
var G__28256 = (0);
seq__28140 = G__28253;
chunk__28141 = G__28254;
count__28142 = G__28255;
i__28143 = G__28256;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__28154 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28155 = null;
var count__28156 = (0);
var i__28157 = (0);
while(true){
if((i__28157 < count__28156)){
var vec__28178 = chunk__28155.cljs$core$IIndexed$_nth$arity$2(null,i__28157);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28178,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28178,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___28257 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28257)){
var effect_fn_28258 = temp__5733__auto___28257;
(effect_fn_28258.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28258.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28258.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28259 = seq__28154;
var G__28260 = chunk__28155;
var G__28261 = count__28156;
var G__28262 = (i__28157 + (1));
seq__28154 = G__28259;
chunk__28155 = G__28260;
count__28156 = G__28261;
i__28157 = G__28262;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28154);
if(temp__5735__auto__){
var seq__28154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28154__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28154__$1);
var G__28265 = cljs.core.chunk_rest(seq__28154__$1);
var G__28266 = c__4556__auto__;
var G__28267 = cljs.core.count(c__4556__auto__);
var G__28268 = (0);
seq__28154 = G__28265;
chunk__28155 = G__28266;
count__28156 = G__28267;
i__28157 = G__28268;
continue;
} else {
var vec__28188 = cljs.core.first(seq__28154__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___28269 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28269)){
var effect_fn_28270 = temp__5733__auto___28269;
(effect_fn_28270.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28270.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28270.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28271 = cljs.core.next(seq__28154__$1);
var G__28272 = null;
var G__28273 = (0);
var G__28274 = (0);
seq__28154 = G__28271;
chunk__28155 = G__28272;
count__28156 = G__28273;
i__28157 = G__28274;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28191 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28192 = null;
var count__28193 = (0);
var i__28194 = (0);
while(true){
if((i__28194 < count__28193)){
var event = chunk__28192.cljs$core$IIndexed$_nth$arity$2(null,i__28194);
re_frame.router.dispatch(event);


var G__28275 = seq__28191;
var G__28276 = chunk__28192;
var G__28277 = count__28193;
var G__28278 = (i__28194 + (1));
seq__28191 = G__28275;
chunk__28192 = G__28276;
count__28193 = G__28277;
i__28194 = G__28278;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28191);
if(temp__5735__auto__){
var seq__28191__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28191__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28191__$1);
var G__28279 = cljs.core.chunk_rest(seq__28191__$1);
var G__28280 = c__4556__auto__;
var G__28281 = cljs.core.count(c__4556__auto__);
var G__28282 = (0);
seq__28191 = G__28279;
chunk__28192 = G__28280;
count__28193 = G__28281;
i__28194 = G__28282;
continue;
} else {
var event = cljs.core.first(seq__28191__$1);
re_frame.router.dispatch(event);


var G__28283 = cljs.core.next(seq__28191__$1);
var G__28284 = null;
var G__28285 = (0);
var G__28286 = (0);
seq__28191 = G__28283;
chunk__28192 = G__28284;
count__28193 = G__28285;
i__28194 = G__28286;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__28195 = cljs.core.seq(value);
var chunk__28196 = null;
var count__28197 = (0);
var i__28198 = (0);
while(true){
if((i__28198 < count__28197)){
var event = chunk__28196.cljs$core$IIndexed$_nth$arity$2(null,i__28198);
clear_event(event);


var G__28289 = seq__28195;
var G__28290 = chunk__28196;
var G__28291 = count__28197;
var G__28292 = (i__28198 + (1));
seq__28195 = G__28289;
chunk__28196 = G__28290;
count__28197 = G__28291;
i__28198 = G__28292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28195);
if(temp__5735__auto__){
var seq__28195__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28195__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28195__$1);
var G__28293 = cljs.core.chunk_rest(seq__28195__$1);
var G__28294 = c__4556__auto__;
var G__28295 = cljs.core.count(c__4556__auto__);
var G__28296 = (0);
seq__28195 = G__28293;
chunk__28196 = G__28294;
count__28197 = G__28295;
i__28198 = G__28296;
continue;
} else {
var event = cljs.core.first(seq__28195__$1);
clear_event(event);


var G__28297 = cljs.core.next(seq__28195__$1);
var G__28298 = null;
var G__28299 = (0);
var G__28300 = (0);
seq__28195 = G__28297;
chunk__28196 = G__28298;
count__28197 = G__28299;
i__28198 = G__28300;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

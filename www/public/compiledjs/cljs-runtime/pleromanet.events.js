goog.provide('pleromanet.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pleromanet.events","load-app","pleromanet.events/load-app",-933597185),(function (p__28621,_){
var map__28622 = p__28621;
var map__28622__$1 = (((((!((map__28622 == null))))?(((((map__28622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28622):map__28622);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28622__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,pleromanet.db.default_db], 0)),new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pleromanet.events","set-active-panel","pleromanet.events/set-active-panel",-38415888),(function (db,p__28624){
var vec__28625 = p__28624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625,(1),null);
console.log(active_panel);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=pleromanet.events.js.map

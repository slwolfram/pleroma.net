goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36499){
var map__36500 = p__36499;
var map__36500__$1 = (((((!((map__36500 == null))))?(((((map__36500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36500):map__36500);
var m = map__36500__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36500__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36504_36726 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36505_36727 = null;
var count__36506_36728 = (0);
var i__36507_36729 = (0);
while(true){
if((i__36507_36729 < count__36506_36728)){
var f_36730 = chunk__36505_36727.cljs$core$IIndexed$_nth$arity$2(null,i__36507_36729);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36730], 0));


var G__36731 = seq__36504_36726;
var G__36732 = chunk__36505_36727;
var G__36733 = count__36506_36728;
var G__36734 = (i__36507_36729 + (1));
seq__36504_36726 = G__36731;
chunk__36505_36727 = G__36732;
count__36506_36728 = G__36733;
i__36507_36729 = G__36734;
continue;
} else {
var temp__5735__auto___36735 = cljs.core.seq(seq__36504_36726);
if(temp__5735__auto___36735){
var seq__36504_36736__$1 = temp__5735__auto___36735;
if(cljs.core.chunked_seq_QMARK_(seq__36504_36736__$1)){
var c__4556__auto___36737 = cljs.core.chunk_first(seq__36504_36736__$1);
var G__36738 = cljs.core.chunk_rest(seq__36504_36736__$1);
var G__36739 = c__4556__auto___36737;
var G__36740 = cljs.core.count(c__4556__auto___36737);
var G__36741 = (0);
seq__36504_36726 = G__36738;
chunk__36505_36727 = G__36739;
count__36506_36728 = G__36740;
i__36507_36729 = G__36741;
continue;
} else {
var f_36742 = cljs.core.first(seq__36504_36736__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36742], 0));


var G__36743 = cljs.core.next(seq__36504_36736__$1);
var G__36744 = null;
var G__36745 = (0);
var G__36746 = (0);
seq__36504_36726 = G__36743;
chunk__36505_36727 = G__36744;
count__36506_36728 = G__36745;
i__36507_36729 = G__36746;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36749 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36749], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36749)))?cljs.core.second(arglists_36749):arglists_36749)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36510_36756 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36511_36757 = null;
var count__36512_36758 = (0);
var i__36513_36759 = (0);
while(true){
if((i__36513_36759 < count__36512_36758)){
var vec__36526_36760 = chunk__36511_36757.cljs$core$IIndexed$_nth$arity$2(null,i__36513_36759);
var name_36761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36526_36760,(0),null);
var map__36529_36762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36526_36760,(1),null);
var map__36529_36763__$1 = (((((!((map__36529_36762 == null))))?(((((map__36529_36762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36529_36762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36529_36762):map__36529_36762);
var doc_36764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529_36763__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529_36763__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36761], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36765], 0));

if(cljs.core.truth_(doc_36764)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36764], 0));
} else {
}


var G__36766 = seq__36510_36756;
var G__36767 = chunk__36511_36757;
var G__36768 = count__36512_36758;
var G__36769 = (i__36513_36759 + (1));
seq__36510_36756 = G__36766;
chunk__36511_36757 = G__36767;
count__36512_36758 = G__36768;
i__36513_36759 = G__36769;
continue;
} else {
var temp__5735__auto___36770 = cljs.core.seq(seq__36510_36756);
if(temp__5735__auto___36770){
var seq__36510_36771__$1 = temp__5735__auto___36770;
if(cljs.core.chunked_seq_QMARK_(seq__36510_36771__$1)){
var c__4556__auto___36772 = cljs.core.chunk_first(seq__36510_36771__$1);
var G__36773 = cljs.core.chunk_rest(seq__36510_36771__$1);
var G__36774 = c__4556__auto___36772;
var G__36775 = cljs.core.count(c__4556__auto___36772);
var G__36776 = (0);
seq__36510_36756 = G__36773;
chunk__36511_36757 = G__36774;
count__36512_36758 = G__36775;
i__36513_36759 = G__36776;
continue;
} else {
var vec__36531_36778 = cljs.core.first(seq__36510_36771__$1);
var name_36779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36531_36778,(0),null);
var map__36534_36780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36531_36778,(1),null);
var map__36534_36781__$1 = (((((!((map__36534_36780 == null))))?(((((map__36534_36780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36534_36780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36534_36780):map__36534_36780);
var doc_36782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534_36781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534_36781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36779], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36783], 0));

if(cljs.core.truth_(doc_36782)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36782], 0));
} else {
}


var G__36784 = cljs.core.next(seq__36510_36771__$1);
var G__36785 = null;
var G__36786 = (0);
var G__36787 = (0);
seq__36510_36756 = G__36784;
chunk__36511_36757 = G__36785;
count__36512_36758 = G__36786;
i__36513_36759 = G__36787;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36537 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36538 = null;
var count__36539 = (0);
var i__36540 = (0);
while(true){
if((i__36540 < count__36539)){
var role = chunk__36538.cljs$core$IIndexed$_nth$arity$2(null,i__36540);
var temp__5735__auto___36788__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36788__$1)){
var spec_36789 = temp__5735__auto___36788__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36789)], 0));
} else {
}


var G__36790 = seq__36537;
var G__36791 = chunk__36538;
var G__36792 = count__36539;
var G__36793 = (i__36540 + (1));
seq__36537 = G__36790;
chunk__36538 = G__36791;
count__36539 = G__36792;
i__36540 = G__36793;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36537);
if(temp__5735__auto____$1){
var seq__36537__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36537__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36537__$1);
var G__36798 = cljs.core.chunk_rest(seq__36537__$1);
var G__36799 = c__4556__auto__;
var G__36800 = cljs.core.count(c__4556__auto__);
var G__36801 = (0);
seq__36537 = G__36798;
chunk__36538 = G__36799;
count__36539 = G__36800;
i__36540 = G__36801;
continue;
} else {
var role = cljs.core.first(seq__36537__$1);
var temp__5735__auto___36802__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36802__$2)){
var spec_36803 = temp__5735__auto___36802__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36803)], 0));
} else {
}


var G__36804 = cljs.core.next(seq__36537__$1);
var G__36805 = null;
var G__36806 = (0);
var G__36807 = (0);
seq__36537 = G__36804;
chunk__36538 = G__36805;
count__36539 = G__36806;
i__36540 = G__36807;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36808 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36809 = cljs.core.ex_cause(t);
via = G__36808;
t = G__36809;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36543 = datafied_throwable;
var map__36543__$1 = (((((!((map__36543 == null))))?(((((map__36543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36543):map__36543);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36543__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36543__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36543__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36544 = cljs.core.last(via);
var map__36544__$1 = (((((!((map__36544 == null))))?(((((map__36544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36544):map__36544);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36545 = data;
var map__36545__$1 = (((((!((map__36545 == null))))?(((((map__36545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36545):map__36545);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36545__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36545__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36545__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36546 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36546__$1 = (((((!((map__36546 == null))))?(((((map__36546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36546):map__36546);
var top_data = map__36546__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36553 = phase;
var G__36553__$1 = (((G__36553 instanceof cljs.core.Keyword))?G__36553.fqn:null);
switch (G__36553__$1) {
case "read-source":
var map__36554 = data;
var map__36554__$1 = (((((!((map__36554 == null))))?(((((map__36554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36554):map__36554);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36556 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36556__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36556,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36556);
var G__36556__$2 = (cljs.core.truth_((function (){var fexpr__36557 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36557.cljs$core$IFn$_invoke$arity$1 ? fexpr__36557.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36557.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36556__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36556__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36556__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36556__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36559 = top_data;
var G__36559__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36559,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36559);
var G__36559__$2 = (cljs.core.truth_((function (){var fexpr__36560 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36560.cljs$core$IFn$_invoke$arity$1 ? fexpr__36560.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36560.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36559__$1);
var G__36559__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36559__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36559__$2);
var G__36559__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36559__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36559__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36559__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36559__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36561 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(3),null);
var G__36565 = top_data;
var G__36565__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36565,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36565);
var G__36565__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36565__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36565__$1);
var G__36565__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36565__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36565__$2);
var G__36565__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36565__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36565__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36565__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36565__$4;
}

break;
case "execution":
var vec__36567 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36542_SHARP_){
var or__4126__auto__ = (p1__36542_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36571 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36571.cljs$core$IFn$_invoke$arity$1 ? fexpr__36571.cljs$core$IFn$_invoke$arity$1(p1__36542_SHARP_) : fexpr__36571.call(null,p1__36542_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36610 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36610__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36610,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36610);
var G__36610__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36610__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36610__$1);
var G__36610__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36610__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36610__$2);
var G__36610__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36610__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36610__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36610__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36610__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36553__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36648){
var map__36650 = p__36648;
var map__36650__$1 = (((((!((map__36650 == null))))?(((((map__36650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36650):map__36650);
var triage_data = map__36650__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36669 = phase;
var G__36669__$1 = (((G__36669 instanceof cljs.core.Keyword))?G__36669.fqn:null);
switch (G__36669__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36674 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36675 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36676 = loc;
var G__36677 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36678_36852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36679_36853 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36680_36854 = true;
var _STAR_print_fn_STAR__temp_val__36681_36855 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36680_36854);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36681_36855);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36642_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36642_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36679_36853);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36678_36852);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36674,G__36675,G__36676,G__36677) : format.call(null,G__36674,G__36675,G__36676,G__36677));

break;
case "macroexpansion":
var G__36682 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36683 = cause_type;
var G__36684 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36685 = loc;
var G__36686 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36682,G__36683,G__36684,G__36685,G__36686) : format.call(null,G__36682,G__36683,G__36684,G__36685,G__36686));

break;
case "compile-syntax-check":
var G__36691 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36692 = cause_type;
var G__36693 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36694 = loc;
var G__36695 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36691,G__36692,G__36693,G__36694,G__36695) : format.call(null,G__36691,G__36692,G__36693,G__36694,G__36695));

break;
case "compilation":
var G__36697 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36698 = cause_type;
var G__36699 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36700 = loc;
var G__36701 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36697,G__36698,G__36699,G__36700,G__36701) : format.call(null,G__36697,G__36698,G__36699,G__36700,G__36701));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36702 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36703 = symbol;
var G__36704 = loc;
var G__36705 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36706_36862 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36707_36863 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36708_36864 = true;
var _STAR_print_fn_STAR__temp_val__36709_36865 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36708_36864);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36709_36865);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36643_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36643_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36707_36863);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36706_36862);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36702,G__36703,G__36704,G__36705) : format.call(null,G__36702,G__36703,G__36704,G__36705));
} else {
var G__36710 = "Execution error%s at %s(%s).\n%s\n";
var G__36711 = cause_type;
var G__36712 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36713 = loc;
var G__36714 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36710,G__36711,G__36712,G__36713,G__36714) : format.call(null,G__36710,G__36711,G__36712,G__36713,G__36714));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36669__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

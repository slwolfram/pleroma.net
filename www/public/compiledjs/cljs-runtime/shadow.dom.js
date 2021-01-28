goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34070 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34070(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34072 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34072(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33511 = coll;
var G__33512 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33511,G__33512) : shadow.dom.lazy_native_coll_seq.call(null,G__33511,G__33512));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33533 = arguments.length;
switch (G__33533) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33540 = arguments.length;
switch (G__33540) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33550 = arguments.length;
switch (G__33550) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33565 = arguments.length;
switch (G__33565) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33582 = arguments.length;
switch (G__33582) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33598 = arguments.length;
switch (G__33598) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33614){if((e33614 instanceof Object)){
var e = e33614;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33614;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33628 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33629 = null;
var count__33630 = (0);
var i__33631 = (0);
while(true){
if((i__33631 < count__33630)){
var el = chunk__33629.cljs$core$IIndexed$_nth$arity$2(null,i__33631);
var handler_34093__$1 = ((function (seq__33628,chunk__33629,count__33630,i__33631,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33628,chunk__33629,count__33630,i__33631,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34093__$1);


var G__34094 = seq__33628;
var G__34095 = chunk__33629;
var G__34096 = count__33630;
var G__34097 = (i__33631 + (1));
seq__33628 = G__34094;
chunk__33629 = G__34095;
count__33630 = G__34096;
i__33631 = G__34097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33628);
if(temp__5735__auto__){
var seq__33628__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33628__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33628__$1);
var G__34098 = cljs.core.chunk_rest(seq__33628__$1);
var G__34099 = c__4556__auto__;
var G__34100 = cljs.core.count(c__4556__auto__);
var G__34101 = (0);
seq__33628 = G__34098;
chunk__33629 = G__34099;
count__33630 = G__34100;
i__33631 = G__34101;
continue;
} else {
var el = cljs.core.first(seq__33628__$1);
var handler_34102__$1 = ((function (seq__33628,chunk__33629,count__33630,i__33631,el,seq__33628__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33628,chunk__33629,count__33630,i__33631,el,seq__33628__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34102__$1);


var G__34103 = cljs.core.next(seq__33628__$1);
var G__34104 = null;
var G__34105 = (0);
var G__34106 = (0);
seq__33628 = G__34103;
chunk__33629 = G__34104;
count__33630 = G__34105;
i__33631 = G__34106;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33652 = arguments.length;
switch (G__33652) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33670 = cljs.core.seq(events);
var chunk__33671 = null;
var count__33672 = (0);
var i__33673 = (0);
while(true){
if((i__33673 < count__33672)){
var vec__33686 = chunk__33671.cljs$core$IIndexed$_nth$arity$2(null,i__33673);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33686,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33686,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34112 = seq__33670;
var G__34113 = chunk__33671;
var G__34114 = count__33672;
var G__34115 = (i__33673 + (1));
seq__33670 = G__34112;
chunk__33671 = G__34113;
count__33672 = G__34114;
i__33673 = G__34115;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33670);
if(temp__5735__auto__){
var seq__33670__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33670__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33670__$1);
var G__34117 = cljs.core.chunk_rest(seq__33670__$1);
var G__34118 = c__4556__auto__;
var G__34119 = cljs.core.count(c__4556__auto__);
var G__34120 = (0);
seq__33670 = G__34117;
chunk__33671 = G__34118;
count__33672 = G__34119;
i__33673 = G__34120;
continue;
} else {
var vec__33692 = cljs.core.first(seq__33670__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33692,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34121 = cljs.core.next(seq__33670__$1);
var G__34122 = null;
var G__34123 = (0);
var G__34124 = (0);
seq__33670 = G__34121;
chunk__33671 = G__34122;
count__33672 = G__34123;
i__33673 = G__34124;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33695 = cljs.core.seq(styles);
var chunk__33696 = null;
var count__33697 = (0);
var i__33698 = (0);
while(true){
if((i__33698 < count__33697)){
var vec__33714 = chunk__33696.cljs$core$IIndexed$_nth$arity$2(null,i__33698);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34125 = seq__33695;
var G__34126 = chunk__33696;
var G__34127 = count__33697;
var G__34128 = (i__33698 + (1));
seq__33695 = G__34125;
chunk__33696 = G__34126;
count__33697 = G__34127;
i__33698 = G__34128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33695);
if(temp__5735__auto__){
var seq__33695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33695__$1);
var G__34129 = cljs.core.chunk_rest(seq__33695__$1);
var G__34130 = c__4556__auto__;
var G__34131 = cljs.core.count(c__4556__auto__);
var G__34132 = (0);
seq__33695 = G__34129;
chunk__33696 = G__34130;
count__33697 = G__34131;
i__33698 = G__34132;
continue;
} else {
var vec__33721 = cljs.core.first(seq__33695__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33721,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34136 = cljs.core.next(seq__33695__$1);
var G__34137 = null;
var G__34138 = (0);
var G__34139 = (0);
seq__33695 = G__34136;
chunk__33696 = G__34137;
count__33697 = G__34138;
i__33698 = G__34139;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33725_34140 = key;
var G__33725_34141__$1 = (((G__33725_34140 instanceof cljs.core.Keyword))?G__33725_34140.fqn:null);
switch (G__33725_34141__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34143 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34143,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34143,"aria-");
}
})())){
el.setAttribute(ks_34143,value);
} else {
(el[ks_34143] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33734){
var map__33735 = p__33734;
var map__33735__$1 = (((((!((map__33735 == null))))?(((((map__33735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33735):map__33735);
var props = map__33735__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33735__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33737 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33737,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33737,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33737,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33740 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33740,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33740;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33743 = arguments.length;
switch (G__33743) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33751){
var vec__33753 = p__33751;
var seq__33754 = cljs.core.seq(vec__33753);
var first__33755 = cljs.core.first(seq__33754);
var seq__33754__$1 = cljs.core.next(seq__33754);
var nn = first__33755;
var first__33755__$1 = cljs.core.first(seq__33754__$1);
var seq__33754__$2 = cljs.core.next(seq__33754__$1);
var np = first__33755__$1;
var nc = seq__33754__$2;
var node = vec__33753;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33758 = nn;
var G__33759 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33758,G__33759) : create_fn.call(null,G__33758,G__33759));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33761 = nn;
var G__33762 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33761,G__33762) : create_fn.call(null,G__33761,G__33762));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33765 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33765,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33765,(1),null);
var seq__33768_34152 = cljs.core.seq(node_children);
var chunk__33769_34153 = null;
var count__33770_34154 = (0);
var i__33771_34155 = (0);
while(true){
if((i__33771_34155 < count__33770_34154)){
var child_struct_34156 = chunk__33769_34153.cljs$core$IIndexed$_nth$arity$2(null,i__33771_34155);
var children_34157 = shadow.dom.dom_node(child_struct_34156);
if(cljs.core.seq_QMARK_(children_34157)){
var seq__33794_34158 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34157));
var chunk__33796_34159 = null;
var count__33797_34160 = (0);
var i__33798_34161 = (0);
while(true){
if((i__33798_34161 < count__33797_34160)){
var child_34162 = chunk__33796_34159.cljs$core$IIndexed$_nth$arity$2(null,i__33798_34161);
if(cljs.core.truth_(child_34162)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34162);


var G__34163 = seq__33794_34158;
var G__34164 = chunk__33796_34159;
var G__34165 = count__33797_34160;
var G__34166 = (i__33798_34161 + (1));
seq__33794_34158 = G__34163;
chunk__33796_34159 = G__34164;
count__33797_34160 = G__34165;
i__33798_34161 = G__34166;
continue;
} else {
var G__34167 = seq__33794_34158;
var G__34168 = chunk__33796_34159;
var G__34169 = count__33797_34160;
var G__34170 = (i__33798_34161 + (1));
seq__33794_34158 = G__34167;
chunk__33796_34159 = G__34168;
count__33797_34160 = G__34169;
i__33798_34161 = G__34170;
continue;
}
} else {
var temp__5735__auto___34171 = cljs.core.seq(seq__33794_34158);
if(temp__5735__auto___34171){
var seq__33794_34172__$1 = temp__5735__auto___34171;
if(cljs.core.chunked_seq_QMARK_(seq__33794_34172__$1)){
var c__4556__auto___34173 = cljs.core.chunk_first(seq__33794_34172__$1);
var G__34174 = cljs.core.chunk_rest(seq__33794_34172__$1);
var G__34175 = c__4556__auto___34173;
var G__34176 = cljs.core.count(c__4556__auto___34173);
var G__34177 = (0);
seq__33794_34158 = G__34174;
chunk__33796_34159 = G__34175;
count__33797_34160 = G__34176;
i__33798_34161 = G__34177;
continue;
} else {
var child_34178 = cljs.core.first(seq__33794_34172__$1);
if(cljs.core.truth_(child_34178)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34178);


var G__34180 = cljs.core.next(seq__33794_34172__$1);
var G__34181 = null;
var G__34182 = (0);
var G__34183 = (0);
seq__33794_34158 = G__34180;
chunk__33796_34159 = G__34181;
count__33797_34160 = G__34182;
i__33798_34161 = G__34183;
continue;
} else {
var G__34184 = cljs.core.next(seq__33794_34172__$1);
var G__34185 = null;
var G__34186 = (0);
var G__34187 = (0);
seq__33794_34158 = G__34184;
chunk__33796_34159 = G__34185;
count__33797_34160 = G__34186;
i__33798_34161 = G__34187;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34157);
}


var G__34188 = seq__33768_34152;
var G__34189 = chunk__33769_34153;
var G__34190 = count__33770_34154;
var G__34191 = (i__33771_34155 + (1));
seq__33768_34152 = G__34188;
chunk__33769_34153 = G__34189;
count__33770_34154 = G__34190;
i__33771_34155 = G__34191;
continue;
} else {
var temp__5735__auto___34194 = cljs.core.seq(seq__33768_34152);
if(temp__5735__auto___34194){
var seq__33768_34195__$1 = temp__5735__auto___34194;
if(cljs.core.chunked_seq_QMARK_(seq__33768_34195__$1)){
var c__4556__auto___34196 = cljs.core.chunk_first(seq__33768_34195__$1);
var G__34197 = cljs.core.chunk_rest(seq__33768_34195__$1);
var G__34198 = c__4556__auto___34196;
var G__34199 = cljs.core.count(c__4556__auto___34196);
var G__34200 = (0);
seq__33768_34152 = G__34197;
chunk__33769_34153 = G__34198;
count__33770_34154 = G__34199;
i__33771_34155 = G__34200;
continue;
} else {
var child_struct_34201 = cljs.core.first(seq__33768_34195__$1);
var children_34202 = shadow.dom.dom_node(child_struct_34201);
if(cljs.core.seq_QMARK_(children_34202)){
var seq__33802_34203 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34202));
var chunk__33804_34204 = null;
var count__33805_34205 = (0);
var i__33806_34206 = (0);
while(true){
if((i__33806_34206 < count__33805_34205)){
var child_34207 = chunk__33804_34204.cljs$core$IIndexed$_nth$arity$2(null,i__33806_34206);
if(cljs.core.truth_(child_34207)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34207);


var G__34208 = seq__33802_34203;
var G__34209 = chunk__33804_34204;
var G__34210 = count__33805_34205;
var G__34211 = (i__33806_34206 + (1));
seq__33802_34203 = G__34208;
chunk__33804_34204 = G__34209;
count__33805_34205 = G__34210;
i__33806_34206 = G__34211;
continue;
} else {
var G__34212 = seq__33802_34203;
var G__34213 = chunk__33804_34204;
var G__34214 = count__33805_34205;
var G__34215 = (i__33806_34206 + (1));
seq__33802_34203 = G__34212;
chunk__33804_34204 = G__34213;
count__33805_34205 = G__34214;
i__33806_34206 = G__34215;
continue;
}
} else {
var temp__5735__auto___34216__$1 = cljs.core.seq(seq__33802_34203);
if(temp__5735__auto___34216__$1){
var seq__33802_34217__$1 = temp__5735__auto___34216__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33802_34217__$1)){
var c__4556__auto___34218 = cljs.core.chunk_first(seq__33802_34217__$1);
var G__34219 = cljs.core.chunk_rest(seq__33802_34217__$1);
var G__34220 = c__4556__auto___34218;
var G__34221 = cljs.core.count(c__4556__auto___34218);
var G__34222 = (0);
seq__33802_34203 = G__34219;
chunk__33804_34204 = G__34220;
count__33805_34205 = G__34221;
i__33806_34206 = G__34222;
continue;
} else {
var child_34224 = cljs.core.first(seq__33802_34217__$1);
if(cljs.core.truth_(child_34224)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34224);


var G__34225 = cljs.core.next(seq__33802_34217__$1);
var G__34226 = null;
var G__34227 = (0);
var G__34228 = (0);
seq__33802_34203 = G__34225;
chunk__33804_34204 = G__34226;
count__33805_34205 = G__34227;
i__33806_34206 = G__34228;
continue;
} else {
var G__34229 = cljs.core.next(seq__33802_34217__$1);
var G__34230 = null;
var G__34231 = (0);
var G__34232 = (0);
seq__33802_34203 = G__34229;
chunk__33804_34204 = G__34230;
count__33805_34205 = G__34231;
i__33806_34206 = G__34232;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34202);
}


var G__34233 = cljs.core.next(seq__33768_34195__$1);
var G__34234 = null;
var G__34235 = (0);
var G__34236 = (0);
seq__33768_34152 = G__34233;
chunk__33769_34153 = G__34234;
count__33770_34154 = G__34235;
i__33771_34155 = G__34236;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33820 = cljs.core.seq(node);
var chunk__33821 = null;
var count__33822 = (0);
var i__33823 = (0);
while(true){
if((i__33823 < count__33822)){
var n = chunk__33821.cljs$core$IIndexed$_nth$arity$2(null,i__33823);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34244 = seq__33820;
var G__34245 = chunk__33821;
var G__34246 = count__33822;
var G__34247 = (i__33823 + (1));
seq__33820 = G__34244;
chunk__33821 = G__34245;
count__33822 = G__34246;
i__33823 = G__34247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33820);
if(temp__5735__auto__){
var seq__33820__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33820__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33820__$1);
var G__34249 = cljs.core.chunk_rest(seq__33820__$1);
var G__34250 = c__4556__auto__;
var G__34251 = cljs.core.count(c__4556__auto__);
var G__34252 = (0);
seq__33820 = G__34249;
chunk__33821 = G__34250;
count__33822 = G__34251;
i__33823 = G__34252;
continue;
} else {
var n = cljs.core.first(seq__33820__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34253 = cljs.core.next(seq__33820__$1);
var G__34254 = null;
var G__34255 = (0);
var G__34256 = (0);
seq__33820 = G__34253;
chunk__33821 = G__34254;
count__33822 = G__34255;
i__33823 = G__34256;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33825 = arguments.length;
switch (G__33825) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33829 = arguments.length;
switch (G__33829) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33833 = arguments.length;
switch (G__33833) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34261 = arguments.length;
var i__4737__auto___34262 = (0);
while(true){
if((i__4737__auto___34262 < len__4736__auto___34261)){
args__4742__auto__.push((arguments[i__4737__auto___34262]));

var G__34263 = (i__4737__auto___34262 + (1));
i__4737__auto___34262 = G__34263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33842_34267 = cljs.core.seq(nodes);
var chunk__33843_34268 = null;
var count__33844_34269 = (0);
var i__33845_34270 = (0);
while(true){
if((i__33845_34270 < count__33844_34269)){
var node_34271 = chunk__33843_34268.cljs$core$IIndexed$_nth$arity$2(null,i__33845_34270);
fragment.appendChild(shadow.dom._to_dom(node_34271));


var G__34272 = seq__33842_34267;
var G__34273 = chunk__33843_34268;
var G__34274 = count__33844_34269;
var G__34275 = (i__33845_34270 + (1));
seq__33842_34267 = G__34272;
chunk__33843_34268 = G__34273;
count__33844_34269 = G__34274;
i__33845_34270 = G__34275;
continue;
} else {
var temp__5735__auto___34276 = cljs.core.seq(seq__33842_34267);
if(temp__5735__auto___34276){
var seq__33842_34278__$1 = temp__5735__auto___34276;
if(cljs.core.chunked_seq_QMARK_(seq__33842_34278__$1)){
var c__4556__auto___34279 = cljs.core.chunk_first(seq__33842_34278__$1);
var G__34280 = cljs.core.chunk_rest(seq__33842_34278__$1);
var G__34281 = c__4556__auto___34279;
var G__34282 = cljs.core.count(c__4556__auto___34279);
var G__34283 = (0);
seq__33842_34267 = G__34280;
chunk__33843_34268 = G__34281;
count__33844_34269 = G__34282;
i__33845_34270 = G__34283;
continue;
} else {
var node_34285 = cljs.core.first(seq__33842_34278__$1);
fragment.appendChild(shadow.dom._to_dom(node_34285));


var G__34287 = cljs.core.next(seq__33842_34278__$1);
var G__34288 = null;
var G__34289 = (0);
var G__34290 = (0);
seq__33842_34267 = G__34287;
chunk__33843_34268 = G__34288;
count__33844_34269 = G__34289;
i__33845_34270 = G__34290;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33841){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33841));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33846_34291 = cljs.core.seq(scripts);
var chunk__33847_34292 = null;
var count__33848_34293 = (0);
var i__33849_34294 = (0);
while(true){
if((i__33849_34294 < count__33848_34293)){
var vec__33856_34295 = chunk__33847_34292.cljs$core$IIndexed$_nth$arity$2(null,i__33849_34294);
var script_tag_34296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33856_34295,(0),null);
var script_body_34297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33856_34295,(1),null);
eval(script_body_34297);


var G__34298 = seq__33846_34291;
var G__34299 = chunk__33847_34292;
var G__34300 = count__33848_34293;
var G__34301 = (i__33849_34294 + (1));
seq__33846_34291 = G__34298;
chunk__33847_34292 = G__34299;
count__33848_34293 = G__34300;
i__33849_34294 = G__34301;
continue;
} else {
var temp__5735__auto___34302 = cljs.core.seq(seq__33846_34291);
if(temp__5735__auto___34302){
var seq__33846_34303__$1 = temp__5735__auto___34302;
if(cljs.core.chunked_seq_QMARK_(seq__33846_34303__$1)){
var c__4556__auto___34304 = cljs.core.chunk_first(seq__33846_34303__$1);
var G__34305 = cljs.core.chunk_rest(seq__33846_34303__$1);
var G__34306 = c__4556__auto___34304;
var G__34307 = cljs.core.count(c__4556__auto___34304);
var G__34308 = (0);
seq__33846_34291 = G__34305;
chunk__33847_34292 = G__34306;
count__33848_34293 = G__34307;
i__33849_34294 = G__34308;
continue;
} else {
var vec__33859_34309 = cljs.core.first(seq__33846_34303__$1);
var script_tag_34310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33859_34309,(0),null);
var script_body_34311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33859_34309,(1),null);
eval(script_body_34311);


var G__34328 = cljs.core.next(seq__33846_34303__$1);
var G__34329 = null;
var G__34330 = (0);
var G__34331 = (0);
seq__33846_34291 = G__34328;
chunk__33847_34292 = G__34329;
count__33848_34293 = G__34330;
i__33849_34294 = G__34331;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33862){
var vec__33863 = p__33862;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33863,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33863,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33867 = arguments.length;
switch (G__33867) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33880 = cljs.core.seq(style_keys);
var chunk__33881 = null;
var count__33882 = (0);
var i__33883 = (0);
while(true){
if((i__33883 < count__33882)){
var it = chunk__33881.cljs$core$IIndexed$_nth$arity$2(null,i__33883);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34346 = seq__33880;
var G__34347 = chunk__33881;
var G__34348 = count__33882;
var G__34349 = (i__33883 + (1));
seq__33880 = G__34346;
chunk__33881 = G__34347;
count__33882 = G__34348;
i__33883 = G__34349;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33880);
if(temp__5735__auto__){
var seq__33880__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33880__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33880__$1);
var G__34353 = cljs.core.chunk_rest(seq__33880__$1);
var G__34354 = c__4556__auto__;
var G__34355 = cljs.core.count(c__4556__auto__);
var G__34356 = (0);
seq__33880 = G__34353;
chunk__33881 = G__34354;
count__33882 = G__34355;
i__33883 = G__34356;
continue;
} else {
var it = cljs.core.first(seq__33880__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34357 = cljs.core.next(seq__33880__$1);
var G__34358 = null;
var G__34359 = (0);
var G__34360 = (0);
seq__33880 = G__34357;
chunk__33881 = G__34358;
count__33882 = G__34359;
i__33883 = G__34360;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33886,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33890 = k33886;
var G__33890__$1 = (((G__33890 instanceof cljs.core.Keyword))?G__33890.fqn:null);
switch (G__33890__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33886,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33892){
var vec__33893 = p__33892;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33893,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33893,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33885){
var self__ = this;
var G__33885__$1 = this;
return (new cljs.core.RecordIter((0),G__33885__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33887,other33888){
var self__ = this;
var this33887__$1 = this;
return (((!((other33888 == null)))) && ((this33887__$1.constructor === other33888.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33887__$1.x,other33888.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33887__$1.y,other33888.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33887__$1.__extmap,other33888.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33885){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33901 = cljs.core.keyword_identical_QMARK_;
var expr__33902 = k__4388__auto__;
if(cljs.core.truth_((pred__33901.cljs$core$IFn$_invoke$arity$2 ? pred__33901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33902) : pred__33901.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33902)))){
return (new shadow.dom.Coordinate(G__33885,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33901.cljs$core$IFn$_invoke$arity$2 ? pred__33901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33902) : pred__33901.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33902)))){
return (new shadow.dom.Coordinate(self__.x,G__33885,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33885),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33885){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33885,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33889){
var extmap__4419__auto__ = (function (){var G__33904 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33889,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33904);
} else {
return G__33904;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33889),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33889),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33914,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33918 = k33914;
var G__33918__$1 = (((G__33918 instanceof cljs.core.Keyword))?G__33918.fqn:null);
switch (G__33918__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33914,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33923){
var vec__33925 = p__33923;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33925,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33925,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33913){
var self__ = this;
var G__33913__$1 = this;
return (new cljs.core.RecordIter((0),G__33913__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33915,other33916){
var self__ = this;
var this33915__$1 = this;
return (((!((other33916 == null)))) && ((this33915__$1.constructor === other33916.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33915__$1.w,other33916.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33915__$1.h,other33916.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33915__$1.__extmap,other33916.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33913){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33935 = cljs.core.keyword_identical_QMARK_;
var expr__33936 = k__4388__auto__;
if(cljs.core.truth_((pred__33935.cljs$core$IFn$_invoke$arity$2 ? pred__33935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33936) : pred__33935.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33936)))){
return (new shadow.dom.Size(G__33913,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33935.cljs$core$IFn$_invoke$arity$2 ? pred__33935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33936) : pred__33935.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33936)))){
return (new shadow.dom.Size(self__.w,G__33913,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33913),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33913){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33913,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33917){
var extmap__4419__auto__ = (function (){var G__33938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33917,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33917)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33938);
} else {
return G__33938;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33917),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33917),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34412 = (i + (1));
var G__34413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34412;
ret = G__34413;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33948){
var vec__33949 = p__33948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33949,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33956 = arguments.length;
switch (G__33956) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34422 = ps;
var G__34423 = (i + (1));
el__$1 = G__34422;
i = G__34423;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33964 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33964,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33964,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33964,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33967_34428 = cljs.core.seq(props);
var chunk__33968_34429 = null;
var count__33969_34430 = (0);
var i__33970_34431 = (0);
while(true){
if((i__33970_34431 < count__33969_34430)){
var vec__33977_34433 = chunk__33968_34429.cljs$core$IIndexed$_nth$arity$2(null,i__33970_34431);
var k_34434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33977_34433,(0),null);
var v_34435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33977_34433,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34434);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34434),v_34435);


var G__34437 = seq__33967_34428;
var G__34438 = chunk__33968_34429;
var G__34439 = count__33969_34430;
var G__34440 = (i__33970_34431 + (1));
seq__33967_34428 = G__34437;
chunk__33968_34429 = G__34438;
count__33969_34430 = G__34439;
i__33970_34431 = G__34440;
continue;
} else {
var temp__5735__auto___34442 = cljs.core.seq(seq__33967_34428);
if(temp__5735__auto___34442){
var seq__33967_34443__$1 = temp__5735__auto___34442;
if(cljs.core.chunked_seq_QMARK_(seq__33967_34443__$1)){
var c__4556__auto___34444 = cljs.core.chunk_first(seq__33967_34443__$1);
var G__34445 = cljs.core.chunk_rest(seq__33967_34443__$1);
var G__34446 = c__4556__auto___34444;
var G__34447 = cljs.core.count(c__4556__auto___34444);
var G__34448 = (0);
seq__33967_34428 = G__34445;
chunk__33968_34429 = G__34446;
count__33969_34430 = G__34447;
i__33970_34431 = G__34448;
continue;
} else {
var vec__33980_34449 = cljs.core.first(seq__33967_34443__$1);
var k_34450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980_34449,(0),null);
var v_34451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980_34449,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34450);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34450),v_34451);


var G__34454 = cljs.core.next(seq__33967_34443__$1);
var G__34455 = null;
var G__34456 = (0);
var G__34457 = (0);
seq__33967_34428 = G__34454;
chunk__33968_34429 = G__34455;
count__33969_34430 = G__34456;
i__33970_34431 = G__34457;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33986 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(1),null);
var seq__33989_34462 = cljs.core.seq(node_children);
var chunk__33991_34463 = null;
var count__33992_34464 = (0);
var i__33993_34465 = (0);
while(true){
if((i__33993_34465 < count__33992_34464)){
var child_struct_34467 = chunk__33991_34463.cljs$core$IIndexed$_nth$arity$2(null,i__33993_34465);
if((!((child_struct_34467 == null)))){
if(typeof child_struct_34467 === 'string'){
var text_34468 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34468),child_struct_34467].join(''));
} else {
var children_34469 = shadow.dom.svg_node(child_struct_34467);
if(cljs.core.seq_QMARK_(children_34469)){
var seq__34014_34470 = cljs.core.seq(children_34469);
var chunk__34016_34471 = null;
var count__34017_34472 = (0);
var i__34018_34473 = (0);
while(true){
if((i__34018_34473 < count__34017_34472)){
var child_34474 = chunk__34016_34471.cljs$core$IIndexed$_nth$arity$2(null,i__34018_34473);
if(cljs.core.truth_(child_34474)){
node.appendChild(child_34474);


var G__34475 = seq__34014_34470;
var G__34476 = chunk__34016_34471;
var G__34477 = count__34017_34472;
var G__34478 = (i__34018_34473 + (1));
seq__34014_34470 = G__34475;
chunk__34016_34471 = G__34476;
count__34017_34472 = G__34477;
i__34018_34473 = G__34478;
continue;
} else {
var G__34479 = seq__34014_34470;
var G__34480 = chunk__34016_34471;
var G__34481 = count__34017_34472;
var G__34482 = (i__34018_34473 + (1));
seq__34014_34470 = G__34479;
chunk__34016_34471 = G__34480;
count__34017_34472 = G__34481;
i__34018_34473 = G__34482;
continue;
}
} else {
var temp__5735__auto___34483 = cljs.core.seq(seq__34014_34470);
if(temp__5735__auto___34483){
var seq__34014_34484__$1 = temp__5735__auto___34483;
if(cljs.core.chunked_seq_QMARK_(seq__34014_34484__$1)){
var c__4556__auto___34485 = cljs.core.chunk_first(seq__34014_34484__$1);
var G__34486 = cljs.core.chunk_rest(seq__34014_34484__$1);
var G__34487 = c__4556__auto___34485;
var G__34488 = cljs.core.count(c__4556__auto___34485);
var G__34489 = (0);
seq__34014_34470 = G__34486;
chunk__34016_34471 = G__34487;
count__34017_34472 = G__34488;
i__34018_34473 = G__34489;
continue;
} else {
var child_34490 = cljs.core.first(seq__34014_34484__$1);
if(cljs.core.truth_(child_34490)){
node.appendChild(child_34490);


var G__34491 = cljs.core.next(seq__34014_34484__$1);
var G__34492 = null;
var G__34493 = (0);
var G__34494 = (0);
seq__34014_34470 = G__34491;
chunk__34016_34471 = G__34492;
count__34017_34472 = G__34493;
i__34018_34473 = G__34494;
continue;
} else {
var G__34495 = cljs.core.next(seq__34014_34484__$1);
var G__34496 = null;
var G__34497 = (0);
var G__34498 = (0);
seq__34014_34470 = G__34495;
chunk__34016_34471 = G__34496;
count__34017_34472 = G__34497;
i__34018_34473 = G__34498;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34469);
}
}


var G__34499 = seq__33989_34462;
var G__34500 = chunk__33991_34463;
var G__34501 = count__33992_34464;
var G__34502 = (i__33993_34465 + (1));
seq__33989_34462 = G__34499;
chunk__33991_34463 = G__34500;
count__33992_34464 = G__34501;
i__33993_34465 = G__34502;
continue;
} else {
var G__34503 = seq__33989_34462;
var G__34504 = chunk__33991_34463;
var G__34505 = count__33992_34464;
var G__34506 = (i__33993_34465 + (1));
seq__33989_34462 = G__34503;
chunk__33991_34463 = G__34504;
count__33992_34464 = G__34505;
i__33993_34465 = G__34506;
continue;
}
} else {
var temp__5735__auto___34507 = cljs.core.seq(seq__33989_34462);
if(temp__5735__auto___34507){
var seq__33989_34508__$1 = temp__5735__auto___34507;
if(cljs.core.chunked_seq_QMARK_(seq__33989_34508__$1)){
var c__4556__auto___34509 = cljs.core.chunk_first(seq__33989_34508__$1);
var G__34510 = cljs.core.chunk_rest(seq__33989_34508__$1);
var G__34511 = c__4556__auto___34509;
var G__34512 = cljs.core.count(c__4556__auto___34509);
var G__34513 = (0);
seq__33989_34462 = G__34510;
chunk__33991_34463 = G__34511;
count__33992_34464 = G__34512;
i__33993_34465 = G__34513;
continue;
} else {
var child_struct_34520 = cljs.core.first(seq__33989_34508__$1);
if((!((child_struct_34520 == null)))){
if(typeof child_struct_34520 === 'string'){
var text_34521 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34521),child_struct_34520].join(''));
} else {
var children_34522 = shadow.dom.svg_node(child_struct_34520);
if(cljs.core.seq_QMARK_(children_34522)){
var seq__34032_34523 = cljs.core.seq(children_34522);
var chunk__34034_34524 = null;
var count__34035_34525 = (0);
var i__34036_34526 = (0);
while(true){
if((i__34036_34526 < count__34035_34525)){
var child_34528 = chunk__34034_34524.cljs$core$IIndexed$_nth$arity$2(null,i__34036_34526);
if(cljs.core.truth_(child_34528)){
node.appendChild(child_34528);


var G__34529 = seq__34032_34523;
var G__34530 = chunk__34034_34524;
var G__34531 = count__34035_34525;
var G__34532 = (i__34036_34526 + (1));
seq__34032_34523 = G__34529;
chunk__34034_34524 = G__34530;
count__34035_34525 = G__34531;
i__34036_34526 = G__34532;
continue;
} else {
var G__34533 = seq__34032_34523;
var G__34534 = chunk__34034_34524;
var G__34535 = count__34035_34525;
var G__34536 = (i__34036_34526 + (1));
seq__34032_34523 = G__34533;
chunk__34034_34524 = G__34534;
count__34035_34525 = G__34535;
i__34036_34526 = G__34536;
continue;
}
} else {
var temp__5735__auto___34537__$1 = cljs.core.seq(seq__34032_34523);
if(temp__5735__auto___34537__$1){
var seq__34032_34538__$1 = temp__5735__auto___34537__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34032_34538__$1)){
var c__4556__auto___34539 = cljs.core.chunk_first(seq__34032_34538__$1);
var G__34540 = cljs.core.chunk_rest(seq__34032_34538__$1);
var G__34541 = c__4556__auto___34539;
var G__34542 = cljs.core.count(c__4556__auto___34539);
var G__34543 = (0);
seq__34032_34523 = G__34540;
chunk__34034_34524 = G__34541;
count__34035_34525 = G__34542;
i__34036_34526 = G__34543;
continue;
} else {
var child_34544 = cljs.core.first(seq__34032_34538__$1);
if(cljs.core.truth_(child_34544)){
node.appendChild(child_34544);


var G__34545 = cljs.core.next(seq__34032_34538__$1);
var G__34546 = null;
var G__34547 = (0);
var G__34548 = (0);
seq__34032_34523 = G__34545;
chunk__34034_34524 = G__34546;
count__34035_34525 = G__34547;
i__34036_34526 = G__34548;
continue;
} else {
var G__34549 = cljs.core.next(seq__34032_34538__$1);
var G__34550 = null;
var G__34551 = (0);
var G__34552 = (0);
seq__34032_34523 = G__34549;
chunk__34034_34524 = G__34550;
count__34035_34525 = G__34551;
i__34036_34526 = G__34552;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34522);
}
}


var G__34553 = cljs.core.next(seq__33989_34508__$1);
var G__34554 = null;
var G__34555 = (0);
var G__34556 = (0);
seq__33989_34462 = G__34553;
chunk__33991_34463 = G__34554;
count__33992_34464 = G__34555;
i__33993_34465 = G__34556;
continue;
} else {
var G__34557 = cljs.core.next(seq__33989_34508__$1);
var G__34558 = null;
var G__34559 = (0);
var G__34560 = (0);
seq__33989_34462 = G__34557;
chunk__33991_34463 = G__34558;
count__33992_34464 = G__34559;
i__33993_34465 = G__34560;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34561 = arguments.length;
var i__4737__auto___34562 = (0);
while(true){
if((i__4737__auto___34562 < len__4736__auto___34561)){
args__4742__auto__.push((arguments[i__4737__auto___34562]));

var G__34563 = (i__4737__auto___34562 + (1));
i__4737__auto___34562 = G__34563;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34049){
var G__34050 = cljs.core.first(seq34049);
var seq34049__$1 = cljs.core.next(seq34049);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34050,seq34049__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34054 = arguments.length;
switch (G__34054) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__31228__auto___34576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_34061){
var state_val_34062 = (state_34061[(1)]);
if((state_val_34062 === (1))){
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34061__$1,(2),once_or_cleanup);
} else {
if((state_val_34062 === (2))){
var inst_34058 = (state_34061[(2)]);
var inst_34059 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34061__$1 = (function (){var statearr_34064 = state_34061;
(statearr_34064[(7)] = inst_34058);

return statearr_34064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34061__$1,inst_34059);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30950__auto__ = null;
var shadow$dom$state_machine__30950__auto____0 = (function (){
var statearr_34065 = [null,null,null,null,null,null,null,null];
(statearr_34065[(0)] = shadow$dom$state_machine__30950__auto__);

(statearr_34065[(1)] = (1));

return statearr_34065;
});
var shadow$dom$state_machine__30950__auto____1 = (function (state_34061){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_34061);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e34066){var ex__30953__auto__ = e34066;
var statearr_34067_34584 = state_34061;
(statearr_34067_34584[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_34061[(4)]))){
var statearr_34068_34586 = state_34061;
(statearr_34068_34586[(1)] = cljs.core.first((state_34061[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34588 = state_34061;
state_34061 = G__34588;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
shadow$dom$state_machine__30950__auto__ = function(state_34061){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30950__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30950__auto____1.call(this,state_34061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30950__auto____0;
shadow$dom$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30950__auto____1;
return shadow$dom$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_34069 = f__31229__auto__();
(statearr_34069[(6)] = c__31228__auto___34576);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31316 = arguments.length;
switch (G__31316) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31318 = (function (f,blockable,meta31319){
this.f = f;
this.blockable = blockable;
this.meta31319 = meta31319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31320,meta31319__$1){
var self__ = this;
var _31320__$1 = this;
return (new cljs.core.async.t_cljs$core$async31318(self__.f,self__.blockable,meta31319__$1));
}));

(cljs.core.async.t_cljs$core$async31318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31320){
var self__ = this;
var _31320__$1 = this;
return self__.meta31319;
}));

(cljs.core.async.t_cljs$core$async31318.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31318.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31319","meta31319",2083017388,null)], null);
}));

(cljs.core.async.t_cljs$core$async31318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31318");

(cljs.core.async.t_cljs$core$async31318.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31318.
 */
cljs.core.async.__GT_t_cljs$core$async31318 = (function cljs$core$async$__GT_t_cljs$core$async31318(f__$1,blockable__$1,meta31319){
return (new cljs.core.async.t_cljs$core$async31318(f__$1,blockable__$1,meta31319));
});

}

return (new cljs.core.async.t_cljs$core$async31318(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31335 = arguments.length;
switch (G__31335) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31359 = arguments.length;
switch (G__31359) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31365 = arguments.length;
switch (G__31365) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33504 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33504) : fn1.call(null,val_33504));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33504) : fn1.call(null,val_33504));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31367 = arguments.length;
switch (G__31367) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33508 = n;
var x_33509 = (0);
while(true){
if((x_33509 < n__4613__auto___33508)){
(a[x_33509] = x_33509);

var G__33510 = (x_33509 + (1));
x_33509 = G__33510;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31369 = (function (flag,meta31370){
this.flag = flag;
this.meta31370 = meta31370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31371,meta31370__$1){
var self__ = this;
var _31371__$1 = this;
return (new cljs.core.async.t_cljs$core$async31369(self__.flag,meta31370__$1));
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31371){
var self__ = this;
var _31371__$1 = this;
return self__.meta31370;
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31370","meta31370",1271185802,null)], null);
}));

(cljs.core.async.t_cljs$core$async31369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31369");

(cljs.core.async.t_cljs$core$async31369.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31369.
 */
cljs.core.async.__GT_t_cljs$core$async31369 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31369(flag__$1,meta31370){
return (new cljs.core.async.t_cljs$core$async31369(flag__$1,meta31370));
});

}

return (new cljs.core.async.t_cljs$core$async31369(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31376 = (function (flag,cb,meta31377){
this.flag = flag;
this.cb = cb;
this.meta31377 = meta31377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31378,meta31377__$1){
var self__ = this;
var _31378__$1 = this;
return (new cljs.core.async.t_cljs$core$async31376(self__.flag,self__.cb,meta31377__$1));
}));

(cljs.core.async.t_cljs$core$async31376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31378){
var self__ = this;
var _31378__$1 = this;
return self__.meta31377;
}));

(cljs.core.async.t_cljs$core$async31376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31377","meta31377",2128925179,null)], null);
}));

(cljs.core.async.t_cljs$core$async31376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31376");

(cljs.core.async.t_cljs$core$async31376.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31376.
 */
cljs.core.async.__GT_t_cljs$core$async31376 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31376(flag__$1,cb__$1,meta31377){
return (new cljs.core.async.t_cljs$core$async31376(flag__$1,cb__$1,meta31377));
});

}

return (new cljs.core.async.t_cljs$core$async31376(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31389_SHARP_){
var G__31391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31389_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31391) : fret.call(null,G__31391));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31390_SHARP_){
var G__31392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31390_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31392) : fret.call(null,G__31392));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33513 = (i + (1));
i = G__33513;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33514 = arguments.length;
var i__4737__auto___33515 = (0);
while(true){
if((i__4737__auto___33515 < len__4736__auto___33514)){
args__4742__auto__.push((arguments[i__4737__auto___33515]));

var G__33516 = (i__4737__auto___33515 + (1));
i__4737__auto___33515 = G__33516;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31401){
var map__31402 = p__31401;
var map__31402__$1 = (((((!((map__31402 == null))))?(((((map__31402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31402):map__31402);
var opts = map__31402__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31393){
var G__31394 = cljs.core.first(seq31393);
var seq31393__$1 = cljs.core.next(seq31393);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31394,seq31393__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31413 = arguments.length;
switch (G__31413) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31228__auto___33519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31450){
var state_val_31451 = (state_31450[(1)]);
if((state_val_31451 === (7))){
var inst_31446 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31460_33520 = state_31450__$1;
(statearr_31460_33520[(2)] = inst_31446);

(statearr_31460_33520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (1))){
var state_31450__$1 = state_31450;
var statearr_31461_33521 = state_31450__$1;
(statearr_31461_33521[(2)] = null);

(statearr_31461_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (4))){
var inst_31427 = (state_31450[(7)]);
var inst_31427__$1 = (state_31450[(2)]);
var inst_31429 = (inst_31427__$1 == null);
var state_31450__$1 = (function (){var statearr_31467 = state_31450;
(statearr_31467[(7)] = inst_31427__$1);

return statearr_31467;
})();
if(cljs.core.truth_(inst_31429)){
var statearr_31468_33522 = state_31450__$1;
(statearr_31468_33522[(1)] = (5));

} else {
var statearr_31469_33523 = state_31450__$1;
(statearr_31469_33523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (13))){
var state_31450__$1 = state_31450;
var statearr_31473_33524 = state_31450__$1;
(statearr_31473_33524[(2)] = null);

(statearr_31473_33524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (6))){
var inst_31427 = (state_31450[(7)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31450__$1,(11),to,inst_31427);
} else {
if((state_val_31451 === (3))){
var inst_31448 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31450__$1,inst_31448);
} else {
if((state_val_31451 === (12))){
var state_31450__$1 = state_31450;
var statearr_31476_33525 = state_31450__$1;
(statearr_31476_33525[(2)] = null);

(statearr_31476_33525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (2))){
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31450__$1,(4),from);
} else {
if((state_val_31451 === (11))){
var inst_31439 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
if(cljs.core.truth_(inst_31439)){
var statearr_31478_33527 = state_31450__$1;
(statearr_31478_33527[(1)] = (12));

} else {
var statearr_31479_33528 = state_31450__$1;
(statearr_31479_33528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (9))){
var state_31450__$1 = state_31450;
var statearr_31481_33529 = state_31450__$1;
(statearr_31481_33529[(2)] = null);

(statearr_31481_33529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (5))){
var state_31450__$1 = state_31450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31486_33530 = state_31450__$1;
(statearr_31486_33530[(1)] = (8));

} else {
var statearr_31487_33531 = state_31450__$1;
(statearr_31487_33531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (14))){
var inst_31444 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31488_33532 = state_31450__$1;
(statearr_31488_33532[(2)] = inst_31444);

(statearr_31488_33532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (10))){
var inst_31436 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31489_33534 = state_31450__$1;
(statearr_31489_33534[(2)] = inst_31436);

(statearr_31489_33534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (8))){
var inst_31433 = cljs.core.async.close_BANG_(to);
var state_31450__$1 = state_31450;
var statearr_31490_33535 = state_31450__$1;
(statearr_31490_33535[(2)] = inst_31433);

(statearr_31490_33535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_31491 = [null,null,null,null,null,null,null,null];
(statearr_31491[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_31491[(1)] = (1));

return statearr_31491;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_31450){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31450);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31492){var ex__30953__auto__ = e31492;
var statearr_31493_33536 = state_31450;
(statearr_31493_33536[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31450[(4)]))){
var statearr_31494_33537 = state_31450;
(statearr_31494_33537[(1)] = cljs.core.first((state_31450[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33539 = state_31450;
state_31450 = G__33539;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_31450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_31450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31495 = f__31229__auto__();
(statearr_31495[(6)] = c__31228__auto___33519);

return statearr_31495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31496){
var vec__31497 = p__31496;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31497,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31497,(1),null);
var job = vec__31497;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31228__auto___33541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31504){
var state_val_31505 = (state_31504[(1)]);
if((state_val_31505 === (1))){
var state_31504__$1 = state_31504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31504__$1,(2),res,v);
} else {
if((state_val_31505 === (2))){
var inst_31501 = (state_31504[(2)]);
var inst_31502 = cljs.core.async.close_BANG_(res);
var state_31504__$1 = (function (){var statearr_31506 = state_31504;
(statearr_31506[(7)] = inst_31501);

return statearr_31506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31504__$1,inst_31502);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0 = (function (){
var statearr_31507 = [null,null,null,null,null,null,null,null];
(statearr_31507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__);

(statearr_31507[(1)] = (1));

return statearr_31507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1 = (function (state_31504){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31504);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31508){var ex__30953__auto__ = e31508;
var statearr_31509_33542 = state_31504;
(statearr_31509_33542[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31504[(4)]))){
var statearr_31510_33543 = state_31504;
(statearr_31510_33543[(1)] = cljs.core.first((state_31504[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33544 = state_31504;
state_31504 = G__33544;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = function(state_31504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1.call(this,state_31504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31511 = f__31229__auto__();
(statearr_31511[(6)] = c__31228__auto___33541);

return statearr_31511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31512){
var vec__31513 = p__31512;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31513,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31513,(1),null);
var job = vec__31513;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___33546 = n;
var __33547 = (0);
while(true){
if((__33547 < n__4613__auto___33546)){
var G__31522_33548 = type;
var G__31522_33549__$1 = (((G__31522_33548 instanceof cljs.core.Keyword))?G__31522_33548.fqn:null);
switch (G__31522_33549__$1) {
case "compute":
var c__31228__auto___33552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33547,c__31228__auto___33552,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async){
return (function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = ((function (__33547,c__31228__auto___33552,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async){
return (function (state_31535){
var state_val_31536 = (state_31535[(1)]);
if((state_val_31536 === (1))){
var state_31535__$1 = state_31535;
var statearr_31537_33553 = state_31535__$1;
(statearr_31537_33553[(2)] = null);

(statearr_31537_33553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (2))){
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31535__$1,(4),jobs);
} else {
if((state_val_31536 === (3))){
var inst_31533 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31535__$1,inst_31533);
} else {
if((state_val_31536 === (4))){
var inst_31525 = (state_31535[(2)]);
var inst_31526 = process(inst_31525);
var state_31535__$1 = state_31535;
if(cljs.core.truth_(inst_31526)){
var statearr_31538_33554 = state_31535__$1;
(statearr_31538_33554[(1)] = (5));

} else {
var statearr_31539_33555 = state_31535__$1;
(statearr_31539_33555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (5))){
var state_31535__$1 = state_31535;
var statearr_31540_33556 = state_31535__$1;
(statearr_31540_33556[(2)] = null);

(statearr_31540_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (6))){
var state_31535__$1 = state_31535;
var statearr_31541_33557 = state_31535__$1;
(statearr_31541_33557[(2)] = null);

(statearr_31541_33557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (7))){
var inst_31531 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31542_33558 = state_31535__$1;
(statearr_31542_33558[(2)] = inst_31531);

(statearr_31542_33558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33547,c__31228__auto___33552,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async))
;
return ((function (__33547,switch__30949__auto__,c__31228__auto___33552,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0 = (function (){
var statearr_31543 = [null,null,null,null,null,null,null];
(statearr_31543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__);

(statearr_31543[(1)] = (1));

return statearr_31543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1 = (function (state_31535){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31535);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31544){var ex__30953__auto__ = e31544;
var statearr_31545_33559 = state_31535;
(statearr_31545_33559[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31535[(4)]))){
var statearr_31546_33560 = state_31535;
(statearr_31546_33560[(1)] = cljs.core.first((state_31535[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33561 = state_31535;
state_31535 = G__33561;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = function(state_31535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1.call(this,state_31535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__;
})()
;})(__33547,switch__30949__auto__,c__31228__auto___33552,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async))
})();
var state__31230__auto__ = (function (){var statearr_31548 = f__31229__auto__();
(statearr_31548[(6)] = c__31228__auto___33552);

return statearr_31548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
});})(__33547,c__31228__auto___33552,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async))
);


break;
case "async":
var c__31228__auto___33562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33547,c__31228__auto___33562,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async){
return (function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = ((function (__33547,c__31228__auto___33562,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async){
return (function (state_31562){
var state_val_31563 = (state_31562[(1)]);
if((state_val_31563 === (1))){
var state_31562__$1 = state_31562;
var statearr_31564_33563 = state_31562__$1;
(statearr_31564_33563[(2)] = null);

(statearr_31564_33563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (2))){
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31562__$1,(4),jobs);
} else {
if((state_val_31563 === (3))){
var inst_31560 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31562__$1,inst_31560);
} else {
if((state_val_31563 === (4))){
var inst_31552 = (state_31562[(2)]);
var inst_31553 = async(inst_31552);
var state_31562__$1 = state_31562;
if(cljs.core.truth_(inst_31553)){
var statearr_31565_33566 = state_31562__$1;
(statearr_31565_33566[(1)] = (5));

} else {
var statearr_31566_33567 = state_31562__$1;
(statearr_31566_33567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (5))){
var state_31562__$1 = state_31562;
var statearr_31567_33568 = state_31562__$1;
(statearr_31567_33568[(2)] = null);

(statearr_31567_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (6))){
var state_31562__$1 = state_31562;
var statearr_31568_33569 = state_31562__$1;
(statearr_31568_33569[(2)] = null);

(statearr_31568_33569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (7))){
var inst_31558 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
var statearr_31569_33570 = state_31562__$1;
(statearr_31569_33570[(2)] = inst_31558);

(statearr_31569_33570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33547,c__31228__auto___33562,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async))
;
return ((function (__33547,switch__30949__auto__,c__31228__auto___33562,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0 = (function (){
var statearr_31573 = [null,null,null,null,null,null,null];
(statearr_31573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__);

(statearr_31573[(1)] = (1));

return statearr_31573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1 = (function (state_31562){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31562);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31574){var ex__30953__auto__ = e31574;
var statearr_31575_33571 = state_31562;
(statearr_31575_33571[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31562[(4)]))){
var statearr_31576_33572 = state_31562;
(statearr_31576_33572[(1)] = cljs.core.first((state_31562[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33573 = state_31562;
state_31562 = G__33573;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = function(state_31562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1.call(this,state_31562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__;
})()
;})(__33547,switch__30949__auto__,c__31228__auto___33562,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async))
})();
var state__31230__auto__ = (function (){var statearr_31577 = f__31229__auto__();
(statearr_31577[(6)] = c__31228__auto___33562);

return statearr_31577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
});})(__33547,c__31228__auto___33562,G__31522_33548,G__31522_33549__$1,n__4613__auto___33546,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31522_33549__$1)].join('')));

}

var G__33574 = (__33547 + (1));
__33547 = G__33574;
continue;
} else {
}
break;
}

var c__31228__auto___33575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31599){
var state_val_31600 = (state_31599[(1)]);
if((state_val_31600 === (7))){
var inst_31595 = (state_31599[(2)]);
var state_31599__$1 = state_31599;
var statearr_31602_33576 = state_31599__$1;
(statearr_31602_33576[(2)] = inst_31595);

(statearr_31602_33576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (1))){
var state_31599__$1 = state_31599;
var statearr_31605_33577 = state_31599__$1;
(statearr_31605_33577[(2)] = null);

(statearr_31605_33577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (4))){
var inst_31580 = (state_31599[(7)]);
var inst_31580__$1 = (state_31599[(2)]);
var inst_31581 = (inst_31580__$1 == null);
var state_31599__$1 = (function (){var statearr_31606 = state_31599;
(statearr_31606[(7)] = inst_31580__$1);

return statearr_31606;
})();
if(cljs.core.truth_(inst_31581)){
var statearr_31607_33578 = state_31599__$1;
(statearr_31607_33578[(1)] = (5));

} else {
var statearr_31608_33579 = state_31599__$1;
(statearr_31608_33579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (6))){
var inst_31580 = (state_31599[(7)]);
var inst_31585 = (state_31599[(8)]);
var inst_31585__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31587 = [inst_31580,inst_31585__$1];
var inst_31588 = (new cljs.core.PersistentVector(null,2,(5),inst_31586,inst_31587,null));
var state_31599__$1 = (function (){var statearr_31609 = state_31599;
(statearr_31609[(8)] = inst_31585__$1);

return statearr_31609;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31599__$1,(8),jobs,inst_31588);
} else {
if((state_val_31600 === (3))){
var inst_31597 = (state_31599[(2)]);
var state_31599__$1 = state_31599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31599__$1,inst_31597);
} else {
if((state_val_31600 === (2))){
var state_31599__$1 = state_31599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31599__$1,(4),from);
} else {
if((state_val_31600 === (9))){
var inst_31592 = (state_31599[(2)]);
var state_31599__$1 = (function (){var statearr_31612 = state_31599;
(statearr_31612[(9)] = inst_31592);

return statearr_31612;
})();
var statearr_31613_33581 = state_31599__$1;
(statearr_31613_33581[(2)] = null);

(statearr_31613_33581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (5))){
var inst_31583 = cljs.core.async.close_BANG_(jobs);
var state_31599__$1 = state_31599;
var statearr_31614_33583 = state_31599__$1;
(statearr_31614_33583[(2)] = inst_31583);

(statearr_31614_33583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (8))){
var inst_31585 = (state_31599[(8)]);
var inst_31590 = (state_31599[(2)]);
var state_31599__$1 = (function (){var statearr_31615 = state_31599;
(statearr_31615[(10)] = inst_31590);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31599__$1,(9),results,inst_31585);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0 = (function (){
var statearr_31616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__);

(statearr_31616[(1)] = (1));

return statearr_31616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1 = (function (state_31599){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31599);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31617){var ex__30953__auto__ = e31617;
var statearr_31618_33584 = state_31599;
(statearr_31618_33584[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31599[(4)]))){
var statearr_31619_33585 = state_31599;
(statearr_31619_33585[(1)] = cljs.core.first((state_31599[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33586 = state_31599;
state_31599 = G__33586;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = function(state_31599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1.call(this,state_31599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31624 = f__31229__auto__();
(statearr_31624[(6)] = c__31228__auto___33575);

return statearr_31624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


var c__31228__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (7))){
var inst_31666 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31672_33587 = state_31670__$1;
(statearr_31672_33587[(2)] = inst_31666);

(statearr_31672_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (20))){
var state_31670__$1 = state_31670;
var statearr_31673_33588 = state_31670__$1;
(statearr_31673_33588[(2)] = null);

(statearr_31673_33588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (1))){
var state_31670__$1 = state_31670;
var statearr_31675_33589 = state_31670__$1;
(statearr_31675_33589[(2)] = null);

(statearr_31675_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (4))){
var inst_31627 = (state_31670[(7)]);
var inst_31627__$1 = (state_31670[(2)]);
var inst_31628 = (inst_31627__$1 == null);
var state_31670__$1 = (function (){var statearr_31676 = state_31670;
(statearr_31676[(7)] = inst_31627__$1);

return statearr_31676;
})();
if(cljs.core.truth_(inst_31628)){
var statearr_31677_33590 = state_31670__$1;
(statearr_31677_33590[(1)] = (5));

} else {
var statearr_31678_33591 = state_31670__$1;
(statearr_31678_33591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (15))){
var inst_31648 = (state_31670[(8)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31670__$1,(18),to,inst_31648);
} else {
if((state_val_31671 === (21))){
var inst_31661 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31683_33592 = state_31670__$1;
(statearr_31683_33592[(2)] = inst_31661);

(statearr_31683_33592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (13))){
var inst_31663 = (state_31670[(2)]);
var state_31670__$1 = (function (){var statearr_31690 = state_31670;
(statearr_31690[(9)] = inst_31663);

return statearr_31690;
})();
var statearr_31691_33593 = state_31670__$1;
(statearr_31691_33593[(2)] = null);

(statearr_31691_33593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (6))){
var inst_31627 = (state_31670[(7)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31670__$1,(11),inst_31627);
} else {
if((state_val_31671 === (17))){
var inst_31656 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31656)){
var statearr_31692_33594 = state_31670__$1;
(statearr_31692_33594[(1)] = (19));

} else {
var statearr_31694_33595 = state_31670__$1;
(statearr_31694_33595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (3))){
var inst_31668 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (12))){
var inst_31645 = (state_31670[(10)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31670__$1,(14),inst_31645);
} else {
if((state_val_31671 === (2))){
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31670__$1,(4),results);
} else {
if((state_val_31671 === (19))){
var state_31670__$1 = state_31670;
var statearr_31695_33597 = state_31670__$1;
(statearr_31695_33597[(2)] = null);

(statearr_31695_33597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (11))){
var inst_31645 = (state_31670[(2)]);
var state_31670__$1 = (function (){var statearr_31696 = state_31670;
(statearr_31696[(10)] = inst_31645);

return statearr_31696;
})();
var statearr_31697_33599 = state_31670__$1;
(statearr_31697_33599[(2)] = null);

(statearr_31697_33599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (9))){
var state_31670__$1 = state_31670;
var statearr_31698_33600 = state_31670__$1;
(statearr_31698_33600[(2)] = null);

(statearr_31698_33600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (5))){
var state_31670__$1 = state_31670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31699_33601 = state_31670__$1;
(statearr_31699_33601[(1)] = (8));

} else {
var statearr_31700_33602 = state_31670__$1;
(statearr_31700_33602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (14))){
var inst_31648 = (state_31670[(8)]);
var inst_31648__$1 = (state_31670[(2)]);
var inst_31649 = (inst_31648__$1 == null);
var inst_31650 = cljs.core.not(inst_31649);
var state_31670__$1 = (function (){var statearr_31701 = state_31670;
(statearr_31701[(8)] = inst_31648__$1);

return statearr_31701;
})();
if(inst_31650){
var statearr_31702_33603 = state_31670__$1;
(statearr_31702_33603[(1)] = (15));

} else {
var statearr_31707_33604 = state_31670__$1;
(statearr_31707_33604[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (16))){
var state_31670__$1 = state_31670;
var statearr_31712_33605 = state_31670__$1;
(statearr_31712_33605[(2)] = false);

(statearr_31712_33605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (10))){
var inst_31642 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31717_33606 = state_31670__$1;
(statearr_31717_33606[(2)] = inst_31642);

(statearr_31717_33606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (18))){
var inst_31653 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31718_33607 = state_31670__$1;
(statearr_31718_33607[(2)] = inst_31653);

(statearr_31718_33607[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (8))){
var inst_31639 = cljs.core.async.close_BANG_(to);
var state_31670__$1 = state_31670;
var statearr_31719_33608 = state_31670__$1;
(statearr_31719_33608[(2)] = inst_31639);

(statearr_31719_33608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0 = (function (){
var statearr_31721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__);

(statearr_31721[(1)] = (1));

return statearr_31721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1 = (function (state_31670){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31670);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31722){var ex__30953__auto__ = e31722;
var statearr_31723_33609 = state_31670;
(statearr_31723_33609[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31670[(4)]))){
var statearr_31724_33610 = state_31670;
(statearr_31724_33610[(1)] = cljs.core.first((state_31670[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33611 = state_31670;
state_31670 = G__33611;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31727 = f__31229__auto__();
(statearr_31727[(6)] = c__31228__auto__);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));

return c__31228__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31738 = arguments.length;
switch (G__31738) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31757 = arguments.length;
switch (G__31757) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31763 = arguments.length;
switch (G__31763) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31228__auto___33616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31794){
var state_val_31795 = (state_31794[(1)]);
if((state_val_31795 === (7))){
var inst_31789 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
var statearr_31797_33617 = state_31794__$1;
(statearr_31797_33617[(2)] = inst_31789);

(statearr_31797_33617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (1))){
var state_31794__$1 = state_31794;
var statearr_31798_33618 = state_31794__$1;
(statearr_31798_33618[(2)] = null);

(statearr_31798_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (4))){
var inst_31768 = (state_31794[(7)]);
var inst_31768__$1 = (state_31794[(2)]);
var inst_31769 = (inst_31768__$1 == null);
var state_31794__$1 = (function (){var statearr_31801 = state_31794;
(statearr_31801[(7)] = inst_31768__$1);

return statearr_31801;
})();
if(cljs.core.truth_(inst_31769)){
var statearr_31802_33619 = state_31794__$1;
(statearr_31802_33619[(1)] = (5));

} else {
var statearr_31803_33620 = state_31794__$1;
(statearr_31803_33620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (13))){
var state_31794__$1 = state_31794;
var statearr_31804_33621 = state_31794__$1;
(statearr_31804_33621[(2)] = null);

(statearr_31804_33621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (6))){
var inst_31768 = (state_31794[(7)]);
var inst_31776 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31768) : p.call(null,inst_31768));
var state_31794__$1 = state_31794;
if(cljs.core.truth_(inst_31776)){
var statearr_31805_33622 = state_31794__$1;
(statearr_31805_33622[(1)] = (9));

} else {
var statearr_31806_33623 = state_31794__$1;
(statearr_31806_33623[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (3))){
var inst_31792 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31794__$1,inst_31792);
} else {
if((state_val_31795 === (12))){
var state_31794__$1 = state_31794;
var statearr_31807_33624 = state_31794__$1;
(statearr_31807_33624[(2)] = null);

(statearr_31807_33624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (2))){
var state_31794__$1 = state_31794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31794__$1,(4),ch);
} else {
if((state_val_31795 === (11))){
var inst_31768 = (state_31794[(7)]);
var inst_31780 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31794__$1,(8),inst_31780,inst_31768);
} else {
if((state_val_31795 === (9))){
var state_31794__$1 = state_31794;
var statearr_31808_33625 = state_31794__$1;
(statearr_31808_33625[(2)] = tc);

(statearr_31808_33625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (5))){
var inst_31773 = cljs.core.async.close_BANG_(tc);
var inst_31774 = cljs.core.async.close_BANG_(fc);
var state_31794__$1 = (function (){var statearr_31809 = state_31794;
(statearr_31809[(8)] = inst_31773);

return statearr_31809;
})();
var statearr_31810_33626 = state_31794__$1;
(statearr_31810_33626[(2)] = inst_31774);

(statearr_31810_33626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (14))){
var inst_31787 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
var statearr_31811_33627 = state_31794__$1;
(statearr_31811_33627[(2)] = inst_31787);

(statearr_31811_33627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (10))){
var state_31794__$1 = state_31794;
var statearr_31812_33632 = state_31794__$1;
(statearr_31812_33632[(2)] = fc);

(statearr_31812_33632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (8))){
var inst_31782 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
if(cljs.core.truth_(inst_31782)){
var statearr_31813_33633 = state_31794__$1;
(statearr_31813_33633[(1)] = (12));

} else {
var statearr_31816_33634 = state_31794__$1;
(statearr_31816_33634[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_31817 = [null,null,null,null,null,null,null,null,null];
(statearr_31817[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_31817[(1)] = (1));

return statearr_31817;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_31794){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31794);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31818){var ex__30953__auto__ = e31818;
var statearr_31819_33635 = state_31794;
(statearr_31819_33635[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31794[(4)]))){
var statearr_31820_33636 = state_31794;
(statearr_31820_33636[(1)] = cljs.core.first((state_31794[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33637 = state_31794;
state_31794 = G__33637;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_31794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_31794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31821 = f__31229__auto__();
(statearr_31821[(6)] = c__31228__auto___33616);

return statearr_31821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31228__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31843){
var state_val_31844 = (state_31843[(1)]);
if((state_val_31844 === (7))){
var inst_31839 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31845_33638 = state_31843__$1;
(statearr_31845_33638[(2)] = inst_31839);

(statearr_31845_33638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (1))){
var inst_31822 = init;
var inst_31823 = inst_31822;
var state_31843__$1 = (function (){var statearr_31846 = state_31843;
(statearr_31846[(7)] = inst_31823);

return statearr_31846;
})();
var statearr_31847_33639 = state_31843__$1;
(statearr_31847_33639[(2)] = null);

(statearr_31847_33639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (4))){
var inst_31826 = (state_31843[(8)]);
var inst_31826__$1 = (state_31843[(2)]);
var inst_31827 = (inst_31826__$1 == null);
var state_31843__$1 = (function (){var statearr_31848 = state_31843;
(statearr_31848[(8)] = inst_31826__$1);

return statearr_31848;
})();
if(cljs.core.truth_(inst_31827)){
var statearr_31850_33640 = state_31843__$1;
(statearr_31850_33640[(1)] = (5));

} else {
var statearr_31851_33641 = state_31843__$1;
(statearr_31851_33641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (6))){
var inst_31823 = (state_31843[(7)]);
var inst_31826 = (state_31843[(8)]);
var inst_31830 = (state_31843[(9)]);
var inst_31830__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31823,inst_31826) : f.call(null,inst_31823,inst_31826));
var inst_31831 = cljs.core.reduced_QMARK_(inst_31830__$1);
var state_31843__$1 = (function (){var statearr_31852 = state_31843;
(statearr_31852[(9)] = inst_31830__$1);

return statearr_31852;
})();
if(inst_31831){
var statearr_31853_33642 = state_31843__$1;
(statearr_31853_33642[(1)] = (8));

} else {
var statearr_31854_33643 = state_31843__$1;
(statearr_31854_33643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (3))){
var inst_31841 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31843__$1,inst_31841);
} else {
if((state_val_31844 === (2))){
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31843__$1,(4),ch);
} else {
if((state_val_31844 === (9))){
var inst_31830 = (state_31843[(9)]);
var inst_31823 = inst_31830;
var state_31843__$1 = (function (){var statearr_31855 = state_31843;
(statearr_31855[(7)] = inst_31823);

return statearr_31855;
})();
var statearr_31856_33644 = state_31843__$1;
(statearr_31856_33644[(2)] = null);

(statearr_31856_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (5))){
var inst_31823 = (state_31843[(7)]);
var state_31843__$1 = state_31843;
var statearr_31857_33645 = state_31843__$1;
(statearr_31857_33645[(2)] = inst_31823);

(statearr_31857_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (10))){
var inst_31837 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31858_33646 = state_31843__$1;
(statearr_31858_33646[(2)] = inst_31837);

(statearr_31858_33646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (8))){
var inst_31830 = (state_31843[(9)]);
var inst_31833 = cljs.core.deref(inst_31830);
var state_31843__$1 = state_31843;
var statearr_31859_33647 = state_31843__$1;
(statearr_31859_33647[(2)] = inst_31833);

(statearr_31859_33647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30950__auto____0 = (function (){
var statearr_31861 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31861[(0)] = cljs$core$async$reduce_$_state_machine__30950__auto__);

(statearr_31861[(1)] = (1));

return statearr_31861;
});
var cljs$core$async$reduce_$_state_machine__30950__auto____1 = (function (state_31843){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31843);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31862){var ex__30953__auto__ = e31862;
var statearr_31863_33648 = state_31843;
(statearr_31863_33648[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31843[(4)]))){
var statearr_31865_33649 = state_31843;
(statearr_31865_33649[(1)] = cljs.core.first((state_31843[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33650 = state_31843;
state_31843 = G__33650;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30950__auto__ = function(state_31843){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30950__auto____1.call(this,state_31843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30950__auto____0;
cljs$core$async$reduce_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30950__auto____1;
return cljs$core$async$reduce_$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31866 = f__31229__auto__();
(statearr_31866[(6)] = c__31228__auto__);

return statearr_31866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));

return c__31228__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31228__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31872){
var state_val_31873 = (state_31872[(1)]);
if((state_val_31873 === (1))){
var inst_31867 = cljs.core.async.reduce(f__$1,init,ch);
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31872__$1,(2),inst_31867);
} else {
if((state_val_31873 === (2))){
var inst_31869 = (state_31872[(2)]);
var inst_31870 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31869) : f__$1.call(null,inst_31869));
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31872__$1,inst_31870);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30950__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30950__auto____0 = (function (){
var statearr_31874 = [null,null,null,null,null,null,null];
(statearr_31874[(0)] = cljs$core$async$transduce_$_state_machine__30950__auto__);

(statearr_31874[(1)] = (1));

return statearr_31874;
});
var cljs$core$async$transduce_$_state_machine__30950__auto____1 = (function (state_31872){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31872);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31875){var ex__30953__auto__ = e31875;
var statearr_31876_33653 = state_31872;
(statearr_31876_33653[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31872[(4)]))){
var statearr_31878_33654 = state_31872;
(statearr_31878_33654[(1)] = cljs.core.first((state_31872[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33655 = state_31872;
state_31872 = G__33655;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30950__auto__ = function(state_31872){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30950__auto____1.call(this,state_31872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30950__auto____0;
cljs$core$async$transduce_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30950__auto____1;
return cljs$core$async$transduce_$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31880 = f__31229__auto__();
(statearr_31880[(6)] = c__31228__auto__);

return statearr_31880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));

return c__31228__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31882 = arguments.length;
switch (G__31882) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31228__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_31907){
var state_val_31908 = (state_31907[(1)]);
if((state_val_31908 === (7))){
var inst_31889 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31909_33657 = state_31907__$1;
(statearr_31909_33657[(2)] = inst_31889);

(statearr_31909_33657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (1))){
var inst_31883 = cljs.core.seq(coll);
var inst_31884 = inst_31883;
var state_31907__$1 = (function (){var statearr_31910 = state_31907;
(statearr_31910[(7)] = inst_31884);

return statearr_31910;
})();
var statearr_31911_33658 = state_31907__$1;
(statearr_31911_33658[(2)] = null);

(statearr_31911_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (4))){
var inst_31884 = (state_31907[(7)]);
var inst_31887 = cljs.core.first(inst_31884);
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31907__$1,(7),ch,inst_31887);
} else {
if((state_val_31908 === (13))){
var inst_31901 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31913_33659 = state_31907__$1;
(statearr_31913_33659[(2)] = inst_31901);

(statearr_31913_33659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (6))){
var inst_31892 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
if(cljs.core.truth_(inst_31892)){
var statearr_31914_33660 = state_31907__$1;
(statearr_31914_33660[(1)] = (8));

} else {
var statearr_31915_33661 = state_31907__$1;
(statearr_31915_33661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (3))){
var inst_31905 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31907__$1,inst_31905);
} else {
if((state_val_31908 === (12))){
var state_31907__$1 = state_31907;
var statearr_31916_33662 = state_31907__$1;
(statearr_31916_33662[(2)] = null);

(statearr_31916_33662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (2))){
var inst_31884 = (state_31907[(7)]);
var state_31907__$1 = state_31907;
if(cljs.core.truth_(inst_31884)){
var statearr_31917_33663 = state_31907__$1;
(statearr_31917_33663[(1)] = (4));

} else {
var statearr_31918_33664 = state_31907__$1;
(statearr_31918_33664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (11))){
var inst_31898 = cljs.core.async.close_BANG_(ch);
var state_31907__$1 = state_31907;
var statearr_31919_33665 = state_31907__$1;
(statearr_31919_33665[(2)] = inst_31898);

(statearr_31919_33665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (9))){
var state_31907__$1 = state_31907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31920_33666 = state_31907__$1;
(statearr_31920_33666[(1)] = (11));

} else {
var statearr_31921_33667 = state_31907__$1;
(statearr_31921_33667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (5))){
var inst_31884 = (state_31907[(7)]);
var state_31907__$1 = state_31907;
var statearr_31922_33668 = state_31907__$1;
(statearr_31922_33668[(2)] = inst_31884);

(statearr_31922_33668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (10))){
var inst_31903 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31923_33669 = state_31907__$1;
(statearr_31923_33669[(2)] = inst_31903);

(statearr_31923_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (8))){
var inst_31884 = (state_31907[(7)]);
var inst_31894 = cljs.core.next(inst_31884);
var inst_31884__$1 = inst_31894;
var state_31907__$1 = (function (){var statearr_31924 = state_31907;
(statearr_31924[(7)] = inst_31884__$1);

return statearr_31924;
})();
var statearr_31925_33674 = state_31907__$1;
(statearr_31925_33674[(2)] = null);

(statearr_31925_33674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_31927 = [null,null,null,null,null,null,null,null];
(statearr_31927[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_31927[(1)] = (1));

return statearr_31927;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_31907){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_31907);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e31930){var ex__30953__auto__ = e31930;
var statearr_31932_33678 = state_31907;
(statearr_31932_33678[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_31907[(4)]))){
var statearr_31933_33679 = state_31907;
(statearr_31933_33679[(1)] = cljs.core.first((state_31907[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33680 = state_31907;
state_31907 = G__33680;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_31907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_31907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_31934 = f__31229__auto__();
(statearr_31934[(6)] = c__31228__auto__);

return statearr_31934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));

return c__31228__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31937 = arguments.length;
switch (G__31937) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33685 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33685(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33689 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33689(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33690 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33690(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33691 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33691(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31953 = (function (ch,cs,meta31954){
this.ch = ch;
this.cs = cs;
this.meta31954 = meta31954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31955,meta31954__$1){
var self__ = this;
var _31955__$1 = this;
return (new cljs.core.async.t_cljs$core$async31953(self__.ch,self__.cs,meta31954__$1));
}));

(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31955){
var self__ = this;
var _31955__$1 = this;
return self__.meta31954;
}));

(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31953.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31954","meta31954",-777383324,null)], null);
}));

(cljs.core.async.t_cljs$core$async31953.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31953");

(cljs.core.async.t_cljs$core$async31953.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31953");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31953.
 */
cljs.core.async.__GT_t_cljs$core$async31953 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31953(ch__$1,cs__$1,meta31954){
return (new cljs.core.async.t_cljs$core$async31953(ch__$1,cs__$1,meta31954));
});

}

return (new cljs.core.async.t_cljs$core$async31953(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31228__auto___33702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_32110){
var state_val_32111 = (state_32110[(1)]);
if((state_val_32111 === (7))){
var inst_32106 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32112_33703 = state_32110__$1;
(statearr_32112_33703[(2)] = inst_32106);

(statearr_32112_33703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (20))){
var inst_32006 = (state_32110[(7)]);
var inst_32018 = cljs.core.first(inst_32006);
var inst_32019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32018,(0),null);
var inst_32020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32018,(1),null);
var state_32110__$1 = (function (){var statearr_32113 = state_32110;
(statearr_32113[(8)] = inst_32019);

return statearr_32113;
})();
if(cljs.core.truth_(inst_32020)){
var statearr_32114_33704 = state_32110__$1;
(statearr_32114_33704[(1)] = (22));

} else {
var statearr_32115_33705 = state_32110__$1;
(statearr_32115_33705[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (27))){
var inst_32049 = (state_32110[(9)]);
var inst_32056 = (state_32110[(10)]);
var inst_31968 = (state_32110[(11)]);
var inst_32051 = (state_32110[(12)]);
var inst_32056__$1 = cljs.core._nth(inst_32049,inst_32051);
var inst_32057 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32056__$1,inst_31968,done);
var state_32110__$1 = (function (){var statearr_32119 = state_32110;
(statearr_32119[(10)] = inst_32056__$1);

return statearr_32119;
})();
if(cljs.core.truth_(inst_32057)){
var statearr_32120_33706 = state_32110__$1;
(statearr_32120_33706[(1)] = (30));

} else {
var statearr_32121_33707 = state_32110__$1;
(statearr_32121_33707[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (1))){
var state_32110__$1 = state_32110;
var statearr_32122_33708 = state_32110__$1;
(statearr_32122_33708[(2)] = null);

(statearr_32122_33708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (24))){
var inst_32006 = (state_32110[(7)]);
var inst_32026 = (state_32110[(2)]);
var inst_32027 = cljs.core.next(inst_32006);
var inst_31977 = inst_32027;
var inst_31978 = null;
var inst_31979 = (0);
var inst_31980 = (0);
var state_32110__$1 = (function (){var statearr_32136 = state_32110;
(statearr_32136[(13)] = inst_31977);

(statearr_32136[(14)] = inst_31979);

(statearr_32136[(15)] = inst_31980);

(statearr_32136[(16)] = inst_32026);

(statearr_32136[(17)] = inst_31978);

return statearr_32136;
})();
var statearr_32137_33712 = state_32110__$1;
(statearr_32137_33712[(2)] = null);

(statearr_32137_33712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (39))){
var state_32110__$1 = state_32110;
var statearr_32141_33713 = state_32110__$1;
(statearr_32141_33713[(2)] = null);

(statearr_32141_33713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (4))){
var inst_31968 = (state_32110[(11)]);
var inst_31968__$1 = (state_32110[(2)]);
var inst_31969 = (inst_31968__$1 == null);
var state_32110__$1 = (function (){var statearr_32143 = state_32110;
(statearr_32143[(11)] = inst_31968__$1);

return statearr_32143;
})();
if(cljs.core.truth_(inst_31969)){
var statearr_32144_33717 = state_32110__$1;
(statearr_32144_33717[(1)] = (5));

} else {
var statearr_32145_33718 = state_32110__$1;
(statearr_32145_33718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (15))){
var inst_31977 = (state_32110[(13)]);
var inst_31979 = (state_32110[(14)]);
var inst_31980 = (state_32110[(15)]);
var inst_31978 = (state_32110[(17)]);
var inst_31997 = (state_32110[(2)]);
var inst_31998 = (inst_31980 + (1));
var tmp32138 = inst_31977;
var tmp32139 = inst_31979;
var tmp32140 = inst_31978;
var inst_31977__$1 = tmp32138;
var inst_31978__$1 = tmp32140;
var inst_31979__$1 = tmp32139;
var inst_31980__$1 = inst_31998;
var state_32110__$1 = (function (){var statearr_32147 = state_32110;
(statearr_32147[(18)] = inst_31997);

(statearr_32147[(13)] = inst_31977__$1);

(statearr_32147[(14)] = inst_31979__$1);

(statearr_32147[(15)] = inst_31980__$1);

(statearr_32147[(17)] = inst_31978__$1);

return statearr_32147;
})();
var statearr_32148_33719 = state_32110__$1;
(statearr_32148_33719[(2)] = null);

(statearr_32148_33719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (21))){
var inst_32030 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32152_33720 = state_32110__$1;
(statearr_32152_33720[(2)] = inst_32030);

(statearr_32152_33720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (31))){
var inst_32056 = (state_32110[(10)]);
var inst_32064 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32056);
var state_32110__$1 = state_32110;
var statearr_32157_33724 = state_32110__$1;
(statearr_32157_33724[(2)] = inst_32064);

(statearr_32157_33724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (32))){
var inst_32050 = (state_32110[(19)]);
var inst_32049 = (state_32110[(9)]);
var inst_32048 = (state_32110[(20)]);
var inst_32051 = (state_32110[(12)]);
var inst_32066 = (state_32110[(2)]);
var inst_32067 = (inst_32051 + (1));
var tmp32149 = inst_32050;
var tmp32150 = inst_32049;
var tmp32151 = inst_32048;
var inst_32048__$1 = tmp32151;
var inst_32049__$1 = tmp32150;
var inst_32050__$1 = tmp32149;
var inst_32051__$1 = inst_32067;
var state_32110__$1 = (function (){var statearr_32160 = state_32110;
(statearr_32160[(19)] = inst_32050__$1);

(statearr_32160[(9)] = inst_32049__$1);

(statearr_32160[(20)] = inst_32048__$1);

(statearr_32160[(12)] = inst_32051__$1);

(statearr_32160[(21)] = inst_32066);

return statearr_32160;
})();
var statearr_32163_33726 = state_32110__$1;
(statearr_32163_33726[(2)] = null);

(statearr_32163_33726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (40))){
var inst_32079 = (state_32110[(22)]);
var inst_32083 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32079);
var state_32110__$1 = state_32110;
var statearr_32165_33727 = state_32110__$1;
(statearr_32165_33727[(2)] = inst_32083);

(statearr_32165_33727[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (33))){
var inst_32070 = (state_32110[(23)]);
var inst_32072 = cljs.core.chunked_seq_QMARK_(inst_32070);
var state_32110__$1 = state_32110;
if(inst_32072){
var statearr_32170_33728 = state_32110__$1;
(statearr_32170_33728[(1)] = (36));

} else {
var statearr_32171_33729 = state_32110__$1;
(statearr_32171_33729[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (13))){
var inst_31990 = (state_32110[(24)]);
var inst_31994 = cljs.core.async.close_BANG_(inst_31990);
var state_32110__$1 = state_32110;
var statearr_32181_33730 = state_32110__$1;
(statearr_32181_33730[(2)] = inst_31994);

(statearr_32181_33730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (22))){
var inst_32019 = (state_32110[(8)]);
var inst_32023 = cljs.core.async.close_BANG_(inst_32019);
var state_32110__$1 = state_32110;
var statearr_32183_33731 = state_32110__$1;
(statearr_32183_33731[(2)] = inst_32023);

(statearr_32183_33731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (36))){
var inst_32070 = (state_32110[(23)]);
var inst_32074 = cljs.core.chunk_first(inst_32070);
var inst_32075 = cljs.core.chunk_rest(inst_32070);
var inst_32076 = cljs.core.count(inst_32074);
var inst_32048 = inst_32075;
var inst_32049 = inst_32074;
var inst_32050 = inst_32076;
var inst_32051 = (0);
var state_32110__$1 = (function (){var statearr_32185 = state_32110;
(statearr_32185[(19)] = inst_32050);

(statearr_32185[(9)] = inst_32049);

(statearr_32185[(20)] = inst_32048);

(statearr_32185[(12)] = inst_32051);

return statearr_32185;
})();
var statearr_32192_33732 = state_32110__$1;
(statearr_32192_33732[(2)] = null);

(statearr_32192_33732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (41))){
var inst_32070 = (state_32110[(23)]);
var inst_32085 = (state_32110[(2)]);
var inst_32086 = cljs.core.next(inst_32070);
var inst_32048 = inst_32086;
var inst_32049 = null;
var inst_32050 = (0);
var inst_32051 = (0);
var state_32110__$1 = (function (){var statearr_32193 = state_32110;
(statearr_32193[(19)] = inst_32050);

(statearr_32193[(9)] = inst_32049);

(statearr_32193[(20)] = inst_32048);

(statearr_32193[(12)] = inst_32051);

(statearr_32193[(25)] = inst_32085);

return statearr_32193;
})();
var statearr_32194_33733 = state_32110__$1;
(statearr_32194_33733[(2)] = null);

(statearr_32194_33733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (43))){
var state_32110__$1 = state_32110;
var statearr_32195_33742 = state_32110__$1;
(statearr_32195_33742[(2)] = null);

(statearr_32195_33742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (29))){
var inst_32094 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32204_33744 = state_32110__$1;
(statearr_32204_33744[(2)] = inst_32094);

(statearr_32204_33744[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (44))){
var inst_32103 = (state_32110[(2)]);
var state_32110__$1 = (function (){var statearr_32209 = state_32110;
(statearr_32209[(26)] = inst_32103);

return statearr_32209;
})();
var statearr_32210_33745 = state_32110__$1;
(statearr_32210_33745[(2)] = null);

(statearr_32210_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (6))){
var inst_32040 = (state_32110[(27)]);
var inst_32039 = cljs.core.deref(cs);
var inst_32040__$1 = cljs.core.keys(inst_32039);
var inst_32041 = cljs.core.count(inst_32040__$1);
var inst_32042 = cljs.core.reset_BANG_(dctr,inst_32041);
var inst_32047 = cljs.core.seq(inst_32040__$1);
var inst_32048 = inst_32047;
var inst_32049 = null;
var inst_32050 = (0);
var inst_32051 = (0);
var state_32110__$1 = (function (){var statearr_32212 = state_32110;
(statearr_32212[(19)] = inst_32050);

(statearr_32212[(9)] = inst_32049);

(statearr_32212[(20)] = inst_32048);

(statearr_32212[(28)] = inst_32042);

(statearr_32212[(12)] = inst_32051);

(statearr_32212[(27)] = inst_32040__$1);

return statearr_32212;
})();
var statearr_32213_33746 = state_32110__$1;
(statearr_32213_33746[(2)] = null);

(statearr_32213_33746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (28))){
var inst_32070 = (state_32110[(23)]);
var inst_32048 = (state_32110[(20)]);
var inst_32070__$1 = cljs.core.seq(inst_32048);
var state_32110__$1 = (function (){var statearr_32215 = state_32110;
(statearr_32215[(23)] = inst_32070__$1);

return statearr_32215;
})();
if(inst_32070__$1){
var statearr_32217_33747 = state_32110__$1;
(statearr_32217_33747[(1)] = (33));

} else {
var statearr_32218_33748 = state_32110__$1;
(statearr_32218_33748[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (25))){
var inst_32050 = (state_32110[(19)]);
var inst_32051 = (state_32110[(12)]);
var inst_32053 = (inst_32051 < inst_32050);
var inst_32054 = inst_32053;
var state_32110__$1 = state_32110;
if(cljs.core.truth_(inst_32054)){
var statearr_32225_33749 = state_32110__$1;
(statearr_32225_33749[(1)] = (27));

} else {
var statearr_32226_33750 = state_32110__$1;
(statearr_32226_33750[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (34))){
var state_32110__$1 = state_32110;
var statearr_32227_33752 = state_32110__$1;
(statearr_32227_33752[(2)] = null);

(statearr_32227_33752[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (17))){
var state_32110__$1 = state_32110;
var statearr_32236_33756 = state_32110__$1;
(statearr_32236_33756[(2)] = null);

(statearr_32236_33756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (3))){
var inst_32108 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32110__$1,inst_32108);
} else {
if((state_val_32111 === (12))){
var inst_32035 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32238_33757 = state_32110__$1;
(statearr_32238_33757[(2)] = inst_32035);

(statearr_32238_33757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (2))){
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32110__$1,(4),ch);
} else {
if((state_val_32111 === (23))){
var state_32110__$1 = state_32110;
var statearr_32243_33760 = state_32110__$1;
(statearr_32243_33760[(2)] = null);

(statearr_32243_33760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (35))){
var inst_32092 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32244_33763 = state_32110__$1;
(statearr_32244_33763[(2)] = inst_32092);

(statearr_32244_33763[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (19))){
var inst_32006 = (state_32110[(7)]);
var inst_32010 = cljs.core.chunk_first(inst_32006);
var inst_32011 = cljs.core.chunk_rest(inst_32006);
var inst_32012 = cljs.core.count(inst_32010);
var inst_31977 = inst_32011;
var inst_31978 = inst_32010;
var inst_31979 = inst_32012;
var inst_31980 = (0);
var state_32110__$1 = (function (){var statearr_32266 = state_32110;
(statearr_32266[(13)] = inst_31977);

(statearr_32266[(14)] = inst_31979);

(statearr_32266[(15)] = inst_31980);

(statearr_32266[(17)] = inst_31978);

return statearr_32266;
})();
var statearr_32267_33764 = state_32110__$1;
(statearr_32267_33764[(2)] = null);

(statearr_32267_33764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (11))){
var inst_31977 = (state_32110[(13)]);
var inst_32006 = (state_32110[(7)]);
var inst_32006__$1 = cljs.core.seq(inst_31977);
var state_32110__$1 = (function (){var statearr_32268 = state_32110;
(statearr_32268[(7)] = inst_32006__$1);

return statearr_32268;
})();
if(inst_32006__$1){
var statearr_32269_33772 = state_32110__$1;
(statearr_32269_33772[(1)] = (16));

} else {
var statearr_32270_33773 = state_32110__$1;
(statearr_32270_33773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (9))){
var inst_32037 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32271_33786 = state_32110__$1;
(statearr_32271_33786[(2)] = inst_32037);

(statearr_32271_33786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (5))){
var inst_31975 = cljs.core.deref(cs);
var inst_31976 = cljs.core.seq(inst_31975);
var inst_31977 = inst_31976;
var inst_31978 = null;
var inst_31979 = (0);
var inst_31980 = (0);
var state_32110__$1 = (function (){var statearr_32273 = state_32110;
(statearr_32273[(13)] = inst_31977);

(statearr_32273[(14)] = inst_31979);

(statearr_32273[(15)] = inst_31980);

(statearr_32273[(17)] = inst_31978);

return statearr_32273;
})();
var statearr_32274_33787 = state_32110__$1;
(statearr_32274_33787[(2)] = null);

(statearr_32274_33787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (14))){
var state_32110__$1 = state_32110;
var statearr_32275_33788 = state_32110__$1;
(statearr_32275_33788[(2)] = null);

(statearr_32275_33788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (45))){
var inst_32100 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32276_33789 = state_32110__$1;
(statearr_32276_33789[(2)] = inst_32100);

(statearr_32276_33789[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (26))){
var inst_32040 = (state_32110[(27)]);
var inst_32096 = (state_32110[(2)]);
var inst_32097 = cljs.core.seq(inst_32040);
var state_32110__$1 = (function (){var statearr_32277 = state_32110;
(statearr_32277[(29)] = inst_32096);

return statearr_32277;
})();
if(inst_32097){
var statearr_32278_33790 = state_32110__$1;
(statearr_32278_33790[(1)] = (42));

} else {
var statearr_32279_33791 = state_32110__$1;
(statearr_32279_33791[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (16))){
var inst_32006 = (state_32110[(7)]);
var inst_32008 = cljs.core.chunked_seq_QMARK_(inst_32006);
var state_32110__$1 = state_32110;
if(inst_32008){
var statearr_32280_33792 = state_32110__$1;
(statearr_32280_33792[(1)] = (19));

} else {
var statearr_32281_33793 = state_32110__$1;
(statearr_32281_33793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (38))){
var inst_32089 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32283_33800 = state_32110__$1;
(statearr_32283_33800[(2)] = inst_32089);

(statearr_32283_33800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (30))){
var state_32110__$1 = state_32110;
var statearr_32285_33801 = state_32110__$1;
(statearr_32285_33801[(2)] = null);

(statearr_32285_33801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (10))){
var inst_31980 = (state_32110[(15)]);
var inst_31978 = (state_32110[(17)]);
var inst_31989 = cljs.core._nth(inst_31978,inst_31980);
var inst_31990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31989,(0),null);
var inst_31991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31989,(1),null);
var state_32110__$1 = (function (){var statearr_32286 = state_32110;
(statearr_32286[(24)] = inst_31990);

return statearr_32286;
})();
if(cljs.core.truth_(inst_31991)){
var statearr_32287_33808 = state_32110__$1;
(statearr_32287_33808[(1)] = (13));

} else {
var statearr_32288_33809 = state_32110__$1;
(statearr_32288_33809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (18))){
var inst_32033 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32289_33810 = state_32110__$1;
(statearr_32289_33810[(2)] = inst_32033);

(statearr_32289_33810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (42))){
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32110__$1,(45),dchan);
} else {
if((state_val_32111 === (37))){
var inst_32070 = (state_32110[(23)]);
var inst_32079 = (state_32110[(22)]);
var inst_31968 = (state_32110[(11)]);
var inst_32079__$1 = cljs.core.first(inst_32070);
var inst_32080 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32079__$1,inst_31968,done);
var state_32110__$1 = (function (){var statearr_32291 = state_32110;
(statearr_32291[(22)] = inst_32079__$1);

return statearr_32291;
})();
if(cljs.core.truth_(inst_32080)){
var statearr_32292_33811 = state_32110__$1;
(statearr_32292_33811[(1)] = (39));

} else {
var statearr_32293_33812 = state_32110__$1;
(statearr_32293_33812[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32111 === (8))){
var inst_31979 = (state_32110[(14)]);
var inst_31980 = (state_32110[(15)]);
var inst_31982 = (inst_31980 < inst_31979);
var inst_31983 = inst_31982;
var state_32110__$1 = state_32110;
if(cljs.core.truth_(inst_31983)){
var statearr_32294_33813 = state_32110__$1;
(statearr_32294_33813[(1)] = (10));

} else {
var statearr_32295_33814 = state_32110__$1;
(statearr_32295_33814[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30950__auto__ = null;
var cljs$core$async$mult_$_state_machine__30950__auto____0 = (function (){
var statearr_32298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32298[(0)] = cljs$core$async$mult_$_state_machine__30950__auto__);

(statearr_32298[(1)] = (1));

return statearr_32298;
});
var cljs$core$async$mult_$_state_machine__30950__auto____1 = (function (state_32110){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_32110);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e32299){var ex__30953__auto__ = e32299;
var statearr_32300_33815 = state_32110;
(statearr_32300_33815[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_32110[(4)]))){
var statearr_32306_33816 = state_32110;
(statearr_32306_33816[(1)] = cljs.core.first((state_32110[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33817 = state_32110;
state_32110 = G__33817;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30950__auto__ = function(state_32110){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30950__auto____1.call(this,state_32110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30950__auto____0;
cljs$core$async$mult_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30950__auto____1;
return cljs$core$async$mult_$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_32307 = f__31229__auto__();
(statearr_32307[(6)] = c__31228__auto___33702);

return statearr_32307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32309 = arguments.length;
switch (G__32309) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33826 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33826(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33828 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33828(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33830 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33830(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33831 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33831(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33834 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33834(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33835 = arguments.length;
var i__4737__auto___33836 = (0);
while(true){
if((i__4737__auto___33836 < len__4736__auto___33835)){
args__4742__auto__.push((arguments[i__4737__auto___33836]));

var G__33837 = (i__4737__auto___33836 + (1));
i__4737__auto___33836 = G__33837;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32332){
var map__32333 = p__32332;
var map__32333__$1 = (((((!((map__32333 == null))))?(((((map__32333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32333):map__32333);
var opts = map__32333__$1;
var statearr_32335_33838 = state;
(statearr_32335_33838[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32336_33839 = state;
(statearr_32336_33839[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32337_33840 = state;
(statearr_32337_33840[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32328){
var G__32329 = cljs.core.first(seq32328);
var seq32328__$1 = cljs.core.next(seq32328);
var G__32330 = cljs.core.first(seq32328__$1);
var seq32328__$2 = cljs.core.next(seq32328__$1);
var G__32331 = cljs.core.first(seq32328__$2);
var seq32328__$3 = cljs.core.next(seq32328__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32329,G__32330,G__32331,seq32328__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32338 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32339){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32339 = meta32339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32340,meta32339__$1){
var self__ = this;
var _32340__$1 = this;
return (new cljs.core.async.t_cljs$core$async32338(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32339__$1));
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32340){
var self__ = this;
var _32340__$1 = this;
return self__.meta32339;
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32339","meta32339",360571425,null)], null);
}));

(cljs.core.async.t_cljs$core$async32338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32338");

(cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32338.
 */
cljs.core.async.__GT_t_cljs$core$async32338 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32338(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32339){
return (new cljs.core.async.t_cljs$core$async32338(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32339));
});

}

return (new cljs.core.async.t_cljs$core$async32338(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31228__auto___33868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_32450){
var state_val_32451 = (state_32450[(1)]);
if((state_val_32451 === (7))){
var inst_32361 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32452_33869 = state_32450__$1;
(statearr_32452_33869[(2)] = inst_32361);

(statearr_32452_33869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (20))){
var inst_32373 = (state_32450[(7)]);
var state_32450__$1 = state_32450;
var statearr_32453_33870 = state_32450__$1;
(statearr_32453_33870[(2)] = inst_32373);

(statearr_32453_33870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (27))){
var state_32450__$1 = state_32450;
var statearr_32454_33871 = state_32450__$1;
(statearr_32454_33871[(2)] = null);

(statearr_32454_33871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (1))){
var inst_32347 = (state_32450[(8)]);
var inst_32347__$1 = calc_state();
var inst_32349 = (inst_32347__$1 == null);
var inst_32350 = cljs.core.not(inst_32349);
var state_32450__$1 = (function (){var statearr_32455 = state_32450;
(statearr_32455[(8)] = inst_32347__$1);

return statearr_32455;
})();
if(inst_32350){
var statearr_32456_33872 = state_32450__$1;
(statearr_32456_33872[(1)] = (2));

} else {
var statearr_32457_33873 = state_32450__$1;
(statearr_32457_33873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (24))){
var inst_32422 = (state_32450[(9)]);
var inst_32398 = (state_32450[(10)]);
var inst_32408 = (state_32450[(11)]);
var inst_32422__$1 = (inst_32398.cljs$core$IFn$_invoke$arity$1 ? inst_32398.cljs$core$IFn$_invoke$arity$1(inst_32408) : inst_32398.call(null,inst_32408));
var state_32450__$1 = (function (){var statearr_32458 = state_32450;
(statearr_32458[(9)] = inst_32422__$1);

return statearr_32458;
})();
if(cljs.core.truth_(inst_32422__$1)){
var statearr_32459_33874 = state_32450__$1;
(statearr_32459_33874[(1)] = (29));

} else {
var statearr_32462_33875 = state_32450__$1;
(statearr_32462_33875[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (4))){
var inst_32364 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32364)){
var statearr_32464_33876 = state_32450__$1;
(statearr_32464_33876[(1)] = (8));

} else {
var statearr_32465_33877 = state_32450__$1;
(statearr_32465_33877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (15))){
var inst_32392 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32392)){
var statearr_32472_33878 = state_32450__$1;
(statearr_32472_33878[(1)] = (19));

} else {
var statearr_32473_33879 = state_32450__$1;
(statearr_32473_33879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (21))){
var inst_32397 = (state_32450[(12)]);
var inst_32397__$1 = (state_32450[(2)]);
var inst_32398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32397__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32397__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32397__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32450__$1 = (function (){var statearr_32474 = state_32450;
(statearr_32474[(12)] = inst_32397__$1);

(statearr_32474[(13)] = inst_32399);

(statearr_32474[(10)] = inst_32398);

return statearr_32474;
})();
return cljs.core.async.ioc_alts_BANG_(state_32450__$1,(22),inst_32400);
} else {
if((state_val_32451 === (31))){
var inst_32431 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32431)){
var statearr_32475_33884 = state_32450__$1;
(statearr_32475_33884[(1)] = (32));

} else {
var statearr_32476_33891 = state_32450__$1;
(statearr_32476_33891[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (32))){
var inst_32407 = (state_32450[(14)]);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32450__$1,(35),out,inst_32407);
} else {
if((state_val_32451 === (33))){
var inst_32397 = (state_32450[(12)]);
var inst_32373 = inst_32397;
var state_32450__$1 = (function (){var statearr_32543 = state_32450;
(statearr_32543[(7)] = inst_32373);

return statearr_32543;
})();
var statearr_32544_33896 = state_32450__$1;
(statearr_32544_33896[(2)] = null);

(statearr_32544_33896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (13))){
var inst_32373 = (state_32450[(7)]);
var inst_32381 = inst_32373.cljs$lang$protocol_mask$partition0$;
var inst_32382 = (inst_32381 & (64));
var inst_32383 = inst_32373.cljs$core$ISeq$;
var inst_32384 = (cljs.core.PROTOCOL_SENTINEL === inst_32383);
var inst_32385 = ((inst_32382) || (inst_32384));
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32385)){
var statearr_32561_33897 = state_32450__$1;
(statearr_32561_33897[(1)] = (16));

} else {
var statearr_32562_33898 = state_32450__$1;
(statearr_32562_33898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (22))){
var inst_32407 = (state_32450[(14)]);
var inst_32408 = (state_32450[(11)]);
var inst_32406 = (state_32450[(2)]);
var inst_32407__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32406,(0),null);
var inst_32408__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32406,(1),null);
var inst_32409 = (inst_32407__$1 == null);
var inst_32410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32408__$1,change);
var inst_32411 = ((inst_32409) || (inst_32410));
var state_32450__$1 = (function (){var statearr_32563 = state_32450;
(statearr_32563[(14)] = inst_32407__$1);

(statearr_32563[(11)] = inst_32408__$1);

return statearr_32563;
})();
if(cljs.core.truth_(inst_32411)){
var statearr_32564_33899 = state_32450__$1;
(statearr_32564_33899[(1)] = (23));

} else {
var statearr_32567_33900 = state_32450__$1;
(statearr_32567_33900[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (36))){
var inst_32397 = (state_32450[(12)]);
var inst_32373 = inst_32397;
var state_32450__$1 = (function (){var statearr_32569 = state_32450;
(statearr_32569[(7)] = inst_32373);

return statearr_32569;
})();
var statearr_32570_33905 = state_32450__$1;
(statearr_32570_33905[(2)] = null);

(statearr_32570_33905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (29))){
var inst_32422 = (state_32450[(9)]);
var state_32450__$1 = state_32450;
var statearr_32571_33906 = state_32450__$1;
(statearr_32571_33906[(2)] = inst_32422);

(statearr_32571_33906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (6))){
var state_32450__$1 = state_32450;
var statearr_32573_33907 = state_32450__$1;
(statearr_32573_33907[(2)] = false);

(statearr_32573_33907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (28))){
var inst_32418 = (state_32450[(2)]);
var inst_32419 = calc_state();
var inst_32373 = inst_32419;
var state_32450__$1 = (function (){var statearr_32574 = state_32450;
(statearr_32574[(7)] = inst_32373);

(statearr_32574[(15)] = inst_32418);

return statearr_32574;
})();
var statearr_32575_33908 = state_32450__$1;
(statearr_32575_33908[(2)] = null);

(statearr_32575_33908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (25))){
var inst_32446 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32576_33909 = state_32450__$1;
(statearr_32576_33909[(2)] = inst_32446);

(statearr_32576_33909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (34))){
var inst_32444 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32579_33910 = state_32450__$1;
(statearr_32579_33910[(2)] = inst_32444);

(statearr_32579_33910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (17))){
var state_32450__$1 = state_32450;
var statearr_32580_33911 = state_32450__$1;
(statearr_32580_33911[(2)] = false);

(statearr_32580_33911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (3))){
var state_32450__$1 = state_32450;
var statearr_32582_33912 = state_32450__$1;
(statearr_32582_33912[(2)] = false);

(statearr_32582_33912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (12))){
var inst_32448 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32450__$1,inst_32448);
} else {
if((state_val_32451 === (2))){
var inst_32347 = (state_32450[(8)]);
var inst_32352 = inst_32347.cljs$lang$protocol_mask$partition0$;
var inst_32353 = (inst_32352 & (64));
var inst_32354 = inst_32347.cljs$core$ISeq$;
var inst_32355 = (cljs.core.PROTOCOL_SENTINEL === inst_32354);
var inst_32356 = ((inst_32353) || (inst_32355));
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32356)){
var statearr_32583_33919 = state_32450__$1;
(statearr_32583_33919[(1)] = (5));

} else {
var statearr_32584_33920 = state_32450__$1;
(statearr_32584_33920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (23))){
var inst_32407 = (state_32450[(14)]);
var inst_32413 = (inst_32407 == null);
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32413)){
var statearr_32585_33921 = state_32450__$1;
(statearr_32585_33921[(1)] = (26));

} else {
var statearr_32586_33922 = state_32450__$1;
(statearr_32586_33922[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (35))){
var inst_32435 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32435)){
var statearr_32587_33924 = state_32450__$1;
(statearr_32587_33924[(1)] = (36));

} else {
var statearr_32588_33928 = state_32450__$1;
(statearr_32588_33928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (19))){
var inst_32373 = (state_32450[(7)]);
var inst_32394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32373);
var state_32450__$1 = state_32450;
var statearr_32589_33929 = state_32450__$1;
(statearr_32589_33929[(2)] = inst_32394);

(statearr_32589_33929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (11))){
var inst_32373 = (state_32450[(7)]);
var inst_32378 = (inst_32373 == null);
var inst_32379 = cljs.core.not(inst_32378);
var state_32450__$1 = state_32450;
if(inst_32379){
var statearr_32590_33930 = state_32450__$1;
(statearr_32590_33930[(1)] = (13));

} else {
var statearr_32591_33931 = state_32450__$1;
(statearr_32591_33931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (9))){
var inst_32347 = (state_32450[(8)]);
var state_32450__$1 = state_32450;
var statearr_32592_33932 = state_32450__$1;
(statearr_32592_33932[(2)] = inst_32347);

(statearr_32592_33932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (5))){
var state_32450__$1 = state_32450;
var statearr_32593_33933 = state_32450__$1;
(statearr_32593_33933[(2)] = true);

(statearr_32593_33933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (14))){
var state_32450__$1 = state_32450;
var statearr_32594_33934 = state_32450__$1;
(statearr_32594_33934[(2)] = false);

(statearr_32594_33934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (26))){
var inst_32408 = (state_32450[(11)]);
var inst_32415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32408);
var state_32450__$1 = state_32450;
var statearr_32595_33939 = state_32450__$1;
(statearr_32595_33939[(2)] = inst_32415);

(statearr_32595_33939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (16))){
var state_32450__$1 = state_32450;
var statearr_32596_33940 = state_32450__$1;
(statearr_32596_33940[(2)] = true);

(statearr_32596_33940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (38))){
var inst_32440 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32597_33941 = state_32450__$1;
(statearr_32597_33941[(2)] = inst_32440);

(statearr_32597_33941[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (30))){
var inst_32399 = (state_32450[(13)]);
var inst_32398 = (state_32450[(10)]);
var inst_32408 = (state_32450[(11)]);
var inst_32426 = cljs.core.empty_QMARK_(inst_32398);
var inst_32427 = (inst_32399.cljs$core$IFn$_invoke$arity$1 ? inst_32399.cljs$core$IFn$_invoke$arity$1(inst_32408) : inst_32399.call(null,inst_32408));
var inst_32428 = cljs.core.not(inst_32427);
var inst_32429 = ((inst_32426) && (inst_32428));
var state_32450__$1 = state_32450;
var statearr_32598_33942 = state_32450__$1;
(statearr_32598_33942[(2)] = inst_32429);

(statearr_32598_33942[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (10))){
var inst_32347 = (state_32450[(8)]);
var inst_32369 = (state_32450[(2)]);
var inst_32370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32369,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32369,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32369,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32373 = inst_32347;
var state_32450__$1 = (function (){var statearr_32599 = state_32450;
(statearr_32599[(16)] = inst_32370);

(statearr_32599[(7)] = inst_32373);

(statearr_32599[(17)] = inst_32371);

(statearr_32599[(18)] = inst_32372);

return statearr_32599;
})();
var statearr_32603_33947 = state_32450__$1;
(statearr_32603_33947[(2)] = null);

(statearr_32603_33947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (18))){
var inst_32389 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32604_33952 = state_32450__$1;
(statearr_32604_33952[(2)] = inst_32389);

(statearr_32604_33952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (37))){
var state_32450__$1 = state_32450;
var statearr_32605_33953 = state_32450__$1;
(statearr_32605_33953[(2)] = null);

(statearr_32605_33953[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (8))){
var inst_32347 = (state_32450[(8)]);
var inst_32366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32347);
var state_32450__$1 = state_32450;
var statearr_32606_33954 = state_32450__$1;
(statearr_32606_33954[(2)] = inst_32366);

(statearr_32606_33954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30950__auto__ = null;
var cljs$core$async$mix_$_state_machine__30950__auto____0 = (function (){
var statearr_32607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32607[(0)] = cljs$core$async$mix_$_state_machine__30950__auto__);

(statearr_32607[(1)] = (1));

return statearr_32607;
});
var cljs$core$async$mix_$_state_machine__30950__auto____1 = (function (state_32450){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_32450);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e32608){var ex__30953__auto__ = e32608;
var statearr_32609_33957 = state_32450;
(statearr_32609_33957[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_32450[(4)]))){
var statearr_32610_33958 = state_32450;
(statearr_32610_33958[(1)] = cljs.core.first((state_32450[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33959 = state_32450;
state_32450 = G__33959;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30950__auto__ = function(state_32450){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30950__auto____1.call(this,state_32450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30950__auto____0;
cljs$core$async$mix_$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30950__auto____1;
return cljs$core$async$mix_$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_32611 = f__31229__auto__();
(statearr_32611[(6)] = c__31228__auto___33868);

return statearr_32611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33960 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33960(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33961 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33961(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33962 = (function() {
var G__33963 = null;
var G__33963__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33963__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33963 = function(p,v){
switch(arguments.length){
case 1:
return G__33963__1.call(this,p);
case 2:
return G__33963__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33963.cljs$core$IFn$_invoke$arity$1 = G__33963__1;
G__33963.cljs$core$IFn$_invoke$arity$2 = G__33963__2;
return G__33963;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32619 = arguments.length;
switch (G__32619) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33962(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33962(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32627 = arguments.length;
switch (G__32627) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32625_SHARP_){
if(cljs.core.truth_((p1__32625_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32625_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32625_SHARP_.call(null,topic)))){
return p1__32625_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32625_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32630 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32631){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32631 = meta32631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32632,meta32631__$1){
var self__ = this;
var _32632__$1 = this;
return (new cljs.core.async.t_cljs$core$async32630(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32631__$1));
}));

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32632){
var self__ = this;
var _32632__$1 = this;
return self__.meta32631;
}));

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32631","meta32631",1542743918,null)], null);
}));

(cljs.core.async.t_cljs$core$async32630.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32630");

(cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32630");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32630.
 */
cljs.core.async.__GT_t_cljs$core$async32630 = (function cljs$core$async$__GT_t_cljs$core$async32630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32631){
return (new cljs.core.async.t_cljs$core$async32630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32631));
});

}

return (new cljs.core.async.t_cljs$core$async32630(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31228__auto___34001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_32731){
var state_val_32733 = (state_32731[(1)]);
if((state_val_32733 === (7))){
var inst_32727 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32735_34002 = state_32731__$1;
(statearr_32735_34002[(2)] = inst_32727);

(statearr_32735_34002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (20))){
var state_32731__$1 = state_32731;
var statearr_32736_34003 = state_32731__$1;
(statearr_32736_34003[(2)] = null);

(statearr_32736_34003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (1))){
var state_32731__$1 = state_32731;
var statearr_32737_34010 = state_32731__$1;
(statearr_32737_34010[(2)] = null);

(statearr_32737_34010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (24))){
var inst_32710 = (state_32731[(7)]);
var inst_32719 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32710);
var state_32731__$1 = state_32731;
var statearr_32739_34011 = state_32731__$1;
(statearr_32739_34011[(2)] = inst_32719);

(statearr_32739_34011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (4))){
var inst_32656 = (state_32731[(8)]);
var inst_32656__$1 = (state_32731[(2)]);
var inst_32657 = (inst_32656__$1 == null);
var state_32731__$1 = (function (){var statearr_32740 = state_32731;
(statearr_32740[(8)] = inst_32656__$1);

return statearr_32740;
})();
if(cljs.core.truth_(inst_32657)){
var statearr_32742_34012 = state_32731__$1;
(statearr_32742_34012[(1)] = (5));

} else {
var statearr_32744_34013 = state_32731__$1;
(statearr_32744_34013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (15))){
var inst_32704 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32746_34020 = state_32731__$1;
(statearr_32746_34020[(2)] = inst_32704);

(statearr_32746_34020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (21))){
var inst_32724 = (state_32731[(2)]);
var state_32731__$1 = (function (){var statearr_32748 = state_32731;
(statearr_32748[(9)] = inst_32724);

return statearr_32748;
})();
var statearr_32749_34021 = state_32731__$1;
(statearr_32749_34021[(2)] = null);

(statearr_32749_34021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (13))){
var inst_32681 = (state_32731[(10)]);
var inst_32687 = cljs.core.chunked_seq_QMARK_(inst_32681);
var state_32731__$1 = state_32731;
if(inst_32687){
var statearr_32751_34022 = state_32731__$1;
(statearr_32751_34022[(1)] = (16));

} else {
var statearr_32752_34023 = state_32731__$1;
(statearr_32752_34023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (22))){
var inst_32716 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
if(cljs.core.truth_(inst_32716)){
var statearr_32753_34024 = state_32731__$1;
(statearr_32753_34024[(1)] = (23));

} else {
var statearr_32754_34025 = state_32731__$1;
(statearr_32754_34025[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (6))){
var inst_32656 = (state_32731[(8)]);
var inst_32712 = (state_32731[(11)]);
var inst_32710 = (state_32731[(7)]);
var inst_32710__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32656) : topic_fn.call(null,inst_32656));
var inst_32711 = cljs.core.deref(mults);
var inst_32712__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32711,inst_32710__$1);
var state_32731__$1 = (function (){var statearr_32755 = state_32731;
(statearr_32755[(11)] = inst_32712__$1);

(statearr_32755[(7)] = inst_32710__$1);

return statearr_32755;
})();
if(cljs.core.truth_(inst_32712__$1)){
var statearr_32756_34026 = state_32731__$1;
(statearr_32756_34026[(1)] = (19));

} else {
var statearr_32757_34027 = state_32731__$1;
(statearr_32757_34027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (25))){
var inst_32721 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32758_34028 = state_32731__$1;
(statearr_32758_34028[(2)] = inst_32721);

(statearr_32758_34028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (17))){
var inst_32681 = (state_32731[(10)]);
var inst_32694 = cljs.core.first(inst_32681);
var inst_32696 = cljs.core.async.muxch_STAR_(inst_32694);
var inst_32697 = cljs.core.async.close_BANG_(inst_32696);
var inst_32698 = cljs.core.next(inst_32681);
var inst_32667 = inst_32698;
var inst_32668 = null;
var inst_32669 = (0);
var inst_32670 = (0);
var state_32731__$1 = (function (){var statearr_32759 = state_32731;
(statearr_32759[(12)] = inst_32667);

(statearr_32759[(13)] = inst_32668);

(statearr_32759[(14)] = inst_32670);

(statearr_32759[(15)] = inst_32669);

(statearr_32759[(16)] = inst_32697);

return statearr_32759;
})();
var statearr_32760_34029 = state_32731__$1;
(statearr_32760_34029[(2)] = null);

(statearr_32760_34029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (3))){
var inst_32729 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32731__$1,inst_32729);
} else {
if((state_val_32733 === (12))){
var inst_32706 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32761_34030 = state_32731__$1;
(statearr_32761_34030[(2)] = inst_32706);

(statearr_32761_34030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (2))){
var state_32731__$1 = state_32731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32731__$1,(4),ch);
} else {
if((state_val_32733 === (23))){
var state_32731__$1 = state_32731;
var statearr_32762_34031 = state_32731__$1;
(statearr_32762_34031[(2)] = null);

(statearr_32762_34031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (19))){
var inst_32656 = (state_32731[(8)]);
var inst_32712 = (state_32731[(11)]);
var inst_32714 = cljs.core.async.muxch_STAR_(inst_32712);
var state_32731__$1 = state_32731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32731__$1,(22),inst_32714,inst_32656);
} else {
if((state_val_32733 === (11))){
var inst_32667 = (state_32731[(12)]);
var inst_32681 = (state_32731[(10)]);
var inst_32681__$1 = cljs.core.seq(inst_32667);
var state_32731__$1 = (function (){var statearr_32763 = state_32731;
(statearr_32763[(10)] = inst_32681__$1);

return statearr_32763;
})();
if(inst_32681__$1){
var statearr_32765_34038 = state_32731__$1;
(statearr_32765_34038[(1)] = (13));

} else {
var statearr_32766_34039 = state_32731__$1;
(statearr_32766_34039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (9))){
var inst_32708 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32767_34040 = state_32731__$1;
(statearr_32767_34040[(2)] = inst_32708);

(statearr_32767_34040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (5))){
var inst_32664 = cljs.core.deref(mults);
var inst_32665 = cljs.core.vals(inst_32664);
var inst_32666 = cljs.core.seq(inst_32665);
var inst_32667 = inst_32666;
var inst_32668 = null;
var inst_32669 = (0);
var inst_32670 = (0);
var state_32731__$1 = (function (){var statearr_32768 = state_32731;
(statearr_32768[(12)] = inst_32667);

(statearr_32768[(13)] = inst_32668);

(statearr_32768[(14)] = inst_32670);

(statearr_32768[(15)] = inst_32669);

return statearr_32768;
})();
var statearr_32769_34041 = state_32731__$1;
(statearr_32769_34041[(2)] = null);

(statearr_32769_34041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (14))){
var state_32731__$1 = state_32731;
var statearr_32773_34042 = state_32731__$1;
(statearr_32773_34042[(2)] = null);

(statearr_32773_34042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (16))){
var inst_32681 = (state_32731[(10)]);
var inst_32689 = cljs.core.chunk_first(inst_32681);
var inst_32690 = cljs.core.chunk_rest(inst_32681);
var inst_32691 = cljs.core.count(inst_32689);
var inst_32667 = inst_32690;
var inst_32668 = inst_32689;
var inst_32669 = inst_32691;
var inst_32670 = (0);
var state_32731__$1 = (function (){var statearr_32774 = state_32731;
(statearr_32774[(12)] = inst_32667);

(statearr_32774[(13)] = inst_32668);

(statearr_32774[(14)] = inst_32670);

(statearr_32774[(15)] = inst_32669);

return statearr_32774;
})();
var statearr_32775_34043 = state_32731__$1;
(statearr_32775_34043[(2)] = null);

(statearr_32775_34043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (10))){
var inst_32667 = (state_32731[(12)]);
var inst_32668 = (state_32731[(13)]);
var inst_32670 = (state_32731[(14)]);
var inst_32669 = (state_32731[(15)]);
var inst_32675 = cljs.core._nth(inst_32668,inst_32670);
var inst_32676 = cljs.core.async.muxch_STAR_(inst_32675);
var inst_32677 = cljs.core.async.close_BANG_(inst_32676);
var inst_32678 = (inst_32670 + (1));
var tmp32770 = inst_32667;
var tmp32771 = inst_32668;
var tmp32772 = inst_32669;
var inst_32667__$1 = tmp32770;
var inst_32668__$1 = tmp32771;
var inst_32669__$1 = tmp32772;
var inst_32670__$1 = inst_32678;
var state_32731__$1 = (function (){var statearr_32776 = state_32731;
(statearr_32776[(12)] = inst_32667__$1);

(statearr_32776[(13)] = inst_32668__$1);

(statearr_32776[(14)] = inst_32670__$1);

(statearr_32776[(15)] = inst_32669__$1);

(statearr_32776[(17)] = inst_32677);

return statearr_32776;
})();
var statearr_32777_34044 = state_32731__$1;
(statearr_32777_34044[(2)] = null);

(statearr_32777_34044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (18))){
var inst_32701 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32778_34045 = state_32731__$1;
(statearr_32778_34045[(2)] = inst_32701);

(statearr_32778_34045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (8))){
var inst_32670 = (state_32731[(14)]);
var inst_32669 = (state_32731[(15)]);
var inst_32672 = (inst_32670 < inst_32669);
var inst_32673 = inst_32672;
var state_32731__$1 = state_32731;
if(cljs.core.truth_(inst_32673)){
var statearr_32779_34046 = state_32731__$1;
(statearr_32779_34046[(1)] = (10));

} else {
var statearr_32780_34047 = state_32731__$1;
(statearr_32780_34047[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_32827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32827[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_32827[(1)] = (1));

return statearr_32827;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_32731){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_32731);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e32828){var ex__30953__auto__ = e32828;
var statearr_32829_34048 = state_32731;
(statearr_32829_34048[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_32731[(4)]))){
var statearr_32830_34051 = state_32731;
(statearr_32830_34051[(1)] = cljs.core.first((state_32731[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34053 = state_32731;
state_32731 = G__34053;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_32731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_32731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_32831 = f__31229__auto__();
(statearr_32831[(6)] = c__31228__auto___34001);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32833 = arguments.length;
switch (G__32833) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32835 = arguments.length;
switch (G__32835) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32839 = arguments.length;
switch (G__32839) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31228__auto___34071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (7))){
var state_32882__$1 = state_32882;
var statearr_32884_34073 = state_32882__$1;
(statearr_32884_34073[(2)] = null);

(statearr_32884_34073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (1))){
var state_32882__$1 = state_32882;
var statearr_32885_34074 = state_32882__$1;
(statearr_32885_34074[(2)] = null);

(statearr_32885_34074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (4))){
var inst_32843 = (state_32882[(7)]);
var inst_32842 = (state_32882[(8)]);
var inst_32845 = (inst_32843 < inst_32842);
var state_32882__$1 = state_32882;
if(cljs.core.truth_(inst_32845)){
var statearr_32886_34075 = state_32882__$1;
(statearr_32886_34075[(1)] = (6));

} else {
var statearr_32887_34076 = state_32882__$1;
(statearr_32887_34076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (15))){
var inst_32868 = (state_32882[(9)]);
var inst_32873 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32868);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32882__$1,(17),out,inst_32873);
} else {
if((state_val_32883 === (13))){
var inst_32868 = (state_32882[(9)]);
var inst_32868__$1 = (state_32882[(2)]);
var inst_32869 = cljs.core.some(cljs.core.nil_QMARK_,inst_32868__$1);
var state_32882__$1 = (function (){var statearr_32888 = state_32882;
(statearr_32888[(9)] = inst_32868__$1);

return statearr_32888;
})();
if(cljs.core.truth_(inst_32869)){
var statearr_32889_34077 = state_32882__$1;
(statearr_32889_34077[(1)] = (14));

} else {
var statearr_32890_34078 = state_32882__$1;
(statearr_32890_34078[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (6))){
var state_32882__$1 = state_32882;
var statearr_32891_34079 = state_32882__$1;
(statearr_32891_34079[(2)] = null);

(statearr_32891_34079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (17))){
var inst_32875 = (state_32882[(2)]);
var state_32882__$1 = (function (){var statearr_32893 = state_32882;
(statearr_32893[(10)] = inst_32875);

return statearr_32893;
})();
var statearr_32894_34080 = state_32882__$1;
(statearr_32894_34080[(2)] = null);

(statearr_32894_34080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (3))){
var inst_32880 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32882__$1,inst_32880);
} else {
if((state_val_32883 === (12))){
var _ = (function (){var statearr_32895 = state_32882;
(statearr_32895[(4)] = cljs.core.rest((state_32882[(4)])));

return statearr_32895;
})();
var state_32882__$1 = state_32882;
var ex32892 = (state_32882__$1[(2)]);
var statearr_32896_34085 = state_32882__$1;
(statearr_32896_34085[(5)] = ex32892);


if((ex32892 instanceof Object)){
var statearr_32897_34087 = state_32882__$1;
(statearr_32897_34087[(1)] = (11));

(statearr_32897_34087[(5)] = null);

} else {
throw ex32892;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (2))){
var inst_32841 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32842 = cnt;
var inst_32843 = (0);
var state_32882__$1 = (function (){var statearr_32898 = state_32882;
(statearr_32898[(7)] = inst_32843);

(statearr_32898[(8)] = inst_32842);

(statearr_32898[(11)] = inst_32841);

return statearr_32898;
})();
var statearr_32900_34088 = state_32882__$1;
(statearr_32900_34088[(2)] = null);

(statearr_32900_34088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (11))){
var inst_32847 = (state_32882[(2)]);
var inst_32848 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32882__$1 = (function (){var statearr_32901 = state_32882;
(statearr_32901[(12)] = inst_32847);

return statearr_32901;
})();
var statearr_32902_34090 = state_32882__$1;
(statearr_32902_34090[(2)] = inst_32848);

(statearr_32902_34090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (9))){
var inst_32843 = (state_32882[(7)]);
var _ = (function (){var statearr_32903 = state_32882;
(statearr_32903[(4)] = cljs.core.cons((12),(state_32882[(4)])));

return statearr_32903;
})();
var inst_32854 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32843) : chs__$1.call(null,inst_32843));
var inst_32855 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32843) : done.call(null,inst_32843));
var inst_32856 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32854,inst_32855);
var ___$1 = (function (){var statearr_32904 = state_32882;
(statearr_32904[(4)] = cljs.core.rest((state_32882[(4)])));

return statearr_32904;
})();
var state_32882__$1 = state_32882;
var statearr_32905_34091 = state_32882__$1;
(statearr_32905_34091[(2)] = inst_32856);

(statearr_32905_34091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (5))){
var inst_32866 = (state_32882[(2)]);
var state_32882__$1 = (function (){var statearr_32906 = state_32882;
(statearr_32906[(13)] = inst_32866);

return statearr_32906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32882__$1,(13),dchan);
} else {
if((state_val_32883 === (14))){
var inst_32871 = cljs.core.async.close_BANG_(out);
var state_32882__$1 = state_32882;
var statearr_32908_34092 = state_32882__$1;
(statearr_32908_34092[(2)] = inst_32871);

(statearr_32908_34092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (16))){
var inst_32878 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32912_34108 = state_32882__$1;
(statearr_32912_34108[(2)] = inst_32878);

(statearr_32912_34108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (10))){
var inst_32843 = (state_32882[(7)]);
var inst_32859 = (state_32882[(2)]);
var inst_32860 = (inst_32843 + (1));
var inst_32843__$1 = inst_32860;
var state_32882__$1 = (function (){var statearr_32913 = state_32882;
(statearr_32913[(14)] = inst_32859);

(statearr_32913[(7)] = inst_32843__$1);

return statearr_32913;
})();
var statearr_32914_34109 = state_32882__$1;
(statearr_32914_34109[(2)] = null);

(statearr_32914_34109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (8))){
var inst_32864 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32915_34110 = state_32882__$1;
(statearr_32915_34110[(2)] = inst_32864);

(statearr_32915_34110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_32916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32916[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_32916[(1)] = (1));

return statearr_32916;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_32882){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_32882);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e32917){var ex__30953__auto__ = e32917;
var statearr_32918_34111 = state_32882;
(statearr_32918_34111[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_32882[(4)]))){
var statearr_32919_34116 = state_32882;
(statearr_32919_34116[(1)] = cljs.core.first((state_32882[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34133 = state_32882;
state_32882 = G__34133;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_32923 = f__31229__auto__();
(statearr_32923[(6)] = c__31228__auto___34071);

return statearr_32923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32927 = arguments.length;
switch (G__32927) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31228__auto___34135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_32962){
var state_val_32963 = (state_32962[(1)]);
if((state_val_32963 === (7))){
var inst_32938 = (state_32962[(7)]);
var inst_32939 = (state_32962[(8)]);
var inst_32938__$1 = (state_32962[(2)]);
var inst_32939__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32938__$1,(0),null);
var inst_32940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32938__$1,(1),null);
var inst_32941 = (inst_32939__$1 == null);
var state_32962__$1 = (function (){var statearr_32968 = state_32962;
(statearr_32968[(7)] = inst_32938__$1);

(statearr_32968[(8)] = inst_32939__$1);

(statearr_32968[(9)] = inst_32940);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32941)){
var statearr_32969_34145 = state_32962__$1;
(statearr_32969_34145[(1)] = (8));

} else {
var statearr_32971_34147 = state_32962__$1;
(statearr_32971_34147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (1))){
var inst_32928 = cljs.core.vec(chs);
var inst_32929 = inst_32928;
var state_32962__$1 = (function (){var statearr_32972 = state_32962;
(statearr_32972[(10)] = inst_32929);

return statearr_32972;
})();
var statearr_32973_34179 = state_32962__$1;
(statearr_32973_34179[(2)] = null);

(statearr_32973_34179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (4))){
var inst_32929 = (state_32962[(10)]);
var state_32962__$1 = state_32962;
return cljs.core.async.ioc_alts_BANG_(state_32962__$1,(7),inst_32929);
} else {
if((state_val_32963 === (6))){
var inst_32958 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32974_34192 = state_32962__$1;
(statearr_32974_34192[(2)] = inst_32958);

(statearr_32974_34192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (3))){
var inst_32960 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32962__$1,inst_32960);
} else {
if((state_val_32963 === (2))){
var inst_32929 = (state_32962[(10)]);
var inst_32931 = cljs.core.count(inst_32929);
var inst_32932 = (inst_32931 > (0));
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32932)){
var statearr_32978_34239 = state_32962__$1;
(statearr_32978_34239[(1)] = (4));

} else {
var statearr_32979_34240 = state_32962__$1;
(statearr_32979_34240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (11))){
var inst_32929 = (state_32962[(10)]);
var inst_32948 = (state_32962[(2)]);
var tmp32977 = inst_32929;
var inst_32929__$1 = tmp32977;
var state_32962__$1 = (function (){var statearr_32980 = state_32962;
(statearr_32980[(11)] = inst_32948);

(statearr_32980[(10)] = inst_32929__$1);

return statearr_32980;
})();
var statearr_32981_34241 = state_32962__$1;
(statearr_32981_34241[(2)] = null);

(statearr_32981_34241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (9))){
var inst_32939 = (state_32962[(8)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32962__$1,(11),out,inst_32939);
} else {
if((state_val_32963 === (5))){
var inst_32955 = cljs.core.async.close_BANG_(out);
var state_32962__$1 = state_32962;
var statearr_32991_34243 = state_32962__$1;
(statearr_32991_34243[(2)] = inst_32955);

(statearr_32991_34243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (10))){
var inst_32953 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32992_34248 = state_32962__$1;
(statearr_32992_34248[(2)] = inst_32953);

(statearr_32992_34248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (8))){
var inst_32938 = (state_32962[(7)]);
var inst_32929 = (state_32962[(10)]);
var inst_32939 = (state_32962[(8)]);
var inst_32940 = (state_32962[(9)]);
var inst_32943 = (function (){var cs = inst_32929;
var vec__32934 = inst_32938;
var v = inst_32939;
var c = inst_32940;
return (function (p1__32925_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32925_SHARP_);
});
})();
var inst_32944 = cljs.core.filterv(inst_32943,inst_32929);
var inst_32929__$1 = inst_32944;
var state_32962__$1 = (function (){var statearr_32998 = state_32962;
(statearr_32998[(10)] = inst_32929__$1);

return statearr_32998;
})();
var statearr_32999_34260 = state_32962__$1;
(statearr_32999_34260[(2)] = null);

(statearr_32999_34260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_33000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33000[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_33000[(1)] = (1));

return statearr_33000;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_32962){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_32962);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e33001){var ex__30953__auto__ = e33001;
var statearr_33002_34319 = state_32962;
(statearr_33002_34319[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_32962[(4)]))){
var statearr_33003_34320 = state_32962;
(statearr_33003_34320[(1)] = cljs.core.first((state_32962[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34321 = state_32962;
state_32962 = G__34321;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_32962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_32962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_33004 = f__31229__auto__();
(statearr_33004[(6)] = c__31228__auto___34135);

return statearr_33004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33009 = arguments.length;
switch (G__33009) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31228__auto___34323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_33034){
var state_val_33035 = (state_33034[(1)]);
if((state_val_33035 === (7))){
var inst_33015 = (state_33034[(7)]);
var inst_33015__$1 = (state_33034[(2)]);
var inst_33016 = (inst_33015__$1 == null);
var inst_33017 = cljs.core.not(inst_33016);
var state_33034__$1 = (function (){var statearr_33036 = state_33034;
(statearr_33036[(7)] = inst_33015__$1);

return statearr_33036;
})();
if(inst_33017){
var statearr_33037_34332 = state_33034__$1;
(statearr_33037_34332[(1)] = (8));

} else {
var statearr_33038_34334 = state_33034__$1;
(statearr_33038_34334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (1))){
var inst_33010 = (0);
var state_33034__$1 = (function (){var statearr_33039 = state_33034;
(statearr_33039[(8)] = inst_33010);

return statearr_33039;
})();
var statearr_33041_34337 = state_33034__$1;
(statearr_33041_34337[(2)] = null);

(statearr_33041_34337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (4))){
var state_33034__$1 = state_33034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33034__$1,(7),ch);
} else {
if((state_val_33035 === (6))){
var inst_33028 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
var statearr_33043_34338 = state_33034__$1;
(statearr_33043_34338[(2)] = inst_33028);

(statearr_33043_34338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (3))){
var inst_33030 = (state_33034[(2)]);
var inst_33032 = cljs.core.async.close_BANG_(out);
var state_33034__$1 = (function (){var statearr_33044 = state_33034;
(statearr_33044[(9)] = inst_33030);

return statearr_33044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33034__$1,inst_33032);
} else {
if((state_val_33035 === (2))){
var inst_33010 = (state_33034[(8)]);
var inst_33012 = (inst_33010 < n);
var state_33034__$1 = state_33034;
if(cljs.core.truth_(inst_33012)){
var statearr_33046_34339 = state_33034__$1;
(statearr_33046_34339[(1)] = (4));

} else {
var statearr_33047_34340 = state_33034__$1;
(statearr_33047_34340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (11))){
var inst_33010 = (state_33034[(8)]);
var inst_33020 = (state_33034[(2)]);
var inst_33021 = (inst_33010 + (1));
var inst_33010__$1 = inst_33021;
var state_33034__$1 = (function (){var statearr_33048 = state_33034;
(statearr_33048[(8)] = inst_33010__$1);

(statearr_33048[(10)] = inst_33020);

return statearr_33048;
})();
var statearr_33049_34341 = state_33034__$1;
(statearr_33049_34341[(2)] = null);

(statearr_33049_34341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (9))){
var state_33034__$1 = state_33034;
var statearr_33050_34342 = state_33034__$1;
(statearr_33050_34342[(2)] = null);

(statearr_33050_34342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (5))){
var state_33034__$1 = state_33034;
var statearr_33051_34343 = state_33034__$1;
(statearr_33051_34343[(2)] = null);

(statearr_33051_34343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (10))){
var inst_33025 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
var statearr_33052_34344 = state_33034__$1;
(statearr_33052_34344[(2)] = inst_33025);

(statearr_33052_34344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (8))){
var inst_33015 = (state_33034[(7)]);
var state_33034__$1 = state_33034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33034__$1,(11),out,inst_33015);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_33053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33053[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_33053[(1)] = (1));

return statearr_33053;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_33034){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_33034);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e33054){var ex__30953__auto__ = e33054;
var statearr_33055_34361 = state_33034;
(statearr_33055_34361[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_33034[(4)]))){
var statearr_33056_34362 = state_33034;
(statearr_33056_34362[(1)] = cljs.core.first((state_33034[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34363 = state_33034;
state_33034 = G__34363;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_33034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_33034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_33057 = f__31229__auto__();
(statearr_33057[(6)] = c__31228__auto___34323);

return statearr_33057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33059 = (function (f,ch,meta33060){
this.f = f;
this.ch = ch;
this.meta33060 = meta33060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33061,meta33060__$1){
var self__ = this;
var _33061__$1 = this;
return (new cljs.core.async.t_cljs$core$async33059(self__.f,self__.ch,meta33060__$1));
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33061){
var self__ = this;
var _33061__$1 = this;
return self__.meta33060;
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33065 = (function (f,ch,meta33060,_,fn1,meta33066){
this.f = f;
this.ch = ch;
this.meta33060 = meta33060;
this._ = _;
this.fn1 = fn1;
this.meta33066 = meta33066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33067,meta33066__$1){
var self__ = this;
var _33067__$1 = this;
return (new cljs.core.async.t_cljs$core$async33065(self__.f,self__.ch,self__.meta33060,self__._,self__.fn1,meta33066__$1));
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33067){
var self__ = this;
var _33067__$1 = this;
return self__.meta33066;
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33058_SHARP_){
var G__33068 = (((p1__33058_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33058_SHARP_) : self__.f.call(null,p1__33058_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33068) : f1.call(null,G__33068));
});
}));

(cljs.core.async.t_cljs$core$async33065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33060","meta33060",1895306663,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33059","cljs.core.async/t_cljs$core$async33059",-831666323,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33066","meta33066",-1097936177,null)], null);
}));

(cljs.core.async.t_cljs$core$async33065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33065");

(cljs.core.async.t_cljs$core$async33065.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33065.
 */
cljs.core.async.__GT_t_cljs$core$async33065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33065(f__$1,ch__$1,meta33060__$1,___$2,fn1__$1,meta33066){
return (new cljs.core.async.t_cljs$core$async33065(f__$1,ch__$1,meta33060__$1,___$2,fn1__$1,meta33066));
});

}

return (new cljs.core.async.t_cljs$core$async33065(self__.f,self__.ch,self__.meta33060,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33070 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33070) : self__.f.call(null,G__33070));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33060","meta33060",1895306663,null)], null);
}));

(cljs.core.async.t_cljs$core$async33059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33059");

(cljs.core.async.t_cljs$core$async33059.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33059.
 */
cljs.core.async.__GT_t_cljs$core$async33059 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33059(f__$1,ch__$1,meta33060){
return (new cljs.core.async.t_cljs$core$async33059(f__$1,ch__$1,meta33060));
});

}

return (new cljs.core.async.t_cljs$core$async33059(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33072 = (function (f,ch,meta33073){
this.f = f;
this.ch = ch;
this.meta33073 = meta33073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33074,meta33073__$1){
var self__ = this;
var _33074__$1 = this;
return (new cljs.core.async.t_cljs$core$async33072(self__.f,self__.ch,meta33073__$1));
}));

(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33074){
var self__ = this;
var _33074__$1 = this;
return self__.meta33073;
}));

(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33073","meta33073",16885926,null)], null);
}));

(cljs.core.async.t_cljs$core$async33072.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33072");

(cljs.core.async.t_cljs$core$async33072.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33072");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33072.
 */
cljs.core.async.__GT_t_cljs$core$async33072 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33072(f__$1,ch__$1,meta33073){
return (new cljs.core.async.t_cljs$core$async33072(f__$1,ch__$1,meta33073));
});

}

return (new cljs.core.async.t_cljs$core$async33072(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33076 = (function (p,ch,meta33077){
this.p = p;
this.ch = ch;
this.meta33077 = meta33077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33078,meta33077__$1){
var self__ = this;
var _33078__$1 = this;
return (new cljs.core.async.t_cljs$core$async33076(self__.p,self__.ch,meta33077__$1));
}));

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33078){
var self__ = this;
var _33078__$1 = this;
return self__.meta33077;
}));

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33077","meta33077",1617611605,null)], null);
}));

(cljs.core.async.t_cljs$core$async33076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33076");

(cljs.core.async.t_cljs$core$async33076.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33076.
 */
cljs.core.async.__GT_t_cljs$core$async33076 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33076(p__$1,ch__$1,meta33077){
return (new cljs.core.async.t_cljs$core$async33076(p__$1,ch__$1,meta33077));
});

}

return (new cljs.core.async.t_cljs$core$async33076(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33081 = arguments.length;
switch (G__33081) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31228__auto___34394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_33102){
var state_val_33103 = (state_33102[(1)]);
if((state_val_33103 === (7))){
var inst_33098 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33104_34397 = state_33102__$1;
(statearr_33104_34397[(2)] = inst_33098);

(statearr_33104_34397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (1))){
var state_33102__$1 = state_33102;
var statearr_33105_34398 = state_33102__$1;
(statearr_33105_34398[(2)] = null);

(statearr_33105_34398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (4))){
var inst_33084 = (state_33102[(7)]);
var inst_33084__$1 = (state_33102[(2)]);
var inst_33085 = (inst_33084__$1 == null);
var state_33102__$1 = (function (){var statearr_33106 = state_33102;
(statearr_33106[(7)] = inst_33084__$1);

return statearr_33106;
})();
if(cljs.core.truth_(inst_33085)){
var statearr_33107_34399 = state_33102__$1;
(statearr_33107_34399[(1)] = (5));

} else {
var statearr_33108_34400 = state_33102__$1;
(statearr_33108_34400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (6))){
var inst_33084 = (state_33102[(7)]);
var inst_33089 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33084) : p.call(null,inst_33084));
var state_33102__$1 = state_33102;
if(cljs.core.truth_(inst_33089)){
var statearr_33109_34401 = state_33102__$1;
(statearr_33109_34401[(1)] = (8));

} else {
var statearr_33110_34402 = state_33102__$1;
(statearr_33110_34402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (3))){
var inst_33100 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33102__$1,inst_33100);
} else {
if((state_val_33103 === (2))){
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33102__$1,(4),ch);
} else {
if((state_val_33103 === (11))){
var inst_33092 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33118_34403 = state_33102__$1;
(statearr_33118_34403[(2)] = inst_33092);

(statearr_33118_34403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (9))){
var state_33102__$1 = state_33102;
var statearr_33122_34404 = state_33102__$1;
(statearr_33122_34404[(2)] = null);

(statearr_33122_34404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (5))){
var inst_33087 = cljs.core.async.close_BANG_(out);
var state_33102__$1 = state_33102;
var statearr_33123_34405 = state_33102__$1;
(statearr_33123_34405[(2)] = inst_33087);

(statearr_33123_34405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (10))){
var inst_33095 = (state_33102[(2)]);
var state_33102__$1 = (function (){var statearr_33124 = state_33102;
(statearr_33124[(8)] = inst_33095);

return statearr_33124;
})();
var statearr_33125_34406 = state_33102__$1;
(statearr_33125_34406[(2)] = null);

(statearr_33125_34406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (8))){
var inst_33084 = (state_33102[(7)]);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33102__$1,(11),out,inst_33084);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_33126 = [null,null,null,null,null,null,null,null,null];
(statearr_33126[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_33126[(1)] = (1));

return statearr_33126;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_33102){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_33102);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e33150){var ex__30953__auto__ = e33150;
var statearr_33151_34407 = state_33102;
(statearr_33151_34407[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_33102[(4)]))){
var statearr_33152_34408 = state_33102;
(statearr_33152_34408[(1)] = cljs.core.first((state_33102[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34409 = state_33102;
state_33102 = G__34409;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_33102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_33102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_33153 = f__31229__auto__();
(statearr_33153[(6)] = c__31228__auto___34394);

return statearr_33153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33155 = arguments.length;
switch (G__33155) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31228__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_33240){
var state_val_33241 = (state_33240[(1)]);
if((state_val_33241 === (7))){
var inst_33228 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33243_34411 = state_33240__$1;
(statearr_33243_34411[(2)] = inst_33228);

(statearr_33243_34411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (20))){
var inst_33198 = (state_33240[(7)]);
var inst_33209 = (state_33240[(2)]);
var inst_33210 = cljs.core.next(inst_33198);
var inst_33183 = inst_33210;
var inst_33184 = null;
var inst_33185 = (0);
var inst_33186 = (0);
var state_33240__$1 = (function (){var statearr_33244 = state_33240;
(statearr_33244[(8)] = inst_33183);

(statearr_33244[(9)] = inst_33186);

(statearr_33244[(10)] = inst_33184);

(statearr_33244[(11)] = inst_33185);

(statearr_33244[(12)] = inst_33209);

return statearr_33244;
})();
var statearr_33245_34414 = state_33240__$1;
(statearr_33245_34414[(2)] = null);

(statearr_33245_34414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (1))){
var state_33240__$1 = state_33240;
var statearr_33246_34415 = state_33240__$1;
(statearr_33246_34415[(2)] = null);

(statearr_33246_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (4))){
var inst_33168 = (state_33240[(13)]);
var inst_33168__$1 = (state_33240[(2)]);
var inst_33171 = (inst_33168__$1 == null);
var state_33240__$1 = (function (){var statearr_33247 = state_33240;
(statearr_33247[(13)] = inst_33168__$1);

return statearr_33247;
})();
if(cljs.core.truth_(inst_33171)){
var statearr_33248_34417 = state_33240__$1;
(statearr_33248_34417[(1)] = (5));

} else {
var statearr_33249_34418 = state_33240__$1;
(statearr_33249_34418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (15))){
var state_33240__$1 = state_33240;
var statearr_33253_34419 = state_33240__$1;
(statearr_33253_34419[(2)] = null);

(statearr_33253_34419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (21))){
var state_33240__$1 = state_33240;
var statearr_33254_34420 = state_33240__$1;
(statearr_33254_34420[(2)] = null);

(statearr_33254_34420[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (13))){
var inst_33183 = (state_33240[(8)]);
var inst_33186 = (state_33240[(9)]);
var inst_33184 = (state_33240[(10)]);
var inst_33185 = (state_33240[(11)]);
var inst_33194 = (state_33240[(2)]);
var inst_33195 = (inst_33186 + (1));
var tmp33250 = inst_33183;
var tmp33251 = inst_33184;
var tmp33252 = inst_33185;
var inst_33183__$1 = tmp33250;
var inst_33184__$1 = tmp33251;
var inst_33185__$1 = tmp33252;
var inst_33186__$1 = inst_33195;
var state_33240__$1 = (function (){var statearr_33255 = state_33240;
(statearr_33255[(8)] = inst_33183__$1);

(statearr_33255[(9)] = inst_33186__$1);

(statearr_33255[(10)] = inst_33184__$1);

(statearr_33255[(11)] = inst_33185__$1);

(statearr_33255[(14)] = inst_33194);

return statearr_33255;
})();
var statearr_33256_34424 = state_33240__$1;
(statearr_33256_34424[(2)] = null);

(statearr_33256_34424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (22))){
var state_33240__$1 = state_33240;
var statearr_33261_34425 = state_33240__$1;
(statearr_33261_34425[(2)] = null);

(statearr_33261_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (6))){
var inst_33168 = (state_33240[(13)]);
var inst_33181 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33168) : f.call(null,inst_33168));
var inst_33182 = cljs.core.seq(inst_33181);
var inst_33183 = inst_33182;
var inst_33184 = null;
var inst_33185 = (0);
var inst_33186 = (0);
var state_33240__$1 = (function (){var statearr_33262 = state_33240;
(statearr_33262[(8)] = inst_33183);

(statearr_33262[(9)] = inst_33186);

(statearr_33262[(10)] = inst_33184);

(statearr_33262[(11)] = inst_33185);

return statearr_33262;
})();
var statearr_33263_34426 = state_33240__$1;
(statearr_33263_34426[(2)] = null);

(statearr_33263_34426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (17))){
var inst_33198 = (state_33240[(7)]);
var inst_33202 = cljs.core.chunk_first(inst_33198);
var inst_33203 = cljs.core.chunk_rest(inst_33198);
var inst_33204 = cljs.core.count(inst_33202);
var inst_33183 = inst_33203;
var inst_33184 = inst_33202;
var inst_33185 = inst_33204;
var inst_33186 = (0);
var state_33240__$1 = (function (){var statearr_33266 = state_33240;
(statearr_33266[(8)] = inst_33183);

(statearr_33266[(9)] = inst_33186);

(statearr_33266[(10)] = inst_33184);

(statearr_33266[(11)] = inst_33185);

return statearr_33266;
})();
var statearr_33267_34427 = state_33240__$1;
(statearr_33267_34427[(2)] = null);

(statearr_33267_34427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (3))){
var inst_33230 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33240__$1,inst_33230);
} else {
if((state_val_33241 === (12))){
var inst_33218 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33269_34432 = state_33240__$1;
(statearr_33269_34432[(2)] = inst_33218);

(statearr_33269_34432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (2))){
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33240__$1,(4),in$);
} else {
if((state_val_33241 === (23))){
var inst_33226 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33270_34436 = state_33240__$1;
(statearr_33270_34436[(2)] = inst_33226);

(statearr_33270_34436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (19))){
var inst_33213 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33271_34441 = state_33240__$1;
(statearr_33271_34441[(2)] = inst_33213);

(statearr_33271_34441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (11))){
var inst_33183 = (state_33240[(8)]);
var inst_33198 = (state_33240[(7)]);
var inst_33198__$1 = cljs.core.seq(inst_33183);
var state_33240__$1 = (function (){var statearr_33273 = state_33240;
(statearr_33273[(7)] = inst_33198__$1);

return statearr_33273;
})();
if(inst_33198__$1){
var statearr_33274_34452 = state_33240__$1;
(statearr_33274_34452[(1)] = (14));

} else {
var statearr_33275_34453 = state_33240__$1;
(statearr_33275_34453[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (9))){
var inst_33220 = (state_33240[(2)]);
var inst_33221 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33240__$1 = (function (){var statearr_33278 = state_33240;
(statearr_33278[(15)] = inst_33220);

return statearr_33278;
})();
if(cljs.core.truth_(inst_33221)){
var statearr_33280_34458 = state_33240__$1;
(statearr_33280_34458[(1)] = (21));

} else {
var statearr_33281_34459 = state_33240__$1;
(statearr_33281_34459[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (5))){
var inst_33175 = cljs.core.async.close_BANG_(out);
var state_33240__$1 = state_33240;
var statearr_33282_34460 = state_33240__$1;
(statearr_33282_34460[(2)] = inst_33175);

(statearr_33282_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (14))){
var inst_33198 = (state_33240[(7)]);
var inst_33200 = cljs.core.chunked_seq_QMARK_(inst_33198);
var state_33240__$1 = state_33240;
if(inst_33200){
var statearr_33283_34461 = state_33240__$1;
(statearr_33283_34461[(1)] = (17));

} else {
var statearr_33284_34466 = state_33240__$1;
(statearr_33284_34466[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (16))){
var inst_33216 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33285_34514 = state_33240__$1;
(statearr_33285_34514[(2)] = inst_33216);

(statearr_33285_34514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (10))){
var inst_33186 = (state_33240[(9)]);
var inst_33184 = (state_33240[(10)]);
var inst_33192 = cljs.core._nth(inst_33184,inst_33186);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33240__$1,(13),out,inst_33192);
} else {
if((state_val_33241 === (18))){
var inst_33198 = (state_33240[(7)]);
var inst_33207 = cljs.core.first(inst_33198);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33240__$1,(20),out,inst_33207);
} else {
if((state_val_33241 === (8))){
var inst_33186 = (state_33240[(9)]);
var inst_33185 = (state_33240[(11)]);
var inst_33188 = (inst_33186 < inst_33185);
var inst_33189 = inst_33188;
var state_33240__$1 = state_33240;
if(cljs.core.truth_(inst_33189)){
var statearr_33286_34515 = state_33240__$1;
(statearr_33286_34515[(1)] = (10));

} else {
var statearr_33287_34516 = state_33240__$1;
(statearr_33287_34516[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30950__auto____0 = (function (){
var statearr_33288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33288[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30950__auto__);

(statearr_33288[(1)] = (1));

return statearr_33288;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30950__auto____1 = (function (state_33240){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_33240);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e33289){var ex__30953__auto__ = e33289;
var statearr_33290_34517 = state_33240;
(statearr_33290_34517[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_33240[(4)]))){
var statearr_33291_34518 = state_33240;
(statearr_33291_34518[(1)] = cljs.core.first((state_33240[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34519 = state_33240;
state_33240 = G__34519;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30950__auto__ = function(state_33240){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30950__auto____1.call(this,state_33240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_33292 = f__31229__auto__();
(statearr_33292[(6)] = c__31228__auto__);

return statearr_33292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));

return c__31228__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33294 = arguments.length;
switch (G__33294) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33296 = arguments.length;
switch (G__33296) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33298 = arguments.length;
switch (G__33298) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31228__auto___34569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_33322){
var state_val_33323 = (state_33322[(1)]);
if((state_val_33323 === (7))){
var inst_33317 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33324_34570 = state_33322__$1;
(statearr_33324_34570[(2)] = inst_33317);

(statearr_33324_34570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (1))){
var inst_33299 = null;
var state_33322__$1 = (function (){var statearr_33325 = state_33322;
(statearr_33325[(7)] = inst_33299);

return statearr_33325;
})();
var statearr_33326_34571 = state_33322__$1;
(statearr_33326_34571[(2)] = null);

(statearr_33326_34571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (4))){
var inst_33302 = (state_33322[(8)]);
var inst_33302__$1 = (state_33322[(2)]);
var inst_33303 = (inst_33302__$1 == null);
var inst_33304 = cljs.core.not(inst_33303);
var state_33322__$1 = (function (){var statearr_33327 = state_33322;
(statearr_33327[(8)] = inst_33302__$1);

return statearr_33327;
})();
if(inst_33304){
var statearr_33328_34572 = state_33322__$1;
(statearr_33328_34572[(1)] = (5));

} else {
var statearr_33329_34573 = state_33322__$1;
(statearr_33329_34573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (6))){
var state_33322__$1 = state_33322;
var statearr_33330_34574 = state_33322__$1;
(statearr_33330_34574[(2)] = null);

(statearr_33330_34574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (3))){
var inst_33319 = (state_33322[(2)]);
var inst_33320 = cljs.core.async.close_BANG_(out);
var state_33322__$1 = (function (){var statearr_33331 = state_33322;
(statearr_33331[(9)] = inst_33319);

return statearr_33331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33322__$1,inst_33320);
} else {
if((state_val_33323 === (2))){
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33322__$1,(4),ch);
} else {
if((state_val_33323 === (11))){
var inst_33302 = (state_33322[(8)]);
var inst_33311 = (state_33322[(2)]);
var inst_33299 = inst_33302;
var state_33322__$1 = (function (){var statearr_33332 = state_33322;
(statearr_33332[(7)] = inst_33299);

(statearr_33332[(10)] = inst_33311);

return statearr_33332;
})();
var statearr_33333_34577 = state_33322__$1;
(statearr_33333_34577[(2)] = null);

(statearr_33333_34577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (9))){
var inst_33302 = (state_33322[(8)]);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33322__$1,(11),out,inst_33302);
} else {
if((state_val_33323 === (5))){
var inst_33302 = (state_33322[(8)]);
var inst_33299 = (state_33322[(7)]);
var inst_33306 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33302,inst_33299);
var state_33322__$1 = state_33322;
if(inst_33306){
var statearr_33335_34582 = state_33322__$1;
(statearr_33335_34582[(1)] = (8));

} else {
var statearr_33336_34583 = state_33322__$1;
(statearr_33336_34583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (10))){
var inst_33314 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33337_34585 = state_33322__$1;
(statearr_33337_34585[(2)] = inst_33314);

(statearr_33337_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (8))){
var inst_33299 = (state_33322[(7)]);
var tmp33334 = inst_33299;
var inst_33299__$1 = tmp33334;
var state_33322__$1 = (function (){var statearr_33338 = state_33322;
(statearr_33338[(7)] = inst_33299__$1);

return statearr_33338;
})();
var statearr_33339_34589 = state_33322__$1;
(statearr_33339_34589[(2)] = null);

(statearr_33339_34589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_33340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33340[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_33340[(1)] = (1));

return statearr_33340;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_33322){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_33322);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e33341){var ex__30953__auto__ = e33341;
var statearr_33342_34595 = state_33322;
(statearr_33342_34595[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_33322[(4)]))){
var statearr_33343_34596 = state_33322;
(statearr_33343_34596[(1)] = cljs.core.first((state_33322[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34597 = state_33322;
state_33322 = G__34597;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_33322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_33322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_33344 = f__31229__auto__();
(statearr_33344[(6)] = c__31228__auto___34569);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33346 = arguments.length;
switch (G__33346) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31228__auto___34599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_33384){
var state_val_33385 = (state_33384[(1)]);
if((state_val_33385 === (7))){
var inst_33380 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
var statearr_33386_34600 = state_33384__$1;
(statearr_33386_34600[(2)] = inst_33380);

(statearr_33386_34600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (1))){
var inst_33347 = (new Array(n));
var inst_33348 = inst_33347;
var inst_33349 = (0);
var state_33384__$1 = (function (){var statearr_33387 = state_33384;
(statearr_33387[(7)] = inst_33349);

(statearr_33387[(8)] = inst_33348);

return statearr_33387;
})();
var statearr_33388_34601 = state_33384__$1;
(statearr_33388_34601[(2)] = null);

(statearr_33388_34601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (4))){
var inst_33352 = (state_33384[(9)]);
var inst_33352__$1 = (state_33384[(2)]);
var inst_33353 = (inst_33352__$1 == null);
var inst_33354 = cljs.core.not(inst_33353);
var state_33384__$1 = (function (){var statearr_33389 = state_33384;
(statearr_33389[(9)] = inst_33352__$1);

return statearr_33389;
})();
if(inst_33354){
var statearr_33390_34602 = state_33384__$1;
(statearr_33390_34602[(1)] = (5));

} else {
var statearr_33391_34603 = state_33384__$1;
(statearr_33391_34603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (15))){
var inst_33374 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
var statearr_33392_34604 = state_33384__$1;
(statearr_33392_34604[(2)] = inst_33374);

(statearr_33392_34604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (13))){
var state_33384__$1 = state_33384;
var statearr_33393_34605 = state_33384__$1;
(statearr_33393_34605[(2)] = null);

(statearr_33393_34605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (6))){
var inst_33349 = (state_33384[(7)]);
var inst_33370 = (inst_33349 > (0));
var state_33384__$1 = state_33384;
if(cljs.core.truth_(inst_33370)){
var statearr_33394_34606 = state_33384__$1;
(statearr_33394_34606[(1)] = (12));

} else {
var statearr_33395_34607 = state_33384__$1;
(statearr_33395_34607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (3))){
var inst_33382 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33384__$1,inst_33382);
} else {
if((state_val_33385 === (12))){
var inst_33348 = (state_33384[(8)]);
var inst_33372 = cljs.core.vec(inst_33348);
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33384__$1,(15),out,inst_33372);
} else {
if((state_val_33385 === (2))){
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33384__$1,(4),ch);
} else {
if((state_val_33385 === (11))){
var inst_33364 = (state_33384[(2)]);
var inst_33365 = (new Array(n));
var inst_33348 = inst_33365;
var inst_33349 = (0);
var state_33384__$1 = (function (){var statearr_33396 = state_33384;
(statearr_33396[(10)] = inst_33364);

(statearr_33396[(7)] = inst_33349);

(statearr_33396[(8)] = inst_33348);

return statearr_33396;
})();
var statearr_33397_34611 = state_33384__$1;
(statearr_33397_34611[(2)] = null);

(statearr_33397_34611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (9))){
var inst_33348 = (state_33384[(8)]);
var inst_33362 = cljs.core.vec(inst_33348);
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33384__$1,(11),out,inst_33362);
} else {
if((state_val_33385 === (5))){
var inst_33352 = (state_33384[(9)]);
var inst_33357 = (state_33384[(11)]);
var inst_33349 = (state_33384[(7)]);
var inst_33348 = (state_33384[(8)]);
var inst_33356 = (inst_33348[inst_33349] = inst_33352);
var inst_33357__$1 = (inst_33349 + (1));
var inst_33358 = (inst_33357__$1 < n);
var state_33384__$1 = (function (){var statearr_33398 = state_33384;
(statearr_33398[(12)] = inst_33356);

(statearr_33398[(11)] = inst_33357__$1);

return statearr_33398;
})();
if(cljs.core.truth_(inst_33358)){
var statearr_33399_34612 = state_33384__$1;
(statearr_33399_34612[(1)] = (8));

} else {
var statearr_33400_34613 = state_33384__$1;
(statearr_33400_34613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (14))){
var inst_33377 = (state_33384[(2)]);
var inst_33378 = cljs.core.async.close_BANG_(out);
var state_33384__$1 = (function (){var statearr_33402 = state_33384;
(statearr_33402[(13)] = inst_33377);

return statearr_33402;
})();
var statearr_33403_34614 = state_33384__$1;
(statearr_33403_34614[(2)] = inst_33378);

(statearr_33403_34614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (10))){
var inst_33368 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
var statearr_33404_34615 = state_33384__$1;
(statearr_33404_34615[(2)] = inst_33368);

(statearr_33404_34615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (8))){
var inst_33357 = (state_33384[(11)]);
var inst_33348 = (state_33384[(8)]);
var tmp33401 = inst_33348;
var inst_33348__$1 = tmp33401;
var inst_33349 = inst_33357;
var state_33384__$1 = (function (){var statearr_33405 = state_33384;
(statearr_33405[(7)] = inst_33349);

(statearr_33405[(8)] = inst_33348__$1);

return statearr_33405;
})();
var statearr_33406_34616 = state_33384__$1;
(statearr_33406_34616[(2)] = null);

(statearr_33406_34616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_33407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33407[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_33407[(1)] = (1));

return statearr_33407;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_33384){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_33384);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e33408){var ex__30953__auto__ = e33408;
var statearr_33409_34619 = state_33384;
(statearr_33409_34619[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_33384[(4)]))){
var statearr_33410_34620 = state_33384;
(statearr_33410_34620[(1)] = cljs.core.first((state_33384[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34621 = state_33384;
state_33384 = G__34621;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_33384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_33384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_33411 = f__31229__auto__();
(statearr_33411[(6)] = c__31228__auto___34599);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33413 = arguments.length;
switch (G__33413) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31228__auto___34623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31229__auto__ = (function (){var switch__30949__auto__ = (function (state_33455){
var state_val_33456 = (state_33455[(1)]);
if((state_val_33456 === (7))){
var inst_33451 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33457_34624 = state_33455__$1;
(statearr_33457_34624[(2)] = inst_33451);

(statearr_33457_34624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (1))){
var inst_33414 = [];
var inst_33415 = inst_33414;
var inst_33416 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33455__$1 = (function (){var statearr_33458 = state_33455;
(statearr_33458[(7)] = inst_33416);

(statearr_33458[(8)] = inst_33415);

return statearr_33458;
})();
var statearr_33459_34625 = state_33455__$1;
(statearr_33459_34625[(2)] = null);

(statearr_33459_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (4))){
var inst_33419 = (state_33455[(9)]);
var inst_33419__$1 = (state_33455[(2)]);
var inst_33420 = (inst_33419__$1 == null);
var inst_33421 = cljs.core.not(inst_33420);
var state_33455__$1 = (function (){var statearr_33460 = state_33455;
(statearr_33460[(9)] = inst_33419__$1);

return statearr_33460;
})();
if(inst_33421){
var statearr_33461_34626 = state_33455__$1;
(statearr_33461_34626[(1)] = (5));

} else {
var statearr_33462_34627 = state_33455__$1;
(statearr_33462_34627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (15))){
var inst_33445 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33463_34628 = state_33455__$1;
(statearr_33463_34628[(2)] = inst_33445);

(statearr_33463_34628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (13))){
var state_33455__$1 = state_33455;
var statearr_33464_34629 = state_33455__$1;
(statearr_33464_34629[(2)] = null);

(statearr_33464_34629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (6))){
var inst_33415 = (state_33455[(8)]);
var inst_33440 = inst_33415.length;
var inst_33441 = (inst_33440 > (0));
var state_33455__$1 = state_33455;
if(cljs.core.truth_(inst_33441)){
var statearr_33465_34630 = state_33455__$1;
(statearr_33465_34630[(1)] = (12));

} else {
var statearr_33466_34631 = state_33455__$1;
(statearr_33466_34631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (3))){
var inst_33453 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33455__$1,inst_33453);
} else {
if((state_val_33456 === (12))){
var inst_33415 = (state_33455[(8)]);
var inst_33443 = cljs.core.vec(inst_33415);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33455__$1,(15),out,inst_33443);
} else {
if((state_val_33456 === (2))){
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33455__$1,(4),ch);
} else {
if((state_val_33456 === (11))){
var inst_33419 = (state_33455[(9)]);
var inst_33423 = (state_33455[(10)]);
var inst_33433 = (state_33455[(2)]);
var inst_33434 = [];
var inst_33435 = inst_33434.push(inst_33419);
var inst_33415 = inst_33434;
var inst_33416 = inst_33423;
var state_33455__$1 = (function (){var statearr_33467 = state_33455;
(statearr_33467[(11)] = inst_33433);

(statearr_33467[(7)] = inst_33416);

(statearr_33467[(8)] = inst_33415);

(statearr_33467[(12)] = inst_33435);

return statearr_33467;
})();
var statearr_33468_34638 = state_33455__$1;
(statearr_33468_34638[(2)] = null);

(statearr_33468_34638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (9))){
var inst_33415 = (state_33455[(8)]);
var inst_33431 = cljs.core.vec(inst_33415);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33455__$1,(11),out,inst_33431);
} else {
if((state_val_33456 === (5))){
var inst_33419 = (state_33455[(9)]);
var inst_33416 = (state_33455[(7)]);
var inst_33423 = (state_33455[(10)]);
var inst_33423__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33419) : f.call(null,inst_33419));
var inst_33424 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33423__$1,inst_33416);
var inst_33425 = cljs.core.keyword_identical_QMARK_(inst_33416,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33426 = ((inst_33424) || (inst_33425));
var state_33455__$1 = (function (){var statearr_33469 = state_33455;
(statearr_33469[(10)] = inst_33423__$1);

return statearr_33469;
})();
if(cljs.core.truth_(inst_33426)){
var statearr_33470_34639 = state_33455__$1;
(statearr_33470_34639[(1)] = (8));

} else {
var statearr_33471_34640 = state_33455__$1;
(statearr_33471_34640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (14))){
var inst_33448 = (state_33455[(2)]);
var inst_33449 = cljs.core.async.close_BANG_(out);
var state_33455__$1 = (function (){var statearr_33473 = state_33455;
(statearr_33473[(13)] = inst_33448);

return statearr_33473;
})();
var statearr_33474_34641 = state_33455__$1;
(statearr_33474_34641[(2)] = inst_33449);

(statearr_33474_34641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (10))){
var inst_33438 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33475_34642 = state_33455__$1;
(statearr_33475_34642[(2)] = inst_33438);

(statearr_33475_34642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (8))){
var inst_33419 = (state_33455[(9)]);
var inst_33415 = (state_33455[(8)]);
var inst_33423 = (state_33455[(10)]);
var inst_33428 = inst_33415.push(inst_33419);
var tmp33472 = inst_33415;
var inst_33415__$1 = tmp33472;
var inst_33416 = inst_33423;
var state_33455__$1 = (function (){var statearr_33476 = state_33455;
(statearr_33476[(14)] = inst_33428);

(statearr_33476[(7)] = inst_33416);

(statearr_33476[(8)] = inst_33415__$1);

return statearr_33476;
})();
var statearr_33477_34653 = state_33455__$1;
(statearr_33477_34653[(2)] = null);

(statearr_33477_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30950__auto__ = null;
var cljs$core$async$state_machine__30950__auto____0 = (function (){
var statearr_33478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33478[(0)] = cljs$core$async$state_machine__30950__auto__);

(statearr_33478[(1)] = (1));

return statearr_33478;
});
var cljs$core$async$state_machine__30950__auto____1 = (function (state_33455){
while(true){
var ret_value__30951__auto__ = (function (){try{while(true){
var result__30952__auto__ = switch__30949__auto__(state_33455);
if(cljs.core.keyword_identical_QMARK_(result__30952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30952__auto__;
}
break;
}
}catch (e33479){var ex__30953__auto__ = e33479;
var statearr_33480_34654 = state_33455;
(statearr_33480_34654[(2)] = ex__30953__auto__);


if(cljs.core.seq((state_33455[(4)]))){
var statearr_33481_34655 = state_33455;
(statearr_33481_34655[(1)] = cljs.core.first((state_33455[(4)])));

} else {
throw ex__30953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34656 = state_33455;
state_33455 = G__34656;
continue;
} else {
return ret_value__30951__auto__;
}
break;
}
});
cljs$core$async$state_machine__30950__auto__ = function(state_33455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30950__auto____1.call(this,state_33455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30950__auto____0;
cljs$core$async$state_machine__30950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30950__auto____1;
return cljs$core$async$state_machine__30950__auto__;
})()
})();
var state__31230__auto__ = (function (){var statearr_33482 = f__31229__auto__();
(statearr_33482[(6)] = c__31228__auto___34623);

return statearr_33482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31230__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

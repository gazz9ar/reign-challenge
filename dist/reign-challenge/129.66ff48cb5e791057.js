"use strict";(self.webpackChunkreign_challenge=self.webpackChunkreign_challenge||[]).push([[129],{1129:(re,_,c)=>{c.r(_),c.d(_,{PagesModule:()=>ie});var h=c(9808),x=c(113),M=c(8746),o=c(1223),Y=c(2340),C=c(4004),B=c(262),L=c(2843),Q=c(520);let N=(()=>{class t{constructor(e){this.http=e,this.url=Y.N.url}getNews(e){return this.http.get(`${this.url}/search_by_date?query=${e.filter}&hitsPerPage=${e.count}&page=${e.page}`).pipe((0,C.U)(i=>i),(0,B.K)(this.handleError))}handleError(e){let i="";return i=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,window.alert(i),(0,L._)(i)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(Q.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const P=function(t){return{"selected-toggle":t}};let V=(()=>{class t{constructor(){this.all=!0,this.toggle=new o.vpe}ngOnInit(){}changeNews(e){this.toggle.emit(e),this.all="all"===e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-button-toggle"]],outputs:{toggle:"toggle"},decls:8,vars:6,consts:[[1,"container"],[1,"button-toggle-container"],[1,"btn-toggle",3,"ngClass","click"],[1,"button-toggle-text"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"button",2),o.NdJ("click",function(){return i.changeNews("all")}),o.TgZ(3,"span",3),o._uU(4,"All"),o.qZA()(),o.TgZ(5,"button",2),o.NdJ("click",function(){return i.changeNews("favs")}),o.TgZ(6,"span",3),o._uU(7," My faves"),o.qZA()()()()),2&e&&(o.xp6(2),o.Q6J("ngClass",o.VKq(2,P,i.all)),o.xp6(3),o.Q6J("ngClass",o.VKq(4,P,!i.all)))},directives:[h.mk],styles:[".container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .button-toggle-container[_ngcontent-%COMP%]{width:196 px;display:inline-block;height:31px;border:solid 1px #d6d6d6;border-radius:2px}.container[_ngcontent-%COMP%]   .button-toggle-container[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%]{width:98px;height:31px;padding:3px 11px -1px;border:1.6px solid #ccc;cursor:pointer}.container[_ngcontent-%COMP%]   .button-toggle-container[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%]   .button-toggle-text[_ngcontent-%COMP%]{width:19px;height:28px;font-family:Roboto;font-size:16px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.75;letter-spacing:normal;text-align:center;color:#606060}.container[_ngcontent-%COMP%]   .button-toggle-container[_ngcontent-%COMP%]   .selected-toggle[_ngcontent-%COMP%]{border:2px solid #1797ff!important;border-color:#1797ff!important;box-shadow:1px 1px 5px inset #9b9a9a}"]}),t})();var $=c(9646),O=c(8421),I=c(8306),D=c(5577),G=c(1144),g=c(576),X=c(3268);const q=["addListener","removeListener"],tt=["addEventListener","removeEventListener"],et=["on","off"];function y(t,n,e,i){if((0,g.m)(e)&&(i=e,e=void 0),i)return y(t,n,e).pipe((0,X.Z)(i));const[r,s]=function it(t){return(0,g.m)(t.addEventListener)&&(0,g.m)(t.removeEventListener)}(t)?tt.map(l=>d=>t[l](n,d,e)):function nt(t){return(0,g.m)(t.addListener)&&(0,g.m)(t.removeListener)}(t)?q.map(k(t,n)):function ot(t){return(0,g.m)(t.on)&&(0,g.m)(t.off)}(t)?et.map(k(t,n)):[];if(!r&&(0,G.z)(t))return(0,D.z)(l=>y(l,n,e))((0,O.Xf)(t));if(!r)throw new TypeError("Invalid event target");return new I.y(l=>{const d=(...a)=>l.next(1<a.length?a:a[0]);return r(d),()=>s(d)})}function k(t,n){return e=>i=>t[e](n,i)}var E=c(8505),rt=c(9300),st=c(727);class lt extends st.w0{constructor(n,e){super()}schedule(n,e=0){return this}}const v={setInterval(t,n,...e){const{delegate:i}=v;return(null==i?void 0:i.setInterval)?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){const{delegate:n}=v;return((null==n?void 0:n.clearInterval)||clearInterval)(t)},delegate:void 0};var ct=c(8737);const Z={now:()=>(Z.delegate||Date).now(),delegate:void 0};class m{constructor(n,e=m.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}}m.now=Z.now;const A=new class dt extends m{constructor(n,e=m.now){super(n,e),this.actions=[],this._active=!1,this._scheduled=void 0}flush(n){const{actions:e}=this;if(this._active)return void e.push(n);let i;this._active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}}(class at extends lt{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){if(this.closed)return this;this.state=n;const i=this.id,r=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(r,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this}requestAsyncId(n,e,i=0){return v.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;v.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let r,i=!1;try{this.work(n)}catch(s){i=!0,r=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,ct.P)(i,this),null!=n&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}}),ft=A;var gt=c(4482),F=c(5403);const j={leading:!0,trailing:!1};var pt=c(3532);function vt(t,n=A,e=j){const i=function mt(t=0,n,e=ft){let i=-1;return null!=n&&((0,pt.K)(n)?e=n:i=n),new I.y(r=>{let s=function ht(t){return t instanceof Date&&!isNaN(t)}(t)?+t-e.now():t;s<0&&(s=0);let l=0;return e.schedule(function(){r.closed||(r.next(l++),0<=i?this.schedule(void 0,i):r.complete())},s)})}(t,n);return function ut(t,n=j){return(0,gt.e)((e,i)=>{const{leading:r,trailing:s}=n;let l=!1,d=null,a=null,f=!1;const u=()=>{null==a||a.unsubscribe(),a=null,s&&(z(),f&&i.complete())},b=()=>{a=null,f&&i.complete()},R=p=>a=(0,O.Xf)(t(p)).subscribe((0,F.x)(i,u,b)),z=()=>{if(l){l=!1;const p=d;d=null,i.next(p),!f&&R(p)}};e.subscribe((0,F.x)(i,p=>{l=!0,d=p,(!a||a.closed)&&(r?z():R(p))},()=>{f=!0,(!(s&&l&&a)||a.closed)&&i.complete()}))})}(()=>i,e)}function wt(t,n,e,i){const r=window&&!!window.document&&window.document.documentElement;let s=r&&n?window:e;if(t&&(s=t&&r&&"string"==typeof t?function xt(t,n,e){return(e?window.document:n).querySelector(t)}(t,e.nativeElement,i):t,!s))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return s}function S(t){return t&&!t.firstChange}const yt={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},St={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class Tt{constructor(n=!0){this.vertical=n,this.propsMap=n?yt:St}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function Nt(t){return["Window","global"].some(e=>Object.prototype.toString.call(t).includes(e))}function T(t,n){return t?n.document.documentElement:null}function H(t,n){const e=function It({container:t,isWindow:n,axis:e}){const{offsetHeightKey:i,clientHeightKey:r}=U(e);return J(t,n,i,r)}(n);return n.isWindow?function Pt(t,n,e){const{axis:i,container:r,isWindow:s}=e,{offsetHeightKey:l,clientHeightKey:d}=U(i),a=t+W(T(s,r),i,s),f=J(n.nativeElement,s,l,d),u=function Dt(t,n,e){const i=n.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+W(t,n,e)}(n.nativeElement,i,s)+f;return{height:t,scrolled:a,totalToScroll:u,isWindow:s}}(e,t,n):function Ot(t,n,e){const{axis:i,container:r}=e;return{height:t,scrolled:r[i.scrollTopKey()],totalToScroll:r[i.scrollHeightKey()],isWindow:!1}}(e,0,n)}function U(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function J(t,n,e,i){if(isNaN(t[e])){const r=T(n,t);return r?r[i]:0}return t[e]}function W(t,n,e){const i=n.pageYOffsetKey(),r=n.scrollTopKey(),s=n.offsetTopKey();return isNaN(window.pageYOffset)?T(e,t)[r]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[s]}function kt(t,n={down:0,up:0},e){let i,r;if(t.totalToScroll<=0)return!1;const s=t.isWindow?t.scrolled:t.height+t.scrolled;return e?(i=(t.totalToScroll-s)/t.totalToScroll,r=((null==n?void 0:n.down)?n.down:0)/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-s)),r=((null==n?void 0:n.up)?n.up:0)/10),i<=r}class jt{constructor({totalToScroll:n}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=n}updateScrollPosition(n){return this.lastScrollPosition=n}updateTotalToScroll(n){this.lastTotalToScroll!==n&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=n)}updateScroll(n,e){this.updateScrollPosition(n),this.updateTotalToScroll(e)}updateTriggeredFlag(n,e){e?this.triggered.down=n:this.triggered.up=n}isTriggeredScroll(n,e){return e?this.triggered.down===n:this.triggered.up===n}}function Ht(t){const{scrollContainer:n,scrollWindow:e,element:i,fromRoot:r}=t,s=function _t({windowElement:t,axis:n}){return function Mt(t,n){const e=t.isWindow||n&&!n.nativeElement?n:n.nativeElement;return Object.assign(Object.assign({},t),{container:e})}({axis:n,isWindow:Nt(t)},t)}({axis:new Tt(!t.horizontal),windowElement:wt(n,e,i,r)}),l=new jt({totalToScroll:H(i,s)}),a={up:t.upDistance,down:t.downDistance};return function Ut(t){let n=y(t.container,"scroll");return t.throttle&&(n=n.pipe(vt(t.throttle,void 0,{leading:!0,trailing:!0}))),n}({container:s.container,throttle:t.throttle}).pipe((0,D.z)(()=>(0,$.of)(H(i,s))),(0,C.U)(f=>function Jt(t,n,e){const{scrollDown:i,fire:r}=function Zt(t,n,e){const i=function Et(t,n){return t<n.scrolled}(t,n);return{fire:kt(n,e,i),scrollDown:i}}(t,n,e);return{scrollDown:i,fire:r,stats:n}}(l.lastScrollPosition,f,a)),(0,E.b)(({stats:f})=>l.updateScroll(f.scrolled,f.totalToScroll)),(0,rt.h)(({fire:f,scrollDown:u,stats:{totalToScroll:b}})=>function bt(t,n,e){return!!(t&&n||!e&&n)}(t.alwaysCallback,f,l.isTriggeredScroll(b,u))),(0,E.b)(({scrollDown:f,stats:{totalToScroll:u}})=>{l.updateTriggeredFlag(u,f)}),(0,C.U)(Wt))}function Wt(t){const{scrollDown:n,stats:{scrolled:e}}=t;return{type:n?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:e}}}let Kt=(()=>{class t{constructor(e,i){this.element=e,this.zone=i,this.scrolled=new o.vpe,this.scrolledUp=new o.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:e,infiniteScrollDisabled:i,infiniteScrollDistance:r}){const s=S(e),l=S(i),d=S(r),a=!l&&!this.infiniteScrollDisabled||l&&!i.currentValue||d;(s||l||d)&&(this.destroyScroller(),a&&this.setup())}setup(){(function Ct(){return"undefined"!=typeof window})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=Ht({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(e=>this.zone.run(()=>this.handleOnScroll(e)))})}handleOnScroll({type:e,payload:i}){switch(e){case"[NGX_ISE] DOWN":return this.scrolled.emit(i);case"[NGX_ISE] UP":return this.scrolledUp.emit(i);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.R0b))},t.\u0275dir=o.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[o.TTD]}),t})(),Rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[],imports:[[]]}),t})();function zt(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"div",15),o.NdJ("click",function(){const s=o.CHM(e).$implicit;return o.oxw().changeSelected(s.name)}),o._UZ(1,"img",16),o.TgZ(2,"span",17),o._uU(3),o.qZA()()}if(2&t){const e=n.$implicit;o.xp6(1),o.MGl("src","assets/",e.fileName,".png",o.LSH),o.Q6J("alt",e.fileName),o.xp6(2),o.hij(" ",e.name," ")}}function Yt(t,n){1&t&&(o.TgZ(0,"div",18),o._UZ(1,"div",19),o.qZA())}const K=function(t,n){return{like:t,"no-like":n}};function Bt(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"a",21)(1,"div",22)(2,"div",23),o._UZ(3,"img",24),o.TgZ(4,"span",25),o._uU(5),o.TgZ(6,"strong"),o._uU(7),o.qZA()()(),o.TgZ(8,"div",26),o._uU(9),o.qZA()(),o.TgZ(10,"div",27)(11,"div",28),o.NdJ("click",function(){const s=o.CHM(e).$implicit;return o.oxw(2).like(s)}),o.qZA()()()}if(2&t){const e=n.$implicit,i=o.oxw(2);o.MGl("id","new-",e.objectID,""),o.xp6(5),o.hij(" ",i.relativeDays(e.created_at)," by "),o.xp6(2),o.Oqu(e.author),o.xp6(2),o.hij(" ",e.story_title?e.story_title:e.title," "),o.xp6(1),o.MGl("id","likeContainer-",e.objectID,""),o.xp6(1),o.MGl("id","like-",e.objectID,""),o.Q6J("ngClass",o.WLB(7,K,e.like,!e.like))}}function Lt(t,n){if(1&t&&(o.TgZ(0,"div",9),o.YNc(1,Bt,12,10,"a",20),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.news)}}function Qt(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"a",21)(1,"div",22)(2,"div",23),o._UZ(3,"img",24),o.TgZ(4,"span",25),o._uU(5),o.qZA()(),o.TgZ(6,"div",26),o._uU(7),o.qZA()(),o.TgZ(8,"div",27)(9,"div",28),o.NdJ("click",function(){const s=o.CHM(e).$implicit;return o.oxw(2).like(s)}),o.qZA()()()}if(2&t){const e=n.$implicit,i=o.oxw(2);o.MGl("id","new-",e.objectID,""),o.xp6(5),o.hij(" ",i.relativeDays(e.created_at)," "),o.xp6(2),o.hij(" ",e.story_title?e.story_title:e.title," "),o.xp6(1),o.MGl("id","likeContainer-",e.objectID,""),o.xp6(1),o.MGl("id","like-",e.objectID,""),o.Q6J("ngClass",o.WLB(6,K,e.like,!e.like))}}function Vt(t,n){if(1&t&&(o.TgZ(0,"div",9),o.YNc(1,Qt,10,9,"a",20),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.favs)}}function $t(t,n){1&t&&(o.TgZ(0,"div",29),o._uU(1," You have no favorite news! "),o.qZA())}function Gt(t,n){1&t&&o._UZ(0,"div",19)}function Xt(t,n){1&t&&(o.TgZ(0,"div"),o._uU(1," There's no news left... "),o.qZA())}const qt=function(t){return{"d-none":t}};let te=(()=>{class t{constructor(e){this.newsService=e,this.categories=[{id:0,name:"Angular",fileName:"angular",like:!0},{id:1,name:"Reactjs",fileName:"reactjs",like:!1},{id:2,name:"Vuejs",fileName:"vuejs",like:!0}],this.showCategories=!1,this.selected="Select your news",this.news=[],this.favs=[],this.clickFav=!1,this.finished=!1,this.loading=!1,this.newEntry=!1,this.count=12,this.currentPage=0,this.toggle="all"}ngOnInit(){this.checkForFilter(),this.fillFavs()}loadData(e,i){if(this.finished)return;let r={filter:i,count:this.count,page:this.currentPage};i?e?(this.currentPage=0,r.page=0,this.newsService.getNews(r).pipe((0,M.x)(()=>{this.loading=!1,this.formatNews()})).subscribe(s=>{this.news=s.hits})):(console.log(r),this.newsService.getNews(r).pipe((0,M.x)(()=>{this.formatNews()})).subscribe(s=>{this.news.push(...s.hits)})):this.newEntry=!0}changeToggle(e){this.toggle=e}onScroll(){"all"===this.toggle&&(this.currentPage++,this.loading=!1,this.loadData(!1,this.selected))}checkForFilter(){localStorage.getItem("filter")?(this.selected=localStorage.getItem("filter"),this.loadData(!0,this.selected)):this.loadData(!0)}fillFavs(){JSON.parse(localStorage.getItem("favs"))&&(this.favs=JSON.parse(localStorage.getItem("favs")))}formatNews(){this.news.map(e=>{for(const i of this.favs)i.objectID===e.objectID&&(e.like=!0)})}showList(){this.showCategories=!this.showCategories}changeSelected(e){this.newEntry&&(this.newEntry=!1),this.showCategories=!1,this.selected===e&&0===this.currentPage||(this.news=[],this.selected=e,localStorage.setItem("filter",this.selected),this.loadData(!0,this.selected))}like(e){e.like?(this.favs=this.favs.filter(i=>i.objectID!==e.objectID),e.like=!1,localStorage.setItem("favs",JSON.stringify(this.favs))):(this.favs.push(e),e.like=!0,localStorage.setItem("favs",JSON.stringify(this.favs)))}unlike(e){console.error("UNNLIKEEE")}openNew(){}onClick(e){if(e.target.id.includes("new-")||e.target.id.includes("likeContainer-")){let r,i="";i=e.target.id.includes("new-")?e.target.id.substring(4,e.target.id.length):e.target.id.substring(14,e.target.id.length),r="all"===this.toggle?this.news.find(s=>(console.log(s.objectID,i),s.objectID==i)):this.favs.find(s=>(console.log(s.objectID,i),s.objectID==i)),window.open(r.story_url,"_blank")}}relativeDays(e){const i=new Date(e).getTime(),r=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),l=Math.round((i-(new Date).getTime())/864e5);return r.format(l,"day")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(N))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-news"]],hostBindings:function(e,i){1&e&&o.NdJ("click",function(s){return i.onClick(s)},!1,o.evT)},decls:18,vars:13,consts:[[3,"toggle"],[1,"container"],["name","categories",1,"dropdownCategories",3,"click"],[1,"categoriesDefault-container"],["id","categoriesDefault",1,"categories"],[1,"arrow","down"],[1,"items-container",3,"ngClass"],["class","categorie-container",3,"click",4,"ngFor","ngForOf"],["class","spinner-container",4,"ngIf"],[1,"news-container"],["infiniteScroll","",1,"infinite-scroll","news-container",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["class","news-container",4,"ngIf"],["class","no-favs",4,"ngIf"],["class","spinner",4,"ngIf"],[4,"ngIf"],[1,"categorie-container",3,"click"],[1,"categorieImg",3,"src","alt"],[1,"categories","categoriesValue"],[1,"spinner-container"],[1,"spinner"],["class","new",3,"id",4,"ngFor","ngForOf"],[1,"new",3,"id"],[1,"title-container"],[1,"time-container"],["src","assets/clock.svg","alt","time",1,"clock"],[1,"time"],[1,"title"],[1,"like-container",3,"id"],[1,"like-button",3,"id","ngClass","click"],[1,"no-favs"]],template:function(e,i){1&e&&(o.TgZ(0,"app-button-toggle",0),o.NdJ("toggle",function(s){return i.changeToggle(s)}),o.qZA(),o.TgZ(1,"div",1)(2,"div",2),o.NdJ("click",function(){return i.showList()}),o.TgZ(3,"div",3)(4,"span",4),o._uU(5),o.qZA(),o.TgZ(6,"p"),o._UZ(7,"i",5),o.qZA()()(),o.TgZ(8,"div",6),o.YNc(9,zt,4,3,"div",7),o.qZA(),o.YNc(10,Yt,2,0,"div",8),o.TgZ(11,"div",9)(12,"div",10),o.NdJ("scrolled",function(){return i.onScroll()}),o.YNc(13,Lt,2,1,"div",11),o.YNc(14,Vt,2,1,"div",11),o.YNc(15,$t,2,0,"div",12),o.qZA(),o.YNc(16,Gt,1,0,"div",13),o.YNc(17,Xt,2,0,"div",14),o.qZA()()),2&e&&(o.xp6(5),o.hij(" ",i.selected," "),o.xp6(3),o.Q6J("ngClass",o.VKq(11,qt,!i.showCategories)),o.xp6(1),o.Q6J("ngForOf",i.categories),o.xp6(1),o.Q6J("ngIf",i.loading&&!i.newEntry),o.xp6(2),o.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",1e3),o.xp6(1),o.Q6J("ngIf","all"===i.toggle),o.xp6(1),o.Q6J("ngIf","favs"===i.toggle),o.xp6(1),o.Q6J("ngIf","favs"===i.toggle&&0===i.favs.length),o.xp6(1),o.Q6J("ngIf",!i.finished&&!i.loading&&"all"===i.toggle&&!i.newEntry),o.xp6(1),o.Q6J("ngIf",i.finished))},directives:[V,h.mk,h.sg,h.O5,Kt],styles:["*[_ngcontent-%COMP%]{font-family:Roboto}.container[_ngcontent-%COMP%]{padding:0 130px;margin-top:30px}.container[_ngcontent-%COMP%]   .dropdownCategories[_ngcontent-%COMP%]{width:240px;height:32px;border-radius:4px;border:solid 1px #2e2e2e;background-color:#fff;z-index:99;cursor:pointer}.items-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:240px;height:139px;margin:0 0 0 1px;box-shadow:0 2px 2px #dad8d8;background-color:#fff;z-index:918;position:absolute;cursor:pointer}.categories[_ngcontent-%COMP%]{width:50%;height:22px;font-family:Roboto;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.57;letter-spacing:normal;color:#343434;margin:10px 44px}.categoriesValue[_ngcontent-%COMP%]{margin-left:10px}#categoriesDefault[_ngcontent-%COMP%]{margin:0 10px;width:100%}.categoriesDefault-container[_ngcontent-%COMP%]{width:95%;height:100%;display:flex;justify-content:flex-start;align-items:center}.categorieImg[_ngcontent-%COMP%]{width:24px;height:24px}.categorie-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.categorie-container[_ngcontent-%COMP%]:hover{background-color:#eaeaea}.new[_ngcontent-%COMP%]{width:550px;height:90px;padding:0 0 0 26px;opacity:.8;border-radius:6px;border:solid 2px #979797;background-color:#fff;margin-top:37px;display:flex;text-decoration:none}.new[_ngcontent-%COMP%]:hover{background-color:#97979766;border-color:#97979766;cursor:pointer}.new[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%]{opacity:.9}.title-container[_ngcontent-%COMP%]{width:82%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin-right:20px;pointer-events:none}.like-container[_ngcontent-%COMP%]{width:18%;background-color:#6060600f;border-top-right-radius:6px;border-bottom-right-radius:6px;display:flex;justify-content:center;align-items:center}.like-button[_ngcontent-%COMP%]{width:24px;height:22px;object-fit:contain}.like[_ngcontent-%COMP%]{background-image:url(like.c643bd8a31dd50f8.svg)}.no-like[_ngcontent-%COMP%]{background-image:url(no-like.5ff933e784528750.svg)}.time[_ngcontent-%COMP%]{color:#767676;height:13px;font-size:12px;font-family:Roboto;pointer-events:none;width:auto}.clock[_ngcontent-%COMP%]{width:16px;height:16px;margin-right:8px;pointer-events:none}.title[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.25px;color:#6b6b6b;width:100%;font-family:Roboto;pointer-events:none}.time-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:9px;pointer-events:none}.news-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;width:100%;margin-bottom:20px}.no-pointer[_ngcontent-%COMP%]{pointer-events:none}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(0,0,0,.4);border-left-color:transparent;width:36px;height:36px;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.no-favs[_ngcontent-%COMP%]{color:#a9a9a9;margin-top:21vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.no-favs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;margin-top:9px}"]}),t})(),ee=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-navbar"]],decls:3,vars:0,consts:[[1,"Rectangle-2-Copy"],[1,"HACKER-NEWS","Text-Style"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0)(1,"span",1),o._uU(2," HACKER NEWS "),o.qZA()())},styles:[".Rectangle-2-Copy[_ngcontent-%COMP%]{width:auto;height:auto;margin:0 0 70px;padding:44px 1082px 42px 150px;box-shadow:0 1px 4px #0015291f;background-image:linear-gradient(to bottom,#ececec -32%,#fff 124%)}@media (max-width: 1250px){.Rectangle-2-Copy[_ngcontent-%COMP%]{padding:44px 200px 42px 150px}}.HACKER-NEWS[_ngcontent-%COMP%]{width:208px;height:28px;object-fit:contain;font-family:Baskerville;font-size:28px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#3b3b3b}"]}),t})();const ne=[{path:"home",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-pages"]],decls:2,vars:0,template:function(e,i){1&e&&o._UZ(0,"app-navbar")(1,"router-outlet")},directives:[ee,x.lC],styles:[""]}),t})(),children:[{path:"news",component:te},{path:"favs",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-favs"]],decls:2,vars:0,template:function(e,i){1&e&&(o.TgZ(0,"p"),o._uU(1,"favs works!"),o.qZA())},styles:[""]}),t})()}]},{path:"",redirectTo:"home/news",pathMatch:"full"}];let oe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[x.Bz.forChild(ne)],x.Bz]}),t})(),ie=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[N],imports:[[h.ez,oe,Rt]]}),t})()}}]);
(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-d6c2a8ae":"8c142a44"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-d6c2a8ae":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-d6c2a8ae":"8ea768fa"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/chuck-norris-jokes-vue/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e20":function(e,t,n){"use strict";n("6c89")},"12ae":function(e,t,n){e.exports=n.p+"img/loading.7684980e.gif"},"199c":function(e,t,n){"use strict";n("747c")},3382:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"label",style:{backgroundColor:e.color}},[n("div",{staticClass:"label__dot"},[e._v("•")]),n("div",{staticClass:"label__text"},[e._t("default")],2)])},o=[],a={props:{color:{type:String,default:"#cfb995"}}},s=a,i=(n("625d"),n("2877")),c=Object(i["a"])(s,r,o,!1,null,"bc0fc1e4",null);t["a"]=c.exports},3402:function(e,t,n){"use strict";n("7b36")},"3ec3":function(e,t,n){"use strict";n("4ea0")},4629:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",e._b({staticClass:"button",style:e.style},"button",e.$attrs,!1),[n("span",{staticClass:"material-icons button__icon-left"},[e._v(" "+e._s(e.iconLeft||"")+" ")]),e._t("default"),n("span",{staticClass:"material-icons button__icon"},[e._v(" "+e._s(e.icon||"")+" ")])],2)},o=[],a={props:{icon:{type:String,required:!1},iconLeft:{type:String,required:!1},bgColor:{type:String,required:!1},textColor:{type:String,required:!1},borderColor:{type:String,required:!1},padding:{type:[String,Boolean],default:"0px 16px"}},computed:{style:function(){return{borderColor:this.borderColor,color:this.textColor,background:this.bgColor,padding:this.padding}}}},s=a,i=(n("3ec3"),n("2877")),c=Object(i["a"])(s,r,o,!1,null,"e3a55b04",null);t["a"]=c.exports},"4c88":function(e,t,n){"use strict";n("5dc9")},"4ea0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{staticClass:"loading"},[r("img",{attrs:{src:n("12ae"),width:"100"}}),r("h1",[e._v("Loading...")])]):r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],s={data:function(){return{}},methods:{loadData:function(){this.$store.dispatch("Category/loadCategories"),this.$store.dispatch("Joke/loadJokes")}},computed:{loading:function(){return this.$store.getters["Joke/loading"]}},created:function(){this.loadData()}},i=s,c=(n("5c0b"),n("2877")),u=Object(c["a"])(i,o,a,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.activeCategory?n("div",{staticClass:"home"},[n("div",{staticClass:"home__select"},[n("categories-select",{attrs:{categories:e.categories},on:{select:function(t){return e.setJokes(t)}}})],1),n("div",{staticClass:"home__buttons"},[e._l(e.categories.slice(0,e.categories.length-2),(function(t,r){return[t.jokes&&t.jokes.length>6?n("base-button",{key:t.key,staticClass:"home__button",attrs:{bgColor:t.color,borderColor:e.activeCategory===t?"#5e5e5e":"transparent",textColor:e.activeCategory===t?"#5e5e5e":"#fff"},nativeOn:{click:function(t){return e.setJokes(r)}}},[e._v(" "+e._s(t.name)+" Jokes ")]):e._e()]})),n("base-button",{staticClass:"home__button",attrs:{bgColor:"transparent",borderColor:"#d1bb91",textColor:"#d1bb91",icon:"arrow_downward"},nativeOn:{click:function(t){return e.setJokes(e.categories.length-2)}}},[e._v(" View all ")])],2),n("div",{staticClass:"home__separator"}),n("div",{staticClass:"home__ticket"},[n("ticket",{attrs:{color:e.activeCategory.color}},[e._v(e._s(e.activeCategory.name))])],1),n("div",{staticClass:"home__cards"},e._l(e.activeCategory.jokes.slice(0,6*this.page),(function(t){return n("joke-card",{key:t.id,attrs:{joke:t},nativeOn:{click:function(n){return e.goToJoke(t)}}})})),1),n("div",{staticClass:"home__all"},[e.hasJokes?n("base-button",{staticClass:"home__button",attrs:{bgColor:"transparent",borderColor:"#d1bb91",textColor:"#d1bb91",icon:"arrow_downward"},nativeOn:{click:function(t){e.page++}}},[e._v(" View more ")]):n("base-button",{staticClass:"home__button",attrs:{bgColor:"transparent",borderColor:"#d1bb91",textColor:"#d1bb91",icon:"arrow_upward"},nativeOn:{click:function(t){return e.backToTop()}}},[e._v(" Back to top! ")])],1)]):e._e()},p=[],m=n("1da1"),_=(n("96cf"),n("4629")),h=n("3382"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card__header"},[n("span",{staticClass:"card__icon material-icons",class:e.iconColor},[e._v(" bolt ")]),n("div",{staticClass:"card__title"},[e._v(" "+e._s(e.jokeTitle)+" ")])]),n("div",{staticClass:"card__body"},[e._v(" "+e._s(e.joke.value)+" ")]),n("div",{staticClass:"card__footer"},[n("base-button",{attrs:{textColor:"#cfb995",bgColor:"transparent",icon:"east"}},[e._v("SEE STATS")])],1)])},g=[],b=(n("99af"),{components:{BaseButton:_["a"]},props:{joke:{required:!0}},computed:{iconColor:function(){var e=this.joke,t=e.likes,n=e.unlikes;return n>t?"card__icon--chestnut":t>=51&&t<=100?"card__icon--trending":t>=101?"card__icon--hall":"card__icon--new"},jokeTitle:function(){return"".concat(this.joke.categories[0]||"Uncategorized Joke"," ").concat(this.joke.index)}}}),k=b,C=(n("ec4a"),Object(c["a"])(k,v,g,!1,null,"80b86f1a",null)),w=C.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"select",attrs:{placeholder:"Select a category"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.categories.slice(0,e.categories.length-2),(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(" "+e._s(t.name.toUpperCase())+" JOKES ")])})),0)},x=[],j={props:{categories:{required:!0}},data:function(){return{selected:!1}},watch:{selected:function(e){this.$emit("select",e)}}},O=j,E=(n("d52e"),Object(c["a"])(O,y,x,!1,null,"2feecc58",null)),J=E.exports,S={name:"Home",components:{BaseButton:_["a"],Ticket:h["a"],JokeCard:w,CategoriesSelect:J},data:function(){return{activeCategory:!1,page:1}},watch:{categories:function(){this.setJokes(0)}},methods:{setJokes:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.activeCategory=t.categories[e],t.page=1;case 2:case"end":return n.stop()}}),n)})))()},goToJoke:function(e){this.$router.push({name:"post",params:{id:e.id}})},backToTop:function(){window.scrollTo(0,0)}},computed:{hasJokes:function(){return!(this.activeCategory.jokes.length<=6*this.page)},categories:function(){return this.$store.getters["Joke/getJokesByCategory"]}},mounted:function(){this.setJokes(0)}},T=S,R=(n("0e20"),Object(c["a"])(T,f,p,!1,null,"37d7a994",null)),B=R.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("Header"),n("div",{staticClass:"layout__page"},[n("router-view")],1),n("Footer")],1)},A=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__container"},[n("div",{staticClass:"footer__title"},[e._v("Got jokes? Get paid for submitting!")]),n("div",{staticClass:"footer__button"},[n("button-arrow",{attrs:{padding:!1,outline:""}},[e._v(" Submit joke ")])],1)])])},I=[],D=n("d87e"),M={components:{ButtonArrow:D["a"]}},P=M,q=(n("d582"),Object(c["a"])(P,L,I,!1,null,"8f62cda0",null)),N=q.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("Menu"),n("Banner")],1)},G=[],K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"menu"},[r("div",{staticClass:"menu__container"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"menu__logo",attrs:{src:n("9b19")}})]),r("div",{staticClass:"menu__items"},[r("menu-item",[e._v("So funktioniert's")]),r("menu-item",[e._v(" Sonderangebote")]),r("menu-item-dropdown",{attrs:{icon:"person"}},[e._v("Mein Bereich")])],1),r("span",{staticClass:"menu__burger material-icons",on:{click:function(t){e.menu=!e.menu}}},[e._v("menu")])],1),e.menu?r("div",{staticClass:"menu__side"},[r("span",{staticClass:"menu__burger material-icons",on:{click:function(t){e.menu=!e.menu}}},[e._v("close")]),r("menu-item",[e._v("So funktioniert's")]),r("menu-item",[e._v(" Sonderangebote")]),r("menu-item-dropdown",[e._v("Mein Bereich")])],1):e._e()])},H=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-item",class:{"menu-item--active":e.active},on:{mouseenter:function(t){e.active=!0},mouseleave:function(t){e.active=!1}}},[e.icon?n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e(),e._t("default")],2)},Y=[],X={props:{icon:{type:String,required:!1}},data:function(){return{active:!1}}},z=X,V=(n("be31"),Object(c["a"])(z,U,Y,!1,null,"66c3aa87",null)),Q=V.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-dropdown",on:{mouseenter:function(t){e.isOpen=!0},mouseleave:function(t){e.isOpen=!1}}},[n("menu-item",e._b({staticClass:"menu-dropdown__item"},"menu-item",e.$attrs,!1),[e._t("default"),n("span",{staticClass:"material-icons menu-dropdown__icon"},[e._v(" arrow_drop_down ")])],2),n("div",{staticClass:"menu-dropdown__container",on:{mouseenter:function(t){e.isOpen=!0}}},[e.isOpen?n("nav",{staticClass:"menu-dropdown__nav"},[e._m(0)]):e._e()])],1)},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"menu-dropdown__list"},[n("li",{staticClass:"menu-dropdown__list__item"},[e._v("My published jokes")]),n("li",{staticClass:"menu-dropdown__list__item"},[e._v("My saved jokes")]),n("li",{staticClass:"menu-dropdown__list__item"},[e._v("Account Information")]),n("li",{staticClass:"menu-dropdown__list__item"},[e._v("Publish new joke")])])}],ee={components:{MenuItem:Q},data:function(){return{isOpen:!1}}},te=ee,ne=(n("8b75"),Object(c["a"])(te,W,Z,!1,null,"a547ea58",null)),re=ne.exports,oe={components:{MenuItem:Q,MenuItemDropdown:re},data:function(){return{menu:!1}}},ae=oe,se=(n("4c88"),Object(c["a"])(ae,K,H,!1,null,"2c566e0e",null)),ie=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("h1",{staticClass:"banner__title"},[e._v("The Joke Bible")]),n("h2",{staticClass:"banner__subtitle"},[e._v("Daily Laughs for you and yours")]),n("search-input",{staticClass:"banner__input",attrs:{results:e.results},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)},ue=[],le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-input"},[n("base-input",{attrs:{value:e.value,icon:"search",placeholder:"How can we make you laugh today?"},on:{input:function(t){return e.$emit("input",t)}}}),e.results.length>0&&e.value&&e.value.length>=3?n("div",{staticClass:"search-dropbox"},[n("ul",{staticClass:"search-dropbox__list"},e._l(e.results.slice(0,6),(function(t){return n("li",{key:t.id,staticClass:"search-dropbox__item",on:{click:function(n){return e.goToJoke(t)}}},[n("span",{staticClass:"search-dropbox__icon material-icons"},[e._v("bolt")]),n("p",{staticClass:"search-dropbox__text"},[e._v(e._s(e._f("limit")(t.value)))])])})),0)]):e._e()],1)},de=[],fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input",class:{"input--focus":e.focus}},[n("input",e._b({staticClass:"input__element",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}},"input",e.$attrs,!1)),e.icon?n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e()])},pe=[],me={props:{icon:{type:String,required:!1},value:{required:!1}},data:function(){return{focus:!0}}},_e=me,he=(n("cee7"),Object(c["a"])(_e,fe,pe,!1,null,"693544e2",null)),ve=he.exports,ge={components:{BaseInput:ve},props:{value:{required:!0},results:{required:!1,default:function(){return[]}}},methods:{goToJoke:function(e){this.$emit("input"),this.$router.push({name:"post",params:{id:e.id,joke:e}})}},filters:{limit:function(e){return e.substring(0,30)+"..."}}},be=ge,ke=(n("199c"),Object(c["a"])(be,le,de,!1,null,"47e6f796",null)),Ce=ke.exports,we={components:{SearchInput:Ce},data:function(){return{search:"",results:[]}},watch:{search:function(e){e&&e.length>=3&&this.searchJoke(e)}},methods:{searchJoke:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$jokeService.searchJokeByTerm(e);case 3:r=n.sent,200===r.status&&(t.results=r.data.result),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}},ye=we,xe=(n("3402"),Object(c["a"])(ye,ce,ue,!1,null,"55eb62d3",null)),je=xe.exports,Oe={components:{Menu:ie,Banner:je}},Ee=Oe,Je=(n("f5ca"),Object(c["a"])(Ee,F,G,!1,null,"4c24c051",null)),Se=Je.exports,Te={components:{Footer:N,Header:Se}},Re=Te,Be=(n("cfa3"),Object(c["a"])(Re,$,A,!1,null,"e70c690c",null)),$e=Be.exports;r["a"].use(d["a"]);var Ae=[{path:"/",component:$e,children:[{path:"",name:"home",component:B},{path:"post/:id",name:"post",props:!0,component:function(){return n.e("chunk-d6c2a8ae").then(n.bind(null,"37d3"))}}]}],Le=new d["a"]({mode:"history",base:"/chuck-norris-jokes-vue/",routes:Ae}),Ie=Le,De=n("2f62"),Me=n("b85c"),Pe=n("5530"),qe=(n("c740"),n("159b"),n("b0c0"),{jokes:[],jokesByCategory:[],loading:!0}),Ne={UPDATE_JOKES_LIST:function(e,t){e.jokes=t},SET_JOKES_BY_CATEGORY:function(e,t){e.jokesByCategory=t},SET_LOADING:function(e,t){e.loading=t},CHANGE_JOKE_BY_INDEX:function(e,t){var n=t.index,r=t.joke;e.jokes[n]=r}},Fe={getJokesList:function(e){return e.jokes},getJokesByCategory:function(e){return e.jokesByCategory},loading:function(e){return e.loading}},Ge={loadJokes:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=e.dispatch,n.prev=1,n.next=4,t._vm.$jokeService.getAllJokes();case 4:a=n.sent,200===a.status&&(r("UPDATE_JOKES_LIST",a.data.result),o("mapJokesToCategory")),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getJokeById:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getters,n.next=3,r.getJokesList;case 3:return o=n.sent,n.next=6,o.findIndex((function(e){return e.id===t}));case 6:if(a=n.sent,!(a>=0)){n.next=12;break}return s=o[a],n.abrupt("return",Object(Pe["a"])({index:a},s));case 12:return n.abrupt("return",!1);case 13:case"end":return n.stop()}}),n)})))()},getNextJoke:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getters,n.next=3,r.getJokesList;case 3:return o=n.sent,a=t.index,n.abrupt("return",o[a+1]);case 6:case"end":return n.stop()}}),n)})))()},getPreviousJoke:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getters,n.next=3,r.getJokesList;case 3:return o=n.sent,a=t.index,n.abrupt("return",o[a-1]);case 6:case"end":return n.stop()}}),n)})))()},likeJoke:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,t.likes++,n.next=4,r("CHANGE_JOKE_BY_INDEX",{index:t.index,joke:t.value});case 4:return n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))()},unlikeJoke:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,t.unlikes++,n.next=4,r("CHANGE_JOKE_BY_INDEX",{index:t.index,joke:t.value});case 4:return n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))()},mapJokesToCategory:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,s,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.getters,o=e.dispatch,a=r.getJokesList,t.next=4,o("Category/getCategories",null,{root:!0});case 4:for(s=t.sent,i=[],c=function(e){var t,n=a[e],r=Object(Me["a"])(a[e].categories);try{var o=function(){var e=t.value,n=s.findIndex((function(t){return t.name===e.toLowerCase()}));n>=0&&i.push(n)};for(r.s();!(t=r.n()).done;)o()}catch(c){r.e(c)}finally{r.f()}n.index=e,n.liked=!1,n.likes=Math.floor(120*Math.random())+1,n.unlikes=Math.floor(30*Math.random())+1,i.forEach((function(e){s[e].jokes.push(n)})),0===n.categories.length&&s[s.length-1].jokes.push(n),s[s.length-2].jokes.push(n),i=[]},u=0;u<a.length;u++)c(u);n("UPDATE_JOKES_LIST",a),n("SET_JOKES_BY_CATEGORY",s),n("SET_LOADING",!1);case 11:case"end":return t.stop()}}),t)})))()}},Ke={namespaced:!0,state:qe,getters:Fe,mutations:Ne,actions:Ge},He=(n("d81d"),{categories:[],colors:["#ef4444","#ff5b5b","#ff915b","#ffbe5b","#ffdf5b","#8fe360","#57e690","#34D399","#14B8A6","#57dbe6","#38BDF8","#3B82F6","#6366F1","#8B5CF6","#A855F7","#D946EF","#EC4899","#F43F5E"]}),Ue={SET_CATEGORIES:function(e,t){e.categories=t}},Ye={getCategoriesList:function(e){return e.categories},getColors:function(e){return e.colors}},Xe={getCategories:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,t.abrupt("return",n.getCategoriesList);case 2:case"end":return t.stop()}}),t)})))()},loadCategories:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=e.getters,a=o.getColors,n.prev=2,n.next=5,t._vm.$jokeService.getAllCategories();case 5:s=n.sent,200===s.status&&(i=s.data,c=i.map((function(e,t){return{name:e.toLowerCase(),color:a[t],jokes:[]}})),c.push({name:"all",color:"#aaa",jokes:[]}),c.push({name:"uncategorized",color:"#000",jokes:[]}),r("SET_CATEGORIES",c)),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()}},ze={namespaced:!0,state:He,getters:Ye,mutations:Ue,actions:Xe};r["a"].use(De["a"]);var Ve=new De["a"].Store({namespaced:!0,modules:{Joke:Ke,Category:ze}}),Qe=n("bc3a"),We=n.n(Qe),Ze=n("d4ec"),et=n("bee2"),tt=function(){function e(t){Object(Ze["a"])(this,e),this.axios=t}return Object(et["a"])(e,[{key:"getAllJokes",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="jokes/search",n="chuck",r={query:n},e.next=5,this.axios.get(t,{params:r});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllCategories",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.axios.get("jokes/categories");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getJokeByCategory",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="jokes/random",r={category:t},e.next=4,this.axios.get(n,{params:r});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchJokeByTerm",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="jokes/search",r={query:t},e.next=4,this.axios.get(n,{params:r});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getRandomJoke",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.axios.get("/jokes/random");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}();We.a.defaults.baseURL="https://api.chucknorris.io/";var nt=new tt(We.a),rt=function(e){e.prototype.$api=We.a,e.prototype.$jokeService=nt};rt(r["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Ie,store:Ve,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5dc9":function(e,t,n){},"5ef0":function(e,t,n){},"625d":function(e,t,n){"use strict";n("a377")},"68eb":function(e,t,n){},6962:function(e,t,n){},"6c89":function(e,t,n){},"6f0d":function(e,t,n){},"747c":function(e,t,n){},"7b36":function(e,t,n){},"7f95":function(e,t,n){},"892b":function(e,t,n){"use strict";n("a17c")},"8b75":function(e,t,n){"use strict";n("5ef0")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.b43a218f.svg"},"9c0c":function(e,t,n){},a17c:function(e,t,n){},a377:function(e,t,n){},b006:function(e,t,n){},be31:function(e,t,n){"use strict";n("e6f3")},cee7:function(e,t,n){"use strict";n("6962")},cfa3:function(e,t,n){"use strict";n("7f95")},d52e:function(e,t,n){"use strict";n("6f0d")},d582:function(e,t,n){"use strict";n("eb29")},d87e:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"button-arrow",class:{"button-arrow--outline":e.outline},on:{mouseenter:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},["left"===e.type?n("span",{staticClass:"button-arrow__icon material-icons",class:e.direction},[e._v(" west ")]):e._e(),n("base-button",{attrs:{padding:!1,textColor:"#cfb995",bgColor:"transparent"}},[e._t("default")],2),"right"===e.type?n("span",{staticClass:"button-arrow__icon material-icons",class:e.direction},[e._v(" east ")]):e._e()],1)},o=[],a=n("4629"),s={components:{BaseButton:a["a"]},props:{type:{type:String,default:"right"},outline:{type:Boolean,default:!1}},data:function(){return{hover:!1}},computed:{direction:function(){var e="";return e="right"!==this.type?"button-arrow__icon--right":"button-arrow__icon--left",this.hover&&(e+="-hover"),e}}},i=s,c=(n("892b"),n("2877")),u=Object(c["a"])(i,r,o,!1,null,"7a036a2d",null);t["a"]=u.exports},e6f3:function(e,t,n){},eb29:function(e,t,n){},ec4a:function(e,t,n){"use strict";n("68eb")},f5ca:function(e,t,n){"use strict";n("b006")}});
//# sourceMappingURL=app.d70ef472.js.map
(function(){"use strict";var e={48:function(e,t,o){o.d(t,{Z:function(){return f}});var n=o(252),r=o(577),i=o(963);const c={class:"confirm__modal"},d={class:"confirm__text"},a={class:"confirm__footer"};function s(e,t,o,s,l,u){return o.isOpen?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"confirm__overlay",onClick:t[2]||(t[2]=(...e)=>u.outsideClick&&u.outsideClick(...e))},[(0,n._)("div",c,[(0,n._)("p",d,[(0,n.WI)(e.$slots,"default",{},void 0,!0)]),(0,n._)("div",a,[(0,n._)("button",{class:(0,r.C_)(["confirm__btn",o.removeTypeConfirm?"confirm__btn_remove":"confirm__btn_save"]),onClick:t[0]||(t[0]=(0,i.iM)((t=>e.$emit(o.removeTypeConfirm?"remove":"confirm")),["prevent"]))}," Да ",2),(0,n._)("button",{class:"confirm__btn",onClick:t[1]||(t[1]=(0,i.iM)((t=>e.$emit("close")),["prevent"]))},"Отмена")])])])):(0,n.kq)("",!0)}var l={props:{isOpen:{type:Boolean,default:!1},removeTypeConfirm:{type:Boolean,default:!1}},methods:{outsideClick(e){e.target.closest(".confirm__modal")||this.$emit("close")}}},u=o(744);const m=(0,u.Z)(l,[["render",s],["__scopeId","data-v-70ddf256"]]);var f=m},361:function(e,t,o){var n=o(963),r=o(252),i=o(577);const c={class:"container__wrap"},d={class:"container__title"},a={class:"page__content"};function s(e,t,o,n,s,l){const u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("h1",d,"TO DO "+(0,i.zw)(e.$route.name?.toUpperCase()||"LIST"),1),(0,r._)("div",a,[(0,r.Wm)(u)])])}var l={mounted(){["cards::removeElement","todos::removeElement","cards::updateElement","todos::updateElement","todos::toggleCheckedStatus"].forEach((e=>{const t=e.split("::")[0],o=e.split("::")[1];this.$bus.on(e,(e=>{this.$store.dispatch(o,{stateName:t,data:e}),this.saveCardsToLocalStorage()}))}))},beforeUnmount(){this.saveCardsToLocalStorage()},methods:{saveCardsToLocalStorage(){window.localStorage.setItem("todoListApp::cards",JSON.stringify(this.$store.state.cards)),window.localStorage.setItem("todoListApp::todos",JSON.stringify(this.$store.state.todos))}}},u=o(744);const m=(0,u.Z)(l,[["render",s]]);var f=m,p=o(201);function h(e,t,o,n,i,c){const d=(0,r.up)("ToDoList");return(0,r.wg)(),(0,r.j4)(d,{cards:e.cards},null,8,["cards"])}var _=o(907);const v={key:0,class:"list__wrap"},g={key:1,class:"list__wrap_empty"},k=(0,r._)("p",{class:"list__text"},"Список пуст",-1),b=[k];function y(e,t,o,n,c,d){const a=(0,r.up)("ToDoCard"),s=(0,r.up)("router-link"),l=(0,r.up)("Confirm");return(0,r.wg)(),(0,r.iD)(r.HY,null,[d.isEmptyList?((0,r.wg)(),(0,r.iD)("div",g,b)):((0,r.wg)(),(0,r.iD)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.cards,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"list__item",key:e.id},[(0,r.Wm)(a,{card:e,onRemoveCard:d.openConfirm},null,8,["card","onRemoveCard"])])))),128))])),(0,r._)("div",{class:(0,i.C_)({"list__add-btn-wrap":!0,"list__add-btn-wrap_center":d.isEmptyList})},[(0,r.Wm)(s,{to:"/add",class:"list__add-btn"})],2),(0,r.Wm)(l,{isOpen:c.confirmSettings.isOpen,removeTypeConfirm:"",onClose:d.closeConfirm,onRemove:d.removeCard},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(c.confirmSettings.text),1)])),_:1},8,["isOpen","onClose","onRemove"])],64)}var C=o(56);const E=C+"#edit",w=C+"#remove",T={class:"card__wrap"},S={class:"card__header"},I={class:"card__title"},O={class:"card__icons-wrap"},x=(0,r._)("svg",{class:"card__icon card__icon_edit"},[(0,r._)("use",{"xlink:href":E})],-1),D=(0,r._)("use",{"xlink:href":w},null,-1),N=[D],L={class:"card__body"};function A(e,t,o,n,c,d){const a=(0,r.up)("router-link"),s=(0,r.up)("ToDoItem");return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",S,[(0,r._)("p",I,(0,i.zw)(o.card.title),1),(0,r._)("div",O,[(0,r.Wm)(a,{to:`/edit/${o.card.id}`},{default:(0,r.w5)((()=>[x])),_:1},8,["to"]),((0,r.wg)(),(0,r.iD)("svg",{class:"card__icon card__icon_remove",onClick:t[0]||(t[0]=t=>e.$emit("removeCard",o.card.id))},N))])]),(0,r._)("div",L,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getTodosByCardId(o.card.id),(e=>((0,r.wg)(),(0,r.j4)(s,{item:e,key:e.id},null,8,["item"])))),128))])])}const j={class:"item__text"};function $(e,t,o,n,c,d){return(0,r.wg)(),(0,r.iD)("div",{class:"item__wrap",onClick:t[0]||(t[0]=(...e)=>d.onclick&&d.onclick(...e))},[(0,r._)("div",{class:(0,i.C_)({item__checkbox:!0,item__checkbox_checked:o.item.checked})},null,2),(0,r._)("p",j,(0,i.zw)(o.item.text),1)])}var M={props:{item:{type:Object,required:!0}},methods:{onclick(){this.$bus.emit("todos::toggleCheckedStatus",this.item.id)}}};const B=(0,u.Z)(M,[["render",$]]);var P=B,Z={components:{ToDoItem:P},props:{card:{type:Object,required:!0}},computed:{...(0,_.Se)(["getTodosByCardId"])}};const F=(0,u.Z)(Z,[["render",A]]);var R=F,U=o(48),W={components:{ToDoCard:R,Confirm:U.Z},props:{cards:{type:Array,required:!0}},computed:{isEmptyList(){return 0===this.cards.length}},data(){return{confirmSettings:{isOpen:!1,text:"Удалить заметку?",cardId:null}}},methods:{removeCard(){this.confirmSettings.cardId&&this.$bus.emit("cards::removeElement",this.confirmSettings.cardId),this.closeConfirm()},openConfirm(e){this.confirmSettings.cardId=e,this.confirmSettings.isOpen=!0},closeConfirm(){this.confirmSettings.cardId=null,this.confirmSettings.isOpen=!1}}};const q=(0,u.Z)(W,[["render",y]]);var z=q,G={name:"ToDoListView",components:{ToDoList:z},computed:{...(0,_.rn)(["cards"])},mounted(){const e=window.localStorage.getItem("todoListApp::cards"),t=window.localStorage.getItem("todoListApp::todos");e&&this.$store.commit("SET_CARDS",JSON.parse(e)),t&&this.$store.commit("SET_TODOS",JSON.parse(t))}};const H=(0,u.Z)(G,[["render",h]]);var J=H;const K=[{path:"/",alias:"/index.html",name:"list",component:J},{path:"/add",component:()=>o.e(675).then(o.bind(o,675))},{path:"/edit/:id",name:"edit",component:()=>o.e(548).then(o.bind(o,548))},{path:"/:pathMatch(.*)*",component:()=>o.e(112).then(o.bind(o,112))}],V=(0,p.p7)({history:(0,p.PO)("/"),routes:K});var Y=V;const Q=[{id:1,title:"Заголовок 1"},{id:2,title:"Заголовок 2"},{id:3,title:"Заголовок 3"},{id:4,title:"Заголовок 4"},{id:5,title:"Заголовок 5"},{id:6,title:"Заголовок 6"}],X=[{id:11,text:"Купить хлеб",checked:!0,cardId:1},{id:12,text:"Яблоки",checked:!1,cardId:1},{id:13,text:"Груши",checked:!1,cardId:1},{id:14,text:"Свежие бананы",checked:!1,cardId:1},{id:21,text:"Купить хлеб",checked:!1,cardId:2},{id:22,text:"Яблоки",checked:!0,cardId:2},{id:23,text:"Груши",checked:!1,cardId:2},{id:24,text:"Свежие бананы",checked:!1,cardId:2},{id:31,text:"Купить хлеб",checked:!1,cardId:3},{id:32,text:"Яблоки",checked:!0,cardId:3},{id:33,text:"Груши",checked:!1,cardId:3},{id:34,text:"Свежие бананы",checked:!1,cardId:3},{id:41,text:"Купить хлеб",checked:!1,cardId:4},{id:42,text:"Яблоки",checked:!0,cardId:4},{id:43,text:"Груши",checked:!1,cardId:4},{id:44,text:"Свежие бананы",checked:!1,cardId:4},{id:51,text:"Купить хлеб",checked:!1,cardId:5},{id:52,text:"Яблоки",checked:!1,cardId:5},{id:53,text:"Груши",checked:!1,cardId:5},{id:54,text:"Свежие бананы",checked:!1,cardId:5},{id:61,text:"Купить хлеб",checked:!1,cardId:6},{id:62,text:"Яблоки",checked:!0,cardId:6},{id:63,text:"Груши",checked:!1,cardId:6},{id:64,text:"Свежие бананы",checked:!1,cardId:6}];var ee=(0,_.MT)({state:{cards:Q,todos:X},getters:{getTodosByCardId:e=>t=>e.todos.filter((e=>e.cardId===t)),getFromStateById:e=>({stateName:t,id:o})=>e[t].find((e=>e.id===o))},mutations:{REMOVE_ELEMENT(e,{stateName:t,element:o}){const n=e[t].indexOf(o);e[t].splice(n,1)},UPDATE_ELEMENT(e,{stateName:t,stateElement:o,newData:n}){Object.assign(o,n)},ADD_NEW_ELEMENT(e,{stateName:t,newData:o}){e[t].push(o)},TOGGLE_TODO_STATUS(e,t){t.checked=!t.checked},SET_CARDS(e,t){e.cards=t},SET_TODOS(e,t){e.todos=t}},actions:{removeElement({commit:e,getters:t},{stateName:o,data:n}){const r=t.getFromStateById({stateName:o,id:n});e("REMOVE_ELEMENT",{stateName:o,element:r})},updateElement({commit:e,getters:t},{stateName:o,data:n}){const r=t.getFromStateById({stateName:o,id:n.id});e(r?"UPDATE_ELEMENT":"ADD_NEW_ELEMENT",{stateName:o,stateElement:r,newData:n})},toggleCheckedStatus({commit:e,getters:t},{stateName:o,data:n}){const r=t.getFromStateById({stateName:o,id:n});e("TOGGLE_TODO_STATUS",r)}}}),te=o(391);const oe=(0,n.ri)(f);oe.use(ee).use(Y),oe.config.globalProperties.$bus=(0,te.Z)(),oe.mount("#app")},56:function(e,t,o){e.exports=o.p+"img/sprite.4377e7e8.svg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var d=!0,a=0;a<n.length;a++)(!1&i||c>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(d=!1,i<c&&(c=i));if(d){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{112:"897d1667",548:"d5b4bf81",675:"3bfecd16"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{548:"b3b6c15b",675:"b3b6c15b"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="todo-list:";o.l=function(n,r,i,c){if(e[n])e[n].push(r);else{var d,a;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){d=u;break}}d||(a=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+i),d.src=n),e[n]=[r];var m=function(t,o){d.onerror=d.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=m.bind(null,d.onerror),d.onload=m.bind(null,d.onload),a&&document.head.appendChild(d)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)o();else{var c=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=c,a.request=d,r.parentNode.removeChild(r),n(a)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var c=document.getElementsByTagName("style");for(n=0;n<c.length;n++){r=c[n],i=r.getAttribute("data-href");if(i===e||i===t)return r}},n=function(n){return new Promise((function(r,i){var c=o.miniCssF(n),d=o.p+c;if(t(c,d))return r();e(n,d,r,i)}))},r={143:0};o.f.miniCss=function(e,t){var o={548:1,675:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var c=o.p+o.u(t),d=new Error,a=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",d.name="ChunkLoadError",d.type=i,d.request=c,r[1](d)}};o.l(c,a,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,c=n[0],d=n[1],a=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(a)var l=a(o)}for(t&&t(n);s<c.length;s++)i=c[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(361)}));n=o.O(n)})();
//# sourceMappingURL=app.8769e60d.js.map
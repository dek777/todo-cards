"use strict";(self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[]).push([[675],{688:function(t,e,o){o.d(e,{Z:function(){return O}});var i=o(252),n=o(963),d=o(577);const s=t=>((0,i.dD)("data-v-39e5a93e"),t=t(),(0,i.Cn)(),t),r={class:"card__wrap"},a={class:"card__input"},c={key:0},l=s((()=>(0,i._)("p",{class:"card__todos-title"},"Список дел",-1))),h={key:1,class:"card__todos_empty"},u={class:"card__add-todo"},m={class:"card__input"},p={class:"card__footer"};function f(t,e,o,s,f,_){const v=(0,i.up)("ToDoEditItem"),C=(0,i.up)("Confirm");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",r,[(0,i._)("div",a,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>f.editedCard.title=t)},null,512),[[n.nr,f.editedCard.title]])]),f.todos.length?((0,i.wg)(),(0,i.iD)("div",c,[l,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.todos,(t=>((0,i.wg)(),(0,i.j4)(v,{key:t.id,item:t,onChangeItem:_.todoChange,onRemoveTodo:_.removeTodo},null,8,["item","onChangeItem","onRemoveTodo"])))),128))])):((0,i.wg)(),(0,i.iD)("div",h)),(0,i._)("div",u,[(0,i._)("div",m,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>f.newTodoText=t)},null,512),[[n.nr,f.newTodoText]])]),(0,i._)("button",{class:"card__btn_save",onClick:e[2]||(e[2]=(0,n.iM)(((...t)=>_.addNewTodo&&_.addNewTodo(...t)),["prevent"]))},"Добавить")]),(0,i._)("div",p,[(0,i._)("button",{class:"card__btn_save",onClick:e[3]||(e[3]=(0,n.iM)(((...t)=>_.showSaveConfirm&&_.showSaveConfirm(...t)),["prevent"]))},"Сохранить"),(0,i._)("a",{class:"card__btn_cancel",onClick:e[4]||(e[4]=(0,n.iM)(((...t)=>_.showCancelConfirm&&_.showCancelConfirm(...t)),["prevent"]))},"Отмена")])]),(0,i.Wm)(C,{isOpen:f.confirmSettings.isOpen,removeTypeConfirm:f.confirmSettings.removeTypeConfirm,onClose:e[5]||(e[5]=t=>f.confirmSettings.isOpen=!1),onConfirm:_.saveChanges,onRemove:_.cancelWithoutSaving},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(f.confirmSettings.text),1)])),_:1},8,["isOpen","removeTypeConfirm","onConfirm","onRemove"])],64)}var _=o(907),v=o(56);const C=v+"#remove",g=(0,i._)("use",{"xlink:href":C},null,-1),T=[g];function w(t,e,o,s,r,a){return(0,i.wg)(),(0,i.iD)("div",{class:"item-edit__wrap",onDblclick:e[4]||(e[4]=(...t)=>a.focusInput&&a.focusInput(...t))},[r.editMode?(0,i.wy)(((0,i.wg)(),(0,i.iD)("textarea",{key:0,ref:"input",class:"item-edit__input",style:(0,d.j5)({height:r.textBlockHeight?`${r.textBlockHeight}px`:"auto"}),"onUpdate:modelValue":e[0]||(e[0]=t=>r.editedItem.text=t),onBlur:e[1]||(e[1]=(...t)=>a.inputBlur&&a.inputBlur(...t)),onInput:e[2]||(e[2]=(...t)=>a.onInput&&a.onInput(...t))},null,36)),[[n.nr,r.editedItem.text]]):((0,i.wg)(),(0,i.iD)("p",{key:1,ref:"text",class:(0,d.C_)(["item-edit__text",o.item.checked?"item-edit__text_stroked":""])},(0,d.zw)(o.item.text),3)),((0,i.wg)(),(0,i.iD)("svg",{class:"item-edit__remove-btn",onClick:e[3]||(e[3]=(...t)=>a.removeClick&&a.removeClick(...t))},T))],32)}var x={props:{item:{type:Object,required:!0}},data(){return{editMode:!1,editedItem:{id:this.item.id,text:this.item.text},textBlockHeight:null}},methods:{focusInput(){this.textBlockHeight=this.$refs.text.clientHeight,this.editMode=!0,this.$nextTick((()=>{this.$refs.input.focus()}))},inputBlur(){this.editMode=!1},onInput(){this.$emit("changeItem",this.editedItem),this.changeHeight()},changeHeight(){this.textBlockHeight=this.textBlockHeight<this.$refs.input.scrollHeight?this.$refs.input.scrollHeight:this.textBlockHeight},removeClick(){this.$emit("removeTodo",this.item.id)}}},k=o(744);const y=(0,k.Z)(x,[["render",w]]);var I=y,D=o(48),b=o(103),H={components:{ToDoEditItem:I,Confirm:D.Z},props:{card:{type:Object,required:!0}},data(){return{todos:[],deletedTodos:[],editedCard:{id:this.card.id,title:this.card.title},confirmSettings:{isOpen:!1,removeTypeConfirm:!1,text:""},newTodoText:""}},computed:{...(0,_.Se)(["getTodosByCardId"])},mounted(){this.todos=this.getTodosByCardId(this.card.id)},methods:{todoChange(t){const e=this.todos.find((e=>e.id===t.id));e.text=t.text},removeTodo(t){const e=this.todos.find((e=>e.id===t)),o=this.todos.indexOf(e);this.todos.splice(o,1),this.deletedTodos.push(t)},saveChanges(){this.deletedTodos.forEach((t=>this.$bus.emit("todos::removeElement",t))),this.todos.forEach((t=>this.$bus.emit("todos::updateElement",t))),this.$bus.emit("cards::updateElement",this.editedCard),this.$router.push({name:"list"})},addNewTodo(){this.newTodoText&&(this.todos.push({id:(0,b.O)(),text:this.newTodoText,checked:!1,cardId:this.editedCard.id}),this.newTodoText="")},showCancelConfirm(){this.confirmSettings={removeTypeConfirm:!0,text:"Отменить изменения и выйти?",isOpen:!0}},showSaveConfirm(){this.confirmSettings={removeTypeConfirm:!1,text:"Сохранить изменения и выйти?",isOpen:!0}},cancelWithoutSaving(){this.$router.push({name:"list"})}}};const B=(0,k.Z)(H,[["render",f],["__scopeId","data-v-39e5a93e"]]);var O=B},675:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var i=o(252);function n(t,e,o,n,d,s){const r=(0,i.up)("ToDoEditCard");return(0,i.wg)(),(0,i.j4)(r,{card:d.card},null,8,["card"])}var d=o(688),s=o(103),r={name:"ToDoAddView",components:{ToDoEditCard:d.Z},data(){return{card:{id:(0,s.O)(),title:""}}}},a=o(744);const c=(0,a.Z)(r,[["render",n]]);var l=c},103:function(t,e,o){function i(){return Math.floor(1e5+9e5*Math.random())}o.d(e,{O:function(){return i}})}}]);
//# sourceMappingURL=675.3bfecd16.js.map
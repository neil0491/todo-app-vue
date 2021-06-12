(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4180a762"],{"1d21":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"ma-3",attrs:{elevation:"2",outlined:""}},[i("v-btn",{staticClass:"ma-3",attrs:{tile:"",color:"primary"},on:{click:t.onGoBack}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-arrow-left ")]),t._v(" Back ")],1),i("v-card-title",[t._v(t._s(t.task.title))]),i("v-card-text",[t._v(" "+t._s(t.task.description)+" ")]),i("v-card-text",t._l(t.task.chips,(function(e,n){return i("v-chip",{key:n,staticClass:"ma-2"},[t._v(" "+t._s(e)+" ")])})),1),i("v-card-actions",[i("v-list-item",{staticClass:"grow"},[i("v-list-item-avatar",[i("v-icon",{class:t.task.status?"green":"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-check ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.task.date))])],1),i("Modal",{attrs:{task:t.task}}),i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"pink"},on:{click:function(e){return t.onDelete(t.task.id)}}},[i("v-icon",{attrs:{dark:""}},[t._v(" mdi-delete ")])],1)],1)],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-4",attrs:{small:"",fab:"",dark:"",color:"cyan"}},"v-btn",a,!1),n),[i("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{staticClass:"pa-4"},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{ref:"title",attrs:{value:t.task.title,rules:t.rules.titleRules,label:"Title",clearable:"",required:""}}),i("v-textarea",{ref:"description",attrs:{counter:"2048",label:"Text",rules:t.rules.description,value:t.task.description}}),i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.task.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){return t.$set(t.task,"date",e)},"update:return-value":function(e){return t.$set(t.task,"date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-text-field",t._g(t._b({attrs:{value:t.task.date,label:"Pick date","prepend-icon":"mdi-calendar",readonly:""}},"v-text-field",a,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.task.date,callback:function(e){t.$set(t.task,"date",e)},expression:"task.date"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.task.date)}}},[t._v(" OK ")])],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:t.onUpdateTask}},[t._v(" Update ")])],1)],1)],1)],1)},o=[],r=(i("a4d3"),i("e01a"),{components:{},name:"Modal",props:{task:Object},data:function(){return{dialog:!1,chipText:"",menu:!1,valid:!1,chipValid:!1,rules:{titleRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}],description:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=2048||"Max 2048 characters"}]}}},methods:{onUpdateTask:function(){this.$store.dispatch("updateTask",{id:this.task.id,description:this.$refs.description.internalValue,title:this.$refs.title.internalValue}),this.dialog=!1}},mounted:function(){},created:function(){}}),l=r,c=i("2877"),d=i("6544"),u=i.n(d),h=i("8336"),v=i("b0af"),f=i("99d9"),m=i("2e4b"),p=i("5530"),y=i("2909"),b=i("ade3"),g=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),k=i("4ad4"),w=i("b848"),x=i("75eb"),C=(i("3c93"),i("a9ad")),O=i("7560"),$=i("f2e7"),_=i("58df"),A=Object(_["a"])(C["a"],O["a"],$["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(p["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),S=A,T=i("80d2"),E=i("2b0e"),I=E["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new S({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(T["o"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(T["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[T["q"].up,T["q"].pageup],i=[T["q"].down,T["q"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,a=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(a,n))||this.shouldScroll(n,i)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(T["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),V=i("e4d3"),B=i("21be"),j=i("a293"),L=i("d9bd"),N=Object(_["a"])(k["a"],w["a"],x["a"],I,V["a"],B["a"],$["a"]),D=N.extend({name:"v-dialog",directives:{ClickOutside:j["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(b["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(b["a"])(t,"v-dialog--active",this.isActive),Object(b["a"])(t,"v-dialog--persistent",this.persistent),Object(b["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(b["a"])(t,"v-dialog--scrollable",this.scrollable),Object(b["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(L["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):I.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===T["q"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(y["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(g["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(p["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(p["a"])(Object(p["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(T["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(T["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),F=i("ce7e"),M=i("4bd4"),q=i("132d"),P=i("e449"),z=i("2fa4"),Z=i("8654"),H=i("a844"),U=Object(c["a"])(l,s,o,!1,null,null,null),W=U.exports;u()(U,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VDatePicker:m["a"],VDialog:D,VDivider:F["a"],VForm:M["a"],VIcon:q["a"],VMenu:P["a"],VSpacer:z["a"],VTextField:Z["a"],VTextarea:H["a"]});var Y={components:{Modal:W},name:"Task",data:function(){return{openModal:!1}},methods:{onDelete:function(t){this.$router.push({name:"List"}),this.$store.commit("deleteTask",t)},onGoBack:function(){this.$router.go(-1)}},computed:{task:function(){return this.$store.getters.taskById(+this.$route.params.id)}}},K=Y,R=i("cc20"),G=i("da13"),J=i("8270"),X=i("5d23"),Q=Object(c["a"])(K,n,a,!1,null,null,null);e["default"]=Q.exports;u()(Q,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VChip:R["a"],VIcon:q["a"],VListItem:G["a"],VListItemAvatar:J["a"],VListItemContent:X["b"],VListItemTitle:X["d"]})},"368e":function(t,e,i){},"3c93":function(t,e,i){}}]);
//# sourceMappingURL=chunk-4180a762.8ac70ad0.js.map
/**
 * vue-formly-bootstrap v2.2.4
 * https://github.com/matt-sanders/vue-formly-bootstrap
 * Released under the MIT License.
 */

(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define([],factory);else if(typeof exports==="object")exports["VueFormlyBootstrap"]=factory();else root["VueFormlyBootstrap"]=factory()})(this,function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)}(function(modules){for(var i in modules){if(Object.prototype.hasOwnProperty.call(modules,i)){switch(typeof modules[i]){case"function":break;case"object":modules[i]=function(_m){var args=_m.slice(1),fn=modules[_m[0]];return function(a,b,c){fn.apply(this,[a,b,c].concat(args))}}(modules[i]);break;default:modules[i]=modules[modules[i]];break}}}return modules}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _index=__webpack_require__(1);var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var Fields=__webpack_require__(37);var FormlyBootstrap={install:function install(Vue,options){(0,_index2.default)(Vue);Fields.keys().forEach(function(key){var component=key.replace(/^\.\//,"").replace(/\.vue/,"").replace(/^field/,"");component=component.charAt(0).toLowerCase()+component.slice(1);Vue.$formly.addType(component,Fields(key))})}};if(typeof window!=="undefined"&&window.Vue){window.Vue.use(FormlyBootstrap)}exports.default=FormlyBootstrap},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(2);var _keys2=_interopRequireDefault(_keys);exports.default=function(Vue){Vue.directive("formly-atts",{bind:function bind(el,binding){if(!binding.value)return;(0,_keys2.default)(binding.value).forEach(function(key){el.setAttribute(key,binding.value[key])})}});Vue.directive("formly-input-type",{bind:function bind(el,binding){if(!binding.value)return;el.setAttribute("type",binding.value)}})};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}},function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(3),__esModule:true}},function(module,exports,__webpack_require__){__webpack_require__(4);module.exports=__webpack_require__(24).Object.keys},function(module,exports,__webpack_require__){var toObject=__webpack_require__(5),$keys=__webpack_require__(7);__webpack_require__(22)("keys",function(){return function keys(it){return $keys(toObject(it))}})},function(module,exports,__webpack_require__){var defined=__webpack_require__(6);module.exports=function(it){return Object(defined(it))}},function(module,exports){module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it}},function(module,exports,__webpack_require__){var $keys=__webpack_require__(8),enumBugKeys=__webpack_require__(21);module.exports=Object.keys||function keys(O){return $keys(O,enumBugKeys)}},function(module,exports,__webpack_require__){var has=__webpack_require__(9),toIObject=__webpack_require__(10),arrayIndexOf=__webpack_require__(13)(false),IE_PROTO=__webpack_require__(17)("IE_PROTO");module.exports=function(object,names){var O=toIObject(object),i=0,result=[],key;for(key in O)if(key!=IE_PROTO)has(O,key)&&result.push(key);while(names.length>i)if(has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key)}return result}},function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},function(module,exports,__webpack_require__){var IObject=__webpack_require__(11),defined=__webpack_require__(6);module.exports=function(it){return IObject(defined(it))}},function(module,exports,__webpack_require__){var cof=__webpack_require__(12);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return cof(it)=="String"?it.split(""):Object(it)}},function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},function(module,exports,__webpack_require__){var toIObject=__webpack_require__(10),toLength=__webpack_require__(14),toIndex=__webpack_require__(16);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIObject($this),length=toLength(O.length),index=toIndex(fromIndex,length),value;if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true}else for(;length>index;index++)if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0}return!IS_INCLUDES&&-1}}},function(module,exports,__webpack_require__){var toInteger=__webpack_require__(15),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},function(module,exports){var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},function(module,exports,__webpack_require__){var toInteger=__webpack_require__(15),max=Math.max,min=Math.min;module.exports=function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length)}},function(module,exports,__webpack_require__){var shared=__webpack_require__(18)("keys"),uid=__webpack_require__(20);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},function(module,exports,__webpack_require__){var global=__webpack_require__(19),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},function(module,exports){var global=module.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();if(typeof __g=="number")__g=global},function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(key===undefined?"":key,")_",(++id+px).toString(36))}},function(module,exports){module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(module,exports,__webpack_require__){var $export=__webpack_require__(23),core=__webpack_require__(24),fails=__webpack_require__(33);module.exports=function(KEY,exec){var fn=(core.Object||{})[KEY]||Object[KEY],exp={};exp[KEY]=exec(fn);$export($export.S+$export.F*fails(function(){fn(1)}),"Object",exp)}},function(module,exports,__webpack_require__){var global=__webpack_require__(19),core=__webpack_require__(24),ctx=__webpack_require__(25),hide=__webpack_require__(27),PROTOTYPE="prototype";var $export=function(type,name,source){var IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE],key,own,out;if(IS_GLOBAL)source=name;for(key in source){own=!IS_FORCED&&target&&target[key]!==undefined;if(own&&key in exports)continue;out=own?target[key]:source[key];exports[key]=IS_GLOBAL&&typeof target[key]!="function"?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};F[PROTOTYPE]=C[PROTOTYPE];return F}(out):IS_PROTO&&typeof out=="function"?ctx(Function.call,out):out;if(IS_PROTO){(exports.virtual||(exports.virtual={}))[key]=out;if(type&$export.R&&expProto&&!expProto[key])hide(expProto,key,out)}}};$export.F=1;$export.G=2;$export.S=4;$export.P=8;$export.B=16;$export.W=32;$export.U=64;$export.R=128;module.exports=$export},function(module,exports){var core=module.exports={version:"2.4.0"};if(typeof __e=="number")__e=core},function(module,exports,__webpack_require__){var aFunction=__webpack_require__(26);module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},function(module,exports){module.exports=function(it){if(typeof it!="function")throw TypeError(it+" is not a function!");return it}},function(module,exports,__webpack_require__){var dP=__webpack_require__(28),createDesc=__webpack_require__(36);module.exports=__webpack_require__(32)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){object[key]=value;return object}},function(module,exports,__webpack_require__){var anObject=__webpack_require__(29),IE8_DOM_DEFINE=__webpack_require__(31),toPrimitive=__webpack_require__(35),dP=Object.defineProperty;exports.f=__webpack_require__(32)?Object.defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");if("value"in Attributes)O[P]=Attributes.value;return O}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(30);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},function(module,exports){module.exports=function(it){return typeof it==="object"?it!==null:typeof it==="function"}},function(module,exports,__webpack_require__){module.exports=!__webpack_require__(32)&&!__webpack_require__(33)(function(){return Object.defineProperty(__webpack_require__(34)("div"),"a",{get:function(){return 7}}).a!=7})},function(module,exports,__webpack_require__){module.exports=!__webpack_require__(33)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return true}}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(30),document=__webpack_require__(19).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(30);module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=="function"&&!isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=="function"&&!isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=="function"&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value}}},function(module,exports,__webpack_require__){var map={"./fieldInput.vue":38,"./fieldList.vue":45,"./fieldSelect.vue":48,"./fieldTextarea.vue":51};function webpackContext(req){return __webpack_require__(webpackContextResolve(req))}function webpackContextResolve(req){return map[req]||function(){throw new Error("Cannot find module '"+req+"'.")}()}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)};webpackContext.resolve=webpackContextResolve;module.exports=webpackContext;webpackContext.id=37},function(module,exports,__webpack_require__){var __vue_script__,__vue_template__;__vue_script__=__webpack_require__(39);__vue_template__=__webpack_require__(44);module.exports=__vue_script__||{};if(module.exports.__esModule)module.exports=module.exports.default;if(__vue_template__){(typeof module.exports==="function"?module.exports.options||(module.exports.options={}):module.exports).template=__vue_template__}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _baseField=__webpack_require__(40);var _baseField2=_interopRequireDefault(_baseField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}exports.default={mixins:[_baseField2.default],methods:{onChange:function onChange(e){this.$set(this.form[this.field.key],"$dirty",true);this.runFunction("onChange",e);if(this.to.inputType=="file"){this.$set(this.model,this.field.key,this.$el.querySelector("input").files)}}}}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(2);var _keys2=_interopRequireDefault(_keys);var _errorDisplay=__webpack_require__(41);var _errorDisplay2=_interopRequireDefault(_errorDisplay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}exports.default={props:["form","field","model","to"],created:function created(){var state={$dirty:false,$active:false,$hasError:false};this.$set(this.form,this.field.key,state)},methods:{runFunction:function runFunction(action,e){if(typeof this.to[action]=="function")this.to[action].call(this,e)},onFocus:function onFocus(e){this.$set(this.form[this.field.key],"$active",true);this.runFunction("onFocus",e)},onBlur:function onBlur(e){this.$set(this.form[this.field.key],"$dirty",true);this.$set(this.form[this.field.key],"$active",false);this.runFunction("onBlur",e)},onClick:function onClick(e){this.runFunction("onClick",e)},onChange:function onChange(e){this.$set(this.form[this.field.key],"$dirty",true);this.runFunction("onChange",e)},onKeyup:function onKeyup(e){this.runFunction("onKeyup",e)},onKeydown:function onKeydown(e){this.runFunction("onKeydown",e)}},computed:{hasError:function hasError(){if(this.form[this.field.key].$dirty==false||this.form[this.field.key].$active==true){return false}var errors=this.form.$errors[this.field.key];var hasErrors=false;(0,_keys2.default)(errors).forEach(function(err){if(errors[err]!==false)hasErrors=true});this.$set(this.form[this.field.key],"$hasError",hasErrors);return hasErrors}},components:{"error-display":_errorDisplay2.default}}},function(module,exports,__webpack_require__){var __vue_script__,__vue_template__;__vue_script__=__webpack_require__(42);__vue_template__=__webpack_require__(43);module.exports=__vue_script__||{};if(module.exports.__esModule)module.exports=module.exports.default;if(__vue_template__){(typeof module.exports==="function"?module.exports.options||(module.exports.options={}):module.exports).template=__vue_template__}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(2);var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}exports.default={props:["field","form"],computed:{message:function message(){var message=false;if(!(this.field in this.form.$errors)||!(this.field in this.form)||this.form[this.field].$active||!this.form[this.field].$dirty)return message;var errors=this.form.$errors[this.field];(0,_keys2.default)(errors).some(function(errorKey){if(typeof errors[errorKey]!="boolean"){message=errors[errorKey];return true}});return message}}}},function(module,exports){module.exports=' <span v-if=message class="help-block form-text text-danger">{{message}}</span> '},function(module,exports){module.exports=' <div class="form-group formly-input" :class="[ to.inputType, {\'formly-has-value\': model[field.key], \'formly-has-focus\': form[field.key].$active, \'has-error has-danger\': hasError}]"> <label v-if=to.label :for="to.id ? to.id : null">{{to.label}}</label> <input class=form-control :class=to.classes :id="to.id ? to.id : null" type=text v-model=model[field.key] @blur=onBlur @focus=onFocus @click=onClick @change=onChange @keyup=onKeyup @keydown=onKeydown v-formly-atts=to.atts v-formly-input-type=to.inputType> <error-display :form=form :field=field.key></error-display> </div> '},function(module,exports,__webpack_require__){var __vue_script__,__vue_template__;__vue_script__=__webpack_require__(46);__vue_template__=__webpack_require__(47);module.exports=__vue_script__||{};if(module.exports.__esModule)module.exports=module.exports.default;if(__vue_template__){(typeof module.exports==="function"?module.exports.options||(module.exports.options={}):module.exports).template=__vue_template__}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _baseField=__webpack_require__(40);var _baseField2=_interopRequireDefault(_baseField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}exports.default={mixins:[_baseField2.default],created:function created(){var type=this.to.inputType;if((!type||type=="checkbox")&&this.model[this.field.key]=="")this.$set(this.model,this.field.key,[])}}},function(module,exports){module.exports=' <div class="checkbox formly-list" :id=to.id :class="[to.classes, {\'has-error has-danger\': hasError}]"> <label v-for="option in field.options"> <input v-if="!to.inputType || to.inputType == \'checkbox\'" type=checkbox v-model=model[field.key] :value="option.value || option" @blur=onBlur @focus=onFocus @click=onClick @change=onChange @keyup=onKeyup @keydown=onKeydown v-formly-atts=to.atts> <input v-if="to.inputType == \'radio\'" type=radio v-model=model[field.key] :value="option.value || option" @blur=onBlur @focus=onFocus @click=onClick @change=onChange @keyup=onKeyup @keydown=onKeydown v-formly-atts=to.atts> {{option.label || option}} </label> <error-display :form=form :field=field.key></error-display> </div> '},function(module,exports,__webpack_require__){var __vue_script__,__vue_template__;__vue_script__=__webpack_require__(49);__vue_template__=__webpack_require__(50);module.exports=__vue_script__||{};if(module.exports.__esModule)module.exports=module.exports.default;if(__vue_template__){(typeof module.exports==="function"?module.exports.options||(module.exports.options={}):module.exports).template=__vue_template__}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _baseField=__webpack_require__(40);var _baseField2=_interopRequireDefault(_baseField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}exports.default={mixins:[_baseField2.default]}},function(module,exports){module.exports=' <div class="form-group formly-select" :class="{\'has-error has-danger\': hasError}"> <label v-if=to.label :for="to.id ? to.id : null">{{to.label}}</label> <select class=form-control :class=to.classes :id="to.id ? to.id : null" v-model=model[field.key] @blur=onBlur @focus=onFocus @click=onClick @change=onChange @keyup=onKeyup @keydown=onKeydown v-formly-atts=to.atts> <option v-for="option in field.options" :value="option.value || option">{{option.label || option}}</option> </select> <error-display :form=form :field=field.key></error-display> </div> '},function(module,exports,__webpack_require__){var __vue_script__,__vue_template__;__vue_script__=__webpack_require__(52);__vue_template__=__webpack_require__(53);module.exports=__vue_script__||{};if(module.exports.__esModule)module.exports=module.exports.default;if(__vue_template__){(typeof module.exports==="function"?module.exports.options||(module.exports.options={}):module.exports).template=__vue_template__}},49,function(module,exports){module.exports=' <div class="form-group formly-textarea" :class="{\'formly-has-value\': model[field.key], \'formly-has-focus\': form[field.key].$active, \'has-error has-danger\': hasError}"> <label v-if=to.label :for="to.id ? to.id : null">{{to.label}}</label> <textarea class=form-control :class=to.classes :id="to.id ? to.id : null" v-model=model[field.key] @blur=onBlur @focus=onFocus @click=onClick @change=onChange @keyup=onKeyup @keydown=onKeydown v-formly-atts=to.atts></textarea> <error-display :form=form :field=field.key></error-display> </div> '}]))});
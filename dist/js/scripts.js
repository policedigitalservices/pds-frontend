!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(25),o=n(26),i=n(8),a=n(27);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=function(){function e(t){o()(this,e),this._name=t,this._initialise()}return a()(e,[{key:"_initialise",value:function(){var e=this,t=document.cookie.split("; ").find((function(t){return t.startsWith("".concat(e._name,"="))}));this._value=t?decodeURIComponent(t.split("=")[1]):""}},{key:"set",value:function(e){var t="".concat(this._name,"=").concat(encodeURIComponent(e),"; path=/; samesite=Strict");document.cookie=t}},{key:"get",value:function(){return this._value}}]),e}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(10),o=n.n(r),i=n(0),a=n.n(i),c=n(1),s=n.n(c),l=function(){function e(t){var n=this;a()(this,e),this._name=t;var r=this._initialise();this._items=new Map,r.forEach((function(e){var t=e.id,r=e.name;return n._items.set(t,r)}))}return s()(e,[{key:"_initialise",value:function(){var e=sessionStorage.getItem(this._name);return e?JSON.parse(e):(this._persist([]),[])}},{key:"_update",value:function(){var e=this.getItems();this._persist(e)}},{key:"_persist",value:function(e){sessionStorage.setItem(this._name,JSON.stringify(e))}},{key:"setItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this._items=new Map,t.forEach((function(t){return e._items.set(t.id,t.name)})),this._update(),this.getCount()}},{key:"getIds",value:function(){return Array.from(this._items.keys())}},{key:"filterByIds",value:function(e){var t=this;return this.getIds().forEach((function(n){e.includes(n)||t.remove(n)}))}},{key:"getCount",value:function(){return this._items.size}},{key:"remove",value:function(e){return this._items.delete(e),this._update(),this.getCount()}},{key:"add",value:function(e,t){return this._items.set(e,t),this._update(),this.getCount()}},{key:"getItems",value:function(){return Array.from(this._items.entries()).map((function(e){var t=o()(e,2);return{id:t[0],name:t[1]}}))}},{key:"getName",value:function(e){return this._items.get(e)}},{key:"hasId",value:function(e){return this._items.has(e)}},{key:"clearItems",value:function(){return this.setItems([])}}]),e}()},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(2),o=n.n(r),i=n(0),a=n.n(i),c=n(1),s=n.n(c),l=function(){function e(t,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;a()(this,e),this.onUpdateFunc=i,this.tagOptions=document.getElementById(t),this.tagOptions.classList.add("is-hidden"),n&&(this.revertBtn=document.getElementById(n),this.revertBtn&&this.revertBtn.addEventListener("click",(function(e){e.preventDefault(),r.tagOptions.querySelectorAll("option").forEach((function(e){return e.selected=!0})),r.populateTags(),r.revertBtn.classList.add("is-hidden")}))),c&&c.forEach((function(e){return r.tagOptions.appendChild(e)})),this.allOptions=c||o()(this.tagOptions.querySelectorAll("option")),this.revertBtn&&this.allOptions.some((function(e){return!e.selected}))&&this.revertBtn.classList.remove("is-hidden"),this.tags=document.createElement("div"),this.tags.addEventListener("click",(function(e){if(e.preventDefault(),e.target.matches("i")){var t=e.target.dataset.val,n=r.tagOptions.querySelector('option[value="'+t+'"]');n&&(n.selected=!1,r.revertBtn&&r.revertBtn.classList.remove("is-hidden")),r.populateTags()}})),this.tagOptions.after(this.tags),this.populateTags()}return s()(e,[{key:"populateTags",value:function(){var e=this;this.tags.innerHTML="";var t=this.allOptions.filter((function(e){return e.selected}));t.forEach((function(t){e.tags.appendChild(e.makeTag(t.innerText,t.value))})),this.onUpdateFunc(t,this.allOptions)}},{key:"makeTag",value:function(e,t){var n=document.createElement("i");n.classList.add("button__icon"),n.dataset.val=t,n.innerText="clear";var r=document.createElement("div");return r.classList.add("tag"),r.appendChild(document.createTextNode(e)),r.appendChild(n),r}},{key:"clearItems",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.tagOptions.querySelectorAll("option");t.forEach((function(e){return e.selected=!1})),e&&this.populateTags()}}]),e}();if(document.getElementById("FollowupGroupSelector")){var u=document.getElementById("ResponseGroupsLabelSpan");new l("FollowupGroupSelector","revert_groups",(function(e,t){var n=1===e.length?"group":"groups";u.innerText="Send to ".concat(e.length," response ").concat(n)}))}},function(e,t,n){e.exports=n(29)},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(7);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){function n(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,s,"next",e)}function s(e){n(a,o,i,c,s,"throw",e)}c(void 0)}))}}},function(e,t,n){var r=n(30),o=n(31),i=n(8),a=n(32);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},,,function(e,t,n){n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(5),n(28),n(35),n(33),e.exports=n(34)},function(e,t){document.body.classList.remove("no-js"),document.body.classList.add("js")},function(e,t){var n=document.getElementById("Group");if(n){var r=n.hasAttribute("data-with-checkbox"),o=n.hasAttribute("data-with-single-select-checkbox"),i=n.hasAttribute("data-lock-root");!function(e,t,n){var r=[],o=document.getElementById("GroupSelector"),a=document.getElementById("GroupTextarea");if(null!==o){o.parentElement.classList.add("is-hidden"),a.parentElement.classList.remove("is-hidden");for(var c=o.querySelectorAll("option:checked"),s=0;s<c.length;s++)r.push(c[s].value||"\\")}null!==a&&a.addEventListener("click",(function(e){var t=e.target;if(t.matches(".tag>.button__icon")&&t.hasAttribute("data-path")){var n='input[type=checkbox].GroupItem[value="'+t.getAttribute("data-path").replace(/\\/g,"\\\\")+'"]',r=document.querySelector(n);r&&r.click()}}));var l=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,r){e[n]=r}));return e}(),u=window.location.origin+window.location.pathname+"?group=",d=l.group;l.Search;function f(e,t){var n,r=document.createElement("a");return r.textContent=e,r.href=u+(""===(n=t)?"\\":n),r.classList.add("group-selector__link"),r}function p(){for(var e=[],t=document.querySelectorAll(".GroupItem"),n=0;n<t.length;n++)i&&!t[n].value||t[n].checked&&e.push(t[n].value);!function(e){var t=document.getElementById("GroupTextarea");if(t){t.innerHTML="";for(var n=document.getElementById("GroupSelector"),r=Array.from(n.options).map((function(e){return e.value})),o=0;o<e.length;o++){var a=e[o];if(t.innerHTML="\\"===a&&i?t.innerHTML:"\\"===a?t.innerHTML+'<div class="tag">All Contact Groups<i class="button__icon" data-path="'+a+'">clear</i></div>':t.innerHTML+'<div class="tag">'+a.substring(1)+'<i class="button__icon" data-path="'+a+'">clear</i></div>',r.indexOf(a)<0){var c=document.createElement("option");c.selected=!0,c.value=a,c.innerText=a,n.appendChild(c)}}for(var s=0;s<n.options.length;s++)n.options[s].selected=e.indexOf(n.options[s].value)>=0}}(e)}function h(e,o,a,c){if(t||n){""===a&&(a="\\"),e.appendChild(function(e,t){var n=document.createElement("label");return n.innerHTML=e,n.for=e,n.setAttribute("for",e),n}(o));var s=function(e,t,o){var a=document.createElement("input");a.type="checkbox",a.setAttribute("class","GroupItem"),a.name=e,a.value=t,a.id=e;var c=o;if("\\"===t&&i)a.checked=!0,a.disabled=!0;else if(o&&!n)a.checked=!1,a.disabled=!0;else{var s=r.indexOf(t||"\\")>=0;a.checked=s,c=s}if(n){var l=document.createElement("label");l.classList.add("radio-checkbox");var u=document.createElement("span");u.classList.add("radio-checkbox__check");var d=document.createElement("span");d.classList.add("radio-checkbox__border"),d.appendChild(a),d.appendChild(u),l.appendChild(d),a.classList.add("radio-checkbox__input"),a=l}return{checkbox:a,newParentSelected:c}}(o,a,c);return e.appendChild(s.checkbox),s.newParentSelected}return e.appendChild(f(o,a)),c}function m(e,t,n){for(var r=0;r<t.length;r++){var o=t[r];o!==e&&n(o)}}var v=(o=document.querySelector("#Group")).querySelectorAll("option"),g=document.createElement("input");g.setAttribute("type","hidden"),g.setAttribute("name","Group"),g.value=d||"\\";for(var y={},b=0;b<v.length;b++){var _=v[b];if(""!==_.textContent)for(var L=_.textContent.split("\\"),w=y,k=0;k<L.length;k++){var E=L[k];""!==E&&(w[E]||(w[E]={}),w=w[E])}}var S=document.createElement("ul");S.classList.add("group-selector__list"),S.classList.add("group-selector__list--root"),S.addEventListener("click",(function(e){var t=e.target;if(t.matches("input[type=checkbox]")&&function(e,t){var r=t.parentNode;if(n)t.checked?m(t,document.querySelectorAll(".group-selector__list--root input[type=checkbox]"),(function(e){e.checked=!1})):(e.preventDefault(),t.checked=!0);else if(r.classList.contains("group-selector__group--parent")){var o=r.querySelectorAll("input[type=checkbox");t.checked?m(t,o,(function(e){e.disabled=!0,e.checked=!1})):m(t,o,(function(e){e.disabled=!1}))}}(e,t),p(),t.matches(".group-selector__group--parent"))if(t.classList.contains("group-selector__group--active")){t.classList.remove("group-selector__group--active");for(var r=t.querySelectorAll(".group-selector__group--active"),o=0;o<r.length;o++){r[o].classList.remove("group-selector__group--active")}}else t.classList.add("group-selector__group--active")})),function e(r,o,i,a,c,s){var l,u=Object.keys(i),f=s,p=document.createElement("li");if(p.classList.add("group-selector__group"),t||n||(l=o,decodeURIComponent(d||"\\")!==(l||"\\"))||p.classList.add("group-selector__group--current"),u.length){p.classList.add("group-selector__group--parent"),(1===c||function(e){if(!d)return!1;var t=e+"\\";return d.startsWith(t)&&d!=t}(o))&&p.classList.add("group-selector__group--active"),f=h(p,r,o,f);var m=document.createElement("ul");m.classList.add("group-selector__list"),p.appendChild(m),a.appendChild(p);for(var v=0;v<u.length;v++){var g=u[v];"All contacts"!==g&&e(g,o+"\\"+g,i[g],m,c+1,f)}}else h(p,r,o,f),a.appendChild(p)}("All Contact Groups","",y,S,1,!1),o.parentNode.replaceChild(S,o),S.parentNode.appendChild(g),p()}(0,r,o)}},function(e,t){window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var r=n[t];r.classList.contains("aside--active")&&r.classList.remove("aside--active")}}};var n=document.querySelector("#add_group");n&&n.addEventListener("click",(function(e){e.preventDefault(),o()}));var r=document.querySelector("#close_sidebar");function o(){var e=document.getElementById("sidebar");document.getElementById("main");e.classList.contains("aside--active")?e.classList.contains("aside--active")&&e.classList.remove("aside--active"):e.classList.add("aside--active")}r&&r.addEventListener("click",(function(e){e.preventDefault(),o()}))},function(e,t){var n,r,o,i,a;null!=document.getElementById("Responses")&&function(){var e=document.querySelectorAll(".response-field"),t=document.querySelector(".response-options-list");e.forEach((function(e,t){""===e.querySelector(".response-option").value.trim()&&(e.style.display="none"),e.dataset.key=t}));var n=document.querySelector("#add_response");n.addEventListener("click",(function(t){t.preventDefault(),n.blur(),function(){for(var t=0;t<e.length;t++){var n=e[t];if("none"===n.style.display)return void(n.style.display="block")}}()})),t.addEventListener("click",(function(t){var n=t.target;if(n.matches(".btn-remove-response")){t.preventDefault();var r=n.parentNode,o=parseInt(r.dataset.key,10);!function(t){for(var n=t+1;n<e.length;n++){var r=e[n-1].querySelector(".response-option"),o=e[n].querySelector(".response-option");r.value=o.value}}(o),function(t){e[e.length-1].querySelector(".response-option").value="";for(var n=e.length-1;n>=t;n--)if("none"!==e[n].style.display)return void(e[n].style.display="none")}(o)}}))}(),null!=document.getElementById("addPhone")&&(n=document.getElementById("addPhone"),(r=document.querySelector("#addPhoneBtn")).addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("is-hidden"),r.blur(),r.disabled=!0}))),null!=document.getElementById("addEmail")&&(o=document.getElementById("addEmail"),(i=document.querySelector("#addEmailBtn")).addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("is-hidden"),i.blur(),i.disabled=!0}))),null!=document.getElementById("add_group")&&(a=document.querySelector("#add_group")).addEventListener("click",(function(e){if(e.preventDefault(),null!=document.getElementById("add_group")){var t=document.querySelector("#save_group");null!=t&&(a.classList.add("is-hidden"),a.blur(),a.disabled=!0,t.classList.remove("is-hidden"))}}));var c=document.getElementById("GroupTextarea");if(null!=c&&c.addEventListener("click",(function(e){var t=e.target,n=document.querySelector("#add_group");t.matches(".button__icon")&&t.hasAttribute("data-path")&&(n.classList.add("is-hidden"),n.blur(),n.disabled=!0,null!=document.getElementById("add_group")&&document.querySelector("#save_group").classList.remove("is-hidden"))})),null!=document.querySelectorAll("input.input-validation-error")){var s=document.querySelectorAll("input.input-validation-error");Object.keys(s).forEach((function(e){console.log(s[e]),s[e].closest("form").classList.remove("is-hidden")}))}},function(e,t){},function(e,t){},function(e,t){document.querySelectorAll("button[data-showall-table-id]").forEach((function(e){var t=e.getAttribute("data-showall-table-id"),n=document.getElementById(t);if(n){var r=e.getAttribute("data-showall-item-limit"),o=parseInt(r,10),i=isNaN(o)?10:o,a=n.tBodies[0];if(!a)return;for(var c,s=a.rows.length,l=1;c=a.rows[l-1];l++)l>i&&(c.style.display="none");s<=i&&(e.style.display="none"),e.addEventListener("click",(function(e){e.preventDefault(),Array.from(a.rows).forEach((function(e){e.style.display="table-row"})),e.target.style.display="none"}))}}))},function(e,t){!function(e){var t=document.getElementById("#search".replace(/^#/,""));if(t){var n=document.querySelector("#searchButton"),r=document.querySelector(n.dataset.target);n.addEventListener("click",(function(e){e.preventDefault(),r.classList.add("menu--active")})),window.addEventListener("click",(function(e){t.contains(e.target)||r.classList.remove("menu--active")}))}}(),function(e){var t=document.getElementById("#menu".replace(/^#/,""));if(t){var n=document.querySelector("#menuButton"),r=document.querySelector(n.dataset.target);n.addEventListener("click",(function(e){console.log("#menu clicked"),e.preventDefault(),r.classList.add("menu--active")})),window.addEventListener("click",(function(e){!t.contains(e.target)&&r&&r.classList.remove("menu--active")}))}}()},function(e,t){var n,r,o,i,a,c,s,l,u;n=document.querySelector("#snackbar"),r=window.location.search,o=new URLSearchParams(r),i=function(e){o.has(e)&&(o.delete(e),window.history.replaceState({},document.title,"".concat(window.location.pathname,"?=").concat(o.toString())))},a=o.get("ContactAdded"),c=o.get("OrganisationAdded"),s=o.get("MessageSent"),l=o.get("ForceContactUpdated"),u="","True"===a?(i("ContactAdded"),u="New contact has been created"):"True"===c?(i("OrganisationAdded"),u="New organisation has been created"):"True"===s?(sessionStorage.removeItem("CourierMessageUsers"),i("MessageSent"),u="Message sent"):l&&"true"===l.toLowerCase()&&(i("ForceContactUpdated"),u="Personal contact details updated"),u&&(n.classList.add("snackbar--active"),n.innerHTML=u,setTimeout((function(){n.classList.remove("snackbar--active")}),5e3))},function(e,t){!function(e){var t=window.localStorage.getItem("snackbar"),n=document.querySelector("#hint-snackbar");if(null!==t)(r=JSON.parse(t)).locations.includes(window.location.pathname)&&(n.checked=!0);else var r={locations:new Array};n&&n.addEventListener("click",(function(e){r.locations.includes(window.location.pathname)||(r.locations.push(window.location.pathname),window.localStorage.setItem("snackbar",JSON.stringify(r)))}))}()},function(e,t,n){var r=n(7);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){var n=document.querySelectorAll("table[data-linkable-cell] > tbody > tr"),r=function(e){var t=e.target.closest("table").getAttribute("data-linkable-cell"),n=e.target.closest("tr");try{var r=parseInt(t,10)+1,o=n.querySelector("td:nth-child(".concat(r,") a"));o?o.click():console.error("No link found in column specified by [data-linkable-cell]")}catch(e){console.error("Invalid value specified by [data-linkable-cell]")}};n.forEach((function(e){return e.addEventListener("click",r)}))},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function d(){}function f(){}function p(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(E([])));v&&v!==t&&n.call(v,o)&&(h=v);var g=p.prototype=d.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function _(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=g.constructor=p,p.constructor=f,f.displayName=c(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,a,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(g),c(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(3),a=n(4),c=n(5),s=document.querySelector("main");if(s&&s.classList.contains("asc-staff-compose")){var l=document.getElementById("add_contact"),u=document.getElementById("subject_input"),d=document.getElementById("Input_Message"),f=document.getElementById("Input_AutoResendSchedule"),p=Array.from(document.querySelectorAll(".response-option")),h=new i.a("CourierMessageTitle"),m=new i.a("CourierMessageContent"),v=new i.a("CourierMessageResend"),g=new i.a("CourierMessageResponses"),y=new a.a("CourierMessageUsers");l.addEventListener("click",(function(){h.set(u.value),m.set(d.value),v.set(f.value),g.set(p.reduce((function(e,t){return t.value?[].concat(o()(e),[t.value]):e}),[]).join("||"))}));var b=y.getItems().map((function(e){var t=e.id,n=e.name,r=document.createElement("option");return r.selected=!0,r.value=t,r.innerText=n,r})),_=new c.default("AscStaffSelector",null,(function(e,t){y.filterByIds(e.map((function(e){return e.value})))}),b);document.getElementById("btnDiscard").addEventListener("click",(function(){y.clearItems(),_.clearItems()}))}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r);if(document.querySelector("main.courier-profile-page")){var i=function(e,t){document.querySelectorAll(e).forEach((function(e,n){var r=e.querySelector("input");r.id="".concat(t,"_").concat(n,"_"),r.name="".concat(t,"[").concat(n,"]"),e.querySelector("span").setAttribute("data-valmsg-for","".concat(t,"[").concat(n,"]"))}))},a=document.getElementById("addPhoneBtn"),c=document.getElementById("addEmailBtn"),s=Array.from(document.querySelectorAll(".btn-remove-contact-email")),l=Array.from(document.querySelectorAll(".btn-remove-contact-phone"));[a,c].concat(o()(s),o()(l)).forEach((function(e){e.style.display=""}));var u=document.querySelector(".form-emails");u.addEventListener("input",(function(e){e.target.closest(".form__group").classList.remove("blank"),h()}));var d=document.querySelector(".form-phones");d.addEventListener("input",(function(e){e.target.closest(".form__group").classList.remove("blank"),p()}));var f=function(e,t){return Array.from(e.querySelectorAll(t)).some((function(e){return""===e.value.trim()}))},p=function(){a.style.display=f(d,".input--profile-phone > input")?"none":"block"},h=function(){c.style.display=f(u,".input--profile-email > input")?"none":"block"},m=document.getElementById("contact-profile-form");[].concat(o()(s),o()(l)).forEach((function(e){e.closest(".form__group").classList.add("input__withaction")})),[".input--profile-phone > input",".input--profile-email > input"].forEach((function(e){var t=Array.from(document.querySelectorAll(e));t.length>1&&(t.forEach((function(e){console.dir(e),""===e.value.trim()&&e.closest(".form__group").remove()})),i(".input--profile-phone","Input.PersonalPhoneNumbers"),i(".input--profile-email","Input.PersonalEmailAddresses"))})),p(),h(),a.addEventListener("click",(function(e){var t;e.preventDefault(),e.target.closest("section").appendChild(((t=document.createElement("div")).className="form__group input__withaction input--profile-phone",t.innerHTML='\n            <input class="form__input" autocomplete="off" type="text" name="phone" value="" placeholder="Add a phone number">\n            <button class="button button--remove btn-remove-contact-phone">Remove</button>\n            <span class="field-validation-valid" data-valmsg-for="phone_validation" data-valmsg-replace="true"></span>\n        ',t)),i(".input--profile-phone","Input.PersonalPhoneNumbers"),p()})),c.addEventListener("click",(function(e){e.preventDefault(),e.target.closest("section").appendChild(function(){var e=document.createElement("div");return e.className="form__group input__withaction input--profile-email",e.innerHTML='\n            <input class="form__input" autocomplete="off" type="text" name="email" value="" placeholder="Add an email address">\n            <button class="button button--remove  btn-remove-contact-email">Remove</button>\n            <span class="field-validation-valid" data-valmsg-for="email_validation" data-valmsg-replace="true"></span>\n        ',e}()),i(".input--profile-email","Input.PersonalEmailAddresses"),h()})),m.addEventListener("click",(function(e){if(e.target.matches(".btn-remove-contact-phone")||e.target.matches(".btn-remove-contact-email")){e.preventDefault();var t=e.target.closest("section").querySelectorAll("input");if(1===t.length)t[0].value="";else{var n=e.target.closest(".form__group");n&&n.remove()}}e.target.matches(".btn-remove-contact-phone")&&(i(".input--profile-phone","Input.PersonalPhoneNumbers"),p()),e.target.matches(".btn-remove-contact-email")&&(i(".input--profile-email","Input.PersonalEmailAddresses"),h())}))}},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),i=n(9),a=n.n(i),c=n(2),s=n.n(c),l=n(4),u=n(0),d=n.n(u),f=n(1),p=n.n(f),h=function(){function e(){d()(this,e),this._openClass="bottom-drawer-open"}return p()(e,[{key:"show",value:function(){document.body.classList.add(this._openClass)}},{key:"hide",value:function(){document.body.classList.remove(this._openClass)}},{key:"isOpen",value:function(){return document.body.classList.contains(this._openClass)}}]),e}(),m=n(3),v=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".draft-message-drawer__total";d()(this,e);var r=new m.a("CourierMessageTitle");if(this._totalsElement=document.querySelector(n),document.querySelector(".draft-message-drawer__title").textContent=r.get()||"Untitled",!this._totalsElement)throw Error("No element matching the passed in selector ".concat(n));this._bottomDrawer=new h,this.update(t)}return p()(e,[{key:"update",value:function(e){this._totalsElement.innerText=e,e?this._bottomDrawer.show():this._bottomDrawer.hide()}}]),e}(),g=n(11),y=n.n(g),b=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};d()(this,e);var i={loaderClass:"loader",loaderLoadingClass:"loader--loading",debounceMs:100,peekDistance:0,debug:!1};if(this._loader=t,this._loaderFunc=n,this._config=L(L({},i),o),this._hasListenersAdded=!1,!this._loader)throw new Error("Null loader element provided");this._loader.classList.add(this._config.loaderClass),this._lazyLoadCheck=b((function(){r._doLoadMoreCheck()?(r._conditionalDebugLog("Calling load more function"),r._loader.classList.add(r._config.loaderLoadingClass),r._stopListening(),r._loaderFunc(r._doneSearching)):r._conditionalDebugLog("Not ready to reload yet")}),this._config.debounceMs),this._startListening(),this._doneSearching=this._doneSearching.bind(this)}return p()(e,[{key:"_setLoadingElementVisibility",value:function(e){e?this._loader.classList.remove("is-hidden"):this._loader.classList.add("is-hidden")}},{key:"_doneSearching",value:function(e){this._conditionalDebugLog("_doneSearching callback called with more to load ".concat(e)),this._loader.classList.remove(this._config.loaderLoadingClass),e?this._startListening():(this._conditionalDebugLog("All done - hiding loader element"),this._setLoadingElementVisibility(!1))}},{key:"_startListening",value:function(){this._hasListenersAdded?this._conditionalDebugLog("Listeners already in place"):(document.addEventListener("scroll",this._lazyLoadCheck),window.addEventListener("resize",this._lazyLoadCheck),window.addEventListener("orientationChange",this._lazyLoadCheck),this._hasListenersAdded=!0,this._conditionalDebugLog("Listeners added"),this._lazyLoadCheck())}},{key:"_stopListening",value:function(){this._hasListenersAdded?(document.removeEventListener("scroll",this._lazyLoadCheck),window.removeEventListener("resize",this._lazyLoadCheck),window.removeEventListener("orientationChange",this._lazyLoadCheck),this._hasListenersAdded=!1,this._conditionalDebugLog("Listeners removed")):this._conditionalDebugLog("No Listeners to remove")}},{key:"_conditionalDebugLog",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:console.log;this._config.debug&&t(e)}},{key:"_doLoadMoreCheck",value:function(){var e=window.pageYOffset+window.innerHeight,t=document.documentElement.scrollHeight,n=Math.min(this._loader.offsetTop+this._config.peekDistance,t),r=e>=n,o=r;return this._conditionalDebugLog("Doing load more check ..."),this._conditionalDebugLog({"Top position of loader element":this._loader.offsetTop,"Config peek distance":this._config.peekDistance,"Y co-ordinate when more should be loaded (including peek, constrained to doc height)":n,"Current Y position of scroll":window.pageYOffset,"The internal size of the window":window.innerHeight,"The max y position visible":e,"The height of document":t,"Is peek position visible":r,"Is the load more position visible, or at doc end":o},console.table),o}}]),e}(),k=document.querySelector("main");if(k&&k.classList.contains("asc-staff-index")){var E=new l.a("CourierMessageUsers"),S=new v(E.getCount()),x=document.querySelector(".loader"),A=Array.from(document.querySelectorAll("#table-select-staff [type=checkbox]"));A.filter((function(e){return E.hasId(e.value)})).forEach((function(e){return e.checked=!0}));var I=function(){return A.every((function(e){return e.checked}))},C=function(e){var t=A.map((function(e){return{id:e.value,name:e.getAttribute("data-contact-name")}})),n=e(E.getItems(),t);E.setItems(n),S.update(n.length)},O=document.querySelector("#cbSelectAll [type=checkbox]");O&&(O.addEventListener("change",(function(e){e.target.checked?(A.forEach((function(e){return e.checked=!0})),C((function(e,t){var n=t.filter((function(t){var n=t.id;return!e.map((function(e){return e.id})).includes(n)}));return[].concat(s()(e),s()(n))}))):(A.forEach((function(e){return e.checked=!1})),C((function(e,t){return e.filter((function(e){var n=e.id;return!t.map((function(e){return e.id})).includes(n)}))})))})),I()&&(O.checked=!0));var q,T=document.getElementById("table-select-staff");T&&(q=T.querySelector("tbody"));var B=1,j=window.location.search,D=new URLSearchParams(j),P=D.has("criteria")?"?criteria=".concat(D.get("criteria")):"",M=document.getElementById("table-select-staff");M&&M.addEventListener("change",(function(e){var t=e.target;if(t.matches("input[type=checkbox]")){var n=t.checked?E.add(t.value,t.getAttribute("data-contact-name")):E.remove(t.value);O&&(t.checked?I()&&(O.checked=!0):O.checked=!1),S.update(n)}}));var N=function(e){var t=document.createElement("td");return t.innerText=e,t},G=function(e){var t=document.createElement("tr");t.appendChild(N(e.name)),t.appendChild(N(e.collar)),t.appendChild(N(e.email)),t.appendChild(N(e.phoneNumber)),t.appendChild(function(e,t,n){var r=document.createElement("td");r.classList.add("checkbox-cell");var o=document.createElement("label");o.classList.add("checkbox");var i=document.createElement("input");i.setAttribute("type","checkbox"),i.value=e,i.checked=t,i.setAttribute("data-contact-name",n);var a=document.createElement("span");return o.appendChild(i),o.appendChild(a),r.appendChild(o),r}(e.id,E.hasId(e.id),e.name)),q.appendChild(t)};if(x){var F=x.getAttribute("page-size");new w(x,function(){var e=a()(o.a.mark((function e(t){var n,r,i,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B++,n="".concat(location.origin,"/Force/Contacts/").concat(B).concat(P),e.next=5,window.fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:i=e.sent,a=i.length>0,c=a,F&&(c=i.length===parseInt(F,10)),a&&i.forEach(G),t(c),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Failed to lazy load page ".concat(B," of AD users")),console.error(e.t0),B--,t(!0);case 22:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),{debug:!1,peekDistance:50})}}}]);
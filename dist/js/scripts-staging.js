!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){n(3),n(4),n(5),n(6),n(7),e.exports=n(8)},function(e,t){var n=document.getElementById("Group");if(n){var r=n.hasAttribute("data-with-checkbox"),o=n.hasAttribute("data-with-single-select-checkbox"),a=n.hasAttribute("data-lock-root");!function(e,t,n){var r=[],o=document.getElementById("GroupSelector"),l=document.getElementById("GroupTextarea");if(null!==o){o.parentElement.classList.add("is-hidden"),l.parentElement.classList.remove("is-hidden");for(var c=o.querySelectorAll("option:checked"),i=0;i<c.length;i++)r.push(c[i].value||"\\")}null!==l&&l.addEventListener("click",(function(e){var t=e.target;if(t.matches(".tag>.button__icon")&&t.hasAttribute("data-path")){var n='input[type=checkbox].GroupItem[value="'+t.getAttribute("data-path").replace(/\\/g,"\\\\")+'"]',r=document.querySelector(n);r&&r.click()}}));var d=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,r){e[n]=r}));return e}(),u=window.location.origin+window.location.pathname+"?group=",s=d.group;d.Search;function p(e,t){var n,r=document.createElement("a");return r.textContent=e,r.href=u+(""===(n=t)?"\\":n),r.classList.add("group-selector__link"),r}function f(){for(var e=[],t=document.querySelectorAll(".GroupItem"),n=0;n<t.length;n++)a&&!t[n].value||t[n].checked&&e.push(t[n].value);!function(e){var t=document.getElementById("GroupTextarea");if(t){t.innerHTML="";for(var n=document.getElementById("GroupSelector"),r=Array.from(n.options).map((function(e){return e.value})),o=0;o<e.length;o++){var a=e[o];if(t.innerHTML=t.innerHTML+'<div class="tag">'+a.substring(1)+'<i class="button__icon" data-path='+a+">clear</i></div>",r.indexOf(a)<0){var l=document.createElement("option");l.selected=!0,l.value=a,l.innerText=a,n.appendChild(l)}}for(var c=0;c<n.options.length;c++)n.options[c].selected=e.indexOf(n.options[c].value)>=0}}(e)}function v(e,o,l,c){if(t||n){e.appendChild(function(e,t){var n=document.createElement("label");return n.innerHTML=e,n.for=e,n.setAttribute("for",e),n}(o));var i=function(e,t,o){var l=document.createElement("input");l.type="checkbox",l.setAttribute("class","GroupItem"),l.name=e,l.value=t,l.id=e;var c=o;if(""===t&&a)l.checked=!0,l.disabled=!0;else if(o&&!n)l.checked=!1,l.disabled=!0;else{var i=r.indexOf(t||"\\")>=0;l.checked=i,c=i}if(n){var d=document.createElement("label");d.classList.add("radio-checkbox");var u=document.createElement("span");u.classList.add("radio-checkbox__check");var s=document.createElement("span");s.classList.add("radio-checkbox__border"),s.appendChild(l),s.appendChild(u),d.appendChild(s),l.classList.add("radio-checkbox__input"),l=d}return{checkbox:l,newParentSelected:c}}(o,l,c);return e.appendChild(i.checkbox),i.newParentSelected}return e.appendChild(p(o,l)),c}function m(e,t,n){for(var r=0;r<t.length;r++){var o=t[r];o!==e&&n(o)}}var h=(o=document.querySelector("#Group")).querySelectorAll("option"),g=document.createElement("input");g.setAttribute("type","hidden"),g.setAttribute("name","Group"),g.value=s||"\\";for(var y={},b=0;b<h.length;b++){var _=h[b];if(""!==_.textContent)for(var E=_.textContent.split("\\"),k=y,L=0;L<E.length;L++){var S=E[L];""!==S&&(k[S]||(k[S]={}),k=k[S])}}var x=document.createElement("ul");x.classList.add("group-selector__list"),x.classList.add("group-selector__list--root"),x.addEventListener("click",(function(e){var t=e.target;if(t.matches("input[type=checkbox]")&&function(e,t){var r=t.parentNode;if(n)t.checked?m(t,document.querySelectorAll(".group-selector__list--root input[type=checkbox]"),(function(e){e.checked=!1})):(e.preventDefault(),t.checked=!0);else if(r.classList.contains("group-selector__group--parent")){var o=r.querySelectorAll("input[type=checkbox");t.checked?m(t,o,(function(e){e.disabled=!0,e.checked=!1})):m(t,o,(function(e){e.disabled=!1}))}}(e,t),f(),t.matches(".group-selector__group--parent"))if(t.classList.contains("group-selector__group--active")){t.classList.remove("group-selector__group--active");for(var r=t.querySelectorAll(".group-selector__group--active"),o=0;o<r.length;o++){r[o].classList.remove("group-selector__group--active")}}else t.classList.add("group-selector__group--active")})),function e(r,o,a,l,c,i){var d=Object.keys(a),u=i,p=document.createElement("li");if(p.classList.add("group-selector__group"),t||n||(s||"\\")!==(o||"\\").replace(/ /g,"%20")||p.classList.add("group-selector__group--current"),d.length){p.classList.add("group-selector__group--parent"),(1===c||function(e){if(!s)return!1;var t=e+"\\";return s.startsWith(t)&&s!=t}(o))&&p.classList.add("group-selector__group--active"),u=v(p,r,o,u);var f=document.createElement("ul");f.classList.add("group-selector__list"),p.appendChild(f),l.appendChild(p);for(var m=0;m<d.length;m++){var h=d[m];"All contacts"!==h&&e(h,o+"\\"+h,a[h],f,c+1,u)}}else v(p,r,o,u),l.appendChild(p)}("All Contact Groups","",y,x,1,!1),o.parentNode.replaceChild(x,o),x.parentNode.appendChild(g),f()}(0,r,o)}},function(e,t){window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var r=n[t];r.classList.contains("aside--active")&&r.classList.remove("aside--active")}}};var n=document.querySelector("#add_group");n&&n.addEventListener("click",(function(e){var t;console.log("clicked"),e.preventDefault(),"none"===(t=document.getElementById("Sidebar")).style.display?t.style.display="block":t.style.display="none"}))},function(e,t){var n,r,o,a,l;null!=document.getElementById("Responses")&&function(e){var t=document.querySelectorAll(".response-field"),n=Object.keys(t),r=document.querySelector("#add_response");function o(e){n.every((function(e){return"none"!==t[e].style.display||(t[e].style.display="block",!1)}))}r.addEventListener("click",(function(e){e.preventDefault(),r.blur(),o()})),n.forEach((function(e){t[e].setAttribute("data-key",e),0==t[e].querySelector("[class~='response-option']").value.length&&(t[e].style.display="none"),null!=t[e].querySelector("#remove_response")&&t[e].querySelector("#remove_response").addEventListener("click",(function(n){n.preventDefault(),function(e){if("block"===t[e].style.display&&t[e].dataset.key==e)t[e].parentNode.appendChild(t[e]),t[e].querySelector("[class~='response-option']").value="",t[e].style.display="none"}(e)}))}))}(),null!=document.getElementById("addPhone")&&(n=document.getElementById("addPhone"),(r=document.querySelector("#addPhoneBtn")).addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("is-hidden"),r.blur(),r.disabled=!0}))),null!=document.getElementById("addEmail")&&(o=document.getElementById("addEmail"),(a=document.querySelector("#addEmailBtn")).addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("is-hidden"),a.blur(),a.disabled=!0}))),null!=document.getElementById("add_group")&&(l=document.querySelector("#add_group")).addEventListener("click",(function(e){e.preventDefault(),l.classList.add("is-hidden"),l.blur(),l.disabled=!0,null!=document.getElementById("add_group")&&document.querySelector("#save_group").classList.remove("is-hidden")}));var c=document.getElementById("GroupTextarea");if(null!=c&&c.addEventListener("click",(function(e){var t=e.target,n=document.querySelector("#add_group");t.matches(".button__icon")&&t.hasAttribute("data-path")&&(n.classList.add("is-hidden"),n.blur(),n.disabled=!0,null!=document.getElementById("add_group")&&document.querySelector("#save_group").classList.remove("is-hidden"))})),null!=document.querySelectorAll("input.input-validation-error")){var i=document.querySelectorAll("input.input-validation-error");Object.keys(i).forEach((function(e){console.log(i[e]),i[e].closest("form").classList.remove("is-hidden")}))}},function(e,t){var n;null!==(n=document.getElementById("GroupTextarea"))&&n.addEventListener("focusin",(function(){document.getElementById("Sidebar").classList.add("aside--active")}))},function(e,t){},function(e,t){document.querySelectorAll("button[data-showall-table-id]").forEach((function(e){var t=e.getAttribute("data-showall-table-id"),n=document.getElementById(t);if(n){var r=e.getAttribute("data-showall-item-limit"),o=parseInt(r,10),a=isNaN(o)?10:o,l=n.tBodies[0];if(!l)return;for(var c,i=l.rows.length,d=1;c=l.rows[d-1];d++)d>a&&(c.style.display="none");i<=a&&(e.style.display="none"),e.addEventListener("click",(function(e){e.preventDefault(),Array.from(l.rows).forEach((function(e){e.style.display="table-row"})),e.target.style.display="none"}))}}))}]);
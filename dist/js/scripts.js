!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){n(3),n(4),n(5),n(6),n(7),n(8),n(9),e.exports=n(10)},function(e,t){var n=document.getElementById("Group");if(n){var r=n.hasAttribute("data-with-checkbox"),o=n.hasAttribute("data-with-single-select-checkbox"),a=n.hasAttribute("data-lock-root");!function(e,t,n){var r=[],o=document.getElementById("GroupSelector"),c=document.getElementById("GroupTextarea");if(null!==o){o.parentElement.classList.add("is-hidden"),c.parentElement.classList.remove("is-hidden");for(var l=o.querySelectorAll("option:checked"),i=0;i<l.length;i++)r.push(l[i].value||"\\")}null!==c&&c.addEventListener("click",(function(e){var t=e.target;if(t.matches(".tag>.button__icon")&&t.hasAttribute("data-path")){var n='input[type=checkbox].GroupItem[value="'+t.getAttribute("data-path").replace(/\\/g,"\\\\")+'"]',r=document.querySelector(n);r&&r.click()}}));var d=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,r){e[n]=r}));return e}(),s=window.location.origin+window.location.pathname+"?group=",u=d.group;d.Search;function p(e,t){var n,r=document.createElement("a");return r.textContent=e,r.href=s+(""===(n=t)?"\\":n),r.classList.add("group-selector__link"),r}function v(){for(var e=[],t=document.querySelectorAll(".GroupItem"),n=0;n<t.length;n++)a&&!t[n].value||t[n].checked&&e.push(t[n].value);!function(e){var t=document.getElementById("GroupTextarea");if(t){t.innerHTML="";for(var n=document.getElementById("GroupSelector"),r=Array.from(n.options).map((function(e){return e.value})),o=0;o<e.length;o++){var c=e[o];if(console.log(c),t.innerHTML="\\"===c&&a?t.innerHTML:"\\"===c?t.innerHTML+'<div class="tag">All Contact Groups<i class="button__icon" data-path="'+c+'">clear</i></div>':t.innerHTML+'<div class="tag">'+c.substring(1)+'<i class="button__icon" data-path="'+c+'">clear</i></div>',r.indexOf(c)<0){var l=document.createElement("option");l.selected=!0,l.value=c,l.innerText=c,n.appendChild(l)}}for(var i=0;i<n.options.length;i++)n.options[i].selected=e.indexOf(n.options[i].value)>=0}}(e)}function f(e,o,c,l){if(t||n){""===c&&(c="\\"),e.appendChild(function(e,t){var n=document.createElement("label");return n.innerHTML=e,n.for=e,n.setAttribute("for",e),n}(o));var i=function(e,t,o){var c=document.createElement("input");c.type="checkbox",c.setAttribute("class","GroupItem"),c.name=e,c.value=t,c.id=e;var l=o;if("\\"===t&&a)c.checked=!0,c.disabled=!0;else if(o&&!n)c.checked=!1,c.disabled=!0;else{var i=r.indexOf(t||"\\")>=0;c.checked=i,l=i}if(n){var d=document.createElement("label");d.classList.add("radio-checkbox");var s=document.createElement("span");s.classList.add("radio-checkbox__check");var u=document.createElement("span");u.classList.add("radio-checkbox__border"),u.appendChild(c),u.appendChild(s),d.appendChild(u),c.classList.add("radio-checkbox__input"),c=d}return{checkbox:c,newParentSelected:l}}(o,c,l);return e.appendChild(i.checkbox),i.newParentSelected}return e.appendChild(p(o,c)),l}function m(e,t,n){for(var r=0;r<t.length;r++){var o=t[r];o!==e&&n(o)}}var g=(o=document.querySelector("#Group")).querySelectorAll("option"),h=document.createElement("input");h.setAttribute("type","hidden"),h.setAttribute("name","Group"),h.value=u||"\\";for(var y={},b=0;b<g.length;b++){var _=g[b];if(""!==_.textContent)for(var L=_.textContent.split("\\"),k=y,E=0;E<L.length;E++){var S=L[E];""!==S&&(k[S]||(k[S]={}),k=k[S])}}var w=document.createElement("ul");w.classList.add("group-selector__list"),w.classList.add("group-selector__list--root"),w.addEventListener("click",(function(e){var t=e.target;if(t.matches("input[type=checkbox]")&&function(e,t){var r=t.parentNode;if(n)t.checked?m(t,document.querySelectorAll(".group-selector__list--root input[type=checkbox]"),(function(e){e.checked=!1})):(e.preventDefault(),t.checked=!0);else if(r.classList.contains("group-selector__group--parent")){var o=r.querySelectorAll("input[type=checkbox");t.checked?m(t,o,(function(e){e.disabled=!0,e.checked=!1})):m(t,o,(function(e){e.disabled=!1}))}}(e,t),v(),t.matches(".group-selector__group--parent"))if(t.classList.contains("group-selector__group--active")){t.classList.remove("group-selector__group--active");for(var r=t.querySelectorAll(".group-selector__group--active"),o=0;o<r.length;o++){r[o].classList.remove("group-selector__group--active")}}else t.classList.add("group-selector__group--active")})),function e(r,o,a,c,l,i){var d=Object.keys(a),s=i,p=document.createElement("li");if(p.classList.add("group-selector__group"),t||n||(u||"\\")!==(o||"\\").replace(/ /g,"%20")||p.classList.add("group-selector__group--current"),d.length){p.classList.add("group-selector__group--parent"),(1===l||function(e){if(!u)return!1;var t=e+"\\";return u.startsWith(t)&&u!=t}(o))&&p.classList.add("group-selector__group--active"),s=f(p,r,o,s);var v=document.createElement("ul");v.classList.add("group-selector__list"),p.appendChild(v),c.appendChild(p);for(var m=0;m<d.length;m++){var g=d[m];"All contacts"!==g&&e(g,o+"\\"+g,a[g],v,l+1,s)}}else f(p,r,o,s),c.appendChild(p)}("All Contact Groups","",y,w,1,!1),o.parentNode.replaceChild(w,o),w.parentNode.appendChild(h),v()}(0,r,o)}},function(e,t){window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var r=n[t];r.classList.contains("aside--active")&&r.classList.remove("aside--active")}}};var n=document.querySelector("#add_group");n&&n.addEventListener("click",(function(e){console.log("clicked"),e.preventDefault(),o()}));var r=document.querySelector("#close_sidebar");function o(){var e=document.getElementById("sidebar");document.getElementById("main");console.log("we're here"),e.classList.contains("aside--active")?e.classList.contains("aside--active")&&e.classList.remove("aside--active"):e.classList.add("aside--active")}r&&r.addEventListener("click",(function(e){console.log("clicked"),e.preventDefault(),o()}))},function(e,t){var n,r,o,a,c;null!=document.getElementById("Responses")&&function(e){var t=document.querySelectorAll(".response-field"),n=Object.keys(t),r=document.querySelector("#add_response");function o(e){n.every((function(e){return"none"!==t[e].style.display||(t[e].style.display="block",!1)}))}r.addEventListener("click",(function(e){e.preventDefault(),r.blur(),o()})),n.forEach((function(e){t[e].setAttribute("data-key",e),0==t[e].querySelector("[class~='response-option']").value.length&&(t[e].style.display="none"),null!=t[e].querySelector("#remove_response")&&t[e].querySelector("#remove_response").addEventListener("click",(function(n){n.preventDefault(),function(e){if("block"===t[e].style.display&&t[e].dataset.key==e)t[e].parentNode.appendChild(t[e]),t[e].querySelector("[class~='response-option']").value="",t[e].style.display="none"}(e)}))}))}(),null!=document.getElementById("addPhone")&&(n=document.getElementById("addPhone"),(r=document.querySelector("#addPhoneBtn")).addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("is-hidden"),r.blur(),r.disabled=!0}))),null!=document.getElementById("addEmail")&&(o=document.getElementById("addEmail"),(a=document.querySelector("#addEmailBtn")).addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("is-hidden"),a.blur(),a.disabled=!0}))),null!=document.getElementById("add_group")&&(c=document.querySelector("#add_group")).addEventListener("click",(function(e){if(e.preventDefault(),null!=document.getElementById("add_group")){var t=document.querySelector("#save_group");null!=t&&(c.classList.add("is-hidden"),c.blur(),c.disabled=!0,t.classList.remove("is-hidden"))}}));var l=document.getElementById("GroupTextarea");if(null!=l&&l.addEventListener("click",(function(e){var t=e.target,n=document.querySelector("#add_group");t.matches(".button__icon")&&t.hasAttribute("data-path")&&(n.classList.add("is-hidden"),n.blur(),n.disabled=!0,null!=document.getElementById("add_group")&&document.querySelector("#save_group").classList.remove("is-hidden"))})),null!=document.querySelectorAll("input.input-validation-error")){var i=document.querySelectorAll("input.input-validation-error");Object.keys(i).forEach((function(e){console.log(i[e]),i[e].closest("form").classList.remove("is-hidden")}))}},function(e,t){},function(e,t){},function(e,t){document.querySelectorAll("button[data-showall-table-id]").forEach((function(e){var t=e.getAttribute("data-showall-table-id"),n=document.getElementById(t);if(n){var r=e.getAttribute("data-showall-item-limit"),o=parseInt(r,10),a=isNaN(o)?10:o,c=n.tBodies[0];if(!c)return;for(var l,i=c.rows.length,d=1;l=c.rows[d-1];d++)d>a&&(l.style.display="none");i<=a&&(e.style.display="none"),e.addEventListener("click",(function(e){e.preventDefault(),Array.from(c.rows).forEach((function(e){e.style.display="table-row"})),e.target.style.display="none"}))}}))},function(e,t){!function(e){var t=document.getElementById("#search".replace(/^#/,""));if(console.log(t),t){var n=document.querySelector("#searchButton"),r=document.querySelector(n.dataset.target);n.addEventListener("click",(function(e){console.log("#search clicked"),e.preventDefault(),r.classList.add("menu--active")})),window.addEventListener("click",(function(e){t.contains(e.target)||r.classList.remove("menu--active")}))}}(),function(e){var t=document.getElementById("#menu".replace(/^#/,""));if(console.log(t),t){var n=document.querySelector("#menuButton"),r=document.querySelector(n.dataset.target);n.addEventListener("click",(function(e){console.log("#menu clicked"),e.preventDefault(),r.classList.add("menu--active")})),window.addEventListener("click",(function(e){t.contains(e.target)||r.classList.remove("menu--active")}))}}()},function(e,t){var n,r,o,a,c,l;n=document.querySelector("#snackbar"),r=window.location.search,o=new URLSearchParams(r),a=o.get("ContactAdded"),c=o.get("OrganisationAdded"),l="","True"===a?l="New contact has been created":"True"===c&&(l="New organisation has been created"),l&&(n.classList.add("snackbar--active"),n.innerHTML=l,setTimeout((function(){n.classList.remove("snackbar--active")}),3500))}]);
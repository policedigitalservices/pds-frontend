!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){n(3),n(4),n(5),n(6),n(7),e.exports=n(8)},function(e,t){var n=document.getElementById("Group");n&&function(e,t){var n=[],r=document.getElementById("GroupSelector"),o=document.getElementById("GroupTextarea");if(null!==r){r.parentElement.classList.add("is-hidden"),o.parentElement.classList.remove("is-hidden");for(var l=r.querySelectorAll("option:checked"),a=0;a<l.length;a++)n.push(l[a].value)}null!==o&&o.addEventListener("click",(function(e){var t=e.target;if(t.matches(".tag>.button__icon")&&t.hasAttribute("data-path")){var n='input[type=checkbox].GroupItem[value="'+t.getAttribute("data-path").replace(/\\/g,"\\\\")+'"]',r=document.querySelector(n);r&&r.click()}}));var c=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,r){e[n]=r}));return e}(),u=window.location.origin+window.location.pathname+"?group=",s=c.group,i=c.Search;function d(e,t){var n,r=document.createElement("a");return r.textContent=e,r.href=u+(""===(n=t)?"\\":n),r.classList.add("group-selector__link"),!i&&function(e){return(s||"\\")===(e||"\\")}(t)&&r.classList.add("group-selector__link--current"),r}function p(){for(var e=[],t=document.querySelectorAll(".GroupItem"),n=0;n<t.length;n++)t[n].checked&&e.push(t[n].value);!function(e){var t=document.getElementById("GroupTextarea");if(t){t.innerHTML="";for(var n=0;n<e.length;n++)t.innerHTML=t.innerHTML+'<div class="tag">'+e[n].substring(1)+'<i class="button__icon" data-path='+e[n]+">clear</i></div>";var r=document.getElementById("GroupSelector");for(n=0;n<r.options.length;n++)r.options[n].selected=e.indexOf(r.options[n].value)>=0}}(e)}function m(e,r,o){t?(e.appendChild(function(e,t){var n=document.createElement("label");return n.innerHTML=e,n.for=e,n.setAttribute("for",e),n}(r)),e.appendChild(function(e,t){var r=document.createElement("input");return r.type="checkbox",r.setAttribute("class","GroupItem"),r.name=e,r.value=t,r.id=e,r.checked=n.indexOf(t||"\\")>=0,r}(r,o))):e.appendChild(d(r,o))}var f=(r=document.querySelector("#Group")).querySelectorAll("option"),v=document.createElement("input");v.setAttribute("type","hidden"),v.setAttribute("name","Group"),v.value=s||"\\";for(var g={},y=0;y<f.length;y++){var h=f[y];if(""!==h.textContent)for(var E=h.textContent.split("\\"),_=g,b=0;b<E.length;b++){var L=E[b];""!==L&&(_[L]||(_[L]={}),_=_[L])}}var S=document.createElement("ul");S.classList.add("group-selector__list"),S.addEventListener("click",(function(e){var t=e.target;if(p(),t.matches(".group-selector__group--parent"))if(t.classList.contains("group-selector__group--active")){t.classList.remove("group-selector__group--active");for(var n=t.querySelectorAll(".group-selector__group--active"),r=0;r<n.length;r++){n[r].classList.remove("group-selector__group--active")}}else t.classList.add("group-selector__group--active")})),function e(t,n,r,o,l){var a=Object.keys(r);if(a.length){var c=document.createElement("li");c.classList.add("group-selector__group","group-selector__group--parent"),(1===l||function(e){if(!s)return!1;var t=e+"\\";return s.startsWith(t)&&s!=t}(n))&&c.classList.add("group-selector__group--active"),m(c,t,n);var u=document.createElement("ul");u.classList.add("group-selector__list"),c.appendChild(u),o.appendChild(c);for(var i=0;i<a.length;i++){var d=a[i];"All contacts"!==d&&e(d,n+"\\"+d,r[d],u,l+1)}}else{var p=document.createElement("li");p.classList.add("group-selector__group"),m(p,t,n),o.appendChild(p)}}("All Contact Groups","",g,S,1),r.parentNode.replaceChild(S,r),S.parentNode.appendChild(v),p()}(0,n.hasAttribute("data-with-checkbox"))},function(e,t){window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var r=n[t];r.classList.contains("aside--active")&&r.classList.remove("aside--active")}}};var n=document.querySelector("#add_group");n&&n.addEventListener("click",(function(e){var t;console.log("clicked"),e.preventDefault(),"none"===(t=document.getElementById("Sidebar")).style.display?t.style.display="block":t.style.display="none"}))},function(e,t){var n,r,o,l,a;if(null!=document.getElementById("Responses")&&function(e){var t=document.querySelectorAll(".response-field"),n=Object.keys(t),r=document.querySelector("#add_response");function o(e){n.every((function(e){return"none"!==t[e].style.display||(t[e].style.display="block",!1)}))}r.addEventListener("click",(function(e){e.preventDefault(),r.blur(),o()})),n.forEach((function(e){0==t[e].querySelector("[class~='response-option']").value.length&&(t[e].style.display="none"),null!=t[e].querySelector("#remove_response")&&t[e].querySelector("#remove_response").addEventListener("click",(function(e){e.preventDefault(),n.every((function(e){return"block"!==t[e].style.display||(t[e].querySelector("[class~='response-option']").value="",t[e].style.display="none",!1)}))}))}))}(),null!=document.getElementById("addPhone")&&(n=document.getElementById("addPhone"),(r=document.querySelector("#addPhoneBtn")).addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("is-hidden"),r.blur(),r.disabled=!0}))),null!=document.getElementById("addEmail")&&(o=document.getElementById("addEmail"),(l=document.querySelector("#addEmailBtn")).addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("is-hidden"),l.blur(),l.disabled=!0}))),null!=document.getElementById("add_group")&&(a=document.querySelector("#add_group")).addEventListener("click",(function(e){e.preventDefault(),a.classList.add("is-hidden"),a.blur(),a.disabled=!0,null!=document.getElementById("add_group")&&document.querySelector("#save_group").classList.remove("is-hidden")})),null!=document.querySelectorAll("input.input-validation-error")){var c=document.querySelectorAll("input.input-validation-error");Object.keys(c).forEach((function(e){console.log(c[e]),c[e].closest("form").classList.remove("is-hidden")}))}},function(e,t){var n;null!==(n=document.getElementById("GroupTextarea"))&&n.addEventListener("focusin",(function(){document.getElementById("Sidebar").classList.add("aside--active")}))},function(e,t){},function(e,t){null!=document.getElementById("messageStatuses")&&function(e){for(var t,n=document.getElementById("messageStatuses"),r=0;t=n.rows[r];r++)r>=11&&(t.style.display="none");var o=document.getElementById("seeAllStatusesBtn");n.rows.length<=10&&(o.style.display="none"),o.addEventListener("click",(function(e){e.preventDefault();for(var t,n=document.getElementById("messageStatuses"),r=0;t=n.rows[r];r++)t.style.display="table-row"}))}(),null!=document.getElementById("messageResponses")&&function(e){for(var t,n=document.getElementById("messageResponses"),r=0;t=n.rows[r];r++)r>=11&&(t.style.display="none");var o=document.getElementById("seeAllResponsesBtn");n.rows.length<=10&&(o.style.display="none"),o.addEventListener("click",(function(e){e.preventDefault();for(var t,n=document.getElementById("messageResponses"),r=0;t=n.rows[r];r++)t.style.display="table-row"}))}()}]);
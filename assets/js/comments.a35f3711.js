(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{45:function(e,n,t){"use strict";t.r(n),t.d(n,"initComments",(function(){return a}));var o=document.querySelector(".comment-list"),r=document.querySelector("#respond"),c=r.querySelector("form"),i=r.querySelector("#cancel-comment-reply-link"),l=r.querySelector('[name="fields[parent_id]"]'),u=function(e){if(e){var n=o.querySelector("#comment-".concat(e," article"));return l.value=e,n.parentNode.insertBefore(r,n.nextSibling),i.style.display="",c.querySelector("textarea").focus(),!1}},a=function(){i.style.display="none",i.addEventListener("click",(function(e){e.preventDefault(),l.value="",o.parentNode.appendChild(r),i.style.display="none"})),window.moveRespondBlock=u}}}]);
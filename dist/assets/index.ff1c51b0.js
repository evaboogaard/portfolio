(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const l=document.querySelector(".hamburgerbutton"),u=document.querySelector("nav"),c=document.getElementById("circle");l.addEventListener("click",function(){u.classList.toggle("active"),c.classList.toggle("white")});const a=document.querySelectorAll(".observe"),d={rootMargin:"20px",treshold:.5};function f(e){e.forEach(t=>{t.intersectionRatio>0&&t.target.classList.add("shown")})}const y=new IntersectionObserver(f,d);a.forEach(e=>{y.observe(e)});var m=document.querySelectorAll(".dropdown"),g=Array.prototype.slice.call(m,0);g.forEach(function(e){var t=e.querySelector('a[data-toggle="dropdown"]'),n=e.querySelector(".dropdown-menu");t.onclick=function(s){n.hasClass("show")?(n.classList.remove("show"),n.classList.add("hide"),s.preventDefault()):(n.classList.add("show"),n.classList.remove("hide"),s.preventDefault())}});Element.prototype.hasClass=function(e){return this.className&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(this.className)};var p={delay:8,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,cursorVisible:!0,cursorEnlarged:!1,$dot:document.querySelector(".cursor-dot"),$outline:document.querySelector(".cursor-dot-outline"),init:function(){this.dotSize=this.$dot.offsetWidth,this.outlineSize=this.$outline.offsetWidth,this.setupEventListeners(),this.animateDotOutline()},setupEventListeners:function(){var e=this;document.querySelectorAll("a").forEach(function(t){t.addEventListener("mouseover",function(){e.cursorEnlarged=!0,e.toggleCursorSize()}),t.addEventListener("mouseout",function(){e.cursorEnlarged=!1,e.toggleCursorSize()})}),document.addEventListener("mousedown",function(){e.cursorEnlarged=!0,e.toggleCursorSize()}),document.addEventListener("mouseup",function(){e.cursorEnlarged=!1,e.toggleCursorSize()}),document.addEventListener("mousemove",function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.endX=t.pageX,e.endY=t.pageY,e.$dot.style.top=e.endY+"px",e.$dot.style.left=e.endX+"px"}),document.addEventListener("mouseenter",function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.$dot.style.opacity=1,e.$outline.style.opacity=1}),document.addEventListener("mouseleave",function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.$dot.style.opacity=0,e.$outline.style.opacity=0})},animateDotOutline:function(){var e=this;e._x+=(e.endX-e._x)/e.delay,e._y+=(e.endY-e._y)/e.delay,e.$outline.style.top=e._y+"px",e.$outline.style.left=e._x+"px",requestAnimationFrame(this.animateDotOutline.bind(e))},toggleCursorSize:function(){var e=this;e.cursorEnlarged?(e.$dot.style.transform="translate(-50%, -50%) scale(0.75)",e.$outline.style.transform="translate(-50%, -50%) scale(1.5)"):(e.$dot.style.transform="translate(-50%, -50%) scale(1)",e.$outline.style.transform="translate(-50%, -50%) scale(1)")},toggleCursorVisibility:function(){var e=this;e.cursorVisible?(e.$dot.style.opacity=1,e.$outline.style.opacity=1):(e.$dot.style.opacity=0,e.$outline.style.opacity=0)}};p.init();
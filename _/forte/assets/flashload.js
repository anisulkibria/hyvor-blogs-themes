"use strict";window.FlashLoad=function(){var t={},e=!1,n=p(location.href),o="",a=[],r=2e3,i=null;function s(t){var e=location.protocol+"//"+location.host+(o?"/"+v(o):"");return!(t.target||t.hasAttribute("download")||0!=t.href.indexOf(e+"/")||function(t){for(var e=0;e<a;e++){var n=a[e];if("function"==typeof n&&n(t))return!0}for(;t;){if(t.hasAttribute("data-flashload-skip"))return!0;t=t.parentElement}return!1}(t))}function d(t){var e=t.target.closest("a[href]");e&&s(e)&&u(e)}function l(t){if(!t.metaKey&&!t.ctrlKey){var e=t.target.closest("a[href]");e&&s(e)&&(t.preventDefault(),h(e))}}function c(e){var o=p(location.href);if(n!==o){t[n]&&(t[n].scrollPos=window.scrollY);var a=document.createElement("a");a.href=o,s(a)?h(a):location.reload()}}function u(e,n){var o=e.href,a=p(o);t[a]||(t[a]=new f(o,n))}function h(e){m("navigationStarted",{url:e.href});var n=p(e.href);t[n]?(t[n].href=e.href,t[n].display()):u(e,!0)}function f(e,o){i&&i.abort(),i=this;var a=this;this.href=e,this.status="loading",this.error=null,this.scrollPos=0,this.displayOnLoad=!!o,m("preloadStarted",{url:e});var r=new XMLHttpRequest;r.open("GET",e),r.timeout=2e4,r.send(),r.onreadystatechange=function(){2===r.readyState&&"text/html"!==r.getResponseHeader("Content-Type").toLowerCase()&&a.setError("Not an HTML response"),4===r.readyState&&(200!==r.status?a.setError("Request error"):(i=null,a.setSuccess(r.responseText)))},this.xhr=r,this.abort=function(){this.xhr.abort(),delete t[p(this.href)]},this.setError=function(t){this.status="error",this.error=t},this.setSuccess=function(t){this.status="success",m("preloadEnded",{url:e});var n=document.implementation.createHTMLDocument("");n.documentElement.innerHTML=t,this.title=n.title,this.body=n.body,this.displayOnLoad&&this.display()},this.display=function(){if("loading"===this.status)this.displayOnLoad=!0;else if("error"===this.status)location.href=this.href;else{var e=p(location.href);e!==this.href&&(t[e]&&(t[e].scrollPos=window.scrollY),history.pushState(null,null,this.href)),n=this.href,document.title=this.title,document.documentElement.replaceChild(this.body,document.body),scrollTo(0,this.scrollPos),function(){for(var t=document.body.getElementsByTagName("script"),e=0;e<t.length;e++){var n=t[e];n.hasAttribute("data-flashload-skip-replacing")||n.parentNode.replaceChild(o(n),n)}function o(t){var e=document.createElement("script");e.text=t.innerHTML;for(var n,o=-1,a=t.attributes;++o<a.length;)e.setAttribute((n=a[o]).name,n.value);return e}}(),m("navigationEnded",{url:this.href});var o=this.href.split("#")[1];if(o){var a=document.getElementById(o);a&&a.scrollIntoView()}else location.hash=""}}}function m(t,e){document.dispatchEvent(new CustomEvent("flashload:"+t,{detail:e,bubbles:!0,cancelable:!0,composed:!1}))}function p(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function v(t){return t.replace(/^\/|\/$/g,"")}return{start:function(t){e||(e=!0,t||(t={}),t.basepath&&(o=v(t.basepath)),t.exclude&&(a=t.exclude),"number"==typeof t.barDelay&&(r=t.barDelay),t.bar&&function(t){var e=document.createElement("style");e.innerHTML="#flashload-bar-container{position:fixed;top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;transition:opacity .25s .1s;opacity:0}.flashload-bar{background:#000;width:100%;margin-left:-100%;height:2px;transition:all .25s}",document.head.appendChild(e);var n,o,a,r=!1;function i(t){o&&(o.style.transform="translate("+t+"%)"),a=t,document.getElementById(n.id)||document.body.appendChild(n)}function s(){if(r){var t=a+1+2*Math.random();t>=98&&(t=98),i(t),setTimeout(s,50)}}function d(){r&&(document.getElementById(n.id)&&document.body.removeChild(n),n.style.opacity="1",setTimeout((function(){i(10+10*Math.random())}),0),setTimeout(s,1))}(n=document.createElement("div")).id="flashload-bar-container",(o=document.createElement("div")).id="flashload-bar",o.className=o.id,n.appendChild(o),document.body.appendChild(n),document.addEventListener("flashload:navigationStarted",(function(){r=!0,setTimeout(d,t)})),document.addEventListener("flashload:navigationEnded",(function(){r=!1,document.body.appendChild(n),setTimeout((function(){i(a)}),0),setTimeout((function(){i(100),setTimeout((function(){n.style.opacity="0"}),100)}),1)}))}(r),document.addEventListener("mouseover",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("click",l,!0),window.addEventListener("popstate",c,!0))}}}();
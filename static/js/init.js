/** @see https://swup.js.org/getting-started/reloading-javascript **/
function init (){

  // Not the timeline
  if (!document.querySelector('#fold-effect')) {
    document.querySelector('body').classList.remove('fixed-body');
  }

  // Video
  if (document.querySelector('#js-vimeo-embed')) {
    !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var e="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(e){var t,n=0<arguments.length&&void 0!==e?e:{},r=n.id,o=n.url,i=r||o;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(t=i,!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t)return"https://vimeo.com/".concat(i);if(c(i))return i.replace("http:","https:");if(r)throw new TypeError("“".concat(r,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var t=void 0!==Array.prototype.indexOf,n="undefined"!=typeof window&&void 0!==window.postMessage;if(!(e||t&&n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var o,a,u,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(u(this,"_id","_WeakMap_"+h()+"."+h()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function d(e,t){if(!m(e)||!a.call(e,"_id"))throw new TypeError(t+" method called on incompatible receiver "+typeof e)}function h(){return Math.random().toString().substring(2)}function m(e){return Object(e)===e}(o="undefined"!=typeof self?self:"undefined"!=typeof window?window:l).WeakMap||(a=Object.prototype.hasOwnProperty,u=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n},o.WeakMap=(u(f.prototype,"delete",function(e){if(d(this,"delete"),!m(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),u(f.prototype,"get",function(e){if(d(this,"get"),m(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),u(f.prototype,"has",function(e){if(d(this,"has"),!m(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),u(f.prototype,"set",function(e,t){if(d(this,"set"),!m(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:u(e,this._id,[e,t]),this}),u(f,"_polyfill",!0),f));var v,p=(function(e){var t,n,r;r=function(){var t,n,r,o,i,a,e=Object.prototype.toString,u="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function l(e,t){this.fn=e,this.self=t,this.next=void 0}function c(e,t){r.add(e,t),n=n||u(r.drain)}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function f(){for(var e=0;e<this.chain.length;e++)!function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=s(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function d(e){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=s(e))?c(function(){var t=new v(r);try{n.call(e,function(){d.apply(t,arguments)},function(){h.apply(t,arguments)})}catch(e){h.call(t,e)}}):(r.msg=e,r.state=1,0<r.chain.length&&c(f,r))}catch(e){h.call(new v(r),e)}}}function h(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&c(f,t))}function m(e,n,r,o){for(var t=0;t<n.length;t++)!function(t){e.resolve(n[t]).then(function(e){r(t,e)},o)}(t)}function v(e){this.def=e,this.triggered=!1}function p(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function y(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new p(this);this.then=function(e,t){var n={success:"function"!=typeof e||e,failure:"function"==typeof t&&t};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),r.chain.push(n),0!==r.state&&c(f,r),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){d.call(r,e)},function(e){h.call(r,e)})}catch(e){h.call(r,e)}}var g=t({},"constructor",y,!(r={add:function(e,t){a=new l(e,t),i?i.next=a:o=a,i=a,a=void 0},drain:function(){var e=o;for(o=i=n=void 0;e;)e.fn.call(e.self),e=e.next}}));return t(y.prototype=g,"__NPO__",0,!1),t(y,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");e(n)})}),t(y,"reject",function(n){return new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");t(n)})}),t(y,"all",function(t){var a=this;return"[object Array]"!=e.call(t)?a.reject(TypeError("Not an array")):0===t.length?a.resolve([]):new a(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");var r=t.length,o=Array(r),i=0;m(a,t,function(e,t){o[e]=t,++i===r&&n(o)},e)})}),t(y,"race",function(t){var r=this;return"[object Array]"!=e.call(t)?r.reject(TypeError("Not an array")):new r(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");m(r,t,function(e,t){n(t)},e)})}),y},(n=l)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}(v={exports:{}}),v.exports),y=new WeakMap;function g(e,t,n){var r=y.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),y.set(e.element,r)}function w(e,t){return(y.get(e.element)||{})[t]||[]}function b(e,t,n){var r=y.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],y.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),y.set(e.element,r),r[t]&&0===r[t].length}var k=["autopause","autoplay","background","byline","color","controls","dnt","height","id","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function E(r,e){var t=1<arguments.length&&void 0!==e?e:{};return k.reduce(function(e,t){var n=r.getAttribute("data-vimeo-".concat(t));return!n&&""!==n||(e[t]=""===n?1:n),e},t)}function T(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function P(i,e,t){var a=1<arguments.length&&void 0!==e?e:{},u=2<arguments.length?t:void 0;return new Promise(function(t,n){if(!c(i))throw new TypeError("“".concat(i,"” is not a vimeo.com url."));var e="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i));for(var r in a)a.hasOwnProperty(r)&&(e+="&".concat(r,"=").concat(encodeURIComponent(a[r])));var o=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);o.open("GET",e,!0),o.onload=function(){if(404!==o.status)if(403!==o.status)try{var e=JSON.parse(o.responseText);if(403===e.domain_status_code)return T(e,u),void n(new Error("“".concat(i,"” is not embeddable.")));t(e)}catch(e){n(e)}else n(new Error("“".concat(i,"” is not embeddable.")));else n(new Error("“".concat(i,"” was not found.")))},o.onerror=function(){var e=o.status?" (".concat(o.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},o.send()})}function _(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function M(e,t,n){var r,o;e.element.contentWindow&&e.element.contentWindow.postMessage&&(r={method:t},void 0!==n&&(r.value=n),8<=(o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin))}function N(n,r){var t,e,o=[];(r=_(r)).event?("error"===r.event&&w(n,r.data.method).forEach(function(e){var t=new Error(r.data.message);t.name=r.data.name,e.reject(t),b(n,r.data.method,e)}),o=w(n,"event:".concat(r.event)),t=r.data):!r.method||(e=function(e,t){var n=w(e,t);if(n.length<1)return!1;var r=n.shift();return b(e,t,r),r}(n,r.method))&&(o.push(e),t=r.value),o.forEach(function(e){try{if("function"==typeof e)return void e.call(n,t);e.resolve(t)}catch(e){}})}var F,x,C,j=new WeakMap,A=new WeakMap,q={},Player=function(){function Player(u){var e,t,l=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Player),window.jQuery&&u instanceof jQuery&&(1<u.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),u=u[0]),"undefined"!=typeof document&&"string"==typeof u&&(u=document.getElementById(u)),e=u,!Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"===u.nodeName||(t=u.querySelector("iframe"))&&(u=t),"IFRAME"===u.nodeName&&!c(u.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(j.has(u))return j.get(u);this._window=u.ownerDocument.defaultView,this.element=u,this.origin="*";var r,o=new p(function(i,a){var e;l._onMessage=function(e){if(c(e.origin)&&l.element.contentWindow===e.source){"*"===l.origin&&(l.origin=e.origin);var t=_(e.data);if(t&&"error"===t.event&&t.data&&"ready"===t.data.method){var n=new Error(t.data.message);return n.name=t.data.name,void a(n)}var r=t&&"ready"===t.event,o=t&&"ping"===t.method;if(r||o)return l.element.setAttribute("data-ready","true"),void i();N(l,t)}},l._window.addEventListener("message",l._onMessage),"IFRAME"!==l.element.nodeName&&P(s(e=E(u,n)),e,u).then(function(e){var t,n,r,o=T(e,u);return l.element=o,l._originalElement=u,t=u,n=o,r=y.get(t),y.set(n,r),y.delete(t),j.set(l.element,l),e}).catch(a)});return A.set(this,o),j.set(this.element,this),"IFRAME"===this.element.nodeName&&M(this,"ping"),q.isEnabled&&(r=function(){return q.exit()},this.fullscreenchangeHandler=function(){(q.isFullscreen?g:b)(l,"event:exitFullscreen",r),l.ready().then(function(){M(l,"fullscreenchange",q.isFullscreen)})},q.on("fullscreenchange",this.fullscreenchangeHandler)),this}var e,t,n;return e=Player,(t=[{key:"callMethod",value:function(n,e){var r=this,o=1<arguments.length&&void 0!==e?e:{};return new p(function(e,t){return r.ready().then(function(){g(r,n,{resolve:e,reject:t}),M(r,n,o)}).catch(t)})}},{key:"get",value:function(n){var r=this;return new p(function(e,t){return n=i(n,"get"),r.ready().then(function(){g(r,n,{resolve:e,reject:t}),M(r,n)}).catch(t)})}},{key:"set",value:function(n,r){var o=this;return new p(function(e,t){if(n=i(n,"set"),null==r)throw new TypeError("There must be a value to set.");return o.ready().then(function(){g(o,n,{resolve:e,reject:t}),M(o,n,r)}).catch(t)})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===w(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),g(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");b(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=A.get(this)||new p(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return p.resolve(e)}},{key:"addCuePoint",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};return this.callMethod("addCuePoint",{time:e,data:n})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return q.isEnabled?q.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return q.isEnabled?q.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return q.isEnabled?p.resolve(q.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var n=this;return new p(function(e){var t;A.delete(n),j.delete(n.element),n._originalElement&&(j.delete(n._originalElement),n._originalElement.removeAttribute("data-vimeo-initialized")),n.element&&"IFRAME"===n.element.nodeName&&n.element.parentNode&&(n.element.parentNode.parentNode&&n._originalElement&&n._originalElement!==n.element.parentNode?n.element.parentNode.parentNode.removeChild(n.element.parentNode):n.element.parentNode.removeChild(n.element)),n.element&&"DIV"===n.element.nodeName&&n.element.parentNode&&(n.element.removeAttribute("data-vimeo-initialized"),(t=n.element.querySelector("iframe"))&&t.parentNode&&(t.parentNode.parentNode&&n._originalElement&&n._originalElement!==t.parentNode?t.parentNode.parentNode.removeChild(t.parentNode):t.parentNode.removeChild(t))),n._window.removeEventListener("message",n._onMessage),q.isEnabled&&q.off("fullscreenchange",n.fullscreenchangeHandler),e()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&r(e.prototype,t),n&&r(e,n),Player}();return e||(F=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),x={fullscreenchange:F.fullscreenchange,fullscreenerror:F.fullscreenerror},C={request:function(o){return new Promise(function(e,t){function n(){C.off("fullscreenchange",n),e()}C.on("fullscreenchange",n);var r=(o=o||document.documentElement)[F.requestFullscreen]();r instanceof Promise&&r.then(n).catch(t)})},exit:function(){return new Promise(function(t,e){var n,r;C.isFullscreen?(n=function e(){C.off("fullscreenchange",e),t()},C.on("fullscreenchange",n),(r=document[F.exitFullscreen]())instanceof Promise&&r.then(n).catch(e)):t()})},on:function(e,t){var n=x[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=x[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(C,{isFullscreen:{get:function(){return Boolean(document[F.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[F.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[F.fullscreenEnabled])}}}),q=C,function(e){function n(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}var t=0<arguments.length&&void 0!==e?e:document;[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=E(t);P(s(e),e,t).then(function(e){return T(e,t)}).catch(n)}catch(e){n(e)}})}(),function(e){var r=0<arguments.length&&void 0!==e?e:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(e){if(c(e.origin)&&e.data&&"spacechange"===e.data.event)for(var t=r.querySelectorAll("iframe"),n=0;n<t.length;n++)if(t[n].contentWindow===e.source){t[n].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}}))}()),Player});

    const vimeoFrame = document.querySelector('#js-vimeo-embed');

    const options = {
      id: vimeoFrame.dataset.id,
      // width: 500,
      title: false,
        color: "E21B22"
    };

    const playButton = document.querySelector('#js-play-video-link');
    // If JS then play in the page
    playButton.href="#play";
    playButton.addEventListener('click', playVimeo);

    function playVimeo(e) {
      vimeoFrame.classList.toggle('video-show');
      const player = new Vimeo.Player('js-vimeo-embed', options);
      player.on('play', function() {});
      player.play();
      e.preventDefault();
    }
  }

  //Homepage
  if (document.querySelector('#fold-effect')) {
    document.querySelector('body').classList.add('fixed-body');

    const wrapper = document.getElementById("fold-effect");
    const folds = Array.from(document.getElementsByClassName("fold"));
    const baseContent = document.getElementById("base-content");

    let state = {
      disposed: false,
      targetScroll: 0,
      scroll: 0
    };

    const lerp = (current, target, speed = 0.1, limit = 0.001) => {
      const change = (target - current) * speed;

      if (Math.abs(change) < limit) {
        return target - current;
      }

      return change;
    }

    class FoldedDom {
      constructor(wrapper, folds = null, scrollers = null) {
        this.folds = folds;
        this.scrollers = [];
      }

      setContent(baseContent, createScrollers = true) {
        const folds = this.folds;
        if (!folds) return;

        let scrollers = [];

        for (let i = 0; i < folds.length; i++) {
          const fold = folds[i];
          const copyContent = baseContent.cloneNode(true);
          copyContent.id = "";

          let scroller;

          if (createScrollers) {
            let sizeFixEle = document.createElement("div");
            sizeFixEle.classList.add("fold-size-fix");
            // sizeFixEle.style.transform = `scaleY(${scaleFix})`;

            scroller = document.createElement("div");
            scroller.classList.add("fold-scroller");
            sizeFixEle.append(scroller);
            fold.append(sizeFixEle);
          } else {
            scroller = this.scrollers[i];
          }
          scroller.append(copyContent);

          scrollers[i] = scroller;
        }
        this.scrollers = scrollers;
      }

      updateStyles(scroll) {
        const folds = this.folds;
        const scrollers = this.scrollers;

        for (let i = 0; i < folds.length; i++) {
          const scroller = scrollers[i];

          // Scroller fixed so its aligned
          // scroller.style.transform = `translateY(${100 * -i}%)`;
          // And the content is the one that scrolls
          scroller.children[0].style.transform = `translateX(${scroll}px)`;
        }
      }
    }

    let insideFold;

    const mainFold = folds[folds.length - 1];

    let tick = () => {
      if (state.disposed) return;

      // Calculate the scroll based on how much the content is outside the mainFold

      // state.targetScroll = -(
      //   document.documentElement.scrollLeft || document.body.scrollLeft
      // );
      state.targetScroll = Math.max(
        Math.min(0, state.targetScroll),
        -insideFold.scrollers[0].children[0].clientWidth + mainFold.clientWidth
      );
      state.scroll += lerp(state.scroll, state.targetScroll, 0.1, 0.0001);

      insideFold.updateStyles(state.scroll);

      requestAnimationFrame(tick);
    };
    /** ATTACH EVENTS */
    let lastClientX = null;
    let isDown = false;

    let onDown = ev => {
      // console.log(
      //   Math.max(
      //     state.targetScroll,
      //     -insideFold.scrollers[0].children[0].clientWidth + mainFold.clientWidth
      //   )
      // );
      // console.log(
      //   "s",
      //   -insideFold.scrollers[0].children[0].clientWidth + mainFold.clientWidth
      // );
      isDown = true;
    };
    let onUp = ev => {
      isDown = false;
    };

    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseout", ev => {
      var from = ev.relatedTarget || ev.toElement;
      if (!from || from.nodeName == "HTML") {
        // stop your drag event here
        // for now we can just use an alert
        isDown = false;
      }
    });
    window.addEventListener("touchstart", onDown);
    window.addEventListener("touchend", onUp);
    window.addEventListener("touchcancel", onUp);

    window.addEventListener("mousemove", ev => {
      if (lastClientX && isDown) {
        state.targetScroll += ev.clientX - lastClientX;
      }
      lastClientX = ev.clientX;
    });

    window.addEventListener("touchmove", ev => {
      let touch = ev.touches[0];
      if (lastClientX && isDown) {
        let diffX = touch.clientX - lastClientX;
        state.targetScroll += Math.sign(diffX) * 30;
      }
      lastClientX = touch.clientX;
    });

    window.addEventListener("wheel", ev => {
      // Fixefox delta is like 1px and chrome 100
      state.targetScroll += -Math.sign(ev.deltaY) * 30;
    });

    /***********************************/
    /********** Preload stuff **********/

      // // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
          // todo manage preloading stuff
          imagesLoaded(document.querySelectorAll('.content__img'), resolve);
        });
      };

    // // And then..
    preloadImages().then(() => {
      // INITIALIZE
      insideFold = new FoldedDom(wrapper, folds);
      insideFold.setContent(baseContent);
      
      tick();
      document.querySelector('body').classList.add('js-body-ready');
    });
  }
};

!function(t){function n(n){for(var e,o,i=n[0],c=n[1],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);for(a&&a(n);f.length;)f.shift()()}var e={},r={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+({}[t]||t)+".js"}(t);var a=new Error;c=function(n){u.onerror=u.onload=null,clearTimeout(f);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,e[1](a)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var a=c;o(o.s=11)}([function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return u}));var r="UPLOADED",o="WATCH",i="WATCHNEXT",c="REMOVE",u=" AUTOPLAY"},function(t,n,e){"use strict";e.d(n,"a",(function(){return p})),e.d(n,"d",(function(){return d})),e.d(n,"b",(function(){return b})),e.d(n,"c",(function(){return y}));var r=e(3),o=e(0);function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l=Object(r.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{videos:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.c:var e=t.videos.reduce((function(t,n){return t.push(n.name),t}),[]),r=n.payload.filter((function(t){return!e.includes(t.name)}));return a(a({},t),{},{videos:[].concat(i(t.videos),i(r))});case o.b:return a(a({},t),{},{videos:t.videos.filter((function(t){return t.id!==n.payload}))});default:return t}})),s=l.dispatch,p=l.getState,d=function(t){s({type:o.c,payload:t})},b=function(t){s({type:o.b,payload:t})},y=function(t){return l.subscribe(t)}},function(t,n,e){"use strict";n.a=e.p+"fd0110471f2228c1808a75b977150a0a.ttf"},function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(5),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function c(t){if("object"!=typeof t||null===t)return!1;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}function u(t,n,e){var o;if("function"==typeof n&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof n&&void 0===e&&(e=n,n=void 0),void 0!==e){if("function"!=typeof e)throw new Error("Expected the enhancer to be a function.");return e(u)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,f=n,l=[],s=l,p=!1;function d(){s===l&&(s=l.slice())}function b(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function y(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var n=!0;return d(),s.push(t),function(){if(n){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");n=!1,d();var e=s.indexOf(t);s.splice(e,1),l=null}}}function h(t){if(!c(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,f=a(f,t)}finally{p=!1}for(var n=l=s,e=0;e<n.length;e++){(0,n[e])()}return t}function m(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");a=t,h({type:i.REPLACE})}function v(){var t,n=y;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function e(){t.next&&t.next(b())}return e(),{unsubscribe:n(e)}}})[r.a]=function(){return this},t}return h({type:i.INIT}),(o={dispatch:h,subscribe:y,getState:b,replaceReducer:m})[r.a]=v,o}},function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return p})),e.d(n,"d",(function(){return d})),e.d(n,"e",(function(){return b})),e.d(n,"c",(function(){return y}));var r=e(3),o=e(0),i=e(1);function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f=Object(r.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{watch:null,watching:null,autoplay:!1},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.d:var e=(r=Object(i.a)()).videos.findIndex((function(t){return t.id===n.payload}));return u(u({},t),{},{watch:r.videos[e]||null,watching:e});case o.e:var r=Object(i.a)(),c=t.watching,a=function(){return t.autoplay=!1,t.watching=null},f=function(){var t=r.videos[c];return Object(i.b)(t.id),t};return u(u({},t),{},{watch:f()||a(),watching:c});case o.a:return u(u({},t),{},{autoplay:n.payload});default:return t}})),l=f.dispatch,s=f.getState,p=function(t){l({type:o.a,payload:t})},d=function(t){l({type:o.d,payload:t})},b=function(){l({type:o.e})},y=function(t){return f.subscribe(t)}},function(t,n,e){"use strict";(function(t,r){var o,i=e(6);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var c=Object(i.a)(o);n.a=c}).call(this,e(9),e(10)(t))},function(t,n,e){"use strict";function r(t){var n,e=t.Symbol;return"function"==typeof e?e.observable?n=e.observable:(n=e("observable"),e.observable=n):n="@@observable",n}e.d(n,"a",(function(){return r}))},function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><path fill="#dbb065" d="M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z"></path><path fill="#967a44" d="M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z"></path><path fill="#fff" d="M4.5 7.5H35.5V25.5H4.5z"></path><path fill="#788b9c" d="M35,8v17H5V8H35 M36,7H4v19h32V7L36,7z"></path><g><path fill="#f5ce85" d="M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z"></path><path fill="#967a44" d="M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z"></path></g></svg>'},function(t,n,e){},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){t.exports=function(t){if(!t.webpackPolyfill){var n=Object.create(t);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},function(t,n,e){"use strict";e.r(n);e(8);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){var n="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function u(t,n,e){return(u=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=document.createElement("template");s.innerHTML="\n<style>\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        color: #ffff;\n    }\n    main{\n        margin-top:30px auto;\n        width:100%;\n        display: flex;\n        justify-content:center;\n        aligin-items:center;\n        flex-flow: column wrap;\n    }\n    @media only screen and (min-width:600px){\n        main{\n         \n            margin:auto;\n        }\n    }\n    @media only screen and (min-width:900px){\n        main{\n            margin-top:50px 0;\n            flex-flow:row nowrap;\n        }\n    }\n</style>\n<main></main>\n";var p=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(b,t);var n,r,c,u,p,d=(n=b,r=a(),function(){var t,e=l(n);if(r){var o=l(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return i(this,t)});function b(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,b),(t=d.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild(s.content.cloneNode(!0)),t}return c=b,(u=[{key:"connectedCallback",value:function(){var t=this,n=[e.e(1).then(e.bind(null,21)),e.e(2).then(e.bind(null,22))];Promise.all(n).then((function(n){n.forEach((function(n){t.shadowRoot.querySelector("main").appendChild(n.default)}))})).catch((function(t){return console.error(t)}))}}])&&o(c.prototype,u),p&&o(c,p),b}(c(HTMLElement));window.customElements.define("main-card",p);var d=document.createElement("main-card"),b=e(1);let y=(t=21)=>{let n="",e=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&e[t];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n};var h=e(4),m=e(7),v=e.n(m),w=e(2);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function j(t){var n="function"==typeof Map?new Map:void 0;return(j=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return E(t,arguments,R(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),S(r,t)})(t)}function E(t,n,e){return(E=P()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&S(o,e.prototype),o}).apply(null,arguments)}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function S(t,n){return(S=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=document.createElement("template");k.innerHTML="\n<style>\n    @font-face{\n        font-family: customFont;\n        src: url(".concat(w.a,');\n        } \n        \n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        color: #ffff;\n        font-family: customFont;\n    }\n\n    nav {\n        float:right;\n        margin:auto;\n        display:grid;\n        grid-template-columns:repeat(6, auto);\n        grid-template-rows: repeat(1, auto);\n        grip-gap:1px;\n        width:500px;\n    }\n    nav * {\n        cursor:pointer;\n        margin:auto;\n    }\n  \n    .aboutbtn{\n        grid-column:6;\n        border:none;\n        height:30px;\n        width:60px;\n        background-color:#008CFF;\n        font-size: 0.95em;\n    }\n    /*autoplay checkbox custom style.*/\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-color: #ccc;\n        transition: 4s;\n        -webkit-transition: 4s;\n    }\n    \n    .slider::before {\n        position: absolute;\n        content: "";\n        height: 15px;\n        width: 15px;\n        left: 4px;\n        bottom: 4px;\n        background-color: white;\n    }\n    \n    input:checked+.slider {\n        background-color: #33373a;\n    }\n    \n    input:focus+.slider {\n        box-shadow: 0 0 1px rgba(9, 84, 146, 0.247);\n    }\n    \n    input:checked+.slider::before {\n        transform: translateX(26px);\n    }\n    \n    .slider.round {\n        border-radius: 2px;\n        height:25px;\n    }\n    \n    .slider.slider.round::before {\n        border-radius: 10%;\n    }\n\n    .switch {\n        grid-column:3;\n        position: relative;\n        display: inline-block;\n        width: 50px;\n    }\n    \n    .switch input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n    }\n\n    /*input file cutomize css*/\n    input[type="file"] {\n        position:absolute;\n        z-index: -1;\n        width:30px;\n      }\n    #upload:focus{\n        outline:1px solid #222;\n    }\n    .upload-wrapper {\n        grid-column:4;\n        position: relative;\n        width:30px;\n      }\n      \n    .uploadbtn {\n        display: flex;\n        justify-content:center;\n        cursor: pointer; \n        width:100px;\n        height:60px;\n        background:#222;\n    }\n    .uploadbtn svg {\n        height:60px;\n        width:100px;\n        pointer-events: none;\n    }  \n\n\n</style>\n<nav> \n    <label  class="switch" title="autoplay">\n        <input type="checkbox"  id="autoplay"/>\n        <span class="slider round"></span>\n    </label>\n\n    <div class="upload-wrapper">\n        <input type="file" multiple accept="video/*" id="upload" />\n        <label class="uploadbtn" for="upload" >').concat(v.a,'</label>\n    </div>\n\n    <button id="about" class="aboutbtn">About</button>\n </nav>\n');var _=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&S(t,n)}(a,t);var n,r,o,i,c,u=(n=a,r=P(),function(){var t,e=R(n);if(r){var o=R(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return x(this,t)});function a(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild(k.content.cloneNode(!0)),t}return o=a,(i=[{key:"connectedCallback",value:function(){var t=this.shadowRoot,n=t.querySelector("#autoplay"),e=t.querySelector('input[type="file"]'),r=t.querySelector("#about");n.addEventListener("click",this.autoplay),e.addEventListener("change",this.upload),r.addEventListener("click",this.about(this))}},{key:"upload",value:function(t){for(var n=t.target.files,e=[],r=/\.(avi|flv|mov|mp4|mpeg|mpg|ogv|webm|wmv|mp2)$/,o=/^video\/(avi|flv|mov|mp4|mpeg|mpg|ogv|webm|wmv|mp2)$/,i=0;i<n.length;i++){var c=n.item(i),u=c.name,a=c.type,f=c.size,l=r.test(u),s=o.test(a);l&&s&&e.push({name:u,size:f,type:a,id:y(),src:URL.createObjectURL(new Blob([c],{type:a}))})}Object(b.d)(e),t.target.value=null,t.target.blur()}},{key:"autoplay",value:function(t){t.stopImmediatePropagation();var n=Object(h.a)();Object(h.b)(!0!==n.autoplay),t.target.blur()}},{key:"about",value:function(t){return function(n){n.stopImmediatePropagation(),3===t.shadowRoot.children.length?t.shadowRoot.removeChild(t.shadowRoot.children[2]):2===t.shadowRoot.children.length&&e.e(3).then(e.bind(null,23)).then((function(n){var e=n.default;e.onclick=function(n){return t.shadowRoot.removeChild(e)},document.addEventListener("click",(function(n){3===t.shadowRoot.children.length&&t.shadowRoot.removeChild(t.shadowRoot.children[2])})),t.shadowRoot.appendChild(e)})).catch((function(t){return console.error(t)})),n.target.blur()}}}])&&O(o.prototype,i),c&&O(o,c),a}(j(HTMLElement));window.customElements.define("navbar-card",_);var T=document.createElement("navbar-card");function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,n){return!n||"object"!==L(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function C(t){var n="function"==typeof Map?new Map:void 0;return(C=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return H(t,arguments,z(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),I(r,t)})(t)}function H(t,n,e){return(H=A()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&I(o,e.prototype),o}).apply(null,arguments)}function A(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function I(t,n){return(I=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var D=document.createElement("template");D.innerHTML="\n<style>\n    @font-face{\n        font-family: customFont;\n        src: url(".concat(w.a,");\n    } \n  * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        color: #ffff;\n        font-family: customFont;\n    }\n    \n    footer {\n        position: fixed;\n        right:calc(50% - 50px);\n        bottom: 20px;\n        font-size: 0.75em;\n        width:100px;\n        text-align:center;\n        z-index:2;\n    }\n    @media only screen and (min-width:1000px){\n        footer{\n            right:calc(30% - 50px);\n          \n            }\n        }\n</style>\n<footer >&copy; 2020 - 2021 KT Motshoana</footer>\n");var N=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&I(t,n)}(o,t);var n,e,r=(n=o,e=A(),function(){var t,r=z(n);if(e){var o=z(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return M(this,t)});function o(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild(D.content.cloneNode(!0)),t}return o}(C(HTMLElement));window.customElements.define("footer-card",N);var F=document.createElement("footer-card");var U=function(t){[T,d,F].forEach((function(n){return t.appendChild(n)}))};var V=document.createElement("div");V.id="root",U(V),document.body.appendChild(V),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(t){})).catch((function(t){}))}))}]);
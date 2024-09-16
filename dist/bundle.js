(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var i=t(601),r=t.n(i),a=t(314),o=t.n(a)()(r());o.push([n.id,"@import url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css);"]),o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);"]),o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900,1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),o.push([n.id,'body{\n    font-family: "Roboto","Playfair Display";\n}\nheader{\n    display: flex;\n    gap: 10px;\n}\n.link{\n    float: right;\n    list-style-type: none;\n    margin: 0 5px;\n}\n.bio-h1,.footer_header{\n    text-align: center;\n}\nfooter{\n    display: flex;\n    gap: 10px;\n}\n\n@media (max-width:800px){\n    header,footer{\n        display: flex;\n        flex-direction: column;\n    }\n}',""]);const s=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],l=i.base?c[0]+i.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=r(f,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}o.push(p)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=i(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=i(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var i=t(72),r=t.n(i),a=t(825),o=t.n(a),s=t(659),c=t.n(s),l=t(56),d=t.n(l),p=t(540),u=t.n(p),f=t(113),v=t.n(f),h=t(365),m={};m.styleTagTransform=v(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),r()(h.A,m),h.A&&h.A.locals&&h.A.locals;const g=t.p+"5ff6dca0d0986ce289a4.jpg",y=t.p+"8d999751b933380b8d74.jpg",b=t.p+"fb099d0a30e545c892c6.jpg",w=t.p+"44a1107071c9acc2c356.jpg";document.body.appendChild(function(){let n=document.createElement("header");return n.innerHTML=`\n    <div class="icon_div">\n        <img loading="lazy" src=${g} srcset="${g} 640w,${y} 1280w,${b} 1920w,${w} 6000w" alt="Anali Rono" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">\n    </div>\n    <div class="bio">\n        <div>\n            <h1 class="bio-h1">About Me</h1>\n            <p>\n                I am a skilled web designer specializing in creating dynamic and visually engaging websites using HTML, CSS, and JavaScript. With a strong focus on modern design principles and user experience, I leverage Webpack as my package manager to streamline and optimize the development process. My expertise ensures that websites are not only aesthetically pleasing but also functional and efficient.\n            </p>\n        </div>\n        <div class = "social_links>\n            <ul class="links">\n                <li class="link">\n            <i class="devicon-github-original"></i>\n          </li>\n                <li class="link">\n            <i class="devicon-linkedin-plain"></i>\n          </li>\n                <li class="link">\n            <i class="devicon-twitter-original"></i>\n          </li>\n            </ul>\n        </div>\n    </div>\n    `,n}()),document.body.appendChild(function(){let n=document.createElement("main");return n.innerHTML='\n    <h1>My Work</h1>\n    <div>\n        <img src="" srcset ="" alt="Project 1">\n    </div>\n    <div>\n        <div>\n            <h2>Project name</h2>\n            <div>\n                <ul>\n                    <li><i class="devicon-github-original"></i></li>\n                    <li><i class="devicon-github-original"></i></li>\n                </ul>\n            </div>\n        </div>\n        <div id="description">\n        </div>\n    </div>\n    ',n}()),document.body.appendChild(function(){let n=document.createElement("footer");return n.innerHTML=`\n        <div>\n            <div>\n                <h1 class="footer_header">Contact Me</h1>\n                <p>Please get in touch if you thank our work could e mutually beneficial.</p>\n                <p>1234 Random Road</p>\n                <p>Random Town, California 12345</p>\n                <p>555-555-555</p>\n                <p>notreal@gmail.com</p>\n                <ul>\n                <li>\n                <i class="devicon-github-original"></i>\n                </li>\n                <li>\n                    <i class="devicon-linkedin-plain"></i>\n                </li>\n                <li>\n                    <i class="devicon-twitter-original"></i>\n                </li>\n                </ul>\n            </div>\n        </div>\n        <div>\n            <img loading="lazy" src=${g} srcset="${g} 640w,${y} 1280w,${b} 1920w,${w} 6000w" alt="Anali Rono" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">\n        </div>\n    `,n}())})();
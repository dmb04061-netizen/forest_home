module.exports=[87805,a=>{"use strict";let b,c,d;var e=a.i(45056),f=Object.create,g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,j=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,l=function(a,b){return function(){return a&&(b=a(a=0)),b}},m=function(a,b){return function(){return b||a((b={exports:{}}).exports,b),b.exports}},n=function(a,b,c,d){if(b&&"object"==typeof b||"function"==typeof b)for(var e,f=i(b),j=0,l=f.length;j<l;j++)e=f[j],k.call(a,e)||e===c||g(a,e,{get:(function(a){return b[a]}).bind(null,e),enumerable:!(d=h(b,e))||d.enumerable});return a},o=function(a,b,c){return c=null!=a?f(j(a)):{},n(!b&&a&&a.__esModule?c:g(c,"default",{value:a,enumerable:!0}),a)},p=m(function(b,c){c.exports=a.g});function q(a,b){return null!=b&&"u">typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):q(a,b)}var r=l(function(){r()});function s(a){return a&&"u">typeof Symbol&&a.constructor===Symbol?"symbol":typeof a}var t=l(function(){}),u=m(function(a,b){var c=Array.prototype.slice;b.exports=function(a,b){for(("length"in a)||(a=[a]),a=c.call(a);a.length;){var d=a.shift(),e=b(d);if(e)return e;d.childNodes&&d.childNodes.length&&(a=c.call(d.childNodes).concat(a))}}}),v=m(function(a,b){function c(a,b){if(!q(this,c))return new c(a,b);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=b||null}r(),b.exports=c,c.prototype.nodeType=8,c.prototype.nodeName="#comment",c.prototype.toString=function(){return"[object Comment]"}}),w=m(function(a,b){function c(a,b){if(!q(this,c))return new c(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=b||null}r(),b.exports=c,c.prototype.type="DOMTextNode",c.prototype.nodeType=3,c.prototype.nodeName="#text",c.prototype.toString=function(){return this.data},c.prototype.replaceData=function(a,b,c){var d=this.data,e=d.substring(0,a),f=d.substring(a+b,d.length);this.data=e+c+f,this.length=this.data.length}}),x=m(function(a,b){b.exports=function(a){var b=this,c=a.type;a.target||(a.target=b),b.listeners||(b.listeners={});var d=b.listeners[c];if(d)return d.forEach(function(c){a.currentTarget=b,"function"==typeof c?c(a):c.handleEvent(a)});b.parentNode&&b.parentNode.dispatchEvent(a)}}),y=m(function(a,b){b.exports=function(a,b){this.listeners||(this.listeners={}),this.listeners[a]||(this.listeners[a]=[]),-1===this.listeners[a].indexOf(b)&&this.listeners[a].push(b)}}),z=m(function(a,b){b.exports=function(a,b){if(this.listeners&&this.listeners[a]){var c=this.listeners[a],d=c.indexOf(b);-1!==d&&c.splice(d,1)}}}),A=m(function(a,b){t(),b.exports=function a(b){switch(b.nodeType){case 3:return e(b.data);case 8:return"<!--"+b.data+"-->";default:var f,g,h;return g=[],h=(f=b).tagName,"http://www.w3.org/1999/xhtml"===f.namespaceURI&&(h=h.toLowerCase()),g.push("<"+h+function(a){var b=[];for(var c in a)(function(a,b){var c=s(a[b]);return"style"===b&&Object.keys(a.style).length>0||a.hasOwnProperty(b)&&("string"===c||"boolean"===c||"number"===c)&&"nodeName"!==b&&"className"!==b&&"tagName"!==b&&"textContent"!==b&&"innerText"!==b&&"namespaceURI"!==b&&"innerHTML"!==b})(a,c)&&b.push({name:c,value:a[c]});for(var e in a._attributes)for(var f in a._attributes[e]){var g=a._attributes[e][f],h=(g.prefix?g.prefix+":":"")+f;b.push({name:h,value:g.value})}return a.className&&b.push({name:"class",value:a.className}),b.length?d(b):""}(f)+function(a){var b=a.dataset,c=[];for(var e in b)c.push({name:"data-"+e,value:b[e]});return c.length?d(c):""}(f)),c.indexOf(h)>-1?g.push(" />"):(g.push(">"),f.childNodes.length?g.push.apply(g,f.childNodes.map(a)):f.textContent||f.innerText?g.push(e(f.textContent||f.innerText)):f.innerHTML&&g.push(f.innerHTML),g.push("</"+h+">")),g.join("")}};var c=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function d(a){var b=[];return a.forEach(function(a){var c=a.name,d=a.value;"style"===c&&(d=function(a){if("string"==typeof a)return a;var b="";return Object.keys(a).forEach(function(c){var d=a[c];c=c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),b+=c+":"+d+";"}),b}(d)),b.push(c+'="'+e(d).replace(/"/g,"&quot;")+'"')}),b.length?" "+b.join(" "):""}function e(a){var b="";return"string"==typeof a?b=a:a&&(b=a.toString()),b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),B=m(function(a,b){r();var c=u(),d=x(),e=y(),f=z(),g=A(),h="http://www.w3.org/1999/xhtml";function i(a,b,c){if(!q(this,i))return new i(a);var d=void 0===c?h:c||null;this.tagName=d===h?String(a).toUpperCase():a,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=b||null,this.namespaceURI=d,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}b.exports=i,i.prototype.type="DOMElement",i.prototype.nodeType=1,i.prototype.appendChild=function(a){return a.parentNode&&a.parentNode.removeChild(a),this.childNodes.push(a),a.parentNode=this,a},i.prototype.replaceChild=function(a,b){a.parentNode&&a.parentNode.removeChild(a);var c=this.childNodes.indexOf(b);return b.parentNode=null,this.childNodes[c]=a,a.parentNode=this,b},i.prototype.removeChild=function(a){var b=this.childNodes.indexOf(a);return this.childNodes.splice(b,1),a.parentNode=null,a},i.prototype.insertBefore=function(a,b){a.parentNode&&a.parentNode.removeChild(a);var c=null==b?-1:this.childNodes.indexOf(b);return c>-1?this.childNodes.splice(c,0,a):this.childNodes.push(a),a.parentNode=this,a},i.prototype.setAttributeNS=function(a,b,c){var d=null,e=b,f=b.indexOf(":");(f>-1&&(d=b.substr(0,f),e=b.substr(f+1)),"INPUT"===this.tagName&&"type"===b)?this.type=c:(this._attributes[a]||(this._attributes[a]={}))[e]={value:c,prefix:d}},i.prototype.getAttributeNS=function(a,b){var c=this._attributes[a],d=c&&c[b]&&c[b].value;return"INPUT"===this.tagName&&"type"===b?this.type:"string"!=typeof d?null:d},i.prototype.removeAttributeNS=function(a,b){var c=this._attributes[a];c&&delete c[b]},i.prototype.hasAttributeNS=function(a,b){var c=this._attributes[a];return!!c&&b in c},i.prototype.setAttribute=function(a,b){return this.setAttributeNS(null,a,b)},i.prototype.getAttribute=function(a){return this.getAttributeNS(null,a)},i.prototype.removeAttribute=function(a){return this.removeAttributeNS(null,a)},i.prototype.hasAttribute=function(a){return this.hasAttributeNS(null,a)},i.prototype.removeEventListener=f,i.prototype.addEventListener=e,i.prototype.dispatchEvent=d,i.prototype.focus=function(){},i.prototype.toString=function(){return g(this)},i.prototype.getElementsByClassName=function(a){var b=a.split(" "),d=[];return c(this,function(a){if(1===a.nodeType){var c=(a.className||"").split(" ");b.every(function(a){return -1!==c.indexOf(a)})&&d.push(a)}}),d},i.prototype.getElementsByTagName=function(a){a=a.toLowerCase();var b=[];return c(this.childNodes,function(c){1===c.nodeType&&("*"===a||c.tagName.toLowerCase()===a)&&b.push(c)}),b},i.prototype.contains=function(a){return c(this,function(b){return a===b})||!1}}),C=m(function(a,b){r();var c=B();function d(a){if(!q(this,d))return new d;this.childNodes=[],this.parentNode=null,this.ownerDocument=a||null}b.exports=d,d.prototype.type="DocumentFragment",d.prototype.nodeType=11,d.prototype.nodeName="#document-fragment",d.prototype.appendChild=c.prototype.appendChild,d.prototype.replaceChild=c.prototype.replaceChild,d.prototype.removeChild=c.prototype.removeChild,d.prototype.toString=function(){return this.childNodes.map(function(a){return String(a)}).join("")}}),D=m(function(a,b){function c(a){}b.exports=c,c.prototype.initEvent=function(a,b,c){this.type=a,this.bubbles=b,this.cancelable=c},c.prototype.preventDefault=function(){}}),E=m(function(a,b){r();var c=u(),d=v(),e=w(),f=B(),g=C(),h=D(),i=x(),j=y(),k=z();function l(){if(!q(this,l))return new l;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}b.exports=l;var m=l.prototype;m.createTextNode=function(a){return new e(a,this)},m.createElementNS=function(a,b){return new f(b,this,null===a?null:String(a))},m.createElement=function(a){return new f(a,this)},m.createDocumentFragment=function(){return new g(this)},m.createEvent=function(a){return new h(a)},m.createComment=function(a){return new d(a,this)},m.getElementById=function(a){return a=String(a),c(this.childNodes,function(b){if(String(b.id)===a)return b})||null},m.getElementsByClassName=f.prototype.getElementsByClassName,m.getElementsByTagName=f.prototype.getElementsByTagName,m.contains=f.prototype.contains,m.removeEventListener=k,m.addEventListener=j,m.dispatchEvent=i}),F=m(function(a,b){b.exports=new(E())}),G=m(function(b,c){var d,e=a.g,f=F();"u">typeof document?d=document:(d=e["__GLOBAL_DOCUMENT_CACHE@4"])||(d=e["__GLOBAL_DOCUMENT_CACHE@4"]=f),c.exports=d});function H(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function I(a,b){if(a){if("string"==typeof a)return H(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return H(a,b)}}function J(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c=null==a?null:"u">typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c.return||c.return()}finally{if(h)throw e}}return f}}(a,b)||I(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=o(p()),L=o(p()),M=o(p()),N=function(){var a=M.default.performance,b=a&&a.timing,c=b&&b.navigationStart;return Math.round("number"==typeof c&&"function"==typeof a.now?c+a.now():Date.now())},O=function(){if("function"==typeof(null==(a=L.default.crypto)?void 0:a.getRandomValues)){c=new Uint8Array(32),L.default.crypto.getRandomValues(c);for(var a,b,c,d=0;d<32;d++)c[d]=c[d]%16}else{c=[];for(var e=0;e<32;e++)c[e]=16*Math.random()|0}var f=0;b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b="x"===a?c[f]:3&c[f]|8;return f++,b.toString(16)});var g=N(),h=null==g?void 0:g.toString(16).substring(3);return h?b.substring(0,28)+h:b},P=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},Q=function(a){var b;if(a&&void 0!==a.nodeName)return a.muxId||(a.muxId=P()),a.muxId;try{b=document.querySelector(a)}catch(a){}return b&&!b.muxId&&(b.muxId=a),(null==b?void 0:b.muxId)||a},R=function(a){a&&void 0!==a.nodeName?a=Q(b=a):b=document.querySelector(a);var b,c=b&&b.nodeName?b.nodeName.toLowerCase():"";return[b,a,c]};function S(a){return function(a){if(Array.isArray(a))return H(a)}(a)||function(a){if("u">typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||I(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=function(a){var b,c,d,e,f,g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,h=a?[console,a]:[console],i=(b=console.trace).bind.apply(b,S(h)),j=(c=console.info).bind.apply(c,S(h)),k=(d=console.debug).bind.apply(d,S(h)),l=(e=console.warn).bind.apply(e,S(h)),m=(f=console.error).bind.apply(f,S(h)),n=g;return{trace:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>0))return i.apply(void 0,S(b))},debug:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>1))return k.apply(void 0,S(b))},info:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>2))return j.apply(void 0,S(b))},warn:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>3))return l.apply(void 0,S(b))},error:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>4))return m.apply(void 0,S(b))},get level(){return n},set level(_){_!==this.level&&(n=null!=_?_:g)}}}("[mux]"),U=o(p());function V(){return"1"===(U.default.doNotTrack||U.default.navigator&&U.default.navigator.doNotTrack)}function W(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function X(a,b){if(!q(a,b))throw TypeError("Cannot call a class as a function")}function Y(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function Z(a,b,c){return b&&Y(a.prototype,b),c&&Y(a,c),a}function $(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function aa(a){return(aa=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function ab(a,b,c){return(ab="u">typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=function(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&null!==(a=aa(a)););return a}(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c||a):e.value}})(a,b,c||a)}function ac(a,b){return(ac=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}r(),t();var ad=function(a){return ae(a)[0]},ae=function(a){if("string"!=typeof a||""===a)return["localhost"];var b,c=(a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return c&&(b=(c.match(/[^\.]+\.[^\.]+$/)||[])[0]),[c,b]},af=o(p()),ag=function(){var a=af.default.performance;return void 0!==(a&&a.timing)},ah=function(){var a=af.default.performance,b=a&&a.timing;return b&&b.domContentLoadedEventEnd},ai=function(){var a=af.default.performance,b=a&&a.timing;return b&&b.navigationStart};function aj(a,b,c){c=void 0===c?1:c,a[b]=a[b]||0,a[b]+=c}function ak(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){$(a,b,c[b])})}return a}function al(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a){var b=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);b.push.apply(b,c)}return b})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var am=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],an=["x-cdn","content-type"].concat(am);function ao(a){var b={};return(a=a||"").trim().split(/[\r\n]+/).forEach(function(a){if(a){var c=a.split(": "),d=c.shift();d&&(an.indexOf(d.toLowerCase())>=0||0===d.toLowerCase().indexOf("x-litix-"))&&(b[d]=c.join(": "))}}),b}function ap(a){if(a){var b=am.find(function(b){return void 0!==a[b]});return b?a[b]:void 0}}var aq=function(a){var b={};for(var c in a){var d=a[c];-1!==d["DATA-ID"].search("io.litix.data.")&&(b[d["DATA-ID"].replace("io.litix.data.","")]=d.VALUE)}return b},ar=function(a){if(!a)return{};var b=ai(),c=a.loading,d=c?c.start:a.trequest,e=c?c.first:a.tfirst,f=c?c.end:a.tload;return{bytesLoaded:a.total,requestStart:Math.round(b+d),responseStart:Math.round(b+e),responseEnd:Math.round(b+f)}},as=function(a){if(!(!a||"function"!=typeof a.getAllResponseHeaders))return ao(a.getAllResponseHeaders())},at=function(a,b,c){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var d=arguments.length>4?arguments[4]:void 0,e=a.log,f=a.utils.secondsToMs,g=function(a){var b,c=parseInt(d.version);return 1===c&&null!==a.programDateTime&&(b=a.programDateTime),0===c&&null!==a.pdt&&(b=a.pdt),b};if(!ag())return void e.warn("performance timing not supported. Not tracking HLS.js.");var h=function(c,d){return a.emit(b,c,d)},i=function(a,b){var c=b.levels,d=b.audioTracks,e=b.url,f=b.stats,g=b.networkDetails,i=b.sessionData,j={},k={};c.forEach(function(a,b){j[b]={width:a.width,height:a.height,bitrate:a.bitrate,attrs:a.attrs}}),d.forEach(function(a,b){k[b]={name:a.name,language:a.lang,bitrate:a.bitrate}});var l=ar(f),m=l.bytesLoaded,n=l.requestStart,o=l.responseStart,p=l.responseEnd;h("requestcompleted",al(ak({},aq(i)),{request_event_type:a,request_bytes_loaded:m,request_start:n,request_response_start:o,request_response_end:p,request_type:"manifest",request_hostname:ad(e),request_response_headers:as(g),request_rendition_lists:{media:j,audio:k,video:{}}}))};c.on(d.Events.MANIFEST_LOADED,i);var j=function(a,b){var c=b.details,d=b.level,e=b.networkDetails,i=ar(b.stats),j=i.bytesLoaded,k=i.requestStart,l=i.responseStart,m=i.responseEnd,n=c.fragments[c.fragments.length-1],o=g(n)+f(n.duration);h("requestcompleted",{request_event_type:a,request_bytes_loaded:j,request_start:k,request_response_start:l,request_response_end:m,request_current_level:d,request_type:"manifest",request_hostname:ad(c.url),request_response_headers:as(e),video_holdback:c.holdBack&&f(c.holdBack),video_part_holdback:c.partHoldBack&&f(c.partHoldBack),video_part_target_duration:c.partTarget&&f(c.partTarget),video_target_duration:c.targetduration&&f(c.targetduration),video_source_is_live:c.live,player_manifest_newest_program_time:isNaN(o)?void 0:o})};c.on(d.Events.LEVEL_LOADED,j);var k=function(a,b){var c=b.details,d=b.networkDetails,e=ar(b.stats);h("requestcompleted",{request_event_type:a,request_bytes_loaded:e.bytesLoaded,request_start:e.requestStart,request_response_start:e.responseStart,request_response_end:e.responseEnd,request_type:"manifest",request_hostname:ad(c.url),request_response_headers:as(d)})};c.on(d.Events.AUDIO_TRACK_LOADED,k);var l=function(a,b){var d=b.stats,e=b.networkDetails,f=b.frag,g=ar(d=d||f.stats),i=g.bytesLoaded,j=g.requestStart,k=g.responseStart,l=g.responseEnd,m=e?as(e):void 0,n={request_event_type:a,request_bytes_loaded:i,request_start:j,request_response_start:k,request_response_end:l,request_hostname:e?ad(e.responseURL):void 0,request_id:m?ap(m):void 0,request_response_headers:m,request_media_duration:f.duration,request_url:null==e?void 0:e.responseURL};"main"===f.type?(n.request_type="media",n.request_current_level=f.level,n.request_video_width=(c.levels[f.level]||{}).width,n.request_video_height=(c.levels[f.level]||{}).height,n.request_labeled_bitrate=(c.levels[f.level]||{}).bitrate):n.request_type=f.type,h("requestcompleted",n)};c.on(d.Events.FRAG_LOADED,l);var m=function(a,b){var c=b.frag,d=c.start;h("fragmentchange",{currentFragmentPDT:g(c),currentFragmentStart:f(d)})};c.on(d.Events.FRAG_CHANGED,m);var n=function(a,b){var c,e=b.type,f=b.details,g=b.response,i=b.fatal,j=b.frag,k=b.networkDetails,l=(null==j?void 0:j.url)||b.url||"",m=k?as(k):void 0;(f===d.ErrorDetails.MANIFEST_LOAD_ERROR||f===d.ErrorDetails.MANIFEST_LOAD_TIMEOUT||f===d.ErrorDetails.FRAG_LOAD_ERROR||f===d.ErrorDetails.FRAG_LOAD_TIMEOUT||f===d.ErrorDetails.LEVEL_LOAD_ERROR||f===d.ErrorDetails.LEVEL_LOAD_TIMEOUT||f===d.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||f===d.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||f===d.ErrorDetails.SUBTITLE_LOAD_ERROR||f===d.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||f===d.ErrorDetails.KEY_LOAD_ERROR||f===d.ErrorDetails.KEY_LOAD_TIMEOUT)&&h("requestfailed",{request_error:f,request_url:l,request_hostname:ad(l),request_id:m?ap(m):void 0,request_type:f===d.ErrorDetails.FRAG_LOAD_ERROR||f===d.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":f===d.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||f===d.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":f===d.ErrorDetails.SUBTITLE_LOAD_ERROR||f===d.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":f===d.ErrorDetails.KEY_LOAD_ERROR||f===d.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==g?void 0:g.code,request_error_text:null==g?void 0:g.text}),i&&h("error",{player_error_code:e,player_error_message:f,player_error_context:"".concat(l?"url: ".concat(l,"\n"):"")+"".concat(g&&(g.code||g.text)?"response: ".concat(g.code,", ").concat(g.text,"\n"):"")+"".concat(b.reason?"failure reason: ".concat(b.reason,"\n"):"")+"".concat(b.level?"level: ".concat(b.level,"\n"):"")+"".concat(b.parent?"parent stream controller: ".concat(b.parent,"\n"):"")+"".concat(b.buffer?"buffer length: ".concat(b.buffer,"\n"):"")+"".concat(b.error?"error: ".concat(b.error,"\n"):"")+"".concat(b.event?"event: ".concat(b.event,"\n"):"")+"".concat(b.err?"error message: ".concat(null==(c=b.err)?void 0:c.message,"\n"):"")})};c.on(d.Events.ERROR,n);var o=function(a,b){var c=b.frag,d=c&&c._url||"";h("requestcanceled",{request_event_type:a,request_url:d,request_type:"media",request_hostname:ad(d)})};c.on(d.Events.FRAG_LOAD_EMERGENCY_ABORTED,o);var p=function(a,b){var d=b.level,f=c.levels[d];if(f&&f.attrs&&f.attrs.BANDWIDTH){var g,i=f.attrs.BANDWIDTH,j=parseFloat(f.attrs["FRAME-RATE"]);isNaN(j)||(g=j),i?h("renditionchange",{video_source_fps:g,video_source_bitrate:i,video_source_width:f.width,video_source_height:f.height,video_source_rendition_name:f.name,video_source_codec:null==f?void 0:f.videoCodec}):e.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};c.on(d.Events.LEVEL_SWITCHED,p),c._stopMuxMonitor=function(){c.off(d.Events.MANIFEST_LOADED,i),c.off(d.Events.LEVEL_LOADED,j),c.off(d.Events.AUDIO_TRACK_LOADED,k),c.off(d.Events.FRAG_LOADED,l),c.off(d.Events.FRAG_CHANGED,m),c.off(d.Events.ERROR,n),c.off(d.Events.FRAG_LOAD_EMERGENCY_ABORTED,o),c.off(d.Events.LEVEL_SWITCHED,p),c.off(d.Events.DESTROYING,c._stopMuxMonitor),delete c._stopMuxMonitor},c.on(d.Events.DESTROYING,c._stopMuxMonitor)},au=function(a){a&&"function"==typeof a._stopMuxMonitor&&a._stopMuxMonitor()},av=function(a,b){if(!a||!a.requestEndDate)return{};var c,d=ad(a.url),e=a.url,f=a.bytesLoaded,g=new Date(a.requestStartDate).getTime(),h=new Date(a.firstByteDate).getTime(),i=new Date(a.requestEndDate).getTime(),j=isNaN(a.duration)?0:a.duration,k="function"==typeof b.getMetricsFor?b.getMetricsFor(a.mediaType).HttpList:b.getDashMetrics().getHttpRequests(a.mediaType);k.length>0&&(c=ao(k[k.length-1]._responseHeaders||""));var l=c?ap(c):void 0;return{requestStart:g,requestResponseStart:h,requestResponseEnd:i,requestBytesLoaded:f,requestResponseHeaders:c,requestMediaDuration:j,requestHostname:d,requestUrl:e,requestId:l}},aw=function(a,b){if("function"==typeof b.getCurrentRepresentationForType){var c=b.getCurrentRepresentationForType(a);return c?{currentLevel:c.absoluteIndex,renditionWidth:c.width||null,renditionHeight:c.height||null,renditionBitrate:c.bandwidth}:{}}var d=b.getQualityFor(a),e=b.getCurrentTrackFor(a).bitrateList;return e?{currentLevel:d,renditionWidth:e[d].width||null,renditionHeight:e[d].height||null,renditionBitrate:e[d].bandwidth}:{}},ax=function(a){var b;return null==(b=a.match(/.*codecs\*?="(.*)"/))?void 0:b[1]},ay=function(a){try{var b,c;return null==(c=a.getVersion)||null==(b=c.call(a))?void 0:b.split(".").map(function(a){return parseInt(a)})[0]}catch(a){return!1}},az=function(a,b,c){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var d=a.log;if(!c||!c.on)return void d.warn("Invalid dash.js player reference. Monitoring blocked.");var e=ay(c),f=function(c,d){return a.emit(b,c,d)},g=function(a){var b=a.type,c=(a.data||{}).url;f("requestcompleted",{request_event_type:b,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:ad(c),request_url:c})};c.on("manifestLoaded",g);var h={},i=function(a){if("function"!=typeof a.getRequests)return null;var b=a.getRequests({state:"executed"});return 0===b.length?null:b[b.length-1]},j=function(a){var b=a.type,d=a.chunk,e=a.request,g=(d||{}).mediaInfo||{},i=g.type,j=g.bitrateList,k={};(j=j||[]).forEach(function(a,b){k[b]={},k[b].width=a.width,k[b].height=a.height,k[b].bitrate=a.bandwidth,k[b].attrs={}}),"video"===i?h.video=k:"audio"===i?h.audio=k:h.media=k;var l=av(e,c),m=l.requestStart,n=l.requestResponseStart,o=l.requestResponseEnd,p=l.requestResponseHeaders,q=l.requestMediaDuration,r=l.requestHostname,s=l.requestUrl;f("requestcompleted",{request_event_type:b,request_start:m,request_response_start:n,request_response_end:o,request_bytes_loaded:-1,request_type:i+"_init",request_response_headers:p,request_hostname:r,request_id:l.requestId,request_url:s,request_media_duration:q,request_rendition_lists:h})};e>=4?c.on("initFragmentLoaded",j):c.on("initFragmentLoaded",function(a){var b=a.type,c=a.fragmentModel,d=a.chunk;j({type:b,request:i(c),chunk:d})});var k=function(a){var b=a.type,d=a.chunk,e=a.request,g=d||{},h=g.mediaInfo,i=g.start,j=(h||{}).type,k=av(e,c),l=k.requestStart,m=k.requestResponseStart,n=k.requestResponseEnd,o=k.requestBytesLoaded,p=k.requestResponseHeaders,q=k.requestMediaDuration,r=k.requestHostname,s=k.requestUrl,t=k.requestId,u=aw(j,c),v=u.currentLevel,w=u.renditionWidth,x=u.renditionHeight;f("requestcompleted",{request_event_type:b,request_start:l,request_response_start:m,request_response_end:n,request_bytes_loaded:o,request_type:j,request_response_headers:p,request_hostname:r,request_id:t,request_url:s,request_media_start_time:i,request_media_duration:q,request_current_level:v,request_labeled_bitrate:u.renditionBitrate,request_video_width:w,request_video_height:x})};e>=4?c.on("mediaFragmentLoaded",k):c.on("mediaFragmentLoaded",function(a){var b=a.type,c=a.fragmentModel,d=a.chunk;k({type:b,request:i(c),chunk:d})});var l={video:void 0,audio:void 0,totalBitrate:void 0},m=function(){if(l.video&&"number"==typeof l.video.bitrate){if(!(l.video.width&&l.video.height))return void d.warn("have bitrate info for video but missing width/height");var a=l.video.bitrate;if(l.audio&&"number"==typeof l.audio.bitrate&&(a+=l.audio.bitrate),a!==l.totalBitrate)return l.totalBitrate=a,{video_source_bitrate:a,video_source_height:l.video.height,video_source_width:l.video.width,video_source_codec:ax(l.video.codec)}}},n=function(a,b,e){var g=a.mediaType;if("audio"===g||"video"===g){if("function"==typeof c.getRepresentationsByType)if(a.newRepresentation)h={bitrate:a.newRepresentation.bandwidth,width:a.newRepresentation.width,height:a.newRepresentation.height,qualityIndex:a.newRepresentation.absoluteIndex};else{var h,i=c.getRepresentationsByType(g);if(i&&"number"==typeof a.newQuality){var j=i.find(function(b){return b.absoluteIndex===a.newQuality||b.index===a.newQuality});j&&(h={bitrate:j.bandwidth,width:j.width,height:j.height,qualityIndex:a.newQuality})}}else{if("number"!=typeof a.newQuality)return void d.warn("missing evt.newQuality in qualityChangeRendered event",a);h=c.getBitrateInfoListFor(g).find(function(b){return b.qualityIndex===a.newQuality})}if(!(h&&"number"==typeof h.bitrate))return void d.warn("missing bitrate info for ".concat(g));l[g]=al(ak({},h),{codec:c.getCurrentTrackFor(g).codec});var k=m();k&&f("renditionchange",k)}};c.on("qualityChangeRendered",n);var o=function(a){var b=a.request,c=a.mediaType;f("requestcanceled",{request_event_type:(b=b||{}).type+"_"+b.action,request_url:b.url,request_type:c,request_hostname:ad(b.url)})};c.on("fragmentLoadingAbandoned",o);var p=function(a){var b,c,d=a.error,e=(null==d||null==(b=d.data)?void 0:b.request)||{},g=(null==d||null==(c=d.data)?void 0:c.response)||{};(null==d?void 0:d.code)===27&&f("requestfailed",{request_error:e.type+"_"+e.action,request_url:e.url,request_hostname:ad(e.url),request_type:e.mediaType,request_error_code:g.status,request_error_text:g.statusText});var h="".concat(null!=e&&e.url?"url: ".concat(e.url,"\n"):"")+"".concat(null!=g&&g.status||null!=g&&g.statusText?"response: ".concat(null==g?void 0:g.status,", ").concat(null==g?void 0:g.statusText,"\n"):"");f("error",{player_error_code:null==d?void 0:d.code,player_error_message:null==d?void 0:d.message,player_error_context:h})};c.on("error",p),c._stopMuxMonitor=function(){c.off("manifestLoaded",g),c.off("initFragmentLoaded",j),c.off("mediaFragmentLoaded",k),c.off("qualityChangeRendered",n),c.off("error",p),c.off("fragmentLoadingAbandoned",o),delete c._stopMuxMonitor}},aA=function(a){a&&"function"==typeof a._stopMuxMonitor&&a._stopMuxMonitor()},aB=0,aC=function(){function a(){X(this,a),$(this,"_listeners",void 0)}return Z(a,[{key:"on",value:function(a,b,c){return b._eventEmitterGuid=b._eventEmitterGuid||++aB,this._listeners=this._listeners||{},this._listeners[a]=this._listeners[a]||[],c&&(b=b.bind(c)),this._listeners[a].push(b),b}},{key:"off",value:function(a,b){var c=this._listeners&&this._listeners[a];c&&c.forEach(function(a,d){a._eventEmitterGuid===b._eventEmitterGuid&&c.splice(d,1)})}},{key:"one",value:function(a,b,c){var d=this;b._eventEmitterGuid=b._eventEmitterGuid||++aB;var e=function(){d.off(a,e),b.apply(c||this,arguments)};e._eventEmitterGuid=b._eventEmitterGuid,this.on(a,e)}},{key:"emit",value:function(a,b){var c=this;if(this._listeners){b=b||{};var d=this._listeners["before"+a]||[],e=this._listeners["before*"]||[],f=this._listeners[a]||[],g=this._listeners["after"+a]||[],h=function(b,d){(b=b.slice()).forEach(function(b){b.call(c,{type:a},d)})};h(d,b),h(e,b),h(f,b),h(g,b)}}}]),a}(),aD=o(p()),aE=function(){function a(b){var c=this;X(this,a),$(this,"_playbackHeartbeatInterval",void 0),$(this,"_playheadShouldBeProgressing",void 0),$(this,"pm",void 0),this.pm=b,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,b.on("playing",function(){c._playheadShouldBeProgressing=!0}),b.on("play",this._startPlaybackHeartbeatInterval.bind(this)),b.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),b.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),b.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("seeked",function(){b.data.player_is_paused?c._stopPlaybackHeartbeatInterval():c._startPlaybackHeartbeatInterval()}),b.on("timeupdate",function(){null!==c._playbackHeartbeatInterval&&b.emit("playbackheartbeat")}),b.on("devicesleep",function(a,d){null!==c._playbackHeartbeatInterval&&(aD.default.clearInterval(c._playbackHeartbeatInterval),b.emit("playbackheartbeatend",{viewer_time:d.viewer_time}),c._playbackHeartbeatInterval=null)})}return Z(a,[{key:"_startPlaybackHeartbeatInterval",value:function(){var a=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=aD.default.setInterval(function(){a.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(aD.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),a}(),aF=function a(b){var c=this;X(this,a),$(this,"viewErrored",void 0),b.on("viewinit",function(){c.viewErrored=!1}),b.on("error",function(a,d){try{var e=b.errorTranslator({player_error_code:d.player_error_code,player_error_message:d.player_error_message,player_error_context:d.player_error_context,player_error_severity:d.player_error_severity,player_error_business_exception:d.player_error_business_exception});e&&(b.data.player_error_code=e.player_error_code||d.player_error_code,b.data.player_error_message=e.player_error_message||d.player_error_message,b.data.player_error_context=e.player_error_context||d.player_error_context,b.data.player_error_severity=e.player_error_severity||d.player_error_severity,b.data.player_error_business_exception=e.player_error_business_exception||d.player_error_business_exception,c.viewErrored=!0)}catch(a){b.mux.log.warn("Exception in error translator callback.",a),c.viewErrored=!0}}),b.on("aftererror",function(){var a,c,d,e,f;null==(a=b.data)||delete a.player_error_code,null==(c=b.data)||delete c.player_error_message,null==(d=b.data)||delete d.player_error_context,null==(e=b.data)||delete e.player_error_severity,null==(f=b.data)||delete f.player_error_business_exception})},aG=function(){function a(b){X(this,a),$(this,"_watchTimeTrackerLastCheckedTime",void 0),$(this,"pm",void 0),this.pm=b,this._watchTimeTrackerLastCheckedTime=null,b.on("playbackheartbeat",this._updateWatchTime.bind(this)),b.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return Z(a,[{key:"_updateWatchTime",value:function(a,b){var c=b.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=c),aj(this.pm.data,"view_watch_time",c-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=c}},{key:"_clearWatchTimeState",value:function(a,b){this._updateWatchTime(a,b),this._watchTimeTrackerLastCheckedTime=null}}]),a}(),aH=function(){function a(b){var c=this;X(this,a),$(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),$(this,"_lastTime",void 0),$(this,"_isAdPlaying",void 0),$(this,"_callbackUpdatePlaybackTime",void 0),$(this,"pm",void 0),this.pm=b,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=N(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,b.on("viewinit",function(){c.pm.data.view_playing_time_ms_cumulative=0});var d=this._startPlaybackTimeTracking.bind(this);b.on("playing",d),b.on("adplaying",d);var e=function(){c.pm.data.player_is_paused||d()};b.on("seeked",e),b.on("rebufferend",e);var f=this._stopPlaybackTimeTracking.bind(this);b.on("playbackheartbeatend",f),b.on("seeking",f),b.on("rebufferstart",f),b.on("adplaying",function(){c._isAdPlaying=!0}),b.on("adended",function(){c._isAdPlaying=!1}),b.on("adpause",function(){c._isAdPlaying=!1}),b.on("adbreakstart",function(){c._isAdPlaying=!1}),b.on("adbreakend",function(){c._isAdPlaying=!1}),b.on("adplay",function(){c._isAdPlaying=!1}),b.on("viewinit",function(){c._playbackTimeTrackerLastPlayheadPosition=-1,c._lastTime=N(),c._isAdPlaying=!1,c._callbackUpdatePlaybackTime=null})}return Z(a,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=N(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var a=this.pm.data.player_playhead_time||0,b=N(),c=b-this._lastTime,d=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&a>this._playbackTimeTrackerLastPlayheadPosition?d=a-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(d=c),d>0&&d<=1e3&&aj(this.pm.data,"view_content_playback_time",d),null!==this._callbackUpdatePlaybackTime&&c>0&&c<=1e3&&(this._isAdPlaying&&aj(this.pm.data,"ad_playing_time_ms_cumulative",c),aj(this.pm.data,"view_playing_time_ms_cumulative",c)),this._playbackTimeTrackerLastPlayheadPosition=a,this._lastTime=b}}]),a}(),aI=function(){function a(b){X(this,a),$(this,"pm",void 0),this.pm=b;var c=this._updatePlayheadTime.bind(this);b.on("playbackheartbeat",c),b.on("playbackheartbeatend",c),b.on("timeupdate",c),b.on("destroy",function(){b.off("timeupdate",c)})}return Z(a,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(a,b){var c=this,d=function(){c.pm.currentFragmentPDT&&c.pm.currentFragmentStart&&(c.pm.data.player_program_time=c.pm.currentFragmentPDT+c.pm.data.player_playhead_time-c.pm.currentFragmentStart)};if(b&&b.player_playhead_time)this.pm.data.player_playhead_time=b.player_playhead_time,d(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var e=this.pm.getPlayheadTime();void 0!==e&&(this.pm.data.player_playhead_time=e,d(),this._updateMaxPlayheadPosition())}}}]),a}(),aJ=function a(b){if(X(this,a),!b.disableRebufferTracking){var c,d=function(a,b){e(b),c=void 0},e=function(a){if(c){var d=a.viewer_time-c;aj(b.data,"view_rebuffer_duration",d),c=a.viewer_time,b.data.view_rebuffer_duration>3e5&&(b.emit("viewend"),b.send("viewend"),b.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}b.data.view_watch_time>=0&&b.data.view_rebuffer_count>0&&(b.data.view_rebuffer_frequency=b.data.view_rebuffer_count/b.data.view_watch_time,b.data.view_rebuffer_percentage=b.data.view_rebuffer_duration/b.data.view_watch_time)};b.on("playbackheartbeat",function(a,b){return e(b)}),b.on("rebufferstart",function(a,e){c||(aj(b.data,"view_rebuffer_count",1),c=e.viewer_time,b.one("rebufferend",d))}),b.on("viewinit",function(){c=void 0,b.off("rebufferend",d)})}},aK=function(){function a(b){var c=this;X(this,a),$(this,"_lastCheckedTime",void 0),$(this,"_lastPlayheadTime",void 0),$(this,"_lastPlayheadTimeUpdatedTime",void 0),$(this,"_rebuffering",void 0),$(this,"pm",void 0),this.pm=b,b.disableRebufferTracking||b.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,b.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),b.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),b.on("seeking",function(){c._cleanupRebufferTracker(null,{viewer_time:N()})}))}return Z(a,[{key:"_checkIfRebuffering",value:function(a,b){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(a,b);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(b.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(a,b,!0);var c=b.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&c>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=b.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(a){this._lastCheckedTime=a,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=a}},{key:"_cleanupRebufferTracker",value:function(a,b){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:b.viewer_time});else{if(null===this._lastCheckedTime)return;var d=this.pm.data.player_playhead_time-this._lastPlayheadTime,e=b.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&d>0&&e-d>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+e-d}))}c?this._prepareRebufferTrackerState(b.viewer_time):this._clearRebufferTrackerState()}}]),a}(),aL=function(){function a(b){var c=this;X(this,a),$(this,"pm",void 0),this.pm=b,b.on("viewinit",function(){var a=b.data,d=a.view_id;if(!a.view_program_changed){var e=function(a,e){var f=e.viewer_time;"playing"===a.type&&void 0===b.data.view_time_to_first_frame?c.calculateTimeToFirstFrame(f||N(),d):"adplaying"===a.type&&(void 0===b.data.view_time_to_first_frame||c._inPrerollPosition())&&c.calculateTimeToFirstFrame(f||N(),d)};b.one("playing",e),b.one("adplaying",e),b.one("viewend",function(){b.off("playing",e),b.off("adplaying",e)})}})}return Z(a,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(a,b){b===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:a}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),a}(),aM=function a(b){var c=this;X(this,a),$(this,"_lastPlayerHeight",void 0),$(this,"_lastPlayerWidth",void 0),$(this,"_lastPlayheadPosition",void 0),$(this,"_lastSourceHeight",void 0),$(this,"_lastSourceWidth",void 0),b.on("viewinit",function(){c._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(a){b.on(a,function(){if(c._lastPlayheadPosition>=0&&b.data.player_playhead_time>=0&&c._lastPlayerWidth>=0&&c._lastSourceWidth>0&&c._lastPlayerHeight>=0&&c._lastSourceHeight>0){var a=b.data.player_playhead_time-c._lastPlayheadPosition;if(a<0){c._lastPlayheadPosition=-1;return}var d=Math.min(c._lastPlayerWidth/c._lastSourceWidth,c._lastPlayerHeight/c._lastSourceHeight),e=Math.max(0,d-1),f=Math.max(0,1-d);b.data.view_max_upscale_percentage=Math.max(b.data.view_max_upscale_percentage||0,e),b.data.view_max_downscale_percentage=Math.max(b.data.view_max_downscale_percentage||0,f),aj(b.data,"view_total_content_playback_time",a),aj(b.data,"view_total_upscaling",e*a),aj(b.data,"view_total_downscaling",f*a)}c._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(a){b.on(a,function(){c._lastPlayheadPosition=b.data.player_playhead_time,c._lastPlayerWidth=b.data.player_width,c._lastPlayerHeight=b.data.player_height,c._lastSourceWidth=b.data.video_source_width,c._lastSourceHeight=b.data.video_source_height})})},aN=function a(b){var c=this;X(this,a),$(this,"isSeeking",void 0),this.isSeeking=!1;var d=-1,e=function(){var a=N(),e=(b.data.viewer_time||a)-(d||a);aj(b.data,"view_seek_duration",e),b.data.view_max_seek_time=Math.max(b.data.view_max_seek_time||0,e),c.isSeeking=!1,d=-1};b.on("seeking",function(a,f){if(Object.assign(b.data,f),c.isSeeking&&f.viewer_time-d<=2e3){d=f.viewer_time;return}c.isSeeking&&e(),c.isSeeking=!0,d=f.viewer_time,aj(b.data,"view_seek_count",1),b.send("seeking")}),b.on("seeked",function(){e()}),b.on("viewend",function(){c.isSeeking&&(e(),b.send("seeked")),c.isSeeking=!1,d=-1})},aO=function(a,b){a.push(b),a.sort(function(a,b){return a.viewer_time-b.viewer_time})},aP=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],aQ=function(){function a(b){var c=this;X(this,a),$(this,"_adHasPlayed",void 0),$(this,"_adRequests",void 0),$(this,"_adResponses",void 0),$(this,"_currentAdRequestNumber",void 0),$(this,"_currentAdResponseNumber",void 0),$(this,"_prerollPlayTime",void 0),$(this,"_wouldBeNewAdPlay",void 0),$(this,"isAdBreak",void 0),$(this,"pm",void 0),this.pm=b,b.on("viewinit",function(){c.isAdBreak=!1,c._currentAdRequestNumber=0,c._currentAdResponseNumber=0,c._adRequests=[],c._adResponses=[],c._adHasPlayed=!1,c._wouldBeNewAdPlay=!0,c._prerollPlayTime=void 0}),aP.forEach(function(a){return b.on(a,c._updateAdData.bind(c))});var d=function(){c.isAdBreak=!1};b.on("adbreakstart",function(){c.isAdBreak=!0}),b.on("play",d),b.on("playing",d),b.on("viewend",d),b.on("adrequest",function(a,d){d=Object.assign({ad_request_id:"generatedAdRequestId"+c._currentAdRequestNumber++},d),aO(c._adRequests,d),aj(b.data,"view_ad_request_count"),c.inPrerollPosition()&&(b.data.view_preroll_requested=!0,c._adHasPlayed||aj(b.data,"view_preroll_request_count"))}),b.on("adresponse",function(a,d){d=Object.assign({ad_request_id:"generatedAdRequestId"+c._currentAdResponseNumber++},d),aO(c._adResponses,d);var e=c.findAdRequest(d.ad_request_id);e&&aj(b.data,"view_ad_request_time",Math.max(0,d.viewer_time-e.viewer_time))}),b.on("adplay",function(a,d){c._adHasPlayed=!0,c._wouldBeNewAdPlay&&(c._wouldBeNewAdPlay=!1,aj(b.data,"view_ad_played_count")),c.inPrerollPosition()&&!b.data.view_preroll_played&&(b.data.view_preroll_played=!0,c._adRequests.length>0&&(b.data.view_preroll_request_time=Math.max(0,d.viewer_time-c._adRequests[0].viewer_time)),b.data.view_start&&(b.data.view_startup_preroll_request_time=Math.max(0,d.viewer_time-b.data.view_start)),c._prerollPlayTime=d.viewer_time)}),b.on("adplaying",function(a,d){c.inPrerollPosition()&&void 0===b.data.view_preroll_load_time&&void 0!==c._prerollPlayTime&&(b.data.view_preroll_load_time=d.viewer_time-c._prerollPlayTime,b.data.view_startup_preroll_load_time=d.viewer_time-c._prerollPlayTime)}),b.on("adclicked",function(a,d){c._wouldBeNewAdPlay||aj(b.data,"view_ad_clicked_count")}),b.on("adskipped",function(a,d){c._wouldBeNewAdPlay||aj(b.data,"view_ad_skipped_count")}),b.on("adended",function(){c._wouldBeNewAdPlay=!0}),b.on("aderror",function(){c._wouldBeNewAdPlay=!0})}return Z(a,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(a){for(var b=0;b<this._adRequests.length;b++)if(this._adRequests[b].ad_request_id===a)return this._adRequests[b]}},{key:"_updateAdData",value:function(a,b){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&b.ad_tag_url){var c=J(ae(b.ad_tag_url),2),d=c[0],e=c[1];this.pm.data.view_preroll_ad_tag_domain=e,this.pm.data.view_preroll_ad_tag_hostname=d}if(!this.pm.data.view_preroll_ad_asset_hostname&&b.ad_asset_url){var f=J(ae(b.ad_asset_url),2),g=f[0],h=f[1];this.pm.data.view_preroll_ad_asset_domain=h,this.pm.data.view_preroll_ad_asset_hostname=g}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==b?void 0:b.ad_asset_url,this.pm.data.ad_tag_url=null==b?void 0:b.ad_tag_url,this.pm.data.ad_creative_id=null==b?void 0:b.ad_creative_id,this.pm.data.ad_id=null==b?void 0:b.ad_id,this.pm.data.ad_universal_id=null==b?void 0:b.ad_universal_id,null!=b&&b.ad_type&&(this.pm.data.ad_type=null==b?void 0:b.ad_type)}}]),a}(),aR=function a(b){var c=this;X(this,a),$(this,"lastWallClockTime",void 0);var d=function(){c.lastWallClockTime=N(),b.on("before*",e)},e=function(a){var d=N(),e=c.lastWallClockTime;c.lastWallClockTime=d,d-e>3e4&&(b.emit("devicesleep",{viewer_time:e}),Object.assign(b.data,{viewer_time:e}),b.send("devicesleep"),b.emit("devicewake",{viewer_time:d}),Object.assign(b.data,{viewer_time:d}),b.send("devicewake"))};b.one("playbackheartbeat",d),b.on("playbackheartbeatend",function(){b.off("before*",e),b.one("playbackheartbeat",d)})},aS=o(p()),aT=(bt=function(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b},function a(b){function c(a,d,e){var f;if("u">typeof document){if(arguments.length>1){if("number"==typeof(e=bt({path:"/"},c.defaults,e)).expires){var g=new Date;g.setMilliseconds(g.getMilliseconds()+864e5*e.expires),e.expires=g}try{f=JSON.stringify(d),/^[\{\[]/.test(f)&&(d=f)}catch(a){}return d=b.write?b.write(d,a):encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),a=(a=(a=encodeURIComponent(String(a))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=a+"="+d+(e.expires?"; expires="+e.expires.toUTCString():"")+(e.path?"; path="+e.path:"")+(e.domain?"; domain="+e.domain:"")+(e.secure?"; secure":"")}a||(f={});for(var h=document.cookie?document.cookie.split("; "):[],i=/(%[0-9A-Z]{2})+/g,j=0;j<h.length;j++){var k=h[j].split("="),l=k.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var m=k[0].replace(i,decodeURIComponent);if(l=b.read?b.read(l,m):b(l,m)||l.replace(i,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(a){}if(a===m){f=l;break}a||(f[m]=l)}catch(a){}}return f}}return c.set=c,c.get=function(a){return c.call(c,a)},c.getJSON=function(){return c.apply({json:!0},[].slice.call(arguments))},c.defaults={},c.remove=function(a,b){c(a,"",bt(b,{expires:-1}))},c.withConverter=a,c}(function(){})),aU="muxData",aV=function(){var a;try{a=(aT.get(aU)||"").split("&").reduce(function(a,b){var c=J(b.split("="),2),d=c[0],e=c[1],f=+e;return a[d]=e&&f==e?f:e,a},{})}catch(b){a={}}return a},aW=function(a){try{aT.set(aU,Object.entries(a).map(function(a){var b=J(a,2),c=b[0],d=b[1];return"".concat(c,"=").concat(d)}).join("&"),{expires:365})}catch(a){}},aX=function(){var a=aV();return a.mux_viewer_id=a.mux_viewer_id||O(),a.msn=a.msn||Math.random(),aW(a),{mux_viewer_id:a.mux_viewer_id,mux_sample_number:a.msn}},aY=function(){var a=aV(),b=N();return a.session_start&&(a.sst=a.session_start,delete a.session_start),a.session_id&&(a.sid=a.session_id,delete a.session_id),a.session_expires&&(a.sex=a.session_expires,delete a.session_expires),(!a.sex||a.sex<b)&&(a.sid=O(),a.sst=b),a.sex=b+15e5,aW(a),{session_id:a.sid,session_start:a.sst,session_expires:a.sex}},aZ=a_({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),a$=a_({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function a_(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function a0(a){var b={},c={};return Object.keys(a).forEach(function(d){var e=!1;if(a.hasOwnProperty(d)&&void 0!==a[d]){var f=d.split("_"),g=f[0],h=aZ[g];h||(T.info("Data key word `"+f[0]+"` not expected in "+d),h=g+"_"),f.splice(1).forEach(function(a){"url"===a&&(e=!0),a$[a]?h+=a$[a]:Number.isInteger(Number(a))?h+=a:(T.info("Data key word `"+a+"` not expected in "+d),h+="_"+a+"_")}),e?c[h]=a[d]:b[h]=a[d]}}),Object.assign(b,c)}var a1=o(p()),a2=o(G()),a3={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},a4=["hb","requestcompleted","requestfailed","requestcanceled"],a5=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=a||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},a3,b)};a5.prototype.queueEvent=function(a,b){var c=Object.assign({},b);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===a)&&(this._eventQueue.push(c),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},a5.prototype.flushEvents=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},a5.prototype.destroy=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,a?this._clearBeaconQueue():this.flushEvents(),a1.default.clearTimeout(this._sendTimeout)},a5.prototype._clearBeaconQueue=function(){var a=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,b=this._eventQueue.slice(a);a>0&&Object.assign(b[b.length-1],a0({mux_view_message:"event queue truncated"}));var c=this._createPayload(b);a7(this._beaconUrl,c,!0,function(){})},a5.prototype._sendBeaconQueue=function(){var a=this;if(this._postInFlight){this._resendAfterPost=!0;return}var b=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var c=this._createPayload(b),d=N();a7(this._beaconUrl,c,!1,function(c,e){e?(a._eventQueue=b.concat(a._eventQueue),a._failureCount+=1,T.info("Error sending beacon: "+e)):a._failureCount=0,a._roundTripTime=N()-d,a._postInFlight=!1,a._resendAfterPost&&(a._resendAfterPost=!1,a._eventQueue.length>0&&a._sendBeaconQueue())})},a5.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var a=Math.pow(2,this._failureCount-1);return(1+(a*=Math.random()))*this._options.baseTimeBetweenBeacons},a5.prototype._startBeaconSending=function(){var a=this;a1.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=a1.default.setTimeout(function(){a._eventQueue.length&&a._sendBeaconQueue(),a._startBeaconSending()},this._getNextBeaconTime()))},a5.prototype._createPayload=function(a){var b=this,c={transmission_timestamp:Math.round(N())};this._roundTripTime&&(c.rtt_ms=Math.round(this._roundTripTime));var d,e,f,g=function(){f=(d=JSON.stringify({metadata:c,events:e||a})).length/1024},h=function(){return f<=b._options.maxPayloadKBSize};return g(),h()||(T.info("Payload size is too big ("+f+" kb). Removing unnecessary events."),e=a.filter(function(a){return -1===a4.indexOf(a.e)}),g()),h()||(T.info("Payload size still too big ("+f+" kb). Cropping fields.."),e.forEach(function(a){for(var b in a){var c=a[b];"string"==typeof c&&c.length>51200&&(a[b]=c.substring(0,51200))}}),g()),d};var a6="function"==typeof a2.default.exitPictureInPicture?function(a){return a.length<=57344}:function(a){return!1},a7=function(a,b,c,d){if(c&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(a,b))return void d();if(a1.default.fetch)return void a1.default.fetch(a,{method:"POST",body:b,headers:{"Content-Type":"text/plain"},keepalive:a6(b)}).then(function(a){return d(null,a.ok?null:"Error")}).catch(function(a){return d(null,a)});if(a1.default.XMLHttpRequest){var e=new a1.default.XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState)return d(null,200!==e.status?"error":void 0)},e.open("POST",a),e.setRequestHeader("Content-Type","text/plain"),e.send(b);return}d()},a8=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],a9=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],ba=["ad_id","ad_creative_id","ad_universal_id"],bb=["viewstart","error","ended","viewend"],bc=function(){function a(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};X(this,a),$(this,"mux",void 0),$(this,"envKey",void 0),$(this,"options",void 0),$(this,"eventQueue",void 0),$(this,"sampleRate",void 0),$(this,"disableCookies",void 0),$(this,"respectDoNotTrack",void 0),$(this,"previousBeaconData",void 0),$(this,"lastEventTime",void 0),$(this,"rateLimited",void 0),$(this,"pageLevelData",void 0),$(this,"viewerData",void 0),this.mux=b,this.envKey=c,this.options=w,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new a5((d=this.envKey,f=(e=this.options).beaconCollectionDomain,g=e.beaconDomain,f?(/localhost(?::\d+)?$/.test(f)?"http://":"https://")+f:(d=d||"inferred").match(/^[a-z0-9]+$/)?"https://"+d+"."+(g||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(t=this.options.sampleRate)?t:1,this.disableCookies=null!=(u=this.options.disableCookies)&&u,this.respectDoNotTrack=null!=(v=this.options.respectDoNotTrack)&&v,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(h=this.options.platform)?void 0:h.name,viewer_application_version:null==(i=this.options.platform)?void 0:i.version,viewer_application_engine:null==(j=this.options.platform)?void 0:j.layout,viewer_device_name:null==(k=this.options.platform)?void 0:k.product,viewer_device_category:"",viewer_device_manufacturer:null==(l=this.options.platform)?void 0:l.manufacturer,viewer_os_family:null==(n=this.options.platform)||null==(m=n.os)?void 0:m.family,viewer_os_architecture:null==(p=this.options.platform)||null==(o=p.os)?void 0:o.architecture,viewer_os_version:null==(r=this.options.platform)||null==(q=r.os)?void 0:q.version,page_url:null===aS.default||void 0===aS.default||null==(s=aS.default.location)?void 0:s.href},this.viewerData=this.disableCookies?{}:aX()}return Z(a,[{key:"send",value:function(a,b){if(!(!a||!(null!=b&&b.view_id))){if(this.respectDoNotTrack&&V())return T.info("Not sending `"+a+"` because Do Not Track is enabled");if(!b||"object"!=typeof b)return T.error("A data object was expected in send() but was not provided");var c=this.disableCookies?{}:aY(),d=al(ak({},this.pageLevelData,b,c,this.viewerData),{event:a,env_key:this.envKey});d.user_id&&(d.viewer_user_id=d.user_id,delete d.user_id);var e,f=(null!=(e=d.mux_sample_number)?e:0)>=this.sampleRate,g=a0(this._deduplicateBeaconData(a,d));if(this.lastEventTime=this.mux.utils.now(),f)return T.info("Not sending event due to sample rate restriction",a,d,g);if(this.envKey||T.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",a,d,g),!this.rateLimited)if(T.info("Sending event",a,d,g),this.rateLimited=!this.eventQueue.queueEvent(a,g),this.mux.WINDOW_UNLOADING&&"viewend"===a)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===a)this.eventQueue.flushEvents(!0);else if(bb.indexOf(a)>=0){if("error"===a&&"warning"===b.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return d.event="eventrateexceeded",g=a0(d),this.eventQueue.queueEvent(d.event,g),T.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(a,b){var c=this,d={},e=b.view_id;if("-1"===e||"viewstart"===a||"viewend"===a||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)d=ak({},b),e&&(this.previousBeaconData=d),e&&"viewend"===a&&(this.previousBeaconData=null);else{var f=0===a.indexOf("request");Object.entries(b).forEach(function(b){var e=J(b,2),g=e[0],h=e[1];c.previousBeaconData&&(h!==c.previousBeaconData[g]||a8.indexOf(g)>-1||c.objectHasChanged(f,g,h,c.previousBeaconData[g])||c.eventRequiresKey(a,g))&&(d[g]=h,c.previousBeaconData[g]=h)})}return d}},{key:"objectHasChanged",value:function(a,b,c,d){return!!a&&0===b.indexOf("request_")&&("request_response_headers"===b||"object"!=typeof c||"object"!=typeof d||Object.keys(c||{}).length!==Object.keys(d||{}).length)}},{key:"eventRequiresKey",value:function(a,b){return!!("renditionchange"===a&&0===b.indexOf("video_source_")||ba.includes(b)&&a9.includes(a)||"playbackmodechange"===a&&0===b.indexOf("player_playback_mode"))}}]),a}(),bd=function a(b){X(this,a);var c=0,d=0,e=0,f=0,g=0,h=0,i=0;b.on("requestcompleted",function(a,h){var i,j,k=h.request_start,l=h.request_response_start,m=h.request_response_end,n=h.request_bytes_loaded;if(f++,l?(i=l-(null!=k?k:0),j=(null!=m?m:0)-l):j=(null!=m?m:0)-(null!=k?k:0),j>0&&n&&n>0){var o=n/j*8e3;g++,d+=n,e+=j,b.data.view_min_request_throughput=Math.min(b.data.view_min_request_throughput||1/0,o),b.data.view_average_request_throughput=d/e*8e3,b.data.view_request_count=f,i>0&&(c+=i,b.data.view_max_request_latency=Math.max(b.data.view_max_request_latency||0,i),b.data.view_average_request_latency=c/g)}}),b.on("requestfailed",function(a,c){f++,h++,b.data.view_request_count=f,b.data.view_request_failed_count=h}),b.on("requestcanceled",function(a,c){f++,i++,b.data.view_request_count=f,b.data.view_request_canceled_count=i})},be=function a(b){var c=this;X(this,a),$(this,"_lastEventTime",void 0),b.on("before*",function(a,d){var e=d.viewer_time,f=N(),g=c._lastEventTime;if(c._lastEventTime=f,g&&f-g>36e5){var h=Object.keys(b.data).reduce(function(a,c){return 0===c.indexOf("video_")?Object.assign(a,$({},c,b.data[c])):a},{});b.mux.log.info("Received event after at least an hour inactivity, creating a new view");var i=b.playbackHeartbeat._playheadShouldBeProgressing;b._resetView(Object.assign({viewer_time:e},h)),b.playbackHeartbeat._playheadShouldBeProgressing=i,b.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==a.type&&"adbreakstart"!==a.type&&(b.emit("play",{viewer_time:e}),"playing"!==a.type&&b.emit("playing",{viewer_time:e}))}})};function bf(a,b){return(null==a?void 0:a.toLowerCase())===(null==b?void 0:b.toLowerCase())}var bg=function a(b){X(this,a);var c=function(a){var c,d,e,h=null!=(c=a)&&c.request_type&&("media"===c.request_type||"video"===c.request_type)&&null!=(d=c.request_response_headers)&&d["x-cdn"]?c.request_response_headers["x-cdn"]:null!=c&&c.video_cdn?c.video_cdn:null,i=null!=(e=a)&&e.request_start?e.request_start:null!=e&&e.viewer_time?e.viewer_time:Date.now();null!=h&&!bf(h,f)&&g<=i&&(f=h,g=i,b.emit("cdnchange",{video_cdn:h}))},d=null,e=null,f=null,g=0;b.on("viewinit",function(){d=null,e=null,f=null,g=0}),b.on("beforecdnchange",function(a,b){var c=null==b?void 0:b.video_cdn;c&&(void 0===b.video_previous_cdn||null===b.video_previous_cdn)&&(bf(c,e)?b.video_previous_cdn=null!=d?d:void 0:(b.video_previous_cdn=null!=e?e:void 0,d=e,e=c))}),b.on("requestcompleted",function(a,b){c(b)})},bh=function(a){try{return JSON.parse(a),!0}catch(a){return!1}},bi=function a(b){var c=this;X(this,a),$(this,"_emittingAutomaticEvent",!1),$(this,"_hasInitialized",!1),$(this,"_currentMode","standard"),b.on("viewstart",function(){c._hasInitialized||(c._hasInitialized=!0,c._currentMode=b.data.player_playback_mode||"standard",c._emittingAutomaticEvent=!0,b.emit("playbackmodechange",{player_playback_mode:c._currentMode,player_playback_mode_data:"{}"}),c._emittingAutomaticEvent=!1)}),b.on("viewend",function(){c._hasInitialized=!1}),b.on("playbackmodechange",function(a,d){c._emittingAutomaticEvent||(d.player_playback_mode_data?bh(d.player_playback_mode_data)||(b.mux.log.warn("Invalid JSON string for player_playback_mode_data"),d.player_playback_mode_data="{}"):d.player_playback_mode_data="{}",b.data.player_playback_mode_data=d.player_playback_mode_data,b.data.player_playback_mode=d.player_playback_mode,c._currentMode=d.player_playback_mode)})},bj=function(){function a(b){X(this,a),$(this,"pm",void 0),$(this,"_currentRangeStart",void 0),$(this,"_lastPlayheadTime",void 0),this.pm=b,this._currentRangeStart=null,this._lastPlayheadTime=null,b.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),b.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return Z(a,[{key:"_updateLastRangeEnd",value:function(){var a=this.pm.data.video_playback_ranges;if(a&&a.length>0){var b=this.pm.data.player_playhead_time||0;a[a.length-1][1]=b}}},{key:"_updatePlaybackRange",value:function(){var a,b=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(a=this.pm.adTracker)&&a.isAdBreak&&null!==this._lastPlayheadTime&&b<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(b-this._lastPlayheadTime)>1e3){var c=this.pm.data.video_playback_ranges;c&&c.length>0&&(c[c.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var d=this.pm.data.video_playback_ranges||[];d.length>0&&d[d.length-1][1]===b?this._currentRangeStart=d[d.length-1][0]:(this._currentRangeStart=b,d.push([b,b])),this.pm.data.video_playback_ranges=d}else this._updateLastRangeEnd();this._lastPlayheadTime=b}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),a}(),bk=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),bl=function(a){if(!a)return bk.UNKNOWN;switch(a){case"cellular":case"wimax":return bk.CELLULAR;case"wifi":return bk.WIFI;case"ethernet":return bk.WIRED;case"none":return bk.NO_CONNECTION;case"bluetooth":case"other":default:return bk.OTHER;case"unknown":return bk.UNKNOWN}},bm=o(p()),bn=function(){function a(b){var c=this;X(this,a),$(this,"pm",void 0),$(this,"lastType",void 0),$(this,"lastLowDataMode",void 0),this.pm=b,this.pm.one("viewinit",function(){var b,d=c.emit.bind(c);d(),bm.default.addEventListener("online",d),bm.default.addEventListener("offline",d),null==(b=a.connection)||b.addEventListener("change",d),c.pm.on("destroy",function(){var b;null==(b=a.connection)||b.removeEventListener("change",d),bm.default.removeEventListener("online",d),bm.default.removeEventListener("offline",d)})})}return Z(a,[{key:"type",get:function(){var b,c;return(null==(b=bm.default.navigator)?void 0:b.onLine)===!1?bk.NO_CONNECTION:null!=(c=a.connection)&&c.type?bl(a.connection.type):bk.UNKNOWN}},{key:"lowDataMode",get:function(){var b;return null==(b=a.connection)?void 0:b.saveData}},{key:"emit",value:function(){var a=this.type,b=this.lowDataMode;a===this.lastType&&b===this.lastLowDataMode||(this.lastType=a,this.lastLowDataMode=b,this.pm.emit("networkchange",ak({viewer_connection_type:a},void 0!==b&&{viewer_connection_low_data_mode:b})))}}],[{key:"connection",get:function(){var a;return"object"==typeof(a=bm.default.navigator)&&"connection"in a&&"object"==typeof a.connection?bm.default.navigator.connection:null}}]),a}(),bo=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],bp=new Set(["requestcompleted","requestfailed","requestcanceled"]),bq=function(a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");d.prototype=Object.create(a&&a.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),a&&ac(d,a);var b,c=(b=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,c=aa(d);return a=b?Reflect.construct(c,arguments,aa(this).constructor):c.apply(this,arguments),a&&("object"===s(a)||"function"==typeof a)?a:W(this)});function d(a,b,e){X(this,d),$(W(f=c.call(this)),"pageLoadEndTime",void 0),$(W(f),"pageLoadInitTime",void 0),$(W(f),"_destroyed",void 0),$(W(f),"_heartBeatTimeout",void 0),$(W(f),"adTracker",void 0),$(W(f),"dashjs",void 0),$(W(f),"data",void 0),$(W(f),"disablePlayheadRebufferTracking",void 0),$(W(f),"disableRebufferTracking",void 0),$(W(f),"disableAdPlaybackRangeFiltering",void 0),$(W(f),"errorTracker",void 0),$(W(f),"errorTranslator",void 0),$(W(f),"emitTranslator",void 0),$(W(f),"getAdData",void 0),$(W(f),"getPlayheadTime",void 0),$(W(f),"getStateData",void 0),$(W(f),"stateDataTranslator",void 0),$(W(f),"hlsjs",void 0),$(W(f),"id",void 0),$(W(f),"longResumeTracker",void 0),$(W(f),"minimumRebufferDuration",void 0),$(W(f),"mux",void 0),$(W(f),"playbackEventDispatcher",void 0),$(W(f),"playbackHeartbeat",void 0),$(W(f),"playbackHeartbeatTime",void 0),$(W(f),"playheadTime",void 0),$(W(f),"seekingTracker",void 0),$(W(f),"sustainedRebufferThreshold",void 0),$(W(f),"watchTimeTracker",void 0),$(W(f),"currentFragmentPDT",void 0),$(W(f),"currentFragmentStart",void 0),f.pageLoadInitTime=ai(),f.pageLoadEndTime=ah(),f.mux=a,f.id=b,null!=e&&e.beaconDomain&&f.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(e=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(a){return a},emitTranslator:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return b},stateDataTranslator:function(a){return a}},e)).data=e.data||{},e.data.property_key&&(e.data.env_key=e.data.property_key,delete e.data.property_key),T.level=e.debug?1:3,f.getPlayheadTime=e.getPlayheadTime,f.getStateData=e.getStateData||function(){return{}},f.getAdData=e.getAdData||function(){},f.minimumRebufferDuration=e.minimumRebufferDuration,f.sustainedRebufferThreshold=e.sustainedRebufferThreshold,f.playbackHeartbeatTime=e.playbackHeartbeatTime,f.disableRebufferTracking=e.disableRebufferTracking,f.disableRebufferTracking&&f.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),f.disablePlayheadRebufferTracking=e.disablePlayheadRebufferTracking,f.disableAdPlaybackRangeFiltering=e.disableAdPlaybackRangeFiltering,f.errorTranslator=e.errorTranslator,f.emitTranslator=e.emitTranslator,f.stateDataTranslator=e.stateDataTranslator,f.playbackEventDispatcher=new bc(a,e.data.env_key,e),f.data={player_instance_id:O(),mux_sample_rate:e.sampleRate,beacon_domain:e.beaconCollectionDomain||e.beaconDomain},f.data.view_sequence_number=1,f.data.player_sequence_number=1;var f,g=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(W(f));return f.on("viewinit",function(a,b){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,b),this._initializeViewData(),this.one("play",g),this.one("adbreakstart",g)}),f.on("videochange",function(a,b){this._resetView(b)}),f.on("programchange",function(a,b){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(b,{view_program_changed:!0})),g(),this.emit("play"),this.emit("playing")}),f.on("fragmentchange",function(a,b){this.currentFragmentPDT=b.currentFragmentPDT,this.currentFragmentStart=b.currentFragmentStart}),f.on("destroy",f.destroy),f.on("playerready",function(a,b){Object.assign(this.data,b)}),bo.forEach(function(a){f.on(a,function(b,c){0!==a.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,c),this._sanitizeData()}),f.on("after"+a,function(){("error"!==a||this.errorTracker.viewErrored)&&this.send(a)})}),f.on("viewend",function(a,b){Object.assign(f.data,b)}),f.one("playerready",function(a){var b=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=b-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),f.longResumeTracker=new be(W(f)),f.errorTracker=new aF(W(f)),new aR(W(f)),f.seekingTracker=new aN(W(f)),f.playheadTime=new aI(W(f)),f.playbackHeartbeat=new aE(W(f)),new aM(W(f)),f.watchTimeTracker=new aG(W(f)),new aH(W(f)),new bj(W(f)),f.adTracker=new aQ(W(f)),new aK(W(f)),new aJ(W(f)),new aL(W(f)),new bd(W(f)),new bg(W(f)),new bi(W(f)),new bn(W(f)),e.hlsjs&&f.addHLSJS(e),e.dashjs&&f.addDashJS(e),f.emit("viewinit",e.data),f}return Z(d,[{key:"emit",value:function(a,b){var c,e=Object.assign({viewer_time:this.mux.utils.now()},b),f=[a,e];if(this.emitTranslator)try{f=this.emitTranslator(a,e)}catch(a){this.mux.log.warn("Exception in emit translator callback.",a)}null!=f&&f.length&&(c=ab(aa(d.prototype),"emit",this)).call.apply(c,[this].concat(S(f)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var b=Object.assign({},this.data);if(void 0===b.video_source_is_live&&(b.player_source_duration===1/0||b.video_source_duration===1/0?b.video_source_is_live=!0:(b.player_source_duration>0||b.video_source_duration>0)&&(b.video_source_is_live=!1)),b.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(a){b[a]=void 0}),b.video_source_url=b.video_source_url||b.player_source_url,b.video_source_url){var c=J(ae(b.video_source_url),2),d=c[0];b.video_source_domain=c[1],b.video_source_hostname=d}delete b.ad_request_id,b.video_playback_ranges&&(b.video_playback_range=JSON.stringify(b.video_playback_ranges.filter(function(a){return a[0]!==a[1]}).map(function(a){return"".concat(a[0],":").concat(a[1])})),delete b.video_playback_ranges),this.playbackEventDispatcher.send(a,b),this.data.view_sequence_number++,this.data.player_sequence_number++,bp.has(a)||this._restartHeartBeat(),"viewend"===a&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,b=this.getStateData();if("function"==typeof this.stateDataTranslator)try{b=this.stateDataTranslator(b)}catch(a){this.mux.log.warn("Exception in stateDataTranslator translator callback.",a)}null!=(a=this.data)&&a.video_cdn&&null!=b&&b.video_cdn&&(b.video_cdn,b=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(b,["video_cdn"])),Object.assign(this.data,b),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(b){var c=parseInt(a.data[b],10);a.data[b]=isNaN(c)?void 0:c}),["player_source_url","video_source_url"].forEach(function(b){if(a.data[b]){var c=a.data[b].toLowerCase();(0===c.indexOf("data:")||0===c.indexOf("blob:"))&&(a.data[b]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(b){0===b.indexOf("video_")&&delete a.data[b]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(b){0===b.indexOf("view_")&&delete a.data[b]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,b=this.data.view_id=O(),c=function(){b===a.data.view_id&&aj(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",c):c()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){a.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=a.hlsjs,at(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(au(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){a.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=a.dashjs,az(this.mux,this.id,a.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(aA(this.dashjs),this.dashjs=void 0)}}]),d}(aC),br=o(G());function bs(){return br.default&&!!(br.default.fullscreenElement||br.default.webkitFullscreenElement||br.default.mozFullScreenElement||br.default.msFullscreenElement)}var bt,bu,bv=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],bw={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},bx=o(p());bx.default&&bx.default.WeakMap&&(bu=new WeakMap);var by=function(a){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(a),this.manifest};by.prototype.process=function(a){var b;for(this.buffer+=a,b=this.buffer.indexOf("\n");b>-1;b=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,b)),this.buffer=this.buffer.substring(b+1)},by.prototype.processLine=function(a){var b=a.indexOf(":"),c=bF(a,b),d=c[0],e=2===c.length?bB(c[1]):void 0;if("#"!==d[0])this.currentUri.uri=d,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(d){case"#EXT-X-TARGETDURATION":if(!isFinite(e)||e<0)return;this.manifest.targetDuration=e,this.setHoldBack();break;case"#EXT-X-PART-INF":bz(this.manifest,c),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":bz(this.manifest,c),this.setHoldBack();break;case"#EXTINF":0===e?this.currentUri.duration=.01:e>0&&(this.currentUri.duration=e);break;case"#EXT-X-PROGRAM-DATE-TIME":var f=new Date(e);this.manifest.dateTimeString||(this.manifest.dateTimeString=e,this.manifest.dateTimeObject=f),this.currentUri.dateTimeString=e,this.currentUri.dateTimeObject=f;break;case"#EXT-X-VERSION":bz(this.manifest,c);break;case"#EXT-X-SESSION-DATA":var g=aq(bG(c[1]));Object.assign(this.manifest.sessionData,g)}},by.prototype.setHoldBack=function(){var a=this.manifest,b=a.serverControl,c=a.targetDuration,d=a.partTargetDuration;if(b){var e="holdBack",f="partHoldBack",g=c&&3*c,h=d&&2*d;c&&!b.hasOwnProperty(e)&&(b[e]=g),g&&b[e]<g&&(b[e]=g),d&&!b.hasOwnProperty(f)&&(b[f]=3*d),d&&b[f]<h&&(b[f]=h)}};var bz=function(a,b){var c,d=bA(b[0].replace("#EXT-X-",""));bE(b[1])?(c={},c=Object.assign(bD(b[1]),c)):c=bB(b[1]),a[d]=c},bA=function(a){return a.toLowerCase().replace(/-(\w)/g,function(a){return a[1].toUpperCase()})},bB=function(a){if("yes"===a.toLowerCase()||"no"===a.toLowerCase())return"yes"===a.toLowerCase();var b=-1!==a.indexOf(":")?a:parseFloat(a);return isNaN(b)?a:b},bC=function(a){var b={},c=a.split("=");return c.length>1&&(b[bA(c[0])]=bB(c[1])),b},bD=function(a){for(var b=a.split(","),c={},d=0;b.length>d;d++)c=Object.assign(bC(b[d]),c);return c},bE=function(a){return a.indexOf("=")>-1},bF=function(a,b){return -1===b?[a]:[a.substring(0,b),a.substring(b+1)]},bG=function(a){var b={};if(a){var c=a.search(",");return[a.slice(0,c),a.slice(c+1)].forEach(function(a,c){for(var d=a.replace(/['"]+/g,"").split("="),e=0;e<d.length;e++)"DATA-ID"===d[e]&&(b["DATA-ID"]=d[1-e]),"VALUE"===d[e]&&(b.VALUE=d[1-e])}),{data:b}}},bH={safeCall:function(a,b,c,d){var e=d;if(a&&"function"==typeof a[b])try{e=a[b].apply(a,c)}catch(a){T.info("safeCall error",a)}return e},safeIncrement:aj,getComputedStyle:function(a,b){var c;return a&&b&&bx.default&&"function"==typeof bx.default.getComputedStyle?(bu&&bu.has(a)&&(c=bu.get(a)),c||(c=bx.default.getComputedStyle(a,null),bu&&bu.set(a,c)),c.getPropertyValue(b)):""},secondsToMs:function(a){return Math.floor(1e3*a)},assign:Object.assign,headersStringToObject:ao,cdnHeadersToRequestId:ap,extractHostnameAndDomain:ae,extractHostname:ad,manifestParser:by,generateShortID:P,generateUUID:O,now:N,findMediaElement:R},bI={},bJ=function(a){var b=arguments;"string"==typeof a?bJ.hasOwnProperty(a)?K.default.setTimeout(function(){b=Array.prototype.splice.call(b,1),bJ[a].apply(null,b)},0):T.warn("`"+a+"` is an unknown task"):"function"==typeof a?K.default.setTimeout(function(){a(bJ)},0):T.warn("`"+a+"` is invalid.")},bK={loaded:N(),NAME:"mux-embed",VERSION:"5.18.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(a,b){return function(a,b,c){var d=J(R(b),3),e=d[0],f=d[1],g=d[2],h=a.log,i=a.utils.getComputedStyle,j=a.utils.secondsToMs;if(!e)return h.error("No element was found with the `"+f+"` query selector.");if("video"!==g&&"audio"!==g)return h.error("The element of `"+f+"` was not a media element.");e.mux&&(e.mux.destroy(),delete e.mux,h.warn("Already monitoring this video element, replacing existing event listeners")),(c=Object.assign({automaticErrorTracking:!0},c,{getPlayheadTime:function(){return j(e.currentTime)},getStateData:function(){var a,b,c=(null==(a=this.getPlayheadTime)?void 0:a.call(this))||j(e.currentTime),d=this.hlsjs&&this.hlsjs.url,f=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),g={player_is_paused:e.paused,player_width:parseInt(i(e,"width")),player_height:parseInt(i(e,"height")),player_autoplay_on:e.autoplay,player_preload_on:e.preload,player_language_code:e.lang,player_is_fullscreen:bs(),video_poster_url:e.poster,video_source_url:d||f||e.currentSrc,video_source_duration:j(e.duration),video_source_height:e.videoHeight,video_source_width:e.videoWidth,view_dropped_frame_count:null==e||null==(b=e.getVideoPlaybackQuality)?void 0:b.call(e).droppedVideoFrames};if(e.getStartDate&&c>0){var h=e.getStartDate();if(h&&"function"==typeof h.getTime&&h.getTime()){var k=h.getTime();g.player_program_time=k+c,e.seekable.length>0&&(g.player_live_edge_program_time=k+e.seekable.end(e.seekable.length-1))}}return g}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:a.VERSION},c.data),e.mux=e.mux||{},e.mux.deleted=!1,e.mux.emit=function(b,c){a.emit(f,b,c)},e.mux.updateData=function(a){e.mux.emit("hb",a)};var k=function(){h.error("The monitor for this video element has already been destroyed.")};e.mux.destroy=function(){Object.keys(e.mux.listeners).forEach(function(a){e.removeEventListener(a,e.mux.listeners[a],!1)}),delete e.mux.listeners,e.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",e.mux.fullscreenChangeListener,!1),delete e.mux.fullscreenChangeListener),e.mux.destroy=k,e.mux.swapElement=k,e.mux.emit=k,e.mux.addHLSJS=k,e.mux.addDashJS=k,e.mux.removeHLSJS=k,e.mux.removeDashJS=k,e.mux.updateData=k,e.mux.setEmitTranslator=k,e.mux.setStateDataTranslator=k,e.mux.setGetPlayheadTime=k,e.mux.deleted=!0,a.emit(f,"destroy")},e.mux.swapElement=function(b){var c=J(R(b),3),d=c[0],f=c[1],g=c[2];return d?"video"!==g&&"audio"!==g?a.log.error("The element of `"+f+"` was not a media element."):void(d.muxId=e.muxId,delete e.muxId,d.mux=d.mux||{},d.mux.listeners=Object.assign({},e.mux.listeners),delete e.mux.listeners,Object.keys(d.mux.listeners).forEach(function(a){e.removeEventListener(a,d.mux.listeners[a],!1),d.addEventListener(a,d.mux.listeners[a],!1)}),d.mux.fullscreenChangeListener=e.mux.fullscreenChangeListener,delete e.mux.fullscreenChangeListener,d.mux.swapElement=e.mux.swapElement,d.mux.destroy=e.mux.destroy,delete e.mux,e=d):a.log.error("No element was found with the `"+f+"` query selector.")},e.mux.addHLSJS=function(b){a.addHLSJS(f,b)},e.mux.addDashJS=function(b){a.addDashJS(f,b)},e.mux.removeHLSJS=function(){a.removeHLSJS(f)},e.mux.removeDashJS=function(){a.removeDashJS(f)},e.mux.setEmitTranslator=function(b){a.setEmitTranslator(f,b)},e.mux.setStateDataTranslator=function(b){a.setStateDataTranslator(f,b)},e.mux.setGetPlayheadTime=function(b){b||(b=c.getPlayheadTime),a.setGetPlayheadTime(f,b)},a.init(f,c),a.emit(f,"playerready"),e.paused||(a.emit(f,"play"),e.readyState>2&&a.emit(f,"playing")),e.mux.listeners={},bv.forEach(function(b){("error"!==b||c.automaticErrorTracking)&&(e.mux.listeners[b]=function(){var c={};if("error"===b){if(!e.error||1===e.error.code)return;c.player_error_code=e.error.code,c.player_error_message=bw[e.error.code]||e.error.message}a.emit(f,b,c)},e.addEventListener(b,e.mux.listeners[b],!1))}),e.mux.listeners.enterpictureinpicture=function(){a.emit(f,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},e.mux.listeners.leavepictureinpicture=function(){var b=bs()?"fullscreen":"standard";a.emit(f,"playbackmodechange",{player_playback_mode:b,player_playback_mode_data:"{}"})},e.addEventListener("enterpictureinpicture",e.mux.listeners.enterpictureinpicture,!1),e.addEventListener("leavepictureinpicture",e.mux.listeners.leavepictureinpicture,!1),e.mux.fullscreenChangeListener=function(){var b=bs(),c=document.fullscreenElement;if(b&&(c===e||null!=c&&c.contains(e)))a.emit(f,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!b){var d=document.pictureInPictureElement===e;a.emit(f,"playbackmodechange",{player_playback_mode:d?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",e.mux.fullscreenChangeListener,!1)}(bJ,a,b)},destroyMonitor:function(a){var b=J(R(a),1)[0];b&&b.mux&&"function"==typeof b.mux.destroy?b.mux.destroy():T.error("A video element monitor for `"+a+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(a,b){var c=Q(a);bI[c]?bI[c].addHLSJS(b):T.error("A monitor for `"+c+"` has not been initialized.")},addDashJS:function(a,b){var c=Q(a);bI[c]?bI[c].addDashJS(b):T.error("A monitor for `"+c+"` has not been initialized.")},removeHLSJS:function(a){var b=Q(a);bI[b]?bI[b].removeHLSJS():T.error("A monitor for `"+b+"` has not been initialized.")},removeDashJS:function(a){var b=Q(a);bI[b]?bI[b].removeDashJS():T.error("A monitor for `"+b+"` has not been initialized.")},init:function(a,b){V()&&b&&b.respectDoNotTrack&&T.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var c=Q(a);bI[c]=new bq(bJ,c,b)},emit:function(a,b,c){var d=Q(a);bI[d]?(bI[d].emit(b,c),"destroy"===b&&delete bI[d]):T.error("A monitor for `"+d+"` has not been initialized.")},updateData:function(a,b){var c=Q(a);bI[c]?bI[c].emit("hb",b):T.error("A monitor for `"+c+"` has not been initialized.")},setEmitTranslator:function(a,b){var c=Q(a);bI[c]?bI[c].emitTranslator=b:T.error("A monitor for `"+c+"` has not been initialized.")},setStateDataTranslator:function(a,b){var c=Q(a);bI[c]?bI[c].stateDataTranslator=b:T.error("A monitor for `"+c+"` has not been initialized.")},setGetPlayheadTime:function(a,b){var c=Q(a);bI[c]?bI[c].getPlayheadTime=b:T.error("A monitor for `"+c+"` has not been initialized.")},checkDoNotTrack:V,log:T,utils:bH,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(bJ,bK),void 0!==K.default&&"function"==typeof K.default.addEventListener&&K.default.addEventListener("pagehide",function(a){a.persisted||(bJ.WINDOW_UNLOADING=!0)},!1);var bL=a.i(12776),bM=bL.default,bN="video",bO=a=>a===bN?"playback":a,bP=class a extends Error{constructor(b,c=a.MEDIA_ERR_CUSTOM,d,e){var f;super(b),this.name="MediaError",this.code=c,this.context=e,this.fatal=null!=d?d:c>=a.MEDIA_ERR_NETWORK&&c<=a.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(f=a.defaultMessages[this.code])?f:"")}};bP.MEDIA_ERR_ABORTED=1,bP.MEDIA_ERR_NETWORK=2,bP.MEDIA_ERR_DECODE=3,bP.MEDIA_ERR_SRC_NOT_SUPPORTED=4,bP.MEDIA_ERR_ENCRYPTED=5,bP.MEDIA_ERR_CUSTOM=100,bP.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var bQ=(a,b)=>null!=b&&a in b,bR={ANY:"any",MUTED:"muted"},bS="on-demand",bT="live",bU="unknown",bV="native",bW={HEADER:"header",QUERY:"query",NONE:"none"},bX=Object.values(bW),bY={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},bZ={HLS:bY.M3U8};Object.keys(bZ),[...Object.values(bY)];var b$={code:"en"},b_=(a,b,c,d,e=a)=>{e.addEventListener(b,c,d),a.addEventListener("teardown",()=>{e.removeEventListener(b,c)},{once:!0})},b0=a=>{let b=a.indexOf("?");return b<0?[a]:[a.slice(0,b),a.slice(b)]},b1=a=>{let{type:b}=a;if(b){let a=b.toUpperCase();return bQ(a,bZ)?bZ[a]:b}return b4(a)},b2=a=>"VOD"===a?bS:bT,b3=a=>"EVENT"===a?1/0:"VOD"===a?NaN:0,b4=a=>{let{src:b}=a;if(!b)return"";let c="";try{c=new URL(b).pathname}catch{console.error("invalid url")}let d=c.lastIndexOf(".");if(d<0)return b6(a)?bY.M3U8:"";let e=c.slice(d+1).toUpperCase();return bQ(e,bY)?bY[e]:""},b5="mux.com",b6=({src:a,customDomain:b=b5})=>{let c;try{c=new URL(`${a}`)}catch{return!1}let d="https:"===c.protocol,e=c.hostname===`stream.${b}`.toLowerCase(),f=c.pathname.split("/"),g=2===f.length,h=!(null!=f&&f[1].includes("."));return d&&e&&g&&h},b7=a=>{let b=(null!=a?a:"").split(".")[1];if(b)try{let a=b.replace(/-/g,"+").replace(/_/g,"/"),c=decodeURIComponent(atob(a).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(c)}catch{return}};function b8(a,b=!0){var c;return new b9(b&&null!=(c=null==b$?void 0:b$[a])?c:a,b?b$.code:"en")}var b9=class{constructor(a,b=(a=>null!=(a=b$)?a:"en")()){this.message=a,this.locale=b}format(a){return this.message.replace(/\{(\w+)\}/g,(b,c)=>{var d;return null!=(d=a[c])?d:""})}toString(){return this.message}},ca=Object.values(bR),cb=a=>"boolean"==typeof a||"string"==typeof a&&ca.includes(a),cc=(a,b)=>{if(!b)return;let c=a.muted,d=()=>a.muted=c;switch(b){case bR.ANY:a.play().catch(()=>{a.muted=!0,a.play().catch(d)});break;case bR.MUTED:a.muted=!0,a.play().catch(d);break;default:a.play().catch(()=>{})}},cd=a=>"time"in a?a.time:a.startTime;function ce(a,b,c,d,e,f){let g=document.createElement("track");return g.kind=b,g.label=c,d&&(g.srclang=d),e&&(g.id=e),f&&(g.default=!0),g.track.mode=["subtitles","captions"].includes(b)?"disabled":"hidden",g.setAttribute("data-removeondestroy",""),a.append(g),g.track}function cf(a,b,c){var d;return null==(d=Array.from(a.querySelectorAll("track")).find(a=>a.track.label===b&&a.track.kind===c))?void 0:d.track}async function cg(a,b,c,d){let e=cf(a,c,d);return e||((e=ce(a,d,c)).mode="hidden",await new Promise(a=>setTimeout(()=>a(void 0),0))),"hidden"!==e.mode&&(e.mode="hidden"),[...b].sort((a,b)=>cd(b)-cd(a)).forEach(b=>{var c,f;let g=b.value,h=cd(b);if("endTime"in b&&null!=b.endTime)null==e||e.addCue(new VTTCue(h,b.endTime,"chapters"===d?g:JSON.stringify(null!=g?g:null)));else{let b=Array.prototype.findIndex.call(null==e?void 0:e.cues,a=>a.startTime>=h),i=null==(c=null==e?void 0:e.cues)?void 0:c[b],j=i?i.startTime:Number.isFinite(a.duration)?a.duration:Number.MAX_SAFE_INTEGER,k=null==(f=null==e?void 0:e.cues)?void 0:f[b-1];k&&(k.endTime=h),null==e||e.addCue(new VTTCue(h,j,"chapters"===d?g:JSON.stringify(null!=g?g:null)))}}),a.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e}var ch="cuepoints",ci=Object.freeze({label:ch});async function cj(a,b,c=ci){return cg(a,b,c.label,"metadata")}var ck=a=>({time:a.startTime,value:JSON.parse(a.text)});function cl(a,b={label:ch}){var c,d;let e=cf(a,b.label,"metadata");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return ck(e.activeCues[0]);let{currentTime:f}=a;return ck(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function cm(a,b=ci){return new Promise(c=>{b_(a,"loadstart",async()=>{let d=await cj(a,[],b);b_(a,"cuechange",()=>{let b=cl(a);if(b){let c=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var cn="chapters",co=Object.freeze({label:cn}),cp=a=>({startTime:a.startTime,endTime:a.endTime,value:a.text});async function cq(a,b,c=co){return cg(a,b,c.label,"chapters")}function cr(a,b={label:cn}){var c,d;let e=cf(a,b.label,"chapters");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return cp(e.activeCues[0]);let{currentTime:f}=a;return cp(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function cs(a,b=co){return new Promise(c=>{b_(a,"loadstart",async()=>{let d=await cq(a,[],b);b_(a,"cuechange",()=>{let b=cr(a);if(b){let c=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var ct=(a,b,c,d,e=!1,f=!(a=>null==(a=globalThis.navigator)?void 0:a.onLine)())=>{var g,h,i,j;let k,l;if(f){let c=b8("Your device appears to be offline",e),d=bP.MEDIA_ERR_NETWORK,f=new bP(c,d,!1,void 0);return f.errorCategory=b,f.muxCode=2000002,f.data=a,f}let m="status"in a?a.status:a.code,n=Date.now(),o=bP.MEDIA_ERR_NETWORK;if(200===m)return;let p=bO(b),q=(k=bO(b),l=`${k}Token`,null!=(i=c.tokens)&&i[k]?null==(j=c.tokens)?void 0:j[k]:bQ(l,c)?c[l]:void 0),r=b===bN?"v":"drm"===b?"d":void 0,[s]=b0(null!=(g=c.playbackId)?g:"");if(!m||!s)return;let t=b7(q);if(q&&!t){let c=new bP(b8("The {tokenNamePrefix}-token provided is invalid or malformed.",e).format({tokenNamePrefix:p}),o,!0,b8("Compact JWT string: {token}",e).format({token:q}));return c.errorCategory=b,c.muxCode=2412202,c.data=a,c}if(m>=500){let a=new bP("",o,null==d||d);return a.errorCategory=b,a.muxCode=2e6,a}if(403===m)if(t){if((({exp:a},b=Date.now())=>!a||1e3*a<b)(t,n)){let c={timeStyle:"medium",dateStyle:"medium"},d=new bP(b8("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:p}),o,!0,b8("Expired at: {expiredDate}. Current time: {currentDate}.",e).format({expiredDate:new Intl.DateTimeFormat("en",c).format(null!=(h=t.exp)?h:0),currentDate:new Intl.DateTimeFormat("en",c).format(n)}));return d.errorCategory=b,d.muxCode=2403210,d.data=a,d}if((({sub:a},b)=>a!==b)(t,s)){let c=new bP(b8("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:p}),o,!0,b8("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",e).format({tokenNamePrefix:p,playbackId:s,tokenPlaybackId:t.sub}));return c.errorCategory=b,c.muxCode=2403232,c.data=a,c}if((({aud:a},b)=>!a)(t,0)){let c=new bP(b8("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:p}),o,!0,b8("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",e).format({tokenNamePrefix:p,expectedAud:r}));return c.errorCategory=b,c.muxCode=2403221,c.data=a,c}if((({aud:a},b)=>a!==b)(t,r)){let c=new bP(b8("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:p}),o,!0,b8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",e).format({tokenNamePrefix:p,expectedAud:r,aud:t.aud}));return c.errorCategory=b,c.muxCode=2403222,c.data=a,c}}else{let c=new bP(b8("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",e).format({tokenNamePrefix:p,category:b}),o,null==d||d,b8("Specified playback ID: {playbackId}",e).format({playbackId:s}));return c.errorCategory=b,c.muxCode=2403201,c.data=a,c}if(412===m){let f=new bP(b8("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",e),o,null==d||d,b8("Specified playback ID: {playbackId}",e).format({playbackId:s}));return f.errorCategory=b,f.muxCode=2412e3,f.streamType=c.streamType===bT?"live":c.streamType===bS?"on-demand":"unknown",f.data=a,f}if(404===m){let c=new bP(b8("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",e),o,null==d||d,b8("Specified playback ID: {playbackId}",e).format({playbackId:s}));return c.errorCategory=b,c.muxCode=2404e3,c.data=a,c}if(400===m){let c=new bP(b8("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),o,null==d||d,b8("Specified playback ID: {playbackId}",e).format({playbackId:s}));return c.errorCategory=b,c.muxCode=24e5,c.data=a,c}let u=new bP("",o,null==d||d);return u.errorCategory=b,u.muxCode=2e6,u.data=a,u},cu=bM.DefaultConfig.capLevelController,cv={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},cw=class a extends cu{constructor(a){super(a)}static setMaxAutoResolution(b,c){c?a.maxAutoResolution.set(b,c):a.maxAutoResolution.delete(b)}getMaxAutoResolution(){var b;let c=this.hls;return null!=(b=a.maxAutoResolution.get(c))?b:void 0}get levels(){var a;return null!=(a=this.hls.levels)?a:[]}getValidLevels(a){return this.levels.filter((b,c)=>this.isLevelAllowed(b)&&c<=a)}getMaxLevelCapped(a){let b=this.getValidLevels(a),c=this.getMaxAutoResolution();if(!c)return super.getMaxLevel(a);let d=cv[c.toLowerCase().trim()];if(!d)return super.getMaxLevel(a);let e=b.filter(a=>a.width*a.height<=d),f=e.findIndex(a=>a.width*a.height===d);if(-1!==f){let a=e[f];return b.findIndex(b=>b===a)}if(0===e.length)return 0;let g=e[e.length-1];return b.findIndex(a=>a===g)}getMaxLevel(b){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(b);let c=super.getMaxLevel(b),d=this.getValidLevels(b);if(!d[c])return c;let e=Math.min(d[c].width,d[c].height),f=a.minMaxResolution;return e>=f?c:cu.getMaxLevelByMediaSize(d,16/9*f,f)}};cw.minMaxResolution=720,cw.maxAutoResolution=new WeakMap;var cx,cy,cz,cA,cB,cC,cD=a=>new TextDecoder("utf-16le").decode(a).replace("skd://","").slice(1),cE="fairplay",cF=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,cG=async(a,b)=>{if(b===bY.MP4)return{streamType:bS,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(b===bY.M3U8){let b=await fetch(a);if(!b.ok)return Promise.reject(b);let c=await b.text(),d=await fetch(c.split(`
`).find((a,b,c)=>b&&c[b-1].startsWith("#EXT-X-STREAM-INF"))).then(a=>200!==a.status?Promise.reject(a):a.text());return{...(a=>{let b=a.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!b.length)return{};let c={};for(let a of b){let b=Object.fromEntries([...a.matchAll(cF)].map(([,a,b])=>[a,b])),d=b["DATA-ID"];d&&(c[d]={...b})}return{sessionData:c}})(c),...(a=>{var b,c,d;let e=a.split(`
`),f=null==(c=(null!=(b=e.find(a=>a.startsWith("#EXT-X-PLAYLIST-TYPE")))?b:"").split(":")[1])?void 0:c.trim(),g=b2(f),h=b3(f),i;if(g===bT){let a=e.find(a=>a.startsWith("#EXT-X-PART-INF"));if(a)i=2*a.split(":")[1].split("=")[1];else{let a=e.find(a=>a.startsWith("#EXT-X-TARGETDURATION")),b=null==(d=null==a?void 0:a.split(":"))?void 0:d[1];i=(null!=b?b:6)*3}}return{streamType:g,targetLiveWindow:h,liveEdgeStartOffset:i}})(d)}}return console.error(`Media type ${b} is an unrecognized or unsupported type for src ${a}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},cH=async(a,b,c=b1({src:a}))=>{var d,e,f,g;let{streamType:h,targetLiveWindow:i,liveEdgeStartOffset:j,sessionData:k}=await cG(a,c),l=null==k?void 0:k["com.apple.hls.chapters"];(null!=l&&l.URI||null!=l&&l.VALUE.toLocaleLowerCase().startsWith("http"))&&cI(null!=(d=l.URI)?d:l.VALUE,b),(null!=(e=cM.get(b))?e:{}).liveEdgeStartOffset=j,(null!=(f=cM.get(b))?f:{}).targetLiveWindow=i,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(g=cM.get(b))?g:{}).streamType=h,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},cI=async(a,b)=>{var c,d;try{let e=await fetch(a);if(!e.ok)throw Error(`Failed to fetch Mux metadata: ${e.status} ${e.statusText}`);let f=await e.json(),g={};if(!(null!=(c=null==f?void 0:f[0])&&c.metadata))return;for(let a of f[0].metadata)a.key&&a.value&&(g[a.key]=a.value);(null!=(d=cM.get(b))?d:{}).metadata=g;let h=new CustomEvent("muxmetadata");b.dispatchEvent(h)}catch(a){console.error(a)}},cJ=null!=(cy=null==(cx=null==globalThis?void 0:globalThis.navigator)?void 0:cx.userAgent)?cy:"",cK=null!=(cB=null==(cA=null==(cz=null==globalThis?void 0:globalThis.navigator)?void 0:cz.userAgentData)?void 0:cA.platform)?cB:"",cL=cJ.toLowerCase().includes("android")||["x11","android"].some(a=>cK.toLowerCase().includes(a)),cM=new WeakMap,cN="mux.com",cO=null==(cC=bM.isSupported)?void 0:cC.call(bM),cP=()=>{},cQ=bJ.utils.generateUUID,cR=({playbackId:a,customDomain:b=cN,maxResolution:c,minResolution:d,renditionOrder:e,programStartTime:f,programEndTime:g,assetStartTime:h,assetEndTime:i,playbackToken:j,tokens:{playback:k=j}={},extraSourceParams:l={}}={})=>{if(!a)return;let[m,n=""]=b0(a),o=new URL(`https://stream.${b}/${m}.m3u8${n}`);return k||o.searchParams.has("token")?(o.searchParams.forEach((a,b)=>{"token"!=b&&o.searchParams.delete(b)}),k&&o.searchParams.set("token",k)):(c&&o.searchParams.set("max_resolution",c),d&&(o.searchParams.set("min_resolution",d),c&&+c.slice(0,-1)<+d.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",d,"maxResolution",c)),e&&o.searchParams.set("rendition_order",e),f&&o.searchParams.set("program_start_time",`${f}`),g&&o.searchParams.set("program_end_time",`${g}`),h&&o.searchParams.set("asset_start_time",`${h}`),i&&o.searchParams.set("asset_end_time",`${i}`),Object.entries(l).forEach(([a,b])=>{null!=b&&o.searchParams.set(a,b)})),o.toString()},cS=a=>{if(!a)return;let[b]=a.split("?");return b||void 0},cT=a=>{if(!a||!a.startsWith("https://stream."))return;let[b]=new URL(a).pathname.slice(1).split(/\.m3u8|\//);return b||void 0},cU=a=>{var b;return null==(b=cM.get(a))?void 0:b.error},cV=a=>{var b,c;return null!=(c=null==(b=cM.get(a))?void 0:b.streamType)?c:bU},cW=a=>{var b,c;return null!=(c=null==(b=cM.get(a))?void 0:b.seekable)?c:a.seekable},cX=.034,cY=(a,b,c=cX)=>a>b||((a,b,c=cX)=>Math.abs(a-b)<=c)(a,b,c),cZ=(a,b)=>{var c,d,e;if(!b||!a.buffered.length)return;if(a.readyState>2)return!1;let f=b.currentLevel>=0?null==(d=null==(c=b.levels)?void 0:c[b.currentLevel])?void 0:d.details:null==(e=b.levels.find(a=>!!a.details))?void 0:e.details;if(!f||f.live)return;let{fragments:g}=f;if(!(null!=g&&g.length))return;if(a.currentTime<a.duration-(f.targetduration+.5))return!1;let h=g[g.length-1];if(a.currentTime<=h.start)return!1;let i=h.start+h.duration/2,j=a.buffered.start(a.buffered.length-1),k=a.buffered.end(a.buffered.length-1);return i>j&&i<k},c$=(a,b)=>a.ended||a.loop?a.ended:!!(b&&cZ(a,b))||((a,b=cX)=>a.paused&&cY(a.currentTime,a.duration,b))(a),c_=(a,b,c)=>{var d,e,f;c0(b,c,a);let{metadata:g={}}=a,{view_session_id:h=cQ()}=g,i=null!=(d=null==a?void 0:a.metadata)&&d.video_id?a.metadata.video_id:c9(a)&&null!=(f=null!=(e=cS(a.playbackId))?e:cT(a.src))?f:a.src;g.view_session_id=h,g.video_id=i,a.metadata=g,a.drmTypeCb=a=>{var c;null==(c=b.mux)||c.emit("hb",{view_drm_type:a})},a.fallbackToWebkitFairplay=async()=>{var c;let d=!b.paused,e=b.currentTime;a.useWebkitFairplay=!0;let f=a.muxDataKeepSession;a.muxDataKeepSession=!0;let g=null==(c=cM.get(b))?void 0:c.coreReference;c_(a,b,g),a.muxDataKeepSession=f,a.useWebkitFairplay=!1,d&&await b.play().then(()=>{b.currentTime=e}).catch(()=>{}),b.currentTime=e},cM.set(b,{retryCount:0});let j=c2(a,b),k=(({preload:a,src:b},c,d)=>{let e=a=>{null!=a&&["","none","metadata","auto"].includes(a)?c.setAttribute("preload",a):c.removeAttribute("preload")};if(!d)return e(a),e;let f=!1,g=!1,h=d.config.maxBufferLength,i=d.config.maxBufferSize,j=a=>{e(a);let b=null!=a?a:c.preload;g||"none"===b||("metadata"===b?(d.config.maxBufferLength=1,d.config.maxBufferSize=1):(d.config.maxBufferLength=h,d.config.maxBufferSize=i),k())},k=()=>{!f&&b&&(f=!0,d.loadSource(b))};return b_(c,"play",()=>{g=!0,d.config.maxBufferLength=h,d.config.maxBufferSize=i,k()},{once:!0}),j(a),j})(a,b,j);null!=a&&a.muxDataKeepSession&&null!=b&&b.mux&&!b.mux.deleted?j&&b.mux.addHLSJS({hlsjs:j,Hls:j?bM:void 0}):db(a,b,j),dc(a,b,j),cm(b),cs(b);let l=((a,b,c)=>{let{autoplay:d}=a,e=!1,f=!1,g=cb(d)?d:!!d,h=()=>{e||b_(b,"playing",()=>{e=!0},{once:!0})};if(h(),b_(b,"loadstart",()=>{e=!1,h(),cc(b,g)},{once:!0}),b_(b,"loadstart",()=>{c||(f=a.streamType&&a.streamType!==bU?a.streamType===bT:!Number.isFinite(b.duration)),cc(b,g)},{once:!0}),c&&c.once(bM.Events.LEVEL_LOADED,(b,c)=>{var d;f=a.streamType&&a.streamType!==bU?a.streamType===bT:null!=(d=c.details.live)&&d}),!g){let d=()=>{!f||Number.isFinite(a.startTime)||(null!=c&&c.liveSyncPosition?b.currentTime=c.liveSyncPosition:Number.isFinite(b.seekable.end(0))&&(b.currentTime=b.seekable.end(0)))};c&&b_(b,"play",()=>{"metadata"===b.preload?c.once(bM.Events.LEVEL_UPDATED,d):d()},{once:!0})}return a=>{e||cc(b,g=cb(a)?a:!!a)}})(a,b,j),m={engine:j,setAutoplay:l,setPreload:k},n=cM.get(b);return n&&(n.coreReference=m),m},c0=(a,b,c)=>{let d=null==b?void 0:b.engine;null!=a&&a.mux&&!a.mux.deleted&&(null!=c&&c.muxDataKeepSession?d&&a.mux.removeHLSJS():(a.mux.destroy(),delete a.mux)),d&&(d.detachMedia(),d.destroy()),a&&(a.hasAttribute("src")&&(a.removeAttribute("src"),a.load()),a.removeEventListener("error",de),a.removeEventListener("error",dg),a.removeEventListener("durationchange",dd),cM.delete(a),a.dispatchEvent(new Event("teardown")))};function c1(a,b){var c;let d=b1(a);if(d!==bY.M3U8)return!0;let e=!d||null==(c=b.canPlayType(d))||c,{preferPlayback:f}=a,g=cO&&("mse"===f||cL||!(/^((?!chrome|android).)*safari/i.test(cJ)&&b.canPlayType("application/vnd.apple.mpegurl")));return e&&(f===bV||!g)}var c2=(a,b)=>{let{debug:c,streamType:d,startTime:e=-1,metadata:f,preferCmcd:g,_hlsConfig:h={},maxAutoResolution:i}=a,j=b1(a)===bY.M3U8,k=c1(a,b);if(j&&!k&&cO){let j=c3(d),k=c4(a),l=[bW.QUERY,bW.HEADER].includes(g)?{useHeaders:g===bW.HEADER,sessionId:null==f?void 0:f.view_session_id,contentId:null==f?void 0:f.video_id}:void 0,m=da(a,h),n=new bM({debug:c,startPosition:e,cmcd:l,xhrSetup:(a,b)=>{var c,d;if(g&&g!==bW.QUERY)return;let e=new URL(b);if(!e.searchParams.has("CMCD"))return;let f=(null!=(d=null==(c=e.searchParams.get("CMCD"))?void 0:c.split(","))?d:[]).filter(a=>a.startsWith("sid")||a.startsWith("cid")).join(",");e.searchParams.set("CMCD",f),a.open("GET",e)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...m,...j,...k,...h});return m.capLevelController===cw&&void 0!==i&&cw.setMaxAutoResolution(n,i),n.on(bM.Events.MANIFEST_PARSED,async function(a,c){var d,e;let f=null==(d=c.sessionData)?void 0:d["com.apple.hls.chapters"];(null!=f&&f.URI||null!=f&&f.VALUE.toLocaleLowerCase().startsWith("http"))&&cI(null!=(e=null==f?void 0:f.URI)?e:null==f?void 0:f.VALUE,b)}),n}},c3=a=>a===bT?{backBufferLength:8}:{},c4=a=>{let{tokens:{drm:b}={},playbackId:c,drmTypeCb:d}=a,e=cS(c);return b&&e?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:c7(a,"fairplay"),serverCertificateUrl:c8(a,"fairplay")},"com.widevine.alpha":{licenseUrl:c7(a,"widevine")},"com.microsoft.playready":{licenseUrl:c7(a,"playready")}},requestMediaKeySystemAccessFunc:(a,b)=>("com.widevine.alpha"===a&&(b=[...b.map(a=>{var b;let c=null==(b=a.videoCapabilities)?void 0:b.map(a=>({...a,robustness:"HW_SECURE_ALL"}));return{...a,videoCapabilities:c}}),...b]),navigator.requestMediaKeySystemAccess(a,b).then(b=>{let c=a.includes("fps")?cE:a.includes("playready")?"playready":a.includes("widevine")?"widevine":void 0;return null==d||d(c),b}))}:{}},c5=async a=>{let b=await fetch(a);return 200!==b.status?Promise.reject(b):await b.arrayBuffer()},c6=async(a,b)=>{let c=await fetch(b,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:a});return 200!==c.status?Promise.reject(c):new Uint8Array(await c.arrayBuffer())},c7=({playbackId:a,tokens:{drm:b}={},customDomain:c=cN},d)=>{let e=cS(a);return`https://license.${c.toLocaleLowerCase().endsWith(cN)?c:cN}/license/${d}/${e}?token=${b}`},c8=({playbackId:a,tokens:{drm:b}={},customDomain:c=cN},d)=>{let e=cS(a);return`https://license.${c.toLocaleLowerCase().endsWith(cN)?c:cN}/appcert/${d}/${e}?token=${b}`},c9=({playbackId:a,src:b,customDomain:c})=>{if(a)return!0;if("string"!=typeof b)return!1;let d=new URL(b,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return d.includes(cN)||!!c&&d.includes(c.toLocaleLowerCase())},da=(a,b)=>{let c={};return c.capLevelToPlayerSize=a.capRenditionToPlayerSize,null==c.capLevelToPlayerSize?(c.capLevelController=cw,c.capLevelToPlayerSize=!0):c.capLevelController=bL.CapLevelController,c},db=(a,b,c)=>{var d;let{envKey:e,disableTracking:f,muxDataSDK:g=bJ,muxDataSDKOptions:h={}}=a,i=c9(a);if(!f&&(e||i)){let{playerInitTime:f,playerSoftwareName:i,playerSoftwareVersion:j,beaconCollectionDomain:k,debug:l,disableCookies:m}=a,n={...a.metadata,video_title:(null==(d=null==a?void 0:a.metadata)?void 0:d.video_title)||void 0};g.monitor(b,{debug:l,beaconCollectionDomain:k,hlsjs:c,Hls:c?bM:void 0,automaticErrorTracking:!1,errorTranslator:b=>"string"!=typeof b.player_error_code&&("function"==typeof a.errorTranslator?a.errorTranslator(b):b),disableCookies:m,...h,data:{...e?{env_key:e}:{},player_software_name:i,player_software:i,player_software_version:j,player_init_time:f,...n}})}},dc=(a,b,c)=>{var d,e;let f=c1(a,b),{src:g,customDomain:h=cN}=a,i=()=>{b.ended||a.disablePseudoEnded||!c$(b,c)||(cZ(b,c)?b.currentTime=b.buffered.end(b.buffered.length-1):b.dispatchEvent(new Event("ended")))},j,k,l=()=>{let a=cW(b),c,d;a.length>0&&(c=a.start(0),d=a.end(0)),(k!==d||j!==c)&&b.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),j=c,k=d};if(b_(b,"durationchange",l),b&&f){let c=b1(a);if("string"==typeof g){if(g.endsWith(".mp4")&&g.includes(h)){let a=cT(g);cI(new URL(`https://stream.${h}/${a}/metadata.json`).toString(),b)}let f=()=>{if(cV(b)!==bT||Number.isFinite(b.duration))return;let a=setInterval(l,1e3);b.addEventListener("teardown",()=>{clearInterval(a)},{once:!0}),b_(b,"durationchange",()=>{Number.isFinite(b.duration)&&clearInterval(a)})},i=async()=>cH(g,b,c).then(f).catch(c=>{if(c instanceof Response){let d=ct(c,bN,a);if(d)return void df(b,d)}});if("none"===b.preload){let a=()=>{i(),b.removeEventListener("loadedmetadata",c)},c=()=>{i(),b.removeEventListener("play",a)};b_(b,"play",a,{once:!0}),b_(b,"loadedmetadata",c,{once:!0})}else i();null!=(d=a.tokens)&&d.drm?((a,b)=>{let c={mediaEl:b,getAppCertificate:()=>c5(c8(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=ct(b,"drm",a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(b)}),getLicenseKey:b=>c6(b,c7(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=ct(b,"drm",a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(b)}),saveAndDispatchError:df,drmTypeCb:()=>{var b;null==(b=a.drmTypeCb)||b.call(a,cE)}};if(a.useWebkitFairplay)(({mediaEl:a,getAppCertificate:b,getLicenseKey:c,saveAndDispatchError:d,drmTypeCb:e})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in a)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let b=new bP(b8("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),bP.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory="drm",b.muxCode=5000005,d(a,b),()=>{}}let f=b(),g=null,h=b=>{(async()=>{try{var c,e;let d,g,h,k,l,m,n,o;a.webkitKeys||i();let p=await f;if(null===b.initData||null==p)return;let q=(c=b.initData,e=p,d=function(a){let b=new ArrayBuffer(2*a.length),c=new DataView(b);for(let b=0;b<a.length;b++)c.setUint16(2*b,a.charCodeAt(b),!0);return b}(cD(c)),g=new Uint8Array(c),h=new Uint8Array(d),k=new Uint8Array(e),l=new Uint8Array(g.byteLength+4+k.byteLength+4+h.byteLength),m=0,n=a=>{l.set(a,m),m+=a.byteLength},o=a=>{let b=new DataView(l.buffer),c=a.byteLength;b.setUint32(m,c,!0),m+=4,n(a)},n(g),o(h),o(k),l);j(q)}catch(b){console.error("Could not start encrypted playback due to exception",b),d(a,b)}})()},i=()=>{try{let b=new WebKitMediaKeys("com.apple.fps.1_0");a.webkitSetMediaKeys(b),e()}catch{let a=new bP("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",bP.MEDIA_ERR_ENCRYPTED,!0);throw a.errorCategory="drm",a.muxCode=5000001,a}},j=b=>{let e=a.webkitKeys.createSession("application/vnd.apple.mpegurl",b),f=async b=>{try{let a=b.message,d=await c(a);e.update(d)}catch(b){console.error("Error on FairPlay session message",b),d(a,b)}},h=b=>{let c=b.target.error;if(!c)return;console.error(`Internal Webkit Key Session Error - sysCode: ${c.systemCode} code: ${c.code}`);let e=new bP(b8("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),bP.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000005,d(a,e)},i=()=>{e.removeEventListener("webkitkeymessage",f),e.removeEventListener("webkitkeyerror",h),a.removeEventListener("teardown",i),"webkitCurrentPlaybackTargetIsWireless"in a&&a.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",i),g=null;try{e.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in a&&a.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",i,{once:!0}),e.addEventListener("webkitkeymessage",f),e.addEventListener("webkitkeyerror",h),a.addEventListener("teardown",i),g=i},k=()=>{a.removeEventListener("webkitneedkey",h),a.removeEventListener("teardown",k),null==g||g();try{a.webkitSetMediaKeys(null)}catch{}};return a.addEventListener("webkitneedkey",h),a.addEventListener("teardown",k,{once:!0})})(c);else{let b=(({mediaEl:a,getAppCertificate:b,getLicenseKey:c,saveAndDispatchError:d,drmTypeCb:e,fallbackToWebkitFairplay:f})=>{let g=null,h=async b=>{try{let c=b.initDataType;if("skd"!==c)return void console.error(`Received unexpected initialization data type "${c}"`);a.mediaKeys||await i(c);let d=b.initData;if(null==d)return void console.error(`Could not start encrypted playback due to missing initData in ${b.type} event`);await j(c,d)}catch(b){d(a,b);return}},i=async c=>{let f=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[c],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(a=>(e(),a)).catch(()=>{let b=new bP(b8("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),bP.MEDIA_ERR_ENCRYPTED,!0);b.errorCategory="drm",b.muxCode=5000001,d(a,b)});if(!f)return;let g=await f.createMediaKeys();try{let a=await b();await g.setServerCertificate(a).catch(()=>{let a=b8("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),b=new bP(a,bP.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory="drm",b.muxCode=5000004,Promise.reject(b)})}catch(b){d(a,b);return}await a.setMediaKeys(g)},j=async(b,e)=>{let h=a.mediaKeys.createSession(),i=async b=>{let e=b.message,f=await c(e);try{await h.update(f)}catch{let b=new bP(b8("Failed to update DRM license. This may be an issue with the player or your protected content."),bP.MEDIA_ERR_ENCRYPTED,!0);b.errorCategory="drm",b.muxCode=5000003,d(a,b)}},j=()=>{h.keyStatuses.forEach(b=>{let c;"internal-error"===b?((c=new bP(b8("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),bP.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",c.muxCode=5000005):("output-restricted"===b||"output-downscaled"===b)&&((c=new bP(b8("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),bP.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",c.muxCode=5000006),c&&d(a,c)})};h.addEventListener("keystatuseschange",j),h.addEventListener("message",i);let k=async()=>{h.removeEventListener("keystatuseschange",j),h.removeEventListener("message",i),"webkitCurrentPlaybackTargetIsWireless"in a&&a.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",k),a.removeEventListener("teardown",k),await h.close().catch(a=>{console.warn("There was an error when closing EME session",a)}),g=null};"webkitCurrentPlaybackTargetIsWireless"in a&&a.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",k,{once:!0}),a.addEventListener("teardown",k,{once:!0}),g=k,await h.generateRequest(b,e).catch(async b=>{if("NotSupportedError"===b.name&&"webkitCurrentPlaybackTargetIsWireless"in a&&a.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==f||f();else{let a=new bP(b8("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),bP.MEDIA_ERR_ENCRYPTED,!0);return a.errorCategory="drm",a.muxCode=5000002,console.error("Failed to generate license request",b),Promise.reject(a)}})},k=async()=>{a.removeEventListener("encrypted",h),a.removeEventListener("teardown",k),g&&await g(),await a.setMediaKeys(null).catch(()=>{})};return a.addEventListener("encrypted",h),a.addEventListener("teardown",k,{once:!0}),k})({fallbackToWebkitFairplay:async()=>{var c;await b(),null==(c=a.fallbackToWebkitFairplay)||c.call(a)},...c})}})(a,b):b_(b,"encrypted",()=>{let a=new bP(b8("Attempting to play DRM-protected content without providing a DRM token."),bP.MEDIA_ERR_ENCRYPTED,!0);a.errorCategory="drm",a.muxCode=5000002,df(b,a)},{once:!0}),b.setAttribute("src",g),a.startTime&&((null!=(e=cM.get(b))?e:{}).startTime=a.startTime,b.addEventListener("durationchange",dd,{once:!0}))}else b.removeAttribute("src");b.addEventListener("error",de),b.addEventListener("error",dg),b.addEventListener("emptied",()=>{b.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})},{once:!0}),b_(b,"pause",i),b_(b,"seeked",i),b_(b,"play",()=>{b.ended||cY(b.currentTime,b.duration)&&(b.currentTime=b.seekable.length?b.seekable.start(0):0)})}else{let d,e;c&&g?(c.once(bM.Events.LEVEL_LOADED,(a,d)=>{((a,b,c)=>{var d,e,f,g,h,i,j,k,l;let m,n,o,p,q,{streamType:r,targetLiveWindow:s,liveEdgeStartOffset:t,lowLatency:u}=(n=b2(m=a.type),o=b3(m),q=!!(null!=(l=a.partList)&&l.length),n===bT&&(p=q?2*a.partTarget:3*a.targetduration),{streamType:n,targetLiveWindow:o,liveEdgeStartOffset:p,lowLatency:q});if(r===bT){u?(c.config.backBufferLength=null!=(d=c.userConfig.backBufferLength)?d:4,c.config.maxFragLookUpTolerance=null!=(e=c.userConfig.maxFragLookUpTolerance)?e:.001,c.config.abrBandWidthUpFactor=null!=(f=c.userConfig.abrBandWidthUpFactor)?f:c.config.abrBandWidthFactor):c.config.backBufferLength=null!=(g=c.userConfig.backBufferLength)?g:8;let a=Object.freeze({get length(){return b.seekable.length},start:a=>b.seekable.start(a),end(a){var d;return a>this.length||a<0||Number.isFinite(b.duration)?b.seekable.end(a):null!=(d=c.liveSyncPosition)?d:b.seekable.end(a)}});(null!=(h=cM.get(b))?h:{}).seekable=a}(null!=(i=cM.get(b))?i:{}).liveEdgeStartOffset=t,(null!=(j=cM.get(b))?j:{}).targetLiveWindow=s,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(k=cM.get(b))?k:{}).streamType=r,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(d.details,b,c),l(),cV(b)!==bT||Number.isFinite(b.duration)||(c.on(bM.Events.LEVEL_UPDATED,l),b_(b,"durationchange",()=>{Number.isFinite(b.duration)&&c.off(bM.Events.LEVELS_UPDATED,l)}))}),c.on(bM.Events.ERROR,(d,e)=>{var f,g;let h=dw(e,a);if(2412e3===h.muxCode){let a=null!=(f=cM.get(b))?f:{},d=null!=(g=a.retryCount)?g:0;if(d<6){let f=0===d?5e3:6e4,g=new bP(`Retrying in ${f/1e3} seconds...`,h.code,h.fatal);Object.assign(g,h),df(b,g);let i=setTimeout(()=>{a.retryCount=d+1,"manifestLoadError"===e.details&&e.url&&c.loadSource(e.url)},f);b.addEventListener("teardown",()=>clearTimeout(i),{once:!0});return}{a.retryCount=0;let c=new bP('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',h.code,h.fatal);Object.assign(c,h),df(b,c);return}}df(b,h)}),c.on(bM.Events.MANIFEST_LOADED,()=>{let a=cM.get(b);a&&a.error&&(a.error=null,a.retryCount=0,b.dispatchEvent(new Event("emptied")),b.dispatchEvent(new Event("loadstart")))}),b.addEventListener("error",dg),b_(b,"waiting",i),function(a,b){var c;if(!("videoTracks"in a))return;let d=new WeakMap;b.on(bM.Events.MANIFEST_PARSED,function(b,c){h();let e=a.addVideoTrack("main");for(let[a,b]of(e.selected=!0,c.levels.entries())){let c=e.addRendition(b.url[0],b.width,b.height,b.videoCodec,b.bitrate);d.set(b,`${a}`),c.id=`${a}`}}),b.on(bM.Events.AUDIO_TRACKS_UPDATED,function(b,c){for(let b of(g(),c.audioTracks)){let c=b.default?"main":"alternative",d=a.addAudioTrack(c,b.name,b.lang);d.id=`${b.id}`,b.default&&(d.enabled=!0)}});let e=()=>{var c;let d=+(null==(c=[...a.audioTracks].find(a=>a.enabled))?void 0:c.id),e=b.audioTracks.map(a=>a.id);d!=b.audioTrack&&e.includes(d)&&(b.audioTrack=d)};a.audioTracks.addEventListener("change",e),b.on(bM.Events.LEVELS_UPDATED,function(b,c){var e;let f=a.videoTracks[null!=(e=a.videoTracks.selectedIndex)?e:0];if(!f)return;let g=c.levels.map(a=>d.get(a));for(let b of a.videoRenditions)b.id&&!g.includes(b.id)&&f.removeRendition(b)});let f=a=>{let c=a.target.selectedIndex;c!=b.nextLevel&&(b.nextLevel=c)};null==(c=a.videoRenditions)||c.addEventListener("change",f);let g=()=>{for(let b of a.audioTracks)a.removeAudioTrack(b)},h=()=>{(()=>{for(let b of a.videoTracks)a.removeVideoTrack(b)})(),g()};b.once(bM.Events.DESTROYING,()=>{var b,c;h(),null==(b=a.audioTracks)||b.removeEventListener("change",e),null==(c=a.videoRenditions)||c.removeEventListener("change",f)})}(a,c),c.on(bM.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(a,{tracks:d})=>{d.forEach(a=>{var d,e;let f=null!=(d=a.subtitleTrack)?d:a.closedCaptions,g=c.subtitleTracks.findIndex(({lang:b,name:c,type:d})=>b==(null==f?void 0:f.lang)&&c===a.label&&d.toLowerCase()===a.kind),h=(null!=(e=a._id)?e:a.default)?"default":`${a.kind}${g}`;ce(b,a.kind,a.label,null==f?void 0:f.lang,h,a.default)})}),d=()=>{if(!c.subtitleTracks.length)return;let a=Array.from(b.textTracks).find(a=>a.id&&"showing"===a.mode&&["subtitles","captions"].includes(a.kind));if(!a)return;let d=c.subtitleTracks[c.subtitleTrack],e=d?d.default?"default":`${c.subtitleTracks[c.subtitleTrack].type.toLowerCase()}${c.subtitleTrack}`:void 0;if(c.subtitleTrack<0||(null==a?void 0:a.id)!==e){let b=c.subtitleTracks.findIndex(({lang:b,name:c,type:d,default:e})=>"default"===a.id&&e||b==a.language&&c===a.label&&d.toLowerCase()===a.kind);c.subtitleTrack=b}(null==a?void 0:a.id)===e&&a.cues&&Array.from(a.cues).forEach(b=>{a.addCue(b)})},b.textTracks.addEventListener("change",d),c.on(bM.Events.CUES_PARSED,(a,{track:c,cues:d})=>{let e=b.textTracks.getTrackById(c);if(!e)return;let f="disabled"===e.mode;f&&(e.mode="hidden"),d.forEach(a=>{var b;null!=(b=e.cues)&&b.getCueById(a.id)||e.addCue(a)}),f&&(e.mode="disabled")}),c.once(bM.Events.DESTROYING,()=>{b.textTracks.removeEventListener("change",d),b.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})}),e=()=>{Array.from(b.textTracks).forEach(a=>{var c,d;if(!["subtitles","caption"].includes(a.kind)&&("thumbnails"===a.label||"chapters"===a.kind)){if(!(null!=(c=a.cues)&&c.length)){let c="track";a.kind&&(c+=`[kind="${a.kind}"]`),a.label&&(c+=`[label="${a.label}"]`);let e=b.querySelector(c),f=null!=(d=null==e?void 0:e.getAttribute("src"))?d:"";null==e||e.removeAttribute("src"),setTimeout(()=>{null==e||e.setAttribute("src",f)},0)}"hidden"!==a.mode&&(a.mode="hidden")}})},c.once(bM.Events.MANIFEST_LOADED,e),c.once(bM.Events.MEDIA_ATTACHED,e),c.attachMedia(b)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")}};function dd(a){var b;let c=a.target,d=null==(b=cM.get(c))?void 0:b.startTime;if(d&&function(a,b,c){b&&c>b&&(c=b);for(let b=0;b<a.length;b++)if(a.start(b)<=c&&a.end(b)>=c)return!0;return!1}(c.seekable,c.duration,d)){let a="auto"===c.preload;a&&(c.preload="none"),c.currentTime=d,a&&(c.preload="auto")}}async function de(a){if(!a.isTrusted)return;a.stopImmediatePropagation();let b=a.target;if(!(null!=b&&b.error))return;let{message:c,code:d}=b.error,e=new bP(c,d);if(b.src&&d===bP.MEDIA_ERR_SRC_NOT_SUPPORTED&&b.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var a;let c=null!=(a=cU(b))?a:b.error;(null==c?void 0:c.code)===bP.MEDIA_ERR_SRC_NOT_SUPPORTED&&df(b,e)},500);if(b.src&&(d!==bP.MEDIA_ERR_DECODE||void 0!==d))try{let{status:a}=await fetch(b.src);e.data={response:{code:a}}}catch{}df(b,e)}function df(a,b){var c;b.fatal&&((null!=(c=cM.get(a))?c:{}).error=b,a.dispatchEvent(new CustomEvent("error",{detail:b})))}function dg(a){var b,c;if(!(a instanceof CustomEvent)||!(a.detail instanceof bP))return;let d=a.target,e=a.detail;e&&e.fatal&&((null!=(b=cM.get(d))?b:{}).error=e,null==(c=d.mux)||c.emit("error",{player_error_code:e.code,player_error_message:e.message,player_error_context:e.context}))}var dh,di,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv,dw=(a,b)=>{var c,d,e;a.fatal?console.error("getErrorFromHlsErrorData()",a):b.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",a);let f={[bM.ErrorTypes.NETWORK_ERROR]:bP.MEDIA_ERR_NETWORK,[bM.ErrorTypes.MEDIA_ERROR]:bP.MEDIA_ERR_DECODE,[bM.ErrorTypes.KEY_SYSTEM_ERROR]:bP.MEDIA_ERR_ENCRYPTED},g,h=[bM.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,bM.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(a.details)?bP.MEDIA_ERR_NETWORK:f[a.type];if(h===bP.MEDIA_ERR_NETWORK&&a.response){let e=null!=(c=a.type===bM.ErrorTypes.KEY_SYSTEM_ERROR?"drm":a.type===bM.ErrorTypes.NETWORK_ERROR?bN:void 0)?c:bN;g=null!=(d=ct(a.response,e,b,a.fatal))?d:new bP("",h,a.fatal)}else h===bP.MEDIA_ERR_ENCRYPTED?a.details===bM.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((g=new bP(b8("Attempting to play DRM-protected content without providing a DRM token."),bP.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",g.muxCode=5000002):a.details===bM.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((g=new bP(b8("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),bP.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",g.muxCode=5000001):a.details===bM.ErrorDetails.KEY_SYSTEM_NO_SESSION?((g=new bP(b8("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),bP.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",g.muxCode=5000002):a.details===bM.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((g=new bP(b8("Failed to update DRM license. This may be an issue with the player or your protected content."),bP.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",g.muxCode=5000003):a.details===bM.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((g=new bP(b8("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),bP.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",g.muxCode=5000004):a.details===bM.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((g=new bP(b8("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),bP.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",g.muxCode=5000005):a.details===bM.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((g=new bP(b8("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),bP.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",g.muxCode=5000006):((g=new bP(a.error.message,bP.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory="drm",g.muxCode=5e6):g=new bP("",h,a.fatal);return g.context||(g.context=`${a.url?`url: ${a.url}
`:""}${a.response&&(a.response.code||a.response.text)?`response: ${a.response.code}, ${a.response.text}
`:""}${a.reason?`failure reason: ${a.reason}
`:""}${a.level?`level: ${a.level}
`:""}${a.parent?`parent stream controller: ${a.parent}
`:""}${a.buffer?`buffer length: ${a.buffer}
`:""}${a.error?`error: ${a.error}
`:""}${a.event?`event: ${a.event}
`:""}${a.err?`error message: ${null==(e=a.err)?void 0:e.message}
`:""}`),g.data=a,g},dx=a.i(79256),dy=a=>{throw TypeError(a)},dz=(a,b,c)=>b.has(a)||dy("Cannot "+c),dA=(a,b,c)=>(dz(a,b,"read from private field"),c?c.call(a):b.get(a)),dB=(a,b,c)=>b.has(a)?dy("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),dC=(a,b,c,d)=>(dz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),dD=(a,b,c)=>(dz(a,b,"access private method"),c),dE=(()=>{try{return"0.30.5"}catch{}return"UNKNOWN"})(),dF=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,dG={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size"},dH=Object.values(dG),dI="mux-video",dJ=class extends dx.CustomVideoElement{constructor(){super(),dB(this,ds),dB(this,dh),dB(this,di),dB(this,dj,{}),dB(this,dk,{}),dB(this,dl),dB(this,dm),dB(this,dn),dB(this,dp),dB(this,dq,""),dB(this,dr,a=>{var b,c,d;let e=(c=this.nativeEl,null==(d=cM.get(c))?void 0:d.metadata),f=null!=(b=this.metadata)?b:{};this.metadata={...e,...f},(null==e?void 0:e["com.mux.video.branding"])==="mux-free-plan"&&(dC(this,dq,"default"),this.updateLogo())}),dB(this,du),dC(this,di,cP())}static get NAME(){return dI}static get VERSION(){return dE}static get observedAttributes(){var a;return[...dH,...null!=(a=dx.CustomVideoElement.observedAttributes)?a:[]]}static getLogoHTML(a){return a&&"false"!==a?"default"===a?dF:`<img part="logo" src="${a}" />`:""}static getTemplateHTML(a={}){var b;return`
      ${dx.CustomVideoElement.getTemplateHTML(a)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(b=a[dG.LOGO])?b:"")}
      </slot>
    `}get preferCmcd(){var a;return null!=(a=this.getAttribute(dG.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?bX.includes(a)?this.setAttribute(dG.PREFER_CMCD,a):console.warn(`Invalid value for preferCmcd. Must be one of ${bX.join()}`):this.removeAttribute(dG.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(dG.PLAYER_INIT_TIME)?+this.getAttribute(dG.PLAYER_INIT_TIME):dA(this,di)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(dG.PLAYER_INIT_TIME):this.setAttribute(dG.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=dA(this,dn))?a:dI}set playerSoftwareName(a){dC(this,dn,a)}get playerSoftwareVersion(){var a;return null!=(a=dA(this,dm))?a:dE}set playerSoftwareVersion(a){dC(this,dm,a)}get _hls(){var a;return null==(a=dA(this,ds,dt))?void 0:a.engine}get mux(){var a;return null==(a=this.nativeEl)?void 0:a.mux}get error(){var a;return null!=(a=cU(this.nativeEl))?a:null}get errorTranslator(){return dA(this,dp)}set errorTranslator(a){dC(this,dp,a)}get src(){return this.getAttribute("src")}set src(a){a!==this.src&&(null==a?this.removeAttribute("src"):this.setAttribute("src",a))}get type(){var a;return null!=(a=this.getAttribute(dG.TYPE))?a:void 0}set type(a){a!==this.type&&(a?this.setAttribute(dG.TYPE,a):this.removeAttribute(dG.TYPE))}get preload(){let a=this.getAttribute("preload");return""===a?"auto":["none","metadata","auto"].includes(a)?a:super.preload}set preload(a){a!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(a)?this.setAttribute("preload",a):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(dG.DEBUG)}set debug(a){a!==this.debug&&(a?this.setAttribute(dG.DEBUG,""):this.removeAttribute(dG.DEBUG))}get disableTracking(){return this.hasAttribute(dG.DISABLE_TRACKING)}set disableTracking(a){a!==this.disableTracking&&this.toggleAttribute(dG.DISABLE_TRACKING,!!a)}get disableCookies(){return this.hasAttribute(dG.DISABLE_COOKIES)}set disableCookies(a){a!==this.disableCookies&&(a?this.setAttribute(dG.DISABLE_COOKIES,""):this.removeAttribute(dG.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(dG.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(a){a!==this.disablePseudoEnded&&(a?this.setAttribute(dG.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(dG.DISABLE_PSEUDO_ENDED))}get startTime(){let a=this.getAttribute(dG.START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set startTime(a){a!==this.startTime&&(null==a?this.removeAttribute(dG.START_TIME):this.setAttribute(dG.START_TIME,`${a}`))}get playbackId(){var a;return this.hasAttribute(dG.PLAYBACK_ID)?this.getAttribute(dG.PLAYBACK_ID):null!=(a=cT(this.src))?a:void 0}set playbackId(a){a!==this.playbackId&&(a?this.setAttribute(dG.PLAYBACK_ID,a):this.removeAttribute(dG.PLAYBACK_ID))}get maxResolution(){var a;return null!=(a=this.getAttribute(dG.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(dG.MAX_RESOLUTION,a):this.removeAttribute(dG.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(dG.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(dG.MIN_RESOLUTION,a):this.removeAttribute(dG.MIN_RESOLUTION))}get maxAutoResolution(){var a;return null!=(a=this.getAttribute(dG.MAX_AUTO_RESOLUTION))?a:void 0}set maxAutoResolution(a){null==a?this.removeAttribute(dG.MAX_AUTO_RESOLUTION):this.setAttribute(dG.MAX_AUTO_RESOLUTION,a)}get renditionOrder(){var a;return null!=(a=this.getAttribute(dG.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(dG.RENDITION_ORDER,a):this.removeAttribute(dG.RENDITION_ORDER))}get programStartTime(){let a=this.getAttribute(dG.PROGRAM_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programStartTime(a){null==a?this.removeAttribute(dG.PROGRAM_START_TIME):this.setAttribute(dG.PROGRAM_START_TIME,`${a}`)}get programEndTime(){let a=this.getAttribute(dG.PROGRAM_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programEndTime(a){null==a?this.removeAttribute(dG.PROGRAM_END_TIME):this.setAttribute(dG.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){let a=this.getAttribute(dG.ASSET_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetStartTime(a){null==a?this.removeAttribute(dG.ASSET_START_TIME):this.setAttribute(dG.ASSET_START_TIME,`${a}`)}get assetEndTime(){let a=this.getAttribute(dG.ASSET_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetEndTime(a){null==a?this.removeAttribute(dG.ASSET_END_TIME):this.setAttribute(dG.ASSET_END_TIME,`${a}`)}get customDomain(){var a;return null!=(a=this.getAttribute(dG.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(dG.CUSTOM_DOMAIN,a):this.removeAttribute(dG.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var a;return(null==(a=this._hlsConfig)?void 0:a.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:dA(this,du)}set capRenditionToPlayerSize(a){dC(this,du,a)}get drmToken(){var a;return null!=(a=this.getAttribute(dG.DRM_TOKEN))?a:void 0}set drmToken(a){a!==this.drmToken&&(a?this.setAttribute(dG.DRM_TOKEN,a):this.removeAttribute(dG.DRM_TOKEN))}get playbackToken(){var a,b,c,d;if(this.hasAttribute(dG.PLAYBACK_TOKEN))return null!=(a=this.getAttribute(dG.PLAYBACK_TOKEN))?a:void 0;if(this.hasAttribute(dG.PLAYBACK_ID)){let[,a]=b0(null!=(b=this.playbackId)?b:"");return null!=(c=new URLSearchParams(a).get("token"))?c:void 0}if(this.src)return null!=(d=new URLSearchParams(this.src).get("token"))?d:void 0}set playbackToken(a){a!==this.playbackToken&&(a?this.setAttribute(dG.PLAYBACK_TOKEN,a):this.removeAttribute(dG.PLAYBACK_TOKEN))}get tokens(){let a=this.getAttribute(dG.PLAYBACK_TOKEN),b=this.getAttribute(dG.DRM_TOKEN);return{...dA(this,dk),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{}}}set tokens(a){dC(this,dk,null!=a?a:{})}get ended(){return c$(this.nativeEl,this._hls)}get envKey(){var a;return null!=(a=this.getAttribute(dG.ENV_KEY))?a:void 0}set envKey(a){a!==this.envKey&&(a?this.setAttribute(dG.ENV_KEY,a):this.removeAttribute(dG.ENV_KEY))}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(dG.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(dG.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(dG.BEACON_COLLECTION_DOMAIN))}get streamType(){var a;return null!=(a=this.getAttribute(dG.STREAM_TYPE))?a:cV(this.nativeEl)}set streamType(a){a!==this.streamType&&(a?this.setAttribute(dG.STREAM_TYPE,a):this.removeAttribute(dG.STREAM_TYPE))}get targetLiveWindow(){var a,b,c;return this.hasAttribute(dG.TARGET_LIVE_WINDOW)?+this.getAttribute(dG.TARGET_LIVE_WINDOW):(a=this.nativeEl,null!=(c=null==(b=cM.get(a))?void 0:b.targetLiveWindow)?c:NaN)}set targetLiveWindow(a){a!=this.targetLiveWindow&&(null==a?this.removeAttribute(dG.TARGET_LIVE_WINDOW):this.setAttribute(dG.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a,b;if(this.hasAttribute(dG.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:c}=this,d=null!=(a=this.nativeEl.seekable.end(0))?a:0;return Math.max(null!=(b=this.nativeEl.seekable.start(0))?b:0,d-c)}return(a=>{var b;let c=null==(b=cM.get(a))?void 0:b.liveEdgeStartOffset;if("number"!=typeof c)return NaN;let d=cW(a);return d.length?d.end(d.length-1)-c:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(dG.LIVE_EDGE_OFFSET))return+this.getAttribute(dG.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){a!=this.liveEdgeOffset&&(null==a?this.removeAttribute(dG.LIVE_EDGE_OFFSET):this.setAttribute(dG.LIVE_EDGE_OFFSET,`${+a}`))}get seekable(){return cW(this.nativeEl)}async addCuePoints(a){return cj(this.nativeEl,a)}get activeCuePoint(){return cl(this.nativeEl)}get cuePoints(){return function(a,b={label:ch}){let c=cf(a,b.label,"metadata");return null!=c&&c.cues?Array.from(c.cues,a=>ck(a)):[]}(this.nativeEl)}async addChapters(a){return cq(this.nativeEl,a)}get activeChapter(){return cr(this.nativeEl)}get chapters(){return function(a,b={label:cn}){var c;let d=cf(a,b.label,"chapters");return null!=(c=null==d?void 0:d.cues)&&c.length?Array.from(d.cues,a=>cp(a)):[]}(this.nativeEl)}getStartDate(){return function(a,b){if(b){let c=b.playingDate;if(null!=c)return new Date(c.getTime()-1e3*a.currentTime)}return"function"==typeof a.getStartDate?a.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var a,b;return a=this.nativeEl,(b=this._hls)&&b.playingDate?b.playingDate:new Date("function"==typeof a.getStartDate?a.getStartDate().getTime()+1e3*a.currentTime:NaN)}get preferPlayback(){let a=this.getAttribute(dG.PREFER_PLAYBACK);if("mse"===a||a===bV)return a}set preferPlayback(a){a!==this.preferPlayback&&("mse"===a||a===bV?this.setAttribute(dG.PREFER_PLAYBACK,a):this.removeAttribute(dG.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(a=>a.startsWith("metadata-")&&![dG.METADATA_URL].includes(a)).reduce((a,b)=>{let c=this.getAttribute(b);return null!=c&&(a[b.replace(/^metadata-/,"").replace(/-/g,"_")]=c),a},{}),...dA(this,dj)}}set metadata(a){dC(this,dj,null!=a?a:{}),this.mux&&this.mux.emit("hb",dA(this,dj))}get _hlsConfig(){return dA(this,dl)}set _hlsConfig(a){dC(this,dl,a)}get logo(){var a;return null!=(a=this.getAttribute(dG.LOGO))?a:dA(this,dq)}set logo(a){a?this.setAttribute(dG.LOGO,a):this.removeAttribute(dG.LOGO)}load(){c_(this,this.nativeEl,dA(this,ds,dt))}unload(){c0(this.nativeEl,dA(this,ds,dt),this)}attributeChangedCallback(a,b,c){var d,e;switch(dx.CustomVideoElement.observedAttributes.includes(a)&&!["src","autoplay","preload"].includes(a)&&super.attributeChangedCallback(a,b,c),a){case dG.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=c?c:void 0;break;case dG.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=c?c:void 0;break;case"src":{let a=!!b,d=!!c;!a&&d?dD(this,ds,dv).call(this):a&&!d?this.unload():a&&d&&(this.unload(),dD(this,ds,dv).call(this));break}case"autoplay":if(c===b)break;null==(d=dA(this,ds,dt))||d.setAutoplay(this.autoplay);break;case"preload":if(c===b)break;null==(e=dA(this,ds,dt))||e.setPreload(c);break;case dG.PLAYBACK_ID:case dG.CUSTOM_DOMAIN:case dG.MAX_RESOLUTION:case dG.MIN_RESOLUTION:case dG.RENDITION_ORDER:case dG.PROGRAM_START_TIME:case dG.PROGRAM_END_TIME:case dG.ASSET_START_TIME:case dG.ASSET_END_TIME:case dG.PLAYBACK_TOKEN:this.src=cR(this);break;case dG.DEBUG:{let a=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=a);break}case dG.METADATA_URL:c&&fetch(c).then(a=>a.json()).then(a=>this.metadata=a).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${c}!`));break;case dG.STREAM_TYPE:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case dG.TARGET_LIVE_WINDOW:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case dG.LOGO:(null==c||c!==b)&&this.updateLogo();break;case dG.DISABLE_TRACKING:if(null==c||c!==b){let a=this.currentTime,b=this.paused;this.unload(),dD(this,ds,dv).call(this).then(()=>{this.currentTime=a,b||this.play()})}break;case dG.DISABLE_COOKIES:(null==c||c!==b)&&this.disableCookies&&document.cookie.split(";").forEach(a=>{a.trim().startsWith("muxData")&&(document.cookie=a.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case dG.CAP_RENDITION_TO_PLAYER_SIZE:(null==c||c!==b)&&(this.capRenditionToPlayerSize=null!=c||void 0)}}updateLogo(){if(!this.shadowRoot)return;let a=this.shadowRoot.querySelector('slot[name="logo"]');a&&(a.innerHTML=this.constructor.getLogoHTML(dA(this,dq)||this.logo))}connectedCallback(){var a,b;null==(a=super.connectedCallback)||a.call(this),null==(b=this.nativeEl)||b.addEventListener("muxmetadata",dA(this,dr)),this.nativeEl&&this.src&&!dA(this,ds,dt)&&dD(this,ds,dv).call(this)}disconnectedCallback(){var a,b;null==(a=this.nativeEl)||a.removeEventListener("muxmetadata",dA(this,dr)),this.unload(),null==(b=super.disconnectedCallback)||b.call(this)}handleEvent(a){a.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(a.type,{composed:!0,detail:a.detail}))}};dh=new WeakMap,di=new WeakMap,dj=new WeakMap,dk=new WeakMap,dl=new WeakMap,dm=new WeakMap,dn=new WeakMap,dp=new WeakMap,dq=new WeakMap,dr=new WeakMap,ds=new WeakSet,dt=function(){var a,b;return a=this.nativeEl,null==(b=cM.get(a))?void 0:b.coreReference},du=new WeakMap,dv=async function(){dA(this,dh)||(await dC(this,dh,Promise.resolve()),dC(this,dh,null),this.load())};let dK=new WeakMap;class dL extends Error{}class dM extends Error{}let dN=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function dO(){return globalThis.cast?.framework?.CastContext.getInstance()}function dP(){return dO()?.getCurrentSession()}function dQ(){return dP()?.getSessionObj().media[0]}function dR(a){return dO().setOptions({...dS(),...a})}function dS(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function dT(a){try{let b=(await fetch(a,{method:"HEAD"})).headers.get("Content-Type");return dN.some(a=>b===a)}catch(a){return console.error("Error while trying to get the Content-Type of the manifest",a),!1}}async function dU(a){try{let c=await (await fetch(a)).text(),d=c,e=function(a){let b=a.split("\n"),c=[];for(let a=0;a<b.length;a++)if(b[a].trim().startsWith("#EXT-X-STREAM-INF")){let d=b[a+1]?b[a+1].trim():"";d&&!d.startsWith("#")&&c.push(d)}return c}(c);if(e.length>0){let b=new URL(e[0],a).toString();d=await (await fetch(b)).text()}var b=d.split("\n").find(a=>!a.trim().startsWith("#")&&""!==a.trim());if(!b)return;let f=b.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return f?f[1]:null}catch(a){console.error("Error while trying to parse the manifest playlist",a);return}}let dV=new(globalThis.WeakRef?class extends Set{add(a){super.add(new WeakRef(a))}forEach(a){super.forEach(b=>{let c=b.deref();c&&a(c)})}}:Set),dW=new WeakSet;d5=()=>{globalThis.chrome?.cast?.isAvailable?b||(b=cast.framework,dO().addEventListener(b.CastContextEventType.CAST_STATE_CHANGED,a=>{dV.forEach(b=>dK.get(b).onCastStateChanged?.(a))}),dO().addEventListener(b.CastContextEventType.SESSION_STATE_CHANGED,a=>{dV.forEach(b=>dK.get(b).onSessionStateChanged?.(a))}),dV.forEach(a=>dK.get(a).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?d5():customElements.whenDefined("google-cast-button").then(d5):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(d5)};let dX=0;class dY extends EventTarget{#a;#b;#c;#d;#e="disconnected";#f=!1;#g=new Set;#h=new WeakMap;#i=()=>this.#j();constructor(a){super(),this.#a=a,dV.add(this),dK.set(this,{init:()=>this.#k(),onCastStateChanged:()=>this.#l(),onSessionStateChanged:()=>this.#m(),getCastPlayer:()=>this.#n}),this.#k()}destroy(){this.#a?.textTracks?.removeEventListener("change",this.#i),this.#d&&this.#c?.controller&&Object.entries(this.#d).forEach(([a,b])=>{this.#c.controller.removeEventListener(a,b)}),this.#a&&dW.delete(this.#a),this.#b=!1}get #n(){if(dW.has(this.#a))return this.#c}get state(){return this.#e}async watchAvailability(a){if(this.#a.disableRemotePlayback)throw new dL("disableRemotePlayback attribute is present.");return this.#h.set(a,++dX),this.#g.add(a),queueMicrotask(()=>a(this.#o())),dX}async cancelWatchAvailability(a){if(this.#a.disableRemotePlayback)throw new dL("disableRemotePlayback attribute is present.");a?this.#g.delete(a):this.#g.clear()}async prompt(){if(this.#a.disableRemotePlayback)throw new dL("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new dM("The RemotePlayback API is disabled on this platform.");let a=dW.has(this.#a);dW.add(this.#a),dR(this.#a.castOptions),Object.entries(this.#d).forEach(([a,b])=>{this.#c.controller.addEventListener(a,b)});try{await dO().requestSession()}catch(b){if(a||dW.delete(this.#a),"cancel"===b)return;throw Error(b)}dK.get(this.#a)?.loadOnPrompt?.()}#p(){dW.has(this.#a)&&(Object.entries(this.#d).forEach(([a,b])=>{this.#c.controller.removeEventListener(a,b)}),dW.delete(this.#a),this.#a.muted=this.#c.isMuted,this.#a.currentTime=this.#c.savedPlayerState.currentTime,!1===this.#c.savedPlayerState.isPaused&&this.#a.play())}#o(){let a=dO()?.getCastState();return a&&"NO_DEVICES_AVAILABLE"!==a}#l(){let a=dO().getCastState();if(dW.has(this.#a)&&"CONNECTING"===a&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#f&&a?.includes("CONNECT"))for(let a of(this.#f=!0,this.#g))a(!0);else if(this.#f&&(!a||"NO_DEVICES_AVAILABLE"===a))for(let a of(this.#f=!1,this.#g))a(!1)}async #m(){let{SESSION_RESUMED:a}=b.SessionState;if(dO().getSessionState()===a&&this.#a.castSrc===dQ()?.media.contentId){dW.add(this.#a),Object.entries(this.#d).forEach(([a,b])=>{this.#c.controller.addEventListener(a,b)});try{var c;await (c=new chrome.cast.media.GetStatusRequest,new Promise((a,b)=>{dQ().getStatus(c,a,b)}))}catch(a){console.error(a)}this.#d[b.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#d[b.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#k(){b&&!this.#b&&(this.#b=!0,dR(this.#a.castOptions),this.#a.textTracks.addEventListener("change",this.#i),this.#l(),this.#c=new b.RemotePlayer,new b.RemotePlayerController(this.#c),this.#d={[b.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:a})=>{!0===a?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#p(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[b.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#a.dispatchEvent(new Event("durationchange"))},[b.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#a.dispatchEvent(new Event("volumechange"))},[b.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#a.dispatchEvent(new Event("volumechange"))},[b.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#n?.isMediaLoaded&&this.#a.dispatchEvent(new Event("timeupdate"))},[b.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#a.dispatchEvent(new Event("resize"))},[b.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#a.dispatchEvent(new Event(this.paused?"pause":"play"))},[b.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#n?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#a.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#n?.playerState]))},[b.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#n?.isMediaLoaded&&(await Promise.resolve(),this.#q())}})}#q(){this.#j()}async #j(){let a;if(!this.#n)return;let b=(this.#c.mediaInfo?.tracks??[]).filter(({type:a})=>a===chrome.cast.media.TrackType.TEXT),c=[...this.#a.textTracks].filter(({kind:a})=>"subtitles"===a||"captions"===a),d=b.map(({language:a,name:b,trackId:d})=>{let{mode:e}=c.find(c=>c.language===a&&c.label===b)??{};return!!e&&{mode:e,trackId:d}}).filter(Boolean),e=d.filter(({mode:a})=>"showing"!==a).map(({trackId:a})=>a),f=d.find(({mode:a})=>"showing"===a),g=dP()?.getSessionObj().media[0]?.activeTrackIds??[],h=g;if(g.length&&(h=h.filter(a=>!e.includes(a))),f?.trackId&&(h=[...h,f.trackId]),a=h=[...new Set(h)],!(g.length===a.length&&g.every(b=>a.includes(b))))try{let a=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((b,c)=>{dQ().editTracksInfo(a,b,c)})}catch(a){console.error(a)}}}let dZ=a=>class extends a{static observedAttributes=[...a.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#r={paused:!1};#s=dS();#t;#u;get remote(){if(this.#u)return this.#u;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let a="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${a}"]`))return;let b=document.createElement("script");b.src=a,document.head.append(b)}(),dK.set(this,{loadOnPrompt:()=>this.#v()}),this.#u=new dY(this)}return super.remote}get #n(){return dK.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#u?.destroy(),this.#u=null,dK.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),"cast-receiver"===a&&c){this.#s.receiverApplicationId=c;return}if(this.#n)switch(a){case"cast-stream-type":case"cast-src":this.load()}}async #v(){this.#r.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(a){console.error(a)}}async load(){if(!this.#n)return super.load();let a=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);a.customData=this.castCustomData;let b=[...this.querySelectorAll("track")].filter(({kind:a,src:b})=>b&&("subtitles"===a||"captions"===a)),c=[],d=0;if(b.length&&(a.tracks=b.map(a=>{let b=++d;0===c.length&&"showing"===a.track.mode&&c.push(b);let e=new chrome.cast.media.Track(b,chrome.cast.media.TrackType.TEXT);return e.trackContentId=a.src,e.trackContentType="text/vtt",e.subtype="captions"===a.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,e.name=a.label,e.language=a.srclang,e})),"live"===this.castStreamType?a.streamType=chrome.cast.media.StreamType.LIVE:a.streamType=chrome.cast.media.StreamType.BUFFERED,a.metadata=new chrome.cast.media.GenericMediaMetadata,a.metadata.title=this.title,a.metadata.images=[{url:this.poster}],dT(this.castSrc)){let b=await dU(this.castSrc);b?.includes("m4s")||b?.includes("mp4")?(a.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,a.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):b?.includes("ts")&&(a.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,a.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let e=new chrome.cast.media.LoadRequest(a);e.currentTime=super.currentTime??0,e.autoplay=!this.#r.paused,e.activeTrackIds=c,await dP()?.loadMedia(e),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#n){this.#n.isPaused&&this.#n.controller?.playOrPause();return}return super.play()}pause(){if(this.#n){this.#n.isPaused||this.#n.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#s}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(a){this.castReceiver!=a&&this.setAttribute("cast-receiver",`${a}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(a){this.castSrc!=a&&this.setAttribute("cast-src",`${a}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(a){this.setAttribute("cast-content-type",`${a}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(a){this.setAttribute("cast-stream-type",`${a}`)}get castCustomData(){return this.#t}set castCustomData(a){let b=typeof a;["object","undefined"].includes(b)?this.#t=a:console.error(`castCustomData must be nullish or an object but value was of type ${b}`)}get readyState(){if(this.#n)switch(this.#n.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#n?this.#n.isPaused:super.paused}get muted(){return this.#n?this.#n?.isMuted:super.muted}set muted(a){if(this.#n){(a&&!this.#n.isMuted||!a&&this.#n.isMuted)&&this.#n.controller?.muteOrUnmute();return}super.muted=a}get volume(){return this.#n?this.#n?.volumeLevel??1:super.volume}set volume(a){if(this.#n){this.#n.volumeLevel=+a,this.#n.controller?.setVolumeLevel();return}super.volume=a}get duration(){return this.#n&&this.#n?.isMediaLoaded?this.#n?.duration??NaN:super.duration}get currentTime(){return this.#n&&this.#n?.isMediaLoaded?this.#n?.currentTime??0:super.currentTime}set currentTime(a){if(this.#n){this.#n.currentTime=a,this.#n.controller?.seek();return}super.currentTime=a}};a.i(85123);var d$=a.i(40106),d_=a=>{throw TypeError(a)},d0=(a,b,c)=>b.has(a)||d_("Cannot "+c),d1=(a,b,c)=>(d0(a,b,"read from private field"),c?c.call(a):b.get(a)),d2=(a,b,c)=>b.has(a)?d_("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),d3=(a,b,c,d)=>(d0(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),d4=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends d4{});var d5,d6,d7=class extends d4{},d8=class{constructor(a,b={}){d2(this,d6),d3(this,d6,null==b?void 0:b.detail)}get detail(){return d1(this,d6)}initCustomEvent(){}};d6=new WeakMap;var d9={document:{createElement:function(a,b){return new d7}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(d7)},CustomEvent:d8,EventTarget:d4,HTMLElement:d7,HTMLVideoElement:class extends d4{}};d9.document;var ea,eb=class extends dZ((0,d$.MediaTracksMixin)(dJ)){constructor(){super(...arguments),d2(this,ea)}get autoplay(){let a=this.getAttribute("autoplay");return null!==a&&(""===a||a)}set autoplay(a){a!==this.autoplay&&(a?this.setAttribute("autoplay","string"==typeof a?a:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var a;return null!=(a=d1(this,ea))?a:this.muxCastCustomData}set castCustomData(a){d3(this,ea,a)}};ea=new WeakMap,d9.customElements.get("mux-video")||(d9.customElements.define("mux-video",eb),d9.MuxVideoElement=eb);let ec={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},ed={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},ee={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},ef=Object.entries(ee),eg=ef.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),eh=ef.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),ei=Object.entries(eh).reduce((a,[b,c])=>{let d=eg[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"}),ej=Object.entries(eg).reduce((a,[b,c])=>{let d=eh[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),ek={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},el={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},em={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},en={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},eo={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ep={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function eq(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function er(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function es(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function et(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function eu(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function ev(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}a.s(["AttributeToStateChangeEventMap",0,ej,"AvailabilityStates",0,en,"MediaStateChangeEvents",0,eh,"MediaStateReceiverAttributes",0,ed,"MediaUIAttributes",0,eg,"MediaUIEvents",0,ec,"MediaUIProps",0,ee,"PointerTypes",0,em,"ReadyStates",0,{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},"StateChangeEventToAttributeMap",0,ei,"StreamTypes",0,eo,"TextTrackKinds",0,ek,"TextTrackModes",0,el,"VolumeLevels",0,{HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},"WebkitPresentationModes",0,ep],41421),a.i(41421);let ew=a=>new Promise(b=>setTimeout(b,a)),ex={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},ey=(null==(kw=globalThis.navigator)?void 0:kw.language)||"en",ez=(a,b={})=>(a=>{var b,c,d;let[e]=ey.split("-");return(null==(b=ex[ey])?void 0:b[a])||(null==(c=ex[e])?void 0:c[a])||(null==(d=ex.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`),eA=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],eB=a=>{if(!eu(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>{let c;return a&&(c=1===a?ez(eA[b].singular):ez(eA[b].plural),`${a} ${c}`)}).filter(a=>a).join(", ");return c?ez("{time} remaining",{time:e}):e};function eC(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}let eD=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});a.s(["emptyTimeRanges",0,eD,"formatAsTimePhrase",0,eB,"formatTime",0,eC,"serializeTimeRanges",0,function(a=eD){return Array.from(a).map((b,c)=>[Number(a.start(c).toFixed(3)),Number(a.end(c).toFixed(3))].join(":")).join(" ")}],28786),a.i(28786);class eE{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class eF extends eE{}class eG extends eF{constructor(){super(...arguments),this.role=null}}let eH={createElement:function(){return new eI.HTMLElement},createElementNS:function(){return new eI.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},eI={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:eH,Node:eF,Element:eG,HTMLElement:class extends eG{constructor(){super(...arguments),this.innerHTML=""}get content(){return new eI.DocumentFragment}},DocumentFragment:class extends eE{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},eJ="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||!0,eK=Object.keys(eI).every(a=>a in globalThis),eL=eJ&&!eK?eI:globalThis,eM=eJ&&!eK?eH:globalThis.document,eN=new WeakMap,eO=a=>{let b=eN.get(a);return b||eN.set(a,b=new Set),b},eP=new eL.ResizeObserver(a=>{for(let b of a)for(let a of eO(b.target))a(b)});function eQ(a,b){eO(a).add(b),eP.observe(a)}function eR(a,b){let c=eO(a);c.delete(b),c.size||eP.unobserve(a)}function eS(a){let b={};for(let c of a)b[c.name]=c.value;return b}function eT(a){var b;return null!=(b=eU(a))?b:eY(a,"media-controller")}function eU(a){var b;let{MEDIA_CONTROLLER:c}=ed,d=a.getAttribute(c);if(d)return null==(b=e$(a))?void 0:b.getElementById(d)}let eV=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},eW=(a,b)=>{let c,d;return(c=`slot[name="${b}"]`,!(d=a.shadowRoot.querySelector(c))?[]:d.children)[0]},eX=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||eX(a,b.getRootNode().host)),eY=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||eY(a.getRootNode().host,b)};function eZ(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=eZ(c.shadowRoot))?b:c:null}function e$(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function e_(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function e0(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||e1(a,b)}function e1(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];if(!(null==f?void 0:f.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let g=null==f?void 0:f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length);return null==(d=f.sheet.cssRules)?void 0:d[g]}function e2(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function e3(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}e2(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function e4(a,b){return a.hasAttribute(b)}function e5(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}e4(a,b)!=c&&a.toggleAttribute(b,c)}function e6(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function e7(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;e6(a,b,void 0)!==d&&a.setAttribute(b,d)}var e8=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},e9=(a,b,c)=>(e8(a,b,"read from private field"),c?c.call(a):b.get(a)),fa=(a,b,c,d)=>(e8(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fb extends eL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,kx,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[ed.MEDIA_CONTROLLER,eg.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===ed.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=e9(this,kx))?void 0:d.unassociateElement)||e.call(d,this),fa(this,kx,null)),c&&this.isConnected&&(fa(this,kx,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=e9(this,kx))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c,d;let e;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),fa(this,kx,(c=this,(e=c.getAttribute(ed.MEDIA_CONTROLLER))?null==(d=c.getRootNode())?void 0:d.getElementById(e):eY(c,"media-controller"))),this.getAttribute(ed.MEDIA_CONTROLLER)&&(null==(b=null==(a=e9(this,kx))?void 0:a.associateElement)||b.call(a,this)),e9(this,kx)&&(e9(this,kx).addEventListener("pointerdown",this),e9(this,kx).addEventListener("click",this),e9(this,kx).hasAttribute("tabindex")||(e9(this,kx).tabIndex=0))}disconnectedCallback(){var a,b,c,d;this.getAttribute(ed.MEDIA_CONTROLLER)&&(null==(b=null==(a=e9(this,kx))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=e9(this,kx))||c.removeEventListener("pointerdown",this),null==(d=e9(this,kx))||d.removeEventListener("click",this),fa(this,kx,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let j=this._pointerType||"mouse";if(this._pointerType=void 0,j===em.TOUCH)return void this.handleTap(a);if(j===em.MOUSE||j===em.PEN)return void this.handleMouseClick(a)}}}get mediaPaused(){return e4(this,eg.MEDIA_PAUSED)}set mediaPaused(a){e5(this,eg.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?ec.MEDIA_PLAY_REQUEST:ec.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new eL.CustomEvent(b,{composed:!0,bubbles:!0}))}}kx=new WeakMap,fb.shadowRootOptions={mode:"open"},fb.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},eL.customElements.get("media-gesture-receiver")||eL.customElements.define("media-gesture-receiver",fb);var fc=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fd=(a,b,c)=>(fc(a,b,"read from private field"),c?c.call(a):b.get(a)),fe=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ff=(a,b,c,d)=>(fc(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fg=(a,b,c)=>(fc(a,b,"access private method"),c);let fh="audio",fi="autohide",fj="breakpoints",fk="gesturesdisabled",fl="keyboardcontrol",fm="noautohide",fn="userinactive",fo="autohideovercontrols",fp=Object.values(eg);function fq(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(fj))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(eh.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(eh.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class fr extends eL.HTMLElement{constructor(){if(super(),fe(this,kG),fe(this,kI),fe(this,kK),fe(this,kM),fe(this,kO),fe(this,ky,void 0),fe(this,kz,0),fe(this,kA,null),fe(this,kB,null),fe(this,kC,void 0),this.breakpointsComputed=!1,fe(this,kD,a=>{let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}}),fe(this,kE,!1),fe(this,kF,a=>{fd(this,kE)||(setTimeout(()=>{fq(a.target,a.contentRect.width),ff(this,kE,!1)},0),ff(this,kE,!0))}),fe(this,kQ,void 0),fe(this,kR,()=>{if(!fd(this,kQ).assignedElements({flatten:!0}).length){fd(this,kA)&&this.mediaUnsetCallback(fd(this,kA));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}ff(this,ky,new MutationObserver(fd(this,kD)))}static get observedAttributes(){return[fi,fk].concat(fp).filter(a=>![eg.MEDIA_RENDITION_LIST,eg.MEDIA_AUDIO_TRACK_LIST,eg.MEDIA_CHAPTERS_CUES,eg.MEDIA_WIDTH,eg.MEDIA_HEIGHT,eg.MEDIA_ERROR,eg.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==fi&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(ff(this,kA,a),a.localName.includes("-")&&await eL.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;fd(this,ky).observe(this,{childList:!0,subtree:!0}),eQ(this,fd(this,kF));let b=null!=this.getAttribute(fh)?ez("audio player"):ez("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(fn,""),fq(this,this.getBoundingClientRect().width);let c=this.querySelector(":scope > slot[slot=media]");c&&(ff(this,kQ,c),fd(this,kQ).addEventListener("slotchange",fd(this,kR))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=eL.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;eR(this,fd(this,kF)),clearTimeout(fd(this,kB)),fd(this,ky).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(a=eL.window)||a.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),fd(this,kQ)&&(fd(this,kQ).removeEventListener("slotchange",fd(this,kR)),ff(this,kQ,null)),ff(this,kE,!1)}mediaSetCallback(a){}mediaUnsetCallback(a){ff(this,kA,null)}handleEvent(a){switch(a.type){case"pointerdown":ff(this,kz,a.timeStamp);break;case"pointermove":fg(this,kG,kH).call(this,a);break;case"pointerup":fg(this,kI,kJ).call(this,a);break;case"mouseleave":fg(this,kK,kL).call(this);break;case"mouseup":this.removeAttribute(fl);break;case"keyup":fg(this,kO,kP).call(this),this.setAttribute(fl,"")}}set autohide(a){let b=Number(a);ff(this,kC,isNaN(b)?0:b)}get autohide(){return(void 0===fd(this,kC)?2:fd(this,kC)).toString()}get breakpoints(){return e6(this,fj)}set breakpoints(a){e7(this,fj,a)}get audio(){return e4(this,fh)}set audio(a){e5(this,fh,a)}get gesturesDisabled(){return e4(this,fk)}set gesturesDisabled(a){e5(this,fk,a)}get keyboardControl(){return e4(this,fl)}set keyboardControl(a){e5(this,fl,a)}get noAutohide(){return e4(this,fm)}set noAutohide(a){e5(this,fm,a)}get autohideOverControls(){return e4(this,fo)}set autohideOverControls(a){e5(this,fo,a)}get userInteractive(){return e4(this,fn)}set userInteractive(a){e5(this,fn,a)}}ky=new WeakMap,kz=new WeakMap,kA=new WeakMap,kB=new WeakMap,kC=new WeakMap,kD=new WeakMap,kE=new WeakMap,kF=new WeakMap,kG=new WeakSet,kH=function(a){if("mouse"!==a.pointerType&&a.timeStamp-fd(this,kz)<250)return;fg(this,kM,kN).call(this),clearTimeout(fd(this,kB));let b=this.hasAttribute(fo);([this,this.media].includes(a.target)||b)&&fg(this,kO,kP).call(this)},kI=new WeakSet,kJ=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(fn);[this,this.media].includes(a.target)&&b?fg(this,kK,kL).call(this):fg(this,kO,kP).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&fg(this,kO,kP).call(this)},kK=new WeakSet,kL=function(){if(0>fd(this,kC)||this.hasAttribute(fn))return;this.setAttribute(fn,"");let a=new eL.CustomEvent(eh.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},kM=new WeakSet,kN=function(){if(!this.hasAttribute(fn))return;this.removeAttribute(fn);let a=new eL.CustomEvent(eh.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},kO=new WeakSet,kP=function(){fg(this,kM,kN).call(this),clearTimeout(fd(this,kB));let a=parseInt(this.autohide);a<0||ff(this,kB,setTimeout(()=>{fg(this,kK,kL).call(this)},1e3*a))},kQ=new WeakMap,kR=new WeakMap,fr.shadowRootOptions={mode:"open"},fr.getTemplateHTML=function(a){return`
    <style>
      
      :host([${eg.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${fh}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${fh}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${fh}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${fh}])[${fk}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${fh}])[${fk}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${fh}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${fh}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${fh}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${fh}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${fm}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${fn}]:not([${eg.MEDIA_PAUSED}]):not([${eg.MEDIA_IS_AIRPLAYING}]):not([${eg.MEDIA_IS_CASTING}]):not([${fh}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${fm}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${fn}]:not([${fm}]):not([${eg.MEDIA_PAUSED}]):not([${eg.MEDIA_IS_CASTING}]):not([${fh}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${fn}][${fo}]:not([${fm}]):not([${eg.MEDIA_PAUSED}]):not([${eg.MEDIA_IS_CASTING}]):not([${fh}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${fh}])[${eg.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${fb.shadowRootOptions.mode}">
          ${fb.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},eL.customElements.get("media-container")||eL.customElements.define("media-container",fr);var fs=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ft=(a,b,c)=>(fs(a,b,"read from private field"),c?c.call(a):b.get(a)),fu=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fv=(a,b,c,d)=>(fs(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fw{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){fu(this,kW),fu(this,kS,void 0),fu(this,kT,void 0),fu(this,kU,void 0),fu(this,kV,new Set),fv(this,kS,a),fv(this,kT,b),fv(this,kU,new Set(c))}[Symbol.iterator](){return ft(this,kW,kX).values()}get length(){return ft(this,kW,kX).size}get value(){var a;return null!=(a=[...ft(this,kW,kX)].join(" "))?a:""}set value(a){var b;a!==this.value&&(fv(this,kV,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...ft(this,kW,kX)][a]}values(){return ft(this,kW,kX).values()}forEach(a,b){ft(this,kW,kX).forEach(a,b)}add(...a){var b,c;a.forEach(a=>ft(this,kV).add(a)),(""!==this.value||(null==(b=ft(this,kS))?void 0:b.hasAttribute(`${ft(this,kT)}`)))&&(null==(c=ft(this,kS))||c.setAttribute(`${ft(this,kT)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>ft(this,kV).delete(a)),null==(b=ft(this,kS))||b.setAttribute(`${ft(this,kT)}`,`${this.value}`)}contains(a){return ft(this,kW,kX).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}kS=new WeakMap,kT=new WeakMap,kU=new WeakMap,kV=new WeakMap,kW=new WeakSet,kX=function(){return ft(this,kV).size?ft(this,kV):ft(this,kU)};let fx=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?ek.CAPTIONS:ek.SUBTITLES,language:c,label:e}},fy=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=fx(a);return{...b,...c}}),fz=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?fx(a):a):"string"==typeof a?fy(a):[a]:[],fA=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,fB=(a=[])=>Array.prototype.map.call(a,fA).join(" "),fC=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},fD=(a,b=[],c=[])=>{let d=fz(c).map(fC);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},fE=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:fC(b);return Array.from(a.textTracks).filter(c)},fF=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(eg.MEDIA_SUBTITLES_SHOWING)},fG="exitFullscreen"in eM?"exitFullscreen":"webkitExitFullscreen"in eM?"webkitExitFullscreen":"webkitCancelFullScreen"in eM?"webkitCancelFullScreen":void 0,fH="fullscreenElement"in eM?"fullscreenElement":"webkitFullscreenElement"in eM?"webkitFullscreenElement":void 0,fI="fullscreenEnabled"in eM?"fullscreenEnabled":"webkitFullscreenEnabled"in eM?"webkitFullscreenEnabled":void 0,fJ=()=>{var a;return c||(c=null==(a=null==eM?void 0:eM.createElement)?void 0:a.call(eM,"video"))},fK=async(a=fJ())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([fL(a,c.signal),fM(a,b)]);return c.abort(),d},fL=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),fM=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await ew(10)}return a.volume!==b},fN=/.*Version\/.*Safari\/.*/.test(eL.navigator.userAgent),fO=(a=fJ())=>(!eL.matchMedia("(display-mode: standalone)").matches||!fN)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),fP=(a=fJ())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[fI])||c&&"webkitSupportsFullscreen"in c})({documentElement:eM,media:a}),fQ=fP(),fR=fO(),fS=!!eL.WebKitPlaybackTargetAvailabilityEvent,fT=!!eL.chrome,fU=a=>fE(a.media,a=>[ek.SUBTITLES,ek.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),fV=a=>fE(a.media,a=>a.mode===el.SHOWING&&[ek.SUBTITLES,ek.CAPTIONS].includes(a.kind)),fW=(a,b)=>{let c=fU(a),d=fV(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)fD(el.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=eL.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...eL.navigator.languages]:eL.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;fD(el.DISABLED,c,d),fD(el.SHOWING,c,[{language:f,label:g,kind:h}])}}},fX=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?fY(a,b):Object.entries(a).every(([a,c])=>a in b&&fX(c,b[a])))),fY=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>fX(a,b[c])))},fZ=Object.values(eo),f$=fK().then(a=>d=a),f_=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof eL.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=eL.customElements.get(b);c&&a instanceof c||(await eL.customElements.whenDefined(b),eL.customElements.upgrade(a))}))},f0=new eL.DOMParser,f1={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;!c||Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c,options:{noMutedPref:d}={}}=b;if(c){c.muted=a;try{let b=null!==eL.localStorage.getItem("media-chrome-pref-muted"),e=c.hasAttribute("muted");if(d){b&&eL.localStorage.removeItem("media-chrome-pref-muted");return}if(e&&!b)return;eL.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===eL.localStorage.getItem("media-chrome-pref-muted");f1.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaLoop:{get(a){let{media:b}=a;return null==b?void 0:b.loop},set(a,b){let{media:c}=b;c&&(c.loop=a)},mediaEvents:["medialooprequest"]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c,options:{noVolumePref:d}={}}=b;if(c){try{null==a?eL.localStorage.removeItem("media-chrome-pref-volume"):c.hasAttribute("muted")||d||eL.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=eL.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;f1.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&eu(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[eo.LIVE,eo.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(fZ.includes(e))return e===eo.UNKNOWN?d:e;let f=b.duration;return f===1/0?eo.LIVE:Number.isFinite(f)?eo.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=f1.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===eo.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(f1.mediaStreamType.get(a)!==eo.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>fU(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>fV(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![ek.CAPTIONS,ek.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||fW(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=fE(c,{kind:ek.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&f0.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&eX(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!eM.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else eM.pictureInPictureElement&&eM.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[fH];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===ep.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(fH in a))return eX(f,e);for(;null==a?void 0:a[fH];){if(a[fH]===e)return!0;a=null==(b=a[fH])?void 0:b.shadowRoot}}return!1})(a),set(a,b,c){var d,e;a?((a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b),!c.detail||(null==(d=b.media)?void 0:d.inert)||null==(e=b.media)||e.focus()):(a=>{var b;let{documentElement:c}=a;if(fG){let a=null==(b=null==c?void 0:c[fG])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&eL.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!fQ||!fP(b))return en.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;return fR&&fO(b)?(null==b?void 0:b.disablePictureInPicture)?en.UNAVAILABLE:void 0:en.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===d||(null==b?void 0:b.volume)==void 0)return en.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==d&&f$.then(b=>a(b?void 0:en.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return fT&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?en.UNAVAILABLE:void 0:en.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>fS?(null==b?void 0:b.availability)==="not-available"?en.UNAVAILABLE:void 0:en.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:en.UNAVAILABLE:en.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?en.UNAVAILABLE:void 0:en.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(a){let{options:{mediaLang:b}={}}=a;return null!=b?b:"en"}}},f2={[ec.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=fE(i,{kind:ek.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[ec.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[ec.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===eo.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[ec.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[ec.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[ec.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[ec.MEDIA_LOOP_REQUEST](a,b,{detail:c}){let d=!!c;return a.mediaLoop.set(d,b),{mediaLoop:d}},[ec.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[ec.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[ec.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[ec.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=fU(b),g=fz(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&eL.localStorage.setItem("media-chrome-pref-subtitles-lang",h),fD(el.SHOWING,f,g)},[ec.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=fU(b);fD(el.DISABLED,d,null!=c?c:[])},[ec.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){fW(b,c)},[ec.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[ec.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[ec.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[ec.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[ec.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b,c){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b,c)},[ec.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[ec.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[ec.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[ec.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var f3=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},f4=(a,b,c)=>(f3(a,b,"read from private field"),c?c.call(a):b.get(a)),f5=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},f6=(a,b,c,d)=>(f3(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),f7=(a,b,c)=>(f3(a,b,"access private method"),c);let f8=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],f9="defaultsubtitles",ga="defaultstreamtype",gb="defaultduration",gc="fullscreenelement",gd="hotkeys",ge="keyboardbackwardseekoffset",gf="keyboardforwardseekoffset",gg="keyboarddownvolumestep",gh="keyboardupvolumestep",gi="keysused",gj="lang",gk="loop",gl="liveedgeoffset",gm="noautoseektolive",gn="nodefaultstore",go="nohotkeys",gp="nomutedpref",gq="nosubtitleslangpref",gr="novolumepref",gs="seektoliveoffset";class gt extends fr{constructor(){super(),f5(this,k4),f5(this,k7),f5(this,k9),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,f5(this,kY,new fw(this,gd)),f5(this,kZ,void 0),f5(this,k$,void 0),f5(this,k_,null),f5(this,k0,void 0),f5(this,k1,void 0),f5(this,k2,a=>{var b;null==(b=f4(this,k$))||b.dispatch(a)}),f5(this,k3,void 0),f5(this,k6,a=>{let{key:b,shiftKey:c}=a;c&&("/"===b||"?"===b)||f8.includes(b)?this.keyboardShortcutHandler(a):this.removeEventListener("keyup",f4(this,k6))}),this.associateElement(this);let a={};f6(this,k0,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new eL.CustomEvent(ej[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b})}static get observedAttributes(){return super.observedAttributes.concat(go,gd,ga,f9,gb,gp,gr,gj,gk,gl,gs,gm)}get mediaStore(){return f4(this,k$)}set mediaStore(a){var b,c;(f4(this,k$)&&(null==(b=f4(this,k1))||b.call(this),f6(this,k1,void 0)),f6(this,k$,a),f4(this,k$)||this.hasAttribute(gn))?f6(this,k1,null==(c=f4(this,k$))?void 0:c.subscribe(f4(this,k0))):f7(this,k4,k5).call(this)}get fullscreenElement(){var a;return null!=(a=f4(this,kZ))?a:this}set fullscreenElement(a){var b;this.hasAttribute(gc)&&this.removeAttribute(gc),f6(this,kZ,a),null==(b=f4(this,k$))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return e4(this,f9)}set defaultSubtitles(a){e5(this,f9,a)}get defaultStreamType(){return e6(this,ga)}set defaultStreamType(a){e7(this,ga,a)}get defaultDuration(){return e2(this,gb)}set defaultDuration(a){e3(this,gb,a)}get noHotkeys(){return e4(this,go)}set noHotkeys(a){e5(this,go,a)}get keysUsed(){return e6(this,gi)}set keysUsed(a){e7(this,gi,a)}get liveEdgeOffset(){return e2(this,gl)}set liveEdgeOffset(a){e3(this,gl,a)}get noAutoSeekToLive(){return e4(this,gm)}set noAutoSeekToLive(a){e5(this,gm,a)}get noVolumePref(){return e4(this,gr)}set noVolumePref(a){e5(this,gr,a)}get noMutedPref(){return e4(this,gp)}set noMutedPref(a){e5(this,gp,a)}get noSubtitlesLangPref(){return e4(this,gq)}set noSubtitlesLangPref(a){e5(this,gq,a)}get noDefaultStore(){return e4(this,gn)}set noDefaultStore(a){e5(this,gn,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;if(super.attributeChangedCallback(a,b,c),a===go)c!==b&&""===c?(this.hasAttribute(gd)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys();else if(a===gd)f4(this,kY).value=c;else if(a===f9&&c!==b)null==(d=f4(this,k$))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(f9)}});else if(a===ga)null==(f=f4(this,k$))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(ga))?e:void 0}});else if(a===gl&&c!==b)null==(g=f4(this,k$))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(gl)?+this.getAttribute(gl):void 0,seekToLiveOffset:this.hasAttribute(gs)?+this.getAttribute(gs):this.hasAttribute(gl)?+this.getAttribute(gl):void 0}});else if(a===gs&&c!==b)null==(h=f4(this,k$))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(gs)?+this.getAttribute(gs):this.hasAttribute(gl)?+this.getAttribute(gl):void 0}});else if(a===gm)null==(i=f4(this,k$))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(gm)}});else if(a===gc){let a=c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0;f6(this,kZ,a),null==(k=f4(this,k$))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else a===gj&&c!==b?(ey=c,null==(l=f4(this,k$))||l.dispatch({type:"optionschangerequest",detail:{mediaLang:c}})):a===gk&&c!==b?null==(m=f4(this,k$))||m.dispatch({type:ec.MEDIA_LOOP_REQUEST,detail:null!=c}):a===gr&&c!==b?null==(n=f4(this,k$))||n.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(gr)}}):a===gp&&c!==b&&(null==(o=f4(this,k$))||o.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(gp)}}))}connectedCallback(){var a,b,c;this.associateElement(this),f4(this,k$)||this.hasAttribute(gn)||f7(this,k4,k5).call(this),null==(a=f4(this,k$))||a.dispatch({type:"documentelementchangerequest",detail:eM}),null==(b=f4(this,k$))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),f4(this,k$)&&!f4(this,k1)&&f6(this,k1,null==(c=f4(this,k$))?void 0:c.subscribe(f4(this,k0))),void 0!==f4(this,k3)&&f4(this,k$)&&this.media&&setTimeout(()=>{var a,b,c;(null==(b=null==(a=this.media)?void 0:a.textTracks)?void 0:b.length)&&(null==(c=f4(this,k$))||c.dispatch({type:ec.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:f4(this,k3)}))},0),this.hasAttribute(go)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var a,b,c,d,e,f;if(null==(a=super.disconnectedCallback)||a.call(this),this.disableHotkeys(),f4(this,k$)){let a=f4(this,k$).getState();f6(this,k3,!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)),null==(c=f4(this,k$))||c.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(d=f4(this,k$))||d.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(e=f4(this,k$))||e.dispatch({type:ec.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}f4(this,k1)&&(null==(f=f4(this,k1))||f.call(this),f6(this,k1,void 0)),this.unassociateElement(this),f4(this,k_)&&(f4(this,k_).remove(),f6(this,k_,null))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=f4(this,k$))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=f4(this,k$))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){gC(this.mediaStateReceivers,a,b)}associateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;if(b.has(a))return;let c=gD(a,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(ec).forEach(b=>{a.addEventListener(b,f4(this,k2))}),b.set(a,c)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(ec).forEach(b=>{a.removeEventListener(b,f4(this,k2))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),f4(this,k$)&&Object.entries(f4(this,k$).getState()).forEach(([b,c])=>{gC([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",f7(this,k7,k8))}disableHotkeys(){this.removeEventListener("keydown",f7(this,k7,k8)),this.removeEventListener("keyup",f4(this,k6))}get hotkeys(){return f4(this,kY)}set hotkeys(a){e7(this,gd,a)}keyboardShortcutHandler(a){var b,c,d,e,f,g,h,i,j;let k,l,m,n=a.target;if(!((null!=(d=null!=(c=null==(b=n.getAttribute(gi))?void 0:b.split(" "))?c:null==n?void 0:n.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||f4(this,kY).contains(`no${a.key.toLowerCase()}`)||" "===a.key&&f4(this,kY).contains("nospace"))&&!(a.shiftKey&&("/"===a.key||"?"===a.key)&&f4(this,kY).contains("noshift+/")))switch(a.key){case" ":case"k":k=f4(this,k$).getState().mediaPaused?ec.MEDIA_PLAY_REQUEST:ec.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new eL.CustomEvent(k,{composed:!0,bubbles:!0}));break;case"m":k="off"===this.mediaStore.getState().mediaVolumeLevel?ec.MEDIA_UNMUTE_REQUEST:ec.MEDIA_MUTE_REQUEST,this.dispatchEvent(new eL.CustomEvent(k,{composed:!0,bubbles:!0}));break;case"f":k=this.mediaStore.getState().mediaIsFullscreen?ec.MEDIA_EXIT_FULLSCREEN_REQUEST:ec.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new eL.CustomEvent(k,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new eL.CustomEvent(ec.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let a=this.hasAttribute(ge)?+this.getAttribute(ge):10;l=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),m=new eL.CustomEvent(ec.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break}case"ArrowRight":case"l":{let a=this.hasAttribute(gf)?+this.getAttribute(gf):10;l=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),m=new eL.CustomEvent(ec.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break}case"ArrowUp":{let a=this.hasAttribute(gh)?+this.getAttribute(gh):.025;l=Math.min((null!=(g=this.mediaStore.getState().mediaVolume)?g:1)+a,1),m=new eL.CustomEvent(ec.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break}case"ArrowDown":{let a=this.hasAttribute(gg)?+this.getAttribute(gg):.025;l=Math.max((null!=(h=this.mediaStore.getState().mediaVolume)?h:1)-a,0),m=new eL.CustomEvent(ec.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break}case"<":l=Math.max((null!=(i=this.mediaStore.getState().mediaPlaybackRate)?i:1)-.25,.25).toFixed(2),m=new eL.CustomEvent(ec.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break;case">":l=Math.min((null!=(j=this.mediaStore.getState().mediaPlaybackRate)?j:1)+.25,2).toFixed(2),m=new eL.CustomEvent(ec.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break;case"/":case"?":a.shiftKey&&f7(this,k9,la).call(this);break;case"p":k=this.mediaStore.getState().mediaIsPip?ec.MEDIA_EXIT_PIP_REQUEST:ec.MEDIA_ENTER_PIP_REQUEST,m=new eL.CustomEvent(k,{composed:!0,bubbles:!0}),this.dispatchEvent(m)}}}kY=new WeakMap,kZ=new WeakMap,k$=new WeakMap,k_=new WeakMap,k0=new WeakMap,k1=new WeakMap,k2=new WeakMap,k3=new WeakMap,k4=new WeakSet,k5=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=f1,requestMap:e=f2,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0==a||fX(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k)))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,v,w,x,y,z;let A=!!h;if(h={...j,...null!=h?h:{},...a},A)return;await f_(...Object.values(a));let B=i.length>0&&0===b&&g,C=j.media!==h.media,D=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),E=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),F=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),G=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),H=j.documentElement!==h.documentElement,I=!!j.media&&(C||B),J=!!(null==(s=j.media)?void 0:s.textTracks)&&(D||B),K=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(E||B),L=!!(null==(u=j.media)?void 0:u.audioTracks)&&(F||B),M=!!(null==(v=j.media)?void 0:v.remote)&&(G||B),N=!!j.documentElement&&(H||B),O=I||J||K||L||M||N,P=0===i.length&&1===b&&g,Q=!!h.media&&(C||P),R=!!(null==(w=h.media)?void 0:w.textTracks)&&(D||P),S=!!(null==(x=h.media)?void 0:x.videoRenditions)&&(E||P),T=!!(null==(y=h.media)?void 0:y.audioTracks)&&(F||P),U=!!(null==(z=h.media)?void 0:z.remote)&&(G||P),V=!!h.documentElement&&(H||P),W=Q||R||S||T||U||V;if(!(O||W)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&I&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),Q&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&J&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),R&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),S&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),T&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),U&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&N&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),V&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;if(p&&O&&(Array.isArray(p)?p:[p]).forEach(a=>{"function"==typeof a&&a()}),W){let b=k.map(a=>a(o,h)).filter(a=>"function"==typeof a);n[a].stateOwnersUpdateHandlers=1===b.length?b[0]:b}else O&&(n[a].stateOwnersUpdateHandlers=void 0)}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;e[b]&&null==k.mediaErrorCode?l(e[b](d,j,a)):"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&(Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b}),m())},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(f9),defaultDuration:this.hasAttribute(gb)?+this.getAttribute(gb):void 0,defaultStreamType:null!=(a=this.getAttribute(ga))?a:void 0,liveEdgeOffset:this.hasAttribute(gl)?+this.getAttribute(gl):void 0,seekToLiveOffset:this.hasAttribute(gs)?+this.getAttribute(gs):this.hasAttribute(gl)?+this.getAttribute(gl):void 0,noAutoSeekToLive:this.hasAttribute(gm),noVolumePref:this.hasAttribute(gr),noMutedPref:this.hasAttribute(gp),noSubtitlesLangPref:this.hasAttribute(gq)}})},k6=new WeakMap,k7=new WeakSet,k8=function(a){var b;let{metaKey:c,altKey:d,key:e,shiftKey:f}=a,g=f&&("/"===e||"?"===e);if(g&&(null==(b=f4(this,k_))?void 0:b.open)||c||d||!g&&!f8.includes(e))return void this.removeEventListener("keyup",f4(this,k6));let h=a.target,i=h instanceof HTMLElement&&("media-volume-range"===h.tagName.toLowerCase()||"media-time-range"===h.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e)||f4(this,kY).contains(`no${e.toLowerCase()}`)||" "===e&&f4(this,kY).contains("nospace")||i||a.preventDefault(),this.addEventListener("keyup",f4(this,k6),{once:!0})},k9=new WeakSet,la=function(){f4(this,k_)||(f6(this,k_,eM.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(f4(this,k_))),f4(this,k_).open=!0};let gu=Object.values(eg),gv=Object.values(ee),gw=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(eL.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,ed.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>gu.includes(a)):[]},gx=a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&eL.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof eL.customElements.get(a.nodeName.toLowerCase()))&&eL.customElements.upgrade(a),gv.some(b=>b in a)||!!gw(a).length},gy=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},gz={[eg.MEDIA_SUBTITLES_LIST]:fB,[eg.MEDIA_SUBTITLES_SHOWING]:fB,[eg.MEDIA_SEEKABLE]:gy,[eg.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(gy).join(" "),[eg.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[eg.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(eq).join(" ")},[eg.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(es).join(" ")}},gA=async(a,b,c)=>{var d,e;if(a.isConnected||await ew(0),"boolean"==typeof c||null==c)return e5(a,b,c);if("number"==typeof c)return e3(a,b,c);if("string"==typeof c)return e7(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=gz[b])?void 0:d.call(gz,c))?e:c;return a.setAttribute(b,f)},gB=(a,b)=>{var c;if(null==(c=a.closest)?void 0:c.call(a,'*[slot="media"]'))return;let d=(a,b)=>{var c,d;gx(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>gB(a,b))},e=null==a?void 0:a.nodeName.toLowerCase();e.includes("-")&&!gx(a)?eL.customElements.whenDefined(e).then(()=>{d(a,b)}):d(a,b)},gC=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=gw(a),e=b.toLowerCase();d.includes(e)&&gA(a,e,c)})},gD=(a,b,c)=>{gB(a,b);let d=a=>{var c;b(null!=(c=null==a?void 0:a.composedPath()[0])?c:a.target)},e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)};a.addEventListener(ec.REGISTER_MEDIA_STATE_RECEIVER,d),a.addEventListener(ec.UNREGISTER_MEDIA_STATE_RECEIVER,e);let f=[],g=a=>{let d=a.target;"media"!==d.name&&(f.forEach(a=>gB(a,c)),(f=[...d.assignedElements({flatten:!0})]).forEach(a=>gB(a,b)))};a.addEventListener("slotchange",g);let h=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:d=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(d,a=>gB(a,b)),Array.prototype.forEach.call(e,a=>gB(a,c))):"attributes"===f&&h===ed.MEDIA_CHROME_ATTRIBUTES&&(gx(g)?b(g):c(g))})});return h.observe(a,{childList:!0,attributes:!0,subtree:!0}),()=>{gB(a,c),a.removeEventListener("slotchange",g),h.disconnect(),a.removeEventListener(ec.REGISTER_MEDIA_STATE_RECEIVER,d),a.removeEventListener(ec.UNREGISTER_MEDIA_STATE_RECEIVER,e)}};eL.customElements.get("media-controller")||eL.customElements.define("media-controller",gt);let gE="placement",gF="bounds";class gG extends eL.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!e_(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=eY(this,"#"+this.bounds))?a:eT(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;m<0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?this.style.setProperty("--media-tooltip-offset-x",`${n}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[gE,gF]}get placement(){return e6(this,gE)}set placement(a){e7(this,gE,a)}get bounds(){return e6(this,gF)}set bounds(a){e7(this,gF,a)}}gG.shadowRootOptions={mode:"open"},gG.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},eL.customElements.get("media-tooltip")||eL.customElements.define("media-tooltip",gG);var gH=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gI=(a,b,c)=>(gH(a,b,"read from private field"),c?c.call(a):b.get(a)),gJ=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gK=(a,b,c,d)=>(gH(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let gL="tooltipplacement",gM="disabled",gN="notooltip";class gO extends eL.HTMLElement{constructor(){if(super(),gJ(this,lg),gJ(this,lb,void 0),this.preventClick=!1,this.tooltipEl=null,gJ(this,lc,a=>{this.preventClick||this.handleClick(a),setTimeout(gI(this,ld),0)}),gJ(this,ld,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),gJ(this,le,a=>{let{key:b}=a;this.keysUsed.includes(b)?this.preventClick||this.handleClick(a):this.removeEventListener("keyup",gI(this,le))}),gJ(this,lf,a=>{let{metaKey:b,altKey:c,key:d}=a;b||c||!this.keysUsed.includes(d)?this.removeEventListener("keyup",gI(this,le)):this.addEventListener("keyup",gI(this,le),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",gL,ed.MEDIA_CONTROLLER,eg.MEDIA_LANG]}enable(){this.addEventListener("click",gI(this,lc)),this.addEventListener("keydown",gI(this,lf)),this.tabIndex=0}disable(){this.removeEventListener("click",gI(this,lc)),this.removeEventListener("keydown",gI(this,lf)),this.removeEventListener("keyup",gI(this,le)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===ed.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=gI(this,lb))?void 0:d.unassociateElement)||e.call(d,this),gK(this,lb,null)),c&&this.isConnected&&(gK(this,lb,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gI(this,lb))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===gL&&this.tooltipEl&&c!==b?this.tooltipEl.placement=c:a===eg.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),gI(this,ld).call(this)}connectedCallback(){var a,b,c;let{style:d}=e0(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(ed.MEDIA_CONTROLLER);e&&(gK(this,lb,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=gI(this,lb))?void 0:b.associateElement)||c.call(b,this)),eL.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=lg,b=lh,gH(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=gI(this,lb))?void 0:a.unassociateElement)||b.call(a,this),gK(this,lb,null),this.removeEventListener("mouseenter",gI(this,ld)),this.removeEventListener("focus",gI(this,ld)),this.removeEventListener("click",gI(this,lc))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return e6(this,gL)}set tooltipPlacement(a){e7(this,gL,a)}get mediaController(){return e6(this,ed.MEDIA_CONTROLLER)}set mediaController(a){e7(this,ed.MEDIA_CONTROLLER,a)}get disabled(){return e4(this,gM)}set disabled(a){e5(this,gM,a)}get noTooltip(){return e4(this,gN)}set noTooltip(a){e5(this,gN,a)}handleClick(a){}}lb=new WeakMap,lc=new WeakMap,ld=new WeakMap,le=new WeakMap,lf=new WeakMap,lg=new WeakSet,lh=function(){this.addEventListener("mouseenter",gI(this,ld)),this.addEventListener("focus",gI(this,ld)),this.addEventListener("click",gI(this,lc));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},gO.shadowRootOptions={mode:"open"},gO.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${gG.shadowRootOptions.mode}">
          ${gG.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},gO.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},gO.getTooltipContentHTML=function(){return""},eL.customElements.get("media-chrome-button")||eL.customElements.define("media-chrome-button",gO);let gP=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,gQ=a=>{let b=a.mediaIsAirplaying?ez("stop airplay"):ez("start airplay");a.setAttribute("aria-label",b)};class gR extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_IS_AIRPLAYING,eg.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gQ(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_IS_AIRPLAYING&&gQ(this)}get mediaIsAirplaying(){return e4(this,eg.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){e5(this,eg.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return e6(this,eg.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){e7(this,eg.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new eL.CustomEvent(ec.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}gR.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${eg.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eg.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eg.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${eg.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gP}</slot>
      <slot name="exit">${gP}</slot>
    </slot>
  `},gR.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ez("start airplay")}</slot>
    <slot name="tooltip-exit">${ez("stop airplay")}</slot>
  `},eL.customElements.get("media-airplay-button")||eL.customElements.define("media-airplay-button",gR);let gS=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,gT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,gU=a=>{a.setAttribute("aria-checked",fF(a).toString())};class gV extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_SUBTITLES_LIST,eg.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",ez("closed captions")),gU(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_SUBTITLES_SHOWING&&gU(this)}get mediaSubtitlesList(){return gW(this,eg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){gX(this,eg.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return gW(this,eg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){gX(this,eg.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new eL.CustomEvent(ec.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}gV.getSlotTemplateHTML=function(a){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${gS}</slot>
      <slot name="off">${gT}</slot>
    </slot>
  `},gV.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${ez("Enable captions")}</slot>
    <slot name="tooltip-disable">${ez("Disable captions")}</slot>
  `};let gW=(a,b)=>{let c=a.getAttribute(b);return c?fy(c):[]},gX=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=fB(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};eL.customElements.get("media-captions-button")||eL.customElements.define("media-captions-button",gV);let gY=a=>{let b=a.mediaIsCasting?ez("stop casting"):ez("start casting");a.setAttribute("aria-label",b)};class gZ extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_IS_CASTING,eg.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gY(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_IS_CASTING&&gY(this)}get mediaIsCasting(){return e4(this,eg.MEDIA_IS_CASTING)}set mediaIsCasting(a){e5(this,eg.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return e6(this,eg.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){e7(this,eg.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?ec.MEDIA_EXIT_CAST_REQUEST:ec.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new eL.CustomEvent(a,{composed:!0,bubbles:!0}))}}gZ.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${eg.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eg.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eg.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${eg.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},gZ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ez("Start casting")}</slot>
    <slot name="tooltip-exit">${ez("Stop casting")}</slot>
  `},eL.customElements.get("media-cast-button")||eL.customElements.define("media-cast-button",gZ);var g$=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g_=(a,b,c)=>(g$(a,b,"read from private field"),c?c.call(a):b.get(a)),g0=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},g1=(a,b,c,d)=>(g$(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),g2=(a,b,c)=>(g$(a,b,"access private method"),c);let g3="open";class g4 extends eL.HTMLElement{constructor(){super(),g0(this,ll),g0(this,ln),g0(this,lp),g0(this,lr),g0(this,lt),g0(this,lv),g0(this,li,!1),g0(this,lj,null),g0(this,lk,null)}static get observedAttributes(){return[g3,"anchor"]}get open(){return e4(this,g3)}set open(a){e5(this,g3,a)}handleEvent(a){switch(a.type){case"invoke":g2(this,lr,ls).call(this,a);break;case"focusout":g2(this,lt,lu).call(this,a);break;case"keydown":g2(this,lv,lw).call(this,a)}}connectedCallback(){g2(this,ll,lm).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(a,b,c){g2(this,ll,lm).call(this),a===g3&&c!==b&&(this.open?g2(this,ln,lo).call(this):g2(this,lp,lq).call(this))}focus(){g1(this,lj,eZ());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}li=new WeakMap,lj=new WeakMap,lk=new WeakMap,ll=new WeakSet,lm=function(){if(!g_(this,li)&&(g1(this,li,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=e0(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},ln=new WeakSet,lo=function(){var a;null==(a=g_(this,lk))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},lp=new WeakSet,lq=function(){var a;null==(a=g_(this,lk))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},lr=new WeakSet,ls=function(a){g1(this,lk,a.relatedTarget),eX(this,a.relatedTarget)||(this.open=!this.open)},lt=new WeakSet,lu=function(a){var b;!eX(this,a.relatedTarget)&&(null==(b=g_(this,lj))||b.focus(),g_(this,lk)&&g_(this,lk)!==a.relatedTarget&&this.open&&(this.open=!1))},lv=new WeakSet,lw=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=g_(this,lj))||f.focus(),this.open=!1))},g4.shadowRootOptions={mode:"open"},g4.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(a)}
  `},g4.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},eL.customElements.get("media-chrome-dialog")||eL.customElements.define("media-chrome-dialog",g4);var g5=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g6=(a,b,c)=>(g5(a,b,"read from private field"),c?c.call(a):b.get(a)),g7=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},g8=(a,b,c,d)=>(g5(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),g9=(a,b,c)=>(g5(a,b,"access private method"),c);class ha extends eL.HTMLElement{constructor(){if(super(),g7(this,lG),g7(this,lI),g7(this,lK),g7(this,lM),g7(this,lO),g7(this,lQ),g7(this,lS),g7(this,lU),g7(this,lx,void 0),g7(this,ly,void 0),g7(this,lz,void 0),g7(this,lA,void 0),g7(this,lB,{}),g7(this,lC,[]),g7(this,lD,()=>{if(this.range.matches(":focus-visible")){let{style:a}=e0(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),g7(this,lE,()=>{let{style:a}=e0(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),g7(this,lF,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),g8(this,lz,this.shadowRoot.querySelector("#startpoint")),g8(this,lA,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",ed.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===ed.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=g6(this,lx))?void 0:d.unassociateElement)||e.call(d,this),g8(this,lx,null)),c&&this.isConnected&&(g8(this,lx,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=g6(this,lx))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),g9(this,lI,lJ).call(this)):(this.range.setAttribute(a,c),g9(this,lK,lL).call(this)))}connectedCallback(){var a,b,c;let{style:d}=e0(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),g6(this,lB).pointer=e0(this.shadowRoot,"#pointer"),g6(this,lB).progress=e0(this.shadowRoot,"#progress"),g6(this,lB).thumb=e0(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),g6(this,lB).activeSegment=e0(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(ed.MEDIA_CONTROLLER);e&&(g8(this,lx,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=g6(this,lx))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",g6(this,lD)),this.shadowRoot.addEventListener("focusout",g6(this,lE)),g9(this,lI,lJ).call(this),eQ(this.container,g6(this,lF))}disconnectedCallback(){var a,b;g9(this,lK,lL).call(this),null==(b=null==(a=g6(this,lx))?void 0:a.unassociateElement)||b.call(a,this),g8(this,lx,null),this.shadowRoot.removeEventListener("focusin",g6(this,lD)),this.shadowRoot.removeEventListener("focusout",g6(this,lE)),eR(this.container,g6(this,lF))}updatePointerBar(a){var b;null==(b=g6(this,lB).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=g6(this,lB).progress)||a.style.setProperty("width",`${c}%`),null==(b=g6(this,lB).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];g8(this,lC,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=eM.createElementNS("http://www.w3.org/2000/svg","rect"),l=e1(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){var b,c,d,e;let f,g,h;return b=a.clientX,c=a.clientY,d=g6(this,lz).getBoundingClientRect(),f=(e=g6(this,lA).getBoundingClientRect()).x-d.x,0==(h=f*f+(g=e.y-d.y)*g)?0:Math.max(0,Math.min(1,((b-d.x)*f+(c-d.y)*g)/h))}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":g9(this,lU,lV).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":g9(this,lO,lP).call(this,a);break;case"pointerdown":g9(this,lM,lN).call(this,a);break;case"pointerup":g9(this,lQ,lR).call(this);break;case"pointerleave":g9(this,lS,lT).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}lx=new WeakMap,ly=new WeakMap,lz=new WeakMap,lA=new WeakMap,lB=new WeakMap,lC=new WeakMap,lD=new WeakMap,lE=new WeakMap,lF=new WeakMap,lG=new WeakSet,lH=function(a){let b=g6(this,lB).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=g6(this,lC).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},lI=new WeakSet,lJ=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},lK=new WeakSet,lL=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(a=eL.window)||a.removeEventListener("pointerup",this),null==(b=eL.window)||b.removeEventListener("pointermove",this)},lM=new WeakSet,lN=function(a){var b;g8(this,ly,a.composedPath().includes(this.range)),null==(b=eL.window)||b.addEventListener("pointerup",this,{once:!0})},lO=new WeakSet,lP=function(a){var b;"mouse"!==a.pointerType&&g9(this,lM,lN).call(this,a),this.addEventListener("pointerleave",this,{once:!0}),null==(b=eL.window)||b.addEventListener("pointermove",this)},lQ=new WeakSet,lR=function(){var a;null==(a=eL.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},lS=new WeakSet,lT=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=eL.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=g6(this,lB).activeSegment)||b.style.removeProperty("transform")},lU=new WeakSet,lV=function(a){("pen"!==a.pointerType||0!==a.buttons)&&(this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),g9(this,lG,lH).call(this,a),this.dragging&&("mouse"!==a.pointerType||!g6(this,ly))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},ha.shadowRootOptions={mode:"open"},ha.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(a)}
    </div>
    <div id="rightgap"></div>
  `},ha.getContainerTemplateHTML=function(a){return""},eL.customElements.get("media-chrome-range")||eL.customElements.define("media-chrome-range",ha);var hb=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hc=(a,b,c)=>(hb(a,b,"read from private field"),c?c.call(a):b.get(a)),hd=(a,b,c,d)=>(hb(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class he extends eL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,lW,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[ed.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===ed.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=hc(this,lW))?void 0:d.unassociateElement)||e.call(d,this),hd(this,lW,null)),c&&this.isConnected&&(hd(this,lW,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=hc(this,lW))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(ed.MEDIA_CONTROLLER);d&&(hd(this,lW,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=hc(this,lW))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=hc(this,lW))?void 0:a.unassociateElement)||b.call(a,this),hd(this,lW,null)}}lW=new WeakMap,he.shadowRootOptions={mode:"open"},he.getTemplateHTML=function(a){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},eL.customElements.get("media-control-bar")||eL.customElements.define("media-control-bar",he);var hf=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hg=(a,b,c)=>(hf(a,b,"read from private field"),c?c.call(a):b.get(a)),hh=(a,b,c,d)=>(hf(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class hi extends eL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,lX,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[ed.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===ed.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=hg(this,lX))?void 0:d.unassociateElement)||e.call(d,this),hh(this,lX,null)),c&&this.isConnected&&(hh(this,lX,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=hg(this,lX))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=e0(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(ed.MEDIA_CONTROLLER);e&&(hh(this,lX,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=hg(this,lX))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=hg(this,lX))?void 0:a.unassociateElement)||b.call(a,this),hh(this,lX,null)}}lX=new WeakMap,hi.shadowRootOptions={mode:"open"},hi.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}
  `},hi.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},eL.customElements.get("media-text-display")||eL.customElements.define("media-text-display",hi);var hj=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hk=(a,b,c)=>(hj(a,b,"read from private field"),c?c.call(a):b.get(a));class hl extends hi{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,lY,void 0),((a,b,c,d)=>(hj(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,lY,this.shadowRoot.querySelector("slot")),hk(this,lY).textContent=eC(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===eg.MEDIA_DURATION&&(hk(this,lY).textContent=eC(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return e2(this,eg.MEDIA_DURATION)}set mediaDuration(a){e3(this,eg.MEDIA_DURATION,a)}}lY=new WeakMap,hl.getSlotTemplateHTML=function(a,b){return`
    <slot>${eC(b.mediaDuration)}</slot>
  `},eL.customElements.get("media-duration-display")||eL.customElements.define("media-duration-display",hl);let hm={2:ez("Network Error"),3:ez("Decode Error"),4:ez("Source Not Supported"),5:ez("Encryption Error")},hn={2:ez("A network error caused the media download to fail."),3:ez("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:ez("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:ez("The media is encrypted and there are no keys to decrypt it.")},ho=a=>{var b,c;return 1===a.code?null:{title:null!=(b=hm[a.code])?b:`Error ${a.code}`,message:null!=(c=hn[a.code])?c:a.message}};var hp=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function hq(a){var b;let{title:c,message:d}=null!=(b=ho(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let hr=[eg.MEDIA_ERROR_CODE,eg.MEDIA_ERROR_MESSAGE];class hs extends g4{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,lZ,null)}static get observedAttributes(){return[...super.observedAttributes,...hr]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!hr.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=e.code&&null!==ho(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e),!this.hasAttribute("aria-label"))){let{title:a}=ho(e);a&&this.setAttribute("aria-label",a)}}get mediaError(){var a,b;return hp(this,a=lZ,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;hp(this,b=lZ,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return e2(this,"mediaerrorcode")}set mediaErrorCode(a){e3(this,"mediaerrorcode",a)}get mediaErrorMessage(){return e6(this,"mediaerrormessage")}set mediaErrorMessage(a){e7(this,"mediaerrormessage",a)}}lZ=new WeakMap,hs.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${a.mediaerrorcode}" id="content">
      ${hq({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},hs.formatErrorMessage=hq,eL.customElements.get("media-error-dialog")||eL.customElements.define("media-error-dialog",hs);var ht=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)},hu=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)};class hv extends g4{constructor(){super(...arguments),hu(this,l$,a=>{var b;if(!this.open)return;let c=null==(b=this.shadowRoot)?void 0:b.querySelector("#content");if(!c)return;let d=a.composedPath(),e=d[0]===this||d.includes(this),f=d.includes(c);e&&!f&&(this.open=!1)}),hu(this,l_,a=>{if(!this.open)return;let b=a.shiftKey&&("/"===a.key||"?"===a.key);"Escape"!==a.key&&!b||a.ctrlKey||a.altKey||a.metaKey||(this.open=!1,a.preventDefault(),a.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",ht(this,l$)),document.addEventListener("keydown",ht(this,l_)))}disconnectedCallback(){this.removeEventListener("click",ht(this,l$)),document.removeEventListener("keydown",ht(this,l_))}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),"open"===a&&(this.open?(this.addEventListener("click",ht(this,l$)),document.addEventListener("keydown",ht(this,l_))):(this.removeEventListener("click",ht(this,l$)),document.removeEventListener("keydown",ht(this,l_))))}}l$=new WeakMap,l_=new WeakMap,hv.getSlotTemplateHTML=function(a){let b;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${b=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:a,description:b})=>{let c=a.map((a,b)=>b>0?`<span class="key-separator">or</span><span class="key">${a}</span>`:`<span class="key">${a}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${c}</div>
        </td>
        <td class="description">${b}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${b}</table>
  `}
    </slot>
  `},eL.customElements.get("media-keyboard-shortcuts-dialog")||eL.customElements.define("media-keyboard-shortcuts-dialog",hv);var hw=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};let hx=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,hy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,hz=a=>{let b=a.mediaIsFullscreen?ez("exit fullscreen mode"):ez("enter fullscreen mode");a.setAttribute("aria-label",b)};class hA extends gO{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,l0,null)}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_IS_FULLSCREEN,eg.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),hz(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_IS_FULLSCREEN&&hz(this)}get mediaFullscreenUnavailable(){return e6(this,eg.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){e7(this,eg.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return e4(this,eg.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){e5(this,eg.MEDIA_IS_FULLSCREEN,a)}handleClick(a){var b,c,d,e;hw(this,b=l0,"write to private field"),c?c.call(this,a):b.set(this,a);let f=(hw(this,d=l0,"read from private field"),(e?e.call(this):d.get(this))instanceof PointerEvent),g=this.mediaIsFullscreen?new eL.CustomEvent(ec.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new eL.CustomEvent(ec.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:f});this.dispatchEvent(g)}}l0=new WeakMap,hA.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${eg.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eg.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eg.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${eg.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${hx}</slot>
      <slot name="exit">${hy}</slot>
    </slot>
  `},hA.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ez("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${ez("Exit fullscreen mode")}</slot>
  `},eL.customElements.get("media-fullscreen-button")||eL.customElements.define("media-fullscreen-button",hA);let{MEDIA_TIME_IS_LIVE:hB,MEDIA_PAUSED:hC}=eg,{MEDIA_SEEK_TO_LIVE_REQUEST:hD,MEDIA_PLAY_REQUEST:hE}=ec,hF=a=>{var b;let c=a.mediaPaused||!a.mediaTimeIsLive,d=c?ez("seek to live"):ez("playing live");a.setAttribute("aria-label",d);let e=null==(b=a.shadowRoot)?void 0:b.querySelector('slot[name="text"]');e&&(e.textContent=ez("live")),c?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class hG extends gO{static get observedAttributes(){return[...super.observedAttributes,hB,hC]}connectedCallback(){super.connectedCallback(),hF(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),hF(this)}get mediaPaused(){return e4(this,eg.MEDIA_PAUSED)}set mediaPaused(a){e5(this,eg.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return e4(this,eg.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){e5(this,eg.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new eL.CustomEvent(hD,{composed:!0,bubbles:!0})),this.hasAttribute(hC)&&this.dispatchEvent(new eL.CustomEvent(hE,{composed:!0,bubbles:!0})))}}hG.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${hB}]:not([${hC}])) slot[name=indicator] > *,
      :host([${hB}]:not([${hC}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${hB}]:not([${hC}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${ez("live")}</slot>
  `},eL.customElements.get("media-live-button")||eL.customElements.define("media-live-button",hG);var hH=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hI=(a,b,c)=>(hH(a,b,"read from private field"),c?c.call(a):b.get(a)),hJ=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hK=(a,b,c,d)=>(hH(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let hL="loadingdelay",hM="noautohide",hN=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class hO extends eL.HTMLElement{constructor(){if(super(),hJ(this,l1,void 0),hJ(this,l2,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[ed.MEDIA_CONTROLLER,eg.MEDIA_PAUSED,eg.MEDIA_LOADING,hL]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===hL&&b!==c?this.loadingDelay=Number(c):a===ed.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=hI(this,l1))?void 0:d.unassociateElement)||e.call(d,this),hK(this,l1,null)),c&&this.isConnected&&(hK(this,l1,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=hI(this,l1))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(ed.MEDIA_CONTROLLER);d&&(hK(this,l1,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=hI(this,l1))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=hI(this,l1))?void 0:a.unassociateElement)||b.call(a,this),hK(this,l1,null)}get loadingDelay(){return hI(this,l2)}set loadingDelay(a){hK(this,l2,a);let{style:b}=e0(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return e4(this,eg.MEDIA_PAUSED)}set mediaPaused(a){e5(this,eg.MEDIA_PAUSED,a)}get mediaLoading(){return e4(this,eg.MEDIA_LOADING)}set mediaLoading(a){e5(this,eg.MEDIA_LOADING,a)}get mediaController(){return e6(this,ed.MEDIA_CONTROLLER)}set mediaController(a){e7(this,ed.MEDIA_CONTROLLER,a)}get noAutohide(){return e4(this,hM)}set noAutohide(a){e5(this,hM,a)}}l1=new WeakMap,l2=new WeakMap,hO.shadowRootOptions={mode:"open"},hO.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${eg.MEDIA_LOADING}]:not([${eg.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${eg.MEDIA_LOADING}]:not([${eg.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${eg.MEDIA_LOADING}]:not([${eg.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${hN}</slot>
    <div id="status" role="status" aria-live="polite">${ez("media loading")}</div>
  `},eL.customElements.get("media-loading-indicator")||eL.customElements.define("media-loading-indicator",hO);let hP=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,hQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,hR=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,hS=a=>{let b="off"===a.mediaVolumeLevel?ez("unmute"):ez("mute");a.setAttribute("aria-label",b)};class hT extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),hS(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_VOLUME_LEVEL&&hS(this)}get mediaVolumeLevel(){return e6(this,eg.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){e7(this,eg.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?ec.MEDIA_UNMUTE_REQUEST:ec.MEDIA_MUTE_REQUEST;this.dispatchEvent(new eL.CustomEvent(a,{composed:!0,bubbles:!0}))}}hT.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${eg.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${eg.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${eg.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${eg.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${eg.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${eg.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${eg.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${hP}</slot>
      <slot name="low">${hQ}</slot>
      <slot name="medium">${hQ}</slot>
      <slot name="high">${hR}</slot>
    </slot>
  `},hT.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${ez("Mute")}</slot>
    <slot name="tooltip-unmute">${ez("Unmute")}</slot>
  `},eL.customElements.get("media-mute-button")||eL.customElements.define("media-mute-button",hT);let hU=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,hV=a=>{let b=a.mediaIsPip?ez("exit picture in picture mode"):ez("enter picture in picture mode");a.setAttribute("aria-label",b)};class hW extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_IS_PIP,eg.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),hV(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_IS_PIP&&hV(this)}get mediaPipUnavailable(){return e6(this,eg.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){e7(this,eg.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return e4(this,eg.MEDIA_IS_PIP)}set mediaIsPip(a){e5(this,eg.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?ec.MEDIA_EXIT_PIP_REQUEST:ec.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new eL.CustomEvent(a,{composed:!0,bubbles:!0}))}}hW.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${eg.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${eg.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eg.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${eg.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${hU}</slot>
      <slot name="exit">${hU}</slot>
    </slot>
  `},hW.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ez("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${ez("Exit picture in picture mode")}</slot>
  `},eL.customElements.get("media-pip-button")||eL.customElements.define("media-pip-button",hW);var hX=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let hY="rates",hZ=[1,1.2,1.5,1.7,2];class h$ extends gO{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,l3,new fw(this,hY,{defaultValue:hZ})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_PLAYBACK_RATE,hY]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===hY&&(hX(this,l3).value=c),a===eg.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",ez("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return hX(this,l3)}set rates(a){a?Array.isArray(a)?hX(this,l3).value=a.join(" "):"string"==typeof a&&(hX(this,l3).value=a):hX(this,l3).value=""}get mediaPlaybackRate(){return e2(this,eg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){e3(this,eg.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(hX(this,l3).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new eL.CustomEvent(ec.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}l3=new WeakMap,h$.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},h$.getTooltipContentHTML=function(){return ez("Playback rate")},eL.customElements.get("media-playback-rate-button")||eL.customElements.define("media-playback-rate-button",h$);let h_=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,h0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,h1=a=>{let b=a.mediaPaused?ez("play"):ez("pause");a.setAttribute("aria-label",b)};class h2 extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_PAUSED,eg.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),h1(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),(a===eg.MEDIA_PAUSED||a===eg.MEDIA_LANG)&&h1(this)}get mediaPaused(){return e4(this,eg.MEDIA_PAUSED)}set mediaPaused(a){e5(this,eg.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?ec.MEDIA_PLAY_REQUEST:ec.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new eL.CustomEvent(a,{composed:!0,bubbles:!0}))}}h2.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${eg.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${eg.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${eg.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${eg.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${h_}</slot>
      <slot name="pause">${h0}</slot>
    </slot>
  `},h2.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${ez("Play")}</slot>
    <slot name="tooltip-pause">${ez("Pause")}</slot>
  `},eL.customElements.get("media-play-button")||eL.customElements.define("media-play-button",h2);let h3="placeholdersrc";class h4 extends eL.HTMLElement{static get observedAttributes(){return[h3,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if("src"===a&&(null==c?this.image.removeAttribute("src"):this.image.setAttribute("src",c)),a===h3)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return e6(this,h3)}set placeholderSrc(a){e7(this,"src",a)}get src(){return e6(this,"src")}set src(a){e7(this,"src",a)}}h4.shadowRootOptions={mode:"open"},h4.getTemplateHTML=function(a){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},eL.customElements.get("media-poster-image")||eL.customElements.define("media-poster-image",h4);var h5=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};l4=new WeakMap,eL.customElements.get("media-preview-chapter-display")||eL.customElements.define("media-preview-chapter-display",class extends hi{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,l4,void 0),((a,b,c,d)=>(h5(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,l4,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_PREVIEW_CHAPTER,eg.MEDIA_LANG]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),(a===eg.MEDIA_PREVIEW_CHAPTER||a===eg.MEDIA_LANG)&&c!==b&&null!=c){var d;if((h5(this,l4,"read from private field"),d?d.call(this):l4.get(this)).textContent=c,""!==c){let a=ez("chapter: {chapterName}",{chapterName:c});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return e6(this,eg.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){e7(this,eg.MEDIA_PREVIEW_CHAPTER,a)}});var h6=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},h7=(a,b,c)=>(h6(a,b,"read from private field"),c?c.call(a):b.get(a)),h8=(a,b,c,d)=>(h6(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class h9 extends eL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,l5,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[ed.MEDIA_CONTROLLER,eg.MEDIA_PREVIEW_IMAGE,eg.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(ed.MEDIA_CONTROLLER);d&&(h8(this,l5,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=h7(this,l5))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=h7(this,l5))?void 0:a.unassociateElement)||b.call(a,this),h8(this,l5,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[eg.MEDIA_PREVIEW_IMAGE,eg.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===ed.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=h7(this,l5))?void 0:d.unassociateElement)||e.call(d,this),h8(this,l5,null)),c&&this.isConnected&&(h8(this,l5,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=h7(this,l5))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return e6(this,eg.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){e7(this,eg.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(eg.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){a?this.setAttribute(eg.MEDIA_PREVIEW_COORDS,a.join(" ")):this.removeAttribute(eg.MEDIA_PREVIEW_COORDS)}update(){let a,b,c=this.mediaPreviewCoords,d=this.mediaPreviewImage;if(!(c&&d))return;let[e,f,g,h]=c,i=d.split("#")[0],j=getComputedStyle(this),{maxWidth:k,maxHeight:l,minWidth:m,minHeight:n}=j;if("fill"===(j.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let c=parseInt(k)/g,d=parseInt(l)/h,e=parseInt(m)/g,f=parseInt(n)/h;a=c<1?c:Math.max(c,e),b=d<1?d:Math.max(d,f)}else{let c=Math.min(parseInt(k)/g,parseInt(l)/h),d=Math.max(parseInt(m)/g,parseInt(n)/h),e=c<1?c:d>1?d:1;a=e,b=e}let{style:o}=e0(this.shadowRoot,":host"),p=e0(this.shadowRoot,"img").style,q=this.shadowRoot.querySelector("img"),r=1>Math.min(a,b)?"min":"max";o.setProperty(`${r}-width`,"initial","important"),o.setProperty(`${r}-height`,"initial","important"),o.width=`${g*a}px`,o.height=`${h*b}px`;let s=()=>{p.width=`${this.imgWidth*a}px`,p.height=`${this.imgHeight*b}px`,p.display="block"};q.src!==i&&(q.onload=()=>{this.imgWidth=q.naturalWidth,this.imgHeight=q.naturalHeight,s(),q.onload=null},q.src=i,s()),s(),p.transform=`translate(-${e*a}px, -${f*b}px)`}}l5=new WeakMap,h9.shadowRootOptions={mode:"open"},h9.getTemplateHTML=function(a){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},eL.customElements.get("media-preview-thumbnail")||eL.customElements.define("media-preview-thumbnail",h9);var ia=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ib=(a,b,c)=>(ia(a,b,"read from private field"),c?c.call(a):b.get(a));l6=new WeakMap,eL.customElements.get("media-preview-time-display")||eL.customElements.define("media-preview-time-display",class extends hi{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,l6,void 0),((a,b,c,d)=>(ia(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,l6,this.shadowRoot.querySelector("slot")),ib(this,l6).textContent=eC(0)}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_PREVIEW_TIME&&null!=c&&(ib(this,l6).textContent=eC(parseFloat(c)))}get mediaPreviewTime(){return e2(this,eg.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){e3(this,eg.MEDIA_PREVIEW_TIME,a)}});let ic="seekoffset";class id extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_CURRENT_TIME,ic]}connectedCallback(){super.connectedCallback(),this.seekOffset=e2(this,ic,30)}attributeChangedCallback(a,b,c){var d;super.attributeChangedCallback(a,b,c),d=this.seekOffset,this.setAttribute("aria-label",ez("seek back {seekOffset} seconds",{seekOffset:d})),a===ic&&(this.seekOffset=e2(this,ic,30))}get seekOffset(){return e2(this,ic,30)}set seekOffset(a){e3(this,ic,a),this.setAttribute("aria-label",ez("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),eV(eW(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return e2(this,eg.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){e3(this,eg.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new eL.CustomEvent(ec.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}id.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},id.getTooltipContentHTML=function(){return ez("Seek backward")},eL.customElements.get("media-seek-backward-button")||eL.customElements.define("media-seek-backward-button",id);let ie="seekoffset";class ig extends gO{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_CURRENT_TIME,ie]}connectedCallback(){super.connectedCallback(),this.seekOffset=e2(this,ie,30)}attributeChangedCallback(a,b,c){var d;super.attributeChangedCallback(a,b,c),d=this.seekOffset,this.setAttribute("aria-label",ez("seek forward {seekOffset} seconds",{seekOffset:d})),a===ie&&(this.seekOffset=e2(this,ie,30))}get seekOffset(){return e2(this,ie,30)}set seekOffset(a){e3(this,ie,a),this.setAttribute("aria-label",ez("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),eV(eW(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return e2(this,eg.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){e3(this,eg.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new eL.CustomEvent(ec.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}ig.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},ig.getTooltipContentHTML=function(){return ez("Seek forward")},eL.customElements.get("media-seek-forward-button")||eL.customElements.define("media-seek-forward-button",ig);var ih=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ii=(a,b,c)=>(ih(a,b,"read from private field"),c?c.call(a):b.get(a)),ij=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ik=(a,b,c,d)=>(ih(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),il=(a,b,c)=>(ih(a,b,"access private method"),c);let im={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},io=[...Object.values(im),eg.MEDIA_CURRENT_TIME,eg.MEDIA_DURATION,eg.MEDIA_SEEKABLE],ip=["Enter"," "],iq="&nbsp;/&nbsp;",ir=(a,{timesSep:b=iq}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?eC(0-(g-e)):eC(e);return a.showDuration?`${h}${b}${eC(g)}`:h};class is extends hi{constructor(){super(),ij(this,ma),ij(this,mc),ij(this,me),ij(this,mg),ij(this,l7,void 0),ij(this,l8,null),ij(this,l9,a=>{let{metaKey:b,altKey:c,key:d}=a;b||c||!ip.includes(d)?this.removeEventListener("keyup",ii(this,l8)):this.addEventListener("keyup",ii(this,l8))}),ik(this,l7,this.shadowRoot.querySelector("slot")),ii(this,l7).innerHTML=`${ir(this)}`}static get observedAttributes(){return[...super.observedAttributes,...io,"disabled"]}connectedCallback(){let{style:a}=e0(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",ez("playback time")),il(this,me,mf).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),il(this,mc,md).call(this),super.disconnectedCallback()}attributeChangedCallback(a,b,c){this.setAttribute("aria-label",ez("playback time")),io.includes(a)?this.update():"disabled"===a&&c!==b?null==c?il(this,me,mf).call(this):il(this,mg,mh).call(this):a===im.NO_TOGGLE&&c!==b&&(this.noToggle?il(this,mg,mh).call(this):il(this,me,mf).call(this)),super.attributeChangedCallback(a,b,c)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return e4(this,im.REMAINING)}set remaining(a){e5(this,im.REMAINING,a)}get showDuration(){return e4(this,im.SHOW_DURATION)}set showDuration(a){e5(this,im.SHOW_DURATION,a)}get noToggle(){return e4(this,im.NO_TOGGLE)}set noToggle(a){e5(this,im.NO_TOGGLE,a)}get mediaDuration(){return e2(this,eg.MEDIA_DURATION)}set mediaDuration(a){e3(this,eg.MEDIA_DURATION,a)}get mediaCurrentTime(){return e2(this,eg.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){e3(this,eg.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(eg.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){null==a?this.removeAttribute(eg.MEDIA_SEEKABLE):this.setAttribute(eg.MEDIA_SEEKABLE,a.join(":"))}update(){let a=ir(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext",ez("video not loaded, unknown time."));let f=a.remaining?eB(0-(e-c)):eB(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=ez("{currentTime} of {totalTime}",{currentTime:f,totalTime:eB(e)});a.setAttribute("aria-valuetext",g)})(this),a!==ii(this,l7).innerHTML&&(ii(this,l7).innerHTML=a)}}l7=new WeakMap,l8=new WeakMap,l9=new WeakMap,ma=new WeakSet,mb=function(){ii(this,l8)||(ik(this,l8,a=>{let{key:b}=a;ip.includes(b)?this.toggleTimeDisplay():this.removeEventListener("keyup",ii(this,l8))}),this.addEventListener("keydown",ii(this,l9)),this.addEventListener("click",this.toggleTimeDisplay))},mc=new WeakSet,md=function(){ii(this,l8)&&(this.removeEventListener("keyup",ii(this,l8)),this.removeEventListener("keydown",ii(this,l9)),this.removeEventListener("click",this.toggleTimeDisplay),ik(this,l8,null))},me=new WeakSet,mf=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),il(this,ma,mb).call(this))},mg=new WeakSet,mh=function(){this.removeAttribute("role"),this.disable(),il(this,mc,md).call(this)},is.getSlotTemplateHTML=function(a,b){return`
    <slot>${ir(b)}</slot>
  `},eL.customElements.get("media-time-display")||eL.customElements.define("media-time-display",is);var it=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iu=(a,b,c)=>(it(a,b,"read from private field"),c?c.call(a):b.get(a)),iv=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iw=(a,b,c,d)=>(it(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ix{constructor(a,b,c){iv(this,mi,void 0),iv(this,mj,void 0),iv(this,mk,void 0),iv(this,ml,void 0),iv(this,mm,void 0),iv(this,mn,void 0),iv(this,mo,void 0),iv(this,mp,void 0),iv(this,mq,0),iv(this,mr,(a=performance.now())=>{iw(this,mq,requestAnimationFrame(iu(this,mr))),iw(this,ml,performance.now()-iu(this,mk));let b=1e3/this.fps;if(iu(this,ml)>b){let c,d,e,f;iw(this,mk,a-iu(this,ml)%b);let g=1e3/((a-iu(this,mj))/++(c=this,d=mm,{set _(value){iw(c,d,value,e)},get _(){return iu(c,d,f)}})._),h=(a-iu(this,mn))/1e3/this.duration,i=iu(this,mo)+h*this.playbackRate;i-iu(this,mi).valueAsNumber>0?iw(this,mp,this.playbackRate/this.duration/g):(iw(this,mp,.995*iu(this,mp)),i=iu(this,mi).valueAsNumber+iu(this,mp)),this.callback(i)}}),iw(this,mi,a),this.callback=b,this.fps=c}start(){0===iu(this,mq)&&(iw(this,mk,performance.now()),iw(this,mj,iu(this,mk)),iw(this,mm,0),iu(this,mr).call(this))}stop(){0!==iu(this,mq)&&(cancelAnimationFrame(iu(this,mq)),iw(this,mq,0))}update({start:a,duration:b,playbackRate:c}){let d=a-iu(this,mi).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),iw(this,mo,a),iw(this,mn,performance.now()),this.duration=b,this.playbackRate=c}}mi=new WeakMap,mj=new WeakMap,mk=new WeakMap,ml=new WeakMap,mm=new WeakMap,mn=new WeakMap,mo=new WeakMap,mp=new WeakMap,mq=new WeakMap,mr=new WeakMap;var iy=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iz=(a,b,c)=>(iy(a,b,"read from private field"),c?c.call(a):b.get(a)),iA=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iB=(a,b,c,d)=>(iy(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),iC=(a,b,c)=>(iy(a,b,"access private method"),c);let iD=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},iE=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class iF extends ha{constructor(){super(),iA(this,mD),iA(this,mG),iA(this,mI),iA(this,mK),iA(this,mM),iA(this,mO),iA(this,mQ),iA(this,ms,null),iA(this,mt,void 0),iA(this,mu,void 0),iA(this,mv,void 0),iA(this,mw,void 0),iA(this,mx,void 0),iA(this,my,void 0),iA(this,mz,void 0),iA(this,mA,void 0),iA(this,mB,void 0),iA(this,mC,()=>{iC(this,mD,mE).call(this)?iz(this,mt).start():iz(this,mt).stop()}),iA(this,mF,a=>{!this.dragging&&(eu(a)&&(this.range.valueAsNumber=a),iz(this,mB)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),iB(this,mu,this.shadowRoot.querySelectorAll('[part~="box"]')),iB(this,mw,this.shadowRoot.querySelector('[part~="preview-box"]')),iB(this,mx,this.shadowRoot.querySelector('[part~="current-box"]'));const a=getComputedStyle(this);iB(this,my,parseInt(a.getPropertyValue("--media-box-padding-left"))),iB(this,mz,parseInt(a.getPropertyValue("--media-box-padding-right"))),iB(this,mt,new ix(this.range,iz(this,mF),60))}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_PAUSED,eg.MEDIA_DURATION,eg.MEDIA_SEEKABLE,eg.MEDIA_CURRENT_TIME,eg.MEDIA_PREVIEW_IMAGE,eg.MEDIA_PREVIEW_TIME,eg.MEDIA_PREVIEW_CHAPTER,eg.MEDIA_BUFFERED,eg.MEDIA_PLAYBACK_RATE,eg.MEDIA_LOADING,eg.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",ez("seek")),iz(this,mC).call(this),iB(this,ms,this.getRootNode()),null==(a=iz(this,ms))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),iz(this,mt).stop(),null==(a=iz(this,ms))||a.removeEventListener("transitionstart",this),iB(this,ms,null)}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),b!=c){if(a===eg.MEDIA_CURRENT_TIME||a===eg.MEDIA_PAUSED||a===eg.MEDIA_ENDED||a===eg.MEDIA_LOADING||a===eg.MEDIA_DURATION||a===eg.MEDIA_SEEKABLE){let a,b,c,d;iz(this,mt).update({start:iD(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),iz(this,mC).call(this),a=this.range,b=eB(+iE(this)),c=eB(+this.mediaSeekableEnd),d=b&&c?ez("{currentTime} of {totalTime}",{currentTime:b,totalTime:c}):ez("video not loaded, unknown time."),a.setAttribute("aria-valuetext",d)}else a===eg.MEDIA_BUFFERED&&this.updateBufferedBar();(a===eg.MEDIA_DURATION||a===eg.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=iz(this,mA),this.updateBar())}}get mediaChaptersCues(){return iz(this,mA)}set mediaChaptersCues(a){var b;iB(this,mA,a),this.updateSegments(null==(b=iz(this,mA))?void 0:b.map(a=>({start:iD(this,a.startTime),end:iD(this,a.endTime)})))}get mediaPaused(){return e4(this,eg.MEDIA_PAUSED)}set mediaPaused(a){e5(this,eg.MEDIA_PAUSED,a)}get mediaLoading(){return e4(this,eg.MEDIA_LOADING)}set mediaLoading(a){e5(this,eg.MEDIA_LOADING,a)}get mediaDuration(){return e2(this,eg.MEDIA_DURATION)}set mediaDuration(a){e3(this,eg.MEDIA_DURATION,a)}get mediaCurrentTime(){return e2(this,eg.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){e3(this,eg.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return e2(this,eg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){e3(this,eg.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(eg.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(eg.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(eg.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(eg.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){null==a?this.removeAttribute(eg.MEDIA_SEEKABLE):this.setAttribute(eg.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return e6(this,eg.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){e7(this,eg.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return e2(this,eg.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){e3(this,eg.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return e4(this,eg.MEDIA_ENDED)}set mediaEnded(a){e5(this,eg.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=iD(this,e)}let{style:d}=e0(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=e0(this.shadowRoot,"#current-rail"),b=e0(this.shadowRoot,'[part~="current-box"]'),c=iC(this,mG,mH).call(this,iz(this,mx)),d=iC(this,mI,mJ).call(this,c,this.range.valueAsNumber),e=iC(this,mK,mL).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":iC(this,mQ,mR).call(this);break;case"pointermove":iC(this,mM,mN).call(this,a);break;case"pointerup":iz(this,mB)&&iB(this,mB,!1);break;case"pointerdown":iB(this,mB,!0);break;case"pointerleave":iC(this,mO,mP).call(this,null);break;case"transitionstart":eX(a.target,this)&&setTimeout(()=>iz(this,mC).call(this),0)}}}ms=new WeakMap,mt=new WeakMap,mu=new WeakMap,mv=new WeakMap,mw=new WeakMap,mx=new WeakMap,my=new WeakMap,mz=new WeakMap,mA=new WeakMap,mB=new WeakMap,mC=new WeakMap,mD=new WeakSet,mE=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&e_(this)},mF=new WeakMap,mG=new WeakSet,mH=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?eY(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},mI=new WeakSet,mJ=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},mK=new WeakSet,mL=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+iz(this,my)){let b=a.range.left-a.bounds.left-iz(this,my);return`${f-c/2+b}px`}if(f>e-iz(this,mz)){let b=a.bounds.right-a.range.right-iz(this,mz);return`${f+c/2-b-a.range.width}px`}return 0},mM=new WeakSet,mN=function(a){let b=[...iz(this,mu)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void iC(this,mO,mP).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=e0(this.shadowRoot,"#preview-rail"),e=e0(this.shadowRoot,'[part~="preview-box"]'),f=iC(this,mG,mH).call(this,iz(this,mw)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=iC(this,mI,mJ).call(this,f,g),i=iC(this,mK,mL).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(iz(this,mv))-Math.round(g*c))&&g>.01&&g<.99||(iB(this,mv,g*c),iC(this,mO,mP).call(this,iz(this,mv)))},mO=new WeakSet,mP=function(a){this.dispatchEvent(new eL.CustomEvent(ec.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},mQ=new WeakSet,mR=function(){iz(this,mt).stop();let a=iE(this);this.dispatchEvent(new eL.CustomEvent(ec.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},iF.shadowRootOptions={mode:"open"},iF.getContainerTemplateHTML=function(a){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${eg.MEDIA_PREVIEW_IMAGE}], [${eg.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${eg.MEDIA_PREVIEW_IMAGE}], [${eg.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${eg.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${eg.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${eg.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${eg.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${eg.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${eg.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${eg.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${eg.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${eg.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${eg.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${eg.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${eg.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${h9.shadowRootOptions.mode}">
            ${h9.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},eL.customElements.get("media-time-range")||eL.customElements.define("media-time-range",iF);var iG=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};mS=new WeakMap,eL.customElements.get("media-volume-range")||eL.customElements.define("media-volume-range",class extends ha{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,mS,()=>{let a=this.range.value,b=new eL.CustomEvent(ec.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_VOLUME,eg.MEDIA_MUTED,eg.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ez("volume")),this.range.addEventListener("input",iG(this,mS))}disconnectedCallback(){this.range.removeEventListener("input",iG(this,mS)),super.disconnectedCallback()}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===eg.MEDIA_VOLUME||a===eg.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return e2(this,eg.MEDIA_VOLUME,1)}set mediaVolume(a){e3(this,eg.MEDIA_VOLUME,a)}get mediaMuted(){return e4(this,eg.MEDIA_MUTED)}set mediaMuted(a){e5(this,eg.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return e6(this,eg.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){e7(this,eg.MEDIA_VOLUME_UNAVAILABLE,a)}});class iH extends gO{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_LOOP]}connectedCallback(){var a;super.connectedCallback(),this.container=(null==(a=this.shadowRoot)?void 0:a.querySelector("#icon"))||null,this.container&&(this.container.textContent=ez("Loop"))}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return e4(this,eg.MEDIA_LOOP)}set mediaLoop(a){e5(this,eg.MEDIA_LOOP,a)}handleClick(){let a=!this.mediaLoop,b=new eL.CustomEvent(ec.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}iH.getSlotTemplateHTML=function(a){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${eg.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},iH.getTooltipContentHTML=function(){return ez("Loop")},eL.customElements.get("media-loop-button")||eL.customElements.define("media-loop-button",iH);var iI=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iJ=(a,b,c)=>(iI(a,b,"read from private field"),c?c.call(a):b.get(a)),iK=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iL=(a,b,c,d)=>(iI(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let iM={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof iU&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof iU?d.element[d.attributeName]=b:d.value=b}}}};class iN extends eL.DocumentFragment{constructor(a,b,c=iM){var d;super(),iK(this,mT,void 0),iK(this,mU,void 0),this.append(a.content.cloneNode(!0)),iL(this,mT,iO(this)),iL(this,mU,c),null==(d=c.createCallback)||d.call(c,this,iJ(this,mT),b),c.processCallback(this,iJ(this,mT),b)}update(a){iJ(this,mU).processCallback(this,iJ(this,mT),a)}}mT=new WeakMap,mU=new WeakMap;let iO=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new iT;for([c,d]of iQ(e.value))if(c){let c=new iU(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of iQ(f))if(c){let c=new iV(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new iW(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else iO(e,b);return b},iP={},iQ=a=>{let b="",c=0,d=iP[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),iP[a]=d};class iR{get value(){return""}set value(a){}toString(){return this.value}}let iS=new WeakMap;class iT{constructor(){iK(this,mV,[])}[Symbol.iterator](){return iJ(this,mV).values()}get length(){return iJ(this,mV).length}item(a){return iJ(this,mV)[a]}append(...a){for(let b of a)b instanceof iU&&iS.set(b,this),iJ(this,mV).push(b)}toString(){return iJ(this,mV).join("")}}mV=new WeakMap;class iU extends iR{constructor(a,b,c){super(),iK(this,m$),iK(this,mW,""),iK(this,mX,void 0),iK(this,mY,void 0),iK(this,mZ,void 0),iL(this,mX,a),iL(this,mY,b),iL(this,mZ,c)}get attributeName(){return iJ(this,mY)}get attributeNamespace(){return iJ(this,mZ)}get element(){return iJ(this,mX)}get value(){return iJ(this,mW)}set value(a){iJ(this,mW)!==a&&(iL(this,mW,a),iJ(this,m$,m_)&&1!==iJ(this,m$,m_).length?iJ(this,mX).setAttributeNS(iJ(this,mZ),iJ(this,mY),iJ(this,m$,m_).toString()):null==a?iJ(this,mX).removeAttributeNS(iJ(this,mZ),iJ(this,mY)):iJ(this,mX).setAttributeNS(iJ(this,mZ),iJ(this,mY),a))}get booleanValue(){return iJ(this,mX).hasAttributeNS(iJ(this,mZ),iJ(this,mY))}set booleanValue(a){if(iJ(this,m$,m_)&&1!==iJ(this,m$,m_).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}mW=new WeakMap,mX=new WeakMap,mY=new WeakMap,mZ=new WeakMap,m$=new WeakSet,m_=function(){return iS.get(this)};class iV extends iR{constructor(a,b){super(),iK(this,m0,void 0),iK(this,m1,void 0),iL(this,m0,a),iL(this,m1,b?[...b]:[new Text])}get replacementNodes(){return iJ(this,m1)}get parentNode(){return iJ(this,m0)}get nextSibling(){return iJ(this,m1)[iJ(this,m1).length-1].nextSibling}get previousSibling(){return iJ(this,m1)[0].previousSibling}get value(){return iJ(this,m1).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),iL(this,m1,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(iJ(this,m1)[0].parentNode,iJ(this,m1),b,this.nextSibling))}}m0=new WeakMap,m1=new WeakMap;class iW extends iV{constructor(a,b){const c=b.getAttribute("directive")||b.getAttribute("type");let d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let iX={string:a=>String(a)};class iY{constructor(a){this.template=a,this.state=void 0}}let iZ=new WeakMap,i$=new WeakMap,i_={partial:(a,b)=>{b[a.expression]=new iY(a.template)},if:(a,b)=>{var c;if(i3(a.expression,b))if(iZ.get(a)!==a.template){iZ.set(a,a.template);let c=new iN(a.template,b,i1);a.replace(c),i$.set(a,c)}else null==(c=i$.get(a))||c.update(b);else a.replace(""),iZ.delete(a),i$.delete(a)}},i0=Object.keys(i_),i1={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof iW){if(!f.directive){let a=i0.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=i_[f.directive])||d.call(i_,f,c);continue}let b=i3(a,c);if(b instanceof iY){iZ.get(f)!==b.template?(iZ.set(f,b.template),f.value=b=new iN(b.template,b.state,i1),i$.set(f,b)):null==(e=i$.get(f))||e.update(b.state);continue}b?(f instanceof iU&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof iU?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,iZ.delete(f),i$.delete(f))):f instanceof iU?f.value=void 0:(f.value=void 0,iZ.delete(f),i$.delete(f))}}},i2={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=iX[b])?void 0:c.call(iX,a)}};function i3(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return i4(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return i4(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=i6(j,b))}return c}if(1===j.length)return i5(j[0])?i6(j[0].token,b):i4(a);if(2===j.length){let c=i2[null==(h=j[0])?void 0:h.token];return c&&i5(j[1])?c(i6(j[1].token,b)):i4(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=i2[c];if(!d||!i5(j[0])||!i5(j[2]))return i4(a);let e=i6(j[0].token,b);return d(e,"|"===c?j[2].token:i6(j[2].token,b))}}function i4(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function i5({type:a}){return["number","boolean","string","param"].includes(a)}function i6(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):ev(a)?parseFloat(a):b[a]}var i7=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},i8=(a,b,c)=>(i7(a,b,"read from private field"),c?c.call(a):b.get(a)),i9=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ja=(a,b,c,d)=>(i7(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),jb=(a,b,c)=>(i7(a,b,"access private method"),c);let jc={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},jd=eM.createElement("template");jd.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class je extends eL.HTMLElement{constructor(){super(),i9(this,m6),i9(this,m8),i9(this,m2,void 0),i9(this,m3,void 0),i9(this,m4,void 0),i9(this,m5,void 0),i9(this,na,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),ja(this,m5,new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(jc[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()})),ja(this,na,this.render.bind(this)),jb(this,m6,m7).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=i8(this,m2))?a:this.constructor.template}set template(a){null===a?this.removeAttribute("template"):"string"==typeof a?this.setAttribute("template",a):a instanceof HTMLTemplateElement&&(ja(this,m2,a),ja(this,m4,null),this.createRenderer())}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>jc[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=jc[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(ev(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&jb(this,m8,m9).call(this)}connectedCallback(){this.addEventListener(eh.BREAKPOINTS_COMPUTED,i8(this,na)),i8(this,m5).observe(this,{attributes:!0}),i8(this,m5).observe(this.renderRoot,{attributes:!0,subtree:!0}),jb(this,m8,m9).call(this)}disconnectedCallback(){this.removeEventListener(eh.BREAKPOINTS_COMPUTED,i8(this,na)),i8(this,m5).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==i8(this,m3)&&(ja(this,m3,this.template),this.renderer=new iN(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(jd.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function jf(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function jg(a){return a.split("-")[0]}m2=new WeakMap,m3=new WeakMap,m4=new WeakMap,m5=new WeakMap,m6=new WeakSet,m7=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},m8=new WeakSet,m9=function(){var a;let b=this.getAttribute("template");if(!b||b===i8(this,m4))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){ja(this,m4,b),ja(this,m2,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(ja(this,m4,b),jf(b).then(a=>{let b=eM.createElement("template");b.innerHTML=a,ja(this,m2,b),this.createRenderer()}).catch(console.error))},na=new WeakMap,je.observedAttributes=["template"],je.processor=i1,eL.customElements.get("media-theme")||eL.customElements.define("media-theme",je);class jh extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class ji extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var jj=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},jk=(a,b,c)=>(jj(a,b,"read from private field"),c?c.call(a):b.get(a)),jl=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jm=(a,b,c,d)=>(jj(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),jn=(a,b,c)=>(jj(a,b,"access private method"),c);function jo({type:a,text:b,value:c,checked:d}){let e=eM.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=eM.createElement("span");return f.textContent=b,e.append(f),e}function jp(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let jq="style",jr="hidden",js="disabled";class jt extends eL.HTMLElement{constructor(){if(super(),jl(this,ni),jl(this,nk),jl(this,nn),jl(this,np),jl(this,nr),jl(this,nt),jl(this,nx),jl(this,nz),jl(this,nB),jl(this,nD),jl(this,nF),jl(this,nH),jl(this,nJ),jl(this,nL),jl(this,nN),jl(this,nP),jl(this,nR),jl(this,nT),jl(this,nb,null),jl(this,nc,null),jl(this,nd,null),jl(this,ne,new Set),jl(this,nf,void 0),jl(this,ng,!1),jl(this,nh,null),jl(this,nm,()=>{let a=jk(this,ne),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));jm(this,ne,b)}),jl(this,nv,()=>{jn(this,nx,ny).call(this),jn(this,nz,nA).call(this,!1)}),jl(this,nw,()=>{jn(this,nx,ny).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),jm(this,nf,new MutationObserver(jk(this,nm)))}static get observedAttributes(){return[js,jr,jq,"anchor",ed.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":jn(this,ni,nj).call(this,a);break;case"invoke":jn(this,np,nq).call(this,a);break;case"click":jn(this,nB,nC).call(this,a);break;case"toggle":jn(this,nF,nG).call(this,a);break;case"focusout":jn(this,nJ,nK).call(this,a);break;case"keydown":jn(this,nL,nM).call(this,a)}}connectedCallback(){var a,b;jk(this,nf).observe(this.defaultSlot,{childList:!0}),jm(this,nh,e1(this.shadowRoot,":host")),jn(this,nn,no).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),jm(this,nb,eU(this)),null==(b=null==(a=jk(this,nb))?void 0:a.associateElement)||b.call(a,this),this.hidden||(eQ(jv(this),jk(this,nv)),eQ(this,jk(this,nw))),jn(this,nk,nl).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var a,b;jk(this,nf).disconnect(),eR(jv(this),jk(this,nv)),eR(this,jk(this,nw)),this.disable(),null==(b=null==(a=jk(this,nb))?void 0:a.unassociateElement)||b.call(a,this),jm(this,nb,null),jm(this,nc,null),jm(this,nd,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(a,b,c){var d,e,f,g;a===jr&&c!==b?(jk(this,ng)||jm(this,ng,!0),this.hidden?jn(this,nt,nu).call(this):jn(this,nr,ns).call(this),this.dispatchEvent(new ji({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===ed.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=jk(this,nb))?void 0:d.unassociateElement)||e.call(d,this),jm(this,nb,null)),c&&this.isConnected&&(jm(this,nb,eU(this)),null==(g=null==(f=jk(this,nb))?void 0:f.associateElement)||g.call(f,this))):a===js&&c!==b?null==c?this.enable():this.disable():a===jq&&c!==b&&jn(this,nn,no).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=e$(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ju)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&jn(this,nT,nU).call(this,b)}focus(){if(jm(this,nc,eZ()),this.items.length){jn(this,nR,nS).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=jn(this,nN,nO).call(this,a);c&&(jn(this,nT,nU).call(this,c,"checkbox"===c.type),jk(this,nd)&&!this.hidden&&(null==(b=jk(this,nc))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=jn(this,nN,nO).call(this,a))?b:jn(this,nP,nQ).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),jn(this,nR,nS).call(this,e[g]),e[g].focus()}}function ju(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function jv(a){var b;return null!=(b=a.getAttribute("bounds")?eY(a,`#${a.getAttribute("bounds")}`):eT(a)||a.parentElement)?b:a}nb=new WeakMap,nc=new WeakMap,nd=new WeakMap,ne=new WeakMap,nf=new WeakMap,ng=new WeakMap,nh=new WeakMap,ni=new WeakSet,nj=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&jn(this,nk,nl).call(this),b.name||jk(this,nm).call(this)},nk=new WeakSet,nl=function(){let a=this.shadowRoot.querySelector('slot[name="header"]');a.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===a.assignedNodes().length},nm=new WeakMap,nn=new WeakSet,no=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},np=new WeakSet,nq=function(a){jm(this,nd,a.relatedTarget),eX(this,a.relatedTarget)||(this.hidden=!this.hidden)},nr=new WeakSet,ns=function(){var a;null==(a=jk(this,nd))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),eQ(jv(this),jk(this,nv)),eQ(this,jk(this,nw))},nt=new WeakSet,nu=function(){var a;null==(a=jk(this,nd))||a.setAttribute("aria-expanded","false"),eR(jv(this),jk(this,nv)),eR(this,jk(this,nw))},nv=new WeakMap,nw=new WeakMap,nx=new WeakSet,ny=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(jg(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=jg(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){var c,d,e;let f,g;return{anchor:(c=a,d=b.offsetParent,f=c.getBoundingClientRect(),g=null!=(e=null==d?void 0:d.getBoundingClientRect())?e:{x:0,y:0},{x:f.x-g.x,y:f.y-g.y,width:f.width,height:f.height}),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=jv(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=jk(this,nh);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},nz=new WeakSet,nA=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=jk(this,nh);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),jn(this,nx,ny).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),jn(this,nx,ny).call(this);d.removeProperty("--media-menu-transition-in")},nB=new WeakSet,nC=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(jk(this,nD,nE))){null==(b=jk(this,nc))||b.focus(),this.hidden=!0;return}let c=jn(this,nN,nO).call(this,a);!c||c.hasAttribute("disabled")||(jn(this,nR,nS).call(this,c),this.handleSelect(a))},nD=new WeakSet,nE=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},nF=new WeakSet,nG=function(a){if(a.target===this)return;jn(this,nH,nI).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new jh({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);jn(this,nz,nA).call(this,!0)},nH=new WeakSet,nI=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},nJ=new WeakSet,nK=function(a){var b;eX(this,a.relatedTarget)||(jk(this,ng)&&(null==(b=jk(this,nc))||b.focus()),jk(this,nd)&&jk(this,nd)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},nL=new WeakSet,nM=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(jk(this,ng)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=jk(this,nc))||f.focus(),jk(this,ng)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},nN=new WeakSet,nO=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},nP=new WeakSet,nQ=function(){return this.items.find(a=>0===a.tabIndex)},nR=new WeakSet,nS=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},nT=new WeakSet,nU=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},jt.shadowRootOptions={mode:"open"},jt.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},eL.customElements.get("media-chrome-menu")||eL.customElements.define("media-chrome-menu",jt);var jw=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},jx=(a,b,c)=>(jw(a,b,"read from private field"),c?c.call(a):b.get(a)),jy=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jz=(a,b,c,d)=>(jw(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),jA=(a,b,c)=>(jw(a,b,"access private method"),c);let jB="type",jC="value",jD="checked",jE="disabled";class jF extends eL.HTMLElement{constructor(){if(super(),jy(this,nX),jy(this,nZ),jy(this,n_),jy(this,n4),jy(this,nV,!1),jy(this,nW,void 0),jy(this,n1,()=>{var a,b;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=eM.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),jy(this,n2,a=>{let{key:b}=a;this.keysUsed.includes(b)?this.handleClick(a):this.removeEventListener("keyup",jx(this,n2))}),jy(this,n3,a=>{let{metaKey:b,altKey:c,key:d}=a;b||c||!this.keysUsed.includes(d)?this.removeEventListener("keyup",jx(this,n2)):this.addEventListener("keyup",jx(this,n2),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=eS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[jB,jE,jD,jC]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),jG(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":jA(this,nX,nY).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":jx(this,n3).call(this,a);break;case"keyup":jx(this,n2).call(this,a)}}attributeChangedCallback(a,b,c){a===jD&&jG(this)&&!jx(this,nV)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===jB&&c!==b?this.role="menuitem"+c:a===jE&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(jE)||this.enable(),this.role="menuitem"+this.type,jz(this,nW,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),jA(this,n4,n5).call(this),this.submenuElement&&jA(this,nZ,n$).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),jA(this,n4,n5).call(this),jz(this,nW,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=e$(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(jB))?a:""}set type(a){this.setAttribute(jB,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(jC))?a:this.text}set value(a){this.setAttribute(jC,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(jG(this))return"true"===this.getAttribute("aria-checked")}set checked(a){jG(this)&&(jz(this,nV,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!jG(this)&&this.invokeTargetElement&&eX(this,a.target)&&this.invokeTargetElement.dispatchEvent(new jh({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function jG(a){return"radio"===a.type||"checkbox"===a.type}nV=new WeakMap,nW=new WeakMap,nX=new WeakSet,nY=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?jA(this,nZ,n$).call(this):jA(this,n_,n0).call(this))},nZ=new WeakSet,n$=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",jx(this,n1)),this.submenuElement.addEventListener("addmenuitem",jx(this,n1)),this.submenuElement.addEventListener("removemenuitem",jx(this,n1)),jx(this,n1).call(this)},n_=new WeakSet,n0=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",jx(this,n1)),this.submenuElement.removeEventListener("addmenuitem",jx(this,n1)),this.submenuElement.removeEventListener("removemenuitem",jx(this,n1)),jx(this,n1).call(this)},n1=new WeakMap,n2=new WeakMap,n3=new WeakMap,n4=new WeakSet,n5=function(){var a;let b=null==(a=jx(this,nW))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},jF.shadowRootOptions={mode:"open"},jF.getTemplateHTML=function(a){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(a)}
    </slot>
    <slot name="submenu"></slot>
  `},jF.getSuffixSlotInnerHTML=function(a){return""},eL.customElements.get("media-chrome-menu-item")||eL.customElements.define("media-chrome-menu-item",jF);class jH extends jt{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eT(this).querySelector("media-settings-menu-button")}}jH.getTemplateHTML=function(a){return`
    ${jt.getTemplateHTML(a)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},eL.customElements.get("media-settings-menu")||eL.customElements.define("media-settings-menu",jH);class jI extends jF{}jI.shadowRootOptions={mode:"open"},jI.getTemplateHTML=function(a){return`
    ${jF.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},jI.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},eL.customElements.get("media-settings-menu-item")||eL.customElements.define("media-settings-menu-item",jI);class jJ extends gO{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=e$(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new jh({relatedTarget:this}))}}eL.customElements.get("media-chrome-menu-button")||eL.customElements.define("media-chrome-menu-button",jJ);class jK extends jJ{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ez("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:eT(this).querySelector("media-settings-menu")}}jK.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},jK.getTooltipContentHTML=function(){return ez("Settings")},eL.customElements.get("media-settings-menu-button")||eL.customElements.define("media-settings-menu-button",jK);var jL=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},jM=(a,b,c)=>(jL(a,b,"read from private field"),c?c.call(a):b.get(a)),jN=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jO=(a,b,c,d)=>(jL(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),jP=(a,b,c)=>(jL(a,b,"access private method"),c);n6=new WeakMap,n7=new WeakMap,n8=new WeakSet,n9=function(){if(jM(this,n7)===JSON.stringify(this.mediaAudioTrackList))return;jO(this,n7,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a.sort((a,b)=>a.id.localeCompare(b.id,void 0,{numeric:!0})),a)){let a=jo({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(jp(this,"checked-indicator")),this.defaultSlot.append(a)}},oa=new WeakSet,ob=function(){if(null==this.value)return;let a=new eL.CustomEvent(ec.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},eL.customElements.get("media-audio-track-menu")||eL.customElements.define("media-audio-track-menu",class extends jt{constructor(){super(...arguments),jN(this,n8),jN(this,oa),jN(this,n6,[]),jN(this,n7,void 0)}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_AUDIO_TRACK_LIST,eg.MEDIA_AUDIO_TRACK_ENABLED,eg.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===eg.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===eg.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;jO(this,n6,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(et)),jP(this,n8,n9).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",jP(this,oa,ob))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",jP(this,oa,ob))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=eT(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return jM(this,n6)}set mediaAudioTrackList(a){jO(this,n6,a),jP(this,n8,n9).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=e6(this,eg.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){e7(this,eg.MEDIA_AUDIO_TRACK_ENABLED,a)}});let jQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,jR=a=>{let b=ez("Audio");a.setAttribute("aria-label",b)};class jS extends jJ{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_AUDIO_TRACK_ENABLED,eg.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),jR(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_LANG&&jR(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=eT(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=e6(this,eg.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){e7(this,eg.MEDIA_AUDIO_TRACK_ENABLED,a)}}jS.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${jQ}</slot>
  `},jS.getTooltipContentHTML=function(){return ez("Audio")},eL.customElements.get("media-audio-track-menu-button")||eL.customElements.define("media-audio-track-menu-button",jS);var jT=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},jU=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jV=(a,b,c)=>(jT(a,b,"access private method"),c);let jW=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class jX extends jt{constructor(){super(...arguments),jU(this,od),jU(this,of),jU(this,oc,void 0)}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_SUBTITLES_LIST,eg.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_SUBTITLES_LIST&&b!==c?jV(this,od,oe).call(this):a===eg.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c||"",jV(this,od,oe).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",jV(this,of,og))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",jV(this,of,og))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eT(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return jY(this,eg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){jZ(this,eg.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return jY(this,eg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){jZ(this,eg.MEDIA_SUBTITLES_SHOWING,a)}}oc=new WeakMap,od=new WeakSet,oe=function(){var a,b,c,d,e,f;let g=(jT(this,b=oc,"read from private field"),(c?c.call(this):b.get(this))!==JSON.stringify(this.mediaSubtitlesList)),h=this.value!==this.getAttribute(eg.MEDIA_SUBTITLES_SHOWING);if(!g&&!h)return;d=oc,e=JSON.stringify(this.mediaSubtitlesList),jT(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let i=!this.value,j=jo({type:"radio",text:this.formatMenuItemText(ez("Off")),value:"off",checked:i});for(let b of(j.prepend(jp(this,"checked-indicator")),this.defaultSlot.append(j),this.mediaSubtitlesList)){let c=jo({type:"radio",text:this.formatMenuItemText(b.label,b),value:fA(b),checked:this.value==fA(b)});c.prepend(jp(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(jp(this,"captions-indicator")),this.defaultSlot.append(c)}},of=new WeakSet,og=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(eg.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new eL.CustomEvent(ec.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new eL.CustomEvent(ec.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},jX.getTemplateHTML=function(a){return`
    ${jt.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${jW}</slot>
  `};let jY=(a,b)=>{let c=a.getAttribute(b);return c?fy(c):[]},jZ=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=fB(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};eL.customElements.get("media-captions-menu")||eL.customElements.define("media-captions-menu",jX);let j$=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,j_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,j0=a=>{a.setAttribute("data-captions-enabled",fF(a).toString())},j1=a=>{a.setAttribute("aria-label",ez("closed captions"))};class j2 extends jJ{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_SUBTITLES_LIST,eg.MEDIA_SUBTITLES_SHOWING,eg.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),j1(this),j0(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_SUBTITLES_SHOWING?j0(this):a===eg.MEDIA_LANG&&j1(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=eT(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return j3(this,eg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){j4(this,eg.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return j3(this,eg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){j4(this,eg.MEDIA_SUBTITLES_SHOWING,a)}}j2.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${j$}</slot>
      <slot name="off">${j_}</slot>
    </slot>
  `},j2.getTooltipContentHTML=function(){return ez("Captions")};let j3=(a,b)=>{let c=a.getAttribute(b);return c?fy(c):[]},j4=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=fB(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};eL.customElements.get("media-captions-menu-button")||eL.customElements.define("media-captions-menu-button",j2);var j5=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},j6=(a,b,c)=>(j5(a,b,"read from private field"),c?c.call(a):b.get(a)),j7=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},j8=(a,b,c)=>(j5(a,b,"access private method"),c);let j9="rates";oh=new WeakMap,oi=new WeakSet,oj=function(){this.defaultSlot.textContent="";let a=this.mediaPlaybackRate,b=new Set(Array.from(j6(this,oh)).map(a=>Number(a)));for(let c of(a>0&&!b.has(a)&&b.add(a),Array.from(b).sort((a,b)=>a-b))){let b=jo({type:"radio",text:this.formatMenuItemText(`${c}x`,c),value:c.toString(),checked:a===c});b.prepend(jp(this,"checked-indicator")),this.defaultSlot.append(b)}},ok=new WeakSet,ol=function(){if(!this.value)return;let a=new eL.CustomEvent(ec.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},eL.customElements.get("media-playback-rate-menu")||eL.customElements.define("media-playback-rate-menu",class extends jt{constructor(){super(),j7(this,oi),j7(this,ok),j7(this,oh,new fw(this,j9,{defaultValue:hZ})),j8(this,oi,oj).call(this)}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_PLAYBACK_RATE,j9]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===eg.MEDIA_PLAYBACK_RATE&&b!=c?(this.value=c,j8(this,oi,oj).call(this)):a===j9&&b!=c&&(j6(this,oh).value=c,j8(this,oi,oj).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",j8(this,ok,ol))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",j8(this,ok,ol))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eT(this).querySelector("media-playback-rate-menu-button")}get rates(){return j6(this,oh)}set rates(a){a?Array.isArray(a)?j6(this,oh).value=a.join(" "):"string"==typeof a&&(j6(this,oh).value=a):j6(this,oh).value="",j8(this,oi,oj).call(this)}get mediaPlaybackRate(){return e2(this,eg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){e3(this,eg.MEDIA_PLAYBACK_RATE,a)}});class ka extends jJ{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===eg.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",ez("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:eT(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return e2(this,eg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){e3(this,eg.MEDIA_PLAYBACK_RATE,a)}}ka.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},ka.getTooltipContentHTML=function(){return ez("Playback rate")},eL.customElements.get("media-playback-rate-menu-button")||eL.customElements.define("media-playback-rate-menu-button",ka);var kb=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},kc=(a,b,c)=>(kb(a,b,"read from private field"),c?c.call(a):b.get(a)),kd=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ke=(a,b,c,d)=>(kb(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),kf=(a,b,c)=>(kb(a,b,"access private method"),c);om=new WeakMap,on=new WeakMap,oo=new WeakSet,op=function(){if(kc(this,on).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&kc(this,on).mediaHeight===this.mediaHeight)return;kc(this,on).mediaRenditionList=JSON.stringify(this.mediaRenditionList),kc(this,on).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort(this.compareRendition.bind(this)),b=a.find(a=>a.id===this.mediaRenditionSelected);for(let c of a)c.selected=c===b;this.defaultSlot.textContent="";let c=!this.mediaRenditionSelected;for(let b of a){let a=jo({type:"radio",text:this.formatRendition(b,{showBitrate:this.showRenditionBitrate(b)}),value:`${b.id}`,checked:b.selected&&!c});a.prepend(jp(this,"checked-indicator")),this.defaultSlot.append(a)}let d=b&&this.showRenditionBitrate(b),e=c?b?this.formatMenuItemText(`${ez("Auto")} \u2022 ${this.formatRendition(b,{showBitrate:d})}`,b):this.formatMenuItemText(`${ez("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(ez("Auto")),f=jo({type:"radio",text:e,value:"auto",checked:c});f.dataset.description=e,f.prepend(jp(this,"checked-indicator")),this.defaultSlot.append(f)},oq=new WeakSet,or=function(){if(null==this.value)return;let a=new eL.CustomEvent(ec.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},eL.customElements.get("media-rendition-menu")||eL.customElements.define("media-rendition-menu",class extends jt{constructor(){super(...arguments),kd(this,oo),kd(this,oq),kd(this,om,[]),kd(this,on,{})}static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_RENDITION_LIST,eg.MEDIA_RENDITION_SELECTED,eg.MEDIA_RENDITION_UNAVAILABLE,eg.MEDIA_HEIGHT]}static formatMenuItemText(a,b){return super.formatMenuItemText(a,b)}static formatRendition(a,{showBitrate:b=!1}={}){let c=`${Math.min(a.width,a.height)}p`;if(b&&a.bitrate){let b=a.bitrate/1e6,d=`${b.toFixed(+(b<1))} Mbps`;return`${c} (${d})`}return this.formatMenuItemText(c,a)}static compareRendition(a,b){var c,d;return b.height===a.height?(null!=(c=b.bitrate)?c:0)-(null!=(d=a.bitrate)?d:0):b.height-a.height}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===eg.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",kf(this,oo,op).call(this);else if(a===eg.MEDIA_RENDITION_LIST&&b!==c)ke(this,om,null==c?void 0:c.split(/\s+/).map(er)),kf(this,oo,op).call(this);else a===eg.MEDIA_HEIGHT&&b!==c&&kf(this,oo,op).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",kf(this,oq,or))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",kf(this,oq,or))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eT(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return kc(this,om)}set mediaRenditionList(a){ke(this,om,a),kf(this,oo,op).call(this)}get mediaRenditionSelected(){return e6(this,eg.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){e7(this,eg.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return e2(this,eg.MEDIA_HEIGHT)}set mediaHeight(a){e3(this,eg.MEDIA_HEIGHT,a)}compareRendition(a,b){return this.constructor.compareRendition(a,b)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}formatRendition(a,b){return this.constructor.formatRendition(a,b)}showRenditionBitrate(a){return this.mediaRenditionList.some(b=>b!==a&&b.height===a.height&&b.bitrate!==a.bitrate)}});let kg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class kh extends jJ{static get observedAttributes(){return[...super.observedAttributes,eg.MEDIA_RENDITION_SELECTED,eg.MEDIA_RENDITION_UNAVAILABLE,eg.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ez("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:eT(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return e6(this,eg.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){e7(this,eg.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return e2(this,eg.MEDIA_HEIGHT)}set mediaHeight(a){e3(this,eg.MEDIA_HEIGHT,a)}}kh.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${kg}</slot>
  `},kh.getTooltipContentHTML=function(){return ez("Quality")},eL.customElements.get("media-rendition-menu-button")||eL.customElements.define("media-rendition-menu-button",kh);var ki=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},kj=(a,b,c)=>(ki(a,b,"read from private field"),c?c.call(a):b.get(a)),kk=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},kl=(a,b,c,d)=>(ki(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),km=(a,b,c)=>(ki(a,b,"access private method"),c);class kn extends jt{constructor(){super(),kk(this,ot),kk(this,ov),kk(this,ox),kk(this,oz),kk(this,oC),kk(this,os,!1),kk(this,oB,a=>{let b=a.target,c=(null==b?void 0:b.nodeName)==="VIDEO",d=km(this,oz,oA).call(this,b);(c||d)&&(kj(this,os)?km(this,ov,ow).call(this):km(this,oC,oD).call(this,a))}),kk(this,oE,a=>{let b=a.target,c=this.contains(b),d=2===a.button,e=(null==b?void 0:b.nodeName)==="VIDEO",f=km(this,oz,oA).call(this,b);c||d&&(e||f)||km(this,ov,ow).call(this)}),kk(this,oF,a=>{"Escape"===a.key&&km(this,ov,ow).call(this)}),kk(this,oG,a=>{var b,c;let d=a.target;if(null==(b=d.matches)?void 0:b.call(d,'button[invoke="copy"]')){let a=null==(c=d.closest("media-context-menu-item"))?void 0:c.querySelector('input[slot="copy"]');a&&navigator.clipboard.writeText(a.value)}km(this,ov,ow).call(this)}),this.setAttribute("noautohide",""),km(this,ot,ou).call(this)}connectedCallback(){super.connectedCallback(),eT(this).addEventListener("contextmenu",kj(this,oB)),this.addEventListener("click",kj(this,oG))}disconnectedCallback(){super.disconnectedCallback(),eT(this).removeEventListener("contextmenu",kj(this,oB)),this.removeEventListener("click",kj(this,oG)),document.removeEventListener("mousedown",kj(this,oE)),document.removeEventListener("keydown",kj(this,oF))}}os=new WeakMap,ot=new WeakSet,ou=function(){this.hidden=!kj(this,os)},ov=new WeakSet,ow=function(){kl(this,os,!1),km(this,ot,ou).call(this)},ox=new WeakSet,oy=function(){document.querySelectorAll("media-context-menu").forEach(a=>{a!==this&&km(a,ov,ow).call(a)})},oz=new WeakSet,oA=function(a){return!!a&&(!!a.hasAttribute("slot")&&"media"===a.getAttribute("slot")||!!(a.nodeName.includes("-")&&a.tagName.includes("-"))&&(a.hasAttribute("src")||a.hasAttribute("poster")||a.hasAttribute("preload")||a.hasAttribute("playsinline")))},oB=new WeakMap,oC=new WeakSet,oD=function(a){a.preventDefault(),km(this,ox,oy).call(this),kl(this,os,!0),this.style.position="fixed",this.style.left=`${a.clientX}px`,this.style.top=`${a.clientY}px`,km(this,ot,ou).call(this),document.addEventListener("mousedown",kj(this,oE),{once:!0}),document.addEventListener("keydown",kj(this,oF),{once:!0})},oE=new WeakMap,oF=new WeakMap,oG=new WeakMap,kn.getTemplateHTML=function(a){return`
      ${jt.getTemplateHTML(a)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},eL.customElements.get("media-context-menu")||eL.customElements.define("media-context-menu",kn);class ko extends jF{}ko.shadowRootOptions={mode:"open"},ko.getTemplateHTML=function(a){return`
    ${jF.getTemplateHTML.call(this,a)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},eL.customElements.get("media-context-menu-item")||eL.customElements.define("media-context-menu-item",ko);var kp=a=>{throw TypeError(a)},kq=(a,b,c)=>b.has(a)||kp("Cannot "+c),kr=(a,b,c)=>(kq(a,b,"read from private field"),c?c.call(a):b.get(a)),ks=(a,b,c)=>b.has(a)?kp("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),kt=(a,b,c,d)=>(kq(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),ku=(a,b,c)=>(kq(a,b,"access private method"),c),kv=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends kv{});var kw,kx,ky,kz,kA,kB,kC,kD,kE,kF,kG,kH,kI,kJ,kK,kL,kM,kN,kO,kP,kQ,kR,kS,kT,kU,kV,kW,kX,kY,kZ,k$,k_,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,la,lb,lc,ld,le,lf,lg,lh,li,lj,lk,ll,lm,ln,lo,lp,lq,lr,ls,lt,lu,lv,lw,lx,ly,lz,lA,lB,lC,lD,lE,lF,lG,lH,lI,lJ,lK,lL,lM,lN,lO,lP,lQ,lR,lS,lT,lU,lV,lW,lX,lY,lZ,l$,l_,l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,ma,mb,mc,md,me,mf,mg,mh,mi,mj,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,mA,mB,mC,mD,mE,mF,mG,mH,mI,mJ,mK,mL,mM,mN,mO,mP,mQ,mR,mS,mT,mU,mV,mW,mX,mY,mZ,m$,m_,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,na,nb,nc,nd,ne,nf,ng,nh,ni,nj,nk,nl,nm,nn,no,np,nq,nr,ns,nt,nu,nv,nw,nx,ny,nz,nA,nB,nC,nD,nE,nF,nG,nH,nI,nJ,nK,nL,nM,nN,nO,nP,nQ,nR,nS,nT,nU,nV,nW,nX,nY,nZ,n$,n_,n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,oa,ob,oc,od,oe,of,og,oh,oi,oj,ok,ol,om,on,oo,op,oq,or,os,ot,ou,ov,ow,ox,oy,oz,oA,oB,oC,oD,oE,oF,oG,oH,oI=class extends kv{},oJ=class{constructor(a,b={}){ks(this,oH),kt(this,oH,null==b?void 0:b.detail)}get detail(){return kr(this,oH)}initCustomEvent(){}};oH=new WeakMap;var oK={document:{createElement:function(a,b){return new oI}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(oI)},CustomEvent:oJ,EventTarget:kv,HTMLElement:oI,HTMLVideoElement:class extends kv{}},oL=oK,oM=oK.document;function oN(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function oO(a){return a.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase())}function oP(a){if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}function oQ(a){let b=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})(a).toString();return b?"?"+b:""}var oR,oS,oT,oU=(a,b)=>!!a&&!!b&&(!!a.contains(b)||oU(a,b.getRootNode().host)),oV="mux.com",oW=(()=>{try{return"3.11.7"}catch{}return"UNKNOWN"})(),oX=a=>{if(a){if([bT,bS].includes(a))return a;if(null!=a&&a.includes("live"))return bT}},oY={crossorigin:"crossOrigin",playsinline:"playsInline"},oZ=class{constructor(a,b){ks(this,oR),ks(this,oS),ks(this,oT,[]),kt(this,oR,a),kt(this,oS,b)}[Symbol.iterator](){return kr(this,oT).values()}get length(){return kr(this,oT).length}get value(){var a;return null!=(a=kr(this,oT).join(" "))?a:""}set value(a){var b;a!==this.value&&(kt(this,oT,[]),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return kr(this,oT)[a]}values(){return kr(this,oT).values()}keys(){return kr(this,oT).keys()}forEach(a){kr(this,oT).forEach(a)}add(...a){var b,c;a.forEach(a=>{this.contains(a)||kr(this,oT).push(a)}),(""!==this.value||null!=(b=kr(this,oR))&&b.hasAttribute(`${kr(this,oS)}`))&&null!=(c=kr(this,oR))&&c.setAttribute(`${kr(this,oS)}`,`${this.value}`)}remove(...a){var b;a.forEach(a=>{kr(this,oT).splice(kr(this,oT).indexOf(a),1)}),null==(b=kr(this,oR))||b.setAttribute(`${kr(this,oS)}`,`${this.value}`)}contains(a){return kr(this,oT).includes(a)}toggle(a,b){return void 0!==b?b?(this.add(a),!0):(this.remove(a),!1):this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){this.remove(a),this.add(b)}};oR=new WeakMap,oS=new WeakMap,oT=new WeakMap;var o$=`[mux-player ${oW}]`;function o_(...a){console.warn(o$,...a)}function o0(...a){console.error(o$,...a)}function o1(a){var b;let c=null!=(b=a.message)?b:"";a.context&&(c+=` ${a.context}`),a.file&&(c+=` ${b8("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${a.file}`),o_(c)}var o2={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},o3={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},o4=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),o5=[...Object.values(o2).filter(a=>o2.PLAYSINLINE!==a),...Object.values(o3)];function o6(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}var o7=class extends oL.HTMLElement{static get observedAttributes(){return o5}constructor(){super()}attributeChangedCallback(a,b,c){var d,e;switch(a){case o3.MUTED:this.media&&(this.media.muted=null!=c,this.media.defaultMuted=null!=c);return;case o3.VOLUME:{let a=null!=(d=oP(c))?d:1;this.media&&(this.media.volume=a);return}case o3.PLAYBACKRATE:{let a=null!=(e=oP(c))?e:1;this.media&&(this.media.playbackRate=a,this.media.defaultPlaybackRate=a);return}}}play(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.play())?b:Promise.reject()}pause(){var a;null==(a=this.media)||a.pause()}load(){var a;null==(a=this.media)||a.load()}get media(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var a,b;return null==(b=null==(a=this.media)?void 0:a.paused)||b}get duration(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.duration)?b:NaN}get ended(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.ended)&&b}get buffered(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.buffered)?b:o4}get seekable(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.seekable)?b:o4}get readyState(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.readyState)?b:0}get videoWidth(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoWidth)?b:0}get videoHeight(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoHeight)?b:0}get currentSrc(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentSrc)?b:""}get currentTime(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentTime)?b:0}set currentTime(a){this.media&&(this.media.currentTime=Number(a))}get volume(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.volume)?b:1}set volume(a){this.media&&(this.media.volume=Number(a))}get playbackRate(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.playbackRate)?b:1}set playbackRate(a){this.media&&(this.media.playbackRate=Number(a))}get defaultPlaybackRate(){var a;return null!=(a=oP(this.getAttribute(o3.PLAYBACKRATE)))?a:1}set defaultPlaybackRate(a){null!=a?this.setAttribute(o3.PLAYBACKRATE,`${a}`):this.removeAttribute(o3.PLAYBACKRATE)}get crossOrigin(){return o6(this,o2.CROSSORIGIN)}set crossOrigin(a){this.setAttribute(o2.CROSSORIGIN,`${a}`)}get autoplay(){return null!=o6(this,o2.AUTOPLAY)}set autoplay(a){a?this.setAttribute(o2.AUTOPLAY,"string"==typeof a?a:""):this.removeAttribute(o2.AUTOPLAY)}get loop(){return null!=o6(this,o2.LOOP)}set loop(a){a?this.setAttribute(o2.LOOP,""):this.removeAttribute(o2.LOOP)}get muted(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.muted)&&b}set muted(a){this.media&&(this.media.muted=!!a)}get defaultMuted(){return null!=o6(this,o2.MUTED)}set defaultMuted(a){a?this.setAttribute(o2.MUTED,""):this.removeAttribute(o2.MUTED)}get playsInline(){return null!=o6(this,o2.PLAYSINLINE)}set playsInline(a){o0("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(a){["","none","metadata","auto"].includes(a)?this.setAttribute(o2.PRELOAD,a):this.removeAttribute(o2.PRELOAD)}},o8=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,o9=new WeakMap,pa=class a{constructor(a,b){this.element=a,this.type=b,this.element.addEventListener(this.type,this);let c=o9.get(this.element);c&&c.set(this.type,this)}set(a){if("function"==typeof a)this.handleEvent=a.bind(this.element);else if("object"==typeof a&&"function"==typeof a.handleEvent)this.handleEvent=a.handleEvent.bind(a);else{this.element.removeEventListener(this.type,this);let a=o9.get(this.element);a&&a.delete(this.type)}}static for(b){o9.has(b.element)||o9.set(b.element,new Map);let c=b.attributeName.slice(2),d=o9.get(b.element);return d&&d.has(c)?d.get(c):new a(b.element,c)}},pb=new Map,pc=new WeakMap,pd=new WeakMap,pe=class{constructor(a,b,c){this.strings=a,this.values=b,this.processor=c,this.stringsKey=this.strings.join("\x01")}get template(){if(pb.has(this.stringsKey))return pb.get(this.stringsKey);{let a=oM.createElement("template"),b=this.strings.length-1;return a.innerHTML=this.strings.reduce((a,c,d)=>a+c+(d<b?`{{ ${d} }}`:""),""),pb.set(this.stringsKey,a),a}}renderInto(a){var b;let c=this.template;if(pc.get(a)!==c){pc.set(a,c);let b=new iN(c,this.values,this.processor);pd.set(a,b),a instanceof iV?a.replace(...b.children):a.appendChild(b);return}let d=pd.get(a);null==(b=null==d?void 0:d.update)||b.call(d,this.values)}},pf={processCallback(a,b,c){var d;if(c)for(let[a,e]of b)a in c&&function(a,b){(function(a,b){if(a instanceof iU&&b instanceof Element){let c=a.element;return c[a.attributeName]!==b&&(a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),c[a.attributeName]=b),!0}return!1})(a,b)||function(a,b){if("boolean"==typeof b&&a instanceof iU){let c=a.attributeNamespace;return b!==a.element.hasAttributeNS(c,a.attributeName)&&(a.booleanValue=b),!0}return!1}(a,b)||a instanceof iU&&a.attributeName.startsWith("on")&&(pa.for(a).set(b),a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),1)||!1===b&&a instanceof iV&&(a.replace(""),1)||b instanceof pe&&a instanceof iV&&(b.renderInto(a),1)||b instanceof DocumentFragment&&a instanceof iV&&(b.childNodes.length&&a.replace(...b.childNodes),1)||function(a,b){if(a instanceof iU){let c=a.attributeNamespace,d=a.element.getAttributeNS(c,a.attributeName);return String(b)!==d&&(a.value=String(b))}a.value=String(b)}(a,b)}(e,null!=(d=c[a])?d:"")}};function pg(a,...b){return new pe(a,b,pf)}var ph=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),pi=a=>a.charAt(0).toUpperCase()+a.slice(1),pj=(a,b)=>{let c=(a=>{if(a.muxCode){if(2403210===a.muxCode)return"403-expired-token.md";if(2412202===a.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(a.muxCode))return"403-incorrect-aud-value.md";if(2403232===a.muxCode)return"403-playback-id-mismatch.md";if(2403201===a.muxCode)return"missing-signed-tokens.md";if(2404e3===a.muxCode)return"404-not-found.md";if(2412e3===a.muxCode)return"412-not-playable.md"}if(a.code){if(a.code===bP.MEDIA_ERR_NETWORK)return"";if(a.code===bP.MEDIA_ERR_DECODE)return"media-decode-error.md";if(a.code===bP.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(a);return{message:a.message,context:a.context,file:c}},pk=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,pl=oM.createElement("template");"innerHTML"in pl&&(pl.innerHTML=pk);var pm,pn,po=class extends je{};po.template=null==(pn=null==(pm=pl.content)?void 0:pm.children)?void 0:pn[0],oL.customElements.get("media-theme-gerwig")||oL.customElements.define("media-theme-gerwig",po);var pp={SRC:"src",POSTER:"poster"},pq={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},pr=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],ps=hs.formatErrorMessage;function pt(a){let b=a.videoTitle?{video_title:a.videoTitle}:{};return a.getAttributeNames().filter(a=>a.startsWith("metadata-")).reduce((b,c)=>{let d=a.getAttribute(c);return null!==d&&(b[c.replace(/^metadata-/,"").replace(/-/g,"_")]=d),b},b)}hs.formatErrorMessage=a=>{var b,c;if(a instanceof bP){let d=((a,b=!1)=>({title:((a,b=!1)=>{var c,d;if(a.muxCode){let e=pi(null!=(c=a.errorCategory)?c:"video"),f=bO(null!=(d=a.errorCategory)?d:bN);if(2000002===a.muxCode)return b8("Your device appears to be offline",b);if(2403210===a.muxCode)return b8("{category} URL has expired",b).format({category:e});if([2403232,2403222,2403221,2412202].includes(a.muxCode))return b8("{category} URL is formatted incorrectly",b).format({category:e});if(2403201===a.muxCode)return b8("Invalid {categoryName} URL",b).format({categoryName:f});if(2404e3===a.muxCode)return b8("{category} does not exist",b).format({category:e});if(2412e3===a.muxCode){let c="live"===a.streamType?"Live stream":"Video";return b8("{mediaType} is not currently available",b).format({mediaType:c})}}if(a.code){if(a.code===bP.MEDIA_ERR_NETWORK)return b8("Network Error",b);if(a.code===bP.MEDIA_ERR_DECODE)return b8("Media Error",b);if(a.code===bP.MEDIA_ERR_SRC_NOT_SUPPORTED)return b8("Source Not Supported",b)}return b8("Error",b)})(a,b).toString(),message:((a,b=!1)=>{var c,d;if(a.muxCode){let e=pi(null!=(c=a.errorCategory)?c:"video"),f=bO(null!=(d=a.errorCategory)?d:bN);return 2000002===a.muxCode?b8("Check your internet connection and try reloading this video.",b):2403210===a.muxCode?b8("The video’s secured {tokenNamePrefix}-token has expired.",b).format({tokenNamePrefix:f}):2403232===a.muxCode?b8("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",b).format({tokenNamePrefix:f}):2412202===a.muxCode?b8("{category} URL is formatted incorrectly",b).format({category:e}):[2403222,2403221].includes(a.muxCode)?b8("The {tokenNamePrefix}-token is formatted with incorrect information.",b).format({tokenNamePrefix:f}):[2403201,24e5].includes(a.muxCode)?b8("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",b).format({tokenNamePrefix:f}):2404e3===a.muxCode?"":a.message}return a.code&&(a.code===bP.MEDIA_ERR_NETWORK||a.code===bP.MEDIA_ERR_DECODE||a.code===bP.MEDIA_ERR_SRC_NOT_SUPPORTED),a.message})(a,b).toString()}))(a,!1);return`
      ${null!=d&&d.title?`<h3>${d.title}</h3>`:""}
      ${null!=d&&d.message||null!=d&&d.linkUrl?`<p>
        ${null==d?void 0:d.message}
        ${null!=d&&d.linkUrl?`<a
              href="${d.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(b=d.linkText)?b:""} ${b8("(opens in a new window)")}"
              >${null!=(c=d.linkText)?c:d.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return ps(a)};var pu,pv,pw,px,py,pz,pA,pB,pC,pD,pE,pF,pG,pH,pI,pJ,pK,pL,pM,pN,pO,pP=Object.values(dG),pQ=Object.values(pp),pR=Object.values(pq),pS="mux-player",pT={isDialogOpen:!1},pU={redundant_streams:!0},pV=class extends o7{constructor(){super(),ks(this,pG),ks(this,pu),ks(this,pv,!1),ks(this,pw,{}),ks(this,px,!0),ks(this,py,new oZ(this,"hotkeys")),ks(this,pz),ks(this,pA,()=>ku(this,pG,pK).call(this)),ks(this,pB,()=>ku(this,pG,pK).call(this)),ks(this,pC,()=>ku(this,pG,pK).call(this)),ks(this,pD),ks(this,pE,{...pT,onCloseErrorDialog:a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&ku(this,pG,pJ).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&(oU(this,oM.activeElement)||a.preventDefault())}}),ks(this,pF,a=>{var b;let c=null==(b=this.media)?void 0:b.error;if(!(c instanceof bP)){let{message:a,code:b}=null!=c?c:{};c=new bP(a,b)}if(!(null!=c&&c.fatal)){o_(c),c.data&&o_(`${c.name} data:`,c.data);return}let d=pj(c,!1);d.message&&o1(d),o0(c),c.data&&o0(`${c.name} data:`,c.data),ku(this,pG,pJ).call(this,{isDialogOpen:!0})}),kt(this,pu,cP()),this.attachShadow({mode:"open"}),ku(this,pG,pI).call(this),this.isConnected&&ku(this,pG,pH).call(this)}static get NAME(){return pS}static get VERSION(){return oW}static get observedAttributes(){var a;return[...null!=(a=o7.observedAttributes)?a:[],...pQ,...pP,...pR]}get mediaTheme(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("media-theme")}get mediaController(){var a,b;return null==(b=null==(a=this.mediaTheme)?void 0:a.shadowRoot)?void 0:b.querySelector("media-controller")}connectedCallback(){ku(this,pG,pH).call(this);let a=this.media;a&&(a.metadata=pt(this))}disconnectedCallback(){var a,b,c,d,e,f,g,h;null==(a=kr(this,pz))||a.disconnect(),null==(b=this.media)||b.removeEventListener("streamtypechange",kr(this,pA)),null==(c=this.media)||c.removeEventListener("loadstart",kr(this,pB)),this.removeEventListener("error",kr(this,pF)),this.media&&(this.media.errorTranslator=void 0),null==(e=null==(d=this.media)?void 0:d.textTracks)||e.removeEventListener("addtrack",kr(this,pC)),null==(g=null==(f=this.media)?void 0:f.textTracks)||g.removeEventListener("removetrack",kr(this,pC)),null==(h=kr(this,pD))||h.call(this),kt(this,pD,void 0),kt(this,pv,!1)}attributeChangedCallback(a,b,c){var d;switch(ku(this,pG,pH).call(this),super.attributeChangedCallback(a,b,c),a){case pq.HOTKEYS:kr(this,py).value=c;break;case pq.THUMBNAIL_TIME:null!=c&&this.tokens.thumbnail&&o_(b8("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case pq.THUMBNAIL_TOKEN:if(c){let a=b7(c);if(a){let{aud:b}=a;"t"!==b&&o_(b8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case pq.STORYBOARD_TOKEN:if(c){let a=b7(c);if(a){let{aud:b}=a;"s"!==b&&o_(b8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case pq.DRM_TOKEN:if(c){let a=b7(c);if(a){let{aud:b}=a;"d"!==b&&o_(b8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case dG.PLAYBACK_ID:null!=c&&c.includes("?token")&&o0(b8("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:c}));break;case dG.STREAM_TYPE:c&&![bT,bS,bU].includes(c)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=c.includes("dvr")?1/0:0:o1({file:"invalid-stream-type.md",message:b8("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):c===bT?null==this.getAttribute(pq.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case pq.FULLSCREEN_ELEMENT:if(null!=c||c!==b){let a=oM.getElementById(c),b=null==a?void 0:a.querySelector("mux-player");this.mediaController&&a&&b&&(this.mediaController.fullscreenElement=a)}break;case dG.CAP_RENDITION_TO_PLAYER_SIZE:(null==c||c!==b)&&(this.capRenditionToPlayerSize=null!=c||void 0)}[dG.PLAYBACK_ID,pp.SRC,pq.PLAYBACK_TOKEN].includes(a)&&b!==c&&kt(this,pE,{...kr(this,pE),...pT}),ku(this,pG,pK).call(this,{[null!=(d=oY[a])?d:oO(a)]:c})}async requestFullscreen(a){var b;if(!(!this.mediaController||this.mediaController.hasAttribute(eg.MEDIA_IS_FULLSCREEN)))return null==(b=this.mediaController)||b.dispatchEvent(new oL.CustomEvent(ec.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(eh.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var a;if(!(!this.mediaController||!this.mediaController.hasAttribute(eg.MEDIA_IS_FULLSCREEN)))return null==(a=this.mediaController)||a.dispatchEvent(new oL.CustomEvent(ec.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(eh.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}get preferCmcd(){var a;return null!=(a=this.getAttribute(dG.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?bX.includes(a)?this.setAttribute(dG.PREFER_CMCD,a):o_(`Invalid value for preferCmcd. Must be one of ${bX.join()}`):this.removeAttribute(dG.PREFER_CMCD))}get hasPlayed(){var a,b;return null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(eg.MEDIA_HAS_PLAYED))&&b}get inLiveWindow(){var a;return null==(a=this.mediaController)?void 0:a.hasAttribute(eg.MEDIA_TIME_IS_LIVE)}get _hls(){var a;return null==(a=this.media)?void 0:a._hls}get mux(){var a;return null==(a=this.media)?void 0:a.mux}get theme(){var a;return null!=(a=this.getAttribute(pq.THEME))?a:"gerwig"}set theme(a){this.setAttribute(pq.THEME,`${a}`)}get themeProps(){let a=this.mediaTheme;if(!a)return;let b={};for(let c of a.getAttributeNames()){if(pr.includes(c))continue;let d=a.getAttribute(c);b[oO(c)]=""===d||d}return b}set themeProps(a){var b,c;ku(this,pG,pH).call(this);let d={...this.themeProps,...a};for(let e in d){if(pr.includes(e))continue;let d=null==a?void 0:a[e];"boolean"==typeof d||null==d?null==(b=this.mediaTheme)||b.toggleAttribute(oN(e),!!d):null==(c=this.mediaTheme)||c.setAttribute(oN(e),d)}}get playbackId(){var a;return null!=(a=this.getAttribute(dG.PLAYBACK_ID))?a:void 0}set playbackId(a){a?this.setAttribute(dG.PLAYBACK_ID,a):this.removeAttribute(dG.PLAYBACK_ID)}get src(){var a,b;return this.playbackId?null!=(a=pW(this,pp.SRC))?a:void 0:null!=(b=this.getAttribute(pp.SRC))?b:void 0}set src(a){a?this.setAttribute(pp.SRC,a):this.removeAttribute(pp.SRC)}get poster(){var a;let b=this.getAttribute(pp.POSTER);if(null!=b)return b;let{tokens:c}=this;return c.playback&&!c.thumbnail?void o_("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((a,{token:b,customDomain:c=oV,thumbnailTime:d,programTime:e}={})=>{var f;let g=null==b?d:void 0,{aud:h}=null!=(f=b7(b))?f:{};if(!(b&&"t"!==h))return`https://image.${c}/${a}/thumbnail.webp${oQ({token:b,time:g,program_time:e})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(a=this.thumbnailTime)?a:this.startTime,programTime:this.programStartTime,token:c.thumbnail}):void 0}set poster(a){a||""===a?this.setAttribute(pp.POSTER,a):this.removeAttribute(pp.POSTER)}get storyboardSrc(){var a;return null!=(a=this.getAttribute(pq.STORYBOARD_SRC))?a:void 0}set storyboardSrc(a){a?this.setAttribute(pq.STORYBOARD_SRC,a):this.removeAttribute(pq.STORYBOARD_SRC)}get storyboard(){let{tokens:a}=this;return this.storyboardSrc&&!a.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[bT,bU].includes(this.streamType)||a.playback&&!a.storyboard?void 0:((a,{token:b,customDomain:c=oV,programStartTime:d,programEndTime:e}={})=>{var f;let{aud:g}=null!=(f=b7(b))?f:{};if(!(b&&"s"!==g))return`https://image.${c}/${a}/storyboard.vtt${oQ({token:b,format:"webp",program_start_time:d,program_end_time:e})}`})(this.playbackId,{customDomain:this.customDomain,token:a.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(pq.AUDIO)}set audio(a){a?this.setAttribute(pq.AUDIO,""):this.removeAttribute(pq.AUDIO)}get hotkeys(){return kr(this,py)}get nohotkeys(){return this.hasAttribute(pq.NOHOTKEYS)}set nohotkeys(a){a?this.setAttribute(pq.NOHOTKEYS,""):this.removeAttribute(pq.NOHOTKEYS)}get thumbnailTime(){return oP(this.getAttribute(pq.THUMBNAIL_TIME))}set thumbnailTime(a){this.setAttribute(pq.THUMBNAIL_TIME,`${a}`)}get videoTitle(){var a,b;return null!=(b=null!=(a=this.getAttribute(pq.VIDEO_TITLE))?a:this.getAttribute(pq.TITLE))?b:""}set videoTitle(a){a!==this.videoTitle&&(a?this.setAttribute(pq.VIDEO_TITLE,a):this.removeAttribute(pq.VIDEO_TITLE))}get placeholder(){var a;return null!=(a=pW(this,pq.PLACEHOLDER))?a:""}set placeholder(a){this.setAttribute(pq.PLACEHOLDER,`${a}`)}get primaryColor(){var a,b;let c=this.getAttribute(pq.PRIMARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=oL.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_primary-color"))?void 0:b.trim()))return c}set primaryColor(a){this.setAttribute(pq.PRIMARY_COLOR,`${a}`)}get secondaryColor(){var a,b;let c=this.getAttribute(pq.SECONDARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=oL.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_secondary-color"))?void 0:b.trim()))return c}set secondaryColor(a){this.setAttribute(pq.SECONDARY_COLOR,`${a}`)}get accentColor(){var a,b;let c=this.getAttribute(pq.ACCENT_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=oL.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_accent-color"))?void 0:b.trim()))return c}set accentColor(a){this.setAttribute(pq.ACCENT_COLOR,`${a}`)}get defaultShowRemainingTime(){return this.hasAttribute(pq.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(a){a?this.setAttribute(pq.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(pq.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(pq.PLAYBACK_RATES))return this.getAttribute(pq.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(a=>Number(a)).filter(a=>!Number.isNaN(a)).sort((a,b)=>a-b)}set playbackRates(a){a?this.setAttribute(pq.PLAYBACK_RATES,a.join(" ")):this.removeAttribute(pq.PLAYBACK_RATES)}get forwardSeekOffset(){var a;return null!=(a=oP(this.getAttribute(pq.FORWARD_SEEK_OFFSET)))?a:10}set forwardSeekOffset(a){this.setAttribute(pq.FORWARD_SEEK_OFFSET,`${a}`)}get backwardSeekOffset(){var a;return null!=(a=oP(this.getAttribute(pq.BACKWARD_SEEK_OFFSET)))?a:10}set backwardSeekOffset(a){this.setAttribute(pq.BACKWARD_SEEK_OFFSET,`${a}`)}get defaultHiddenCaptions(){return this.hasAttribute(pq.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(a){a?this.setAttribute(pq.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(pq.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return oP(this.getAttribute(pq.DEFAULT_DURATION))}set defaultDuration(a){null==a?this.removeAttribute(pq.DEFAULT_DURATION):this.setAttribute(pq.DEFAULT_DURATION,`${a}`)}get playerInitTime(){return this.hasAttribute(dG.PLAYER_INIT_TIME)?oP(this.getAttribute(dG.PLAYER_INIT_TIME)):kr(this,pu)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(dG.PLAYER_INIT_TIME):this.setAttribute(dG.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=this.getAttribute(dG.PLAYER_SOFTWARE_NAME))?a:pS}get playerSoftwareVersion(){var a;return null!=(a=this.getAttribute(dG.PLAYER_SOFTWARE_VERSION))?a:oW}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(dG.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(dG.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(dG.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var a;return null!=(a=this.getAttribute(dG.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(dG.MAX_RESOLUTION,a):this.removeAttribute(dG.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(dG.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(dG.MIN_RESOLUTION,a):this.removeAttribute(dG.MIN_RESOLUTION))}get maxAutoResolution(){var a;return null!=(a=this.getAttribute(dG.MAX_AUTO_RESOLUTION))?a:void 0}set maxAutoResolution(a){null==a?this.removeAttribute(dG.MAX_AUTO_RESOLUTION):this.setAttribute(dG.MAX_AUTO_RESOLUTION,a)}get renditionOrder(){var a;return null!=(a=this.getAttribute(dG.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(dG.RENDITION_ORDER,a):this.removeAttribute(dG.RENDITION_ORDER))}get programStartTime(){return oP(this.getAttribute(dG.PROGRAM_START_TIME))}set programStartTime(a){null==a?this.removeAttribute(dG.PROGRAM_START_TIME):this.setAttribute(dG.PROGRAM_START_TIME,`${a}`)}get programEndTime(){return oP(this.getAttribute(dG.PROGRAM_END_TIME))}set programEndTime(a){null==a?this.removeAttribute(dG.PROGRAM_END_TIME):this.setAttribute(dG.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){return oP(this.getAttribute(dG.ASSET_START_TIME))}set assetStartTime(a){null==a?this.removeAttribute(dG.ASSET_START_TIME):this.setAttribute(dG.ASSET_START_TIME,`${a}`)}get assetEndTime(){return oP(this.getAttribute(dG.ASSET_END_TIME))}set assetEndTime(a){null==a?this.removeAttribute(dG.ASSET_END_TIME):this.setAttribute(dG.ASSET_END_TIME,`${a}`)}get extraSourceParams(){return this.hasAttribute(pq.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(pq.EXTRA_SOURCE_PARAMS)).entries()].reduce((a,[b,c])=>(a[b]=c,a),{}):pU}set extraSourceParams(a){null==a?this.removeAttribute(pq.EXTRA_SOURCE_PARAMS):this.setAttribute(pq.EXTRA_SOURCE_PARAMS,new URLSearchParams(a).toString())}get customDomain(){var a;return null!=(a=this.getAttribute(dG.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(dG.CUSTOM_DOMAIN,a):this.removeAttribute(dG.CUSTOM_DOMAIN))}get envKey(){var a;return null!=(a=pW(this,dG.ENV_KEY))?a:void 0}set envKey(a){this.setAttribute(dG.ENV_KEY,`${a}`)}get noVolumePref(){return this.hasAttribute(pq.NO_VOLUME_PREF)}set noVolumePref(a){a?this.setAttribute(pq.NO_VOLUME_PREF,""):this.removeAttribute(pq.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(pq.NO_MUTED_PREF)}set noMutedPref(a){a?this.setAttribute(pq.NO_MUTED_PREF,""):this.removeAttribute(pq.NO_MUTED_PREF)}get debug(){return null!=pW(this,dG.DEBUG)}set debug(a){a?this.setAttribute(dG.DEBUG,""):this.removeAttribute(dG.DEBUG)}get disableTracking(){return null!=pW(this,dG.DISABLE_TRACKING)}set disableTracking(a){this.toggleAttribute(dG.DISABLE_TRACKING,!!a)}get disableCookies(){return null!=pW(this,dG.DISABLE_COOKIES)}set disableCookies(a){a?this.setAttribute(dG.DISABLE_COOKIES,""):this.removeAttribute(dG.DISABLE_COOKIES)}get streamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(dG.STREAM_TYPE))?b:null==(a=this.media)?void 0:a.streamType)?c:bU}set streamType(a){this.setAttribute(dG.STREAM_TYPE,`${a}`)}get defaultStreamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(pq.DEFAULT_STREAM_TYPE))?b:null==(a=this.mediaController)?void 0:a.getAttribute(pq.DEFAULT_STREAM_TYPE))?c:bS}set defaultStreamType(a){a?this.setAttribute(pq.DEFAULT_STREAM_TYPE,a):this.removeAttribute(pq.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var a,b;return this.hasAttribute(pq.TARGET_LIVE_WINDOW)?+this.getAttribute(pq.TARGET_LIVE_WINDOW):null!=(b=null==(a=this.media)?void 0:a.targetLiveWindow)?b:NaN}set targetLiveWindow(a){a==this.targetLiveWindow||Number.isNaN(a)&&Number.isNaN(this.targetLiveWindow)||(null==a?this.removeAttribute(pq.TARGET_LIVE_WINDOW):this.setAttribute(pq.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a;return null==(a=this.media)?void 0:a.liveEdgeStart}get startTime(){return oP(pW(this,dG.START_TIME))}set startTime(a){this.setAttribute(dG.START_TIME,`${a}`)}get preferPlayback(){let a=this.getAttribute(dG.PREFER_PLAYBACK);if("mse"===a||a===bV)return a}set preferPlayback(a){a!==this.preferPlayback&&("mse"===a||a===bV?this.setAttribute(dG.PREFER_PLAYBACK,a):this.removeAttribute(dG.PREFER_PLAYBACK))}get metadata(){var a;return null==(a=this.media)?void 0:a.metadata}set metadata(a){(ku(this,pG,pH).call(this),this.media)?this.media.metadata={...pt(this),...a}:o0("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var a;return null==(a=this.media)?void 0:a._hlsConfig}set _hlsConfig(a){(ku(this,pG,pH).call(this),this.media)?this.media._hlsConfig=a:o0("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(a){var b;return(ku(this,pG,pH).call(this),this.media)?null==(b=this.media)?void 0:b.addCuePoints(a):void o0("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var a;return null==(a=this.media)?void 0:a.activeCuePoint}get cuePoints(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.cuePoints)?b:[]}addChapters(a){var b;return(ku(this,pG,pH).call(this),this.media)?null==(b=this.media)?void 0:b.addChapters(a):void o0("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var a;return null==(a=this.media)?void 0:a.activeChapter}get chapters(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.chapters)?b:[]}getStartDate(){var a;return null==(a=this.media)?void 0:a.getStartDate()}get currentPdt(){var a;return null==(a=this.media)?void 0:a.currentPdt}get tokens(){let a=this.getAttribute(pq.PLAYBACK_TOKEN),b=this.getAttribute(pq.DRM_TOKEN),c=this.getAttribute(pq.THUMBNAIL_TOKEN),d=this.getAttribute(pq.STORYBOARD_TOKEN);return{...kr(this,pw),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{},...null!=c?{thumbnail:c}:{},...null!=d?{storyboard:d}:{}}}set tokens(a){kt(this,pw,null!=a?a:{})}get playbackToken(){var a;return null!=(a=this.getAttribute(pq.PLAYBACK_TOKEN))?a:void 0}set playbackToken(a){this.setAttribute(pq.PLAYBACK_TOKEN,`${a}`)}get drmToken(){var a;return null!=(a=this.getAttribute(pq.DRM_TOKEN))?a:void 0}set drmToken(a){this.setAttribute(pq.DRM_TOKEN,`${a}`)}get thumbnailToken(){var a;return null!=(a=this.getAttribute(pq.THUMBNAIL_TOKEN))?a:void 0}set thumbnailToken(a){this.setAttribute(pq.THUMBNAIL_TOKEN,`${a}`)}get storyboardToken(){var a;return null!=(a=this.getAttribute(pq.STORYBOARD_TOKEN))?a:void 0}set storyboardToken(a){this.setAttribute(pq.STORYBOARD_TOKEN,`${a}`)}addTextTrack(a,b,c,d){var e;let f=null==(e=this.media)?void 0:e.nativeEl;if(f)return ce(f,a,b,c,d)}removeTextTrack(a){var b;let c=null==(b=this.media)?void 0:b.nativeEl;if(c){let b;return void(null==(b=Array.prototype.find.call(c.querySelectorAll("track"),b=>b.track===a))||b.remove())}}get textTracks(){var a;return null==(a=this.media)?void 0:a.textTracks}get castReceiver(){var a;return null!=(a=this.getAttribute(pq.CAST_RECEIVER))?a:void 0}set castReceiver(a){a!==this.castReceiver&&(a?this.setAttribute(pq.CAST_RECEIVER,a):this.removeAttribute(pq.CAST_RECEIVER))}get castCustomData(){var a;return null==(a=this.media)?void 0:a.castCustomData}set castCustomData(a){this.media?this.media.castCustomData=a:o0("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(pq.NO_TOOLTIPS)}set noTooltips(a){a?this.setAttribute(pq.NO_TOOLTIPS,""):this.removeAttribute(pq.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(pq.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(a){a?this.setAttribute(pq.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(pq.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var a;return null==(a=this.media)?void 0:a.capRenditionToPlayerSize}set capRenditionToPlayerSize(a){this.media?this.media.capRenditionToPlayerSize=a:o0("underlying media element missing when trying to set capRenditionToPlayerSize")}};function pW(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}pu=new WeakMap,pv=new WeakMap,pw=new WeakMap,px=new WeakMap,py=new WeakMap,pz=new WeakMap,pA=new WeakMap,pB=new WeakMap,pC=new WeakMap,pD=new WeakMap,pE=new WeakMap,pF=new WeakMap,pG=new WeakSet,pH=function(){var a,b,c,d;if(!kr(this,pv)){kt(this,pv,!0),ku(this,pG,pK).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof oL.HTMLElement))throw""}catch{o0("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{o0("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof gt))throw""}catch{o0("<media-controller> failed to upgrade!")}ku(this,pG,pL).call(this),ku(this,pG,pM).call(this),ku(this,pG,pN).call(this),kt(this,px,null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(fn))||b),ku(this,pG,pO).call(this),null==(c=this.media)||c.addEventListener("streamtypechange",kr(this,pA)),null==(d=this.media)||d.addEventListener("loadstart",kr(this,pB))}},pI=function(){var a,b;try{null==(a=null==window?void 0:window.CSS)||a.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(b=null==window?void 0:window.CSS)||b.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},pJ=function(a){Object.assign(kr(this,pE),a),ku(this,pG,pK).call(this)},pK=function(a={}){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W;let X,Y,Z,$;b={...kr(this,pE),...a},X={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(c=this.media)?void 0:c.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(pq.STORYBOARD_SRC),fullscreenElement:this.getAttribute(pq.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(a){var b,c;let d=a.theme;if(d){let e=null==(c=null==(b=a.getRootNode())?void 0:b.getElementById)?void 0:c.call(b,d);if(e&&e instanceof HTMLTemplateElement)return e;d.startsWith("media-theme-")||(d=`media-theme-${d}`);let f=oL.customElements.get(d);if(null!=f&&f.template)return f.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(pq.NOHOTKEYS),hotKeys:this.getAttribute(pq.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(dG.TARGET_LIVE_WINDOW),streamType:oX(this.getAttribute(dG.STREAM_TYPE)),primaryColor:this.getAttribute(pq.PRIMARY_COLOR),secondaryColor:this.getAttribute(pq.SECONDARY_COLOR),accentColor:this.getAttribute(pq.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(Y=null==(f=this.mediaController)?void 0:f.querySelector("media-time-display"))&&"none"===getComputedStyle(Y).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(pq.PLAYBACK_RATES),customDomain:null!=(d=this.getAttribute(dG.CUSTOM_DOMAIN))?d:void 0,title:this.getAttribute(pq.TITLE),videoTitle:null!=(e=this.getAttribute(pq.VIDEO_TITLE))?e:this.getAttribute(pq.TITLE),novolumepref:this.hasAttribute(pq.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(pq.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(pq.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(pq.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...b,extraSourceParams:this.extraSourceParams},g=pg`
  <style>
    ${(a=>{let{tokens:b}=a;return b.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(X)}
    ${o8}
  </style>
  ${i=X,pg`
  <media-theme
    template="${i.themeTemplate||!1}"
    defaultstreamtype="${null!=(j=i.defaultStreamType)&&j}"
    hotkeys="${Z=i.hotKeys?`${i.hotKeys}`:"","live"===oX(i.streamType)&&(Z+=" noarrowleft noarrowright"),Z||!1}"
    nohotkeys="${i.noHotKeys||!i.hasSrc||!1}"
    noautoseektolive="${!!(null!=(k=i.streamType)&&k.includes(bT))&&0!==i.targetLiveWindow}"
    novolumepref="${i.novolumepref||!1}"
    nomutedpref="${i.nomutedpref||!1}"
    disabled="${!i.hasSrc||i.isDialogOpen}"
    audio="${null!=(l=i.audio)&&l}"
    style="${null!=(W={"--media-primary-color":i.primaryColor,"--media-secondary-color":i.secondaryColor,"--media-accent-color":i.accentColor},$="",Object.entries(W).forEach(([a,b])=>{null!=b&&($+=`${oN(a)}: ${b}; `)}),m=$?$.trim():void 0)&&m}"
    defaultsubtitles="${!i.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=i.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(o=i.backwardSeekOffset)&&o}"
    playbackrates="${null!=(p=i.playbackRates)&&p}"
    defaultshowremainingtime="${null!=(q=i.defaultShowRemainingTime)&&q}"
    defaultduration="${null!=(r=i.defaultDuration)&&r}"
    hideduration="${null!=(s=i.hideDuration)&&s}"
    title="${null!=(t=i.title)&&t}"
    videotitle="${null!=(u=i.videoTitle)&&u}"
    proudlydisplaymuxbadge="${null!=(v=i.proudlyDisplayMuxBadge)&&v}"
    exportparts="${ph}"
    onclose="${i.onCloseErrorDialog}"
    onfocusin="${i.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(w=i.noHotKeys)&&w}"
      target-live-window="${null!=(x=i.targetLiveWindow)&&x}"
      stream-type="${null!=(y=oX(i.streamType))&&y}"
      crossorigin="${null!=(z=i.crossOrigin)?z:""}"
      playsinline
      autoplay="${null!=(A=i.autoplay)&&A}"
      muted="${null!=(B=i.muted)&&B}"
      loop="${null!=(C=i.loop)&&C}"
      preload="${null!=(D=i.preload)&&D}"
      debug="${null!=(E=i.debug)&&E}"
      prefer-cmcd="${null!=(F=i.preferCmcd)&&F}"
      disable-tracking="${null!=(G=i.disableTracking)&&G}"
      disable-cookies="${null!=(H=i.disableCookies)&&H}"
      prefer-playback="${null!=(I=i.preferPlayback)&&I}"
      start-time="${null!=i.startTime&&i.startTime}"
      beacon-collection-domain="${null!=(J=i.beaconCollectionDomain)&&J}"
      player-init-time="${null!=(K=i.playerInitTime)&&K}"
      player-software-name="${null!=(L=i.playerSoftwareName)&&L}"
      player-software-version="${null!=(M=i.playerSoftwareVersion)&&M}"
      env-key="${null!=(N=i.envKey)&&N}"
      custom-domain="${null!=(O=i.customDomain)&&O}"
      src="${i.src?i.src:!!i.playbackId&&cR(i)}"
      cast-src="${i.src?i.src:!!i.playbackId&&cR(i)}"
      cast-receiver="${null!=(P=i.castReceiver)&&P}"
      drm-token="${null!=(R=null==(Q=i.tokens)?void 0:Q.drm)&&R}"
      exportparts="video"
      disable-pseudo-ended="${null!=(S=i.disablePseudoEnded)&&S}"
      max-auto-resolution="${null!=(T=i.maxAutoResolution)&&T}"
      cap-rendition-to-player-size="${null!=(U=i.capRenditionToPlayerSize)&&U}"
    >
      ${i.storyboard?pg`<track label="thumbnails" default kind="metadata" src="${i.storyboard}" />`:pg``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!i.poster&&i.poster}"
        placeholdersrc="${null!=(V=i.placeholder)&&V}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,h=this.shadowRoot,g.renderInto(h)},pL=function(){let a=a=>{var b,c;if(!(null!=a&&a.startsWith("theme-")))return;let d=a.replace(/^theme-/,"");if(pr.includes(d))return;let e=this.getAttribute(a);null!=e?null==(b=this.mediaTheme)||b.setAttribute(d,e):null==(c=this.mediaTheme)||c.removeAttribute(d)};kt(this,pz,new MutationObserver(b=>{for(let{attributeName:c}of b)a(c)})),kr(this,pz).observe(this,{attributes:!0}),this.getAttributeNames().forEach(a)},pM=function(){this.addEventListener("error",kr(this,pF)),this.media&&(this.media.errorTranslator=(a={})=>{var b,c,d;if(!((null==(b=this.media)?void 0:b.error)instanceof bP))return a;let e=pj(null==(c=this.media)?void 0:c.error,!1);return{player_error_code:null==(d=this.media)?void 0:d.error.code,player_error_message:e.message?String(e.message):a.player_error_message,player_error_context:e.context?String(e.context):a.player_error_context}})},pN=function(){var a,b,c,d;null==(b=null==(a=this.media)?void 0:a.textTracks)||b.addEventListener("addtrack",kr(this,pC)),null==(d=null==(c=this.media)?void 0:c.textTracks)||d.addEventListener("removetrack",kr(this,pC))},pO=function(){var a,b;if(!/Firefox/i.test(navigator.userAgent))return;let c,d=new WeakMap,e=()=>this.streamType===bT&&!this.secondaryColor&&this.offsetWidth>=800,f=(a,b,c=!1)=>{e()||Array.from(a&&a.activeCues||[]).forEach(a=>{if(!(!a.snapToLines||a.line<-5||a.line>=0&&a.line<10))if(!b||this.paused){let b=a.text.split(`
`).length,e=-3;this.streamType===bT&&(e=-2);let f=e-b;if(a.line===f&&!c)return;d.has(a)||d.set(a,a.line),a.line=f}else setTimeout(()=>{a.line=d.get(a)||"auto"},500)})},g=()=>{var a,b;f(c,null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(fn))&&b)},h=()=>{var a,b;let d=Array.from((null==(b=null==(a=this.mediaController)?void 0:a.media)?void 0:b.textTracks)||[]).filter(a=>["subtitles","captions"].includes(a.kind)&&"showing"===a.mode)[0];d!==c&&(null==c||c.removeEventListener("cuechange",g)),null==(c=d)||c.addEventListener("cuechange",g),f(c,kr(this,px))};h(),null==(a=this.textTracks)||a.addEventListener("change",h),null==(b=this.textTracks)||b.addEventListener("addtrack",h);let i=()=>{var a,b;let d=null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(fn))||b;kr(this,px)!==d&&(kt(this,px,d),f(c,kr(this,px)))};this.addEventListener("userinactivechange",i),kt(this,pD,()=>{var a,b;null==c||c.removeEventListener("cuechange",g),null==(a=this.textTracks)||a.removeEventListener("change",h),null==(b=this.textTracks)||b.removeEventListener("addtrack",h),this.removeEventListener("userinactivechange",i)})};var pX=a=>{throw TypeError(a)},pY=(a,b,c)=>b.has(a)||pX("Cannot "+c),pZ=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends pZ{});var p$,p_=class extends pZ{},p0=class{constructor(a,b={}){((a,b,c)=>b.has(a)?pX("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c))(this,p$),((a,b,c,d)=>(pY(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,p$,null==b?void 0:b.detail)}get detail(){let a,b;return pY(this,a=p$,"read from private field"),b?b.call(this):a.get(this)}initCustomEvent(){}};p$=new WeakMap;var p1={document:{createElement:function(a,b){return new p_}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(p_)},CustomEvent:p0,EventTarget:pZ,HTMLElement:p_,HTMLVideoElement:class extends pZ{}};p1.document,p1.customElements.get("mux-player")||(p1.customElements.define("mux-player",pV),p1.MuxPlayerElement=pV);var p2=parseInt(e.default.version)>=19,p3={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function p4(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}var p5=Object.prototype.hasOwnProperty,p6=(a,b,c)=>!((a,b)=>{if(Object.is(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;if(Array.isArray(a))return!!Array.isArray(b)&&a.length===b.length&&a.some((a,c)=>b[c]===a);let c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(let d=0;d<c.length;d++)if(!p5.call(b,c[d])||!Object.is(a[c[d]],b[c[d]]))return!1;return!0})(b,a[c]),p7=(a,b,c)=>{a[c]=b},p8=(a,b,c,d=p7,f=p6)=>(0,e.useEffect)(()=>{let e=null==c?void 0:c.current;e&&f(e,b,a)&&d(e,b,a)},[null==c?void 0:c.current,b]),p9=(()=>{try{return"3.11.7"}catch{}return"UNKNOWN"})(),qa=(a,b,c)=>(0,e.useEffect)(()=>{let d=null==b?void 0:b.current;if(d&&c)return d.addEventListener(a,c),()=>{d.removeEventListener(a,c)}},[null==b?void 0:b.current,c,a]),qb=e.default.forwardRef(({children:a,...b},c)=>e.default.createElement("mux-player",{suppressHydrationWarning:!0,...((a={})=>{let{ref:b,...c}=a;return Object.entries(c).reduce((a,[b,c])=>{let d=((a,b)=>{if(!(!p2&&"boolean"==typeof b&&!b)){let c,d;if(c=a,null!=(d=p3)&&c in d)return p3[a];if(void 0!==b)return/[A-Z]/.test(a)?a.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`):a}})(b,c);if(!d)return a;let e=p2||"boolean"!=typeof c?c:"";return a[d]=e,a},{})})(b),ref:c},a)),qc="mux-player-react",qd=e.default.forwardRef((a,b)=>{var c;let d=(0,e.useRef)(null),f=function(...a){return e.useCallback(function(...a){return b=>{let c=!1,d=a.map(a=>{let d=p4(a,b);return c||"function"!=typeof d||(c=!0),d});if(c)return()=>{for(let b=0;b<d.length;b++){let c=d[b];"function"==typeof c?c():p4(a[b],null)}}}}(...a),a)}(d,b),[g]=((a,b)=>{let{onAbort:c,onCanPlay:d,onCanPlayThrough:e,onEmptied:f,onLoadStart:g,onLoadedData:h,onLoadedMetadata:i,onProgress:j,onDurationChange:k,onVolumeChange:l,onRateChange:m,onResize:n,onWaiting:o,onPlay:p,onPlaying:q,onTimeUpdate:r,onPause:s,onSeeking:t,onSeeked:u,onStalled:v,onSuspend:w,onEnded:x,onError:y,onCuePointChange:z,onChapterChange:A,metadata:B,tokens:C,paused:D,playbackId:E,playbackRates:F,currentTime:G,themeProps:H,extraSourceParams:I,castCustomData:J,_hlsConfig:K,...L}=b;return p8("tokens",C,a),p8("playbackId",E,a),p8("playbackRates",F,a),p8("metadata",B,a),p8("extraSourceParams",I,a),p8("_hlsConfig",K,a),p8("themeProps",H,a),p8("castCustomData",J,a),p8("paused",D,a,(a,b)=>{null!=b&&(b?a.pause():a.play())},(a,b,c)=>(!a.hasAttribute("autoplay")||!!a.hasPlayed)&&p6(a,b,c)),p8("currentTime",G,a,(a,b)=>{null!=b&&(a.currentTime=b)}),qa("abort",a,c),qa("canplay",a,d),qa("canplaythrough",a,e),qa("emptied",a,f),qa("loadstart",a,g),qa("loadeddata",a,h),qa("loadedmetadata",a,i),qa("progress",a,j),qa("durationchange",a,k),qa("volumechange",a,l),qa("ratechange",a,m),qa("resize",a,n),qa("waiting",a,o),qa("play",a,p),qa("playing",a,q),qa("timeupdate",a,r),qa("pause",a,s),qa("seeking",a,t),qa("seeked",a,u),qa("stalled",a,v),qa("suspend",a,w),qa("ended",a,x),qa("error",a,y),qa("cuepointchange",a,z),qa("chapterchange",a,A),[L]})(d,a),[h]=(0,e.useState)(null!=(c=a.playerInitTime)?c:cP());return e.default.createElement(qb,{ref:f,defaultHiddenCaptions:a.defaultHiddenCaptions,playerSoftwareName:qc,playerSoftwareVersion:p9,playerInitTime:h,...g})});a.s(["default",0,qd,"playerSoftwareName",0,qc,"playerSoftwareVersion",0,p9],62848),a.i(62848),a.s(["MaxResolution",0,{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},"MediaError",0,bP,"MinResolution",0,{noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},"RenditionOrder",0,{DESCENDING:"desc"},"default",0,qd,"generatePlayerInitTime",0,cP,"playerSoftwareName",0,qc,"playerSoftwareVersion",0,p9],87805)}];

//# sourceMappingURL=0r9g_%40mux_mux-player-react_dist_index_mjs_0-onc-5._.js.map
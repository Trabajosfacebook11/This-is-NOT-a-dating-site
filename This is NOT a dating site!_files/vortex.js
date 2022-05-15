// Version 1.1.4, 2015-10-14 16:08:00
/*! vortex-scripts Vortex.js 2015-10-14 */

!function(a){a([],function(a){function b(a){if(!Cookies)throw new Error("Could not load the required cookie library.");Cookies.json=!0,this._key=a,this.update=function(a){Cookies.set(this._key,a)},this.clear=function(){Cookies.remove(this._key)},this.get=function(){return Cookies.get(this._key)}}function c(a){this._key=a,this.update=function(a){sessionStorage.setItem(this._key,JSON.stringify(a))},this.clear=function(){sessionStorage.removeItem(this._key)},this.get=function(){var a={};try{a=JSON.parse(sessionStorage.getItem(this._key))}catch(b){this.clear()}return a}}function d(a){var b=typeof a,c="",d=!1;switch(b){case"string":c="s";break;case"number":c="n";break;case"boolean":c="b";break;default:d=!0}return{prefix:c,err:d}}function e(a,b,c){var d,e,f=b.split("."),g=a;for(d=f.length,e=0;d>e;e++)"undefined"==typeof g[f[e]]&&(e==d-1&&c?g[f[e]]=c:g[f[e]]={}),g=g[f[e]];return g}function f(a,b,c){if(null==a)return a;if(k.forEach&&a.forEach===k.forEach)a.forEach(b,c);else if(a.length===+a.length){for(var d=0,e=a.length;e>d;d++)if(b.call(c,a[d],d,a)==={})return}else for(var f=l.keys(a),d=0,e=f.length;e>d;d++)if(b.call(c,a[f[d]],f[d],a)==={})return;return a}function g(a,b,c){return function(){function d(c,d){setTimeout(function(){var f=a.apply(b,e);f&&f.then(c)["catch"](d)},10)}var e=arguments,f=c?new c.Promise(d):null|d(l.noop,l.noop);return f}}function h(a){var b=a;return b=/^(http:\/\/|https:\/\/)/.test(b)?b.replace(/^(http:\/\/|https:\/\/)/,i()):i()+b}function i(){return"https:"==document.location.protocol?"https://":"http://"}Function.prototype.bind=Function.prototype.bind||function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice,c=b.call(arguments,1),d=this,e=function(){},f=function(){return d.apply(this instanceof e?this:a||window,c.concat(b.call(arguments)))};return e.prototype=this.prototype,f.prototype=new e,f},Array.prototype.indexOf=function(a){var b=this.length>>>0,c=Number(arguments[1])||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);b>c;c++)if(c in this&&this[c]===a)return c;return-1};var j={rbracket:/\[\]$/,r20:/%20/g,class2type:{},hasOwn:Object.prototype.hasOwnProperty,noop:function(){},type:function(a){if(null==a)return a+"";var b={}.toString,c="object"==typeof a||"function"==typeof a?j.class2type[b.call(a)]||"object":typeof a;return c},isFunction:function(a){return"function"===j.type(a)},isPlainObject:function(a){return"object"!==j.type(a)||a.nodeType||j.isWindow(a)?!1:a.constructor&&!j.hasOwn.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isWindow:function(a){return null!=a&&a===a.window},isArray:Array.isArray||function(a){return"array"===j.type(a)},forEach:function(a,b,c){return f(a,function(a,c,d){b(c,a,d)},c)}.bind(j),buildParams:function(a,b,c,d){var e;if(c=!1,j.isArray(b))j.forEach(b,function(b,e){c||j.rbracket.test(a)?d(a,e):j.buildParams(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==j.type(b))d(a,b);else for(e in b)j.buildParams(a+"["+e+"]",b[e],c,d)},extend:function(){var b,c,d,e,f,g,h=arguments[0]||{},i=1,k=arguments.length,l=!1;for("boolean"==typeof h&&(l=h,h=arguments[i]||{},i++),"object"==typeof h||j.isFunction(h)||(h={}),i===k&&(h=this,i--);k>i;i++)if(null!=(b=arguments[i]))for(c in b)d=h[c],e=b[c],h!==e&&(l&&e&&(j.isPlainObject(e)||(f=j.isArray(e)))?(f?(f=!1,g=d&&j.isArray(d)?d:[]):g=d&&j.isPlainObject(d)?d:{},h[c]=j.extend(l,g,e)):e!==a&&(h[c]=e));return h}.bind(j),param:function(a){var b,c=!1,d=[],e=function(a,b){b=j.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(j.isArray(a)||a.jFn&&!j.isPlainObject(a))j.forEach(a,function(){e(this.name,this.value)});else for(b in a)j.buildParams(b,a[b],c,e);return d.join("&").replace(j.r20,"+")}.bind(j),exportPublic:function(){var a={},b=this;return j.forEach(["param","noop","extend"],function(c,d){a[d]=b[d]}),a},init:function(){for(var a="Boolean Number String Function Array Date RegExp Object Error".split(" "),b=a.length;b--;){var c=a[b];j.class2type["[object "+c+"]"]=c.toLowerCase()}return this}};j.init();var k=Array.prototype,l={nativeKeys:Object.keys,nativeMap:k.map,nativeReduce:k.reduce,has:function(a,b){return null!=a&&Object.prototype.hasOwnProperty.call(a,b)},isObject:function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},keys:function(a){if(!l.isObject(a))return[];if(this.nativeKeys)return this.nativeKeys(a);var b=[];for(var c in a)l.has(a,c)&&b.push(c);return b}.bind(l),foldl:function(a,b,c,d){var e=arguments.length>2;if(null===a&&(a=[]),this.nativeReduce&&a.reduce===this.nativeReduce)return d&&(b=_.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(f(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(reduceError);return c},map:function(a,b,c){var d=[];return null===a?d:this.nativeMap&&a.map===this.nativeMap?a.map(b,c):(f(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d)}};l.each=l.forEach=f;var m={format:function(){for(var a=arguments[0],b=arguments.length;b-->0;)a=a.replace(new RegExp("\\{"+(b-1)+"\\}","gm"),arguments[b]);return a}},n={extendNamespace:e,str:m,keys:l.keys,foldl:l.foldl,each:l.each,map:l.map,getDeferredFunc:g,determineTypePrefix:d,httpScheme:i,ensureProperUrlScheme:h,sessionStorageClass:c,cookieStorageClass:b};return j.extend(n,j.exportPublic()),n})}("function"==typeof define&&define.amd?define:function(a,b){var c="BES.ProTrack.Vortex.Modules.Utils",d=b();d.extendNamespace(window,c,d)}),function(a){a(["./utils"],function(a,b){function c(a){-1==g.keys(f).indexOf(a)&&(f[a]=[]);var b=f[a];return{writeLine:function(a){b.push(a)},getLines:function(){return[].concat(b)}}}function d(){return g.keys(f)}function e(a){var b=f[a];return b?[].concat(b):[]}var f={},g=a;return{getLog:c,getExistingLogs:d,getLogLines:e}})}("function"==typeof define&&define.amd?define:function(a,b){var c=BES.ProTrack.Vortex.Modules.Utils,d=b(c),e="BES.ProTrack.Vortex.Modules.Log";c.extendNamespace(window,e,d)}),function(a){a(["./utils","./log.js"],function(a,b,c){function d(a){return{process:function(a,b){return m.each(D,function(a,c){var d=m.determineTypePrefix(a);d.err?errs[100]=!0:b["_"+d.prefix+c]=a}),b}}}var e,f,g,h,i,j,k,l="AgentInfo",m=a,n=b?b.getLog("pl_agentinfo.js"):{writeLine:m.noop},o="";try{var p="-";screen.width&&(width=screen.width?screen.width:"",height=screen.height?screen.height:"",o+=""+width+" x "+height);var q=navigator.appVersion,r=navigator.userAgent;e=navigator.appName,f=""+parseFloat(navigator.appVersion);var s,t,u,v=parseInt(navigator.appVersion,10);-1!=(t=r.indexOf("Opera"))?(e="Opera",f=r.substring(t+6),-1!=(t=r.indexOf("Version"))&&(f=r.substring(t+8))):-1!=(t=r.indexOf("OPR"))?(e="Opera",f=r.substring(t+4),-1!=(t=r.indexOf("Version"))&&(f=r.substring(t+8))):-1!=(t=r.indexOf("MSIE"))?(e="Microsoft Internet Explorer",f=r.substring(t+5)):-1!=(t=r.indexOf("Chrome"))?(e="Chrome",f=r.substring(t+7)):-1!=(t=r.indexOf("Safari"))?(e="Safari",f=r.substring(t+7),-1!=(t=r.indexOf("Version"))&&(f=r.substring(t+8))):-1!=(t=r.indexOf("Firefox"))?(e="Firefox",f=r.substring(t+8)):-1!=r.indexOf("Trident/")?(e="Microsoft Internet Explorer",f=r.substring(r.indexOf("rv:")+3)):(s=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(e=r.substring(s,t),f=r.substring(t+1),e.toLowerCase()==e.toUpperCase()&&(e=navigator.appName)),-1!=(u=f.indexOf(";"))&&(f=f.substring(0,u)),-1!=(u=f.indexOf(" "))&&(f=f.substring(0,u)),-1!=(u=f.indexOf(")"))&&(f=f.substring(0,u)),v=parseInt(""+f,10),isNaN(v)&&(f=""+parseFloat(navigator.appVersion),v=parseInt(navigator.appVersion,10)),g=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(q),j=navigator.cookieEnabled?!0:!1,"undefined"!=typeof navigator.cookieEnabled||j||(document.cookie="testcookie",j=-1!=document.cookie.indexOf("testcookie")?!0:!1),h=p;var w=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows Phone",r:/(Windows Phone)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var x in w){var y=w[x];if(y.r.test(r)){h=y.s;break}}switch(i=p,/Windows Phone/.test(h)?i=/Windows Phone (.*?);/.exec(r)[1]:/Windows/.test(h)&&(i=/Windows (.*)/.exec(h)[1]),h){case"Mac OS X":i=/Mac OS X (10[\.\_\d]+)/.exec(r)[1];break;case"Android":var z=/Android ([\.\_\d]+)/.exec(r);if(z)i=z[1];else{var A=/Firefox\//.exec(r);A&&(i=p+"(Firefox does not report)")}break;case"iOS":i=/OS (\d+)_(\d+)_?(\d+)?/.exec(q),i=i[1]+"."+i[2]+"."+(0|i[3])}if(k="no check","undefined"!=typeof swfobject){var B=swfobject.getFlashPlayerVersion();k=B.major>0?B.major+"."+B.minor+" r"+B.release:p}}catch(C){n.writeLine("Error running agent detection: "+C.toString())}var D={screen:o,browser:e,browserVersion:f,mobile:g,os:h,osVersion:i,cookies:j,flashVersion:k,languages:navigator.languages?navigator.languages.join(","):navigator.language||navigator.userLanguage,plugins:m.map(navigator.plugins,function(a){return a.name}).join(",")};return d.getName=function(){return l},d})}("function"==typeof define&&define.amd?define:function(a,b){var c=BES.ProTrack.Vortex.Modules.Utils,d=BES.ProTrack.Vortex.Modules.Log,e=b(c,d),f="BES.ProTrack.Vortex.Plugins."+e.getName();c.extendNamespace(window,f,e)}),function(a){a(["./utils"],function(a){function b(a){try{var b=new XMLHttpRequest;return"withCredentials"in b||(b=new XDomainRequest),b}catch(c){}return null}function c(a,c,e,f,g,h){"use strict";var i,j,k,l,m,n,o={app_id:c.app_id,eventName:c.eventName},p=d.extend({},c);if(delete c.app_id,delete c.eventName,k=d.param(o),l=d.param(c),m=k.length+l.length,n=1250>m?"GET":"POST","[object OperaMini]"===Object.prototype.toString.call(window.operamini)||null==(j=b(window)))return void function(){var b=document.createElement("script");b.type="text/javascript",b.src=a+"?"+k+"&"+l+"&"+Math.ceil((new Date).getTime()/1e3),document.body.appendChild(b)}();if(h){var q=new Image;return q.src=a+"?"+k+"&"+l+"&"+Math.ceil((new Date).getTime()/1e3),q.style.height="1px",q.style.width="1px",void document.body.appendChild(q)}if(j=b(window),"string"!=typeof n&&("POST"!==n||"GET"!==n))throw"method request must be 'POST' or 'GET'";if(e&&"function"!=typeof e||f&&"function"!=typeof f)throw"callbacks must be a function";var r=function(a){return function(){"error"===a?f({status:j.status,statusText:j.statusText,eventdata:d.extend({},p)}):e({status:j.status,statusText:j.statusText,eventdata:d.extend({},p),text:"string"==typeof j.responseText?{text:j.responseText}:void 0,headers:j.getAllResponseHeaders?j.getAllResponseHeaders():""})}};if(e&&"function"==typeof e&&(j.onload=r()),f&&"function"==typeof f&&(j.onerror=r("error")),a+="?"+k,"GET"===n&&(a+="&"+l),j.open(n,a,!0),j.withCredentials=!0,void 0!=j.setRequestHeader&&g)for(i=0;i<g.length;i++)j.setRequestHeader(g[i].name,g[i].value);j.send("POST"==n?l:void 0)}if(!JSON)throw new Error("BES.ProTrack.Vortex.Modules.Ajax depends on JSON support.");if(!a)throw new Error("BES.ProTrack.Vortex.Modules.Ajax depends on Utils module.");var d=a;return d.extendNamespace(window,"BES.ProTrack.Vortex.Modules"),{sendRequest:c}})}("function"==typeof define&&define.amd?define:function(a,b){var c=BES.ProTrack.Vortex.Modules.Utils,d=b(c),e="BES.ProTrack.Vortex.Modules.Ajax";c.extendNamespace(window,e,d)}),function(a){a(["./utils","./log","./ajax","./pl_ns"],function(a,b,c,d){function e(a,b){function c(a,b,c,d){if(!c||"object"!=typeof c){var e="You cannot pass non-object as container for generic attributes.";throw i.writeLine(e),new Error(e)}this.asQueryObject=function(){var e={app_id:a,eventName:b},g={};f.each(c,function(a,b){var c=b+"";if(/^[A-Za-z0-9_-]{0,30}$/.test(c)){var d=f.determineTypePrefix(a);if(d.err)g[100]=!0;else{var h=d.prefix;e[h+b]=a}}else g[101]=!0}),o.uniqueId&&(e._suniqueId=o.uniqueId),f.each(d,function(a){a(e)});var h=f.keys(g);return h.length&&(e._errors=h.concat(",")),e}}function d(a,b,c){f.each({appId:a,eventName:b},function(a,b){if(!a){var c=f.str.format("validateEvent: Parameter '{0}' cannot be empty, undefined, or null.",b);throw i.writeLine(c),new Error(c)}})}function e(a,b){function c(a,b){g.sendRequest(n.url,e,a,b,d,n.sendPixel)}var d=[{name:"Content-Type",value:"application/x-www-form-urlencoded"}],e=a.asQueryObject();i.writeLine(f.str.format("makeRequest: sent event {0}.",JSON.stringify(a))),b=b||f.noop,c(function(a){b(null,a)},function(a){b(a,null)})}function j(){var a,b=[{name:"Content-Type",value:"application/x-www-form-urlencoded"}];return function(c,d){if(n.sendPixel)throw new Error("Retrieving user details is not available when operating in 'pixel' mode.");if(!c)throw new Error("Missing Argument: You should provide a callback.");!a||d?g.sendRequest(n.userDetailsUrl,{},function(b){a=JSON.parse(b.text.text),c(null,a)},function(a){c(a,null)},b,!1):setTimeout(c(null,a),0)}}function k(a,b,g,h){var j=f.noop,l={};h=h||{};var n=[].slice.call(arguments,k.length);switch(n.length){case 0:break;case 1:"object"==typeof n[0]?l=n[0]:"function"==typeof n[0]&&(j=n[0]);break;default:"object"==typeof n[0]&&(l=n[0]),"function"==typeof n[1]&&(j=n[1])}var o=f.extend(b,l);i.writeLine("sendEventModern: sending a generic event "),d(a,g,h?h.value:void 0);var p=f.foldl(m,function(a,b){var c=b.instance,d=b.constructor;return"all"!==o.activatePlugins&&-1===o.activatePlugins.indexOf(d.getName())||-1!=o.skipActivatePlugins.indexOf(d.getName())||a.push(c.process.bind(b,o)),a},[]),q=new c(a,g,h,p);return e(q,j)}var l={url:f.httpScheme()+"etahub.com/events",userDetailsUrl:f.httpScheme()+"etahub.com/guid",sendPixel:!1,activatePlugins:"all",skipActivatePlugins:[],plugins:{}},m=[],n=f.extend({},l,b),o={uniqueId:null};return m=f.foldl(h,function(a,b){return a[b.getName()]={constructor:b,instance:b(n)},a},{}),{unique:function(a){return a?void(o.uniqueId=a):o.uniqueId},userDetails:j(),userAgent:function(){if(!m.AgentInfo)throw new Error("Agent Info plugin needs to be loaded to perform this action!");return m.AgentInfo.instance.process(null,{})},pl:f.foldl(m,function(a,b){return a[b.constructor.getName()]=b.instance,a},{}),sendEvent:f.getDeferredFunc(k.bind(this,a,n),this)}}if(!JSON)throw new Error("BES.ProTrack.Vortex depends on JSON support.");if(!a)throw new Error("BES.ProTrack.Vortex depends on Utils module.");if(!c)throw new Error("BES.ProTrack.Vortex depends on Ajax module.");var f=a,g=c,h=[],i=b?b.getLog("send.interface.modern.js"):{writeLine:f.noop};return h=f.foldl(d,function(a,b,c){return i.writeLine("Plugin "+b.getName()+" loaded"),a.push(b),a},[]),function(a,b){var c=this;if(!a||"number"!=typeof a)throw new Error("You must specify an application id.");var d=e(a,b);f.extend(c,d)}})}("function"==typeof define&&define.amd?define:function(a,b){if(!BES.ProTrack.Vortex.Modules)throw new Error("Could not load any modules!");var c=b(BES.ProTrack.Vortex.Modules.Utils,BES.ProTrack.Vortex.Modules.Log,BES.ProTrack.Vortex.Modules.Ajax,BES.ProTrack.Vortex.Plugins||[]),d=BES.ProTrack.Vortex.Modules.Utils,e="BES.ProTrack.Vortex.Modules.SendInterface";d.extendNamespace(window,e,c)}),function(a){a(["./utils","./log","./ajax","./agentinfo","./send.interface"],function(a,b,c,d,e){if(!JSON)throw new Error("BES.ProTrack.Vortex depends on JSON support.");if(!a)throw new Error("BES.ProTrack.Vortex depends on Utils module.");if(!c)throw new Error("BES.ProTrack.Vortex depends on Ajax module.");var f=a,g=d,h=b?b.getLog("core.js"):{writeLine:f.noop},i={};if(!e){var j="Cannot find the SendInterface implementation.";throw h.writeLine(j),new Error(j)}return g&&h.writeLine("Found AgentInfo module, enabling Agent detection!"),function(){var a,b,c=f.extend({},i),d=arguments[0];return"object"==typeof d?a=d:(b=d,a=arguments[1]),f.extend(c,a||{}),c.url&&(c.url=f.ensureProperUrlScheme(c.url)),c.userDetailsUrl&&(c.userDetailsUrl=f.ensureProperUrlScheme(c.userDetailsUrl)),new e(b,c)}})}("function"==typeof define&&define.amd?define:function(a,b){if(!BES.ProTrack.Vortex.Modules)throw new Error("Could not load any modules!");var c=b(BES.ProTrack.Vortex.Modules.Utils,BES.ProTrack.Vortex.Modules.Log,BES.ProTrack.Vortex.Modules.Ajax,BES.ProTrack.Vortex.Modules.AgentInfo,BES.ProTrack.Vortex.Modules.SendInterface),d=BES.ProTrack.Vortex.Modules.Utils,e="BES.ProTrack.Vortex.Class";d.extendNamespace(window,e,c)});
//# sourceMappingURL=vortex.modern.min.js.map
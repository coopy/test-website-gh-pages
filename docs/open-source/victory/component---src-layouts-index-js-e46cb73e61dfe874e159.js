webpackJsonp([0x67ef26645b2a],{236:function(e,t){e.exports={layoutContext:{}}},420:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(1),i=n(a),u=r(424),l=n(u),c=r(236),s=n(c);t.default=function(e){return i.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},40:function(e,t){"use strict";e.exports={siteTitle:"Victory",siteTitleAlt:"Victory.js React Charting Library",siteLogo:"/logos/favicon.ico",siteUrl:"https://formidable.com",pathPrefix:"/open-source/victory",googleAnalyticsID:"UA-43290258-1",projectLinks:[{label:"Support",url:"https://gitter.im/FormidableLabs/victory"},{label:"GitHub",url:"https://github.com/FormidableLabs/victory"}],copyright:"Copyright © 2017. Formidable",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},119:function(e,t,r){function n(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,r){var a,s;if(n(e)||n(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,r));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),T=u(t)}catch(e){return!1}if(f.length!=T.length)return!1;for(f.sort(),T.sort(),a=f.length-1;a>=0;a--)if(f[a]!=T[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],r))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=r(121),l=r(120),c=e.exports=function(e,t,r){return r||(r={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?r.strict?e===t:e==t:a(e,t,r))}},120:function(e,t){function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function n(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?r:n,t.supported=r,t.unsupported=n},121:function(e,t){function r(e){var t=[];for(var r in e)t.push(r);return t}t=e.exports="function"==typeof Object.keys?Object.keys:r,t.shim=r},80:function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),f=n(s),T=r(3),p=n(T),d=r(176),E=n(d),A=r(119),h=n(A),y=r(135),S=r(61),b=function(e){var t,r;return r=t=function(t){function r(){return a(this,r),i(this,t.apply(this,arguments))}return u(r,t),r.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case S.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},n,(t={},t[r.type]=[].concat(n[r.type]||[],[l({},o,this.mapNestedChildrenToProps(r,a))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case S.TAG_NAMES.TITLE:return l({},o,(t={},t[n.type]=i,t.titleAttributes=l({},a),t));case S.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case S.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(r={},r[n.type]=l({},a),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=l({},t);return Object.keys(e).forEach(function(t){var n;r=l({},r,(n={},n[t]=e[t],n))}),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(u);switch(r.warnOnInvalidChildren(e,i),e.type){case S.TAG_NAMES.LINK:case S.TAG_NAMES.META:case S.TAG_NAMES.NOSCRIPT:case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=o(t,["children"]),a=l({},n);return r&&(a=this.mapChildrenToProps(r,a)),f.default.createElement(e,a)},c(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r},_=function(){return null},m=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(_),P=b(m);P.renderStatic=P.rewind,t.Helmet=P,t.default=P},61:function(e,t){t.__esModule=!0;var r=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),n=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce(function(e,t){return e[n[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},135:function(e,t,r){(function(e){function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(1),u=n(i),l=r(55),c=n(l),s=r(61),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=h(e,s.TAG_NAMES.TITLE),r=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return t});var n=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&r[i])return t.concat(r)}return t},[])},A=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&P("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var o={};r.filter(function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][c]&&(o[r][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},n[u],o[u]);n[u]=l}return e},[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:d(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(s.ATTRIBUTE_NAMES.HTML,e),linkTags:A(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:A(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:A(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:A(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:A(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:d(s.ATTRIBUTE_NAMES.TITLE,e)}},S=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){S(t)},0)}}(),b=function(e){return clearTimeout(e)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||S:e.requestAnimationFrame||S,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,P=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,R=function(e){g&&m(g),e.defer?g=_(function(){v(e,function(){g=null})}):(v(e),g=null)},v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,T=e.title,p=e.titleAttributes;C(s.TAG_NAMES.BODY,n),C(s.TAG_NAMES.HTML,o),O(T,p);var d={baseTag:I(s.TAG_NAMES.BASE,r),linkTags:I(s.TAG_NAMES.LINK,a),metaTags:I(s.TAG_NAMES.META,i),noscriptTags:I(s.TAG_NAMES.NOSCRIPT,u),scriptTags:I(s.TAG_NAMES.SCRIPT,c),styleTags:I(s.TAG_NAMES.STYLE,f)},E={},A={};Object.keys(d).forEach(function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(A[e]=d[e].oldTags)}),t&&t(),l(e,E,A)},M=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),C(s.TAG_NAMES.TITLE,t)},C=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var T=a.length-1;T>=0;T--)r.removeAttribute(a[T]);o.length===a.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},I=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,r.isEqualNode(e)})?o.splice(i,1):a.push(r)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return r.appendChild(e)}),{oldTags:o,newTags:a}},L=function(e){return Object.keys(e).reduce(function(t,r){var n="undefined"!=typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},N=function(e,t,r,n){var o=L(r),a=M(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,n)+"</"+e+">"},w=function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof n[t]?t:t+'="'+f(n[t],r)+'"';return e?e+" "+o:o},""),a=n.innerHTML||n.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t},t)},j=function(e,t,r){var n,o=(n={key:t},n[s.HELMET_ATTRIBUTE]=!0,n),a=H(r,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},x=function(e,t){return t.map(function(t,r){var n,o=(n={key:r},n[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach(function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]}),u.default.createElement(e,o)})},V=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,r)},toString:function(){return N(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return H(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return w(e,t,r)}}}},k=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,T=void 0===f?"":f,p=e.titleAttributes;return{base:V(s.TAG_NAMES.BASE,t,n),bodyAttributes:V(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:V(s.ATTRIBUTE_NAMES.HTML,o,n),link:V(s.TAG_NAMES.LINK,a,n),meta:V(s.TAG_NAMES.META,i,n),noscript:V(s.TAG_NAMES.NOSCRIPT,u,n),script:V(s.TAG_NAMES.SCRIPT,l,n),style:V(s.TAG_NAMES.STYLE,c,n),title:V(s.TAG_NAMES.TITLE,{title:T,titleAttributes:p},n)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=R,t.mapStateOnServer=k,t.reducePropsToState=y,t.requestAnimationFrame=_,t.warn=P}).call(t,function(){return this}())},424:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(1),l=n(u),c=r(3),s=n(c),f=r(80),T=n(f),p=r(181),d=n(p),E=r(40),A=n(E);r(231);var h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getLocalTitle=function(){var e=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},t=A.default.pathPrefix?A.default.pathPrefix:"/",r=this.props.location.pathname.replace(t,"").replace("/",""),n="";if(""===r)n="Home";else if("about/"===r)n="About";else if(r.includes("guides/")){var o=r.replace("guides/","").replace("/","").replace("-"," ");n="Guides "+o}else if(r.includes("docs/")){var a=r.replace("docs/","").replace("/","").replace("-"," ");n=""+e(a)}return n},t.prototype.render=function(){var e=this.props.children,t=A.default.pathPrefix?A.default.pathPrefix:"/",r=this.props.location.pathname.replace(t,"").replace("/","");return l.default.createElement("div",{className:"Page-wrapper u-fullHeight"},l.default.createElement(T.default,null,l.default.createElement("title",null,A.default.siteTitle+" |  "+this.getLocalTitle()),l.default.createElement("meta",{name:"description",content:A.default.siteDescription})),l.default.createElement(d.default,{home:""===r}),e())},t}(l.default.Component);h.propTypes={children:s.default.any,history:s.default.any,location:s.default.object},t.default=h,e.exports=t.default},181:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(1),l=n(u),c=r(3),s=n(c),f=r(52),T=n(f),p=r(232),d=r(40),E=n(d),A=r(262),h=n(A),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=l.default.createElement(T.default,{to:"/",style:{display:"block",height:"50px"},dangerouslySetInnerHTML:{__html:h.default}});return l.default.createElement(p.Header,{className:"victory",theme:"light"},l.default.createElement("div",{className:"default",style:{paddingBottom:0}},e,l.default.createElement(T.default,{to:"/about/"},"About"),l.default.createElement(T.default,{to:"/docs/"},"Docs"),l.default.createElement(T.default,{to:"/docs/faq"},"FAQ"),l.default.createElement(T.default,{to:"/guides/"},"Guides"),l.default.createElement(T.default,{to:"/gallery/"},"Gallery"),E.default.projectLinks.map(function(e){return l.default.createElement("a",{key:e.url,href:e.url},e.label)})))},t}(u.Component);y.propTypes={home:s.default.bool},y.defaultProps={home:!1},t.default=y,e.exports=t.default},231:function(e,t){},262:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 758 100" role="img" style="width: auto;height: 100%;max-width: 100%;"><title>Victory</title><path d="M26.75,7.58H63.83V9.26H50.51l26.64,69.6,26.28-69.6H90.35V7.58h25.92V9.26h-10.8L73.19,94.82h-3L37.55,9.26H26.75V7.58Z"/><path d="M140.38,91.34H153.7V9.26H140.38V7.58H179V9.26H165.7V91.34H179V93H140.38V91.34Z"/><path d="M285.1,93h-1.8a11.55,11.55,0,0,0-1.92-1.74A5.79,5.79,0,0,0,278,90.5a13.11,13.11,0,0,0-3.9.66l-4.8,1.5a58.69,58.69,0,0,1-6.06,1.5,38.76,38.76,0,0,1-7.44.66,40.46,40.46,0,0,1-14.7-2.76,39.89,39.89,0,0,1-13.5-9,51.9,51.9,0,0,1-9.84-13.92,41.58,41.58,0,0,1-4-18.6A46.56,46.56,0,0,1,226.06,19a43.32,43.32,0,0,1,13.56-9.9,39.61,39.61,0,0,1,17-3.66,27.34,27.34,0,0,1,6.6.72,41.57,41.57,0,0,1,5.16,1.62q2.28,0.9,4.2,1.62a10.56,10.56,0,0,0,3.72.72,5.74,5.74,0,0,0,3.42-.78,12.76,12.76,0,0,0,1.86-1.74h1.8v24H282.1a73,73,0,0,0-2.76-9,25.53,25.53,0,0,0-4.68-7.86A22.18,22.18,0,0,0,267,9.2a27.69,27.69,0,0,0-11.46-2.1,27.31,27.31,0,0,0-10.92,2A23,23,0,0,0,237,14.36,25.66,25.66,0,0,0,232,22a46.64,46.64,0,0,0-2.82,9.24,73.19,73.19,0,0,0-1.26,9.84q-0.3,5-.3,9.42a89.19,89.19,0,0,0,2,20.88q2,8.28,5.7,13.08a19.59,19.59,0,0,0,8.82,6.72,32.45,32.45,0,0,0,11.4,1.92q8,0,13-2.28a22,22,0,0,0,7.92-5.94A26.15,26.15,0,0,0,281,76.64q1.56-4.62,2.76-9.18h1.32V93Z"/><path d="M339.34,91.34h13.32V9.26h-7a39.4,39.4,0,0,0-5.4.42A15.49,15.49,0,0,0,334.24,12a20.8,20.8,0,0,0-5.88,6.06,39.32,39.32,0,0,0-4.86,11.46h-1.32v-22h73v22h-1.32A39.42,39.42,0,0,0,389,18.08,20.83,20.83,0,0,0,383.08,12,15.5,15.5,0,0,0,377,9.68a39.44,39.44,0,0,0-5.4-.42h-7V91.34H378V93H339.34V91.34Z"/><path d="M428.26,50.18A41.73,41.73,0,0,1,432,32.42a49.48,49.48,0,0,1,9.72-14.16,45.4,45.4,0,0,1,13.38-9.42A35.36,35.36,0,0,1,470,5.42a36.8,36.8,0,0,1,15.42,3.42,44.41,44.41,0,0,1,13.38,9.42,46.41,46.41,0,0,1,9.42,14.16,44.16,44.16,0,0,1,3.54,17.76,43.63,43.63,0,0,1-3.24,16.44,47.67,47.67,0,0,1-8.88,14.28A45,45,0,0,1,486.4,91,35.9,35.9,0,0,1,470,94.82a37.77,37.77,0,0,1-16.68-3.72,42.77,42.77,0,0,1-13.26-9.9,45.45,45.45,0,0,1-8.7-14.28A46.16,46.16,0,0,1,428.26,50.18Zm13.8,0A108.11,108.11,0,0,0,443.5,69a37.93,37.93,0,0,0,4.8,13.44,21.31,21.31,0,0,0,8.64,8,33.58,33.58,0,0,0,26.1,0,21.23,21.23,0,0,0,8.7-8A38,38,0,0,0,496.54,69,108.12,108.12,0,0,0,498,50.18a115.88,115.88,0,0,0-1.08-16,43.86,43.86,0,0,0-4.14-13.8,24.64,24.64,0,0,0-8.52-9.66Q478.78,7.1,470,7.1T455.8,10.7a24.63,24.63,0,0,0-8.52,9.66,43.86,43.86,0,0,0-4.14,13.8A115.88,115.88,0,0,0,442.06,50.18Z"/><path d="M545.14,91.34h13.32V9.26H545.14V7.58h22.8q1.44,0,2.88-.06t2.88-.18q1.44,0,2.88-.06t2.88-.06A88.34,88.34,0,0,1,591.94,8,20.85,20.85,0,0,1,602,12.5,18.5,18.5,0,0,1,608,19.82a19.65,19.65,0,0,1,1.74,7.68,21.24,21.24,0,0,1-.66,4.62,15.57,15.57,0,0,1-2.88,5.76,21.52,21.52,0,0,1-6.42,5.4,29,29,0,0,1-11.16,3.3v0.24q1.92,0.24,5.22.9a30.86,30.86,0,0,1,6.72,2.22,24.92,24.92,0,0,1,6.3,4.14,14.05,14.05,0,0,1,4.08,6.66,29,29,0,0,1,1,5.46q0.3,3.06.48,6.3t0.36,6.24a30.37,30.37,0,0,0,.66,5,18.54,18.54,0,0,0,2.28,5.64,5.48,5.48,0,0,0,5,2.52,9.6,9.6,0,0,0,3.24-.6,8,8,0,0,0,3-1.92l1.08,1.32q-0.6.48-1.38,1a10.05,10.05,0,0,1-2,1,14.85,14.85,0,0,1-2.94.78,25.79,25.79,0,0,1-4.26.3,22.83,22.83,0,0,1-8-1.2,11.82,11.82,0,0,1-5.1-3.54,14.93,14.93,0,0,1-2.82-5.76,45.83,45.83,0,0,1-1.26-8L599.5,64.46a22.75,22.75,0,0,0-2.4-9.36,13.24,13.24,0,0,0-4.5-4.92,13,13,0,0,0-5.34-1.86,45.56,45.56,0,0,0-4.8-.3h-12V91.34h13.32V93H545.14V91.34Zm25.32-45h11a21,21,0,0,0,6.12-.84,10.68,10.68,0,0,0,4.74-2.94,14,14,0,0,0,3.06-5.7,32.35,32.35,0,0,0,1.08-9.12,25.82,25.82,0,0,0-1.62-10,13.55,13.55,0,0,0-4.2-5.7,13.85,13.85,0,0,0-5.76-2.52,34,34,0,0,0-6.3-.6q-2.16,0-4.38.06a31.17,31.17,0,0,0-3.78.3V46.34Z"/><path d="M669.69,91.34H683V56.9L656,9.26H645.09V7.58h36.72V9.26h-12l24,42.24L716.49,9.26H704.37V7.58h25.68V9.26H718.41L695,53.06V91.34h13.32V93H669.69V91.34Z"/><path d="M735.82,7.52h5.87V8.33h-2.46v6.73h-0.95V8.33h-2.46V7.52Z"/><path d="M744.63,7.52l2.54,5.11,2.52-5.11H751v7.55h-0.95V8.86l-2.59,5.26h-0.64l-2.63-5.34v6.29h-0.95V7.52h1.36Z"/></svg>\n'}});
//# sourceMappingURL=component---src-layouts-index-js-e46cb73e61dfe874e159.js.map
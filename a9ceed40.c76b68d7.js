/*! For license information please see a9ceed40.c76b68d7.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(178),n(177)),i={id:"using-https-in-development",title:"Using HTTPS in Development",sidebar_label:"HTTPS in Development"},c=[{value:"Windows (cmd.exe)",id:"windows-cmdexe",children:[]},{value:"Windows (Powershell)",id:"windows-powershell",children:[]},{value:"Linux, macOS (Bash)",id:"linux-macos-bash",children:[]},{value:"Custom SSL certificate",id:"custom-ssl-certificate",children:[{value:"Linux, macOS (Bash)",id:"linux-macos-bash-1",children:[]}]}],u={id:"using-https-in-development",title:"Using HTTPS in Development",description:"> Note: this feature is available with `react-scripts@0.4.0` and higher.",source:"@site/../docs/using-https-in-development.md",permalink:"/docs/using-https-in-development",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/using-https-in-development.md",lastUpdatedBy:"Kanitkorn Sujautra",lastUpdatedAt:1582154047,sidebar_label:"HTTPS in Development",sidebar:"docs",previous:{title:"Analyzing the Bundle Size",permalink:"/docs/analyzing-the-bundle-size"},next:{title:"Adding a Stylesheet",permalink:"/docs/adding-a-stylesheet"}},l={rightToc:c,metadata:u},s="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@0.4.0")," and higher.")),Object(a.b)("p",null,"You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/proxying-api-requests-in-development"}),'the "proxy" feature')," to proxy requests to an API server when that API server is itself serving HTTPS."),Object(a.b)("p",null,"To do this, set the ",Object(a.b)("inlineCode",{parentName:"p"},"HTTPS")," environment variable to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", then start the dev server as usual with ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),":"),Object(a.b)("h3",{id:"windows-cmdexe"},"Windows (cmd.exe)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cmd"}),"set HTTPS=true&&npm start\n")),Object(a.b)("p",null,"(Note: the lack of whitespace is intentional.)"),Object(a.b)("h3",{id:"windows-powershell"},"Windows (Powershell)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-Powershell"}),'($env:HTTPS = "true") -and (npm start)\n')),Object(a.b)("h3",{id:"linux-macos-bash"},"Linux, macOS (Bash)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"HTTPS=true npm start\n")),Object(a.b)("p",null,"Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page."),Object(a.b)("h2",{id:"custom-ssl-certificate"},"Custom SSL certificate"),Object(a.b)("p",null,"To set a custom certificate, set the ",Object(a.b)("inlineCode",{parentName:"p"},"SSL_CRT_FILE")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SSL_KEY_FILE")," environment variables to the path of the certificate and key files in the same way you do for ",Object(a.b)("inlineCode",{parentName:"p"},"HTTPS")," above. Note that you will also need to set ",Object(a.b)("inlineCode",{parentName:"p"},"HTTPS=true"),"."),Object(a.b)("h3",{id:"linux-macos-bash-1"},"Linux, macOS (Bash)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start\n")),Object(a.b)("p",null,"To avoid having to set the environment variable each time, you can either include in the ",Object(a.b)("inlineCode",{parentName:"p"},"npm start")," script like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "start": "HTTPS=true react-scripts start"\n}\n')),Object(a.b)("p",null,"Or you can create a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file with ",Object(a.b)("inlineCode",{parentName:"p"},"HTTPS=true")," set.\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/adding-custom-environment-variables"}),"Learn more about environment variables in CRA"),"."))}p.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),p=r,f=s[c+"."+p]||s[p]||l[p]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},u,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";e.exports=n(179)},179:function(e,t,n){"use strict";var r=n(180),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||v}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var S=w.prototype=new g;S.constructor=w,r(S,j.prototype),S.isPureReactComponent=!0;var T={current:null},x={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:x.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g,E=[];function $(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function L(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case i:u=!0}}if(u)return r(o,t,""===n?"."+H(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+H(c=t[l],l);u+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(c=t.next()).done;)u+=e(c=c.value,s=n+H(c,l++),r,o);else if("object"===c)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function H(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(N,"$&/")+"/"),L(e,I,t=$(t,a,r,o)),R(t)}function U(){var e=T.current;if(null===e)throw Error(h(321));return e}var D={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;L(e,A,t=$(null,null,t,n)),R(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:c,Profiler:l,StrictMode:u,Suspense:d,createElement:_,cloneElement:function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)C.call(t,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r}},F={default:D},B=F&&D||F;e.exports=B.default||B},180:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,u=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(u[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(u[c[p]]=n[c[p]])}}return u}}}]);
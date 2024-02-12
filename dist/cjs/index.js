"use strict";var e=require("react"),r=require("@radix-ui/react-icons"),t=require("@radix-ui/react-radio-group"),a=require("@wds-utilities/cn");function n(e){var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var o=n(e),c=n(t),i=function(){return i=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},i.apply(this,arguments)};function s(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;var l=o.forwardRef((function(e,r){var t=e.className,n=s(e,["className"]);return o.createElement(c.Root,i({className:a.cn("grid gap-2",t)},n,{ref:r}))}));l.displayName=c.Root.displayName;var u=o.forwardRef((function(e,r){return o.createElement(c.Indicator,i({ref:r},e))})),f=o.forwardRef((function(e,t){var n=e.className;e.children;var l=s(e,["className","children"]);return o.createElement(c.Item,i({ref:t,className:a.cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n)},l),o.createElement(u,{className:"flex items-center justify-center"},o.createElement(r.CheckIcon,{className:"h-3.5 w-3.5 fill-primary"})))}));f.displayName=c.Item.displayName,exports.RadioGroup=l,exports.RadioGroupItem=f;
//# sourceMappingURL=index.js.map
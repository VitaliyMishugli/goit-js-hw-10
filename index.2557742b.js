!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),a=Object.prototype.toString,d=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(y(e)){var c="function"==typeof e.valueOf?e.valueOf():e;e=y(c)?c+"":c}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=r.test(e);return l||u.test(e)?i(e.slice(2),l?2:8):f.test(e)?NaN:+e}fetch("https://restcountries.com/v3.1/name/".concat("spain","?fields=flagcdn.com/per.svg")).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.2557742b.js.map

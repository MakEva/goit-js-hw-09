!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var a=r("6JpON"),u={form:document.querySelector(".form"),delay:document.querySelector("input[name='delay']"),step:document.querySelector("input[name='step']"),amount:document.querySelector("input[name='amount']")};function l(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.form.addEventListener("submit",(function(n){n.preventDefault();var t=parseInt(u.delay.value),o=parseInt(u.step.value),r=parseInt(u.amount.value);for(i=0;i<r;i++)l(i+1,t+i*o).then((function(n){var t=n.position,o=n.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(a).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.d8736101.js.map

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./CanvasContext.ts":
/*!**************************!*\
  !*** ./CanvasContext.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasContext = void 0;
class CanvasContext {
    constructor() {
        try {
            this.canvas = $('#CanvasEl').get(0);
            this.ctx = this.canvas.getContext('2d');
        }
        catch (e) {
            console.log('We have encountered an error: ' + e);
        }
    }
    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(10, 10, 150, 100);
    }
}
exports.CanvasContext = CanvasContext;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const CanvasContext_1 = __webpack_require__(/*! ./CanvasContext */ "./CanvasContext.ts");
$(() => {
    let ctxtest = new CanvasContext_1.CanvasContext();
    console.log(ctxtest.ctx);
    ctxtest.draw();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
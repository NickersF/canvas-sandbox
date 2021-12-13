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
    constructor(canvasEl) {
        try {
            this.canvasElement = $('#' + canvasEl).get(0);
            this.canvasViewport = $("#CanvasViewport");
            this.ctx = this.canvasElement.getContext('2d');
            this.canvasElement.width = this.canvasViewport.width();
            this.canvasElement.height = this.canvasViewport.height();
        }
        catch (e) {
            console.log('Exception caught: ' + e);
        }
    }
    resizeViewport() {
        $(window).on("resize", () => {
            this.canvasElement.width = this.canvasViewport.width();
            this.canvasElement.height = this.canvasViewport.height();
            this.draw();
        });
    }
    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(10, 10, 150, 100);
    }
}
exports.CanvasContext = CanvasContext;


/***/ }),

/***/ "./LineTool.ts":
/*!*********************!*\
  !*** ./LineTool.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineTool = void 0;
class LineTool {
    constructor() {
    }
}
exports.LineTool = LineTool;


/***/ }),

/***/ "./RectangleTool.ts":
/*!**************************!*\
  !*** ./RectangleTool.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RectangleTool = void 0;
class RectangleTool {
    constructor() {
    }
    sampleCoords(canvasEl) {
        $("#" + canvasEl).on("mousemove", e => {
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;
            $("#CursorXPos").text(this.offsetX);
            $("#CursorYPos").text(this.offsetY);
        });
    }
}
exports.RectangleTool = RectangleTool;


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
const LineTool_1 = __webpack_require__(/*! ./LineTool */ "./LineTool.ts");
const RectangleTool_1 = __webpack_require__(/*! ./RectangleTool */ "./RectangleTool.ts");
$(() => {
    let canvasContext = new CanvasContext_1.CanvasContext("CanvasEl");
    let rectangleTool = new RectangleTool_1.RectangleTool();
    let lineTool = new LineTool_1.LineTool();
    canvasContext.resizeViewport();
    canvasContext.draw();
    rectangleTool.sampleCoords("CanvasEl");
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
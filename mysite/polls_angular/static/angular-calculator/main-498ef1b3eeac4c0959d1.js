(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");





const routes = [
    {
        path: 'calculator',
        component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"],
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");



class AppComponent {
    constructor() {
        this.title = 'angular-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-calculator");
    } }, directives: [_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__["CalculatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CalculatorComponent {
    constructor() {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
    }
    ngOnInit() {
    }
    getNumber(v) {
        console.log(v);
        if (this.waitForSecondNumber) {
            this.currentNumber = v;
            this.waitForSecondNumber = false;
        }
        else {
            this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
        }
    }
    getDecimal() {
        if (!this.currentNumber.includes('.')) {
            this.currentNumber += '.';
        }
    }
    doCalculation(op, secondOp) {
        switch (op) {
            case '+':
                return this.firstOperand += secondOp;
            case '-':
                return this.firstOperand -= secondOp;
            case '*':
                return this.firstOperand *= secondOp;
            case '/':
                return this.firstOperand /= secondOp;
            case '=':
                return secondOp;
        }
    }
    getOperation(op) {
        console.log(op);
        if (this.firstOperand === null) {
            this.firstOperand = Number(this.currentNumber);
        }
        else if (this.operator) {
            const result = this.doCalculation(this.operator, Number(this.currentNumber));
            this.currentNumber = String(result);
            this.firstOperand = result;
        }
        this.operator = op;
        this.waitForSecondNumber = true;
        console.log(this.firstOperand);
    }
    clear() {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 37, vars: 1, consts: [[1, "calculator"], ["type", "text", "value", "0", "disabled", "", 1, "calculator-screen", 3, "value"], [1, "calculator-keys"], ["type", "button", "value", "+", 1, "operator", 3, "click"], ["type", "button", "value", "-", 1, "operator", 3, "click"], ["type", "button", "value", "*", 1, "operator", 3, "click"], ["type", "button", "value", "/", 1, "operator", 3, "click"], ["type", "button", "value", "7", 3, "click"], ["type", "button", "value", "8", 3, "click"], ["type", "button", "value", "9", 3, "click"], ["type", "button", "value", "4", 3, "click"], ["type", "button", "value", "5", 3, "click"], ["type", "button", "value", "6"], ["type", "button", "value", "1", 3, "click"], ["type", "button", "value", "2", 3, "click"], ["type", "button", "value", "3"], ["type", "button", "value", "0", 3, "click"], ["type", "button", "value", ".", 1, "decimal", 3, "click"], ["type", "button", "value", "all-clear", 1, "all-clear", 3, "click"], ["type", "button", "value", "=", 1, "equal-sign", 3, "click"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_3_listener() { return ctx.getOperation("+"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_5_listener() { return ctx.getOperation("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_7_listener() { return ctx.getOperation("*"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_9_listener() { return ctx.getOperation("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_11_listener() { return ctx.getNumber("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_13_listener() { return ctx.getNumber("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_15_listener() { return ctx.getNumber("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_17_listener() { return ctx.getNumber("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_19_listener() { return ctx.getNumber("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_23_listener() { return ctx.getNumber("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_25_listener() { return ctx.getNumber("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_29_listener() { return ctx.getNumber("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_31_listener() { return ctx.getDecimal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_33_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_35_listener() { return ctx.getOperation("="); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentNumber);
    } }, styles: [".calculator[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    position: inherit;\n    top: 0;\n    left: 0;\n    width: 400px;\n  }\n\n  .calculator-screen[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 5rem;\n    height: 56px;\n    border: none;\n    background-color: #252525;\n    color: #fff;\n    text-align: right;\n    padding-right: 20px;\n    padding-left: 10px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    height: 60px;\n    background-color: #fff;\n    border-radius: 3px;\n    border: 1px solid #c4c4c4;\n    background-color: transparent;\n    font-size: 2rem;\n    color: #333;\n    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));\n    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);\n    text-shadow: 0 1px rgba(255,255,255,.4);\n  }\n\n  button[_ngcontent-%COMP%]:hover {\n    background-color: #eaeaea;\n  }\n\n  .operator[_ngcontent-%COMP%] {\n    color: #337cac;\n  }\n\n  .all-clear[_ngcontent-%COMP%] {\n    background-color: #f0595f;\n    border-color: #b0353a;\n    color: #fff;\n  }\n\n  .all-clear[_ngcontent-%COMP%]:hover {\n    background-color: #f17377;\n  }\n\n  .equal-sign[_ngcontent-%COMP%] {\n    background-color: #2e86c0;\n    border-color: #337cac;\n    color: #fff;\n    height: 100%;\n    grid-area: 2 / 4 / 6 / 5;\n  }\n\n  .equal-sign[_ngcontent-%COMP%]:hover {\n    background-color: #4e9ed4;\n  }\n\n  .calculator-keys[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 10px;\n    padding: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsV0FBVztJQUNYLHdGQUF3RjtJQUN4RixpS0FBaUs7SUFDakssdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsY3VsYXRvciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IGluaGVyaXQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG5cbiAgLmNhbGN1bGF0b3Itc2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCA1MCUscmdiYSgwLDAsMCwuMDQpKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMDUpLCBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwuNDUpLCBpbnNldCAwIC0xcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgMCAxcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNCk7XG4gIH1cblxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIH1cblxuICAub3BlcmF0b3Ige1xuICAgIGNvbG9yOiAjMzM3Y2FjO1xuICB9XG5cbiAgLmFsbC1jbGVhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTk1ZjtcbiAgICBib3JkZXItY29sb3I6ICNiMDM1M2E7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuYWxsLWNsZWFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE3Mzc3O1xuICB9XG5cbiAgLmVxdWFsLXNpZ24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTg2YzA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzM3Y2FjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gNiAvIDU7XG4gIH1cblxuICAuZXF1YWwtc2lnbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlOWVkNDtcbiAgfVxuXG4gIC5jYWxjdWxhdG9yLWtleXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator',
                templateUrl: './calculator.component.html',
                styleUrls: ['./calculator.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ })

},[["./src/main.ts","runtime","vendor"]]]);
//# sourceMappingURL=main-498ef1b3eeac4c0959d1.js.map
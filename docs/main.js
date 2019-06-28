(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGAIN PRELOADER -->\r\n<ngx-spinner bdOpacity=0.9 bdColor=\"#038BC8\" size=\"medium\" color=\"#fff\" type=\"square-jelly-box\" fullScreen=\"true\">\r\n  <p style=\"color: white\"> Loading... </p>\r\n</ngx-spinner>\r\n<!-- END PRELOADER -->\r\n<app-navbar></app-navbar>\r\n<app-header></app-header>\r\n<app-sections></app-sections>\r\n<app-footer></app-footer>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 6000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_sections_sections_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/sections/sections.component */ "./src/app/shared/sections/sections.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _shared_sections_sections_component__WEBPACK_IMPORTED_MODULE_8__["SectionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start footer -->\r\n<footer id=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"footer-social\">\r\n          <a href=\"#\" ><i class=\"fa fa-instagram\"></i></a>\r\n          <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n          <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\r\n          <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n        </div>\r\n        <div class=\"footer-text\">\r\n          <p>Designed by <a href=\"#\">Erick sossa & Jonathan Florez </a> {{anio}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n<!-- End -->\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start header section -->\r\n<header id=\"header\">\r\n  <div class=\"header-inner\">\r\n    <!-- Header image -->\r\n    <img src=\"assets/images/header-bg.jpg\" alt=\"img\">\r\n    <div class=\"overlay\">\r\n      <div class=\"header-content\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"header-top\">\r\n                <!-- Start logo area -->\r\n                <div class=\"logo-area\">\r\n                  <!-- Image based logo -->\r\n                  <!-- <a class=\"logo\" href=\"index.html\"><img src=\"\" alt=\"logo\"></a> -->\r\n                  <!-- Text based logo -->\r\n                  <a class=\"logo\" href=\"index.html\">GTrip.</a>\r\n                </div>\r\n                <!-- End logo area -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"header-bottom\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-sm-6\">\r\n                    <div class=\"header-bottom-left\">\r\n                      <h1>the passion for travel brought us here.</h1>\r\n                      <p>You know where, but you do not know how.\r\n                        Live your adventure and let yourself be guided.</p>\r\n                      <a class=\"download-btn\" href=\"#\">Download App</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-6\">\r\n                    <div class=\"header-bottom-right\">\r\n                      <!-- <img src=\"assets/images/iphone-group1.png\" alt=\"iphone grpup img\"> -->\r\n                      <img src=\"assets/images/mockup.png\" alt=\"iphone grpup img\" >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<!-- End header section -->\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start menu area -->\n<div class=\"nav-area\">\n  <a id=\"menu-btn\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\n  <nav class=\"main-nav\" id=\"main-menu\">\n    <span class=\"fa fa-remove\" id=\"close\"></span>\n    <ul>\n      <li> <a href=\"#header\"><i class=\"fa fa-home\"></i><span>Home</span></a></li>\n      <li><a href=\"#features\"><i class=\"fa fa-server\"></i><span>Features</span></a></li>\n      <li><a href=\"#howit-works\"><i class=\"fa fa-hourglass\"></i><span>How it Works</span></a></li>\n      <li><a href=\"#screenshot\"><i class=\"fa fa-image\"></i><span>Screenshots</span></a></li>\n      <li><a href=\"#download-app\"><i class=\"fa fa-download\"></i><span>Download</span></a></li>\n      <li><a href=\"#testimonial\"><i class=\"fa fa-certificate\"></i><span>Work Team</span></a></li>\n      <li><a href=\"#contact\"><i class=\"fa fa-envelope-o\"></i><span>Contact</span></a></li>\n    </ul>\n  </nav>\n</div>\n<!-- End menu area -->\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/sections/sections.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/sections/sections.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Features -->\r\n<section id=\"features\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"title-area\">\r\n          <h2 class=\"title\">Awesome <span>Features</span></h2>\r\n          <p>Learn more about the most important features of the app.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"features-area\">\r\n          <div class=\"row\">\r\n            <!-- Start features left -->\r\n            <div class=\"col-md-4\">\r\n              <div class=\"features-left\">\r\n                <ul class=\"features-list features-list-left\">\r\n                  <li class=\"wow fadeInLeft\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">\r\n                    <i class=\"fa fa-desktop\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>Visibility in Android and IOS</h4>\r\n                      <p>Multiplataforma is present in the two main platforms, allowing early market entry.</p>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"wow fadeInLeft\" data-wow-duration=\"0.75s\" data-wow-delay=\"0.75s\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>Customize your profile</h4>\r\n                      <p>has the option to customize your personal information, to enhance your experience in the application.</p>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">\r\n                    <i class=\"fa fa-camera\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>Creative Design</h4>\r\n                      <p>eye-catching interfaces, good interaction in the app and many other things you're going to like.</p>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">\r\n                    <i class=\"fa fa-cloud\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>Real-time data</h4>\r\n                      <p>Share your best experiences with others</p>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!-- End features left -->\r\n            <!-- Start features img -->\r\n            <div class=\"col-md-4\">\r\n              <div class=\"feature-img wow fadeInUp\">\r\n                <img src=\"assets/images/splash2.png\" alt=\"iPhone mockup\">\r\n              </div>\r\n            </div>\r\n            <!-- End features img -->\r\n            <!-- Start features right -->\r\n            <div class=\"col-md-4\">\r\n              <div class=\"features-right\">\r\n                <ul class=\"features-list features-list-right\">\r\n                  <li class=\"wow fadeInRight\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">\r\n                    <i class=\"fa fa-paper-plane\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>Open the way</h4>\r\n                      <p>Inspires more people to travel and live unforgettable experiences</p>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"wow fadeInRight\" data-wow-duration=\"0.75s\" data-wow-delay=\"0.75s\">\r\n                    <i class=\"fa fa-user-plus\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>Meet people</h4>\r\n                      <p>The world is full of good people. Give yourself the opportunity to meet them</p>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">\r\n                    <i class=\"fa fa-bullhorn\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>The world through your eyes</h4>\r\n                      <p>Show the world how a true traveler makes it</p>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">\r\n                    <i class=\"fa fa-suitcase\"></i>\r\n                    <div class=\"features-content\">\r\n                      <h4>Take us with you</h4>\r\n                      <p>Download our app and take us always with you</p>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!-- End features right -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- End Features -->\r\n\r\n<!-- Start how it works -->\r\n<section id=\"howit-works\">\r\n  <div class=\"howit-works-area\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"title-area wow fadeInLeft\">\r\n            <h2 class=\"title\">How it <span>Works</span></h2>\r\n            <p>Share your travel preferences and choose who you plan your trip with!</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"howit-works-video\">\r\n              <iframe  src=\"https://www.youtube.com/embed/uKq4XwG-SOQ\" width=\"428\" height=\"276\"  \r\n              frameborder=\"0\" allow=\"accelerometer;  encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n            <!-- <iframe src=\"https://vimeo.com/user96067565/review/344816896/ccc67fe322\" width=\"428\" height=\"276\" frameborder=\"0\"\r\n              webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n<!-- End how it works -->\r\n\r\n<!-- Start screenshot -->\r\n<section id=\"screenshot\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"title-area wow fadeInUp\">\r\n          <h2 class=\"title\">App <span>Screenshots</span></h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"screenshots-area\">\r\n          <ul class=\"screenshots-slide\">\r\n            <li class=\"col-md-3 wow fadeInLeft\">\r\n              <a class=\"fancybox\" data-fancybox-group=\"gallery\" href=\"assets/images/Captura.PNG\"><img src=\"assets/images/Captura.PNG\"\r\n                  alt=\"app screenshot\" width=\"285 px\" >\r\n                <div class=\"view-btn-area\">\r\n                  <span class=\"fa fa-search view-btn\"></span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"col-md-3 wow fadeInLeft\">\r\n              <a class=\"fancybox\" data-fancybox-group=\"gallery\" href=\"assets/images/Captura2.PNG\"><img src=\"assets/images/Captura2.PNG\"\r\n                  alt=\"app screenshot\" width=\"287 px\">\r\n                <div class=\"view-btn-area\">\r\n                  <span class=\"fa fa-search view-btn\"></span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"col-md-3 wow fadeInLeft\">\r\n              <a class=\"fancybox\" data-fancybox-group=\"gallery\" href=\"assets/images/Captura5.jpeg\"><img src=\"assets/images/Captura5.jpeg\"\r\n                  alt=\"app screenshot\" width=\"275 px\" height=\"510 px\">\r\n                <div class=\"view-btn-area\">\r\n                  <span class=\"fa fa-search view-btn\"></span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"col-md-3 wow fadeInLeft\">\r\n              <a class=\"fancybox\" data-fancybox-group=\"gallery\" href=\"assets/images/Captura6.PNG\"><img src=\"assets/images/Captura6.PNG\"\r\n                  alt=\"app screenshot\" width=\"275 px\" height=\"510 px\">\r\n                <div class=\"view-btn-area\">\r\n                  <span class=\"fa fa-search view-btn\"></span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"col-md-3 wow fadeInLeft\">\r\n              <a class=\"fancybox\" data-fancybox-group=\"gallery\" href=\"assets/images/Captura3.jpeg\"><img src=\"assets/images/Captura3.jpeg\"\r\n                  alt=\"app screenshot\" width=\"275 px\" height=\"510 px\">\r\n                <div class=\"view-btn-area\">\r\n                  <span class=\"fa fa-search view-btn\"></span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"col-md-3 wow fadeInLeft\">\r\n              <a class=\"fancybox\" data-fancybox-group=\"gallery\" href=\"assets/images/Captura4.jpeg\"><img src=\"assets/images/Captura4.jpeg\"\r\n                  alt=\"app screenshot\" width=\"285 px\" height=\"510 px\">\r\n                <div class=\"view-btn-area\">\r\n                  <span class=\"fa fa-search view-btn\"></span>\r\n                 </div>\r\n               </a>\r\n             </li>\r\n           </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- End screenshot -->\r\n\r\n<!-- Start download app -->\r\n<section id=\"download-app\">\r\n  <div class=\"download-overlay\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"title-area wow fadeInUp\">\r\n            <h2 class=\"title\">Download <span>App</span></h2>\r\n            <p>Don't wait any longer, download from our different platforms.</p>\r\n          </div>\r\n        </div>\r\n        <!-- Start download app content -->\r\n        <div class=\"col-md-12\">\r\n          <div class=\"download-app-content\">\r\n\r\n            <!-- Start single download -->\r\n            <a class=\"single-download wow fadeInLeft\" data-wow-duration=\"0.75s\" data-wow-delay=\"0.75s\" href=\"#\">\r\n              <div class=\"download-icon\">\r\n                <i class=\"fa fa-play\"></i>\r\n              </div>\r\n              <div class=\"download-content\">\r\n                <p>Coming soon available on the</p>\r\n                <span>Play Store</span>\r\n              </div>\r\n            </a>\r\n            <!-- Start single download -->\r\n            <a class=\"single-download wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"1s\" href=\"#\">\r\n              <div class=\"download-icon\">\r\n                <i class=\"fa fa-apple\"></i>\r\n              </div>\r\n              <div class=\"download-content\">\r\n                <p>Coming soon available on the</p>\r\n                <span>Apple Store</span>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- End download app -->\r\n\r\n<!-- Start testimonial -->\r\n<section id=\"testimonial\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"title-area wow fadeInLeft\">\r\n          <h2 class=\"title\">Work <span>Team</span></h2>\r\n          <p>We're people who like you are curious and in we love to go beyond what we see.\r\n            That's why our work is focused on solving problems in a creative way.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"story-carousel\">\r\n          <div class=\"story-carousel__slide story-carousel__slide--current\">\r\n            <div class=\"story-carousel-card-container\">\r\n              <div class=\"story-card\">\r\n                <div class=\"story-card__banner\">\r\n                  <img src=\"assets/images/developer2.jpeg\" alt=\"Card 1 banner graphic\" class=\"story-card-image\" />\r\n                </div>\r\n                <div class=\"story-card__content\">\r\n                  <div class=\"card-content-primary\">\r\n                    <div class=\"card-content-primary__logo\">\r\n                      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonkAHjSYNcDN5WpLi4VEQz4k_1oIhtI-KJOwlhPUTAVH0ZQIfhw\"\r\n                        alt=\"logo\" class=\"story-card-logo\" />\r\n                    </div>\r\n                    <h3 class=\"card-content-primary__passage title\">DEVELOPER...</h3>\r\n                  </div>\r\n                  <div>\r\n                    <a href=\"https://www.instagram.com/sossaerick/?hl=es-la\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-instagram\"></i></a>\r\n                    <a href=\"https://twitter.com/ericksossa\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"https://www.facebook.com/sosaerick\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-facebook-official\"></i></a>\r\n                    <a href=\"https://github.com/ericksossa\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-github\"></i></a>\r\n                  </div>\r\n                  <div class=\"card-content-secondary\">\r\n                    <p class=\"card-content-secondary__quote\">Full-stack.</p>\r\n                    <p class=\"card-content-secondary__author\">Erick Sossa.</p>\r\n                    <p class=\"card-content-secondary__position\">Medellín-Colombia</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"story-card\">\r\n                <div class=\"story-card__banner\">\r\n                  <img src=\"assets/images/developer1.jpeg\" alt=\"Card 1 banner graphic\" class=\"story-card-image\" />\r\n                </div>\r\n                <div class=\"story-card__content\">\r\n                  <div class=\"card-content-primary\">\r\n                    <div class=\"card-content-primary__logo\">\r\n                      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonkAHjSYNcDN5WpLi4VEQz4k_1oIhtI-KJOwlhPUTAVH0ZQIfhw\"\r\n                        alt=\"logo\" class=\"story-card-logo\" />\r\n                    </div>\r\n                    <h3 class=\"card-content-primary__passage title\">DEVELOPER...</h3>\r\n                  </div>\r\n                  \r\n                  <div>\r\n                    <a href=\"https://www.instagram.com/jonathanflorezhenao/?hl=es-la\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-instagram\"></i></a>\r\n                    <a href=\"https://twitter.com/FlorezHena\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"https://www.facebook.com/jonathan.florezhenao.5\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-facebook-official\"></i></a>\r\n                    <a href=\"https://github.com/jonathan0207\" class=\"col-md-2\" target=\"newtab\"><i class=\"fa fa-github\"></i></a>\r\n                  </div>\r\n                  <div class=\"card-content-secondary\">\r\n                    <p class=\"card-content-secondary__quote\">Full-stack.</p>\r\n                    <p class=\"card-content-secondary__author\">Jonathan Florez.</p>\r\n                    <p class=\"card-content-secondary__position\">Medellín-Colombia\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n       \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- End testimonial -->\r\n\r\n<!-- Start subscribe -->\r\n<section id=\"subscribe\">\r\n  <div class=\"download-overlay\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"title-area wow fadeInUp\">\r\n            <h2 class=\"title\">Subscribe Our <span>Newsletter</span></h2>\r\n            <p>Subscribe to new corrections, functionalities, developments and services.</p>\r\n          </div>\r\n        </div>\r\n        <!-- Start download app content -->\r\n        <div class=\"col-md-12\">\r\n          <div class=\"subscribe-content wow fadeInLeft\">\r\n            <form action=\"\" class=\"subcr-form\">\r\n              <i class=\"fa fa-envelope-o\"></i>\r\n              <input type=\"text\" name=\"\" id=\"\" placeholder=\"Type your mail address..\">\r\n              <button type=\"submit\" class=\"subcr-btn\">Subscribe</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- End download app -->\r\n\r\n<!-- Start contact -->\r\n<section id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"title-area\">\r\n          <h2 class=\"title\">Get in <span>Touch</span></h2>\r\n          <p>Do you have any questions? Let us know how we can help.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"contact-area\">\r\n          <form action=\"\" class=\"contact-form\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Your name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea class=\"form-control\" rows=\"3\" placeholder=\"Your Message\"></textarea>\r\n            </div>\r\n            <div class=\"send-area\">\r\n              <button type=\"submit\" class=\"send-btn\">Send Now</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- End contact -->\r\n"

/***/ }),

/***/ "./src/app/shared/sections/sections.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/sections/sections.component.ts ***!
  \*******************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/shared/sections/sections.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sossa\Documents\app-sena\angular-app-sena\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
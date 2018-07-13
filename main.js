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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_shared/dialogs/get-app/get-app.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_shared/dialogs/get-app/get-app.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"get-app\">\r\n  <h2>Get Healthy Lifestyle app</h2>\r\n  <p>“It ain’t easy being cheesy.” Raclette has successfully challenged t\r\n    hat statement. Raclette is a type of Swiss cheese that is fashioned into a wheel of 13 lbs. It’s halved, and the\r\n    inside is melted into a smooth\r\n  </p>\r\n  <div class=\"qr-container\">\r\n    <div class=\"qr\">\r\n      <p class=\"qr-title\">\r\n        <img src=\"../../../../assets/img/icons/android.svg\" alt=\"\">\r\n        Android\r\n      </p>\r\n      <div class=\"qr-code\">\r\n        <img src=\"../../../../assets/img/QR.svg\">\r\n      </div>\r\n      <div class=\"app-link\">\r\n        <img src=\"../../../../assets/img/android-btn.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"qr\">\r\n      <p class=\"qr-title\">\r\n        <img src=\"../../../../assets/img/icons/apple.svg\">\r\n        IOS\r\n      </p>\r\n      <div class=\"qr-code\">\r\n        <img src=\"../../../../assets/img/QR.svg\">\r\n      </div>\r\n      <div class=\"app-link\">\r\n        <img src=\"../../../../assets/img/ios-btn.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared/dialogs/get-app/get-app.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/_shared/dialogs/get-app/get-app.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".get-app {\n  max-width: 550px; }\n  .get-app h2 {\n    font-size: 30px;\n    font-weight: 900;\n    line-height: 1.33;\n    text-align: left;\n    color: #505050; }\n  .get-app p {\n    margin-top: 40px;\n    font-size: 17px;\n    font-weight: 300;\n    line-height: 1.59;\n    letter-spacing: 0.3px;\n    text-align: left;\n    color: #454545; }\n  .get-app .qr-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start; }\n  .get-app .qr:not(:first-child) {\n    margin-left: 40px; }\n  .get-app .qr-title {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n  .get-app .qr-title img {\n      margin-right: 12px; }\n  .get-app .qr-code img {\n    margin-top: 20px;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.098), 0 1px 18px 0 rgba(0, 0, 0, 0.084); }\n  .get-app .app-link {\n    display: none; }\n  .get-app .app-link img {\n      width: 100px; }\n  @media (max-width: 1024px) {\n  .get-app .qr-container {\n    margin-top: 30px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start; }\n  .get-app .qr:not(:first-child) {\n    margin-left: 40px; }\n  .get-app .qr-title {\n    display: none; }\n  .get-app .qr-code {\n    display: none; }\n  .get-app .app-link {\n    display: block; } }\n  @media (max-width: 500px) {\n  .get-app {\n    padding: 14px; }\n    .get-app .qr:not(:first-child) {\n      margin-left: 10px; } }\n"

/***/ }),

/***/ "./src/app/_shared/dialogs/get-app/get-app.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_shared/dialogs/get-app/get-app.component.ts ***!
  \**************************************************************/
/*! exports provided: GetAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAppComponent", function() { return GetAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAppComponent = /** @class */ (function () {
    function GetAppComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    GetAppComponent.prototype.ngOnInit = function () {
    };
    GetAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-app',
            template: __webpack_require__(/*! ./get-app.component.html */ "./src/app/_shared/dialogs/get-app/get-app.component.html"),
            styles: [__webpack_require__(/*! ./get-app.component.scss */ "./src/app/_shared/dialogs/get-app/get-app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], GetAppComponent);
    return GetAppComponent;
}());



/***/ }),

/***/ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/_shared/dialogs/services-dialog/services-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"service-description\">\r\n  <div class=\"service-description-img\" [ngStyle]=\"{'background-image': getImg(data.photos)}\"></div>\r\n  <div class=\"section-container\">\r\n    <div class=\"service-description-favorite\"><img src=\"../../assets/img/service-description/mark-favorite.svg\"></div>\r\n    <h2 class=\"service-description-title\">{{data.name}}</h2>\r\n    <div class=\"service-description-container\">\r\n      <div class=\"service-description-left\">\r\n        <p class=\"service-description-txt\">{{data.description | ellipsis: ellipsisNumber : true}}\r\n          <a class=\"blog-info-read-more\" *ngIf=\"data.description.length > ellipsisNumber\"\r\n             (click)=\"ellipsisNumber = data.description.length\">Read more\r\n            <i aria-hidden=\"true\" class=\"fa fa-long-arrow-right\"></i>\r\n          </a>\r\n          <a class=\"blog-info-read-more read-less\" *ngIf=\"data.description.length === ellipsisNumber\"\r\n             (click)=\"ellipsisNumber = 500\"><i aria-hidden=\"true\" class=\"fa fa-long-arrow-left\"></i> Read less\r\n          </a>\r\n        </p>\r\n      </div>\r\n      <div class=\"service-description-right\">\r\n        <div class=\"service-description-location\"><img src=\"../../assets/img/icons/location-thin.svg\"><span>{{data.address}}</span>\r\n        </div>\r\n        <div class=\"service-description-website\"><img src=\"../../assets/img/icons/website.svg\"><a\r\n          href=\"{{data.webSite}}\">{{data.webSite}}</a></div>\r\n        <div class=\"service-description-schedule\"><img src=\"../../assets/img/icons/clock.svg\">\r\n          <div class=\"schedule-container\">\r\n            <span class=\"schedule-property\">Monday\r\n              <span class=\"schedule-value\" *ngIf=\"data.schedule[0].isOpen\">{{data.schedule[0].from}} pm - {{data.schedule[0].to}} pm</span>\r\n              <span class=\"schedule-value\" *ngIf=\"!data.schedule[0].isOpen\">Closed</span>\r\n            </span>\r\n            <span class=\"schedule-property\">Tuesday\r\n              <span class=\"schedule-value\" *ngIf=\"data.schedule[1].isOpen\">{{data.schedule[1].from}} pm - {{data.schedule[1].to}} pm</span>\r\n              <span class=\"schedule-value\" *ngIf=\"!data.schedule[1].isOpen\">Closed</span>\r\n            </span>\r\n            <span class=\"schedule-property\">Wednesday\r\n              <span class=\"schedule-value\" *ngIf=\"data.schedule[2].isOpen\">{{data.schedule[2].from}} pm - {{data.schedule[2].to}} pm</span>\r\n              <span class=\"schedule-value\" *ngIf=\"!data.schedule[2].isOpen\">Closed</span>\r\n            </span>\r\n            <span class=\"schedule-property\">Thursday\r\n              <span class=\"schedule-value\" *ngIf=\"data.schedule[3].isOpen\">{{data.schedule[3].from}} pm - {{data.schedule[3].to}} pm</span>\r\n              <span class=\"schedule-value\" *ngIf=\"!data.schedule[3].isOpen\">Closed</span>\r\n            </span>\r\n            <span class=\"schedule-property\">Friday\r\n              <span class=\"schedule-value\" *ngIf=\"data.schedule[4].isOpen\">{{data.schedule[4].from}} pm - {{data.schedule[4].to}} pm</span>\r\n              <span class=\"schedule-value\" *ngIf=\"!data.schedule[4].isOpen\">Closed</span>\r\n            </span>\r\n            <span class=\"schedule-property\">Saturday\r\n              <span class=\"schedule-value\" *ngIf=\"data.schedule[5].isOpen\">{{data.schedule[5].from}} pm - {{data.schedule[5].to}} pm</span>\r\n              <span class=\"schedule-value\" *ngIf=\"!data.schedule[5].isOpen\">Closed</span>\r\n            </span>\r\n            <span class=\"schedule-property\"> Sunday\r\n              <span class=\"schedule-value\" *ngIf=\"data.schedule[6].isOpen\">{{data.schedule[6].from}} pm - {{data.schedule[6].to}} pm</span>\r\n              <span class=\"schedule-value\" *ngIf=\"!data.schedule[6].isOpen\">Closed</span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <agm-map\r\n    [latitude]=\"lat\"\r\n    [longitude]=\"lng\"\r\n    [zoom]=\"zoom\"\r\n  >\r\n    <agm-marker\r\n      *ngFor=\"let mark of markers; let i = index\"\r\n      [latitude]=\"mark.lat\"\r\n      [longitude]=\"mark.lng\"\r\n      [label]=\"mark.label\"\r\n      [iconUrl]=\"mark.img\"\r\n    >\r\n    </agm-marker>\r\n  </agm-map>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/_shared/dialogs/services-dialog/services-dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-description {\n  max-width: 900px;\n  min-width: 900px;\n  overflow-y: auto;\n  max-height: 90vh; }\n  .service-description .service-description-img {\n    height: 400px;\n    background-image: url('service-description-bg.png');\n    background-size: cover;\n    background-position: center; }\n  .service-description .section-container {\n    width: 100%;\n    position: relative;\n    padding-bottom: 50px; }\n  .service-description .service-description-favorite {\n    cursor: pointer;\n    position: absolute;\n    right: 30px;\n    top: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  .service-description .service-description-title {\n    margin-bottom: 50px;\n    font-size: 30px;\n    font-weight: 900;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: left;\n    color: #505050;\n    text-transform: uppercase; }\n  .service-description .service-description-container {\n    display: block; }\n  .service-description .service-description-txt {\n    margin-bottom: 40px;\n    font-size: 17px;\n    font-weight: 300;\n    line-height: 1.59;\n    letter-spacing: 0.3px;\n    text-align: left;\n    color: #454545; }\n  .service-description .service-description-right > div > img {\n    margin-right: 17px; }\n  .service-description .service-description-location {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n  .service-description .service-description-location span {\n      font-size: 17px;\n      color: #696969; }\n  .service-description .service-description-website {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 35px 0; }\n  .service-description .service-description-website a {\n      font-size: 17px;\n      font-weight: 300;\n      color: #454545;\n      text-decoration: underline; }\n  .service-description .service-description-schedule {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start; }\n  .service-description .service-description-schedule img {\n      margin-top: 3px; }\n  .service-description .service-description-schedule span {\n      font-size: 17px;\n      font-weight: normal;\n      line-height: 1.88;\n      color: #505050; }\n  .service-description .schedule-property {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start; }\n  .service-description .schedule-property span {\n      margin-left: 15px; }\n  .service-description :focus {\n    outline: none; }\n  @media (max-width: 1024px) {\n  .service-description {\n    min-width: auto; } }\n  @media (max-width: 768px) {\n  .service-description .section-container {\n    padding: 40px 0 40px; }\n  .service-description .service-description-img {\n    height: 200px; }\n  .service-description .service-description-right {\n    margin-top: 30px; }\n    .service-description .service-description-right > div > img {\n      margin-right: 5px; }\n  .service-description .service-description-title {\n    margin-bottom: 30px;\n    font-size: 27px; }\n  .service-description .service-description-txt {\n    font-size: 14px; }\n  .service-description .service-description-location span, .service-description .service-description-location a, .service-description .service-description-website span, .service-description .service-description-website a, .service-description .service-description-schedule span, .service-description .service-description-schedule a {\n    font-size: 14px; }\n  .service-description .service-description-location img, .service-description .service-description-website img, .service-description .service-description-schedule img {\n    width: 15px;\n    margin-right: 5px; }\n  .service-description .service-description-website {\n    margin: 25px 0; } }\n  agm-map {\n  width: 100%;\n  height: 440px; }\n  @media (max-width: 768px) {\n  agm-map {\n    height: 300px; } }\n  .blog-info-read-more {\n  display: inline-block;\n  margin-top: 0;\n  cursor: pointer; }\n  .read-less i {\n  margin-left: 0;\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/_shared/dialogs/services-dialog/services-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ServicesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesDialogComponent", function() { return ServicesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ServicesDialogComponent = /** @class */ (function () {
    function ServicesDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.zoom = 15;
        this.lat = 40.730610;
        this.lng = -73.935242;
        this.markers = [];
        this.ellipsisNumber = 500;
    }
    ServicesDialogComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.setMarkers(this.data);
    };
    ServicesDialogComponent.prototype.getImg = function (photos) {
        return 'url(\'' + photos[Object.keys(photos)[0]] + '\')';
    };
    ServicesDialogComponent.prototype.setMarkers = function (service) {
        this.markers = [
            {
                lat: service.lat,
                lng: service.lng,
                img: '../../assets/img/icons/locations/' + service.type + '.png'
            }
        ];
        this.lat = service.lat;
        this.lng = service.lng;
    };
    ServicesDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ServicesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-dialog',
            template: __webpack_require__(/*! ./services-dialog.component.html */ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.html"),
            styles: [__webpack_require__(/*! ./services-dialog.component.scss */ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ServicesDialogComponent);
    return ServicesDialogComponent;
}());



/***/ }),

/***/ "./src/app/_shared/pipes/ellipsis.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/_shared/pipes/ellipsis.pipe.ts ***!
  \************************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (val, args) {
        if (args === undefined) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + '...';
        }
        else {
            return val;
        }
    };
    EllipsisPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ellipsis'
        })
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "./src/app/_shared/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/_shared/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceService = /** @class */ (function () {
    function ServiceService() {
        this.subscribeAuth = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ServiceService.prototype.transferData = function (data) {
        console.log(data);
        this.subscribeAuth.next(data);
    };
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/about-services/about-services.component.html":
/*!**************************************************************!*\
  !*** ./src/app/about-services/about-services.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\n  bdColor = \"rgba(255, 255, 255, 1)\"\r\n  size = \"large\"\r\n  color = \"#fe5c5c\"\r\n  type = \"ball-spin\"\r\n></ngx-spinner>\r\n<section class=\"our-services\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">Our services</h2>\r\n    <div class=\"services-container\">\r\n      <div class=\"services-item\" routerLink='/services/restaurant'><a>Restaurants</a></div>\r\n      <div class=\"services-item\" routerLink='/services/food_delivery'><a>Food delivery</a></div>\r\n      <div class=\"services-item\" routerLink='/services/gym'><a>Gyms</a></div>\r\n      <div class=\"services-item\" routerLink='/services/nutritionists'><a>Nytritionists</a></div>\r\n      <div class=\"services-item\" routerLink='/services/shops'><a>Shops</a></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"services-works\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">How it works</h2>\r\n    <div class=\"step-container\">\r\n      <div class=\"step-item\">\r\n        <div class=\"number-round\">1</div>\r\n        <h3>Choose category</h3>\r\n        <p>Choose the category or number of categories you are interested in</p></div>\r\n      <div class=\"step-item\">\r\n        <div class=\"number-round\">2</div>\r\n        <h3>Choose service</h3>\r\n        <p>Choose the category or number of categories you are interested in</p></div>\r\n      <div class=\"step-item\">\r\n        <div class=\"number-round\">3</div>\r\n        <h3>Collect check ins</h3>\r\n        <p>Some of services give you free discounts for visiting any other place you like</p></div>\r\n      <div class=\"step-item\">\r\n        <div class=\"number-round\">4</div>\r\n        <h3>Get premium discounts</h3>\r\n        <p>A big amount of discounts for all services you can gat for a small pay</p></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"top-services\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">Top services</h2>\r\n    <div class=\"tab-container\">\r\n      <div class=\"services-list-menu\">\r\n        <a [ngClass] =\"{'active': currentTypeOfServices === 'restaurant'}\" (click)=\"changeCurrentTypeOfServices('restaurant')\">Restaurants</a>\r\n        <a [ngClass] =\"{'active': currentTypeOfServices === 'food_delivery'}\" (click)=\"changeCurrentTypeOfServices('food_delivery')\">Food delivery</a>\r\n        <a [ngClass] =\"{'active': currentTypeOfServices === 'gym'}\" (click)=\"changeCurrentTypeOfServices('gym')\">Gyms</a>\r\n        <a [ngClass] =\"{'active': currentTypeOfServices === 'nutritionists'}\" (click)=\"changeCurrentTypeOfServices('nutritionists')\">Nytritionists</a>\r\n        <a [ngClass] =\"{'active': currentTypeOfServices === 'shops'}\" (click)=\"changeCurrentTypeOfServices('shops')\">Shops</a>\r\n      </div>\r\n      <section class=\"tab-content\">\r\n        <ngx-slick class=\"top-services-container\" [config]=\"slideConfig\" #slickModal=\"slick-modal\" *ngIf=\"ready\">\r\n          <div class=\"top-services-item\" ngxSlickItem *ngFor=\"let service of dataOfServices[currentTypeOfServices]\">\r\n            <div class=\"top-services-item-img\" [ngStyle]=\"{'background-image': getImg(service.photos)}\"></div>\r\n            <h3>{{service.name}}</h3>\r\n            <a (click)=\"openServiceDialog(service)\" class=\"btn\">More</a>\r\n          </div>\r\n        </ngx-slick>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/about-services/about-services.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/about-services/about-services.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".our-services {\n  background-image: url('list-of-services-bg.png');\n  background-repeat: no-repeat; }\n  .our-services .section-container {\n    padding-bottom: 0; }\n  .our-services .services-container {\n    margin-top: 80px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start; }\n  .our-services .services-item {\n    width: 217px;\n    padding: 162px 0;\n    background-size: cover;\n    text-align: center;\n    line-height: 0px;\n    cursor: pointer; }\n  .our-services .services-item a {\n      font-size: 18px;\n      font-weight: 900;\n      color: #ffffff;\n      text-transform: uppercase;\n      border-bottom: 3px solid rgba(255, 255, 255, 0.4); }\n  .our-services .services-item:nth-child(1) {\n      background-image: url('Restaurants.png'); }\n  .our-services .services-item:nth-child(2) {\n      background-image: url('Food-delivery.png'); }\n  .our-services .services-item:nth-child(3) {\n      background-image: url('Gyms.png'); }\n  .our-services .services-item:nth-child(4) {\n      background-image: url('Nytritionists.png'); }\n  .our-services .services-item:nth-child(5) {\n      background-image: url('Shops.png'); }\n  @media (max-width: 1190px) {\n  .our-services .services-item:not(:first-child) {\n    margin-left: 15px; } }\n  @media (max-width: 1024px) {\n  .our-services .services-item {\n    padding: 60px 0; } }\n  @media (max-width: 850px) {\n  .our-services .services-container {\n    flex-wrap: wrap; }\n  .our-services .services-item {\n    width: 100%;\n    padding: 120px 0; }\n    .our-services .services-item:not(:first-child) {\n      margin-left: 0;\n      margin-top: 30px; } }\n  @media (max-width: 768px) {\n  .our-services .services-container {\n    margin-top: 50px; } }\n  .services-works .section-container {\n  padding-bottom: 55px; }\n  .services-works .step-container {\n  margin-top: 75px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start; }\n  .services-works .step-item {\n  width: 215px;\n  position: relative;\n  text-align: center; }\n  .services-works .step-item .number-round {\n    margin: auto; }\n  .services-works .step-item h3 {\n    color: #505050;\n    font-size: 17px;\n    font-weight: 900;\n    margin: 30px 0 15px;\n    white-space: nowrap; }\n  .services-works .step-item p {\n    color: #454545;\n    font-size: 17px;\n    line-height: 1.88;\n    letter-spacing: 0.3px;\n    font-weight: normal; }\n  .services-works .step-item:not(:first-child) {\n    margin-left: 30px; }\n  .services-works .step-item:not(:last-child):after {\n    content: \"\";\n    width: 30px;\n    border-bottom: 1px solid #d8d8d8;\n    position: absolute;\n    top: 30px;\n    left: 100%;\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n  @media (max-width: 768px) {\n  .services-works .step-container {\n    margin-top: 50px;\n    flex-wrap: wrap; }\n  .services-works .step-item {\n    width: 100%; }\n    .services-works .step-item:not(:first-child) {\n      margin-left: 0;\n      margin-top: 30px; }\n    .services-works .step-item:not(:last-child):after {\n      content: none; } }\n  .top-services {\n  background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 60%, #fff 60%); }\n  .top-services .tab-container {\n    margin-top: 50px; }\n  .top-services .services-list-menu a {\n    font-size: 17px;\n    font-weight: normal;\n    line-height: 1.88;\n    letter-spacing: 0.3px;\n    color: #454545;\n    display: inline-block;\n    cursor: pointer;\n    transition: all 200ms; }\n  .top-services .services-list-menu a:not(:last-child):after {\n      content: \"|\";\n      display: inline-block;\n      margin-left: 16px; }\n  .top-services .services-list-menu a:hover {\n      color: #ff5c5c; }\n  .top-services .services-list-menu a:hover:after {\n        color: #454545; }\n  .top-services .services-list-menu a:not(:first-child) {\n      margin-left: 16px; }\n  .top-services .services-list-menu a.active {\n      color: #ff5c5c; }\n  .top-services .services-list-menu a.active:after {\n        color: #505050; }\n  .top-services .tab-content {\n    margin-top: 30px; }\n  .top-services .top-services-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start; }\n  .top-services .top-services-item {\n    text-align: center; }\n  .top-services .top-services-item .top-services-item-img {\n      width: 360px;\n      margin: auto;\n      height: 234px;\n      background-size: cover;\n      background-position: center; }\n  .top-services .top-services-item h3 {\n      margin: 35px 0 30px;\n      font-size: 18px;\n      font-weight: 900;\n      font-style: normal;\n      line-height: normal;\n      color: #505050;\n      text-transform: uppercase; }\n  .top-services .top-services-item .btn {\n      background: none;\n      color: #505050;\n      border: solid 1px #373435;\n      padding: 20px 42px;\n      cursor: pointer; }\n  .top-services .slick-prev {\n    top: 115px; }\n  .top-services .slick-prev:after {\n      content: \"\";\n      display: block;\n      width: 17px;\n      height: 31px;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2217%22 height%3D%2231%22%3E%3Cpath fill%3D%22%23505050%22 fill-rule%3D%22evenodd%22 d%3D%22M2.515 30.162c-.21.21-.472.316-.761.316a1.08 1.08 0 0 1-.761-1.84l13.387-13.4L.993 1.837a1.08 1.08 0 0 1 0-1.524 1.075 1.075 0 0 1 1.522 0l14.149 14.163c.42.42.42 1.103 0 1.524L2.515 30.162z%22%2F%3E%3C%2Fsvg%3E\");\n      background-size: cover;\n      -webkit-transform: rotateY(180deg);\n              transform: rotateY(180deg);\n      position: relative;\n      bottom: 19px; }\n  .top-services .slick-prev:before {\n      visibility: hidden; }\n  .top-services .slick-next {\n    top: 115px; }\n  .top-services .slick-next:before {\n      content: \"\";\n      display: block;\n      width: 17px;\n      height: 31px;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2217%22 height%3D%2231%22%3E%3Cpath fill%3D%22%23505050%22 fill-rule%3D%22evenodd%22 d%3D%22M2.515 30.162c-.21.21-.472.316-.761.316a1.08 1.08 0 0 1-.761-1.84l13.387-13.4L.993 1.837a1.08 1.08 0 0 1 0-1.524 1.075 1.075 0 0 1 1.522 0l14.149 14.163c.42.42.42 1.103 0 1.524L2.515 30.162z%22%2F%3E%3C%2Fsvg%3E\");\n      background-size: cover; }\n  .top-services :focus {\n    outline: none; }\n  @media (max-width: 1240px) {\n  .top-services .top-services-container {\n    overflowX: hidden; }\n  .top-services .top-services-container .slick-next, .top-services .slick-prev {\n    visibility: hidden;\n    position: absolute; }\n  .top-services .top-services-container .slick-dots {\n    bottom: -60px !important; } }\n  @media (max-width: 768px) {\n  .top-services .tab-container {\n    margin-top: 50px;\n    text-align: center; } }\n"

/***/ }),

/***/ "./src/app/about-services/about-services.component.ts":
/*!************************************************************!*\
  !*** ./src/app/about-services/about-services.component.ts ***!
  \************************************************************/
/*! exports provided: AboutServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutServicesComponent", function() { return AboutServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialogs_services_dialog_services_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/dialogs/services-dialog/services-dialog.component */ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutServicesComponent = /** @class */ (function () {
    function AboutServicesComponent(db, dialog, spinner) {
        this.db = db;
        this.dialog = dialog;
        this.spinner = spinner;
        this.currentTypeOfServices = 'restaurant';
        this.ready = false;
        this.slideConfig = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 1190,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        };
        this.dataOfServices = {
            'restaurant': [],
            'food_delivery': [],
            'gym': [],
            'nutritionists': [],
            'shops': []
        };
    }
    AboutServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.ready = true;
            _this.spinner.hide();
        }, 3000);
        this.getServices();
    };
    AboutServicesComponent.prototype.getServices = function () {
        var _this = this;
        this.db.object('business').valueChanges().subscribe(function (res) {
            _this.transformServices(res);
        });
    };
    AboutServicesComponent.prototype.transformServices = function (services) {
        this.dataOfServices = {};
        for (var key in services) {
            if (!this.dataOfServices[services[key].type])
                this.dataOfServices[services[key].type] = [];
            var servicItem = services[key];
            servicItem.fbId = key;
            this.dataOfServices[services[key].type].push(servicItem);
        }
    };
    AboutServicesComponent.prototype.getImg = function (photos) {
        return 'url(\'' + photos[Object.keys(photos)[0]] + '\')';
    };
    AboutServicesComponent.prototype.changeCurrentTypeOfServices = function (type) {
        this.currentTypeOfServices = type;
        if (this.dataOfServices[this.currentTypeOfServices].length <= this.slideConfig.slidesToShow) {
            switch (this.dataOfServices[this.currentTypeOfServices].length) {
                case 1:
                    this.slideConfig.responsive[0].settings.slidesToShow = 1;
                    break;
                case 2:
                    this.slideConfig.responsive[0].settings.slidesToShow = 1;
                    break;
                case 3:
                    this.slideConfig.responsive[0].settings.slidesToShow = 2;
                    break;
            }
        }
        else {
            this.slideConfig.responsive[0].settings.slidesToShow = 3;
        }
    };
    AboutServicesComponent.prototype.openServiceDialog = function (service) {
        this.dialog.open(_shared_dialogs_services_dialog_services_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ServicesDialogComponent"], { data: service });
    };
    AboutServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-services',
            template: __webpack_require__(/*! ./about-services.component.html */ "./src/app/about-services/about-services.component.html"),
            styles: [__webpack_require__(/*! ./about-services.component.scss */ "./src/app/about-services/about-services.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AboutServicesComponent);
    return AboutServicesComponent;
}());



/***/ }),

/***/ "./src/app/additional-pages/faq/faq.component.html":
/*!*********************************************************!*\
  !*** ./src/app/additional-pages/faq/faq.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>FAQ Healthy </h1>\r\n  <p>Have a question? Check out the list of the most frequently asked questions:</p>\r\n  <h2>What is Healthy Lifestyle?</h2>\r\n  <p>Healthy Lifestyle is a service based on cumulative discount system which will help you manage all the healthy\r\n    lifestyle activities and cut unnecessary expenses in your quest for living a healthy life. </p>\r\n  <h2>How does it work?</h2>\r\n  <p>After a prompt registration, you get acquainted with the list of services offered in healthy establishments, you\r\n    can become a regular customer and make use of profitable discounts and bonuses. During every visit, you can check-in\r\n    to a service. Once you have collected 10 check-ins in any of the 4 offered categories of services - Restaurants,\r\n    Gyms, Nutritionists, Shops, you get a discount coupon which you can use for this category. To get permanent monthly\r\n    discounts and expert advice you can purchase a monthly Subscription.</p>\r\n  <h2>How will I benefit from using Healthy Lifestyle?</h2>\r\n  <p>Healthy Lifestyle becomes a great motivation for you to stay fit and eat healthy while saving your money.</p>\r\n  <h2>Is it free to use?</h2>\r\n  <p>You can use free version of Healthy Lifestyle to collect check-ins and turn them into discount coupons. If you want\r\n    to receive permanent monthly discounts and expert advice, you can purchase a monthly Subscription. </p>\r\n  <h2>How can I collect check-ins?</h2>\r\n  <p>Check into various categories of services using the app - Restaurants, Gyms, Nutritionists, Shops. After getting 10\r\n    check-ins, you will receive discounts. The check-in can be done only once in two hours.</p>\r\n  <h2>How to Get a Discount?</h2>\r\n  <p>Use services of 5 available categories - Restaurants, Food Delivery, Gyms, Nutritionists, Shops - and get check-in\r\n    for each visit. Once you have collected 10 check-ins, you will receive a discount coupon. You can turn check-ins\r\n    from one category only into discounts in the same category ( 10 check-ins in Gyms = a discount for Gyms). Or\r\n    purchase a Subscription choosing the most suitable for you subscription plan.</p>\r\n  <h2>How can purchase a subscription?</h2>\r\n  <p>Just choose one of the offered Subscription plans to get better discounts: Standard, Medium or Premium.</p>\r\n  <h2>How will I benefit from the Subscription?</h2>\r\n  <p>Having purchased a Monthly Subscription, you automatically get discounts on all the services offered on the\r\n    platform. With the wide range of industry experts we offer, you will make use of individual consultations as well as\r\n    have workout and nutrition plans tailored specifically for you. You can use discounts and bonuses throughout the\r\n    entire subscription period.</p>\r\n  <h2>How can I use my discounts?</h2>\r\n  <p>Having collected 10 check-ins in one of 4 available service categories (Restaurants, Gyms, Nutritionists, Shops),\r\n    you will get a discount coupon for this particular category. You will be required to present it to an employee of\r\n    the service and provide your phone number in order to get a discount. Once activated, a coupon should be used within\r\n    24 hours.</p>\r\n  <p>If you still have questions, contact us: info@dtg.group.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/additional-pages/faq/faq.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/additional-pages/faq/faq.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-bottom: 50px; }\n\nh1 {\n  color: #505050;\n  font-size: 40px;\n  font-weight: bold;\n  line-height: normal;\n  letter-spacing: 0.8px;\n  text-align: center;\n  margin: 30px 0; }\n\nh2 {\n  font-size: 25px;\n  font-weight: bold;\n  color: #505050;\n  line-height: 40px;\n  margin: 20px 0; }\n\np {\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 1.88;\n  letter-spacing: 0.3px;\n  color: #454545; }\n\n@media (max-width: 760px) {\n  h1 {\n    font-size: 35px; }\n  h2 {\n    font-size: 25px; } }\n"

/***/ }),

/***/ "./src/app/additional-pages/faq/faq.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/additional-pages/faq/faq.component.ts ***!
  \*******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/additional-pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/additional-pages/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/additional-pages/privacy-policy/privacy-policy.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/additional-pages/privacy-policy/privacy-policy.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Privacy Policy</h1>\r\n  <p>Before we get into the detail, we just want to make sure you know that your privacy is important to us. You’ve placed your trust in us by using the Healthy LifeStyle services and we value that trust. That means we’re committed to protecting and safeguarding any personal data you give us.\r\n    So anyway, here we go with the detail. This Privacy Policy explains who we are, how and why we collect, share and use personal information about you, and how you can exercise your privacy rights. If you have any questions, or any confusions about our use of your personal information, please contact us using the contact details provided on the “How to Contact Us” section below.\r\n  </p>\r\n  <h2>1. Who We Are</h2>\r\n  <p>\r\n    Healthy LifeStyle offers to a user reservation with restaurants, hotels, shops, entertainment venues and other partners with the possibility to get a discount through our own site and/or mobile application.\r\n    This Privacy Policy applies to any kind of personal information we collect through the site and/or mobile application or other contact you may have with us that is connected to the site and/or mobile application (such as contacting our team via email). Healthy LifeStyle is committed to preserving the privacy of all its members and visitors to our site and/or mobile application. Please read the following Privacy Policy to understand our practices regarding how we use and protect the personal information that you provide to us.\r\n  </p>\r\n  <h2>2. How to Contact Us</h2>\r\n  <p>For the purpose of the General Data Protection Regulation 2016 (\"Act\"), the data controller is the sole trader Viktor Konts trading as Healthy LifeStyle of Flat 1, 17 Ozerna Street, Boryslav, Ukraine, 82300.\r\n  </p>\r\n  <h2>3. Contacting Us</h2>\r\n  <p>For questions or concerns about this Privacy Policy, or our use of your personal information, please contact us by email at info@dtg.group.\r\n    Please note that if you contact us, we may need to authenticate your identity before fulfilling your request. We will talk you through the process of doing this, and it really doesn’t take much time or effort. But as security of your information is important to us, we need to be extra careful. \r\n  </p>\r\n  <h2>4. What Personal Information We Collect and Why</h2>\r\n  <p>The personal information that we may collect about you broadly falls into the categories set out below.\r\n    What do we do with the information we collect? The short answer is, we provide you with an amazing set of services that we strive to improve relentlessly.\r\n  </p>\r\n  <h2>5. Information that you provide voluntarily</h2>\r\n  <p>Certain parts of the site and/or mobile application may ask you to provide personal information voluntarily. For example, we may ask you to provide your contact details in order to register an account with us, to subscribe to marketing communications from us (e.g. to share information about our services and promotional offers that we think may interest you). The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.\r\n  </p>\r\n  <h2>6. Information That We Collect Automatically</h2>\r\n  <p>When you visit the Healthy LifeStyle site and/or mobile application, we may collect information automatically from your device (be it a phone or a computer). In some countries, including countries in the European Economic Area, this information may be considered personal information under applicable data protection laws.</p>\r\n  <p>Specifically, the information we collect automatically may include information like your IP address, device type and software characteristics, unique device identification numbers, browser-type, broad geographic location (e.g. country or city-level location) and other technical information. We may also collect information about how your device has interacted with the Healthy LifeStyle site and/or mobile application, including the pages accessed and links clicked. Through our mobile application we may also find out your location, however you can turn this feature off through your device’s settings.\r\n    Collecting this information enables us to verify your identity and position us to better prevent fraud, and to understand the users of the site and/or mobile application, such as where they come from and what content is of interest to them. We use this information for our internal analytics purposes, to improve the quality our service, and to tailor your experience to you by displaying content and services that we think is specifically suited to you.\r\n    Some of this information may be collected via the use of cookies, web beacons and similar tracking technologies.\r\n  </p>\r\n  <h2>7. Information That We Obtain from Third Party Sources\r\n  </h2>\r\n  <p>From time to time, we may receive personal information about you from third party sources (including social media service providers), but only where we have checked that these third parties either have your consent or are otherwise legally permitted or required to disclose your personal information to us.\r\n    The types of information we collect from third parties include information about your online interaction with such parties and we use this information to monitor and analyse trends and usage, improve the quality our service and tailor your experience and recommend products and services that we think you will be interested in.\r\n  </p>\r\n  <h2>8. Who We May Disclose Your Information To</h2>\r\n  <p>We may disclose your personal information to the following categories of recipients:\r\n  </p>\r\n  <p>1. to our Partners (as defined in Terms and Conditions) who provide services to you (for example, to identify your mobile number at the restaurant when you reserve a table and in order to give you a discount). The majority of our service providers operate within Europe, however sometimes they may send your personal information to the USA. An example of the service provider we use and why are set out below. If you want any more information, please do ask.\r\n    Google assists us with our analytics and helps us to set advertisements that reflect your interests.\r\n  </p>\r\n  <p>2. to any competent law enforcement body, regulatory, government agency, court or other third party where we believe disclosure is necessary (i) as a matter of applicable law or regulation, (ii) to exercise, establish or defend our legal rights, or (iii) to protect your vital interests or those of any other person;</p>\r\n  <p>3. to an actual or potential buyer (and its agents and advisers) in connection with any proposed purchase, merger or acquisition of any part of our business, provided that we inform the buyer it must use your personal information only for the purposes disclosed in this Privacy Policy; </p>\r\n  <p>4. to any other person with your consent to the disclosure.</p>\r\n  <h2>9. Legal Basis for Processing Personal Information (EEA Visitors Only)\r\n  </h2>\r\n  <p>If you are a visitor from the European Economic Area, our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it.\r\n    We will normally collect personal information from you only where we have your consent to do so, where we need the personal information to perform a contract with you, or where the processing is in our legitimate interests and not overridden by your data protection interests or fundamental rights and freedoms. In some cases, we may also have a legal obligation to collect personal information from you or may otherwise need the personal information to protect your vital interests or those of another person.\r\n    <br>\r\n    If we ask you to provide personal information to comply with a legal requirement or to perform a contact with you, we will make this clear at the relevant time and advise you whether the provision of your personal information is mandatory or not (as well as of the possible consequences if you do not provide your personal information). <br>\r\n    Similarly, if we collect and use your personal information in reliance on our legitimate interests (or those of any third party), we will make clear to you at the relevant time what those legitimate interests are.\r\n  </p>\r\n  <h2>10. How We Keep Your Personal Information Secure\r\n  </h2>\r\n  <p>We use appropriate technical and organisational measures to protect the personal information that we collect and process about you. The measures we use are designed to provide a level of security appropriate to the risk of processing your personal information.\r\n    The transmission of information via the internet is not completely secure. Although we will take steps to protect your information, we cannot guarantee the security of your data transmitted to the site and/or mobile application.\r\n  </p>\r\n  <h2>11. Data Retention\r\n  </h2>\r\n  <p>We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. We will not keep personal information for longer than 2 years after your account was closed, and we will always endeavour to anonymise information 6 months after we receive it.\r\n  </p>\r\n  <h2>12. International Data Transfers\r\n  </h2>\r\n  <p>Your personal information may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different to the laws of your country.\r\n    However, we have taken appropriate safeguards to require that your personal information will remain protected in accordance with this Privacy Policy. These safeguards are either (a) having the model clauses appended to the contract we have with the third party; or (b) the third party is in a country that has adequate data protection laws.\r\n  </p>\r\n  <h2>13. Your Data Protection Rights\r\n  </h2>\r\n  <p>You have the following data protection rights:\r\n    If you wish to access, correct, update or request deletion of your personal information, you can do so at any time by contacting us using the contact details provided under the “How to Contact Us” heading above.<br> Please note, that if you request us to delete your data you must uninstall our mobile application (if you have been using this on your phone) to remove any residual data stored on your device.\r\n    In addition, if you are a resident of the European Union, you can object to processing of your personal information, ask us to restrict processing of your personal information or request portability of your personal information. Again, you can exercise these rights by contacting us using the contact details provided under the “How to Contact Us” heading above.\r\n    As a recommendation service, we think it is really important that we send you communications about our services and promotional offers that we think may interest you, as we would hate to think you missed out on a discount with one of Partners. However, you have the right to opt-out of marketing communications we send you at any time. You can exercise this right by contacting us. Please note that you cannot unsubscribe from certain email correspondence from us which is not for marketing purposes, such as messages relating to your account or when we are required to email you about system updates or issues.<br>\r\n    Please note, that to opt out of receiving mobile push notifications from Healthy LifeStyle, you can use your mobile device’s settings functionality to turn them off.\r\n    Similarly, if we have collected and process your personal information with your consent, then you can withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your personal information conducted in reliance on lawful processing grounds other than consent. <br>\r\n    You have the right to complain to a data protection authority about our collection and use of your personal information. For more information, please contact your local data protection authority.\r\n    <br>\r\n    We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws.\r\n  </p>\r\n  <h2>14. Children\r\n  </h2>\r\n  <p>Healthy LifeStyle site and/or mobile application is not intended for use by children under 16 years old. If you learn that your minor child has provided us with personal information without your consent, please contact us.\r\n  </p>\r\n  <h2>15. Updates to This Privacy Policy\r\n  </h2>\r\n  <p>We may update this Privacy Policy from time to time in response to changing legal, technical or business developments. When we update our Privacy Policy, we will take appropriate measures to inform you, consistent with the significance of the changes we make. We will obtain your consent to any material Privacy Policy changes if and where this is required by applicable data protection laws.</p>\r\n  <h2>16. Cookies and Similar Tracking Technology\r\n  </h2>\r\n  <p>“Cookies” are used to customize your experience on the sites and, if you create a password, to store your password so you do not have to re-enter it each time you visit the sites. “Cookies” are small computer files that are transferred to your computer's hard drive that contain information such as your user id, user preferences, the pages you've visited and the activities you've performed while using the sites. We do not link the information stored in cookies to any of your personal information you submit while on the sites. You may block cookies or delete cookies from your hard drive; however, by disabling cookies, you may not have access to all of the features of the sites or apps. Some of our business partners and our affiliates also use cookies to provide us with anonymous data and information regarding your use of the sites, apps and our services. We do not have access or control over these cookies, our privacy policy does not cover the use of such cookies.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/additional-pages/privacy-policy/privacy-policy.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/additional-pages/privacy-policy/privacy-policy.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-bottom: 50px; }\n\nh1 {\n  color: #505050;\n  font-size: 40px;\n  font-weight: bold;\n  line-height: normal;\n  letter-spacing: 0.8px;\n  text-align: center;\n  margin: 30px 0; }\n\nh2 {\n  font-size: 25px;\n  font-weight: bold;\n  color: #505050;\n  line-height: 40px;\n  margin: 20px 0; }\n\np {\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 1.88;\n  letter-spacing: 0.3px;\n  color: #454545; }\n\n@media (max-width: 760px) {\n  h1 {\n    font-size: 35px; }\n  h2 {\n    font-size: 25px; } }\n"

/***/ }),

/***/ "./src/app/additional-pages/privacy-policy/privacy-policy.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/additional-pages/privacy-policy/privacy-policy.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/additional-pages/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.scss */ "./src/app/additional-pages/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/additional-pages/terms-conditions/terms-conditions.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/additional-pages/terms-conditions/terms-conditions.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Terms and Conditions</h1>\r\n  <h2>Applicability</h2>\r\n  <p>These terms and conditions (“Terms and Conditions”) govern your account on the Healthy LifeStyle website and mobile\r\n    application (“site and/or mobile application”) and your use of products and services provided through the site\r\n    and/or\r\n    mobile application. Healthy LifeStyle provides the content posted on the site and/or mobile application subject to the\r\n    following Terms and Conditions.\r\n  </p>\r\n  <h2>Changes to the Terms and Conditions\r\n  </h2>\r\n  <p>Healthy LifeStyle reserves the right to delete, add, or change Terms and Conditions at any time and on any discretion\r\n    without\r\n    any prior notice. Therefore, you should check Terms and Conditions on a regular basis as updated versions will be\r\n    binding on you. Any modification will be effective upon our posting of updated Terms and Conditions. You understand\r\n    and agree that your continued access to or use of the site and/or mobile application after the effective date of\r\n    modification to Terms and Conditions indicates your acceptance of the modification.\r\n  </p>\r\n  <h2>Site and Mobile Application Availability\r\n  </h2>\r\n  <p>The site and/or mobile application may be modified, updated, interrupted, suspended or discontinued at any time\r\n    without prior notice or liability.\r\n  </p>\r\n  <h2>Legal Capacity. Children and minors\r\n  </h2>\r\n  <p>If you are under the age of consent in your country to form a binding agreement, you should only use our site\r\n    and/or\r\n    mobile application if you have the legal consent of your parent or guardian for your use of our site and/or mobile\r\n    application. You should use our site and/or mobile application only if you are fully able to understand and enter\r\n    into\r\n    and comply with Terms and Conditions. Our site and/or mobile application are not intended for children under 16: if\r\n    you are under 16, please wait until you turn 16 to use them.\r\n  </p>\r\n  <h2>User Account\r\n  </h2>\r\n  <h3>Account</h3>\r\n  <p>You allowed to create an account and provide information about yourself in order to access some of the features\r\n    offered through the site and mobile application. By using our site and/or mobile application you agree to notify us\r\n    immediately of any unauthorised use of your account or any other breach of security. Healthy LifeStyle will not be held\r\n    responsible for any damage or loss that you may incur in any unauthorised or authorised use of your account, either\r\n    with or without your knowledge. Additionally, you may be held liable for any losses incurred by Healthy LifeStyle or another\r\n    party due to someone else using your account. You may or may not use anyone else’s account at any time. We reserve\r\n    the\r\n    right to close your account at any time, for any or no reason at all.\r\n  </p>\r\n  <h3>User Content\r\n  </h3>\r\n  <p>The account is for your personal, non-commercial use only. You may not impersonate someone else, create or use and\r\n    account for anyone other than yourself, provide an email address or personal information other than your own, or\r\n    create multiple accounts. You acknowledge that you are responsible for any content you may submit through the site\r\n    and\r\n    mobile application, including the legality, reliability, appropriateness, originality and copyright of any such\r\n    content. For any content you submit or made available through the site (other than personal information, which is\r\n    handled in accordance with the privacy policy) you grant Healthy LifeStyle a perpetual, irrevocable, non-terminable,\r\n    worldwide, royalty-free and non-exclusive license to use, distribute, publicly display, modify, create derivative\r\n    works, and sublicense such content or any part of such content in any media.\r\n  </p>\r\n  <h2>Privacy Notice\r\n  </h2>\r\n  <p>A copy of the Healthy LifeStyle Privacy Policy that applies to the collection, use, disclosure and other processing of\r\n    personal information of Healthy LifeStyle are posted and available on the site and/or mobile application. Terms and\r\n    Conditions\r\n    incorporate the entirety of the information we may obtain about you (either via the Healthy LifeStyle site and/or mobile\r\n    application, by email, telephone, or any other means) being collected, stored and otherwise processed in accordance\r\n    with the terms of the Privacy Policy.\r\n  </p>\r\n  <h2>Site Content\r\n  </h2>\r\n  <p>The content of the site and/or mobile application including but not limited to the texts, graphics, photographs,\r\n    software, video and audio content, etc is owned by or licensed to Healthy LifeStyle and is subject to copyright and other\r\n    intellectual property rights under Ukrainian Law. All users are prohibited to re-post, republish, reproduce or copy\r\n    the site content to other sites, mobile applications, or otherwise without the prior written consent or citation of\r\n    content ownership from Healthy LifeStyle. Users cannot sell or distribute site content to the third parties, prepare\r\n    derivative works of or otherwise exploit content without the prior written permission of Healthy LifeStyle. Healthy LifeStyle has no\r\n    obligations to grant you its permission to re-post, republish, reproduce, copy, sell, distribute, prepare derivative\r\n    works of or otherwise exploit site content. All of Healthy LifeStyle trademarks, service marks and logos are owned by or\r\n    licensed to Healthy LifeStyle and may not be used for any purpose without the prior written consent of Healthy LifeStyle.\r\n  </p>\r\n  <h2>Your Conduct on the Healthy LifeStyle site and/or mobile application\r\n  </h2>\r\n  <p>Healthy LifeStyle site is a private property. All interactions on this site must be lawful and must comply with Terms and\r\n    Conditions. To the extent your conduct (as judged by us in our sole discretion) restricts or inhibits any other user\r\n    from using or enjoying any part of this site, we may limit your privileges on the site and seek other remedies.<br>The\r\n    site and/or mobile application are designed to offer users reservation with restaurants, hotels, shops,\r\n    entertainment\r\n    venues and other partners (“Partners”), with the opportunity to check-in and get a discount. You agree not to use\r\n    the\r\n    site and/or mobile application in any manner that could damage, disable, overburden, or impair any server, or the\r\n    networks connected to any Healthy LifeStyle server, or interfere with any other party’s use and enjoyment of the site and/or\r\n    mobile application. You are prohibited to gain unauthorised access to any portion of the site and/or mobile\r\n    application, other accounts, computer systems, or networks connected to any Healthy LifeStyle server, through hacking,\r\n    password or data mining, or any other means. You may not obtain or attempt to obtain any materials or information\r\n    not\r\n    intentionally made available to you on the site and/or mobile application. You will not link to any part of the\r\n    sites\r\n    if such activity is illegal or may cause damage to, or otherwise harm Healthy LifeStyle or any other party. Healthy LifeStyle\r\n    reserves\r\n    the right in its sole discretion to disable or otherwise terminate your use of the site and/or mobile application,\r\n    or\r\n    request you to do the same. Healthy LifeStyle reserves all legal rights in connection to the Healthy LifeStyle sites and/or mobile\r\n    application not expressly granted to you by Terms and Conditions.<br>As a recommendation service, we think it is\r\n    really important that we send you communications about our services and promotional offers that we think may\r\n    interest\r\n    you, as we would hate to think you missed out on a discount with one of Partners. Therefore, by using the site\r\n    and/or\r\n    mobile application you agree to be occasionally contacted by us via email or mobile phone. However, you have the\r\n    right\r\n    to opt-out of communications we send you at any time. You can exercise this right in accordance with Privacy Policy.\r\n  </p>\r\n  <h2>Reservations and Cancellations\r\n  </h2>\r\n  <p>Healthy LifeStyle provides the reservation program to its customers but does not guarantee the reservations or discounts\r\n    provided by Partners. Healthy LifeStyle is not responsible for the service, eligibility, or termination of Partners or\r\n    services provided or not provided by Partners to you. Healthy LifeStyle may stop your use of the site and/or mobile\r\n    application and prohibit you from making further reservations for any reason and at sole discretion of Healthy LifeStyle.\r\n    Such\r\n    actions include but not limited to committing fraud of any kind with regards to your obligation to pay Partners in\r\n    full for services rendered.\r\n  </p>\r\n  <p>You agree to notify Partners within a reasonable time in case of any changes of reservation time or cancelation of\r\n    any reservations made by you.\r\n  </p>\r\n  <h2>Discounts and Taxes\r\n  </h2>\r\n  <p>By using the site and/or mobile application you agree to notify us immediately of any errors or omissions in the\r\n    discount amount. We will use reasonable efforts to correct any errors or omissions as soon as practicable after\r\n    learning of them. Discounts cannot be applied retroactively.\r\n  </p>\r\n  <p>Applicable taxes may vary. We may not be able to notify you in advance of changes in applicable taxes.\r\n  </p>\r\n  <h2>Claim of Copyright Infringement\r\n  </h2>\r\n  <p>Healthy LifeStyle respects the intellectual property rights of others. If you believe in good faith that any site or mobile\r\n    application content, or other matter posted on the site infringes your copyrights, please contact us providing the\r\n    following:\r\n  </p>\r\n  <ul>\r\n    <li>a physical or electronic signature of the owner, or a person authorised to act on behalf of the owner, of the\r\n      copyright that is allegedly infringed;\r\n    </li>\r\n    <li>identification of the copyrighted work allegedly infringed;\r\n    </li>\r\n    <li>identifying information reasonable sufficient to allow determination by Healthy LifeStyle of the location of the\r\n      material\r\n      that is allegedly infringing;\r\n    </li>\r\n    <li>information reasonably sufficient to permit Healthy LifeStyle to contact you;\r\n    </li>\r\n    <li>a statement that the information in the notification is accurate, and under penalty of perjury, that you are\r\n      authorised to act on behalf of the owner of an exclusive right that is allegedly infringed; and\r\n    </li>\r\n    <li>your acknowledge that if your fail to comply with all of the requirements of this section, your notice may not\r\n      be\r\n      valid. For any questions regarding this procedure, or to submit a complaint, please contact Healthy LifeStyle with our\r\n      “Contact Us” form.\r\n    </li>\r\n  </ul>\r\n  <h2>Links to Other Websites of Mobile Sites\r\n  </h2>\r\n  <p>The site may contain advertisements and/or links to other sites (“the third party site”). These links are provided\r\n    solely for the convenience of the users. Healthy LifeStyle does not endorse, sanction or verify the accuracy or ownership of\r\n    the information contained in the advertisements or the content of the third party site or any products or services\r\n    advertised on the third party site. If you decide to leave the site and navigate to the third party site, or install\r\n    any applications, software or download content from any such sites, you do so at your own risk. Once you access the\r\n    third party site through a link on the Healthy LifeStyle site and/or mobile application, you may no longer be protected by\r\n    Terms and Conditions and you may be subject to the terms and conditions of such third party site. You should review\r\n    the applicable terms and policies, including privacy and data gathering practices, of any such sites to which you\r\n    navigate to from the Healthy LifeStyle site and/or mobile application, or relating to any applications you use or install\r\n    from\r\n    the third party site. Concerns regarding the third party site should be directed to the third party site itself. DTG\r\n    GROUP bears no responsibility for any actions associated with the third party site. Moreover, Healthy LifeStyle does not\r\n    imply\r\n    an affiliation with any third party sites.\r\n  </p>\r\n  <h2> Disclaimers and Limitations of Liability\r\n  </h2>\r\n  <p>You agree that Healthy LifeStyle will not be held liable for any direct or consequential loss or damage incurred as a\r\n    result\r\n    of use of the site and/or mobile application, inability to use, or in connection with the use, including, without\r\n    limitation any liability for:\r\n  </p>\r\n  <ul>\r\n    <li>loss of income or revenue;\r\n    </li>\r\n    <li>loss of business;\r\n    </li>\r\n    <li>loss of profits or contracts;\r\n    </li>\r\n    <li>loss of anticipated savings;\r\n    </li>\r\n    <li>loss of data;\r\n    </li>\r\n    <li>loss of goodwill;\r\n    </li>\r\n    <li>wasted management of office time;\r\n    </li>\r\n  </ul>\r\n  <p>for any other loss or damage of any kind, however arising and whether caused by tort (including negligence), breach\r\n    of contract or otherwise, even if foreseeable.\r\n  </p>\r\n  <p>You understand that Healthy LifeStyle is not the seller of the goods or provider of the services advertised on the site\r\n    and/or mobile application. Healthy LifeStyle is not the agent of any of Partners, and therefore takes no responsibility for\r\n    the services or products for which the Partner provides. Healthy LifeStyle has the right at any time to change, modify,\r\n    correct, add to, discontinue, or retire any aspect or feature of the site and/or mobile application, including but\r\n    not\r\n    limited to hours of availability, equipment needed for access or use, or the availability of the site and/or mobile\r\n    application (or any part thereof) on any particular device or communications service. Healthy LifeStyle has no obligation to\r\n    provide you with notice of any of such changes, and Healthy LifeStyle is under no obligation to provide you with any\r\n    support,\r\n    error corrections, updates, upgrades, bug fixes, and/or enhancements of the site and/or mobile application.\r\n  </p>\r\n  <h2>Indemnification</h2>\r\n  <p>You agree to defend, indemnify, and hold harmless Healthy LifeStyle from all liabilities, claims, damages, losses, and\r\n    expenses, including legal fees that arise from your use of the site and/or mobile application. Healthy LifeStyle reserves\r\n    the\r\n    right at its own expense to assume the exclusive defence and control of any matter otherwise subject to\r\n    indemnification by you, in which event you will cooperate with Healthy LifeStyle in asserting any available defences.\r\n  </p>\r\n  <h2>Governing Law and Jurisdiction\r\n  </h2>\r\n  <p>All disputes arising out of, relating to or connected with Terms and Conditions, Privacy Policy, or your use of any\r\n    part of the Healthy LifeStyle site and/or mobile application, shall be referred to and finally resolved under the rules of\r\n    Ukrainian Law. Notwithstanding any other provision of Terms and Conditions, to the extent that you have in any\r\n    manner\r\n    violated or threatened to violate Healthy LifeStyle intellectual property rights, Healthy LifeStyle reserves the right to seek\r\n    injunctive or other appropriate relief in any court of Ukraine, and you consent to exclusive jurisdiction and venue\r\n    in\r\n    such courts.\r\n  </p>\r\n  <h2>Termination</h2>\r\n  <p>You may terminate your relationships with Healthy LifeStyle at any time by closing your account, discontinuing your use of\r\n    the site and/or mobile application, and providing Healthy LifeStyle with a notice of termination. Please review our Privacy\r\n    Policy for the information about what we do with your data when account was terminated.\r\n  </p>\r\n  <p>We may close your account, suspend your ability to use certain portions of the site and/or mobile application,\r\n    and/or\r\n    ban you altogether from the site and/or mobile application for any or no reason, and without notice or liability of\r\n    any kind. Any such actions could prevent you from accessing your account, the site, your content, site content,\r\n    mobile\r\n    application, or any other related information.\r\n  </p>\r\n  <p>In the event of any termination your relationships with Healthy LifeStyle, whether by you or us, sections 1-15 will\r\n    continue\r\n    to be in full force and effect.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/additional-pages/terms-conditions/terms-conditions.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/additional-pages/terms-conditions/terms-conditions.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-bottom: 50px; }\n\nh1 {\n  color: #505050;\n  font-size: 40px;\n  font-weight: bold;\n  line-height: normal;\n  letter-spacing: 0.8px;\n  text-align: center;\n  margin: 30px 0; }\n\nh2 {\n  font-size: 25px;\n  font-weight: bold;\n  color: #505050;\n  line-height: 40px;\n  margin: 20px 0; }\n\nh3 {\n  font-size: 20px;\n  font-weight: bold;\n  color: #505050;\n  line-height: 40px; }\n\np {\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 1.88;\n  letter-spacing: 0.3px;\n  color: #454545; }\n\nul {\n  padding-left: 20px;\n  list-style: disc; }\n\nul li {\n    font-size: 17px;\n    font-weight: normal;\n    line-height: 1.88;\n    letter-spacing: 0.3px;\n    color: #454545; }\n\n@media (max-width: 760px) {\n  h1 {\n    font-size: 35px; }\n  h2 {\n    font-size: 25px; } }\n"

/***/ }),

/***/ "./src/app/additional-pages/terms-conditions/terms-conditions.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/additional-pages/terms-conditions/terms-conditions.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    TermsConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/additional-pages/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.scss */ "./src/app/additional-pages/terms-conditions/terms-conditions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _premiums_premiums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./premiums/premiums.component */ "./src/app/premiums/premiums.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _about_services_about_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-services/about-services.component */ "./src/app/about-services/about-services.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _for_business_for_business_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./for-business/for-business.component */ "./src/app/for-business/for-business.component.ts");
/* harmony import */ var _blogs_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blogs/blog-article/blog-article.component */ "./src/app/blogs/blog-article/blog-article.component.ts");
/* harmony import */ var _blogs_bloger_bloger_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blogs/bloger/bloger.component */ "./src/app/blogs/bloger/bloger.component.ts");
/* harmony import */ var _additional_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./additional-pages/faq/faq.component */ "./src/app/additional-pages/faq/faq.component.ts");
/* harmony import */ var _additional_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./additional-pages/privacy-policy/privacy-policy.component */ "./src/app/additional-pages/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _additional_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./additional-pages/terms-conditions/terms-conditions.component */ "./src/app/additional-pages/terms-conditions/terms-conditions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'premium', component: _premiums_premiums_component__WEBPACK_IMPORTED_MODULE_3__["PremiumsComponent"] },
    { path: 'blogs', component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_4__["BlogsComponent"] },
    { path: 'about-services', component: _about_services_about_services_component__WEBPACK_IMPORTED_MODULE_5__["AboutServicesComponent"] },
    { path: 'for-business', component: _for_business_for_business_component__WEBPACK_IMPORTED_MODULE_7__["ForBusinessComponent"] },
    { path: 'services/:id', component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
    { path: 'bloger/:id', component: _blogs_bloger_bloger_component__WEBPACK_IMPORTED_MODULE_9__["BlogerComponent"] },
    { path: 'blog/:id', component: _blogs_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_8__["BlogArticleComponent"] },
    { path: 'faq', component: _additional_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"] },
    { path: 'privacy-policy', component: _additional_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPolicyComponent"] },
    { path: 'terms-and-conditions', component: _additional_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_12__["TermsConditionsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var config = {
            apiKey: "AIzaSyCr3bMGJSv8w12heh5_brUCg7kUCSjFSbs",
            authDomain: "healthy-lifestyle-9ae39.firebaseapp.com",
            databaseURL: "https://healthy-lifestyle-9ae39.firebaseio.com",
            projectId: "healthy-lifestyle-9ae39",
            storageBucket: "healthy-lifestyle-9ae39.appspot.com",
            messagingSenderId: "15808880644"
        };
        // const  config = {
        //   apiKey: "AIzaSyCr3bMGJSv8w12heh5_brUCg7kUCSjFSbs",
        //   authDomain: "healthy-lifestyle-9ae39.firebaseapp.com",
        //   databaseURL: "https://healthy-lifestyle-9ae39.firebaseio.com",
        //   projectId: "healthy-lifestyle-9ae39",
        //   storageBucket: "healthy-lifestyle-9ae39.appspot.com",
        //   messagingSenderId: "15808880644"
        // };
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _premiums_premiums_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./premiums/premiums.component */ "./src/app/premiums/premiums.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _about_services_about_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about-services/about-services.component */ "./src/app/about-services/about-services.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var _home_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/chart/chart.component */ "./src/app/home/chart/chart.component.ts");
/* harmony import */ var _for_business_for_business_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./for-business/for-business.component */ "./src/app/for-business/for-business.component.ts");
/* harmony import */ var _blogs_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blogs/blog-article/blog-article.component */ "./src/app/blogs/blog-article/blog-article.component.ts");
/* harmony import */ var _blogs_bloger_bloger_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blogs/bloger/bloger.component */ "./src/app/blogs/bloger/bloger.component.ts");
/* harmony import */ var _thisissoon_angular_ellipsis__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @thisissoon/angular-ellipsis */ "./node_modules/@thisissoon/angular-ellipsis/esm5/thisissoon-angular-ellipsis.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialogs_services_dialog_services_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_shared/dialogs/services-dialog/services-dialog.component */ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.ts");
/* harmony import */ var _shared_dialogs_get_app_get_app_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_shared/dialogs/get-app/get-app.component */ "./src/app/_shared/dialogs/get-app/get-app.component.ts");
/* harmony import */ var _shared_pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_shared/pipes/ellipsis.pipe */ "./src/app/_shared/pipes/ellipsis.pipe.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _additional_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./additional-pages/faq/faq.component */ "./src/app/additional-pages/faq/faq.component.ts");
/* harmony import */ var _additional_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./additional-pages/privacy-policy/privacy-policy.component */ "./src/app/additional-pages/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _additional_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./additional-pages/terms-conditions/terms-conditions.component */ "./src/app/additional-pages/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_shared/service.service */ "./src/app/_shared/service.service.ts");
/* harmony import */ var _auth_social_auth_social_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./auth-social/auth-social.component */ "./src/app/auth-social/auth-social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































// import {WindowService} from './_shared/services/window.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _premiums_premiums_component__WEBPACK_IMPORTED_MODULE_13__["PremiumsComponent"],
                _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_14__["BlogsComponent"],
                _about_services_about_services_component__WEBPACK_IMPORTED_MODULE_15__["AboutServicesComponent"],
                _for_business_for_business_component__WEBPACK_IMPORTED_MODULE_21__["ForBusinessComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"],
                _home_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__["ChartComponent"],
                _blogs_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_22__["BlogArticleComponent"],
                _blogs_bloger_bloger_component__WEBPACK_IMPORTED_MODULE_23__["BlogerComponent"],
                _shared_dialogs_services_dialog_services_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ServicesDialogComponent"],
                _shared_dialogs_get_app_get_app_component__WEBPACK_IMPORTED_MODULE_29__["GetAppComponent"],
                _shared_pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_30__["EllipsisPipe"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_31__["AuthComponent"],
                _additional_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_32__["FaqComponent"],
                _additional_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_33__["PrivacyPolicyComponent"],
                _additional_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_34__["TermsConditionsComponent"],
                _auth_social_auth_social_component__WEBPACK_IMPORTED_MODULE_36__["AuthSocialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_17__["SlickModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDbVypnb55PqKsA0UXmF1-V9LQA5INoC2I'
                }),
                _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_19__["AmChartsModule"],
                _thisissoon_angular_ellipsis__WEBPACK_IMPORTED_MODULE_24__["EllipsisModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"]
            ],
            providers: [_shared_service_service__WEBPACK_IMPORTED_MODULE_35__["ServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [_shared_dialogs_services_dialog_services_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ServicesDialogComponent"], _shared_dialogs_get_app_get_app_component__WEBPACK_IMPORTED_MODULE_29__["GetAppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_31__["AuthComponent"], _auth_social_auth_social_component__WEBPACK_IMPORTED_MODULE_36__["AuthSocialComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-social/auth-social.component.html":
/*!********************************************************!*\
  !*** ./src/app/auth-social/auth-social.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sign_up\">\n  <button class=\"g-signin2 btn\" data-onsuccess=\"onSignIn\" (click)=\"onSignIn()\">Sign up via Google</button>\n  <button class=\"btn\" (click)=\"loginFB()\">Sign up via Facebook</button>\n  <button class=\"btn\" (click)=\"singUpNumber()\" >Sign up via phone Number</button>\n</div>\n<p class=\"error\">{{msg}}</p>"

/***/ }),

/***/ "./src/app/auth-social/auth-social.component.scss":
/*!********************************************************!*\
  !*** ./src/app/auth-social/auth-social.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  text-align: center; }\n\ninput {\n  display: block;\n  margin-right: auto;\n  margin-left: auto; }\n\n.btn {\n  border: none;\n  height: 57px;\n  line-height: 10px;\n  margin-bottom: 20px; }\n\n#recaptcha-container {\n  margin: 30px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.verify {\n  margin-top: 20px; }\n\n.sign_up {\n  display: flex;\n  flex-direction: column; }\n\n.error {\n  color: #e74747;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/auth-social/auth-social.component.ts":
/*!******************************************************!*\
  !*** ./src/app/auth-social/auth-social.component.ts ***!
  \******************************************************/
/*! exports provided: AuthSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSocialComponent", function() { return AuthSocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_shared/service.service */ "./src/app/_shared/service.service.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthSocialComponent = /** @class */ (function () {
    function AuthSocialComponent(dialogRef, service, dialog) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.dialog = dialog;
    }
    AuthSocialComponent_1 = AuthSocialComponent;
    AuthSocialComponent.prototype.ngOnInit = function () {
        // FB.init({
        //   appId      : '235103837267101',
        //   cookie     : true,
        //   xfbml      : true,
        //   version    : 'v3.0'
        // });
        FB.init({
            appId: '235103837267101',
            cookie: true,
            xfbml: true,
            version: 'v3.0'
        });
        FB.AppEvents.logPageView();
    };
    AuthSocialComponent.prototype.loginFB = function () {
        this.dialog.open(_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]);
        this.dialogRef.close(AuthSocialComponent_1);
        FB.login(function (response) {
            console.log(response);
            if (response.authResponse) {
                FB.api('/me', function (resp) {
                    var _this = this;
                    console.log(response);
                    console.log('Good to see you, ' + resp.name + '.');
                    console.log("Your UID is " + resp.id);
                    var fbId = resp.id;
                    if (fbId) {
                        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users').once('value', function (snap) {
                            var data = snap.val();
                            var keys = Object.keys(data);
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + key).once('value', function (snapshot) {
                                    var userInfo = snapshot.val();
                                    var id = userInfo['facebookId'];
                                    if (id) {
                                        console.log(id);
                                        if (id == fbId) {
                                            console.log('Match');
                                            _this.closeDiaslog();
                                            _this.service.transferData(true);
                                        }
                                        else {
                                            console.log('doesnt exist');
                                            localStorage.setItem('fb', fbId);
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
                console.log(response.authResponse);
            }
            else {
                // cancelled
                alert('User cancelled login or did not fully authorize.');
            }
        });
    };
    AuthSocialComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '15808880644-eh0h91pl7rpq66fn9qfk55f3i0mc7gup.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
        });
    };
    AuthSocialComponent.prototype.singUpNumber = function () {
        this.dialog.open(_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]);
        this.dialogRef.close(AuthSocialComponent_1);
    };
    AuthSocialComponent.prototype.singUpGmail = function () {
        var _this = this;
        this.dialog.open(_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]);
        this.dialogRef.close(AuthSocialComponent_1);
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result);
            var googleId = result['additionalUserInfo']['profile']['id'];
        })
            .then(function () {
            _this.authUserGoogle();
        })
            .catch(function (error) {
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            this.msg = errorMessage;
        });
    };
    AuthSocialComponent.prototype.authUserGoogle = function () {
        var _this = this;
        var googleId = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.providerData[0]['uid'];
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users').once('value', function (snap) {
            var data = snap.val();
            var keys = Object.keys(data);
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var key = keys_2[_i];
                firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + key).once('value', function (snapshot) {
                    var userInfo = snapshot.val();
                    var id = userInfo['googleId'];
                    if (id) {
                        // console.log(id);
                        // console.log(googleId);
                        if (id == googleId) {
                            console.log('Match');
                            _this.closeDiaslog();
                            _this.service.transferData(true);
                            var provider = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.providerData[0]['providerId'];
                            if (provider == 'google.com') {
                                var user = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                                user.delete().then(function () {
                                    console.log('delete');
                                }, function (error) {
                                    console.log(error);
                                });
                            }
                            if (provider == 'facebook.com') {
                                var user = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                                user.delete().then(function () {
                                    console.log('delete');
                                }, function (error) {
                                    console.log(error);
                                });
                            }
                            return;
                        }
                        else {
                            console.log('doesnt exist');
                        }
                    }
                });
            }
        });
    };
    AuthSocialComponent.prototype.closeDiaslog = function () {
        this.dialog.closeAll();
    };
    AuthSocialComponent.prototype.singUpFacebook = function () {
        var _this = this;
        this.dialog.open(_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]);
        this.dialogRef.close(AuthSocialComponent_1);
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result);
        })
            .then(function () {
            _this.authUserFacebook();
        })
            .catch(function (error) {
            console.log(error);
            this.dialog.open(AuthSocialComponent_1);
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            this.msg = errorMessage;
        });
    };
    AuthSocialComponent.prototype.authUserFacebook = function () {
        var _this = this;
        var facebookId = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.providerData[0]['uid'];
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users').once('value', function (snap) {
            var data = snap.val();
            var keys = Object.keys(data);
            for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
                var key = keys_3[_i];
                firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + key).once('value', function (snapshot) {
                    var userInfo = snapshot.val();
                    var id = userInfo['facebookId'];
                    if (id) {
                        // console.log(id);
                        // console.log(googleId);
                        if (id == facebookId) {
                            console.log('Match');
                            _this.closeDiaslog();
                            _this.service.transferData(true);
                            return;
                        }
                        else {
                            console.log('doesnt exist');
                        }
                    }
                });
            }
        });
    };
    AuthSocialComponent.prototype.onSignIn = function () {
        var _this = this;
        var googleUser = gapi.auth2.getAuthInstance().currentUser.get();
        console.log('Token id: ' + googleUser.getAuthResponse().id_token);
        this.dialog.open(_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]);
        var profile = googleUser.getBasicProfile();
        console.log(googleUser);
        console.log(profile);
        var googleId = profile.getId();
        // const profile = googleUser.getBasicProfile();
        console.log('ID: ' + googleId); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        if (googleId) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users').once('value', function (snap) {
                var data = snap.val();
                var keys = Object.keys(data);
                for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
                    var key = keys_4[_i];
                    firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + key).once('value', function (snapshot) {
                        var userInfo = snapshot.val();
                        var id = userInfo['googleId'];
                        if (id) {
                            // console.log(id);
                            // console.log(googleId);
                            if (id == googleId) {
                                console.log('Match');
                                _this.closeDiaslog();
                                _this.service.transferData(true);
                            }
                            else {
                                console.log('doesnt exist');
                                localStorage.setItem('gm', googleId);
                            }
                        }
                    });
                }
            });
            // this.service.transferData(true);
            // this.closeDiaslog();
            console.log('true');
        }
    };
    AuthSocialComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    AuthSocialComponent = AuthSocialComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-social',
            template: __webpack_require__(/*! ./auth-social.component.html */ "./src/app/auth-social/auth-social.component.html"),
            styles: [__webpack_require__(/*! ./auth-social.component.scss */ "./src/app/auth-social/auth-social.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AuthSocialComponent);
    return AuthSocialComponent;
    var AuthSocialComponent_1;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"authForm\" >\r\n  <input type=\"text\" placeholder=\"Type your number\" formControlName=\"phoneNumber\">\r\n  <div id=\"recaptcha-container\"></div>\r\n  <div *ngIf=\"windowRef.confirmationResult\">\r\n    <label for=\"code\">Enter your Verification Code Here</label><br>\r\n    <input type=\"text\" id=\"code\" formControlName=\"verificationCode\">\r\n  </div>\r\n  <button (click)=\"sendLoginCode()\" *ngIf=\"!windowRef.confirmationResult\" class=\"btn\">SMS Text Login Code</button>\r\n  <button (click)=\"verifyLoginCode()\" *ngIf=\"windowRef.confirmationResult\" class=\"btn verify\">verify</button>\r\n</form>\r\n<p class=\"error\">{{msg}}</p>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  text-align: center; }\n\ninput {\n  display: block;\n  margin-right: auto;\n  margin-left: auto; }\n\n.btn {\n  border: none;\n  height: 57px;\n  line-height: 10px;\n  margin-bottom: 20px; }\n\n#recaptcha-container {\n  margin: 30px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.verify {\n  margin-top: 20px; }\n\n.sign_up {\n  display: flex;\n  flex-direction: column; }\n\n.error {\n  color: #e74747;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_shared/service.service */ "./src/app/_shared/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = /** @class */ (function () {
    function AuthComponent(dialogRef, afAuth, fb, service, dialog) {
        this.dialogRef = dialogRef;
        this.afAuth = afAuth;
        this.fb = fb;
        this.service = service;
        this.dialog = dialog;
        this.isAuthentificated = false;
        this.showBlockNumber = false;
    }
    AuthComponent_1 = AuthComponent;
    AuthComponent.prototype.ngOnInit = function () {
        this.authForm = this.fb.group({
            phoneNumber: [''],
            verificationCode: ['']
        });
        this.windowRef = window;
        this.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].RecaptchaVerifier('recaptcha-container');
        this.windowRef.recaptchaVerifier.render();
        this.windowRef.confirmationResult = '';
    };
    AuthComponent.prototype.sendLoginCode = function () {
        var _this = this;
        var appVerifier = this.windowRef.recaptchaVerifier;
        var num = this.authForm.getRawValue().phoneNumber;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithPhoneNumber(num, appVerifier)
            .then(function (result) {
            _this.windowRef.confirmationResult = result;
            console.log(result);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthComponent.prototype.verifyLoginCode = function () {
        var _this = this;
        var verificationCode = this.authForm.getRawValue().verificationCode;
        this.windowRef.confirmationResult
            .confirm(verificationCode)
            .then(function (result) {
            _this.user = result.user;
            console.log(result);
            _this.uid = _this.user['uid'];
            _this.isAuthentificated = true;
            _this.dialogRef.close(AuthComponent_1);
        })
            .then(function () {
            localStorage.setItem('auth', 'true');
            _this.service.transferData(_this.isAuthentificated);
        })
            .catch(function (error) {
            console.log(error, "Incorrect code entered?");
            _this.isAuthentificated = false;
            localStorage.setItem('auth', 'false');
            _this.service.transferData(_this.isAuthentificated);
        });
        // ['facebookId']
        setTimeout(function () {
            var gId = localStorage.getItem('gm');
            var fb = localStorage.getItem('fb');
            var phoneNumber = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.phoneNumber;
            var userId = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
            console.log(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser);
            var d = {};
            if (phoneNumber) {
                d['phone'] = phoneNumber;
            }
            if (gId) {
                var gmailString = gId.toString();
                d['googleId'] = gmailString;
            }
            if (fb) {
                var fbString = fb.toString();
                d['facebookId'] = fbString;
            }
            console.log(d);
            if (d != {}) {
                firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('/users/' + _this.uid).set(d);
            }
        }, 10000);
    };
    AuthComponent = AuthComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AuthComponent);
    return AuthComponent;
    var AuthComponent_1;
}());



/***/ }),

/***/ "./src/app/blogs/blog-article/blog-article.component.html":
/*!****************************************************************!*\
  !*** ./src/app/blogs/blog-article/blog-article.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\n  bdColor = \"rgba(255, 255, 255, 1)\"\r\n  size = \"large\"\r\n  color = \"#fe5c5c\"\r\n  type = \"ball-spin\"\r\n></ngx-spinner>\r\n<section class=\"blog-one-intro\">\r\n  <div class=\"section-container\">\r\n    <div class=\"blog-one-author\" routerLink=\"/bloger\">\r\n      <div class=\"blog-info-author\" [routerLink]=\"['/bloger', this.currentBlog.bloger_info.blogerId]\">\r\n        <div class=\"info-author-img\"\r\n             [ngStyle]=\"{'background-image': 'url('+this.currentBlog.bloger_info.photo+')'}\">\r\n        </div>\r\n        <div class=\"info-author-txt\">\r\n          <span class=\"bold\">{{this.currentBlog.bloger_info.name}}</span>\r\n          <span class=\"italic\">{{this.currentBlog.bloger_info.type}}</span>\r\n        </div>\r\n      </div>\r\n      <span class=\"blog-date\">{{this.currentBlog.date | date:'mediumDate'}}</span></div>\r\n    <h2 class=\"blog-info-title\">{{this.currentBlog.title}}</h2>\r\n  </div>\r\n  <div class=\"blog-one-img\" [ngStyle]=\"{'background-image': 'url('+this.currentBlog.photo+')'}\"></div>\r\n</section>\r\n<section class=\"blog-one-content\">\r\n  <div class=\"section-container\">\r\n    <div class=\"blog-nav-soc\"><a href=\"#\"><img src=\"../../../assets/img/icons/fb-dark.svg\"></a><a href=\"#\"><img\r\n      src=\"../../../assets/img/icons/tw-dark.svg\"></a><a href=\"#\"><img\r\n      src=\"../../../assets/img/icons/mail-dark.svg\"></a></div>\r\n    <div class=\"blog-one-txt\">\r\n      <p>{{this.currentBlog.description}}</p>\r\n      <!--h3 & p-->\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"blog-one-comments\">\r\n  <div class=\"section-container\"><h3 class=\"blog-comments-title\">Comments</h3>\r\n    <div class=\"blog-comments-write\">\r\n      <div class=\"comments-area\">\r\n        <div class=\"blog-info-author\">\r\n          <div class=\"info-author-img\"\r\n               [routerLink]=\"['/bloger', this.currentBlog.bloger_info.blogerId]\"\r\n               [ngStyle]=\"{'background-image': 'url('+this.currentBlog.bloger_info.photo+')'}\">\r\n          </div>\r\n        </div>\r\n        <textarea placeholder=\"Write your comment\"></textarea></div>\r\n      <a class=\"btn\">post</a></div>\r\n    <div class=\"blog-comments-list\">\r\n      <!--<div class=\"comments-item\">-->\r\n        <!--<div class=\"blog-info-author\"><img src=\"../../../assets/img/home/face1.png\">-->\r\n          <!--<div class=\"info-author-txt\"><span class=\"bold\">Maria Levandovski</span></div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"comments-item-info\"><p>“It ain’t easy being cheesy.” Raclette has successfully-->\r\n          <!--challenged that statement. Raclette is a type of Swiss cheese that is fashioned into a wheel of-->\r\n          <!--13 lbs. It’s halved, and the inside is melted into a smooth lava-like perfection. It’s then-->\r\n          <!--poured over Eggs Beni or Savoyarde with cornichons or any other dish. Hearty, cheesy meals.</p>-->\r\n          <!--<span class=\"blog-date\">Feb 9, 2018</span></div>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"comments-item\">-->\r\n        <!--<div class=\"blog-info-author\"><img src=\"../../../assets/img/home/face1.png\">-->\r\n          <!--<div class=\"info-author-txt\"><span class=\"bold\">Maria Levandovski</span></div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"comments-item-info\"><p>“It ain’t easy being cheesy.” Raclette has successfully-->\r\n          <!--challenged that statement. Raclette is a type of Swiss cheese that is fashioned into a wheel of-->\r\n          <!--13 lbs. It’s halved, and the inside is melted into a smooth lava-like perfection. It’s then-->\r\n          <!--poured over Eggs Beni or Savoyarde with cornichons or any other dish. Hearty, cheesy meals.</p>-->\r\n          <!--<span class=\"blog-date\">Feb 9, 2018</span></div>-->\r\n      <!--</div>-->\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"blog-one-similar\">\r\n  <div class=\"section-container\">\r\n    <div class=\"section-title\">More in this theme</div>\r\n    <div class=\"blogs-container\">\r\n      <div class=\"blogs-item\" *ngFor=\"let blog of currentBlogerArticles\">\r\n        <div class=\"blogs-item-img\" [ngStyle]=\"{'background-image': 'url('+blog.photo+')'}\"></div>\r\n        <div class=\"blogs-item-info\"><span class=\"blog-info-date\">{{blog.date | date:'mediumDate'}}</span>\r\n          <h2 class=\"blog-info-title\">{{blog.title}}</h2>\r\n          <p class=\"blog-info-description\">{{blog.description | ellipsis:80}}</p>\r\n          <a href=\"#\" class=\"blog-info-read-more\" [routerLink]=\"['/blog', blog.blogId]\">Read more\r\n            <i aria-hidden=\"true\" class=\"fa fa-long-arrow-right\"></i>\r\n          </a>\r\n          <div class=\"blog-info-author\">\r\n            <div class=\"info-author-img\" [ngStyle]=\"{'background-image': 'url('+blog.bloger_info.photo+')'}\"></div>\r\n            <div class=\"info-author-txt\">\r\n              <span class=\"bold\">{{blog.bloger_info.name}}</span>\r\n              <span class=\"italic\">{{blog.bloger_info.type}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/blogs/blog-article/blog-article.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/blogs/blog-article/blog-article.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-one-intro .section-container {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n\n.blog-one-intro .blog-one-author {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.blog-one-intro .blog-info-author {\n  margin-top: 0;\n  margin-right: 465px; }\n\n.blog-one-intro .blog-info-title {\n  margin: 40px 0 0; }\n\n.blog-one-intro .blog-one-img {\n  height: 300px;\n  background-image: url('blog-description-bg.png');\n  background-size: cover;\n  background-position: center; }\n\n@media (max-width: 1024px) {\n  .blog-one-intro .blog-one-author {\n    width: 100%; }\n  .blog-one-intro .blog-info-author {\n    margin-top: 0;\n    margin-right: 0; } }\n\n@media (max-width: 768px) {\n  .blog-one-intro .blog-one-img {\n    height: 200px; }\n  .blog-one-intro .blog-one-author {\n    display: block; }\n  .blog-one-intro .blog-date {\n    display: block;\n    margin-top: 30px; } }\n\n.blog-one-content .section-container {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n.blog-one-content .blog-nav-soc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n\n.blog-one-content .blog-nav-soc a:not(:first-child) {\n    margin-top: 25px; }\n\n.blog-one-content .blog-one-txt {\n  max-width: 635px;\n  margin-left: 70px;\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 1.59;\n  letter-spacing: 0.3px;\n  text-align: left;\n  color: #454545; }\n\n.blog-one-content .blog-one-txt h3 {\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.35;\n    letter-spacing: 0.4px;\n    margin-bottom: 30px; }\n\n@media (max-width: 768px) {\n  .blog-one-content .section-container {\n    display: block; }\n  .blog-one-content .blog-nav-soc {\n    margin-bottom: 35px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: row; }\n    .blog-one-content .blog-nav-soc a:not(:first-child) {\n      margin-top: 0;\n      margin-left: 25px; }\n  .blog-one-content .blog-one-txt {\n    max-width: 100%;\n    margin-left: 0; } }\n\n.blog-one-comments .section-container {\n  padding-top: 40px; }\n\n.blog-one-comments .blog-comments-title {\n  font-size: 30.5px;\n  font-weight: 300;\n  letter-spacing: 0.6px;\n  text-align: left;\n  color: #505050; }\n\n.blog-one-comments .blog-comments-write {\n  max-width: 700px;\n  text-align: right; }\n\n.blog-one-comments .comments-area {\n  margin-top: 50px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n.blog-one-comments .comments-area textarea {\n    width: 100%;\n    padding: 18px 40px;\n    height: 126px;\n    resize: none;\n    border: solid 1px #dbdbdb;\n    font-size: 17px;\n    font-weight: 300;\n    line-height: normal;\n    position: relative;\n    box-sizing: border-box; }\n\n.blog-one-comments .comments-area textarea:focus {\n      outline: none; }\n\n.blog-one-comments .comments-area textarea:before {\n      content: \"\";\n      width: 50px;\n      height: 50px;\n      border: solid 1px #dbdbdb; }\n\n.blog-one-comments .comments-area ::-webkit-input-placeholder {\n    font-size: 17px;\n    font-weight: 300;\n    font-style: italic;\n    color: #bdbdbd; }\n\n.blog-one-comments .comments-area :-ms-input-placeholder {\n    font-size: 17px;\n    font-weight: 300;\n    font-style: italic;\n    color: #bdbdbd; }\n\n.blog-one-comments .comments-area ::-ms-input-placeholder {\n    font-size: 17px;\n    font-weight: 300;\n    font-style: italic;\n    color: #bdbdbd; }\n\n.blog-one-comments .comments-area ::placeholder {\n    font-size: 17px;\n    font-weight: 300;\n    font-style: italic;\n    color: #bdbdbd; }\n\n.blog-one-comments .blog-info-author {\n  margin-top: 0; }\n\n.blog-one-comments .blog-info-author .info-author-txt {\n    display: none; }\n\n.blog-one-comments .btn {\n  margin-top: 35px;\n  padding: 20px 60px; }\n\n.blog-one-comments .blog-comments-list {\n  max-width: 700px;\n  margin-top: 35px; }\n\n.blog-one-comments .comments-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n.blog-one-comments .comments-item:not(:first-child) {\n    margin-top: 55px; }\n\n.blog-one-comments .comments-item-info {\n  margin-left: 10px; }\n\n.blog-one-comments .comments-item-info h4 {\n    font-size: 17px;\n    font-weight: bold;\n    line-height: 1.47;\n    letter-spacing: 0.3px;\n    text-align: left;\n    color: #454545;\n    margin-bottom: 30px; }\n\n.blog-one-comments .comments-item-info p {\n    font-size: 17px;\n    font-weight: 300;\n    line-height: 1.59;\n    letter-spacing: 0.3px;\n    text-align: left;\n    color: #454545; }\n\n.blog-one-comments .blog-date {\n  margin-top: 30px;\n  float: right; }\n\n@media (max-width: 768px) {\n  .blog-one-comments .blog-comments-write {\n    max-width: 100%;\n    text-align: left; }\n  .blog-one-comments .blog-comments-list {\n    max-width: 100%; }\n  .blog-one-comments .comments-area {\n    display: block; }\n  .blog-one-comments .blog-info-author {\n    margin-bottom: 20px; }\n    .blog-one-comments .blog-info-author .info-author-txt {\n      display: block; }\n  .blog-one-comments .comments-area textarea {\n    padding: 9px 20px; }\n  .blog-one-comments .comments-item {\n    display: block; } }\n\n.blog-one-similar {\n  background-color: #f7f7f7; }\n\n.blog-one-similar .blogs-container {\n    margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/blogs/blog-article/blog-article.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/blogs/blog-article/blog-article.component.ts ***!
  \**************************************************************/
/*! exports provided: BlogArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogArticleComponent", function() { return BlogArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogArticleComponent = /** @class */ (function () {
    function BlogArticleComponent(route, db, spinner) {
        this.route = route;
        this.db = db;
        this.spinner = spinner;
        this.currentBlog = {
            photo: '',
            date: '',
            title: '',
            description: '',
            blogId: '',
            bloger_info: {
                name: '',
                photo: '',
                type: ''
            }
        };
        this.currentBlogerArticles = [
            {
                photo: '',
                date: '',
                title: '',
                description: '',
                bloger_info: {
                    name: '',
                    photo: '',
                    type: '',
                    blogerId: ''
                }
            }
        ];
    }
    BlogArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        window.scrollTo(0, 0);
        this.route.params.subscribe(function (params) {
            _this.currentBlogId = params.id;
        });
        this.getBlog();
        this.getBlogs();
    };
    BlogArticleComponent.prototype.getBlog = function () {
        var _this = this;
        this.db.object('blogs/' + this.currentBlogId).valueChanges().subscribe(function (res) {
            _this.currentBlog = res;
        });
    };
    BlogArticleComponent.prototype.getBlogs = function () {
        var _this = this;
        this.db.list('blogs').valueChanges().subscribe(function (res) {
            _this.currentBlogerArticles = res.filter(function (item) { return item.bloger_info.blogerId === _this.currentBlog.bloger_info.blogerId; });
            _this.spinner.hide();
        });
    };
    BlogArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-article',
            template: __webpack_require__(/*! ./blog-article.component.html */ "./src/app/blogs/blog-article/blog-article.component.html"),
            styles: [__webpack_require__(/*! ./blog-article.component.scss */ "./src/app/blogs/blog-article/blog-article.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], BlogArticleComponent);
    return BlogArticleComponent;
}());



/***/ }),

/***/ "./src/app/blogs/bloger/bloger.component.html":
/*!****************************************************!*\
  !*** ./src/app/blogs/bloger/bloger.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\n  bdColor = \"rgba(255, 255, 255, 1)\"\r\n  size = \"large\"\r\n  color = \"#fe5c5c\"\r\n  type = \"ball-spin\"\r\n></ngx-spinner>\r\n<section class=\"bloger-intro\">\r\n  <div class=\"bloger-img\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"section-container\">\r\n      <div class=\"bloger-name\">\r\n        <h1>{{currentBloger.name}}</h1>\r\n        <p>{{currentBloger.type}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bloger-info\">\r\n    <div class=\"section-container\">\r\n      <div class=\"bloger-photo\" [ngStyle]=\"{'background-image': 'url('+currentBloger.photo+')'}\"></div>\r\n      <div class=\"bloger-container\">\r\n        <div class=\"bloger-txt\">\r\n          <h2>{{currentBloger.statusTitle}}</h2>\r\n          <p>{{currentBloger.statusDescription}}</p>\r\n        </div>\r\n        <div class=\"blog-nav-soc\">\r\n          <a href=\"{{currentBloger.fb}}\"><img src=\"../../../assets/img/icons/fb-dark.svg\"></a>\r\n          <a href=\"{{currentBloger.tw}}\"><img src=\"../../../assets/img/icons/tw-dark.svg\"></a>\r\n          <a href=\"mailto:{{currentBloger.email}}\"><img src=\"../../../assets/img/icons/mail-dark.svg\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"bloger-articles\">\r\n  <div class=\"section-container\">\r\n    <div class=\"section-title\">{{currentBloger.name}} articles</div>\r\n    <div class=\"blogs-container\">\r\n      <div class=\"blogs-item\" *ngFor=\"let blog of currentBlogerArticles\">\r\n        <div class=\"blogs-item-img\" [ngStyle]=\"{'background-image': 'url('+blog.photo+')'}\"></div>\r\n        <div class=\"blogs-item-info\"><span class=\"blog-info-date\">{{blog.date | date:'mediumDate'}}</span>\r\n          <h2 class=\"blog-info-title\">{{blog.title}}</h2>\r\n          <p class=\"blog-info-description\">{{blog.description | ellipsis:80}}</p>\r\n          <a href=\"#\" class=\"blog-info-read-more\" [routerLink]=\"['/blog', blog.blogId]\">Read more\r\n            <i aria-hidden=\"true\" class=\"fa fa-long-arrow-right\"></i>\r\n          </a>\r\n          <div class=\"blog-info-author\">\r\n            <div class=\"info-author-img\" [ngStyle]=\"{'background-image': 'url('+blog.bloger_info.photo+')'}\"></div>\r\n            <div class=\"info-author-txt\">\r\n              <span class=\"bold\">{{blog.bloger_info.name}}</span>\r\n              <span class=\"italic\">{{blog.bloger_info.type}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/blogs/bloger/bloger.component.scss":
/*!****************************************************!*\
  !*** ./src/app/blogs/bloger/bloger.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bloger-intro .bloger-img {\n  position: relative;\n  background-image: url('blog-description-bg.png');\n  background-size: cover;\n  background-position: center; }\n  .bloger-intro .bloger-img .section-container {\n    position: relative;\n    padding: 60px 0 54px; }\n  .bloger-intro .overlay {\n  background-color: rgba(0, 0, 0, 0.4); }\n  .bloger-intro .bloger-name {\n  margin-left: 150px; }\n  .bloger-intro .bloger-name h1 {\n    font-size: 40.5px;\n    font-weight: 500;\n    letter-spacing: 0.8px;\n    color: #ffffff; }\n  .bloger-intro .bloger-name p {\n    font-size: 22px;\n    font-weight: normal;\n    font-style: italic;\n    line-height: 1.57;\n    letter-spacing: 0.4px;\n    color: #ffffff; }\n  .bloger-intro .bloger-info {\n  position: relative;\n  background-color: #f7f7f7; }\n  .bloger-intro .bloger-photo {\n  width: 130px;\n  height: 130px;\n  border-radius: 100%;\n  border: solid 6px rgba(213, 213, 213, 0.7);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAC/VBMVEVMaXH58/v58/v48fr58/v27fv07Pr37/vy6PX48fr58/v37/zz6vnz6vn07Pr17fv27vz37/368//u4uzv5PH37fvp3un06vb17fr27vn38Pvz6vnDt8O5oKCkioeTdm7Xy9fl2eTQwsz58fz48fveztLBqqiBXk2LZ1VwUUNXRD5rSjuggXfJs7P58vv48f7k1dqxlIx5V0ZKMytfPi+GW0KcblSac1yKYk/WwsL58ftkRDUvHhmjfGeWb1vIrKby5/VYOCh3UTyVa1QlEQtAJxt3TDTCo5uxiXaMX0Q6HA9gOSSAVDxxSDPJoICYa06reFhULhpLLB8zFwxZLxuhd1768/26m5O/l3uqgm6pfGCwgF9lOiNpPSaRYkpBIhPRu7z89f+0hmdsQy1/UTW8h2e5jW+SZk6sgGa4kXh0RSujc1fZtJNTKBNgMRpMJRPvtp1BGgtYKRRqOSFwPSRvOB389f768vz58/qaZkd8STWjY0qxcFfEfmTMhWu8dlycWT9+QSqxjoL79PyfakzSq4mNTTXdmX3pqY7opormn4Dlm3vTh2rFeliTUjJnMRbax8peNB6CRyjZlXzoqpPtsZnZjW7dknDRg2Gkb1CNWUCISSvjpY/zuqLglnbBdVuXWD369PuVYEJ2NiXkoYizck6LUzN5SS/Ti3DqrpbPf16+cEykZECIVTuRXD2qc1GsbEjYkXetY0BsQCmFTzP++P/Eel/DdFGATC+ITi2YVjXgnIO5a0azZUKZXz6OVzqyeVZ8Riqxak64bFNyNhllNh/Kf2WgXkNrNB11PB6nX0arZUy7clbdloERBgVzXVZ2QSTMjHTHiWXUjnTcnoakaEV8QSIwEgfJeFZQIQ46Fga9gFqIPzR6Ox6fS0SyXFa9a2VKHgwbCwZgKxMFAQFsMRb47fxlLBNcKA+JQyNXIw358vuaUC6mWjmCPh+ORSjNfFnYimfv5PO6e1XWhmPe0+CeXjqiVC7ImY7pooPw1tGicl2sWzNrNR+gVTcT57jUAAAA/3RSTlMAEXHj/3/Pz83a+imq//////////////////+v///////////u////////////9P//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0f///////6L//////////6L/oqJBPgWrAAAPG0lEQVR4Aa2YB1SUd6K3n/879Z0GMzDO0EZQOtYAxko6CaZnTdWtuPtpmilstvfejd+9N5WtltX0ptGYjWsXLFgJQdrQGRiQYXp5r1fDEeTcU+9DnfbM7/f+2zkj+L9AXASB5n+3jT+iABIkAKEIpiLF1RGEUYw/hpgkUQSXvqJahCIpEhBXB2UhQiiGADITEP0CpEjSVJMQlzPrBZIh2Wg0mvQmjAaT2SCbSOgwYDAIAWL8NeQAkjQ01QQIRY4LUu0mo1G+6LIo+rgprsSn+YwSOnn8DQXif4hhAMScs3b/FJNAH2K6EAFJJgiSIoMIGoQQvemtpgCCyWQ3REDdWdIxySQAQSKkJBLRFEPQbwTbMMigD+qDxukDhWJ4gKuJABJuISabZIFeEprcRJouZiWIFBYipATRy4YkOWxX6wYMyExFQgjBROQgeqbPzYokB7QMG5NMLrtD1mstGiEHZY09EonNCcqOqS4kYIJLQEgQCve1ZmZIDv+YX+3IQEpy2dQ+44hOI4f1CWfkgonMoCxPVU10CeTLt6+fqyRlGAfjpXliNMUGAXUxjoDoCI0UB51asYylcEWWfSUVV0xBAdxzl6fPoxo5rpTqCeT0NF6IWzK6enpGepFDY5p2B5/UM5H2CanGTQQFil764LAv2zoSsJYa1J/p2khyRlwXohqrtSLh1ZtsVpvDtOBfwVKQs/kc7bgKcWUaIMJZGebsFH+gaKbO1z9X6U6ZTrYSSUoqKGgrtmh7UOGIN1sVSqFfzs7OhuyrUhlkAEVwj2F2tuacNqTWBaSebs8S1aAtfCKRbBxQFTLHrjsdOW+zJ4cTx+jocDhg3ISwAiiJ8VAC5qa1XHNCKGVEY0OkjQRmxI4Ud89OqIQQnCeUhS/mJqoTS8UfYAFQwd6GyHhBwACyABmRbckdFXNdlhFkU8pIwBXuSRpLlk2Gixjn5ZQM9PlV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\");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  bottom: 100%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%); }\n  .bloger-intro .bloger-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .bloger-intro .bloger-txt {\n  max-width: 635px;\n  margin-left: 150px; }\n  .bloger-intro .bloger-txt h2 {\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.35;\n    letter-spacing: 0.4px;\n    color: #454545; }\n  .bloger-intro .bloger-txt p {\n    margin-top: 40px;\n    font-size: 17px;\n    font-weight: 300;\n    font-style: italic;\n    line-height: 1.59;\n    letter-spacing: 0.3px;\n    color: #454545;\n    position: relative; }\n  .bloger-intro .bloger-txt p:before {\n      content: \"\";\n      position: absolute;\n      height: 100%;\n      width: 1px;\n      background-color: rgba(69, 69, 69, 0.4);\n      left: -85px; }\n  .bloger-intro .blog-nav-soc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n  .bloger-intro .blog-nav-soc a:not(:first-child) {\n    margin-top: 25px; }\n  @media (max-width: 1024px) {\n  .bloger-intro .bloger-container {\n    display: block; }\n  .bloger-intro .blog-nav-soc {\n    margin-top: 40px;\n    flex-direction: row; }\n    .bloger-intro .blog-nav-soc a:not(:first-child) {\n      margin-top: 0;\n      margin-left: 25px; }\n  .bloger-intro .bloger-txt {\n    max-width: 100%;\n    margin-left: 0;\n    margin-top: 40px; }\n    .bloger-intro .bloger-txt p:before {\n      display: none; } }\n  @media (max-width: 600px) {\n  .bloger-intro .bloger-name {\n    margin-left: 25px; }\n    .bloger-intro .bloger-name h1 {\n      font-size: 30px; }\n    .bloger-intro .bloger-name p {\n      font-size: 18px; }\n  .bloger-intro .bloger-photo {\n    width: 100px;\n    height: 100px; }\n  .bloger-intro .bloger-info .section-container {\n    padding-top: 30px;\n    padding-bottom: 50px; }\n  .bloger-intro .bloger-txt p {\n    margin-top: 20px; } }\n  .bloger-articles .blogs-container {\n  margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/blogs/bloger/bloger.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blogs/bloger/bloger.component.ts ***!
  \**************************************************/
/*! exports provided: BlogerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogerComponent", function() { return BlogerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogerComponent = /** @class */ (function () {
    function BlogerComponent(route, db, spinner) {
        this.route = route;
        this.db = db;
        this.spinner = spinner;
        this.currentBloger = {
            photo: '',
            statusTitle: '',
            statusDescription: '',
            tw: '',
            fb: '',
            email: '',
            type: ''
        };
        this.currentBlogerArticles = [
            {
                photo: '',
                date: '',
                title: '',
                description: '',
                bloger_info: {
                    name: '',
                    photo: '',
                    type: '',
                    blogerId: ''
                }
            }
        ];
    }
    BlogerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        window.scrollTo(0, 0);
        this.route.params.subscribe(function (params) {
            _this.currentBlogerId = params.id;
        });
        this.getBloger();
        this.getBlogs();
    };
    BlogerComponent.prototype.getBloger = function () {
        var _this = this;
        this.db.object('blogers/' + this.currentBlogerId).valueChanges().subscribe(function (res) {
            _this.currentBloger = res;
        });
    };
    BlogerComponent.prototype.getBlogs = function () {
        var _this = this;
        this.db.list('blogs').valueChanges().subscribe(function (res) {
            _this.currentBlogerArticles = res.filter(function (item) { return item.bloger_info.blogerId === _this.currentBlogerId; });
            _this.spinner.hide();
        });
    };
    BlogerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bloger',
            template: __webpack_require__(/*! ./bloger.component.html */ "./src/app/blogs/bloger/bloger.component.html"),
            styles: [__webpack_require__(/*! ./bloger.component.scss */ "./src/app/blogs/bloger/bloger.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], BlogerComponent);
    return BlogerComponent;
}());



/***/ }),

/***/ "./src/app/blogs/blogs.component.html":
/*!********************************************!*\
  !*** ./src/app/blogs/blogs.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\n  bdColor = \"rgba(255, 255, 255, 1)\"\r\n  size = \"large\"\r\n  color = \"#fe5c5c\"\r\n  type = \"ball-spin\"\r\n></ngx-spinner>\r\n<section class=\"blogs-header\">\r\n  <div class=\"container\"><h2 class=\"blogs-title\">Blogs</h2></div>\r\n</section>\r\n<section class=\"blogs\">\r\n  <div class=\"container\">\r\n    <!--<nav class=\"blogs-nav\">-->\r\n    <!--<div class=\"blogs-nav-menu\" [ngClass]=\"{'responsive': responsiveMenu}\"><a href=\"#\">Resent</a><a href=\"#\">Most readible</a><a href=\"#\">Best-->\r\n    <!--blogers</a><a href=\"#\">Recomendations</a></div>-->\r\n    <!--<a class=\"burger\" (click)=\"responsiveMenu = !responsiveMenu\"><i class=\"fa fa-bars\"></i></a>-->\r\n    <!--<div class=\"blogs-nav-soc\"><a href=\"#\"><img src=\"../../assets/img/icons/fb-dark.svg\"></a><a href=\"#\"><img-->\r\n    <!--src=\"../../assets/img/icons/tw-dark.svg\"></a><a href=\"#\"><img src=\"../../assets/img/icons/mail-dark.svg\"></a></div>-->\r\n    <!--</nav>-->\r\n    <div class=\"main-blog\">\r\n      <div class=\"main-blog-img\" [ngStyle]=\"{'background-image': 'url('+blogs[0].photo+')'}\"></div>\r\n      <div class=\"main-blog-info\"><span class=\"blog-info-date\">{{blogs[0].date | date:'mediumDate'}}</span>\r\n        <h2 class=\"blog-info-title\">{{blogs[0].title}}</h2>\r\n        <p class=\"blog-info-description\">{{blogs[0].description | ellipsis:80}}</p>\r\n        <a href=\"#\" class=\"blog-info-read-more\" [routerLink]=\"['/blog', blogs[0].blogId]\">Read more<i\r\n          aria-hidden=\"true\" class=\"fa fa-long-arrow-right\"></i></a>\r\n        <div class=\"blog-info-author\" [routerLink]=\"['/bloger', blogs[0].bloger_info.blogerId]\">\r\n          <div class=\"info-author-img\" [ngStyle]=\"{'background-image': 'url('+blogs[0].bloger_info.photo+')'}\"></div>\r\n          <div class=\"info-author-txt\"><span class=\"bold\">{{blogs[0].bloger_info.name}}</span><span\r\n            class=\"italic\">{{blogs[0].bloger_info.type}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"blogs-container\">\r\n      <div class=\"blogs-item\" *ngFor=\"let blog of blogs\">\r\n        <div class=\"blogs-item-img\" [ngStyle]=\"{'background-image': 'url('+blog.photo+')'}\"></div>\r\n        <div class=\"blogs-item-info\"><span class=\"blog-info-date\">{{blog.date | date:'mediumDate'}}</span>\r\n          <h2 class=\"blog-info-title\">{{blog.title}}</h2>\r\n          <p class=\"blog-info-description\">{{blog.description | ellipsis:80}}</p>\r\n          <a href=\"#\" class=\"blog-info-read-more\" [routerLink]=\"['/blog', blog.blogId]\">Read more\r\n            <i aria-hidden=\"true\" class=\"fa fa-long-arrow-right\"></i>\r\n          </a>\r\n          <div class=\"blog-info-author\" [routerLink]=\"['/bloger', blog.bloger_info.blogerId]\">\r\n            <div class=\"info-author-img\" [ngStyle]=\"{'background-image': 'url('+blog.bloger_info.photo+')'}\"></div>\r\n            <div class=\"info-author-txt\">\r\n              <span class=\"bold\">{{blog.bloger_info.name}}</span>\r\n              <span class=\"italic\">{{blog.bloger_info.type}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/blogs/blogs.component.scss":
/*!********************************************!*\
  !*** ./src/app/blogs/blogs.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100vh;\n  position: relative;\n  background-image: url('main-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  font-family: \"Roboto\";\n  padding-top: 66px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .main .overlay {\n    background-color: rgba(49, 69, 55, 0.5); }\n  .main .main-info {\n    position: relative;\n    color: #fff;\n    text-align: center; }\n  .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 65px;\n      font-weight: 900;\n      letter-spacing: 1.3px;\n      text-transform: uppercase;\n      line-height: normal; }\n  .main .main-info .txt-yellow {\n      color: #fee665; }\n  .main .main-info .main-info-description {\n      font-size: 20px;\n      font-weight: 300;\n      line-height: 1.7;\n      letter-spacing: 0.4px;\n      margin: 85px 0 115px; }\n  .main .main-info .btn {\n      font-size: 20px;\n      padding: 31px 40px;\n      background-color: rgba(231, 71, 71, 0.85); }\n  .main .main-info .btn:hover {\n        background-color: #e74747; }\n  .premium-main {\n  background-image: url('premium-bg.png'); }\n  .premium-main .overlay {\n    display: none; }\n  .premium-main .main-info-title {\n    margin-bottom: 55px; }\n  .business-main {\n  background-image: url('business-bg.png');\n  height: auto;\n  padding: 190px 0 240px; }\n  .business-main .overlay {\n    background-image: linear-gradient(23deg, #5790c9, #e39766);\n    opacity: 0.6; }\n  .business-main .btn {\n    width: 234px; }\n  @media (max-width: 1024px) {\n  .main {\n    height: auto;\n    padding-top: 200px;\n    padding-right: 50px;\n    padding-left: 50px;\n    padding-bottom: 66px; } }\n  @media (max-width: 768px) {\n  .main {\n    height: auto;\n    padding-top: 100px; } }\n  @media (max-height: 630px) {\n  .main {\n    height: auto;\n    padding-top: 150px;\n    padding-right: 30px;\n    padding-left: 30px;\n    padding-bottom: 70px; }\n  .business-main {\n    padding-right: 20px;\n    padding-left: 20px; } }\n  @media (max-width: 500px) {\n  .main {\n    padding-right: 30px;\n    padding-left: 30px;\n    background-attachment: scroll; }\n    .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 45px; }\n    .main .main-info .main-info-description {\n      margin: 50px 0 50px; } }\n  .blogs-header {\n  background-image: url('blog-bg.png');\n  background-size: cover; }\n  .blogs-header .container {\n    padding: 60px 30px; }\n  .blogs-header .blogs-title {\n    font-size: 40px;\n    font-weight: 500;\n    letter-spacing: 0.8px;\n    text-align: left;\n    color: #fff; }\n  .blogs .container {\n  padding-bottom: 100px; }\n  .blogs .blogs-nav {\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative; }\n  .blogs .blogs-nav-menu a {\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 1.88;\n  letter-spacing: 0.3px;\n  text-align: left;\n  color: #505050;\n  transition: all 200ms; }\n  .blogs .blogs-nav-menu a:hover {\n    color: #ff5c5c; }\n  .blogs .blogs-nav-menu a:not(:first-child) {\n    margin-left: 50px; }\n  .blogs .blogs-nav-soc a:not(:first-child) {\n  margin-left: 15px; }\n  .blogs .burger {\n  display: none;\n  cursor: pointer; }\n  .blogs .blog-info-date {\n  line-height: 2.47; }\n  .blogs .main-blog {\n  margin-top: 35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch; }\n  .blogs .main-blog .main-blog-img {\n    width: 67%;\n    background-size: cover;\n    background-position: center; }\n  .blogs .main-blog .main-blog-info {\n    width: 35%;\n    padding-left: 30px; }\n  .blogs .main-blog .blog-info-author {\n    margin-top: 40px; }\n  @media (max-width: 1190px) {\n  .blogs .blogs-nav {\n    flex-wrap: wrap; }\n  .blogs .main-blog {\n    display: block;\n    margin-bottom: 30px; }\n    .blogs .main-blog .main-blog-img {\n      width: 100%;\n      height: 350px; }\n    .blogs .main-blog .main-blog-info {\n      width: 100%;\n      padding-left: 0;\n      padding-top: 30px; }\n    .blogs .main-blog .blog-info-author {\n      margin-top: 20px; } }\n  @media (max-width: 768px) {\n  .blogs .blogs-nav-menu {\n    display: none; }\n  .blogs .blogs-nav-menu.responsive {\n    display: block;\n    position: absolute;\n    top: 100%;\n    background: white;\n    width: 100%;\n    text-align: center; }\n    .blogs .blogs-nav-menu.responsive a {\n      display: block;\n      text-align: center;\n      padding: 10px 0; }\n      .blogs .blogs-nav-menu.responsive a:not(:first-child) {\n        margin-left: 0px; }\n  .blogs .burger {\n    display: block; } }\n  @media (max-width: 500px) {\n  .blogs .main-blog .main-blog-img {\n    height: 235px; }\n  .blogs .main-blog .main-blog-info {\n    padding-left: 0;\n    padding-top: 0; }\n  .blogs .blog-info-date {\n    line-height: 2.47; } }\n"

/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(db, spinner) {
        this.db = db;
        this.spinner = spinner;
        this.responsiveMenu = false;
        this.blogs = [
            {
                photo: '',
                date: '',
                title: '',
                description: '',
                bloger_info: {
                    name: '',
                    photo: '',
                    type: '',
                    blogerId: ''
                }
            }
        ];
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        window.scrollTo(0, 0);
        this.getBlogs();
    };
    BlogsComponent.prototype.getBlogs = function () {
        var _this = this;
        this.db.list('blogs').valueChanges().subscribe(function (res) {
            _this.blogs = res;
            _this.spinner.hide();
        });
    };
    BlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.scss */ "./src/app/blogs/blogs.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" *ngIf=\"hideFooter()\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <ul class=\"footer-item\">\r\n      <li class=\"footer-item-title\">healthy lifestyle</li>\r\n      <li><a routerLink=\"faq\">FAQ</a></li>\r\n      <li><a routerLink=\"privacy-policy\">Privacy Policy</a></li>\r\n      <li><a routerLink=\"terms-and-conditions\">Terms and Conditions</a></li>\r\n    </ul>\r\n    <ul class=\"footer-item\">\r\n      <li class=\"footer-item-title\">Partnership</li>\r\n      <li><a routerLink=\"for-business\">For Business</a></li>\r\n    </ul>\r\n    <ul class=\"footer-item\">\r\n      <li class=\"footer-item-title\">connect with us</li>\r\n      <li><a routerLink=\"/blogs\">Blog</a></li>\r\n      <li class=\"social-links\">\r\n        <a href=\"#\"><img src=\"../../assets/img/icons/fb.svg\"></a>\r\n        <a href=\"#\"><img src=\"../../assets/img/icons/mail.svg\"></a>\r\n        <a href=\"#\"><img src=\"../../assets/img/icons/insta.svg\"></a></li>\r\n    </ul>\r\n    <ul class=\"footer-item\">\r\n      <li class=\"footer-item-title\">Download our app</li>\r\n      <li><a href=\"#\">Android<img src=\"../../assets/img/icons/android.svg\"></a></li>\r\n      <li><a href=\"#\">IOS<img src=\"../../assets/img/icons/apple.svg\"></a></li>\r\n    </ul>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: relative;\n  background-image: url('footer-bg.png');\n  background-size: cover;\n  background-position: bottom; }\n  .footer .overlay {\n    background-color: rgba(0, 0, 0, 0.8); }\n  .footer .container {\n    position: relative;\n    padding: 95px 50px 105px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start; }\n  .footer .footer-item:last-child li:not(:first-child) {\n    width: 100px; }\n  .footer .footer-item:last-child li:not(:first-child) a {\n      justify-content: space-between;\n      align-items: center;\n      margin-top: -5px; }\n  .footer .footer-item li a {\n    font-size: 17px;\n    font-weight: 300;\n    color: #ffffff;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n  .footer .footer-item li a:not(last-child) {\n      margin-bottom: 20px; }\n  .footer .footer-item .footer-item-title {\n    margin-bottom: 60px;\n    font-size: 18px;\n    font-weight: 900;\n    color: #ff5c5c;\n    text-transform: uppercase; }\n  .footer .footer-item .social-links {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n  .footer .footer-item .social-links a:not(:first-child) {\n      margin-left: 10px; }\n  @media (max-width: 1024px) {\n  .footer .container {\n    flex-wrap: wrap;\n    padding-bottom: 60px; }\n  .footer .footer-item {\n    width: 50%;\n    margin-bottom: 50px; } }\n  @media (max-width: 768px) {\n  .footer .footer-item {\n    width: 100%; }\n    .footer .footer-item .footer-item-title {\n      margin-bottom: 30px;\n      line-height: 30px; } }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.hideFooter = function () {
        if (/\/services\//.test(this.router.url))
            return false;
        return true;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/for-business/for-business.component.html":
/*!**********************************************************!*\
  !*** ./src/app/for-business/for-business.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main business-main\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"main-info\"><h1 class=\"main-info-title\">Become a partner to grow your<br>audience<span\r\n    class=\"txt-yellow\"> in minutes</span></h1>\r\n    <p class=\"main-info-description\">Healthy Lifestyle platform is a great fit for those who offer services for\r\n      active and healthy way<br>of living - restaurants, gyms, shops, food delivery, nutritionists.</p><a\r\n      href=\"list-of-servises.html\" class=\"btn\">Join now</a></div>\r\n</section>\r\n<section class=\"about-us\">\r\n  <div class=\"curve-rectangle\"></div>\r\n  <div class=\"section-container business-container\">\r\n    <div class=\"business-info\"><h2 class=\"section-title_bold\"><span class=\"bold-word\">Who</span> we are</h2>\r\n      <p class=\"business-decsription\">We have created a platform for the keen healthy lifestyle fans. They\r\n        will make use of the great healthy services such as gyms, shops, restaurants, food delivery services\r\n        and nutritionists gathered in one place.</p>\r\n      <p class=\"business-decsription\">Due to flexible discounts and bonuses system the users will be rewarded\r\n        for their healthy habits - through collecting check-ins in the establishments or the paid\r\n        Subscription. Now it is possible to save by spending.</p></div>\r\n    <div class=\"business-img\"><img src=\"../../assets/img/for-business/phones-au.png\"></div>\r\n  </div>\r\n</section>\r\n<section class=\"advantages\">\r\n  <div class=\"curve-rectangle\"></div>\r\n  <div class=\"section-container\">\r\n    <div class=\"section-title\">Advantages</div>\r\n    <div class=\"advantages-container\">\r\n      <div class=\"advantages-item\">\r\n        <div class=\"advantages-item-img\"><img src=\"../../assets/img/for-business/icons/accessible.svg\"></div>\r\n        <h2>ACCESSIBLE</h2>\r\n        <p>It is absolutely free to place your service in the application</p></div>\r\n      <div class=\"advantages-item\">\r\n        <div class=\"advantages-item-img\"><img src=\"../../assets/img/for-business/icons/free-audience.svg\"></div>\r\n        <h2>Free Audience</h2>\r\n        <p>Daily inflow of new customers</p></div>\r\n      <div class=\"advantages-item\">\r\n        <div class=\"advantages-item-img\"><img src=\"../../assets/img/for-business/icons/reputation.svg\"></div>\r\n        <h2>Enhanced Reputation</h2>\r\n        <p>Trustworthiness and brand awareness raising</p></div>\r\n      <div class=\"advantages-item\">\r\n        <div class=\"advantages-item-img\"><img src=\"../../assets/img/for-business/icons/program.svg\"></div>\r\n        <h2>Loyalty Program</h2>\r\n        <p>Due to our business model one-time visitors become loyal customers</p></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"partnership\">\r\n  <div class=\"curve-rectangle\"></div>\r\n  <div class=\"section-container business-container\">\r\n    <div class=\"business-info\"><h2 class=\"section-title_bold\"><span class=\"bold-word\">Partnership</span>\r\n      Conditions</h2>\r\n      <p class=\"business-decsription\">All customers will be divided into two types - Standard and Premium (\r\n        who chose on of the offered Subscription plans). Premium users will be provided with additional\r\n        discounts and bonuses - an approach every trustworthy business takes in order to encourage and\r\n        reward loyal customers.</p></div>\r\n    <div class=\"business-img\"><img src=\"../../assets/img/for-business/phones-p.png\"></div>\r\n  </div>\r\n</section>\r\n<section class=\"user-service\">\r\n  <div class=\"curve-rectangle\"></div>\r\n  <div class=\"section-container business-container\">\r\n    <div class=\"business-img\"><img src=\"../../assets/img/for-business/phones-s.png\"></div>\r\n    <div class=\"business-info\"><h2 class=\"section-title_bold\"><span class=\"bold-word\">User</span> servises</h2>\r\n      <p class=\"business-decsription\">User identification is via a phone number. Every website user will have\r\n        an individual Personal Space, which can be accessed from their gadgets, so no additional equipment\r\n        is needed.</p></div>\r\n  </div>\r\n</section>\r\n<section class=\"business-contacts\">\r\n  <div class=\"section-container\">\r\n    <div class=\"business-contacts-left\"><p>Should you have any questions regarding the project, please<span\r\n      class=\"bold\"> contact us:</span></p></div>\r\n    <div class=\"business-contacts-right\">\r\n      <div class=\"business-contacts-container\"><p class=\"business-contacts-info\"> E-mail:<a\r\n        href=\"mailto:support@hlf.group\" class=\"bold\"> support@hlf.group</a></p>\r\n        <p class=\"business-contacts-info\">Phone:<a href=\"tel:+18888834669\" class=\"bold\"> +18888834669</a>\r\n        </p></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/for-business/for-business.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/for-business/for-business.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100vh;\n  position: relative;\n  background-image: url('main-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  font-family: \"Roboto\";\n  padding-top: 66px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .main .overlay {\n    background-color: rgba(49, 69, 55, 0.5); }\n  .main .main-info {\n    position: relative;\n    color: #fff;\n    text-align: center; }\n  .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 65px;\n      font-weight: 900;\n      letter-spacing: 1.3px;\n      text-transform: uppercase;\n      line-height: normal; }\n  .main .main-info .txt-yellow {\n      color: #fee665; }\n  .main .main-info .main-info-description {\n      font-size: 20px;\n      font-weight: 300;\n      line-height: 1.7;\n      letter-spacing: 0.4px;\n      margin: 85px 0 115px; }\n  .main .main-info .btn {\n      font-size: 20px;\n      padding: 31px 40px;\n      background-color: rgba(231, 71, 71, 0.85); }\n  .main .main-info .btn:hover {\n        background-color: #e74747; }\n  .premium-main {\n  background-image: url('premium-bg.png'); }\n  .premium-main .overlay {\n    display: none; }\n  .premium-main .main-info-title {\n    margin-bottom: 55px; }\n  .business-main {\n  background-image: url('business-bg.png');\n  height: auto;\n  padding: 190px 0 240px; }\n  .business-main .overlay {\n    background-image: linear-gradient(23deg, #5790c9, #e39766);\n    opacity: 0.6; }\n  .business-main .btn {\n    width: 234px; }\n  @media (max-width: 1024px) {\n  .main {\n    height: auto;\n    padding-top: 200px;\n    padding-right: 50px;\n    padding-left: 50px;\n    padding-bottom: 66px; } }\n  @media (max-width: 768px) {\n  .main {\n    height: auto;\n    padding-top: 100px; } }\n  @media (max-height: 630px) {\n  .main {\n    height: auto;\n    padding-top: 150px;\n    padding-right: 30px;\n    padding-left: 30px;\n    padding-bottom: 70px; }\n  .business-main {\n    padding-right: 20px;\n    padding-left: 20px; } }\n  @media (max-width: 500px) {\n  .main {\n    padding-right: 30px;\n    padding-left: 30px;\n    background-attachment: scroll; }\n    .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 45px; }\n    .main .main-info .main-info-description {\n      margin: 50px 0 50px; } }\n  @media (max-width: 1024px) {\n  .business-main {\n    padding-bottom: 200px; } }\n  .about-us {\n  position: relative; }\n  .about-us .section-container {\n    padding: 70px 25px 0; }\n  .about-us .business-img img {\n    -webkit-transform: translate(30px, -50px);\n            transform: translate(30px, -50px); }\n  @media (max-width: 768px) {\n  .about-us .section-container {\n    padding-top: 0; }\n  .about-us .business-container {\n    flex-wrap: wrap; }\n  .about-us .business-info, .about-us .business-img {\n    width: 100%; }\n  .about-us .business-img {\n    margin-top: 30px;\n    text-align: center; }\n    .about-us .business-img img {\n      width: 100%;\n      -webkit-transform: translate(0px);\n              transform: translate(0px); } }\n  .advantages {\n  position: relative;\n  padding-bottom: 100px; }\n  .advantages .curve-rectangle {\n    background-color: #f3f3f3; }\n  .advantages .section-container {\n    position: relative;\n    z-index: 1;\n    padding-top: 0; }\n  .advantages .section-title {\n    text-align: center;\n    text-transform: uppercase; }\n  .advantages .advantages-container {\n    margin-top: 80px;\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-start; }\n  .advantages .advantages-item {\n    max-width: 260px;\n    text-align: center; }\n  .advantages .advantages-item img {\n      width: 100px;\n      height: 100px; }\n  .advantages .advantages-item h2 {\n      margin: 65px 0 40px;\n      font-size: 18px;\n      font-weight: 900;\n      line-height: normal;\n      letter-spacing: normal;\n      text-align: center;\n      color: #535353;\n      text-transform: uppercase; }\n  .advantages .advantages-item p {\n      font-size: 17px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.88;\n      letter-spacing: 0.3px;\n      text-align: center;\n      color: #535353;\n      padding: 0 5px; }\n  .advantages .advantages-item-img {\n    width: 110px;\n    height: 110px;\n    margin: auto;\n    border-radius: 100%;\n    background-color: #ffffff; }\n  .advantages .advantages-item-img img {\n      position: relative;\n      right: 10px;\n      bottom: 5px; }\n  @media (max-width: 1024px) {\n  .advantages {\n    padding-bottom: 50px; }\n    .advantages .advantages-container {\n      flex-wrap: wrap; }\n    .advantages .advantages-item {\n      margin: 0 50px 50px; } }\n  @media (max-width: 768px) {\n  .advantages {\n    padding-bottom: 70px; }\n    .advantages .advantages-container {\n      flex-wrap: wrap; }\n    .advantages .advantages-item {\n      max-width: 100%;\n      flex-basis: 100%; }\n      .advantages .advantages-item:last-child {\n        margin-bottom: 0; }\n      .advantages .advantages-item h2 {\n        margin: 45px 0 20px; } }\n  .partnership {\n  position: relative; }\n  .partnership .section-container {\n    padding: 70px 25px 200px; }\n  .partnership .business-img {\n    position: relative; }\n  .partnership .business-img img {\n      position: absolute;\n      -webkit-transform: translate(50px, -140px);\n              transform: translate(50px, -140px); }\n  @media (max-width: 768px) {\n  .partnership .section-container {\n    padding-top: 0; }\n  .partnership .business-info {\n    width: 100%; }\n  .partnership .business-img {\n    display: none; } }\n  .user-service {\n  position: relative; }\n  .user-service .curve-rectangle {\n    background-image: linear-gradient(23deg, #628d73, #92bf65);\n    height: 580px; }\n  .user-service .business-decsription, .user-service .section-title_bold {\n    color: #ffffff; }\n  .user-service .business-info {\n    padding-right: 0;\n    padding-left: 50px; }\n  .user-service .business-img {\n    position: relative; }\n  .user-service .business-img img {\n      position: absolute;\n      -webkit-transform: translate(0px, -150px);\n              transform: translate(0px, -150px); }\n  @media (max-width: 1024px) {\n  .user-service .business-img img {\n    -webkit-transform: translate(-100px, -150px);\n            transform: translate(-100px, -150px); } }\n  @media (max-width: 768px) {\n  .user-service .section-container {\n    padding-top: 0; }\n  .user-service .curve-rectangle {\n    height: 100%; }\n  .user-service .business-container {\n    padding-bottom: 200px; }\n  .user-service .business-info {\n    padding-left: 0;\n    width: 100%; }\n  .user-service .business-img {\n    display: none; } }\n  .business-contacts .section-container {\n  padding: 300px 25px 135px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n  .business-contacts .business-contacts-left, .business-contacts .business-contacts-right {\n  width: 50%; }\n  .business-contacts .business-contacts-left p {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 1.68;\n  letter-spacing: 0.8px;\n  color: #313131; }\n  .business-contacts .business-contacts-right {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .business-contacts .business-contacts-container {\n  padding-left: 50px;\n  border-left: 1px solid rgba(152, 152, 152, 0.47); }\n  .business-contacts .business-contacts-info {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: normal;\n  letter-spacing: 0.4px;\n  color: #313131; }\n  .business-contacts .business-contacts-info:not(:last-child) {\n    margin-bottom: 18px; }\n  @media (max-width: 1024px) {\n  .business-contacts .section-container {\n    padding: 200px 25px 100px; } }\n  @media (max-width: 768px) {\n  .business-contacts .section-container {\n    padding: 0px 25px 100px;\n    flex-wrap: wrap; }\n  .business-contacts .business-contacts-left, .business-contacts .business-contacts-right {\n    width: 100%; }\n  .business-contacts .business-contacts-right {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n  .business-contacts .business-contacts-container {\n    margin-top: 30px;\n    padding-left: 0;\n    border-left: none; } }\n"

/***/ }),

/***/ "./src/app/for-business/for-business.component.ts":
/*!********************************************************!*\
  !*** ./src/app/for-business/for-business.component.ts ***!
  \********************************************************/
/*! exports provided: ForBusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForBusinessComponent", function() { return ForBusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForBusinessComponent = /** @class */ (function () {
    function ForBusinessComponent() {
    }
    ForBusinessComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ForBusinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-for-business',
            template: __webpack_require__(/*! ./for-business.component.html */ "./src/app/for-business/for-business.component.html"),
            styles: [__webpack_require__(/*! ./for-business.component.scss */ "./src/app/for-business/for-business.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForBusinessComponent);
    return ForBusinessComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\" [ngClass]=\"{'header-white': changeHeader(), 'fixed-header': fixHeader()}\">\r\n  <div class=\"container\">\r\n    <div class=\"header-logo\"><img\r\n      src=\"{{!changeHeader() ? '../../assets/img/logo.png':'../../assets/img/logo-black.png'}}\" class=\"logo\"\r\n      routerLink=\"/\"><span class=\"location\"><img\r\n      src=\"../../assets/img/icons/location.png\">New York</span></div>\r\n    <div class=\"header-menu\">\r\n      <nav id=\"topnav\" class=\"topnav\" [ngClass]=\"{'responsive': responsiveMenu}\">\r\n        <div class=\"header-menu-wrap\">\r\n          <a class=\"close-btn\" (click)=\"responsiveMenu = !responsiveMenu\">&times;</a>\r\n          <a routerLink=\"premium\" [ngClass]=\"{'active-link': this.router.url === '/premium'}\">About Premium</a>\r\n          <a routerLink=\"for-business\" [ngClass]=\"{'active-link': this.router.url === '/for-business'}\">For Business</a>\r\n          <a *ngIf=\"!auth\" (click)=\"openAuthDialog()\">Log in</a>\r\n          <a *ngIf=\"!auth\" (click)=\"openAuthDialog()\">Sign up</a>\r\n          <a *ngIf=\"auth\" (click)=\"logout()\">Log Out</a>\r\n          <a (click)=\"openGetAppDialog()\" class=\"btn\">get the app</a>\r\n        </div>\r\n      </nav>\r\n      <a class=\"burger\" (click)=\"responsiveMenu = !responsiveMenu\"><i class=\"fa fa-bars\"></i></a></div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, header-white {\n  width: 100%;\n  position: absolute;\n  color: #fff;\n  font-size: 17px;\n  font-family: \"Roboto\";\n  border-bottom: 2px solid rgba(255, 255, 255, 0.35);\n  z-index: 10; }\n  .header .container, header-white .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  .header .header-logo, header-white .header-logo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .header .header-logo .logo, header-white .header-logo .logo {\n      cursor: pointer;\n      margin-right: 40px; }\n  .header .header-logo .location, header-white .header-logo .location {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      font-weight: 600; }\n  .header .header-logo .location img, header-white .header-logo .location img {\n        margin-right: 10px; }\n  .header nav a:not(:last-child), header-white nav a:not(:last-child) {\n    color: #fff;\n    font-size: 17px;\n    font-weight: 500;\n    margin-right: 50px;\n    transition: all 200ms;\n    cursor: pointer; }\n  .header nav a:not(:last-child):hover, header-white nav a:not(:last-child):hover {\n      color: #fee665; }\n  .header nav a:not(:last-child):hover:nth-child(4):after, header-white nav a:not(:last-child):hover:nth-child(4):after {\n        color: #fff; }\n  .header nav a:not(:last-child).active-link, header-white nav a:not(:last-child).active-link {\n      color: #fee665; }\n  .header nav a:nth-child(4):after, header-white nav a:nth-child(4):after {\n    content: \"/\";\n    position: relative;\n    left: 25px;\n    color: #fff; }\n  .header .btn, header-white .btn {\n    background-color: black;\n    font-size: 16px;\n    padding: 15px 27px;\n    cursor: pointer; }\n  .header .btn:hover, header-white .btn:hover {\n      background-color: rgba(0, 0, 0, 0.7); }\n  .header .burger, .header .close-btn, header-white .burger, header-white .close-btn {\n    display: none; }\n  .header-white {\n  position: static;\n  color: #505050;\n  background-color: #ffffff;\n  border-bottom: 2px solid rgba(149, 149, 149, 0.3); }\n  .header-white nav a {\n    cursor: pointer; }\n  .header-white nav a:not(:last-child) {\n      color: #505050; }\n  .header-white nav a:not(:last-child):hover {\n        color: #fee665; }\n  .header-white nav a:not(:last-child):hover:nth-child(4):after {\n          color: #505050; }\n  .header-white nav a:nth-child(4):after {\n      color: #505050; }\n  .header-white nav a.active-link {\n      color: #fee665; }\n  .btn {\n  background-color: rgba(0, 0, 0, 0.6); }\n  .btn:hover {\n    background-color: black; }\n  .fixed-header {\n  position: fixed; }\n  @media (max-width: 1024px) {\n  .header .container {\n    display: block; }\n  .header .header-logo {\n    text-align: center;\n    margin-bottom: 20px; }\n  .header nav {\n    text-align: center; } }\n  @media (max-width: 768px) {\n  .header .container {\n    display: flex; }\n  .header .header-logo {\n    margin-bottom: 0; }\n  .header .topnav {\n    display: none; }\n  .header .burger {\n    display: inline-block;\n    color: #fee665; }\n  .header .close-btn {\n    display: inline-block; }\n  .header .topnav.responsive {\n    padding-top: 35%;\n    display: block;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.8); }\n    .header .topnav.responsive a {\n      display: block;\n      margin-right: 0;\n      margin-bottom: 50px;\n      font-size: 36px; }\n      .header .topnav.responsive a:nth-child(4):after {\n        content: \"\";\n        display: none; }\n      .header .topnav.responsive a.btn {\n        display: none; }\n    .header .topnav.responsive .close-btn {\n      position: absolute;\n      font-size: 40px;\n      top: 10px;\n      right: 25px;\n      cursor: pointer; }\n  .header-white .burger {\n    color: #505050; }\n  .header-white .topnav.responsive {\n    background: rgba(0, 0, 0, 0.9);\n    z-index: 10; }\n    .header-white .topnav.responsive a {\n      color: #fff; } }\n  @media (max-width: 400px) {\n  .header .header-logo .logo {\n    margin-right: 10px; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialogs_get_app_get_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/dialogs/get-app/get-app.component */ "./src/app/_shared/dialogs/get-app/get-app.component.ts");
/* harmony import */ var _auth_social_auth_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-social/auth-social.component */ "./src/app/auth-social/auth-social.component.ts");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_shared/service.service */ "./src/app/_shared/service.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, dialog, service) {
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.responsiveMenu = false;
        this.auth = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.init({
            appId: '235103837267101',
            cookie: true,
            xfbml: true,
            version: 'v3.0'
        });
        FB.AppEvents.logPageView();
        var dataStore = localStorage.getItem('auth');
        this.auth = JSON.parse(dataStore);
        this.service.subscribeAuth.subscribe(function (data) {
            var value = JSON.parse(data);
            _this.auth = value;
        });
    };
    HeaderComponent.prototype.changeHeader = function () {
        if (this.router.url === '/home' || this.router.url === '/premium')
            return false;
        return true;
    };
    HeaderComponent.prototype.fixHeader = function () {
        if (/\/services\//.test(this.router.url))
            return true;
        return false;
    };
    HeaderComponent.prototype.openGetAppDialog = function () {
        this.dialog.open(_shared_dialogs_get_app_get_app_component__WEBPACK_IMPORTED_MODULE_3__["GetAppComponent"]);
    };
    HeaderComponent.prototype.openAuthDialog = function () {
        this.dialog.open(_auth_social_auth_social_component__WEBPACK_IMPORTED_MODULE_4__["AuthSocialComponent"]);
    };
    HeaderComponent.prototype.logout = function () {
        this.service.transferData(false);
        localStorage.removeItem('gm');
        localStorage.removeItem('fb');
        localStorage.setItem('auth', 'false');
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().signOut().then(function () {
            localStorage.setItem('auth', 'false');
        }).catch(function (error) {
            console.log(error);
        });
        FB.logout(function (response) {
            console.log(response);
            var status = FB.getLoginStatus();
            console.log(status);
        });
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _shared_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/chart/chart.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/chart/chart.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chartdiv\"></div>\r\n"

/***/ }),

/***/ "./src/app/home/chart/chart.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/chart/chart.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chartdiv {\n  width: 100%;\n  height: 500px;\n  margin-top: 50px; }\n\n.amcharts-title {\n  -webkit-transform: translate(145px, 30px);\n          transform: translate(145px, 30px); }\n\n.amcharts-title:nth-child(2) {\n  -webkit-transform: translate(134px, 10px);\n          transform: translate(134px, 10px); }\n"

/***/ }),

/***/ "./src/app/home/chart/chart.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/chart/chart.component.ts ***!
  \***********************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = /** @class */ (function () {
    function ChartComponent(AmCharts) {
        this.AmCharts = AmCharts;
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        var dataProvider = [{
                'country': 'LOS ANGELES',
                'visits': 5,
                'color': '#f9a44a'
            }, {
                'country': 'CHICAGO',
                'visits': 2,
                'color': '#f47e60'
            }, {
                'country': 'HOUSTON',
                'visits': 3,
                'color': '#56bcc8'
            }, {
                'country': 'SAN FRANCISCO',
                'visits': 2,
                'color': '#bd7d78'
            }, {
                'country': 'DETROIT',
                'visits': 7,
                'color': '#d26f8e'
            }, {
                'country': 'SEATLE',
                'visits': 1,
                'color': '#566f85'
            }];
        dataProvider = dataProvider.sort(function (a, b) { return b.visits - a.visits; });
        var valueField = 'visits';
        this.chart = this.AmCharts.makeChart('chartdiv', {
            'hideCredits': true,
            'type': 'serial',
            'theme': 'light',
            'categoryField': 'country',
            'rotate': true,
            'dataProvider': dataProvider,
            'valueAxes': [{
                    'stackType': 'regular',
                    'axisAlpha': 0,
                    'gridAlpha': 0,
                    'labelsEnabled': false
                }],
            'categoryAxis': {
                'axisAlpha': 0,
                'gridAlpha': 0,
                'color': '#505050',
                'labelOffset': 30,
                'boldLabels': true,
                'fontSize': 17
            },
            'graphs': [{
                    'valueField': valueField,
                    'type': 'column',
                    'fillColorsField': 'color',
                    'fillAlphas': 1,
                    'lineAlpha': 0,
                    'animationPlayed': true,
                    'cornerRadiusTop': 15,
                    'columnWidth': 0.4,
                    'labelText': ' ',
                    'labelPosition': 'inside',
                    'color': '#ffffff',
                    'fontSize': 20,
                    'labelOffset': 10,
                    'showBalloon': false,
                    'labelFunction': function (item) {
                        /**
                         * Calculate total of values across all
                         * columns in the graph
                         */
                        var total = 0;
                        for (var i = 0; i < dataProvider.length; i++) {
                            total += dataProvider[i][valueField];
                        }
                        /**
                         * Calculate percet value of this label
                         */
                        var percent = Math.round((item.values.value / total) * 1000) / 10;
                        return percent + '%';
                    }
                }]
        });
    };
    ChartComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/home/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/home/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [_amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__["AmChartsService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"main-info\"><h1 data-aos=\"fade-up\" class=\"main-info-title\">Everything you\r\n    need<br>for your<span class=\"txt-yellow\"> healthy lifestyle</span></h1>\r\n    <p data-aos=\"fade-up\" class=\"main-info-description\">Healthy\r\n      Lifestyle has a list of restaurants, gyms, nutritionists etc. We offer discounts,<br>bonuses and free\r\n      consultations with experts for your healthy lifestyle.</p><a routerLink=\"/about-services\"\r\n                                                                   data-aos=\"fade-up\" class=\"btn\">see all\r\n      services</a></div>\r\n</section>\r\n<section class=\"how-it-works\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">How it works</h2>\r\n    <div class=\"hiw-item-container\">\r\n      <div class=\"hiw-item\">\r\n        <div class=\"number-round\">1</div>\r\n        <p> Search and choose restaurants, gyms, nutritionists, food delivery and shops, on our site or\r\n          app.</p></div>\r\n      <div class=\"hiw-item\">\r\n        <div class=\"number-round\">2</div>\r\n        <p> Get exclusive discounts for visiting those plases.</p></div>\r\n      <div class=\"hiw-item\">\r\n        <div class=\"number-round\">3</div>\r\n        <p> Buy Premium and get to 90% discounts in our favourite plases.</p></div>\r\n    </div>\r\n    <a href=\"#\" class=\"btn\">get the app</a><img src=\"../../assets/img/home/devices.png\" class=\"hiw-img\"></div>\r\n</section>\r\n<section class=\"type-of-service\">\r\n  <div class=\"container\">\r\n    <div class=\"tos-item\"><img src=\"../../assets/img/icons/leaf.png\">\r\n      <h3>Only healthy places</h3>\r\n      <p>Buy Premium and get to 90% discounts in our favourite plases.</p></div>\r\n    <div class=\"tos-item\"><img src=\"../../assets/img/icons/phone.png\">\r\n      <h3>All servises in one place</h3>\r\n      <p>Buy Premium and get to 90% discounts in our favourite plases.</p></div>\r\n    <div class=\"tos-item\"><img src=\"../../assets/img/icons/discount.png\">\r\n      <h3>Great amount of discounts</h3>\r\n      <p>Buy Premium and get to 90% discounts in our favourite plases.</p></div>\r\n  </div>\r\n</section>\r\n<section class=\"get-premium\">\r\n  <div class=\"container\">\r\n    <div class=\"get-premium-txt\"><h2>With<span class=\"bold\"> Premium</span> you can get<span class=\"bold\"> great discount</span>\r\n      for a small pay</h2>\r\n      <p>Learn about our best offers</p></div>\r\n    <a routerLink=\"app-premiums\" class=\"btn\" routerLink=\"/premium\">get premium</a></div>\r\n</section>\r\n<section class=\"testimonials\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">Testimonials</h2>\r\n    <ngx-slick class=\"responses-container\" [config]=\"slideConfig\" #slickModal=\"slick-modal\">\r\n      <div class=\"responses-item\" ngxSlickItem  *ngFor=\"let review of reviews\">\r\n        <div class=\"responses-item-img\"><img src=\"{{review.img}}\"></div>\r\n        <div class=\"responses-item-txt\"><p class=\"responses-item-txt_title\">{{review.txt}}</p><span class=\"responses-item-txt_author\">{{review.author}}</span></div>\r\n      </div>\r\n    </ngx-slick>\r\n  </div>\r\n</section>\r\n<section class=\"work-ny\">\r\n  <div class=\"block-txt\">CHOOSE YOUR CITY</div>\r\n  <div class=\"section-container\"><h2 class=\"section-title\">We are working in New York</h2>\r\n    <p>Do you want to have our servises in your city? Please, let us know. Or vote for your sity\r\n      in the form below.</p>\r\n    <div class=\"cities-container\" *ngIf=\"!showCharts\">\r\n      <div class=\"city-item\"><label for=\"r-1\"><input id=\"r-1\" type=\"radio\" name=\"city\" checked (change)=\"selectCity($event)\"><span\r\n        class=\"checkmark\"></span>Los Angeles</label>\r\n        <div class=\"img-wrap\"><img src=\"../../assets/img/home/city1.png\"></div>\r\n      </div>\r\n      <div class=\"city-item\"><label for=\"r-2\"><input id=\"r-2\" type=\"radio\" name=\"city\" (change)=\"selectCity($event)\"><span\r\n        class=\"checkmark\"></span>Chicago</label>\r\n        <div class=\"img-wrap\"><img src=\"../../assets/img/home/city4.png\"></div>\r\n      </div>\r\n      <div class=\"city-item\"><label for=\"r-3\"><input id=\"r-3\" type=\"radio\" name=\"city\" (change)=\"selectCity($event)\"><span\r\n        class=\"checkmark\"></span>Houston</label>\r\n        <div class=\"img-wrap\"><img src=\"../../assets/img/home/city2.png\"></div>\r\n      </div>\r\n      <div class=\"city-item\"><label for=\"r-4\"><input id=\"r-4\" type=\"radio\" name=\"city\" (change)=\"selectCity($event)\"><span\r\n        class=\"checkmark\"></span>San Francisco</label>\r\n        <div class=\"img-wrap\"><img src=\"../../assets/img/home/city3.png\"></div>\r\n      </div>\r\n      <div class=\"city-item\"><label for=\"r-5\"><input id=\"r-5\" type=\"radio\" name=\"city\" (change)=\"selectCity($event)\"><span\r\n        class=\"checkmark\"></span>Detroit</label>\r\n        <div class=\"img-wrap\"><img src=\"../../assets/img/home/city4.png\"></div>\r\n      </div>\r\n      <div class=\"city-item\"><label for=\"r-6\"><input id=\"r-6\" type=\"radio\" name=\"city\" (change)=\"selectCity($event)\"><span\r\n        class=\"checkmark\"></span>Seattle</label>\r\n        <div class=\"img-wrap\"><img src=\"../../assets/img/home/city5.png\"></div>\r\n      </div>\r\n    </div>\r\n    <app-chart *ngIf=\"showCharts\"></app-chart>\r\n  </div>\r\n</section>\r\n<section class=\"partners\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">Our partners</h2>\r\n    <div class=\"partners-container\"><a href=\"#\" class=\"partners-item\"><img\r\n      src=\"../../assets/img/brands/organic2.png\"></a><a\r\n      href=\"#\" class=\"partners-item\"><img src=\"../../assets/img/brands/food-style2.png\"></a><a href=\"#\"\r\n                                                                                               class=\"partners-item\"><img\r\n      src=\"../../assets/img/brands/empario2.png\"></a><a href=\"#\" class=\"partners-item\"><img\r\n      src=\"../../assets/img/brands/toma2.png\"></a><a\r\n      href=\"#\" class=\"partners-item\"><img src=\"../../assets/img/brands/healthy-eating.png\"></a></div>\r\n  </div>\r\n</section>\r\n<section class=\"tell-more\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">We have more to tell you about healthy food</h2>\r\n    <a routerLink=\"/blogs\">READ ALL BLOGS</a>\r\n    <div class=\"blog-container\">\r\n      <div class=\"blog-item\">\r\n        <div class=\"blog-item-head\"><img src=\"../../assets/img/home/hl.png\">\r\n          <div class=\"blog-item-head_txt\"><span class=\"bold\">Healthy Lifestyle blog</span><span\r\n            class=\"italic\">favourite</span></div>\r\n        </div>\r\n        <div class=\"blog-item-body\">\r\n          <div class=\"overlay\"></div>\r\n          <a routerLink=\"/blogs\" class=\"btn-opacity\">read blog</a></div>\r\n      </div>\r\n      <div class=\"blog-item\">\r\n        <div class=\"blog-item-head\"><img src=\"../../assets/img/home/face2.png\">\r\n          <div class=\"blog-item-head_txt\"><span class=\"bold\">Maria Levandovski</span><span\r\n            class=\"italic\">nutritionist</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"blog-item-body\">\r\n          <div class=\"overlay\"></div>\r\n          <a routerLink=\"/blogs\" class=\"btn-opacity\">read blog</a></div>\r\n      </div>\r\n      <div class=\"blog-item\">\r\n        <div class=\"blog-item-head\"><img src=\"../../assets/img/home/face3.png\">\r\n          <div class=\"blog-item-head_txt\"><span class=\"bold\">Maria Levandovski</span><span\r\n            class=\"italic\">nutritionist</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"blog-item-body\">\r\n          <div class=\"overlay\"></div>\r\n          <a routerLink=\"/blogs\" class=\"btn-opacity\">read blog</a></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"email-block\"><h3>Get our updates and special offers to mail</h3>\r\n      <form><input type=\"text\" placeholder=\"Enter your email\"><a href=\"#\" class=\"btn\">subscribe</a></form>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100vh;\n  position: relative;\n  background-image: url('main-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  font-family: \"Roboto\";\n  padding-top: 66px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .main .overlay {\n    background-color: rgba(49, 69, 55, 0.5); }\n  .main .main-info {\n    position: relative;\n    color: #fff;\n    text-align: center; }\n  .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 65px;\n      font-weight: 900;\n      letter-spacing: 1.3px;\n      text-transform: uppercase;\n      line-height: normal; }\n  .main .main-info .txt-yellow {\n      color: #fee665; }\n  .main .main-info .main-info-description {\n      font-size: 20px;\n      font-weight: 300;\n      line-height: 1.7;\n      letter-spacing: 0.4px;\n      margin: 85px 0 115px; }\n  .main .main-info .btn {\n      font-size: 20px;\n      padding: 31px 40px;\n      background-color: rgba(231, 71, 71, 0.85); }\n  .main .main-info .btn:hover {\n        background-color: #e74747; }\n  .premium-main {\n  background-image: url('premium-bg.png'); }\n  .premium-main .overlay {\n    display: none; }\n  .premium-main .main-info-title {\n    margin-bottom: 55px; }\n  .business-main {\n  background-image: url('business-bg.png');\n  height: auto;\n  padding: 190px 0 240px; }\n  .business-main .overlay {\n    background-image: linear-gradient(23deg, #5790c9, #e39766);\n    opacity: 0.6; }\n  .business-main .btn {\n    width: 234px; }\n  @media (max-width: 1024px) {\n  .main {\n    height: auto;\n    padding-top: 200px;\n    padding-right: 50px;\n    padding-left: 50px;\n    padding-bottom: 66px; } }\n  @media (max-width: 768px) {\n  .main {\n    height: auto;\n    padding-top: 100px; } }\n  @media (max-height: 630px) {\n  .main {\n    height: auto;\n    padding-top: 150px;\n    padding-right: 30px;\n    padding-left: 30px;\n    padding-bottom: 70px; }\n  .business-main {\n    padding-right: 20px;\n    padding-left: 20px; } }\n  @media (max-width: 500px) {\n  .main {\n    padding-right: 30px;\n    padding-left: 30px;\n    background-attachment: scroll; }\n    .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 45px; }\n    .main .main-info .main-info-description {\n      margin: 50px 0 50px; } }\n  .how-it-works {\n  overflow: hidden;\n  position: relative; }\n  .how-it-works .hiw-img {\n    position: absolute;\n    top: 0px;\n    left: 40%; }\n  .how-it-works .hiw-item-container {\n    width: 50%;\n    margin: 90px 0 85px;\n    padding-right: 50px;\n    position: relative;\n    z-index: 1; }\n  .how-it-works .hiw-item-container .hiw-item {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n  .how-it-works .hiw-item-container .hiw-item:not(:first-child) {\n        margin-top: 50px; }\n  .how-it-works .hiw-item-container .hiw-item p {\n        margin-left: 30px;\n        line-height: 1.88;\n        letter-spacing: 0.3px;\n        color: #454545;\n        font-size: 17px; }\n  .how-it-works .btn {\n    background-color: #383838; }\n  .how-it-works .btn:hover {\n      background-color: rgba(0, 0, 0, 0.7); }\n  @media (max-width: 1600px) {\n  .how-it-works {\n    overflow: hidden;\n    position: relative; }\n    .how-it-works .hiw-img {\n      position: absolute;\n      top: 0px;\n      left: 30%; } }\n  @media (max-width: 1024px) {\n  .how-it-works .hiw-item-container {\n    width: 60%; } }\n  @media (max-width: 768px) {\n  .how-it-works {\n    text-align: center; }\n    .how-it-works .hiw-img {\n      display: none; }\n    .how-it-works .hiw-item-container {\n      text-align: left;\n      width: 100%;\n      padding-right: 0;\n      margin-top: 50px; }\n      .how-it-works .hiw-item-container .hiw-item {\n        display: block;\n        text-align: center; }\n        .how-it-works .hiw-item-container .hiw-item .number-round {\n          margin: auto;\n          margin-bottom: 20px; }\n        .how-it-works .hiw-item-container .hiw-item p {\n          margin-left: 0; } }\n  .type-of-service {\n  background-color: #f9f9f9; }\n  .type-of-service .container {\n    padding-top: 70px;\n    padding-bottom: 100px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end; }\n  .type-of-service .tos-item {\n    text-align: center; }\n  .type-of-service .tos-item img {\n      cursor: pointer; }\n  .type-of-service .tos-item h3 {\n      color: #505050;\n      font-size: 18px;\n      font-weight: 900;\n      margin: 50px 0 35px;\n      white-space: nowrap; }\n  .type-of-service .tos-item p {\n      color: #454545;\n      font-size: 17px;\n      line-height: 1.88;\n      letter-spacing: 0.3px; }\n  .type-of-service .tos-item:not(:last-child) {\n      margin-right: 85px; }\n  @media (max-width: 808px) {\n  .type-of-service .container {\n    flex-wrap: wrap;\n    justify-content: center; }\n  .type-of-service .tos-item {\n    width: 100%; }\n    .type-of-service .tos-item:not(:last-child) {\n      margin-right: 0px; }\n    .type-of-service .tos-item:not(:first-child) {\n      margin-top: 50px; } }\n  .get-premium {\n  background-color: #f7e8d1;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAACjCAMAAAC5QdyKAAADAFBMVEVMaXH96Nb959X96Nb96Nb96Nb96Nb96Nb96Nb96Nb96Nb96db96db96db96df96Nb96df96db96df96df96df96df96df96db96df96df96df96df96df96df96df96df96df96df96df96df96df96df96tf96tf96tf96tf96df96tf96df96tf96tf96tf96tf96tf96tf96tf96tf96tf97Nr96tf96tf96tf96tf96tf96df97Nr96tf96tf97Nv97Nr97Nv97Nr97dr969j96tf+7dr969n97dr97dv969f97tr96tb96tf96tb96tb+7d396tb96tb96tf969f96tb+7Nj+7dj979396dT+8NL788n+6MH/77f+873+88H+9sj+9s3/7bH/8bn+9sX+9cL/7az/56T/7ab/8LP79MT687747q/389H48cT+99L/7aD/7Jn27KD/7JH26Yn26pT++Nj/6or/6IT26H7353X/53f/6X79527/5pX+5Gv25mr242L95mP95s7631X741jy4Vf04Evy3UH530X74k7s2Tnt2C/r20fl0iPfzhT84V3n1C/bxQLQxA712jrRuwHz2TTu1CPJtAHjyQPozRXArQHZvgD53zv43E7y1yq2pQH22kTu0hbozQamnQWdjwmOhwh7eAmLbh1sZBBRRRlcVxHkwgJBNRr/44r+26u+pCfRvTjmw0f938Tv5X7u42/t4GD1zVvW0EC/vivr3lHj2FP5ukT4yYrYpiPGhzDco07mr2PYmj7QkjXot338z5793b3Khxnnsyr1yjfyyyisZzDkmC65cymOUCf2qkj8sE/5v275wHX6umX6tWH9vnD+x4r73cPu5pDv6ai5hwvWkCD7zRefXy31pTf6s1r9u2nt67uwdReobRjiqAnsvAHxyBieZBf2vAD8xAK+fh/doEP20kLpoz+LVRR3RRbztmDlqEzutGf2umzzumzzvHXprln2wn/6w3b6xoD9wnvhqVfvwwPhvABcMBYnm/wkAAAA/XRSTlMAAQIEBggLDhURHBgiHyomNTEuPzpMSERYVFBiXXFsZ356dYqGgpmVko6no6Ccsq6qu7XEws3JyL7W09C439zZ5Ont8vb2y/r5/v/8/+Pl3/L/7Onv+fX9///4///7/v/////+/////vv//////////////////////v///////P/////7/////////////////////////////////////////////////////////ff////1///////////++f///v3///zu6f/////+/f38+/f59Pfx7evd///////9/Pft/////////////////v//+/768vv6/Pj49+7+OJD7PQAAHf9JREFUeAHs1VWa5EgMBOC13AzFzMzMjPe/0yokF81zGwbyBP8XCin/+/d+32d40WR40ORBFCnKUzCTDM7KW3GZJhEJyjss80lUZBB5BvX8zCh9nknq5YVV/ARFMLkPe319ZdWzwIin6IVivb29s+pFXMiKiFxXfXx+MktckpUWi8hN1df3x42FsKDSHXSN5fP5v77hEta18eTmaQgEQyFx3VgaFhnkVlbhSCTALp/f71eWzFBUEpYbcUVj8TC7EBermHVRSd3JdGOGiWQqFWOXpKXdUpXVLFYxyVlVOp1JJJOp6D1LR/giLGTl9L3K5nJ5uISFIaLxrPrUsJCV44e0UCyWsncsK6xvZsnNkrrjkXOocqVaLQgrLyxU/mGEr5yVjNC5216rN5rs4riy2Vw6LWHJHrLq61tUchpwR53KqtXudOviKhSQFsKSZmlYOFlSLJkhWWHZ7Or1B612u1OrN5tla4gaFtbwNkJdQq2V7WENh6Nevz/gtDBFDFHCynBYfEvx8fitYlkqB277eDxh1qg3UBbPkMNC4RGWjhDF+rip7N/B6Ww2H08WYPVbrY6GVbSaBdXdFt5/OgaRbablcrVmF7MWm1G/3+JqceEvI7xs4U2FYonKtA+13e33zFrPZjOk1YOqi7DQdz6luoV3Kr0NUNlWq8OW357TWk2tIfZ4EUVVleOQuRXLxz+0qvTPIWKTDbDj8XBg126naaHyGhb6juOgxdKL5cPF+hQWshKVDXU/nU5gwYUhTqezMTcLVwt9L6PvOYR1V6zHJST6edNZVHDpFLlZc2uEt2LlLucdKt8vxfrxK3qWdxcWFlH2EGFhC8vl6uN5/581s1By5AiCqJk52AFmZlw+1GhwR0z+/w9xvawu9ej4blVimV5k5mSXfDRWrobY3Y/INBoVI1FJLUXr9jmBt2CJin7fByuoQit3UFTM0ZiYjJUD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\"), url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABqCAMAAAAIl3rwAAAC/VBMVEVMaXH68t/68dz369P16dHz5tDw5M/v4s7s38zq28ro2cjm1sTl08Lj0L/gzbzfyrjdx7PbxK/ZxrTaybfezLqyopB9gHdxgX1jfn09cXAXamgUcG0QeHQPfHcNhH0KjIUIlIwHmpEGpJoErKIDtKkDt60Cv7MBxbkByL0Bz8IF0cVOzsen293C4enO4+zI4uuN3Nwq184C1ckC2c1k2dR+1dOx1drr5Nv57tf57tn579j579n579n58Nn579n58Nn579f68Nr68dz68dz68d368dz37tT68d368d368d368d368d368t768t778t/78t778t768t368t747dUGnpUDuq8dzsPV5Ox629k418+/2d3z6dz579n68Nv68d368d368d368t368d368d368t778t7Xw7CmlYNv0s2C29od2M5C2dJy29eJ1tb68d368d368dz68d368d368t378t768t7Ywaux3+QO1sv68Nv68Nv78t768t4SdHH68d3579f78t6n3+L68Nn68t7UwKwEp50BwrYvzsO54Ob68d768t768d357tjK2Nn78t4XZWQBy7+d09b68NzVvaYLiYGZ3N1M2dP68NzPvqrV3t768NzRuaH57dr68NuXiHkOf3pV2dP68N378t7PtZr78t778t7NsJHBqpem1dr78t/LqojHpIMDsabe4N/78t/CnHsCvLGAdmtuamLBlXJbdnMtbWuieWG9j2yyhmiDaFttdnBjYlz78t+QlpFbamV8jYtTb2wwXlwUYF68taukoZlUXlpshoVEX1wfV1UQWVdNfHwNUE8JkIipq6j26tcmxbz68N3Tybyhp6b78uB7nJzaz8L68N3b2M+csbF5ysvX4eD68N2tvL8ni4f98t7Cycd9r6768N0smZPR3+JCn5z78+DS0s9QtrKTwsMfqaL78uD78+H+8+H68d/78+FalpePoqT68uDCvbXw7OT78+H78+H78+H78+H78+Hh5eT78+H78+H78+EN29D78+K+x8LeAAAA/3RSTlMADpz///////////////////////////////////////////////////////////////7///79/vv38+vn4tzOx7u1rIuCdWJRQDMkHBEKBgMBBf/////////++O/RoZFEOCsgFAj////////+/ZdnWUw8DAQX///+1sCwXP+GdgL/ei///////6ZsJ//9Vf///OP////+3f/1xv/ycf///cp+/0h1///8cf////p7/////////////////3j///////////////////////z/6v//u///+f7////8/////v/v////wP/////X0v/zy////f//5eD62+r/9sbv//7BhJZjAAAXg0lEQVR4ARzCgxVEMQAAsG+rxtm2sf9aVV48z/OD0IriKE6SNDWdLLeKsiyrqqqrujHatu0sYHXQQBA5GBLKuJCy1x8MR+PJdDZfLFfrzWaz3e0Px+PpfLneLvfH8/V+vz/G1/j9/prwuu5qc82iAL6g7oaMu88Aa2q4uwdy/eISarjLpYEakroL1N3dqbt/o9n7OTk0L5NLz2r//629z3PyEh0dExMbGxefkOiblJySmpaekZmVnZNry8uDbHTy4+wAciZNmgSgKKeSqEIQafSDUIFKlJk91yL8CsKvKfzXP79Z/J+Q4G+Dv4Pw+8VLfvhx1FdQIMDC2Li4+MQi32IKS0rLyit8KvNtKpTJi7Pb7WoU4mQQ4cO/6UZI5KxZJkQVOuZRqBnOqxqboQqXGeHyFQsXrlxV/QMy1ADdwMI4RlhUA2FtXX0DQ2zMbVKhe5oTSISRMzZFJQJohAp0tDgcRkjknJYqrxn+E8LWkODg4OX/XdT2vRFKhJpgOyLsiO+EMAnCrvqSjLLyZp8chGg1ZsVBiGGKuo0kTrUKZ30WgtdCIngk+jlU+JNmOEaIlleiZWYIH4EUtscSmMCSu5NX13aZmhFiZZPNaSXaYuwaI41E6nOZrq8FRLOI9JlRIv77zf35DHukZQiR4Y8CdFeswETfmqTuXrZc0rAmM6vCJye3yTmG6BNriGIEUYKUEJmiCEGkUIFrWyA0M2etJcOv1lG4nsINS/qQYcgq7KEKGSAS5A4KsF8iHEilMGOwvBkh5lpDxJTFutQoRNlGC1FCnE+iGh0YZOhViAwhrO4LhhAZtkG48UezhJqg7CA7TkpGhF2b6ktK1wyWmxDznbqKOpkRdiXq3ZFlJNFrzchwLYiYBbNlDzdbW94C4fcUfhuCa4OWt1LIDLdF8424E/RFgt29jDCtJH1UiJ7zxhjLC+x2F4latVs4dTqJKgRR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\"), url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAyCAMAAACULOyzAAAC91BMVEX35tL35tL359L25tP35tL35tL25tP25tNMaXH35tP35tL25tP35tL35tL25tP259P259P25tP259P259P259P259P359L359H25tH259P259P259P359P35tL359P97LP97rH+8cP+773+77X97rP97K3866396qz359P25tP259P359P259P259T259T259T259L259P259P35tP25tP25tP25tP35tL25tP25tP359P359P25dD35tH98cT+78L866r26NT259L259L359L25tH35tD88Mf+8cP+8MH97q725tL+77T76aT/77v87rP46pz35tH35s/98cD66aT977r+6q726Zf97bT06qv27Lj656D87a7x553w5pL46d/36Nr36Jfv5In44cj74rP966j154/05oj64ZX3xzTrzIH866Hv5IP34sL2z1D9wxr/xyL21WX+6Zry5H/434383mP/ySr207X+55P75KHz1Z7359b655D95oj85pn23X/v4Hbu4n374Kj/zzD31oz554rs4G/244T54Lr72Vr+44H753r754H35XHz4mr35M783XblrxndszDfv2r94nj43oX42G/94nHz4l/r3mf359PKmh7quivTqi3kwFT58sn84Grv3l743Evqym3y0VzDn0LQqz7ctj3w3lTr21T63p3531PeuUnv20r23EPkv0vty1fp2U3p2ET/6l/XsUnx1zjq1jvqx0nk1EHi0TqgfDyCXi/64Fvl0jPjzyzmzx7o3F6yjkPmxV7s0yreyRjfxwbcyiiTbTjnzA/auFf/6m7jujzbwQLk1ktkTiDUwAfj11PSugD21XiwjzDMswHFqwHZrongoU3TxR+7owLJoYnMn13d0UmmhFDOqlXJvhO1oAHeuZ3t1GTDtwStmwHSsJ3czz/YzTm8rwGplQDp1ljpv6LRxSvwwqqfkwCWjAHTrGuJggC5mFTVyTN7eALw2G1wbgVtYRdeXhD/94RKOxpTShk6MBohI/SlAAAAzHRSTlMsIhgMCQYDAQAQHThLXHWGmbC+y9jg6O7z9cKjbmh7lbPQ3c7Cp39qP4G2ztXc5OvSxrqSY1cmFDJQ+Pz/3ObwzfCpnkXj/Pz/+tuM59v38+bJ+P/s//v1///99f////r4/v//+v///////P//+f///////////////v3//////////v///////v////////////7//////////////v///////////v7//////v///v////////////////////////////////////52TUT4AAAXD0lEQVR4AZTVg7rrQBQF4NS2bdtuajfpsd7/Pe7ak3vMrupT8HftmXCcTK5QqtRqDaJ9E41GjSgVOj1nMJrMFqvN7nC63B6vz+PyByzmYCgYjkRj8Xg8RkkkkizR16RSqUg6k5VrtL9Fmc0F8v5CsVR2uyuVctlVKlZr/rotYG1YwsFmy5g1cG19R6dQ0Y1qzw8n0+PgL48FUqXUyWXdbC8UbgTytSKQvv5gOPB53CPI4uMxz4/H4/g4jiSkTCbJ15A1bZQpfkEazIR0usqVKaXiLrucVUetbpvNPzCVagR9nKvs6JSqT0YNdakBUtFBlQtTMEfK6mjpnvrgXK3Xm/UW4ZExOSm73S6B12TCrPRhSUYjmQWnl1MVX95dZxGe2+o1B1VZYSlDWSzU7PlZwLrPmYm5MHTbernU5vlMDgcC+fkoMNFkR9+mKs37+cyO26CB7cO4JSO++P85SNkddshxx3I87hJHlskkitlFMqaFoS1Xvr2YWtdt7gO2vP8/0jOVmCVn0SExWZvE5IhJnYB5ppPDUZ8P0VDUaJLm1ciqtGGkllD212v46ItFEHheEAVRfKZS4qQ8nU5HUE9H/CKsVmgbueaCkyvVdBWVTmYw5awzW93vqJakgfXiA6brP/N5bZp6WWqTJoKcZyu/apKQ0qLE1tMKhfdzm/2iOsJtXDLg1XqzeVbiDaYAK+UgMuc13qfT9TW+nkNUWrT1fGBvNhmz2eyi16QhseXtNK6EpPiklUk70HsmhpaTvTLPgXJsUX6lxKKU06JsYV6tM+wOI1R5ya8B3Fwhm+1mK9yQ9FYgK0X8n2t8QLyjnO6I+8Z54bdj+5xbrfPAbGaDEUU6Sy53xQMiBU5paCXmjJjmEJhZMPVyYqrOY3L0t3xCatXSztMGsmm2AGkv0GOE54G6AvLmBt+E3ZKVlXpPytuHW1F4FMVH8Qm5e83TNQtBExcOR83vt9vrdbvd7q85CqzIChn7lFdmscAeKNhp/1FeFuttRUEMLq7DUIZVKVhumMrcmu1L9YWY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\"), url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAABVCAMAAADubI98AAADAFBMVEVMaXHwxqD53L732Lf74sTnsITnsYXosobnsYXnsYXlroLlroLlroLlroLlroLlroLmr4Pnr4TmroPlroLmroLmroPlrYHlrYHlrYLlrYHmrYLmrYLlrYHlrYLmrYLlrIHmrYPmrYPqroblrYLkqoDiqHzhpXfgpHDjsHX52n700nn94or+76nFnWH+45Xvx4D+5KL987D89Ln63YX52HPowln+68n+7NH+69P+7tH+7dL+7tH+7tH+7tH+7tH+7tH+7tH+7tH+7tH+7tD+7dD+7dD+7ND+7ND+7ND+7NH+69D+7ND+69D+68/+69D+69D+68/+68/+69D+7NH+7ND+7M/+7ND+7M/+7c/+7dH+7NHlroLxyWPsyHP/7qCqflG3iEvXtG/725L20Wz+6bT+7M7+7c/+7c7+7NH+69D+7ND+7NDnvXnQqWb3z4b+7tH+69Dgn3HmtWb/7Jj+7tH+69D+7M/goGj+5cH+7tH+7tH+7tH+7tH+7tH+7tH6y5z+6cXsvmL94bn81afkrV7/64393bLGmEvinVr61mb/5Hrdskv40ln+78/zykztwUHkti7hpxTrrxPrpAvhmhPntxv+8NHTpkrqvSn0rw/6swf8vQXcrjXZqxusfiD/3VP1vpLVmha2fCfCiRvSixf6uxj/4Wf0yjr0xCzJkyq8iyjwtYzxvBmzbh2qYRT9yBjfsRzboh3qoivsskj40EbJnhqocxnbhTnml0nysDLkp33ionnCdib+8Lj/20TqjDn90SzvxinToCvmp4DrjRS0Xx/Kdj2xgyD/5aKXXRP2uCu2ixykeB7RpRvAlhutThuTbBqlRxaRPBGeQRR5NBJpOBBIIhFOKBA8HxKDUw/ssor7+MLrsInutIv2w5f2v5TyuY/4x5r4yJz4xJj5yp3yuY74xZnvtYv70qb4w5f5xpj81an2vJLesRzmuyL71Kf6y5r4xJXVrBvswyX3pAn7zp/zx1vtvyP+7bfntDDsrBP4y3L93rT93bH82q792qrOSMXlAAABAHRSTlMAAQIEBgsRFx0jKzM8Rk9ZYmt1f5Obo6uyu8LK0dnh6u/2/f38/f7+///////////9//3////+//769vHs5uHVy72vno57alxLOywfGRAJDBccIjZBZXB2gohRif////////z+/v+kkxMpVmH+//6zMf7//8MlRv//29C4qZjH///+//////////////z3/fz+///////9//3+///////////////8///8/////////////v7+//////31/P/t////7v/7/P///+j/6v///v///////////////6f91Lc3fsRFU5Ap3qPwbs21Xeb08IDA2Ozk3rbP18XKzLk8j6GwxRXxdQAAFzZJREFUeAEsgwMCwlAAQMdsz7a9/Wx3/9vkB+gPDMMIimI4XipXqrV6o9lqd7q9/mA4Gk8IkqRommFYluM4nhcEQRQFSZLkN4qqarphmJZtO5bjeobpB0EYBG4UG4mRZn/yz3lRADCdzRfL1Xqz3e0Px9P5cr3dHxiKwC9C68K7caOLArjp+8p8sMytZMmOI7nMYGZeV1IiayHGdaNlZt79m3ufniYZn0anL86BxV+u7rxRIhFPplKpZr3V7lS6vVKxPxiORscwo+FwUOgXxzExoMIKqmR9862/ZOv7ZA2kH30spJ99/sUXlqEqtpPd2bXdHdfJTra3t520aXjm8a9PMJSkRIVVUE+eGg2I2qnVm7AmExhk1Wju1apTUGdzUGn+HA7689l43IttWlNkJepLr7z6KsUqrO+8w7FSqJ/wsBRUUzGMjKHr7kJfLHPOaoVQVcXztlgqZiPV0yF13antETWxSS2DWhgM//wT0MK8OC71yt2YZE0cUQFh5ViZylDx+P/eNxTFz7mLpapn9KzmTiarjGKo3uSrEwKJEdbvvyfqGaIO5+Pe+mx7L2hAMo7vZNCA6tl1+dy42C8MBoAi0tK5cnc9lamh9f8RVqYK6UGo5z1FMbQcnr27yOrOwtUoU8VULpw4wVZS0gdSxArqxUtnLl+5emzYH5/rTqstLmscH1Ab9b322UrQgH4BE0QKaKdNRtkqYn3hxZcl67+ph1KiZnK5iZvWjd3JRM/ktLSh2ubxr75iqqRl6o8XL10j6p+FGVG5rLE4JsEN6FADxsV5vz9naeVstbYHYWQFYH1dOlpoAFOFlKn7iqpouZyjTXZ3XUfP5rQMGuFd/yqgyljUgMt68edrwQo4LCulGouF1FZ1igaUZkVAWdpBS5pslDcWqEfUlWNlKknxCaR4/oZiI0lfc5ZLx9YdSFeqOblxg6w07CQ0CsBU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\"), url('sneakers.png');\n  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;\n  background-position: left bottom, 10% top, center bottom, 65% top, right bottom; }\n  .get-premium .container {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .get-premium .get-premium-txt {\n    color: #505050;\n    font-weight: 300; }\n  .get-premium .get-premium-txt h2, .get-premium .get-premium-txt .bold {\n      font-size: 30px;\n      letter-spacing: 0.6px;\n      margin-bottom: 20px; }\n  .get-premium .get-premium-txt .bold {\n      font-weight: 900; }\n  .get-premium .get-premium-txt p {\n      font-size: 17px;\n      letter-spacing: 0.3px; }\n  @media (max-width: 1070px) {\n  .get-premium .container {\n    flex-wrap: wrap;\n    justify-content: center; }\n  .get-premium .get-premium-txt {\n    width: 100%;\n    text-align: center; }\n  .get-premium .btn {\n    margin-top: 20px; } }\n  @media (max-width: 1024px) {\n  .get-premium {\n    background-image: none; }\n    .get-premium .get-premium-txt {\n      line-height: 37px; } }\n  .testimonials .section-container {\n  padding-bottom: 90px; }\n  .testimonials .responses-container {\n  margin-top: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start; }\n  .testimonials .responses-container .responses-item {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start; }\n  .testimonials .responses-container .responses-item .responses-item-img img {\n      width: 75px;\n      border-radius: 100%;\n      border: solid 1px #bbbbbb; }\n  .testimonials .responses-container .responses-item .responses-item-txt {\n      margin-left: 35px;\n      font-weight: normal;\n      font-style: italic;\n      line-height: 1.88;\n      letter-spacing: 0.3px;\n      color: #454545;\n      background-repeat: no-repeat;\n      background-position: center; }\n  .testimonials .responses-container .responses-item .responses-item-txt .responses-item-txt_author {\n        font-size: 17px;\n        font-style: normal;\n        line-height: 2.47;\n        color: #a7a7a7; }\n  .testimonials .responses-container .responses-item .responses-item-txt .responses-item-txt_title {\n        font-size: 17px; }\n  .testimonials .responses-container .responses-item:nth-child(even) .responses-item-txt {\n    background-image: url(\"data:image/png;base64,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\"); }\n  .testimonials .responses-container .responses-item:nth-child(odd) .responses-item-txt {\n    background-image: url(\"data:image/png;base64,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\"); }\n  @media (max-width: 500px) {\n  .testimonials .responses-container {\n    margin-top: 50px; }\n    .testimonials .responses-container .responses-item {\n      display: block; }\n      .testimonials .responses-container .responses-item .responses-item-img {\n        margin-bottom: 30px; }\n        .testimonials .responses-container .responses-item .responses-item-img img {\n          margin: auto; }\n      .testimonials .responses-container .responses-item .responses-item-txt {\n        margin-left: 0;\n        text-align: right; }\n        .testimonials .responses-container .responses-item .responses-item-txt .responses-item-txt_title {\n          text-align: center; } }\n  .work-ny {\n  background-color: #f9f9f9;\n  position: relative; }\n  .work-ny .block-txt {\n    position: absolute;\n    font-size: 10vw;\n    font-weight: 900;\n    color: #fff;\n    top: 220px;\n    right: 0;\n    letter-spacing: 3.9px; }\n  .work-ny .section-container {\n    position: relative;\n    z-index: 1; }\n  .work-ny .section-container > p {\n    margin: 30px 0 60px;\n    font-size: 17px;\n    font-weight: 300;\n    line-height: 1.88;\n    letter-spacing: 0.3px;\n    color: #454545; }\n  .work-ny .section-container > p a {\n      border-bottom: 1px solid #bcbcbc;\n      color: #454545;\n      font-size: 17px; }\n  .work-ny .cities-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .work-ny .cities-container .city-item {\n      display: flex;\n      flex-direction: column; }\n  .work-ny .cities-container .city-item img {\n        border-radius: 50%;\n        order: 1;\n        transition: all 200ms; }\n  .work-ny .cities-container .city-item label {\n        font-size: 18px;\n        font-weight: bold;\n        color: #505050;\n        text-transform: uppercase;\n        order: 2; }\n  .work-ny .cities-container .city-item label .checkmark {\n          margin-right: 15px; }\n  .work-ny .cities-container .city-item label:hover ~ .img-wrap img {\n          -webkit-transform: scale(1.1);\n                  transform: scale(1.1); }\n  .work-ny .cities-container .city-item .img-wrap {\n        width: 123px;\n        height: 123px;\n        margin: auto;\n        margin-bottom: 40px;\n        border-radius: 50%;\n        overflow: hidden; }\n  @media (min-width: 1024px) and (max-width: 1500px) {\n  .work-ny .block-txt {\n    top: 256px; } }\n  @media (max-width: 1024px) {\n  .work-ny .block-txt {\n    display: none; }\n  .work-ny .cities-container {\n    flex-wrap: wrap; }\n    .work-ny .cities-container .city-item {\n      width: 30%;\n      margin-bottom: 40px; } }\n  @media (max-width: 768px) {\n  .work-ny {\n    display: none; } }\n  .partners .partners-container {\n  margin-top: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .partners .partners-container .partners-item img {\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%);\n    transition: all 200ms; }\n  .partners .partners-container .partners-item img:hover {\n      -webkit-filter: grayscale(0%);\n              filter: grayscale(0%); }\n  @media (max-width: 1024px) {\n  .partners .partners-container .partners-item {\n    text-align: center; }\n    .partners .partners-container .partners-item img {\n      width: 80%; } }\n  @media (max-width: 768px) {\n  .partners .partners-container {\n    margin-top: 50px; } }\n  @media (max-width: 570px) {\n  .partners .section-container {\n    padding-bottom: 80px; }\n  .partners .partners-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap; }\n    .partners .partners-container .partners-item {\n      width: 33%;\n      text-align: center;\n      margin-bottom: 30px; }\n      .partners .partners-container .partners-item img {\n        width: 80%; } }\n  @media (max-width: 450px) {\n  .partners .partners-container .partners-item {\n    width: 50%; } }\n  .tell-more {\n  background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 65%, #fff 65%); }\n  .tell-more .section-container > a {\n    margin: 20px 0 44px;\n    display: block;\n    text-decoration: underline;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 2.67;\n    color: #454545; }\n  .tell-more .blog-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .tell-more .blog-container .blog-item .blog-item-head {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n  .tell-more .blog-container .blog-item .blog-item-head img {\n        border-radius: 50%;\n        border: solid 2px #ffffff; }\n  .tell-more .blog-container .blog-item .blog-item-head .blog-item-head_txt {\n        margin-left: 40px; }\n  .tell-more .blog-container .blog-item .blog-item-head .blog-item-head_txt span {\n          font-size: 17px;\n          line-height: 1.47;\n          letter-spacing: 0.3px;\n          color: #454545;\n          display: block; }\n  .tell-more .blog-container .blog-item .blog-item-body {\n      position: relative;\n      margin-top: 30px;\n      padding: 93px;\n      background-size: cover; }\n  .tell-more .blog-container .blog-item .blog-item-body .overlay {\n        background-color: rgba(106, 98, 87, 0.7); }\n  .tell-more .blog-container .blog-item .blog-item-body a {\n        position: relative;\n        z-index: 1; }\n  .tell-more .blog-container .blog-item:nth-child(1) .blog-item-body {\n      background-image: url('food.png'); }\n  .tell-more .blog-container .blog-item:nth-child(2) .blog-item-body {\n      background-image: url('cocos.png'); }\n  .tell-more .blog-container .blog-item:nth-child(3) .blog-item-body {\n      background-image: url('eggs.png'); }\n  .tell-more .email-block {\n    margin-top: 80px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .tell-more .email-block h3 {\n      font-size: 30px;\n      font-weight: 300;\n      letter-spacing: 0.6px;\n      color: #505050; }\n  .tell-more .email-block .btn {\n      height: 57px;\n      line-height: 10px; }\n  ::-webkit-input-placeholder {\n  font-style: italic;\n  /* Firefox */ }\n  :-ms-input-placeholder {\n  font-style: italic;\n  /* Firefox */ }\n  ::-ms-input-placeholder {\n  font-style: italic;\n  /* Firefox */ }\n  ::placeholder {\n  font-style: italic;\n  /* Firefox */ }\n  :-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  font-style: italic; }\n  ::-ms-input-placeholder {\n  /* Microsoft Edge */\n  font-style: italic; }\n  @media (max-width: 1190px) {\n  .tell-more {\n    background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 60%, #fff 60%); }\n    .tell-more .blog-container {\n      justify-content: space-around; }\n      .tell-more .blog-container .blog-item .blog-item-body {\n        padding: 70px; }\n    .tell-more .email-block {\n      flex-wrap: wrap;\n      justify-content: center; }\n      .tell-more .email-block h3 {\n        width: 100%;\n        text-align: center; }\n      .tell-more .email-block form {\n        margin-top: 50px; } }\n  @media (max-width: 1024px) {\n  .tell-more .blog-container .blog-item .blog-item-body {\n    padding: 50px; } }\n  @media (max-width: 920px) {\n  .tell-more {\n    background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 80%, #fff 80%); }\n    .tell-more .blog-container {\n      flex-wrap: wrap;\n      justify-content: center; }\n      .tell-more .blog-container .blog-item {\n        margin: 0 40px 0; }\n        .tell-more .blog-container .blog-item:not(:first-child) {\n          margin: 50px 40px 0; }\n        .tell-more .blog-container .blog-item .blog-item-body {\n          padding: 93px; } }\n  @media (max-width: 768px) {\n  .tell-more .section-container p {\n    text-align: center; } }\n  @media (max-width: 580px) {\n  .tell-more {\n    background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 75%, #fff 75%); }\n    .tell-more .blog-container .blog-item {\n      margin: 0; }\n      .tell-more .blog-container .blog-item .blog-item-body {\n        padding: 0;\n        width: 280px;\n        height: 280px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n    .tell-more .email-block {\n      flex-wrap: wrap;\n      justify-content: center; }\n      .tell-more .email-block h3 {\n        width: 100%;\n        text-align: center; }\n      .tell-more .email-block form {\n        text-align: center; }\n        .tell-more .email-block form input {\n          width: auto; }\n        .tell-more .email-block form .btn {\n          margin: 25px auto 0; }\n    .tell-more ::-webkit-input-placeholder {\n      text-align: center; }\n    .tell-more :-ms-input-placeholder {\n      text-align: center; }\n    .tell-more ::-ms-input-placeholder {\n      text-align: center; }\n    .tell-more ::placeholder {\n      text-align: center; }\n    .tell-more :-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      text-align: center; }\n    .tell-more ::-ms-input-placeholder {\n      /* Microsoft Edge */\n      text-align: center; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showCharts = false;
        this.reviews = [
            {
                img: '../../assets/img/home/testimonials/Chris.jpg',
                txt: 'Loved it! Healthy Life subscription was my motivation to be active and eat healthy. The fact that you have already paid the money encourages you to use them wisely.',
                author: '- Chris Russo'
            },
            {
                img: '../../assets/img/home/testimonials/Katie.jpg',
                txt: 'Didn’t know something like this platform exists! Was of special value for me.',
                author: '- Katie Lama'
            },
            {
                img: '../../assets/img/home/testimonials/David.jpg',
                txt: 'Healthy Lifestyle’s slogan goes: Saving by spending is possible! Now I know that it really works. Will recommend to my gym mates',
                author: '- David Gleser'
            },
            {
                img: '../../assets/img/home/testimonials/Harry.jpg',
                txt: 'Personal workout and nutrition plan provided by Premium was extremely useful. My family got some practical advice as well as inspiration to go healthy.',
                author: '- Harry Johnson'
            },
            {
                img: '../../assets/img/home/testimonials/Nancy.jpg',
                txt: 'Buying Medium plan saved me a great deal of money. The price was totally worth it. As a bonus, I have discovered plenty of healthy shops nearby my home. Thank you Healthy Lifestyle.',
                author: '- Nancy Lynn'
            },
            {
                img: '../../assets/img/home/testimonials/Karen.jpg',
                txt: 'Me and my husband have been into workouts and gym since couple of years now, so it was quite surprising to find our local gym in the list. Now our monthly gym pass costs less. We bought a subscription just to try it out and will definitely extend it further.',
                author: '- Karen Meyer'
            }
        ];
        this.slideConfig = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1320,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.selectCity = function (event) {
        this.showCharts = true;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/premiums/premiums.component.html":
/*!**************************************************!*\
  !*** ./src/app/premiums/premiums.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main premium-main\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"main-info\"><h1 class=\"main-info-title\">Try<span\r\n    class=\"txt-yellow\"> premium</span> to go<br>healthy and save money</h1><a routerLink=\"/about-services\" class=\"btn\">see all\r\n    services</a></div>\r\n</section>\r\n<section class=\"info\">\r\n  <div class=\"container\">\r\n    <div class=\"info-block\">\r\n      <div class=\"info-txt\"><h2 class=\"info-txt-title\">You can get discounts for all our servises</h2>\r\n        <p class=\"info-txt-description\">Healthy Lifestyle gives you a number of servises which offer you\r\n          great discounts which you can use</p>\r\n        <h2 class=\"info-txt-title mt\">Personal consultations and healthy food programs</h2>\r\n        <p class=\"info-txt-description\">We offer you experts and trainers who will recommend you\r\n          individual and workout. You can get the consultation for free\r\n          either for yourself or for the whole family according to\r\n          the subscription you choose</p></div>\r\n      <div class=\"info-img\"><img src=\"../../assets/img/premiums/phone.png\" class=\"right\"></div>\r\n    </div>\r\n    <div class=\"info-block\">\r\n      <div class=\"info-img\"><img src=\"../../assets/img/premiums/girl.png\" class=\"left\"></div>\r\n      <div class=\"info-txt\"><h2 class=\"info-txt-title\">The discounts are valid for the whole time of\r\n        subscription</h2>\r\n        <p class=\"info-txt-description\">Search and choose restaurants, gyms, nutritionists,\r\n          food delivery and shops, on our site or app restaurants,\r\n          Search and choose restaurants, nutritionists,\r\n          food delivery and shopur site or app.</p>\r\n        <h2 class=\"info-txt-title mt\">As more upgraded subscription as more you save</h2>\r\n        <p class=\"info-txt-description\">Search and choose restaurants, gyms, nutritionists,\r\n          food delivery and shops, on our site or app restaurants,\r\n          Search and choose restaurants, nutritionists,\r\n          food delivery and shopur site or app.</p></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"calculate\">\r\n  <div class=\"container\"><h2>Just calculate...</h2>\r\n    <div class=\"calculate-container\"><img src=\"../../assets/img/premiums/calculate.svg\">\r\n      <p>Just calculate. and choose restaurants, gyms, nutritionists, food delivery and shops,\r\n        on our site or app restaurants, Search and choose restaurants, nutritionists, food delivery\r\n        and shopur site or app. Just calculate. and choose Choose restaurants, nutritionists, and\r\n        shopur site or app</p></div>\r\n  </div>\r\n</section>\r\n<section class=\"plans\">\r\n  <div class=\"section-container\"><h2 class=\"section-title\">Save with flexible plans to suit every budget</h2>\r\n    <div class=\"plans-container\">\r\n      <input id=\"monthly\" type=\"radio\" name=\"plan\" checked>\r\n      <label for=\"monthly\">Monthly</label>\r\n      <input id=\"annual\" type=\"radio\" name=\"plan\">\r\n      <label for=\"annual\">Yearly</label>\r\n      <div class=\"plans-data monthly\">\r\n        <div class=\"plans-data-item\"><h2 class=\"data-item-title\">standart</h2>\r\n          <p class=\"data-item-discount\">from<span class=\"green-txt\"> 5%</span> to<span class=\"green-txt\"> 50%</span>\r\n            discount</p>\r\n          <ul class=\"data-item-conditions\">\r\n            <li class=\"grey\">free consultation with our nutritionist</li>\r\n            <li class=\"grey\">personal healthy food program and training during subscription time</li>\r\n          </ul>\r\n          <span class=\"data-item-price\">$<span class=\"bold-large-txt\"> 11</span> /mo</span><a (click)=\"openGetAppDialog()\" class=\"btn\">subscribe</a>\r\n        </div>\r\n        <div class=\"plans-data-item\"><h2 class=\"data-item-title\">medium</h2>\r\n          <p class=\"data-item-discount\">from<span class=\"green-txt\"> 5%</span> to<span class=\"green-txt\"> 50%</span>\r\n            discount</p>\r\n          <ul class=\"data-item-conditions\">\r\n            <li>free consultation with our nutritionist</li>\r\n            <li>personal healthy food program and training during subscription time<span\r\n              class=\"bold\"> for 1 person</span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"data-item-price\">$<span class=\"bold-large-txt\"> 19</span>  /mo</span><a (click)=\"openGetAppDialog()\" class=\"btn\">subscribe</a>\r\n        </div>\r\n        <div class=\"plans-data-item\"><h2 class=\"data-item-title\">Premium</h2>\r\n          <p class=\"data-item-discount\">from<span class=\"green-txt\"> 5%</span> to<span class=\"green-txt\"> 50%</span>\r\n            discount</p>\r\n          <ul class=\"data-item-conditions\">\r\n            <li>free consultation with our nutritionist</li>\r\n            <li>personal healthy food program and training during subscription time<span\r\n              class=\"bold\">  whole family</span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"data-item-price\">$<span class=\"bold-large-txt\"> 39</span> /mo</span><a (click)=\"openGetAppDialog()\" class=\"btn\">subscribe</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"plans-data annual\">\r\n        <div class=\"plans-data-item\"><h2 class=\"data-item-title\">standart</h2>\r\n          <p class=\"data-item-discount\">from<span class=\"green-txt\"> 5%</span> to<span class=\"green-txt\"> 50%</span>\r\n            discount</p>\r\n          <ul class=\"data-item-conditions\">\r\n            <li class=\"grey\">free consultation with our nutritionist</li>\r\n            <li class=\"grey\">personal healthy food program and training during subscription time</li>\r\n          </ul>\r\n          <span class=\"data-item-price\">$<span class=\"bold-large-txt\"> 123</span> /mo</span><a (click)=\"openGetAppDialog()\"\r\n                                                                                              class=\"btn\">subscribe</a>\r\n        </div>\r\n        <div class=\"plans-data-item\"><h2 class=\"data-item-title\">medium</h2>\r\n          <p class=\"data-item-discount\">from<span class=\"green-txt\"> 5%</span> to<span class=\"green-txt\"> 50%</span>\r\n            discount</p>\r\n          <ul class=\"data-item-conditions\">\r\n            <li>free consultation with our nutritionist</li>\r\n            <li>personal healthy food program and training during subscription time<span\r\n              class=\"bold\"> for 1 person</span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"data-item-price\">$<span class=\"bold-large-txt\"> 201</span>  /mo</span><a (click)=\"openGetAppDialog()\"\r\n                                                                                               class=\"btn\">subscribe</a>\r\n        </div>\r\n        <div class=\"plans-data-item\"><h2 class=\"data-item-title\">Premium</h2>\r\n          <p class=\"data-item-discount\">from<span class=\"green-txt\"> 5%</span> to<span class=\"green-txt\"> 50%</span>\r\n            discount</p>\r\n          <ul class=\"data-item-conditions\">\r\n            <li>free consultation with our nutritionist</li>\r\n            <li>personal healthy food program and training during subscription time<span\r\n              class=\"bold\">  whole family</span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"data-item-price\">$<span class=\"bold-large-txt\"> 398</span> /mo</span><a (click)=\"openGetAppDialog()\"\r\n                                                                                              class=\"btn\">subscribe</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p class=\"faq\">Do you still have questions? Check out our<a href=\"#\"> FAQ</a></p></div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/premiums/premiums.component.scss":
/*!**************************************************!*\
  !*** ./src/app/premiums/premiums.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100vh;\n  position: relative;\n  background-image: url('main-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  font-family: \"Roboto\";\n  padding-top: 66px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .main .overlay {\n    background-color: rgba(49, 69, 55, 0.5); }\n  .main .main-info {\n    position: relative;\n    color: #fff;\n    text-align: center; }\n  .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 65px;\n      font-weight: 900;\n      letter-spacing: 1.3px;\n      text-transform: uppercase;\n      line-height: normal; }\n  .main .main-info .txt-yellow {\n      color: #fee665; }\n  .main .main-info .main-info-description {\n      font-size: 20px;\n      font-weight: 300;\n      line-height: 1.7;\n      letter-spacing: 0.4px;\n      margin: 85px 0 115px; }\n  .main .main-info .btn {\n      font-size: 20px;\n      padding: 31px 40px;\n      background-color: rgba(231, 71, 71, 0.85); }\n  .main .main-info .btn:hover {\n        background-color: #e74747; }\n  .premium-main {\n  background-image: url('premium-bg.png'); }\n  .premium-main .overlay {\n    display: none; }\n  .premium-main .main-info-title {\n    margin-bottom: 55px; }\n  .business-main {\n  background-image: url('business-bg.png');\n  height: auto;\n  padding: 190px 0 240px; }\n  .business-main .overlay {\n    background-image: linear-gradient(23deg, #5790c9, #e39766);\n    opacity: 0.6; }\n  .business-main .btn {\n    width: 234px; }\n  @media (max-width: 1024px) {\n  .main {\n    height: auto;\n    padding-top: 200px;\n    padding-right: 50px;\n    padding-left: 50px;\n    padding-bottom: 66px; } }\n  @media (max-width: 768px) {\n  .main {\n    height: auto;\n    padding-top: 100px; } }\n  @media (max-height: 630px) {\n  .main {\n    height: auto;\n    padding-top: 150px;\n    padding-right: 30px;\n    padding-left: 30px;\n    padding-bottom: 70px; }\n  .business-main {\n    padding-right: 20px;\n    padding-left: 20px; } }\n  @media (max-width: 500px) {\n  .main {\n    padding-right: 30px;\n    padding-left: 30px;\n    background-attachment: scroll; }\n    .main .main-info .main-info-title, .main .main-info .txt-yellow {\n      font-size: 45px; }\n    .main .main-info .main-info-description {\n      margin: 50px 0 50px; } }\n  .info {\n  overflow-x: hidden; }\n  .info .container {\n    padding-top: 100px;\n    padding-bottom: 200px; }\n  .info .info-block {\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch; }\n  .info .info-block > div {\n      width: 50%; }\n  .info .info-block:first-child .info-txt {\n      padding-right: 135px; }\n  .info .info-block:first-child img {\n      top: -50px; }\n  .info .info-block:last-child {\n      margin-top: 200px; }\n  .info .info-block:last-child .info-txt {\n        padding-left: 50px; }\n  .info .info-block:last-child .info-txt .info-txt-description {\n          padding-right: 80px; }\n  .info .info-block:last-child img {\n        top: -50px;\n        right: 50px; }\n  .info .info-img {\n    position: relative; }\n  .info .info-txt-title {\n    font-size: 35px;\n    font-weight: bold;\n    color: #505050;\n    margin-bottom: 65px; }\n  .info .info-txt-description {\n    font-size: 17px;\n    font-weight: normal;\n    line-height: 1.88;\n    letter-spacing: 0.3px;\n    color: #454545; }\n  .info .mt {\n    margin-top: 125px; }\n  .info img {\n    position: absolute; }\n  @media (max-width: 1190px) {\n  .info .container {\n    padding-bottom: 125px; }\n  .info .info-block:first-child .info-txt {\n    padding-right: 50px; }\n  .info .info-block:last-child .info-txt .info-txt-description {\n    padding-right: 40px; } }\n  @media (max-width: 900px) {\n  .info .info-block > div {\n    width: 100%;\n    text-align: center; }\n  .info .info-block:first-child .info-txt {\n    padding-right: 0; }\n  .info .info-block:last-child {\n    margin-top: 125px; }\n    .info .info-block:last-child .info-txt {\n      padding-left: 0; }\n      .info .info-block:last-child .info-txt .info-txt-description {\n        padding-right: 0; }\n  .info .info-img {\n    display: none; }\n  .info .mt {\n    margin-top: 125px; }\n  .info img {\n    position: absolute; } }\n  .calculate .container {\n  padding-bottom: 80px; }\n  .calculate h2 {\n  font-size: 35px;\n  font-weight: bold;\n  color: #505050;\n  margin-bottom: 65px;\n  text-align: center; }\n  .calculate p {\n  margin-left: 50px;\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 1.88;\n  letter-spacing: 0.3px;\n  color: #454545; }\n  .calculate img {\n  margin-top: 20px; }\n  .calculate .calculate-container {\n  margin: auto;\n  max-width: 830px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start; }\n  @media (max-width: 768px) {\n  .calculate .calculate-container {\n    display: block;\n    text-align: center; }\n  .calculate p {\n    margin-left: 0; }\n  .calculate img {\n    margin-top: 0;\n    margin-bottom: 20px; } }\n  .plans {\n  background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 80%, #fff 80%);\n  text-align: center; }\n  .plans .section-container {\n    padding-bottom: 50px; }\n  .plans .section-title {\n    font-size: 35px;\n    margin-bottom: 50px; }\n  .plans .plans-data {\n    margin-top: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start; }\n  .plans .plans-data-item {\n    max-width: 360px;\n    background-color: #fff;\n    box-shadow: 0px 4px 7px 0 rgba(52, 39, 18, 0.15);\n    padding: 50px 35px 35px; }\n  .plans .data-item-title {\n    font-size: 22px;\n    font-weight: 900;\n    text-transform: uppercase;\n    color: #505050; }\n  .plans .data-item-discount {\n    white-space: pre;\n    font-size: 21px;\n    font-weight: 100;\n    color: #454545;\n    margin: 40px 0 50px; }\n  .plans .data-item-discount .green-txt {\n      font-size: 30px;\n      font-weight: 500;\n      color: #87c96e; }\n  .plans .data-item-conditions li {\n    position: relative;\n    text-align: left;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 1.56;\n    letter-spacing: 0.3px;\n    color: #454545;\n    padding-left: 40px; }\n  .plans .data-item-conditions li:not(:first-child) {\n      margin-top: 25px; }\n  .plans .data-item-conditions li:before {\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      left: 0;\n      top: 10px;\n      width: 11px;\n      height: 11px;\n      margin-right: 20px;\n      background-size: cover;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2213%22 height%3D%2211%22%3E%3Cpath fill%3D%22%2387C96E%22 fill-rule%3D%22evenodd%22 d%3D%22M12.77 1.89L11.628.749a.773.773 0 0 0-.57-.235.775.775 0 0 0-.571.235L4.981 6.263 2.513 3.787a.78.78 0 0 0-.571-.235.78.78 0 0 0-.571.235L.23 4.929a.775.775 0 0 0-.235.571c0 .223.078.414.235.57l3.038 3.039L4.41 10.25a.775.775 0 0 0 .571.235.774.774 0 0 0 .57-.235l1.142-1.141 6.077-6.077a.78.78 0 0 0 .235-.571.78.78 0 0 0-.235-.571z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .plans .data-item-conditions li.grey {\n      color: #b6b6b6; }\n  .plans .data-item-conditions li.grey:before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2211%22 height%3D%2211%22%3E%3Cpath fill%3D%22%23B6B6B6%22 fill-rule%3D%22evenodd%22 d%3D%22M8.704.325a.208.208 0 0 0-.292 0L5.429 3.309a.21.21 0 0 1-.293 0L2.153.325a.209.209 0 0 0-.293 0L.325 1.86a.208.208 0 0 0 0 .292l2.983 2.984a.206.206 0 0 1 0 .292L.325 8.412a.208.208 0 0 0 0 .292l1.535 1.535a.207.207 0 0 0 .293 0l2.983-2.983a.207.207 0 0 1 .293 0l2.983 2.983c.08.081.212.081.292 0l1.536-1.535a.208.208 0 0 0 0-.292L7.256 5.428a.208.208 0 0 1 0-.292l2.984-2.984a.208.208 0 0 0 0-.292L8.704.325z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .plans .data-item-price {\n    display: block;\n    text-align: center;\n    font-size: 27px;\n    font-weight: 100;\n    color: #454545;\n    margin: 45px 0 20px; }\n  .plans .data-item-price .bold-large-txt {\n      font-size: 35px;\n      font-weight: normal;\n      text-align: left;\n      color: #505050; }\n  .plans .plans-data-item:nth-child(1) .btn {\n    background-color: #454545; }\n  .plans .plans-data-item:nth-child(2) .btn {\n    background-color: #e0ae58; }\n  .plans .plans-data-item:nth-child(3) .btn {\n    background-color: #ff5c5c; }\n  .plans .faq, .plans .faq a {\n    margin-top: 30px;\n    font-size: 17px;\n    font-weight: 300;\n    letter-spacing: 0.3px;\n    text-align: left;\n    color: #505050; }\n  .plans .faq a, .plans .faq a a {\n      border-bottom: 1px solid #bcbcbc; }\n  .plans input {\n    display: none; }\n  .plans label {\n    width: 134px;\n    display: inline-block;\n    border: solid 1px #454545;\n    padding: 10px 0;\n    color: #454545;\n    font-size: 17px; }\n  .plans label[for=\"monthly\"] {\n      border-radius: 32px 0 0 32px; }\n  .plans label[for=\"annual\"] {\n      border-radius: 0 32px 32px 0; }\n  .plans .annual, .plans .monthly {\n    display: none; }\n  .plans input#monthly:checked ~ label[for=\"monthly\"] {\n    background: #454545;\n    color: #fff;\n    font-weight: 900; }\n  .plans input#annual:checked ~ label[for=\"annual\"] {\n    background: #454545;\n    color: #fff;\n    font-weight: 900; }\n  .plans input#monthly:checked ~ .monthly {\n    display: flex; }\n  .plans input#annual:checked ~ .annual {\n    display: flex; }\n  @media (max-width: 1190px) and (min-width: 1024px) {\n  .plans {\n    background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 90%, #fff 90%); }\n    .plans .plans-data {\n      flex-wrap: wrap;\n      justify-content: center; }\n    .plans .plans-data-item:last-child {\n      margin-top: 50px; }\n    .plans .plans-data-item:first-child {\n      margin-right: 50px; } }\n  @media (max-width: 1024px) {\n  .plans {\n    background-image: linear-gradient(to bottom, #f7e8d1, #f7e8d1 15%, #f7e8d1 15%, #f7e8d1 94%, #fff 94%); }\n    .plans .plans-data {\n      flex-direction: column;\n      align-items: center; }\n    .plans .plans-data-item:not(:first-child) {\n      margin-top: 30px; } }\n  @media (max-width: 400px) {\n  .plans .plans-data-item {\n    padding: 25px 15px 20px; }\n  .plans .data-item-conditions li {\n    padding-left: 20px; }\n    .plans .data-item-conditions li:before {\n      margin-right: 10px; } }\n"

/***/ }),

/***/ "./src/app/premiums/premiums.component.ts":
/*!************************************************!*\
  !*** ./src/app/premiums/premiums.component.ts ***!
  \************************************************/
/*! exports provided: PremiumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumsComponent", function() { return PremiumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialogs_get_app_get_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/dialogs/get-app/get-app.component */ "./src/app/_shared/dialogs/get-app/get-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PremiumsComponent = /** @class */ (function () {
    function PremiumsComponent(dialog) {
        this.dialog = dialog;
    }
    PremiumsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    PremiumsComponent.prototype.openGetAppDialog = function () {
        this.dialog.open(_shared_dialogs_get_app_get_app_component__WEBPACK_IMPORTED_MODULE_2__["GetAppComponent"]);
    };
    PremiumsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-premiums',
            template: __webpack_require__(/*! ./premiums.component.html */ "./src/app/premiums/premiums.component.html"),
            styles: [__webpack_require__(/*! ./premiums.component.scss */ "./src/app/premiums/premiums.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], PremiumsComponent);
    return PremiumsComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\n  bdColor = \"rgba(255, 255, 255, 1)\"\r\n  size = \"large\"\r\n  color = \"#fe5c5c\"\r\n  type = \"ball-spin\"\r\n></ngx-spinner>\r\n<div class=\"services-filter\"><span class=\"services-filter-title\">Show on map:</span>\r\n  <form class=\"services-type\" [formGroup]=\"filterForm\" (change)=\"setMarkers()\">\r\n    <div class=\"services-type-item\"><input id=\"s1\" type=\"checkbox\" formControlName='restaurant'><label for=\"s1\"></label>Restaurants\r\n    </div>\r\n    <div class=\"services-type-item\"><input id=\"s2\" type=\"checkbox\" formControlName='food_delivery'><label\r\n      for=\"s2\"></label>Food delivery\r\n    </div>\r\n    <div class=\"services-type-item\"><input id=\"s3\" type=\"checkbox\" formControlName='gym'><label for=\"s3\"></label>Gym\r\n    </div>\r\n    <div class=\"services-type-item\"><input id=\"s4\" type=\"checkbox\" formControlName='nutritionists'><label\r\n      for=\"s4\"></label>Nytritionists\r\n    </div>\r\n    <div class=\"services-type-item\"><input id=\"s5\" type=\"checkbox\" formControlName='shops'><label for=\"s5\"></label>Shops\r\n    </div>\r\n    <div class=\"services-type-item big-checkbox\">Show map<input id=\"s6\" type=\"checkbox\"\r\n                                                                (change)=\"showMap = !showMap\"><label for=\"s6\"></label>\r\n    </div>\r\n  </form>\r\n  <agm-map *ngIf=\"showMap\"\r\n           [latitude]=\"lat\"\r\n           [longitude]=\"lng\"\r\n           [zoom]=\"zoom\"\r\n  >\r\n    <agm-marker\r\n      *ngFor=\"let mark of markers; let i = index\"\r\n      [latitude]=\"mark.lat\"\r\n      [longitude]=\"mark.lng\"\r\n      [label]=\"mark.label\"\r\n      [iconUrl]=\"mark.img\"\r\n    >\r\n    </agm-marker>\r\n  </agm-map>\r\n</div>\r\n<section class=\"services\">\r\n  <div class=\"services-list-conatainer\">\r\n    <div class=\"services-list\" [ngClass]=\"{'open-map': showMap}\">\r\n      <div class=\"services-list-menu\">\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'restaurant'}\"\r\n           routerLink='/services/restaurant'>Restaurants</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'food_delivery'}\" routerLink='/services/food_delivery'>Food\r\n          delivery</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'gym'}\" routerLink='/services/gym'>Gyms</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'nutritionists'}\" routerLink='/services/nutritionists'>Nytritionists</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'shops'}\" routerLink='/services/shops'>Shops</a>\r\n      </div>\r\n      <div class=\"services-list-items\" *ngIf=\"currentTypeOfServices && dataOfServices\">\r\n        <div class=\"services-item\" *ngFor=\"let service of dataOfServices[currentTypeOfServices]\">\r\n          <div class=\"services-item-img\" [ngStyle]=\"{'background-image': getImg(service.photos)}\" (click)=\"openServiceDialog(service)\"></div>\r\n          <div class=\"services-item-info\">\r\n            <div class=\"services-item-title\"><span (click)=\"openServiceDialog(service)\">{{service.name}}</span><span\r\n              class=\"star-full\"></span></div>\r\n            <p class=\"services-item-description\">{{service.address}}</p></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"services-list-menu bottom\">\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'restaurant'}\"\r\n           routerLink='/services/restaurant'>Restaurants</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'food_delivery'}\" routerLink='/services/food_delivery'>Food\r\n          delivery</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'gym'}\" routerLink='/services/gym'>Gyms</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'nutritionists'}\" routerLink='/services/nutritionists'>Nytritionists</a>\r\n        <a [ngClass]=\"{'active': currentTypeOfServices === 'shops'}\" routerLink='/services/shops'>Shops</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-filter {\n  position: fixed;\n  top: 68px;\n  width: 100%;\n  background-color: #f7f7f7;\n  padding: 20px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .services-filter .services-filter-title, .services-filter .services-type-item {\n    font-size: 15px;\n    color: #454545; }\n  .services-filter .services-type {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 50px; }\n  .services-filter .services-type input {\n      display: none; }\n  .services-filter .services-type label {\n      width: 17px;\n      height: 17px;\n      background-color: #fff;\n      border: solid 1px #c5c5c5;\n      margin-right: 10px;\n      position: relative; }\n  .services-filter .services-type label:after {\n        content: \"\";\n        width: 23px;\n        height: 17px;\n        background-size: cover;\n        position: absolute;\n        bottom: 2px;\n        left: 0px;\n        display: none; }\n  .services-filter .services-type-item {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .services-filter .services-type-item:not(:first-child) {\n      margin-left: 30px; }\n  .services-filter .services-type-item:nth-child(1) input[type=\"checkbox\"]:checked ~ label:after {\n    display: block;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2223%22 height%3D%2217%22%3E%3Cpath fill%3D%22%23FF5C5C%22 fill-rule%3D%22evenodd%22 d%3D%22M22.728 1.25a.909.909 0 0 0-1.309 0L8.314 14.713 2.553 8.839a.91.91 0 0 0-1.31 0 .966.966 0 0 0 0 1.341l6.419 6.544a.918.918 0 0 0 1.311 0L22.728 2.591a.964.964 0 0 0 0-1.341c-.361-.371.362.37 0 0z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services-filter .services-type-item:nth-child(2) input[type=\"checkbox\"]:checked ~ label:after {\n    display: block;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2223%22 height%3D%2217%22%3E%3Cpath fill%3D%22%2368A20E%22 fill-rule%3D%22evenodd%22 d%3D%22M22.728 1.25a.91.91 0 0 0-1.31 0L8.314 14.713 2.553 8.839a.91.91 0 0 0-1.31 0 .964.964 0 0 0 0 1.341l6.419 6.544a.918.918 0 0 0 1.311 0L22.728 2.591a.962.962 0 0 0 0-1.341c-.361-.371.363.37 0 0z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services-filter .services-type-item:nth-child(3) input[type=\"checkbox\"]:checked ~ label:after {\n    display: block;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2223%22 height%3D%2217%22%3E%3Cpath fill%3D%22%230096D4%22 fill-rule%3D%22evenodd%22 d%3D%22M22.728 1.25a.909.909 0 0 0-1.309 0L8.314 14.713 2.553 8.839a.91.91 0 0 0-1.31 0 .966.966 0 0 0 0 1.341l6.419 6.544a.918.918 0 0 0 1.311 0L22.728 2.591a.962.962 0 0 0 0-1.341c-.361-.371.363.37 0 0z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services-filter .services-type-item:nth-child(4) input[type=\"checkbox\"]:checked ~ label:after {\n    display: block;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2223%22 height%3D%2217%22%3E%3Cpath fill%3D%22%23F35DD5%22 fill-rule%3D%22evenodd%22 d%3D%22M22.728 1.25a.91.91 0 0 0-1.31 0L8.314 14.713 2.553 8.839a.91.91 0 0 0-1.31 0 .966.966 0 0 0 0 1.341l6.419 6.544a.918.918 0 0 0 1.311 0L22.728 2.591a.962.962 0 0 0 0-1.341c-.361-.371.363.37 0 0z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services-filter .services-type-item:nth-child(5) input[type=\"checkbox\"]:checked ~ label:after {\n    display: block;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2223%22 height%3D%2217%22%3E%3Cpath fill%3D%22%23FABF20%22 fill-rule%3D%22evenodd%22 d%3D%22M22.728 1.25a.909.909 0 0 0-1.309 0L8.314 14.713 2.553 8.839a.91.91 0 0 0-1.31 0 .966.966 0 0 0 0 1.341l6.419 6.544a.918.918 0 0 0 1.311 0L22.728 2.591a.964.964 0 0 0 0-1.341c-.361-.371.362.37 0 0z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services-filter .services-type-item.big-checkbox input[type=\"checkbox\"]:checked ~ label:after {\n    background-color: #9cc859;\n    right: 1px;\n    left: auto; }\n  .services-filter .services-type-item.big-checkbox {\n    position: absolute;\n    right: 20px; }\n  .services-filter .services-type-item.big-checkbox label {\n      width: 58px;\n      height: 36px;\n      border-radius: 17.3px;\n      background-color: #ffffff;\n      border: solid 1px #c5c5c5;\n      margin-left: 20px;\n      margin-right: 0; }\n  .services-filter .services-type-item.big-checkbox label:after {\n        display: block;\n        width: 32px;\n        height: 32px;\n        border-radius: 100%;\n        background-color: silver;\n        bottom: 1px;\n        left: 1px;\n        transition: all 200ms; }\n  @media (max-width: 1190px) {\n  .services-filter {\n    justify-content: flex-start; } }\n  @media (max-width: 1024px) {\n  .services-filter {\n    display: none; } }\n  .services {\n  padding: 125px 20px 0; }\n  .services .services-list-menu {\n    margin-top: 30px; }\n  .services .services-list-menu a {\n      font-size: 17px;\n      font-weight: normal;\n      line-height: 1.88;\n      letter-spacing: 0.3px;\n      color: #454545;\n      display: inline-block;\n      transition: all 200ms; }\n  .services .services-list-menu a:not(:last-child) {\n        margin-right: 16px; }\n  .services .services-list-menu a:not(:last-child):after {\n          content: \"|\";\n          display: inline-block;\n          margin-left: 16px; }\n  .services .services-list-menu a:hover {\n        color: #ff5c5c; }\n  .services .services-list-menu a.active {\n        color: #ff5c5c; }\n  .services .services-list-menu a.active:after {\n          color: #505050; }\n  .services .services-list-conatainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch; }\n  .services .services-list {\n    width: 100%; }\n  .services .services-list-items {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    border-bottom: 2px solid rgba(149, 149, 149, 0.3);\n    padding-bottom: 50px; }\n  .services .services-item {\n    width: 19%;\n    margin: 35px 0.5% 0; }\n  .services .services-item-info {\n    padding: 25px 0 20px; }\n  .services .services-item-img {\n    height: 216px;\n    overflow: hidden;\n    background-size: cover;\n    background-position: center;\n    cursor: pointer; }\n  .services .services-item-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .services .services-item-title span {\n      font-size: 18px;\n      font-weight: 900;\n      line-height: normal;\n      color: #454545;\n      text-transform: uppercase;\n      cursor: pointer; }\n  .services .services-item-description {\n    margin-top: 15px;\n    font-size: 17px;\n    font-weight: normal;\n    line-height: normal;\n    color: #696969; }\n  .services .star, .services .star-full {\n    max-width: 30px;\n    min-width: 30px;\n    height: 30px;\n    margin-right: 20px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2231%22 height%3D%2229%22%3E%3Cpath fill%3D%22%23EC5850%22 fill-rule%3D%22evenodd%22 d%3D%22M23.906 28.766c-.17 0-.34-.041-.497-.123l-8.112-4.264-8.112 4.264a1.069 1.069 0 0 1-1.55-1.126l1.549-9.031-6.562-6.395a1.066 1.066 0 0 1 .592-1.822l9.069-1.317L14.339.736a1.069 1.069 0 0 1 1.917 0l4.055 8.216 9.07 1.317a1.068 1.068 0 0 1 .592 1.822l-6.563 6.396 1.55 9.03a1.07 1.07 0 0 1-1.054 1.249zM3.663 12.072l5.415 5.277c.252.245.367.599.307.945l-1.278 7.451 6.693-3.518c.311-.163.683-.163.994 0l6.694 3.518-1.279-7.451c-.059-.346.055-.7.307-.945l5.415-5.277-7.483-1.087a1.067 1.067 0 0 1-.804-.584l-3.347-6.779-3.346 6.779a1.069 1.069 0 0 1-.805.584l-7.483 1.087z%22%2F%3E%3C%2Fsvg%3E\");\n    background-size: cover;\n    cursor: pointer;\n    transition: all 200ms; }\n  .services .star:hover, .services .star-full:hover {\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2231%22 height%3D%2229%22%3E%3Cpath fill%3D%22%23EC5850%22 fill-rule%3D%22evenodd%22 d%3D%22M23.906 28.766c-.17 0-.34-.041-.497-.123l-8.112-4.263-8.112 4.263a1.069 1.069 0 0 1-1.55-1.126l1.549-9.03-6.562-6.396a1.066 1.066 0 0 1 .592-1.822l9.069-1.317L14.339.735a1.07 1.07 0 0 1 1.916 0l4.057 8.217 9.069 1.317a1.068 1.068 0 0 1 .592 1.822l-6.563 6.396 1.55 9.03a1.07 1.07 0 0 1-1.054 1.249z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services .star-full {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2231%22 height%3D%2229%22%3E%3Cpath fill%3D%22%23EC5850%22 fill-rule%3D%22evenodd%22 d%3D%22M23.906 28.766c-.17 0-.34-.041-.497-.123l-8.112-4.263-8.112 4.263a1.069 1.069 0 0 1-1.55-1.126l1.549-9.03-6.562-6.396a1.066 1.066 0 0 1 .592-1.822l9.069-1.317L14.339.735a1.07 1.07 0 0 1 1.916 0l4.057 8.217 9.069 1.317a1.068 1.068 0 0 1 .592 1.822l-6.563 6.396 1.55 9.03a1.07 1.07 0 0 1-1.054 1.249z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services .star-full:hover {\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2231%22 height%3D%2229%22%3E%3Cpath fill%3D%22%23EC5850%22 fill-rule%3D%22evenodd%22 d%3D%22M23.906 28.766c-.17 0-.34-.041-.497-.123l-8.112-4.264-8.112 4.264a1.069 1.069 0 0 1-1.55-1.126l1.549-9.031-6.562-6.395a1.066 1.066 0 0 1 .592-1.822l9.069-1.317L14.339.736a1.069 1.069 0 0 1 1.917 0l4.055 8.216 9.07 1.317a1.068 1.068 0 0 1 .592 1.822l-6.563 6.396 1.55 9.03a1.07 1.07 0 0 1-1.054 1.249zM3.663 12.072l5.415 5.277c.252.245.367.599.307.945l-1.278 7.451 6.693-3.518c.311-.163.683-.163.994 0l6.694 3.518-1.279-7.451c-.059-.346.055-.7.307-.945l5.415-5.277-7.483-1.087a1.067 1.067 0 0 1-.804-.584l-3.347-6.779-3.346 6.779a1.069 1.069 0 0 1-.805.584l-7.483 1.087z%22%2F%3E%3C%2Fsvg%3E\"); }\n  .services .services-list-menu.bottom {\n    margin: 60px 0; }\n  .services .services-list.open-map {\n    width: 65vw; }\n  .services .services-list.open-map .services-item {\n      width: 31%;\n      margin: 35px 1% 0; }\n  .services .services-map.open-map {\n    display: block; }\n  @media (max-width: 1440px) {\n  .services .services-list.open-map {\n    width: 65vw; }\n    .services .services-list.open-map .services-item {\n      width: 47%;\n      margin: 35px 1% 0; }\n  .services .services-item {\n    width: 30%;\n    margin: 35px 1.5% 0; } }\n  @media (max-width: 1024px) {\n  .services {\n    padding: 160px 20px 0; }\n    .services .services-list-menu {\n      margin-top: 0; }\n    .services .services-item {\n      width: 46%;\n      margin: 35px 10px 0; }\n    .services .services-list-items {\n      display: flex;\n      justify-content: space-around;\n      align-items: flex-start; }\n    .services .services-list.open-map {\n      width: 100vw; } }\n  @media (max-width: 768px) {\n  .services {\n    padding: 95px 20px 0; }\n    .services .services-item {\n      width: 100%;\n      margin: 35px 0 0; }\n    .services .services-list-items {\n      display: flex;\n      justify-content: space-around;\n      align-items: flex-start; }\n    .services .services-list.open-map .services-item {\n      width: 100%;\n      margin: 35px 1% 0; } }\n  .empty {\n  font-size: 50px;\n  margin-top: 50px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #808080; }\n  agm-map {\n  width: 33vw;\n  position: fixed;\n  top: 125px;\n  right: 0;\n  height: calc(100vh - 125px); }\n  @media (max-width: 1024px) {\n  agm-map {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialogs_services_dialog_services_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/dialogs/services-dialog/services-dialog.component */ "./src/app/_shared/dialogs/services-dialog/services-dialog.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(db, route, dialog, spinner) {
        this.db = db;
        this.route = route;
        this.dialog = dialog;
        this.spinner = spinner;
        this.zoom = 8;
        this.lat = 40.730610;
        this.lng = -73.935242;
        this.markers = [];
        this.markersObject = {};
        this.showMap = false;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.route.params.subscribe(function (params) {
            _this.currentTypeOfServices = params.id;
        });
        this.getServices();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'restaurant': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            'food_delivery': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            'gym': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            'nutritionists': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            'shops': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    ServicesComponent.prototype.getImg = function (photos) {
        return 'url(\'' + photos[Object.keys(photos)[0]] + '\')';
    };
    ServicesComponent.prototype.getServices = function () {
        var _this = this;
        this.db.object('business').valueChanges().subscribe(function (res) {
            _this.transformServices(res);
        });
    };
    ServicesComponent.prototype.transformServices = function (services) {
        this.dataOfServices = {};
        for (var key in services) {
            if (!this.dataOfServices[services[key].type])
                this.dataOfServices[services[key].type] = [];
            var servicItem = services[key];
            servicItem.fbId = key;
            this.dataOfServices[services[key].type].push(servicItem);
        }
        this.createDataOfMarks(this.dataOfServices);
        console.log(this.dataOfServices);
    };
    ServicesComponent.prototype.createDataOfMarks = function (data) {
        var _this = this;
        var _loop_1 = function (key) {
            this_1.markersObject[key] = [];
            data[key].forEach(function (item) {
                _this.markersObject[key].push({ type: key, lat: item.lat, lng: item.lng, img: '../../assets/img/icons/locations/' + key + '.png' });
            });
            console.log(this_1.markersObject);
            this_1.spinner.hide();
        };
        var this_1 = this;
        for (var key in data) {
            _loop_1(key);
        }
    };
    ServicesComponent.prototype.setMarkers = function () {
        this.markers = [];
        for (var key in this.filterForm.value) {
            if (this.filterForm.value[key])
                this.markers = this.markers.concat(this.markersObject[key]);
        }
    };
    ServicesComponent.prototype.openServiceDialog = function (service) {
        this.dialog.open(_shared_dialogs_services_dialog_services_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ServicesDialogComponent"], { data: service });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ServicesComponent);
    return ServicesComponent;
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
// TEST
var environment = {
    production: false,
    // firebase: {
    //   apiKey: "AIzaSyAT-2ekYXFCdp1NgyV6zVNTb41Ob6quwi4",
    //   authDomain: "hls-test-156c5.firebaseapp.com",
    //   databaseURL: "https://hls-test-156c5.firebaseio.com",
    //   projectId: "hls-test-156c5",
    //   storageBucket: "hls-test-156c5.appspot.com",
    //   messagingSenderId: "572213712202"
    // }
    firebase: {
        apiKey: "AIzaSyCr3bMGJSv8w12heh5_brUCg7kUCSjFSbs",
        authDomain: "healthy-lifestyle-9ae39.firebaseapp.com",
        databaseURL: "https://healthy-lifestyle-9ae39.firebaseio.com",
        projectId: "healthy-lifestyle-9ae39",
        storageBucket: "healthy-lifestyle-9ae39.appspot.com",
        messagingSenderId: "15808880644"
    }
};
// PRODUCTION
// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "AIzaSyCr3bMGJSv8w12heh5_brUCg7kUCSjFSbs",
//     authDomain: "healthy-lifestyle-9ae39.firebaseapp.com",
//     databaseURL: "https://healthy-lifestyle-9ae39.firebaseio.com",
//     projectId: "healthy-lifestyle-9ae39",
//     storageBucket: "healthy-lifestyle-9ae39.appspot.com",
//     messagingSenderId: "15808880644"
//   }
// };


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pc_12\Desktop\hls copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alarm-details/alarm-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alarm-details/alarm-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"logo\">\n  <br>\n<h1 class=\"logo\">\n  Bezbednost\n</h1>\n<ul>\n    <li><a href=\"/#/logs\" class=\"menu\">Logs</a></li>\n    <li><a href=\"/#/alarms\" class=\"menu\">Alarms</a></li>\n    <li><a href=\"/#/alarms/control\" class=\"menu\">Alarms Control</a></li>\n    <li><a href=\"/#/password\" class=\"menu\">Change password</a></li>\n    <li><a (click)=\"logout()\" class=\"menu\">Log out</a></li>\n\n    \n  </ul>\n\n\n</div>\n<br>\n<div class=\"container\">\n  <h2>Alarm {{alarm.id}}</h2>\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <label class=\"col-sm-12\" for=\"name\"><b>Name: </b>{{alarm.name}} </label>\n      \n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"desc\"><b>Description:</b></label>\n      <div  class=\"control-label col-sm-10\">{{alarm.description}}</div>  \n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-4\" for=\"vers\"><b>Number:</b> {{alarm.number}}</label>\n      <label class=\"control-label col-sm-4\" for=\"prival\"><b>Seconds:</b> {{alarm.seconds}}</label>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-4\" for=\"vers\"><b>Version:</b> {{alarm.version}}</label>\n      <label class=\"control-label col-sm-4\" for=\"prival\"><b>Prival: </b>{{alarm.prival}}</label>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"timestamp\"><b>Timestamp:</b> {{alarm.timestamp}} </label>\n      <div class=\"col-sm-10\">          \n        <p></p>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-4\" for=\"hostname\"><b>Hostname: </b>{{alarm.hostname}}</label>\n      <label class=\"control-label col-sm-4\" for=\"appname\"><b>Appname:</b> {{alarm.appname}}</label>\n     \n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-4\" for=\"procid\"><b>Procid:</b> {{alarm.procid}}</label>\n      <label class=\"control-label col-sm-2\" for=\"msgid\"><b>Msgid:</b> {{alarm.msgid}}</label>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"sd\"><b>Stuctured data:</b></label>\n      <div class=\"col-sm-10\">          \n        <p>{{alarm.sd}} </p>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"msg\"><b>Mesasge:</b></label>\n      <div class=\"col-sm-10\">          \n        <p>{{alarm.msf}} </p>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"msg\"><b>Logs:</b></label>\n      <div class=\"col-sm-10\">          \n        <div class=\"container\"> \n                                                               \n          <div class=\"table-responsive\">          \n          <table class=\"table table-striped\" >\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Priority value</th>\n                <th>Version</th>\n                <th>Timestamp</th>\n                <th>Hostname</th>\n                <th>Appname</th>\n                <th>Procid</th>\n                <th>Message id</th>\n                <th>Structured data</th>\n                <th>Message</th>\n              </tr>\n            </thead>\n            <tbody  *ngFor=\"let log of alarm.logs; let i = index\">\n              <tr>\n                <td>{{i + 1}}</td>\n                <td>{{log.prival}}</td>\n                <td>{{log.version}}</td>\n                <td>{{log.timestamp}}</td>\n                <td>{{log.hostname}}</td>\n                <td>{{log.appname}}</td>\n                <td>{{log.procid}}</td>\n                <td>{{log.msgid}}</td>\n                <td>{{log.sd}}</td>\n                <td>{{log.msg}}</td>\n              </tr>\n            </tbody>\n          </table>\n          </div>\n        </div>\n      \n      \n      \n      </div>\n    </div>\n    <button class=\"btn btn-default\"  (click)=\"back()\">Back</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/alarm-details/alarm-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alarms_alarms_service__ = __webpack_require__("../../../../../src/app/alarms/alarms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlarmDetailsComponent = /** @class */ (function () {
    function AlarmDetailsComponent(alarmService, auth, route, router) {
        this.alarmService = alarmService;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.alarm = {
            appname: '',
            description: '',
            hostname: '',
            id: 0,
            logs: [],
            msg: '',
            msgid: '',
            name: '',
            prival: 0,
            procid: '',
            sd: '',
            timestamp: '',
            version: 0,
            number: 0,
            seconds: 0,
            canDelete: true
        };
    }
    AlarmDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alarmService.getAlarm(+this.route.snapshot.params['id']).then(function (res) { return _this.alarm = res; }).catch(function (err) { return _this.router.navigate(['alarms']); });
    };
    AlarmDetailsComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AlarmDetailsComponent.prototype.back = function () {
        this.router.navigate(['alarms']);
    };
    AlarmDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alarm-details',
            template: __webpack_require__("../../../../../src/app/alarm-details/alarm-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alarm-details/alarm-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__alarms_alarms_service__["a" /* AlarmsService */], __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AlarmDetailsComponent);
    return AlarmDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alarms-control/alarms-control.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alarms-control/alarms-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"logo\">\n  <br>\n<h1 class=\"logo\">\n  Bezbednost\n</h1>\n<ul>\n    <li><a href=\"/#/logs\" class=\"menu\">Logs</a></li>\n    <li><a href=\"/#/alarms\" class=\"menu\">Alarms</a></li>\n    <li><a href=\"/#/alarms/control\" class=\"menu\">Alarms Control</a></li>\n    <li><a href=\"/#/password\" class=\"menu\">Change password</a></li>\n    <li><a (click)=\"logout()\" class=\"menu\">Log out</a></li>\n\n    \n  </ul>\n\n\n</div>\n<br>\n<div class=\"container\">    \n  <button class=\"btn btn-default\" (click)=\"newAlarm()\">New</button>  \n  <br>      \n  <br>                                                            \n<div class=\"table-responsive\">          \n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Seconds</th>\n      <th>Number</th>\n      <th>Delete</th>\n    </tr>\n  </thead>\n  <tbody  *ngFor=\"let alarm of alarms; let i = index\">\n    <tr>\n      <td>{{i + 1}}</td>\n      <td>{{alarm.name}}</td>\n      <td>{{alarm.description}}</td>\n      <td>{{alarm.seconds}}</td>\n      <td>{{alarm.number}}</td>\n      <td *ngIf=\"alarm.canDelete\" (click)=\"deleteAlarm(alarm.id)\">Delete</td>\n      <td *ngIf=\"!alarm.canDelete\">:)</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/alarms-control/alarms-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmsControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarms_alarms_service__ = __webpack_require__("../../../../../src/app/alarms/alarms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlarmsControlComponent = /** @class */ (function () {
    function AlarmsControlComponent(router, auth, alarmService) {
        this.router = router;
        this.auth = auth;
        this.alarmService = alarmService;
        this.alarms = [];
    }
    AlarmsControlComponent.prototype.ngOnInit = function () {
        this.getAlarms();
    };
    AlarmsControlComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AlarmsControlComponent.prototype.getAlarms = function () {
        var _this = this;
        this.alarmService.getAlarms().then(function (res) {
            _this.alarms = res;
            console.log(res);
        });
    };
    AlarmsControlComponent.prototype.showAlarm = function (id) {
        console.log(id);
        var path = '/#/alarms/' + id;
    };
    AlarmsControlComponent.prototype.deleteAlarm = function (id) {
        var _this = this;
        this.alarmService.deleteAlarm(id).then(function (res) {
            console.log('good');
            _this.alarms = [];
            _this.getAlarms();
        }).catch(function (res) {
            console.log('bad');
            _this.alarms = [];
            _this.getAlarms();
            //window.location.reload()
        });
    };
    AlarmsControlComponent.prototype.newAlarm = function () {
        this.router.navigate(['/alarms/new']);
    };
    AlarmsControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alarms-control',
            template: __webpack_require__("../../../../../src/app/alarms-control/alarms-control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alarms-control/alarms-control.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__alarms_alarms_service__["a" /* AlarmsService */]])
    ], AlarmsControlComponent);
    return AlarmsControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alarms/alarms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alarms/alarms.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"logo\">\n  <br>\n<h1 class=\"logo\">\n  Bezbednost\n</h1>\n<ul>\n    <li><a href=\"/#/logs\" class=\"menu\">Logs</a></li>\n    <li><a href=\"/#/alarms\" class=\"menu\">Alarms</a></li>\n    <li><a href=\"/#/alarms/control\" class=\"menu\">Alarms Control</a></li>\n    <li><a href=\"/#/password\" class=\"menu\">Change password</a></li>\n    <li><a (click)=\"logout()\" class=\"menu\">Log out</a></li>\n\n    \n  </ul>\n\n\n</div>\n<br>\n<div class=\"container\">  \n\n  <button (click)=\"showHide()\" class=\"btn btn-default\" > Setting</button>\n  <div *ngIf=\"show\" class=\"col-sm-4\" >\n      <table class=\"table table-striped\" >\n          <tbody  *ngFor=\"let item of alarmList.items\" >\n              <tr>\n                <td>{{item.alarm.name}}</td>\n                <td *ngIf=\"item.show\" (click)=\"remove(item.alarm)\"><input type=\"checkbox\" name=\"item\" checked></td>\n                <td *ngIf=\"!item.show\" (click)=\"add(item.alarm)\"><input type=\"checkbox\" name=\"item\"></td>\n              </tr>\n              </tbody>\n        </table>\n  </div>\n  <br>\n  <br>\n  <div class=\"table-responsive\">          \n  <table class=\"table table-striped\" >\n    <thead>\n      <tr>\n        <th>Priority value</th>\n        <th>Version</th>\n        <th>Timestamp</th>\n        <th>Hostname</th>\n        <th>Appname</th>\n        <th>Procid</th>\n        <th>Message id</th>\n        <th>Structured data</th>\n        <th>Message</th>\n        <th>Alarm</th>\n      </tr>\n    </thead>\n    <tbody  *ngFor=\"let alarm of alarms\" >\n      <tr *ngFor=\"let log of alarm.logs\" (click)=\"showAlarm(alarm.id)\">\n        <td>{{log.prival}}</td>\n        <td>{{log.version}}</td>\n        <td>{{log.timestamp}}</td>\n        <td>{{log.hostname}}</td>\n        <td>{{log.appname}}</td>\n        <td>{{log.procid}}</td>\n        <td>{{log.msgid}}</td>\n        <td>{{log.sd}}</td>\n        <td>{{log.msg}}</td>\n        <td>{{alarm.name}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/alarms/alarms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarms_service__ = __webpack_require__("../../../../../src/app/alarms/alarms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlarmsComponent = /** @class */ (function () {
    function AlarmsComponent(router, auth, alarmService) {
        this.router = router;
        this.auth = auth;
        this.alarmService = alarmService;
        this.show = false;
        this.alarms = [];
        this.allAlarms = [];
        this.alarmList = { items: [] };
    }
    AlarmsComponent.prototype.ngOnInit = function () {
        this.getAlarms();
    };
    AlarmsComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AlarmsComponent.prototype.getAlarms = function () {
        var _this = this;
        this.alarmService.getAlarms().then(function (res) {
            _this.alarms = res;
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var a = res_1[_i];
                _this.allAlarms.push(a);
            }
            for (var _a = 0, _b = _this.alarms; _a < _b.length; _a++) {
                var alar = _b[_a];
                var item = { alarm: alar, show: true };
                _this.alarmList.items.push(item);
            }
            console.log(_this.alarmList.items);
        });
    };
    AlarmsComponent.prototype.showAlarm = function (id) {
        console.log(id);
        var path = '/#/alarms/' + id;
        this.router.navigate(['/alarms', id]);
    };
    AlarmsComponent.prototype.showHide = function () {
        if (this.show)
            this.show = false;
        else
            this.show = true;
    };
    AlarmsComponent.prototype.remove = function (alarm) {
        console.log('remove');
        for (var a = 0; a < this.alarms.length; a++) {
            if (this.alarms[a].id == alarm.id)
                this.alarms.splice(a, 1);
        }
        for (var _i = 0, _a = this.alarmList.items; _i < _a.length; _i++) {
            var a_1 = _a[_i];
            if (a_1.alarm.id == alarm.id)
                a_1.show = false;
        }
    };
    AlarmsComponent.prototype.add = function (alarm) {
        console.log('add');
        for (var _i = 0, _a = this.alarmList.items; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.alarm.id == alarm.id)
                a.show = true;
        }
        console.log('alarm: ', alarm.id);
        for (var a in this.allAlarms) {
            console.log(this.allAlarms[a].id);
            if (this.allAlarms[a].id == alarm.id) {
                console.log('before:', this.alarms);
                this.alarms.push(this.allAlarms[a]);
                console.log('after:', this.alarms);
            }
        }
    };
    AlarmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alarms',
            template: __webpack_require__("../../../../../src/app/alarms/alarms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alarms/alarms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__alarms_service__["a" /* AlarmsService */]])
    ], AlarmsComponent);
    return AlarmsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alarms/alarms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlarmsService = /** @class */ (function () {
    function AlarmsService(http) {
        this.http = http;
        this.url = '/api/alarms';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.RegenerateData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    AlarmsService.prototype.announceChange = function () {
        this.RegenerateData.next();
    };
    AlarmsService.prototype.getAlarms = function () {
        return this.http
            .get(this.url, { 'headers': this.headers })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AlarmsService.prototype.getAlarm = function (id) {
        var url = this.url + '/' + id;
        return this.http
            .get(url, { 'headers': this.headers })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AlarmsService.prototype.deleteAlarm = function (id) {
        var url = this.url + '/' + id;
        return this.http
            .delete(url, { 'headers': this.headers })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AlarmsService.prototype.createAlarm = function (alarm) {
        var url = this.url;
        return this.http
            .post(url, alarm, { 'headers': this.headers })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AlarmsService.prototype.handleError = function (error) {
        console.error("Error... ", error);
        return Promise.reject(error.message || error);
    };
    AlarmsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], AlarmsService);
    return AlarmsService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logs_logs_component__ = __webpack_require__("../../../../../src/app/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alarms_alarms_component__ = __webpack_require__("../../../../../src/app/alarms/alarms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alarms_control_alarms_control_component__ = __webpack_require__("../../../../../src/app/alarms-control/alarms-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_alarm_new_alarm_component__ = __webpack_require__("../../../../../src/app/new-alarm/new-alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alarm_details_alarm_details_component__ = __webpack_require__("../../../../../src/app/alarm-details/alarm-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'logs', component: __WEBPACK_IMPORTED_MODULE_5__logs_logs_component__["a" /* LogsComponent */]
    },
    {
        path: 'alarms', component: __WEBPACK_IMPORTED_MODULE_6__alarms_alarms_component__["a" /* AlarmsComponent */]
    },
    {
        path: 'alarms/control', component: __WEBPACK_IMPORTED_MODULE_7__alarms_control_alarms_control_component__["a" /* AlarmsControlComponent */]
    },
    {
        path: 'alarms/new', component: __WEBPACK_IMPORTED_MODULE_8__new_alarm_new_alarm_component__["a" /* NewAlarmComponent */]
    },
    {
        path: 'alarms/:id', component: __WEBPACK_IMPORTED_MODULE_9__alarm_details_alarm_details_component__["a" /* AlarmDetailsComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'password',
        component: __WEBPACK_IMPORTED_MODULE_4__change_password_change_password_component__["a" /* ChangePasswordComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logs_logs_service__ = __webpack_require__("../../../../../src/app/logs/logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alarms_alarms_service__ = __webpack_require__("../../../../../src/app/alarms/alarms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__token_interceptor_service__ = __webpack_require__("../../../../../src/app/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__change_password_equal_validator_directive__ = __webpack_require__("../../../../../src/app/change-password/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__alarms_alarms_component__ = __webpack_require__("../../../../../src/app/alarms/alarms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__alarm_details_alarm_details_component__ = __webpack_require__("../../../../../src/app/alarm-details/alarm-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__alarms_control_alarms_control_component__ = __webpack_require__("../../../../../src/app/alarms-control/alarms-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__logs_logs_component__ = __webpack_require__("../../../../../src/app/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__new_alarm_new_alarm_component__ = __webpack_require__("../../../../../src/app/new-alarm/new-alarm.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastOptions"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_16__change_password_equal_validator_directive__["a" /* EqualValidator */],
                __WEBPACK_IMPORTED_MODULE_17__alarms_alarms_component__["a" /* AlarmsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__alarm_details_alarm_details_component__["a" /* AlarmDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__alarms_control_alarms_control_component__["a" /* AlarmsControlComponent */],
                __WEBPACK_IMPORTED_MODULE_20__logs_logs_component__["a" /* LogsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__new_alarm_new_alarm_component__["a" /* NewAlarmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__login_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__alarms_alarms_service__["a" /* AlarmsService */],
                __WEBPACK_IMPORTED_MODULE_11__logs_logs_service__["a" /* LogsService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"logo\">\n  <br>\n<h1 class=\"logo\">\n  Bezbednost\n</h1>\n<ul>\n    <li><a href=\"/#/logs\" class=\"menu\">Logs</a></li>\n    <li><a href=\"/#/alarms\" class=\"menu\">Alarms</a></li>\n    <li><a href=\"/#/alarms/control\" class=\"menu\">Alarms Control</a></li>\n    <li><a href=\"/#/password\" class=\"menu\">Change password</a></li>\n    <li><a (click)=\"logout()\" class=\"menu\">Log out</a></li>\n\n    \n  </ul>\n\n\n</div>\n<br>\n<div class=\"container\">\n    <h1 style=\"width: 50%; margin-left: 20%;\">Change password</h1>\n    <form style=\"width: 50%; margin-left: 20%;\" #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\n        <div class=\"form-group\">\n            <label for=\"\">Current password</label>\n            <input type=\"password\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.currentPassword\" \n              required #username=\"ngModel\">\n            <small [hidden]=\"username.valid || (username.pristine && !f.submitted)\" class=\"text-danger\">\n              Password is required.\n            </small>\n            <!--<pre *ngIf=\"username.errors\" class=\"margin-20\">{{ username.errors | json }}</pre>-->\n          </div>\n      <div class=\"form-group\">\n        <label for=\"\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.newPassword\" \n          required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\" minlength=\"6\">\n        <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n          Password is required (minimum 6 characters).\n        </small>\n        <!--<pre *ngIf=\"password.errors\" class=\"margin-20\">{{ password.errors | json }}</pre>-->\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Retype password</label>\n        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\"[(ngModel)]=\"user.checkPassword\" \n          required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n        <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n          Password mismatch\n        </small>\n        <!--<pre *ngIf=\"confirmPassword.errors\" class=\"margin-20\">{{ confirmPassword.errors | json }}</pre>-->\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!f.valid\">Submit</button>\n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(auth, location, router, toastr, vcr) {
        this.auth = auth;
        this.location = location;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
        this.user = {
            currentPassword: '',
            newPassword: '',
            checkPassword: ''
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
    };
    ChangePasswordComponent.prototype.save = function (model, isValid) {
        var _this = this;
        console.log(this.user);
        console.log(model);
        if (isValid) {
            this.auth.changePassword(this.user)
                .then(function (res) { return _this.location.back(); })
                .catch(function (res) { return _this.toastr.error('An error occurred while changing the password.'); });
        }
    };
    ChangePasswordComponent.prototype.cancel = function () {
        this.location.back();
    };
    ChangePasswordComponent.prototype.logout = function () {
        this.auth.logout();
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__login_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/change-password/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"logo\">\n  <br>\n<h1 class=\"logo\">\n  Bezbednost\n</h1>\n<ul>\n    <li><a href=\"/#/logs\" class=\"menu\">Logs</a></li>\n    <li><a href=\"/#/alarms\" class=\"menu\">Alarms</a></li>\n    <li><a href=\"/#/alarms/control\" class=\"menu\">Alarms Control</a></li>\n    <li><a href=\"/#/password\" class=\"menu\">Change password</a></li>\n    <li><a (click)=\"logout()\" class=\"menu\">Log out</a></li>\n\n    \n  </ul>\n\n\n</div>\n<br>\n\n<!-- <p>\n  home works!\n</p>\n<button (click)=\"logout()\">Log out</button>\n<button (click)=\"me()\">mee</button>\n<button (click)=\"changePassword()\">Change password</button> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.auth.redirect();
    };
    HomeComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HomeComponent.prototype.me = function () {
        this.auth.me()
            .then(function (res) { return console.log(res); });
    };
    HomeComponent.prototype.changePassword = function () {
        this.router.navigate(['password']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (username, password) {
        return this.http
            .post('/api/login', { username: username, password: password }, { responseType: 'text' })
            .toPromise()
            .then(function (res) { return localStorage.setItem('token', res); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    };
    AuthService.prototype.redirect = function () {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['home']);
        }
    };
    AuthService.prototype.me = function () {
        return this.http
            .get('/api/me')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.changePassword = function (user) {
        return this.http
            .post('/api/password', user)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*//////////////////////////////////////////////////////////////////\r\n[ FONT ]*/\r\n\r\n@font-face {\r\n    font-family: Poppins-Regular;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Regular.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Medium;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Medium.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Bold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Bold.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-SemiBold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-SemiBold.ttf")) + "); \r\n  }\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ RESTYLE TAG ]*/\r\n\r\n* {\r\n\tmargin: 0px; \r\n\tpadding: 0px; \r\n\t-webkit-box-sizing: border-box; \r\n\t        box-sizing: border-box;\r\n}\r\n\r\nbody, html {\r\n\theight: 100%;\r\n\tfont-family: Poppins-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.4s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n\toutline: none !important;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n\tmargin: 0px;\r\n}\r\n\r\np {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\n\r\nul, li {\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus, input:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\ninput:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ninput:focus:-moz-placeholder { color:transparent; }\r\n\r\ninput:focus::-moz-placeholder { color:transparent; }\r\n\r\ninput:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ninput::-webkit-input-placeholder { color: #fff;}\r\n\r\ninput:-moz-placeholder { color: #fff;}\r\n\r\ninput::-moz-placeholder { color: #fff;}\r\n\r\ninput:-ms-input-placeholder { color: #fff;}\r\n\r\ntextarea::-webkit-input-placeholder { color: #fff;}\r\n\r\ntextarea:-moz-placeholder { color: #fff;}\r\n\r\ntextarea::-moz-placeholder { color: #fff;}\r\n\r\ntextarea:-ms-input-placeholder { color: #fff;}\r\n\r\nlabel {\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\niframe {\r\n\tborder: none !important;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 13px;\r\n  color: #e5e5e5;\r\n  line-height: 1.5;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ login ]*/\r\n\r\n.limiter {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.container-login100 {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 15px;\r\n  \r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 1;  \r\n  }\r\n\r\n.container-login100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(255,255,255,0.9);\r\n  }\r\n\r\n.wrap-login100 {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 55px 55px 37px 55px;\r\n  \r\n    background: #9152f8;\r\n    background:  -webkit-gradient(linear, left top, left bottom, from(#e1ff75), to(#85730e));\r\n    background:  linear-gradient(top, #e1ff75, #85730e);\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Form ]*/\r\n\r\n.login100-form {\r\n    width: 100%;\r\n  }\r\n\r\n.login100-form-logo {\r\n    font-size: 60px; \r\n    color: #333333;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.login100-form-title {\r\n    font-family: Poppins-Medium;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  \r\n    display: block;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Input ]*/\r\n\r\n.wrap-input100 {\r\n    width: 100%;\r\n    position: relative;\r\n    border-bottom: 2px solid rgba(255,255,255,0.24);\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n.input100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n    background: transparent;\r\n    padding: 0 5px 0 38px;\r\n  }\r\n\r\n/*---------------------------------------------*/\r\n\r\n.focus-input100 {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n  }\r\n\r\n.focus-input100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    bottom: -2px;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  \r\n    background: #fff;\r\n  }\r\n\r\n.focus-input100::after {\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 22px;\r\n    color: #fff;\r\n  \r\n    content: attr(data-placeholder);\r\n    display: block;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 0px;\r\n    padding-left: 5px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.input100:focus {\r\n    padding-left: 5px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 {\r\n    padding-left: 5px;\r\n  }\r\n\r\n/*==================================================================\r\n[ Restyle Checkbox ]*/\r\n\r\n.contact100-form-checkbox {\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n.input-checkbox100 {\r\n    display: none;\r\n  }\r\n\r\n.label-checkbox100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 13px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    position: relative;\r\n    padding-left: 26px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.label-checkbox100::before {\r\n    content: \"\\F26B\";\r\n    font-family: Material-Design-Font;\r\n    font-size: 13px;\r\n    color: transparent;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    left: 0;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n  }\r\n\r\n.input-checkbox100:checked + .label-checkbox100::before {\r\n    color: #555555;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Button ]*/\r\n\r\n.container-login100-form-btn {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n.login100-form-btn {\r\n    font-family: Poppins-Medium;\r\n    font-size: 16px;\r\n    color: #555555;\r\n    line-height: 1.2;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 20px;\r\n    min-width: 120px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n  \r\n    background: #9152f8;\r\n    background: -webkit-gradient(linear,  left bottom, left top,  from(#e1ff75), to(#85730e));\r\n    background: linear-gradient(bottom,  #e1ff75, #85730e);\r\n    position: relative;\r\n    z-index: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 25px;\r\n    background-color: #fff;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn:hover {\r\n    color: #fff;\r\n  }\r\n\r\n.login100-form-btn:hover:before {\r\n    opacity: 0;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n    .wrap-login100 {\r\n      padding: 55px 15px 37px 15px;\r\n    }\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n\r\n.validate-input {\r\n    position: relative;\r\n  }\r\n\r\n.alert-validate::before {\r\n    content: attr(data-validate);\r\n    position: absolute;\r\n    max-width: 70%;\r\n    background-color: #fff;\r\n    border: 1px solid #c80000;\r\n    border-radius: 2px;\r\n    padding: 4px 25px 4px 10px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 0px;\r\n    pointer-events: none;\r\n  \r\n    font-family: Poppins-Regular;\r\n    color: #c80000;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    text-align: left;\r\n  \r\n    visibility: hidden;\r\n    opacity: 0;\r\n  \r\n    -webkit-transition: opacity 0.4s;\r\n    transition: opacity 0.4s;\r\n  }\r\n\r\n.alert-validate::after {\r\n    content: \"\\F12A\";\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    color: #c80000;\r\n  \r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 5px;\r\n  }\r\n\r\n.alert-validate:hover:before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n@media (max-width: 992px) {\r\n    .alert-validate::before {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n  <div class=\"container-login100\" style=\"background-image: url('assets/cover.jpg');\">\n    <div class=\"wrap-login100\">\n      <form name=\"form\" (ngSubmit)=\"login()\" class=\"login100-form validate-form\">\n        <span class=\"login100-form-logo\">\n          <i class=\"fa fa-expeditedssl\" aria-hidden=\"true\"></i>\n        </span>\n        <br>\n        <span class=\"login100-form-title p-b-34 p-t-27\">\n          Log in\n        </span>\n\n        <div class=\"wrap-input100 validate-input\" data-validate = \"Enter username\">\n          <input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"Username\">\n          <span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass\" placeholder=\"Password\">\n          <span class=\"focus-input100\" data-placeholder=\"&#xf191;\"></span>\n        </div>\n\n        <div class=\"contact100-form-checkbox\">\n        </div>\n\n        <div class=\"container-login100-form-btn\">\n          <button type=\"submit\" class=\"login100-form-btn\">\n            Login\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastr, vcr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        localStorage.removeItem('token');
        this.auth.login(this.user.username, this.user.password)
            .then(function (res) { return _this.router.navigate(['/home']); })
            .catch(function (res) { return _this.toastr.error('Invalid username/password.'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logs/logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"logo\">\n  <br>\n<h1 class=\"logo\">\n  Bezbednost\n</h1>\n<ul>\n    <li><a href=\"/#/logs\" class=\"menu\">Logs</a></li>\n    <li><a href=\"/#/alarms\" class=\"menu\">Alarms</a></li>\n    <li><a href=\"/#/alarms/control\" class=\"menu\">Alarms Control</a></li>\n    <li><a href=\"/#/password\" class=\"menu\">Change password</a></li>\n    <li><a (click)=\"logout()\" class=\"menu\">Log out</a></li>\n\n    \n  </ul>\n\n\n</div>\n<br>\n<div class=\"container\"> \n  <div class=\"container-4\">\n      <input type=\"search\" id=\"update\" [(ngModel)]=\"search_text\"  name=\"search\" placeholder=\"Search\" (keydown.enter)=\"onKeydown($event)\" >\n  </div>          \n  <br>                                                                 \n  <div class=\"table-responsive\">          \n  <table class=\"table table-striped\" infiniteScroll\n  [infiniteScrollDistance]=\"2\"\n  [infiniteScrollThrottle]=\"100\"\n  (scrolled)=\"onScroll()\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Priority value</th>\n        <th>Version</th>\n        <th>Timestamp</th>\n        <th>Hostname</th>\n        <th>Appname</th>\n        <th>Procid</th>\n        <th>Message id</th>\n        <th>Structured data</th>\n        <th>Message</th>\n      </tr>\n    </thead>\n    <tbody  *ngFor=\"let log of logs; let i = index\">\n      <tr>\n        <td>{{i + 1}}</td>\n        <td>{{log.prival}}</td>\n        <td>{{log.version}}</td>\n        <td>{{log.timestamp}}</td>\n        <td>{{log.hostname}}</td>\n        <td>{{log.appname}}</td>\n        <td>{{log.procid}}</td>\n        <td>{{log.msgid}}</td>\n        <td>{{log.sd}}</td>\n        <td>{{log.msg}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logs_service__ = __webpack_require__("../../../../../src/app/logs/logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogsComponent = /** @class */ (function () {
    function LogsComponent(logsService, auth) {
        this.logsService = logsService;
        this.auth = auth;
        this.logs = [];
        this.page = 0;
        this.search_text = "";
        this.search_mod = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        this.getLogs();
    };
    LogsComponent.prototype.logout = function () {
        this.auth.logout();
    };
    LogsComponent.prototype.onScroll = function () {
        if (!this.search_mod) {
            this.page = this.page + 1;
            this.getLogs();
        }
    };
    LogsComponent.prototype.getLogs = function () {
        var _this = this;
        this.logsService.getLogs(this.page).then(function (logs) {
            for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
                var log = logs_1[_i];
                _this.logs.push(log);
            }
        });
    };
    LogsComponent.prototype.onKeydown = function (event) {
        var _this = this;
        if (this.search_text == "") {
            this.page = 0;
            this.search_mod = false;
            this.logs = [];
            this.getLogs();
        }
        else {
            this.page = 0;
            console.log(this.search_text);
            this.search_mod = true;
            this.logsService.search(this.search_text).then(function (res) { return _this.logs = res; });
        }
    };
    LogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__("../../../../../src/app/logs/logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logs/logs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__logs_service__["a" /* LogsService */], __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logs/logs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogsService = /** @class */ (function () {
    function LogsService(http) {
        this.http = http;
        this.url = '/api/logs';
        this.RegenerateData = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Subject */]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    LogsService.prototype.announceChange = function () {
        this.RegenerateData.next();
    };
    LogsService.prototype.getLogs = function (page, size) {
        if (size === void 0) { size = 20; }
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('page', page.toString()).set('size', size.toString()).set('sort', 'id,desc');
        return this.http
            .get(this.url, { params: httpParams })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    LogsService.prototype.search = function (text) {
        return this.http
            .post(this.url, text)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    LogsService.prototype.handleError = function (error) {
        console.error("Error... ", error);
        return Promise.reject(error.message || error);
    };
    LogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LogsService);
    return LogsService;
}());



/***/ }),

/***/ "../../../../../src/app/new-alarm/new-alarm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-alarm/new-alarm.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\" class=\"logo\">\n  <br>\n<h1 class=\"logo\">\n  Bezbednost\n</h1>\n<ul>\n    <li><a href=\"/#/logs\" class=\"menu\">Logs</a></li>\n    <li><a href=\"/#/alarms\" class=\"menu\">Alarms</a></li>\n    <li><a href=\"/#/alarms/control\" class=\"menu\">Alarms Control</a></li>\n    <li><a href=\"/#/password\" class=\"menu\">Change password</a></li>\n    <li><a (click)=\"logout()\" class=\"menu\">Log out</a></li>\n\n    \n  </ul>\n\n\n</div>\n<br>\n<div class=\"container\">\n  <h2>New alarm</h2>\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"name\">Name*:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"name\"  required minlength=\"4\" placeholder=\"Enter name\" name=\"name\" [(ngModel)]=\"newAlarm.name\">\n\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"desc\">Description*:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"desc\" placeholder=\"Enter description\" name=\"desc\" [(ngModel)]=\"newAlarm.description\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"vers\">Number*:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"number\" class=\"form-control\" id=\"vers\" name=\"vers\" [(ngModel)]=\"newAlarm.number\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"prival\">Seconds*:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"number\" class=\"form-control\" id=\"prival\"  name=\"prival\" [(ngModel)]=\"newAlarm.seconds\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"vers\">Version:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"number\" class=\"form-control\" id=\"vers\" name=\"vers\" [(ngModel)]=\"newAlarm.version\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"prival\">Prival:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"number\" class=\"form-control\" id=\"prival\"  name=\"prival\" [(ngModel)]=\"newAlarm.prival\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"timestamp\">Timestamp:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"timestamp\" name=\"timestamp\" [(ngModel)]=\"newAlarm.timestamp\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"hostname\">Hostname:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"hostname\" name=\"hostname\" [(ngModel)]=\"newAlarm.hostname\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"appname\">Appname:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"appname\" name=\"appname\" [(ngModel)]=\"newAlarm.appname\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"procid\">Procid:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"procid\" name=\"procid\" [(ngModel)]=\"newAlarm.procid\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"msgid\">Msgid:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"msgid\"  name=\"msgid\" [(ngModel)]=\"newAlarm.msgid\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"sd\">Stuctured data:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"sd\" name=\"sd\" [(ngModel)]=\"newAlarm.sd\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"msg\">Mesasge:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"text\" class=\"form-control\" id=\"msg\" name=\"msg\" [(ngModel)]=\"newAlarm.msg\">\n      </div>\n    </div>\n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button  class=\"btn btn-default\" (click)=\"newAlarmClick()\">Submit</button>\n        <button  class=\"btn btn-default\" (click)=\"back()\">Back</button>\n      </div>\n    </div>\n    \n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-alarm/new-alarm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAlarmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alarms_alarms_service__ = __webpack_require__("../../../../../src/app/alarms/alarms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAlarmComponent = /** @class */ (function () {
    function NewAlarmComponent(alarmService, auth, router) {
        this.alarmService = alarmService;
        this.auth = auth;
        this.router = router;
        this.newAlarm = {
            appname: '',
            description: '',
            hostname: '',
            id: 0,
            logs: [],
            msg: '',
            msgid: '',
            name: '',
            prival: 0,
            procid: '',
            sd: '',
            timestamp: '',
            version: 0,
            number: 0,
            seconds: 0,
            canDelete: true
        };
    }
    NewAlarmComponent.prototype.back = function () {
        this.router.navigate(['/alarms']);
    };
    NewAlarmComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NewAlarmComponent.prototype.ngOnInit = function () {
    };
    NewAlarmComponent.prototype.newAlarmClick = function () {
        var _this = this;
        if (this.newAlarm.name == '') {
            console.log("name");
        }
        else if (this.newAlarm.description == '') {
            console.log("desc");
        }
        else if (this.newAlarm.number < 1) {
            console.log("num");
        }
        else if (this.newAlarm.seconds < 1) {
            console.log("sec");
        }
        else {
            console.log("newAlarmClick");
            console.log(this.newAlarm);
            this.alarmService.createAlarm(this.newAlarm).then(function (res) { return _this.router.navigate(['/alarms', 'control']); }).catch(function (err) { return _this.router.navigate(['/alarms', 'control']); });
        }
    };
    NewAlarmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-alarm',
            template: __webpack_require__("../../../../../src/app/new-alarm/new-alarm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-alarm/new-alarm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__alarms_alarms_service__["a" /* AlarmsService */], __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewAlarmComponent);
    return NewAlarmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        if (localStorage.getItem('token') != null) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + localStorage.getItem('token')
                }
            });
        }
        else {
            request = request.clone({});
        }
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/assets/Poppins-Bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Bold.7940efc40d8e3b477e16.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-Medium.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Medium.a4e11dda40531debd374.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Regular.731a28a413d642522667.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-SemiBold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-SemiBold.e63b93dfac2600782654.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
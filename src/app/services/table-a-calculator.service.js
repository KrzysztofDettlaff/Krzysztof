"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TableACalculatorService = (function () {
    function TableACalculatorService() {
    }
    TableACalculatorService.prototype.getMaxRate = function (rates) {
        return rates.reduce(function (p, n) { return p.mid > n.mid ? p : n; });
    };
    TableACalculatorService.prototype.getMinRate = function (rates) {
        return rates.reduce(function (p, n) { return p.mid < n.mid ? p : n; });
    };
    return TableACalculatorService;
}());
TableACalculatorService = __decorate([
    core_1.Injectable()
], TableACalculatorService);
exports.TableACalculatorService = TableACalculatorService;
//# sourceMappingURL=table-a-calculator.service.js.map
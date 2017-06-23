"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var table_a_service_service_1 = require("./services/table-a-service.service");
var rate_1 = require("./model/rate");
var TableAComponent = (function () {
    function TableAComponent(tableAService) {
        this.tableAService = tableAService;
        this.theBiggestCurrency = new rate_1.Rate('a', 'a', 0);
        this.rates = [];
        this.theSmallestCurrency = new rate_1.Rate('a', 'a', 0);
    }
    TableAComponent.prototype.ngOnInit = function () {
        this.getBiggestCurrency();
        this.getRateList();
        this.getSmallestCurrency();
    };
    TableAComponent.prototype.getBiggestCurrency = function () {
        var _this = this;
        this.tableAService.getCurrencyWithTheHighestCurrentRate().subscribe(function (goldPrice) {
            return _this.updateBiggestCurrency(goldPrice);
        });
    };
    TableAComponent.prototype.getSmallestCurrency = function () {
        var _this = this;
        this.tableAService.getCurrencyWithTheLowestCurrentRate().subscribe(function (goldPrice) {
            return _this.updateSmallestCurrency(goldPrice);
        });
    };
    TableAComponent.prototype.getRateList = function () {
        var _this = this;
        this.tableAService.getCurrencyList().subscribe(function (rates) {
            return _this.updateRateList(rates);
        });
    };
    TableAComponent.prototype.updateBiggestCurrency = function (goldPrice) {
        this.theBiggestCurrency = goldPrice;
    };
    TableAComponent.prototype.updateSmallestCurrency = function (goldPrice) {
        this.theSmallestCurrency = goldPrice;
    };
    TableAComponent.prototype.updateRateList = function (rates) {
        this.rates = rates;
    };
    return TableAComponent;
}());
TableAComponent = __decorate([
    core_1.Component({
        selector: 'table-a-exchange-rates',
        templateUrl: './table-a.component.html',
        styleUrls: ['./table-a.component.css']
    }),
    __metadata("design:paramtypes", [table_a_service_service_1.TableAService])
], TableAComponent);
exports.TableAComponent = TableAComponent;
//# sourceMappingURL=table-a.component.js.map
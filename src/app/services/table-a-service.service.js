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
var table_a_http_client_service_1 = require("./table-a-http-client.service");
var table_a_calculator_service_1 = require("./table-a-calculator.service");
var TableAService = (function () {
    function TableAService(tableAHttpClientService, tableACalculatorService) {
        this.tableAHttpClientService = tableAHttpClientService;
        this.tableACalculatorService = tableACalculatorService;
    }
    TableAService.prototype.getCurrencyWithTheHighestCurrentRate = function () {
        var _this = this;
        return this.tableAHttpClientService.getRateList().map(function (rates) { return _this.tableACalculatorService.getMaxRate(rates); });
    };
    TableAService.prototype.getCurrencyWithTheLowestCurrentRate = function () {
        var _this = this;
        return this.tableAHttpClientService.getRateList().map(function (rates) { return _this.tableACalculatorService.getMinRate(rates); });
    };
    TableAService.prototype.getCurrencyList = function () {
        return this.tableAHttpClientService.getRateList();
    };
    return TableAService;
}());
TableAService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [table_a_http_client_service_1.TableAHttpClientService, table_a_calculator_service_1.TableACalculatorService])
], TableAService);
exports.TableAService = TableAService;
//# sourceMappingURL=table-a-service.service.js.map
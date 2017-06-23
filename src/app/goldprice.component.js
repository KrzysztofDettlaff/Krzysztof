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
var gold_price_service_service_1 = require("./services/gold-price-service.service");
var date_transformator_service_1 = require("./services/date-transformator.service");
var GoldPriceComponent = (function () {
    function GoldPriceComponent(goldPriceService, dateTransformatorService) {
        this.goldPriceService = goldPriceService;
        this.dateTransformatorService = dateTransformatorService;
    }
    GoldPriceComponent.prototype.ngOnInit = function () {
        this.date = this.dateTransformatorService.toString(new Date());
        this.getTodayGoldPrice();
        this.getGoldPriceByDate(this.date);
    };
    GoldPriceComponent.prototype.getGoldPriceByDate = function (date) {
        var _this = this;
        this.goldPriceService.getGoldPriceByDate(date).subscribe(function (goldPrice) {
            return _this.updatePriceByDate(goldPrice);
        });
    };
    GoldPriceComponent.prototype.getTodayGoldPrice = function () {
        var _this = this;
        this.goldPriceService.getTodayGoldPrice()
            .subscribe(function (goldPrice) {
            return _this.updateTodayPrice(goldPrice);
        });
    };
    GoldPriceComponent.prototype.updateTodayPrice = function (goldPrice) {
        this.goldPriceToday = goldPrice;
    };
    GoldPriceComponent.prototype.updatePriceByDate = function (goldPrice) {
        this.goldPriceByDay = goldPrice;
    };
    GoldPriceComponent.prototype.valueChangeDate = function () {
        this.getGoldPriceByDate(this.date);
    };
    return GoldPriceComponent;
}());
GoldPriceComponent = __decorate([
    core_1.Component({
        selector: 'goldprice',
        templateUrl: './goldprice.component.html',
        styleUrls: ['./goldprice.component.css']
    }),
    __metadata("design:paramtypes", [gold_price_service_service_1.GoldPriceService, date_transformator_service_1.DateTransformatorService])
], GoldPriceComponent);
exports.GoldPriceComponent = GoldPriceComponent;
//# sourceMappingURL=goldprice.component.js.map
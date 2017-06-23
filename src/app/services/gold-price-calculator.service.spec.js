"use strict";
var testing_1 = require("@angular/core/testing");
require("rxjs/add/operator/toPromise");
var gold_price_1 = require("../model/gold-price");
var gold_price_calculator_service_1 = require("./gold-price-calculator.service");
describe('Gold price calulator spec', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [gold_price_calculator_service_1.GoldPriceCalculator]
        });
    });
    it('should extract numer from array of GoldPrice', testing_1.inject([gold_price_calculator_service_1.GoldPriceCalculator], function (testObj) {
        /*given*/
        var goldPrices = [new gold_price_1.GoldPrice('01', 1)];
        /*when*/
        var result = testObj.extractPrice(goldPrices);
        /*then*/
        expect(result).toEqual(1);
    }));
});
//# sourceMappingURL=gold-price-calculator.service.spec.js.map
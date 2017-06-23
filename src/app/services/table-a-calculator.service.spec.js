"use strict";
var testing_1 = require("@angular/core/testing");
require("rxjs/add/operator/toPromise");
var table_a_calculator_service_1 = require("./table-a-calculator.service");
var rate_1 = require("../model/rate");
describe('Tacle A price calulator spec', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [table_a_calculator_service_1.TableACalculatorService]
        });
    });
    it('should extract the biggest rate', testing_1.inject([table_a_calculator_service_1.TableACalculatorService], function (testObj) {
        /*given*/
        var rates = [new rate_1.Rate('A', 'AA', 1), new rate_1.Rate('B', 'B', 2), new rate_1.Rate('C', 'CC', 3)];
        /*when*/
        var result = testObj.getMaxRate(rates);
        /*then*/
        expect(result.mid).toEqual(3);
        expect(result.currency).toEqual('C');
        expect(result.code).toEqual('CC');
    }));
    it('should extract the smallest rate', testing_1.inject([table_a_calculator_service_1.TableACalculatorService], function (testObj) {
        /*given*/
        var rates = [new rate_1.Rate('A', 'AA', 1), new rate_1.Rate('B', 'B', 2), new rate_1.Rate('C', 'CC', 3)];
        /*when*/
        var result = testObj.getMinRate(rates);
        /*then*/
        expect(result.mid).toEqual(1);
        expect(result.currency).toEqual('A');
        expect(result.code).toEqual('AA');
    }));
});
//# sourceMappingURL=table-a-calculator.service.spec.js.map
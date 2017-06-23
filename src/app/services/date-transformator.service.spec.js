"use strict";
var testing_1 = require("@angular/core/testing");
var date_transformator_service_1 = require("./date-transformator.service");
describe('Gold price calulator spec', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [date_transformator_service_1.DateTransformatorService]
        });
    });
    it('convert date to string', testing_1.inject([date_transformator_service_1.DateTransformatorService], function (testObj) {
        /*given*/
        var date = new Date(Date.UTC(2017, 4, 18));
        /*when*/
        var result = testObj.toString(date);
        /*then*/
        expect(result).toEqual('2017-05-18');
    }));
});
//# sourceMappingURL=date-transformator.service.spec.js.map
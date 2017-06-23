"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
require("rxjs/add/operator/toPromise");
var gold_price_http_client_service_1 = require("./gold-price-http-client.service");
var gold_price_1 = require("../model/gold-price");
var gold_price_service_service_1 = require("./gold-price-service.service");
var gold_price_calculator_service_1 = require("./gold-price-calculator.service");
var date_transformator_service_1 = require("./date-transformator.service");
describe('Gold price service integration test', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                gold_price_service_service_1.GoldPriceService,
                gold_price_http_client_service_1.GoldPriceHttpClient,
                gold_price_calculator_service_1.GoldPriceCalculator,
                date_transformator_service_1.DateTransformatorService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    useFactory: function (backend, options) { return new http_1.Http(backend, options); },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                }
            ],
            imports: [
                http_1.HttpModule
            ]
        });
    });
    it('should return price gold for today as number', testing_1.async(testing_1.inject([gold_price_service_service_1.GoldPriceService, testing_2.MockBackend], function (service, mockBackend) {
        /*given*/
        mockBackend.connections.subscribe(function (connection) {
            var goldPrice = [new gold_price_1.GoldPrice('2017-05-11', 2.30)];
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(goldPrice) })));
        });
        /*when*/
        var result = service.getTodayGoldPrice();
        /*then*/
        result.subscribe(function (res) { return expect(res).toEqual(2.30); }, function (error) { return fail(); });
    })));
    it('should return price for given date as number', testing_1.async(testing_1.inject([gold_price_service_service_1.GoldPriceService, testing_2.MockBackend], function (service, mockBackend) {
        /*given*/
        mockBackend.connections.subscribe(function (connection) {
            var goldPrice = [new gold_price_1.GoldPrice('2017-04-11', 2.40)];
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(goldPrice) })));
        });
        /*when*/
        var result = service.getGoldPriceByDate('2017-04-11');
        /*then*/
        result.subscribe(function (res) { return expect(res).toEqual(2.40); }, function (error) { return fail(); });
    })));
});
//# sourceMappingURL=gold-price-service.service.integration.spec.js.map
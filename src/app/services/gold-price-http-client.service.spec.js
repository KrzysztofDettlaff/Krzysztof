"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
require("rxjs/add/operator/toPromise");
var gold_price_http_client_service_1 = require("./gold-price-http-client.service");
var gold_price_1 = require("../model/gold-price");
var date_transformator_service_1 = require("./date-transformator.service");
describe('Gold price http client spec', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                gold_price_http_client_service_1.GoldPriceHttpClient,
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
    it('should return price of gold with date', testing_1.async(testing_1.inject([gold_price_http_client_service_1.GoldPriceHttpClient, testing_2.MockBackend], function (testObj, mockBackend) {
        /*given*/
        mockBackend.connections.subscribe(function (connection) {
            var goldPrice = [new gold_price_1.GoldPrice('2017-05-11', 1.30)];
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(goldPrice) })));
        });
        /*when*/
        var result = testObj.getGoldPrice();
        /*then*/
        result.subscribe(function (res) {
            expect(res.length).toEqual(1);
            expect(res[0].cena).toEqual(1.30);
            expect(res[0].data).toEqual('2017-05-11');
        }, function (error) { return fail(); });
    })));
    it('url should and request getGoldPrice method should be correct', testing_1.async(testing_1.inject([gold_price_http_client_service_1.GoldPriceHttpClient, testing_2.MockBackend], function (testObj, mockBackend) {
        /*given*/
        var lastConnection;
        mockBackend.connections.subscribe(function (connection) { return lastConnection = connection; });
        /*when*/
        testObj.getGoldPrice();
        /*then*/
        expect(lastConnection).toBeDefined();
        expect(lastConnection.request.url).toEqual('http://api.nbp.pl/api/cenyzlota?format=json');
        expect(lastConnection.request.method).toEqual(http_1.RequestMethod.Get);
    })));
    it('url should and request for getGoldPriceByDate method should be correct', testing_1.async(testing_1.inject([gold_price_http_client_service_1.GoldPriceHttpClient, testing_2.MockBackend], function (testObj, mockBackend) {
        /*given*/
        var lastConnection;
        mockBackend.connections.subscribe(function (connection) { return lastConnection = connection; });
        /*when*/
        testObj.getGoldPriceByDate('2014-03-04');
        /*then*/
        expect(lastConnection).toBeDefined();
        expect(lastConnection.request.url).toEqual('http://api.nbp.pl/api/cenyzlota/2014-03-04?format=json');
        expect(lastConnection.request.method).toEqual(http_1.RequestMethod.Get);
    })));
});
//# sourceMappingURL=gold-price-http-client.service.spec.js.map
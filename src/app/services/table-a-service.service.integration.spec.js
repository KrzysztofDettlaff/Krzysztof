"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
require("rxjs/add/operator/toPromise");
var table_a_calculator_service_1 = require("./table-a-calculator.service");
var table_a_http_client_service_1 = require("./table-a-http-client.service");
var table_a_service_service_1 = require("./table-a-service.service");
var rate_1 = require("../model/rate");
describe('Table A service integration test', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                table_a_calculator_service_1.TableACalculatorService,
                table_a_http_client_service_1.TableAHttpClientService,
                table_a_service_service_1.TableAService,
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
    it('should return the currency with the biggest price', testing_1.async(testing_1.inject([table_a_service_service_1.TableAService, testing_2.MockBackend], function (service, mockBackend) {
        /*given*/
        mockBackend.connections.subscribe(function (connection) {
            var goldPrice = [
                { table: 'B',
                    no: '022/B/NBP/2017',
                    effectiveDate: '2017-05-31',
                    rates: [new rate_1.Rate('A', 'AA', 2.30), new rate_1.Rate('B', 'BB', 1.30), new rate_1.Rate('CC', 'CC', 0.10)]
                }
            ];
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(goldPrice) })));
        });
        /*when*/
        var result = service.getCurrencyWithTheHighestCurrentRate();
        /*then*/
        result.subscribe(function (res) { return expect(res.mid).toEqual(2.30); }, function (error) { return fail(); });
    })));
    it('should return the currency with the lowest price', testing_1.async(testing_1.inject([table_a_service_service_1.TableAService, testing_2.MockBackend], function (service, mockBackend) {
        /*given*/
        mockBackend.connections.subscribe(function (connection) {
            var goldPrice = [
                { table: 'B',
                    no: '022/B/NBP/2017',
                    effectiveDate: '2017-05-31',
                    rates: [new rate_1.Rate('A', 'AA', 2.30), new rate_1.Rate('B', 'BB', 1.30), new rate_1.Rate('CC', 'CC', 0.10)]
                }
            ];
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(goldPrice) })));
        });
        /*when*/
        var result = service.getCurrencyWithTheLowestCurrentRate();
        /*then*/
        result.subscribe(function (res) { return expect(res.mid).toEqual(0.10); }, function (error) { return fail(); });
    })));
    it('should return currency list', testing_1.async(testing_1.inject([table_a_service_service_1.TableAService, testing_2.MockBackend], function (service, mockBackend) {
        /*given*/
        mockBackend.connections.subscribe(function (connection) {
            var goldPrice = [
                { table: 'B',
                    no: '022/B/NBP/2017',
                    effectiveDate: '2017-05-31',
                    rates: [new rate_1.Rate('A', 'AA', 2.30), new rate_1.Rate('B', 'BB', 1.30), new rate_1.Rate('CC', 'CC', 0.10)]
                }
            ];
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(goldPrice) })));
        });
        /*when*/
        var result = service.getCurrencyList();
        /*then*/
        result.subscribe(function (res) { return expect(res.length).toEqual(3); }, function (error) { return fail(); });
    })));
});
//# sourceMappingURL=table-a-service.service.integration.spec.js.map
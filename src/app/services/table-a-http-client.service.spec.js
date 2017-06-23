"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
require("rxjs/add/operator/toPromise");
var date_transformator_service_1 = require("./date-transformator.service");
var table_a_http_client_service_1 = require("./table-a-http-client.service");
var rate_1 = require("../model/rate");
describe('Table A http client spec', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                table_a_http_client_service_1.TableAHttpClientService,
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
    it('should return the biggest currency', testing_1.async(testing_1.inject([table_a_http_client_service_1.TableAHttpClientService, testing_2.MockBackend], function (testObj, mockBackend) {
        /*given*/
        mockBackend.connections.subscribe(function (connection) {
            var tableA = [
                { table: 'B',
                    no: '022/B/NBP/2017',
                    effectiveDate: '2017-05-31',
                    rates: [new rate_1.Rate('A', 'AA', 2.30), new rate_1.Rate('B', 'BB', 1.30), new rate_1.Rate('CC', 'CC', 0.10)]
                }
            ];
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(tableA) })));
        });
        /*when*/
        var result = testObj.getRateList();
        /*then*/
        result.subscribe(function (res) {
            expect(res.length).toEqual(3);
        }, function (error) { return fail(); });
    })));
    it('url should and request getRateList method should be correct', testing_1.async(testing_1.inject([table_a_http_client_service_1.TableAHttpClientService, testing_2.MockBackend], function (testObj, mockBackend) {
        /*given*/
        var lastConnection;
        mockBackend.connections.subscribe(function (connection) { return lastConnection = connection; });
        /*when*/
        testObj.getRateList();
        /*then*/
        expect(lastConnection).toBeDefined();
        expect(lastConnection.request.url).toEqual('http://api.nbp.pl/api/exchangerates/tables/a?format=json');
        expect(lastConnection.request.method).toEqual(http_1.RequestMethod.Get);
    })));
});
//# sourceMappingURL=table-a-http-client.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const insurance_api_service_1 = require("./insurance-api.service");
describe('InsuranceAPIService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(insurance_api_service_1.InsuranceAPIService);
        expect(service).toBeTruthy();
    });
});

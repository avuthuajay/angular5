"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ContentComponent = class ContentComponent {
    constructor() {
        this.popularPolicyList = [{ policyName: 'Policy 1', description: 'Policy one' },
            { policyName: 'Policy 2', description: 'Policy two' },
            { policyName: 'Policy 3', description: 'Policy three' }];
    }
    ngOnInit() {
    }
};
ContentComponent = __decorate([
    core_1.Component({
        selector: 'app-content',
        templateUrl: './content.component.html',
        styleUrls: ['./content.component.css']
    })
], ContentComponent);
exports.ContentComponent = ContentComponent;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const xatakaHome_1 = require("../../pages/examples/xatakaHome");
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
var EC = protractor_1.browser.ExpectedConditions;
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
cucumber_1.defineSupportCode(function ({ When, Then }) {
    let home = new xatakaHome_1.XatakaPageObject();
    When(/^I click on Xataka SubWeb with href "(.*?)"$/, (href) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.elementToBeClickable(home.subWebHeaderButton(href)));
        yield home.subWebHeaderButton(href).click();
    }));
    Then(/^the website title must be "(.*?)"$/, (text) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(text);
    }));
});

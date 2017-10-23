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
    When(/^I click on Xataka Search button$/, () => __awaiter(this, void 0, void 0, function* () {
        yield home.openSearchButton.click();
    }));
    Then(/^I type "(.*?)" at search input$/, (text) => __awaiter(this, void 0, void 0, function* () {
        yield home.searchInput.sendKeys(text);
    }));
    Then(/^I confirm the search$/, () => __awaiter(this, void 0, void 0, function* () {
        yield home.searchConfirmationButton.click();
    }));
    Then(/^the search count has to appears$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(home.searchResultCountText.isDisplayed()).to.eventually.equal(true);
    }));
});

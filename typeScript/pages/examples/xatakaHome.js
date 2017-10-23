"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class XatakaPageObject {
    constructor() {
        this.openSearchButton = protractor_1.$("a[href='#search']");
        this.searchInput = protractor_1.$("input[id='search-field-2']");
        this.searchConfirmationButton = protractor_1.$("button[data-field='#search-field-2']");
        this.searchResultCountText = protractor_1.$("h3[class='search-results-count']");
    }
    subWebHeaderButton(href) {
        return protractor_1.$("a[href='" + href + "']");
    }
}
exports.XatakaPageObject = XatakaPageObject;

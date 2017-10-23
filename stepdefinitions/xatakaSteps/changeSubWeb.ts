import { XatakaPageObject } from '../../pages/examples/xatakaHome';
import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
var EC = browser.ExpectedConditions;

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ When, Then }) {
    let home: XatakaPageObject = new XatakaPageObject();

    When(/^I click on Xataka SubWeb with href "(.*?)"$/, async (href) => {
        await browser.wait(EC.elementToBeClickable(home.subWebHeaderButton(<string>href)));
        await home.subWebHeaderButton(<string>href).click();
    });

    Then(/^the website title must be "(.*?)"$/, async (text) => {
        await expect(browser.getTitle()).to.eventually.equal(text);
    });

})
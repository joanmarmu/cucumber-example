import { browser } from 'protractor';
import { XatakaPageObject } from '../../pages/examples/xatakaHome';
import { defineSupportCode } from 'cucumber';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given }) {
    let home: XatakaPageObject = new XatakaPageObject();

    Given(/^Estoy en la web de Xataka$/, async () => {
        await browser.get("https://www.xataka.com/");
        await expect(browser.getTitle()).to.eventually.equal('Xataka - Tecnología y gadgets, móviles, informática, electrónica');
    });

})
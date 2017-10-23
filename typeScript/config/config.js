"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'https://www.xataka.com/',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../../features/xatakaPruebas.1.feature',
        '../../features/xatakaPruebas.2.feature',
        '../../features/xatakaPruebas.3.feature'
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(40000);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../../stepdefinitions/*.ts', '../../support/*.ts', '../../stepdefinitions/*/*.ts'],
    }
};

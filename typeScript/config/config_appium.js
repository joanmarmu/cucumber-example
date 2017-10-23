"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: '',
    capabilities: {
        platformName: '',
        platformVersion: '',
        deviceName: '',
        browserName: '',
        autoWebview: true,
        clearSystemFiles: true,
        app: '',
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        ''
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().timeouts().implicitlyWait(40000);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../../stepdefinitions/*.ts', '../../support/*.ts', '../../stepdefinitions/*/*.ts'],
    }
};

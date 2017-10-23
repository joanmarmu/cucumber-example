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
const Cucumber = require('cucumber');
const protractor_1 = require("protractor");
const fs = require("fs");
const cucumber_1 = require("cucumber");
const reporter = require("cucumber-html-reporter");
const mkdirp_1 = require("mkdirp");
cucumber_1.defineSupportCode(function ({ registerHandler, registerListener, After, setDefaultTimeout }) {
    setDefaultTimeout(40 * 1000);
    let jsonReports = process.cwd() + "/reports/json";
    let htmlReports = process.cwd() + "/reports/html";
    let targetJson = jsonReports + "/cucumber_report.json";
    registerHandler('BeforeFeature', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //await browser.get(config.baseUrl);
        });
    });
    After(function (scenarioResult) {
        return __awaiter(this, void 0, void 0, function* () {
            let world = this;
            if (scenarioResult.isFailed()) {
                let screenShot = yield protractor_1.browser.takeScreenshot();
                // screenShot is a base-64 encoded PNG
                world.attach(screenShot, 'image/png');
            }
        });
    });
    let cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: targetJson,
        output: htmlReports + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true
    };
    let logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            mkdirp_1.mkdirp.sync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                console.log(`Failed to save cucumber test results to json file. 
                             Failed to create html report.
                             `);
                console.log(err);
            }
        }
    };
    let jsonformatter = new Cucumber.JsonFormatter({
        log: logFn
    });
    registerListener(jsonformatter);
});

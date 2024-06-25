export const config = {
    user: 'sua chave do browserstack',
    key: 'sua senha do browserstack',
    hostname: 'hub.browserstack.com',
    specs: [
        './test/specs/**/**.e2e.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        'bstack:options': {
            deviceName: 'Samsung Galaxy S22 Ultra',
            buildName: 'browserstack build',
            platformVersion: '12.0',
            platformName: 'android'
        }
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['browserstack', {
            app: 'url do apk upado no browserstack',
            testObservability: false,
            testObservabilityOptions: {
                user: '',
                key: ''
            },
            browserstackLocal: false
        }]
    ],
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'report/android/bs/',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.saveScreenshot(`./report/android/bs/${test.title}${new Date().getTime()}.png`)
    },
}

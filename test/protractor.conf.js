exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'e2e/*.js'
  ],
  baseUrl: 'http://localhost/vknewsapp.ru/app/',
  multiCapabilities: [{
    browserName: 'firefox',
  },
    {
      'browserName': 'chrome',
      'chromeOptions': {
        'binary': 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
      }
    }],
  jasmineNodeOpts : {
    // If true, print colors to the terminal.
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 15000,

  },

  allScriptsTimeout: 15000,
  getPageTimeout: 15000,
}

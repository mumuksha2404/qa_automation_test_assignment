// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: './globals.js',

  webdriver: {
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515,
  },

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://127.0.0.1',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions' : {
          args: ['--headless', '--no-sandbox', '--incognito']
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
        acceptInsecureCerts: true
      },

      // webdriver: {
      //   // start_process: true,
      //   server_path: 'node_modules/.bin/chromedriver',
      //   port: 9515,
      //   // cli_args: [
      //   //   // '--no-sandbox',
      //   //   // '--incognito',
      //   //   // '--disable-dev-shm-usage',
      //   //   // '--headless',
      //   //   // '--remote-debugging-port=9222',
      //   // ]
      // }

    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    // chrome: {
    //   desiredCapabilities: {
    //     browserName: 'chrome',
    //     'goog:chromeOptions': {
    //       // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
    //       //
    //       // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
    //       w3c: true,
    //       args: [
    //         '--no-sandbox',
    //         '--disable-dev-shm-usage',
    //         // '--ignore-certificate-errors',
    //         // '--allow-insecure-localhost',
    //         '--headless',
    //         '--remote-debugging-port=9222',
    //       ]
    //     }
    //   },

    //   webdriver: {
    //     start_process: true,
    //     server_path: '',
    //     cli_args: [
    //       '--no-sandbox',
    //       '--disable-dev-shm-usage',
    //       '--headless',
    //       '--remote-debugging-port=9222',
    //     ]
    //   }
    // }

  }

}

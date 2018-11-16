module.exports = {  
  src_folders : ["tests"],  
  output_folder: 'reports',  
  live_output: false,  
  disable_colors: false,  
  
  "test_workers": {  
    "enabled": true,  
    "workers": 4  
  },  
  
  test_settings: {  
    default: {  
      launch_url: 'http://localhost',  
      screenshots: {  
        enabled: true,  
        path: './screens',  
        on_failure: true  
      },  
      desiredCapabilities: {  
        browserName: 'chrome',  
        acceptInsecureCerts: true,  
        chromeOptions: {  
          args: ['--no-sandbox']  
        },  
        loggingPrefs: {driver: 'INFO', server: 'OFF', browser: 'INFO'}  
      }  
    }  
  }  
  
};
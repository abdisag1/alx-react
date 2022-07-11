const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry:{ 
    main: path.resolve(__dirname, './js/dashboard_main.js'), // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}

    // options related to how webpack emits results
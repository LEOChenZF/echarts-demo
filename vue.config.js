"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    port: 8810,
    // host: '0.0.0.0',
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};

const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: ["babel-preset-solid", "@babel/preset-typescript", "@babel/preset-env"]
});

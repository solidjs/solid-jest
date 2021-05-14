const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    [
      "babel-preset-solid",
      {
        generate: "ssr",
        hydratable: true
      }
    ],
    "@babel/preset-typescript"
  ]
});

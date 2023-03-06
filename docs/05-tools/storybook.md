---
title: storybook
sidebar_position: 3
---

## Setup

```js title=./storybook/main.js
const path = require("path")
const bootstrapSassAbstractsImports = require("vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve("stream-browserify"),
    }

    // NOTE: either works
    // Object.assign(config.resolve.alias, {
    //   '@': path.resolve(__dirname, '../src/')
    // })
    config.resolve.alias["@"] = path.resolve(__dirname, "../src")

    let isNotProduction = true

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { sourceMap: isNotProduction } },
        {
          loader: "sass-loader",
          options: {
            additionalData: [...bootstrapSassAbstractsImports, ""].join(";\n"),
            sourceMap: isNotProduction,
          },
        },
      ],
    })

    return config
  },
  framework: "@storybook/vue",
  core: {
    builder: "@storybook/builder-webpack5",
  },
}
```

```js title=./storybook/preview.js

```

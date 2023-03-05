const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const createClientConfig =
  require("@docusaurus/core/lib/webpack/client").default
const {
  loadClientModules,
} = require("@docusaurus/core/lib/server/clientModules")
const { load } = require("@docusaurus/core/lib/server")
const { logger } = require("@storybook/node-logger")

let docusaurusData

const loadDocusaurus = async () => {
  docusaurusData =
    docusaurusData ||
    (await load({
      siteDir: process.cwd(),
    }))

  return docusaurusData
}

const ruleMatches = (rule, ...inputs) =>
  inputs.some((input) => "test" in rule && rule.test.test(input))

const hasPlugin = (plugins, name) =>
  plugins.map((plugin) => plugin.name).includes(name)

const log = (message) => logger.info(`Docusaurus: ${message}`)

module.exports = {
  config: async (entry = []) => {
    const { plugins } = await loadDocusaurus()

    const clientModulePlugins = plugins.filter(
      (plugin) => "getClientModules" in plugin
    )
    if (clientModulePlugins.length > 0) {
      log(
        `adding client modules from the following plugins: ${clientModulePlugins
          .map((p) => p.name)
          .join(", ")}`
      )
    }

    const clientModules = loadClientModules(clientModulePlugins)

    return [...entry, ...clientModules]
  },
  webpackFinal: async (config, { configType }) => {
    const props = await loadDocusaurus()
    // Load up the Docusaurus client Webpack config,
    // so we can extract its aliases and rules\
    const docusaurusConfig = await createClientConfig(props)

    const alias = {
      ...config.resolve.alias,
      ...docusaurusConfig.resolve.alias,
    }

    config.resolve.alias = alias

    const rules = (config.module.rules || [])
      .map((rule) => {
        if (
          hasPlugin(props.plugins, "docusaurus-plugin-sass") &&
          ruleMatches(rule, ".module.scss")
        ) {
          log("preferring docusaurus-plugin-sass over Storybook SASS loader")
          return null
        }

        return rule
      })
      .filter(Boolean)

    config.module.rules = rules

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ]
    return config
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
}

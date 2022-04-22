module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-scss",
    // "storybook-addon-next",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: require("path").resolve(__dirname, "../"),
    });

    return config;
  },
};

# `styled-jsx` with SCSS test using `storybook-addon-next` Nextjs v12 Example

Addon source: https://github.com/RyanClementsHax/storybook-addon-next

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Go to the `Styled JSX SCSS Example` page:
http://localhost:3000/styledJsxScss

See the text is green with nested SCSS selectors

Next, run Storybook server:

```bash
npm run storybook
# or
yarn storybook
```

Storybook fails to start with this error:

```bash
ModuleBuildError: Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: ~/storybook-addon-next-scss/pages/styledJsxScss.js: Nesting detected at 5:11. Unfortunately nesting is not supported by styled-jsx.
```

Disabling the **storybook-addon-next** in `.storybook/main.js` addon solves the problem.

Note: SCSS support works with both the `@storybook/preset-scss` addon or with a webpack rule:

```js
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: require("path").resolve(__dirname, "../"),
    });

    return config;
  },
```

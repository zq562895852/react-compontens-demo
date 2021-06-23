module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    // 引入样式
    "../src/style/index.scss",
    // 如果需要指定文件夹，可以修改这里
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // 插件系统
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  // 支持typescript
  ttypescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
}
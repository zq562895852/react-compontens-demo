# 创建项目
 npx create-react-app ts-with-react --template typescript

## 启动脚本

开发环境运行:

### `yarn start`

开启一个服务：[http://localhost:3000](http://localhost:3000)


### `yarn test`

测试脚本

### `yarn build`

打包项目

### `yarn eject`
不可逆的，弹出脚本

## Learn More


### 使用到的包
  + 字体工具: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
  + 类名拼接： classnames
  + yarn add react-transition-group   css动画
  + storybook 

### 打包
  + umd
  + cjs
  + es
  + package.json 
      - main 和module字段设置  支持模块化
      - author 作者
      - keywords: 关键字，搜索
      - homepage: 项目主页
      - repository: 上传的git地址
      - files 哪些文件上传到npm上
      - prepublish 脚本自动执行
      - peerDependencies 依赖库不会安装，会提示版本信息
      - 对于开发可以使用开发依赖字段，所以可以把react,react-dom放到开发依赖中
     

### 新建tsconfig.build.json


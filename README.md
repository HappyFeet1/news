# news

> 手机新闻站

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 项目流程

1. 规划组件结构
2. 编写对应路由
3. 编写具体组件内容
   公共文件 小插件 一般在index.html引入或者在 main.js 中require()/import 都可以
4. 项目需要模块
   axio  vuex
5. 配置 less 配合 mint-ui

   asset  静态资源

   想在js z中引入css模块 style-loader css-loader

6. 编写首页轮播 和 内容组件
7. 登录组件 vuex 本地存储用户名登录状态
8. 简单使用iview 引入 Header slot 修改资料 系统设置

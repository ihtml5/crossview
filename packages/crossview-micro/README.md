<p align="center">
  <img width="" src="https://new.inews.gtimg.com/tnews/1b15195a/491a/1b15195a-491a-4c6a-b0a9-52de4dc643b5.png" alt="image.png" />
  <p align="center">
    基于<a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components">web components</a>搭建跨框架内容底层页
  </p>
</p>

<div align="center">
<a href="https://github.com/prettier/prettier" target="_blank"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Code Style"></a>
<a href="https://nodejs.org" target="_blank"><img src="https://img.shields.io/badge/node-%3E%3D%2010.0.0-brightgreen.svg" alt="Node Version" /></a>
</div>


## 一、Framework

+ [lit](https://lit.dev)
+ [webpack5](https://webpack.js.org/)
+ [polyfills](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)
+ [express](https://expressjs.com/)
+ [winston](https://github.com/winstonjs/winston)

## 二、开发
```bash
npm i // 安装依赖
npm start // 启动
npm run build // 打包
npm run test // 单元测试
npm run dev // 启动服务端
```

## 三、Browser Suppor

polyfills 旨在在最新版本的常绿浏览器中工作。请参阅下面的完整浏览器支持表格:

| Polyfill        | Edge | IE11+ | Chrome\* | Firefox\* | Safari 9+\* | Chrome Android\* | Mobile Safari\* |
| --------------- | :--: | :---: | :------: | :-------: | :---------: | :--------------: | :-------------: |
| Custom Elements |  ✓   |   ✓   |    ✓     |     ✓     |      ✓      |        ✓         |        ✓        |
| Shady CSS/DOM   |  ✓   |   ✓   |    ✓     |     ✓     |      ✓      |        ✓         |        ✓        |

\*表示浏览器的当前版本

polyfills 可能在旧浏览器中工作，但是需要额外的 polyfills（例如 classList 或其他 [platform](https://github.com/webcomponents/webcomponents-platform)
polyfills) 要使用的。我们不能保证支持我们的兼容性表格之外的浏览器。

## 四、Projects
+ [lit-webpack](https://github.com/Kurtmcmurt/lit-webpack)
+ [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill)
+ [webcomponents.org](https://www.webcomponents.org/)

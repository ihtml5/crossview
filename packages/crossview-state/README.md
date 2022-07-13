<p align="center">
  <img width="" src="https://new.inews.gtimg.com/tnews/1b15195a/491a/1b15195a-491a-4c6a-b0a9-52de4dc643b5.png" alt="image.png" />
  <p align="center">
    基于<a href="https://lit.dev/">lit</a>的轻量级状态管理工具
  </p>
</p>


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

## 五、Articles
+ [本地包调试 ：npm link](https://segmentfault.com/a/1190000038252958)

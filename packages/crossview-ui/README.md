<p align="center">
  <img width="" src="https://new.inews.gtimg.com/tnews/1b15195a/491a/1b15195a-491a-4c6a-b0a9-52de4dc643b5.png" alt="image.png" />
  <p align="center">
    基于<a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components">web components</a>搭建跨框架UI组件库
  </p>
</p>

<div align="center">
<a href="https://github.com/prettier/prettier" target="_blank"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Code Style"></a>
<a href="https://nodejs.org" target="_blank"><img src="https://img.shields.io/badge/node-%3E%3D%2010.0.0-brightgreen.svg" alt="Node Version" /></a>
</div>


## 一、Framework

+ [lit](https://lit.dev)
+ [rollup](https://rollupjs.org)
+ [jest](https://jestjs.io/zh-Hans/)
+ [storybook](https://storybook.js.org/)
+ [lerna](https://github.com/lerna/lerna)

## 二、开发
```bash
npm i // 安装依赖
npm run start // 启动开发
npm run storybook // 启动storybook
npm run build // 打包
npm run test // 单元测试
```


## 三、安装

Install the library through npm:

```
npm install crossview-ui --save
```

---

## 四、组件使用

### 加载整个组件库

The most simple and common way of including the components into an application is by loading the core bundle:


```js
// include bundle through module import
import 'crossview-ui'
// if using JS, css can also be imported. if using TS, use html stylesheet as shown below
import 'crossview-ui/crossview-ui-styles.css'
```

*or*

```html
<!-- include bundle and styles in html file -->
<script type="text/javascript" charset="utf-8" src="node_modules/crossview-ui/index.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/crossview-ui/crossview-ui-styles.css">
```

### 加载单个组件

```js
// include individual components and styles through module import
import 'crossview-ui/src/components/paragraph'
import 'crossview-ui/src/components/image'
// if using JS, css can also be imported. if using TS, use html stylesheet as shown below
import 'crossview-ui/crossview-ui-styles.css'
```

*or*

```html
<!-- include single components and styles in html file -->
<script type="text/javascript" charset="utf-8" src="node_modules/crossview-ui/src/components/paragraph/index.js"></script>
<script type="text/javascript" charset="utf-8" src="node_modules/crossview-ui/src/components/abstract/index.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/crossview-ui/crossview-ui-styles.css">
```

---

## 五、使用


```html
  <crossview-ui-parapgrah>Body 1, Text 1</crossview-ui-parapgrah>
  <crossview-ui-abstract abstract="crossview-ui"></crossview-ui-parapgrah>
```

## 六、Browser Suppor

polyfills 旨在在最新版本的常绿浏览器中工作。请参阅下面的完整浏览器支持表格:

| Polyfill        | Edge | IE11+ | Chrome\* | Firefox\* | Safari 9+\* | Chrome Android\* | Mobile Safari\* |
| --------------- | :--: | :---: | :------: | :-------: | :---------: | :--------------: | :-------------: |
| Custom Elements |  ✓   |   ✓   |    ✓     |     ✓     |      ✓      |        ✓         |        ✓        |
| Shady CSS/DOM   |  ✓   |   ✓   |    ✓     |     ✓     |      ✓      |        ✓         |        ✓        |

\*表示浏览器的当前版本

polyfills 可能在旧浏览器中工作，但是需要额外的 polyfills（例如 classList 或其他 [platform](https://github.com/webcomponents/webcomponents-platform)
polyfills) 要使用的。我们不能保证支持我们的兼容性表格之外的浏览器。

## 七、Projects
+ [lit-webpack](https://github.com/Kurtmcmurt/lit-webpack)
+ [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill)
+ [webcomponents.org](https://www.webcomponents.org/)

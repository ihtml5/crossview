---
layout: page
---

## Usage

To create your own element, just clone the repository and modify it to your needs

```sh
git clone --depth 1 https://github.com/fernandopasik/hello-web-components.git
```

To try out the element, install from npm

```sh
yarn add crossview-ui-paragraph
npm install crossview-ui-paragraph
```

and use it in your app

```js
import { html, render } from 'lit-html';
import './paragraph';

render(html`<crossview-ui-paragraph></crossview-ui-paragraph>`, document.body);
```

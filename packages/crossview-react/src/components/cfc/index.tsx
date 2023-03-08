
// import { DireflowComponent } from "direflow-component";
import { useState } from "react";
import React from "react"
import * as ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import './cfc.css';

function Kwr() {
    const [count, setCount] = useState(0);
    return <div onClick={() => setCount(count + 1)} className="cfc">{count}</div>
}
const KwrWc = reactToWebComponent(Kwr, React, ReactDOM, {
  shadow: true,
});

if (!window.customElements.get('kwr-ui-interactive')) {
  window.customElements.define("kwr-ui-interactive", KwrWc); 
}
// const KwrWc = DireflowComponent.create({
//   component: Kwr,
//   configuration: {
//     tagname: 'kwr-ui-interactive',
//   },
// });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            //@ts-ignore
            'kwr-ui-interactive': KwrWc;
          }
    }
};

export default KwrWc;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'crossview-ui/components/heading';
import 'crossview-ui/components/abstract';
import 'crossview-ui/components/image';

import router from './route';

import {
  RouterProvider,
} from "react-router-dom";


declare global {
  namespace JSX {
    interface CrossViewUIAbstract
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {
      abstract?: string;
}


interface CrossViewUIImage
extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
> {
  src?: string;
  lazyLoad?: boolean;
}
interface CrossViewUIHeading
extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
> {
  level?: string;
}
    interface IntrinsicElements {
      'crossview-ui-abstract': CrossViewUIAbstract;
      'crossview-ui-image': CrossViewUIImage;
      'crossview-ui-heading': CrossViewUIHeading;
    }
  }
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

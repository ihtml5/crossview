
import styles from './wc.module.css';
import { useImStore } from '../../store/im';
import { useState } from 'react';


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

function App() {
  const [abstract, setAbstract] = useState('kwr-wc');
  const unreadCounts = useImStore((state: any) => state.unreadCounts);
  const increaseUnReadCounts = useImStore((state: any) => state.increaseUnReadCounts);
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={increaseUnReadCounts} className={styles.bold}>
          increaseUnReadCounts
        </p>
        {unreadCounts}
        <crossview-ui-heading level="h1">abstract</crossview-ui-heading>
        <crossview-ui-abstract abstract={abstract} onClick={() => setAbstract(`${abstract}11`)}></crossview-ui-abstract>
        <crossview-ui-image src="https://misc.360buyimg.com/jdf/1.0.0/unit/global-header/5.0.0/i/jdlogo-201708-@2x.png" lazyLoad={true}></crossview-ui-image>
      </header>
    </div>
  );
}

export default App;

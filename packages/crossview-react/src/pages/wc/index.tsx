import react from 'react';
import styles from './wc.module.css';
import { useImStore } from '../../store/im';
import { useState } from 'react';
import '../../components/cfc';

function App() {
  const [abstract, setAbstract] = useState('kwr-wc');
  const unreadCounts = useImStore((state: any) => state.unreadCounts);
  const increaseUnReadCounts = useImStore((state: any) => state.increaseUnReadCounts);
  return (
    <div className="App">
      <kwr-ui-interactive></kwr-ui-interactive>
      <header className="App-header">
        <p onClick={increaseUnReadCounts} className={styles.bold}>
          increaseUnReadCounts
        </p>
        {unreadCounts}
        <crossview-ui-heading level="h1">abstract</crossview-ui-heading>
        <crossview-ui-abstract abstract={abstract} onClick={() => setAbstract(`${abstract}`)}></crossview-ui-abstract>
        <crossview-ui-image src="https://misc.360buyimg.com/jdf/1.0.0/unit/global-header/5.0.0/i/jdlogo-201708-@2x.png" lazyLoad={true}></crossview-ui-image>
      </header>
    </div>
  );
}

export default App;

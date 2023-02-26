
import './App.css';

import { useImStore } from '../../store/im';

function App() {
  const unreadCounts = useImStore((state: any) => state.unreadCounts);
  const increaseUnReadCounts = useImStore((state: any) => state.increaseUnReadCounts);
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={increaseUnReadCounts}>
        increaseUnReadCounts
        </p>
        {unreadCounts}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

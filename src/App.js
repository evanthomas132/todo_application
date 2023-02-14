import './index.css';
import Main from './Main/Main';
import Context from './Context'

function App() {
  return (
    <Context>
      <div className="App">
        <Main />
      </div>
    </Context>
  );
}

export default App;

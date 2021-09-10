import './App.css';
import './style/Countdown.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown</h1>
      </header>
      <div className="content">
        <Countdown date='2021-12-24T00:00:00' />,
      </div>
    </div>
  );
}

export default App;

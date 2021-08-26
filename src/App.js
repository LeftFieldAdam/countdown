import './App.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Countdown targetDate="2021-12-24T00:00:00" />
      </div>
    </div>
  );
}

export default App;

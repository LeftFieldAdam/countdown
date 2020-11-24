import './App.css';
import Countdown from './components/Countdown';

function App() {
  const date = 'December 24, 2020';

  return (
    <div className="App">
      <div className="content">
        <Countdown date={date} />
      </div>
      <h1>
        until <span>Eric’s birthday</span> on <span>{date}</span>
      </h1>
    </div>
  );
}

export default App;

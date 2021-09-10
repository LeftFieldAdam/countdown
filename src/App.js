import './App.css';
import './style/Countdown.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className='App'>
      <header className='App-header py-8'>
        <h1 className='font-sans text-6xl'>Birthday Countdown</h1>
      </header>
      <div className='content bg-gray-100 pb-32'>
        <Countdown date='2021-12-24T00:00:00' />
      </div>
    </div>
  );
}

export default App;

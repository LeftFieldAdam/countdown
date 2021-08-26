import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Countdown from './components/Countdown';

function App() {
  return (
    <div>
      <Countdown targetDate="2021-12-24T00:00:00" />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Countdown from './components/Countdown';
import Settings from './components/Settings';

import BirthdayBackground from './static/images/birthday-background.jpg';
import NewYearsBackground from './static/images/new-years-background.jpg';
import TechBackground from './static/images/tech-background.jpg';
import AnniversaryBackground from './static/images/anniversary-background.jpg';

import { datePast, dateToday } from './utils/DatePast';
function App() {
  const [targetDate, setTargetDate] = useState('08/28/2021');
  const [dateReached, setDateReached] = useState(
    dateToday(new Date(targetDate))
  );
  const [theme, setTheme] = useState({
    name: 'Birthday',
    id: 'birthday',
    finishedText: 'Happy Birthday!!',
    backgroundImage: BirthdayBackground,
  });
  const availableThemes = [
    {
      name: 'Birthday',
      id: 'birthday',
      finishedText: 'Happy Birthday!!',
      backgroundImage: BirthdayBackground,
    },
    {
      name: 'New Years',
      id: 'new-years',
      finishedText: 'Happy New Years!!',
      backgroundImage: NewYearsBackground,
    },
    {
      name: 'Tech Event',
      id: 'tech',
      finishedText: 'Today is the day for tech!',
      backgroundImage: TechBackground,
    },
    {
      name: 'Anniversary',
      id: 'anniversary',
      finishedText: 'Congratulations!',
      backgroundImage: AnniversaryBackground,
    },
  ];

  console.log(dateReached);
  const updateTargetDate = function (newDate) {
    setTargetDate(newDate);
    setDateReached(dateToday(new Date(newDate)));
  };
  const updateTheme = function (newTheme) {
    setTheme(newTheme);
  };
  return (
    <div>
      <Countdown
        targetDate={targetDate}
        theme={theme}
        dateReached={dateReached}
      />
      <Settings
        currentTargetDate={targetDate}
        currentTheme={theme}
        availableThemes={availableThemes}
        updateTargetDate={updateTargetDate}
        updateTheme={updateTheme}
      />
    </div>
  );
}

export default App;

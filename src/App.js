import { useState } from 'react';
import Countdown from './components/Countdown';
import Settings from './components/Settings';

import BirthdayBackground from './static/images/birthday-background.jpg';
import NewYearsBackground from './static/images/new-years-background.jpg';
import TechBackground from './static/images/tech-background.jpg';
import AnniversaryBackground from './static/images/anniversary-background.jpg';

import { datePast, dateToday } from './utils/DatePast';
import { getSavedDate, getSavedTheme } from './utils/LocalStorage';

function App() {
  const [targetDate, setTargetDate] = useState(getSavedDate() || '08/24/2021');
  const [dateReached, setDateReached] = useState(
    dateToday(new Date(targetDate))
  );
  const [dateInPast, setDateInPast] = useState(datePast(new Date(targetDate)));
  console.log(dateInPast);
  const [theme, setTheme] = useState(
    getSavedTheme() || {
      name: 'Birthday',
      id: 'birthday',
      finishedText: 'Happy Birthday!!',
      backgroundImage: BirthdayBackground,
    }
  );

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
      finishedText: 'Happy New Year!!',
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

  console.log(dateInPast);
  const updateTargetDate = function (newDate) {
    setTargetDate(newDate);
    setDateReached(dateToday(new Date(newDate)));
    setDateInPast(datePast(new Date(newDate)));
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
        dateInPast={dateInPast}
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

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { useInterval } from '../utils/UseInterval';
import { getTimeRemaining } from '../utils/GetTimeRemaining';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    textAlign: 'center',
    backgroundPosition: 'center center !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'cover !important',
  },
}));

function Countdown({ targetDate, dateReached, theme }) {
  const [countdownDate, setCountdownDate] = useState(new Date(targetDate));
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const classes = useStyles();

  useEffect(() => {
    setCountdownDate(new Date(targetDate));
  }, [targetDate]);

  useInterval(() => {
    const _timeRemaining = getTimeRemaining(countdownDate);
    if (
      _timeRemaining.days === 0 &&
      _timeRemaining.hours === 0 &&
      _timeRemaining.minutes === 0 &&
      _timeRemaining.seconds === 0
    ) {
      setTimeRemaining(false);
    }

    setTimeRemaining(getTimeRemaining(countdownDate));
  }, 1000);

  const backgroundImage = theme.backgroundImage;

  return (
    <>
      {!dateReached && (
        <Grid
          container
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
              backgroundImage +
              ')',
          }}
          className={classes.root}
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Typography variant="h3" color="secondary">
              {timeRemaining.days || '0'}
            </Typography>
            <Typography variant="h6" color="secondary">
              Days
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" color="secondary">
              {timeRemaining.hours || '00'}
            </Typography>
            <Typography variant="h6" color="secondary">
              Hours
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" color="secondary">
              {timeRemaining.minutes || '00'}
            </Typography>
            <Typography variant="h6" color="secondary">
              Minutes
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" color="secondary">
              {timeRemaining.seconds || '00'}
            </Typography>
            <Typography variant="h6" color="secondary">
              Seconds
            </Typography>
          </Grid>
        </Grid>
      )}
      {dateReached && (
        <Grid
          container
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
              backgroundImage +
              ')',
          }}
          className={classes.root}
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={11}>
            <Typography variant="h3" color="secondary">
              {theme.finishedText}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Countdown;

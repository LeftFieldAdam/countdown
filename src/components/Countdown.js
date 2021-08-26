import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { useInterval } from '../utils/UseInterval';
import { getTimeRemaining } from '../utils/GetTimeRemaining';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    textAlign: 'center',
  },
}));

function Countdown({ targetDate }) {
  const [countdownDate, setCountdownDate] = useState(new Date(targetDate));
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const classes = useStyles();

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(countdownDate));
  }, 1000);

  return (
    <Grid
      container
      className={classes.root}
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} md={3} alignContent="center">
        <Typography variant="h3">{timeRemaining.days || '0'}</Typography>
        <Typography variant="h6">Days</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h3">{timeRemaining.hours || '00'}</Typography>
        <Typography variant="h6">Hours</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h3">{timeRemaining.minutes || '00'}</Typography>
        <Typography variant="h6">Minutes</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h3">{timeRemaining.seconds || '00'}</Typography>
        <Typography variant="h6">Seconds</Typography>
      </Grid>
    </Grid>
  );
}

export default Countdown;

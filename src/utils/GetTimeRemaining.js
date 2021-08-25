export const getTimeRemaining = (countdownDate) => {
  if (countdownDate) {
    // Get the current time
    const currentTime = new Date().getTime();

    // Get the time remaining until the countdown date
    const distanceToDate = countdownDate - currentTime;

    // Calculate days, hours, minutes and seconds remaining
    let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

    // For visual appeal, add a zero to each number that's only one digit
    const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (numbersToAddZeroTo.includes(hours)) {
      hours = `0${hours}`;
    } else if (numbersToAddZeroTo.includes(minutes)) {
      minutes = `0${minutes}`;
    } else if (numbersToAddZeroTo.includes(seconds)) {
      seconds = `0${seconds}`;
    }

    // Set the state to each new time
    return { days: days, hours: hours, minutes, seconds };
  }
};

import React from 'react';
import Cake from './Cake';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      isBirthday: false,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    if (diff === 0) {
      this.setState({
        isBirthday:true
      });
    }
    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;


    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    if (value < 0) {
      return '00';
    }
    value = String(value);
    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  

  render() {
    const countDown = this.state;
    const countdownBoxes = 'countdown-col flex flex-col p-2 bg-gray-50 border-2 rounded-md text-neutral-content shadow-xl';
    const countdownFont = 'font-mono text-5xl countdown';
    const countdownFontZeroDate = 'font-mono text-5xl countdown text-blue-500';

    return (
      <>
      <Cake 
        isBirthday={this.state.isBirthday}
      />
      <div className='flex justify-center'>
        <div className='Countdown grid grid-flow-col gap-5 text-center auto-cols-max'>
          <div className={countdownBoxes}>
            <strong className={countDown.days === 0 ? countdownFontZeroDate : countdownFont}>
              {this.addLeadingZeros(countDown.days)}
            </strong>
            <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </div>

          <div className={countdownBoxes}>
            <strong className={countDown.days === 0 ? countdownFontZeroDate : countdownFont}>
              {this.addLeadingZeros(countDown.hours)}
            </strong>
            <span>{countDown.hours === 1 ? 'Hour' : 'Hours'}</span>
          </div>

          <div className={countdownBoxes}>
            <strong className={countDown.days === 0 ? countdownFontZeroDate : countdownFont}>
              {this.addLeadingZeros(countDown.min)}
            </strong>
            <span>{countDown.min === 1 ? 'Min' : 'Mins'}</span>
          </div>

          <div className={countdownBoxes}>
            <strong className={countDown.days === 0 ? countdownFontZeroDate : countdownFont}>
              {this.addLeadingZeros(countDown.sec)}
            </strong>
            <span>{countDown.sec === 1 ? 'Sec' : 'Secs'}</span>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Countdown;

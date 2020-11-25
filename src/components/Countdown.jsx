import React from 'react';
import PropTypes from 'prop-types';
import './../style/Countdown.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
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

  formatText(value, text) {
    if (value === 1) {
      return text;
    } else {
      return text + 's';
    }
  }

  render() {
    const { years, days, hours, min, sec } = this.state;
    const finalMinute = years < 1 && days < 1 && hours < 1 && min < 1;

    return (
      <div className={`Countdown ${finalMinute ? 'red' : ''}`}>
        {years >= 1 && (
          <div className="countdown-col">
            <div className="numbers">{this.addLeadingZeros(years)}</div>
            <div className="text">{this.formatText(years, 'year')}</div>
          </div>
        )}

        <div className="countdown-col">
          <div className="numbers">{this.addLeadingZeros(days)}</div>
          <div className="text">{this.formatText(days, 'day')}</div>
        </div>

        <div className="countdown-col">
          <div className="numbers">{this.addLeadingZeros(hours)}</div>
          <div className="text">{this.formatText(hours, 'hour')}</div>
        </div>

        <div className="countdown-col">
          <div className="numbers">{this.addLeadingZeros(min)}</div>
          <div className="text">{this.formatText(min, 'minute')}</div>
        </div>

        <div className="countdown-col">
          <div className="numbers">{this.addLeadingZeros(sec)}</div>
          <div className="text">seconds</div>
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
};

Countdown.defaultProps = {
  date: 'December 24, 2020',
};

export default Countdown;

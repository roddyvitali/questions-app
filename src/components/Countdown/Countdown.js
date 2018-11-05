import React, {Component} from 'react';

import './Countdown.css';
class Countdown extends Component {
  state = {
    seconds: '00',
    minutes: ''
  }

  componentDidMount(){
    this.setState({
      minutes: this.props.minutes,
      seconds: this.props.seconds
    }, ()=> this.startCountDown() );
  }

  secondsRemaining;
  intervalHandle;
  startCountDown = this.startCountDown.bind(this);
  tick = this.tick.bind(this);

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    this.setState({minutes: min, seconds: sec})
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      })
    }
    if (min < 10) {
      this.setState({
        value: "0" + min
      })
    }
    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }
    if(this.secondsRemaining === 330) {
      new Notification(
        'App RoddyVitali',
        {
          'body' : 'Quedan tan solo 5:30 minutos',
          icon: 'https://image.flaticon.com/icons/png/512/16/16455.png'
        }
      )
    }
    this.secondsRemaining--;

    // console.log(this.secondsRemaining);
  }
  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60 + parseInt(this.state.seconds);
  }
  render() {
    const { seconds,  minutes } = this.state;
    const { className } = this.props;
    console.log(className);
    return (
      <h1 className={className} onClick={()=>this.startCountDown()}>
        {minutes}:{seconds}
      </h1>
    )
  }
};

Countdown.defaultProps = {
  minutes: '',
  seconds: '00'
};

export default Countdown;
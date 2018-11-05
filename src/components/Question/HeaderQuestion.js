import React, { Component } from 'react';
import Title from 'Components/Title/Title';
import Countdown from "Components/Countdown/Countdown";


class HeaderQuestion extends Component {
  render() {
    return(
      <div className="header-question">
        <Title className="header-title" text="What is the result of compiling and running the following code?"/>
        <Countdown className="header-countdown" minutes="5" seconds="32" />
      </div>
    )
  }

};

export default HeaderQuestion;
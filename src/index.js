import React from "react";
import ReactDOM from "react-dom";

import Editor from "Components/Editor/Editor"
import Title from "Components/Title/Title"
import Alternatives from "Components/Alternatives/Alternatives"
import Question from "Components/Question/Question"
import Countdown from "Components/Countdown/Countdown";

import Lateral from "Components/Menu/Lateral";

import notifyMe from 'Components/Notifications/Notifications'
import './index.css';

const Index = () => {
  return <div className="main">
          <Lateral/>

          {/* <Editor /> */}
          <div className="container-question">
            <Question />
            <Alternatives/>
            <p onClick={ ()=> notifyMe() }>Apretar</p>
          </div>
        </div>;
};

ReactDOM.render(
  <Index/>, document.getElementById("app"));

import React from "react";

import Alternatives from "Components/Alternatives/Alternatives";
import Question from "Components/Question/Question";

import Lateral from "Components/Menu/Lateral";

const Quizz = () => {
  return <div className="main">
          <Lateral/>
            <div className="container-question">
              <Question />
              <Alternatives/>
              <p onClick={ ()=> notifyMe() }>Apretar</p>
            </div>
        </div>;
};

export default Quizz;
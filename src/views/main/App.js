
import React from "react";

import Alternatives from "Components/Alternatives/Alternatives";
import Question from "Components/Question/Question";

import Lateral from "Components/Menu/Lateral";
import {
  BrowserRouter,
  Route,
  Switch,
  browserHistory
} from 'react-router-dom';

import Home from '../layouts/Home';
import Quizz from '../layouts/Quizz';

const App = () => {
  return <div className="main">
          <BrowserRouter>
              <Switch>
                  <Route path="/q" exact component={Home}/>
                  <Route path="/" component={Quizz}/>
              </Switch>
          </BrowserRouter>

        </div>;
};

export default App;
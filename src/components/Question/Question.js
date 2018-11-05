import React, { Component } from 'react';
import Highlight from './Highlight';
import HeaderQuestion from 'Components/Question/HeaderQuestion';

import './Question.css';

class Question extends Component {
  render() {
    return(
      <div>
        <HeaderQuestion />


        <Highlight className='java question-console'>
          {"\
public class Tester {\n\
  public static void main(String[] args) {\n\
    String stmt = \"JavaChamp is here to help you\";\n\
    for (String token : stmt.split(\"//s\")) {\n\
      System.out.print(token + \" \");\n\
    }\n\
  }\n\
}"}
        </Highlight>
      </div>
    )
  }

};

export default Question;

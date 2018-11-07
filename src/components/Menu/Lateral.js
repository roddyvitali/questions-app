import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Menu.css';
class Lateral extends Component {
  render(){
    return(
      <div className="menu-lateral">
        <ul className="menu-child">

          <li><FontAwesomeIcon icon="stroopwafel" size="2x" color="#aaa"/></li>
          <li><FontAwesomeIcon icon="certificate" size="2x" color="#aaa"/></li>
          <li><FontAwesomeIcon icon="ribbon" size="2x" color="#aaa"/></li>
          <ul className="menu-lasts">
            <li><FontAwesomeIcon icon="question" size="2x" color="#aaa"/></li>
            <li><FontAwesomeIcon icon="power-off" size="2x" color="#aaa"/></li>
          </ul>
         
          
        </ul>
      </div>
    );
  }
}

export default Lateral;
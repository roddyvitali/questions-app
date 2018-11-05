import React, { Component } from 'react';

import './Alternatives.css';
class Alternatives extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: 0
    }
    this.handleOptionChange =  this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
    console.log(e.target.value)
    this.setState({
      selectedOption: e.target.value
    });
  }

  render() {
    const { selectedOption } = this.state;
    return(
      <ul className="list-alternatives">
        <li><input type="radio" value="ans1" id="ans1" checked={selectedOption === 'ans1'} onChange={this.handleOptionChange}/><label htmlFor="ans1">JavaChamp is here to help you</label></li>
        <li><input type="radio" value="ans2" id="ans2" checked={selectedOption === 'ans2'} onChange={this.handleOptionChange}/><label htmlFor="ans2">JavaChamp i here to help you</label></li>
        <li><input type="radio" value="ans3" id="ans3" checked={selectedOption === 'ans3'} onChange={this.handleOptionChange}/><label htmlFor="ans3">No output is produced</label></li>
        <li><input type="radio" value="ans4" id="ans4" checked={selectedOption === 'ans4'} onChange={this.handleOptionChange}/><label htmlFor="ans4">Compilation error</label></li>
      </ul>
    );
  }

};

export default Alternatives;

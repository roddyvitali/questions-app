import React from 'react';
import "./Title.css";

const Title = (props) => {
  const { text, className } = props;
  return(
    <h1 className={className}>{text}</h1>
  )
};

export default Title;

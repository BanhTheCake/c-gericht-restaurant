import React from "react";
import './Button.scss'

const Button = ({ title = 'Text example' }) => {
  return <button id="CUSTOM">
    {title}
  </button>;
};

export default Button;

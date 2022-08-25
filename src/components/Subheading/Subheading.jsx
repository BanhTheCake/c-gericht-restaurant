import React from "react";
import { images } from "../../constants";
import './Subheading.scss'

const Subheading = ({ title = 'Text Example' }) => {
  return (
    <div id="SUBHEADING">
      <p className="subheading__title">{title}</p>
      <div className="subheading__img">
        <img src={images.spoon} alt="" />
      </div>
    </div>
  );
};

export default Subheading;

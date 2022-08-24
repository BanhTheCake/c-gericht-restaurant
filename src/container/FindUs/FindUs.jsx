import React from "react";
import { Button, Subheading } from "../../components";
import { images } from "../../constants";
import './FindUs.scss'

const FindUs = () => {
  return (
    <section id="FINDUS" className="section__padding">
      <div className="findUs__text">
        <Subheading title="Contact" />
        <h2>Find Us</h2>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="findUs__opening">Opening Hours</p>
        <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        <Button title="Visit Us" />
      </div>
      <div className="findUs__img">
        <img src={images.findus} alt="" />
      </div>
    </section>
  );
};

export default FindUs;

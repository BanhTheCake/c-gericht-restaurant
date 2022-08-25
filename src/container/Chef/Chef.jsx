import React from "react";
import { Subheading } from "../../components";
import { images } from "../../constants";
import './Chef.scss'

const Chef = () => {
  return (
    <section id="CHEF" className="section__padding">
      <div className="chef__img">
        <img src={images.chef} alt="" />
      </div>
      <div className="chef__text">
        <Subheading title="Chef's Word" />
        <h2>What We Believe In</h2>
        <div className="chef__quote">
          <img src={images.quote} alt="" />
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
        </div>
        <p>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
        <p className="chef__name">Kevin Luo</p>
        <p className="chef__job">Chef & Founder</p>
        <div className="chef__sign">
          <img src={images.sign} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Chef;

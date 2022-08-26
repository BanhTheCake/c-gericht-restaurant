import React from "react";
import { Button, Subheading } from "../../components";
import { images } from "../../constants";
import './Header.scss'

const Header = () => {
  return (
    <section id="HOME" className="section__padding">
      <div className="home__text">
        <Subheading title="Chase The New Flavour" />
        <h2>The Key To Fine Dining</h2>
        <p>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
        <Button title="Explore Menu" />
      </div>

      <div className="home__img">
        <img src={images.welcome} alt="" />
      </div>
    </section>
  );
};

export default Header;

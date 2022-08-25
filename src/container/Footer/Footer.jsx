import React from "react";
import { Button, Subheading } from "../../components";
import { images } from "../../constants";
import './Footer.scss'

import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="FOOTER" className="section__padding">
      <div className="footer__box">
        <Subheading title="Newletter" />
        <h2>Subscribe To Our Newsletter</h2>
        <p>And Never Miss Latest Updates!</p>
        <div className="footer__box-input">
          <input type="text" placeholder="Enter your email address" />
          <Button title="Subscribe" />
        </div>
      </div>
      <div className="footer__list">
          <div className="footer__item">
            <h4 className="footer__item-title">Contact Us</h4>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
          <div className="footer__item">
            <div className="footer__item-img">
              <img src={images.gericht} alt="" />
            </div>
            <Subheading title={`"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."`} />
            <div className="footer__item-logo">
              <FiFacebook />
              <FiTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
          <div className="footer__item">
            <h4 className="footer__item-title">Working Hours</h4>
            <p>Monday-Friday:</p>
            <p>08:00 Am - 12:00 Am</p>
            <p style={{marginTop: '1rem'}}>Saturday-Sunday:</p>
            <p>07:00 Am - 11:00 Pm</p>
          </div>
      </div>
      <p className="footer__copyright">2021 Gericht. All Rights Reserved.</p>
      <p className="footer__secret">BanhTheCake luv you</p>
    </section>
  );
};

export default Footer;

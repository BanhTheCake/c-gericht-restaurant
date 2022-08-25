import React from 'react';
import { Button, Subheading } from '../../components';
import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <section id="ABOUTUS" className='section__padding'>
            <div className="about__layout">
                <img src={images.G} alt="" />
            </div>
            <div className="about__intro about__text">
                <Subheading title="About Us" />
                <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Quis Pharetra Adipiscing Ultrices Vulputate Posuere
                    Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
                </p>
                <Button title="Know More" />
            </div>
            <div className="about__img">
              <img src={images.knife} alt="" />
            </div>
            <div className="about__history about__text">
                <Subheading title="Our History" />
                <p>
                    Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu
                    Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum
                    Mi Aliquam In Sed Odio Nec Aliquet.
                </p>
                <Button title="Know More" />
            </div>
        </section>
    );
};

export default AboutUs;

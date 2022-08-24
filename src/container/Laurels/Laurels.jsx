import React from 'react';
import './Laurels.scss';
import { Subheading } from '../../components';
import { data, images } from '../../constants';

const LaurelsItem = ({ images, title, desc }) => {
    return (
        <div className="laurels__item">
            <img src={images} alt="" />
            <div className="laurels__item-text">
                <p>{title || 'Text Example'}</p>
                <p>{desc || 'Text Example'}</p>
            </div>
        </div>
    );
};

const Laurels = () => {
    return (
        <section id="LAURELS" className="section__padding">
            <div className="laurels__text">
                <Subheading title="Awards & Recognition" />
                <h2>Our Laurels</h2>
                <div className="laurels__list">
                    {data &&
                        data?.awards.map((award, index) => {
                            return (
                                <LaurelsItem
                                    key={`${award.title} ${index}`}
                                    images={award.imgUrl}
                                    title={award.title}
                                    desc={award.subtitle}
                                />
                            );
                        })}
                </div>
            </div>
            <div className="laurels__img">
                <img src={images.laurels} alt="" />
            </div>
        </section>
    );
};

export default Laurels;

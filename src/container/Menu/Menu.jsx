import React from 'react';
import { Button, Subheading } from '../../components';
import { data, images } from '../../constants';
import './Menu.scss';

const MenuItem = ({ name, price, tag }) => {
    return (
        <div className="menu__item">
            <div className="menu__item-info">
                <p>{name || 'Example Text'}</p>
                <div />
                <p>{price || 'Example Text'}</p>
            </div>
            <div className="menu__item_tag">
                <p>{tag || 'Example Text'}</p>
            </div>
        </div>
    );
};

const Menu = () => {
    return (
        <section id="MENU" className="section__padding">
            <Subheading title="Menu That Fits Your Palatte" />
            <div className="menu__title">Today's Special</div>
            <div className="menu__wrapper">
                <div className="menu__table">
                    <p>Wine & Beer</p>
                    <div className="menu__list">
                        {data &&
                            data?.wines.map((wine) => {
                                return (
                                    <MenuItem
                                        name={wine.title}
                                        price={wine.price}
                                        tag={wine.tags}
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className="menu__img">
                  <img src={images.menu} alt="" />
                </div>
                <div className="menu__table">
                    <p>Cocktails</p>
                    <div className="menu__list">
                        {data &&
                            data?.cocktails.map((cocktail) => {
                                return (  
                                    <MenuItem
                                        name={cocktail.title}
                                        price={cocktail.price}
                                        tag={cocktail.tags}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
            <Button title='View More' />
        </section>
    );
};

export default Menu;

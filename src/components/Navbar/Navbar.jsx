import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';

import { images } from '../../constants';
import './Navbar.scss';

import { motion } from 'framer-motion';

const Closed = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            font-size="27"
            class="overlay__close"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path>
        </svg>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen)
    }

    return (
        <nav id="NAVBAR">
            <div className="navbar__img">
                <img src={images.gericht} alt="" />
            </div>
            <ul className="navbar__menu">
                <li>
                    <a href="#HOME">Home</a>
                </li>
                <li>
                    <a href="#ABOUTUS">About</a>
                </li>
                <li>
                    <a href="#MENU">Menu</a>
                </li>
                <li>
                    <a href="#AWARDS">Awards</a>
                </li>
                <li>
                    <a href="#CONTACT">Contact</a>
                </li>
            </ul>
            <div className="navbar__action">
                <p className="navbar__action-auth">Log In / Registration</p>
                <div />
                <p className="navbar__action-book">Book Table</p>
            </div>
            <div className="navbar__mobile-button" onClick={handleClick}>
                <MdOutlineMenu />
            </div>
            {isOpen && (
                <motion.div 
                className="navbar__mobile-menu"
                initial={{
                  opacity: 0,
                  y: -300
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut'
                }}
                >
                    <div className="navbar__mobile-close"
                    onClick={handleClick}
                    >
                        <Closed />
                    </div>
                    <ul>
                        <li onClick={handleClick}>
                            <a href="#HOME">Home</a>
                        </li>
                        <li onClick={handleClick}>
                            <a href="#ABOUTUS">About</a>
                        </li>
                        <li onClick={handleClick}>
                            <a href="#MENU">Menu</a>
                        </li>
                        <li onClick={handleClick}>
                            <a href="#AWARDS">Awards</a>
                        </li>
                        <li onClick={handleClick}>
                            <a href="#CONTACT">Contact</a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

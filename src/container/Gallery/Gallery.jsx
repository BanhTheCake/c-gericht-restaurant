import React from 'react';
import { Button, Subheading } from '../../components';
import './Gallery.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { images } from '../../constants';

import { BiArrowToLeft } from 'react-icons/bi'
import { BiArrowToRight } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'

const Gallery = () => {
    return (
        <section id="GALLERY" className="section__padding">
            <div className="gallery__text">
                <Subheading title="Instagram" />
                <h2>Photo Gallery</h2>
                <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas
                    Mu.
                </p>
                <Button title="View More" />
            </div>
            <div className="gallery__swiper">
                <Swiper
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                  }}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    spaceBetween={30}
                    loop
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    modules={[Navigation]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <div className="gallery__swiper-img">
                            <img src={images.gallery01} alt="" />
                            <BsInstagram />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery__swiper-img">
                            <img src={images.gallery02} alt="" />
                            <BsInstagram />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery__swiper-img">
                            <img src={images.gallery03} alt="" />
                            <BsInstagram />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery__swiper-img">
                            <img src={images.gallery04} alt="" />
                            <BsInstagram />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="prev">
                  <BiArrowToLeft />
                </div>
                <div className="next">
                  <BiArrowToRight />
                </div>
            </div>
        </section>
    );
};

export default Gallery;

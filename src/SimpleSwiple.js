import React from 'react';
import { Swiper, SwiperSlide } from 'react-id-swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import image2 from "./png.png";

const SimpleSwiper = () => {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 30,
      slidesPerView: 3,
      loop: true,
    };
  
    return (
      <div>
        <h2>React Swiper Slider</h2>
        <Swiper {...params}>
          <SwiperSlide>
          <img src= {image2} width={120}/>
          </SwiperSlide>
          <SwiperSlide>
          <img src= {image2} width={120}/>
          </SwiperSlide>
          <SwiperSlide>
          <img src= {image2} width={120}/>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
  
  export default SimpleSwiper;
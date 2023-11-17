import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from './Card';

export default function Slides({ cards = [] }) {

 

  return (
    <>
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-[12vw] lg:my-0 text-[2vw] md:text-[3vw] lg:text-[1vw] text-white cursor-grab flex justify-center items-center"
      >
        {cards?.map((card) => (
          <SwiperSlide key={card.name}>{Card(card)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

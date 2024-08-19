import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.scss";

SwiperCore.use([Navigation, Pagination]);

interface CarouselProps {
  slides: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <Swiper
      pagination={{
        el: ".custom-pagination",
        type: "custom",
        renderCustom: (swiper, current, total) => {
          return `<span>${current}</span><span class="currentPaginationValue"> of ${total}</span>`;
        },
      }}
      navigation={{
        nextEl: ".customNext",
        prevEl: ".customPrev",
      }}
      spaceBetween={30}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

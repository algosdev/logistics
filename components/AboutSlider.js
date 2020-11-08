import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Controller, Thumbs } from "swiper";
SwiperCore.use([Navigation, A11y, Controller, Thumbs]);
const images = [
  {
    src: "/service1.jpg",
  },
  {
    src: "/service2.jpg",
  },
  {
    src: "/service3.jpg",
  },
  {
    src: "/service1.jpg",
  },
  {
    src: "/service2.jpg",
  },
  {
    src: "/service3.jpg",
  },
];
export default function AboutSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <img src={images[activeIndex].src} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={3}
        navigation
        spaceBetween={5}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {images.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="thumb-slide">
                <img src={el.src} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

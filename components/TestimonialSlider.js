import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Navigation,
  A11y,
  Controller,
  Thumbs,
} from "swiper";
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
export default function TestimonialSlider() {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <div className="testimonial">
            <div className="content leading italic">
              "Lorem ipsum dolor sit amet, cum ut magna omnium contentiones, eam
              cu dolorem consequuntur, vim ullum doming platonem ea. Possim
              mediocritatem eu duo, quem laoreet tincidunt eos ad. Virtute
              officiis ne mea. Has scripta pericula voluptatibus"
            </div>
            <div className="author">
              <div className="avatar">
                <img src="/testimonial1.jpg" alt="avatar" />
              </div>
              <div className="details"> - Ana Jones, Business Advisory</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="content leading italic">
              "Lorem ipsum dolor sit amet, cum ut magna omnium contentiones, eam
              cu dolorem consequuntur, vim ullum doming platonem ea. Possim
              mediocritatem eu duo, quem laoreet tincidunt eos ad. Virtute
              officiis ne mea. Has scripta pericula voluptatibus"
            </div>
            <div className="author">
              <div className="avatar">
                <img src="/testimonial1.jpg" alt="avatar" />
              </div>
              <div className="details"> - Ana Jones, Business Advisory</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

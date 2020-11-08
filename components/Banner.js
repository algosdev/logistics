import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, A11y } from "swiper";
SwiperCore.use([EffectFade, Navigation, A11y]);
function Banner() {
  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        effect="fade"
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slide">
            <div className="banner-content">
              <p>At vero eos et accusamus et iusto odio</p>
              <h2 className="heading">Fast, Safe and Exact</h2>
            </div>
            <img src="/banner1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="banner-content left">
              <p>At vero eos et accusamus et iusto odio</p>
              <h2 className="heading">Fast, Safe and Exact</h2>
            </div>
            <img src="/banner2.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;

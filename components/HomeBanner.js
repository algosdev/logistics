import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel from 'react-bootstrap/Carousel'
import SwiperCore, { EffectFade, Navigation, A11y } from 'swiper'
SwiperCore.use([EffectFade, Navigation, A11y])
function Banner() {
  return (
    <div className='banner'>
      {/* <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src='/banner1.jpg' alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='/banner2.jpg' alt='Third slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <Swiper slidesPerView={1} effect='fade' navigation loop>
        <SwiperSlide>
          <div className='slide'>
            <div className='banner-content'>
              <p>At vero eos et accusamus et iusto odio</p>
              <h2 className='heading'>Fast, Safe and Exact</h2>
            </div>
            <img src='/banner1.jpg' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <div className='banner-content left'>
              <p>At vero eos et accusamus et iusto odio</p>
              <h2 className='heading'>Fast, Safe and Exact</h2>
            </div>
            <img src='/banner2.jpg' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner

import React, { useState, useEffect } from 'react'
import { BoldArrow } from './svg'
import AboutSlider from './AboutSlider'
import TestimonialSlider from './TestimonialSlider'
function AboutUs() {
  return (
    <div className='about-component'>
      <div className='container'>
        <div className='grid'>
          <div className='left'>
            <div className='title-cont'>
              <span className='title'>About Us</span>
              <span className='line'></span>
            </div>
            <div className='content leading'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’. Making it look like readable English.
              <span className='highlight bold'>Many desktop publishing </span>
              packages and web page editors now use. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using ‘Content here, content here’. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              ‘Content here, content here’.
            </div>
            <div className='about-boxes'>
              <div className='about-box'>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
              </div>
              <div className='about-box blue'>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
                <p>
                  <span className='arrow'>
                    <BoldArrow />
                  </span>
                  <span>Cargo Transport</span>
                </p>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='slider'>
              <AboutSlider />
            </div>
          </div>
        </div>
      </div>
      <div className='extra'>
        <div className='extra-grid container'>
          <div className='testimonials'>
            <div className='title-cont'>
              <span className='title'>Testimonials</span>
              <span className='line'></span>
            </div>
            <TestimonialSlider />
          </div>
          <div className='faq'>
            <div className='title-cont'>
              <span className='title'>FAQ</span>
              <span className='line'></span>
            </div>
            <div className='accordion-cont'>
              <div className='block'>
                <input type='checkbox' name='q1' id='q1' />
                <label htmlFor='q1'>
                  <div className='plus'>+</div>
                  <div className='minus'>-</div>
                  <span>Lorem ipsum dolor sit amet?</span>
                </label>
                <div className='info'>
                  <p className='default'>
                    Maecenas et egestas pharetra nec nunc tellus vitae
                    scelerisque. Metus venenatis quis pellentesque dictum. Enim
                    eros, magnis quis at. Ut velit dignissim malesuada dictumst.
                    Vehicula enim, nulla et porttitor commodo orci maecenas.
                  </p>
                </div>
              </div>
              <div className='block'>
                <input type='checkbox' name='q1' id='q2' />
                <label htmlFor='q2'>
                  <div className='plus'>+</div>
                  <div className='minus'>-</div>
                  <span>Hendrerit justo, eu magnis sagittis?</span>
                </label>
                <div className='info'>
                  <p className='default'>
                    Maecenas et egestas pharetra nec nunc tellus vitae
                    scelerisque. Metus venenatis quis pellentesque dictum. Enim
                    eros, magnis quis at. Ut velit dignissim malesuada dictumst.
                    Vehicula enim, nulla et porttitor commodo orci maecenas.
                  </p>{' '}
                </div>
              </div>
              <div className='block'>
                <input type='checkbox' name='q1' id='q3' />
                <label htmlFor='q3'>
                  <div className='plus'>+</div>
                  <div className='minus'>-</div>
                  <span>Sit dolor, et fusce id?</span>
                </label>
                <div className='info'>
                  <p className='default'>
                    Maecenas et egestas pharetra nec nunc tellus vitae
                    scelerisque. Metus venenatis quis pellentesque dictum. Enim
                    eros, magnis quis at. Ut velit dignissim malesuada dictumst.
                    Vehicula enim, nulla et porttitor commodo orci maecenas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='request-quote'>
            <div className='title-cont'>
              <span className='title'>Request Quote</span>
              <span className='line'></span>
            </div>
            <form>
              <div className='grid'>
                <div className='input'>
                  <label htmlFor='name'>Your Name (required)</label>
                  <input id='name' type='text' required />
                </div>
                <div className='input'>
                  <label htmlFor='subject'>Subject</label>
                  <input id='subject' type='text' required />
                </div>
                <div className='input'>
                  <label htmlFor='name'>Your Email (required)</label>
                  <input id='name' type='text' required />
                </div>
                <div className='input'>
                  <label htmlFor='name'>Department</label>
                  <select id='name' type='text' defaultValue='business'>
                    <option value='business'>Business Advisory</option>

                    <option value='financial'>Financial Subject</option>
                    <option value='sales'>Sales</option>
                  </select>
                </div>
              </div>
              <div className='btn'>Send Message Now</div>
            </form>
          </div>
        </div>
      </div>
      <div className='map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2118.2919116398357!2d69.28320125367684!3d41.33676356296105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5208656fb9%3A0xc1bdeeec09d6438e!2sInternational%20Business%20Center!5e0!3m2!1sen!2s!4v1604730421603!5m2!1sen!2s'></iframe>
      </div>
    </div>
  )
}

export default AboutUs

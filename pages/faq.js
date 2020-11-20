import React from 'react'
import FaqBanner from '../components/FaqBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Truck, Plane, Earth } from '../components/svg'
import MenuTab from '../components/MenuTab'
import DownloadDetails from '../components/DownloadDetails'
import News from '../components/News'
function Faq() {
  return (
    <div className='faq-page'>
      <Header active='faq' />
      <FaqBanner />
      <div className='container grid'>
        <div className='left'>
          <div className='faq'>
            <div className='accordion-cont'>
              <div className='block'>
                <input type='checkbox' name='q1' id='q1' />
                <label htmlFor='q1'>
                  <div className='plus'>+</div>
                  <div className='minus'>-</div>
                  <span>
                    WE HAVE CHEERFULLY AND EXPERTLY CREATED HANDEL CORPORATE
                  </span>
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
                  <span>
                    {' '}
                    WE HAVE CHEERFULLY AND EXPERTLY CREATED HANDEL CORPORATE
                  </span>
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
                  <span>
                    {' '}
                    WE HAVE CHEERFULLY AND EXPERTLY CREATED HANDEL CORPORATE
                  </span>
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
                <input type='checkbox' name='q1' id='q4' />
                <label htmlFor='q4'>
                  <div className='plus'>+</div>
                  <div className='minus'>-</div>
                  <span>
                    {' '}
                    WE HAVE CHEERFULLY AND EXPERTLY CREATED HANDEL CORPORATE
                  </span>
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
                <input type='checkbox' name='q1' id='q5' />
                <label htmlFor='q5'>
                  <div className='plus'>+</div>
                  <div className='minus'>-</div>
                  <span>
                    {' '}
                    WE HAVE CHEERFULLY AND EXPERTLY CREATED HANDEL CORPORATE
                  </span>
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
        </div>
        <div className='right'>
          <MenuTab />
          <DownloadDetails />
          <News />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faq

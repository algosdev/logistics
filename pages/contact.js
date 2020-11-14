import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactBanner from '../components/ContactBanner'
import Socials from '../components/Socials'
import ContactForm from '../components/ContactForm'
function contact() {
  return (
    <div className='contact-page'>
      <Header active='contact' />
      <ContactBanner />
      <div className='container'>
        <Socials />
        <div className='grid'>
          <ContactForm />
          <div className='map'>
            <div className='title-cont'>
              <span className='title'>Our Location</span>
              <span className='line'></span>
            </div>
            <div className='leading'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </div>
            <div className='map-cont'>
              <div className='map'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2118.2919116398357!2d69.28320125367684!3d41.33676356296105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5208656fb9%3A0xc1bdeeec09d6438e!2sInternational%20Business%20Center!5e0!3m2!1sen!2s!4v1604730421603!5m2!1sen!2s'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contact

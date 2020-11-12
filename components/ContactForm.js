import React from 'react'

function ContactForm() {
  return (
    <div className='contact-form'>
      <div className='title-cont'>
        <span className='title'>Contact Us Now</span>
        <span className='line'></span>
      </div>
      <form>
        <div className='input'>
          <label htmlFor='name'>Your Name (required)</label>
          <input type='text' id='name' />
        </div>
        <div className='input'>
          <label htmlFor='email'>Your Email (required)</label>
          <input type='text' id='email' />
        </div>
        <div className='input'>
          <label htmlFor='subject'>Subject</label>
          <input type='text' id='subject' />
        </div>
        <div className='input'>
          <label htmlFor='subject'>Your Message</label>
          <textarea id='subject'></textarea>
        </div>
        <button className='btn'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm

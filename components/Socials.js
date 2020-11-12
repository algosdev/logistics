import React from 'react'
import { ContactChip, ContactEmail, ContactHeart, ContactPhone } from './svg'
function Socials() {
  return (
    <div className='socials-cont'>
      <div className='inner'>
        <div className='item'>
          <div className='icon-cont'>
            <div className='icon'>
              <ContactPhone />
            </div>
          </div>
          <div className='content'>
            <div className='mini-title bold'>+1 234 554 777</div>
            <div className='leading'>
              On the other hand, we denounce with righteous.
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='icon-cont'>
            <div className='icon'>
              <ContactEmail />
            </div>
          </div>
          <div className='content'>
            <div className='mini-title bold'>info@codeless.co</div>
            <div className='leading'>
              On the other hand, we denounce with righteous.
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='icon-cont'>
            <div className='icon'>
              <ContactHeart />
            </div>
          </div>
          <div className='content'>
            <div className='mini-title bold'>Support Forums</div>
            <div className='leading'>
              On the other hand, we denounce with righteous.
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='icon-cont'>
            <div className='icon'>
              <ContactChip />
            </div>
          </div>
          <div className='content'>
            <div className='mini-title bold'>Submit Request</div>
            <div className='leading'>
              On the other hand, we denounce with righteous.
            </div>
          </div>
        </div>
      </div>
      <div className='border'></div>
    </div>
  )
}

export default Socials

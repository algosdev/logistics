import React from 'react'

function MenuTab() {
  return (
    <>
      <div className='menutab-cont'>
        <div className='tab active'>
          <span>Transport</span>
        </div>
        <div className='tab'>
          <span>Logistic</span>
        </div>
        <div className='tab'>
          <span>Tow Services</span>
        </div>
        <div className='tab'>
          <span>Passenger Transport</span>
        </div>
        <div className='tab'>
          <span>Air Transport</span>
        </div>
        <div className='tab'>
          <span>Sea Transport</span>
        </div>
      </div>
      <div className='border'></div>
    </>
  )
}

export default MenuTab

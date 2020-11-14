import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Truck, Plane, Earth } from '../components/svg'
import MenuTab from '../components/MenuTab'
import DownloadDetails from '../components/DownloadDetails'
import News from '../components/News'
function Service() {
  return (
    <div className='services-page'>
      <Header active='services' />
      <ServiceBanner />
      <div className='container grid'>
        <div className='left'>
          <MenuTab />
          <DownloadDetails />
          <News />
        </div>
        <div className='right'>
          <div className='service-types'>
            <div className='img'>
              <img src='/service1.jpg' alt='' />
            </div>
            <div className='content'>
              <div className='title-cont'>
                <span className='title'>Transport</span>
                <span className='line'></span>
              </div>
              <div className='leading'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores. At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores
              </div>
            </div>
            <div className='content'>
              <div className='title-cont'>
                <span className='title'>Storage</span>
                <span className='line'></span>
              </div>
              <div className='leading'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores. At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores
              </div>
            </div>
            <div className='img'>
              <img src='/service2.jpg' alt='' />
            </div>
            <div className='img'>
              <img src='/service3.jpg' alt='' />
            </div>
            <div className='content'>
              <div className='title-cont'>
                <span className='title'>Storage</span>
                <span className='line'></span>
              </div>
              <div className='leading'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores. At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service

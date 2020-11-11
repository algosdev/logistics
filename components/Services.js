import React from 'react'
import {
  SettingIcon,
  Plane,
  Earth,
  Exchange,
  Network,
  Truck,
  Highway,
  Package,
} from './svg'
function Services() {
  return (
    <div className='services'>
      <div className='container'>
        <div className='grid'>
          <div className='service-item'>
            <div className='img'>
              <img src='/service1.jpg' alt='service' />
            </div>
            <div className='service-content'>
              <p className='mini-title bold'>CARGO</p>
              <p className='leading'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='img'>
              <img src='/service2.jpg' alt='service' />
            </div>
            <div className='service-content'>
              <p className='mini-title bold'>CARGO</p>
              <p className='leading'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='img'>
              <img src='/service3.jpg' alt='service' />
            </div>
            <div className='service-content'>
              <p className='mini-title bold'>CARGO</p>
              <p className='leading'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='service-list'>
        <div className='container '>
          <div className='grid'>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <SettingIcon />
              </div>
            </div>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <Exchange />
              </div>
            </div>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <Network />
              </div>
            </div>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <Package />
              </div>
            </div>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <Truck />
              </div>
            </div>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <Highway />
              </div>
            </div>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <Plane />
              </div>
            </div>
            <div className='service-list-item'>
              <div className='title'>Door-to-door Delivery</div>
              <div className='txt'>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled
              </div>
              <div className='icon'>
                <Earth />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Truck, Plane, Earth } from '../components/svg'
import DownloadDetails from '../components/DownloadDetails'
import MenuTab from '../components/MenuTab'
import News from '../components/News'
function About() {
  return (
    <div className='about-page'>
      <Header active='about' />
      <AboutBanner />
      <div className=' grid container'>
        <div className='left'>
          <div className='transport-types'>
            <div className='inner'>
              <div className='type'>
                <div className='icon'>
                  <Truck />
                </div>
                <div className='content'>
                  <div className='mini-title bold'>Ground Transport</div>
                  <div className='leading'>
                    On the other hand, we denounce with righteous indignation
                    and dislike.
                  </div>
                </div>
              </div>
              <div className='type'>
                <div className='icon'>
                  <Plane />
                </div>
                <div className='content'>
                  <div className='mini-title bold'>Ground Transport</div>
                  <div className='leading'>
                    On the other hand, we denounce with righteous indignation
                    and dislike.
                  </div>
                </div>
              </div>
              <div className='type'>
                <div className='icon'>
                  <Earth />
                </div>
                <div className='content'>
                  <div className='mini-title bold'>Ground Transport</div>
                  <div className='leading'>
                    On the other hand, we denounce with righteous indignation
                    and dislike.
                  </div>
                </div>
              </div>
            </div>
            <div className='border'></div>
          </div>
          <div className='history'>
            <div className='title-cont'>
              <span className='title'>History Overview</span>
              <span className='line'></span>
            </div>
            <div className='leading'>
              Lorem Ipsum is simply{' '}
              <span className='highlight bold'>
                {' '}
                dummy text of the printing
              </span>{' '}
              and typesetting industry. Lorem Ipsum has been the industry’s
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
              <br />
              <br />
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <div className='border'></div>
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

export default About

import React from 'react'
import { LongArrow, GooglePlus, Facebook, Twitter, Youtube } from './svg'
import Link from 'next/link'
function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='container'>
        <footer>
          <div className='column'>
            <div className='welcome'>Welcome to Handel</div>
            <div className='content'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
              Lorem Ipsum has been the industry’s standard dummy text ever
              since.
            </div>
            <div className='socials'>
              <a href='#' className='item'>
                <Facebook />
              </a>
              <a href='#' className='item'>
                <Twitter />
              </a>
              <a href='#' className='item'>
                <GooglePlus />
              </a>
              <a href='#' className='item'>
                <Youtube />
              </a>
            </div>
          </div>
          <div className='column'>
            <div className='welcome'>Contact Details</div>
            <div className='content'>
              <p className='bold'>Address:</p>
              <p> Something Street New York 2002 SS</p>
              <br />
              <p className='bold'>Open hours:</p>
              <p>Mon – Fri: 10AM – 7PM</p>
              <br />
              <p className='bold'>Cel Phone:</p>
              <p>001-355-114</p>
              <br />
            </div>
          </div>
          <div className='column'>
            <div className='welcome'>Useful Links</div>
            <div className='link-cont'>
              <div className='footer-link'>
                <Link href='/contact'>
                  <a>
                    <LongArrow />
                    <p>Contact Us</p>
                  </a>
                </Link>
              </div>
              <div className='footer-link'>
                <Link href='/calculator'>
                  <a>
                    <LongArrow />
                    <p>Cost Calculator</p>
                  </a>
                </Link>
              </div>
              <div className='footer-link'>
                <Link href='/services'>
                  <a>
                    <LongArrow />
                    <p>Services</p>
                  </a>
                </Link>
              </div>
              <div className='footer-link'>
                <Link href='/faq'>
                  <a>
                    <LongArrow />
                    <p>FAQ</p>
                  </a>
                </Link>
              </div>
              <div className='footer-link'>
                <Link href='/about'>
                  <a>
                    <LongArrow />
                    <p>About</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='welcome'>Recent Comments</div>
            <div className='content'>
              <div className='comment'>
                admin on We create careers and open new posibbilities for our
                clients
              </div>
              <div className='comment'>
                admin on We create careers and open new posibbilities for our
                clients
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className='bottom-menu'>
        <div className='container'>
          <div className='copyright'>Developed by Udevs.</div>
          <div className='footer-menu'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/about'>
              <a>About Company</a>
            </Link>
            <Link href='/services'>
              <a>Our Services</a>
            </Link>
            <Link href='/calculator'>
              <a>Cost Calculator</a>
            </Link>
            <Link href='/faq'>
              <a>FAQ</a>
            </Link>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

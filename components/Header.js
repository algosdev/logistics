import React, { useState, useEffect, useRef } from 'react'
import { Search, Location, Phone, Heart } from './svg'
import Link from 'next/link'
import { useOutsideCloseMenu } from '../libs/useOutsideCloseMenu'
function Header({ dark, active }) {
  const languages = ['EN', 'RU', 'UZ']
  const [sticky, setSticky] = useState(true)
  const [bg, SetBg] = useState(false)
  const langPopupRef = useRef(null)
  const [langPopUp, setLangPopUp] = useState(false)
  const [activeLang, setActiveLang] = useState(languages[0])
  useOutsideCloseMenu(langPopupRef, () => setLangPopUp(false))
  useEffect(() => {
    if (window) {
      let oldScroll = window.scrollY
      window.addEventListener('scroll', () => {
        if (oldScroll - window.scrollY >= 0) {
          setSticky(true)
          if (window.scrollY !== 0) {
            SetBg(true)
          } else {
            SetBg(false)
          }
        } else {
          setSticky(false)
        }
        oldScroll = window.scrollY
      })
      // window.addEventListener('click', (e) => {
      //   if (e.target.closest('.show') || e.target.className.includes('show')) {
      //     setLangPopUp(false)
      //   }
      //   console.log('clicked', e.target.closest('.show'))
      // })
    }
  })
  console.log(sticky, bg)
  return (
    <div
      className={`header_container ${sticky ? 'sticky' : ''} ${bg ? 'bg' : ''}`}
    >
      <div className='header-inner'>
        <div className='top-nav container'>
          <div className='header-row-inner'>
            <div className='left'>
              <div className='header-txt'>
                <p>Welcome to Handel WP Theme</p>
              </div>
              <div className='header-lang' ref={langPopupRef}>
                <div className='dropdown-lang'>
                  <div
                    className='active-lang'
                    onClick={() => setLangPopUp(!langPopUp)}
                  >
                    {activeLang}
                  </div>
                  <ul className={langPopUp ? 'show' : ''}>
                    {activeLang !== 'EN' ? (
                      <li
                        onClick={() => {
                          setActiveLang('EN')
                        }}
                      >
                        <span>EN</span>
                      </li>
                    ) : (
                      ''
                    )}
                    {activeLang !== 'RU' ? (
                      <li
                        onClick={() => {
                          setActiveLang('RU')
                        }}
                      >
                        <span>RU</span>
                      </li>
                    ) : (
                      ''
                    )}
                    {activeLang !== 'UZ' ? (
                      <li
                        onClick={() => {
                          setActiveLang('UZ')
                        }}
                      >
                        <span>UZ</span>
                      </li>
                    ) : (
                      ''
                    )}

                    {/* )
                      })} */}
                  </ul>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='header-el'>
                <span className='icon'>
                  <Location />
                </span>
                <span>1010 Berlin Street, Germany</span>
              </div>
              <div className='header-el'>
                <span className='icon'>
                  <Phone />
                </span>
                <span>+123 456 789</span>
              </div>
              <div className='header-el'>
                <span className='icon'>
                  <Heart />
                </span>
                <span>Handel Transport Theme</span>
              </div>
              <div className='header-el'>
                <form>
                  <span className='icon'>
                    <Search />
                  </span>
                  <input type='search' id='search' placeholder='Search' />
                  <i></i>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={`header-row ${bg ? 'bg' : ''}`}>
          <div className='container'>
            <div className='header-el'>
              <div className='logo'>
                <a href='#'>
                  <img src='/logo.png' alt='Logo' />
                </a>
              </div>
            </div>
            <div className='navigator'>
              <nav>
                <ul>
                  <li className='nav-item'>
                    <Link href='/'>
                      <a>
                        <span className={active === 'home' ? 'active' : ''}>
                          HOME
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/about'>
                      <a>
                        <span className={active === 'about' ? 'active' : ''}>
                          ABOUT COMPANY
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/services'>
                      <a>
                        <span className={active === 'services' ? 'active' : ''}>
                          OUR SERVICES
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/calculator'>
                      <a>
                        <span
                          className={active === 'calculator' ? 'active' : ''}
                        >
                          COST CALCULATOR
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/faq'>
                      <a>
                        <span className={active === 'faq' ? 'active' : ''}>
                          FAQ
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/contact'>
                      <a>
                        <span className={active === 'contact' ? 'active' : ''}>
                          Contact
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className='btn-cont'>
                  <a href='#' className='btn'>
                    REQUEST A QUOTE
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

import React, { useState, useEffect } from "react";
import { Search, Location, Phone, Heart } from "./svg";
function Header() {
  const languages = ["US", "RU", "UZ"];
  const [langPopUp, setLangPopUp] = useState(false);
  const [activeLang, setActiveLang] = useState(languages[0]);
  return (
    <div className="header_container">
      <div className="top-nav container">
        <div className="header-row-inner">
          <div className="left">
            <div className="header-txt">
              <p>Welcome to Handel WP Theme</p>
            </div>
            <div className="header-lang">
              <div className="dropdown-lang">
                <div
                  className="active-lang"
                  onClick={() => setLangPopUp(!langPopUp)}
                >
                  {activeLang}
                </div>
                <ul className={langPopUp ? "show" : ""}>
                  {languages
                    .filter((el) => el !== activeLang)
                    .map((el, index) => {
                      return (
                        <li
                          onClick={() => {
                            setActiveLang(languages[index]);
                          }}
                          key={index}
                        >
                          <span>{el}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="header-el">
              <span className="icon">
                <Location />
              </span>
              <span>1010 Berlin Street, Germany</span>
            </div>
            <div className="header-el">
              <span className="icon">
                <Phone />
              </span>
              <span>+123 456 789</span>
            </div>
            <div className="header-el">
              <span className="icon">
                <Heart />
              </span>
              <span>Handel Transport Theme</span>
            </div>
            <div className="header-el">
              <form>
                <span className="icon">
                  <Search />
                </span>
                <input type="search" id="search" placeholder="Search" />
                <i></i>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="header-row container">
        <div className="header-el">
          <div className="logo">
            <a href="#">
              <img src="/logo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="navigator">
          <nav>
            <ul>
              <li className="nav-item">
                <a href="#">
                  <span className="active">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <span>ABOUT COMPANY</span>
                </a>
                <div className="nav-dropdown">
                  <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="#">
                  <span>OUR SERICES</span>
                </a>
                <div className="nav-dropdown">
                  <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="#">
                  <span>OTHER AGES</span>
                </a>
                <div className="nav-dropdown">
                  <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="#">
                  <span>NEWS</span>
                </a>
                <div className="nav-dropdown">
                  <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="#">
                  <span>WORKS/CASES</span>
                </a>
                <div className="nav-dropdown">
                  <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="btn-cont">
              <a href="#" className="btn">
                REQUEST A QUOTE
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

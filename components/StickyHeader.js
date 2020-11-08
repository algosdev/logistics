import React, { useState, useEffect } from "react";
import { Search, Location, Phone, Heart } from "./svg";
function StickyHeader() {
  return (
    <div className="header_container sticky">
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

export default StickyHeader;

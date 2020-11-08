import React from "react";
import { LongArrow, GooglePlus, Facebook, Twitter, Youtube } from "./svg";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <footer>
          <div className="column">
            <div className="welcome">Welcome to Handel</div>
            <div className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
              Lorem Ipsum has been the industry’s standard dummy text ever
              since.
            </div>
            <div className="socials">
              <a href="#" className="item">
                <Facebook />
              </a>
              <a href="#" className="item">
                <Twitter />
              </a>
              <a href="#" className="item">
                <GooglePlus />
              </a>
              <a href="#" className="item">
                <Youtube />
              </a>
            </div>
          </div>
          <div className="column">
            <div className="welcome">Contact Details</div>
            <div className="content">
              <p className="bold">Address:</p>
              <p> Something Street New York 2002 SS</p>
              <br />
              <p className="bold">Open hours:</p>
              <p>Mon – Fri: 10AM – 7PM</p>
              <br />
              <p className="bold">Cel Phone:</p>
              <p>001-355-114</p>
              <br />
            </div>
          </div>
          <div className="column">
            <div className="welcome">Useful Links</div>
            <div className="link-cont">
              <div className="footer-link">
                <a href="">
                  <LongArrow />
                  <p>Contact Us</p>
                </a>
              </div>
              <div className="footer-link">
                <a href="">
                  <LongArrow />
                  <p>Cost Calculator</p>
                </a>
              </div>
              <div className="footer-link">
                <a href="">
                  <LongArrow />
                  <p>Works</p>
                </a>
              </div>
              <div className="footer-link">
                <a href="">
                  <LongArrow />
                  <p>FAQ</p>
                </a>
              </div>
              <div className="footer-link">
                <a href="">
                  <LongArrow />
                  <p>Testimonials</p>
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="welcome">Recent Comments</div>
            <div className="content">
              <div className="comment">
                admin on We create careers and open new posibbilities for our
                clients
              </div>
              <div className="comment">
                admin on We create careers and open new posibbilities for our
                clients
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bottom-menu">
        <div className="container">
          <div className="copyright">This theme was created from Udevs.</div>
          <div className="footer-menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Company</a>
            <a href="">Our Services</a>
            <a href="">Other Pages</a>
            <a href="">News</a>
            <a href="">Works / Cases</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

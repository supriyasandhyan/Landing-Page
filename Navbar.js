import React from "react";
import { useState, useEffect } from "react";
import NimapLogo from "../Image/NimapLogo.png";
import "./Navbar.css";

export default function Navbar() {
  const [collapse, setState] = useState(true);

  return (
    <>
      <nav className="navbarr">
      
          <img className="nav-img" src={NimapLogo}></img>

            {!collapse &&
              <a href="#GetInTouch" id='getInTouchMobile'>
                <button className="nav-bttn">
                  <strong>GET FREE QUOTE</strong>
                </button>
              </a>
            }

          <button
            className="hamburger"
            onClick={() => {
              if (collapse) {
                document.getElementById("nav_ul").style.display = "none";
              } else {
                document.getElementById("nav_ul").style.display = "block";
              }
              setState(!collapse);
            }}
          >
          <i className="fa-solid fa-bars"></i>              
          </button>

          <ul className="navbar-ul" id="nav_ul">
            <li className="navbar-ul-li">
              <a href="#SEO">SEO Service</a>
            </li>

            <li className="navbar-ul-li">
              <a href="#BeNeFiTs">Benefits</a>
            </li>

            <li className="navbar-ul-li">
              <a href="#TestiMonial">Testimonials</a>
            </li>

            <li className="navbar-ul-li">
              <a href="#OutSource">Outsource Now</a>
            </li>
          </ul>

          {collapse &&
            <a href="#GetInTouch" id='getInTouchDesktop'>
              <button className="nav-bttn">
                <strong>GET FREE QUOTE</strong>
              </button>
            </a>
          }
      </nav>
    </>
  );
}

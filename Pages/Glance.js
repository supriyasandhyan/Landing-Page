import React from "react";
import classes from "./CSS/Glance.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Glance1 from "../../Image/Glance1.svg";
import Glance2 from "../../Image/Glance2.svg";

function Glance() {
  return (
    <div className={classes["glance"]}>
      <div className={classes["glance-head"]}>
        <p className={classes["glancetext"]}>
          A GLANCE OF OUR <b>CLIENT</b> WORK
        </p>
      </div>

      <div class="w-100">
        <div
          id="myCarousel"
          class="carousel slide"
          data-bs-interval="3000"
          data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active">
            </li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Glance1} class="d-block" alt="Slide 1" />
            </div>
            <div class="carousel-item">
              <img src={Glance2} class="d-block" alt="Slide 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Glance;

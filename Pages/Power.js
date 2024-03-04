import React from "react";
import powerimage from "../../Image/powerimage.svg";
import classes from "./CSS/Power.module.css";

function Power() {
  return (
    <div className={classes["power-parent"]}>
      <div className={classes["power-subchild-1"]}>
        <div className={classes["power-intro"]}>
          <p>HARNESS THE POWER OF</p>
          <div className={classes["homepower"]}>
            <label id="resizing-h3" className={classes[""]}>
              <span>
                <div className={classes["stage"]}>
                  <div className={classes["cubespinner"]}>
                    <div className={classes["hideMe1"]}>SEO</div>
                    <div className={classes["hideMe2"]}>Google AdWords</div>
                    <div className={classes["hideMe3"]}>LinkedIn Lead Generation</div>
                    <div className={classes["hideMe4"]}>Social Media</div>
                    <div className={classes["hideMe5"]}>Lead Generation Service</div>
                  </div>
                </div>
              </span>
            </label>
          </div>
          </div>
        
        <div className={classes["power-button"]}>
          <a href="#GetInTouch">
            <button>Know More</button>
          </a>
        </div>
      </div>

      <div className={classes["power-subchild-2"]}>
        <img className={classes["power-image"]} src={powerimage} />
      </div>
    </div>
  );
}

export default Power;

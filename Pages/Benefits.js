import React from "react";
import Benefit from "../../Image/Benefit.svg";
import classes from "./CSS/Benefits.module.css";

export default function Benefits() {
  return (
    <div className={classes["benefits-main"]} id="BeNeFiTs">
      <div className={classes["benefits-sub1"]}>
        <img className={classes["benefit-img"]} src={Benefit} />
      </div>

      <div className={classes["benefits-sub2"]}>
        <div className={classes["benefits-sub1-intro"]}>
          <p className={classes["intro-first-p"]}>
            Why Outsource</p>
            <p className={classes["intro-second-p"]}>
            LEAD GENERATION?
            </p>
        </div>
        
        <div className={classes["benefit-intro-content"]}>
          <p className={classes["content-p"]}>
            Strategic SEO will help you increase your organic leads. Our SEO
            experts by following a streamlined project management process will
            generate organic qualified leads daily without paying Search
            Engines.
          </p>
        </div>
      </div>

    </div>
  );
}

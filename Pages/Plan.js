import React from "react";
import plan from "../../Image/plan.svg";
import classes from "./CSS/Plan.module.css";

export default function Plan() {
  return (
    <div className={classes["plan-parent"]}>
      <div className={classes["plan-child1"]}>
        <img src={plan} className={classes["plan-image"]} />
      </div>
      <div className={classes["plan-child2"]}>
        <div className={classes["plan-head"]}>
          <p className={classes["plan-p1"]}>LET'S DISCUSS YOUR</p>
          <p className={classes["plan-p2"]}>PLAN-OF-ACTION</p>
        </div>
        <div className={classes["plan-button"]}>
          <a href="#GetInTouch">
            <button>Lets Discuss</button>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import classes from "./CSS/SEO.module.css";
import ReportingAnalysis from "../../Image/ReportingAnalysis.svg";
import AccesstoProgress from "../../Image/AccesstoProgress.svg";
import googlecertified from "../../Image/googlecertified.svg";
import ProjectManagers from "../../Image/ProjectManagers.svg";
import AffordableCosts from "../../Image/AffordableCosts.svg";

function SEO() {
  return (
    <div className={classes["seo"]} id="SEO">
      <div className={classes["seo-intro"]}>
        <p>
          WHY USE <b>LEAD GENERATION</b>
        </p>
        <p>
          SERVICE FROM <b>NIMAP INFOTECH?</b>
        </p>
      </div>
      <div className={classes["Main-Row"]}>
        <div className={classes["row-item1"]}>
          <div className={classes["img-icon"]}>
            <img src={googlecertified} className={classes["card-img"]} />
          </div>

          <div className={classes["content"]}>
            <strong>100% Google Certified</strong>
            <br />
            SEO Strategies
          </div>
        </div>

        <div className={classes["row-item1"]}>
          <div className={classes["img-icon"]}>
            <img src={ProjectManagers} className={classes["card-img"]} />
          </div>

          <div className={classes["content"]}>
            Dedicated <strong>Project</strong>
            <br />
            <strong>Managers</strong>
          </div>
        </div>

        <div className={classes["row-item1"]}>
          <div className={classes["img-icon"]}>
            <img src={AffordableCosts} className={classes["card-img3"]} />
          </div>

          <div className={classes["content"]}>
            Extreimely Competetive <br />& <strong>Affordable Costs</strong>
          </div>
        </div>

        <div className={classes["row-item1"]}>
          <div className={classes["img-icon"]}>
            <img src={AccesstoProgress} className={classes["card-img"]} />
          </div>

          <div className={classes["content"]}>
            <strong>24*7 Access </strong> to Progress <br />& Reports
          </div>
        </div>

        <div className={classes["row-item1"]}>
          <div className={classes["img-icon"]}>
            <img src={ReportingAnalysis} className={classes["card-img"]} />
          </div>

          <div className={classes["content"]}>
            Weekly Monthly
            <br />
            <strong>Reporting Analysis</strong>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className={classes["seo-bttn"]}>
        <a href="#GetInTouch">
          <button className={classes["enqbtn"]}>Enquire Now</button>
        </a>
      </div>
    </div>
  );
}
export default SEO;

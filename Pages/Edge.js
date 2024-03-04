import React from "react";
import classes from "./CSS/Edge.module.css";
import ECommseo from "../../Image/ECommseo.svg";
import DegreeHOTRACSystem from "../../Image/DegreeHOTRACSystem.svg";
import Locseo from "../../Image/Locseo.svg";
import LinkBuildingService from "../../Image/LinkBuildingService.svg";
import SEOForSmallBusiness from "../../Image/SEOForSmallBusiness.svg";

export default function Edge() {
  return (
    <div className={classes["edge"]}>
      <div className={classes["edge-intro"]}>
        <p>
          <b>CUTTING-EDGE LEAD GENERATION</b>
        </p>
        <p>THAT LET WONDERS HAPPEN ORGANICALLY</p>
      </div>

      <div className={classes["edge-cards"]}>

        <div className={classes["edge-card"]}>
          <div className={classes["section1"]}>
            <div className={classes["section-img"]}>
              <img className={classes["edge-icons"]} src={ECommseo} />
            </div>
            <div className={classes["section-head"]}>
              <p className={classes["section-head-p"]}>
                <strong>E - Commerce SEO</strong>
              </p>
            </div>
          </div>
          <hr />
          <div className={classes["section2"]}>
            <p className={classes["section2-p"]}>
              Our SEO Experts will help you rank your product/services and
              category pages and perform all the related activities to generate
              qualified leads.
            </p>
          </div>
        </div>

        <div className={classes["edge-card"]}>
          <div className={classes["section1"]}>
            <div className={classes["section-img"]}>
              <img className={classes["edge-icons"]} src={LinkBuildingService} />
            </div>
            <div className={classes["section-head"]}>
              <p className={classes["section-head-p"]}>
                <strong>Link Building Service</strong>
              </p>
            </div>
          </div>
          <hr />
          <div className={classes["section2"]}>
            <p className={classes["section2-p"]}>
              Our SEO experts will build quality links (Guest Post, Article
              submission, Business Listings, etc) according to Google’s
              Algorithm
            </p>
          </div>
        </div>

        <div className={classes["edge-card"]}>
          <div className={classes["section1"]}>
            <div className={classes["section-img"]}>
              <img className={classes["edge-icons"]} src={SEOForSmallBusiness} />
            </div>
            <div className={classes["section-head"]}>
              <p className={classes["section-head-p"]}>
                <strong>SEO For Small Business</strong>
              </p>
            </div>
          </div>
          <hr />
          <div className={classes["section2"]}>
            <p className={classes["section2-p"]}>
              Our Advanced SEO Strategy can help small businesses generate local
              and international enquiries with niche targeting
            </p>
          </div>
        </div>

        <div className={classes["edge-card"]}>
          <div className={classes["section1"]}>
            <div className={classes["section-img"]}>
              <img className={classes["edge-icons"]} src={DegreeHOTRACSystem} />
            </div>
            <div className={classes["section-head"]}>
              <p className={classes["section-head-p"]}>
                <strong>360-Degree HOTRAC System</strong>
              </p>
            </div>
          </div>
          <hr />
          <div className={classes["section2"]}>
            <p className={classes["section2-p"]}>
              Robust Measurable Digital marketing efforts helps you to generate
              Leads and Enquiries for your business
            </p>
          </div>
        </div>

        <div className={classes["edge-card"]}>
          <div className={classes["section1"]}>
            <div className={classes["section-img"]}>
              <img className={classes["edge-icons"]} src={Locseo} />
            </div>
            <div className={classes["section-head"]}>
              <p className={classes["section-head-p"]}>
                <strong>Local SEO</strong>
              </p>
            </div>
          </div>
          <hr />
          <div className={classes["section2"]}>
            <p className={classes["section2-p"]}>This will help you generate local enquiries</p>
          </div>
        </div>
      </div>

      <div className={classes["edge-button"]}>
        <a href="#GetInTouch">
          <button className={classes["edgebutton"]}>Enquire Now</button>
        </a>
      </div>
    </div>
  );
}

import React from "react";
import FooterContactForm from "./FooterContactForm";
import indiaFlag from "../../Image/indiaFlag.svg";
import UAEflag from "../../Image/UAEflag.svg";
import classes from './CSS/Footer.module.css';
import Twitter from '../../Image/Twitter.svg';
import Facebook  from '../../Image/Facebook.svg';
import Insta from '../../Image/Insta.svg';
import linkedin from '../../Image/linkedin.svg';

const Footer = () => {
  return (
    <div className={classes["footer"]}>
      <div className={classes["footer-sub"]}>
        <div className={classes["left"]}>
          <div className={classes["rowrow"]}>
            <div className={classes["ffrme"]}>
              <div className={classes["frame-border"]}>
                <div className={classes["iframe-container"]}>
                  <iframe
                    width="250"
                    height="155"
                    src="https://www.youtube.com/embed/DOMbQuiJu3E?rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
              <p className={classes["cont-p"]}> CONTACT</p>
              <div className={classes["mainflex"]}>

                <div className={classes["addresscards"]}>
                  <div className={classes["addresscards1"]}>
                  <div className={classes["addresscards1-img"]}>
                    <img src={indiaFlag} height={35}/>
                  </div>
                  <div className={classes["addresscards1-head"]}>
                    <span>Mumbai | Headquarter</span>
                    </div>
                  </div>
                  <div>
                  <p className={classes["addresscard2"]}>
                  Todi Industrial Estate, A Wing, 41, 4th floor,
                  Sunmill Compound, Lower Parel- West
                  Mumbai, Pincode- 400013</p>
                  </div>
                </div>

                <div className={classes["addresscards"]}>
                  <div className={classes["addresscards1"]}>
                  <div className={classes["addresscards1-img"]}>
                    <img src={indiaFlag} height={35}/></div>
                  <div className={classes["addresscards1-head"]}>
                    <span>BANGALORE | Branch Office</span>
                    </div>
                  </div>
                  <div className={classes["addresscard2"]}>
                  <p className={classes["addresscard2"]}>
                  4th Floor, No 22, Salarpuria Towers-I Industrial
                  Layout, Hosur Rd, 7th Block, Koramangala,
                  Bengaluru, Karnataka 560095</p>
                  </div>
                </div>

                <div className={classes["addresscards"]}>
                  <div className={classes["addresscards1"]}>
                  <div className={classes["addresscards1-img"]}>
                    <img src={UAEflag} height={35}/></div>
                  <div className={classes["addresscards1-head"]}>
                    <span>UAE | Branch Office</span>
                    </div>
                  </div>
                  <div className={classes["addresscard2"]}>
                  <p className={classes["addresscard2"]}>
                  Business Center RAKEZ, Ras AI, Khaimah,
                  United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes["right"]}>
            <FooterContactForm></FooterContactForm>
        </div>

      </div>

      <div className={classes["parent-footer"]}>
        <div className={classes["paratxt1"]}>
          <p>FOLLOW US ON</p>
        </div>
        <div className={classes["icon-fld"]}>
          <a href="https://www.facebook.com/nimap.infotech.73/">
            <img className={classes["fcbk"]} src={Facebook} height={20} />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://twitter.com/NimapInfotech">
            <img className={classes["twtr"]} src={Twitter} height={20} />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/nimapinfotech/?utm_medium=copy_link">
            <img className={classes["inst"]} src={Insta} height={20} />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/company/nimapinfotech/">
            <img className={classes["lnkd"]} src={linkedin} height={20} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Footer;

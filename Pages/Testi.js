import React , {useState} from "react";
import classes from "./CSS/Testi.module.css";
import ProjectManagers from '../../Image/ProjectManagers.svg'

function Testi() {
const [dot1, setDot1] = useState(true);
const [dot2, setDot2] = useState(false);
const [dot3, setDot3] = useState(false);
const [dot4, setDot4] = useState(false);

const firstdot=()=>{
  setDot1(true)
  setDot2(false)
}
const seconddot=()=>{
  setDot1(false)
  setDot2(true)
}
const thirddot=()=>{
  setDot1(false)
  setDot2(false)
  setDot3(true)
  setDot4(false)
}
const forthdot=()=>{
  setDot1(false)
  setDot2(false)
  setDot3(false)
  setDot4(true)
}
  return (
    <div className={classes["testi"]} id='TestiMonial'>
      <div className={classes["testisub1"]}>
        <p>Testimonials</p>
      </div>

      <div className={classes["testisub2"]}>

        {dot1 &&<><div className={classes["maintest"]}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes["testframe"]}
              width="550"
              height="280"
              src="https://www.youtube.com/embed/ByCs9rGNsTY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={classes["youtext"]}>
            <h1 className={classes["cont-p1"]}>Paras Jain</h1>
            <h2 className={classes["cont-p2"]}>Owner</h2>
          </div>
        </div></>}

        {dot1 &&<><div className={classes["maintest"]}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes["testframe"]}
              width="550"
              height="280"
              src="https://www.youtube.com/embed/izLepT8W-CI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={classes["youtext"]}>
            <h4 className={classes["cont-p"]}>Ashok Raj</h4>
            <p>Vice President</p>
          </div>
        </div></>}

        {dot2 &&<><div className={classes["maintest"]}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes["testframe"]}
              width="550"
              height="280"
              src="https://www.youtube.com/embed/e-D8YtVjcS8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={classes["youtext"]}>
            <h4 className={classes["cont-p"]}>Satish</h4>
            <p>Project Manager</p>
          </div>
        </div></>}

        {dot2 &&<><div className={classes["maintest"]}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes["testframe"]}
              width="550"
              height="280"
              src="https://www.youtube.com/embed/wk_XajDQ9E0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={classes["youtext"]}>
            <h4 className={classes["cont-p"]}>Kevin Shah</h4>
            <p>Owner</p>
          </div>
        </div></>}
      </div>

      <div className={classes["testisub3"]}>
      <span onClick={firstdot} className={dot1 ? classes['activechild'] : classes['child']}></span>
      <span onClick={seconddot} className={dot2 ? classes['activechild'] : classes['child']}></span>
      </div>

      <div className={classes["testisub4"]}>

      <div className={classes["testisub4-card1"]}>
      <div className={classes["cardimage"]}>
          <img className={classes['img-icon']} src="https://www.autocarpro.in/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/autocarpro/IMG/012/3012/5bd36b7f4acd4ba2bca5a785b910bb3d3005joshihero.jpg&h=490&w=735" />
      </div>
      <div className={classes["cardhead"]}>
      <p className={classes['blank-text']}>
          <b className={classes['blankb']}>Bharat Doshi</b><br/>Marketing Manager<br/>Ambuja Cement
      </p>
      </div>
      <div className={classes["cardintro"]}>
          <p>Using their outsourcing service they offer you a long list of proffessionals that are eager to work<br/>
           you. I hired a developer from Nimap only once but my experience was so good that if in future<br/>
           I have any work I will definitely approach them.</p>
      </div>
      </div>

      <div className={classes["testisub4-card2"]}>
      <div className={classes["cardimage"]}>
      <img className={classes['img-icon']} src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-123316,msid-76914799/brahm-vasudeva-website.jpg" />
      </div>
      <div className={classes["cardhead"]}>
      <p className={classes['blank-text']}>
      <b className={classes['blankb']}>Mr Brahm Vasudeva</b><br/>Marketing Manager<br/>Hawkins
      </p>
      </div>
      <div className={classes["cardintro"]}>
          <p>I wanted to design a new website for my business but i was very doubtful to share my company's data.<br/>
     then I met Sagar and he introduced me to his web developer who was equally kind and gentle.<br/>
     They assured me about all the security norms and designed my website in a very effective manner.</p>
      </div>
      </div>

      <div className={classes["testisub4-card3"]}>
      <div className={classes["cardimage"]}>
      <img className={classes['img-icon']} src="https://i1.wp.com/www.indiaretailing.com/wp-content/uploads/2015/01/Krish_Iyer-1-1.jpg?resize=300%2C350&ssl=1" />
      </div>
      <div className={classes["cardhead"]}>
      <p className={classes['blank-text']}>
      <b className={classes['blankb']}>Krish Iyer</b><br/>Director<br/>Walmart
      </p>
      </div>
      <div className={classes["cardintro2"]}>
          <p>Nimap is a collective team of IT developers who are well trained and certified for coding all kinds of codes.<br/>
          Their amazing team members can code and design any app as per your requirement.</p>
      </div>
      </div>

      <div className={classes["testisub4-card4"]}>
      <div className={classes["cardimage"]}>
      <img className={classes['img-icon']} src="https://cdn-eaocj.nitrocdn.com/bRrUvINWEqyoXCOGVIRtXKCAELdOwonU/assets/static/optimized/rev-678405e/wp-content/uploads/2021/09/BAFSI-Fintech-new.jpg"/>
      </div>
      <div className={classes["cardhead"]}>
      <p className={classes['blank-text']}>
      <b className={classes['blankb']}>Calvin Lee</b><br/>Group head<br/>skyscape
      </p>
      </div>
      <div className={classes["cardintro"]}>
          <p>Nimap provides you extremely productive and helpful services to understand and increase<br/>
  your business. They offer you loads of choice to design your app into various different<br/>
  techniques and ways. It's been great working with thier team members.</p>
      </div>
      </div>
  
      </div>

    </div>
  );
}

export default Testi;

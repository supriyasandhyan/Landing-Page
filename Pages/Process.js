import React from 'react';
import classes from './CSS/Process.module.css';
import CurrentPositionEvaluation from '../../Image/CurrentPositionEvaluation.jpg';
import HighTechnical from '../../Image/HighTechnical.jpg';
import WebsiteTechnical from '../../Image/WebsiteTechnical.jpg';
import WhitePure from '../../Image/WhitePure.jpg';
import CompetitiveKeyword from '../../Image/CompetitiveKeyword.jpg';
import Onpageseo from '../../Image/Onpageseo.jpg';
import TechnicalseoLink from '../../Image/TechnicalseoLink.jpg';
import Detailedreporting from '../../Image/Detailedreporting.jpg';

function Process() {

    return (
        <div className={classes['process-main']}>

            <div className={classes['process-head']}>
                <p className={classes['process-p1']}>THE PROCESS</p>
                <p className={classes['process-p2']}>THAT SETS US APART</p>
            </div>

            <div className={classes['process-sub']}>

            <div className={classes['process-card']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={CurrentPositionEvaluation} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                Current Position<br/>Evaluation
                </p>
            </div>
            </div>

            <div className={classes['process-card']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={HighTechnical} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                High Technical<br/>Proficiency & Domain Analysis
                </p>
            </div>
            </div>

            <div className={classes['process-card']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={WebsiteTechnical} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                Website Technical<br/>Audit & Competitor Analysis
                </p>
            </div>
            </div>

            <div className={classes['process-card']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={WhitePure} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                Pure WHITE-LABEL<br/>Techniques
                </p>
            </div>
            </div>

            <div className={classes['process-card']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={CompetitiveKeyword} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                Competitive<br/>Keyword Research
                </p>
            </div>
            </div>

            <div className={classes['process-card']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={Onpageseo} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                On-Page-SEO + Unique Content<br/>
                Creation & Optimization
                </p>
            </div>
            </div>

            <div className={classes['process-card']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={TechnicalseoLink} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                Technical<br/>SEO + Link Building
                </p>
            </div>
            </div>

            <div className={classes['process-card8']}>
            <div className={classes['process-img']}>
                <img className={classes['proc-img']} src={Detailedreporting} />
            </div>
            <div className={classes['process-info']}>
                <p className={classes['process-info-p']}>
                Detailed Reporting<br/>& ROI Calculation
                </p>
            </div>
            </div>
            </div>

            <div className={classes['process-button']}>
                <a href='#GetInTouch'>
                    <button className={classes['proc-btn']}>Lets Discuss</button>
                </a>
            </div>
        </div>
    )
}
export default Process;
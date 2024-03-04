import React, { useState } from 'react';
import pricingpolicy from '../../Image/pricingpolicy.svg';
import classes from './CSS/Policy.module.css';

export default function Policy() {

    const [clicking1, setClicking1] = useState(true);
    const [clicking2, setClicking2] = useState(false);
    const [colorclass1, setColorclass1] = useState('Initialbtn1');
    const [colorclass2, setColorclass2] = useState('Initialbtn2');

    const polcy = () => {
        if (colorclass2 === 'poli2') {
            setClicking1(true)
            setClicking2(false)
            setColorclass1('Initialbtn1')
            setColorclass2('Initialbtn2')
        }
    }

    const clrity = () => {
        if (colorclass2 === 'Initialbtn2') {
            setClicking1(false)
            setClicking2(true)
            setColorclass1('poli1')
            setColorclass2('poli2')
        }
    }
    return (
        <div className={classes['policy-main']} id='policyid'>
            <div className={classes["policy-sub1"]}>
                <div className={classes["policy-imagediv"]}>
                    <img className={classes['policy-img']} src={pricingpolicy} />
                </div>

                <div className={classes["policy-content"]}>
                <div className={classes["policy-intro"]}>
                    <p className={classes['intro-p1']}>
                        OUR PRICING POLICY
                    </p>
                    <p  className={classes['intro-p2']}>
                        THAT ENSURES CLARITY
                    </p>
                </div>

                <div className={classes["policy-intro"]}>
                    {clicking1 && <p className={classes['poliypara']}>
                        Hire SEO or Outsource SEO services from Nimap
                        Infotech that helps your brand makes its
                        presence in the online market.
                        Race through the competition and get the
                        results that speak for itself
                        You can hire our SEO Experts for your workplace
                        on a timely basis according to your Digital
                        Marketing Requirements
                    </p>}
                    {clicking2 && <p className={classes['claritypara']}>
                        We provide If you have visualized the needs for your digital
                        marketing activities and want to implement it
                        then go for our fixed price model
                        Our DM experts will assist you on a
                        one-on-one basis.Helps you to turn your vision into reality by
                        implementing the Digital marketing activities.
                        We are versatile enough to settle the way of working and payment methods, 
                        we can divide it on a monthly basis instead of doing all payment at the single go.
                        Payment only if the work is complete. Dedicated team for the project.</p>}
                </div>
                </div>
            </div>

                <div className={classes['policy-sub2']}>
                    <button onClick={polcy} className={classes[colorclass1]}>Hire SEO Service</button>
                    &nbsp;
                    <button onClick={clrity} className={classes[colorclass2]}>Fixed Price Work</button>
                </div>

           

        </div>
    )
}

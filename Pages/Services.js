import React from 'react';
import classes from './CSS/Services.module.css';
import MobileApp from '../../Image/MobileApp.svg';
import WebApp from '../../Image/WebApp.svg';
import UIUX from '../../Image/UIUX.svg';
import ITStaff from '../../Image/ITStaff.svg';

function Services() {
    return (
        <div className={classes['services']}>
            <div className={classes['services-heading']}>
                <p className={classes['service-p']}>
                    OUR OTHER <b>SERVICES</b>
                </p>
            </div>

            <div className={classes['service-row']}>

                <div className={classes['row-items']}>
                    <div className={classes['service-img-icon']}>
                        <img src={MobileApp} className={classes['mob-img']}/>
                    </div>
                    <div className={classes['contnt']}>
                        <p className={classes['contntp']}>Mobile App <br/> Development</p>
                    </div>
                </div>

                <div className={classes['row-items']}>
                    <div className={classes['service-img-icon']}>
                     <img src={WebApp} className={classes['web-img']}/>
                    </div>
                    <div className={classes['contnt']}>
                    <p className={classes['contntp']}>Web App <br/> Development</p>
                    </div>
                </div>

                <div className={classes['row-items']}>
                    <div className={classes['service-img-icon']}>
                        <img src={UIUX} className={classes['uiux-img']}/>
                    </div>
                    <div className={classes['contnt']}>
                    <p className={classes['contntp']}>UI/UX <br/> Designing</p>
                    </div>
                </div>

                <div className={classes['row-items']}>
                    <div className={classes['service-img-icon']}>
                     <img src={ITStaff} className={classes['itstaff-img']}/>
                    </div>
                    
                    <div className={classes['contnt']}>
                    <p className={classes['contntp']}>IT Staff<br/> Augmentation</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default  Services;

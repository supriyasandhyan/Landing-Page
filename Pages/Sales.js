import React from 'react';
import SALESBANNER from '../../Image/SALESBANNER.svg';
import './CSS/Sales.css';

export default function Sales() {
    return (
            <div className='sales-main'>
                <img className='sales-img' src={SALESBANNER} />
                <a href="#GetInTouch"><button className='sales-btn'>Enquire Now</button></a>
            </div>
    )
};

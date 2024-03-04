import React from 'react';
import './CSS/Home.css';
import Banner1new from '../../Image/Banner1new.jpg';
import Banner2new from '../../Image/Banner2new.jpg';
import Banner3new from '../../Image/Banner3new.jpg';
import Banner4new from '../../Image/Banner4new.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Top from './Top';
import GetinTouch from './GetinTouch';
import Power from './Power';
import SEO from './SEO';
import Edge from './Edge';
import Benefits from './Benefits';
import Sales from './Sales';
import Policy from './Policy';
import Process from './Process';
import Faq from './Faq';
import Testi from './Testi';
import Services from './Services';
import Glance from './Glance';
import Plan from './Plan';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <div className='home'>

                <a href='#GetInTouch'>
                   
                    <div className="w-100 carouselBox">
                        <div id="myCarousel" className="carousel slide" data-bs-interval="2000" data-bs-ride="carousel">

                            <ol className="carousel-indicators">
                                <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Banner1new} className="d-block w-100 bannerImage" alt="Slide 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner2new} className="d-block w-100 bannerImage" alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner3new} className="d-block w-100 bannerImage" alt="Slide 3" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner4new} className="d-block w-100 bannerImage" alt="Slide 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <Top />

            <GetinTouch />

            <Power />
            
            <SEO />

            <Edge />
            
            <Benefits />

            <Sales />

            <Policy />

            <Process />

            <Faq />

            <Testi />

            <Services />

            <Glance />

            <Plan />

            <Footer />
        </>
    )
};

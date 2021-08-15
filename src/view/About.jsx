import React from 'react';
import Banner from '../components/common/Banner';
import bannerImage from '../asstes/images/about/about.png';
import BreadCrumb from '../components/common/BreadCumb';
import HomeService from '../service/home';
import { useState } from 'react';
import { useEffect } from 'react';
import aboutBg from '../asstes/images/about/about-bg.png';
import CountUp from 'react-countup';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Products,Enquiry,Footer} from '../components';
const About = () => {
    const [state,setState] = useState({
        products : [],
        about  :{},
        profile:{},
        distribuors : []
    });
    useEffect(()=>{
        const service = new HomeService();
        service.getAboutUs().then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    about : res.data
                }))
            }
        })
        service.getProducts().then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    products : res.data
                }))
            }
        })
        service.getProfile().then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    profile : res.data
                }))
            }
        });
        service.distribution().then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    distribuors : res.data
                }))
            }
        })
    },[]);
    return ( 
        <div>
            <Banner
                title="About Us"
                image={bannerImage}
            />
            <BreadCrumb 
                title="About Us"
            />
            <section className="about-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <div className="position-relative about-main__image  h-100">

                                <div className="about-main__image-title">
                                    <h2>25+</h2>
                                    <h4>Years Experience</h4>
                                </div>
                                <div className="about-main_image-large">
                                    <img src={require("../asstes/images/about/abt-main.png").default} className="img-fluid w-100" alt="" />
                                </div>
                                <div className="about-main_image-small">
                                    <img src={require("../asstes/images/about/abt-sm.png").default} className="img-fluid w-100" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="about-main__content mt-lg-4">
                                <h4 className="title-main">
                                    {state.about.title}
                                </h4>
                                <div className="about-main__content-desc">
                                    <p dangerouslySetInnerHTML={{__html:state.about.content}}>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client-information bg-image" style={{backgroundImage : `url(${aboutBg})`}}>
                <div className="container">
                    <div className="row justify-content-center">

                        {/* <!-- Counter --> */}
                        <div className="col-12 col-md-6 col-lg-4 mb-30">
                            <div className="counter-card text-center">
                                <div className="counter-card__count">
                                    {/* <!-- <span className="counter odometer" data-count="400">400</span> --> */}
                                    {/* <div className="odometer" data-count="400"></div> */}
                                    <CountUp 
                                        start={0}
                                        end={state.about.employees}
                                        duration={5}
                                        delay={5000}
                                        className="odometer"
                                        />
                                    <span>+</span>
                                </div>
                                <span className="counter-card__title">
                                    employees from around
                                    the world
                                </span>
                            </div>
                        </div>
                        {/* <!-- Counter END --> */}

                        {/* <!-- Counter --> */}
                        <div className="col-12 col-md-6 col-lg-4 mb-30">
                            <div className="counter-card text-center">
                                <div className="counter-card__count">
                                        <CountUp 
                                            start={0}
                                            end={state.about.clients}
                                            duration={5}
                                            delay={5000}
                                            className="odometer"
                                        />
                                    {/* <span className="counter odometer" data-count="1000"></span> */}
                                    <span>+</span>
                                </div>
                                <span className="counter-card__title">
                                    happy clients from largest
                                    corporations
                                </span>
                            </div>
                        </div>
                        {/* <!-- Counter END --> */}

                        {/* <!-- Counter --> */}
                        <div className="col-12 col-md-6 col-lg-4 mb-30">
                            <div className="counter-card text-center">
                                <div className="counter-card__count">
                                    {/* <span className="counter odometer" data-count="20"></span> */}
                                    <CountUp 
                                            start={0}
                                            end={state.about.offices}
                                            duration={5}
                                            delay={5000}
                                            className="odometer"
                                        />
                                    <span>+</span>
                                </div>
                                <span className="counter-card__title">
                                    Offices in 14 districts
                                    in kerala
                                </span>
                            </div>
                        </div>
                        {/* <!-- Counter END --> */}

                    </div>
                </div>
            </section>
            <section className="quote-block">
                <div className="container">
                    <div className="quote-block__container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="quote-block__image">
                                    <img src={require("../asstes/images/about/about-founder.png").default} className="img-fluid w-100 h-100" alt="founder"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="d-flex flex-column justify-content-md-center h-100">
                                    <div className="quote-block__content">
                                        <div className="quote-block__title text-uppercase">
                                            MATHEW VARGHESE
                                        </div>
                                        <h4 className="quote-block__sub-title">Founder, Maieco</h4>
                                        <div className="quote-block__text-desc">
                                            <p> MAIECO has its factory located at Chengannur in the state of Kerala, India. The
                                                company
                                                has
                                                its presence spread across through factory outlets and dealerships.</p>
                                            <p>
                                                As a company we strive to offer the best possible quality and value for the products
                                                we
                                                offer.
                                            </p>

                                            <p> At MAIECO ,we continuously persevere to improve,widen and provide outstanding class
                                                of
                                                products and technical support to the markets we target, contributing positively to
                                                the
                                                workforce, stake holders and the</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
                {/* <!-- Distributors List --> */}
                <section className="distibutors-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="sec-heading text-center">
                                    <h2 className="main-header">Our Distributors</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">

                        <div className="position-relative distibutors-section__inner">
                            {/* <div className="slider-distributors owl-carousel owl-theme"> */}
                            <OwlCarousel 
                                className="slider-distributors owl-main  owl-theme" 
                                items={1} 
                                loop 
                                responsiveClass={true}
                                center={true}
                                margin={5}
                                autoplay={false}
                                smartSpeed={1200}
                                autoplaySpeed={2000}
                                autoplayTimeout={2000}
                                autoplayHoverPause={false}
                                // navClass="owl-prev"
                                responsive={{
                                    0:{
                                        items : 1,
                                        dots : true
                                    },
                                    600:{
                                        items : 2
                                    },
                                    768 : {
                                        dots : false,
                                        items :2
                                    },
                                    991 :{
                                        items : 3
                                    },
                                    1200 :{
                                        items : 3,
                                        dots : true,
                                        nav : true
                                    }
                                }}
                                >
                                    {
                                        state.distribuors.map((item,index)=>
                                            <div className="distibutors-list" key={index}>
                                                <div className="distibutors-list__title-sm">
                                                    {item.district}
                                                </div>
                                                <h3 className="distibutors-list__title-lg text-uppercase">
                                                    {item.companyName}, {item.district}
                                                </h3>
                                                <div className="distibutors-list__content">
                                                    <ul>
                                                        <li>
                                                            <strong> Address:-</strong>
                                                            {item.address}, {item.landMark}
                                                            ,{item.city}, {item.district} - {item.pincode}
                                                        </li>
                                                        <li>
                                                            <strong> Phone :- </strong>
                                                            {item.phone1}, {item.phone2}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }
                                   
                                    {/* <!-- Slide END --> */}
                            </OwlCarousel>
                            <button className="btn btn-slider-l js-button-left owl-prev">
                                <img src={require("../asstes/images/icons/arrow-long-left.svg").default} className="img-fluid" alt="arrow left" />
                            </button>
                            <button className="btn btn-slider-r js-button-right">
                                <img src={require("../asstes/images/icons/arrow-right-long.svg").default} className="img-fluid" alt="arrow right"/>
                            </button>

                            {/* </div> */}

                        </div>

                    </div>
                </section>
                <Products
                    products={state.products}
                />
                <Enquiry 
                    {...state.profile}
                />
                <Footer/>

        </div>
     );
}
 
export default About;
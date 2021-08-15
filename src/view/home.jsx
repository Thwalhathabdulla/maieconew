import React from 'react';
// import img1 from '../asstes/images/banner/banner-image.png';
import OwlCurosal from '../components/Owl';
import HomeAbout from '../components/HomeAbout';
import {HomeCallBack,Products,Enquiry,Footer} from '../components';
import HomeService from '../service/home';
import { useEffect } from 'react';
import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

const Home = () => {
    const [state,setState] = useState({
        about : {},
        products : [],
        profile : {},
        banner : []
    })
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
        })
        service.banner().then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    banner : res.data
                }))
            }
        })
    },[])
    return ( 
        <div className="home-banner">
            <section className="hero-banner slider-fade">
                    <OwlCarousel
                        className="full-height js-hero-carousel owl-carousel owl-theme" 
                        loop={true}
                        margin={10}
                        dots={false}
                        nav={false}
                        smartSpeed={1200}
                        animateIn="fadeIn"
                        animateOut="fadeOut"
                        touchDrag={false}
                        mouseDrag={false}
                        autoplay={true}
                        // autoPlaySpeed={3000}
                        // autoPlayTimeout={3000}
                        responsiveClass={true}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 1,
                            },
                            1000: {
                                items: 1,
                            }
                        }}
                    >
                        {
                            state.banner.map((items,index)=>
                                <OwlCurosal 
                                    img={items.url}
                                    key={index}
                                />
                            )
                        }
                            {/* <OwlCurosal 
                                img={img1}
                            />
                            <OwlCurosal 
                                img={img1}
                            /> */}
                    </OwlCarousel>
                {/* <!-- Owl Item --> */}
                    {/* <OwlCurosal 
                        img={img1}
                    />
                    <OwlCurosal 
                    img={img1}
                /> */}
                    
                    <HomeAbout
                        {...state.about}
                    />
                    <HomeCallBack
                    />
                    <Products
                        products={state.products}
                    />
                    <Enquiry 
                        {...state.profile}
                    />
                    <Footer/>
            </section>
        </div>
        );
}
 
export default Home;
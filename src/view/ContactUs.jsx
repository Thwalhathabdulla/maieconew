import React , {useState,useEffect} from 'react';
import Banner from '../components/common/Banner';
import bannerImage from '../asstes/images/background/conact-bg.png';
import BreadCrumb from '../components/common/BreadCumb';
import HomeService from '../service/home';
import {Footer} from '../components'
const ContactUs = () => {
    const [state,setState] = useState({
        profile : {},
        form : {
            name : '',
            mail : '',
            address : '',
            pincode  :'',
            number : "",
            message : ''
        }
    });
    useEffect(()=>{
        const service = new HomeService();
        service.getProfile().then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    profile : res.data
                }))
            }
        })
    },[]);
    const service = new HomeService();
    const changeHandler = e =>{
        const {name,value} = e.target;
        setState(prev=>({
            ...prev,
            form : {
                ...prev.form,
                [name] : value
            }
        }))
    }
    const submitForm =(e) =>{
        e.preventDefault();
        service.contactSubmit(state.form).then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    form : {
                        ...prev.form,
                        name : '',
                        mail : '',
                        address : '',
                        pincode  :'',
                        number : "",
                        message : ''
                    }
                }))
            }
        })
    }
    return ( 
        <div>
            <Banner
                title="Contact Us"
                image={bannerImage}
            />
            <BreadCrumb 
                title="Contact Us"
            />
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto mb-4">
                            <div className="sec-heading text-center">
                                <h2 className="main-header">Maieco Contact</h2>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap position-relative">
                        <div className="conact-aside">
                            <h4 className="conact-aside__title">Contact Us</h4>
                            {/* <!-- Address --> */}
                            <div className="media mb-30">
                                <div className="media-image">
                                    <img src={require("../asstes/images/icons/icon-cw-map.svg").default} className="img-fluid" alt="map"/>
                                </div>
                                <div className="media-body">
                                    <div className="media-body__title">Address</div>
                                    <div className="media-body__desc">
                                        {state.profile.name} <br/>
                                        {state.profile.address} <br/>
                                        {state.profile.city} <br/>
                                        {state.profile.dist} (Dist) <br/>
                                        Kerala , Pin : {state.profile.zip}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Address END --> */}
                            {/* <!-- Address --> */}
                            <div className="media mb-30">
                                <div className="media-image">
                                    <img src={require("../asstes/images/icons/icon-cw-mail.svg").default} className="img-fluid" alt="map"/>
                                </div>
                                <div className="media-body">
                                    <div className="media-body__title">Mail Us</div>
                                    <div className="media-body__desc">
                                        <a href="mailto: sales@maiecochem.com"> {state.profile.email}</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Address END --> */}
                            {/* <!-- Address --> */}
                            <div className="media">
                                <div className="media-image">
                                    <img src={require("../asstes/images/icons/icon-cw-phone.svg").default} className="img-fluid" alt="map"/>
                                </div>
                                <div className="media-body">
                                    <div className="media-body__title">Call Us On</div>
                                    <div className="media-body__desc">
                                        <div className="d-block">
                                            <a href="tel:+91 479 246 8175" className="d-inline">{state.profile.mobile1}</a>
                                        </div>
                                        <div className="d-block">
                                            <a href="tel:+91 94962 67888" className="d-inline">{state.profile.mobile2}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Address END --> */}

                        </div>
                        <div className="contact-form">
                            <form onSubmit={submitForm}>
                            <div className="contact-form__inner">
                                <div className="contact-form__block">

                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Your Name"
                                                    name="name"
                                                    value={state.form.name}
                                                    onChange={changeHandler}
                                                    required
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="Your Email"
                                                    value={state.form.mail}
                                                    name="mail"
                                                    required
                                                    onChange={changeHandler}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Address"
                                                    value={state.form.address}
                                                    name="address"
                                                    onChange={changeHandler}
                                                    required
                                                    />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    placeholder="Pincode"
                                                    value={state.form.pincode}
                                                    name="pincode"
                                                    onChange={changeHandler}
                                                    required
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    placeholder="Phone number"
                                                    value={state.form.number}
                                                    name="number"
                                                    onChange={changeHandler}
                                                    required
                                                    />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea 
                                                    type="text"
                                                    className="form-control" 
                                                    placeholder="Message"
                                                    rows="3"
                                                    value={state.form.message}
                                                    name="message"
                                                    onChange={changeHandler}
                                                    required
                                                    ></textarea>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6 mb-3">
                                            {/* <!-- <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div> --> */}
                                        </div>
                                        <div className="col-12 col-md-6 text-md-end mb-3">
                                            <button className="btn cta-submit-form">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-30">
                            <div className="d-flex h-100 w-100">
                                <div className="map-desc text-center align-self-center">
                                    <div className="map-desc__title">
                                        Maieco Map
                                    </div>
                                    <div className="map-desc__content">
                                        <p>To find our location using Google map, that will help you to find us easily</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mb-30">
                            {/* <!-- Map --> */}
                            <div className="map-container">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                                    width="100%" height="100%" frameBorder="0" style={{border : 0}}></iframe>
                            </div>
                            {/* <!-- map END --> */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
     );
}
 
export default ContactUs;
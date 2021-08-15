import React from 'react';
import { useState } from 'react';
import HomeService from '../service/home';
const Enquiry = (props) => {
    const [state,setState] =useState({
        name : '',
        mail : '',
        address : '',
        pincode  :'',
        number : "",
        message : ''
    });
    const service = new HomeService();
    const changeHandler = e =>{
        const {name,value} = e.target;
        setState(prev=>({
            ...prev,
            [name] : value
        }))
    }
    //submit the form
    const submitForm =(e) =>{
        e.preventDefault();
        service.contactSubmit(state).then(res=>{
            if(res.status){
                setState({
                    name : '',
                    mail : '',
                    address : '',
                    pincode  :'',
                    number : "",
                    message : ''
                })
            }
        })
    }
    return ( 
        <section className="enquiry-area">
            <div className="container">
                <div className="enquiry-area__inner">
                    <div className="row">
                        <div className="col-lg-5 col-12 mb-30">

                            {/* <!-- Contact info --> */}
                            <div className="contact-info mt-lg-3">
                                <div className="contact-info__media">
                                    <img src={require("../asstes/images/icons/icon-map-pin.svg").default} className="img-fluid" alt="icon" />
                                </div>
                                <div className="contact-info__body">
                                    <h4 className="contact-info__title">Locate Us</h4>
                                    <ul>
                                        <li>
                                            {props.name}
                                        </li>
                                        <li>
                                            {props.address},
                                        </li>
                                        <li>
                                            {props.city} {props.dist} (Dist)
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            {/* <!-- Contact info END --> */}

                            {/* <!-- Contact info --> */}
                            <div className="contact-info">
                                <div className="contact-info__media">
                                    <img src={require("../asstes/images/icons/icon-email.svg").default} className="img-fluid" alt="icon"/>
                                </div>
                                <div className="contact-info__body">
                                    <h4 className="contact-info__title">Send Your Emails At</h4>
                                    <ul>
                                        <li>
                                            {props.email}
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            {/* <!-- Contact info END --> */}

                            {/* <!-- Contact info --> */}
                            <div className="contact-info">
                                <div className="contact-info__media">
                                    <img src={require("../asstes/images/icons/icon-call.svg").default} className="img-fluid" alt="icon"/>
                                </div>
                                <div className="contact-info__body">
                                    <h4 className="contact-info__title">Call Us On</h4>
                                    <ul>
                                        <li>
                                            <a href="tel:+91 479 246 8175"> {props.mobile1}</a>,
                                            <a href="tel:+91 94962 67888">{props.mobile2}</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            {/* <!-- Contact info END --> */}


                        </div>
                        <div className="col-lg-7 col-12 mb-30">
                            <form onSubmit={submitForm}>
                                <div className="enquiry-area__form">

                                <h4 className="enquiry-area__form-title">Enquire Now</h4>

                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Your Name" 
                                                name="name"
                                                value={state.name}
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
                                                value={state.mail}
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
                                                value={state.address}
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
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Pincode"
                                                value={state.pincode}
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
                                                value={state.number}
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
                                                value={state.message}
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
                                        <button className="btn cta-enquiry-form" type="submit">Submit</button>
                                    </div>
                                </div>

                            </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
</section>
     );
}
 
export default Enquiry;
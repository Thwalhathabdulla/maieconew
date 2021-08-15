import React from 'react';
const OwlCurosal = (props) => {
    return ( 
        <div className="item slider-item bg-image"
            style={{backgroundImage:`url('${props.img}')`}}    
            // style="background-image: url('./asstes/images/banner/slide-02.png');"
                >
                <div className="v-middle caption">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6 mt-30">
                                <div className="o-hidden">
                                    <div className="title-small">Great Experience In Building. </div>
                                    <h1 className="title-main">Provide Effective
                                        Solutions. </h1>
                                    <div className="title-descript mb-3">
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                    </div>
                                    <a href="#0" className="btn cta-banner-contact">
                                        Contact Me
                                        <span> <img src={require("../asstes/images/icons/icon-phone-small.svg").default}
                                                className="img-fluid btn-icon-right" alt="icon" /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default OwlCurosal;
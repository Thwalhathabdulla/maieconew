import React from 'react';
const HomeAbout = (props) => {
    return ( 
        <section className="hm-about-sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3">
                        <div className="hm-about__inner">
                            <h2>{props.hometitle}</h2>
                            <div className="hm-about__desc">
                                <p  dangerouslySetInnerHTML={{__html:props.content}}> 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="position-relative">
                            <div className="hm-about__image">
                                <img src={require("../asstes/images/index/hm-about.png").default} className="img-fluid w-100" alt="images"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HomeAbout ;
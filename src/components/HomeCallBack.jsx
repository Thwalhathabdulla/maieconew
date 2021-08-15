import React from 'react';
import backImage from '../asstes/images/background/bg-callback.png'
const HomeCallBack = () => {
    return ( 
        <section className="request-call-back bg-image"
    style={{backgroundImage: `url('${backImage}')`}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-5 mb-3">
                <div className="form-desc">
                    <div className="media">
                        <div className="media-image">
                            <img src="asstes/images/icons/call-req.svg" className="img-fluid" alt="icon"/>
                        </div>
                        <div className="media-body">
                            <h4 className="media-title ">Request A Call Back</h4>
                            <p className="media-title-sm">Grow Your Communication with Our Company</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-lg-7 mb-3">
                {/* <!-- Form --> */}
                <form action="">
                    <div className="request-form">
                        <div className="form-group ms-xl-auto">
                            <input type="text" className="form-control" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Your Contact No."/>
                        </div>
                        <button className="btn cta-submit-request">
                            Submit
                            <img src={require("../asstes/images/icons/icon-plane-arrow.svg").default} className="img-fluid ms-3" alt="images"/>
                        </button>
                    </div>
                </form>
                {/* <!-- Form END --> */}
            </div>
        </div>
    </div>
</section>
     );
}
 
export default HomeCallBack;
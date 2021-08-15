import React from 'react';
const Banner = (props) => {
    return (
        <div className="sub-banner-block">
            <section className="page-heading bg-image" style={{backgroundImage : `url('${props.image}')`}}>
                <div className="d-flex h-100 w-100 page-heading__inner justify-content-center">
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center min-vh-40">
                            <div className="col-lg-8 text-center">
                                <h1 className="display-4 text-white m-0">{props.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
      );
}
 
export default Banner;
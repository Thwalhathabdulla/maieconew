import React from 'react';
import {Link} from 'react-router-dom';
const Products = (props) => {
    return (  
        <section className="sec-service-list service-list-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 mx-auto mb-2rem">
                        <div className="sec-heading text-center">
                            <h2 className="main-header"> Products We' Offering</h2>
                            <p className="main-header-desc">
                                At MAIECO, we manufacture chemicals catering to construction and FRP industry. Construction
                                chemicals <br/>
                                include Admixtures, special coatings and chemicals tuned for concrete paving tiles
                                (Designer tiles) industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

    <div className="container">
        <div className="row">
            {
                props.products.map((product,index)=>{
                    if(index>=6){
                        return false;
                    }
                    return <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-30" key={index}>
                            {/* <!-- Services / Product --> */}
                            <article className="service-card">
                                <div className="service-card__inner">
                                    <div className="service-card__media">
                                        <figure className="image mb-0">
                                            <img src={product.image} alt="images"
                                                className="img-fluid w-100" />
                                        </figure>
                                    </div>
                                    <div className="service-card__content">
                                        <div className="service-card__info">
                                            <h3 className="service-card__title">
                                                {product.title}
                                            </h3>
                                            <div className="service-card__desc">
                                                {product.discription}
                                            </div>
                                        </div>
                                        <div className="service-card__footer">
                                            <Link to={`/viewProduct/${product.prod_id}`}> read More</Link>
                                            {/* <a href="#">read More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/* <!-- Services / Product --> */}
                        </div>
                })
            }
        </div>
    </div>
</section>
    );
}
 
export default Products;
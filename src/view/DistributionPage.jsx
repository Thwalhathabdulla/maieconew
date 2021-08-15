import React,{useEffect,useState} from 'react';
import Banner from '../components/common/Banner';
import bannerImage from '../asstes/images/background/distributors-bg.png';
import BreadCrumb from '../components/common/BreadCumb';
import HomeService from '../service/home';
import Icon from '../asstes/web-icons/Distribution';
import AddressIcon from '../asstes/web-icons/Address';
import PhoneIcon from '../asstes/web-icons/PhoneIcon';
import {Footer}from '../components'
const DistributionPage = () => {
    const [state,setState] = useState({
        distribuors : []
    });
    useEffect(()=>{
        const service = new HomeService();
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
                title="Distributors"
                image={bannerImage}
            />
            <BreadCrumb 
                title="Distributors"
            />
            <section className="distributors-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="sec-heading text-center">
                                <h2 className="main-header">Our Distributors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            state.distribuors.map((item,index)=>
                                <div className="col-12 col-md-6 col-lg-4 dst-card__gap " key={index}>
                                    <div className="dst-card">
                                        <div className="dst-card__icon">
                                            <Icon/>
                                        </div>
                                        <div className="dst-card__body">
                                            <div className="dst-card__title text-uppercase">
                                                {item.companyName}, {item.district}
                                            </div>
                                            <div className="media mb-3">
                                                <div className="media-icon">
                                                    <div className="icon-svg__dark">
                                                        <AddressIcon/>
                                                    </div>

                                                </div>
                                                <div className="media-body">
                                                    {item.address}, <br/>
                                                    {item.city} <br/>
                                                    {item.landMark}

                                                </div>
                                            </div>
                                            <div className="media mb-3">
                                                <div className="media-icon">
                                                    <div className="icon-svg__dark">
                                                        <PhoneIcon />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    {item.phone1}, {item.phone2}
                                                </div>
                                            </div>

                                        </div>
                                </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
     );
}
 
export default DistributionPage;
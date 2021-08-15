import React,{useState,useEffect} from 'react';
import Banner from '../components/common/Banner';
import bannerImage from '../asstes/images/background/conact-bg.png';
import BreadCrumb from '../components/common/BreadCumb';
import HomeService from '../service/home';
import {useParams,useHistory,Link} from 'react-router-dom';
const ViewProduct = () => {
    const breadcrums = [
        {
            name : 'Home',
            to : "/home"
        },
        {
            name : 'Product',
            to : "/product"
        },
        {
            name : 'Product Details'
        }
    ];
    let { id } = useParams();
    const history = useHistory();
    const [state,setState] = useState({
        allProduct  : [],
        productDetails : {}
    })
    useEffect(()=>{
        if(!id){
            history.push('/home');
        }else{
            const service = new HomeService();
            service.getProducts(id).then(res=>{
                if(res.status && res.data.length>0){
                    setState(prev=>({
                        ...prev,
                        productDetails : res.data[0]
                    }))
                }else{
                    history.push('/home')
                }
            })
            service.getProducts().then(res=>{
                if(res.status){
                    setState(prev=>({
                        ...prev,
                        allProduct : res.data
                    }))
                }
            })
        }
        // console.log(state);
    },[id,history])
    return ( 
        <div>
            <Banner
                title="Contact Us"
                image={bannerImage}
            />
            <BreadCrumb 
                data={breadcrums}
                title="Contact Us"
            />
            <section className="product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-30">
                            <div className="product-details__sidebar">
                                <ul>
                                    {
                                        state.allProduct.map((item,index)=>
                                            <li className={`${item.prod_id === state.productDetails.prod_id && 'active'}`} key={index}>
                                                <Link to={`/viewProduct/${item.prod_id}`}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    }

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-8 mb-30">
                            <div className="product-details__main">
                                <div className="main-content">
                                    <div className="main-content__image">
                                        <img src={state.productDetails.image} className="img-fluid w-100"
                                            alt=""/>
                                    </div>
                                    <div className="main-content__title">
                                        {state.productDetails.title}
                                    </div>
                                    <div className="main-content__desc">
                                        <p> {state.productDetails.discription}</p>
                                    </div>
                                    <ul className="main-content__list">
                                        {
                                            state.productDetails.features &&
                                            state.productDetails.features.map((item,index)=>
                                                <li className="main-content__list-item" key={index}>
                                                    {item}
                                                </li>
                                            )
                                        }
                                    </ul>


                                    <div className="badges-list">
                                        <div className="row">
                                            {
                                                state.productDetails.property&&
                                                state.productDetails.property.map((item,index)=>
                                                    <div className="col-12 col-sm-6 mb-30" key={index}>
                                                        <div className="badges-list__item">{item}</div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default ViewProduct;
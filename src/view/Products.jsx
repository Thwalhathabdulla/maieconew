import React ,{useState,useEffect} from 'react';
import Banner from '../components/common/Banner';
import bannerImage from '../asstes/images/product-services/products-bg.png';
import BreadCrumb from '../components/common/BreadCumb';
import HomeService from '../service/home';
import {Products,Footer} from '../components';
const ProductsPage = () => {
    const [state,setState] = useState({
        products : []
    });
    useEffect(()=>{
        const service = new HomeService();
        service.getProducts().then(res=>{
            if(res.status){
                setState(prev=>({
                    ...prev,
                    products : res.data
                }))
            }
        })
    },[]);
    return ( 
        <div>
            <Banner
                title="Products"
                image={bannerImage}
            />
            <BreadCrumb 
                title="Products"
            />

            <Products
                    products={state.products}
            />
            <Footer/>
        </div>
     );
}
 
export default ProductsPage;
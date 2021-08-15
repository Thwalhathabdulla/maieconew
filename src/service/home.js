import {BASE_URL} from '../config';
export default class HomeService {
    
    async getAboutUs(){
        const response = await fetch(`${BASE_URL}/about.php`, {     //url
            method: 'GET',                 //method
            headers : {                     //passing header 
                'Accept'        : 'application/json',
            }
        })
        const result = await response.json();
        return result;
    }
    async getProducts(id=''){
        const response = await fetch(`${BASE_URL}/product.php?prod_id=${id}`, {     //url
            method: 'GET',                 //method
            headers : {                     //passing header 
                'Accept'        : 'application/json',
            }
        })
        const result = await response.json();
        return result;
    }
    async getProfile(){
        const response = await fetch(`${BASE_URL}/profile.php`, {     //url
            method: 'GET',                 //method
            headers : {                     //passing header 
                'Accept'        : 'application/json',
            }
        })
        const result = await response.json();
        return result;
    }
    async contactSubmit(data){
        const response = await fetch(`${BASE_URL}/enqury.php`, {     //url
            method: 'POST',                 //method
            headers : {                     //passing header 
                'Accept'        : 'application/json',
            },
            body : JSON.stringify(data)
        })
        const result = await response.json();
        return result;
    }
    async distribution(){
        const response = await fetch(`${BASE_URL}/distribution.php`, {     //url
            method: 'GET',                 //method
            headers : {                     //passing header 
                'Accept'        : 'application/json',
            },
        })
        const result = await response.json();
        return result;
    }
    async banner(){
        const response = await fetch(`${BASE_URL}/banner.php`, {     //url
            method: 'GET',                 //method
            headers : {                     //passing header 
                'Accept'        : 'application/json',
            },
        })
        const result = await response.json();
        return result;
    }
}
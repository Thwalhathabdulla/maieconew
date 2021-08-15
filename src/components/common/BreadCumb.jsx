import React from 'react';
import {Link}from 'react-router-dom';
const BreadCrumb = (props) => {
    return ( 
        <section className="breadcrumb-block">
            <div className="container">
                <div className="page-next-level">
                    <ul className="page-next ps-0 mb-0">
                        {
                            props.data &&
                            props.data.map((item,index)=>
                                <li className="list-inline-item" key={index}>
                                    {
                                        item.to?
                                        <Link to="/" className="">Home</Link>:
                                        item.name
                                    }
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default BreadCrumb;
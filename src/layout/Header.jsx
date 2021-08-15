import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
const MainHeader = ({children}) => {
    const [state,setState] = useState({
        active : 'home'
    });
    const {
        active
    }= state;
    const changeRouter = (path) =>{
        setState(prev=>({
            ...prev,
            active : path
        }))
    }
    return ( 
        <div>
                <nav className={`mobile-navbar navbar navbar-expand-lg w-100 ${active === 'home' && 'position-absolute nav-top'}`}>
                    <div className="container navbar-container">
                        <Link className="navbar-brand" to="/">
                            <img src={require("../asstes/images/logo/maieco.svg").default} className="img-fluid" alt="Maieco"/>
                        </Link>


                        <button className="btn cta-btn-call ms-auto align-self-center me-3 d-lg-none">
                            <span className="d-none d-md-block me-2">Call For Help</span>
                            <img src={require("../asstes/images/icons/icon-phone.svg").default} className="img-fluid" alt=""/>
                        </button>

                        <button className="navbar-toggler align-self-center" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg==" alt="" />
                        </button>


                        <div className="collapse navbar-collapse flex-grow-1" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className={`nav-item ${active==='home'&&'active'}`}>
                                    <Link className="nav-link" aria-current="page" to="/" onClick={()=>{changeRouter('home')}}>Home</Link>
                                    {/* <a className="nav-link" aria-current="page" href="index.php">Home</a> */}
                                </li>
                                <li className={`nav-item ${active==='about'&&'active'}`}>
                                    <Link className="nav-link" aria-current="page" to="/about" onClick={()=>{changeRouter('about')}}>About Us</Link>
                                    {/* <a className="nav-link" href="about.php">About Us</a> */}
                                </li>
                                <li className={`nav-item ${active==='product'&&'active'}`}>
                                    <Link className="nav-link" aria-current="page" to="/product" onClick={()=>{changeRouter('product')}}>Products</Link>
                                    {/* <a className="nav-link" href="products.php">Products</a> */}
                                </li>
                                <li className={`nav-item ${active==='distributors'&&'active'}`}>
                                    <Link className="nav-link" aria-current="page" to="/distributors" onClick={()=>{changeRouter('distributors')}}>Distributors</Link>
                                    {/* <a className="nav-link" href="distributors.php">Distributors</a> */}
                                </li>
                                <li className={`nav-item ${active==='Contact'&&'active'}`}>
                                    <Link className="nav-link" aria-current="page" to="/Contact" onClick={()=>{changeRouter('Contact')}}>Contact Us</Link>
                                    {/* <a className="nav-link" href="contact.php">Contact Us</a> */}
                                </li>
                            </ul>
                        </div>

                        <button className="btn btn-qk-contact d-none d-lg-flex my-auto">
                            <span className="d-none d-md-block">Call For Help</span>
                            <img src={require("../asstes/images/icons/icon-phone.svg").default} className="img-fluid btn-icon-right" alt=""/>
                        </button>

                    </div>
            </nav>
            {children}
        </div>
     );
}
 
export default MainHeader;
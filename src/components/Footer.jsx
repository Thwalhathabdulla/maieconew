import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer bg-black">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12  ms-auto mb-30">
                            <div className="footer-widget">
                                <div className="textwidget ">
                                    <figure className="footer-logo">
                                        <img src={require("../asstes/images/logo/maieco-white.svg").default} className="img-fluid" alt="Maieco"/>
                                    </figure>
                                </div>
                                <ul className="social-icn">
                                    <li className="social-icn__item">
                                        <a href="https://facebook.com" target="_blank" className="social-icn__link" rel="noreferrer">
                                            <img src={require("../asstes/images/icons/icon-facebook-w.svg").default} className="img-fluid"
                                                alt="facebook" />
                                        </a>
                                    </li>
                                    <li className="social-icn__item">
                                        <a href="https://twitter.com" target="_blank" className="social-icn__link" rel="noreferrer">
                                            <img src={require("../asstes/images/icons/icon-twitter-w.svg").default} className="img-fluid" alt="twitter"/>
                                        </a>
                                    </li>
                                    <li className="social-icn__item">
                                        <a href="https://instagram.com" target="_blank" className="social-icn__link" rel="noreferrer">
                                            <img src={require("../asstes/images/icons/icon-instagram-logo-w.svg").default} className="img-fluid"
                                                alt="instagram" />
                                        </a>
                                    </li>
                                    <li className="social-icn__item">
                                        <a href="https://linkedin.com" target="_blank" className="social-icn__link" rel="noreferrer">
                                            <img src={require("../asstes/images/icons/icon-linkedin-w.svg").default} className="img-fluid"
                                                alt="linked in" />
                                        </a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-2 col-md-6  offset-lg-1 mb-30">
                            <div className="footer-widget">
                                <h3 className="widget-title">Quick Links</h3>
                                <div className="footer-widget">
                                    <ul className="footer-menu">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/products">Products</Link></li>
                                        <li><Link to="distributors">Distributors</Link></li>
                                        <li><Link to="contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 offset-lg-1 mb-30">
                            <div className="footer-widget">
                                <h3 className="widget-title mb--35 mb-sm--20">Products</h3>
                                <div className="footer-widget">
                                    <ul className="footer-menu">
                                        <li>
                                            <a href="admixtures.php">
                                                Admixtures for Readymix Concrete (RMC) Industry
                                            </a>
                                        </li>
                                        <li>
                                            <a href="block-industry.php">
                                                Concrete Paving Tiles, Precast & Block Industry
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wallputty.php">White Cement Based Wall Putty</a>
                                        </li>
                                        <li>
                                            <a href="wall-floor-tiles.php">
                                                Jointing Compounds for False Ceiling & Wall Floor Tiles
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dry-mix-mortar.php">
                                                Plasticizing Cement Admixture for Dry-Mix Mortar
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <ul className="footer-menu ">
                                <li>
                                    <Link to="">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 mb-2">
                            <p className="copyright-text mb-0">Copyright © 2021 -Maieco Chem - Website by 
                                <Link to=""  target="_blank">AAM</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      );
}
 
export default Footer;
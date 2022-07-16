import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    
    return (
        <div>
            <div classname="f-bg" style={{backgroundColor:"black",
    color: "white"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Service</Link></li>
                                    <li><Link to="#">Blogs</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Service</Link></li>
                                    <li><Link to="#">Blogs</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Service</Link></li>
                                    <li><Link to="#">Blogs</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Service</Link></li>
                                    <li><Link to="#">Blogs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import pic from '../img/bg.jpg';
import logo from '../img/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import {MdClose} from 'react-icons/md';

const Headers = () => {
    const [toggle, settoggle] = useState(false);

    const handleState = () => {
        settoggle(!toggle);
    }
    return (
        <header style={{ backgroundImage: `url(${pic})`, backgroundPosition: 'center', height: "500px" }}>
            <nav className="d-flex align-items-baseline justify-content-evenly">
                <div>
                    <img src={logo} alt="logo" width={"100px"} />
                </div>
                <div>
                    <ul className="d-flex align-items-center custom-nav">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Service</Link></li>
                        <li><Link to="#">Blogs</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <AiOutlineSearch className="text-white fonr" />
                    <Link to="/sign" className="custom-btn">Signup</Link>
                    <RiMenu3Fill className="text-white fonr show" onClick={handleState} />
                </div>
            </nav>

            {/* mobile view */}
            {toggle?
            <div className="mobile-view">
            <MdClose className="text-white fonr show mt-5" onClick={handleState} />
            <ul className="">
                <li ><Link to="#"onClick={handleState}>Home</Link></li>
                <li ><Link to="#"onClick={handleState}>About</Link></li>
                <li><Link to="#"onClick={handleState}>Service</Link></li>
                <li><Link to="#"onClick={handleState}>Blogs</Link></li>
                <li><Link to="#"onClick={handleState}>Contact</Link></li>
            </ul>
        </div>:""}
                
        </header>
    )
}

export default Headers;
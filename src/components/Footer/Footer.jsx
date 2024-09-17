import React from 'react'
import './Footer.css'
import {assets} from "../../assets/assets.js";
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content"></div>
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="logo"/>
                    <img src={assets.twitter_icon} alt="logo"/>
                    <img src={assets.linkedin_icon} alt="logo"/>
                </div>
            </div>
            {/*<div className="footer-content-center">*/}
            {/*    <h2>COMPANY</h2>*/}
            {/*    <ul>*/}
            {/*        <li>Home</li>*/}
            {/*        <li>About Us</li>*/}
            {/*        <li>Delivery</li>*/}
            {/*        <li>Privacy Policy </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div className="footer-content-right">*/}
            {/*    <h2>GET IN TOUCH</h2>*/}
            {/*    <ul>*/}
            {/*        <li>+254 750395082</li>*/}
            {/*        <li>contact@tomato.com</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <hr/>
            <p className='footer-copyright'>
                Copyright 2024 © Tomato.com - All Rights Reserved
            </p>
        </div>

    )
}
export default Footer

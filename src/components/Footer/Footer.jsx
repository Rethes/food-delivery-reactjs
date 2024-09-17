import React from 'react'
import './Footer.css'
import {assets} from "../../assets/assets.js";
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content-center">
                <img src={assets.logo} alt="logo"/>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="logo"/>
                    <img src={assets.twitter_icon} alt="logo"/>
                    <img src={assets.linkedin_icon} alt="logo"/>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>
                Copyright 2024 © Tomato.com - All Rights Reserved
            </p>
        </div>

    )
}
export default Footer

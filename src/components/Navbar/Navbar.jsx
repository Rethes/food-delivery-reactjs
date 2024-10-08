import {useState} from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";

const Navbar = () => {
    //state variable and init with home
    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar">
            <img src={assets.logo} className="logo" alt="logo" />
            <ul className="navbar-menu">
                <Link to="/"
                      onClick={()=>setMenu("home")}
                      className={menu === "home"? "active": ""}>Home</Link>
                <a href="#explore-menu"onClick={()=>setMenu("menu")}
                    className={menu === "menu"? "active": ""}>Menu</a>
                <a href="#app-download"onClick={()=>setMenu("mobile-app")}
                    className={menu === "mobile-app"? "active": ""}>Mobile App</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")}
                    className={menu === "contact-us"? "active": ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} className="search_icon" alt="search_icon"/>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} className="basket_icon" alt="basket_icon"/>
                    <div className="dot" ></div>
                </div>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">Sign In</button>
            </div>
        </div>
    )
}
export default Navbar

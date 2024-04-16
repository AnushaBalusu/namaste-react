import { LOGO_URL } from "../utils/constants"; 
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a>Home</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=> { loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
import { LOGO_URL } from "../utils/constants"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><a>Home</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact Us</li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=> { loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
import { LOGO_URL } from "../utils/constants"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg mb-2 ">
            <div className="logo-container"> 
                <img className="w-32" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg">Online status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg"><a>Home</a></li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg"><Link to="/about">About</Link></li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg">Contact Us</li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg">Cart</li>
                    <button className="login" onClick={()=> { loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
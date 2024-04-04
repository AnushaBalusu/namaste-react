import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Img
 *          - Name of Res, Rating, Cusine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0" 
}

const RestaurantCard = (props) => {
    const {resName, cuisine, rating, deliveryTime} = props;
    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="restaurant-logo" alt="res-logo" src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className ="restaurant-container">
                <RestaurantCard resName="Ihop" cuisine="Breakfast bowls" rating="4.3" deliveryTime="30-40 mins"/>
                <RestaurantCard resName="Pizzahut" cuisine="Pizza" rating="4.6" deliveryTime="15-30 mins"/>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

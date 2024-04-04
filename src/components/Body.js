import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredListOfRestaurants = listOfRestaurants.filter((restaurant) => Number(restaurant.rating?.text) > 4.5);
                    console.log(filteredListOfRestaurants);
                    setListOfRestaurants(filteredListOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className ="restaurant-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.storeUuid} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;
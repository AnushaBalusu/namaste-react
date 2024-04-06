import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { API_SWIGGY_RESTRO_LIST, EATS_API_LIST_STORES } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const data = await fetch(API_SWIGGY_RESTRO_LIST);
        const json = await data.json();
        console.log("hi", "bye");
        console.log("json", json);
        console.log("restaurants", json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    };

    if(listOfRestaurants.length === 0) {
        //return <h1>Loading....</h1>
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredListOfRestaurants = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating >= 4.5);
                    setListOfRestaurants(filteredListOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className ="restaurant-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info?.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;
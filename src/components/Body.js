import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { API_SWIGGY_RESTRO_LIST, EATS_API_LIST_STORES } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const data = await fetch(API_SWIGGY_RESTRO_LIST);
        const json = await data.json();
        console.log("json", json);
        console.log("restaurants", json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    };

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input className="search-box" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                <button onClick={()=>{
                    console.log(searchText);
                    setFilteredRestaurants(listOfRestaurants.filter((res)=>res.info?.name.includes(searchText)));
                    
                }}>Search</button>
            </div>
                <button className="filter-btn" onClick={() => {
                    const filteredListOfRestaurants = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating >= 4.5);
                    setListOfRestaurants(filteredListOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className ="restaurant-container">
                {
                    filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.info?.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;
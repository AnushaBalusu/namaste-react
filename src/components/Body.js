import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { API_SWIGGY_RESTRO_LIST, EATS_API_LIST_STORES } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // higher order component

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const data = await fetch(API_SWIGGY_RESTRO_LIST);
        const json = await data.json();
        console.log("json", json);
        console.log("restaurants", json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (<h1>Looks like you are offline!! Please check your internet connection!</h1>);

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
            <div className="search p-4">
                <input className="border border-solid border-black" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                <button className="m-4 px-4 py-2 bg-blue-100 rounded-lg" onClick={()=>{
                    console.log(searchText);
                    setFilteredRestaurants(listOfRestaurants.filter((res)=>res.info?.name.includes(searchText)));
                    
                }}>Search</button>
            </div>
            <div className="m-4 p-2 flex items-center">
                <button className="px-4 py-2 bg-blue-100 rounded-lg" onClick={() => {
                    const filteredListOfRestaurants = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating >= 4.5);
                    setListOfRestaurants(filteredListOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="m-4 p-2 flex items-center">
                <label>UserName</label>
                <input className="p-2 m-2 rounded-lg border border-black" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}></input>
            </div>
                
            </div>
            <div className ="flex flex-wrap">
                {
                    filteredRestaurants.map(restaurant => (
                    <Link 
                        key={restaurant.info?.id} 
                        to={"/restaurant/" + restaurant.info?.id}>
                        { /** If the restro is promoted then add a promoted label to it */
                            restaurant.info?.isOpen ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
                        }
                        
                    </Link>))
                }
            </div>
        </div>
    )
};

export default Body;
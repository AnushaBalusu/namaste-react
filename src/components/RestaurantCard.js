import { SWIGGY_IMAGE_BASE_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, sla} = resData?.info;
    const deliveryTime = sla?.slaString;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" alt="res-logo" src={SWIGGY_IMAGE_BASE_URL + cloudinaryImageId}></img>
            <div className="res-title">
            <h3>{name}</h3>
            <span className="res-rating">{avgRating}</span>
            </div>
            <div className="res-meta">
                <span>&nbsp;•&nbsp;</span>
                <span>{cuisines.join(", ")} </span>
                <span>&nbsp;•&nbsp;</span>
                <span>{deliveryTime}</span>
            </div>
        </div>
    )
};

export default RestaurantCard;
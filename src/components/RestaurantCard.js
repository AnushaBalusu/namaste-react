import { SWIGGY_IMAGE_BASE_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, sla} = resData?.info;
    const deliveryTime = sla?.slaString;
    return (
        <div className="m-4 p-4 w-[230px] bg-slate-100 rounded-lg hover:bg-slate-200">
            <img className="rounded-lg" alt="res-logo" src={SWIGGY_IMAGE_BASE_URL + cloudinaryImageId}></img>
            <div className="res-title">
            <h3 className="font-bold py-2 text-lg">{name}</h3>
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

// Higher order component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-800 text-white m-2 p-1 rounded-md">Open</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
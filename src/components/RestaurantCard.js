const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" alt="res-logo" src={resData.image.items[5].url}></img>
            <div className="res-title">
            <h3>{resData.title.text}</h3>
            <span className="res-rating">{resData.rating?.text}</span>
            </div>
            <div className="res-meta">
                <span>&nbsp;•&nbsp;</span>
                <span>{resData.tracking.storePayload.fareInfo.serviceFee} Delivery Fee</span>
                <span>&nbsp;•&nbsp;</span>
                <span>{resData.tracking.storePayload.etdInfo.dropoffETARange.min} - {resData.tracking.storePayload.etdInfo.dropoffETARange.min} min</span>
            </div>
        </div>
    )
};

export default RestaurantCard;
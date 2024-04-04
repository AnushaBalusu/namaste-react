import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    let listOfRestaurants = [
        {
            "storeUuid": "65849eed-12b6-4805-9c2c-5c7fcb22da35",
            "title": {
              "text": "Starbucks"
            },
            "rating": {
              "text": "4.7",
            },
            "image": {
              "items": [
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                  "width": 2880,
                  "height": 2304
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                  "width": 1080,
                  "height": 864
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                  "width": 750,
                  "height": 600
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                  "width": 640,
                  "height": 512
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                  "width": 550,
                  "height": 440
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                  "width": 240,
                  "height": 192
                }
              ]
            },
            "tracking": {
              "storePayload": {
                "storeUUID": "65849eed-12b6-4805-9c2c-5c7fcb22da35",
                "etdInfo": {
                  "dropoffETARange": {
                    "min": 10,
                    "max": 20,
                  }
                },
                "fareInfo": {
                  "serviceFee": 4.99,
                },
              }
            },
          },
          {
            "storeUuid": "4a60099d-4c8a-4d60-ab4d-a1f90d18e70b",
            "title": {
              "text": "Tim Horton's"
            },
            "rating": {
              "text": "4",
            },
            "image": {
              "items": [
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                  "width": 2880,
                  "height": 2304
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                  "width": 1080,
                  "height": 864
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                  "width": 750,
                  "height": 600
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                  "width": 640,
                  "height": 512
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                  "width": 550,
                  "height": 440
                },
                {
                  "url": "https://tb-static.uber.com/prod/image-proc/processed_images/31df994f2375286fdd2853e1d594f649/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                  "width": 240,
                  "height": 192
                }
              ]
            },
            "tracking": {
              "storePayload": {
                "storeUUID": "4a60099d-4c8a-4d60-ab4d-a1f90d18e70b",
                "etdInfo": {
                  "dropoffETARange": {
                    "min": 10,
                    "max": 20,
                  }
                },
                "fareInfo": {
                  "serviceFee": 4.99,
                },
              }
            },
          }
    ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    listOfRestaurants = listOfRestaurants.filter((restaurant) => Number(restaurant.rating?.text) > 4.5);
                    console.log(listOfRestaurants);
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
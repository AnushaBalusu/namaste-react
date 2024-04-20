import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({categoryData}) => {

    const [showItems, setShowItems] = useState(false); 

    const toggleShowItems = () => {
        setShowItems(!showItems);
    }

    return <div>
        {/** Accordion Header */}
        <div className="w-6/12 mx-auto bg-gray-50 shadow-lg m-5 p-5">
            <div className="flex justify-between cursor-pointer" onClick={toggleShowItems} >
                <span className="font-bold text-lg">{categoryData.title} ({categoryData.itemCards?.length})</span>
                <span>˯</span>
            </div>
            {/** Accordion Body */}
            { showItems && <ItemList items={categoryData?.itemCards}/>}
        </div>
        
        
    </div>
}

export default RestaurantCategory;
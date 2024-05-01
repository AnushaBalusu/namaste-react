import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { SWIGGY_IMAGE_URL_MENU } from "../utils/constants";


const ItemList = ({ items }) => {
    console.log(items);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item))
    }

    return <div>
        
        {items.map(item => (
            <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 flex text-left justify-between">
                <div className="w-9/12">
                    <div className="font-bold">{item?.card?.info?.name}</div>
                    <div className="text-sm m-1"> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</div>
                
                <div className="text-gray-500 text-xs m-1">{item?.card?.info?.description}</div>
                </div>
                <div className="w-3/12" >
                    <div className="absolute mb-0">
                        <button className="py-1 px-4 mx-12 text-green-900 bg-slate-200 rounded-md"
                        onClick = {() => handleAddItem(item)} >Add</button>
                    </div>
                    <img src={SWIGGY_IMAGE_URL_MENU+item?.card?.info?.imageId} className="rounded-xl w-full"></img>
                    
                    
                </div>
            </div>
            
        ))}
        
    </div>
}

export default ItemList;
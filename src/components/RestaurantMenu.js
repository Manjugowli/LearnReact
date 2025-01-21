import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_IMG } from "../utils/constants";
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () =>{
    const {resId} = useParams();

    const restMenu = useRestaurantMenu(resId)

    if(restMenu?.length === 0 ) return <Shimmer />

    // If brakes verify with the api data and chaining
    const {name , costForTwoMessage , avgRating , } = restMenu?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(<div>
        <h2>{name}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{ avgRating}</h2>
        <div>
        {itemCards?.map((rest)=>{
           return <div className="rest-menu-card"> <div>{rest?.card?.info?.name}</div>
           <div>Rs.{rest?.card?.info?.price/100}</div>
           <img
           width={100}
           height={100}
           alt=" Resto Logo"
           src={MENU_IMG + rest?.card?.info?.imageId}
         />
           </div>
        })}
        </div>
    </div>
    )
}

export default RestaurantMenu;
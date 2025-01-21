import React, { useState } from "react";
// import data from '../utils/data.json';  Stub data 
import RestaurantsCard from "./RestaurantsCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () =>{
    const { restList, filtterList, setFiltterList }= useRestaurantList();
    const [ searchName , setSearchName ] = useState('')
    
    return (
        <div className='body-container'>
            <div className='search'>
            <input type="text"  value={searchName} onChange={(e)=>{setSearchName(e.target.value)}}/>
            <button className="search-filtter-btn" onClick={() => {
                const searchedCard = restList.filter((res)=>res?.info?.name?.toLowerCase().includes(searchName.toLowerCase()))
                setFiltterList(searchedCard)
                }}>Search</button>
                <button className="filter-btn" onClick={() => {
                    const topRest = restList.filter((res) => res.info.avgRating >= 4.5)
                    setFiltterList(topRest)
                }}> Top Restaurants</button>
                <button className="clear-filter-btn" onClick={() => {
                    setFiltterList(restList)
                }}> Clear Filtter</button>
            </div>
            <div className='resto-container'>
                {filtterList?.length === 0 ?
                    <Shimmer />
                    : filtterList?.map((card) =>
                       <Link key={card?.info?.id} to={'/restaurant/'+ card?.info?.id}><RestaurantsCard cardInfo={card?.info} /> </Link> 
                    )}
            </div>
        </div>
    )
} 

export default Body;
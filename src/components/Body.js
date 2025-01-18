import React, { useEffect, useState } from "react";
import data from '../utils/data.json';
import RestaurantsCard from "./RestaurantsCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () =>{
    const [ restList, setRestList ] = useState([])
    const [ searchName , setSearchName ] = useState('')
    const [ filtterList , setFiltterList ] = useState([])
    useEffect(()=>{
        fetchCards();
    },[])
    const fetchCards=async ()=>{
        const data = await fetch(RESTAURANT_API);
        const jsonData = await data.json();
        // option chaning  If brakes verify with the api data and chaining
        setRestList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFiltterList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
//  Conditinal rendering 
    // if(restList?.length === 0){
    //     return <Shimmer />
    // }
    console.log("jjj", restList);
    
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
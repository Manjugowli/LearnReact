import { useState, useEffect } from "react"
import {RESTAURANT_MENU }from './constants'

const useRestaurantMenu =(resId)=>{
    const [ restMenu , setRestMenu ] = useState([])

    const fetchMenu =async()=>{
        const data = await fetch(RESTAURANT_MENU + resId)
        jsonData = await data.json()
        setRestMenu(jsonData)
    }
    useEffect(()=>{
        fetchMenu()
        
    },[])

    return restMenu
}

export default useRestaurantMenu;
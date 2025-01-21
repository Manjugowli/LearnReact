import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";

const useRestaurantList = () => {
    const [restList, setRestList] = useState([])
    const [filtterList, setFiltterList] = useState([])
    useEffect(() => {
        fetchCards();
    }, [])

    const fetchCards = async () => {
        const data = await fetch(RESTAURANT_API);
        const jsonData = await data.json();
        // option chaning  If brakes verify with the api data and chaining
        const restaurantCard = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestList(restaurantCard)
        setFiltterList(restaurantCard)
    }

    return {
        restList,
        filtterList,
        setFiltterList
    };
}

export default useRestaurantList;
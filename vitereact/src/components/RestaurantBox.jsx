import HotelCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import restaurantListt from "../utils/mockData";
import { SWIGGY_API } from "../utils/constants";

const Box = () => {
  //state variable.
  //first is the variable name and second is the function.
  let [restaurantList, setRestaurantList] = useState([]);
  let [cityName, setCityName] = useState([]);

  //useEffect, there are two parameters 1. callback function , dependency array
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    //optional chaning
    let restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    let restaurantCity = json?.data?.cards[1]?.card?.card?.header?.title;
    setCityName(restaurantCity);
    setRestaurantList(restaurants);
  };

  // console.log(cityName);

  return (
    <>
      <button
        className="filter-btn"
        onClick={() => {
          console.log(restaurantList);
          let filteredList = restaurantList.filter(
            (res) => res.info.avgRating > 4.3
          );
          setRestaurantList(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="specific-location">{cityName}</div>
      <div className="restaurant-container">
        {restaurantList.map((e) => {
          return <HotelCard key={e.info.id} restData={e.info} />;
        })}
      </div>
    </>
  );
};

export default Box;

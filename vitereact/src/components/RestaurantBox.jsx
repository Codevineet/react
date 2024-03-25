import HotelCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import ShimerUI from "./Shimer";
// import restaurantListt from "../utils/mockData";

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
    //optional chaining
    let restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    let restaurantCity = json?.data?.cards[1]?.card?.card?.header?.title;
    setCityName(restaurantCity);
    setRestaurantList(restaurants);
  };

  //Rendering loading screen when no data is fetched from the api
  //but showing loading is not a good practice so we can show a fake page till our data get
  //rendered from the api
  //we do by using  shimer UI means redering fake things so that UI expereicnce should be good.
  //conditional rendering it is....

  return restaurantList.length == 0 ? (
    <ShimerUI />
  ) : (
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

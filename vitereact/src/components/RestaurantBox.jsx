import HotelCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import ShimerUI from "./Shimer";
import { Link } from "react-router-dom";
import ErrorTxt from "./Error";
// import restaurantListt from "../utils/mockData";

function Box() {
  //state variable.
  //first is the variable name and second is the function.
  let [restaurantList, setRestaurantList] = useState([]);
  let [filterRestaurantList, setFilterRestaurantList] = useState([]);

  let [cityName, setCityName] = useState("");
  let [searchTxt, setSearchTxt] = useState("");

  //useEffect, there are two parameters 1. callback function , dependency array
  // if no dependency array means it is called on every render.
  //if dependency array is= then useeffect is called everytime it updated.
  useEffect(() => {
    fetchData();
    // fetchData2();
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
    setFilterRestaurantList(restaurants);
  };

  //restaurant ID.
  const resId = restaurantList.map((e) => e.info.id);

  //search
  //on every keystoke react will re render the components.
  const searchRestaurant = () => {
    let filterList = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );

    setFilterRestaurantList(filterList);
  };

  //Rendering loading screen when no data is fetched from the api
  //but showing loading is not a good practice so we can show a fake page till our data get
  //rendered from the api
  //we do by using  shimer UI means redering fake things so that UI expereicnce should be good.
  //conditional rendering it is....
  return restaurantList.length === 0 ? (
    <ShimerUI />
  ) : (
    <>
      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = restaurantList.filter(
            (res) => res.info.avgRating > 4.3
          );
          setFilterRestaurantList(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>

      <input
        type="text"
        name="search"
        id="search-bar"
        placeholder="Search for Restaurents"
        value={searchTxt}
        onChange={(e) => {
          setSearchTxt(e.target.value);
        }}
      />
      <input
        type="button"
        value="Search"
        id="search-btn"
        //filter the restaurant cards and update the UI.
        onClick={searchRestaurant}
      />

      <div className="specific-location">{cityName}</div>
      <div className="restaurant-container">
        {filterRestaurantList.map((e) => {
          return <HotelCard key={e.info.id} restData={e.info} />;
        })}
      </div>
    </>
  );
}

export default Box;

import HotelCard from "./RestaurantCard";
import { useState } from "react";
import restaurantListt from "../utils/mockData";

const Box = () => {
  //state variable.
  //first is the variable name and second is the function.
  let [restaurantList, setRestaurantList] = useState(restaurantListt);

  return (
    <>
      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = restaurantList.filter((res) => res.rating > 4);
          setRestaurantList(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="specific-location">Top restaurant chains in Delhi</div>
      <div className="restaurant-container">
        {restaurantList.map((e) => {
          return <HotelCard key={e.id} restData={e} />;
        })}
      </div>
    </>
  );
};

export default Box;

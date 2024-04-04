import "./RestaurantMenu.css";
import { useEffect, useState } from "react";
import TopPicksCard from "./RestaurantDetails/TopPicksCard";
import Recommendation from "./RestaurantDetails/Recommendation";
import { MENU_API } from "../utils/constants";
import ShimerUI from "./Shimer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resFoods, setResFoods] = useState([]);
  const [resDetails, setResDetails] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    console.log(data);
    const json = await data.json();
    setResFoods(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );

    setResDetails(json?.data?.cards[2]?.card?.card?.info);
  };

  return resFoods.length == 0 ? (
    <ShimerUI />
  ) : (
    <>
      <div className="big-container">
        <h1>{resDetails.name}</h1>
        <div className="upper-container">
          <div className="rating">
            ⭐ {resDetails.avgRating} {resDetails.totalRatingsString}
            <span id="offers"> {resDetails.costForTwoMessage}</span>
          </div>
          <a href="">{resDetails.cuisines.join(", ")}</a>
          <p id="locality">{resDetails.city}</p>
          <p id="timing">25-30 mins</p>
        </div>

        <h2 id="top-picks">Top Picks</h2>

        <div className="scroller-container">
          <div className="cardds-wrapper">
            <TopPicksCard />
          </div>
        </div>

        <div className="recommendation">
          <h1>Recommendation</h1>
          <div className="lower-container">
            {resFoods.map((e) => {
              return (
                <Recommendation key={e.card.info.id} resData={e.card.info} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

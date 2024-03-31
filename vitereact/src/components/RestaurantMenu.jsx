import "./RestaurantMenu.css";
import { useEffect, useState } from "react";
import TopPicksCard from "./TopPicksCard";
import Recommendation from "./Recommendation";
import { MENU_API } from "../utils/constants";
import ShimerUI from "./Shimer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resFoods, setResFoods] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + 234);
    const json = await data.json();
    setResFoods(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  return resFoods.length == 0 ? (
    <ShimerUI />
  ) : (
    <>
      <div className="big-container">
        <h1>Burger King</h1>
        <div className="upper-container">
          <div className="rating">
            ⭐ 4.3 100+ ratings <span id="offers">250 for two</span>
          </div>
          <a href="">Chinies , Asian</a>
          <p id="locality">Inderlok</p>
          <p id="timing">25-30 mins</p>
        </div>

        <h2 id="top-picks">Top Picks</h2>

        <div className="scroller-container">
          <div className="cardds-wrapper">
            <TopPicksCard />
            <TopPicksCard />
            <TopPicksCard />
            <TopPicksCard />
          </div>
        </div>

        <div className="recommendation">
          <h1>Recommendation</h1>
          <div className="lower-container">
            {resFoods.map((e) => {
              return <Recommendation resData={e.card.info} />;

            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

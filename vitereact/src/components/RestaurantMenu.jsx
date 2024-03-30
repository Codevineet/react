import "./RestaurantMenu.css";
import TopPicksCard from "./TopPicksCard";
import Recommendation from "./Recommendation";

const RestaurantMenu = () => {
  return (
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

        <div class="scroller-container">
          <div class="cardds-wrapper">
            <TopPicksCard />
            <TopPicksCard />
            <TopPicksCard />
            <TopPicksCard />
          </div>
        </div>

        <div className="recommendation">
          <h1>Recommendation</h1>
          <div className="lower-container">
            <Recommendation />
            <Recommendation />
            <Recommendation />
            <Recommendation />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

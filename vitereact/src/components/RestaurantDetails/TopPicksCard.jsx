import "../RestaurantMenu.css";

const TopPicksCard = (props) => {
  // console.log(props);
  return (
    <>
      <div className="cardd">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/Cmb1Veg"
          alt=""
          height={250}
          width={250}
        />
        <div className="cardd-content">
          <button className="cardd-button">ADD</button>
        </div>
        <div className="cardd-price">$20</div>
      </div>
    </>
  );
};

export default TopPicksCard;

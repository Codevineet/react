import { IMG_CDN_URL } from "../utils/constants";

const HotelCard = (props) => {
  const { restData } = props;
  //Destructor the elements again
  const {
    cloudinaryImageId,
    costForTwo,
    name,
    avgRating,
    cuisines,
    locality,
    areaName,
  } = restData;

  // console.log(costForTwo);
  return (
    <div className="card">
      <div className="photo">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
        <p className="offers">{costForTwo}</p>
      </div>
      <div className="restaurant-detail">
        <p className="restaurant-name">{name}</p>
        <p className="delivery-time">⭐{avgRating}</p>

        <p className="cusine">{cuisines.join(", ")}</p>
        <p className="location">
          {locality} , {areaName}{" "}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;

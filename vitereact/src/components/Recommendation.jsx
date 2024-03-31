import { IMG_CDN_URL } from "../utils/constants";
const Recommendation = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, imageId, price } = resData;

  return (
    <>
      <div className="rec">
        <div className="food-detail">
          <h3> &#x20b9;{price / 100}</h3>
          <h4>4.4</h4>
          <h4>{name}</h4>
        </div>
        <div className="photo-add-option">
          <img src={IMG_CDN_URL + imageId} alt="" />
          <button className="add-food">ADD</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Recommendation;

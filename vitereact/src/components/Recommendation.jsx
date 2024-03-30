const Recommendation = () => {
  return (
    <>
      <div className="rec">
        <div className="food-detail">
          <h3>340</h3>
          <h4>4.4</h4>
          <h4>rice pulaow</h4>
        </div>
        <div className="photo-add-option">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/Cmb1Veg"
            alt=""
          />
          <button className="add-food">ADD</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Recommendation;

const HotelCard = (props) => {
  const { restData } = props;
  //Destructor the elements again
  const { img, offers, name, rating, cusine, location } = restData;
  return (
    <div className="card">
      <div className="photo">
        <img src={img} alt="" />
        <p className="offers">{offers}</p>
      </div>
      <div className="restaurant-detail">
        <p className="restaurant-name">{name}</p>
        <p className="delivery-time">⭐{rating}</p>

        <p className="cusine">{cusine}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default HotelCard;

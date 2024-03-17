

const HotelCard = (props) =>{
    const {restData} = props;
    //Destructor the elements again
    const {img , offers, name , deliveryTime , cusine, location} = restData;
return (
    <div className="card">
        <div className="photo">
            <img src={img} alt="" />
            <p className="offers">{restData.offers}</p>
        </div>
        <div className="restaurant-detail">
            <p className="restaurant-name">{name}</p>
            <p className="delivery-time">⭐ {deliveryTime}</p>
            <p className="cusine">{cusine}</p>
            <p className="location">{location}</p>
        </div>
    </div>
)
}

export default HotelCard;
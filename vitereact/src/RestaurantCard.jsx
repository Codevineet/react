const HotelCard = () =>{
return (
    <div className="card">
        <div className="photo">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" alt="" />
            <p className="offers">STARTS FROM 149</p>
        </div>
        <div className="restaurant-detail">
            <p className="restaurant-name">Pizza Hut</p>
            <p className="delivery-time">⭐28 mins</p>
            <p className="cusine">Pizzas</p>
            <p className="location">Kriti Nagar</p>
        </div>
    </div>
)
}

export default HotelCard;
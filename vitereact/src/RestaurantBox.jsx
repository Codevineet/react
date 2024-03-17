import HotelCard from "./RestaurantCard";
let restaurantList = [
    {
        offers: "Starting from 149",
        id: 1,
        name : "Pizza Hut",
        deliveryTime : 28,
        cusine: "Pizzas",
        location : "Kriti Nagar",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
    },

    {
        offers: "Starting from 179",
        id:2,
        name : "Harish Bakery",
        deliveryTime : 28,
        cusine: "Pizzas , Fast Food, Dining, Sweets",
        location : "Bhiwadi",
        img :"https://www.harishbakery.com/images/R3.jpg"
    },

    {
        offers: "Starting from 79",
        id:3,
        name : "Haryana Sweets",
        deliveryTime : 20,
        cusine: "Chowmin, Dosa, Idle, Chole Bhature, Sweets,",
        location : "Shastri Nagar",
        img: " https://i.ytimg.com/vi/gbygXUDbf2Q/maxresdefault.jpg"
    },
    
    {
        offers: "Starting from 200",
        id:4,
        name : "Mr Crust",
        deliveryTime : 39,
        cusine: "Cakes, Pastry",
        location : "Ashok Vihar",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuVsBKUxPqRwNcJu-yA-qy46mpmJVe_7Go1w&usqp=CAU"
    },

    {
        offers: "Starting from 200",
        id:4,
        name : "Mr Crust",
        deliveryTime : 39,
        cusine: "Cakes, Pastry",
        location : "Ashok Vihar",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuVsBKUxPqRwNcJu-yA-qy46mpmJVe_7Go1w&usqp=CAU"
    },


]
const Box = () =>{
    return (
        <>
        <div className="specific-location">Top restaurant chains in Delhi</div>
        <div className="restaurant-container">
          {
            restaurantList.map((e) =>{
                return <HotelCard key = {e.id} restData = {e}/>
            })
          }
        </div>
        </>
    )
}

export default Box;
import { useEffect, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  let [btnName, setBtnName] = useState("Log Out");

  const loginChange = () => {
    if (btnName === "Log Out") {
      setBtnName("Log In");
    } else {
      setBtnName("Log Out");
    }
  };

  //header is updated after every updation of btnName.
  useEffect(() => {
    console.log("Header updated");
  }, [btnName]);

  return (
    <div className="Header">
      <div className="header-logo">
        <img src={LOGO} alt="logo" />
        <p>FoodieFy</p>
      </div>
      <div className="nav-links">
        {/* <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search for Restaurents"
        /> */}
        <input type="button" value="Search" id="search-btn" />

        <a href="#">Offers</a>
        <a href="/">Home</a>
        <a href="/contact">Help</a>
        {/* Client side routing */}
        <Link to="/contact">Contact</Link>
        <a href="#" onClick={loginChange}>
          {btnName}
        </a>
        <a href="#">Cart</a>
      </div>
    </div>
  );
};

export default HeaderComponent;

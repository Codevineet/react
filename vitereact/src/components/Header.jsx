import { useState } from "react";
import { LOGO } from "../utils/constants";

const HeaderComponent = () => {
  let [btnName, setBtnName] = useState("Log Out");

  const loginChange = () => {
    if (btnName === "Log Out") {
      setBtnName("Log In");
    } else {
      setBtnName("Log Out");
    }
  };

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
        <a href="#">Help</a>
        <a href="#" onClick={loginChange}>
          {btnName}
        </a>
        <a href="#">Cart</a>
      </div>
    </div>
  );
};

export default HeaderComponent;

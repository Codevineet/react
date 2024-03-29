import HeaderComponent from "./components/Header.jsx";
import Box from "./components/RestaurantBox.jsx";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      {/* <Box /> */}
      {/* Outlet is used in routing to render the childrens accordingly with the paths */}
      <Outlet />
    </div>
  );
};

export default AppLayout;

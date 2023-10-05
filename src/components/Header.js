import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // useEffect(() => {
  //   console.log("header useEffect");
  // }, []);

  //   console.log("header renders");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg items-center">
      <div className="logo-container">
        <img className="w-28" id="logo" src={LOGO_URL} />
      </div>
      <div className="flex ">
        <ul className="flex p-2 m-2">
          <li className="px-4">Status: {onlineStatus ? "🟢" : "🛑"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

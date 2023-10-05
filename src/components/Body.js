import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // restaurant list
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  //   search input value
  const [searchVal, setSearchVal] = useState("");
  //   console.log("body renders");

  // *** API call inside useEffect()
  useEffect(() => {
    console.log("body useEffect");
    callSwiggyAPI();
  }, []);

  const callSwiggyAPI = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0072468&lng=77.75236079999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    // *** optional chaining

    setListOfRes(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are Offline... Please check internet connection...</h1>;
  }

  //   //   ****conditional rendering
  //   if (listOfRes.length === 0) return <Shimmer />;

  //  *** the above 27line and below can be combined by ternary operator
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-yellow-100 m-4 rounded-lg"
            onClick={() => {
              //   console.log(filteredRes);
              const filteredVal = listOfRes.filter((res) =>
                res.data.name.toLowerCase().includes(searchVal.toLowerCase())
              );

              setFilteredRes(filteredVal);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredVal = listOfRes.filter(
                (res) => res.data.avgRating >= 4
              );

              setFilteredRes(filteredVal);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-evenly">
        {filteredRes.length !== 0 ? (
          filteredRes.map((res) => (
            <Link
              className="res-card-link"
              key={res.data?.id}
              to={"/restaurants/" + res.data?.id}
            >
              <RestaurantCards resData={res} />
            </Link>
          ))
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </div>
  );
};

export default Body;

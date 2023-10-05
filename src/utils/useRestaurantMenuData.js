import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenuData = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  //   console.log("from useRestaurantMenuData " + resid);

  // fetchData
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resid);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenuData;

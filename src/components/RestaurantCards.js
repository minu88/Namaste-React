import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCards = ({ resData }) => {
  // console.log(resData, " from RestaurantCards func");
  let {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  // console.log(cloudinaryImageId);
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
      <img
        id="res-logo"
        alt="restaurant logo"
        src={CDN_IMAGE_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">{avgRating}⭐</h4>
      <h4 className="py-1">{deliveryTime}min</h4>
      <h4 className="py-1">INR{costForTwo / 100} for two</h4>
    </div>
  );
};

export default RestaurantCards;

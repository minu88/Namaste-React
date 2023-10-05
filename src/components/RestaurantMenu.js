import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurantMenuData(resid);
  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ol>
        <li>
          <h4>{itemCards[0].card.info.category}:</h4>
        </li>
        <ul>
          {itemCards.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>;
          })}
        </ul>
      </ol>
    </div>
  );
};

export default RestaurantMenu;

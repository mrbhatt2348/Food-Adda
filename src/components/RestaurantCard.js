import { useContext } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;


  const costInteger = (costString) => {
    let costMatch = costString.match(/\d+/);

    let costForTwo = parseInt(costMatch[0]);
    let costForOne = costForTwo / 2;
    return costForOne;
  };

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Average cost: ₹{costInteger(costForTwo)}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

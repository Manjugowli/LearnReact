import React from "react";
import { CARD_IMG_URL } from '../utils/constants'

const RestaurantsCard = ({ cardInfo }) => {
  return (
    <div className="resto-card">
      <div className="resto-logo">
      <img
        width={100}
        height={100}
        alt=" Resto Logo"
        src={CARD_IMG_URL + cardInfo?.cloudinaryImageId}
      />
      </div>
      <div>{cardInfo?.name}</div>
      <div>{cardInfo?.cuisines.join(", ")}</div>
      <div className='card-details'>
        <div className='detail'>
          <span>{cardInfo?.aggregatedDiscountInfoV3?.header}</span>
          <span>{cardInfo?.costForTwo}</span>
        </div>
        <div className='detail'>
          <span>{cardInfo?.sla?.slaString}</span>
          <span>{cardInfo?.avgRatingString}stars</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsCard;
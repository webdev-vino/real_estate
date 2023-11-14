import React from "react";
import "./latestProp.css";
import card from "./card";


const LatestProp = () => {
  return (
    <div className="top">
    <div className="head">
      <p>View All New Lists</p>
      <h1>Latest Property</h1>
      </div>

      <div className="main">
      {card.map(card => ( 


        <div key={card.id} className="card-outline">
          <div className="img-div">
            <img src={card.imagePath} alt="house" />
            <div className="pop">
              <button>Popular</button>
              <p>
                <i class="fa-regular fa-heart"></i>
              </p>
            </div>
          </div>
          <div>
            <h3 className="rupee">&#8377; {card.price}</h3>
            <h3>{card.propertyType}</h3>
            <p className="location">
              <i class="fa-solid fa-location-dot"></i> {card.location}
            </p>
          </div>
          <div className="seen">
            <p>{card.buildingType}</p>
            <p>
              <i class="fa-solid fa-eye"></i>&nbsp; {card.views}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProp;

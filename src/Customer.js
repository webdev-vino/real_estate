import React from "react";
import "./customer.css";
import reviews from "./reviews.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Customer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-review">
      <div className="head-card">
        <h5>Customer Reviews</h5>
        <h1>What's Our Customer Say</h1>
      </div>
      <div className="outer-cards">
        <Carousel 
        removeArrowOnDeviceType={["desktop"]}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={4000}
         responsive={responsive}>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div>
                <i class="fa-solid fa-star" style={{ color: "#e8e230" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#e8e230" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#e8e230" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#e8e230" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#e8e230" }}></i>
              </div>
              <p>
                <i>{review.reviewText}</i>
              </p>
              <div className="dash">
                <h2>
                  <img src="/images/latest/remove.png" alt="dash" />{" "}
                  {review.name}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Customer;

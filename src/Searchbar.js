import React from "react";
import "./searchbar.css";

const Searchbar = () => {
  return (
    <div>
      <form
        className="Searchbar"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button>
          Category{" "}
          <i class="fa-solid fa-angle-down" style={{ color: "black" }}></i>
        </button>
        <input type="text" placeholder="What are you looking for?" />
        <i
          class="fa-solid fa-location-crosshairs icon"
          style={{ color: "black" }}
        ></i>
        <input className="input" type="text" placeholder="Location" />

        <button>
          <i
            class="fa-solid fa-magnifying-glass fa-flip-horizontal search"
            
          ></i>
          Search List
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

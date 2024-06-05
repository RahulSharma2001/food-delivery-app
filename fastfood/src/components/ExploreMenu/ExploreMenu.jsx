import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore Menu</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
        deleniti.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((i, index) => (
          <div
            key={index}
            className="explore-menu-item"
            onClick={() => {
              setCategory(i.menu_name);
            }}
          >
            <img
              className={category === i.menu_name ? "img active" : "img"}
              src={i.menu_image}
              alt="item-image"
            />
            <p>{i.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

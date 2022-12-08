import React from "react";
import "./style/location.css";
import Input from "./Input";
const Location = ({ url, locationInput,handleSubmit }) => {
  return (
    <article className="header">
      <div className="header_imgs">
        <img src="\src\img\image3.png" alt="" />
        <img
          className="header_img"
          src="\src\img\image2.png"
          alt="image_tittle"
        />
      </div>
      <Input
      handleSubmit={handleSubmit}
      />
      <div className="header_boxes">
        <ul className="header_items">
          <li className="header_item">
            <span>Item: </span>
            {locationInput}
          </li>
          <li className="header_item">
            <span>Type: </span>
            {url?.type}
          </li>
          <li className="header_item">
            <span>Dimension: </span>
            {url?.dimension}
          </li>
          <li className="header_item">
            <span>Population: </span>
            {url?.residents.length}
          </li>
        </ul>
      </div>
      <h2 className="header_title">{url?.name}</h2>
    </article>
  );
};

export default Location;

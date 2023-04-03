import React from "react";
import "./style/location.css";
import Input from "./Input";
const Location = ({ url, locationInput, handleSubmit }) => {
  return (
    <article className="header">
      <div>
        <img
          className="header_img"
          src="https://get.wallhere.com/photo/Rick-and-Morty-digital-art-tv-series-portal-space-1799919.jpg"
          alt="bg-nav"
        />
      </div>
      <Input handleSubmit={handleSubmit} />
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

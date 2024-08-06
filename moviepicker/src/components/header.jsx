import React from "react";
import homeIcon from "../imgs/moviepicker_org.png";
import moon from "../imgs/moon.svg";
import "../style/header.css";

const header = () => {
  return (
    <div id="header">
      <nav>
        <a href="#">
          <img src={homeIcon} alt="homeIcon" />
        </a>
        <ul>
          <li>ABOUT</li>
        </ul>
      </nav>
      <input type="search" placeholder="search here..." />
      <img src={moon} alt="moon" />
    </div>
  );
};

export default header;

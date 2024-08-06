import React from "react";
import homeIcon from "../../public/movie_picker_darkpurple.svg";

const header = () => {
  return (
    <>
      <nav>
        <img src={homeIcon} alt="homeIcon" />
        <ul>
          <li>ABOUT</li>
        </ul>
      </nav>
    </>
  );
};

export default header;

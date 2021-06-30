import React from "react";
const Character = ({ name, img }) => {
  return (
    <div className="character-card">
      <img src={img} alt="" />
      <div>{name}</div>
    </div>
  );
};
export default Character;

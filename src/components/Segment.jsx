import React from "react";

const Segment = ({icon, title,day,price,room}) => {
  return (
    <div className="segment">
      <div class="feature col ">
        <div class="feature-icon">
            <img src={icon} alt="" />
        </div>
        <h2 className="feature-title">{title}</h2>
        <p>
            price: {price} Taka /=
        </p>
        <p className="fs-4">Room: {room}</p>
        <button type="button" className="btn btn-primary my-2">Day: {day}</button>
      </div>
    </div>
  );
};

export default Segment;

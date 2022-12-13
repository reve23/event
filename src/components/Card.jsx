import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ img, title, date, short_desc }) => {
  return (  
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-success">Event</strong>
        <h3 class="mb-0">{title}</h3>
        <div class="mb-1 text-muted">{date}</div>
        <p class="mb-auto py-4">
          {short_desc}
        </p>
        <NavLink to="/event-detail">
          <button type="button" class="btn btn-outline-primary rounded">Visit</button>
        </NavLink>
      </div>
      <div class="col-auto d-none d-lg-block">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Card;

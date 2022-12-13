import React from "react";
import Thumbnail from "../img/thumbnail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Segment from "../components/Segment";
import Icon from "../img/icons8-code-64.png"
import pin from "../img/icons8-place-marker-64.png"
import map from "../img/icons8-world-map-64.png"

const Event = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide my-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Thumbnail} className=" thumbnail" alt="..." />
          </div>
        </div>
      </div>
      <div className="title my-3 d-flex align-items-center ">
        <div className="line"></div>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          ad!
        </p>
      </div>
      <div className="description">
        <p className="fs-3 w-100 mx-4 px-1 text-start lh-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          tempore! Cum unde molestiae alias dolore quod voluptates! Sunt,
          ratione, blanditiis maxime dolorem quaerat veritatis et optio ipsam
          eos a commodi nihil repudiandae officiis quibusdam vel aliquid ab eum!
          Rem distinctio assumenda laboriosam unde id similique accusamus ut
          quas impedit amet.
        </p>
        <p className="fs-4 fw-700 w-100 mx-4 px-1 text-start lh-base ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ad
          eaque laborum aut ullam minus tempora! A id veritatis, necessitatibus
          quasi asperiores voluptatem numquam beatae incidunt autem perspiciatis
          illo laudantium! Dignissimos deleniti aliquam adipisci voluptatibus
          qui molestiae eius dolore, illum dolor placeat provident quaerat est
          quod laudantium tempore nihil officia voluptatum? Repellendus magni
          cupiditate enim voluptates explicabo debitis officiis. Natus nisi
          suscipit cum enim libero, unde a perferendis quas, neque eveniet totam
          tempore iste harum fugit illo quia dolores. Repellat laboriosam
          corporis deleniti dolores animi praesentium pariatur, esse vero, ipsum
          modi omnis? Nulla repellat exercitationem ratione quo quae molestiae
          rerum?
        </p>
      </div>
      <div className="segments d-flex">
        <div class="container px-4 py-5" id="featured-3">
          <h2 class="pb-2 border-bottom">All the segments</h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <Segment icon={Icon} title={"Programming Contest"}price={100} day={1} room={204}/>
            <Segment icon={Icon} title={"Graphics Design "}price={100} day={1} room={204}/>
            <Segment icon={Icon} title={"Robotics "}price={500} day={4} room={204}/>
            <Segment icon={Icon} title={"Project Display"}price={200} day={2} room={204}/>
            <Segment icon={Icon} title={"Wall Magazine "}price={50} day={3} room={204}/>
            <Segment icon={Icon} title={"PhotoGraphy "}price={100} day={4} room={204}/>
          </div>
        </div>
      </div>
      <div className="location mb-3">
        <div className="add d-flex align-items-center">
            <img src={pin} className="addimg" alt="" />
        <p className="fs-4 bold">
            BGB Headquarters,Peelkhana
        </p>
        </div>
        <div className="map d-flex align-items-center ">
            <img src={map} className="addimg" alt="" />
        <p className="fs-4 text-bold">Dhaka,Bangladesh</p>
        </div>
      </div>
      <div className="register my-3">
      <button type="button" class="btn btn-warning">Register For this Event</button>
      </div>
    </div>
  );
};

export default Event;

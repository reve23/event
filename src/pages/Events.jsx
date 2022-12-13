import React from "react";
import Card from "../components/Card";
import workshop from "../img/workshop.jfif"

const Events = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Events</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="justify-content-center align-items-center d-flex flex-wrap gy-4 d-flex">
                <Card img={workshop} title={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, voluptatem."}date={"16.11.2022"} short_desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                <Card img={workshop} title={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, voluptatem."}date={"16.11.2022"} short_desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                <Card img={workshop} title={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, voluptatem."}date={"16.11.2022"} short_desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                <Card img={workshop} title={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, voluptatem."}date={"16.11.2022"} short_desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;

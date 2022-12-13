import React from 'react'
import { NavLink } from 'react-router-dom'
import Space from '../img/space.png'

const Home = () => {
  return (
    <>
        <section id="header" className="mt-5 d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    View All the  upcoming events of <br/> <strong className="color-primary important">ITCRC</strong>. 
                                </h1>
                                <h5 className="my-3">
                                    All the events are listed on the events Page. 
                                </h5>
                                <div className="mt-3">
                                    <NavLink to="/events" className="btn btn-outline-primary rounded-pill">Upcoming Events</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <img src={Space} alt="HomeImg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
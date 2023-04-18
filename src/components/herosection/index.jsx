import React from "react";
import heroBanner from "../../assets/herobanner.png";
import metalogo from "../../assets/metalogo.png";
//import { TiStarFullOutline } from "react-icons/ti";
//import { RiInformationFill } from "react-icons/ri";
//import { Button } from "react-bootstrap";
import Heronav from "./heronav";

const Herosection = () => {
  return (
    <>
      <div className="main-bg">
        <div className="hero-banner">
          <img src={heroBanner} alt="hero-banner" />
        </div>
        <div className="container-fluid hero-cont-clr">
          <div className="container">
            <div className="hero-content">
              <div className="col-lg-2 meta-circle">
                <div className="meta-img">
                  <img src={metalogo} alt="metalogo" />
                </div>
              </div>
              <div className="col-lg-6 meta-title">
                <h2>Meta</h2>
                <div className="meta-title-points d-flex align-items-center">
                  <span>789M likes</span>
                  {/* <span className="d-flex align-items-center gap-1">
                    <TiStarFullOutline className="star" /> 2.5 1,138 reviews{" "}
                    <RiInformationFill className="info" /> .
                  </span>
                  <span>Internet company</span> */}
                </div>
              </div>
              <div className="col-lg-4">
                {/* <div className="d-grid">
                  <Button className="">View shop</Button>
                </div> */}
              </div>
            </div>
            <div className="navHero">
              <Heronav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;

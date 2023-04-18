import React from "react";
import FeedsCard from "./cardsSection/FeedsCard";
import IntroCard from "./cardsSection/IntroCard";
import PhotoCard from "./cardsSection/PhotoCard";

const ContentSection = () => {
  return (
    <>
      <div className="content-bg">
        <div className="container">
          <div className="col-lg-5">
            <IntroCard />
            <PhotoCard />
          </div>
          <div className="col-lg-7">
            <FeedsCard />
            <br />
            <FeedsCard />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;

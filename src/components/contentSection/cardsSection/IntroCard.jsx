import React from "react";
//import { CgProfile } from "react-icons/cg";
import introinfo from "../../../assets/introinfo.png";
import introphoto from "../../../assets/introphoto.png";
import intromap from "../../../assets/intromap.png";
import introstar from "../../../assets/introstar.png";

const introPoints = [
  {
    icon: introinfo,
    name: [<span>Page ·</span>, "Internet company"],
  },
  {
    icon: introphoto,
    name: [<span>Facebook, Inc.</span>, <br />, "is responsible for this Page"],
  },
  {
    icon: intromap,
    name: "meta.com",
  },
  {
    icon: introstar,
    name: "Rating · 2.5 (1,705 reviews)",
  },
];

const IntroCard = () => {
  return (
    <>
      <div className="intro-card">
        <h4>Intro</h4>
        <p>
          Meta is helping build a future where people have more ways to play and
          connect in the metaverse. Welc
        </p>
        <hr />
        <div>
          {introPoints.map((item) => {
            const { icon, name } = item;
            return (
              <div className="points">
                <img src={icon} alt="icons" />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default IntroCard;

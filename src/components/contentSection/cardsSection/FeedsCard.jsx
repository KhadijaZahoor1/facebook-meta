import React from "react";
import metalogo from "../../../assets/metalogo.png";
import video from "../../../assets/NSL2023.mp4";
import thump from "../../../assets/thump.svg";
import heart from "../../../assets/heart.svg";
import { TfiComment } from "react-icons/tfi";
import { TbShare3 } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";

//const src = "https://www.youtube.com/watch?v=Vqfy4ScRXFQ";

const FeedsCard = () => {
  return (
    <>
      <div className="feed-card">
        <div className="d-flex gap-2 metalogo">
          <img src={metalogo} alt="logo" />
          <div>
            <p>
              <span>Meta</span> posted a video to the playlist{" "}
              <span>Community Voices.</span>
            </p>
            <p>
              <a href="chrome://newtab/">30 March at 23:23 · </a>
            </p>
          </div>
        </div>
        <div className="feed-detail">
          Manuel Y. is a third generation fisherman on the island of San
          Cristóbal in the Galapagos. He uses WhatsApp to share his catches with
          buyers in real time. Manuel works with FrescaPesca, a company that
          allows him and other fishers to sell directly to restaurants. WhatsApp
          and Frescapesca make fishing more profitable and provide verified
          video and GPS traceability of food from boat to plate. These
          sustainable, safe fishing practices help the vibrant ecosystem and
          wildlife of the Galapagos continue to thrive.
        </div>
        <div className="feed-img">
          {/* <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe> */}
          <video
            width="100%"
            height="300"
            controls
            className="d-flex justify-content-center"
          >
            <source src={video} type="video/mp4" />
            sorry not work
          </video>
        </div>
        <div className="reviews">
          <div className="feed-likes">
            <div className="d-flex like-icon">
              <img src={thump} alt="thump" />
              <img src={heart} alt="heart" />
            </div>
            <div className="d-flex share-icon">
              <TfiComment />
              <TbShare3 />
            </div>
          </div>
          <div className="comments">
            <div className="comment-icon ">
              <div className="d-flex gap-1 align-items-center justify-content-center icons">
                {" "}
                <AiOutlineLike className="" /> Like
              </div>
              <div className="d-flex gap-1 align-items-center justify-content-center icons">
                <TfiComment className="" /> Comment
              </div>
            </div>
            <div className="comments-detail">
              <div className="relevent">Most relevent</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedsCard;

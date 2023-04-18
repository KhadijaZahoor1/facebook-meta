import React from "react";
import photo1 from "../../../assets/photo1.png";
import photo2 from "../../../assets/photo2.jpg";
import photo3 from "../../../assets/photo3.jpg";
import photo4 from "../../../assets/photo4.jpg";

// const photos = [
//   { img: photo1 },
//   { img: photo2 },
//   { img: photo3 },
//   { img: photo4 },
// ];

const PhotoCard = () => {
  return (
    <>
      <div className="photo-card">
        <div>
          <h4>Photos</h4>
          <button>See All Photos</button>
        </div>
        <div className="photo-gallery">
          <li>
            <img src={photo1} alt="photos" />
          </li>
          <li>
            <img src={photo2} alt="photos" />
          </li>
          <li>
            <img src={photo3} alt="photos" />
          </li>
          <li>
            <img src={photo4} alt="photos" />
          </li>
          <li>
            <img src={photo2} alt="photos" />
          </li>
          <li>
            <img src={photo1} alt="photos" />
          </li>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;

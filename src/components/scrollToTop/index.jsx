import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

const ScrolltoTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="top-to-btm">
        {showTopBtn && (
          <BiUpArrowAlt
            className="icon-position icon-style"
            onClick={goToTop}
          />
        )}
      </div>
    </>
  );
};

export default ScrolltoTop;

import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Fragment } from "react";
import Nav from "./components/nav";
import Herosection from "./components/herosection";
import ContentSection from "./components/contentSection";
import React, { useEffect, useState } from "react";
//import { WaveLoader } from "react-loaders-kit";
//import { BiUpArrowAlt } from "react-icons/bi";
import ScrolltoTop from "./components/scrollToTop";
import Loader from "./components/loader";

function App() {
  // page loader
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  // scroll btn
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <Fragment>
      {isLoading === true ? (
        <Loader />
      ) : (
        <>
          <ScrolltoTop />
          <div id="progressBarContainer">
            <div
              id="progressBar"
              style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
            />
          </div>
          <div className="clr-bg">
            <Nav />
            <Herosection />
            <ContentSection />
          </div>
        </>
      )}
    </Fragment>
  );
}

export default App;

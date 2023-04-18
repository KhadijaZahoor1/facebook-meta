import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center loader">
        <Puff height="100" width="100" color="#1876f2" ariaLabel="loading" />
      </div>
    </>
  );
};

export default Loader;

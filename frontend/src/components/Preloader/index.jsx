/** **************************** Import Libs ****************************** */
import React from "react";

/** **************************** Import CSS ****************************** */
import "./preloader.css";

/** ************************** Import Preloader Image **************************** */
import Preloader from "../../assets/images/Preloader.gif";

const PreLoader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "43%",
          zIndex: "2",
        }}
      >
        <img
          src={Preloader}
          alt="Preloader"
          className="img-fluid"
          width="200px"
          height="200px"
        />
      </div>
    </div>
  );
};

export default PreLoader;

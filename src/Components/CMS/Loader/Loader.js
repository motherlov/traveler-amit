import React from "react";
import "./Loader.css";
export default function Loader() {
  return (
    <>
      <div className="infinity-preloader">
      <div className="infinity">
        <div className="loop">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="text">Loading...</div>
    </div>
    </>
  );
}

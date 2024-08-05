import React from "react";
import Logos from "./Logos";
import Photos from "./Photos";
import Videos from "./Videos";
import Sm from "./Sm";

const Section = ({ activeSection }) => {
  return (
    <div className="w-full">
      {activeSection === "logos" && <Logos />}
      {activeSection === "sm" && <Sm />}
      {activeSection === "photos" && <Photos />}
      {activeSection === "videos" && <Videos />}
    </div>
  );
};

export default Section;

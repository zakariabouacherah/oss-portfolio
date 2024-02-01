import React from "react";

const Section = ({ activeSection }) => {
  return (
    <div>
      {activeSection === "photos" && <h2>Photos Section</h2>}
      {activeSection === "logos" && <h2>Logos Section</h2>}
      {activeSection === "3d" && <h2>3D Projects Section</h2>}
    </div>
  );
};

export default Section;

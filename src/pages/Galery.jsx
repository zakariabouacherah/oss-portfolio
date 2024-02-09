import Heading from "../components/Heading";
import Section from "../components/Section";
import React, { useState } from "react";

const Galery = () => {
  const [activeSection, setActiveSection] = useState("photos");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section
      id="galery"
      style={{
        padding: "120px 8rem",
        backgroundImage: 'url("../public/3.png")',
      }}
      className=" min-h-screen flex flex-col items-center justify-center gap-10 bg-top px-20 md:px-36 bg-[#292929] "
    >
      <div className="z-0 mb-10">
        <Heading title="GALERY" background="GALERY" />
      </div>
      <div className="flex items-center gap-10 text-[#e2e2e2] text-xl">
        <button
          className={activeSection === "photos" ? "text-[#7a9aec]" : ""}
          onClick={() => handleButtonClick("photos")}
        >
          Photos
        </button>
        <button
          className={activeSection === "videos" ? "text-[#7a9aec]" : ""}
          onClick={() => handleButtonClick("videos")}
        >
          Videos
        </button>
      </div>
      <Section activeSection={activeSection} />
    </section>
  );
};

export default Galery;

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
        backgroundImage: 'url("../public/3.png")',
      }}
      className=" min-h-screen flex flex-col justify-center items-center gap-10  bg-top bg-cover lg:bg-auto bg-[#000] pt-32 px-12 md:px-24 lg:px-32 "
    >
      <div className="z-0 my-10">
        <Heading title="GALERY" background="GALERY" />
      </div>
      <div className="flex items-center gap-10 text-[#fffeec] text-lg">
        <button
          className={
            activeSection === "photos"
              ? "text-[#c9191b] font-semibold"
              : "font-light"
          }
          onClick={() => handleButtonClick("photos")}
        >
          Photos
        </button>
        <button
          className={
            activeSection === "videos"
              ? "text-[#c9191b] font-semibold"
              : "font-light"
          }
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

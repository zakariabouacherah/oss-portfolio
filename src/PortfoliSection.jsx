import Heading from "./components/Heading";
import Section from "./components/Section";
import React, { useState } from "react";

const PortfoliSection = () => {
  const [activeSection, setActiveSection] = useState("photos");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section
      id="portfolio"
      className=" h-screen bg-cover flex flex-col items-center justify-center gap-10 bg-top px-20 md:px-36 bg-[#595757] "
    >
      <Heading title="PORTFOLIO" background="PORTFOLIO" />
      <div className="flex items-center gap-10 text-white text-xl">
        <button
          className={activeSection === "photos" ? "text-slate-400" : ""}
          onClick={() => handleButtonClick("photos")}
        >
          Photos
        </button>
        <button
          className={activeSection === "logos" ? "text-slate-400" : ""}
          onClick={() => handleButtonClick("logos")}
        >
          Logos
        </button>
        <button
          className={activeSection === "3d" ? "text-slate-400" : ""}
          onClick={() => handleButtonClick("3d")}
        >
          3D Projects
        </button>
      </div>
      <Section activeSection={activeSection} />
    </section>
  );
};

export default PortfoliSection;

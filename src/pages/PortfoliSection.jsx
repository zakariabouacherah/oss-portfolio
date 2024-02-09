import Heading from "../components/Heading";
import Section from "../components/Section";
import React, { useState } from "react";

const PortfoliSection = () => {
  const [activeSection, setActiveSection] = useState("logos");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: "120px 8rem",
        backgroundImage: 'url("../public/2.png")',
      }}
      className=" min-h-screen flex flex-col items-center justify-center gap-10 bg-top px-20 md:px-36 bg-[#000] "
    >
      <div className="z-0 mb-10">
        <Heading title="PORTFOLIO" background="PORTFOLIO" />
      </div>
      <div className="flex items-center gap-10 text-[#e2e2e2] text-xl">
        <button
          className={activeSection === "logos" ? "text-[#7a9aec]" : ""}
          onClick={() => handleButtonClick("logos")}
        >
          Logos
        </button>
        <button
          className={activeSection === "sm" ? "text-[#7a9aec]" : ""}
          onClick={() => handleButtonClick("sm")}
        >
          Social Media
        </button>
      </div>
      <Section activeSection={activeSection} />
    </section>
  );
};

export default PortfoliSection;

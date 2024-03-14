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
      style={
        {
          // padding: "120px 8rem",
          // backgroundImage: 'url("../public/2.png")',
        }
      }
      className=" min-h-screen bg-cover lg:bg-auto flex flex-col items-center justify-start lg:justify-center gap-10 bg-top pt-32 px-12 md:px-24 lg:px-32 bg-[#000] "
    >
      <div className="z-0 lg:my-10">
        <Heading title="PORTFOLIO" background="PORTFOLIO" />
      </div>
      <div className="flex items-center gap-10 text-[#ffffff] text-lg">
        <button
          className={
            activeSection === "logos"
              ? "text-[#c9191b] font-semibold"
              : "font-light"
          }
          onClick={() => handleButtonClick("logos")}
        >
          Logos
        </button>
        <button
          className={
            activeSection === "sm"
              ? "text-[#c9191b] font-semibold"
              : "font-light"
          }
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

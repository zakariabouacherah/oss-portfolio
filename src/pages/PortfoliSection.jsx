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
      className=" min-h-screen bg-cover lg:bg-auto flex flex-col items-center justify-start lg:justify-center gap-10 py-6 px-12 md:px-24 lg:px-32 bg-[#333] "
    >
      <div className="z-0 lg:my-10">
        <Heading title="PORTFOLIO" background="PORTFOLIO" />
      </div>
      <div className="flex items-center gap-10 text-[#ffffff] text-lg">
        <button
          className={`${
            activeSection === "logos"
              ? "font-semibold bg-[#ff9a00] rounded-full"
              : "font-light"
          }
          px-4 py-2`}
          onClick={() => handleButtonClick("logos")}
        >
          Logos
        </button>
        <button
          className={`${
            activeSection === "sm"
              ? "font-semibold bg-[#ff9a00] rounded-full"
              : "font-light"
          }
          px-4 py-2`}
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

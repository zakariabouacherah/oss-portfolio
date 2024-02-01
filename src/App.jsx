import Layout from "./components/Layout";
import "./App.css";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import PortfoliSection from "./PortfoliSection";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <About />
        <Skills />
        <PortfoliSection />
      </Layout>
    </>
  );
}

export default App;

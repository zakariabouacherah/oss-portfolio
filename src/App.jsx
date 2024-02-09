import Layout from "./components/Layout";
import "./App.css";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import PortfoliSection from "./pages/PortfoliSection";
import Galery from "./pages/Galery";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <About />
        <Skills />
        <PortfoliSection />
        <Galery />
      </Layout>
    </>
  );
}

export default App;

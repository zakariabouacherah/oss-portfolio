import Layout from "./components/Layout";
import "./App.css";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import PortfoliSection from "./pages/PortfoliSection";
import Galery from "./pages/Galery";
import Services from "./pages/Services";
import { Contact } from "./pages/Contact";
import IWorkWith from "./pages/IWorkWith";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <IWorkWith />
        <About />
        <Skills />
        <PortfoliSection />
        <Galery />
        <Services />
        <Contact />
      </Layout>
    </>
  );
}

export default App;

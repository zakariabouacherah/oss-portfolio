import Layout from "./components/Layout";
import "./App.css";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <About />
        <Skills />
      </Layout>
    </>
  );
}

export default App;

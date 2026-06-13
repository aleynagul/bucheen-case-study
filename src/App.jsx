import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeelingsSection from "./components/FeelingsSection";
import HowItWorks from "./components/HowItWorks";
import PopularProfiles from "./components/PopularProfiles";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeelingsSection />
      <HowItWorks />
      <PopularProfiles />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
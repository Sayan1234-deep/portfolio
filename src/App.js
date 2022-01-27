import { useEffect } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactForm from "./components/ContactMe";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="min-h-screen pt-11 bg-gray-100">
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Card />
      </div>
      <div
        data-aos="fade-down"
        data-aos-delay="700"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <AboutUs />
      </div>
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

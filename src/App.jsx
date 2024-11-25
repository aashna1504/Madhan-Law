import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Help from "./Help";
import Trust from "./Trust";
import Expertise from "./Expertise";
import Map from "./Map";
import Footer from "./Footer";
import Container from "./Components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <Testimonial />
      <Services />
      <Help />
      <Trust />
      <Expertise />
      <Map />
      <Footer />
    </>
  );
}

export default App;

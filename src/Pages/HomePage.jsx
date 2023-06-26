// import { MMContainer } from "./HomePage.styled";

import About from "../Features/About/About";
import Contact from "../Features/Contact/Contact";
import Design from "../Features/Design/Design";
import Footer from "../Features/Footer/Footer";
import Header from "../Features/Header/Header";
import Landing from "../Features/Header/Landing/Landing";
import Our from "../Features/Our/Our";
import PORTFOLIO from "../Features/PORTFOLIO/PORTFOLIO";
import Pricing from "../Features/Pricing/Pricing";
import Que from "../Features/Que/Que";
import Services from "../Features/Services/Services";
import Stats from "../Features/Stats/Stats";
import Video from "../Features/Video/Video";
// import {}
const HomePage = () => {
  return (
    <>
      <Header />
      <Landing />
      <Services />
      <Design />
      <PORTFOLIO />
      <Video />
      <About />
      <Stats />
      <Our />
      <Que />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;

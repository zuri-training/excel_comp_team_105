import React from "react";

// Custom Components
import Navbar from "../../Static-components/Navbar/Navbar";
import Card from "../../Reuseable components/Card/Card";
import LearnMore from "../../Reuseable components/LearnMore/LearnMore";
import Button from "../../Reuseable components/Button/Button";
import ViewDemo from "../../Static-components/ViewDemo/ViewDemo";
import Footer from "../Footer/Footer";

// Images
import Image1 from "./image 1.png";
import Image2 from "./image 2.png";
import Image3 from "./image 3.png";
import Image4 from "./image 4.png";

// CSS
import "./landing-page.css";

// React router
import { Link } from "react-router-dom";

// React Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// Contexts
import { NavbarContext } from "../../../Contexts/navbarToggleContext";

const LandingPage = () => {
  const { hidden, setHidden } = React.useContext(NavbarContext);

  return (
    <div className="landing-container">
      <div className="hamburger" onClick={() => setHidden(!hidden)}>
        {hidden ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </div>
      <Navbar />
      <div className="landing-cta">
        <div className="cta-text">
          <h1>
            Make real work <br /> happen without <br /> hassle.
          </h1>
          <p>
            The easiest and quickest way to compare the content of your Excel
            and CSV files, highlight differences and spot errors.
          </p>
          <Link to="/sign-up">
            <Button>Get Started</Button>
          </Link>
        </div>
        <div className="cta-images">
          <img src={Image1} alt="Image1" className="image-1" />
          <img src={Image2} alt="Image2" className="image-2" />
        </div>
      </div>
      <div className="landing-hero">
        <h1>A productivity tool built for you</h1>
        <p>
          Individuals and businesses around the world trust XelComp to compare
          their files
        </p>
      </div>
      <div className="image-container">
        <img src={Image3} alt="Image3" className="image-3" />
        <img src={Image4} alt="Image4" className="image-4" />
      </div>
      <div className="testimonials">
        <h1>Why you can always choose us</h1>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="docs-container">
        <div className="docs_text">
          <h1>See what you can do with XelComp</h1>
          <p>Our primary goal is comparison, but you can do lots more!</p>
        </div>
        <div>
          <LearnMore />
          <LearnMore />
          <LearnMore />
          <LearnMore />
        </div>
      </div>
      <div className="get-started">
        <div className="get-started__text">
          <h1>Get your comparisons done with less stress</h1>
          <p>Ready to get started?</p>
        </div>
        <div>
          <Link to="/sign-up">
            <Button>Get Started Now</Button>
          </Link>
        </div>
      </div>
      <div className="view-demo">
        <ViewDemo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

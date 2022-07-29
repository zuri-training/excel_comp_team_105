import React from "react";
import Navbar from "../../Static-components/Navbar/Navbar";
import "./landing-page.css";


const LandingPage = () => {
  return <>
  <Navbar />
  <div className="main1">
    <div><h1>XelCom<small> is a project management software that helps
       you compare the content of your excel and csv fies, 
       highlight differences and help you spot errors.</small></h1>
    </div> 
    <div className="main2">
      <div className="make">
        <h3></h3>
        <button>Get Started</button>
      </div>
      <div className="image">
        <p>n<img src="image.png" alt="try"/></p>
        
        
      </div>
    
    </div>
    
    

  </div>
</>;
}

export default LandingPage;

import React from "react";
import "./footer.css";
import Logo from "./Logo.png";


console.log(Logo);

const Footer = () => {
  return <div>
			<div class="footer">

                 
                <div class="image">
                <ul> <img src={Logo} alt="Logo" />;</ul>
                </div>

                <div class="row1">
					<ul>
                    <h4>Product</h4>
                    <br></br>
						
						<li>
                        <a href="#">Why XelComp?</a>
						</li>
						<li>
                        <a href="#">Support</a> 
                            
						</li>
					</ul>

        </div>
                    <div class="row2">
					<ul>
                    <h4>Company</h4>
                    <br></br>
						<li>
                        <a href="#">About Us</a>
						</li>
						<li>
                        <a href="#">Team</a>
						</li>
						<li>
                        <a href="#">Contact</a>
						</li>
                        <li>
                        <a href="#">Blog</a>
						</li>
                        <li>
                        <a href="#">Privacy Policy</a>
						</li>
					</ul>
                    </div>

                    <div class="row3">

					<ul>
                        <h4>Get Started</h4>
                        <br></br>
                        <li>
                        <a href="#">Pricing</a>
						</li>
						<li>
                        <a href="#">Book a Demo</a>
						</li>
						<li>
                        <a href="#">Contact</a>
						</li>
					</ul>
                    </div>

                    <div class="row4">

					<ul>
                    <h4>Follow Us</h4>
                    <br></br>
						<li>
						<a href="#">Facebook</a>
						</li>
						<li>
                        <a href="#">LinkedIn</a>
						</li>
						<li>
                        <a href="#">Twitter</a>
						</li>
                        <li>
                        <a href="#">GitHub</a>
						</li>
					</ul>
                    </div>
				</div>

				
			</div>
		

  
};

export default Footer;

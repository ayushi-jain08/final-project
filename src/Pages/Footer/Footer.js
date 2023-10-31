import React from "react";
import { FaEnvelope, FaLocationArrow, FaMobile } from "react-icons/fa";
import payment from "../Footer/payment.png"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content container">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              iure laudantium ab eveniet consectetur, dicta quis eum quod nihil
              odio ipsam id iusto rem repellendus?
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">
                    kiran cinema chowk rai sahab ka pahatk , gaya, bihar
                </div>
            </div>
            <div className="c-item">
                <FaMobile/>
                <div className="text">
                   Phone: 0547 8890 2965
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">
                    Email: example@gmail.com
                </div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Condition</span>
            <span className="text">Contact Us</span> 
          </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    CODING ERA  2023 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={payment} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

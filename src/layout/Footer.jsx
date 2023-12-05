import React from "react";
import "../styles/footer.css";
import Group from '../assets/Group 57.svg'
import ABOUT from "../assets/About Postit..svg";

const Footer = () => {
  return (
    <section className="foot">
      <footer className="container">
        <div className="text-light row gap-4 pt-4">
          <div className="col-lg-3">
            <img src={ABOUT} alt="" />
            <p className="pt-4"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
              rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
              que maeae tortoere necsem commodo ac.
            </p>
          </div>
          <div className="col-lg-2 pt-2">
            <h3 className="pb-2">Quick Menu</h3>
            <p>Home</p>
            <p>Stories</p>
            <p>Trending stories</p>
            <p>Popular stories</p>
          </div>
          <div className="col-lg-2 pt-5">
            <p>Sign up</p>
            <p>Login</p>
            <p>Contact Us</p>
          </div>
          <div className="col-lg-4">
            <h3>Subscribe to newsletters</h3>
            <input type="text" placeholder="Email Address"  />
          </div>
        </div>
        <hr  className="text-light fw-bold"/>
        <div className="d-lg-flex justify-content-end">
            <img src={Group} alt="" />
        </div>
      </footer>
    </section>
  );
};

export default Footer;

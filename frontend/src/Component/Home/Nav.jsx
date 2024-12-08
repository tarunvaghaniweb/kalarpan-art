import React, { useState, useEffect } from "react";
import icon from "../../Image/icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/index.css";

const Nav = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");


  

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 250) {
          setShowScroll(true);
          setNavbarColor("rgba(25, 28, 31, 0.33)");
        } else {
          setShowScroll(false);
          setNavbarColor("transparent");
        }
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: navbarColor,
          transition: "background-color 0.5s ease",
        }}
      >
        <div className="container">
          <div className="img" style={{ height: "80px", width: "220px" }}>
            <img src={icon} alt="Logo" style={{ height: "100%", width: "100%" }} />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-uppercase fw-bold justify-content-center w-100">
              <li className="nav-item">
                <a className="nav-link active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#class">
                  My Classes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#review">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
            <div className="text-center d-flex">
              <a href="/Login1">
                <button className="btn btn-hover-effect me-2">Login</button>
              </a>
              <a href="/Signup">
                <button className="btn btn-hover-effect">Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container text-center text-white">
          <h1>Nayana Katrodiya</h1>
          <h2>I'm a Professional Painter And Artist In Surat City</h2>
          <a href="#about" className="scroll-down-arrow">
            <i className="bi bi-chevron-down"></i>
          </a>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919978043407?text=Hello, I would like to inquire about your services."
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default Nav;

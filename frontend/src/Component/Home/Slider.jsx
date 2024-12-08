import React from "react";
import "../../css/slider.css";
import imga from "../../Image/slider2.jpg";
import { FaSmile, FaChalkboardTeacher, FaAward, FaBriefcase } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Slider = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <div className="container" id="about">
      <div
        className={`about-title text-center ${
          aboutInView ? "animate-fade-in" : "hidden"
        }`}
        ref={aboutRef}
      >
        <h1 className="about-background">ABOUT ME</h1>
        <h1 className="about-foreground">ABOUT ME</h1>
        <p className="about-text mt-5">
          My name is Nayana Katrodiya, a professional painter and artist based in Surat City. With over decades of experience in the art world, I have dedicated my life to creating visually stunning pieces that capture the essence of the human experience. My work is characterized by its vibrant colors, intricate details, and emotional depth. I believe in the power of art to connect people and evoke deep feelings.
        </p>
        <p className="about-text">
          My work has been featured in several prominent galleries and exhibitions, earning recognition and awards for its originality and impact.
        </p>
      </div>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 mb-4">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            src={imga}
            alt="Artwork"
          />
        </div>
        {/* Text Section */}
        <div className="col-lg-6 about-details">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <strong>Name:</strong> Nayana Katrodiya
            </div>
            <div className="col-12 col-md-6 mb-3">
              <strong>Email:</strong> kalarpanart07@gmail.com
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <strong>Phone:</strong> +91 92650 83794
            </div>
            <div className="col-12 col-md-6 mb-3">
              <strong>City:</strong> Surat , India
            </div>
          </div>
          <div className="about-stats mt-4">
            <div>
              <FaSmile className="icon" />
              <h3>
                <CountUp end={232} duration={5} />
              </h3>
              <p>Happy Students</p>
            </div>
            <div>
              <FaChalkboardTeacher className="icon" />
              <h3>
                <CountUp end={521} duration={5} />
              </h3>
              <p>Workshops</p>
            </div>
            <div>
              <FaBriefcase className="icon" />
              <h3>
                <CountUp end={18} duration={5} />
              </h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <FaAward className="icon" />
              <h3>
                <CountUp end={16} duration={5} />
              </h3>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

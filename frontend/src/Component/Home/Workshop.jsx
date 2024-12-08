import React from "react";
import "../../css/Review.css";

const workshops = [
  {
    title: "Introduction to Painting",
    description:
      "This workshop covers the basics of painting, including color theory, brush techniques, and composition. Perfect for beginners looking to start their artistic journey.",
    buttonText: "Contact for Pricing",
  },
  {
    title: "Advanced Acrylic Techniques",
    description:
      "Designed for intermediate to advanced artists, this workshop explores advanced techniques in acrylic painting, including texture creation and layering.",
    buttonText: "Contact for Pricing",
  },
  {
    title: "Portrait Drawing",
    description:
      "Learn the art of portrait drawing with a focus on capturing likeness and expression. Suitable for all skill levels.",
    buttonText: "Contact for Pricing",
  },
  {
    title: "Abstract Art Exploration",
    description:
      "Dive into the world of abstract art and learn how to create expressive, non-representational works using various mediums and techniques.",
    buttonText: "Contact for Pricing",
  },
];

const Workshop = () => {
  return (
    <div className="workshop-container">
      <div className="workshop-title-container">
        <h1 className="workshop-title">WORKSHOPS</h1>
        <h1 className="workshop-title-shadow">WORKSHOPS</h1>
      </div>
      <p className="workshop-description">
        I offer a variety of workshops designed to help budding artists develop their skills and explore new techniques.
        Each workshop is tailored to different skill levels and focuses on various aspects of art creation, from basic drawing
        to advanced painting techniques. Join me in an upcoming workshop to unlock your creative potential and take your art to
        the next level.
      </p>
      <div className="workshop-grid">
        {workshops.map((workshop, index) => (
          <div key={index} className="workshop-card">
            <h3 className="workshop-card-title">{workshop.title}</h3>
            <hr className="workshop-divider" />
            <p className="workshop-card-description">{workshop.description}</p>
            <div className="workshop-button-container">
              <a href="#contact">
                <button className="workshop-button">{workshop.buttonText}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshop;


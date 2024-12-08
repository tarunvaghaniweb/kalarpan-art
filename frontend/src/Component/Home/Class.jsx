import React from "react";
import "../../css/class.css";

const Class = () => {
  const classes = [
    {
      title: "Beginner's Drawing",
      description:
        "Start your artistic journey with our Beginner's Drawing class, where you will learn fundamental drawing techniques, including line work, shading, and perspective.",
      icon: "fa-solid fa-paint-brush",
    },
    {
      title: "Watercolor Painting",
      description:
        "Explore the beautiful world of watercolor painting. This class covers basic to advanced watercolor techniques, including washes, glazing, and wet-on-wet painting.",
      icon: "fa-solid fa-water",
    },
    {
      title: "Figure Drawing",
      description:
        "Improve your figure drawing skills by learning anatomy, proportion, and gesture drawing. This class is ideal for artists looking to enhance their ability to draw the human form.",
      icon: "fa-solid fa-pencil-alt",
    },
    {
      title: "Mixed Media Art",
      description:
        "Discover the endless possibilities of mixed media art. Combine different materials and techniques to create unique, textured artworks in this innovative class.",
      icon: "fa-solid fa-palette",
    },
  ];

  return (
    <div className="class-section mt-2" id="classes">
      <div className="title-wrapper">
        <h1 className="background-title">MY CLASSES</h1>
        <h2 className="main-title">MY CLASSES</h2>
      </div>
      <p className="section-description">
        I conduct a series of art classes for different age groups and skill
        levels. Whether you're a beginner looking to explore your creative side
        or an advanced artist seeking to refine your techniques, there's a
        class for you. Each class is designed to provide personalized
        instruction and hands-on practice in a supportive and inspiring
        environment.
      </p>
      <div className="container">
        <div className="class-grid">
          {classes.map((classItem, index) => (
            <div className="class-card" key={index}>
              <div className="icon" id="icon">
                <i className={classItem.icon}></i>
              </div>
              <h3 className="class-title">{classItem.title}</h3>
              <p className="class-description">{classItem.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Class;

import React from "react";
import "../../css/Review.css";
import p1 from "../../Image/p1.png";
import p2 from "../../Image/p2.jpg";
import p3 from "../../Image/p3.png";
import p4 from "../../Image/p4.jpg";
import p5 from "../../Image/p5.jpg";
import p6 from "../../Image/p6.jpg";
import p7 from "../../Image/p7.jpg";
import p8 from "../../Image/p8.jpg";
import p9 from "../../Image/slider3.jpg";
const Portfolio = () => {
    const portfolioItems = [p1, p2, p3, p4, p5, p6, p7, p8, p9]; 

    return (
        <div>
            <div className="container-fluid" id="portfolio">
                <div className="portfolio-container">
                    <div className="portfolio-title-container">
                        <h1 className="portfolio-title-shadow">MY PORTFOLIO</h1>
                        <h2 className="portfolio-title-main">MY PORTFOLIO</h2>
                    </div>
                    <div className="portfolio-row">
                        {portfolioItems.map((item, index) => {
                            const imageClass =
                                index % 6 === 0 || index % 6 === 1
                                    ? "portfolio-image-large"
                                    : index % 6 === 3
                                        ? "portfolio-image-small"
                                        : "portfolio-image-medium";

                            return (
                                <div className="portfolio-col" key={index}>
                                    <div className="portfolio-item">
                                        <img
                                            src={item}
                                            alt={`Portfolio Image ${index + 1}`}
                                            className={`portfolio-image ${imageClass}`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Portfolio;

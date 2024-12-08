import React, { useState, useEffect } from "react";
import "../../css/Review.css";

const reviews = [
    {
        name: "Meera Joshi",
        role: "Student",
        feedback:
            "“An amazing experience! The sessions were interactive, and I learned so much about color blending and techniques.”",
        icon: "👩‍🎓",
    },
    {
        name: "Rajesh Iyer",
        role: "Student",
        feedback:
            "“The classes are well-structured and engaging. The instructors provide valuable feedback that helped me improve significantly!”",
        icon: "👨‍🎓",
    },
    {
        name: "Aarav Gupta",
        role: "Student",
        feedback:
            "“Learning art here has been so much fun! I’ve discovered new techniques that I can’t wait to apply.”",
        icon: "👨‍🎓",
    },
    {
        name: "Sana Kapoor",
        role: "Student",
        feedback:
            "“The hands-on practice and guidance helped me bring my creativity to life.”",
        icon: "👩‍🎓",
    },
    {
        name: "Ishaan Sharma",
        role: "Student",
        feedback:
            "“The classes were super inspiring, and I loved how friendly the instructors were.”",
        icon: "👨‍🎓",
    },
    {
        name: "Nisha Verma",
        role: "Student",
        feedback:
            "“I have gained so much confidence in my drawing skills thanks to these sessions.”",
        icon: "👩‍🎓",
    },
    {
        name: "Vikram Mehta",
        role: "Student",
        feedback:
            "“A perfect place to improve your art and learn new creative techniques.”",
        icon: "👨‍🎓",
    },
    {
        name: "Ananya Das",
        role: "Student",
        feedback:
            "“This was the best art class I’ve ever attended. I truly enjoyed every session!”",
        icon: "👩‍🎓",
    },
    {
        name: "Chetna Patel",
        role: "Parent",
        feedback:
            "“I attended the portrait drawing workshop and it exceeded my expectations. I highly recommend these classes to anyone looking to learn art.”",
        icon: "👩‍👧‍👦",
    },
    {
        name: "Arunesh Rao",
        role: "Parent",
        feedback:
            "“The instructors are very skilled and approachable. My child loves the classes!”",
        icon: "👨‍👧‍👦",
    },
    {
        name: "Sunita Pillai",
        role: "Parent",
        feedback:
            "“The environment is so positive and encouraging. I’ve noticed a great improvement in my child’s skills.”",
        icon: "👩‍👧‍👦",
    },
    {
        name: "Mahesh Kulkarni",
        role: "Parent",
        feedback:
            "“The classes are worth every penny. My daughter enjoys every session and looks forward to the next one.”",
        icon: "👨‍👧‍👦",
    },
    {
        name: "Kavita Shah",
        role: "Parent",
        feedback:
            "“Such a supportive learning experience! It’s great to see my child’s confidence grow.”",
        icon: "👩‍👧‍👦",
    },
    {
        name: "Ravi Nair",
        role: "Parent",
        feedback:
            "“The workshops have been amazing. I’ve seen my child take a big interest in art thanks to these classes.”",
        icon: "👨‍👧‍👦",
    },
    {
        name: "Neeta Bansal",
        role: "Parent",
        feedback:
            "“The structured approach and friendly teachers make this a perfect place for young artists to thrive.”",
        icon: "👩‍👧‍👦",
    },
];


const Review = () => {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="review-section mt-3" id="review">
            <div className="text-center">
                <h1 className="background-title">Reviews</h1>
                <h2 className="main-title">Reviews</h2>
            </div>

            <div className="review-background">
                <div className="container-fluid" >
                    <div className="review-content">
                        <div className="review-icon">{reviews[currentReview].icon}</div>
                        <h3>{reviews[currentReview].name}</h3>
                        <p className="review-role">{reviews[currentReview].role}</p>
                        <p className="review-feedback">{reviews[currentReview].feedback}</p>
                    </div>
                </div>

                <div className="review-indicators">
                    {reviews.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentReview ? "active" : ""
                                }`}
                            onClick={() => setCurrentReview(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;

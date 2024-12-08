import React from 'react';
import "../../css/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-container">
                {/* Heading */}
                <h2 className="footer-heading">Kalarpan Art Class</h2>

                {/* Footer Links */}
                <div className="footer-links-container">
                    {/* Our Services */}
                    <div className="footer-column">
                        <h4 className="footer-subheading">Our Services</h4>
                        <ul className="footer-list">
                            <li><a href="#painting" className="footer-link">Painting Classes</a></li>
                            <li><a href="#sketching" className="footer-link">Sketching</a></li>
                            <li><a href="#craft" className="footer-link">Craft Workshops</a></li>
                            <li><a href="#calligraphy" className="footer-link">Calligraphy</a></li>
                            <li><a href="#digitalart" className="footer-link">Digital Art</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-subheading">Quick Links</h4>
                        <ul className="footer-list">
                            <li><a href="#about" className="footer-link">About Us</a></li>
                            <li><a href="#classes" className="footer-link">Our Classes</a></li>
                            <li><a href="#portfolio" className="footer-link">Gallery</a></li>
                            <li><a href="#contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="footer-column">
                        <h4 className="footer-subheading">Contact Us</h4>
                        <p className="footer-text"><FaPhoneAlt /> +91-1234567890</p>
                        <p className="footer-text"><FaEnvelope /> info@kalarpanartclass.com</p>
                        <p className="footer-text"><FaMapMarkerAlt /> 123 Art Lane, Creative City</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    <p>© 2024 Kalarpan Art Class. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

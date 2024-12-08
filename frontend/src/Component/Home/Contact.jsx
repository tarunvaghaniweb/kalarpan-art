import React from 'react';
import '../../css/contact.css';

const Contact = () => {
    const handlePhoneClick = () => {
        window.location.href = 'tel:+919978043407';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:vaghanitarun14@gmail.com?subject=Hello&body=Your Message Here';
    };

    const handleYouTubeClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = 'vnd.youtube://www.youtube.com/@KalarpanartbyNayana';
        } else {
            window.open('https://www.youtube.com/@KalarpanartbyNayana', '_blank');
        }
    };

    const handleFacebookClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = 'fb://profile/100087769925159';
        } else {
            window.open('https://www.facebook.com/nayana.katrodiya.9?mibextid=LQQJ4d', '_blank');
        }
    };

    const handleInstagramClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = 'instagram://user?username=nayana_katrodiya';
        } else {
            window.open('https://www.instagram.com/nayana_katrodiya', '_blank');
        }
    };



    return (
        <section className="contact full-width" id='contact'>
            <div className="workshop-title-container">
                <h1 className="workshop-title">CONTACT</h1>
                <h1 className="workshop-title-shadow">CONTACT</h1>
            </div>
            <div className="contact-container">
                {/* Social Profiles */}
                <div className="social-section">
                    <div className="icon-container">
                        <i className="fas fa-share-alt"></i>
                    </div>
                    <h3 className="section-title">Social Profiles</h3>
                    <div className="social-icons">
                        <a href="https://twitter.com/your_twitter_id" target="_blank" rel="noopener noreferrer" className="no-underline">
                            <div className="circle-icon">
                                <i className="fab fa-twitter"></i>
                            </div>
                        </a>
                        <a onClick={handleFacebookClick} style={{ cursor: 'pointer' }}>
                            <div className="circle-icon">
                                <i className="fab fa-facebook"></i>
                            </div>
                        </a>
                        <a onClick={handleYouTubeClick} style={{ cursor: 'pointer' }}>
                            <div className="circle-icon">
                                <i className="fab fa-youtube"></i>
                            </div>
                        </a>
                        <a onClick={handleInstagramClick} style={{ cursor: 'pointer' }}>
                            <div className="circle-icon">
                                <i className="fab fa-instagram"></i>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Email and Call */}
                <div className="row full-width-row" id='row'>
                    <div className="email-section">
                        <i className="fas fa-envelope"></i>
                        <h4>Email Me</h4>
                        <button onClick={handleEmailClick} className="email-button">
                            kalarpanart07@gmail.com
                        </button>
                    </div>
                    <div className="call-section">
                        <i className="fas fa-phone"></i>
                        <h4>Call Me</h4>
                        <button onClick={handlePhoneClick} className="call-button">
                            +91 97146 96238
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;

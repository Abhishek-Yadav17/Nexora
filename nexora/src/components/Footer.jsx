import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>nexora</h1>
                    <div className="footer-top-left-inner">
                        <h4>Designed by Abhishek.</h4>
                        <h4>&copy; 2025 Nexora</h4>
                    </div>
                </div>
                <div className="footer-top-right">
                    <div className="footer-top-right-inner-left">
                        <h2>Pages</h2>
                        <div className="pages">
                            <h4>Home</h4>
                            <h4>About Us</h4>
                            <h4>Products</h4>
                            <h4>Cart</h4>
                            <h4>Contact Us</h4>
                        </div>
                    </div>
                    <div className="footer-top-right-inner-right">
                        <h2>Utilities Pages</h2>
                        <div className="pages">
                            <h4>Return Policy</h4>
                            <h4>Privacy Policy</h4>
                            <h4>Terms & Conditions</h4>
                        </div>
                        <div className="socials">
                            <i class="ri-instagram-fill"></i>
                            <i class="ri-twitter-x-fill"></i>
                            <i class="ri-meta-fill"></i>
                            <i class="ri-youtube-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <h2>Contact Us</h2>
                    <div className="footer-contact">
                        <div className="footer-contact-left">
                            <h4>+123456789</h4>
                            <h4>info@example.com</h4>
                        </div>
                        <div className="footer-contact-right">
                            <h4>4517 Washington Ave. Manchester,</h4>
                            <h4>India 123456 </h4>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-right">
                    <h4>Stay updated with new arrivals</h4>
                    <div className="subscribe">
                        <input type="email" placeholder="Type your email" />
                        <button><i class="ri-arrow-right-long-line"></i></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

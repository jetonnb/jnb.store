import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">



          <h3>About Us</h3>
          <p>Welcome to my website. I’m Jeton Nikollbibaj, and this is my inaugural project. I am thrilled to share the work I’ve put into this site. Your feedback is valuable, and I hope you find the content both engaging and well-crafted. Thank you for visiting!
           
          </p>
        </div>

        <div className="footer-section">
        
          <h3>Contact Us</h3>
          <p>Email: jeton_nb@icloud.com</p>
          <p>Phone: +383 45 378 784</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/Jeton.Nb/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://x.com/jetonnbj"><i className="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/jetonnikollbibajjjj/"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 JNBStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

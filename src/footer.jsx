import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          &copy; 2024 Your Company Name. All Rights Reserved.
        </div>
        <div className="social">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="tags">
          <span className="tag">Technology</span>
          <span className="tag">Gadgets</span>
          <span className="tag">Mobile</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>Blog</li>
        <li>Photograph</li>
        <li>Contact</li>
      </ul>

      <div className="social-icon">
        <a href="#facebook">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#instagram">
          <i className="fab fa-instagram" />
        </a>
        <a href="#twitter">
          <i className="fab fa-twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

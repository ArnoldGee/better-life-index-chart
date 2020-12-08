import React from 'react';

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-area">
      <i className="fas fa-spa orange icon" />
      <p className="text">
        This project was made with love and dedication by Arnau Gómez. Visit the{' '}
        <a
          href="https://github.com/ArnoldGee/better-life-index-chart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github icon"></i> GitHub Repo
        </a>
        .
      </p>
      <p className="text">
        If you want to get a performant and visually appealing web app for your
        business, please hire me as a web developer on{' '}
        <a
          href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin icon"></i>
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default Footer;

import React from 'react';
import './footer.css';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Stay in touch with us!</h1>
    </div>
    <div className="gpt3__footer-icons">
      <a href="https://discord.gg/S3qRpq8R6e" target="_blank"><FaDiscord /></a>
      <a href="#"><FaTwitter /></a>
      <a href="https://github.com/jesssekeogh/bonsai_dapp" target="_blank"><FaGithub /></a>
    </div>

    <div className="gpt3__footer-copyright">
      <p>©2022 Kontribute.app</p>
    </div>
  </div>
);

export default Footer;
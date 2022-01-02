import React from 'react';
import './footer.css';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Stay in touch with us!</h1>
    </div>
    <div className="gpt3__footer-icons">
      <a href="https://discord.gg/S3qRpq8R6e" target="_blank" rel="noreferrer"><FaDiscord /></a>
      <a href="https://mobile.twitter.com/TeamBonsai_ICP" target="_blank" rel="noreferrer"><FaTwitter /></a>
      <a href="https://github.com/jesssekeogh/bonsai_dapp" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>

    <div className="gpt3__footer-copyright">
      <p>©2022 Kontribute.app</p>
    </div>
  </div>
);

export default Footer;
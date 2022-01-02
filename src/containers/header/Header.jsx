import React from 'react';
import warrior from '../../assets/bonsai_warriors_logo.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">A fun, interactive, evolving story for the Internet Computer</h1>
      <p>Kontribute.app is an interactive dapp built on the Internet Computer Protocol (ICP). It allows users to interact with a voting DAO smart contract so that they can make real changes to a fun evolving lore story that is based around our <a className="gpt3_bonsai_link" href="https://3ezq7-iqaaa-aaaal-aaacq-cai.ic0.app/" target="_blank" rel="noreferrer" >Bonsai Warriors NFT's!</a></p>

      <div className="gpt3__header-content__input">
        <Link to="/blog">
        <button type="button">Recent Update</button>
        </Link>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img alt="" src={warrior} />
    </div>
  </div>
);

export default Header;
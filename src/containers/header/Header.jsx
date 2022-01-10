import React from 'react';
import warrior from '../../assets/bonsai_warriors_logo.png';
import './header.css';
import { Link } from 'react-router-dom';
import { Link as Scroll} from 'react-scroll';


const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">A fun, interactive, evolving story for the Internet Computer</h1>
      <p>Kontribute is an interactive dapp built on the Internet Computer Protocol (ICP). It allows users to interact with a voting DAO smart contract so that they can make real changes to a fun evolving lore story that is based around our <Scroll className="gpt3_bonsai_link" to="nft" spy={true} smooth={true}>Bonsai Warriors NFT's!</Scroll></p>

      <div className="gpt3__header-content__input">
        <Link to="/team-bonsai">
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
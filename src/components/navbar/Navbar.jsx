import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/kontribute_logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';

const Menu = () => (
    <>
    <Link to="/">
    <p>Kontribute.App</p>
    </Link>
    <Link to="/blog">
    <p>Development</p>
    </Link>
    </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/">
          <img src={logo} alt=""/>
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
            <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="https://3ezq7-iqaaa-aaaal-aaacq-cai.ic0.app/" target="_blank" rel="noreferrer"><button type="button">Enter Dapp</button></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <a href="https://3ezq7-iqaaa-aaaal-aaacq-cai.ic0.app/" target="_blank" rel="noreferrer"><button type="button">Enter Dapp</button></a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
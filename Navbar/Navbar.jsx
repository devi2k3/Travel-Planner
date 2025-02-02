import React, { useState } from 'react';
import './navbar.css';
import { FaPlane } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const hideNav = () => {
    setActive('navBar');
  };

  //codeto add background color to the header....

  const[transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >=10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll',addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <nav>
              <FaPlane style={{ fontSize: '30px', color: '#FFD700', marginLeft: '10px' }} />
              TravelMosaic
              </nav>
              
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Products</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Resources</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Contacts</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Blog</a>
            </li>
            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>

              <button className='btn signupbtn'>
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>
          <div className="closeNavbar" onClick={hideNav}>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  );
}

export default Navbar;

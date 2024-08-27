import React from 'react'
import './footer.css'
import { FaPlane } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="footer">
            <div className="secContainer">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className='flex'><FaPlane className='icon'/>TravelMosaic</h1>
                            
                        </a>
                    </div>
                </div>

                <div className="socials flex">
                    <ImFacebook className='icon'/>
                    <BsTwitter className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <AiFillLinkedin className='icon'/>
                </div>

            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                    <h1>Information</h1>
                </span>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">Travel</a>
                </li>
               
            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                    <h1>Contact us</h1>
                </span>
                <span className="phone"><a>+4455 668 8997</a></span>
                <br/>
                <span className="phone"><p>dolly@123gmail.com</p></span>
            </div>    
            <div className="footerLinks">
                <span className="linkTitle">
                    <h1>Helpful Links</h1>
                </span>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Travel & conditions</a>
                </li>
                <li>
                    <a href="#">Destination</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </div>
        </div>
     )
}

export default Footer
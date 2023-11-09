import React from 'react'
import CritoFooter from '../assets/images/logoend.svg'
import LinesFooter from '../assets/images/line-down.svg'
import { NavLink } from 'react-router-dom'
import ScrollToTop from '../assets/BtnFunctions/ScrollToTop'

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="lines">
                <img src={LinesFooter} alt="White wavy lines"/>
            </div>

            <div className="container">
                
                <div className="top">

                    <div className="logo-text">
                        <NavLink to='/'><img src={CritoFooter} alt="crito logotype" onClick={ScrollToTop}/></NavLink>
                        <p>Lorem ipsum dolor sit amet consectetur<br/>adipisicing elit. Placeat obcaecati voluptas<br/>voluptates! Voluptates laborum nam<br/>ratione minus necessitatibus, iure<br/>praesentium.</p>
                    </div>

                    <div className="text-rows">
                        <h3>Company</h3>

                        <div className="links"> 
                            <a href="#"><p>About</p></a>
                            <a href="#"><p>Features</p></a>
                            <a href="#"><p>Works</p></a>
                            <a href="#"><p>Career</p></a>
                        </div>

                    </div>

                    <div className="text-rows">
                        <h3>Help</h3>

                        <div className="links">
                            <a href="#"><p>Costumer Support</p></a>
                            <a href="#"><p>Delivery Details</p></a>
                            <a href="#"><p>Terms & Conditions</p></a>
                            <a href="#"><p>Privacy Policy</p></a>
                        </div>

                    </div>

                    <div className="text-rows">
                        <h3>Resources</h3>

                        <div className="links">
                            <a href="#"><p>Free eBooks</p></a>
                            <a href="#"><p>Development Tutorial</p></a>
                            <a href="#"><p>How to - Blog</p></a>
                            <a href="#"><p>Youtube Playlist</p></a>
                        </div>

                    </div>

                    <div className="text-rows">
                        <h3>Link</h3>

                        <div className="links">
                            <a href="#"><p>Free eBooks</p></a>
                            <a href="#"><p>Development Tutorial</p></a>
                            <a href="#"><p>How to- Blog</p></a>
                            <a href="#"><p>Youtube Playlist</p></a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="bottom">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>

                <div className="socialmedia">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
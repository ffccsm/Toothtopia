import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <div>
                <footer className="footer p-10 bg-neutral text-neutral-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/' className="link link-hover">Home</Link>
                        <Link to='/appointment' className="link link-hover">Appointment</Link>
                        <Link to='/contact' className="link link-hover">Contact</Link>
                        <Link to='/login' className="link link-hover">Login</Link>
                        
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                    <div>
                         <span className="footer-title">About</span>
                        <p>Copyright © 2023 - All right reserved by Toothtopia Ltd</p>
                        <p>Team Vulcan @NUB</p>
                        <Link to='/about' className="link link-hover">Development Credit</Link>
                    </div>
                    
                </footer>
            </div>
        </div>
    );
};

export default Footer;
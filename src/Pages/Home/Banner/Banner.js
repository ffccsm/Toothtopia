import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/chair.png';
import PrimaryButton from '../../../MyComponent/PrimaryButton';

import './Banner.css';

const Banner = () => {
    return (
        <div className="hero py-10 chair">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-10">
                <img src={img}  className="lg:w-1/2" alt='banner'/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">We have modern well equipped Operation unit. We use modern technology including  Autoclave Machine, UV Cabinet,  Endodontic Electric Motor, Apex Locator, Intraoral camera  to offer best oral treatment.</p>
                    
                    <Link to='/appointment'><PrimaryButton>Getting Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
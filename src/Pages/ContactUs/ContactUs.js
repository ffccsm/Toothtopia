import React from 'react';
import useTitle from '../../hooks/useTitle';
import Contact from '../Home/Home/Contact/Contact';


const ContactUs = () => {
    useTitle('Contact')
    return (
        <div>
            
            <Contact/>
            
        </div>
    );
};

export default ContactUs;
import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from './Service';
import Lottie from "lottie-react";
import dental from '../Home/Lottie/dentalcare.json';
const Services = () => {

    const serviceItem=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay.',
            icon:fluoride

        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure.',
            icon:cavity

        },
        {
            id:3,
            name:'Teeth Whitening',
            description:'Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!',
            icon:whitening   
        }
    ]
    return (
        <div className='mt-10 py-10'>
            <div className='text-center'>
            <Lottie animationData={dental} loop={true} className='lg:w-20 rounded mx-auto'/>
                <h3 className='text-3xl font-semibold text-primary'>Our Services</h3>

                <h2 className='text-2xl '>Services We provide</h2>
                
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-10'>
                {
                   serviceItem.map(service=><Service key={service.id} service={service}></Service>) 
                }
            </div>
        </div>
    );
};

export default Services;
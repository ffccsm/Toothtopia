import React from 'react';
import clock from '../../../icons/clock.svg';
import marker from '../../../icons/marker.svg';
import phone from '../../../icons/phone.svg';
import InfoCard from './InfoCard';
import Lottie from "lottie-react";
import contact from  '../Home/./Lottie/customer.json';



const InfoCards = () => {

    const cardData=[
        {
            id:1,
            name:'Opening Hours',
            description:'Open 9.00 am to 5.00 pm everyday. Except Sunday.',
            icon:clock,
            bgClass:'bg-primary'
        },
        {
            id:2,
            name:'Our Location',
            description:'Nikunja-2,Dhaka-1229',
            icon:marker,
            bgClass:'bg-secondary'
        },
        {
            id:3,
            name:'Contact',
            description:'+8807777777777',
            icon:phone,
            bgClass:'bg-primary'
        }

    ]
    return (
        <div className='pt-10'>
            <h2 className='mb-10 text-3xl font-semibold text-primary text-center'>Customer Support</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center px-16'>
           
           <Lottie animationData={contact} loop={true} className='lg:w-5/12 mx-auto rounded'/>
           

            
                
            <p className='text-start'>
            Regular dental visits are essential for maintaining good oral health and preventing serious dental problems. Dentists can identify and treat dental issues early on, which can help to prevent more severe problems from developing.If you are experiencing dental pain or other symptoms, it is important to see a dentist as soon as possible. Prompt treatment can help to prevent the problem from getting worse and may also help to alleviate your symptoms.
            </p>
           
            </div>
            <div className='grid gap-6 mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                cardData.map(card=><InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
        </div>
    );
};

export default InfoCards;
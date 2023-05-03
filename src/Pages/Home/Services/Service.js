import React from 'react';

const Service = ({service}) => {
    const {name,description,icon}=service;
    return (
        <div className="card hover:bg-base-100 hover:shadow-2xl border border-1 duration-300">
            <figure className="px-10 pt-10">
                <img src={icon} alt="icon" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{description}</p>
                
            </div>
        </div>
    );
};

export default Service;
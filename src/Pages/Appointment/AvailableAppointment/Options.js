import React from 'react';


const Options = ({ options,setTreatment}) => {
    const { name, slots,price } = options;

    return (
        <div className="card hover:bg-base-100 hover:shadow-2xl border border-1 duration-300">
            <div className="card-body text-center">
                <h2 className="text-lg text-primary font-bold text-center">{name}</h2>
                <p >{slots.length>0 ? slots[0]:'Please Try Another Day'}</p>
                <p className='font-semibold'>{slots.length} {slots.length >1 ? 'spaces':'space'} Available</p>
                <p className='font-semibold text-error'>Price: <span>{price}$</span></p>
                <div className="card-actions mx-auto">
                    <label 
                    disabled={slots.length===0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary"
                     onClick={()=>setTreatment(options)}>Book Appointment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default Options;
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Home/Share/Loading/Loading';
import CheckoutFrom from './CheckoutFrom';

const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise);
const Payment = () => {
    useTitle('Payment')
    const booking=useLoaderData();
    const navigation=useNavigation();
    const {treatment,slot,price,appointmentDate}=booking;
    if (navigation.state==='loading') {
        return <Loading/>
    }
    return (
        <div className='py-10 bg-[#f5f6fa]'>
            <h3 className='text-3xl text-primary font-semibold text-center py-5'>Payment for {treatment}</h3>
            <p className='text-center text-xl py-3'>Please pay <span className='text-red-600 font-bold'>{price}$</span> for your appointment on <span className='font-semibold'>{appointmentDate}</span> at <span className='font-semibold'>{slot}</span></p>
            <div className='lg:w-2/4 md:w-48 sm:w-36 py-10 mx-auto'>
            <Elements stripe={stripePromise}>
      <CheckoutFrom 
      booking={booking}/>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;
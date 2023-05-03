import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutFrom = ({booking}) => {
    
    const [clientSecret, setClientSecret] = useState("");
    const [success,setSuccess]=useState('');
    const [processing,setProcession]=useState(false);
    const [transactionID,setTransactionID]=useState('');
    const stripe=useStripe();
    const elements=useElements();
    const [cardError,setCardError]=useState();
    const {price,Patient,email,_id}=booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctor-server-bice.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json",
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);


    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            setCardError(error.message);
          }
          else{
            setCardError(' ');
          }
          setSuccess(' ');
          setProcession (true);
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                


                billing_details: {
                  name: Patient,
                  email:email
                },
              },
            },
          );
         
          if (confirmError) {
            setCardError(confirmError.message);
            return;
          }

          if(paymentIntent.status==='succeeded'){
            setSuccess('Congrats! Your payment has been successful.Thank you');
            setTransactionID(paymentIntent.id);
            toast.success('Thank you for Payment!')
            
          }
          

          const payment={
            price,
            transactionID:paymentIntent.id,
            email,
            bookingId:_id

          }
          fetch('https://doctor-server-bice.vercel.app/payments',{
            method:'POST',
            headers:{
              'content-type':'application/json',
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(payment)
          })
          .then(res=>res.json())
          .then(data=>{
            if (data.insertedID) {
              
            }
          })
          setProcession(false);
    }

    return (
      <>
        <form onSubmit={handleSubmit} className='bg-base-200 py-16 px-6 rounded'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary btn-sm text-white mx-auto mt-8 text-center'>
        Pay
      </button>
    </form>
    <p className='text-lg text-red-500 text-center py-4'>
        {cardError}
        {
            success && <div>
                <p className='text-lg text-green-500 text-center font-semibold'>{success}</p>
                <p className='text-lg py-2 text-black'>Your transaction ID: <span className='font-semibold'>{transactionID}</span></p>
            </div>
        }
    </p>
      </>
    );
};

export default CheckoutFrom;
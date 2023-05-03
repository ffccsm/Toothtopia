import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';


const BookingModal = ({ treatment, selectedDate,setTreatment,refetch }) => {
    const { name:treatmentName ,slots,price} = treatment;
    const date = format(selectedDate, 'PP');
    const {user}=useContext(AuthContext);

    const handleBooking=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const phone =form.phone.value;
        const name =form.name.value;
        const slot=form.slot.value;

        const bookings={
            appointmentDate:date,
            treatment:treatmentName,

            email,
            phone,
            Patient:name,
            slot,
            price
            
    
        }
        fetch('https://doctor-server-bice.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if (data.acknowledged) {
                setTreatment(null);
            toast.success('Booking Confirmed');
            refetch();
            }
            else{
                toast.error(data.message);
            }
        })

        


    }

    
    

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6 text-primary text-center">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            
                            {
                                slots.map((slot,i)=><option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} type="text" disabled placeholder="Your name" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email address" className="input input-bordered w-full" />
                        <input name='phone'  type="number" placeholder="Phone number" className="input input-bordered w-full" />
                        <br />
                        <input type='submit' className='btn btn-primary w-full' value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
import React, { useState } from 'react';
import { format } from 'date-fns';
import Options from './Options';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Home/Share/Loading/Loading';

const AvailableAppointment = ({selectedDate}) => {
   
    const [treatment,setTreatment]=useState(null);

    const date=format(selectedDate,'PP');

    const {data:appointment=[],refetch,isLoading}=useQuery({
        queryKey:['appointment'],
        queryFn:()=>fetch(`https://doctor-server-bice.vercel.app/appointment?date=${date}`)
        .then(res=>res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    }
   
    return (
        <div className='py-10 bg-[#f5f6fa]'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6'>
            {
               appointment.map(options=><Options
                key={options._id}
                options={options}
                setTreatment={setTreatment}
               ></Options>) 
            }
            </div>
            {
                treatment &&
                <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;
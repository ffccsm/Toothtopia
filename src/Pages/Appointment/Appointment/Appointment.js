import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    useTitle('Appointment')
    const [selectedDate,setSelectedDate]=useState(new Date());
    return (
        <div className='bg-[#f5f6fa] px-10'>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>


            <AvailableAppointment
            selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;
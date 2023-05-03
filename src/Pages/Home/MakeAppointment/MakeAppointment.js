import React from 'react';
import doctor from '../../../images/doctor.png';
import appointment from '../../../images/appointment.png';
import PrimaryButton from '../../../MyComponent/PrimaryButton';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import care from '../Home/Lottie/dentist.json';
const MakeAppointment = () => {

    return (
        <div>
            <div className='py-10'>
            <h4 className='text-3xl text-center text-primary font-semibold'>Appointment</h4>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10 justify-center items-center px-10'>
                <p className='text-start'>
                A dentist appointment is a scheduled visit to a dental professional to receive oral health care services. The appointment may be for routine check-ups, cleanings, or to address specific dental issues or concerns.During a dentist appointment, the dentist will perform a comprehensive examination of your teeth, gums, and other oral tissues. They may take X-rays to help diagnose any potential problems and discuss your oral health history and any symptoms you may be experiencing.
                </p>

                <Lottie animationData={care} loop={true} className='lg:w-10/12 rounded mx-auto'/>
            </div>
            </div>


            <section className='mt-10' style={{
            background:`url(${appointment})`,
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center"
        }}>

            
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row -mb-4">
                    <img src={doctor} alt='doctor' className="lg:w-1/2 rounded-lg shadow-2xl -mt-32 hidden md:block lg:block" />
                    <div className='text-white'>
                        
                        <h1 className="text-4xl font-bold">Make an Appointment Today!</h1>
                        <p className="py-6">Going to the dentist can be a nerve-wracking experience for many people, but it's important to keep up with regular dental check-ups to maintain good oral health.
                        The exact procedure at a dentist appointment will depend on the type of appointment you have and the specific needs of your dental health.
                        </p>
                        
                        <Link to='/appointment'><PrimaryButton>Appointment</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default MakeAppointment;
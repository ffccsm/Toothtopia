
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const MyAppointment = () => {
    useTitle('My-Appointment')
    const {user}=useContext(AuthContext);

    const url=`https://doctor-server-bice.vercel.app/bookings?email=${user?.email}`;
    const {data:bookings=[]}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res=await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
                
            });
            const data= await res.json();
            
            return data;
            
        }
       
    })
    
    return (
        <div>
            <h3 className='text-2xl text-primary font-semibold text-center py-10'>My Appointments</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bookings.map((booking,i)=>
                                <tr key={booking._id} className="hover">
                            <th>{i+1}</th>
                            <td className='font-semibold'>{booking.Patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appointmentDate}</td>
                            <td>{booking.slot}</td>
                            <td>{
                                booking?.price && !booking?.paid && <Link to={`dashboard/payment/${booking._id}`}>
                                <button className='btn btn-primary btn-sm text-white'>
                                    Pay
                                </button>
                                
                                </Link>
                                }
                                
                                {
                                   booking?.price && booking?.paid && <span>
                                   
                                    <input type="checkbox" checked className="checkbox checkbox-info ml-2 font-sm" />
                                    
                                   </span> 
                                }
                                
                                </td>
                        </tr>
                                )
                        }
                        
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
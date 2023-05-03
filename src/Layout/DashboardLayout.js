import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Home/Share/Navbar/Navbar';

const DashboardLayout = () => {
    const {user}=useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email);
    return (
        <div className='bg-[#f5f6fa] px-10'>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-[#f5f6fa]">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && 
                            <>
                            <li><Link to='/dashboard/AllUsers'>All Users</Link></li>
                            
                            </>
                        }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
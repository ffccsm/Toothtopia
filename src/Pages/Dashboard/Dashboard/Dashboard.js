import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Home/Share/Loading/Loading';

const Dashboard = () => {
    const {loading}=useContext(AuthContext);
    if (loading) {
        return  <Loading/>;
    };
   
};

export default Dashboard;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users =[], refetch}=useQuery({
    queryKey:['users'],
    queryFn:async()=>{
        const res= await fetch('https://doctor-server-bice.vercel.app/users')
        const data=await res.json();
        
        return data;
        
    }
    })

    const handleAdmin=id=>{
        fetch(`https://doctor-server-bice.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                toast.success('Make Admin Successfully!')
                refetch();
            }
        })
    }

    return (
        <div className='bg-[#f5f6fa]'>
            <h2 className='text-2xl text-primary font-semibold text-center py-10'>All Users </h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,i)=><tr key={user._id} className="hover">
        <th>{i+1} </th>
        
        <td className='font-semibold'>{user.name}</td>
        <td>{user.email}</td>
        <td>{ user?.role !=='admin' && <button onClick={() =>handleAdmin(user._id)} className='btn btn-xs btn-success text-white'>Make Admin</button>}</td>
        <td><button className='btn btn-xs btn-error text-white'>Delete</button></td>
        
      </tr>
      )
      }
    
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllUsers;
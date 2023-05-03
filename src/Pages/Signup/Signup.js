import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';
import Lottie from "lottie-react";
import signUp from '../Home/Home/Lottie/sign.json';
import useTitle from '../../hooks/useTitle';
const Signup = () => {
    useTitle('Signup')
    const {register,handleSubmit,formState: { errors }}=useForm();

    const {createUser,updateUser,logInWithGoogle} =useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('');
    const [createdUserEmail, setCreatedUserEmail]=useState('')
    const [token]=useToken(createdUserEmail)
    const navigate=useNavigate();

    if (token) {
        navigate('/');
    }
    const handleSignup=data=>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user=result.user;
            
            toast.success('User created successfully!!')
            const userInfo={
                displayName:(data.name)
            }
            updateUser(userInfo)
            .then(()=>{

                saveUser(data.name,data.email);
            })
            .catch(err=>{
                console.log(err)
                
            });
           
        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message)
        });

        
        const saveUser=(name,email)=>{
            const user={name,email};
            fetch('https://doctor-server-bice.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                setCreatedUserEmail(email);
            })
        }

    }

   

    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold text-primary text-center'>Sign Up</h2>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-start justify-items-center px-10'>
            <Lottie animationData={signUp} loop={true} className='lg:w-10/12 mx-auto rounded'/>

            <div className=''>
            <div className='lg:w-96 p-7'>
                
                <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                            
                        </label>
                        <input type="text" {...register("name",{
                            required:'Name is required'
                        })} className="input input-bordered w-full max-w-xs"/>
                        {errors.name && <p role='alert' className='text-red-600'>{errors?.name?.message}</p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <input {...register("email",{
                            required:"Email is required"
                        })} type="email"  className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role='alert' className='text-red-600'>{errors.email?.message}</p>}
                        
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                            
                        </label>
                        <input type="password" 
                        {...register("password",{
                            required:'Password is required',
                            minLength:{value:6,message: "Password must be 6 character long"},
                            pattern:{value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ , message:'Password must have uppercase number special character'}
                        })}
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role='alert' className='text-red-600'>{errors.password?.message}</p>}
                        
                    </div>
                    
                   
                   <div className='py-4'>
                   <input type="submit" className='btn btn-primary w-full' value='sing Up'/>
                   </div>
                </form>
                <div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </div>
                <p className='py-2'>Already have an account <Link to='/login' className='text-lime-600 underline'>Please Login</Link></p>
                
                
            </div>
        </div>
        </div>
        </div>
    );
};

export default Signup;
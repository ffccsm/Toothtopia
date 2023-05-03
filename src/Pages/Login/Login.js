

import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';
import Lottie from "lottie-react";
import login from '../Home/Home/Lottie/login.json';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {signIn,logInWithGoogle}=useContext(AuthContext);
    const [loginError,setLoginError]=useState('');
    const [loginUserEmail,setLoginUserEmail]=useState('');
    const [token]=useToken(loginUserEmail);


    const location =useLocation();
    const navigate = useNavigate ();

    const from=location.state?.from?.pathname || '/';

    if (token) {
        navigate(from,{replace:true});
    }
    
    const handleLogin=data=>{

        setLoginError('');
        signIn(data.email, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setLoginUserEmail(data.email);
            
            toast.success('Login Successfully!!')
           
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message)
        });  
      }

      const googleProvider=new GoogleAuthProvider();
        const handleGoogle=()=>{
            logInWithGoogle(googleProvider)
            .then((result)=>{
                const user=result.user;
            toast.success('Login with Google Successfully!!')
            navigate(from,{replace:true});
            })
            .catch(error=>console.error(error))
        }
    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold text-primary text-center '>Login</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-start justify-items-center px-10'>

            <Lottie animationData={login} loop={true} className='lg:w-8/12 mx-auto rounded'/>

            <div className=''>
            <div className='lg:w-96 p-7'>
                
                <form onSubmit={handleSubmit(handleLogin)}>

                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <input type="email" {...register("email",{required:"Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                            
                        </label>
                        <input type="password" {...register("password",{required:"Password is required",
                        minLength:{value:2,message:'Password must be 6 character or longer'}
                        
                        })} className="input input-bordered w-full max-w-xs"/>
                        
                        <label className="label">
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                            <span className="label-text">Forget Password?</span>
                            
                        </label>
                    </div>
                    
                   
                    <input type="submit" className='btn btn-primary w-full' value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='py-2'>New to Doctor Portal <Link to='/signup' className='text-lime-600 underline'>Create an account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>Login With Google</button>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Login;
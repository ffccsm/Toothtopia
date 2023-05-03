import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import app from '../firebase.config';

export const AuthContext=createContext();

 const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo);
    }

    const logInWithGoogle=(GoogleAuthProvider)=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleAuthProvider);
    }

    useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>unsubscribe();
    },[])

    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

  

    const authInfo={
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        logInWithGoogle,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
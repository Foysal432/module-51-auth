import { createContext, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../auth-confiq";
export const  AuthContext =createContext(null)
const GoogleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading,setLoading]=useState(true)
     
   const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
 
    const singInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
  // sing in with google

    const singwithgoogle = () =>{
      setLoading(true)
      return signInWithPopup (auth,GoogleProvider);
    }
    //    observe auth state change
useState(()=>{
    
 const unsubscribe= onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    console.log('observing current user inside useEffect of auth provider', 
    currentUser
    );
    setLoading(false)
  });
  return()=>{
    unsubscribe()
  }



},[])
     // use logout
     const logout =()=>{
        setLoading(true)
        signOut(auth)
    }

    const authInfo={logout,loading,user,singwithgoogle,createUser,singInUser}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.prototype={
children:PropTypes.node
}
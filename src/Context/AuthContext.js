import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [error, setError] = useState(null);
  const [user,setUser]=useState(null)

  const googleProvider = new GoogleAuthProvider()
  const githubProvider= new GithubAuthProvider()
  const facebookProvider= new FacebookAuthProvider()

  const signUP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }

const GithubSignIn=()=>{
    return signInWithPopup(auth, githubProvider)
}

const facebookSignIn=()=>{
    return signInWithPopup(auth,facebookProvider)
}
  useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    })

    

    return ()=>{
        unsubscribe()
    }
  },[])

  const logOut=()=>{
return signOut(auth)

  }

  const authInfo = { auth, user, signUP, signIn, error, setError,googleSignIn , GithubSignIn, facebookSignIn, logOut };

  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;

import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { auth } from "../Pages/LogIn/FireBase";

const userAuthContext = createContext()

export const UserAuthContextProvider = ({children}) => {
   const [user, setUser] = useState({})

   const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email,password)
   }
   const logOut = () => {
            return signOut(auth)
        }
        const googleSignIn = () => {
            const googleAuthProvider = new GoogleAuthProvider()
            return signInWithPopup(auth,googleAuthProvider)
        }
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
        setUser(currentUser)
    }) 
    return () => {
        unSubscribe(auth)
    }
   },[])

    return(
        <userAuthContext.Provider value={{signUp, logIn, user, logOut, googleSignIn}}>{children}</userAuthContext.Provider>
    )
}
export const useUserAuthContext = () => {
    return useContext(userAuthContext)
}
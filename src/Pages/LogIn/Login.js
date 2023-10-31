import React, { useState } from 'react'
import "../LogIn/Login.scss"
import { NavLink, Navigate } from 'react-router-dom'
import {FcGoogle } from "react-icons/fc";
import { useUserAuthContext } from '../../Context/UserAuthContext';

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [erorr, setError] = useState()
  const [alert, setAlert] = useState(false)
const {logIn, user, logOut, googleSignIn} = useUserAuthContext()

  const handleSubmit = async (e) => {
    if(!email || !password){
      setError("please fill all fields")
  }
  e.preventDefault()
  setAlert(true)
  
 
  try {
      await logIn(email,password)
      Navigate("/about")
      setAlert(true)
  
  } catch (err) {
      setError(err.message)      
  }
  }
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message)
    }
   }
      const handleGoogleSignIn = async (e) => {
    if(!email || !password){
        setError("Please Fill all the fields")
    }
    e.preventDefault()
try {
    await googleSignIn()
    Navigate("/about")
} catch (err) {
    setError(err.message)
}
   }
   useState(() => {
    setInterval(() => {
      setAlert(false)
    }, 3000);
   },[alert])
  return (
    <>
      <div className="login">
     {
      email || password ? ( <button className={alert ? 'success': 'Sactive'}>You Logged in Successfully</button>) : ""
     }
        <button className={user? "logout-btn" : "Lactive"} onClick={handleLogOut}>Logout</button>
      <div className={user ? "Lactive":""}>
        <div className="login-page">
            <h1 className='first-login'>Login</h1>
          <div className="login-content">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <input type="text" placeholder='username' onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-control">
                <input type="password" placeholder='password'onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-submit">
                <button type="submit">Login</button>
              </div>

              <div className="sign-up">
              Don't have an account? <NavLink to="/signup"> <span>Signup</span></NavLink>
              </div> 
              <div className="or">
                <p></p>
                <h5>or</h5>
                <p></p>
              </div>
              <div className="google"  onClick={handleGoogleSignIn}>
                <span><FcGoogle/></span>
                <button> Login with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  
    </>
  )
}

export default Login

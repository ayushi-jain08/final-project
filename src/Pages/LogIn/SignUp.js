import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuthContext } from "../../Context/UserAuthContext";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [erorr, setError] = useState()
    const [alert, setAlert] = useState(false)
    const {signUp} = useUserAuthContext()

    const handleSubmit = async (e) => {
        if(!email || !password){
            setError("please fill all fields")
        }
        e.preventDefault()
       setAlert(true)
        try {
            await signUp(email,password)
            Navigate("/login")
            
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
      email || password ?<button className={alert ? 'success': 'Sactive'}>You signUp in Successfully</button>: ""
     }
        <div className="login-page">
          <h1 className="sec-signup">Signup</h1>
          <div className="login-content">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <input type="text" placeholder="username" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-control">
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-submit">
                <button type="submit">Signup</button>
              </div>
              <div className="sign-up">
                Already have an account? <NavLink to="/login"> <span>Login</span></NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

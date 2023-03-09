import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Styles/Login.css";
import Reset from './Reset';
import Navbar from './NavBar';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [isHovering, setIsHovering] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
    setIsHovering(false)
  }, [user, loading]);

const handleMouseOver = () => {
  setIsHovering(true);
};

const handleMouseOut = () => {
  console.log("done")
  setIsHovering(false);
};

const loginFun=()=>{
    
    console.log(auth);
      if(email==="" || password===""){
        alert("Please dont leave a empty field ")
      }else{
        logInWithEmailAndPassword(email, password);
        navigate('/')
      }
}


  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="login-sm-box d-flex justify-content-around">
      
      <div className="login__container">
    <div class="input-group">
    <label class="label">Email address</label>
    <div></div></div>
        <input
          type="text"
          className={email===""?'input-log login__textBox_danger':'input-log'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          autoComplete="off"
          
        />
        <p className={email===""?"danger-text":"danger-hide"}>Dont leave Email empty</p>
        <div class="input-group">
    <label class="label">Password</label>
    <div></div></div>
        <input
          type="password"
          className={password===""?'input-log login__textBox_danger':'input-log'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p className={password===""?"danger-text":"danger-hide"}>Dont leave Password empty</p>

        <p>{error}</p>
        <button
          className="login__btn"
          onClick={() => loginFun()}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          <span ><img src={require('./images/google-btn.png')} alr="" width="20%" height="100%"/></span>Sign in with Google
        </button>
        <div>
          <a onClick={()=>handleMouseOver()}>Forgot Password</a>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
      <div className="img__container">
      <img src={require('./images/loginAnim.gif')} alt="" width="100%" height="100%" />
      </div>
      </div>
    </div>
    {isHovering &&(
      <div>
        
      <div className="blocker"  onClick={()=>handleMouseOut()}>

      </div>
      <div className="cartComponent">
      <Reset handleMouseOut={()=>handleMouseOut()}/>
      </div>
      </div>
      )}
    </>
  );
}
export default Login;
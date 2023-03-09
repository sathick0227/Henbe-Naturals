import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebaseConfig";
import "./Styles/Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
//   useEffect(() => {
//     if (loading) return;
//     if (user) navigate("/");
//   }, [user, loading]);
  return (
    <div className="register">
      <div className="login-sm-box d-flex justify-content-around">
      <div className="img__container">
      <img src={require('./images/register.gif')} alt="" width="100%" height="100%" />
      </div>
      
      <div className="register__container">
      <div class="input-group">
    <label class="label">Name</label>
    <div></div></div>
        <input
          type="text"
          className={name===""?'input-log login__textBox_danger':'input-log'}          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
        />
        <div class="input-group">
    <label class="label">Email Address</label>
    <div></div></div>
        <input
          type="text"
          className={email===""?'input-log login__textBox_danger':'input-log'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
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
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="login__btn login__google"
          onClick={signInWithGoogle}
        >
        <span ><img src={require('./images/google-btn.png')} alr="" width="20%" height="100%"/></span>Sign up with Google

        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
      </div>
    </div>
  );
}
export default Register;
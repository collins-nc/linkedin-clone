import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/LinkedinPic.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { login } from "../../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userAuth)=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.email
      }))
    }).catch((err)=>console.log(err))
    //clean input fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="linkedin" />
      <div className="login__container">
        <form>
          <p className="login__title">Sign in</p>
          <p className="login__desc">Stay updated on your professional world</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email "
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
          />
          <div className="login__shadow">
            <p className="login__forgotPsw">Forgot password?</p>
          </div>
          <button className="login__btn" onClick={loginToApp} type="submit">
            Sign In
          </button>
          <div className="login__or">
            <div />
            <p>or</p>
            <div />
          </div>
          <div className="login__apple">
            <box-icon type="logo" name="apple"></box-icon>
            <p> Sign in with Apple</p>
          </div>
        </form>
      </div>
      <p className="login__bottom">
        New to Linkedin?{" "}
        <span className="login__register">
          <Link to="/register">Join Now</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;

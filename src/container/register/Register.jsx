import React, { useState } from "react";
import "./Register.css";
import logo from "../../assets/LinkedinPic.png";
import { Link, useNavigate } from "react-router-dom";
import {
  updateProfile,
  auth,
  createUserWithEmailAndPassword,
} from "../../firebase";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";


const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState("password");
  const history = useNavigate();
  const dispatch = useDispatch();


  const registerUser = (e) => {
    e.preventDefault();
    if (password === "" || email === "") return alert("Please fill in  details");
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(auth.currentUser, {
        //update user
        displayName: email,
      }).then(
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: email,
          })
        )

      ).catch((err)=>console.log(err))
    });
    
    history("/");
    //clear input fillds
    setPassword("");
    setEmail("");
  };
  const togglePsw = () => {
    if (show === "password") {
      setShow("text");
      $(".register__psw").text("Hide");
    } else {
      setShow("password");
      $(".register__psw").text("Show");
    }
  };

  return (
    <div className="register">
      <form>
        <img className="register__logo" src={logo} alt="linkedin" />
        <p className="register__title">Join LinkedIn — it's free!</p>
        <div className="register__container">
          <div className="register__input">
            <div className="register__inputBlock">
              <p>Email</p>
              <div className="register__fild">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                />
              </div>
            </div>
            <div className="register__inputBlock">
              <p>Password (6 or more characters)</p>
              <div className="register__fild">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={show}
                />
                <p className="register__psw" onClick={togglePsw}>
                  Show
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={registerUser}
            className="register__btn"
          >
            Continue
          </button>
          <div className="register__or">
            <div />
            <p>or</p>
            <div />
          </div>
          <div className="register__bottomBtn">
            <box-icon type="logo" name="google"></box-icon>
            <p> Join with Google</p>
          </div>
          <div className="register__bottomBtn">
            <box-icon type="logo" name="apple"></box-icon>
            <p> Join with Apple</p>
          </div>
          <p className="register__text">
            Already on LinkedIn?{" "}
            <span className="register__sign">
              {" "}
              <Link to="/">Sign in</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

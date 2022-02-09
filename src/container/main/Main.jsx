import React, { useEffect } from "react";
import "./Main.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/Feed";
import {Create} from "../../components";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Login from "../login/Login";
import { useDispatch } from "react-redux";
import {auth,onAuthStateChanged} from "../../firebase";
import {login,logout} from "../../features/userSlice";
import Widge from "../widget/Widget";


function Main() {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();

    useEffect(() => {
    onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [])

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="main">
          <Header />

          <div className="main__body">
            <Sidebar />
            <Feed />
            <Create />
            <Widge/>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;

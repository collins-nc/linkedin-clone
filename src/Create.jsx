import React,{useState} from "react";
import "./Create.css";
import $ from "jquery";
import { addDoc } from "firebase/firestore";
import { colRef } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


const Create = () => {
  const user = useSelector(selectUser);

    const [input, setInput] = useState("");

    const removeWindo = ()=>{
        $(".create").css({"display":"none"});
    }
     const sendPost=(e)=>{
         e.preventDefault();
         if(input=="")return;
         addDoc(colRef,{
           name: user.email,
           description: "Another post for the movement ",
           message: input,
           photoUrl: "",
         });
         setInput("");
         removeWindo();
    }
  return (
      <div className="create">
        <form >
      <div className="create__top">
        <p>Create a post</p>
        <div className="create__iconWrap" onClick={removeWindo}>
          <box-icon
            className="create__x"
            color="gray"
            size="md"
            name="x"
            ></box-icon>
        </div>
      </div>
      <div className="create__user">
        <box-icon size="55px" type="solid" name="user-circle"></box-icon>
        <div className="create__userInfo">
          <p>{user.email}</p>
          <div className="create__btn">
            <box-icon
              color="gray"
              className="create__icon"
              size="20px"
              name="world"
            ></box-icon>
            <p className="create__btn-title">Anyone</p>
          </div>
        </div>
      </div>
      <div className="create__inputContainer">
        <textarea onChange={(e)=>(setInput(e.target.value))} value={input} rows="5" className="create__input"></textarea>
      </div>
      <div className="create__bottom">
        <p className="create__hastag">Add hashtag</p>
        <div className="create__iconArea">
          <div className="create__iconWrap">
            <box-icon color="#666666" name="photo-album"></box-icon>
          </div>
          <div className="create__iconWrap">
            <box-icon color="#666666" type="logo" name="youtube"></box-icon>
          </div>
          <div className="create__iconWrap">
            <box-icon color="#666666" name="file" type="solid"></box-icon>
          </div>
          <div className="create__iconWrap">
            <box-icon color="#666666" type="solid" name="briefcase"></box-icon>
          </div>
          <div className="create__iconWrap">
            <box-icon color="#666666" type="solid" name="badge"></box-icon>
          </div>
          <div className="create__iconWrap">
            <box-icon
              color="#666666"
              name="bar-chart-alt-2"
              type="solid"
              ></box-icon>
          </div>
          <div className="create__iconWrap">
            <box-icon color="#666666" name="dots-horizontal-rounded"></box-icon>
          </div>
          <div className="create__vline" />
          <div className="create__bottomBtn">
            <box-icon
              color="#666666"
              size="20px"
              name="message-rounded-dots"
              ></box-icon>
            <p className="create__btn-title">Anyone</p>
          </div>
            <button onClick={sendPost} className="create__post" type="submit">
              Post
            </button>
        </div>
      </div>
          </form>
    </div>
  );
};

export default Create;

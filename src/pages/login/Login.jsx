import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="loginTittles">
      <span className="loginTitle">Welcome</span>
      <span className="loginText">All the Lorem Ipsum generators on the internet
         tend to repeat predefiened chunks as necessary,
         making this the first true generator on the Internet.
         It uses a dictionary of over 200 Latin words,
         combined with a handful model sentence structures 
         to generate Lorem Ipsum which looks reasonable.
         The generated Lorem Ipsum is therefore always free 
         from repetition,injected humour
         ,or non-characteristic words etc.</span>
         </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="*****"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      
    </div>
  );
}

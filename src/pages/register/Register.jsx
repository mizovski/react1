import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <div className='titles'>
      <span className="registerTitle">Create your Account</span>
      <span className="registerText">All the Lorem Ipsum generators on the internet
         tend to repeat predefiened chunks as necessary,
         making this the first true generator on the Internet.
         It uses a dictionary of over 200 Latin words,
         combined with a handful model sentence structures 
         to generate Lorem Ipsum which looks reasonable.
         The generated Lorem Ipsum is therefore always free 
         from repetition,injected humour
         ,or non-characteristic words etc.</span>
         </div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          className="registerInput"
          placeholder="john"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>EMAIL</label>
        <input
          type="text"
          className="registerInput"
          placeholder="john@smth.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          className="registerInput"
          placeholder="*****"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          CREATE ACCOUNT
        </button>
      </form>
      
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}

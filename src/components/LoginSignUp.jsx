
import React, { useState } from 'react'
import "./LoginSign.css";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineWifiPassword } from "react-icons/md";
const LoginSignUp = () => {
    const[name,setName] =useState("")
    const [email ,setEmail] = useState("")
    const[password ,setPassword] = useState("")
    const [ action , setAction] = useState("Sign Up")
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = () => {
  console.log({ name, email, password });
};
const handleSignUp = () => {
  console.log({ name, email, password });

  setName("");
  setEmail("");
  setPassword("");
};
const handleLogin = () => {
  console.log({ email, password });

  setEmail("");
  setPassword("");
};
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div> : <div className="input">
                <FaUserCircle  className='icon'/>
                <input type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>}
            
            <div className="input">
                <MdEmail className='icon'/>
                <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="input">
                <MdOutlineWifiPassword className='icon' />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder='Enter your Password' 
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                />
                <span
                className="show-password"
                 onClick={() => setShowPassword(!showPassword)} style={{cursor: "pointer"}}>
                {showPassword ? "Hide" : "Show"}
                 </span>
            </div>
        </div>
        {action==="Sign Up"? <div></div> :<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up");handleSubmit();handleSignUp();}} > Sign Up </div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login");handleLogin();}} >Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
const Login = () => {
    let history=useHistory()
    let [userval,setuser]=useState("")
    let[usepassword,setusepass]=useState("")
   
    const handlelogin=(e)=>{
        e.preventDefault();
        fetch("http://localhost:4000/Users")
        .then((res)=>{return res.json()})
        .then((data)=>{
            let[user]=data.filter((user)=>(user.username===userval || user.email===userval));
            if (user!=undefined && user.pass===usepassword) {
                alert("login successfull")
                history.push("/home")
            } else if(user!=undefined && user.pass!==usepassword){
                alert("wrong password")
            }
            else{
                alert("user not found")
            }
        })
    }
    return (  
        <div className="login">
        <h1  id="log">Login</h1>
        <form onClick={handlelogin}  id="form">
            <input id="user" type="text" placeholder="User name or mail ID" value={userval} onChange={(e)=>{setuser(e.target.value)}} /> <br />
            <input id="pass" type="password"  placeholder="enter the password" value={usepassword} onChange={(e)=>{setusepass(e.target.value)}}/> <br />
            <input id="sub" type="Submit" value="Login" />
            
        <h3 id="h33">Don't have an account ?</h3>
        
       
        </form>
        <Link to="/signup"><button id="btns">Create New Account</button></Link>
        </div>
    );
}
 
export default Login;
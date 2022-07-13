import {useState,useRef} from 'react';
const Signup = () => {
    // const [name, setname] = useState("")
    let uname=useRef("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [gender, setgender] = useState("")
    const handlesubmit = (e)=>{
        
            e.preventDefault();
            let username=(uname.current.value)
            var newUser = {username , email, pass,gender }
            fetch(` http://localhost:4000/Users`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newUser)})
                    .then(()=>{
                        alert(`this user has been added to the list`)
                    })   
        }
    
    return (
    <div className="signup">
        <h1>Create your Account</h1>
        <form onSubmit={handlesubmit}>
            <div>
                {/* <input type="text" placeholder="Enter your Full Name" required  value={name} onChange={(e) => { setname(e.target.value); console.log(name); }} /> */}
                <input type="text" placeholder="Enter your Full Name" required ref={uname}/>
                <input type="email"  placeholder="Enter your Mail id" value={email} onChange={(e) => { setemail(e.target.value); console.log(email); }}/>
                <input type="password" placeholder="Enter your Password" value={pass} onChange={(e) => { setpass(e.target.value); console.log(pass); }}/>
            </div>
            <fieldset>
                <legend>Enter you Gender</legend>
                <input type="radio" value="Male"   id="m" name="gender" onClick={(e)=>{setgender(e.target.value)}}/> <label htmlFor="m">Male</label>
                <input type="radio" value="Female" id="f" name="gender" onClick={(e)=>{setgender(e.target.value)}} /> <label htmlFor="f">Female</label>
                <input type="radio" value="Others" id="o" name="gender" onClick={(e)=>{setgender(e.target.value)}} /> <label htmlFor="o">Others</label>
            </fieldset>
            <input type="submit" value="Create new account" />
        </form>
    </div>
    );
}
export default Signup;

import React, { useState } from "react";

function User() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUsererr] = useState(false);
  const[passErr,setPasserr]=useState(false);

  //username Validation
  function userHandel(e) {

   

    let item = e.target.value;
    console.warn(item.length)
    if (item.length < 3) {
      setUsererr(true)
    } else {
      setUsererr(false)
    }
    setLogin(item)

  }
//Password Validation
  function passwordHandeler(e) {
    let item = e.target.value;
    console.warn(item.length)
    if (item.length < 3) {
      setPasserr(true)
    } else {
      setPasserr(false)
    }
    setPassword(item)
  }

  function Login(e) {
    if(login.length<3 || password.length<3)
    {
      alert("Please Enter the valide password and Username!")
    }
    else
    {
      alert("All Good...!")
    }
    e.preventDefault()
  }


  return (
    <form onSubmit={Login}>
      <div >

        <h1>Login!</h1>
        Username: <input type="text" placeholder="Please Enter the username" onChange={userHandel} />   {userErr ? <span>User Invalide</span> : null}
        <br /><br />
        password:  <input type="text" placeholder="Please Enter you Password" onChange={passwordHandeler} />  {passErr?<span>invalide Password</span>:null}
        <br /><br />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default User;

// style={{backgroundColor:"skyblue"}}

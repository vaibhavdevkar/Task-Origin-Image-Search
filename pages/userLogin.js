import React, { useState } from 'react';
import { useRouter } from 'next/router';


function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const user1 = "krishna";
  const pass1 = "krishna123";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // You can add your own logic here to handle the form submission
  

  if(username === user1 && password===pass1){
      router.push('/userpage');
  }else{
      window.alert("Enter correct credintial")
  }
  
  }

  return (
    <div className="form-container">
      <h1>User  Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className="button-70" id="adminsubmitbtn" role="button"  type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserLogin;

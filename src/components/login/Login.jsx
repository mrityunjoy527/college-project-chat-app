import { useState } from 'react';
import useRegister from "../../useRegister";
import '../register/register.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toggleRegister } = useRegister();


  return (
    <div className='login'>
      <h2>Welcome back!</h2>
      <p className='subHead'>Sign In to  access your chats</p>
      <form >
        <label htmlFor="email">Email*</label>
        <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        <label htmlFor="password">Password*</label>
        <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
        <p>Forgot password?</p>
        <button type="submit">Sign In</button>
      </form>

      <div className='gsign'>
        <img src="./google.svg" alt="" />
        <p>Sign In with Google</p>
      </div>

      <p>{"Don't have an account?"}
        <span onClick={() => toggleRegister()}>Sign Up</span>
      </p>

    </div>
  );
}

export default Login;

import { useState } from 'react';
import "./register.css";
import useRegister from '../../useRegister';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {toggleRegister} = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {name, email, password} = Object.fromEntries(formData);
        const data = await axios.post("http://127.0.0.1:8000/api/register/", {name, email, password});
        console.log(data);
    }

    return (
        <div className='login'>
            <h2>Create your account on WhatsUp!</h2>
            <p className='subHead'>Start chatting to people by adding them <br/> to your chats</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name*</label>
                <input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
                <label htmlFor="email">Email*</label>
                <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                <label htmlFor="password">Password*</label>
                <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
                <button type="submit">Get Started</button>
            </form>

            <div className='gsign'>
                <img src="./google.svg" alt="" />
                <p>Sign Up with Google</p>
            </div>

            <p>Already have an account?
                <span onClick={() => toggleRegister()}>Sign In</span>
            </p>

        </div>
    );
}

export default Register;

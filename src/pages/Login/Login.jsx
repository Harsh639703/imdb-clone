import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/Firebase";
import { useAuth } from "../../context/AuthContext";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);

        try {
            await login(auth, email, pass);
            navigate('/')
        }catch(e) {
            console.log(e);
        }


    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <Link className="link-btn" to="/register">Don't have an account? Register</Link>
        </div>
    )
}
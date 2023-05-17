import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../services/Firebase';

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);

        try {
            await signup(auth, email, pass);
            navigate('/login');
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <>

            <div className='auth-form-container'>
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' name="name" id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="Password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**" id="password" name="password" />
                    <button type="submit">Register</button>
                </form>
                <Link className="link-btn" to="/login">Already have an account? Log In</Link>
            </div>
        </>
    )
}
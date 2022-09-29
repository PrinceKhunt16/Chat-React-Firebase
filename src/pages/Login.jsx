import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import '../style.scss';

const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">My Chat - Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Your email' className="email" />
                    <input type="text" placeholder='Your password' className="password" />
                    <button>Sign up</button>
                </form>
                {err && <span>Something went wrong</span>}
                <p>You do't have account ? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Register;
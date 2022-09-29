import React from 'react';
import '../style.scss';

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">My Chat - Login</span>
                <form>
                    <input type="text" placeholder='Your email' className="email" />
                    <input type="text" placeholder='Your password' className="password" />
                    <button>Sign up</button>
                </form>
                <p>You do't have account ? Register</p>
            </div>
        </div>
    )
}

export default Register;
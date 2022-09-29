import React from 'react';
import '../style.scss';

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">My Chat - Register</span>
                <form>
                    <input type="text" placeholder='Your name' className="display name" />
                    <input type="text" placeholder='Your email' className="email" />
                    <input type="text" placeholder='Your password' className="password" />
                    <input style={{display: "none"}} type="file" id='file'/>
                    <label htmlFor="file">Add your Avtar</label>
                    <button>Sign in</button>
                </form>
                <p>You do have an account ? Login</p>
            </div>
        </div>
    )
}

export default Register;
import React, { useState } from 'react';
import '../style.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (err) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(async (downloadURL) => {
                            await updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL
                            });

                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL
                            });

                            await setDoc(doc(db, "userChats", res.user.uid), {});
                            
                            navigate('/');
                        });
                }
            );

        } catch (err){
            setErr(true);
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">My Chat - Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Your name' className="display name" />
                    <input type="text" placeholder='Your email' className="email" />
                    <input type="text" placeholder='Your password' className="password" />
                    <input style={{ display: "none" }} type="file" id='file' />
                    <label htmlFor="file">Add your Avtar</label>
                    <button>Sign in</button>
                </form>
                {err && <p>Something went wrong.</p>}
                <p>You do have an account ? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [fullname, setfullname] = useState('');
    const [password, setpassword] = useState('');

    const createuser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/enter', {
                username: username,
                email: email,
                fullname: fullname,
                password: password
            });
            console.log('create');
            if (response.status === 200) {
                window.alert('Account created successfully');
            } else {
                window.alert(response.data.error);
            }
        } catch (err) {
            console.log(err);
            window.alert('Something went wrong');
        }
    };

    return (
        <div className="bg-purple-500 flex flex-col justify-center items-center h-screen w-full">
            <h1 className='h-10 w-72 text-slate-200 font-bold'>STUDENT LEARNING MANAGEMENT</h1> 
            <hr />
            <form action="" className="flex flex-col justify-center items-center h-screen w-full gap-3 ">
                <h1 className="text-2xl text-white font-bold">Sign Up</h1>
                <div className='border-[2px] border-slate-200 flex flex-col justify-center items-center px-5 py-10 gap-3'>
                <input
                    type="fullname"
                    className="w-72 h-10 rounded-md bg-pink-600 pl-2 text-black placeholder-black outline-none"
                    placeholder="Full Name"
                    required
                    value={fullname}
                    onChange={(e) => setfullname(e.target.value)}
                />

                <input
                    type="text"
                    className="w-72 h-10 rounded-md bg-pink-600 pl-2 text-black placeholder-black outline-none"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />

                <input
                    type="email"
                    className="w-72 h-10 rounded-md bg-pink-600 pl-2 text-black placeholder-black outline-none"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-72 h-10 rounded-md bg-pink-600 pl-2 text-black placeholder-black outline-none"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />

                <button onClick={createuser} className="text-xl font-bold h-10 w-72">
                    Submit
                </button>

                </div>
            </form>
        </div>
    );
};

export default Signup;

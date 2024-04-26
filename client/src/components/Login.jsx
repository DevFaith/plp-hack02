import React from 'react';
import axios from 'axios';
import {useState} from 'react';


const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const createuser = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/verify', {
                username: username,
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
    <div className='bg-gray-400 flex flex-col justify-center items-center h-screen w-full'>
        <h1>Login Page</h1>
        <form action="" className='flex flex-col justify-center items-center h-screen w-full gap-3 '>
            <input type="text" 
            placeholder="Username"
            required
            value={username}
            onChange={e => setusername(e.target.value)}

             />
            
            <input type="password" 
            placeholder="password"
            required
            value={password}
            onChange={e => setpassword(e.target.value)}

            
            />
            <button onClick={createuser} className='text-xl font-bold h-10 w-72'>Login in</button>
        
        </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function authenticate(username) {
        try {
            const response = await fetch('http://localhost:3000/api/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: username
            });
            if (!response.ok) {
                throw new Error('Authentication failed');
            }
            const data = await response.text();
            return data;
        } catch (error) {
            throw error;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(username);
            const response = await authenticate(username);
            console.log(response);
            const from = location.state?.from || '/';
            navigate(from);
        }
        catch (e) {
            setError('Invalid username');
            console.log(e);
        }

    };
    return (
        <div className='h-screen w-screen bg-slate-700 justify-center flex items-center'>
            <div className='wrapper w-80 bg-slate-800 p-10 rounded-md '>
                <form action="" onSubmit={handleSubmit}>
                    <h1 className='text-4xl text-slate-200 text-center'>Login</h1>
                    <div className="input-box relative w-full h-14 mt-7"><span>
                        <FaUserCircle className='icon self-center text-white absolute left-2 top-2.5' />
                        <input type="text" placeholder='Amazon ID' className='w-full border-2 border-solid rounded-full px-7 py-1  bg-transparent text-slate-200' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </span>
                    </div>
                    <div>
                        <button type="submit" className='w-full h-8 bg-orange-400 hover:bg-orange-500 rounded-full shadow font-bold'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
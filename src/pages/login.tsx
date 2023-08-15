import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import home from "./home";
import {serverUrl} from "../shared/constants";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://${serverUrl}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Successfully logged in
                const data = await response.json();
                localStorage.setItem('authToken', data.data.token);
                // Save the authentication token or handle session here
                navigate("/");
            } else {
                // Handle login failure
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <input
                    type="username"
                    placeholder="Username"
                    className="w-full border rounded py-2 px-3 mb-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded py-2 px-3 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;

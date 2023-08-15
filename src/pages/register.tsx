import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {serverUrl} from "../shared/constants";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const navigate = useNavigate();
    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                console.error("Passwords don't match");
                return;
            }

            const response = await fetch(`https://${serverUrl}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, imageUrl }),
            });

            if (response.ok) {
                console.log('Registration successful');
                // Optionally, you can navigate to another page after successful registration
                navigate('/users/login'); // Use useNavigate if using React Router v6
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full border rounded py-2 px-3 mb-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded py-2 px-3 mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border rounded py-2 px-3 mb-2"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    className="w-full border rounded py-2 px-3 mb-4"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                    onClick={handleRegister}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;

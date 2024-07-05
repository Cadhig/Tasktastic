
import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import AccountActionButton from "./AccountActionButton";

export function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const data = {
            username: username,
            password: password,
        };

        try {
            const response = await fetch(`http://localhost:6002/api/users/login`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                console.log('Login successful');
            } else {
                alert('Failed to login');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
        return navigate('/notes')
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-tasktastic-box py-6 px-6 rounded-lg shadow-2xl flex flex-col gap-4">
                <h1 className="text-3xl tasktastic-font text-center text-tasktastic-base">Tasktastic</h1>
                <h2 className="text-xl text-center cursor-default pb-2">Sign In</h2>
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className=" border border-black/10 cursor-pointer p-3 w-80 rounded-lg" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-black/10 cursor-pointer  p-3 w-80 rounded-lg " />
                </div>
                <div className="flex flex-col gap-4">
                    <AccountActionButton type={'Sign In'} onClick={handleSubmit} />
                    <div className="flex justify-center gap-1">
                        <p className="cursor-default">Don't have an account? </p>
                        <Link to="/signup"><button className="text-blue-500 hover:underline">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SignUp() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const handleSubmit = async () => {
        const data = {
            username: username,
            password: pass,
        };
        console.log(data)
        try {
            const response = await fetch('http://localhost:6002/api/users/signup', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response)
            if (response.ok) {
                alert('Account created');
            } else {
                alert('Failed to create account');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
        return navigate('/')
    };
    return (
        <div className="flex justify-center">
            <div className="flex h-full flex-col items-center justify-center">
                <div className="bg-tasktastic-box py-6 px-12 rounded-lg shadow-2xl flex flex-col gap-4">
                    <h1 className="text-3xl tasktastic-font text-tasktastic-base">Welcome to Tasktastic!</h1>
                    <h2 className="text-xl text-center cursor-default">Create an Account</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <input type="password" placeholder="Confirm password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <AccountActionButton type={'Sign Up'} onClick={handleSubmit} />
                    <div className="flex justify-center gap-1">
                        <p className="cursor-default">Already have an account? </p>
                        <Link to="/"><button className="text-tasktastic-link hover:underline">Login</button></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}



import { useState } from "react";
import { Link, redirect } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-tasktastic-box py-6 px-6 rounded-lg shadow-2xl flex flex-col gap-4">
                <h1 className="text-3xl tasktastic-font text-center text-tasktastic-base">Tasktastic</h1>
                <h2 className="text-xl text-center cursor-default pb-2">Sign In</h2>
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} className=" border border-black/10 cursor-pointer p-3 w-80 rounded-lg" />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} className="border border-black/10 cursor-pointer  p-3 w-80 rounded-lg " />
                </div>
                <div className="flex flex-col gap-4">
                    <LoginButton username={username} password={password}/>
                    <div className="flex justify-center gap-1">
                        <p className="cursor-default">Don't have an account? </p>
                        <Link to="/signup"><button className="text-blue-500 hover:underline">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LoginButton(props:any){

    const handleSubmit = async () => {
        const data = {
            username: props.username,
            password: props.password,
        };
        
        try {
            const response = await fetch('/api/users/login', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                alert('Login successful');
            } else {
                alert('Failed to login');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
        return redirect('/notes')
    };

    return(
        <button className="p-3 w-80 rounded-lg bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active text-xl text-white" onClick={handleSubmit}>Sign In</button>
    )
}

export function SignUp() {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    return (
        <div className="flex justify-center">
            <div className="flex h-full flex-col items-center justify-center">
                <div className="bg-tasktastic-box py-6 px-12 rounded-lg shadow-2xl flex flex-col gap-4">
                    <h1 className="text-3xl tasktastic-font text-tasktastic-base">Welcome to Tasktastic!</h1>
                    <h2 className="text-xl text-center cursor-default">Create an Account</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <input type="password" placeholder="Password" value={pass} onChange={(e)=> setPass(e.target.value)} className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <input type="password" placeholder="Confirm password" value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value)} className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <SignupButton username={username} pass={pass}/>
                    <div className="flex justify-center gap-1">
                        <p className="cursor-default">Already have an account? </p>
                        <Link to="/"><button className="text-tasktastic-link hover:underline">Login</button></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

 function SignupButton(props: any){

    const handleSubmit = async () => {
        const data = {
            username: props.username,
            password: props.password,
        };
        
        try {
            const response = await fetch('/api/users/signup', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                alert('Account created');
            } else {
                alert('Failed to create account');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    };

    
    return(
        <div>
            <button className="p-3 w-80 rounded-2xl bg-tasktastic-base text-xl hover:bg-tasktastic-hover active:bg-tasktastic-active text-white" onClick={handleSubmit}>Sign Up</button>
        </div>
    )
}


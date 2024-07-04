import { Link } from "react-router-dom";

export function Login() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-tasktastic-box py-6 px-6 rounded-lg shadow-2xl flex flex-col gap-4">
                <h1 className="text-3xl tasktastic-font text-center text-tasktastic-base">Tasktastic</h1>
                <h2 className="text-xl text-center cursor-default pb-2">Sign In</h2>
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Username" id="username" className=" border border-black/10 cursor-pointer p-3 w-80 rounded-lg" />
                    <input type="text" placeholder="Password" id="password" className="border border-black/10 cursor-pointer  p-3 w-80 rounded-lg " />
                </div>
                <div className="flex flex-col gap-4">
                    <button className="p-3 w-80 rounded-lg bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active text-xl text-white">Sign In</button>
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

    return (
        <div className="flex justify-center">
            <div className="flex h-full flex-col items-center justify-center">
                <div className="bg-tasktastic-box py-6 px-12 rounded-lg shadow-2xl flex flex-col gap-4">
                    <h1 className="text-3xl tasktastic-font text-tasktastic-base">Welcome to Tasktastic!</h1>
                    <h2 className="text-xl text-center cursor-default">Create an Account</h2>
                    <input type="text" placeholder="Username" id="username" className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <input type="password" placeholder="Password" id="password" className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <input type="password" placeholder="Confirm password" id="confirmPassword" className="border border-black/10 p-3 w-80 rounded-lg appearance-none bg-tasktastic-input-background" />
                    <button className="p-3 w-80 rounded-2xl bg-tasktastic-base text-xl hover:bg-tasktastic-hover active:bg-tasktastic-active text-white">Sign Up</button>
                    <div className="flex justify-center gap-1">
                        <p className="cursor-default">Already have an account? </p>
                        <Link to="/"><button className="text-tasktastic-link hover:underline">Login</button></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}
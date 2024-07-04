
export function Login() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-tasktastic-box py-6 px-6 rounded-lg shadow-2xl flex flex-col gap-4">
                <h2 className="text-3xl text-center cursor-default pb-2">Sign In</h2>
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Username" id="username" className=" border border-black/10 cursor-pointer p-3 w-80 rounded-lg" />
                    <input type="text" placeholder="Password" id="password" className="border border-black/10 cursor-pointer  p-3 w-80 rounded-lg " />
                </div>
                <div className="flex flex-col gap-4">
                    <button className="p-3 w-80 rounded-lg bg-[#8b5cf6] hover:bg-[#6445AC] active:bg-[#3B266E] text-xl text-white">Sign In</button>
                    <div className="flex justify-center gap-1">
                        <p className="cursor-default">Don't have an account? </p>
                        <a href="/signup"><button className="text-blue-500 hover:underline">Sign Up</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
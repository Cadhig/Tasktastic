
export function Login() {

    return (
        <div class="flex flex-col items-center justify-center">
            <div class="bg-tasktastic-box py-6 px-6 rounded-lg shadow-2xl flex flex-col gap-4">
                <h2 class="text-3xl text-center cursor-default pb-2">Sign In</h2>
                <div class="flex flex-col gap-4">
                    <input type="text" placeholder="Username" id="username" class=" border border-black/10 cursor-pointer p-3 w-80 rounded-lg" />
                    <input type="text" placeholder="Password" id="password" class="border border-black/10 cursor-pointer  p-3 w-80 rounded-lg " />
                </div>
                <div class="flex flex-col gap-4">
                    <button class="p-3 w-80 rounded-lg bg-[#8b5cf6] hover:bg-[#6445AC] active:bg-[#3B266E] text-xl text-white" onclick="userLogin()">Sign In</button>
                    <div class="flex justify-center gap-1">
                        <p class="cursor-default">Don't have an account? </p>
                        <a href="/signup"><button class="text-blue-500 hover:underline">Sign Up</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
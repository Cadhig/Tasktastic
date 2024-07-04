import placeholder from '../../assets/Placeholder.jpg'
import { Login } from '../interactivity/AccountAction'

export default function LoginScreen() {

    return (
        <div className='flex h-full'>
            <div className='w-full flex'>
                <img src={placeholder} alt="placeholder" class="h-full" />
            </div>
            <div className='flex flex-col items-center w-full justify-center gap-4'>
                <h1 className='tasktastic-font text-4xl text-tasktastic-base'>Tasktastic</h1>
                <Login />
            </div>
        </div>
    )
}
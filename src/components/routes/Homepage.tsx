import placeholder from '../../assets/Placeholder.jpg'
import { Login } from '../AccountActions'

export default function LoginScreen() {

    return (
        <div className='flex h-full'>
            <div className='w-full flex'>
                <img src={placeholder} alt="placeholder" className="h-full" />
            </div>
            <div className='flex flex-col items-center w-full justify-center gap-4'>
                <Login />
            </div>
        </div>
    )
}
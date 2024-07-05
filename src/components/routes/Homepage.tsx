import placeholder from '../../assets/Placeholder.jpg'
import { Login } from '../LoginOrSignupForm'

export default function LoginScreen() {

    return (
        <div className='flex h-full'>
            <div className='flex flex-col items-center w-full justify-center gap-4'>
                <Login />
            </div>
        </div>
    )
}
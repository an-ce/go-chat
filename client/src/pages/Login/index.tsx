import { Lock, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const classItem = `
    flex text-gray-500 gap-2 border mt-8 w-full px-4 rounded-md h-16 items-center
    [&>input]:flex-grow [&>input]:bg-transparent
`

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="text-3xl font-bold"><span className="p-2 text-white bg-black rounded-tl-3xl rounded-br-3xl">Go</span>  chat <span className="mx-5">|</span> Login </div>
            <div className='w-96'>
                <div className={classItem}>
                    <User/>
                    <input type="text" placeholder='Username'/>
                </div>
                <div className={classItem}>
                    <Lock/>
                    <input type="text" placeholder='Password'/>
                </div>
                <div className='w-full p-4 bg-black rounded-md text-white mt-5 text-center font-bold text-xl'>
                Submit
                </div>

                {/* Actions */}
                <div className='flex justify-between w-full text-gray-500 mt-3'>
                    <Link className='hover:text-black cursor-pointer' to='/forgot-password'>Forgot password ?</Link>
                    <Link className='hover:text-black cursor-pointer' to='/sign-up'>Sign up</Link>
                </div>

            </div>
        </div>
    )
}

export default Login
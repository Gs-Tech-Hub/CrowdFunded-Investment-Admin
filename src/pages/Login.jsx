import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGeneralContext } from '../context/GlobalContext'
import { PopUpMessageWithAutoCancel } from '../AllFiles'
import { displayPopUpMessage, cancelPopUP } from '../helper function/pop up'
const Login = () => {
    const navigate = useNavigate()
    const userData = useGeneralContext()
    const [loading, setloading] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('invalid credentials')
    const [popUpType, setpopUpType] = useState('error')

    const { id } = userData
    console.log(id)

    const handleButton = (e) => {
        // e.preventDefault()
        // if (email === '' || password === '') {
        //     setpopUpMsg('username or password cannot be empty')
        //     setdisplayPopUp(true)
        //     cancelPopUP(setdisplayPopUp, 1000)
        // }
        navigate('/admin')
    }

    return (
        <div className='pb-[7rem]'>
            <div className='flex justify-center'>
                <div className='border-[1px] border-[lightgray] w-[26rem] mt-[9rem] pb-[2rem] rounded-[0.5rem] max-[493px]:w-[90%]'>
                    <h1 className=' py-[1rem] text-center text-[1.8rem] mb-[1.4rem] font-bold' >Admin Login</h1>
                    <div className='text-center w-[100%]'>
                        {/* <form action=""> */}
                        <input type='email' placeholder='email' onInput={(e) => setemail(e.target.value)} value={email} className='bg-[none] outline-none pl-[0.7rem] mb-[2.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-md border-[#eae9e9]' />
                        <input type='password' placeholder='password' onInput={(e) => setpassword(e.target.value)} value={password} className='bg-[none] outline-none pl-[0.7rem] mb-[1.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-md border-[#eae9e9]' />

                        <p className='text-center mt-[0.5rem] cursor-pointer' ><Link to='/forgotPassword'> Forgot password ? </Link></p>
                        {
                            loading ?
                                <button className=' w-[90%] bg-[blue] text-white rounded-md py-[0.46rem] cursor-pointer'><div class="round animate-spin h-[1.85rem] w-[1.85rem] m-[auto] border-[3px] rounded-[50%]  border-x-[blue] border-t-[blue] border-[white] "></div></button>
                                :
                                <button onClick={(e) => handleButton(e)} className='mt-[1rem] cursor pointer w-[90%] bg-[blue] text-white rounded-md py-[0.5rem] text-[1.2rem]'>Login</button>
                        }
                        {/* </form> */}
                    </div>
                </div>
            </div>
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
        </div>
    )
}

export default Login
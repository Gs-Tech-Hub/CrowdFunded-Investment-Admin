import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGeneralContext } from '../context/GlobalContext'
import { PopUpMessageWithAutoCancel } from '../AllFiles'
import { displayPopUpMessage, cancelPopUP } from '../helper function/pop up'
const ForgotPassword = () => {
    const navigate = useNavigate()
    const userData = useGeneralContext()
    const [loading, setloading] = useState(false)
    const [email, setemail] = useState('')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('invalid credentials')
    const [popUpType, setpopUpType] = useState('error')

    const { id } = userData
    console.log(id)

    const handleButton = (e) => {
        setloading(true)
        displayPopUpMessage('password reset email successfully sent', setpopUpMsg, setpopUpType, setdisplayPopUp, true)
        cancelPopUP(setdisplayPopUp, 1000)
        // e.preventDefault()
        // if (email === '' || password === '') {
        //     setpopUpMsg('username or password cannot be empty')
        //     setdisplayPopUp(true)
        //     cancelPopUP(setdisplayPopUp, 1000)
        // }
        // navigate('/Dashboard')
    }

    return (
        <div className='pb-[7rem] '>
            <h1 className='text-center text-[1.8rem] mt-[1rem] mb-[4rem] font-bold'>Reset Password</h1>
            <div className='flex items-center justify-center max-[473px]:block max-[473px]:text-center '>
                <input type='email' placeholder='email' onInput={(e) => setemail(e.target.value)} value={email} className='bg-[none] outline-none pl-[0.7rem] mr-[1.7rem] py-[0.7rem] w-[23rem] border-[1px] rounded-md border-[#eae9e9] max-[598px]:w-[60%]  max-[598px]:mr-[1rem] max-[473px]:w-[90%] max-[473px]:mr-[0rem] max-[473px]:mb-[1.2rem]' />
                <div>
                    {
                        loading ?
                            <button className=' bg-[blue] text-white w-[10rem] rounded-md py-[0.46rem] cursor-pointer'><div class="animate-spin h-[1.85rem] w-[1.85rem] m-[auto] border-[3px] rounded-[50%]  border-x-[blue] border-t-[blue] border-[white] max-[598px]:w-[8.9rem] max-[473px]:w-[90%]"></div></button>
                            :
                            <button onClick={(e) => handleButton(e)} className='cursor pointer bg-[blue] text-white rounded-md py-[0.7rem] w-[10rem] text-[1rem] font-bold max-[598px]:w-[8.9rem] max-[473px]:w-[90%]'>Send Reset Email</button>
                    }
                </div>
            </div>
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
        </div>
    )
}
export default ForgotPassword



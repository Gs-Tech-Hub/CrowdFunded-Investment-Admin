import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import Avatar from '@mui/material/Avatar';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Header = () => {
    const [mobile, setmobile] = useState(false)

    return (
        <header className='w-[100%] py-[0.7rem] px-[1rem] border-b-[1px] m-[auto] border-[#cdcdcd]  mb-[2rem]'>
            <div className='flex items-center justify-end'>
                <Link to='/'><FiLogOut size={23} className='mr-[1rem]' /></Link>
                <div className='flex items-center justify-end'>
                    <h3 className='mr-[0.5rem]'>GS Tech</h3>
                    <Avatar sx={{ width: 34, height: 34 }} src="/broken-image.jpg" />
                </div>
            </div>
            {/* <div className='hidden max-[883px]:block ml-[95vw] pt-[1rem]' onClick={() => setmobile(true)}><LuMenu size={22} /></div> */}
        </header>
    )
}

export default Header


import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../images/shoppa-black.svg'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto pr-4 bg-white w-full text-black">
            <img src={logo} height={438} width={200} alt='logo'  />
            <ul className="hidden md:flex font-poppins">
                <li className="p-4 text-normal">Pricing</li>
                <li className="p-4 mt-3 mx-3 bg-purple w-[238px] h-[63px] text-white rounded-2xl border border-r-button text-center">Vendors Login</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} className="text-bold"/> : <AiOutlineMenu size={20} className="text-bold"/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-grey-900 h-full bg-white  ease-in-out duration-500' : 'fixed left-[-100%]'}>   
                <img src={logo} height={438} width={200} className='mt-5' alt='logo' />
                <ul className='p-4  font-poppins'>
                    <li className="p-4 mt-8 text-lg">Pricing</li>
                    <li className="p-4 mt-5 bg-purple w-[160px] h-[63px] text-white rounded-2xl border border-r-button text-center">Vendors Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react';
import iconL from '../../icons/l.svg';
import iconD from '../../icons/d.svg';
import iconHome from '../../icons/home.svg';
import iconCart from '../../icons/cart.svg';
import iconBag from '../../icons/bag.svg';
import iconPie from '../../icons/pie.svg';
import iconBox from '../../icons/box.svg';
import iconWallet from '../../icons/wallet.svg';
import iconLogout from '../../icons/logout.svg';

const style = {
    wrapper: ` bg-[#ffffff] text-black hidden md:block w-1/3`,
    content: ` flex flex-col justify-center place-items-center p-5 mt-[20px]`,
    navbox2: `min-w-[350px] flex bg-shade-white justify-start text-center place-items-center shadow-stats-box w-2/3 h-fit p-4 mt-[45px] mb-6 pl-[46px] rounded-[30px]`,
    navbox: `min-w-[350px] flex bg-shade-white justify-start text-center place-items-center shadow-stats-box w-2/3 h-fit p-4 mt-1 mb-6 pl-[46px] rounded-[30px]`,
    image: `object-fit`,
    font: `font-bold text-[40px] leading-[48px]`,
}

const Sidebar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.navbox}>
                    <img src={iconL} alt="icon" width={40} height={40}  className='mr-4 mt-[-6px]'/>  
                    <p className='font-poppins text-[32px] leading-[48px] font-bold'>
                        Shoppa Store
                    </p>
                </div>
                <div className={style.navbox}>
                    <img src={iconD} alt="icon" width={40} height={40}  className='mr-4 mt-[-6px]'/> 
                    <p className='font-poppins text-[32px] leading-[48px] font-bold'>
                        My profile
                    </p>
                </div>
                <div className={style.navbox2}>
                    <img src={iconHome} alt="icon" width={40} height={40}  className='mr-4 mt-[-6px]'/> 
                    <p className='font-poppins text-[32px] leading-[48px] font-bold' >
                        Dashboard
                    </p>
                </div>
                <div className={style.navbox}>
                    <img src={iconCart} alt="icon" width={40} height={40}  className='mr-4 mt-[-6px]'/> 
                    <p className='font-poppins text-[32px] leading-[48px] font-bold'>
                        Products
                    </p>
                </div>
                <div className={style.navbox}>
                    <img src={iconBag} alt="icon" width={40} height={40}  className='mr-4 mt-[-6px]'/>    
                    <p className='font-poppins text-[32px] leading-[48px] font-bold' >
                        Orders
                    </p>
                </div>
                <div className={style.navbox}>
                    <img src={iconPie} alt="icon" width={40} height={40}  className='mr-2 mt-[-6px]'/> 
                    <p className='font-poppins text-[32px] leading-[48px] font-bold'>
                        Analystics
                    </p>
                </div>
                <div className={style.navbox}>
                    <img src={iconBox} alt="icon" width={40} height={40}  className='mr-4  mt-[-6px]'/> 
                    <p className='font-poppins text-[32px] leading-[48px] font-bold' >
                        My Store
                    </p>
                </div>
                <div className={style.navbox}>
                    <img src={iconWallet} alt="icon" width={40} height={40}  className='mr-4  mt-[-6px]'/> 
                    <p className='font-poppins text-[32px] leading-[48px] font-bold' >
                        My Wallet
                    </p>
                </div>

                <div className={style.navbox2}>
                    <img src={iconLogout} alt="icon" width={80} height={80}  className='mr-4  mt-[-8px]'/> 
                    <p className='font-poppins text-[32px] leading-[48px] font-bold' >
                        Logout
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
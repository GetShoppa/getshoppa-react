import React from 'react';
import logo from '../images/sidebar-img.svg'

const style = {
    wrapper: ` bg-[#000000] hidden md:block w-1/3 `,
    content: ` flex flex-col justify-center place-items-center p-5 mt-[80px]`,
    image: `object-fit`,
    font: `font-bold text-[40px] leading-[48px] text-white`,
}

const Sidebar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <img src={logo} alt="shoppa logo" />
                <p className={style.font}>Easiest  way to sell <br></br> on social media</p>
            </div>
        </div>
    )
}

export default Sidebar
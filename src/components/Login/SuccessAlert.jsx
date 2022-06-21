import React from 'react';
import logo from '../images/sidebar-img.svg'

const style = {
    wrapper: ` bg-[#000000] hidden md:block w-1/3 `,
    content: ` flex flex-col justify-center place-items-center p-5 mt-[40px]`,
    image: `object-fit`,
    font: `font-bold text-[16px] leading-[22px] md:text-[32px] md:leading-[38px] text-black`,
    button: `w-5/6 md:w-2/3 p-2 bg-purple text-[16px] leading-[22px] md:text-[32px] md:leading-[38px] h-fit text-white rounded-[5px] md:rounded-[15px] text-[24px] font-bold`,
}

const SuccessAlert = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <img src={logo} alt="shoppa logo" />
                <p className={style.font}>You have succesfully added 1 item</p>
                <button type="submit" className={style.button}>Proceed</button>
            </div>
        </div>
    )
}

export default SuccessAlert
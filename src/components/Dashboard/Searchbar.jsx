import React from 'react';
import iconSearch from '../../icons/search-icon.svg';

const style = {
    wrapper: ` bg-[#ffffff] text-black hidden md:block w-1/3 `,
    content: ` flex flex-col justify-center place-items-center w-full `,
    searchbox: `px-8 py-4 text-[24px] leading-[36px] font-poppins font-normal text-off-black rounded-[10px] bg-off-white shadow-search-box mr-2 flex justify-center place-items-center`
}

const Searchbar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.searchbox}>
                    <input type="text" placeholder='Search items'  />
                    <img src={iconSearch} alt="icon" className='max-w:[50%]' />
                </div>
            </div>
        </div>
    )
}

export default Searchbar
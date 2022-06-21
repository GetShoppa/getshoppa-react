import React from 'react';
import iconArrowUp from '../../icons/arrow-up-icon.svg';
import Searchbar from '../../components/Dashboard/Searchbar';

const style = {
    wrapper: `flex flex-col md:flex-row`,
    content: `w-full flex  justify-between h-screen overflow-h-scroll`,
    mainContent: ` w-full `,
    navBox: `flex flex-row w-4/5 mx-auto justify-between mt-[20px] mb-[30px]`,
    textBox: `bg-black p-2 w-full mt-3 mb-8`,
    purpleBox: `flex bg-light-purple p-2 my-3 w-4/5 mx-auto` ,
    task: `bg-white text-[#070C3A] font-bold p-2`,
    statsBox: `my-3 flex bg-[#FFFFFF] opacity-[0.3] shadow-[0px 10px 15px rgba(0, 0, 0, 0.25)] rounded-[30px] mx-auto w-4/5`,
    p1: `font-poppins text-[16px] leading-[22px] font-bold md:text-[40px] text-center font-bold md:leading-[60px]`,
    p2: `font-poppins flex text-[16px] leading-[22px] md:text-[23px] justify-center place-items-center text-center font-semibold md:leading-[33px] p-3 rounded-[15px] shadow-button p-5`
}

const Product = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.mainContent}>
                  <div className={style.navBox}>
                      <p className={style.p1}>Product</p>
                      <p className={style.p2}>Quick Actions 
                      <span>
                            <img src={iconArrowUp} alt="icon" className='max-w:[50%] ml-2 mt-[-3px]' />
                      </span> 
                      </p>
                  </div>
                  <div className={style.textBox}>
                      <p className='font-poppins text-white text-center font-semibold text-[23px] leading-[36px]'>Please verify your email and phone number to activate your store. <span className='font-bold'>Get Verified</span>  </p>
                  </div>
                  <div>
                      <div className='mt-[50px] mb-[40px] flex justify-between w-4/5 mx-auto'>
                          <p className='text-black font-bold text-[36px] leading-[54px] font-poppins '>All Products</p>
                          <div className='flex justify-around'>
                            <Searchbar className='mr-4'/>
                            <p className='bg-purple h-fit p-3 text-white text-[26px] leading-[39px] font-bold font-poppins rounded-[15px]'>Add New Products</p>
                          </div>
                      </div>
                      <div className='flex justify-between bg-off-pink w-4/5 mx-auto py-3 px-6 text-center font-poppins text-semibold text-[24px] leading-[36px]  place-content-between'>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Items</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Price</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Views</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Category</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Action</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Availability</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Product
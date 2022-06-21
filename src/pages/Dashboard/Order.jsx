import React from 'react';
import iconWave from '../../icons/blue-store-visit-icon.svg';
import iconGift from '../../icons/green-current-plan-icon.svg';
import iconVector from '../../icons/store-products-icon.svg';
import iconBag from '../../icons/blue-customer-cart-icon.svg';
import iconFilter from '../../icons/filter-icon.svg';
import iconLines from '../../icons/lines.svg';
import iconArrowUp from '../../icons/arrow-up-icon.svg';
import Searchbar from '../../components/Dashboard/Searchbar';


const style = {
    wrapper: `flex flex-col md:flex-row`,
    content: `w-full flex  justify-between h-screen overflow-h-scroll`,
    mainContent: ` w-full `,
    navBox: `flex flex-row w-4/5 mx-auto justify-between mt-[20px] mb-[30px]`,
    textBox: `bg-black p-2 w-full mt-3 mb-8`,
    statsBox: `my-[60px] flex bg-[#FFFFFF] mx-auto w-full justify-between justify-center shadow-stats-box py-[20px] px-[20px] place-items-center  rounded-[30px] mx-auto w-4/5`,
    p1: `font-poppins text-[16px] leading-[22px] font-bold md:text-[40px] text-center font-bold md:leading-[60px]`,
    p2: `font-poppins flex text-[16px] leading-[22px] md:text-[23px] justify-center place-items-center text-center font-semibold md:leading-[33px] p-3 rounded-[15px] shadow-button p-5`
}

const Order = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.mainContent}>
                  <div className={style.navBox}>
                      <p className={style.p1}>Orders</p>
                      <p className={style.p2}>Quick Actions 
                        <span>
                            <img src={iconArrowUp} alt="icon" className='max-w:[50%] ml-2 mt-[-3px]' />
                        </span> 
                      </p>
                  </div>
                  <div className={style.textBox}>
                      <p className='font-poppins text-white text-center font-semibold text-[23px] leading-[36px]'>Please verify your email and phone number to activate your store. <span className='font-bold'>Get Verified</span>  </p>
                  </div>
                  <div className={style.statsBox}>
                      <div className='flex mx-auto'>
                      <img src={iconBag} alt="icon" width={80} height={80} className='' />
                          <div className='flex flex-col mt-3'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Total Orders</p>
                              <p className='text-[20px] leading-[30px] font-bold'>0</p>
                          </div>
                      </div>
                      <div className='flex mx-auto'>  
                          <img src={iconGift} alt="icon" width={80} height={80} className='' />
                          <div className='flex flex-col mt-3'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Orders Volume</p>
                              <p className='text-[20px] leading-[30px] font-bold'>NGN</p>
                          </div>
                      </div>
                      <div className='flex mx-auto'>
                      <img src={iconWave} alt="icon" width={80} height={80} className='' />
                          <div className='flex flex-col mt-3'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Customers</p>
                              <p className='text-[20px] leading-[30px] font-bold'>0</p>
                          </div>
                      </div>
                      <div className='flex mx-auto '>
                      <img src={iconVector} alt="icon" width={80} height={80} className=' ml-8' />
                          <div className='flex flex-col mt-3'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Fulfilled Orders</p>
                              <p className='text-[20px] leading-[30px] font-bold'>Starter</p>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className='mt-[45px] mb-[30px] flex justify-between w-4/5 mx-auto'>
                          <p className='text-black flex font-semibold text-[26px] leading-[39px] font-poppins '>All Order
                            <span>
                              <img src={iconLines} alt="icon" className='max-w:[50%] ml-4 mt-3' />
                            </span> 
                          </p>
                          <div className='flex justify-around place-content-center '>
                            <Searchbar className='mr-4'/>
                            <p className='bg-white flex  h-fit px-6 py-2 justify-center place-content-center text-[#0065FC] text-[26px] leading-[39px] shadow-search-box font-poppins rounded-[15px]'>Filter  
                            <span>
                               <img src={iconFilter} alt="icon" className='max-w:[50%] ml-2' />
                            </span> 
                            </p>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Order
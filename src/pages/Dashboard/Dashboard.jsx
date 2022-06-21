import React from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import iconWave from '../../icons/store-visit-icon.svg';
import iconGift from '../../icons/current-plan-icon.svg';
import iconVector from '../../icons/store-products-icon.svg';
import iconBag from '../../icons/customer-cart-icon.svg';
import iconCircle from '../../icons/ellipse-icon.svg';
import iconCopy from '../../icons/copy.svg';
import iconArrowUp from '../../icons/arrow-up-icon.svg';

const style = {
    wrapper: `flex flex-col md:flex-row `,
    sidebar: `w-1/4 hidden md:block`,
    content: `w-full md:w-3/4  flex justify-between h-screen `,
    mainContent: ` w-full overflow-y-scroll `,
    navBox: `flex flex-row w-5/6 mx-auto justify-between mt-[20px] mb-[30px]`,
    textBox: `bg-black p-2 w-full mt-3 mb-5`,
    purpleBox: `flex justify-between text-left place-items-center px-4 py-2 bg-off-pink p-2 my-5 w-full mx-auto` ,
    task: `bg-white text-[#070C3A] font-bold px-4 py-1 justify-center place-items-center text-[24px] leading-[36px] rounded-[10px] shadow-search-box`,
    statsBox: `my-[60px] flex bg-[#FFFFFF] justify-between justify-center shadow-stats-box py-[20px] px-[20px] place-items-center rounded-[30px] w-5/6 mx-auto`,
    p1: `font-poppins text-[16px] leading-[22px] md:text-[23px] text-center font-bold md:leading-[33px]`,
    p2: `font-poppins flex text-[16px] leading-[22px] md:text-[23px] justify-center place-items-center text-center font-semibold md:leading-[33px] p-3 rounded-[15px] shadow-button p-5`
}

const Dashboard = () => {
    return (
        <div className={style.wrapper}>
            <Sidebar className={style.sidebar} />
            <div className={style.content}>
                <div className={style.mainContent}>
                  <div className={style.navBox}>
                      <p className={style.p1}>Dashboard</p>
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
                          <img src={iconVector} alt="icon" width={80} height={80} className='' />
                          <div className='flex flex-col mt-2'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Store visits</p>
                              <p className='text-[20px] leading-[30px] font-bold'>0</p>
                          </div>
                      </div>
                      <div className='flex mx-auto'>  
                          <img src={iconWave} alt="icon" width={80} height={80} className='' />
                          <div className='flex flex-col mt-2'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Store products</p>
                              <p className='text-[20px] leading-[30px] font-bold'>0</p>
                          </div>
                      </div>
                      <div className='flex mx-auto'>
                          <img src={iconBag} alt="icon" width={80} height={80} className='' />
                          <div className='flex flex-col mt-2'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Customer carts</p>
                              <p className='text-[20px] leading-[30px] font-bold'>0</p>
                          </div>
                      </div>
                      <div className='flex mx-auto'>
                          <img src={iconGift} alt="icon" width={80} height={80} className='' />
                          <div className='flex flex-col mt-2'>
                              <p className='text-[20px] leading-[30px] font-poppins text-black'>Current plans</p>
                              <p className='text-[20px] leading-[30px] font-bold'>Starter</p>
                          </div>
                      </div>
                  </div>
                  <div className='w-5/6 mx-auto mt-2 mb-4'>
                      <h3 className='font-bold font-poppins mb-[10px] text-[32px] leading-[48px]'>Get Started</h3>
                      <p className='font-poppins text-[20px] leading-[30px] '>Click on the <span className='font-bold'>done</span> button when you finish a task</p>
                  </div>
                  <div className='w-5/6 mx-auto'>
                      <div className={style.purpleBox}>
                          <img src={iconCircle} alt="icon" className='' width={30} height={30} />
                          <p className='text-[24px] leading-[36px] font-poppins  text-black'>Add Shoppa to your phone</p>
                          <p className={style.task}>Done</p>
                      </div>
                      <div className={style.purpleBox}>
                          <img src={iconCircle} alt="icon" className='' width={30} height={30} />
                          <p className='text-[24px] leading-[36px] font-poppins  text-black'>Join the community on WhatsApp</p>
                          <p className={style.task}>Done</p>
                      </div>
                      <div className={style.purpleBox}>
                          <img src={iconCircle} alt="icon" className='' width={30} height={30} />
                          <p  className='text-[24px] leading-[36px] font-poppins  text-black'>Verify email and phone number</p>
                          <p className={style.task}>Get Verified</p>
                      </div>
                      <div className={style.purpleBox}>
                          <img src={iconCircle} alt="icon" className='' width={30} height={30} />
                          <p className='text-[24px] leading-[36px] font-poppins  text-black'>Add store link to social handles</p>
                          <div className='text-[#070C3A] flex'>
                              <img src={iconCopy} alt="icon" width={30} height={30}  className='mr-2 mt-[-8px]'/>
                              <p>Copy store link</p>
                          </div>
                          <p className={style.task}>Done</p>
                      </div>
                      <div className={style.purpleBox}>
                          <img src={iconCircle} alt="icon" className='' width={30} height={30} />
                          <p className='text-[24px] leading-[36px] font-poppins text-black'>Upload remaining products</p>
                          <div className='text-[#070C3A]'>
                              <p >+ Add Product</p>
                          </div>
                          <p className={style.task}>Done</p>
                      </div>
                  </div>
                  <div>
                      <div className='mt-[50px] mb-6 flex w-5/6 mx-auto justify-between'>
                          <p className='text-black font-bold text-[32px] leading-[48px] font-poppins '>Most viewed products</p>
                          <p className='bg-purple h-fit p-3 text-white text-[26px] leading-[39px] font-poppins rounded-[15px]'>see all products</p>
                      </div>
                      <div className='flex bg-off-pink w-5/6 mx-auto py-3 px-4 text-center  place-content-between'>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Items</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Price</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Views</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Category</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Action</p>
                          <p className='text-[24px] leading-[36px] font-poppins font-semibold'>Availability</p>
                      </div>
                      <div className='flex bg-off-pink w-5/6 mx-auto mt-2 mb-8 py-3 px-4 text-center  place-content-between'>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
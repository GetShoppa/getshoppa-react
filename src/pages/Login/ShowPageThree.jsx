import React from 'react';

const style = {
    wrapper: `flex flex-col md:flex-row`,
    content: `w-full flex  justify-between h-screen overflow-h-scroll`,
    mainContent: ` w-full `,
    logoBox: `flex flex-row w-[200px] mx-auto mt-[120px] justify-between py-[100px] bg-grey`,
    navBox: `flex flex-row w-full mx-auto  my-0 justify-between py-[100px] bg-grey`,
    textBox: `my-6 p-2 w-full mb-8`,
    button: `w-full mr-2 p-2 bg-purple text-white  rounded-[5px] md:rounded-[15px] text-[24px] font-bold`,
    statsBox: `my-[60px] flex bg-[#FFFFFF] mx-auto w-full justify-between justify-center shadow-stats-box py-[20px] px-[20px] place-items-center  rounded-[30px] mx-auto w-4/5`,
    p1: `font-poppins text-[16px] leading-[22px] font-bold md:text-[40px] text-center font-bold md:leading-[60px]`,
    p2: `font-poppins flex text-[16px] leading-[22px] md:text-[23px] justify-center place-items-center text-center font-semibold md:leading-[33px] p-3 rounded-[15px] shadow-button p-5`
}

const ShowPageThree = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.mainContent}>
                  <div className={style.navBox}>
                      
                  </div>
                  <div className={style.textBox}>
                      <p className='font-poppins text-black text-center font-semibold text-[24px] leading-[29px]'>How to upload Products on Shoppa</p>
                  </div>
                  <div className={style.logoBox}>

                  </div>
                  <p className='font-open-sans mt-8 w-2/3 mx-auto text-black text-center font-semibold text-[24px] leading-[32px]'>Fill in the details of each of the products you selected, you can also add more images here. Then click on “Next Item”</p>
                  <div className='w-2/3 mx-auto my-[30px] flex justify-center'>
                     <button type="submit" className={style.button}>Previous</button>
                     <button type="submit" className={style.button}>Next</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ShowPageThree
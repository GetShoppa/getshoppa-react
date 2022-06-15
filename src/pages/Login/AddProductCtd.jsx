import React from 'react';
import AddProduct from '../../components/Login/AddProduct.jsx';
import Sidebar from '../../components/Sidebar';

const style = {
    wrapper: `flex flex-col md:flex-row`,
    sidebar: `w-1/3 hidden md:block`,
    content: `w-full md:w-2/3 flex justify-between h-screen`,
    mainContent: ` w-full overflow-y-scroll`,
    textBox: `flex flex-col mt-[40px] justify-center place-items-center`,
    p1: `font-open-sans text-[16px] leading-[22px] md:text-[23px] text-center md:leading-[33px] my-3`,
    p2: `font-bold mt-[10px] text-[24px] leading-[29px] md:text-[30px] md:leading-[45px]`,
    p3: `font-open-sans text-[16px]  leading-[22px] md:text-[23px] text-left md:leading-[33px]`,
    p4: `font-bold mt-[10px] text-[16px] text-purple leading-[22px] md:text-[32px] md:leading-[38px]`,
    p5: `font-open-sans text-[24px] leading-[29px] md:text-[32px] md:leading-[38px] font-bold text-left`,
    button: `w-4/5 md:w-2/3 mx-auto flex justify-center place-items-center text-center mt-[40px] mb-3 p-2 bg-purple text-white rounded-[5px] md:rounded-[15px] text-[16px] md:text-[24px] font-bold`,
    box: `border border-[1px rgba(0, 0, 0, 0.5)] border-dashed bg-white mx-auto w-2/5 text-center py-6 px-2 mt-[30px] mb-[40px]`
}

const AddProductCtd = () => {
    return (
        <div className={style.wrapper}>
            <Sidebar className={style.sidebar} />
            
            <div className={style.content}>
                
                <div className={style.mainContent}>
                <div className='ml-8 mt-7 flex justify-center place-items-center'>
                   <p className={style.p5}><span>===</span>Add Products</p>
                </div>
                  <div className={style.textBox}>
                      <h3 className={style.p2}>Add details - Product 1</h3>
                  </div>
                  <div className='flex space-between justify-center place-items-center w-4/5 mx-auto text-[#FF0202]'>
                      <p className='text-center'>Remove item Tb</p>
                  </div>
                  <div className={style.box}>
                      <p>+</p>
                  </div>
                  <AddProduct />
                  <div className='flex justify-center place-items-center'>
                      <p className='text-16px leading-[22px] md:text-24px md:leading-[36px] text-[rgba(0, 0, 0, 0.5)] my-2'>Click on any image to change thumbnail</p>
                  </div>
                  <button type="submit" className={style.button}>Proceed</button>
                </div>
            </div>

        </div>
    )
}

export default AddProductCtd
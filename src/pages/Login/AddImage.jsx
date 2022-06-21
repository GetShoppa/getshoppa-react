import React from 'react';
// import CreateStoreForm from '../../components/Login/CreateStoreForm';
import Sidebar from '../../components/Sidebar';
// import miniLogo from '../../images/shoppa-without-tag.png';
// import AiOutlineArrowRight from 'react-icons/ai'

const style = {
    wrapper: `flex flex-col md:flex-row`,
    sidebar: `w-1/3 hidden md:block`,
    content: `w-full md:w-2/3 flex justify-between h-screen`,
    mainContent: ` w-full overflow-y-scroll`,
    textBox: `flex flex-col mt-[40px] justify-center place-items-center`,
    p1: `font-open-sans text-[16px] leading-[22px] md:text-[23px] text-center md:leading-[33px] my-3`,
    p2: `font-bold mt-[10px] text-[24px] leading-[29px] md:text-[32px] md:leading-[38px]`,
    p3: `font-open-sans text-[16px]  leading-[22px] md:text-[23px] text-left md:leading-[33px]`,
    p4: `font-bold mt-[10px] text-[16px] text-purple leading-[22px] md:text-[32px] md:leading-[38px]`,
    p5: `font-open-sans text-[24px] leading-[29px] md:text-[32px] md:leading-[38px] font-bold text-left`,
    button: `w-4/5 md:w-2/3 mx-auto flex justify-center place-items-center text-center mt-[40px] mb-3 p-2 bg-purple text-white rounded-[5px] md:rounded-[15px] text-[16px] md:text-[24px] font-bold`,
    box: `border border-[1px rgba(0, 0, 0, 0.5)] border-dashed bg-white mx-auto w-2/5 text-center py-8 px-5 mt-[50px] mb-[40px]`
}

const AddImage = () => {
    return (
        <div className={style.wrapper}>
            <Sidebar className={style.sidebar} />
            
            <div className={style.content}>
                
                <div className={style.mainContent}>
                <div className='ml-8 mt-7 flex justify-center place-items-center'>
                   <p className={style.p5}><span>===</span>Add Products</p>
                </div>
                  <div className={style.textBox}>
                      <h3 className={style.p1}>Add images for multiple products</h3>
                  </div>
                  <div className='flex space-between w-4/5 mx-auto'>
                      <p className='bg-[#FF0202] text-white text-center rounded-[5px] md:rounded-[15px] mx-2 h-fit p-2'>Important</p>
                      <p>Pick one image for every product you want to add (max:10), You can add more images later.</p>
                  </div>
                  <div className={style.box}>
                      <p>+</p>
                  </div>
                  <button type="submit" className={style.button}>Proceed</button>
                </div>
            </div>

        </div>
    )
}

export default AddImage
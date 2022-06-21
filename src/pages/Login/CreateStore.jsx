import React from 'react';
import CreateStoreForm from '../../components/Login/CreateStoreForm';
import Sidebar from '../../components/Sidebar';
import miniLogo from '../../images/shoppa-without-tag.png'

const style = {
    wrapper: `flex flex-col md:flex-row`,
    sidebar: `w-1/3 hidden md:block`,
    content: `w-full md:w-2/3 flex justify-between h-screen`,
    mainContent: ` w-full overflow-y-scroll`,
    textBox: `flex flex-col mt-[40px] justify-center place-items-center`,
    p1: `font-open-sans text-[16px] leading-[22px] md:text-[23px] text-center md:leading-[33px]`,
    p2: `font-bold mt-[10px] text-[24px] leading-[29px] md:text-[32px] md:leading-[38px]`
}

const SignUp = () => {
    return (
        <div className={style.wrapper}>
            <Sidebar className={style.sidebar} />
            <img src={miniLogo} alt="shoppa logo" width={300}  className="block md:hidden mt-[20px] mx-auto"/>
            <div className={style.content}>
                <div className={style.mainContent}>
                  <div className={style.textBox}>
                      <p className={style.p1}>Welcome vendor’s name,</p>
                      <h3 className={style.p2}>Create your first store</h3>
                  </div>
                  <CreateStoreForm />
                </div>
            </div>

        </div>
    )
}

export default SignUp
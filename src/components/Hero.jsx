import React from "react";
import heroImg from '../images/hero-sm.svg'

const Hero = () => {
    return (
        <div className="text-black bg-white h-full bg-center bg-cover w-full" >
            <div className="font-poppins h-full mx-auto w-full p-6 md:p-12 flex flex-row">
                <div className=" w-1/2">
                    <h1 className="text-[24px] md:text-[70px] mt-[5px] md:mt-[20px] text-left font-bold leading-[29px] md:leading-[105px] ">Say <span className="text-purple">Yes</span> To The Easiest Way To Sell On Social Media</h1> 
                    <h3 className="text-[16px] md:text-2xl my-3 font-semibold leading-[22px] md:leading-10">Receive and manage orders from your customers, Receive payments and grow your business with Shoppa.</h3>
                    <button className="p-[8px] mt-2 w-[126x] text-[16px] leading-[22px] flex justify-center items-center text-center mb-[0px] border-purple bg-purple md:w-[287px] h-[38px] text-white rounded-[5px] border border-r-button">Get started</button>
                </div>  
                <div className="w-1/2 ">
                    <img src={heroImg} className='h-full mt-2 w-full bg-center bg-contain' alt="Hero"/>
                    <p></p>
                </div> 
            </div>
        </div>
    )
}

export default Hero
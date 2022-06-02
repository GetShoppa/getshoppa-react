import React from "react";

const Hero = () => {
    return (
        <div className="text-white bg-off-grey bg-hero h-full bg-center bg-cover w-full" >
            <div className="font-poppins h-full mx-auto w-full p-6 md:p-12">
                <div className="max-w-[600px] w-full">
                    <h1 className="text-[40px] md:text-[70px] mt-[5px] md:mt-[20px] text-left font-bold leading-[60px] md:leading-[105px] ">Say <span className="text-purple">Yes</span> To The Easiest Way To Sell On Social Media</h1> 
                    <h3 className="text-xl md:text-2xl my-3 font-semibold leading-8 md:leading-10">Receive and manage orders from your customers, Receive payments and grow your business with Shoppa.</h3>
                    <button className="p-4 mt-2 w-[200px]  mb-[0px] border-purple bg-purple md:w-[287px] h-[63px] text-white rounded-2xl border border-r-button text-center">Get started</button>
                </div>   
            </div>
        </div>
    )
}

export default Hero
import React from "react";
import appScreen from '../images/app-screen.svg'

const Info = () => {
    return (
        <div className="font-open-poppins  mx-auto w-full pt-[5px] text-white md:pt-[46px] bg-[#2F2E2E] p-6">
            <div className=" md:p-12 text-center md:text-left">
                <div className=" md:p-8 text-center mr-0 ml-0 w-full  md:text-right">
                    <div></div>
                    <div className="container-left-text">
                        <h1 className="col-span-2 font-poppins mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] md:text-[32px] my-5 font-bold">Issue invoice and collect payment without arguments or back n forth</h1>
                        <p className="col-span-2 font-poppins text-[16px] leading-[22px] md:text-[18px] md:leading-[35px] mt-1 mb-10">With Shoppa, you can offer your customers flexible payment options such as bank transfer, card payment or ussd. You can also receive crypto payments in stablecoins.</p>
                    </div>
                 </div>
                <div className="container-right-text">
                <h1 className="font-poppins mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] text-center md:text-left md:text-[35px] my-5 font-bold">What More?</h1>
                <p className="font-poppins text-[16px] leading-[22px] md:text-[17px] md:leading-[48px] mt-1 mb-10">Our mission is simple; empower you to build a profitable and sustainable business online</p>
                </div>
                <div className="w-full mt-5">
                    <div className="text-white my-3 text-left  flex flex-row p-4 ">
                        <p className="font-poppins  text-[16px] leading-[22px] md:text-[17px] md:leading-[48px]"><span className="font-bold text-[18px] md:text-[22px]">Crypto wallet</span>, so you can collect crypto payments from your customers</p>
                    </div>
                    <div className="text-white my-3 text-left  flex flex-row p-4 ">
                        <p className="font-poppins text-[16px] leading-[22px] md:text-[17px] md:leading-[48px]"><span className="font-bold text-[18px] md:text-[22px]">Escrow</span>, to enable you securely collect payment from customers before delivery to prevent arguments</p>
                    </div>
                    <div className="text-white my-3 text-left  flex flex-row p-4 ">
                        <p className="font-poppins text-[16px] leading-[22px] md:text-[17px] md:leading-[48px]"><span className="font-bold text-[18px] md:text-[22px]">Credit</span>, we want to support you with funds to finance inventory & scale your business</p>
                    </div>
                    <div className="text-white my-3 text-left  flex flex-row p-4 ">
                        <p className="font-poppins text-[16px] leading-[22px] md:text-[17px] md:leading-[48px]"><span className="font-bold text-[18px] md:text-[22px]">Virtual Account Number</span>, get an account number that carries your business name</p>
                    </div>
                </div>
                <div class="container-create-store">
                <div className="flex flex-col md:flex-row flex-1">
                    <div className="">
                         <img src={appScreen} className='mt-10 hidden md:block' height={560} width={700} alt='app screen'  />
                    </div>
                    <div className="mt-10 ml-10 text-left">
                        <div className="mb-[40px] mt-0">
                            <h1 className="font-normal md:text-[16px] md:leading-[22px] md:text-[32px] md:leading-[44px]">01</h1>
                            <p className="font-bold text-[16px] leading-[19px]  md:text-[32px] md:leading-[38px] ">Create a store</p>
                            <p className="font-semibold text-[10px] leading-[14px] md:text-[16px] md:leading-[22px]">Create store with store name, country based and whatsapp number</p>
                        </div>
                        <div className="my-[40px] ">
                            <h1 className="font-normal md:text-[16px] md:leading-[22px] md:text-[32px] md:leading-[44px]">02</h1>
                            <p className="font-bold text-[16px] leading-[19px]  md:text-[32px] md:leading-[38px] ">Add Products</p>
                            <p className="text-[10px] leading-[14px] md:text-[16px] md:leading-[22px]">You can add more than product to your shoppa account</p>
                        </div>
                        <div className="my-[40px]">
                            <h1 className="font-normal md:text-[16px] md:leading-[22px] md:text-[32px] md:leading-[44px]">03</h1>
                            <p className="font-bold text-[16px] leading-[19px]  md:text-[32px] md:leading-[38px] ">Choose Plan</p>
                            <p className="text-[10px] leading-[14px] md:text-[16px] md:leading-[22px]">Choose plan fron the plan guide thst suits your demands</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Info
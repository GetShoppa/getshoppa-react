import React from "react";
import { BsFillCircleFill } from 'react-icons/bs'
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/whatsapp.svg';
import image4 from '../images/image3.svg';
import logo from '../images/shoppa-black.svg';
import image5 from '../images/image4.svg'

const MainContent = () => {
    return (
        <div className="font-poppins  mx-auto w-full pt-[35px] md:pt-[4 6px] bg-off-grey p-6">
            <div className="max-w-400px md:max-w-[900px] md:p-12">
                <h1 className="mb-10 md:mt-[40px] mt-[40px] text-[35px] md:text-[45px] my-5 font-bold">Shoppa is built for the underdogs, here is your chance</h1>
                <img src={image1} height={443} width={445} alt='person 1' />
                <button className="p-4 mt-10 mb-[20px] border-purple bg-purple w-[200px] md:w-[287px] h-[63px] text-white rounded-2xl border border-r-button text-center">Join the waitlist</button>
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8">
               <h1 className="mb-10 md:mt-[40px] mt-[40px] text-[35px] md:text-[45px] my-5 font-bold">Sell everywhere and anywhere!</h1>
               <p className="text-[24px] md:text-[32px] leading-[38px] md:leading-[48px] mt-5 mb-10">Share your list link on whatsapp, instagram, facebook, twitter, tiktok easily</p>
               <img src={image2} height={443} width={445} alt='person 2' />
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8">
               <h1 className="mb-10 md:mt-[40px] mt-[40px] text-[35px] md:text-[45px] my-5 font-bold">Receive all orders right into your whatsapp</h1>
               <p className="text-[24px] md:text-[32px] leading-[38px] md:leading-[48px] mt-5 mb-10">Get your order and delivery details as one message on whatsapp, with just a hit of a button, your customers can reach out to you</p>
               <img src={image3} height={443} width={445} alt='person 3' />
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8">
               <h1 className="mb-10 md:mt-[40px] mt-[40px] text-[35px] md:text-[45px] my-5 font-bold">Keep track of all orders, customers and payment from one dashboard</h1>
               <p className="text-[24px] md:text-[32px] leading-[38px] md:leading-[48px] mt-5 mb-10">Stay organised and build a healthy business with our confirmed order auto-update, records of customers that have bought from you and analytics of how well you are doing as a business</p>
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8">
               <h1 className="mb-10 md:mt-[40px] mt-[40px] text-[35px] md:text-[45px] my-5 font-bold">Issue invoice and collect payment without arguments or back n forth</h1>
               <p className="text-[24px] md:text-[32px] leading-[38px] md:leading-[48px] mt-5 mb-10">With Shoppa, you can offer your customers flexible payment options such as bank transfer, card payment or ussd. You can also receive crypto payments in stablecoins.</p>
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8">
               <img src={image4} height={443} width={445} alt='person 4' />
               <h1 className="mb-10 md:mt-[40px] mt-[40px] text-[35px] md:text-[45px] my-5 font-bold">What More?</h1>
               <p className="text-[24px] md:text-[32px] leading-[38px] md:leading-[48px] mt-5 mb-10">Our mission is simple; empower you to build a profitable and sustainable business online</p>
            </div>
            <div className="w-full mt-5">
                <div className="bg-black text-white my-4 flex flex-row p-10 border rounded-xl">
                    <BsFillCircleFill className="text-white mr-6 mt-3"/>
                    <p className="text-[32px] leading-[48px]">Crypto wallet, so you can collect crypto payments from your customers</p>
                </div>
                <div className="bg-black text-white my-4 flex flex-row p-10 border rounded-xl">
                    <BsFillCircleFill className="text-white mr-6 mt-3"/>
                    <p className="text-[32px] leading-[48px]">Escrow, to enable you securely collect payment from customers before delivery to prevent arguments</p>
                </div>
                <div className="bg-black text-white my-4 flex flex-row p-10 border rounded-xl">
                    <BsFillCircleFill className="text-white mr-6 mt-3"/>
                    <p className="text-[32px] leading-[48px]">Credit, we want to support you with funds to finance inventory & scale your business</p>
                </div>
                <div className="bg-black text-white my-4 flex flex-row p-10 border rounded-xl">
                    <BsFillCircleFill className="text-white mr-6 mt-3"/>
                    <p className="text-[32px] leading-[48px]">Virtual Account Number, get an account number that carries your business name</p>
                </div>
            </div>
            {/* <section id="form"> */}
                <div className=" max-w-[1200px] p-2">
                <h1 className="mb-10 md:mt-[40px] mt-[40px] text-center text-[35px] md:text-[45px] my-5 font-bold">Join Other Rebels To Sell On Shoppa!</h1>
                    <div className=" p-1">
                        <div className="flex flex-col md:flex-row md:flex  justify-between items-center ">
                            <div className="bg-light-purple rounded-[23px]  py-4 w-full h-full flex flex-col align-middle">
                                <img className="mx-auto p-[20px]" src={logo} height={738} width={389} alt='logo'  />
                                <div className="flex flex-col text-center">
                                    <input className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Name"/>
                                    <input className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Business Name"/>
                                    <input className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Email"/>
                                    <input className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Phone Number"/>
                                    <button  className="p-4 mt-10 mb-[20px] mx-auto border-purple bg-purple w-[200px] md:w-[287px] h-[63px] text-white rounded-2xl border border-r-button text-center">Join Our Waitlist</button>
                                </div>
                            </div>
                            <img src={image5} className='mt-10' height={738} width={389} alt='logo'  />
                        </div>
                    </div>
                </div>
            {/* </section> */}
        </div>
    )
}

export default MainContent
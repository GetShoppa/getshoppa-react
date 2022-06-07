import React from "react";
import newMoonIcon from '../images/new-moon.svg';
import image1 from '../images/img1.svg';
import image2 from '../images/img02.svg';
import image3 from '../images/img03.svg';
import image4 from '../images/img04.svg';

const MainContent = () => {
    return (
        <div className="font-open-poppins  mx-auto w-full pt-[5px] md:pt-[46px] bg-white md:bg-white p-6">
            <div className="max-w-400px md:max-w-[900px] md:p-12 text-center md:text-left">
                <h4 className="font-poppins  mb-10 text-center md:text-left md:mt-[20px] mt-[20px] text-[10px] leading-[10px] md:leading-[30px] md:text-[25px] my-5 font-bold">Shoppa is built for the underdogs, here is your chance.</h4>
                <img src={image1} alt='person 1' />
                <button className="mx-auto md:mx-0 mt-10 mb-30px] border-purple bg-purple w-[150px] h-[15px] flex justify-center items-center md:w-[150px] md:h-[50px] text-white rounded-[12px] border border-r-button text-center my-5 font-bold">Join the waitlist</button>
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8 text-center md:text-left">
               <h1 className="font-poppins  mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 font-bold">Sell everywhere and anywhere!</h1>
               <p className="font-poppins text-[12px] leading-[22px] md:text-[25px] md:leading-[48px] mt-1 mb-10">Share your list link on whatsapp, instagram, facebook, twitter, tiktok easily</p>
               <img src={image2} alt='person 2' />
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8 text-center md:text-left">
               <h1 className="font-poppins  mb-2 md:mt-[40px] mt-[35px] text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 font-bold">Receive all orders right into your whatsapp</h1>
               <p className="font-poppins text-[12px] leading-[22px] md:text-[15px] md:leading-[48px] mt-1 mb-10">Get your order and delivery details as one message on whatsapp, with just a hit of a button, your customers can reach out to you</p>
               <img src={image3} alt='person 3' />
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8 text-center md:text-left">
               <h1 className="font-poppins mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 font-bold">Keep track of all orders, customers and payment from one dashboard</h1>
               <p className="font-poppins text-[16px] leading-[22px] md:text-[15px] md:leading-[48px] mt-1 mb-10">Stay organized and build a healthy business with our confirmed order auto-update, records of customers that have bought from you and analytics of how well you are doing as a business</p>
               <img src={image4} alt='dashboard'/>
            </div>

            <section id="info" >
            <div className="max-w-400px md:max-w-[900px] md:p-8 text-center md:text-left">
               <h1 className="font-poppins mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 font-bold">Issue invoice and collect payment without arguments or back n forth</h1>
               <p className="font-poppins text-[16px] leading-[22px] md:text-[32px] md:leading-[48px] mt-1 mb-10">With Shoppa, you can offer your customers flexible payment options such as bank transfer, card payment or ussd. You can also receive crypto payments in stablecoins.</p>
            </div>
            <div className="max-w-400px md:max-w-[900px] md:p-8">
               <h1 className="font-gotham mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] text-center md:text-left md:text-[45px] my-5 font-bold">What More?</h1>
               <p className="font-open-sans text-[16px] leading-[22px] md:text-[32px] md:leading-[48px] mt-1 mb-10">Our mission is simple; empower you to build a profitable and sustainable business online</p>
            </div>
            <div className="w-full mt-5">
                <div className="text-black md:bg-white bg-[#F1E6F2] my-3 flex flex-row p-4 border rounded-xl">
                    <img src={newMoonIcon} width={18} height={6} className="text-white mr-3" alt='icon'/>
                    <p className="font-open-sans text-[16px] leading-[22px] md:text-[32px] md:leading-[48px]">Crypto wallet, so you can collect crypto payments from your customers</p>
                </div>
                <div className="text-black md:bg-white bg-[#F1E6F2] my-3 flex flex-row p-4 border rounded-xl">
                    <img src={newMoonIcon} width={18} height={6} className="text-white mr-3" alt='icon'/>
                    <p className="font-open-sans text-[16px] leading-[22px] md:text-[32px] md:leading-[48px]">Escrow, to enable you securely collect payment from customers before delivery to prevent arguments</p>
                </div>
                <div className="text-black md:bg-white bg-[#F1E6F2] my-3 flex flex-row p-4 border rounded-xl">
                    <img src={newMoonIcon} width={18} height={6} className="text-white mr-3" alt='icon'/>
                    <p className="font-open-sans text-[16px] leading-[22px] md:text-[32px] md:leading-[48px]">Credit, we want to support you with funds to finance inventory & scale your business</p>
                </div>
                <div className="text-black md:bg-white bg-[#F1E6F2] my-3 flex flex-row p-4 border rounded-xl">
                    <img src={newMoonIcon} width={18} height={6} className="text-white mr-3" alt='icon'/>
                    <p className="font-open-sans text-[16px] leading-[22px] md:text-[32px] md:leading-[48px]">Virtual Account Number, get an account number that carries your business name</p>
                </div>
            </div>

            </section>

        </div>
    )
}

export default MainContent
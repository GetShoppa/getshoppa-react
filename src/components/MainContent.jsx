import React from "react";
import image1 from '../images/img1.svg';
import image2 from '../images/img02.svg';
import image3 from '../images/img03.svg';
import image4 from '../images/img04.svg';

const MainContent = () => {
    return (
        <div class="text-padding" className="font-open-poppins  mx-auto w-full pt-[5px] md:pt-[46px] bg-white md:bg-white p-6">
            <div className="max-w-400px md:max-w-[900px] md:p-12 text-center md:text-left">
                <h4 className="font-poppins  mb-10 text-center md:text-left md:mt-[20px] mt-[20px] text-[10px] leading-[10px] md:leading-[30px] md:text-[25px] my-5 font-bold">Shoppa is built for the underdogs, here is your chance.</h4>
                <div className="container mx-auto md:w-[630px] sm:w-[500px] xl:w-[1200px] w-full ">
                <img src={image1} alt='image 1' className="object-cover w-full h-fit object-center"/>
                </div>
                <button className="mx-auto md:mx-0 mt-10 mb-30px] border-purple bg-purple w-[150px] h-[15px] flex justify-center items-center md:w-[180px] md:h-[50px] text-white rounded-[12px] border border-r-button text-center my-5 font-bold">Join the waitlist</button>

            </div>
            <div class="text-padding" className="max-w-400px md:max-w-[900px] md:p-8 text-center md:text-left">
               <h1 className="font-poppins  mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 font-bold">Sell everywhere and anywhere!</h1>
               <p className="font-poppins text-[12px] leading-[22px] md:text-[25px] md:leading-[48px] mt-1 mb-10">Share your list link on whatsapp, instagram, facebook, twitter, tiktok easily</p>
               <div className="container mx-auto md:w-[630px] sm:w-[500px] xl:w-[1200px] w-full ">
                <img src={image2} alt='image 2' className="object-cover w-full h-fit object-center"/>
                </div>
            </div>
            <div class="text-padding" className="max-w-400px md:max-w-[900px] md:p-8 text-center md:text-left">
               <h1 className="font-poppins  mb-2 md:mt-[40px] mt-[35px] text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 font-bold">Receive all orders right into your whatsapp</h1>
               <p className="font-poppins text-[12px] leading-[22px] md:text-[25px] md:leading-[48px] mt-1 mb-10">Get your order and delivery details as one message on whatsapp, with just a hit of a button, your customers can reach out to you</p>
               <div className="container mx-auto md:w-[630px] sm:w-[500px] xl:w-[1200px] w-full ">
                <img src={image3} alt='image 3' className="object-cover w-full h-fit object-center"/>
                </div>
            </div>
            <div class="text-padding" className="max-w-400px md:max-w-[900px] md:p-8 text-center md:text-left">
               <h1 className="font-poppins mb-2 md:mt-[40px] mt-[40px] text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 font-bold">Keep track of all orders, customers and payment from one dashboard</h1>
               <p className="font-poppins text-[12px] leading-[22px] md:text-[25px] md:leading-[48px] mt-1 mb-10">Stay organized and build a healthy business with our confirmed order auto-update, records of customers that have bought from you and analytics of how well you are doing as a business</p>
               <div className="container mx-auto md:w-[630px] sm:w-[500px] xl:w-[1200px] w-full ">
                <img src={image4} alt='image 4' className="object-cover w-full h-fit object-center"/>
                </div>
            </div>
        </div>
    )
}

export default MainContent
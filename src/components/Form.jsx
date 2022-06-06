import React from 'react';
import { useState } from "react";
import logo from '../images/shoppa-black.svg';
import image5 from '../images/image4.svg';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
 





const Form = () => {
    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            business_name: businessName,
            email: email,
            phone_no: mobileNumber,
        })
    };

    await fetch('https://www.ourapi.digital/api/v1/waitlist', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (response.status === 'success') {
                setMessage(response.message + ' successfully!');
                toast.success('Added to waitlist successfully!')
                setName("");
                setBusinessName("");
                setEmail("");
                setMobileNumber("");
            } else if (response.status === 'fail')  {
                const error = (data && data.message) || response.status;
                console.error('There was an error!', response.message);
                toast.error('There was an error!' + response.message)
                return Promise.reject(error);
            } 

            

        })
        .catch(error => {
            console.error('There was an error!', error);
            setMessage(error);
            toast.error('There was an error!' + error)
        });
    };
  
    return (
        <div className='font-open-sans  mx-auto w-full pt-[5px] md:pt-[46px] bg-white md:bg-off-grey p-6'>
        
            <div className=" max-w-[1200px] p-2">
                <h1 className="mb-3 md:mt-[40px] mt-[40px] text-center text-[16px] leading-[19px] md:leading-[50px] md:text-[45px] my-5 md:my-8 font-bold">Join Other Rebels To Sell On Shoppa!</h1>
                    <div className=" p-1">
                        <div className="flex flex-col md:flex-row md:flex  justify-between items-center ">
                            <div className="bg-light-purple rounded-[23px]  py-4 w-full h-full flex flex-col align-middle">
                                <img className="mx-auto p-[20px]" src={logo} height={738} width={389} alt='logo'  />
                                <form onSubmit={handleSubmit} className="flex flex-col text-center">
                                    <input required value={name} onChange={(e) => setName(e.target.value)} className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Name"/>
                                    <input required value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Business Name"/>
                                    <input required value={email} onChange={(e) => setEmail(e.target.value)}className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Email"/>
                                    <input required value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}className="my-4 m-6 p-5 rounded-lg" type="text" placeholder="Phone Number"/>
                                    <div className="message text-purple mt-3">{message ? <p>{message}</p> : null}</div>
                                    <button type="submit" className="text-[16px] leading-[22px] p-4 mt-10 mb-[20px] mx-auto border-purple bg-purple w-[214px] md:w-[287px] h-[54px] md:h-[63px] text-white rounded-[5px] border border-r-button text-center">Join Our Waitlist</button>
                                </form>
                            </div>
                            <img src={image5} className='mt-10 ' height={738} width={389} alt='logo'  />
                        </div>
                    </div>
            </div>
       </div>
    )
}

export default Form
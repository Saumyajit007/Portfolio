import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiGithubFill, RiMailLine, RiLinkedinLine, RiDownloadLine } from "@remixicon/react";
import { Link } from 'react-router-dom';

function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lkxyfy9', 'template_1ojewr3', form.current, {
                publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='pt-16 sm:pt-20 min-w-[100vw]'>
            <h1 className='text-5xl font-semibold text-center'>Contact Me</h1>
            <div className='flex flex-col items-center'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col border-2 border-black p-4 rounded-xl my-2 lg:w-[30%] sm:w-[40%] w-[90%] items-center justify-center'>
                    <div className='font-semibold text-xl mt-2'>
                        <label className='mx-2' htmlFor='name'>Name : </label>
                        <input type="text" name="from_name" id='name' placeholder='Enter your name' className='text-base rounded-xl h-10 px-2 w-full' />
                    </div>
                    <div className='font-semibold text-xl mt-2'>
                        <label htmlFor='email' className='mx-[10px]'>Email : </label>
                        <input type="email" name="from_email" id='email' placeholder='Enter your email' className='text-base rounded-xl h-10 px-2 w-full' />
                    </div>
                    <div className='font-semibold text-xl mt-2'>
                        <label htmlFor='message' className='mx-2'>Message : </label>
                        <textarea name="message" id='message' className='text-base rounded-xl h-24 px-2 w-full' />
                    </div>
                    <div className='flex justify-center'>
                        <input type="submit" value="Send" className='text-2xl font-bold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-3xl focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-slate-900 w-[100px] sm:w-[200px] cursor-pointer mt-6 font-nameheader tracking-wider text-center' />
                    </div>
                </form>
                <div>
                    <div className='flex gap-4 mt-3 flex-nowrap items-center'>
                        <Link to="https://github.com/Saumyajit007?tab=repositories" target='blank'>        <RiGithubFill
                            size={38}
                            className="my-icon"
                        /></Link>
                        <Link to="mailto:sharmilidas06@gmail.com" target='blank'>        <RiMailLine
                            size={38}
                            className="my-icon"
                        /></Link>
                        <Link to="https://www.linkedin.com/in/saumyajit-paul/" target='blank'>        <RiLinkedinLine
                            size={38}
                            className="my-icon"
                        /></Link>

                        <Link to="https://drive.google.com/drive/folders/1qJK6XJHqGi9t_R2tfy7WARdxGZdzO39n" target='blank' className='text-2xl w-[110px] flex flex-nowrap bg-slate-800 text-slate-200 px-1 rounded-xl hover:scale-105'><RiDownloadLine
                            size={32}
                            className='my-icon mx-1'
                        /><span>resume</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts



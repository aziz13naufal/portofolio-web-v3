"use client"

import Navbar from '@/components/navbar/Navbar'
import BlobSVG from '@/public/svgs/blob'
import Facebook from '@/public/svgs/facebook'
import Github from '@/public/svgs/github'
import GmailSVG from '@/public/svgs/gmail'
import Instagram from '@/public/svgs/instagram'
import Telegram from '@/public/svgs/telegram'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import HTMLIcon from '@/public/svgs/html'
import CSSIcon from '@/public/svgs/css'
import JSIcon from '@/public/svgs/js'
import TSIcon from '@/public/svgs/ts'
import ExpressJsIcon from '@/public/svgs/expressJs'
import ReactIcon from '@/public/svgs/reactJs'
import NextJsIcon from '@/public/svgs/nextJs'
import TailwindCSSIcon from '@/public/svgs/tailwindCSS'
import BootstrapIcon from '@/public/svgs/bootstrap'
import MySQLIcon from '@/public/svgs/mysql'
import PostgreSQLIcon from '@/public/svgs/postgresql'
import MongoDBIcon from '@/public/svgs/mongoDB'
import Blob2 from '@/public/svgs/blob2'
import FileCodeIcon from '@/public/svgs/code'
import GlobeIcon from '@/public/svgs/globe'
import ExportIcon from '@/public/svgs/export'
import CodeIcon from '@/public/svgs/code'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [responsiveDev, setResponsiveDev] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(intervalId); 
          return 0; 
                }
        return prevCountdown - 1; 
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);
  console.log(isFormSubmitted)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }
  
  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    const token = `6711637135:AAF2r4RjoLshZ6wsFkjnzEMw7o7huTS7NSk`
    const groupId = `-4144041861`
    const url = `https://api.telegram.org/bot${token}/sendMessage`

    if(countdown <= 0) {
      try {
        axios.post(url, { chat_id: groupId, text: `Nama: ${form?.name}\nEmail: ${form?.email}\nPesan: ${form?.message}` })
        toast.success('Successfully sent!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setForm({...form, name: '', email: '', message: ''})
        setCountdown(30)
      } catch (error) {
        toast.error('Failed to send!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      }
    } else {
      toast.error(`Please wait for ${countdown} seconds to send the message again!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  const navbarHandler = () => {
    if(window.scrollY > 250) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarHandler)
    return () => {
      window.removeEventListener('scroll', navbarHandler)
    }
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={`relative ${responsiveDev && "xl:bg-red-200 lg:bg-blue-200 md:bg-red-200 sm:bg-blue-200"}`}>
      <section id='home' className="">
        {/* ignore this shit */}
        <div id="responsive-dev" className="hidden w-[30px] h-[30px] bg-zinc-700 cursor-pointer bottom-0 left-0 ml-4 mb-4 fixed z-30" onClick={() => setResponsiveDev(!responsiveDev)}>
        </div>

        <div className={`px-[8.1%] w-full relative ${showNavbar && 'py-[34px]'}`}>
          <Navbar showNavbar={showNavbar}/>
        </div>

        <div className='mt-12 px-[8.1%]'>
          <div className="bg-zinc-200 w-full h-[300px] object-cover ">
            <img src="/images/N-2.jpg" alt="bg" className='w-full h-[300px] object-cover' />
            {/* <img src="/gifs/goku-kid.gif" alt="bg" className='w-full h-[300px] object-cover' /> */}
            {/* <video src="/gifs/gohanssj2.mp4" autoPlay loop muted className='w-full h-[300px] object-cover' /> */}
          </div>

          <div className="w-full mt-4">
            <p className='text-xl font-semibold text-[#5F5F5F]'>Hello everyone, welcome to my portfolio website!</p>
            <p className='text-lg text-primary'>And I am a&nbsp; 
              <span className='relative w-fit'>Front End Website Developer.
                <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
              </span>
            </p>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <section id='about' className='w-full mt-12 bg-[#f1f5fb] py-10 px-[8.1%] flex items-center lg:flex-col'>
          <div className="">
            <Blob2 className='w-[470px] h-[470px] sm:w-[300px] sm:h-[320px] sm:-mr-3' />
          </div>

          <div className="sm:mt-5">
            <span className='relative w-fit text-xl font-semibold text-primary'>Let me introduce myself!
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
            </span>

            <div className="text-lg text-[#5F5F5F] mt-6">
              <p>I really like the look of a design, and for me front end website developer is a field of expertise that I am very interested in. And for now, the framework that I really like is NEXTJS. Because it makes the development process easier. I hope I can continue to grow and seek more inspiration.</p>

              <p className='mt-2'>Other than that, about myself, I was born on August 14, 2001 in Bandung.</p>

              <p className='mt-2'>That's all, thank you.</p>
            </div>
          </div>
        </section>
      </div>

      <div data-aos="fade-up">
        <section id='experience' className='mt-12 px-[8.1%]'>
          <div className="">
            <span className='relative w-fit text-xl font-semibold text-primary'>My Experience
                <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
            </span>
          </div>

          <div className="w-full relative flex flex-col gap-y-7 mt-10">
            <div className="absolute top-0 left-0 w-1 ml-[6px] h-full bg-sky-300 rounded-full -z-10"></div>

            <div className="flex items-start w-full gap-x-7 sm:gap-x-4 z-0">
              <i className="bg-sky-500 w-fit h-fit p-2 rounded-full" />
              <div className="w-full bg-sky-500 rounded-md">
                <div className="p-4 text-white ">
                  <h1 className='font-semibold text-xl'>Host Data</h1>
                  <p className='text-sm'>June 2023</p>
                  <p className='mt-2'>Freelance as a Front End Website Developer.</p>
                  <ul className='mt-2 ml-6 font-semibold'>
                    <li className='list-disc'>Create a responsive <span className='italic underline'>MR TOP UP</span> website</li>
                    <li className='list-disc'>Fixed the layout of an existing website</li>
                  </ul>
                  </div>
              </div>
            </div>

            <div className="flex items-start w-full gap-x-7 sm:gap-x-4 z-0">
              <i className="bg-sky-500 w-fit h-fit p-2 rounded-full" />
              <div className="w-full bg-sky-500 rounded-md">
                <div className="p-4 text-white ">
                  <h1 className='font-semibold text-xl'>Oxinos</h1>
                  <p className='text-sm'>October 2023</p>
                  <p className='mt-2'>I started my first career at Oxinos, as a Front End Website Developer.</p>
                  <ul className='mt-2 ml-6 font-semibold'>
                    <li className='list-disc'>At first I applied for an internship as a Front End for 3 months, after which the company recruited me to become its employee with a 1-year employment contract.</li>
                    <li className='list-disc'>Here I do slicing and integration to create an admin panel {`(CMS)`} for the website: <span className='underline italic font-medium'>Dispusipda</span>, <span className='underline italic font-medium'>Lovie</span>, <span className='underline italic font-medium'>Orderia</span>, <span className='underline italic font-medium'>Odigital</span></li>
                    <li className='list-disc'>And currently I am still working here</li>
                  </ul>
                  </div>
              </div>
            </div>

          </div>

        </section>
      </div>

      <div data-aos="fade-up">
        <section id='skills' className='mt-12 px-[8.1%]'>
          <div className="">
            <span className='relative w-fit text-xl font-semibold text-primary'>My Skills
                <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
            </span>
          </div>

          <div className="skills w-full mt-10 flex flex-wrap items-center justify-center gap-y-4">
            <HTMLIcon className='w-32 h-32 -ml-4' />
            <CSSIcon className='w-32 h-32 -ml-3' />
            <JSIcon className='w-[133px] h-[133px] -ml-3' />
            <TSIcon className='w-[133px] h-[133px] -ml-2' />

            <ExpressJsIcon className="border border-zinc-300 bg-zinc-100 p-2 ml-2 hidden" />
            <ReactIcon className="w-32 h-32 ml-1" />
            <NextJsIcon className="w-28 h-28 -ml-2" />
            
            <TailwindCSSIcon className="ml-2 w-32 h-32" />
            <BootstrapIcon className="w-32 h-32 ml-2" />

            <MySQLIcon className="w-32 h-32 ml-4" />
            <PostgreSQLIcon className="w-[105px] h-[105px] ml-4" />
            <MongoDBIcon className="w-[105px] h-[105px]" />
          </div>
        </section>
      </div>

      <div data-aos="fade-up">
        <section id='projects' className='mt-12 px-[8.1%]'>
          <div className="">
            <span className='relative w-fit text-xl font-semibold text-primary'>My Projects
                <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
            </span>
          </div>

          <div className="flex flex-row gap-x-5">
            <div className="projects mt-12">

              <a href="https://kira-website.vercel.app/" target='_blank' rel='noreferrer'>
                <div className="project-card">
                  <div className="project-layer">
                    <div className="project-layer-title">
                      <h1>Kira Website</h1>
                    </div>
                  </div>
                  <img src="/images/kira-website.png" className='object-fill' />
                </div>
              </a>

              <a href="https://mr-top-up.vercel.app/" target='_blank' rel='noreferrer'>
                <div className="project-card">
                  <div className="project-layer">
                    <div className="project-layer-title">
                      <h1>MR TOP UP</h1>
                    </div>
                  </div>
                  <img src="/images/mrtopup.png" className='object-fill' />
                </div>
              </a>

              <div className="project-card">
                <div className="project-layer">
                  <div className="project-layer-title">
                    <h1>Portofolio Website v3</h1>
                  </div>
                </div>
                <img src="/images/porto-3.png" className='object-fill' />
              </div>

              <div className="project-card">
                <div className="project-layer">
                  <div className="project-layer-title">
                    <h1>Orderia {`(CMS)`}</h1>
                  </div>
                </div>
                <img src="/images/orderia-cms.png" className='object-fill' />
              </div>

            </div>
          </div>
        </section>
      </div>

      <section id='contact' className='mt-12 px-[8.1%] bg-[#F1F5FB] py-10'>
        <div className="">
          <span className='relative w-fit text-xl font-semibold text-primary'>Contact Me
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
          </span>
        </div>

        <div className="mt-12 text-lg text-[#5F5F5F]">
            <p>I'm excited to connect with everyone, so please don't hesitate to get in touch with me by following my social media bellow:</p>

            <div className="mt-6 flex flex-row gap-x-3">
              <a href='mailto:aziz13naufal@gmail.com' target='_blank' className=''>
                <GmailSVG />
              </a>
              <a href='https://github.com/aziz13naufal' target='_blank'>
                <Github />
              </a>
              <a href='https://www.fb.me/aziz.naufal.129' target='_blank' className='-ml-[3px] -mt-[2px]'>
                <Facebook />
              </a>
              <a href='https://www.instagram.com/aziz.naufall' target='_blank' className='-ml-[3px]'>
                <Instagram />
              </a>
              <a href='https://www.t.me/AzizNaufal' target='_blank' className='-ml-[2px] mt-[1px]'>
                <Telegram />
              </a>
            </div>
        </div>

        <form className="form mt-12" onSubmit={handleSendMessage}>
          <div className="flex flex-row w-full gap-x-4 lg:flex-col lg:gap-y-3">
            <div className="w-full">
              <label htmlFor="">Name</label>
              <input type="text" name='name' value={form?.name} onChange={handleChangeInput} placeholder='Enter Name' />
            </div>

            <div className="w-full">
              <label htmlFor="">Email</label>
              <input type="email" name='email' value={form?.email} onChange={handleChangeInput} placeholder='Enter Email' />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="">Message</label>
            <textarea name="message" cols={10} rows={7} value={form?.message} onChange={handleChangeInput} placeholder='Enter Message' />
          </div>

          <div className="flex w-full justify-end">
            <button type={`${!form.name || !form.email || !form.message ? 'button' : 'submit' }`} className={`focus:outline-none flex flex-row gap-x-2 border border-zinc-500 mt-4 rounded-md px-3 py-2 bg-[#cbd8eb] ${!form.name || !form.email || !form.message ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#b3c3da]' }`}>
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
              </svg>
            </button>
          </div>
        </form>

      </section>
      <ToastContainer />
    </div>
  )
}

export default Home

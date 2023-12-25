import Navbar from '@/components/navbar/Navbar'
import BlobSVG from '@/public/svgs/blob'
import Facebook from '@/public/svgs/facebook'
import Github from '@/public/svgs/github'
import GmailSVG from '@/public/svgs/gmail'
import Instagram from '@/public/svgs/instagram'
import Telegram from '@/public/svgs/telegram'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="px-32">
        <Navbar />
      </div>

      <section id='home' className='mt-12 px-32'>
        <div className="bg-zinc-200 w-full h-[300px] object-cover ">
          <img src="/images/kaneki.jpeg" alt="bg" className='w-full h-[300px] object-cover' />
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
      </section>

      <section id='about' className='mt-12 bg-[#F1F5FB] w-full px-32 flex flex-row items-center gap-x-10 py-10'>
        <div className="">
          <img src="/gifs/goku.gif" alt="rei" className='image-blob' />
          {/* <video src="/gifs/gohanssj2.mp4" autoPlay loop muted className='image-blob' /> */}
        </div>
        <div className="">
          <div className="">
            <span className='relative w-fit text-xl font-semibold text-primary'>Let me introduce myself!
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
            </span>
          </div>

          <div className="text-lg text-[#5F5F5F] mt-6">
            <p>I really like the look of a design, and for me front end website developer is a field of expertise that I am very interested in. And for now, the framework that I really like is NEXTJS. because it makes the development process easier. I hope I continue to grow and seek more inspiration.</p>

            <p className='mt-2'>Other than that, about myself, I was born on August 14, 2001 in Bandung.</p>

            <p className='mt-2'>That's all, thank you.</p>
          </div>
        </div>
      </section>

      <section id='skills' className='mt-12 px-32'>
        <div className="">
          <span className='relative w-fit text-xl font-semibold text-primary'>My Skills
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
          </span>
        </div>

        <div className="skills w-full mt-10 flex flex-row">
          <div className="skill-card">
            <img src="/images/logo/html.png" className='smooth-transition' />
            <img src="/images/logo/css.png" className='ml-1' />
            <img src="/images/logo/js.png" className='ml-2' />
            <img src="/images/logo/ts.png" className='ml-4' />
            <img src="/images/logo/nodejs.png" className='ml-4' />
            <img src="/images/logo/express.png" className='ml-4' />
            <img src="/images/logo/react.png" className='ml-4' />
            <img src="/images/logo/nextjs.png" className='ml-4'/>
            <img src="/images/logo/tailwind.png" className='ml-4 h-[60px] mt-2'/>
            <img src="/images/logo/bootstrap.png" className='ml-4'/>
            <img src="/images/logo/postgresql.png" className='ml-4'/>
            <img src="/images/logo/mysql.png" className='ml-4'/>
            <img src="/images/logo/mongodb.png" className='ml-4'/>
          </div>
        </div>
      </section>

      <section id='projects' className='mt-12 px-32'>
        <div className="">
          <span className='relative w-fit text-xl font-semibold text-primary'>My Projects
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
          </span>
        </div>

        <div className="flex flex-row gap-x-5">
          <div className="projects mt-12">

            <div className="project-card">
              <div className="project-layer">
                <div className="project-layer-title">
                  <h1>Kira Website</h1>
                </div>
              </div>
              <img src="/images/kira-website.png" className='object-fill' />
            </div>

            <div className="project-card">
              <div className="project-layer">
                <div className="project-layer-title">
                  <h1>MR TOP UP</h1>
                </div>
              </div>
              <img src="/images/mrtopup.png" className='object-fill' />
            </div>

            <div className="project-card">
              <div className="project-layer">
                <div className="project-layer-title">
                  <h1>Movie Database</h1>
                </div>
              </div>
              <img src="/images/movie-db.png" className='object-fill' />
            </div>

            <div className="project-card">
              <div className="project-layer">
                <div className="project-layer-title">
                  <h1>Portofolio Website v1</h1>
                </div>
              </div>
              <img src="/images/porto-1.png" className='object-fill' />
            </div>

            <div className="project-card">
              <div className="project-layer">
                <div className="project-layer-title">
                  <h1>Portofolio Website v2</h1>
                </div>
              </div>
              <img src="/images/porto-2.png" className='object-fill' />
            </div>

            <div className="project-card">
              <div className="project-layer">
                <div className="project-layer-title">
                  <h1>Portofolio Website v3</h1>
                </div>
              </div>
              <img src="/images/porto-3.png" className='object-fill' />
            </div>

          </div>
        </div>
      </section>

      <section id='contact' className='mt-12 px-32 bg-[#F1F5FB] py-10'>
        <div className="">
          <span className='relative w-fit text-xl font-semibold text-primary'>Contact Me
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
          </span>
        </div>

        <div className="mt-12 text-lg text-[#5F5F5F]">
            <p>I'm excited to connect with everyone, so please don't hesitate to get in touch with me by following my social media bellow :</p>

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

        <div className="form mt-12">
          <div className="flex flex-row w-full gap-x-4">
            <div className="w-full">
              <label htmlFor="">Name</label>
              <input type="text" name='name' placeholder='Enter Name' />
            </div>

            <div className="w-full">
              <label htmlFor="">Email</label>
              <input type="text" name='email' placeholder='Enter Email' />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="">Message</label>
            <textarea name="message" cols={10} rows={7} placeholder='Enter Message' />
          </div>

          <div className="flex w-full justify-end">
            <button className='flex flex-row gap-x-2 border border-zinc-500 mt-4 rounded-md px-3 py-2 bg-[#cbd8eb] hover:bg-[#b3c3da]'>
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
              </svg>
            </button>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home

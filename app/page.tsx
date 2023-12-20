import Navbar from '@/components/navbar/Navbar'
import BlobSVG from '@/public/svgs/blob'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="px-32">
        <Navbar />
      </div>

      <section className='mt-12 px-32'>
        <div className="bg-zinc-200 w-full h-[300px]">
          <img src="/images/kaneki.jpeg" alt="kaneki" className='w-full h-[300px] object-cover' />
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

      <section className='mt-12 bg-[#F1F5FB] w-full px-32 flex flex-row items-center gap-x-10 py-10'>
        <div className="">
          <img src="/images/kaneki.jpeg" alt="kaneki" className='image-blob' />
        </div>
        <div className="">
          <div className="">
            <p className='relative text-xl font-semibold text-primary w-fit'>Let me introduce myself!
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
            </p>
          </div>

          <div className="text-lg text-[#5F5F5F] mt-6">
            <p>I really like the look of a design, and for me front end website developer is a field of expertise that I am very interested in. And for now, the framework that I really like is NEXTJS. because it makes the development process easier. I hope I continue to grow and seek more inspiration.</p>

            <p className='mt-2'>Other than that, about myself, I was born on August 14, 2001 in Bandung.</p>

            <p className='mt-2'>That's all, thank you.</p>
          </div>
        </div>
      </section>

      <section className='mt-12 px-32'>
        <div className="">
          <p className='relative text-xl font-semibold text-primary w-fit'>My Skills
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
          </p>
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

      <section className='mt-12 px-32'>
        <div className="">
          <p className='relative text-xl font-semibold text-primary w-fit'>My Projects
              <span className='absolute w-full h-[5px] bg-sky-500 opacity-30 left-0 right-0 bottom-0 mb-1'></span>
          </p>
        </div>

        <div className="flex flex-row gap-x-5">
          <div className="projects mt-12">
            <div className="project-card">
              <img src="/images/kaneki.jpeg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/N.jpg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/gohan.jpg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/N.jpg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/kaneki.jpeg" className='object-fill' />
            </div>
          </div>
    
          <div className="projects mt-12">
            <div className="project-card">
              <img src="/images/N.jpg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/kaneki.jpeg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/N.jpg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/gohan.jpg" className='object-fill' />
            </div>
            <div className="project-card">
              <img src="/images/kaneki.jpeg" className='object-fill' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

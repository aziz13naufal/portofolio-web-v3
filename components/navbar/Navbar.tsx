import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = ({showNavbar}: any) => {

  
  const [windowY, setWindowY] = useState<any>();
  console.log(windowY)

  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const [homeLink, setHomeLink] = useState<HTMLElement | null>(null);
  const [aboutLink, setAboutLink] = useState<HTMLElement | null>(null);
  const [skillLink, setSkillLink] = useState<HTMLElement | null>(null);
  const [projectLink, setProjectLink] = useState<HTMLElement | null>(null);
  const [contactLink, setContactLink] = useState<HTMLElement | null>(null);

  useEffect(() => {
      const homeLink = document.getElementById('homeLink');
      const aboutLink = document.getElementById('aboutLink');
      const skillLink = document.getElementById('skillLink');
      const projectLink = document.getElementById('projectLink');
      const contactLink = document.getElementById('contactLink');

      setHomeLink(homeLink);
      setAboutLink(aboutLink);
      setSkillLink(skillLink);
      setProjectLink(projectLink);
      setContactLink(contactLink);
  },[])

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isHomeActive, setIsHomeActive] = useState<boolean>(false);
  const [isAboutActive, setIsAboutActive] = useState<boolean>(false);
  const [isSkillsActive, setIsSkillsActive] = useState<boolean>(false);
  const [isProjectsActive, setIsProjectsActive] = useState<boolean>(false);
  const [isContactActive, setIsContactActive] = useState<boolean>(false);

  useEffect(() => {
    if(windowY >= 0 && windowY < 536) {
      setIsHomeActive(true);
    } else {
      setIsHomeActive(false)
    }

    if(windowY >= 536 && windowY < 1298) {
      setIsAboutActive(true);
    } else {
      setIsAboutActive(false)
    }

    if(windowY >= 1298 && windowY < 1466) {
      setIsSkillsActive(true);
    } else {
      setIsSkillsActive(false)
    }

    if(windowY >= 1466 && windowY < 2225) {
      setIsProjectsActive(true);
    } else {
      setIsProjectsActive(false)
    }

    if(windowY >= 2225) {
      setIsContactActive(true);
    } else {
      setIsContactActive(false)
    }


  }, [windowY])

  return (
    <div className={`navbar flex flex-row items-center justify-between py-5 z-10 ${showNavbar && 'fixed w-full top-0 left-0 right-0 px-[8.1%] bg-white border-b border-b-zinc-300'}`}>
      <div className="">
        <div className="font-semibold text-xl text-[#5F5F5F]">Aziz<span className='text-primary font-bold'>Naufal</span></div>
      </div>

      <nav className="text-sm">
        <ul 
          className={`text-[#5F5F5F] flex flex-row gap-x-5 
          ${isOpen ? 
            'md:flex md:absolute md:left-0 md:right-0 md:top-0 md:bottom-0 md:justify-center md:flex-col md:mt-[218px]' : 
            'md:hidden'}`}>
          <li 
            className={`relative ${isHomeActive && 'active'} ${isOpen && 'md:cursor-pointer md:px-[8.1%] md:py-5 md:bg-white'}`}
            onClick={() => {
              homeLink?.click()
              setIsOpen(false)
            }}>
            <Link id='homeLink' href={"#home"} className='hover:text-[#393939]'>HOME</Link>
          </li>
          <li 
            className={`relative ${isAboutActive && 'active'} ${isOpen && 'md:cursor-pointer md:px-[8.1%] md:py-5 md:bg-white'}`}
            onClick={() => {
              aboutLink?.click()
              setIsOpen(false)
            }}>
            <Link id='aboutLink' href={"#about"} className='hover:text-[#393939]'>ABOUT</Link>
          </li>
          <li 
            className={`relative ${isSkillsActive && 'active'} ${isOpen && 'md:cursor-pointer md:px-[8.1%] md:py-5 md:bg-white'}`}
            onClick={() => {
              skillLink?.click()
              setIsOpen(false)
            }}>
            <Link id='skillLink' href={"#skills"} className='hover:text-[#393939]'>SKILLS</Link>
          </li>
          <li 
            className={`relative ${isProjectsActive && 'active'} ${isOpen && 'md:cursor-pointer md:px-[8.1%] md:py-5 md:bg-white'}`}
            onClick={() => {
              projectLink?.click()
              setIsOpen(false)
            }}>
            <Link id='projectLink' href={"#projects"} className='hover:text-[#393939]'>PROJECTS</Link>
          </li>
          <li 
            className={`relative ${isContactActive && 'active'} ${isOpen && 'md:cursor-pointer md:px-[8.1%] md:py-5 md:bg-white'}`}
            onClick={() => {
              contactLink?.click()
              setIsOpen(false)
            }}>
            <Link id='contactLink' href={"#contact"} className='hover:text-[#393939]'>CONTACT</Link>
          </li>
        </ul>

        <div 
          className="hamburger-menu flex-col gap-[5px] cursor-pointer hidden md:flex"
          onClick={() => setIsOpen(!isOpen)}
          >
          <span className='w-[20px] h-[2px] block bg-zinc-700'></span>
          <span className='w-[20px] h-[2px] block bg-zinc-700'></span>
          <span className='w-[20px] h-[2px] block bg-zinc-700'></span>
        </div>

      </nav>
    </div>
  )
}

export default Navbar

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex flex-row justify-between py-5'>
      <div className="">
        <div className="font-semibold text-xl text-[#5F5F5F]">Aziz<span className='text-primary font-bold'>Naufal</span></div>
      </div>

      <nav className="text-sm">
        <ul className="flex flex-row gap-x-5 text-[#5F5F5F]">
            <Link href={"/"} className='hover:text-[#393939]'>HOME</Link>
            <Link href={"#about"} className='hover:text-[#393939]'>ABOUT</Link>
            <Link href={"#skills"} className='hover:text-[#393939]'>SKILLS</Link>
            <Link href={"#projects"} className='hover:text-[#393939]'>PROJECTS</Link>
            <Link href={"#contact"} className='hover:text-[#393939]'>CONTACT</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

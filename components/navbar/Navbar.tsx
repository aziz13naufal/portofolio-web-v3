import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between py-5'>
      <div className="">
        <div className="font-semibold text-xl text-[#5F5F5F]">Aziz<span className='text-primary font-bold'>Naufal</span></div>
      </div>

      <nav className="text-sm">
        <ul className="flex flex-row gap-x-5 text-[#5F5F5F]">
            <Link href={"/"}>HOME</Link>
            <Link href={"/"}>ABOUT</Link>
            <Link href={"/"}>SKILLS</Link>
            <Link href={"/"}>PROJECTS</Link>
            <Link href={"/"}>CONTACT</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

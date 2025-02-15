'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const logout=()=>{
    localStorage.removeItem('token')
    window.location.href='/'
}

const Navbar = () => {
  return (
    <div className='py-3 px-5 shadow-sm bg-white font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src="/logo.png" alt="Description" width={144} height={40} />
            </Link>
            <div className='flex items-center gap-5'>
                <Link href="startup/create" > Create </Link>
                <button onClick={()=>logout()} > Logout </button>
            </div>

        </nav>
    
    </div>
  )
}

export default Navbar

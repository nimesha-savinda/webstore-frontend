import React from 'react'
import { Phone,MapPin,MailOpen } from 'lucide-react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='flex flex-col'>
         <div className='grid grid-cols-2 rounded-md min-h-[30vh] bg-[#f4f8f9]'>
        <div className='flex flex-col justify-center items-center'>
            <div className='font-extrabold text-3xl'>Mebius</div>
            <div className='font-light'>Online web store</div>
            <div className='flex items-center gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex gap-3'>
            <div className='font-extralight text-xl'>Contact Us:</div>
            <div className='flex flex-col gap-2'>
            <div className='flex'><Phone/>+94 72 369 4 458</div>
            <div className='flex'><MailOpen/>mebius@outlook.com</div>
            <div className='flex'><MapPin/>23/A,G.H Perera Mw,Maradana</div>
            </div>
            </div>
        </div>
      
    </div>
    <div className='flex justify-center items-center bg-[#8e9b9e]'>©2024 Mebius,All Rights Reserved</div>

    </div>
   
  )
}

export default Footer

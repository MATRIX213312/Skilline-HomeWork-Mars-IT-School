import React from 'react'
import Logo2 from '../assets/Group 111.png'

const Footer = () => {
  return (
    <div>
      <footer className='bg-[#252641] h-[593px] mt-[50px] flex flex-col justify-center items-center gap-[100px]'>
        <div className='flex items-center gap-[60px] justify-center items-center'>
          <img src={Logo2} alt="" />
          <p className='text-[#FFFFFF] text-[22px] font-[600]'>Virtual Class
            <br />for Zoom</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-[15px]'>
          <p className='text-[#B2B3CF] text-[26px] font-[500] text-center'>Subscribe to get our Newsletter</p>
          <div className='flex items-center gap-[20px] m-auto'>
            <input className='w-[400px] h-[50px] border-[#83839A] border-[1px] text-[#83839A] text-[20px] font-[400] rounded-[80px] placeholder:p-[20px] text-[#83839A]' type="text" placeholder='Your Email' />
            <button className='w-[130px] text-[20px] cursor-pointer h-[50px] rounded-[29px] bg-[#545AE7] text-white'>Subscribe</button>
          </div>
        </div>
        <div>
          <ul className='flex justify-center items-center gap-[50px]'>
            <li><a className='text-[22px] text-[#B2B3CF] font-[400]' href="#">Careers</a></li>
            <li><a className='text-[22px] text-[#B2B3CF] font-[400]' href="#">Privacy Policy</a></li>
            <li><a className='text-[22px] text-[#B2B3CF] font-[400]' href="#">Terms & Conditions</a></li>
          </ul>
          <p className='text-[#B2B3CF] text-[22px] font-[400] text-center'>© 2021 Class Technologies Inc.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
import React from 'react'
import Logo from '../assets/logo.png'
import playButton from '../assets/playbtn.png'
import womanHead from '../assets/womanHead.png'

const Header = () => {
  return (
    <div>
      <header className='bg-[#FFF2E1] h-[1070px]'>
        <nav className='flex justify-around relative top-[30px]'>
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className='flex justify-center items-center gap-[50px]'>
            <li><a className='text-[#252641] text-[22px] font-[400]' href="#">Home</a></li>
            <li><a className='text-[#252641] text-[22px] font-[400]' href="#">Careers</a></li>
            <li><a className='text-[#252641] text-[22px] font-[400]' href="#">Blog</a></li>
            <li><a className='text-[#252641] text-[22px] font-[400]' href="#">About Us</a></li>
            <li><button className='bg-[#FFFFFF] w-[160px] h-[60px] rounded-[80px] text-[#6C6C6C] font-[400] text-[22px]'>Login</button></li>
            <li><button className='bg-[#F48C06] w-[160px] h-[60px] rounded-[80px] text-[22px] text-[#FFFFFF] font-[500]'>Sign Up</button></li>
          </ul>
        </nav>
        <div className='flex justify-around items-center'>
          <div>
            <h2 className='text-[#2F327D] text-[54px] font-[700]'><span className='text-[#F48C06]'>Studying</span> Online is now
              <br /> much easier</h2>
            <p className='text-[#464646] text-[24px] font-[400]'>Skilline is an interesting platform that will teach
              <br /> you in more an interactive way</p>
            <div className='flex items-center'>
              <button className='bg-[#F48C06] w-[220px] h-[80px] rounded-[80px] text-[#FFFFFF] text-[24px] font-[600] cursor-pointer'>Join for free</button>
              <div className='flex justify-center items-center'>
                <img className='relative top-[15px]' src={playButton} alt="" />
                <p className='text-[#252641] text-[24px] font-[400]'>Watch how it works</p>
              </div>
            </div>
          </div>
          <div>
            <img src={womanHead} alt="" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
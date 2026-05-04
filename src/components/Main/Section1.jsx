import React from 'react'
import Logos from '../../assets/logos.png'
import instrWoman from '../../assets/instr-woman.png'
import studCom from '../../assets/studCom.png'

const Section1 = () => {
  return (
    <div>
      <main>
        <section className='mt-[100px]'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-[#696984] text-[28px] font-[500]'>Trusted by 5,000+ Companies Worldwide</p>
            <img className='w-[1337.091796875px] h-[67.60420227050781px]' src={Logos} alt="" />
          </div>
        </section>
        <section>
          <div className='flex justify-center items-center flex-col text-center mt-[100px] gap-[30px]'>
            <h2 className='text-[44px] text-[#2F327D] font-[600]'>What is <span className='text-[#F48C06]'>Skilline?</span></h2>
            <p className='text-[#696984] text-[24px] font-[400]'>Skilline is a platform that allows educators to create online classes whereby they can
              <br />store the course materials online; manage assignments, quizzes and exams; monitor
              <br />due dates; grade results and provide students with feedback all in one place.</p>
          </div>
          <div className='flex justify-center items-center gap-[80px] mt-[80px]'>
            <div>
              <img src={instrWoman} alt="" />
            </div>
            <div>
              <img src={studCom} alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Section1
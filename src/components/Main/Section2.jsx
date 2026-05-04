import React from 'react'
import studyimg from '../../assets/studyImg.png'
import ques from '../../assets/question.png'

const Section2 = () => {
  return (
    <div>
      <section className='mt-[100px]'>
        <div className='flex justify-center items-center gap-[100px]'>
          <div>
            <h2 className='text-[36px] text-[#2F327D] font-[500] mb-[30px]'>Everything you can do in a physical
              <br /> classroom, <span className='text-[#F48C06]'>you can do with Skilline</span></h2>
            <p className='text-[24px] text-[#696984] font-[400]'>Skilline’s school management software helps traditional
              <br /> and online schools manage scheduling, attendance,
              <br /> payments and virtual classrooms all in one secure
              <br />cloud-based system.</p>
            <p className='text-[#696984] text-[22px] font-[400]'>Learn more</p>
          </div>
          <div>
            <img className='w-[500px]' src={studyimg} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section2
import React from 'react'
import brainwomen from '../../assets/brainwomen.png'
import ques from '../../assets/question.png'

const Section3 = () => {
  return (
    <div>
      <section className='mt-[50px]'>
        <div className='text-center'>
          <h1 className='text-[36px] font-[700] text-[#2F327D] mb-[15px]'>Our <span className='text-[#F48C06]'>Features</span></h1>
          <p className='text-[#696984] text-[24px] font-[400]'>This very extraordinary feature, can make learning activities more efficient</p>
        </div>
        <div className='flex justify-center items-center gap-[200px] mt-[80px]'>
          <div>
            <h2 className='text-[40px] text-[#2F327D] font-[600] mb-[15px]'><span className='text-[#F48C06]'>Tools</span> For Teachers
              <br />And Learners</h2>
            <p className='text-[#696984] text-[22px] font-[400]'>Class has a dynamic set of teaching tools built to
              <br /> be deployed and used during class.
              Teachers can
              <br />handout assignments in real-time for students to
              <br />complete and submit.</p>
          </div>
          <div>
            <img className='w-[500px]' src={brainwomen} alt="" />
          </div>
        </div>
      </section>
      <section className='mt-[150px]'>
        <div className='flex justify-center items-center gap-[80px]'>
          <div>
            <img src={ques} alt="" />
          </div>
          <div>
            <h2 className='text-[#2F327D] text-[40px] mb-[15px]'>Assessments,
              <br /><span className='text-[#F48C06]'>Quizzes</span>, Tests</h2>
            <p className='text-[#696984] text-[22px] font-[400]'>Easily launch live assignments, quizzes, and
              <br /> tests.
              Student results are automatically entered in
              <br /> the online gradebook.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section3
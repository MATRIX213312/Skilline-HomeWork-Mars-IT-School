import React from 'react'
import people from '../../assets/people.png'
import people2 from '../../assets/people2.png'

const Section4 = () => {
  return (
    <div>
      <section>
        <div className='flex justify-center items-center'>
          <div>
            <h2 className='text-[#2F327D] text-[40px] font-[600]'><span className='text-[#F48C06]'>Class Management</span>
              <br />Tools for Educators</h2>
            <p className='text-[22px] text-[#696984] font-[400]'>Class provides tools to help run and manage the class
              <br />such as Class Roster, Attendance, and more. With the
              <br /> Gradebook, teachers can review and grade tests and
              <br /> quizzes in real-time.
            </p>
          </div>
          <div>
            <img src={people} alt="" />
          </div>
        </div>
      </section>
      <section className='mt-[100px]'>
        <div className='flex justify-center items-center gap-[130px]'>
          <div>
            <img src={people2} alt="" />
          </div>
          <div>
            <h2 className='text-[#2F327D] text-[40px] font-[600]'><span className='text-[#F48C06]'>Class Management</span>
              <br />Tools for Educators</h2>
            <p className='text-[22px] text-[#696984] font-[400]'>Class provides tools to help run and manage the class
              <br />such as Class Roster, Attendance, and more. With the
              <br /> Gradebook, teachers can review and grade tests and
              <br /> quizzes in real-time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section4
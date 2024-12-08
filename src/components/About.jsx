import React from 'react'
import AboutBg from '../assets/love5.jpg'

const About = () => {
  return (
    <>

      <section className='bg-black w-full h-screen md:z-20 z-10  flex justify-center py-[4rem]  relative   items-center bg-cover ' style={{backgroundImage:`url(${AboutBg})`}}>

        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-30'>


        </div>

<div className='md:w-[50%] w-[85%]  h-auto  text-white flex justify-center items-center gap-[1rem] flex-col text-center capitalize z-20'>

<h1 className='text-white md:text-[49px] text-[32px] font-bold'>about us</h1>
<p className='text-[16px] leading-[1.7] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident possimus excepturi asperiores perferendis nesciunt amet quasi eaque! Beatae placeat sunt excepturi! Facilis tempore unde quo magnam assumenda, porro distinctio!</p>

</div>
     

      </section>

    </>
  )
}

export default About

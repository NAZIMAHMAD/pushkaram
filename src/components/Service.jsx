import React from 'react'
import ServiceBg from '../assets/Love6.jpg'
import Dessert from '../assets/love2.jpg'
import Cake from '../assets/love3.jpg'
import Sweets from '../assets/love4.jpg'
import Bakery from '../assets/love5.jpg'
import Food from '../assets/love6.jpg'


const Service = () => {
  return (
   
   <>

<section className='bg-green-100 h-auto lg:h-auto md:h-[30rem]  flex justify-center items-center flex-col py-[4rem] md:py-0'>


    <div className='md:w-full  h-auto md:h-full  flex flex-col md:flex-row  justify-between items-center gap-[2rem] w-[85%]'>
      
<div className='md:w-[50%] w-full   h-auto md:h-full   flex justify-center items-center md:px-[7.5%]'>

  <div className='w-full  capitalize flex flex-col gap-[1rem]'>
  <h1 className='text-[32px] md:text-[49px] font-bold'>our services</h1>
  <p className='leading-[1.7] font-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit voluptatum, exercitationem dolorem quos consequuntur ea. Sapiente laboriosam, officiis velit eaque optio reprehenderit maxime itaque, quo explicabo quod, fuga doloribus?</p>
  </div>

</div>

<div className='md:w-[50%] w-full  h-auto rounded-l-[50%] md:h-full '>
<img src={ServiceBg} alt="" className='rounded-l-[50%] object-cover md:h-full'/>
</div>


    </div>

    </section>

<div className='w-full h-auto flex justify-center items-center py-[4rem] flex-col gap-[2rem]'>


<div className='md:w-[50%] w-[85%] h-auto text-center flex justify-center items-center flex-col gap-[1rem] capitalize'>
  <p className='md:text-[32px] text-[28px] font-bold leading-[1.4]'>delious taste <span className='text-green-800'>with our desert</span> </p>
<p className='text-[16px] leading-[1.7] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur exercitationem, autem vel saepe officia magni eaque facilis! Ex nemo voluptatibus sequi. Laboriosam rerum molestiae cumque hic at fugiat dolores.</p>
</div>


  <div className='w-[85%] h-auto  flex-wrap flex-col md:flex-row flex justify-between items-center gap-[1rem] capitalize'>

    <div className='lg:w-[58%] md:w-[70%] w-full h-[20rem] bg-cover bg-center relative flex justify-center items-center rounded-[1rem]' style={{backgroundImage:`url(${Dessert})`}}>
      <div className='w-full h-full opacity-30 bg-black absolute top-0 left-0 rounded-[1rem]'>

      </div>
      <h2 className='relative top-0 md:text-[40px] text-[28px] font-bold text-green-200'>Dessert</h2>
      </div>

    <div className='lg:w-[40%] md:w-[27%]  w-full h-[20rem] bg-cover bg-center relative flex justify-center items-center rounded-[1rem]' style={{backgroundImage:`url(${Cake})`}}>
    <div className='w-full h-full opacity-30 bg-black absolute top-0 left-0 rounded-[1rem]'>

</div>
      <h2 className='relative top-0 md:text-[40px] text-[28px] font-bold text-green-200'>Cake</h2>
      </div>

    <div className='lg:w-[32%] md:w-[49%]  w-full h-[20rem] bg-cover bg-center relative flex justify-center items-center rounded-[1rem]' style={{backgroundImage:`url(${Sweets})`}}>
    <div className='w-full h-full opacity-30 bg-black absolute top-0 left-0 rounded-[1rem]'>

</div>
      <h3 className='relative top-0 md:text-[40px] text-[28px] font-bold text-green-200'>Sweets</h3>
      </div>

    <div className='lg:w-[32%]  md:w-[48%] w-full h-[20rem] bg-cover bg-center relative flex justify-center items-center rounded-[1rem]' style={{backgroundImage:`url(${Bakery})`}}>
    <div className='w-full h-full opacity-30 bg-black absolute top-0 left-0 rounded-[1rem]'>

</div>
      <h4 className='relative top-0 md:text-[40px] text-[28px] font-bold text-green-200'>Bakery</h4>
      </div>

    <div className='lg:w-[32%] md:w-full w-full h-[20rem] bg-cover bg-center relative flex justify-center items-center rounded-[1rem]' style={{backgroundImage:`url(${Food})`}}>
    <div className='w-full h-full opacity-30 bg-black absolute top-0 left-0 rounded-[1rem]'>

</div>
      <h5 className='relative top-0 md:text-[40px] text-[28px] font-bold text-white'>Food</h5>
      </div>
    
  </div>

</div>
    


  
    </>
  )
}

export default Service

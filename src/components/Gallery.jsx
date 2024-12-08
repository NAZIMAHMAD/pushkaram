import React from 'react'
import Love7 from '../assets/love7.jpg'


const Gallery = () => {
 
 
  const GalleryImg = [
    { img: Love7 }, // Example: Assuming the file is Love7.jpg
    { img: Love7 },
    { img: Love7 },
    { img: Love7 },
    { img: Love7 },
    { img: Love7 },
    { img: Love7 },
    { img: Love7 }
  ];
  
 
 
 
 
 
 
 
 
  return (
    <>

    {/* gallery hero section */}

<section className='w-full h-auto  bg-cover bg-center  '>

  <div className='w-[85] h-screen  md:h-[30rem] md:relative  absolute top-0 left-0  flex justify-between items-center bg-pink-200'>

    <div className='lg:w-[50%] md:w-[70%]  w-full h-full z-30 md:z-auto text-center md:text-left  relative md:bg-black bg-transparent px-[7.5%]  pt-[4rem]  md:gap-[1rem] flex md:justify-start justify-center gap-[1rem] items-center flex-col capitalize'>

      <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0 '>


      </div>

    <h1 className='text-[32px] md:text-[49px] font-bold z-40 text-white leading-[1.2]'>our gallery with some amazing timeline</h1>
  <p className='leading-[1.7] font-normal text-[16px] z-40 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit voluptatum, exercitationem dolorem quos consequuntur ea. Sapiente laboriosam, officiis velit eaque optio reprehenderit maxime itaque, quo explicabo quod, fuga doloribus?</p>
    </div>

    <div className='lg:w-[50%] md:w-[30%]  z-10 w-full h-full absolute top-0 left-0 md:relative md:h-full  bg-cover md:rounded-r-[50%] '  style={{backgroundImage:`url(${Love7})`}}>

    </div>

  </div>

</section>


    {/* gallery body section */}

  <section className='w-full h-auto mt-[88vh] md:mt-0 py-[4rem] flex justify-center items-center'>

<div className='w-[85%] h-auto flex justify-center flex-col items-center gap-[2rem]'>


<div className='h-auto text-center md:w-[50%] w-full capitalize flex justify-center items-center flex-col gap-[1rem]'>

<p className='md:text-[32px] text-[28px] font-bold leading-[1.4] '>our gallery  <span className='text-green-800'>with timeline </span> </p>

</div>


<div className=' w-full h-auto'>

<ul className='w-full h-auto flex justify-between flex-col md:flex-row  items-center  flex-wrap gap-[0.5rem] gap-y-[1rem]'>
  {
    GalleryImg.map((item, index) => (
      <li key={index} className='lg:w-[24%] md:w-[32%] w-full md:h-[20rem] h-[18rem] rounded-[1rem]'>
        <img src={item.img} alt="" className='w-full h-full object-cover rounded-[1rem]' />
      </li>
    ))
  }
</ul>


</div>




</div>



  </section>



    </>
  )
}

export default Gallery

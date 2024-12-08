import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import love2 from '../assets/love2.jpg'
import love3 from '../assets/love3.jpg'
import love4 from '../assets/love4.jpg'
import love5 from '../assets/love5.jpg'
import love6 from '../assets/love6.jpg'
import love7 from '../assets/love7.jpg'
import bg from '../assets/bg.png'
import bc from '../assets/bc.png'





// Combine the data into one object for easier access
const data = {
  desert: [
    { img: love2 },
    { img: love3 },
    { img: love4 },
    { img: love5 },
    { img: love6 },
    { img: love7 },
    { img: love2 },
    { img: love3 },
  ],
  cake: [
    { img: love3 },
    { img: love4 },
    { img: love2 },
    { img: love5 },
    { img: love6 },
    { img: love7 },
    { img: love2 },
    { img: love3 },
  ],
};



const Hero = () => {



  const [selectedSection, setSelectedSection] = useState('desert');



  return (
    <>


      {/* hero section */}

      <section
        className="w-full lg:h-screen lg:pt-[3rem] md:h-[100vh]  h-auto flex justify-center items-center bg-cover bg-center absolute  top-0 left-0 py-[4rem]"
      >
        
<div className='lg:w-[25rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] w-[25rem] h-[20rem]   md:mt-[92vh] mt-[72vh] z-10 '>
<img src={bg} alt="" className='w-full h-full  '/>


</div>
        

        <div className='w-full h-screen md:h-screen absolute top-0 left-0 bg-black opacity-40 '>

        </div>


        <div className='md:w-[50%] w-full z-10 md:z-auto  h-[35rem] pt-[5rem]  text-center md:text-left px-[7.5%] md:h-screen md:pt-[3rem]   md:bg-green-800  bg-transparent   absolute top-0 left-0   text-white capitalize  flex justify-center md:items-start items-center gap-[1rem] flex-col '>
          <h1 className='lg:text-[49px] md:text-[32px] text-[32px] leading-[1.4] font-bold'>welcome to pushkaram ventures in Jehanabad bihar</h1>
          <p className='leading-[1.7] text-[16px] font-normal md:w-[70%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi commodi veritatis harum ipsum sed ullam, corporis recusandae, dignissimos doloremque laboriosam libero ea magni possimus. </p>

          <button className='w-[80%] md:w-[12rem]   h-[3rem] bg-white text-black rounded-r-[4rem] text-[16px] font-bold capitalize '>order now</button>

        </div>

        <div className='md:w-[50%] w-full   md:h-screen h-full bg-cover bg-center absolute top-0 right-0 ' style={{ backgroundImage: `url(${hero})` }}>


       
        <div className='w-full h-[60rem]  md:h-screen absolute top-0 left-0 bg-black opacity-40 '>

</div>
        </div>



      </section>


      {/* about section */}

      <section className='relative top-0 bg-white h-auto w-full flex-col  flex justify-center items-center  mt-[88vh]  border  pt-[2rem] pb-[4rem]  md:py-[4rem] '>



        <div className='w-[85%] mt-[10rem] md:mt-auto   flex justify-between flex-col md:flex-row items-center gap-[2rem]  h-auto' >

          <div className=' md:w-[50%] w-full h-auto flex justify-center items-start flex-col capitalize gap-[1rem]'>
            <p className='text-[20px] font-bold '>about us</p>
            <h2 className='md:text-[32px] text-[28px] leading-[1.4] font-bold '>sweets make <span className='text-green-800 '>turning the loved points </span></h2>
            <p className='text-[16px] leading-[1.7] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo fugiat, dolore sit enim delectus tempore esse ratione adipisci nemo nesciunt sapiente cupiditate et dolores alias vel voluptates aliquam? Adipisci.</p>
            <NavLink className='border w-[12rem] h-[3rem] font-bold text-[16px] bg-green-800 text-white grid place-items-center rounded-r-[4rem]'>click to know more</NavLink>
          </div>

          <div className=' lg:w-[50%] rounded-r-[40%] md:w-[70%] w-full  h-[25rem] md:h-[15rem] lg:h-[25rem] flex justify-end items-center '>

            <img src="https://storage.googleapis.com/wp-static/bombaysweetcentre/ad3c1f16-mixed-indian-sweets-scaled.jpg" alt="" className='rounded-r-[40%] h-full lg:w-[70%] md:w-full w-full ' />

          </div>


        </div>


      </section>



      {/* why people love us in jehanabad */}

      <section className=' bg-green-100  flex-col  h-auto  py-[4rem] flex justify-center items-center gap-[2rem]'>

     
        <div className='w-[85%]  h-auto capitalize gap-[2rem] flex justify-center items-start flex-col'>


          <div className='lg:w-[50%] md:w-[70%] w-full flex justify-center items-start gap-[1rem] flex-col h-auto'>
            <p className='text-[20px] font-bold text-green-800'>why people love us</p>
            <h3 className='md:text-[32px] text-[28px] leading-[1.4] font-bold '>we deliver <span className='text-green-800'>quality with quantity</span></h3>
            <p className='text-[16px] leading-[1.7] font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, velit. Tenetur nesciunt, itaque corporis odio, ducimus provident quas suscipit deleniti at minima tempore adipisci omnis enim mollitia totam in necessitatibus.</p>
          </div>


          <div className='w-full md:h-[20rem] h-auto flex justify-between flex-col md:flex-row gap-[2rem]'>

            <img src={love5} alt="" className=' h-full md:w-[40%] w-full  object-cover rounded-[2rem]' />

            <img src={love2} alt="" className=' h-full md:w-[60%] w-full object-cover rounded-[2rem]' />

          </div>

          <div className='w-full md:h-[20rem] h-auto flex justify-between flex-col md:flex-row gap-[2rem] '>
            <img src={love3} alt="" className='h-full md:w-[60%] w-full object-cover rounded-[2rem]' />
            <img src={love4} alt="" className='h-full md:w-[40%] w-full object-cover rounded-[2rem]' />

          </div>

          <div className='flex justify-end items-end w-full h-auto'>
            <button className='w-[13rem] h-[3rem] border text-[16px] font-bold border-black text-black capitalize rounded-l-[5rem]'>click to get new arrival</button>

          </div>



        </div>

      </section>


      {/* banner now */}

      <section className='w-full h-screen fixed   bottom-0 -z-20'>

        <div className='w-full  bg-cover bg-center relative h-screen  ' style={{ backgroundImage: `url(${love2})` }}>


        </div>

      </section>


      {/* taste sound in jehanabad */}

      <section className='py-[4rem]  flex justify-center items-center gap-[2rem] h-auto'>


        <div className='w-[85%] h-auto capitalize gap-[2rem] flex justify-between flex-col md:flex-row'>


          <div className='md:w-[50%] w-full flex justify-center items-start gap-[1rem] flex-col h-auto'>
            <p className='text-[20px] font-bold text-green-800'>taste makes big connection </p>
            <h2 className='md:text-[32px] text-[28px] leading-[1.4] font-bold '>we deliver <span className='text-green-800'>quality with quantity</span></h2>
            <p className='text-[16px] leading-[1.7] font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, velit. Tenetur nesciunt, itaque corporis odio, ducimus provident quas suscipit deleniti at minima tempore adipisci omnis enim mollitia totam in necessitatibus.</p>
            <NavLink className=' w-[12rem] h-[3rem] font-bold text-[16px] bg-black text-white grid place-items-center rounded-r-[4rem]'>go for order</NavLink>
          </div>


          <div className='md:w-[50%] w-full md:h-[20rem] h-auto flex justify-between flex-col md:flex-row gap-[2rem]'>

            <img src={love7} alt="" className=' h-full md:w-[40%] object-cover rounded-[2rem]' />

            <img src={love6} alt="" className=' h-full md:w-[60%] object-cover rounded-[2rem]' />

          </div>




        </div>

      </section>

      {/* our services */}

      <section className='bg-white py-[4rem] w-full h-auto flex justify-center items-center'>

        <div className=' w-[85%]  h-auto flex justify-center items-center flex-col gap-[2rem]'>

          <div className='lg:w-[60%] md:w-full w-full  text-center capitalize flex justify-center items-center flex-col gap-[1rem]'>
            <p className='font-bold text-[20px] text-green-800'>our services</p>
            <h3 className='font-bold md:text-[32px] text-[28px] leading-[1.4]'>we make higher <span className='text-green-800'>priroties for your health</span>  </h3>
            <p className='text-[16px] leading-[1.7] font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo animi fugiat quas sunt nobis, vitae voluptate accusamus, modi magnam, corrupti harum temporibus neque facere quidem corporis aliquam odit nulla recusandae.</p>
          </div>


          <div className='flex justify-start w-full h-auto items-start gap-[2rem] flex-col'>

            <div className='h-auto lg:w-[80%] md:w-full w-full space-x-5 overflow-x-auto whitespace-nowrap scrollbar-hide'>

              <button className='w-[8rem] h-[2.5rem] broder rounded-[5rem] capitalize inline-block  bg-green-800 text-white' onClick={() => setSelectedSection('desert')}>desert</button>
              <button className='w-[8rem] h-[2.5rem] broder rounded-[5rem] capitalize inline-block bg-green-800 text-white' onClick={() => setSelectedSection('cake')}>cake</button>
              <button className='w-[8rem] h-[2.5rem] broder rounded-[5rem] capitalize inline-block bg-green-800 text-white'>india sweets</button>
              <button className='w-[8rem] h-[2.5rem] broder rounded-[5rem] capitalize inline-block bg-green-800 text-white'>bakery</button>
              <button className='w-[8rem] h-[2.5rem] broder rounded-[5rem] capitalize inline-block bg-green-800 text-white'>food</button>

            </div>

            <div className={`flex justify-between   w-full h-auto flex-wrap flex-col md:flex-row gap-[1rem] gap-y-[2rem]`} >

              {


                data[selectedSection].map((item, index) => (


                  <div className='md:w-[23%] w-full h-[15rem] md:h-[12rem] lg:h-[15rem] rounded-[2rem]' key={index}>

                    <img src={item.img} alt="" className='w-full h-full rounded-[2rem]' />

                  </div>

                ))



              }

            </div>




          </div>






        </div>

      </section>


      {/* our testimonials */}

      <section className='w-full h-auto py-[4rem] bg-green-100 flex gap-[2rem] flex-col justify-start items-center'>

        <div className='w-[85%]'>

          <h4 className='md:text-[32px] text-[28px] font-bold leading-[1.4] text-green-800'>what says our customers ?
          </h4>

        </div>


  <div className='w-[85%] h-auto   md:space-x-4 space-y-[2rem]  overflow-x-auto whitespace-nowrap scrollbar-hide'>
    
    <div className='lg:w-[30%] md:w-[40%] w-full h-[20rem]  rounded-[1rem] border  border-green-500 md:inline-block block text-center p-[1rem]'>
     
     
     
      <img src="https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_640.jpg" alt="" className='w-[5rem] h-[5rem]  rounded-[50%]  inline-block border'/>
      <p className='text-[20px] font-bold pt-[1rem]'>latham mark</p>
      <p className='text-[14px] font-normal leading-[1.7] text-wrap '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam. Sunt aliquam ex, doloremque cum nesciunt similique optio vel excepturi enim nisi! Delectus voluptatibus dolorem suscipit reiciendis accusantium minima ad.</p>
    </div>
   
    <div className='lg:w-[30%] md:w-[40%] w-full h-[20rem] border rounded-[1rem]  border-green-500 md:inline-block block text-center p-[1rem]'>
     
     
     
     <img src="https://sunyatasatchitananda.b-cdn.net/wp-content/uploads/2018/10/young-man-1281282_1920-986x1200.jpg" alt="" className='w-[5rem] h-[5rem]  rounded-[50%]  inline-block border'/>
     <p className='text-[20px] font-bold  pt-[1rem]'>latham mark</p>
     <p className='text-[14px] font-normal leading-[1.7] text-wrap break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam. Sunt aliquam ex, doloremque cum nesciunt similique optio vel excepturi enim nisi! Delectus voluptatibus dolorem suscipit reiciendis accusantium minima ad.</p>
   </div>
  

   <div className='lg:w-[30%] md:w-[40%] w-full h-[20rem] border rounded-[1rem] border-green-500 md:inline-block block text-center p-[1rem]'>
     
     
     
     <img src="https://img.freepik.com/free-photo/handsome-man-posing_144627-39735.jpg?size=626&ext=jpg" alt="" className='w-[5rem] h-[5rem]  rounded-[50%]  inline-block border'/>
     <p className='text-[20px] font-bold  pt-[1rem]'>latham mark</p>
     <p className='text-[14px] font-normal leading-[1.7] text-wrap break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam. Sunt aliquam ex, doloremque cum nesciunt similique optio vel excepturi enim nisi! Delectus voluptatibus dolorem suscipit reiciendis accusantium minima ad.</p>
   </div>
  

   <div className='lg:w-[30%] md:w-[40%] w-full h-[20rem] border rounded-[1rem] border-green-500 md:inline-block block text-center p-[1rem]'>
     
     
     
     <img src="https://thumbs.dreamstime.com/b/business-success-successful-man-businesslike-suit-manager-executive-express-positive-emotions-mature-bearded-boss-portrait-246164235.jpg" alt="" className='w-[5rem] h-[5rem]  rounded-[50%]  inline-block border'/>
     <p className='text-[20px] font-bold  pt-[1rem]'>latham mark</p>
     <p className='text-[14px] font-normal leading-[1.7] text-wrap break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam. Sunt aliquam ex, doloremque cum nesciunt similique optio vel excepturi enim nisi! Delectus voluptatibus dolorem suscipit reiciendis accusantium minima ad.</p>
   </div>
  
   
    
  </div>
</section>


{/* blogs now */ }

<section className='w-full h-auto py-[4rem] bg-white flex gap-[2rem] flex-col justify-start items-center hidden'>

        <div className='w-[85%]'>

          <h4 className='text-[32px] font-bold leading-[1.4] text-green-800'>our blogs
          </h4>

        </div>


  <div className='w-[85%] h-auto border  space-x-4 overflow-x-auto whitespace-nowrap'>
    
    <div className='w-[33%] h-[20rem] border rounded-[1rem] border-black inline-block'>
      jkjk
    </div>
    
    <div className='w-[33%] h-[20rem] border rounded-[1rem] border-black inline-block'>
      kljkfjs
    </div>
    
    <div className='w-[33%] h-[20rem] border rounded-[1rem] border-black inline-block'>
      kdfjkhd
    </div>
    
    <div className='w-[33%] h-[20rem] border rounded-[1rem] border-black inline-block'>
      kdfjkhd
    </div>
    
   
    
  </div>
</section>






    </>
  )
}

export default Hero

import React from 'react'

const Contact = () => {
  return (
    
    <>
      <div className='w-full h-auto bg-green-100 border py-[4rem] flex justify-center  items-center'>


<div className='w-[85%] h-auto flex justify-between items-center flex-col md:flex-row'>

        <form action="" className='w-full h-auto text-black flex justify-center  items-start gap-[1rem] flex-col'>


  <div className='md:w-[30rem] w-full h-auto flex justify-center items-start flex-col capitalize gap-[1rem]'>
  <label htmlFor="" className='text-[16px] font-normal'>name</label>

    <input type="text" className='w-full h-[3rem] px-[1rem] rounded-[0.5rem] capitalize' placeholder='enter the name'/>
  </div>

  <div className='md:w-[30rem] w-full h-auto flex justify-center items-start flex-col capitalize gap-[1rem]'>
  <label htmlFor="" className='text-[16px] font-normal'>phone number</label>

    <input type="number" className='w-full h-[3rem] px-[1rem] rounded-[0.5rem] capitalize' placeholder='enter the name'/>
  </div>

  <div className='md:w-[30rem] w-full h-auto flex justify-center items-start flex-col capitalize gap-[1rem]'>
  <label htmlFor="" className='text-[16px] font-normal'>address</label>

    <input type="text" className='w-full h-[3rem] px-[1rem] rounded-[0.5rem] capitalize' placeholder='enter the name'/>
  </div>

  <div className='md:w-[30rem] w-full h-auto flex justify-center items-start flex-col capitalize gap-[1rem]'>
  <label htmlFor="" className='text-[16px] font-normal'>feedback:how was the taste</label>
<select name="" id="" className='w-full h-[3rem] capitalize px-[1rem] text-gray-400'>
  <option value="">select</option>
  <option value="">give me star 5</option>
  <option value="">give me start 4</option>
</select>
  </div>

  <div className='md:w-[30rem] w-full h-auto flex justify-center items-start flex-col capitalize gap-[1rem]'>

    <input type="submit" className='w-full h-[3rem] px-[1rem] text-[20px] rounded-[0.5rem] bg-green-800 text-white'/>
  </div>
  


        </form>


        <div>
          <img src="" alt="cdd" />
        </div>

        </div>


      </div>
      
    </>
  )
}

export default Contact

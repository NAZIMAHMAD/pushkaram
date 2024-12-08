import React from 'react'
import logo from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bc from '../assets/bc.png'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { FaFirstOrder } from "react-icons/fa";




const Footer = ({setToggle}) => {
  return (

    <>

      <footer className='bg-white  flex justify-center items-center gap-[2rem] flex-col py-[3rem] pb-[5rem] md:pb-[4rem]'>



        <div className='text-black w-[85%] flex justify-between gap-[2rem] flex-col md:flex-row md:flex-wrap   capitalize'>

          <div className='lg:w-[30%]  md:w-full w-full md:text-center lg:text-start flex justify-start md:justify-center md:items-center lg:items-start flex-col gap-[1rem]'>
            <img src={logo} alt="" className='w-[5rem] h-[5rem] rounded-[50%]'/>
            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aperiam eum, officiis porro voluptatum fuga quibusdam dolorum nisi impedit ullam quas suscipit perspiciatis magni.</p>
          </div>

          <div className='w-auto '>
            <p className='font-bold text-[18px]'>important link</p>
            <ul className='pt-[1rem]  text-[17px] flex justify-center items-start flex-col gap-[0.5rem]'>
              <li>home</li>
              <li>about us</li>
              <li>services</li>
              <li>blog</li>
              <li>contact us</li>
              <li>order now</li>
            </ul>
          </div>

          <div className='w-auto '>
            <p className='font-bold text-[18px]'>quick link</p>
            <ul className='pt-[1rem] text-[17px] flex justify-center items-start flex-col gap-[0.5rem]'>
              <li>faqs</li>
              <li>privacy & policy</li>
              <li>return policy</li>
             
            </ul>
          </div>

          <div className='w-auto   flex flex-col gap-[1rem] '>

            <p className='font-bold text-[18px]'>contact us</p>


<div className='flex gap-[1rem] items-center text-[17px]'>
<FaLocationDot className='inline-block text-green-900'/>
<p>
              
            
              add: jehanabad bihar 804408
                </p>
</div>

<div className='flex gap-[1rem] items-center'>
<FaPhoneAlt className='inline-block text-green-900'/>
<a href="tel:9112399884">
+91-9877658655</a>
</div>

<div className='flex gap-[1rem] items-center'>
<MdEmail className='inline-block text-green-900'/>
<a href="mailto:zk888776@gmail.com"> 
            www.pushkarm@gmail.com</a>
</div>
           
         
            


<p className='font-bold text-[18px]'>follow us</p>
            <ul className='flex gap-[1rem] text-[28px] text-green-900'>
              <li><FaFacebook />
              </li>
              <li><RiInstagramFill />
              </li>
              <li><FaTelegram />
              </li>
              <li><FaSquareXTwitter />
              </li>
            </ul>
          
          </div>


</div>

<div className='w-full h-auto flex justify-center  capitalize'>

<div className=' h-auto   lg:w-[40%] md:w-[80%]  w-[85%] flex justify-center items-center gap-[1rem] flex-col'>
<p className='md:text-[36px] text-[28px]  font-bold text-green-900'>subscribe my news letter</p>

<div className=' w-full flex h-auto capitalize'>

<input type="text"  className='w-[70%] h-[3rem] px-[1rem] capitalize bg-green-200  rounded-l-[5rem] text-black' placeholder='write your email'/>
<button className='w-[30%] bg-black text-white rounded-r-[5rem] text-[18px] capitalize'>submit</button>
</div>

</div>

</div>


<div className='md:hidden rounded-[5rem]  py-[0.5rem] flex justify-center items-center h-auto w-full bg-green-900 backdrop-blur-lg opacity-80 fixed bottom-0 z-10'>

  <ul className='flex justify-between items-center w-[85%] h-auto text-white text-[28px]'>
    <li><IoCall />
    </li>
    <li><FaWhatsapp />
    </li>
    <li><FaFirstOrder />
    </li>
    <li><CiMenuKebab onClick={() => setToggle(true)}/>
    </li>
  </ul>
</div>


      </footer>

    </>
  )
}

export default Footer

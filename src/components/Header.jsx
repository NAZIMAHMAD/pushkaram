import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";



const Header = ({ toggle, setToggle }) => {

  const navList = [

    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/About' },
    { name: 'Services', link: '/Service' },
    { name: 'Gallery', link: '/Gallery' },
    { name: 'Contact', link: '/Contact' },

  ];


  const location = useLocation();
  const [color, setColor] = useState('transparent');


  useEffect(() => {

    if (location.pathname == '/') {

      setColor('transparent');

    }

    else {

      setColor('black');
    }

  }


    , [location.pathname]);



  return (
    <>
      {/* header section */}
      <header
        className={`flex justify-center items-center  h-[12vh] md:h-[6vh] lg:h-[12vh]  w-full z-40 relative top-0 left-0`}
        style={{ backgroundColor: color }} >

        <div className='w-[85%] h-[3rem] flex justify-between items-center'>

          <div className='md:w-[3rem] h-[3rem] w-full rounded-[50%] flex justify-between items-center z-40 '>
            <img src={logo} alt="best sweets in Jehanabad" className='md:w-full w-[3rem]  h-full rounded-[50%]' />
            <CiMenuBurger className="md:hidden block text-white text-[32px] font-bold" onClick={() => setToggle(true)} />

          </div>

          <nav
            className={`fixed top-0 left-0 h-full w-full bg-white z-50 flex flex-col justify-center items-center gap-8 transform transition-transform duration-500 ease-in-out md:static md:transform-none md:flex-row md:h-auto md:w-auto md:bg-transparent ${toggle ? 'translate-x-0' : 'translate-x-full'
              }`}
          >

            <ul className='w-auto h-auto md:text-white   flex-col md:flex-row flex justify-start md:justify-center text-black items-start md:items-center gap-[1rem] text-[14px] font-normal capitalize'>

              <li className='md:hidden flex'>
                <FaXmark onClick={() => setToggle(false)} />
              </li>
              {navList.map((data, index) => (
                <li key={index} className='text-[1.5rem] md:text-[14px]' onClick={() => setToggle(false)} >
                  <NavLink to={data.link}>
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className='w-auto h-auto md:hidden  z-20 text-black text-[1.5rem] md:text-[14px]'>
              <button>Our Menu</button>
            </div>
          </nav>

          <div className='w-auto h-auto hidden md:flex z-20 text-white'>
            <button>Our Menu</button>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;

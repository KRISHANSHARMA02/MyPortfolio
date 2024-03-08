"use client"
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Sociallinks2 = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/krishan-sharma-2a62b6243/",
          
        },
        {
          id: 2,
          child: (
            <>
              <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/KRISHANSHARMA02",
        },
        {
          id: 3,
          child: (
            <>
             <HiOutlineMail size={30} />
            </>
          ),
          href: "pradhankrishan1251@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
             <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "/Krishan's Resume (3).pdf",
          download: true,
        },
      ];


    return (
        <div className="flex items-center justify-center relative w-full h-48 lg:hidden bg-gradient-to-b from-gray-800 to-black">
          <h1 className='flex gap-3 items-center text-white text-2xl absolute top-[5%] left-4 font-raleway'>Click for more details<span className='animate-bounce'><FaRegArrowAltCircleDown size={30}  /></span></h1>
          <ul className='flex gap-6 justify-between'>
            {links.map(({ id, child, href,download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center h-16 px-4 rounded-lg hover:scale-110 duration-150 bg-gray-500"
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Sociallinks2

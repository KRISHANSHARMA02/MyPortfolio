"use client"
import React from 'react'
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Myphoto from "@/public/Myphoto.png";
import { useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {
  const animateHeading = () => {
    gsap.fromTo('.animated-heading', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' });
  };
  
    useEffect(() => {
      animateHeading();
    }, []);
  

    return (
        <div
          name="home"
          className="h-screen w-full font-raleway bg-gradient-to-b from-black via-black to-gray-800"
        >
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full min-[600px] h-2/5">
              <h2 className="animated-heading text-4xl sm:text-7xl font-bold text-white">
                I'm a Front End Developer
              </h2>
              <p className="animated-heading text-gray-500 py-4 max-w-md">
                I am fresher but 
                Currently, I love to work on web application using technologies like
                React, Tailwind, Next JS and sql.
              </p>
    
              <div>
                <Link
                  to="skills"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
            </div>
    
            <div>
             <Image src={Myphoto} alt='my profile' className="rounded-2xl mx-auto w-2/3 md:w-full"></Image>
            </div>
          </div>
        </div>
      );
}

export default Home

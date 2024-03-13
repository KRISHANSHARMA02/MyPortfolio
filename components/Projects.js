"use client"
import React from 'react'
import Image from 'next/image';
import Netflix from '@/public/Netflix.jpg'
import Todoli from '@/public/Todoli.jpg'
import Reactminiapp from '@/public/ReactMiniApp.jpg'


const Projects = () => {
  const projects = [
       {
         id : 1,
         src : Reactminiapp,
         href: "https://nextapp-31oj4orlm-krishansharma02s-projects.vercel.app/",
         href2 :"https://github.com/KRISHANSHARMA02/nextapp",

          },
          {
            id : 2,
            src : Todoli,
            href :"https://todo-app-gilt-rho.vercel.app/",
            href2 :"https://github.com/KRISHANSHARMA02/TodoApp"
            

             },
         {
           id : 3,
          src : Netflix,
          href :"https://netflix-opal-theta.vercel.app/",
          href2 :"https://github.com/KRISHANSHARMA02/Netflix",

         }


  ]   

  return (
    
      <div
  name="projects"
  className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
>
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="pb-8">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        Projects
      </p>
      <p className="py-6">Check out some of my work right here</p>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
      {projects.map(({id,src,href,href2}) => (
         <div key={id} class="w-64 h-72 rounded-md relative cursor-pointer transition-all ease-in-out duration-500 transform hover:scale-110 sm:w-80 sm:h-80">
         <div  class="group relative w-full h-full rounded-md">
           <Image src={src} alt='' class="w-full h-full object-cover object-bottom rounded-md transition-all ease-in-out duration-500 group-hover:opacity-50"/>
           <button class="absolute left-[15%] top-1/2 font-raleway text-lg border-[1px] rounded-3xl p-1 sm:p-2 sm:pl-7 sm:pr-7 pl-4 pr-4 bg-gradient-to-r from-sky-900 to-indigo-900 transition-all transform ease-in-out opacity-0 -translate-x-16 duration-300 sm: group-hover:translate-x-1 group-hover:opacity-100"><a href={href} target=' '>View</a></button>
           <button class="absolute right-[15%] top-1/2 font-raleway text-lg border-[1px] rounded-3xl p-1 sm:p-2  sm:pl-7 sm:pr-7 bg-gradient-to-r from-sky-900 to-indigo-900 transition-all transform ease-in-out opacity-0 translate-x-16 duration-300 group-hover:-translate-x-1 pl-4 pr-4 group-hover:opacity-100"><a href={href2} target=' '> Code </a></button>
         </div>
         
       </div>


      ))}
      
      
       
    
  </div>
</div>
    
  </div>  
    
  
);
}

export default Projects

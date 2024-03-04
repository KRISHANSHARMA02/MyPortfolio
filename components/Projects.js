import React from 'react'
import Image from 'next/image';
import Netflix from '@/public/Netflix.jpg'
import Todoli from '@/public/Todoli.jpg'
import Reactminiapp from '@/public/ReactMiniApp.jpg'

const Projects = () => {
    const projects = [
        {
          id: 1,
          src: Netflix,
         
        },
        {
          id: 2,
          src: Todoli,
        },
        {
          id: 3,
          src: Reactminiapp,
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

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
      {projects.map(({ id, src }) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
          <Image
            src={src}
            alt=""
            className="rounded-md duration-200 hover:scale-105"
          />
          <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              Visit
            </button>
            <button 
             className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              Code
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
);
}

export default Projects
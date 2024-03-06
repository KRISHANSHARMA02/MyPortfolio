import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full font-raleway bg-gradient-to-b from-gray-800 to-black text-white h-auto sm:h-screen" 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-0 sm:mt-20 ">
          Greetings! I'm Krishan Sharma, a recent Post graduate and aspiring web
          developer with a strong foundation in front-end technologies. My
          expertise lies in React JS, where I've demonstrated advanced skills in
          building modern and scalable web applications.
        </p>

        <br />

        <p className="text-xl">
          Proficient in HTML, CSS, and JavaScript, I bring a comprehensive
          approach to crafting visually appealing and user-friendly websites.
          Armed with a M.sc in Information Technology, I have successfully
          completed academic and personal projects, showcasing my commitment to
          detail and collaborative work. Eager to contribute to innovative
          projects, my passion for web development, adaptability, and
          collaborative spirit make me an ideal candidate for dynamic teams
          looking to create impactful digital experiences. Let's connect and
          explore how I can bring my skills to elevate your projects!
        </p>
      </div>
    </div>
  );
};

export default About;

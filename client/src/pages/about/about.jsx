import React from "react";
import { FaLinkedin, FaFacebook, FaUserAlt, FaGithub } from "react-icons/fa";

function About() {
  return (
    <>
      <main className="relative mt-0 ">
        <img
          className=" absolute top-[-120px] right-0 -z-10 w-full drop-shadow-xl"
          src="/assets/wave.svg"
          alt=""
        />

        <h1
          className="text-center text-black dark:text-slate-300 mt-10  text-4xl "
          style={{ fontWeight: 900 }}
        >
          {" "}
          ABOUT DEVELOPER TEAM
        </h1>

        <div className="w-full p-5 flex m-auto  flex-col-reverse md:flex-row justify-between items-center mr-5 md:mr-16 mt-10">
          <div className="md:w-[50%] w-full text-main dark:text-slate-400 text-lg md:2xl mt-10 ">
            <p>
              We are a dynamic team of skilled web developers specializing in
              creating remarkable web solutions using the latest technologies.
              Our expertise spans HTML, CSS, JavaScript (ES6+), React,
              Express.js, Node.js, and MongoDB. With a passion for crafting
              visually appealing and highly functional websites, we turn ideas
              into reality. Our collaborative approach ensures that we deliver
              solutions that perfectly match our clients' requirements. From
              designing responsive user interfaces with HTML, CSS, and
              JavaScript, to developing robust backends with Node.js and
              Express.js, and managing databases with MongoDB, we handle the
              complete web development lifecycle. Using modern JavaScript (ES6+)
              and React, we create interactive and seamless user experiences
              that engage and captivate visitors. Our expertise extends to
              implementing complex functionality and state management in React
              applications. Whether it's a static website, a dynamic web
              application, or a full-stack project, we excel in delivering
              high-quality solutions that align with industry standards and best
              practices.
            </p>
          </div>

          <div className="md:w-[50%] w-full flex items-center justify-center">
            <img
              className="md:w-[80%] w-[80%] "
              src="/assets/undraw_programming_re_kg9v.svg"
              alt="Web Development Team"
            />
          </div>
        </div>

        <h1
          className="text-center text-sec dark:text-slate-300 mt-16   text-4xl animated-title relative w-fit m-auto  "
          style={{ fontWeight: 900 }}
        >
          {" "}
          TEAM MEMBERS
        </h1>

        <div className="w-full p-5 flex m-auto  flex-col justify-around items-center mt-24 text-main dark:text-slate-300">
  <Karem/>          
        </div>

        <div className="w-full p-5 flex m-auto  flex-col justify-around items-center mt-24 text-main dark:text-slate-300">
          


          <Mustafa />


        </div>







        <div className="flex flex-col-reverse md:flex-row justify-around p-8 items-center">
          <div className=' w-full text-main dark:text-slate-400 text-lg md:2xl mt-24 '>
            <h1 className='text-4xl text-center relative w-fit m-auto animated-title font-semibold'>Skills and Expertise</h1>
            <p className='text-start text-2xl mt-5'>
              Our developer team possesses a wide range of skills and expertise in creating cutting-edge web solutions. Here are some of our key areas of proficiency:
            </p>
            <ul className='mt-6 ml-2 list-disc list-inside'>
              <li className="mt-4">Front-End Development: Crafting captivating user interfaces using HTML, CSS, and JavaScript (ES6+).</li>
              <li className="mt-4">React: Building dynamic and interactive front-end interfaces with the React library.</li>
              <li className="mt-4">Redux: Implementing efficient state management and data handling in React applications.</li>
              <li className="mt-4">Back-End Development: Creating robust server-side logic using Node.js and Express.js.</li>
              <li className="mt-4">MongoDB: Designing and managing databases for seamless data storage and retrieval.</li>
              <li className="mt-4">Responsive Design: Ensuring optimal user experiences across various screen sizes and devices.</li>
              <li className="mt-4">UI/UX Design: Focusing on user-centered design principles to create engaging interfaces.</li>
              <li className="mt-4">Collaboration: Working closely with clients to transform ideas into reality.</li>
              <li className="mt-4">Problem Solving: Finding creative solutions to complex technical challenges.</li>
            </ul>
          </div>
          <div className="md:w-[50%] w-full flex items-center justify-center">
            <img
              className="md:w-[90%] w-[80%] rounded-[50%] object-cover "
              src="/assets/skills.svg"
              alt="Web Development Team"
            />
          </div>


        </div>






        <footer className="relative mt-[200px]">
          <img
            className=" absolute bottom-[-200px] scale-y-[-1] right-0 -z-10 w-full drop-shadow-xl"
            src="/assets/wave.svg"
            alt=""
          />
        </footer>

      </main>

    </>
  );
}

export default About;








const Mustafa = () => {
  return (
    <>
    <div className="md:w-[50%] w-full flex items-center justify-center">
            <img
              className="md:w-[60%] w-[80%] rounded-[50%] object-cover  hover:scale-125 transition-all duration-300 hover:shadow-xl hover:shadow-white"
              src="/assets/mustafa.jpeg"
              alt="Web Development Team"
            />
          </div>
    
    <div className="md:w-[60%] w-full text-main dark:text-slate-400 text-lg md:text-2xl mt-10">
      <h1 className="text-4xl text-center relative font-semibold">
        Mustafa Gamal
      </h1>
      <p className="text-2xl mt-4 relative text-animition w-max m-auto text-main">
        MERN STACK Developer
      </p>
      <h1 className="capitalize mt-4 text-left w-full">
        Hello, I'm <span className="text-green-400">Mustafa Gamal</span>,
        and I'm passionate about programming. I have developed strong skills in JavaScript,
        which led me to become a MERN stack developer. While this is my first <span className="text-green-400">MERN</span> project,
        I'm excited to share more of my work in the future.
        I leverage various technologies and tools within the MERN stack to enhance performance and scalability.
        I follow best practices to ensure optimal results for the applications I develop.
      </h1>

      <div className="flex justify-between items-center mt-5 w-[50%] m-auto">
        <a
          href="https://www.linkedin.com/in/mustafa-gamal-ba48a7243/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main hover:text-slate-800 dark:text-white dark:hover:text-main transition-all"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100010546894506&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main hover:text-slate-800 dark:text-white dark:hover:text-main transition-all"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://github.com/karem880"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main hover:text-slate-800 dark:text-white dark:hover:text-main transition-all"
        >
          <FaGithub size={24} />
        </a>
      </div>


    </div>
      <WebsiteList /> 
    </>
  );
};

const WebsiteList = () => {
  const websites = [
    {
      name: 'Khair Ten',
      url: 'https://khair-ten.vercel.app/',
      imageUrl: 'https://shorturl.at/cgwzY',
    },
    {
      name: 'Ktaby',
      url: 'https://ktaby.vercel.app/',
      imageUrl: 'https://rb.gy/zp3ac',
    },
    {
      name: 'Zaman Web',
      url: 'https://zaman-web.vercel.app/',
      imageUrl: 'https://shorturl.at/luMPZ',
    },
  ];

  return (
    <div className=" py-8 w-full">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Websites I've Made</h1>
        <div className="flex gap-4  ">
          {websites.map((website, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 dark:bg-slate-700 drop-shadow-md">
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                <img src={website.imageUrl} alt={`${website.name} Preview`} className="w-full h-auto rounded mb-2 hover:scale-125 transition-all" />
              </a>
              <h2 className="text-lg font-semibold">
                <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {website.name}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





const Karem = () => {
  return (
    <>
    <div className="md:w-[50%] w-full flex items-center justify-center">
            <img
              className="md:w-[60%] w-[80%] rounded-[50%] object-cover  hover:scale-125 transition-all duration-300 hover:shadow-xl hover:shadow-black object-cover"
              src="/assets/WhatsApp Image 2023-05-27 at 6.05.12 PM.jpeg"
              alt="Web Development Team"
            />
          </div>
    
     
          <div className="md:w-[60%] w-full text-main dark:text-slate-400 text-lg md:text-2xl mt-10">
      <h1 className="text-4xl text-center relative font-semibold">
       karem mahmoud
      </h1>
      <p className="text-2xl mt-4 relative text-animition w-max m-auto text-main">
        MERN STACK Developer
      </p>
      <h1 className="capitalize mt-4 text-left w-full">
        Hello, I'm <a href="https://karemmahmoud.vercel.app/" className="text-green-400">Karem mahmoud </a>,
        I am a front-end developer and I have experience in working on projects because I have implemented many projects, some of them medium, some complex, and some easy. But I work hard every day to develop myself and become one of the most important web developers. I have some little experience in <span className="text-green-400">MERN STACK</span>, as I am a passionate person and I love development. From myself, and I have a little experience in freelancing and working with a team. Thank you       
      </h1>

  
</div>


      <div className="flex justify-between items-center mt-5 w-[50%] m-auto">
        <a
          href="https://www.linkedin.com/in/karem-mahmoud-963b84262/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main hover:text-slate-800 dark:text-white dark:hover:text-main transition-all"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/karem880"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main hover:text-slate-800 dark:text-white dark:hover:text-main transition-all"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100010546894506&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main hover:text-slate-800 dark:text-white dark:hover:text-main transition-all"
        >
          <FaGithub size={24} />
        </a>
      </div>


    
      <WebsiteListKarem /> 
    </>
  );
};

const WebsiteListKarem = () => {
  const websites = [
    {
      name: 'API qurcide generator',
      url: 'https://karemmahmouud.netlify.app/project%20js/qurcode%20generator/qr.html',
      imageUrl: 'https://shorturl.at/anwEI',
    },
    {
      name: 'My caht boat',
      url: 'https://karemmahmouud.netlify.app/project%20js/chat/index.html',
      imageUrl: 'https://shorturl.at/mWX19',
    },
    {
      name: 'Zaman Web',
      url: 'https://zaman-web.vercel.app/',
      imageUrl: 'https://shorturl.at/luMPZ',
    },
  ];

  return (
    <div className=" py-8 w-full">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Websites I've Made</h1>
        <div className="flex gap-4  ">
          {websites.map((website, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 dark:bg-slate-700 drop-shadow-md">
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                <img src={website.imageUrl} alt={`${website.name} Preview`} className="w-full h-auto rounded mb-2 hover:scale-105 transition-all" />
              </a>
              <h2 className="text-lg font-semibold">
                <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {website.name}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




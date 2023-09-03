import React from "react";
import { FaLinkedin, FaFacebook, FaUserAlt } from "react-icons/fa";

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

        <div className="w-full p-5 flex m-auto  flex-col-reverse md:flex-row justify-between items-center mt-10">
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

        <div className="w-full p-5 flex m-auto flex-col-reverse md:flex-row justify-around items-center mt-10 text-main dark:text-slate-300">
          <div className="md:w-[50%] w-full text-main dark:text-slate-400 text-lg md:2xl mt-10 ">
            <h1 className="text-4xl text-center relative font-semibold">
              Karem Mahmoud
            </h1>
            <p className=" text-2xl  mt-4 relative text-animition w-fit">
              MERN STACK Developer
            </p>
            <p className="text-start">
              I specialize in crafting immersive and visually stunning front-end
              experiences using cutting-edge web technologies. My expertise lies
              in creating captivating user interfaces that not only look
              exceptional but also provide a seamless and intuitive user
              experience. With a strong foundation in HTML, CSS, and JavaScript
              (including ES6+), I build responsive and interactive designs that
              adapt gracefully to various screen sizes. My proficiency in the
              React library allows me to create dynamic interfaces that engage
              users across different devices. Leveraging tools like Redux, I
              ensure efficient state management and data handling, resulting in
              smooth and performant applications. My goal is to transform your
              ideas into pixel-perfect designs and captivating interactions,
              leaving a lasting impression on your audience. Proficient in the
              MERN stack, I design and develop dynamic web applications with a
              strong foundation in MongoDB, Express, React, and Node.js,
              ensuring seamless functionality and engaging user experiences.
              Skilled in MERN stack development, I leverage MongoDB for
              efficient data management, build interactive front-end interfaces
              using React, and implement robust back-end logic with Express and
              Node.js, delivering well-rounded and modern web solutions.
            </p>

            <div className="flex justify-between items-center mt-5 w-[50%] m-auto">
              <a
                href="https://www.linkedin.com/in/karem-mahmoud-963b84262/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="text-main dark:text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100010546894506"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="text-main dark:text-white" />
              </a>
              <a
                href="https://karemmahmouud.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUserAlt size={24} className="text-main dark:text-white" />
              </a>
            </div>
          </div>

          <div className="md:w-[50%] w-full flex items-center justify-center">
            <img
              className="md:w-[60%] w-[80%] rounded-[50%] object-cover "
              src="/assets/WhatsApp Image 2023-05-27 at 6.05.12 PM.jpeg"
              alt="Web Development Team"
            />
          </div>
        </div>

        <div className="w-full p-5 flex m-auto  flex-col md:flex-row justify-around items-center mt-24 text-main dark:text-slate-300">
          <div className="md:w-[50%] w-full flex items-center justify-center">
            <img
              className="md:w-[60%] w-[80%] rounded-[50%] object-cover "
              src="/assets/mustafa.jpeg"
              alt="Web Development Team"
            />
          </div>
          <div className="md:w-[50%] w-full text-main dark:text-slate-400 text-lg md:2xl mt-10 ">
            <h1 className="text-4xl text-center relative font-semibold">
              Mustafa Gamal
            </h1>
            <p className=" text-2xl  mt-4 relative text-animition w-fit">
              MERN STACK Developer
            </p>
            <p className="text-start">
              I specialize in crafting immersive and visually stunning front-end
              experiences using cutting-edge web technologies. My expertise lies
              in creating captivating user interfaces that not only look
              exceptional but also provide a seamless and intuitive user
              experience. With a strong foundation in HTML, CSS, and JavaScript
              (including ES6+), I build responsive and interactive designs that
              adapt gracefully to various screen sizes. My proficiency in the
              React library allows me to create dynamic interfaces that engage
              users across different devices. Leveraging tools like Redux, I
              ensure efficient state management and data handling, resulting in
              smooth and performant applications. My goal is to transform your
              ideas into pixel-perfect designs and captivating interactions,
              leaving a lasting impression on your audience. Proficient in the
              MERN stack, I design and develop dynamic web applications with a
              strong foundation in MongoDB, Express, React, and Node.js,
              ensuring seamless functionality and engaging user experiences.
              Skilled in MERN stack development, I leverage MongoDB for
              efficient data management, build interactive front-end interfaces
              using React, and implement robust back-end logic with Express and
              Node.js, delivering well-rounded and modern web solutions.
            </p>

            <div className="flex justify-between items-center mt-5 w-[50%] m-auto">
              <a
                href="https://www.linkedin.com/in/karem-mahmoud-963b84262/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="text-main dark:text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100010546894506"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="text-main dark:text-white" />
              </a>
              <a
                href="https://karemmahmouud.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUserAlt size={24} className="text-main dark:text-white" />
              </a>
            </div>
          </div>
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

      {/* <h2 className="mt-5 md:text-4xl text-main dark:text-white relative w-max m-auto text-animition ">About Team</h2>
            <div className='w-full flex md:flex-row flex-col justify-around text-black dark:text-slate-200 items-center drop-shadow-2xl p-8'>
                <div className='md:w-[50%] w-full '>
                    <h1 className='text-3xl text-main animated-title text-center relative w-fit mb-5'>About Our Team</h1>
                    <p>We are a dynamic team of skilled web developers specializing in creating remarkable web solutions using the latest technologies. Our expertise spans HTML, CSS, JavaScript (ES6+), React, Express.js, Node.js, and MongoDB.</p>
                    <p>With a passion for crafting visually appealing and highly functional websites, we turn ideas into reality. Our collaborative approach ensures that we deliver solutions that perfectly match our clients' requirements.</p>
                    <p>From designing responsive user interfaces with HTML, CSS, and JavaScript, to developing robust backends with Node.js and Express.js, and managing databases with MongoDB, we handle the complete web development lifecycle.</p>
                    <p>Using modern JavaScript (ES6+) and React, we create interactive and seamless user experiences that engage and captivate visitors. Our expertise extends to implementing complex functionality and state management in React applications.</p>
                    <p>Whether it's a static website, a dynamic web application, or a full-stack project, we excel in delivering high-quality solutions that align with industry standards and best practices.</p>
                </div>
                <div className='md:w-[50%] w-full flex items-center justify-center'>
                    <img className='md:w-[50%] w-[80%] ' src="/assets/undraw_programming_re_kg9v.svg" alt="Web Development Team" />
                </div>
            </div>



            <div className='flex flex-col items-center mt-8'>
            <h1 className='text-center text-2xl animated-title relative  w-fit text-main  m-10  ' style={{fontWeight:900}} >Team Members</h1>

                <div className='w-[300px]'>
                <img className="w-full rounded-[50%]" src="/assets/mustafa.jpeg" alt="" />

                </div>
                <h1 className='text-main text-3xl relative text-animition '>Mustafa Gamal</h1>


                    <div className='flex flex-col items-center text-center justify-center mt-4'>
                            <div className='flex flex-col items-center text-center text-lg text-black dark:text-white   mt-3 w-[80%]'>
                                    <p className='mb-5 text-2xl '>Front-End Developer</p>
                                    <p className='text-center'>I specialize in creating captivating and interactive user interfaces using modern web technologies. I use HTML and CSS techniques to build stunning and visually appealing designs, and employ JavaScript (including ES6+) to make the user experience exceptional and seamless.
                                    With the React framework, I construct dynamic user interfaces that are responsive to various screen sizes, providing an excellent user experience. I'm well-versed in state management techniques like Redux to ensure efficient organization and handling of data.
                                    By merging design and programming, I am committed to delivering attractive user interfaces and building exceptional user experiences. I'll work diligently to bring your vision to life, transforming it into an interactive reality that meets the audience's needs.</p>
                            </div>


                            <div className='flex justify-between items-center mt-5 w-[300px]'>
                            <a href="https://www.linkedin.com/in/karem-mahmoud-963b84262/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} className='text-main dark:text-white' />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100010546894506" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} className='text-main dark:text-white' />
                            </a>
                            <a href="https://karemmahmouud.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <FaUserAlt size={24} className='text-main dark:text-white' />
                            </a>
                        </div>
                    </div>
            </div>



            <div className='flex flex-col items-center mt-8'>
                <div className='w-[300px]'>
                <img className="w-full rounded-[50%]" src="/assets/WhatsApp Image 2023-05-27 at 6.05.12 PM.jpeg" alt="" />

                </div>

                    <div className='flex flex-col items-center text-center justify-center mt-4'>
                    <h1 className='text-main text-3xl relative text-animition '>Karem Mahmoud</h1>

                            <div className='flex flex-col items-center text-center text-lg text-black dark:text-white   mt-3 w-[80%]'>
                                    <p className='mb-5 text-2xl relative  text-cen'>Front-End Developer</p>
                                    <p>I specialize in creating captivating and interactive user interfaces using modern web technologies. I use HTML and CSS techniques to build stunning and visually appealing designs, and employ JavaScript (including ES6+) to make the user experience exceptional and seamless.
                                    With the React framework, I construct dynamic user interfaces that are responsive to various screen sizes, providing an excellent user experience. I'm well-versed in state management techniques like Redux to ensure efficient organization and handling of data.
                                    By merging design and programming, I am committed to delivering attractive user interfaces and building exceptional user experiences. I'll work diligently to bring your vision to life, transforming it into an interactive reality that meets the audience's needs.</p>
                            </div>


                            <div className='flex justify-between items-center mt-5 w-[300px]'>
                            <a href="https://www.linkedin.com/in/karem-mahmoud-963b84262/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} className='text-main dark:text-white' />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100010546894506" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} className='text-main dark:text-white' />
                            </a>
                            <a href="https://karemmahmouud.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <FaUserAlt size={24} className='text-main dark:text-white' />
                            </a>
                        </div>
                    </div>
            </div> */}
    </>
  );
}

export default About;

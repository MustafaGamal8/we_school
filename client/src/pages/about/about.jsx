import React from 'react';
import { FaLinkedin, FaFacebook, FaUserAlt } from 'react-icons/fa';

function About() {
    return (
        <>
            <h2 className="mt-5 md:text-4xl text-main dark:text-white relative w-max m-auto text-animition ">About Team</h2>
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
                                    <p className='mb-5 text-2xl relative '>Front-End Developer</p>
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
            </div>


        </>
    );
}

export default About;

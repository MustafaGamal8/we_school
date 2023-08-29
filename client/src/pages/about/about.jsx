import React from 'react';
import { FaLinkedin, FaFacebook, FaUserAlt } from 'react-icons/fa';

function About() {
    return (
        <>
            <h2 className="mt-5 md:text-4xl text-main dark:text-white relative w-max m-auto text-animition ">About Team</h2>
            <div className='w-full flex md:flex-row flex-col justify-around text-black dark:text-slate-200 items-center drop-shadow-2xl p-8'>
                <div className='md:w-[50%] w-full '>
                    <h1 className='text-3xl text-main'>About Our Team</h1>
                    <p>We are a dynamic team of skilled web developers specializing in creating remarkable web solutions using the latest technologies. Our expertise spans HTML, CSS, JavaScript (ES6+), React, Express.js, Node.js, and MongoDB.</p>
                    <p>With a passion for crafting visually appealing and highly functional websites, we turn ideas into reality. Our collaborative approach ensures that we deliver solutions that perfectly match our clients' requirements.</p>
                    <p>From designing responsive user interfaces with HTML, CSS, and JavaScript, to developing robust backends with Node.js and Express.js, and managing databases with MongoDB, we handle the complete web development lifecycle.</p>
                    <p>Using modern JavaScript (ES6+) and React, we create interactive and seamless user experiences that engage and captivate visitors. Our expertise extends to implementing complex functionality and state management in React applications.</p>
                    <p>Whether it's a static website, a dynamic web application, or a full-stack project, we excel in delivering high-quality solutions that align with industry standards and best practices.</p>
                </div>
                <div className='md:w-[50%] w-full flex items-center justify-center'>
                    <img className='w-[50%]' src="/assets/undraw_programming_re_kg9v.svg" alt="Web Development Team" />
                </div>
            </div>

            <div className='flex flex-col items-center mt-8'>
                <div className='w-[300px]'>
                    <img className="w-full rounded-[50%]" src="/assets/undraw_programming_re_kg9v.svg" alt="" />
                </div>

                <div className='flex flex-col items-center justify-center mt-4'>
                    <h1 className='text-main text-2xl'>Karem Mahmoud</h1>
                    <p>Passionate MERN stack developer with expertise in MongoDB, Express.js, React, Node.js, and modern JavaScript (ES6+). Skilled in building robust web applications with seamless user experiences.</p>
                    <div className='flex justify-between items-center mt-2 w-[300px]'>
                        <FaLinkedin size={24}  className='text-main dark:text-white' /> {/* LinkedIn Icon */}
                        <FaFacebook size={24}   className='text-main dark:text-white' /> {/* Facebook Icon */}
                        <FaUserAlt size={24}  className='text-main dark:text-white' /> {/* Freelancer Icon */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

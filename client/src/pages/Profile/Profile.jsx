import { useState } from "react";
import {CiUser } from "react-icons/ci"
import {MdPhone,MdHome,MdListAlt,MdSchool,MdMenu,MdPeopleAlt,MdRemoveRedEye} from "react-icons/md"
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { useEffect } from "react";

function Profile() {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState('/public/assets/nardin.jpg');

    const handleMenuClick = () => {
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 300);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageSrc = e.target.result;
                localStorage.setItem('profileImage', imageSrc);
                setImageSrc(imageSrc);
            }
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        const profileImage = localStorage.getItem('profileImage');
        if (profileImage) {
            setImageSrc(profileImage);
        }
    }, []);
    
    return (
        <section className="m-auto w-full h-full">
            
      <img className="opacity-0 absolute top-0 right-0 z-[-1] w-full drop-shadow-xl md:opacity-[1]" src="/assets/wave.svg" alt="" />

            
            <div className=" bg-lightGray flex flex-col items-center justify-center mt-4 ">
            <div className="relative w-[300px] h-[300px] md:w-[300px] md:h-[300px] rounded-[50%] overflow-hidden border-4 border-solid border-sec bg-white">
                <img src={imageSrc} className="w-[100%] h-[100%] object-cover rounded-[50%]" alt="" />                    <label htmlFor="input-file" className="absolute bottom-0 right-0 text-5xl text-white flex flex-col w-[100%] h-[100%] rounded-[50%] opacity-0 items-center justify-center hover:text-pink-500 cursor-pointer hover:opacity-[1]">
                      <FaCamera />
                    </label>
                    <input type="file" accept="image/*" id="input-file" onChange={handleImageChange} className="sr-only" />
                </div>
                <h1 className="font-bold text-3xl mt-5 text-center"> الملف الشخصي</h1>
                <form className="w-full mt-5 max-w-md" dir="rtl">
                    <div className="mb-4">
                        <label className="block text-main font-bold mb-2" htmlFor="username">
                            اسم المستخدم:
                        </label>
                        <div className="relative">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-main leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="اسم المستخدم"
                            />
                            <CiUser className="absolute left-2 top-2 text-lg text-gray " />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-main font-bold mb-2" htmlFor="email">
                            البريد الإلكتروني:
                        </label>
                        <div className="relative">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-main leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="البريد الإلكتروني"
                            />
                            <MdPeopleAlt className="absolute left-2 top-2 text-lg text-gray" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-main font-bold mb-2" htmlFor="password">
                            كلمة المرور:
                        </label>
                        <div className="relative">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-main leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="كلمة المرور"
                            />
                            <MdRemoveRedEye className="absolute left-2 top-2 text-lg text-gray" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-main hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            تعديل
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Profile;
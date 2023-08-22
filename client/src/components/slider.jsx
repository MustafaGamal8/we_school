import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Slider = ({ slides, coverOrContain }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const swiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: { delay: 3000 },
    pagination: { clickable: true },
    loop: true,
    speed: isMobile ? 0 : 200,
    effect: isMobile ? 'slide' : 'slide', 
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    className: 'rounded-lg overflow-hidden drop-shadow-xl relative w-full h-full',
    breakpoints: {
      900: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <Swiper {...swiperOptions}>

      {slides.length > 1 ? (
      <><div className="absolute left-0 top-1/2 transform md:translate-x-1/2 -translate-y-1/2 z-10 swiper-button-prev cursor-pointer hover:bg-sec hover:text-white text-sec rounded-full">
        <FiChevronLeft className="text-5xl" />
      </div>
      <div className="absolute right-0 top-1/2 transform md:-translate-x-1/2  -translate-y-1/2 z-10 swiper-button-next cursor-pointer hover:bg-sec hover:text-white text-sec rounded-full">
        <FiChevronRight className="text-5xl" />
      </div></>):null }

      {slides.map((s, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center drop-shadow">
          <div className="md:h-[550px] h-[300px] w-full flex items-center justify-center">
            <img   src={s.img} alt="Photo" className={`rounded-lg w-full h-full drop-shadow-md  ${coverOrContain} `} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

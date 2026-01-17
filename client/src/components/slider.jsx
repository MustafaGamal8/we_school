import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

const Slider = ({ slides, customStyle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkDirection = () => {
      setIsRTL(document.documentElement.dir === 'rtl' || document.body.dir === 'rtl');
    };

    handleResize();
    checkDirection();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const swiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { clickable: true },
    loop: true,
    speed: isMobile ? 300 : 500,
    effect: isMobile ? 'slide' : 'slide',
    dir: isRTL ? 'rtl' : 'ltr',
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
    <Swiper {...swiperOptions} onSlideChange={handleSlideChange} >

      {slides.length > 1 ? (
        <><div className="absolute left-0 top-1/2 transform md:translate-x-1/2 -translate-y-1/2 z-10 swiper-button-prev cursor-pointer hover:scale-90 rounded-full bg-main text-white transition-all">
          <FiChevronLeft className="text-5xl" />
        </div>
          <div className="absolute right-0 top-1/2 transform md:-translate-x-1/2  -translate-y-1/2 z-10 swiper-button-next cursor-pointer  hover:scale-90 rounded-full bg-main text-white transition-all">
            <FiChevronRight className="text-5xl" />
          </div></>) : null}

      {slides.map((s, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center drop-shadow">
          <div className="md:h-[550px] h-[300px] w-full flex items-center justify-center">
            <img src={s.img} alt="Photo" className={`rounded-lg w-full h-full drop-shadow-md  ${customStyle?.coverOrContain}   ${activeSlideIndex === index ? `lg:${customStyle?.scale} z-[50]` : 'lg:scale-50 z-[-10]'} transition-all lg:duration-500`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

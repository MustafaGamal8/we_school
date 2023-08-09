import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import react-icons
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{ delay: 3000 }}
      loop={true}
      speed={500}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      className="rounded-lg overflow-hidden drop-shadow-xl relative"
      breakpoints={{
        // 640px is the breakpoint where only 1 slide will be shown
        900: {
          slidesPerView: 1,
        },
        // 1024px is the breakpoint where 2 slides will be shown
        1200: {
          slidesPerView: 2,
        },}}
    >
      <div className="absolute left-0 top-1/2 transform md:translate-x-1/2 -translate-y-1/2 z-10 swiper-button-prev cursor-pointer hover:bg-sec hover:text-white text-sec rounded-full">
        <FiChevronLeft className="text-5xl" />
      </div>
      <div className="absolute right-0 top-1/2 transform md:-translate-x-1/2  -translate-y-1/2 z-10 swiper-button-next cursor-pointer hover:bg-sec hover:text-white text-sec rounded-full">
        <FiChevronRight className="text-5xl" />
      </div>
      {slides.map((s, index) => (
        <SwiperSlide key={index} className='flex items-center justify-center drop-shadow'>
          <div className="md:h-[550px] h-[300px] w-full">
            <img src={s.img} alt="nophotos" className="rounded-lg w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;

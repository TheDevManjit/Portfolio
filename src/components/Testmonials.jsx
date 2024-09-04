import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export default function Testimonials() {
  return (
    <section className="xl:max-w-[1200px] mx-auto pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        What my clients are saying?
      </h2>
      <Swiper
        className="mySwiper !py-14"
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
      >
        <SwiperSlide className="px-4">
          <div className="flex flex-col text-white md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto">
            <img
              className="shrink-0 w-[120px] grow h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
              src="/images/vipin.png"
              alt="testimonial 3"
            />
            <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
              <p className="text-sm md:text-base mb-2">
                “Manjit is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the field of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!”
              </p>
              <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
               Vipin singh
              </h2>
              <h5 className="text-right text-[#459bd5] text-base md:text-lg">
               BCA student
              </h5>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4">
          <div className="flex text-white flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto">
            <img
              className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
              src="/images/vishal.jpg"
              alt="testimonial 3"
            />
            <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
              <p className="text-sm md:text-base mb-2">
                “Manjit was a wonderful developer to work with! He anticipated everything I need to consider for my website. He also went the extra mile and added details that I hadn't considered! He is helping my business grow, and I will definitely work with him again!”
              </p>
              <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                Vishal Kumar
              </h2>
              <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                Influencer (Socail Media)
              </h5>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4">
          <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto">
            <img
              className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
              src="/images/gautam.png"
              alt="testimonial 3"
            />
            <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
              <p className="text-sm md:text-base mb-2 text-white">
                “I worked with Manjit to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.”
              </p>
              <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
               Gautam Kumar
              </h2>
              <h5 className="text-right text-[#459bd5] text-base md:text-lg">
              BCA student
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4">
          <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto">
            <img
              className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
              src="/images/kameswar.jpg"
              alt="testimonial 3"
            />
            <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
              <p className="text-sm md:text-base mb-2 text-white">
                “I worked with Manjit to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.”
              </p>
              <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
               Kameshwar kumar
              </h2>
              <h5 className="text-right text-[#459bd5] text-base md:text-lg">
             Gamer
              </h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

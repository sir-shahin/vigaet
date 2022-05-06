import pob1 from "../images/slider/ob1.png"
import pob2 from "../images/slider/ob2.png"
import pob3 from "../images/slider/ob3.png"
import pob4 from "../images/slider/ob4.png"
import ob1 from "../images/ob1.svg"
import ob2 from "../images/ob2.svg"
import ob3 from "../images/ob3.svg"
import ob4 from "../images/ob4.svg"
import { useState } from "react";
import OnboardSlide from '../components/OnboardSlide'
import { Link , useNavigate } from 'react-router-dom'
// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>Continue > </button>;
};
const SwiperButtonLast = () => {
    const navigate = useNavigate();
    return <button onClick={() => navigate('/dashboard')}>Go to dashboard > </button>;
};

const Onboard = () => {
  const [isLast , setIsLast] = useState(false);

  return (
    <div>
      <div className="flex w-full h-screen justify-center align-middle">
        <div className="w-full px-5 lg:w-2/6 md:px-0 my-auto">
          <div className="mt-14 shadow-lg bg-[#232527] pt-14 pb-5">

            <div className="text-center">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={200}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSlideChange={(swiper) => { swiper.isEnd ? setIsLast(true) : setIsLast(false)}}
                >

                  <SwiperSlide>
                    <OnboardSlide 
                      poster={pob1}
                      background={ob1}
                      caption="We ensure that honesty pays"/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <OnboardSlide 
                      poster={pob2}
                      background={ob2}
                      caption="CUSTOMISE YOUR ASSESSMENT AND PROCTORING NEEDS"/>
                  </SwiperSlide>

                   <SwiperSlide>
                    <OnboardSlide 
                      poster={pob3}
                      background={ob3}
                      caption="SAY NO TO FALSE REPORTS"/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <OnboardSlide 
                      poster={pob4}
                      background={ob4}
                      caption="PROTECTING RIGHTS, RESPECTING PRIVACY"/>
                  </SwiperSlide>

                  
                  <div className="my-10">
                    {isLast ? <SwiperButtonLast /> : <SwiperButtonNext />}
                  </div>
                   
                </Swiper>

                               
            </div>
            
          </div>
          <div className="text-center text-sm my-5">
            <Link to="/dashboard" className="text-gray-400 hover:text-[#36e5f2a4]">Skip</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Onboard;

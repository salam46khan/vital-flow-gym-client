import './Banner.css';
import b_one from '../../../assets/01.png';
import b_two from '../../../assets/02.png'
import b_three from '../../../assets/03.png'
import b_four from '../../../assets/04.png'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
const Banner = () => {
    return (
        <div className="banner">
            <div className='container mx-auto h-full flex flex-col md:flex-row justify-between'>
                <div className='text-white self-center w-full md:w-1/2 p-3 md:p-14 pt-20 md:pt-0  space-y-2'>
                    <h4 className='text-xl text-pink-500 font-semibold'>Welcome to...</h4>
                    <h1 className='text-5xl font-bold font-BannerTitle'>VitalFlow Gym</h1>
                    <h3 className='text-2xl font-bold'>Ignite Your Wellness Journey!</h3>
                    <p>At VitalFlow Gym, we believe in the transformative power of fitness. Step into a world where each drop of sweat, every beat of your heart, and every breath you take propels you towards vitality and strength.</p>

                </div>
                <div className='w-full md:w-1/2 self-end'>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}

                        spaceBetween={30}
                        effect={'fade'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper text-white"
                    >
                        <SwiperSlide>
                            <img className='w-10/12 mx-auto' src={b_one} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img  className='w-10/12 mx-auto' src={b_two} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-10/12 mx-auto' src={b_three} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-10/12 mx-auto' src={b_four} alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;
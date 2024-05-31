import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {


    return (
        <div className='w-[100%] lg:h-[620px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className='relative'>
                        <img className='banner-img' src="https://i.ibb.co/k6qXK1f/photo-1579541671172-43429ce17aca-q-80-w-2065-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    </div>
                    <div className='space-y-4 absolute top-[30%] left-[12%] lg:left-[23%]  text-white'>
                        <h1 className='text-4xl lg:text-6xl font-semibold'>Explore <span className='text-yellow-300'> Painting and Drawing</span></h1>
                        <p className='hidden lg:block pb-5 text-xl'>Choosing prints and drawings demands keen eye for style, subject, and aesthetic appeal, <br /> enriching our spaces with beauty.</p>
                        <button className='ml-[360px] hidden lg:block btn btn-primary'>Explore Now</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='relative'>
                        <img className='banner-img' src="https://i.ibb.co/HD590cT/BA1y-Lj-Nn-QCI1yis-IZGEi-2013-07-16-1922-IMG-9873.jpg" alt="" />
                    </div>
                    <div className='space-y-4 absolute top-[30%] lg:left-[23%] text-white'>
                        <h1 className='text-4xl lg:text-6xl font-semibold'>Explore <span className='text-yellow-300'> Painting and Drawing</span></h1>
                        <p className='hidden lg:block pb-5 text-xl'>Choosing prints and drawings demands keen eye for style, subject, and aesthetic appeal, <br /> enriching our spaces with beauty.</p>

                        <button className='ml-[360px] hidden lg:block btn btn-primary'>Explore Now</button>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' '>
                        <div className='relative'>
                            <img className=' banner-img' src="https://i.ibb.co/Ttzsfp5/unsplash-524010c76b52a-1.jpg" alt="" />
                        </div>
                        <div className='space-y-4 absolute top-[30%] left-[12%] lg:left-[23%]  text-white'>
                            <h1 className='text-4xl lg:text-6xl font-semibold'>Explore <span className='text-yellow-300'> Painting and Drawing</span></h1>
                            <p className='hidden lg:block pb-5 text-xl'>Choosing prints and drawings demands keen eye for style, subject, and aesthetic appeal, <br /> enriching our spaces with beauty.</p>
                            <button className='ml-[360px] hidden lg:block btn btn-primary'>Explore Now</button>
                        </div>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;
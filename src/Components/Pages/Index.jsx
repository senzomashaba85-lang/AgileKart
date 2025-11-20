
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

// Correct import paths
import heroImg from "../../assets/myImages/hero.png";
import heroImg2 from "../../assets/myImages/hero-2.png";
import heroImg3 from "../../assets/myImages/hero-3.png";

// Banners are in public folder
const banner5 = '/banner-5.jpg';
const banner1 = '/banner-1.jpg';
const banner2 = '/banner-2.jpg';
const banner3 = '/banner-3.jpg';
const banner4 = '/banner-4.jpg';

import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Index() {
  const slides = [
    { image: heroImg, title: "THE NEW STANDARD" },
    { image: heroImg2, title: "INNOVATION REDEFINED" },
    { image: heroImg3, title: "STYLE MEETS FUNCTION" }
  ];

  return (
    <>
      <div className="bg-element"></div>

      {/* Hero */}
      <div className="hero-bg">
        <header className="px-[8%] lg:px-[12%] py-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000 }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="hero flex items-center justify-between py-24 gap-12">
                  <div className="hero-content flex flex-col items-start justify-center w-1/2">
                    <h1 className="text-8xl font-bricolage font-bold leading-tight mb-4">
                      THE NEW <br /> STANDARD
                    </h1>
                    <h5 className="font-bold text-sm text-gray-800 mb-4">
                      UNDER FAVORABLE SMARTWATCHES
                    </h5>
                    <div className="mb-6">
                      <p className="text-sm text-gray-700 mb-2">FROM</p>
                      <div className="text-6xl font-bold text-gray-800">
                        <sup className="text-2xl">$</sup>748<sup className="text-xl">99</sup>
                      </div>
                    </div>
                    <button className="bg-yellow-400 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition">
                      Start Buying
                    </button>
                  </div>
                  <div className="hero-image w-1/2">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </header>
      </div>

      {/* Banner */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <div
          className="banner-1 flex flex-col justify-center gap-5 bg-contain bg-no-repeat bg-right rounded-xl p-6 md:p-8 h-[250px] sm:h-[300px]"
          style={{ backgroundImage: `url(${banner5})` }}
        >
          <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
            EXCLUSIVE HEADPHONE
          </small>
          <h3 className="text-5xl font-semibold font-bricolage">Release Date & Price</h3>
          <p className="text-2xl">Today's Super offer</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
          {/* Banner 1*/}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">Release Date & Price</h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>

          {/* Banner 2*/}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">Release Date & Price</h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>

          {/* Banner 3*/}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">Release Date & Price</h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>

          {/* Banner 4*/}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">Release Date & Price</h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="section-title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">Our Products</span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">Popular Products</h1>
      </div>

      {/* Products */}
      <div className="product-wrapper px-[7%] lg:px-[12%] py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Special Offer card */}
        <div className="bg-white border-2 border-yellow-400 p-6 product-banner-wrap rounded-xl flex flex-col items-center justify-center text-center relative">
          <span className="text-xl text-white font-bold mb-1 bg-red-600 px-5 py-2 rounded">
            Special Offer
          </span>
          <div className="absolute top-4 right-2 bg-yellow-400 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-sm">
            Save <br />$120
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
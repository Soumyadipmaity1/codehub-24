import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './purpleslide.png';
import image2 from './yellowrec.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (

<div className=' text-white pt-16'>
    <div className="items-center flex-col justify-center text-center">
            <h2 className="text-4xl font-bold mb-4">Endless Possibilities</h2>
            <div className=" h-1 ml-[525px] items-center bg-purple-400 w-52 mt-5 mb-5"></div>
            <h2 className="text-4xl font-bold mb-4">Infinity</h2>

            <div className="arrow"></div>

        </div>
    <div className=' flex   justify-center'>
          
    <div className="bg-white w-[550px]  h-[440px]" >
      <Slider {...settings}>
        <div className='border-2 border-white'>
<h1 className="text-black text-center text-xl p-2 font-semibold">Enhanced Security</h1>

          <img src={image1} alt="Slide 1" style={{ width: '100%' }} />
        </div>
        <div>
        <h1 className="text-black text-center text-xl p-2 font-semibold">Built-in Code Editor</h1>

          <img src={image2} alt="Slide 2" style={{ width: '100%' }} />
        </div>
        <div>
        <h1 className="text-black text-center text-xl p-2 font-semibold">Faster Collaboration</h1>

          <img src={image1} alt="Slide 3" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
    </div>
    </div>
  );
};

export default ImageSlider;

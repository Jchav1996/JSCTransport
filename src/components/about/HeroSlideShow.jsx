// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const HeroSlideShow = () => {
  const slides = [
    {image: 'https://www.britelogistics.com/wp-content/uploads/2019/06/Brite-Logistics-Chicago-Blue-new-modern-trucks-Volvo-Freightliner-at-warehouse-bright.jpg'},
    {image: 'https://cdn.producebusiness.com/2022/06/ygAhGTCL-may-featuretransportation-featured.jpg'},
    {image: 'https://tempuslogix.com/wp-content/uploads/2022/05/Truck-Shipping-Tips-1024x576.jpg'}
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="hero-slide-show">
      <button onClick={prevSlide}>Previous</button>
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.description} />
          <p>{slide.description}</p>
        </div>
      ))}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default HeroSlideShow;


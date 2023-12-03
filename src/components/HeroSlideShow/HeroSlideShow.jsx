// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

<<<<<<< HEAD:src/components/HeroSlideShow/HeroSlideShow.jsx
import "./HeroSlideShow.css";

=======
>>>>>>> main:src/components/about/HeroSlideShow.jsx
=======
import "./HeroSlideShow.css";

>>>>>>> 57292db81b01c8fc70e0eafee9b9bad6475c3d4d
import slide1 from "../img/truck3.jpg"
import slide2 from "../img/truck1.jpg"
import slide3 from "../img/truck2.jpg"

const HeroSlideShow = () => {
  const slides = [
<<<<<<< HEAD
<<<<<<< HEAD:src/components/HeroSlideShow/HeroSlideShow.jsx
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
=======
    {image: slide1},
    {image: slide2},
    {image: slide3},
>>>>>>> main:src/components/about/HeroSlideShow.jsx
=======
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
>>>>>>> 57292db81b01c8fc70e0eafee9b9bad6475c3d4d
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevCurrentSlide) => (prevCurrentSlide + 1) % slides.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [slides.length]);
  const prevSlide = () => {
    setCurrentSlide(prevCurrentSlide => (prevCurrentSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide(prevCurrentSlide => (prevCurrentSlide + 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slide-show">
      <button onClick={prevSlide}>Previous</button>
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img id='heroImg' src={slide.image} alt={slide.description} />
          <p>{slide.description}</p>
        </div>
      ))}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default HeroSlideShow;




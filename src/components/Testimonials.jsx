import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Alice Johnson",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Auto play slides every 2 seconds
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-slide">
        <p className="testimonial-text">
          {testimonialsData[currentSlide].text}
        </p>
        <p className="testimonial-author">
          - {testimonialsData[currentSlide].author}
        </p>
      </div>
      <div className="testimonial-controls">
        <button onClick={goToPrevSlide}>&lt; Previous</button>
        <button onClick={goToNextSlide}>Next &gt;</button>
      </div>
    </div>
  );
};

export default Testimonials;

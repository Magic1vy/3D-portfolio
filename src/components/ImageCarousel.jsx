import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative max-w-lg mx-auto ">
            {images && images.length > 0 && (
                <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="w-full block p-4 rounded-lg"
                />
            )}
            <button
                onClick={goToPrevious}
                aria-label="Previous image"
                className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-blue-600"
            >
                &#10094;
            </button>
            <button
                onClick={goToNext}
                aria-label="Next image"
                className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-blue-600"
            >
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel;

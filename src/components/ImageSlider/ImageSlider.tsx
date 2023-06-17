import React, { useState } from 'react';
import "./ImageSlider.css"

interface Image {
  src: string;
  alt: string;
}

const ImageSlider: React.FC = () => {
    const images: Image[] = [
        { src: '/src/assets/images/image1.jpg', alt: 'Image 1' },
        { src: '/src/assets/images/image2.jpg', alt: 'Image 2' },
        { src: '/src/assets/images/image3.jpg', alt: 'Image 3' },
        { src: '/src/assets/images/image4.jpg', alt: 'Image 4' },
        { src: '/src/assets/images/image5.jpg', alt: 'Image 5' },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
            setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
    }


    const goToNextImage = () => {
            setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
    };

    return (
        <>
            <div className="image-slider">
                <div className='prev-btn' onClick={goToPreviousImage}>{`<`}</div>
                <div className='next-btn' onClick={goToNextImage}>{`>`}</div>
                <div className="image-container">
                    <img
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        className={currentImageIndex ? 'active' : ''}
                    />
                </div>    
            </div> 
        </>    
    );
};

export default ImageSlider;
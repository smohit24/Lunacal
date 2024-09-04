import React, { useState } from 'react';
import { ReactComponent as ImageSVG } from './image.svg';
import { FaQuestionCircle, FaSquare } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  // Initialize state with three images
  const [images, setImages] = useState([
    <ImageSVG key={0} className="w-24 h-24 object-cover mt-4 ml-5" />,
    <ImageSVG key={1} className="w-24 h-24 object-cover mt-4 ml-5" />,
    <ImageSVG key={2} className="w-24 h-24 object-cover mt-4 ml-5" />
  ]);

  const addImage = () => {
    const newImage = <ImageSVG key={images.length} className="w-24 h-24 object-cover mt-4 ml-5" />;
    setImages([...images, newImage]);
  };

  const openGallery = () => {
    alert('Gallery button clicked!');
  };

  const handleLeftArrowClick = () => {
    alert('Left arrow clicked!');
  };

  const handleRightArrowClick = () => {
    alert('Right arrow clicked!');
  };

  const handleHelpClick = () => {
    alert('Help button clicked!');
  };

  return (
    <div className="p-2 shadow-lg gallery-container">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-start w-full mb-[-250px] mr-[-75px]">
            <div>
              <div className='flex '>
                <FaSquare className="text-xl text-gray-600" />
                <FaSquare className="text-xl text-gray-600" />
              </div>
              <div className='flex'>
                <FaSquare className="text-xl text-gray-600" />
                <FaSquare className="text-xl text-gray-600" />
              </div>
              <div className='flex'>
                <FaSquare className="text-xl text-gray-600" />
                <FaSquare className="text-xl text-gray-600" />
              </div>
            </div>
          </div>
          <button onClick={handleHelpClick} style={{
    width: '60px', /* Width */
    height: '30px', /* Height */
    padding: '', /* Remove padding */
    backgroundColor: 'gray', /* Background color */
    borderRadius: '50%', /* Circular shape */
    display: 'flex', /* Flexbox for centering */
    alignItems: 'center', /* Vertical alignment */
    justifyContent: 'center', /* Horizontal alignment */
    cursor: 'pointer', /* Pointer cursor */
    boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.849)', /* Shadow */
    transition: 'background-color 0.3s' /* Transition */
  }}>
            <FaQuestionCircle className="text-xl" />
          </button>
          <button onClick={openGallery} className="buttan mb-[-10px]">Gallery</button>
        </div>
        <div className="flex space-x-5 mr-[20px]">
          <button onClick={addImage} className="button">+Add Image</button>
          <button onClick={handleLeftArrowClick} className="arrow-button">←</button>
          <button onClick={handleRightArrowClick} className="arrow-button">→</button>
        </div>
      </div>
      <div className="flex flex-wrap space-x-[-150px] ml-[40px]">
        {images.map((image, index) => (
          <div key={index}>{image}</div>
        ))}
      </div>
      <div className="absolute bottom-[-20px] rounded-[50px] left-1 transform -translate-x-[-50px] w-[500px] h-[6px] bg-gray-600"></div>
    </div>
  );
};

export default Gallery;

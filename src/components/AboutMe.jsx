import React, { useState } from 'react';
import { FaQuestionCircle, FaSquare } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleHelpClick = () => {
    alert('Help button clicked!');
  };

  return (
    <div className="p-4 shadow-lg gallery-container">
      <div className="flex justify-between items-center mb-5">
      <div className="flex items-center space-x-12 ml-[-5px]">
        <div className="flex items-center justify-start w-full mb-[-250px] mr-[-330px]">
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
          <div className='flex buttan space-x-2 w-[660px]'>
        <button onClick={() => setActiveTab('about')} className={`w-32 p-2 ${activeTab === 'about' ? 'font-bold' : ''} border-0 rounded-[50px] hover:bg-gray-600 transition`}>About Me</button>
        <button onClick={() => setActiveTab('experiences')} className={`w-32 p-2 ${activeTab === 'experiences' ? 'font-bold' : ''} border-0 rounded-[50px] hover:bg-gray-600 transition`}>Experiences</button>
            <button onClick={() => setActiveTab('recommended')} className={`w-32 p-2 ${activeTab === 'recommended' ? 'font-bold' : ''} border-0 rounded-[50px] hover:bg-gray-600 transition`}>Recommended</button>
            </div>
        </div>
        </div>
      <div className="mt-4 ml-[40px]">
        {activeTab === 'about' && <div className="p-4 max-w-lg text-justify">
          <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br />

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM.</p></div>}
        {activeTab === 'experiences' && <div>Experiences Content</div>}
        {activeTab === 'recommended' && <div>Recommended Content</div>}
      </div>
       <div className="absolute top-[-5px] right-[35px] h-full flex items-center">
        <div className="w-[10px] h-[80px] bg-gradient-to-b rounded-full" 
    style={{ background: 'linear-gradient(#888989, #4A4E54)' }}></div>
      </div>
      <div className="absolute bottom-[-25px] left-1 transform -translate-x-[-50px] w-[500px] h-[8px] bg-gray-600"></div>
      
    </div>
  );
};

export default AboutMe;

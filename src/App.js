import React from 'react';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="flex bg-gray-500">
      <div className="w-1/2"></div>
      <div className="w-1/2 flex flex-col space-y-10 mb-16 mt-8">
        <AboutMe />
        <Gallery />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/footer';
import Btech from './Btech';
import Mtech from './Mtech';
import MCA from './MCA';


const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState('btech');

  const renderCourseComponent = () => {
    switch (selectedCourse) {
      case 'btech':
        return <Btech />;
      case 'mtech':
        return <Mtech />;
      case 'mca':
        return <MCA />;
      default:
        return <Btech />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Buttons */}
      <div className="flex mx-12 gap-4 my-4">
        <button onClick={() => setSelectedCourse('btech')} className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-800">
          B.Tech
        </button>
        <button onClick={() => setSelectedCourse('mtech')} className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-800">
          M.Tech
        </button>
        <button onClick={() => setSelectedCourse('mca')} className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-800">
          MCA
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="flex-grow px-4">
        {renderCourseComponent()}
      </div>

      <Footer />
    </div>
  );
};

export default Course;

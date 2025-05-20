import React , {useState} from 'react';
import Calendar from "react-calendar";
import Simplecalender from './Calender';
import Navbar from './Navbar';
import Footer from './footer';
import Aboutus from './Aboutus';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [value, setValue] = useState(new Date());
    const navigate = useNavigate();
  return (
    <div className="font-sans">
    
    <Navbar/>
    

      {/* Hero Section */}
     <section
  className="relative text-white py-20 h-[500px] px-8 bg-blend-overlay bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg')" }}
>
  <div className="relative z-10 mt-[100px]">
    <h1 className="text-4xl font-bold">Your MACS family.</h1>
    <p className="mt-4 font-semibold">
      An Atmosphere Of Cooperation And Helpfulness With A Patient Listening Ear To Our Students.
    </p>
    <button className="mt-6 px-6 py-2 bg-violet-600 font-bold rounded hover:bg-gray-100 hover:text-violet-600" onClick={() => navigate("/aboutus")}>
      
      Know More
    </button>
  </div>
 
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
     </section>


      {/* News + Events + Spotlight */}
      <section className="grid grid-cols-3 gap-6 p-8">
        <div>
          <h2 className="text-xl font-bold mb-4">News</h2>
          <ul className="space-y-4 ">
            <li className='border-black  bg-slate-100 shadow-lg h-[140px] w-[450px] flex'>
                <img src="https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg" alt="" className='h-[137px] w-[140px]' />
              <p className="text-sm text-gray-500">04 April, 2025</p>
              <p className="font-semibold">Details Regarding M.Tech Admissions</p>
            </li>
            <li className='border-black  bg-slate-100 shadow-lg h-[140px] w-[450px] flex'>
                <img src="https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg" alt="" className='h-[137px] w-[140px]' />
              <p className="text-sm text-gray-500">04 April, 2025</p>
              <p className="font-semibold">Details Regarding M.Tech Admissions</p>
            </li><li className='border-black  bg-slate-100 shadow-lg h-[140px] w-[450px] flex'>
                <img src="https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg" alt="" className='h-[137px] w-[140px]' />
              <p className="text-sm text-gray-500">04 April, 2025</p>
              <p className="font-semibold">Details Regarding M.Tech Admissions</p>
            </li>
            {/* Add more items... */}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Events</h2>
          <p>No Future Events</p>
        </div>
      {/* calender */}
        <div>
            <Simplecalender/>
        </div>
        
      </section>

      {/* Gallery Section */}
      <section className="bg-violet-600 text-white py-10 text-center">
        <div className="grid grid-cols-4 gap-6 px-8">
          <div>
            <h3 className="text-3xl font-bold">62+</h3>
            <p>Years of Service</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">67+</h3>
            <p>Faculty Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1300+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">159+</h3>
            <p>Courses</p>
          </div>
        </div>
      </section>
      {/* gallery */}
      <section className="px-8 py-12 bg-gray-50">
  <h2 className="text-2xl font-bold text-iris mb-6 text-center">Photo Gallery</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      'https://media.istockphoto.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=',
      'https://media.istockphoto.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=',
      'https://media.istockphoto.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=',
      'https://media.istockphoto.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=',
      'https://media.istockphoto.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=',
      'https://media.istockphoto.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=',
    ].map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Gallery ${index + 1}`}
        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
    ))}
  </div>
</section>

    {/* footer */}
    <Footer/>
    </div>
  );
};

export default Home;

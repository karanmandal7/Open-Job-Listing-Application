import React from 'react';

const AboutPage = () => {
  return (
    <>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 sm:gap-10 gap-8 grid lg:grid-cols-2 grid-cols-1">
            
            {/* Left Section */}
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-blue-700 text-4xl font-bold leading-normal lg:text-start text-center">
                      The Tale of Our Achievement Story
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Here at OJLA, our achievement story is a testament to teamwork and perseverance. Together, we've
                      overcome challenges, celebrated victories, and created a narrative of progress and success.
                    </p>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex shadow-sm">
                      <h4 className="text-gray-900 text-2xl font-bold">33+ Years</h4>
                      <p className="text-gray-500 text-base font-normal">Influencing Digital Landscapes Together</p>
                    </div>
                    <div className="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex shadow-sm">
                      <h4 className="text-gray-900 text-2xl font-bold">125+ Latest Jobs</h4>
                      <p className="text-gray-500 text-base font-normal">Excellence Achieved Through Success</p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-4 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex shadow-sm">
                      <h4 className="text-gray-900 text-2xl font-bold">26+ Awards</h4>
                      <p className="text-gray-500 text-base font-normal">Our Dedication to Innovation Wins Understanding</p>
                    </div>
                    <div className="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex shadow-sm">
                      <h4 className="text-gray-900 text-2xl font-bold">99% Happy Clients</h4>
                      <p className="text-gray-500 text-base font-normal">Mirrors our Focus on Client Satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <button className="sm:w-fit w-full group px-4 py-2 bg-indigo-50 hover:bg-blue-700 hover:text-white rounded-lg shadow-md transition-all duration-500 ease-in-out flex items-center gap-2">
                <span className="px-1.5 text-blue-700 text-sm font-medium group-hover:text-white transition-all duration-500">
                  Read More
                </span>
                <svg className="group-hover:translate-x-1 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative shadow-lg">
                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover hover:scale-105 transition-all duration-500 ease-in-out" 
                     src="https://pagedone.io/asset/uploads/1717742431.png" alt="about us image" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

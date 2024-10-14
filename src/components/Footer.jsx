import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 mt-10 py-8"> 
      <div className=" mx-auto flex justify-between  md:flex-row items-start flex-wrap">
        {/* Left site Name */}
        <div className="text-xl text-black">
          Site Name
        </div>

        
        <div className="grid grid-cols-3 gap-x-20 mr-[11rem] max-w-7xl">
          {/* Column 1 */}
          <div className="flex flex-col space-y-3">
            <p className="font-semibold">Topic</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3">
            <p className="font-semibold">Topic</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-3">
            <p className="font-semibold">Topic</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

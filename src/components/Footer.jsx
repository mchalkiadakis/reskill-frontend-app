import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 mt-10 py-8"> 
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* Left site Name */}
        <div className="text-xl font-bold">
          Site Name
        </div>

        
        <div className="grid grid-cols-3 gap-8 gap-x-20 mr-[11rem]">
          {/* Column 1 */}
          <div className="flex flex-col space-y-2">
            <p className="font-semibold">Topic</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2">
            <p className="font-semibold">Topic</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
            <p className="text-gray-600">Page</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-2">
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

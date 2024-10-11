import React from 'react';

const Header = ({ photos }) => {
  return (
    <div >
            <header className="flex justify-between items-center p-4">
                <h1 className="">Site Name</h1>
                <div className="flex space-x-4">
                  <button className="bg-transparent text-black focus:outline-none">Page</button>
                  <button className="bg-transparent text-black focus:outline-none">Page</button>
                  <button className="bg-transparent text-black focus:outline-none">Page</button>
                  <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none ml-4">Button</button>
                </div>
              </header>
    </div>
  );
};

export default Header;

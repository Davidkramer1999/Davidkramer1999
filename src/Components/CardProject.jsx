import React from 'react';

const CardProject = ({ title, description, image, used, link }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 w-64 h-auto min-h-[500px] flex flex-col">
      <img className="w-full h-56 object-cover flex-shrink-0" src={image || ""} alt={`${title} screenshot`} />
      <div className="px-6 py-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="font-semibold text-xl mb-2 min-h-[3.5em]">{title}</div>
          <div className="text-base text-gray-700 min-h-[3em]">{description}</div>
        </div>
        <div className="pt-4 pb-2 min-h-[1.5em]">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{used}</span>
        </div>
        <div className="pt-4 pb-4">
          <a href={link} className="text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

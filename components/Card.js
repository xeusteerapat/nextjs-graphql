import React from 'react';

const Card = ({ beer }) => {
  return (
    <div className='md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64'>
      <img
        className='h-full w-full md:w-1/3  object-contain rounded-lg rounded-r-none pb-5/6 py-4'
        src={beer.image_url}
        alt={beer.name}
      />
      <div className='w-full md:w-2/3 px-4 py-4 bg-white rounded-lg'>
        <div className='flex items-center'>
          <h2 className='text-xl text-gray-800 font-medium mr-auto'>
            {beer.name}
          </h2>
          <p className='text-gray-800 font-semibold tracking-tighter'>
            ABV
            <i className='text-gray-600'> % </i>
            {beer.abv}
          </p>
        </div>
        <p className='text-sm text-gray-700 mt-4 mb-2'>{beer.description}</p>
        <div className='flex items-center justify-end top-auto'>
          <button className='bg-blue-600 text-gray-200 px-4 py-2 rounded mr-auto hover:underline'>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

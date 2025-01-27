import React from 'react'

const ImageContainer = ({imgSrc}) => {
  return (
    <div className="w-full sm:w-1/2 h-full min-h-screen hidden sm:block">
      <img src={imgSrc} alt="" className='size-full' />
    </div>
  );
}

export {ImageContainer};

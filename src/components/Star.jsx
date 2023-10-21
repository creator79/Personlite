import React from 'react'
import "../index.css";
function Star() {
  return (
    <>
     <div className='absolute top-10 w-96 h-96 bg-pink-600 rounded-full filter blur-2xl opacity-50 animate-blob'></div>
  <div className='absolute top-10 w-96 h-96 bg-pink-600 rounded-full filter blur-2xl opacity-50 animate-blob'></div>

  {Array.from({ length: 500 }).map((_, index) => (
    <div
      key={index}
      className='star-animation'
      style={{
        width: '1px',
        height: '1px',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    ></div>
  ))}

    </>
  )
}

export default Star
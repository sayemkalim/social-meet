import React from 'react'
import Profile from "../../assets/profile.jpg";

const MainLayout = () => {
  return (
    <div className="w-full lg:w-3/6 bg-white-100 p-4">
 {/* Stories */}
 <div style={{
    display: 'flex',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    padding: '0.5rem',
    borderBottom: '1px solid #d1d5db', 
    backgroundColor: '#ffffff', 
    scrollbarWidth: 'none', 
    padding:'20px'
  }}
  className="scrollbar-hidden space-x-4"
>
 {/* Replace with dynamic story data */}
  {Array(12).fill().map((_, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
        <img
          src={Profile} 
          alt={`Story ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="mt-2 text-xs text-center">sayem </span>
    </div>
  ))}
</div>
       </div>
  )
}

export default MainLayout
import React from 'react'

const nav = () => {
  return (
    <div className='bg-purple-300 h-screen w-screen'>
      <nav className='shadow-xl/40 flex justify-between items-center bg-pink-500 h-30 w-screen text-black px-2 py-3'>
        <h1 className='text-5xl text-shadow-pink-300 text-shadow-lg text-center px-3 font-semibold '>MindFlex</h1>
        <div className='flex  text-shadow-pink-300
        text-2xl
        text-shadow-md 
        justify-between 
        gap-5 px-3 
        font-semibold'>
            <h3>Home</h3>
            <h3>Dashboard</h3>
            <h3>Community</h3>
            <h3>AI Coaches</h3>
            <h3>Expert Advice</h3>
        </div>
      </nav>
    </div>
  )
}

export default nav

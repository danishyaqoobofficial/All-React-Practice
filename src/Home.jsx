import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div  className='flex items-center justify-center h-[100vh] w-full '>
        <Link to={'/dashboard'}>Go to Dashboard</Link>
    </div>
  )
}

export default Home
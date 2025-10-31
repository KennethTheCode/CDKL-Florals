import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Body from '../Components/Body'
import Explore from './Explore'


function Landing() {
    const [data, setData] = useState(null)
    
    useEffect(() => {
    fetch('http://http://127.0.0.1:8000')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])
  return (
    <div>
        <div className='flex h-screen-width'>
            <Sidebar/>
            <div className='h-screen-width flex-1'>
              <Navbar/>
              <Body/>
            </div>
        </div>
         <div className='text-red-500'>Hello</div>
        <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
    </div>
  )
}

export default Landing
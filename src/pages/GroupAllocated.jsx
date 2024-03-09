import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Groupallocate from './../components/Groupallocate';

const GroupAllocated = () => {
  return (
    <React.Fragment>
  
    <Navbar />
    <div className='flex'>
    <Sidebar />
    <Groupallocate/>
    </div>
    </React.Fragment>
  )
}

export default GroupAllocated
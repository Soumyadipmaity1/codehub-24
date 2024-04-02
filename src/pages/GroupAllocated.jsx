import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Groupallocate from './../components/Groupallocate';
import {useParams} from 'react-router-dom';

const GroupAllocated = () => {
  const {mygroupId} = useParams();
  return (
    <React.Fragment>
  
    <Navbar />
    <div className='flex'>
    <Sidebar />
    <Groupallocate/>
    <h1 className="text-indigo-600 m-12">User {mygroupId}</h1>
    </div>
    </React.Fragment>
  )
}

export default GroupAllocated
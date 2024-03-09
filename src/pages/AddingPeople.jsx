import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import AddPeople from '../components/AddPeople'

const AddingPeople = () => {
  return (
    <React.Fragment>
  
    <Navbar />
    <div className='flex'>
    <Sidebar />
    <AddPeople/>
    </div>
    </React.Fragment>
  )
}

export default AddingPeople
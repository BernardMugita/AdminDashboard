import React from 'react'
import '../list/List.scss'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Datatable from '../../Components/Datatable/Datatable'

const List = () => {
  return (
    <div className='List'>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="list-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="data-table">
          <Datatable/>
        </div>
      </div>
    </div>
  )
}

export default List;
import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import '../single/Single.scss'
import image from '../../Resources/index.jpeg'
import Chart from '../../Components/chart/Chart'
import List from '../../Components/Table/Table';

const Single = () => {
  return (
    <div className='Single'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="single-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="top">
          <div className="left">
          <div className="edit-button">Edit</div>
              <div className="label">
              <h1>User Details</h1>
              <img src={image} alt="" />
              </div>
              <div className="details">
                <h2>Patrick Kamau</h2>
                    <div className="detail-item">
                        <span className='itemKey'>Email:</span>
                        <span className='itemValue'>kamau@gmail.com</span>
                    </div>
                    <div className="detail-item">
                        <span className='itemKey'>Phone:</span>
                        <span className='itemValue'>+254724567890</span>
                    </div>
                    <div className="detail-item">
                        <span className='itemKey'>Address:</span>
                        <span className='itemValue'>BOX 247 Eastleigh</span>
                    </div>
                    <div className="detail-item">
                        <span className='itemKey'>Country:</span>
                        <span className='itemValue'>Kenya</span>
                    </div>
              </div>
          </div>
          <div className="right">
             <Chart aspect={2/1} title="Revenue for last 6 months"/>
          </div>
        </div>
        <div className="bottom">
            <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
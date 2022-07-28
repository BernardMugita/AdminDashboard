import React from 'react'
import '../new/New.scss'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import noImage from '../../Resources/noImage.jpg'
import { MdOutlineUpload } from 'react-icons/md'

const New = () => {
  return (
    <div className='New'>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="new-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="top">Create New</div>

        <div className="bottom">
            <div className="left">
                <img src={noImage} alt="" />
            </div>
            <div className="right">
                <form action="">
                <div className="formItem">
                        <label id='file'>
                        Photo:<MdOutlineUpload className="upload" id='file'/>
                          <input type="file" style={{display: "none"}}/>
                        </label>
                    </div>
                    <div className="formItem">
                        <label htmlFor="">
                          Username:<input type="text" placeholder='Kimani_Waeresho'/>
                        </label>
                    </div>
                    <div className="formItem">
                        <label htmlFor="">
                          First and Last Name:<input type="text" placeholder='Kimani Waeresho'/>
                        </label>
                    </div>
                    <div className="formItem">
                        <label htmlFor="">
                          Email:<input type="email" placeholder='KimaniWaeresho@gmail.com'/>
                        </label>
                    </div>
                    <div className="formItem">
                        <label htmlFor="">
                          Phone:<input type="text" placeholder='+254724561898'/>
                        </label>
                    </div>
                    <div className="formItem">
                        <label htmlFor="">
                          Address:<input type="text" placeholder='Box 247 Nairobi'/>
                        </label>
                    </div>
                    <div className="formItem">
                        <label htmlFor="">
                          Country:<input type="text" placeholder='Kenya'/>
                        </label>
                    </div>
                    <button>Update</button>
                </form>
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default New
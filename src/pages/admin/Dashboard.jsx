import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from '../../components/admin/Sidebar'
import HomeAdmin from '../../components/admin/HomeAdmin'

function Dashboard() {
    const [toggle,setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle);
    }
  return (
    <div className='bg-secondary min-vh-100'>
        <div className='row'>
            {toggle && <div className='col-2 bg-primary bg-gradient vh-100'>
                <Sidebar/>
            </div>}
            <div className='col'>
                <HomeAdmin Toggle={Toggle} />
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard
import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'
import KelolaKelas from '../../pages/admin/KelolaKelas'

function Sidebar() {
    const navigate = useNavigate ();
  return (
    <div className='bg-primary bg-gradient sidebar p-2'>
        <div className='m-2'>
            <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
            <span className='brand-name fs-4'>Belajar</span>
        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='bg-primary bg-gradient list-group-item py-2'>
                <i className='fs-5 me-3'></i>
                <span className='fs-5' onClick={() => navigate("/admin/dashboard")}>Dashboard</span>
            </a>
            <a className='bg-primary bg-gradient list-group-item py-2'>
                <i className='fs-4 me-3'></i>
                <span  className='fs-5' onClick={() => navigate("/admin/kelola-kelas")}>Kelola Kelas</span>
            </a>
            <a className='bg-primary bg-gradient list-group-item py-2'>
                <i className='fs-4 me-3'></i>
                <span className='fs-5' onClick={() => navigate("/admin/login-admin")}>Keluar</span>
            </a>
            
        </div>
    </div>
  )
}

export default Sidebar
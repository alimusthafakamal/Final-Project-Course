import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ResetPassword() {
    
  return (
    <div className='container-fluid'style={{width: '1440x', height: '950px', top: '-987px', left: '1575px'}}>
        <div className='row align-items-center'>
            <div className='col-md-6' >
                <form style={{width: '452px', height: '348px', top: '301px', left: '158px'}} >
                    <h2>Reset Password</h2>
                    <div className='mb-3'>
                        <label htmlFor='newPassword' className='form-tabel'>new password</label>
                        <input
                        type='password'
                        className='form-control rounded-pill'
                        id='newPassword'
                        placeholder='Enter your new password'
                        style={{width: '452px', height: '48px', top: '22px', left: '0px'}}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='reEnterPassword' className='form-label'>Re-enter New Password</label>
                        <input
                        type='password'
                        className='form-control rounded-pill'
                        id='reEnterPassword'
                        placeholder='re-enter your new password'
                        style={{width: '452px', height: '48px', top: '22px', left: '0px'}}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary rounded-pill' style={{width: '452px', height: '48px', top: '8px', left: '0px'}}>Reset Password</button>
                </form>
            </div>
            <div className='col-md-6'>
                <img 
                src="/images/img.jpg"
                alt='Side Image'
                className='img-fluid'
                />
            </div>
        </div>
    </div>
  )
}

export default ResetPassword
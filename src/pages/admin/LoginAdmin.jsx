import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginAdmin() {

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        emailAddress: email,
        password: password,
      });
      let config = {
        method: "post",
        url: `https://mooc.code69.my.id/auth/signin`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      
      const { token } = response.data;


      localStorage.setItem("token", token);
      console.log(token)
      // navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <div className='container-fluid' style={{ width: '1440px', height: '950px', top: '-987px', left: '1575px' }}>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img
            src="/images/img.jpg"
            alt='Side Image'
            className='img-fluid'
          />
        </div>
        <div className='col-md-6'>
          <form style={{ width: '452px', height: '348px', top: '301px', left: '158px' }}onSubmit={onSubmit}>
            <h2>Login Admin</h2>
            <div className='mb-3'>
              <label htmlFor='username' className='form-tabel'>Username</label>
              <input
                type='text'
                className='form-control rounded-pill'
                id='username'
                placeholder='Enter your username'
                style={{ width: '452px', height: '48px', top: '22px', left: '0px' }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input
                type='password'
                className='form-control rounded-pill'
                id='password'
                placeholder='Enter your password'
                style={{ width: '452px', height: '48px', top: '22px', left: '0px' }}
              />
            </div>
            <button type='submit' className='btn btn-primary rounded-pill' style={{ width: '452px', height: '48px', top: '8px', left: '0px' }}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin;

import React, { useState, useEffect } from 'react';
import Nav from '../admin/Nav';
import axios from 'axios'
function HomeAdmin({ Toggle }) {
  const [userCount, setUserCount] = useState();
  const [activeClassCount, setActiveClassCount] = useState();
  const [premiumClassCount, setPremiumClassCount] = useState();
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for Active Users
        const activeUserResponse = await axios.get('https://mooc.code69.my.id/dashboard-data');
        setUserCount (activeUserResponse.data.data.activeUser)
        setActiveClassCount (activeUserResponse.data.data.activeClass)
        setPremiumClassCount (activeUserResponse.data.data.premiumClass)
        
        const paymentResponse = await axios.get('https://mooc.code69.my.id/admin/payment-status')
        setPaymentData (paymentResponse.data.paymentStatusResponse)

        console.log('activeUserResponse', activeUserResponse)
        console.log('paymentResponse', paymentResponse)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount
  console.log('Payment Data',paymentData)
  return (
    <div className='px-3'>
      <Nav Toggle={Toggle} />
      <div className='container-fluid'>
        <div className='row g-3 gy-2 my-2'>
          {/* Active Users */}
          <div className="col-6 col-md-4 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{userCount}</h3>
                <p className='fs-5'>Active User</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>

          {/* Active Classes */}
          <div className="col-6 col-md-4 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{activeClassCount}</h3>
                <p className='fs-5'>Active Class</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>

          {/* Premium Classes */}
          <div className="col-6 col-md-4 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{premiumClassCount}</h3>
                <p className='fs-5'>Premium Class</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>
        </div>
      </div>
      <h2>Status Pembayaran</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Kategori</th>
            <th scope="col">Kelas Premium</th>
            <th scope="col">Status</th>
            <th scope="col">Metode Pembayaran</th>
            <th scope="col">Tanggal Bayar</th>
          </tr>
        </thead>
        <tbody>
          {paymentData?.map((payment, index) => (
            <tr key={index}>
              <th scope="row">{payment.id}</th>
              <td>{payment.category}</td>
              <td>{payment.premiumCourse}</td>
              <td>{payment.status}</td>
              <td>{payment.paymentMethod}</td>
              <td>{payment.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeAdmin;

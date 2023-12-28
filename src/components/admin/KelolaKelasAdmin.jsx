import React, { useState, useEffect } from 'react';
import Nav from '../admin/Nav';
import axios from 'axios';



function KelolaKelasAdmin({ Toggle }) {
  const [userCount, setUserCount] = useState();
  const [activeClassCount, setActiveClassCount] = useState();
  const [premiumClassCount, setPremiumClassCount] = useState();
  const [courseItems, setCourseItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for Active Users
        const activeUserResponse = await axios.get('https://mooc.code69.my.id/dashboard-data');
        setUserCount (activeUserResponse.data.data.activeUser)
        setActiveClassCount (activeUserResponse.data.data.activeClass)
        setPremiumClassCount (activeUserResponse.data.data.premiumClass)

        const classesResponse = await axios.get ('https://mooc.code69.my.id/course');
        setCourseItems(classesResponse.data.data.courseList);
        console.log('Course Data' , classesResponse)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  const deleteClass = async (courseList) => {
    try {
      await fetch(`https://mooc.code69.my.id/course/${courseList}`, {
        method: 'DELETE',
      });

      // Fetch updated data after deleti

    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

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
      <h2>Kelola Kelas</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Kode Kelas</th>
            <th scope="col">Kategori</th>
            <th scope="col">Nama Kelas</th>
            <th scope="col">Tipe Kelas</th>
            <th scope="col">Level</th>
            <th scope="col">Harga Kelas</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courseItems) &&
          courseItems.map((courseItems) => (
            <tr key={courseItems}>
              <td>{courseItems.courseCode}</td>
              <td>{courseItems.courseCategory}</td>
              <td>{courseItems.courseName}</td>
              <td>{courseItems.typePremium}</td>
              <td>{courseItems.courseLevel}</td>
              <td>{courseItems.coursePrice}</td>
              <td>
                <button className="btn btn-warning">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClass(courseItems)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KelolaKelasAdmin;

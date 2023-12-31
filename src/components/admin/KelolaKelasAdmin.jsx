import React, { useState, useEffect } from 'react';
import Nav from '../admin/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';

function KelolaKelasAdmin({ Toggle }) {
  const [userCount, setUserCount] = useState();
  const [activeClassCount, setActiveClassCount] = useState();
  const [premiumClassCount, setPremiumClassCount] = useState();
  const [courseItems, setCourseItems] = useState([]);
  const [newCourse, setNewCourse] = useState({
    teacher: '',
    courseCode: '',
    courseName: '',
    courseCategory: '',
    typePremium: '',
    courseLevel: '',
    coursePrice: '',
  });
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const activeUserResponse = await axios.get('https://mooc.code69.my.id/dashboard-data');
      setUserCount(activeUserResponse.data.data.activeUser);
      setActiveClassCount(activeUserResponse.data.data.activeClass);
      setPremiumClassCount(activeUserResponse.data.data.premiumClass);

      const classesResponse = await axios.get('https://mooc.code69.my.id/course');
      setCourseItems(classesResponse.data.data.courseList);
      console.log('Course Data', classesResponse);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteClass = async (courseCode) => {
    try {
      await axios.delete(`https://mooc.code69.my.id/course/${courseCode}`);
      fetchData(); // Fetch updated data after deletion
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const addCourse = async () => {
    try {
      await axios.post('https://mooc.code69.my.id/course', newCourse);
      fetchData(); // Fetch updated data after adding a new course
      setNewCourse({
        teacher: '',
        courseCode: '',
        courseName: '',
        courseCategory: '',
        courseLevel: '',
        coursePrice: '',
        courseAbout: '',
        courseFor: '',
        urlTele: '',
        typePremium: '',
      });
      setShowAddCourseModal(false); // Close the modal after adding a new course
    } catch (error) {
      console.error('Error adding course:', error);
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
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <h2>Kelola Kelas</h2>
          </div>
          <div className='col'>
            <button className="btn btn-success mb-3" onClick={() => setShowAddCourseModal(true)}>
              Tambah Course
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='table-responsive'>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Guru</th>
                    <th scope="col">Kode Kelas</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Level Kelas</th>
                    <th scope="col">Harga Kelas</th>
                    <th scope="col">Tentang Kelas</th>
                    <th scope="col">Kelas untuk</th>
                    <th scope="col">Link telegram</th>
                    <th scope="col">Tipe Kelas</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(courseItems) &&
                    courseItems.map((courseItem) => (
                      <tr key={courseItem.courseCode}>
                        <td>{courseItem.teacher}</td>
                        <td>{courseItem.courseCode}</td>
                        <td>{courseItem.courseCategory}</td>
                        <td>{courseItem.courseLevel}</td>
                        <td>{courseItem.coursePrice}</td>
                        <td>{courseItem.courseAbout}</td>
                        <td>{courseItem.courseFor}</td>
                        <td>{courseItem.urlTele}</td>
                        <td>{courseItem.typePremium}</td>
                        <td>
                          <button className="btn btn-warning">Edit</button>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteClass(courseItem.courseCode)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Add Course Modal */}
      {showAddCourseModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tambah Course</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddCourseModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  {/* Form fields for adding a new course */}
                  <div className="mb-3">
                    <label htmlFor="teacher" className="form-label">Nama Guru</label>
                    <input type="text" className="form-control" id="teacher" name="teacher" value={newCourse.teacher} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseCode" className="form-label">Kode Kelas</label>
                    <input type="text" className="form-control" id="courseCode" name="courseCode" value={newCourse.courseCode} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseCategory" className="form-label">Kategori</label>
                    <input type="text" className="form-control" id="courseCategory" name="courseCategory" value={newCourse.courseCategory} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseLevel" className="form-label">Level Kelas</label>
                    <input type="text" className="form-control" id="courseLevel" name="courseLevel" value={newCourse.courseLevel} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="coursePrice" className="form-label">Harga Kelas</label>
                    <input type="text" className="form-control" id="coursePrice" name="coursePrice" value={newCourse.coursePrice} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseAbout" className="form-label">Tentang Kelas</label>
                    <input type="text" className="form-control" id="courseAbout" name="courseAbout" value={newCourse.courseAbout} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseFor" className="form-label">Kelas Untuk</label>
                    <input type="text" className="form-control" id="courseFor" name="courseFor" value={newCourse.courseFor} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="urlTele" className="form-label">Link telegram</label>
                    <input type="hyperlink" className="form-control" id="urlTele" name="urlTele" value={newCourse.urlTele} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="typePremium" className="form-label">Tipe Kelas</label>
                    <input type="text" className="form-control" id="typePremium" name="typePremium" value={newCourse.typePremium} onChange={handleInputChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddCourseModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={addCourse}>Tambah</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KelolaKelasAdmin;

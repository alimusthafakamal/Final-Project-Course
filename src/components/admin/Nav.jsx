import React, { useState, useEffect } from 'react';


function Nav({ Toggle }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://mooc.code69.my.id/course")
      .then((Response) => Response.json())
      .then((json) => {
        const results = ((data) => {
          return {
            courseCode,
            courseName,
            courseCategory,
            courseLevel,
            coursePrice,
            courseAbout,
            courseFor,
            urlTele,
            teacher,
            numberOfModule,
            typePremium,
          };
        });
        console.log(results);
      });
  });
  
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Check if courses is an array before filtering
    if (Array.isArray(courses)) {
      // Filter courses based on the search term
      const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      console.error('Courses is not an array:', courses);
    }
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparant">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <i className="navbar-brand bi bi-justify-left f-4" onClick={Toggle}>
          Hi, Admin!
        </i>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form className="ms-auto d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

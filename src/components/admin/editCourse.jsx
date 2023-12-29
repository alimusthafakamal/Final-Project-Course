// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function EditCourse({ show, handleClose, handleEditCourse}) {
//     const [selectedCourse, setSelectedCourse] = useState(null);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedCourse((prevCourse) => ({
//       ...prevCourse,
//       [name]: value,
//     }));
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Course</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Course Code</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter course code"
//               name="courseCode"
//               value={courseCode}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Course Category</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter course category"
//               name="courseCategory"
//               value={courseCategory}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           {/* Add more Form.Group for other fields */}

//           <Button variant="primary" onClick={handleEditCourse}>
//             Save Changes
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default EditCourse;

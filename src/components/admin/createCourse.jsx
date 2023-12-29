// import { useState } from 'react';

// //import component Bootstrap React
// import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

// //import axios
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';




// function createCourse() {

//     const [course, setCourse] = useState('');
//     const [showNotification, setShowNotification] = useState(false);
//     const [validation, setValidation] = useState({});

//     //history
//     const Navigate = useNavigate();

//     //method "storePost"
//     const addCourse = () => {
//         const newCourse ={course, complete: false}

//         fetch('https://mooc.code69.my.id/course', {
//             method:'POST' ,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newCourse),
//         }).then(() => {
//             setCourse('');
//         });

//         setShowNotification(true);
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 2000);

//         setCourse('');
        
    
        
//     };

//     return (
//         <Container className="mt-3">
//             <Row>
//                 <Col md="{12}">
//                     <Card className="border-0 rounded shadow-sm">
//                         <Card.Body>
                        
//                             {
//                                 validation.errors &&
//                                     <Alert variant="danger">
//                                         <ul class="mt-0 mb-0">
//                                             { validation.errors.map((error, index) => (
//                                                 <li key={index}>{ `${error.param} : ${error.msg}` }</li>
//                                             )) }
//                                         </ul>
//                                     </Alert>
//                             }
                            
//                             <Form onSubmit={ addCourse }>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>COURSE NAME </Form.Label>
//                                     <Form.Control type="text"  placeholder="masukkan nama kelas" />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label>COURSE CATEGORY</Form.Label>
//                                     <Form.Control as="textarea" rows={3}  placeholder="Masukkan Kategori" />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label>COURSE LEVEL</Form.Label>
//                                     <Form.Control as="textarea" rows={3}  placeholder="Masukkan level kelas" />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label>COURSE PRICE</Form.Label>
//                                     <Form.Control as="textarea" rows={3}  placeholder="Masukkan Harga Kelas" />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label>COURSE DETAIL</Form.Label>
//                                     <Form.Control as="textarea" rows={3}  placeholder="Masukkan detail kelas" />
//                                 </Form.Group>

//                                 <Button variant="primary" type="submit">
//                                     SIMPAN
//                                 </Button>
//                             </Form>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default createCourse;
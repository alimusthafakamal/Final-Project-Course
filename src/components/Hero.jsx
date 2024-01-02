import React, { useEffect, useState } from "react";
import HeroPoster from "../../public/hero-poster.svg";
import { useNavigate } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

const Hero = () => {
  const navigate = useNavigate();

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const token = localStorage.getItem("token");

  // const handleorder = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const token = localStorage.getItem("token");

  //     let config = {
  //       method: "post",
  //       url: `https://mooc.code69.my.id/order`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //         accept: "*/*",
  //       },
  //       data: { courseCode: String(props.code) },
  //     };

  //     const response = await axios.request(config);
  //     if (response.status == 200) {
  //       console.log(response.data);
  //       toast.success("berhasil");
  //       navigate(`/pembayaran/${props.code}`);
  //     } else {
  //       console.log(response.status);
  //       console.log(response.message);
  //     }
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       toast.error(error.response.data.message);
  //     }
  //     toast.error(error.message);
  //   }
  // };
  // const ModalHandleLogin = () => {
  //   Authorization: `Bearer ${token}`;

  //   if (token !== null) {
  //     navigate("/topik-kelas");
  //   } else {
  //     handleShow;
  //   }
  // };

  return (
    <section className="hero">
      <div className="row d-flex align-items-center bg-dark-blue100">
        <div className="col-md ">
          <img className="hero-img img-fluid" src={HeroPoster} />
        </div>
        <div className="col-md d-flex align-items-center justify-content-md-start fw-bold">
          <div className="">
            <span className="text-white" style={{ fontSize: "24px" }}>
              Belajar
              <br /> dari Praktisi Terbaik!
            </span>
            <div className="">
              <button
                className="btn bg-white btn-sm fw-bold text-center my-3 rounded-pill "
                style={{
                  fontSize: "16px",
                  width: "240px",
                  radius: "10px",
                  color: "#6148ff",
                }}
                // onClick={ModalHandleLogin}
                onClick={() => navigate("/topik-kelas")}
              >
                IKUTI KELAS
              </button>
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Anda Belum Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>Silahkan login terlebih dahulu</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="" style={{marginTop: "100px"}}>
    //   <div className="fw-bold row align-items-md-stretch">
    //     <div className="col-md-6">
    //       <div className="h-100 p-5 text-bg-dark rounded-3">
    //         <h2>Change the background</h2>
    //         <p>
    //           Swap the background-color utility and add a `.text-*` color
    //           utility to mix up the jumbotron look. Then, mix and match with
    //           additional component themes and more.
    //         </p>
    //         <button className="btn btn-outline-light" type="button">
    //           Example button
    //         </button>
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="h-100 p-5 bg-body-tertiary border rounded-3">
    //         <h2>Add borders</h2>
    //         <p>
    //           Or, keep it light and add a border for some added definition to
    //           the boundaries of your content. Be sure to look under the hood at
    //           the source HTML here as we've adjusted the alignment and sizing of
    //           both column's content for equal-height.
    //         </p>
    //         <button className="btn btn-outline-secondary" type="button">
    //           Example button
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;

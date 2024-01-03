import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const KursusPopuler = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [active, setActive] = useState(false);

  const ActiveButton = () => {
    setActive(!active);
  };

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get("https://mooc.code69.my.id/course")
      .then((response) => {
        setCourse(response.data?.data?.courseList);
      })
      .catch((error) => console.log(error.response));
  };
  useEffect(() => {
    fetchData();
  }, [navigate, token]);

  const CourseList = () => {
    if (course === null) {
      return <div className="fw-bold">Data tidak ditemukan</div>;
    }

    return course?.map((data, i) => {
      return (
        <div key={i} className="col d-flex gap-4 mb-4">
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Kamu belum login...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div centered className="d-grid justify-content-center ">
                <span className="fw-bold">
                  Anda harus Login terlebih dahulu untuk mendapatkan fitur
                  lengkap dari Binar Course .
                </span>
                <span className="mt-4">
                  <div>
                    <Icon
                      icon="solar:login-3-bold-duotone"
                      width="100"
                      Color="#6148ff"
                    />
                    <span className="ms-3">
                      Silahkan login
                      <a
                        href="/login"
                        className="text-decoration-none fw-bold ms-1 "
                      >
                        disini
                      </a>
                    </span>
                  </div>
                  <div>
                    <Icon
                      className="mt-3"
                      icon="bxs:registered"
                      width="100"
                      Color="#6148ff"
                    />
                    <span className="ms-3">
                      Silahkan daftar
                      <a
                        href="/login"
                        className="text-decoration-none fw-bold ms-1 "
                      >
                        disini
                      </a>
                    </span>
                  </div>
                </span>
              </div>
            </Modal.Body>
          </Modal>
          <Card
            className="card"
            style={{ borderRadius: "1.3rem" }}
            onClick={() => {
              if (localStorage.getItem("token") === null) {
                handleShow();
              } else {
                navigate(`/detail-kelas/${data.courseCode}`);
              }
            }}
          >
            <Card.Img className="card-img" src={KursusPopulerImage} />
            <Card.Body className="row">
              <div className="col-8 d-flex align-items-center justify-content-between">
                <Card.Subtitle
                  className="dark-blue100 fw-bold"
                  style={{ fontSize: "10px" }}
                >
                  {data.courseCategory}
                </Card.Subtitle>
              </div>
              {/* <div className="col-4 d-flex align-items-center justify-content-end">
                <span className="fw-bold d-flex" style={{ marginTop: "-12px" }}>
                  <Icon
                    icon="ic:round-star"
                    width="12"
                    height="12"
                    color="#F9CC00"
                  />
                  <p style={{ fontSize: "10px" }}>4.7</p>
                </span>
              </div> */}
              <div className="mt-2">
                <Card.Title
                  className="kursus-populer-title fw-bold"
                  style={{ fontSize: "12px" }}
                >
                  {data.courseName}
                </Card.Title>
                <Card.Subtitle className="fw-bold" style={{ fontSize: "8px" }}>
                  {data.teacher}
                </Card.Subtitle>
              </div>
              <Card.Text
                className="d-flex justify-content-between fw-bold"
                style={{ gap: "3px", padding: "6px 0 6px 0" }}
              >
                <span
                  className="col-4"
                  style={{
                    gap: "4px",
                    marginLeft: "10px",
                    fontSize: "8px",
                  }}
                >
                  <Icon
                    icon="mdi:badge-outline"
                    color="#73CA5C"
                    width="14"
                    height="14"
                  />
                  <a style={{ color: "#6148FF" }}>Intermediate Level</a>
                </span>
                <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                  <Icon
                    icon="clarity:book-line"
                    color="#73CA5C"
                    width="14"
                    height="14"
                  />{" "}
                  <a>{data.numberOfModule} Modul</a>
                </span>
                {/* <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                  <Icon
                    icon="ri:time-fill"
                    color="#73CA5C"
                    width="14"
                    height="14"
                  />
                  {/* <a>{data.courseAbout} </a> */}
                {/* </span> */}
              </Card.Text>
              <div
                className="col-8 btn btn-sm rounded-pill text-white fw-bold align-items-center "
                style={{
                  gap: "5px",
                  marginTop: "-15px",
                  marginLeft: "12px",
                  backgroundColor: "#489CFF",
                  border: "none",
                  width: "143px",
                  padding: ".10rem",
                }}
              >
                <Icon icon="fluent:premium-20-filled" className="light-blue5" />
                <span
                  className="me-3 ms-1 light-blue5"
                  style={{ fontSize: "10px" }}
                >
                  Beli
                </span>
                <span className="light-blue5 " style={{ fontSize: "10px" }}>
                  Rp {data.coursePrice}
                </span>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="kursus-populer">
      <div className="container my-3">
        <div className="d-flex justify-content-between mb-2">
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Kursus Populer
          </h2>
          <button
            className="btn d-flex align-items-center gap-2"
            style={{ fontSize: "12px", background: "transparent" }}
          >
            <span
              className="fw-bold dark-blue100 justify-content-right"
              onClick={() => {
                if (localStorage.getItem("token") === null) {
                  handleShow();
                } else {
                  navigate("/topik-kelas");
                }
              }}
            >
              Lihat Semua
            </span>
          </button>
        </div>
        <div className="row row-cols-auto  d-flex mb-2 ">
          <div className="col align-items-center d-flex gap-4">
            <button
              className="btn rounded-pill btn-sm px-5"
              onClick={() => {
                ActiveButton;
              }}
            >
              All
            </button>

            <button
              type="button"
              className="btn  rounded-pill btn-sm px-5 "
              onClick={() => {
                ActiveButton;
              }}
            >
              UI/UX Design
            </button>
            <button
              className="btn rounded-pill btn-sm px-5"
              onClick={() => {
                ActiveButton;
              }}
            >
              Android Development
            </button>

            <button
              className="btn rounded-pill btn-sm px-4"
              onClick={() => {
                ActiveButton;
              }}
            >
              Web Development
            </button>
            <button
              className="btn rounded-pill btn-sm px-4"
              onClick={() => {
                ActiveButton;
              }}
            >
              IOS Development
            </button>

            <button
              className="btn rounded-pill btn-sm px-4"
              onClick={() => {
                ActiveButton;
              }}
            >
              Product Management
            </button>
          </div>
        </div>
        <div className="listing row row-cols-3 mt-4 justify-content-start align-items-center">
          <CourseList />
        </div>
      </div>
    </div>
  );
};

export default KursusPopuler;

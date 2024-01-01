import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KursusPopuler = () => {
  const navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [course, setCourse] = useState([]);

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

  const FilterCourse = async (dataKategori) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(
        `https://mooc.code69.my.id/course?page=1${[
          ...dataKategori.map((e) => `&categories=${e}`),
        ].join("")}`
      )
      .then((response) => {
        console.log("response filter ===>", response);
        setCourse(response.data?.data?.courseList);
      })
      .catch((error) => {
        setCourse(null);
        console.log("ERROR FILTER", error.response);
      });
  };

  const CourseList = () => {
    if (course === null) {
      return <div className="fw-bold">Data tidak ditemukan</div>;
    }

    return course?.map((data, i) => {
      return (
        <div key={i} className="col d-flex gap-4">
          <Card className="card" style={{ borderRadius: "1.3rem" }}>
            <Card.Img className="card-img" src={KursusPopulerImage} />
            <Card.Body className="row">
              <div className="col-8 d-flex align-items-center justify-content-between">
                <Card.Subtitle
                  className="dark-blue100 fw-bold"
                  style={{ fontSize: "10px", marginTop: "-24px" }}
                >
                  {data.courseCategory}
                </Card.Subtitle>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-end">
                <span className="fw-bold d-flex" style={{ marginTop: "-12px" }}>
                  <Icon
                    icon="ic:round-star"
                    width="12"
                    height="12"
                    color="#F9CC00"
                  />
                  <p style={{ fontSize: "10px" }}>4.7</p>
                </span>
              </div>
              <div style={{ marginTop: "-12px" }}>
                <Card.Title
                  className="kursus-populer-title fw-bold"
                  style={{ fontSize: "10px" }}
                >
                  {data.courseName}
                </Card.Title>
                <Card.Subtitle className="fw-bold" style={{ fontSize: "8px" }}>
                  {data.teacher}
                </Card.Subtitle>
              </div>
              <Card.Text
                className="d-flex justify-content-between fw-bold"
                style={{ gap: "3px", padding: "3px 0 3px 0" }}
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
                  <a>{data.numberOfModule}</a>
                </span>
                <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                  <Icon
                    icon="ri:time-fill"
                    color="#73CA5C"
                    width="14"
                    height="14"
                  />
                  <a>{data.courseAbout} </a>
                </span>
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
            <span className="fw-bold dark-blue100 justify-content-right">
              Lihat Semua
            </span>
          </button>
        </div>
        <div className="row row-cols-auto  d-flex mb-2 ">
          <div className="col align-items-center d-flex gap-4">
            <button className="btn rounded-pill btn-sm px-5">All</button>

            <button
              type="button"
              className="btn rounded-pill btn-sm"
              data-bs-toggle="button"
            >
              UI/UX Design
            </button>
            <button className="btn rounded-pill btn-sm">
              Android Development
            </button>

            <button className="btn rounded-pill btn-sm">Web Development</button>
            <button className="btn rounded-pill btn-sm">IOS Development</button>

            <button className="btn rounded-pill btn-sm">
              Product Management
            </button>
          </div>
        </div>
        <div className="listing row row-cols-3 mt-4 justify-content-center align-items-center">
          <CourseList />
        </div>
      </div>
    </div>
  );
};

export default KursusPopuler;

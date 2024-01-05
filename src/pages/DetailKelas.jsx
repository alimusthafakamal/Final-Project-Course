import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Icon } from "@iconify/react";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import BeliPremium from "../components/BeliPremium";
import axios from "axios";

const DetailKelas = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const { url, subjectCode } = useParams();

  const Kembali = () => {
    navigate("/topik-kelas");
  };

  const [modalShow, setModalShow] = useState(false);
  const [course, setCourse] = useState({});
  const [video, setVideo] = useState([]);
  // const [videoData, setVideoData] = useState(null);

  // const urlVideo = async () => {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   await axios
  //     .put(
  //       `https://mooc.code69.my.id/subject?subjectCode=${subjectCode}$url=${url} `
  //     )
  //     .then((response) => {
  //       setVideoData(response.data?.data?.detail);
  //     })
  //     .catch((error) => console.log("error fetching video: ", error));
  // };
  // if (!videoData) {
  //   console.log("tidak ada data video");
  // }

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(`https://mooc.code69.my.id/course-detail?courseCode=${code} `)
      .then((response) => {
        setCourse(response.data.data);
      })
      .catch((error) => console.log(error.response));
  };
  useEffect(() => {
    fetchData();
  }, [navigate]);
  // const datavideo = video.subjects[0].detail[0].url;
  // console.log(datavideo);
  // console.log(course);
  // console.log(course?.subjects[0]?.detail[0]?.url);
  console.log(course);
  // console.log(course.subjects[0]);
  useEffect(() => {
    const handleuser = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        let config = {
          method: "get",
          url: `https://mooc.code69.my.id/course-detail?courseCode=${code}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.request(config);
        if (response.status == 200) {
          console.log(response);
          setVideo(response.data.data);
          console.log(response.status);
          console.log(response.message);
        } else {
          console.log(response.status);
          console.log(response.message);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };
    handleuser();
  }, []);
  console.log(video);
  // console.log(video.subjects[0]);

  return (
    <>
      <NavigationBar />
      <BeliPremium
        onHide={() => setModalShow(false)}
        code={code}
        show={modalShow}
      />
      <div className="detail-kelas">
        <Container>
          <div className="title-course d-flex">
            <span
              className="d-flex fw-bold align-items-center gap-2 mt-4"
              style={{ cursor: "pointer" }}
              onClick={Kembali}
            >
              <Icon icon="formkit:arrowleft" />
              <span style={{ padding: "" }}>Kelas Lainnya</span>
            </span>
          </div>
          <div className="row d-flex justify-content-md-center">
            <div className="col-6">
              <div className="d-grid">
                <Card className="border border-0 bg-transparent">
                  <Card.Body
                    className="row d-flex"
                    onClick={() => setModalShow(true)}
                  >
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                      <div
                        className="dark-blue100 fw-bold"
                        style={{ fontSize: "20px", lineHeight: "14px" }}
                      >
                        {course.courseCategory}
                      </div>
                    </div>
                    <div className="deets">
                      <Card.Title
                        className="kursus-populer-title fw-bold mt-3"
                        style={{ fontSize: "14px" }}
                      >
                        {course.courseName}
                      </Card.Title>
                      <Card.Subtitle
                        className="fw-bold"
                        style={{ fontSize: "10px" }}
                      >
                        by {course.teacher}
                      </Card.Subtitle>
                    </div>
                    <div
                      className="deets d-flex fw-bold"
                      style={{ gap: "3px", padding: "3px 0 3px 0" }}
                    >
                      <span
                        className="col-3"
                        style={{
                          gap: "4px",
                          marginLeft: "10px",
                          fontSize: "12px",
                        }}
                      >
                        <Icon
                          icon="mdi:badge-outline"
                          color="#73CA5C"
                          width="14"
                          height="14"
                        />
                        <a style={{ color: "#6148FF" }}>{course.courseLevel}</a>
                      </span>
                      <span
                        className="col-2"
                        style={{ gap: "4px", fontSize: "12px" }}
                      >
                        <Icon
                          icon="clarity:book-line"
                          color="#73CA5C"
                          width="14"
                          height="14"
                        />{" "}
                        <a>6 Modul</a>
                      </span>
                      <span
                        className="col-3"
                        style={{ gap: "4px", fontSize: "12px" }}
                      >
                        <Icon
                          icon="ri:time-fill"
                          color="#73CA5C"
                          width="14"
                          height="14"
                        />{" "}
                        <a>120 Menit </a>
                      </span>
                    </div>
                  </Card.Body>
                  <div
                    className="btn d-flex rounded-pill text-center text-white fw-bold justify-content-center align-items-center"
                    style={{
                      background: "#73CA5C",
                      boxShadow: "0px 3px 2px 0px #0000001A",
                      width: "269px",
                      padding: "5px",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href={course.urlTele}
                        target="_blank"
                      >
                        Join Grup Telegram
                      </a>
                    </span>
                    <Icon icon="gridicons:chat" style={{}} className="" />
                  </div>
                </Card>
                <div className=" col-6">
                  <div
                    className="video d-grid ms-2 "
                    style={{ marginTop: "100px" }}
                  >
                    <div className="justify-content-center d-flex">
                      {/* {url !== null ? ( */}
                      <iframe
                        className="video rounded-5 border-5 border-secondary-subtle border-bottom border-end object-fit-md-scale "
                        width={700}
                        height={500}
                        // src={urlVideo}
                        src={`https://youtube.com/embed/rRSK7n4oeew`}
                        title={`youtube player`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      {/* ) : (
                        <div>Tidak ada video</div>
                      )} */}
                    </div>
                    <div className="desc-tentang mt-5">
                      <span
                        className="col-6 fw-bold"
                        style={{ fontSize: "20px" }}
                      >
                        Tentang Kelas
                      </span>
                      <p
                        className="mt-2 "
                        style={{ fontSize: "14px", textIndent: "300x" }}
                      >
                        {course.courseAbout}
                      </p>
                      <div className="desc-for mt-5">
                        <span
                          className="col-6 fw-bold"
                          style={{ fontSize: "20px" }}
                        >
                          Kelas ini Ditujukan Untuk
                        </span>
                        <p className="mt-2" style={{ fontSize: "14px" }}>
                          <span className="mb-2">{course.courseFor}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-auto d-flex justify-content-center">
              <div className="materi-belajar">
                <div className="materi-body mx-4 my-3">
                  <div className="materi-progres row d-flex justify-content-between align-items-center ">
                    <span
                      className="col-md-6 fw-bold"
                      style={{ fontSize: "20px" }}
                    >
                      Materi Belajar
                    </span>
                    <span className="col-md-6 d-flex justify-content-end gap-2">
                      <Icon
                        icon="mdi:progress-check"
                        style={{ color: "#73CA5C" }}
                        className=""
                        width="16"
                        height="16"
                      />
                      <div className="w-100">
                        <div
                          className="progress rounded-pill"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ background: "#D9D9D9" }}
                        >
                          <div
                            className="progress-bar overflow-visible align-items-start rounded-pill bg-dark-blue100"
                            style={{ width: "60%", fontSize: "10px" }}
                          >
                            <span className="ms-1">60% complete</span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div className="jenis-materi">
                    <div className="chapter">
                      <div>
                        <ul className="list-group list-group-numbered list-group-flush gap-0 row-gap-3  ">
                          <div className="header-chapter d-flex justify-content-between">
                            <div className="intro-chapter">
                              Chapter 1 - Pendahuluan
                            </div>
                            <div className="durasi-chapter">60 menit</div>
                          </div>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">
                              tujuan mengikuti kelas design system
                            </span>
                            <Icon
                              icon="carbon:play-filled"
                              width="18"
                              height="18"
                              className="col "
                              style={{ color: "#6148ff" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">
                              pengenalan Design System
                            </span>
                            <Icon
                              icon="carbon:play-filled"
                              width="18"
                              height="18"
                              className="col "
                              style={{ color: "#73CA5C" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">
                              Contoh dalam membangun design system
                            </span>
                            <Icon
                              icon="carbon:play-filled"
                              width="18"
                              height="18"
                              className="col "
                              style={{ color: "#73CA5C" }}
                            />
                          </li>
                          <div className="header-chapter d-flex justify-content-between">
                            <div className="intro-chapter">
                              Chapter 2 - Memulai Desain
                            </div>
                            <div className="durasi-chapter">120 menit</div>
                          </div>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">color pallete</span>
                            <Icon
                              icon="bxs:lock"
                              width="16"
                              height="20"
                              className="col "
                              style={{ color: "#D9D9D9" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">
                              Typography, layout, dan grid
                            </span>
                            <Icon
                              icon="bxs:lock"
                              width="16"
                              height="20"
                              className="col "
                              style={{ color: "#D9D9D9" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">membuat components </span>
                            <Icon
                              icon="bxs:lock"
                              width="16"
                              height="20"
                              className="col "
                              style={{ color: "#D9D9D9" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">membuat components </span>
                            <Icon
                              icon="bxs:lock"
                              width="16"
                              height="20"
                              className="col "
                              style={{ color: "#D9D9D9" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">membuat components </span>
                            <Icon
                              icon="bxs:lock"
                              width="16"
                              height="20"
                              className="col "
                              style={{ color: "#D9D9D9" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">membuat components </span>
                            <Icon
                              icon="bxs:lock"
                              width="16"
                              height="20"
                              className="col "
                              style={{ color: "#D9D9D9" }}
                            />
                          </li>
                          <li className="list-group-item row d-flex align-items-center list-materi">
                            <span className="col-10">membuat components </span>
                            <Icon
                              icon="bxs:lock"
                              width="16"
                              height="20"
                              className="col "
                              style={{ color: "#D9D9D9" }}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DetailKelas;

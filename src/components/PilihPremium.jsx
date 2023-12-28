import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Filter from "./Filter";
import Card from "react-bootstrap/Card";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PilihPremium = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  //input filter
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [kategori, setKategori] = useState([]);
  const [level, setLevel] = useState([]);
  const [premium, setPremium] = useState(["PREMIUM", "FREE"]);

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

  console.log("course ", course);
  const FilterCourse = async (dataKategori, dataLevel, dataPremium) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(
        `https://mooc.code69.my.id/course?page=1${[
          ...dataKategori.map((e) => `&categories=${e}`),
        ].join("")}${[...dataLevel.map((e) => `&courseLevel=${e}`)].join("")}${[
          ...dataPremium.map((e) => `&isPremium=${e}`),
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

  const btnPremium = premium;

  const CourseList = () => {
    if (course === null) {
      return <div className="fw-bold">Data tidak ditemukan</div>;
    }

    return course
      ?.filter((e) => e.courseName.includes(query))
      ?.map((data, i) => {
        return (
          <div key={i} className="col d-flex gap-4 mb-4">
            <Card
              className="card border border-0"
              style={{ borderRadius: "1.3rem", cursor: "pointer" }}
              onClick={() => navigate("/detail-kelas")}
            >
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
                  <span
                    className="fw-bold d-flex"
                    style={{ marginTop: "-12px" }}
                  >
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
                  <Card.Subtitle
                    className="fw-bold"
                    style={{ fontSize: "8px" }}
                  >
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
                    <a style={{ color: "#6148FF" }}>{data.courseLevel}</a>
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
                    />{" "}
                    <a>{data.courseFor} </a>
                  </span>
                </Card.Text>
                {btnPremium ? (
                  <div
                    className="btn btn-sm d-flex rounded-pill text-center text-white fw-bold justify-content-center align-items-center"
                    style={{
                      marginTop: "-15px",
                      marginLeft: "12px",
                      backgroundColor: "#489CFF",
                      border: "none",
                      width: "94px",
                      height: "18px",
                    }}
                  >
                    <Icon
                      icon="fluent:premium-12-filled"
                      className="light-blue5"
                    />
                    <span
                      className="me-3 ms-1 light-blue5"
                      style={{ fontSize: "10px" }}
                    >
                      PREMIUM
                    </span>
                  </div>
                ) : (
                  <div
                    className="btn d-flex rounded-pill fw-bold justify-content-center align-items-center bg-dark-blue100"
                    style={{
                      marginLeft: "12px",
                      border: "none",
                      width: "94px",
                      height: "18px",
                    }}
                  >
                    <span className="light-blue5" style={{ fontSize: "10px" }}>
                      Mulai Kelas
                    </span>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        );
      });
  };

  return (
    <>
      <NavigationBar />
      <div className="kelas-saya">
        <div
          className="container "
          style={{ width: "1000px", padding: "5px 0px 5px 0px" }}
        >
          <div className="d-flex justify-content-between mt-5">
            <h2
              style={{ fontSize: "20px", fontWeight: "bold", margin: "12px 0" }}
            >
              Topik Kelas
            </h2>
            <div
              className="input-group border border-primary border-2 bg-white rounded-pill"
              style={{ width: "220px" }}
            >
              <input
                type="text"
                className="form-control border border-0 bg-transparent "
                placeholder="Cari Kelas...."
                value={query}
                onChange={({ target }) => setQuery(target.value)}
              />
              <span className="input-group-text border border-0 bg-white bg-transparent">
                <Icon
                  className="border border-1"
                  icon="bx:search-alt"
                  style={{
                    color: "white",
                    backgroundColor: "#6148FF",
                    borderRadius: "5px",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div
          className="container d-flex mt-4 gap-5"
          style={{ width: "1000px", padding: "5px 0px 5px 0px" }}
        >
          <div className="filter">
            <Filter
              // variabel dikiri namanya bebas,
              // variabel dikanan harus sesuai dengan nama useStatenya
              filterData={filter}
              setFilterData={setFilter}
              kategoriData={kategori}
              setKategoriData={(e) => {
                setKategori(e);
                if (e.length === 0 && level.length === 0) {
                  fetchData();
                } else {
                  // e = KATEGORI
                  // FILTER COURSE (KATEGORI, LEVEL) <==== V
                  FilterCourse(e, level, premium);
                  // FILTER COURSE (LEVEL, KATEGORI) <==== X
                }
              }}
              levelData={level}
              setLevelData={(e) => {
                // LEVEL = [""]
                // e = ["UIX"]
                // e = LEVEL
                setLevel(e); // ASYNC
                // LEVEL = [""] FAKTA
                // LEVEL = ["UIX"] HARAPAN
                if (e.length === 0 && kategori.length === 0) {
                  fetchData();
                } else {
                  FilterCourse(kategori, e, premium); // ["UIX"]
                }
              }}
              // namaFunctionYangDiPassing={()=>{
              // LOGIC HAPUS SEMUA FILTER
              // LOGIC FETCH SEMUA DATA
              // }}
              buttonHapusFilter={() => {
                console.log("RUN THIS");
                setKategori([]);
                setLevel([]);
                fetchData();
              }}
            />
          </div>
          <div className=" ">
            <div className=" row kategori-header d-flex gap-4">
              <button
                className="btn-kategori-header-1 col btn btn-light rounded-4 text-secondary"
                onClick={() => {
                  FilterCourse(kategori, level, ["PREMIUM", "FREE"]);
                  setPremium(["PREMIUM", "FREE"]);
                }}
              >
                All
              </button>
              <button
                className="btn-kategori-header-2 col btn btn-light rounded-4 text-secondary"
                onClick={() => {
                  FilterCourse(kategori, level, ["PREMIUM"]);
                  setPremium(["PREMIUM"]);
                }}
              >
                Kelas Premium
              </button>
              <button
                className="btn-kategori-header-3 col btn btn-light rounded-4 text-secondary"
                onClick={() => {
                  FilterCourse(kategori, level, ["FREE"]);
                  setPremium(["FREE"]);
                }}
              >
                Kelas Gratis
              </button>
            </div>

            <div className="listing row row-cols-2 mt-4 align-items-center">
              <CourseList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PilihPremium;

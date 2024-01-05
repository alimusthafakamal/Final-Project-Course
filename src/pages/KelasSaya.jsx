import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Icon } from "@iconify/react";
import Filter from "../components/Filter";
import Card from "react-bootstrap/Card";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KelasSaya = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [kategori, setKategori] = useState([]);
  const [level, setLevel] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [premium, setPremium] = useState(["PREMIUM", "FREE"]);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(["100%", ""]);

  console.log(kelas);
  const ActiveButton = () => {
    setActive(active);
  };

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get("https://mooc.code69.my.id/course-progress/list")
      .then((response) => {
        setKelas(response.data?.data?.courseList);
      })
      .catch((error) => console.log(error.response));
  };

  const navigate = useNavigate();
  useEffect(() => {
    const handleriwayatpembayaran = async () => {
      try {
        const token = localStorage.getItem("token");
        let config = {
          method: "get",
          url: `https://mooc.code69.my.id/course-progress/list`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.request(config);
        if (response.status == 200) {
          console.log(response);
          setKelas(response.data.data.courseList);
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
    handleriwayatpembayaran();
  }, []);

  const token = localStorage.getItem("token");
  const FilterCourse = async (dataKategori, dataLevel, dataPremium) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(
        `https://mooc.code69.my.id/course-progress/list?page=1${[
          ...dataKategori.map((e) => `&categories=${e}`),
        ].join("")}${[...dataLevel.map((e) => `&courseLevel=${e}`)].join("")}${[
          ...dataPremium.map((e) => `&isPremium=${e}`),
        ].join("")}`
      )
      .then((response) => {
        // console.log("response filter ===>", response);
        setKelas(response.data?.data?.courseList);
      })
      .catch((error) => {
        setKelas(null);
      });
  };

  return (
    <>
      <NavigationBar />
      <div className="kelas-saya">
        <div
          className="container"
          style={{ width: "1000px", padding: "5px 0px 5px 0px" }}
        >
          <div className="d-flex justify-content-between mt-5">
            <h2
              style={{ fontSize: "20px", fontWeight: "bold", margin: "12px 0" }}
            >
              Kelas Berjalan
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
                setKategori([]);
                setLevel([]);
                fetchData();
              }}
            />
          </div>

          <div className="">
            <div className=" row kategori-header d-flex gap-5 fw-bold">
              <button
                className="btn-kategori-header-1 col btn btn-light px-5 rounded-4 text-secondary"
                onClick={() => {
                  ActiveButton;
                  FilterCourse(kategori, level, ["PREMIUM", "FREE"]);
                  setDone("100%", "");
                }}
              >
                All
              </button>
              <button
                className="btn-kategori-header-2 col btn btn-light px-5 rounded-4 text-secondary"
                onClick={() => {
                  ActiveButton;
                  FilterCourse(kategori, level, ["PREMIUM", "FREE"]);
                  setDone("");
                }}
              >
                In Progress
              </button>
              <button
                className="btn-kategori-header-3 col btn btn-light px-5 rounded-4 text-secondary"
                onClick={() => {
                  ActiveButton;
                  FilterCourse(kategori, level, ["PREMIUM", "FREE"]);
                  setDone("100%");
                }}
              >
                Selesai
              </button>
            </div>
            <div className="listing row row-cols-2 mt-4 align-items-center">
              {kelas &&
                kelas
                  .filter((item) =>
                    item.courseName.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((item, index) =>
                    kelas !== null ? (
                      <div className="col d-flex gap-4 mb-4">
                        <Card
                          className="card border border-0  "
                          style={{ borderRadius: "1.3rem" }}
                          key={index}
                          onClick={() =>
                            navigate(`/detail-kelas/${item.courseCode}`)
                          }
                        >
                          <Card.Img
                            className="card-img"
                            src={KursusPopulerImage}
                          />
                          <Card.Body className="row">
                            <div className="col-8 d-flex align-items-center justify-content-between">
                              <Card.Subtitle
                                className="dark-blue100 fw-bold"
                                style={{ fontSize: "10px" }}
                              >
                                {item.courseCategory}
                              </Card.Subtitle>
                            </div>
                            {/* <div className="col-4 d-flex align-items-center justify-content-end">
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
                        </div> */}
                            <div className="mt-2">
                              <Card.Title
                                className="kursus-populer-title fw-bold"
                                style={{ fontSize: "10px" }}
                              >
                                {item.courseName}
                              </Card.Title>
                              <Card.Subtitle
                                className="fw-bold"
                                style={{ fontSize: "8px" }}
                              >
                                by {item.teacher}
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
                                <a style={{ color: "#6148FF" }}>
                                  {item.courseLevel}
                                </a>
                              </span>
                              <span
                                className="col"
                                style={{ gap: "4px", fontSize: "8px" }}
                              >
                                <Icon
                                  icon="clarity:book-line"
                                  color="#73CA5C"
                                  width="14"
                                  height="14"
                                />{" "}
                                <a> Rp {item.coursePrice} </a>
                              </span>
                              {/* <span
                            className="col"
                            style={{ gap: "4px", fontSize: "8px" }}
                          >
                            <Icon
                              icon="ri:time-fill"
                              color="#73CA5C"
                              width="14"
                              height="14"
                            />{" "}
                            <a>120 Menit </a>
                          </span> */}
                            </Card.Text>
                            <div className="">
                              <span
                                className="d-flex"
                                style={{ marginTop: "-12px" }}
                              >
                                <Icon
                                  icon="mdi:progress-check"
                                  style={{ color: "#73CA5C" }}
                                  className="me-1"
                                  width="14"
                                  height="14"
                                />
                                <div className="col-8 w-50">
                                  <div
                                    className="progress rounded-pill"
                                    role="progressbar"
                                    aria-label="Example with label"
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ background: "#D9D9D9" }}
                                  >
                                    {item.progressBar !== "100%" ? (
                                      <div
                                        className="progress-bar overflow-visible align-items-start rounded-pill bg-dark-blue100"
                                        style={{
                                          fontSize: "6px",
                                        }}
                                        width={item.progressBar}
                                      >
                                        <span className="ms-1">
                                          {item.progressBar}
                                        </span>
                                      </div>
                                    ) : (
                                      <div
                                        className="progress-bar overflow-visible align-items-start rounded-pill "
                                        style={{
                                          fontSize: "6px",
                                        }}
                                        width="100%"
                                      >
                                        <span className="ms-1">SELESAI</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ) : (
                      <div>Data tidak ditemukan</div>
                    )
                  )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KelasSaya;

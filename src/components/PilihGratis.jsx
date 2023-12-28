import React from "react";
import { Icon } from "@iconify/react";
import Filter from "./Filter";
import Card from "react-bootstrap/Card";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";

const PilihGratis = () => {
  const navigate = useNavigate();
  return (
    <div>
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
              style={{ width: "230px" }}
            >
              <input
                type="text"
                className="form-control border border-0 bg-transparent "
                placeholder="Cari Kelas...."
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
          <div className="filter">{/* <Filter /> */}</div>
          <div className="">
            <div className=" row kategori-header d-flex gap-4">
              <button className="btn-kategori-header-1 col btn btn-light rounded-4 text-secondary">
                All
              </button>
              <button
                className="btn-kategori-header-2 col btn btn-light rounded-4 text-secondary "
                onClick={() => navigate("/pilih-premium")}
              >
                Kelas Premium
              </button>
              <button
                className="btn-kategori-header-3 col btn btn-light rounded-4 text-secondary active"
                onClick={() => navigate("/pilih-gratis")}
              >
                Kelas Gratis
              </button>
            </div>
            <div className="listing row row-cols-2 mt-4 align-items-center">
              <div className="col d-flex gap-4 mb-4">
                <Card
                  className="card border border-0"
                  style={{ borderRadius: "1.3rem" }}
                  onClick={() => navigate("/detail-kelas")}
                >
                  <Card.Img className="card-img" src={KursusPopulerImage} />
                  <Card.Body className="row">
                    <div className="col-8 d-flex align-items-center justify-content-between">
                      <Card.Subtitle
                        className="dark-blue100 fw-bold"
                        style={{ fontSize: "10px", marginTop: "-24px" }}
                      >
                        UI/UX Design
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
                        Belajar Web Designer dengan Figma
                      </Card.Title>
                      <Card.Subtitle
                        className="fw-bold"
                        style={{ fontSize: "8px" }}
                      >
                        by Angela Doe
                      </Card.Subtitle>
                    </div>
                    <div
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
                        <a>10 Modul </a>
                      </span>
                      <span
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
                      </span>
                    </div>
                    <div
                      className="btn d-flex rounded-pill fw-bold justify-content-center align-items-center bg-dark-blue100"
                      style={{
                        marginLeft: "12px",
                        border: "none",
                        width: "94px",
                        height: "18px",
                      }}
                    >
                      <span
                        className="light-blue5"
                        style={{ fontSize: "10px" }}
                      >
                        Mulai Kelas
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col d-flex gap-4 mb-4">
                <Card
                  className="card border border-0"
                  style={{ borderRadius: "1.3rem" }}
                  onClick={() => navigate("/detail-kelas")}
                >
                  <Card.Img className="card-img" src={KursusPopulerImage} />
                  <Card.Body className="row">
                    <div className="col-8 d-flex align-items-center justify-content-between">
                      <Card.Subtitle
                        className="dark-blue100 fw-bold"
                        style={{ fontSize: "10px", marginTop: "-24px" }}
                      >
                        UI/UX Design
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
                        Belajar Web Designer dengan Figma
                      </Card.Title>
                      <Card.Subtitle
                        className="fw-bold"
                        style={{ fontSize: "8px" }}
                      >
                        by Angela Doe
                      </Card.Subtitle>
                    </div>
                    <div
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
                        <a>10 Modul </a>
                      </span>
                      <span
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
                      </span>
                    </div>
                    <div
                      className="btn d-flex rounded-pill fw-bold justify-content-center align-items-center bg-dark-blue100"
                      style={{
                        marginLeft: "12px",
                        border: "none",
                        width: "94px",
                        height: "18px",
                      }}
                    >
                      <span
                        className="light-blue5"
                        style={{ fontSize: "10px" }}
                      >
                        Mulai Kelas
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col d-flex gap-4 mb-4">
                <Card
                  className="card border border-0"
                  style={{ borderRadius: "1.3rem" }}
                  onClick={() => navigate("/detail-kelas")}
                >
                  <Card.Img className="card-img" src={KursusPopulerImage} />
                  <Card.Body className="row">
                    <div className="col-8 d-flex align-items-center justify-content-between">
                      <Card.Subtitle
                        className="dark-blue100 fw-bold"
                        style={{ fontSize: "10px", marginTop: "-24px" }}
                      >
                        UI/UX Design
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
                        Belajar Web Designer dengan Figma
                      </Card.Title>
                      <Card.Subtitle
                        className="fw-bold"
                        style={{ fontSize: "8px" }}
                      >
                        by Angela Doe
                      </Card.Subtitle>
                    </div>
                    <div
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
                        <a>10 Modul </a>
                      </span>
                      <span
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
                      </span>
                    </div>
                    <div
                      className="btn d-flex rounded-pill fw-bold justify-content-center align-items-center bg-dark-blue100"
                      style={{
                        marginLeft: "12px",
                        border: "none",
                        width: "94px",
                        height: "18px",
                      }}
                    >
                      <span
                        className="light-blue5"
                        style={{ fontSize: "10px" }}
                      >
                        Mulai Kelas
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col d-flex gap-4 mb-4">
                <Card
                  className="card border border-0"
                  style={{ borderRadius: "1.3rem" }}
                  onClick={() => navigate("/detail-kelas")}
                >
                  <Card.Img className="card-img" src={KursusPopulerImage} />
                  <Card.Body className="row">
                    <div className="col-8 d-flex align-items-center justify-content-between">
                      <Card.Subtitle
                        className="dark-blue100 fw-bold"
                        style={{ fontSize: "10px", marginTop: "-24px" }}
                      >
                        UI/UX Design
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
                        Belajar Web Designer dengan Figma
                      </Card.Title>
                      <Card.Subtitle
                        className="fw-bold"
                        style={{ fontSize: "8px" }}
                      >
                        by Angela Doe
                      </Card.Subtitle>
                    </div>
                    <div
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
                        <a>10 Modul </a>
                      </span>
                      <span
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
                      </span>
                    </div>
                    <div
                      className="btn d-flex rounded-pill fw-bold justify-content-center align-items-center bg-dark-blue100"
                      style={{
                        marginLeft: "12px",
                        border: "none",
                        width: "94px",
                        height: "18px",
                      }}
                    >
                      <span
                        className="light-blue5"
                        style={{ fontSize: "10px" }}
                      >
                        Mulai Kelas
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilihGratis;

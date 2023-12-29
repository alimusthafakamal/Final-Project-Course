import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import UiUxDesign from "../../public/uiux-design.svg";
// import ProductManagement from "../../public/product-management.svg";
// import WebDevelopment from "../../public/web-development.svg";
// import AndroidDevelopment from "../../public/android-development.svg";
// import IOSDevelopment from "../../public/ios-development.svg";
// import DataScience from "../../public/data-science.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KategoriBelajar = () => {
  const navigate = useNavigate();
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

  const KategoriList = () => {
    if (course === null) {
      return <div className="fw-bold">Data tidak ditemukan</div>;
    }

    return course?.map((data, i) => {
      return (
        <div className="col-md-2 col-md-auto d-flex">
          <Card
            style={{
              width: "100%",
              height: "auto",
              border: "none",
            }}
            className="bg-transparent"
            onClick={() => navigate("/detail-kelas/:id")}
          >
            <Card.Img
              variant="top"
              src={UiUxDesign}
              style={{ maxHeight: "120px" }}
              className="img-fluid "
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                {data.courseCategory}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="kategori-belajar">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2
            style={{ fontSize: "20px", fontWeight: "bold", margin: "12px 0" }}
          >
            Kategori Belajar
          </h2>
          <button
            className="btn d-flex align-items-center gap-2"
            style={{ fontSize: "12px" }}
          >
            <span className="fw-bold dark-blue100 justify-content-right">
              Lihat Semua
            </span>
          </button>
        </div>
        <div className="row align-items-center justify-content-md-start text-center  ">
          <KategoriList />
        </div>
      </div>
    </div>
  );
};

export default KategoriBelajar;

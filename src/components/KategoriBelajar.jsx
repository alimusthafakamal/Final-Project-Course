import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import UiUxDesign from "../../public/uiux-design.svg";
import ProductManagement from "../../public/product-management.svg";
import WebDevelopment from "../../public/web-development.svg";
import AndroidDevelopment from "../../public/android-development.svg";
import IOSDevelopment from "../../public/ios-development.svg";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Icon } from "@iconify/react";

const KategoriBelajar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="kategori-belajar">
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Kamu belum login...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div centered className="d-grid justify-content-center ">
            <span className="fw-bold">
              Anda harus Login terlebih dahulu untuk mendapatkan fitur lengkap
              dari Binar Course .
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
        <div className="">
          <div className="row align-items-center justify-content-center text-center ">
            <div className="col">
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img
                  variant="top"
                  src={UiUxDesign}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    UI/UX Design
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img
                  variant="top"
                  src={ProductManagement}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Product Management
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img
                  variant="top"
                  src={WebDevelopment}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Web Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img
                  variant="top"
                  src={AndroidDevelopment}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Android Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img
                  variant="top"
                  src={IOSDevelopment}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    IOS Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KategoriBelajar;

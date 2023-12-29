import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import { useNavigate } from "react-router-dom";

function BeliPremium(props) {
  const navigate = useNavigate();
  console.log(props.code);
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div>
          <Modal.Header
            closeButton
            className=" border border-0 pb-1"
          ></Modal.Header>
          <div className="justify-content-center border border-0 ">
            <Modal.Title
              className="d-grid text-center fw-bold"
              id="contained-modal-title-vcenter"
              style={{ fontSize: "24px" }}
            >
              <span className="">Selangkah Lagi Menuju</span>
              <span className="dark-blue100">Kelas Premium</span>
            </Modal.Title>
          </div>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <Card
                className="card border border-1 mx-3 "
                style={{ borderRadius: "30px" }}
              >
                <Card.Img className="card-img" src={KursusPopulerImage} />
                <Card.Body className="row">
                  <div className="col-8 d-flex align-items-center justify-content-between">
                    <Card.Subtitle
                      className="dark-blue100 fw-bold"
                      style={{ fontSize: "14px", marginTop: "-24px" }}
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
                      <p style={{ fontSize: "12px" }}>4.7</p>
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
                      style={{ fontSize: "10px" }}
                    >
                      by Angela Doe
                    </Card.Subtitle>
                  </div>
                  <Card.Text
                    className="d-flex justify-content-between fw-bold"
                    style={{
                      gap: "3px",
                      padding: "3px 0 3px 0",
                      fontSize: "10px",
                    }}
                  >
                    <span
                      className="col-4"
                      style={{
                        gap: "4px",
                        marginLeft: "10px",
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
                    <span className="col" style={{ gap: "4px" }}>
                      <Icon
                        icon="clarity:book-line"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />{" "}
                      <a>10 Modul </a>
                    </span>
                    <span className="col" style={{ gap: "4px" }}>
                      <Icon
                        icon="ri:time-fill"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />{" "}
                      <a>120 Menit </a>
                    </span>
                  </Card.Text>
                  <div
                    className="col-8 btn btn-sm rounded-pill text-white fw-bold align-items-center"
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
                    <Icon
                      icon="fluent:premium-20-filled"
                      className="light-blue5"
                    />
                    <span
                      className="me-3 ms-1 light-blue5"
                      style={{ fontSize: "10px" }}
                    >
                      Beli
                    </span>
                    <span className="light-blue5" style={{ fontSize: "10px" }}>
                      Rp 249.000
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Modal.Body>
          <Modal.Footer className="border border-0 justify-content-center">
            <Button
              className="rounded-pill d-flex align-items-center justify-content-center bg-dark-blue100"
              style={{
                fontSize: "16px",
                width: "300px",
                height: "48px",
                gap: "8px",
                boxShadow: "0px 4px 4px 0px #00000026",
              }}
              onClick={() => navigate(`/pembayaran/${props.code}`)}
            >
              <span className="">Beli Sekarang</span>
              <Icon icon="carbon:next-filled" width="24" height="24" />
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default BeliPremium;

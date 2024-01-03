import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BeliPremium(props) {
  const navigate = useNavigate();

  const [course, setCourse] = useState({});
  const { code } = useParams();

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(`https://mooc.code69.my.id/course-detail?courseCode=${code}`)
      .then((response) => {
        setCourse(response.data.data);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    fetchData();
  }, [navigate]);

  console.log(props.code);
  const handleorder = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      let config = {
        method: "post",
        url: `https://mooc.code69.my.id/order`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          accept: "*/*",
        },
        data: { courseCode: String(props.code) },
      };

      const response = await axios.request(config);
      if (response.status == 200) {
        console.log(response.data);
        toast.success("berhasil");
        navigate(`/pembayaran/${props.code}`);
      } else {
        console.log(response.status);
        console.log(response.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
      }
      toast.error(error.message);
    }
  };

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
                      style={{ fontSize: "14px" }}
                    >
                      {course.courseCategory}
                    </Card.Subtitle>
                  </div>

                  <div>
                    <Card.Title
                      className="kursus-populer-title fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {course.courseName}
                    </Card.Title>
                    <Card.Subtitle
                      className="fw-bold"
                      style={{ fontSize: "10px" }}
                    >
                      {course.teacher}
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
                      <a style={{ color: "#6148FF" }}>{course.courseLevel}</a>
                    </span>
                    <span className="col" style={{ gap: "4px" }}>
                      <Icon
                        icon="clarity:book-line"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />
                      <a>{course.numberOfModul} Modul </a>
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
                      Rp {course.coursePrice}
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
              onClick={handleorder}
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

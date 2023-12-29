import React from "react";
import NavigationBar from "./NavigationBar";
import { Button, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";
import MasterCard from "../../public/master-card.svg";
import Visa from "../../public/visa.svg";
import Amex from "../../public/amex.svg";
import Paypal from "../../public/paypal.svg";

const Pembayaran = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  console.log(code);
  const handleprofil = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log(token);
      let config = {
        method: "post",
        url: `https://mooc.code69.my.id/order`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.request(config);
      if (response.status == 200) {
        console.log(response.data);
      } else {
        console.log(response.status);
        console.log(response.message);
      }

      // navigate("/");

      // Temporary solution
      // window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="pembayaran">
        <div className="alert-pembayaran">
          <Container>
            <div className="d-flex">
              <span
                className="d-flex fw-bold align-items-center gap-2 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/detail-kelas")}
              >
                <Icon icon="formkit:arrowleft" />
                <span>kembali</span>
              </span>
            </div>
            <div className="d-grid justify-content-center ">
              <span
                className="alert border border-0 text-center fw-bold text-white"
                style={{
                  fontSize: "16px",
                  width: "800px",
                  height: "50px",
                  background: "#FF0000",
                  borderRadius: "12px",
                }}
                aria-pressed="true"
              >
                Selesaikan Pembayaran sampai 10 Maret 2023 12:00
              </span>
            </div>
          </Container>
        </div>
        <div className="mt-5">
          <Container>
            <div className="row ms-3">
              <div className="col-md-6 mx-5">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        style={{ background: "#3C3C3C" }}
                      >
                        Bank Transfer
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header ">
                      <button
                        className="accordion-button collapsed text-white bg-dark-blue100 mt-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Credit Card
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body align-items-center justify-content-center">
                        <div className="payment-options gap-3 d-flex mt-3 justify-content-center">
                          <img src={MasterCard} />
                          <img src={Visa} />
                          <img src={Amex} />
                          <img src={Paypal} />
                        </div>
                        <div className="form-pembayaran pt-4" width="400">
                          <div className="card-number d-grid justify-content-center ">
                            <label
                              className="fw-bold"
                              style={{ fontSize: "14px" }}
                            >
                              Card Number
                            </label>
                            <input
                              className="form-control border border-0 text-secondary"
                              placeholder="4488 0000 0000 0000"
                            />
                            <hr width="300" style={{ marginTop: "-4px" }} />
                          </div>
                          <div className="card-holdername d-grid justify-content-center mt-1">
                            <label
                              className="fw-bold"
                              style={{ fontSize: "14px" }}
                            >
                              Card holdername
                            </label>
                            <input
                              className="form-control border border-0 text-secondary"
                              placeholder="John Doe"
                            />
                            <hr width="300" style={{ marginTop: "-4px" }} />
                          </div>
                          <div>
                            <div className="row d-flex justify-content-center">
                              <div className="col-3 me-4 ">
                                <label
                                  className="fw-bold"
                                  style={{ fontSize: "14px" }}
                                >
                                  CVV
                                </label>
                                <input
                                  className="form-control border border-0 text-secondary"
                                  placeholder="000"
                                />
                                <hr width="130" style={{ marginTop: "-4px" }} />
                              </div>
                              <div className="col-3  ">
                                <label
                                  className="fw-bold"
                                  style={{ fontSize: "14px" }}
                                >
                                  Expiry Date
                                </label>
                                <input
                                  className="form-control border border-0 text-secondary"
                                  placeholder="07/24"
                                />
                                <hr width="130" style={{ marginTop: "-4px" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col border border-primary "
                style={{
                  padding: "20px 24px 20px 24px",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  borderRadius: "16px",
                  borderColor: "#6148FF",
                  width: "400px",
                  height: "400px",
                }}
              >
                <h2 className="fw-bold pb-2" style={{ fontSize: "20px" }}>
                  Pembayaran Kelas
                </h2>
                <Card
                  className="card border border-1 mx-3 d-flex justify-content-center"
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
                  </Card.Body>
                </Card>
                <div
                  className="row ms-3 my-2 d-flex justify-content-between"
                  style={{ padding: "8px 0px 8px 0px" }}
                >
                  <div className="col-3 d-grid ">
                    <span className="fw-bold">Harga</span>
                    <span>Rp 349,000</span>
                  </div>
                  <div className="col-3 d-grid ">
                    <span className="fw-bold">PPN 11%</span>
                    <span>Rp 38,390</span>
                  </div>
                  <div className="col-3 d-grid ">
                    <span className="fw-bold">total Bayar</span>
                    <span className="dark-blue100 fw-bold">Rp 397,390</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Button
                    className="btn-danger rounded-pill d-flex align-items-center justify-content-center px-5"
                    style={{
                      fontSize: "16px",
                      height: "48px",
                      gap: "12px",
                      background: "#FF0000",
                      boxShadow: "0px 4px 4px 0px #00000026",
                    }}
                    onClick={() => navigate("/pembayaran-sukses")}
                  >
                    <span className="">Bayar dan Ikuti Kelas Selamanya</span>
                    <Icon icon="carbon:next-filled" width="24" height="24" />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Pembayaran;

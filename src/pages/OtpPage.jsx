import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState(false);
  const { email } = useParams();
  const navigate = useNavigate();
  console.log(otp);
  console.log(email);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    //new
    const newOtp = [
      ...otp.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setOtp(newOtp);

    const enteredOtp = newOtp.join("");
    console.log(enteredOtp);
    const correctOtp = "123456";

    if (enteredOtp.length === correctOtp.length) {
      if (enteredOtp === correctOtp) {
        setOtpError(false);
      } else {
        setOtpError(true);
        // TLogika jika OTP salah
      }
    }

    // next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("run", otp);
    try {
      let data = JSON.stringify({
        email: email,
        otp: otp.join(""),
      });
      let config = {
        method: "put",
        url: "https://mooc.code69.my.id/verify-account",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log("response ", response);
      console.log(response.status);
      navigate("/login");

      // Temporary solution
      // window.location.href = "/";
    } catch (error) {
      console.log("error ", error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ width: "100%", height: "100%", top: "-987px", left: "1575px" }}
    >
      <div className="row">
        <div className="col-md-7 d-flex align-items-center justify-content-center otp-side">
          {/* Left Side for the OTP Form */}
          <div className="otp-form ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>

            <h4 className="">Masukkan OTP</h4>
            <p className="text-center">
              Ketik 6 digit kode yang dikirimkan ke{" "}
              <strong>j*****@gmail.com</strong>
            </p>
            <div className="form-group d-flex justify-content-center">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  className={`form-control otp-input ${
                    otpError ? "otp-error" : ""
                  }`}
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            {otpError && (
              <div className="text-center mt-3 link-resend">
                <a href="/resend">
                  <b>Kirim Ulang</b>
                </a>
              </div>
            )}
            {!otpError && (
              <div className="text-center mt-3">
                <p>Kirim Ulang OTP dalam 60 detik</p>
              </div>
            )}
            <div className="d-grid">
              <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-submit"
                style={{
                  width: "100%",
                  height: "48px",
                  top: "8px",
                  background: "#6148FF",
                  left: "0px",
                }}
              >
                Simpan
              </button>
            </div>
            <div className="d-grid gap-2 mt-5">
              <button
                type="button"
                className="btn btn-success"
                style={{
                  width: "70%",
                  height: "48px",
                  top: "8px",
                  left: "0px",
                }}
              >
                Registrasi Berhasil
              </button>
            </div>
          </div>
        </div>

        {/* Right Side banner */}
        <div className="col-md-5 right-sidebar">
          <div className="banner-side d-flex justify-content-center">
            <img
              src="src\assets\Belajar_white.png"
              alt="Belajar"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;

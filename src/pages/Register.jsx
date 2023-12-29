import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleregister = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        username: name,
        email: email,
        phoneNumber: phone,
        password: password,
      });
      let config = {
        method: "post",
        url: `https://mooc.code69.my.id/auth/signup`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      if (response.status == 200) {
        navigate(`/otp/${email}`);
        console.log(response.status);
        console.log(response.message);
      } else {
        console.log(response.status);
        console.log(response.message);
      }
      const { token } = response.data.data;

      localStorage.setItem("token", token);

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
    <div className="container-fluid" style={{}}>
      <div className="row ">
        <div className="col-md justify-content-center d-flex">
          <form
            style={{
              width: "452px",
              height: "348px",
              marginTop: "100px",
            }}
          >
            <h2>Registrasi</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-tabel">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control rounded-pill"
                id="name"
                placeholder="Enter your name"
                style={{
                  width: "452px",
                  height: "48px",
                  top: "22px",
                  left: "0px",
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control rounded-pill"
                id="email"
                placeholder="Enter your email"
                style={{
                  width: "452px",
                  height: "48px",
                  top: "22px",
                  left: "0px",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control rounded-pill"
                id="password"
                placeholder="Enter your password"
                style={{
                  width: "452px",
                  height: "48px",
                  top: "22px",
                  left: "0px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control rounded-pill"
                id="phone"
                placeholder="Enter your phone"
                style={{
                  width: "452px",
                  height: "48px",
                  top: "22px",
                  left: "0px",
                }}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <p style={{ marginTop: "10px", textAlign: "center" }}>
              Sudah punya akun? <a href="/login">Masuk di sini</a>
            </p>
            <button
              type="submit"
              className="btn btn-primary rounded-pill"
              style={{
                width: "452px",
                height: "48px",
                top: "8px",
                left: "0px",
              }}
              onClick={handleregister}
            >
              Register
            </button>
          </form>
        </div>
        <div className="col-md d-none d-md-block">
          <img
            src="/img.svg"
            alt="Side Image"
            className="img-fluid position-fixed"
          />
          <img
            src={BelajarWhite}
            width="300"
            className="img-fluid position-absolute"
            style={{ top: "35%", right: "15%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;

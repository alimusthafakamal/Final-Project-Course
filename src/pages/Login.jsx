import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";
import { Icon } from "@iconify/react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        emailAddress: email,
        password: password,
      });
      let config = {
        method: "post",
        url: `https://mooc.code69.my.id/auth/signin`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      
      const { token } = response.data;

      localStorage.setItem("token", token);
      console.log(token);
      // navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const Kembali = () => {
    navigate("/");
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md justify-content-center d-flex">
          <form
            className=""
            style={{
              marginTop: "200px",
            }}
            onSubmit={onSubmit}
          >
            <span
              className="d-flex fw-bold align-items-center gap-2 mb-3"
              style={{ cursor: "pointer", marginLeft: "-35px" }}
              onClick={Kembali}
            >
              <Icon icon="formkit:arrowleft" />
              <span style={{ padding: "" }}>Kembali </span>
            </span>
            <h2>Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-tabel">
                Email
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="username"
                placeholder="Enter your email"
                style={{
                  height: "48px",
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
                className="form-control rounded-pill"
                id="password"
                placeholder="Enter your password"
                style={{
                  height: "48px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                className="forgot-password justify-content-between d-flex me-2 mt-2 fw-bold"
                style={{ fontSize: "12px" }}
              >
                <p>
                  Belum punya akun?
                  <a href="/register" className="text-decoration-none fw-bold">
                    Daftar disini
                  </a>
                </p>
                <Link to={"/forget-password"}>Forget Password ?</Link>
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-pill"
              style={{
                width: "452px",
                height: "48px",
              }}
            >
              Login
            </button>

            <p
              className="justify-content-end d-flex me-3"
              style={{ fontSize: "14px" }}
            >
              Login sebagai Admin
              <a
                className="text-decoration-none fw-bold"
                style={{ cursor: "pointer", marginLeft: "4px" }}
                onClick={() => navigate("/admin/login-admin")}
              >
                disini
              </a>
            </p>
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

export default Login;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";

function Login() {
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
                className="forgot-password justify-content-end d-flex me-2 mt-3"
                style={{ fontSize: "12px" }}
              >
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
            <p style={{ marginTop: "10px", textAlign: "center" }}>
              Belum punya akun? <a href="/register">Daftar di sini</a>
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

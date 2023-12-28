import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
    <div
      className="container-fluid"
      style={{ width: "1440x", height: "950px", top: "-987px", left: "1575px" }}
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <form
            style={{
              width: "452px",
              height: "348px",
              top: "301px",
              left: "158px",
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
              <p className="forgot-password text-right">
                <Link to={"/forget-password"}>Forget Password ?</Link>
              </p>
              <input
                type="password"
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
            <button
              type="submit"
              className="btn btn-primary rounded-pill"
              style={{
                width: "452px",
                height: "48px",
                top: "8px",
                left: "0px",
              }}
            >
              Login
            </button>
            <p style={{ marginTop: "10px", textAlign: "center" }}>
              Belum punya akun? <a href="/register">Daftar di sini</a>
            </p>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <div className="col-md-6 d-none d-md-block">
            <img src="/img.svg" alt="Side Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

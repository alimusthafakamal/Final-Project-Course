import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ResetPass() {
  const [newPassword, setNewPassword] = useState("");
  const [newRepassword, setNewRePassword] = useState("");
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        resetToken: resetToken,
        newPassword: newPassword,
        newRePassword: newRepassword,
      });
      let config = {
        method: "put",
        url: `https://mooc.code69.my.id/forget-password/reset`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      if (response.status == 200) {
        console.log(response.data);
        navigate("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };
  console.log("resetToken", resetToken);

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
          >
            <h2>Reset Password</h2>
            <div className="mb-3">
              <label htmlFor="newpassword" className="form-tabel">
                Masukkan Password Baru{" "}
              </label>
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                type="text"
                className="form-control rounded-pill"
                id="new password"
                placeholder="Enter your new password"
                style={{
                  width: "452px",
                  height: "48px",
                  top: "22px",
                  left: "0px",
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newRePassword" className="form-tabel">
                Ulangi Password Baru{" "}
              </label>
              <input
                onChange={(e) => setNewRePassword(e.target.value)}
                type="text"
                className="form-control rounded-pill"
                id="Password Baru"
                placeholder="Enter your Password Baru"
                style={{
                  width: "452px",
                  height: "48px",
                  top: "22px",
                  left: "0px",
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-pill"
              onClick={onSubmit}
              style={{
                width: "452px",
                height: "48px",
                top: "8px",
                left: "0px",
              }}
            >
              Request reset password
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <img src="/images/img.jpg" alt="Side Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default ResetPass;

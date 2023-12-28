import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";
import { Container, Toast } from "react-bootstrap";

const NavigationBar = () => {
  const navigate = useNavigate();

  // const searchHandler = async (e) => {
  //   try {
  //     let data = JSON.stringify({
  //       courseCode,
  //       courseName,
  //       courseCategory,
  //       courseLevel,
  //       coursePrice,
  //       courseAbout,
  //       courseFor,
  //       urlTele,
  //       teacher,
  //       numberOfModule,
  //       typePremium,
  //     });

  //     const token = localStorage.getItem("token");
  //     console.log(token);

  //     let config = {
  //       method: "",
  //       url: "",
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       data: data,
  //     };

  //     const response = await axios.request(config);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       Toast.error(error.response.data.message);
  //       return;
  //     }
  //     toast.error(error.message);
  //   }
  // };

  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://mooc.code69.my.id/course")
      .then((Response) => Response.json())
      .then((json) => {
        const results = json.filter((data) => {
          return {
            courseCode,
            courseName,
            courseCategory,
            courseLevel,
            coursePrice,
            courseAbout,
            courseFor,
            urlTele,
            teacher,
            numberOfModule,
            typePremium,
          };
        });
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div
      className="navbar navbar-expand-lg navbar-background sticky-top "
      style={{
        backgroundColor: "#6148ff",
        boxShadow: "0px 0px 10px 0px #00000026",
        height: "100px",
        alignContent: "center",
      }}
    >
      <Container className="d-flex">
        <Link className="navbar-brand mt-3" to="/">
          <img src={BelajarWhite} />
        </Link>
        <button
          className="navbar-toggler border border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {/* <div className=" ">
            <div
              className="input-group border border-0 text-danger "
              style={{
                width: "526px",
                height: "70px",
                padding: "12px 24px 12px 24px",
              }}
              id="navbarTogglerDemo02"
            >
              <input
                type="text"
                className="form-control border border-0"
                placeholder="Cari Kursus Terbaik ...."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <span
                className="input-group-text border border-0 bg-white"
                id="basic-addon1"
              >
                <Icon
                  className=""
                  icon="bx:search-alt"
                  style={{
                    color: "white",
                    backgroundColor: "#6148FF",
                    borderRadius: "5px",
                  }}
                />
              </span>
            </div>
          </div> */}
          <ul
            className="navbar-nav me-auto w-100 d-flex align-items-center justify-content-lg-end "
            id="navbarTogglerDemo02"
          >
            <li className="nav-item d-flex align-items-center gap-4">
              <div class="dropdown">
                <button
                  className="btn fw-bold text-white align-items-center "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    background: "#489CFF",
                    borderRadius: "10px",
                    padding: "5px 25px 5px 25px",
                    fontSize: "16px",
                  }}
                >
                  <Icon
                    icon="ic:round-list"
                    width="24"
                    height="24"
                    className="me-2"
                  />
                  Kelas
                </button>
                <ul class="dropdown-menu dropdown-menu-lg-end">
                  <li style={{ cursor: "pointer" }} className="">
                    <a
                      class="dropdown-item fw-bold "
                      aria-current="true"
                      style={{ color: "#6148ff" }}
                      onClick={() => navigate("/kelas-saya")}
                    >
                      Kelas Berjalan
                    </a>

                    <a
                      class="dropdown-item fw-bold"
                      style={{ color: "#6148ff" }}
                      onClick={() => navigate("/pilih-premium")}
                    >
                      Topik Kelas
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                {/* <button
                  className="btn fw-bold text-white align-items-center "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    background: "#489CFF",
                    borderRadius: "10px",
                    padding: "5px 25px 5px 25px",
                    fontSize: "16px",
                  }} */}
                {/* > */}
                <Icon
                  icon="system-uicons:bell"
                  width="24"
                  height="24"
                  color="white"
                  className="me-2"
                  onClick={() => navigate("/notif")}
                />
                {/* Notifikasi */}
                {/* </button> */}
              </div>
              {/* <div className="dropdown">
                <button
                  className="btn fw-bold text-white align-items-center "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    background: "#489CFF",
                    borderRadius: "10px",
                    padding: "5px 25px 5px 25px",
                    fontSize: "16px",
                  }}
                > */}
              <Icon
                icon="ep:user"
                width="24"
                height="24"
                color="white"
                className="me-2"
                onClick={() => navigate("/akunprofil")}
              />
              {/* Akun */}
              {/* </button>
              </div> */}
            </li>

            {/* <li className="nav-item ">
              <span className="nav-link">
                <Icon className="icon " icon="material-symbols:login" />
                <button
                  className="btn text-white"
                  onClick={() => navigate("/login")}
                >
                  Masuk
                </button>
              </span>
            </li> */}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavigationBar;

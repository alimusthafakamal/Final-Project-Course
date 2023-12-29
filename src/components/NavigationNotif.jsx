import React from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Toast } from "react-bootstrap";

const NavigationNotif = () => {
  const navigate = useNavigate();

  return (
    <div
      className="navbar navbar-expand-lg navbar-background sticky-top "
      style={{
        backgroundColor: "#6148ff",
        boxShadow: "0px 0px 10px 0px #00000026",
        height: "100px",
        alignContent: "center",
        marginBottom: "-100px",
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
            <li className="nav-item d-flex align-items-center gap-2">
              <div class="dropdown">
                <button
                  className="btn fw-bold text-white align-items-center "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Icon icon="ic:round-list" width="24" height="24" />
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
                      onClick={() => navigate("/topik-kelas")}
                    >
                      Topik Kelas
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
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
                    icon="system-uicons:bell"
                    width="24"
                    height="24"
                    color="white"
                    className="me-2"
                    onClick={() => navigate("/notif")}
                  />
                  Notifikasi
                </button>
              </div>
              <Icon
                icon="ep:user"
                width="24"
                height="24"
                color="white"
                className="me-2"
                onClick={() => navigate("/akunprofil")}
              />
            </li>
          </ul>
        </div>
      </Container>
    </div>

    // <div className="row">
    //   <nav class="navbar navbar-expand-lg navbar-background fixed-top justify-content-start">
    //     <div class="container">
    //       <a className="navbar-brand  mt-md-3" to="/">
    //         <img src={BelajarWhite} />
    //       </a>

    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>

    //       <div class="collapse navbar-collapse" id="navbarNav">
    //         <div
    //           className="input-group d-flex"
    //           style={{
    //             width: "526px",
    //             padding: "12px 24px 12px 24px",
    //             borderRadius: "16px",
    //           }}
    //         >
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Cari Kursus Terbaik ...."
    //           />
    //           <span className="input-group-text">
    //             <Icon
    //               className=""
    //               icon="bx:search-alt"
    //               style={{
    //                 width: "28px",
    //                 height: "28px",
    //                 color: "white",
    //                 backgroundColor: "#6148FF",
    //                 borderRadius: "4px",
    //               }}
    //             />
    //           </span>
    //         </div>

    //         <div className="nav-menu">
    //           <ul class="navbar-nav mt-2 ">
    //             <li className="nav-item ">
    //               <a className="nav-link " href="#">
    //                 <i className="bi bi-list-ul" style={{ color: "white" }}>
    //                   <div class="dropdown">
    //                     <ul class="dropdown-menu dropdown-menu-lg-end">
    //                       <li style={{ cursor: "pointer" }} className="">
    //                         <a
    //                           class="dropdown-item fw-bold "
    //                           aria-current="true"
    //                           style={{ color: "#6148ff" }}
    //                           onClick={() => navigate("/kelas-saya")}
    //                         >
    //                           Kelas Berjalan
    //                         </a>

    //                         <a
    //                           class="dropdown-item fw-bold"
    //                           style={{ color: "#6148ff" }}
    //                           onClick={() => navigate("/topik-kelas")}
    //                         >
    //                           Topik Kelas
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </i>
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="#">
    //                 <i
    //                   className="bi bi-bell"
    //                   style={{
    //                     width: "100px",
    //                     height: "28px",
    //                     color: "white",
    //                     backgroundColor: "#489CFF",
    //                     borderRadius: "10px",
    //                     padding: "5px 25px",
    //                     fontSize: "16px",
    //                   }}
    //                 >
    //                   <span
    //                     style={{
    //                       fontStyle: "normal",
    //                       paddingLeft: "10px",
    //                       fontWeight: "500",
    //                     }}
    //                   >
    //                     Notifikasi
    //                   </span>
    //                 </i>
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/akunprofil">
    //                 <i className="bi bi-person" style={{ color: "white" }}></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default NavigationNotif;

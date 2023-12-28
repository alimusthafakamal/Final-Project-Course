import React from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { left } from "@popperjs/core";

const NavigationNotif = () => {
  const navigate = useNavigate();

  return (
    <div className="row">
      <nav class="navbar navbar-expand-lg navbar-background fixed-top justify-content-start">
        <div class="container">
          <a className="navbar-brand  mt-md-3" to="/">
            <img src={BelajarWhite} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <div
              className="input-group d-flex"
              style={{
                width: "526px",
                padding: "12px 24px 12px 24px",
                borderRadius: "16px",
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Cari Kursus Terbaik ...."
              />
              <span className="input-group-text">
                <Icon
                  className=""
                  icon="bx:search-alt"
                  style={{
                    width: "28px",
                    height: "28px",
                    color: "white",
                    backgroundColor: "#6148FF",
                    borderRadius: "4px",
                  }}
                />
              </span>
            </div>

            <div className="nav-menu">
              <ul class="navbar-nav mt-2 ">
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    <i className="bi bi-list-ul" style={{ color: "white" }}></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i
                      className="bi bi-bell"
                      style={{
                        width: "100px",
                        height: "28px",
                        color: "white",
                        backgroundColor: "#489CFF",
                        borderRadius: "10px",
                        padding: "5px 25px",
                        fontSize: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontStyle: "normal",
                          paddingLeft: "10px",
                          fontWeight: "500",
                        }}
                      >
                        Notifikasi
                      </span>
                    </i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/akunprofil">
                    <i className="bi bi-person" style={{ color: "white" }}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationNotif;

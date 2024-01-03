import { auto } from "@popperjs/core";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

const NotificationItem = ({ type, message, date, isNew }) => {
  const navigate = useNavigate();
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      fontSize: "0.9rem",
      padding: "0rem 1rem ",
      backgroundColor: isNew ? "#ffff" : "transparent",
    },
    icon: {
      marginRight: "0.5rem",
    },
    content: {
      marginLeft: "0.5rem",
    },
    date: {
      color: "#aaa",
      fontSize: "0.8rem",
      marginLeft: "auto",
      marginRight: "1%",
      display: "flex",
      justifyContent: "right",
      alignItems: "right",
    },

    typetext: {
      color: "#6148FF",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
    },

    message: {
      color: "#000",
      fontFamily: "Montserrat",
      fontSize: "10px",
      fontStyle: "normal",
    },

    desctext: {
      color: "#8A8A8A",
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>{/*  */}</div>
      <div style={styles.content}>
        <strong style={styles.typetext}>{type}</strong>
        <h6>{message}</h6>
        <p style={styles.desctext}>Baca selengkapnya</p>
      </div>
      <h9 style={styles.date}>{date}</h9>
    </div>
  );
};

const Notifications = () => {
  const styles = {
    mainContainer: {
      backgroundColor: "#EBF3FC",
      height: "10rem",
      maxWidth: "100%",
      margin: "2rem auto",
    },

    backlink: {
      height: "auto",
      width: "50%",
      marginLeft: "17%",
      marginTop: "4.5rem",
      textDecoration: "none",
      cursor: "pointer",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      color: "#6148FF",
    },

    iconback: {
      marginRight: "10px",
    },

    header: {
      marginLeft: "21%",
      marginTop: "1.5rem",
      height: "28%",
      width: "58%",
      color: "black",

      fontSize: "1.5rem",
      fontWeight: "bold",
      backgroundColor: "#6148FF",
      borderRadius: "16px 16px 0px 0px",
    },

    title: {
      paddingTop: "15px",
      color: "white",
      fontSize: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    card: {
      height: "auto",
      maxWidth: "100%",
      backgroundColor: "#ffff",
      borderRadius: "0px 0px 8px 8px",
      border: "2px solid #6148FF",
    },

    wrap: {
      marginTop: "20px",
    },
  };

  // Example notifications data
  const notifications = [
    {
      icon: "bi bi-bell-fill",
      type: "Promosi",
      date: "2 Maret, 12:00",
      message:
        "Dapatkan Potongan 50% selama Bulan Maret! Syarat dan Ketentuan berlaku!",
      isNew: true,
    },
    {
      type: "Notifikasi",
      message: "Password berhasil diubah",
      date: "1 Maret, 10:00",
      isNew: false,
    },
    {
      type: "Notifikasi",
      message: "Lorem ipsum si dolor",
      date: "28 Februari, 10:00",
      isNew: false,
    },
    // ... other notifications
  ];

  return (
    <div className="row">
      <div style={styles.mainContainer}>
        <div style={styles.backlink} onClick={() => navigate(`/`)}>
          <svg
            style={styles.iconback}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
            color="#6148FF"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          <a
            href="/"
            className="md-3 backlink"
            style={{ textDecoration: "none" }}
          >
            Kembali ke Beranda
          </a>
        </div>
        <div style={styles.header}>
          <h5 style={styles.title}>Notifikasi</h5>
          <div style={styles.card}>
            <div style={styles.wrap}>
              {notifications.map((notification, index) => (
                <NotificationItem
                  key={index}
                  type={notification.type}
                  message={notification.message}
                  date={notification.date}
                  isNew={notification.isNew}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

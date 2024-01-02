import React from "react";
import NavigationNotif from "../components/NavigationNotif";
import KategoriBelajar from "../components/KategoriBelajar";
import KursusPopuler from "../components/KursusPopuler";
import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";
import Notifications from "../components/Notifikasi";

const Notif = () => {
  return (
    <div>
      <NavigationNotif />
      <Notifications />
    </div>
  );
};

export default Notif;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Footer from "./components/Footer";
import KelasSaya from "./pages/KelasSaya";
import TopikKelas from "./pages/TopikKelas";
import DetailKelas from "./pages/DetailKelas";
import Pembayaran from "./components/Pembayaran";
import PembayaranSukses from "./components/PembayaranSukses";
import MulaiKelas from "./components/MulaiKelas";
import Notif from "./pages/Notif";
import Otp from "./pages/OtpPage";
import AkunProfil from "./pages/AkunProfil";
import Ubahpw from "./pages/Ubahpw";
import Riwayat from "./pages/Riwayat";
import Dashboard from "./pages/admin/Dashboard";
import LoginAdmin from "./pages/admin/LoginAdmin";
import KelolaKelas from "./pages/admin/KelolaKelas";
import ForgetPassword from "./pages/ForgetPassword";
import RegisterAdmin from "./pages/admin/RegisterAdmin";
import OtpAdmin from "./pages/admin/OtpAdmin";
import LogoutAdmin from "./components/admin/LogoutAdmin";
import LogoutUser from "./components/Logout";
import ResetPass from "./pages/ResetPass";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notif" element={<Notif />} />

        <Route path="/otp/:email" element={<Otp />} />
        <Route path="/akunprofil" element={<AkunProfil />} />
        <Route path="/ubahpw" element={<Ubahpw />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-pass" element={<ResetPass />} />
        <Route path="/riwayat" element={<Riwayat />} />

        <Route path="/kelas-saya" element={<KelasSaya />} />
        <Route path="/topik-kelas" element={<TopikKelas />} />
        <Route path="/detail-kelas/:code" element={<DetailKelas />} />
        <Route path="/pembayaran/:code" element={<Pembayaran />} />
        <Route path="/pembayaran-sukses" element={<PembayaranSukses />} />
        <Route path="/mulai-kelas" element={<MulaiKelas />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/otp-admin/:email" element={<OtpAdmin />} />
        <Route path="/admin/login-admin" element={<LoginAdmin />} />
        <Route path="/admin/logout-admin" element={<LogoutAdmin />} />
        <Route path="/admin/kelola-kelas" element={<KelolaKelas />} />
        <Route path="/admin/register-admin" element={<RegisterAdmin />} />
      </Routes>
    </div>
  );
}

export default App;

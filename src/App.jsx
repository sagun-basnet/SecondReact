import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import ContactPage from "./pages/ContactPage"
import SignPage from "./pages/SignPage"
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/global/Navbar"
const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App

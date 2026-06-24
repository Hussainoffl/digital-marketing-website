
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import './App.css'
import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import messaging from "./messaging";

function App() {

  useEffect(() => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      getToken(messaging, {
        vapidKey: "BN4gw9cIN44g9lRfyUP47IPvJE0h_JeaWUKHfoS2WmSXN9SP91jsMybw-n-l_xtF_BZcGuO7EdxbsUAH81QrztA",
      })
        .then((token) => {
          console.log("FCM Token:", token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}, []);
  return (
    <>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App

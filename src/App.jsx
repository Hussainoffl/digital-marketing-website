import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import messaging from "./messaging";
import useScrollReveal from "./hooks/useScrollReveal";

function ScrollManager() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Re-run scroll reveal whenever the route changes
  useScrollReveal([pathname]);

  return null;
}

function App() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, {
          vapidKey:
            "BN4gw9cIN44g9lRfyUP47IPvJE0h_JeaWUKHfoS2WmSXN9SP91jsMybw-n-l_xtF_BZcGuO7EdxbsUAH81QrztA",
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
    <BrowserRouter>
      <ScrollManager />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

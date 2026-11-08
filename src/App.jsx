
import { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Website from "./pages/Website";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// Navbar and footer for the full portfolio
function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function ScrollToTopOnMount() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

// Smooth page transition wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <ScrollToTopOnMount />
        <Routes location={location}>

          {/* Minimal homepage */}
          <Route path="/" element={<Home />} />

          {/* Full portfolio landing page */}
          <Route
            path="/website"
            element={
              <WebsiteLayout>
                <Website />
              </WebsiteLayout>
            }
          />

          {/* Individual portfolio pages */}
          <Route path="/about" element={<About />} />

          <Route path="/education" element={<Education />} />

          <Route
            path="/experience"
            element={<Experience />} />

          <Route
            path="/contact"
            element={
              <WebsiteLayout>
                <Contact />
              </WebsiteLayout>
            }
          />

        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;

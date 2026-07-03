import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Loader from "./components/Loader/Loader";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";

import JewelleryProject from "./project-details/JewelleryProject";
import NewsProject from "./project-details/NewsProject";
import AgricultureProject from "./project-details/AgricultureProject";
import PortfolioProject from "./project-details/PortfolioProject";

function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <ScrollToTop />
      <Footer />
    </>
  );
}

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;

  }

  return (

    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/jewellery-project"
        element={<JewelleryProject />}
      />

      <Route
        path="/news-project"
        element={<NewsProject />}
      />

      <Route
        path="/agriculture-project"
        element={<AgricultureProject />}
      />

      <Route
        path="/portfolio-project"
        element={<PortfolioProject />}
      />

    </Routes>

  );
}

export default App;
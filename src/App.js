import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import React, { useState } from "react";
import Loader from "./Loader"; // our grid loader
import "./App.css";

import Home from "./Home";
import EnquirySection from "./EnquirySection";
import ListedProjects from "./ListedProjects";

// Lazy load pages
const Elan = lazy(() => import("./PLP/Elan"));
const FilterPopup = lazy(() => import("./FilterPopup"));
const Trump = lazy(() => import("./Trump_plp/Trump"));
const ElanEmperor = lazy(() => import("./ElanEmperor/ElanEmperor"));
const M3mAltitude = lazy(() => import("./Altitude/M3mAltitude"));
const Cloverdale = lazy(() => import("./Cloverdale/Cloverdale"));
const AiplPeacefullHome = lazy(() => import("./aiplPeacefullHome/AiplPeacefullHome"));
const About = lazy(() => import("./About/About"));
const Blogs = lazy(() => import("./Blog/Blogs"));
const BlogPage = lazy(() => import("./Blog/components/Blogpage"));
const Footer = lazy(() => import("./Footer"));

// Scroll reset on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elanpresidential" element={<Elan />} />
        <Route path="/trumptower" element={<Trump />} />
        <Route path="/elanemperor" element={<ElanEmperor />} />
        <Route path="/m3maltitude" element={<M3mAltitude />} />
        <Route path="/cloverdale" element={<Cloverdale />} />
        <Route path="/aiplpeacefullhome" element={<AiplPeacefullHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/projects" element={<ListedProjects />} />
        <Route path="/filter" element={<FilterPopup />} />
      </Routes>
    </Suspense>
  );
}

// Route all here
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading for 3s (replace with real API loading if needed)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show full-page loader before app loads
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Layout />
      <EnquirySection />
      <Footer />
    </Router>
  );
}

export default App;

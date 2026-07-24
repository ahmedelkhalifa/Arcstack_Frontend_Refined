import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import ScrollToTop from "./components/utils/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Work from "./pages/Work";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

/**
 * Router-agnostic route tree, so the prerender can mount it inside a
 * StaticRouter while the browser mounts it inside a BrowserRouter.
 */
export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<Thanks />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;

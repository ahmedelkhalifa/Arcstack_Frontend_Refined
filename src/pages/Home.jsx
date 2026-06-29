import { Box, Container } from "@mui/material";
import React from "react";
import Nav from "../components/general/Nav";
import Hero from "../components/home/Hero";
import FeaturesPaper from "../components/general/FeaturesPaper";
import { useTranslation } from "react-i18next";
import ProjectsPaper from "../components/projects/ProjectsPaper";
import ServicesPaper from "../components/services/ServicesPaper";
import Process from "../components/general/Process";
import Testomonials from "../components/general/Testimonials";
import CTABar from "../components/general/CTABar";
import Footer from "../components/general/Footer";
import PageHelmet from "../components/general/PageHelmet";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ArcStack",
  "url": "https://arcstack.online",
  "logo": "https://arcstack.online/og-image.png",
  "image": "https://arcstack.online/og-image.png",
  "description": "Web design and development agency in North Cyprus building websites, ecommerce stores, and business systems.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "North Cyprus",
    "addressCountry": "CY"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+905391330540",
    "contactType": "customer service",
    "availableLanguage": ["English", "Turkish"]
  },
  "sameAs": [
    "https://www.instagram.com/arcstack.dev"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Sa 10:00-19:00"
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <PageHelmet
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        canonical="/"
        jsonLd={localBusinessJsonLd}
      />
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav active={"home"} />
        <Hero />
      </Box>
      <FeaturesPaper />
      <Container maxWidth="xl" sx={{ py: "100px", px: { xs: 3, md: 6, lg: 8 } }}>
        <ProjectsPaper />
        <Box sx={{ pb: "100px" }} />
        <ServicesPaper />
      </Container>
      <Process />
      <Container maxWidth="xl" sx={{ py: "100px", px: { xs: 3, md: 6, lg: 8 } }}>
        <Testomonials />
        <Box sx={{ pb: "100px" }} />
        <CTABar />
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;

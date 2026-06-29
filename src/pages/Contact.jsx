import { Box, Container } from "@mui/material";
import React from "react";
import Nav from "../components/general/Nav";
import { useTranslation } from "react-i18next";
import Hero from "../components/general/Hero";
import image from "../assets/about_hero.webp";
import ContactForm from "../components/contact/ContactForm";
import CTABar from "../components/general/CTABar";
import Footer from "../components/general/Footer";
import PageHelmet from "../components/general/PageHelmet";

const Contact = () => {
  const { t } = useTranslation("contactPage");

  return (
    <>
      <PageHelmet
        title={t("seo.title")}
        description={t("seo.description")}
        canonical="/contact"
      />
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav active="contact" />
        <Hero
          image={image}
          badge={t("hero.badge")}
          title={t("hero.title.line1")}
          title2={t("hero.title.line2")}
          description={t("hero.description")}
        />
      </Box>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: "100px" }}>
        <ContactForm />
        <Box sx={{ mb: 4 }} />
        <CTABar />
      </Container>
      <Footer />
    </>
  );
};

export default Contact;

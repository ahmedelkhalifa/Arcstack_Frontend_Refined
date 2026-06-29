import { Box, Container } from "@mui/material";
import React from "react";
import Nav from "../components/general/Nav";
import Hero from "../components/general/Hero";
import { useTranslation } from "react-i18next";
import image from "../assets/about_hero.webp";
import Philosophy from "../components/general/Philosophy";
import Process from "../components/general/Process";
import CTABar from "../components/general/CTABar";
import Footer from "../components/general/Footer";
import WhatWeDo from "../components/about/WhatWeDo";
import WhatWeBelieve from "../components/about/WhatWeBelieve";
import PageHelmet from "../components/general/PageHelmet";

const About = () => {
  const { t } = useTranslation("aboutPage");

  return (
    <>
      <PageHelmet
        title={t("seo.title")}
        description={t("seo.description")}
        canonical="/about"
      />
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav active={"about"} />
        <Hero
          image={image}
          badge={t("hero.badge")}
          title={t("hero.title.line1")}
          title2={t("hero.title.line2")}
          description={t("hero.description")}
        />
      </Box>
      <Philosophy />
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, my: "100px" }}>
        <WhatWeBelieve />
        <Box sx={{ mb: 4 }} />
        <WhatWeDo />
      </Container>
      <Box sx={{ mb: 4 }} />
      <Process />
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, my: "100px" }}>
        <CTABar />
      </Container>
      <Footer />
    </>
  );
};

export default About;

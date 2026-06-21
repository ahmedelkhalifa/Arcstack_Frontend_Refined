import React from "react";
import Hero from "../components/general/Hero";
import Nav from "../components/general/Nav";
import { Box } from "@mui/material";
import hero from "../assets/services_hero.webp"
import { useTranslation } from "react-i18next";
const Services = () => {
    const {t} = useTranslation();
  return (
    <>
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav active={"services"} />
        <Hero 
        image={hero}
        badge={t("servicesPage.hero.badge")}
        title={t("servicesPage.hero.title.line1")}
        title2={t("servicesPage.hero.title.line2")}
        description={t("servicesPage.hero.description")}/>
      </Box>
    </>
  );
};

export default Services;

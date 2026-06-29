import React from "react";
import Hero from "../components/general/Hero";
import Nav from "../components/general/Nav";
import { Box, Container } from "@mui/material";
import hero from "../assets/services_hero.webp";
import business from "../assets/services/Business.webp";
import commerce from "../assets/services/E-commerce.webp";
import management from "../assets/services/management.webp";
import custom from "../assets/services/Custom.webp";
import { useTranslation } from "react-i18next";
import ServiceHorizontal from "../components/services/ServiceHorizontal";
import CTABar from "../components/general/CTABar";
import Footer from "../components/general/Footer";
import PageHelmet from "../components/general/PageHelmet";

const Services = () => {
  const { t } = useTranslation();
  const services = t("servicesPage.services", { returnObjects: true });

  return (
    <>
      <PageHelmet
        title={t("seo.services.title")}
        description={t("seo.services.description")}
        canonical="/services"
      />
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav active={"services"} />
        <Hero
          image={hero}
          badge={t("servicesPage.hero.badge")}
          title={t("servicesPage.hero.title.line1")}
          title2={t("servicesPage.hero.title.line2")}
          description={t("servicesPage.hero.description")}
        />
      </Box>
      <Box sx={{ width: "100%", bgcolor: "background.paper", py: 5 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
          <ServiceHorizontal
            image={business}
            number={services[0].number}
            title={services[0].title}
            description={services[0].description}
            subtitle={services[0].subtitle}
            items={services[0].items}
            cta={services[0].cta}
            slug={services[0].slug}
            variant={"row"}
          />
          <Box sx={{ my: 2 }} />
          <ServiceHorizontal
            image={commerce}
            number={services[1].number}
            title={services[1].title}
            description={services[1].description}
            subtitle={services[1].subtitle}
            items={services[1].items}
            cta={services[1].cta}
            slug={services[1].slug}
            variant={"reverse"}
          />
          <Box sx={{ my: 2 }} />
          <ServiceHorizontal
            image={management}
            number={services[2].number}
            title={services[2].title}
            description={services[2].description}
            subtitle={services[2].subtitle}
            items={services[2].items}
            cta={services[2].cta}
            slug={services[2].slug}
            variant={"row"}
          />
          <Box sx={{ my: 2 }} />
          <ServiceHorizontal
            image={custom}
            number={services[3].number}
            title={services[3].title}
            description={services[3].description}
            subtitle={services[3].subtitle}
            items={services[3].items}
            cta={services[3].cta}
            slug={services[3].slug}
            variant={"reverse"}
          />
          <Box sx={{ my: 2 }} />
          <CTABar />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Services;

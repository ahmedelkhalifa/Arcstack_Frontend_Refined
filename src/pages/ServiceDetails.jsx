import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import Nav from "../components/general/Nav";
import Hero from "../components/general/Hero";
import { getServiceData } from "../components/serviceDetails/getServiceData";
import { slugMap } from "../data/slugMap";
import { slugLangMap } from "../data/slugLangMap";
import WhatWeBuild from "../components/serviceDetails/WhatWeBuild";
import ProjectsOverview from "../components/serviceDetails/ProjectsOverview";
import WhatsIncluded from "../components/serviceDetails/WhatsIncluded";
import Process from "../components/general/Process";
import CTABar from "../components/general/CTABar";
import Footer from "../components/general/Footer";
import PageHelmet from "../components/general/PageHelmet";

// Build a lookup: serviceId -> { en: slug, tr: slug }
const buildAlternateSlugs = () => {
  const map = {};
  Object.entries(slugMap).forEach(([slug, id]) => {
    const lang = slugLangMap[slug];
    if (!map[id]) map[id] = {};
    map[id][lang] = `/services/${slug}`;
  });
  return map;
};
const alternateSlugsById = buildAlternateSlugs();

const ServiceDetails = () => {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        setLoading(true);
        const serviceId = slugMap[slug];
        const detectedLang = slugLangMap[slug];

        if (!serviceId || !detectedLang) {
          setService(null);
          return;
        }

        if (detectedLang !== i18n.language) {
          await i18n.changeLanguage(detectedLang);
        }

        const data = await getServiceData(detectedLang, serviceId);
        setService(data);
      } catch (error) {
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [slug]);

  useEffect(() => {
    const serviceId = slugMap[slug];
    if (!serviceId) return;

    const newSlug = Object.entries(slugMap).find(
      ([s, id]) => id === serviceId && slugLangMap[s] === i18n.language,
    )?.[0];

    if (newSlug && newSlug !== slug) {
      navigate(`/services/${newSlug}`, { replace: true });
    }
  }, [i18n.language]);

  if (loading) {
    return (
      <Box>
        <Nav active="services" />
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, py: 20, textAlign: "center" }}>
          <Typography variant="h5">Loading...</Typography>
        </Container>
      </Box>
    );
  }

  if (!service) {
    return (
      <Box>
        <Nav active="services" />
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, py: 20, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Service not found</Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            The service you're looking for doesn't exist.
          </Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  const serviceId = slugMap[slug];
  const alternateSlugs = alternateSlugsById[serviceId] || null;
  const seoTitle = `${service.hero.title} in North Cyprus — ArcStack`;
  const seoDescription = service.hero.content || service.hero.description || "";

  return (
    <>
      <PageHelmet
        title={seoTitle}
        description={seoDescription}
        canonical={`/services/${slug}`}
        alternateSlugs={alternateSlugs}
      />
      <Box sx={{ height: { xs: "fit-content", md: "100vh" } }}>
        <Nav active="services" />
        <Hero
          image={service.hero.image.src}
          badge={service.hero.badge}
          title={service.hero.title}
          title2={service.hero.description}
          description={service.hero.content}
          type={"details"}
        />
      </Box>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Box sx={{ pb: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "secondary.main", textAlign: "center", mb: 3 }}
          >
            {service.portfolio.title}
          </Typography>
          <ProjectsOverview projects={service.portfolio.projects} />
        </Box>
        <WhatsIncluded content={service} />
        <Box sx={{ pb: "100px" }} />
      </Container>
      <Process />
      <Box sx={{ pb: "100px" }} />
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: "100px" }}>
        <WhatWeBuild service={service.whatWeBuild} />
        <Box sx={{ pb: 4 }} />
        <CTABar />
      </Container>
      <Footer />
    </>
  );
};

export default ServiceDetails;
